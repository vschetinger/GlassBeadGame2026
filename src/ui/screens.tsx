import { useEffect, useMemo, useRef, useState } from 'react';
import type { Catalog, LastPlay, MotifRecord, Profile, RunState } from '../types';
import { attackableRegionIds, rewardOptions } from '../game';
import { authoredDefault as DEFAULT_CONFIG } from '../balance/load';
import { chipValue } from '../games/load';
import { allocationError, earnedPoints, spentPoints } from '../progression';
import { guideContent } from '../guide/load';
import { faceLabel, imageUrl, shortRank, suitMark } from './format';
import { TermTip } from './Term';

function FaceIndex(props: { motif: MotifRecord }) {
  const motif = props.motif;
  return (
    <span className="face-index" aria-hidden="true">
      <span className="face-rank">{shortRank(motif.rank)}</span>
      {motif.wild ? (
        <span className="wild-suits">
          <span className="cups">♥</span>
          <span className="pentacles">♦</span>
          <span className="swords">♠</span>
          <span className="wands">♣</span>
        </span>
      ) : (
        <span className={`face-suit ${motif.suit?.toLowerCase()}`}>{suitMark(motif.suit ?? 'Cups')}</span>
      )}
    </span>
  );
}

export function MotifCard(props: {
  catalog: Catalog;
  motifId: string;
  profile: Profile;
  selected?: boolean;
  conceal?: boolean;
  hot?: boolean;
  dim?: boolean;
  pop?: number;
  onClick?: () => void;
}) {
  const motif = props.catalog.motifs[props.catalog.motifIndex.get(props.motifId)!];
  const known = props.profile.discoveredMotifIds.includes(props.motifId);
  if (!motif) return null;
  const showFace = known && !props.conceal;
  const className = ['card', props.selected ? 'selected' : '', props.hot ? 'hot' : '', props.dim ? 'dim' : '']
    .filter(Boolean)
    .join(' ');
  return (
    <button
      type="button"
      className={className}
      onClick={props.onClick}
      aria-pressed={props.onClick ? props.selected : undefined}
      tabIndex={props.onClick ? undefined : -1}
      aria-label={showFace ? `${motif.name}, ${faceLabel(motif)}, ${motif.tarotName}` : motif.name}
    >
      <span className="art">
        <img src={imageUrl(props.catalog.imageBase, motif.image)} alt="" loading="lazy" />
        {showFace && <FaceIndex motif={motif} />}
        {!showFace && <RankSeal profile={props.profile} />}
        {props.pop != null && <span className="chip-pop">+{props.pop}</span>}
      </span>
      <span className="card-copy">
        <strong>{motif.name}</strong>
        <small>{showFace ? motif.tarotName : 'Identity hidden'}</small>
      </span>
    </button>
  );
}

function RankSeal(props: { profile: Profile }) {
  const known = new Set(props.profile.guide?.known ?? []);
  const note = guideContent.notes.find((item) => item.bind === 'seal' && known.has(item.id));
  if (!note) return <span className="seal" aria-hidden="true">?</span>;
  return <TermTip className="seal" title={note.title} body={note.body}>?</TermTip>;
}

export function HomeScreen(props: {
  canContinue: boolean;
  onContinue: () => void;
  onNew: (preset: 'full' | 'short') => void;
}) {
  return (
    <section className="home">
      <p className="lede">
        A run begins with a small deck from the land you already hold. You are dealt as many cards as the deck has, up to five, and you play them as poker. Winning a land lets you take one new card from it. Playing a card reveals its rank forever. The deck does not survive the run.
      </p>
      <div className="home-actions" data-hook="start-run">
        {props.canContinue && <button className="primary" data-hook="continue" onClick={props.onContinue}>Continue</button>}
        <button className="primary" data-hook="new-run" onClick={() => props.onNew('full')}>New run</button>
        <button data-hook="short-run" onClick={() => props.onNew('short')}>Short run</button>
      </div>
      <ul className="definitions">
        <li><strong>Encountered</strong> You have seen the picture and the name.</li>
        <li><strong>Discovered</strong> You played the card. Its rank and suit stay known.</li>
        <li><strong>Owned</strong> The card is in this run’s deck, and only this run’s deck.</li>
      </ul>
    </section>
  );
}

