import { useEffect, useRef, useState } from 'react';
import { authoredDefault as DEFAULT_CONFIG, authoredShort as SHORT_RUN_CONFIG } from './balance/load';
import {
  beginBattle,
  commitDiscard,
  commitPlay,
  selectAll,
  createRun,
  inspectRegion,
  previewPlay,
  resolveReward,
  returnToMap,
  toggleSelect,
} from './game';
import { countersFrom } from './guide/counters';
import { guideContent } from './guide/load';
import { learnedIds } from './guide/parse';
import { togglePower } from './guide/skills';
import { present } from './guide/walk';
import { loadGameData } from './loadData';
import { exportSave, loadProfile, loadRun, saveProfile, saveRun } from './persistence';
import { emptyProfile, reconcileProfile } from './progression';
import type { BalanceConfig, Catalog, GuideMemory, LastPlay, Profile, RunState, SimilarityTables, UpgradeAllocation } from './types';
import {
  BattleScreen,
  DeckScreen,
  EncyclopediaScreen,
  HomeScreen,
  MapScreen,
  OutcomeScreen,
  ProgressionScreen,
  RewardScreen,
  ScoreCeremony,
} from './ui/screens';
import { GuideOverlay } from './ui/Guide';

type View = 'auto' | 'home' | 'encyclopedia' | 'progression' | 'deck';

function screenFor(view: View, run: RunState | null): View | 'map' | 'battle' | 'reward' | 'outcome' {
  if (view === 'deck' && !run) return 'home';
  if (view === 'encyclopedia' || view === 'progression' || view === 'home' || view === 'deck') return view;
  if (!run) return 'home';
  if (run.status === 'won' || run.status === 'lost') return 'outcome';
  if (run.pendingRewardRegionId) return 'reward';
  if (run.battle) return 'battle';
  return 'map';
}

