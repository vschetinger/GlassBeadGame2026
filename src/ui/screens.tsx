import { useEffect, useMemo, useRef, useState } from 'react';
import type { Catalog, LastPlay, MotifRecord, Profile, RunState } from '../types';
import { attackableRegionIds, rewardOptions } from '../game';
import { DEFAULT_CONFIG } from '../config';
import { chipsForRank } from '../poker';
import { allocationError, earnedPoints, spentPoints } from '../progression';
import { faceLabel, imageUrl, shortRank, suitMark } from './format';

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
        {!showFace && <span className="seal" aria-hidden="true">?</span>}
        {props.hot && props.pop != null && <span className="chip-pop">+{props.pop}</span>}
      </span>
      <span className="card-copy">
        <strong>{motif.name}</strong>
        <small>{showFace ? motif.tarotName : 'Identity hidden'}</small>
      </span>
    </button>
  );
}

export function HomeScreen(props: {
  seed: string;
  canContinue: boolean;
  onSeed: (seed: string) => void;
  onContinue: () => void;
  onNew: (preset: 'full' | 'short') => void;
}) {
  return (
    <section className="home">
      <p className="lede">
        A seed draws two hundred folklore motifs and twenty deities. You conquer the neighboring gods with poker hands. Playing a card reveals its Tarot face forever. The deck itself does not survive the run.
      </p>
      <div className="home-actions">
        {props.canContinue && <button className="primary" onClick={props.onContinue}>Continue</button>}
        <label>
          Seed
          <input value={props.seed} onChange={(event) => props.onSeed(event.target.value)} />
        </label>
        <button className="primary" onClick={() => props.onNew('full')}>New run</button>
        <button onClick={() => props.onNew('short')}>Short run</button>
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
  const selected = props.run.regions.find((region) => region.id === selectedId) ?? props.run.regions[0];
  const deity = props.catalog.deities[props.catalog.deityIndex.get(selected.deityId)!];
  const bounds = useMemo(() => {
    const points = props.run.regions.flatMap((region) => region.polygon);
    const xs = points.map((point) => point[0]);
    const ys = points.map((point) => point[1]);
    const minX = Math.min(...xs) - 24;
    const minY = Math.min(...ys) - 24;
    return { minX, minY, width: Math.max(...xs) - minX + 24, height: Math.max(...ys) - minY + 24 };
  }, [props.run.regions]);

  return (
    <div className="map-layout">
      <svg className="map" viewBox={`${bounds.minX} ${bounds.minY} ${bounds.width} ${bounds.height}`} role="img" aria-label="World map">
        {props.run.regions.map((region) => {
          const state = region.id === props.run.startRegionId
            ? 'home'
            : conquered.has(region.id)
              ? 'conquered'
              : attackable.has(region.id)
                ? 'attackable'
                : 'locked';
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
        <p className="meta">{deity?.pantheon} · hop {selected.hopDistance} · {selected.motifIds.length} motifs · target {selected.targetScore}</p>
        <p>{deity?.description}</p>
        <div className="gallery">
          {selected.motifIds.map((id) => (
            <MotifCard key={id} catalog={props.catalog} profile={props.profile} motifId={id} />
          ))}
        </div>
        <div className="actions">
          <button
            className="primary"
            disabled={!attackable.has(selected.id)}
            onClick={() => props.onAttack(selected.id)}
          >
            {conquered.has(selected.id) ? 'Already conquered' : attackable.has(selected.id) ? 'Attack' : 'Beyond the frontier'}
          </button>
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
            <button className="primary" disabled={props.locked || battle.selectedIds.length < 1 || battle.handsRemaining < 1} onClick={props.onPlay}>
              Play {battle.selectedIds.length || ''}
            </button>
            <button disabled={props.locked || battle.selectedIds.length < 1 || battle.discardsRemaining < 1} onClick={props.onDiscard}>
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
    const pop = motif ? chipsForRank(motif.rank) : 0;
    chips += pop;
    frames.push({ phase: 'tally', chips, score: 0, hotId: id, pop, caption: play.categoryLabel ?? '' });
  });
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
  frames.push({ phase: 'done', chips, score: play.total ?? score, caption: play.categoryLabel ?? '' });
  return frames;
}

export function ScoreCeremony(props: { play: LastPlay; catalog: Catalog; profile: Profile; onDone: () => void }) {
  const frames = useMemo(() => scoreFrames(props.play, props.catalog), [props.play, props.catalog]);
  const [index, setIndex] = useState(0);
  const done = useRef(props.onDone);
  done.current = props.onDone;
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setIndex(frames.length - 1);
      const timer = window.setTimeout(() => done.current(), 700);
      return () => window.clearTimeout(timer);
    }
    const wait = frames.map((frame) => {
      if (frame.phase === 'reveal') return 560;
      if (frame.phase === 'product' && frame.caption.includes('×')) return 680;
      if (frame.phase === 'done') return 820;
      return 380;
    });
    let step = 0;
    let timer = 0;
    const advance = () => {
      step += 1;
      if (step >= frames.length) {
        timer = window.setTimeout(() => done.current(), 280);
        return;
      }
      setIndex(step);
      timer = window.setTimeout(advance, wait[step]);
    };
    timer = window.setTimeout(advance, wait[0]);
    return () => window.clearTimeout(timer);
  }, [frames]);
  const frame = frames[Math.min(index, frames.length - 1)];
  const fresh = new Set(props.play.discoveredMotifIds ?? []);
  const scoring = new Set(props.play.scoringCardIds ?? []);
  const revealed = frame.phase !== 'reveal';
  const showProduct = frame.phase === 'product' || frame.phase === 'done';
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
              pop={frame.hotId === id ? frame.pop : undefined}
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
  const options = rewardOptions(props.run);
  const region = props.run.regions.find((item) => item.id === props.run.pendingRewardRegionId);
  const deity = region ? props.catalog.deities[props.catalog.deityIndex.get(region.deityId)!] : undefined;
  return (
    <section>
      <h2>{deity?.name} is conquered</h2>
      <p className="lede">Add one motif from this domain, or remove one card from your deck.</p>
      {props.run.lastPlay && <PlayBreakdown play={props.run.lastPlay} catalog={props.catalog} />}
      <div className="split">
        <div>
          <h3>Add</h3>
          <div className="choice-grid">
            {options.addableIds.map((id) => (
              <MotifCard key={id} catalog={props.catalog} profile={props.profile} motifId={id} onClick={() => props.onAdd(id)} />
            ))}
          </div>
          {!options.canAdd && <p className="meta">Every motif from this domain is already in the deck.</p>}
        </div>
        <div>
          <h3>Remove</h3>
          <div className="choice-grid">
            {options.removableIds.map((id) => (
              <MotifCard key={id} catalog={props.catalog} profile={props.profile} motifId={id} onClick={() => props.onRemove(id)} />
            ))}
          </div>
          {!options.canRemove && <p className="meta">The deck is at its minimum size.</p>}
        </div>
      </div>
      {!options.canAdd && !options.canRemove && (
        <button className="primary" onClick={props.onContinue}>Continue without a change</button>
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

export function EncyclopediaScreen(props: { catalog: Catalog; profile: Profile }) {
  const [tab, setTab] = useState<'motifs' | 'texts'>('motifs');
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const needle = query.trim().toLowerCase();
  const motifs = props.catalog.motifs.filter((motif) => {
    const seen = props.profile.encounteredMotifIds.includes(motif.id) || props.profile.discoveredMotifIds.includes(motif.id);
    if (!showAll && !seen) return false;
    if (!needle) return true;
    return motif.name.toLowerCase().includes(needle) || motif.id.toLowerCase().includes(needle);
  }).slice(0, 80);
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
            <button onClick={() => setShowAll((value) => !value)}>{showAll ? 'Showing catalog' : 'Showing encountered'}</button>
          </div>
          <p className="meta">{props.profile.discoveredMotifIds.length} discovered of {props.catalog.motifs.length}</p>
          <div className="catalog-grid">
            {motifs.map((motif) => (
              <MotifCard key={motif.id} catalog={props.catalog} profile={props.profile} motifId={motif.id} />
            ))}
          </div>
        </>
      ) : (
        <div>
          <p className="meta">{texts.length} unlocked of {props.catalog.texts.length}. Resonance threshold {props.catalog.textThreshold.toFixed(3)}.</p>
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