export function MapScreen(props: {
  run: RunState;
  catalog: Catalog;
  profile: Profile;
  onInspect: (regionId: string) => void;
  onAttack: (regionId: string) => void;
}) {
  const [selectedId, setSelectedId] = useState(props.run.startRegionId);
  const attackable = new Set(attackableRegionIds(props.run));
  const conquered = new Set(props.run.conqueredRegionIds);
  const regionState = (regionId: string, hopHome: boolean) => {
    if (hopHome) return 'home';
    if (conquered.has(regionId)) return 'conquered';
    if (attackable.has(regionId)) return 'attackable';
    return 'locked';
  };
  const visibleRegions = props.run.regions.filter((region) => regionState(region.id, region.id === props.run.startRegionId) !== 'locked');
  const selected = visibleRegions.find((region) => region.id === selectedId)
    ?? visibleRegions.find((region) => region.id === props.run.startRegionId)
    ?? visibleRegions[0];
  if (!selected) return null;
  const deity = props.catalog.deities[props.catalog.deityIndex.get(selected.deityId)!];
  const points = visibleRegions.flatMap((region) => region.polygon);
  const xs = points.map((point) => point[0]);
  const ys = points.map((point) => point[1]);
  const minX = Math.min(...xs) - 24;
  const minY = Math.min(...ys) - 24;
  const bounds = { minX, minY, width: Math.max(...xs) - minX + 24, height: Math.max(...ys) - minY + 24 };

  return (
    <div className="map-layout">
      <svg className="map" data-hook="map" viewBox={`${bounds.minX} ${bounds.minY} ${bounds.width} ${bounds.height}`} role="img" aria-label="World map">
        {visibleRegions.map((region) => {
          const state = regionState(region.id, region.id === props.run.startRegionId);
          const god = props.catalog.deities[props.catalog.deityIndex.get(region.deityId)!];
          return (
            <g key={region.id}>
              <polygon
                className={`region ${state} ${region.id === selected.id ? 'selected' : ''}`}
                points={region.polygon.map((point) => point.join(',')).join(' ')}
                role="button"
                tabIndex={0}
                aria-label={`${god?.name ?? region.deityId}, hop ${region.hopDistance}, ${state}`}
                onClick={() => {
                  setSelectedId(region.id);
                  props.onInspect(region.id);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelectedId(region.id);
                    props.onInspect(region.id);
                  }
                }}
              />
              <text x={region.centroid[0]} y={region.centroid[1]} textAnchor="middle">
                {god?.name ?? region.deityId}
              </text>
            </g>
          );
        })}
      </svg>
      <aside className="panel">
        <h2>{deity?.name}</h2>
        <p className="meta">{deity?.pantheon} · hop {selected.hopDistance}{selected.targetScore > 0 ? ` · target ${selected.targetScore}` : ''}</p>
        <p>{deity?.description}</p>
        <div className="actions">
          <button
            className="primary"
            data-hook="attack"
            disabled={!attackable.has(selected.id)}
            onClick={() => props.onAttack(selected.id)}
          >
            {conquered.has(selected.id) ? 'Already conquered' : attackable.has(selected.id) ? 'Attack' : 'Beyond the frontier'}
          </button>
        </div>
        <div className="gallery">
          {selected.motifIds.map((id) => (
            <MotifCard key={id} catalog={props.catalog} profile={props.profile} motifId={id} />
          ))}
        </div>
      </aside>
    </div>
  );
}