export function App() {
  const [catalog, setCatalog] = useState<Catalog | null>(null);
  const [tables, setTables] = useState<SimilarityTables | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [run, setRun] = useState<RunState | null>(null);
  const [view, setView] = useState<View>('home');
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [ceremony, setCeremony] = useState<LastPlay | null>(null);
  const [confirmWipe, setConfirmWipe] = useState(false);
  const lock = useRef(false);
  const seenPlay = useRef<number | null>(null);
  const hydrated = useRef(false);

  useEffect(() => {
    let cancel = false;
    loadGameData()
      .then(async (loaded) => {
        if (cancel) return;
        const savedProfile = await loadProfile();
        const savedRun = await loadRun();
        const nextProfile = reconcileProfile(
          savedProfile ?? emptyProfile(loaded.catalog.catalogVersion),
          DEFAULT_CONFIG,
          (id) => loaded.catalog.motifIndex.has(id),
          (id) => loaded.catalog.textIndex.has(id),
          loaded.catalog.catalogVersion,
        );
        setCatalog(loaded.catalog);
        setTables(loaded.tables);
        setProfile(nextProfile);
        if (savedRun && savedRun.catalogVersion === loaded.catalog.catalogVersion) setRun(savedRun);
      })
      .catch((reason: unknown) => {
        if (!cancel) setError(reason instanceof Error ? reason.message : 'The catalog failed to load.');
      });
    return () => { cancel = true; };
  }, []);

  function commit(next: { run: RunState | null; profile: Profile }) {
    const stamp = next.run?.lastPlay?.kind === 'play' ? next.run.lastPlay.stamp : undefined;
    if (hydrated.current && stamp != null && stamp !== seenPlay.current && next.run?.lastPlay) {
      seenPlay.current = stamp;
      setCeremony(next.run.lastPlay);
    }
    setRun(next.run);
    setProfile(next.profile);
    void Promise.all([saveRun(next.run), saveProfile(next.profile)]).finally(() => { lock.current = false; });
  }

  function act(change: () => { run: RunState | null; profile: Profile }) {
    if (lock.current || !profile) return;
    lock.current = true;
    try {
      commit(change());
    } catch (reason) {
      lock.current = false;
      setError(reason instanceof Error ? reason.message : 'That action failed.');
    }
  }

  function wipeLibrary() {
    if (!catalog) return;
    setCeremony(null);
    setConfirmWipe(false);
    commit({ run: null, profile: emptyProfile(catalog.catalogVersion) });
    setView('home');
  }

  function start(config: BalanceConfig) {
    if (!catalog || !tables || !profile || lock.current) return;
    setError(null);
    setStatus('Casting the world…');
    window.setTimeout(() => {
      const seed = crypto.randomUUID();
      act(() => createRun(seed, config, profile, catalog, tables));
      setStatus(null);
      setView('auto');
    }, 40);
  }

  const screen = screenFor(view, run);
  const guideView = profile
    ? present(guideContent.notes, profile.guide?.beat ?? 'start', countersFrom(profile, run), profile.guide?.dismissed ?? [])
    : null;
  const guideBlocksKeys = guideView?.stage?.show === 'dialog' || guideView?.stage?.show === 'page';

  function writeGuide(guide: GuideMemory) {
    if (!profile) return;
    const settled = present(guideContent.notes, guide.beat, countersFrom(profile, run), guide.dismissed);
    const next = {
      ...profile,
      guide: {
        beat: settled.beat,
        dismissed: guide.dismissed,
        known: guide.known ?? [],
        off: guide.off ?? [],
      },
    };
    setProfile(next);
    void saveProfile(next);
  }

  function rememberGuide(to: string, leaveCurrent: boolean) {
    if (!profile || !guideView) return;
    const dismissed = profile.guide?.dismissed ?? [];
    const nextDismissed = leaveCurrent && !dismissed.includes(guideView.beat)
      ? [...dismissed, guideView.beat]
      : dismissed;
    const current = guideContent.notes.find((note) => note.id === guideView.beat);
    const known = leaveCurrent ? learnedIds(current, profile.guide?.known ?? []) : (profile.guide?.known ?? []);
    writeGuide({ beat: to, dismissed: nextDismissed, known, off: profile.guide?.off ?? [] });
  }

  function closeGuide() {
    if (!profile || !guideView?.stage) return;
    const dismissed = profile.guide?.dismissed ?? [];
    const beat = guideView.beat;
    const nextDismissed = dismissed.includes(beat) ? dismissed : [...dismissed, beat];
    const retreat = guideView.choices.some((choice) => choice.to === 'playing');
    writeGuide({
      beat: retreat ? 'playing' : beat,
      dismissed: nextDismissed,
      known: profile.guide?.known ?? [],
      off: profile.guide?.off ?? [],
    });
  }

  function toggleRunPower(id: string) {
    if (!run) return;
    const next = togglePower(run, id);
    setRun(next);
    void saveRun(next);
  }

  function toggleSkill(id: string) {
    if (!profile) return;
    const off = profile.guide?.off ?? [];
    writeGuide({
      beat: profile.guide?.beat ?? 'playing',
      dismissed: profile.guide?.dismissed ?? [],
      known: profile.guide?.known ?? [],
      off: off.includes(id) ? off.filter((item) => item !== id) : [...off, id],
    });
  }

  useEffect(() => {
    if (!profile || !guideView) return;
    if (guideView.beat === (profile.guide?.beat ?? 'start')) return;
    const next = {
      ...profile,
      guide: {
        beat: guideView.beat,
        dismissed: profile.guide?.dismissed ?? [],
        known: profile.guide?.known ?? [],
        off: profile.guide?.off ?? [],
      },
    };
    setProfile(next);
    void saveProfile(next);
  }, [guideView?.beat, profile]);

  useEffect(() => {
    if (!run || hydrated.current) return;
    hydrated.current = true;
    seenPlay.current = run.lastPlay?.kind === 'play' ? run.lastPlay.stamp ?? null : null;
  }, [run]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) return;
      if (ceremony || guideBlocksKeys) return;
      if (screen !== 'battle' || !run?.battle || run.battle.status !== 'active' || !catalog || !tables || !profile) return;
      if (event.key === 'Enter') {
        event.preventDefault();
        const chosen = run.battle.selectedIds.length > 0 ? run : selectAll(run);
        act(() => commitPlay(chosen, profile, catalog, tables));
      } else if (event.key === 'Backspace' || event.key === 'Delete') {
        event.preventDefault();
        act(() => commitDiscard(run, profile));
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });
  const preview = run && catalog && tables && profile && run.battle?.status === 'active'
    ? previewPlay(run, profile, catalog, tables)
    : null;

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          Glass <span>Bead</span> Roguelite
          <button type="button" className="trash" aria-label="Erase the library" onClick={() => setConfirmWipe(true)}>
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16" />
              <path d="M9 7V5h6v2" />
              <path d="M7 7l1 13h8l1-13" />
            </svg>
          </button>
        </div>
        <nav className="nav">
          <button onClick={() => setView('home')}>Home</button>
          {run?.status === 'active' && !run.pendingRewardRegionId && !run.battle && (
            <button onClick={() => setView('auto')}>Map</button>
          )}
          {run?.status === 'active' && view !== 'auto' && view !== 'home' && (
            <button onClick={() => setView('auto')}>
              {run.pendingRewardRegionId ? 'Reward' : run.battle?.status === 'active' ? 'Battle' : 'Map'}
            </button>
          )}
          {run && <button data-hook="deck" onClick={() => setView('deck')}>Deck</button>}
          <button data-hook="library" onClick={() => setView('encyclopedia')}>Encyclopedia</button>
          <button onClick={() => setView('progression')}>Progression</button>
        </nav>
        <div className="stats">
          {run && <span>Lives {run.livesRemaining}</span>}
          {profile && <span>{profile.discoveredMotifIds.length} discovered</span>}
          {profile && guideContent.notes
            .filter((note) => note.kind === 'skill' && !note.god && profile.guide?.known?.includes(note.id))
            .map((note) => (
              <label key={note.id} className="skill-toggle">
                <input
                  type="checkbox"
                  checked={!profile.guide?.off?.includes(note.id)}
                  onChange={() => toggleSkill(note.id)}
                />
                {note.title}
              </label>
            ))}
          {run && guideContent.notes
            .filter((note) => note.kind === 'skill' && note.god && run.powers?.includes(note.id))
            .map((note) => (
              <label key={note.id} className="skill-toggle">
                <input
                  type="checkbox"
                  checked={!run.powersOff?.includes(note.id)}
                  onChange={() => toggleRunPower(note.id)}
                />
                {note.title}
              </label>
            ))}
        </div>
      </header>
      <main>
        {error && <p className="warning">{error}</p>}
        {status && <p>{status}</p>}
        {!catalog || !profile ? <p>Loading the motif catalog…</p> : (
          <>
            {screen === 'home' && (
              <HomeScreen
                canContinue={Boolean(run)}
                onContinue={() => setView('auto')}
                onNew={(preset) => start(preset === 'short' ? SHORT_RUN_CONFIG : DEFAULT_CONFIG)}
              />
            )}
            {screen === 'map' && run && (
              <MapScreen
                run={run}
                catalog={catalog}
                profile={profile}
                onInspect={(regionId) => {
                  const next = inspectRegion(profile, run, regionId);
                  setProfile(next.profile);
                  setRun(next.run);
                  void saveProfile(next.profile);
                  void saveRun(next.run);
                }}
                onAttack={(regionId) => act(() => beginBattle(run, profile, regionId, run.configSnapshot, catalog))}
              />
            )}
            {screen === 'battle' && run && (
              <BattleScreen
                run={run}
                catalog={catalog}
                profile={profile}
                preview={preview ? `${preview.poker.label} · ${preview.poker.pokerSubtotal + preview.folkloreBonus}` : null}
                scoreHold={ceremony?.total ?? 0}
                locked={Boolean(ceremony)}
                onToggle={(motifId) => setRun(toggleSelect(run, motifId))}
                onPlayAll={() => tables && act(() => commitPlay(selectAll(run), profile, catalog, tables))}
                onPlay={() => tables && act(() => commitPlay(run, profile, catalog, tables))}
                onDiscard={() => act(() => commitDiscard(run, profile))}
                onReturn={() => act(() => ({ run: returnToMap(run), profile }))}
              />
            )}
            {screen === 'reward' && run && (
              <RewardScreen
                run={run}
                catalog={catalog}
                profile={profile}
                onAdd={(motifId) => act(() => resolveReward(run, profile, { type: 'add', motifId }, catalog))}
                onRemove={(motifId) => act(() => resolveReward(run, profile, { type: 'remove', motifId }, catalog))}
                onContinue={() => act(() => resolveReward(run, profile, { type: 'continue' }, catalog))}
              />
            )}
            {screen === 'outcome' && run && <OutcomeScreen run={run} onHome={() => setView('home')} />}
            {screen === 'deck' && run && <DeckScreen run={run} catalog={catalog} profile={profile} />}
            {screen === 'encyclopedia' && <EncyclopediaScreen catalog={catalog} profile={profile} />}
            {screen === 'progression' && (
              <ProgressionScreen
                profile={profile}
                locked={run?.status === 'active'}
                onSave={(allocation: UpgradeAllocation) => {
                  const next = { ...profile, upgradeAllocation: allocation };
                  setProfile(next);
                  void saveProfile(next);
                }}
                onReset={() => setConfirmWipe(true)}
                onExport={() => {
                  void exportSave(profile, run).then((raw) => {
                    const blob = new Blob([raw], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'glass-bead-roguelite-save.json';
                    link.click();
                    URL.revokeObjectURL(url);
                  });
                }}
                onImport={(raw) => {
                  const parsed = JSON.parse(raw) as { profile: Profile; run: RunState | null };
                  const next = reconcileProfile(
                    parsed.profile,
                    DEFAULT_CONFIG,
                    (id) => catalog.motifIndex.has(id),
                    (id) => catalog.textIndex.has(id),
                    catalog.catalogVersion,
                  );
                  commit({
                    run: parsed.run && parsed.run.catalogVersion === catalog.catalogVersion ? parsed.run : null,
                    profile: next,
                  });
                }}
              />
            )}
          </>
        )}
      </main>
      {confirmWipe && (
        <div className="wipe-layer">
          <div className="guide-scrim" onClick={() => setConfirmWipe(false)} />
          <article className="guide-card" role="dialog" aria-modal="true" aria-label="Erase the library">
            <h2>Erase the library?</h2>
            <p>This clears every motif you have seen, every text, the guide, and the current run on this browser.</p>
            <div className="actions">
              <button type="button" onClick={() => setConfirmWipe(false)}>Cancel</button>
              <button type="button" className="primary" onClick={wipeLibrary}>Erase</button>
            </div>
          </article>
        </div>
      )}
      {guideView && (
        <GuideOverlay
          view={guideView}
          notes={guideContent.notes}
          known={profile?.guide?.known ?? []}
          paused={Boolean(ceremony)}
          onChoose={(to) => rememberGuide(to, true)}
          onOpen={(id) => rememberGuide(id, false)}
          onDismiss={(id) => {
            const dismissed = profile?.guide?.dismissed ?? [];
            if (dismissed.includes(id) || !profile) return;
            writeGuide({ beat: guideView.beat, dismissed: [...dismissed, id], known: profile.guide?.known ?? [], off: profile.guide?.off ?? [] });
          }}
          onClose={closeGuide}
        />
      )}
      {ceremony && catalog && profile && (
        <ScoreCeremony
          play={ceremony}
          catalog={catalog}
          profile={profile}
          continueLabel={run?.pendingRewardRegionId ? 'Choose a reward' : run?.battle?.status === 'active' ? 'Play next hand' : 'Continue'}
          onDone={() => setCeremony(null)}
        />
      )}
    </div>
  );
}
