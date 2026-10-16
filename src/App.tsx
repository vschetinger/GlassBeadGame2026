import { useEffect, useRef, useState } from 'react';
import { DEFAULT_CONFIG, SHORT_RUN_CONFIG } from './config';
import {
  beginBattle,
  commitDiscard,
  commitPlay,
  createRun,
  inspectRegion,
  previewPlay,
  resolveReward,
  returnToMap,
  toggleSelect,
} from './game';
import { loadGameData } from './loadData';
import { exportSave, loadProfile, loadRun, saveProfile, saveRun } from './persistence';
import { emptyProfile, reconcileProfile } from './progression';
import type { BalanceConfig, Catalog, LastPlay, Profile, RunState, SimilarityTables, UpgradeAllocation } from './types';
import {
  BattleScreen,
  EncyclopediaScreen,
  HomeScreen,
  MapScreen,
  OutcomeScreen,
  ProgressionScreen,
  RewardScreen,
  ScoreCeremony,
} from './ui/screens';

type View = 'auto' | 'home' | 'encyclopedia' | 'progression';

function screenFor(view: View, run: RunState | null): View | 'map' | 'battle' | 'reward' | 'outcome' {
  if (view === 'encyclopedia' || view === 'progression' || view === 'home') return view;
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
  const [seed, setSeed] = useState('castalia');
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [ceremony, setCeremony] = useState<LastPlay | null>(null);
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

  function start(config: BalanceConfig) {
    if (!catalog || !tables || !profile || lock.current) return;
    setError(null);
    setStatus('Casting the world…');
    window.setTimeout(() => {
      act(() => createRun(seed, config, profile, catalog, tables));
      setStatus(null);
      setView('auto');
    }, 40);
  }

  const screen = screenFor(view, run);

  useEffect(() => {
    if (!run || hydrated.current) return;
    hydrated.current = true;
    seenPlay.current = run.lastPlay?.kind === 'play' ? run.lastPlay.stamp ?? null : null;
  }, [run]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) return;
      if (ceremony) return;
      if (screen !== 'battle' || !run?.battle || run.battle.status !== 'active' || !catalog || !tables || !profile) return;
      if (event.key === 'Enter') {
        event.preventDefault();
        act(() => commitPlay(run, profile, catalog, tables));
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
        <div className="brand">Glass <span>Bead</span> Roguelite</div>
        <nav className="nav">
          <button onClick={() => setView('home')}>Home</button>
          {run?.status === 'active' && !run.pendingRewardRegionId && !run.battle && (
            <button onClick={() => setView('auto')}>Map</button>
          )}
          <button onClick={() => setView('encyclopedia')}>Encyclopedia</button>
          <button onClick={() => setView('progression')}>Progression</button>
        </nav>
        <div className="stats">
          {run && <span>Lives {run.livesRemaining}</span>}
          {profile && <span>{profile.discoveredMotifIds.length} discovered</span>}
        </div>
      </header>
      <main>
        {error && <p className="warning">{error}</p>}
        {status && <p>{status}</p>}
        {!catalog || !profile ? <p>Loading the motif catalog…</p> : (
          <>
            {screen === 'home' && (
              <HomeScreen
                seed={seed}
                canContinue={Boolean(run)}
                onSeed={setSeed}
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
                  setProfile(next);
                  void saveProfile(next);
                }}
                onAttack={(regionId) => act(() => beginBattle(run, profile, regionId, run.configSnapshot))}
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
                onAdd={(motifId) => act(() => resolveReward(run, profile, { type: 'add', motifId }))}
                onRemove={(motifId) => act(() => resolveReward(run, profile, { type: 'remove', motifId }))}
                onContinue={() => act(() => resolveReward(run, profile, { type: 'continue' }))}
              />
            )}
            {screen === 'outcome' && run && <OutcomeScreen run={run} onHome={() => setView('home')} />}
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
                onReset={() => {
                  if (!window.confirm('Erase discoveries, texts, and upgrades on this browser?')) return;
                  const next = emptyProfile(catalog.catalogVersion);
                  commit({ run: null, profile: next });
                  setView('home');
                }}
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
      {ceremony && catalog && profile && (
        <ScoreCeremony play={ceremony} catalog={catalog} profile={profile} onDone={() => setCeremony(null)} />
      )}
    </div>
  );
}