export function BattleScreen(props: {
  run: RunState;
  catalog: Catalog;
  profile: Profile;
  preview: string | null;
  scoreHold?: number;
  locked?: boolean;
  onToggle: (motifId: string) => void;
  onPlay: () => void;
  onDiscard: () => void;
  onReturn: () => void;
}) {
  const battle = props.run.battle!;
  const deityId = props.run.regions.find((region) => region.id === battle.regionId)?.deityId;
  const deity = deityId ? props.catalog.deities[props.catalog.deityIndex.get(deityId)!] : undefined;
  const lost = battle.status === 'lost';
  return (
    <section>
      <div className="battle-head">
        <div>
          <h2>{deity?.name}</h2>
          <p className="meta">{deity?.description}</p>
        </div>
        <div className="score-readout">
          <div>
            <div className="meta">Score</div>
            <strong>{Math.max(0, battle.accumulatedScore - (props.scoreHold ?? 0))} / {battle.targetScore}</strong>
          </div>
        </div>
      </div>
      <p className="meta">
        Lives {props.run.livesRemaining} · Hands {battle.handsRemaining} · Discards {battle.discardsRemaining}
        · Deck {props.run.deckMotifIds.length}
      </p>
      <div className="hand">
        {battle.visibleHandIds.map((id) => (
          <MotifCard
            key={id}
            catalog={props.catalog}
            profile={props.profile}
            motifId={id}
            selected={battle.selectedIds.includes(id)}
            onClick={() => props.onToggle(id)}
          />
        ))}
      </div>
      <div className="actions">
        {lost ? (
          <button className="primary" onClick={props.onReturn}>Return to map</button>
        ) : (
          <>
            <button className="primary" data-hook="play" disabled={props.locked || battle.selectedIds.length < 1 || battle.handsRemaining < 1} onClick={props.onPlay}>
              Play {battle.selectedIds.length || ''}
            </button>
            <button data-hook="discard" disabled={props.locked || battle.selectedIds.length < 1 || battle.discardsRemaining < 1} onClick={props.onDiscard}>
              Discard
            </button>
          </>
        )}
        {props.preview && <span className="meta">{props.preview}</span>}
      </div>
      {props.run.lastPlay && !props.locked && <PlayBreakdown play={props.run.lastPlay} catalog={props.catalog} />}
    </section>
  );
}

export function PlayBreakdown(props: { play: LastPlay; catalog: Catalog }) {
  const play = props.play;
  if (play.kind === 'discard') return <div className="breakdown">Discarded {play.motifIds.length}. Nothing was revealed.</div>;
  return (
    <div className="breakdown">
      <h2>{play.categoryLabel} · {play.total}</h2>
      <p className="meta">
        ({play.baseChips} hand + {play.cardChips} cards) × {play.multiplier} = {play.pokerSubtotal}
        {play.folkloreBonus ? ` + ${play.folkloreBonus} folklore` : ''}
      </p>
      <ul>
        {(play.folklore ?? []).map((hit) => (
          <li key={hit.textId}>
            {hit.newlyDiscovered ? `Unlocked ${hit.name}` : `${hit.name} +${hit.bonus}`}
            {' '}({hit.resonantCount} resonant)
          </li>
        ))}
        {(play.discoveredMotifIds ?? []).map((id) => {
          const motif = props.catalog.motifs[props.catalog.motifIndex.get(id)!];
          return <li key={id}>Discovered {motif?.name}: {motif ? faceLabel(motif) : id}</li>;
        })}
      </ul>
    </div>
  );
}

interface ScoreFrame {
  phase: 'reveal' | 'tally' | 'product' | 'done';
  chips: number;
  score: number;
  hotId?: string;
  pop?: number;
  caption: string;
}

function scoreFrames(play: LastPlay, catalog: Catalog): ScoreFrame[] {
  const order = new Map(play.motifIds.map((id, index) => [id, index]));
  const scoring = (play.scoringCardIds ?? [])
    .slice()
    .sort((a, b) => (order.get(a) ?? 0) - (order.get(b) ?? 0));
  const frames: ScoreFrame[] = [
    { phase: 'reveal', chips: play.baseChips ?? 0, score: 0, caption: play.categoryLabel ?? '' },
  ];
  let chips = play.baseChips ?? 0;
  frames.push({ phase: 'tally', chips, score: 0, caption: play.categoryLabel ?? '' });
  scoring.forEach((id) => {
    const motif = catalog.motifs[catalog.motifIndex.get(id)!];
    const pop = motif ? chipValue(motif.rank) : 0;
    chips += pop;
    frames.push({ phase: 'tally', chips, score: 0, hotId: id, pop, caption: play.categoryLabel ?? '' });
  });
  if (play.skillChips) {
    chips += play.skillChips;
    frames.push({ phase: 'tally', chips, score: 0, caption: play.skillLabel || `+${play.skillChips}` });
  } else if (play.skillLabel) {
    frames.push({ phase: 'tally', chips, score: 0, caption: play.skillLabel });
  }
  let score = play.pokerSubtotal ?? chips * (play.multiplier ?? 1);
  frames.push({ phase: 'product', chips, score, caption: `${chips} × ${play.multiplier ?? 1}` });
  (play.folklore ?? []).forEach((hit) => {
    if (hit.newlyDiscovered || hit.bonus <= 0) {
      frames.push({ phase: 'product', chips, score, caption: `Unlocked ${hit.name}` });
      return;
    }
    score += hit.bonus;
    frames.push({ phase: 'product', chips, score, pop: hit.bonus, caption: `+${hit.bonus} ${hit.name}` });
  });
  const settledCaption = play.folkloreBonus
    ? `${play.pokerSubtotal ?? score} + ${play.folkloreBonus}`
    : `${chips} × ${play.multiplier ?? 1}`;
  frames.push({ phase: 'done', chips, score: play.total ?? score, caption: settledCaption });
  return frames;
}

export function ScoreCeremony(props: {
  play: LastPlay;
  catalog: Catalog;
  profile: Profile;
  continueLabel: string;
  onDone: () => void;
}) {
  const frames = useMemo(() => scoreFrames(props.play, props.catalog), [props.play, props.catalog]);
  const [index, setIndex] = useState(0);
  const done = useRef(props.onDone);
  done.current = props.onDone;
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setIndex(frames.length - 1);
      return;
    }
    const wait = frames.map((frame) => {
      if (frame.phase === 'reveal') return 900;
      if (frame.phase === 'product' && frame.caption.includes('×')) return 1200;
      return 850;
    });
    let step = 0;
    let timer = 0;
    const advance = () => {
      step += 1;
      setIndex(step);
      if (step >= frames.length - 1) return;
      timer = window.setTimeout(advance, wait[step]);
    };
    timer = window.setTimeout(advance, wait[0]);
    return () => window.clearTimeout(timer);
  }, [frames]);
  const frame = frames[Math.min(index, frames.length - 1)];
  const pops = new Map<string, number>();
  frames.slice(0, index + 1).forEach((item) => {
    if (item.hotId != null && item.pop != null) pops.set(item.hotId, item.pop);
  });
  const fresh = new Set(props.play.discoveredMotifIds ?? []);
  const scoring = new Set(props.play.scoringCardIds ?? []);
  const revealed = frame.phase !== 'reveal';
  const showProduct = frame.phase === 'product' || frame.phase === 'done';
  const settled = index >= frames.length - 1;
  return (
    <div className="ceremony" role="dialog" aria-label="Score">
      <div className="ceremony-stage">
        <p className="ceremony-hand">{revealed ? props.play.categoryLabel : '…'}</p>
        <div className="hand ceremony-hand-row">
          {props.play.motifIds.map((id) => (
            <MotifCard
              key={id}
              catalog={props.catalog}
              profile={props.profile}
              motifId={id}
              conceal={fresh.has(id) && !revealed}
              hot={frame.hotId === id}
              dim={revealed && !scoring.has(id)}
              pop={pops.get(id)}
            />
          ))}
        </div>
        {showProduct ? (
          <div className="product" key={frame.score}>
            <strong>{frame.score}</strong>
          </div>
        ) : (
          <div className="tally-row">
            <div className={`chip-box${frame.phase === 'tally' ? ' live' : ''}`} key={`c${frame.chips}`}>
              <strong>{revealed ? frame.chips : '—'}</strong>
              <span>chips</span>
            </div>
            <div className="times">×</div>
            <div className="mult-box">
              <strong>{revealed ? props.play.multiplier : '—'}</strong>
              <span>mult</span>
            </div>
          </div>
        )}
        <p className="ceremony-beat">{frame.caption !== props.play.categoryLabel ? frame.caption : ''}</p>
        {settled && (
          <button className="primary ceremony-next" autoFocus onClick={() => done.current()}>
            {props.continueLabel}
          </button>
        )}
      </div>
    </div>
  );
}

export function RewardScreen(props: {
  run: RunState;
  catalog: Catalog;
  profile: Profile;
  onAdd: (motifId: string) => void;
  onRemove: (motifId: string) => void;
  onContinue: () => void;
}) {
  const [choice, setChoice] = useState<{ type: 'add' | 'remove'; motifId: string } | null>(null);
  const options = rewardOptions(props.run);
  const adding = (props.run.configSnapshot.deck.reward ?? 'either') === 'add';
  const region = props.run.regions.find((item) => item.id === props.run.pendingRewardRegionId);
  const deity = region ? props.catalog.deities[props.catalog.deityIndex.get(region.deityId)!] : undefined;
  function pick(type: 'add' | 'remove', motifId: string) {
    setChoice((current) => (current?.type === type && current.motifId === motifId ? null : { type, motifId }));
  }
  const confirmLabel = choice?.type === 'remove' ? 'Remove this card' : 'Add this card';
  return (
    <section>
      <h2>{deity?.name} is conquered</h2>
      <p className="lede">
        {adding
          ? 'Choose one new card from this land. It joins the deck. Nothing changes until you confirm.'
          : 'Choose one motif to add from this domain, or one card to remove from your deck. Nothing changes until you confirm.'}
      </p>
      {props.run.lastPlay && <PlayBreakdown play={props.run.lastPlay} catalog={props.catalog} />}
      <div className="split">
        <div>
          <h3>Add</h3>
          <div className="choice-grid">
            {options.addableIds.map((id) => (
              <MotifCard
                key={id}
                catalog={props.catalog}
                profile={props.profile}
                motifId={id}
                selected={choice?.type === 'add' && choice.motifId === id}
                onClick={() => pick('add', id)}
              />
            ))}
          </div>
          {!options.canAdd && <p className="meta">This land has no card you do not already hold.</p>}
        </div>
        {!adding && (
        <div>
          <h3>Remove</h3>
          <div className="choice-grid">
            {options.removableIds.map((id) => (
              <MotifCard
                key={id}
                catalog={props.catalog}
                profile={props.profile}
                motifId={id}
                selected={choice?.type === 'remove' && choice.motifId === id}
                onClick={() => pick('remove', id)}
              />
            ))}
          </div>
          {!options.canRemove && <p className="meta">The deck is at its minimum size.</p>}
        </div>
        )}
      </div>
      {(options.canAdd || options.canRemove) && (
        <div className="reward-confirm">
          <button
            className="primary"
            disabled={!choice}
            onClick={() => {
              if (!choice) return;
              if (choice.type === 'add') props.onAdd(choice.motifId);
              else props.onRemove(choice.motifId);
            }}
          >
            {confirmLabel}
          </button>
        </div>
      )}
      {!options.canAdd && !options.canRemove && (
        <button className="primary" onClick={props.onContinue}>{adding ? 'Continue' : 'Continue without a change'}</button>
      )}
    </section>
  );
}

export function OutcomeScreen(props: { run: RunState; onHome: () => void }) {
  const won = props.run.status === 'won';
  return (
    <section className="narrow">
      <h2>{won ? 'The map is conquered' : 'The run is over'}</h2>
      <p className="lede">
        {won
          ? 'Every region has fallen. The deck is gone. What you learned remains.'
          : `Lives reached zero after ${props.run.handsPlayed} hands. Discoveries stay in the encyclopedia.`}
      </p>
      <button className="primary" onClick={props.onHome}>Return home</button>
    </section>
  );
}

export function DeckScreen(props: { run: RunState; catalog: Catalog; profile: Profile }) {
  const battle = props.run.battle;
  const placeOf = (motifId: string) => {
    if (!battle) return null;
    if (battle.visibleHandIds.includes(motifId)) return 'In hand';
    if (battle.drawPileIds.includes(motifId)) return 'Draw pile';
    if (battle.discardPileIds.includes(motifId)) return 'Discarded';
    if (battle.playedPileIds.includes(motifId)) return 'Played';
    return null;
  };
  return (
    <section>
      <h2>Deck</h2>
      <p className="meta">{props.run.deckMotifIds.length} cards. A rank appears after the card is played.</p>
      <div className="catalog-grid">
        {props.run.deckMotifIds.map((id) => {
          const place = placeOf(id);
          return (
            <div key={id} className="deck-slot">
              <MotifCard catalog={props.catalog} profile={props.profile} motifId={id} />
              {place && <p className="meta">{place}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function EncyclopediaScreen(props: { catalog: Catalog; profile: Profile }) {
  const [tab, setTab] = useState<'motifs' | 'texts'>('motifs');
  const [query, setQuery] = useState('');
  const needle = query.trim().toLowerCase();
  const seenCount = props.catalog.motifs.filter((motif) => props.profile.encounteredMotifIds.includes(motif.id) || props.profile.discoveredMotifIds.includes(motif.id)).length;
  const motifs = props.catalog.motifs.filter((motif) => {
    const seen = props.profile.encounteredMotifIds.includes(motif.id) || props.profile.discoveredMotifIds.includes(motif.id);
    if (!seen) return false;
    if (!needle) return true;
    return motif.name.toLowerCase().includes(needle);
  });
  const texts = props.catalog.texts.filter((text) => props.profile.discoveredTextIds.includes(text.id));
  return (
    <section>
      <div className="tabs">
        <button className={tab === 'motifs' ? 'primary' : ''} onClick={() => setTab('motifs')}>Motifs</button>
        <button className={tab === 'texts' ? 'primary' : ''} onClick={() => setTab('texts')}>Texts</button>
      </div>
      {tab === 'motifs' ? (
        <>
          <div className="row">
            <label>Search<input value={query} onChange={(event) => setQuery(event.target.value)} /></label>
          </div>
          <p className="meta">{props.profile.discoveredMotifIds.length} discovered · {seenCount} encountered</p>
          <div className="catalog-grid">
            {motifs.map((motif) => (
              <MotifCard key={motif.id} catalog={props.catalog} profile={props.profile} motifId={motif.id} />
            ))}
          </div>
        </>
      ) : (
        <div>
          <p className="meta">{texts.length} texts in the library.</p>
          {texts.map((text) => (
            <article className="panel" key={text.id}>
              <h2>{text.name}</h2>
              <p className="meta">{text.provenance} · {text.source}</p>
              <p>{text.description}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export function ProgressionScreen(props: {
  profile: Profile;
  locked: boolean;
  onSave: (allocation: Profile['upgradeAllocation']) => void;
  onReset: () => void;
  onExport: () => void;
  onImport: (raw: string) => void;
}) {
  const [allocation, setAllocation] = useState(props.profile.upgradeAllocation);
  const points = earnedPoints(props.profile.discoveredMotifIds.length, DEFAULT_CONFIG.progression.pointThresholds);
  const spent = spentPoints(allocation, DEFAULT_CONFIG);
  const error = allocationError(allocation, props.profile.discoveredMotifIds.length, DEFAULT_CONFIG);
  return (
    <section className="narrow">
      <h2>Progression</h2>
      <p className="meta">{props.profile.discoveredMotifIds.length} discovered motifs · {points} points · {points - spent} unspent</p>
      {props.locked && <p className="warning">A run is in progress. This build changes the next run.</p>}
      {(['hands', 'discards', 'lives'] as const).map((key) => (
        <div className="row" key={key}>
          <strong>{key}</strong>
          <button onClick={() => setAllocation((current) => ({ ...current, [key]: Math.max(0, current[key] - 1) }))}>-</button>
          <span>{allocation[key]}</span>
          <button onClick={() => setAllocation((current) => ({ ...current, [key]: current[key] + 1 }))}>+</button>
        </div>
      ))}
      <div className="actions">
        <button className="primary" disabled={Boolean(error)} onClick={() => props.onSave(allocation)}>Save build</button>
        <button onClick={props.onExport}>Export save</button>
        <label>
          Import
          <input
            type="file"
            accept="application/json"
            onChange={async (event) => {
              const file = event.target.files?.[0];
              if (!file) return;
              props.onImport(await file.text());
            }}
          />
        </label>
        <button onClick={props.onReset}>Reset profile</button>
      </div>
      {error && <p className="warning">{error}</p>}
      <p className="meta">Hands cost 2, up to +2. Discards cost 1, up to +3. Lives cost 3, up to +2. Points arrive at 10, 25, 50, 75, 100, 150, and 200 discoveries.</p>
    </section>
  );
}
