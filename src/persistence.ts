import type { Profile, RunState } from './types';

const DB_NAME = 'glass-bead-roguelite';
const STORE = 'saves';

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onerror = () => reject(request.error);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(STORE);
    };
    request.onsuccess = () => resolve(request.result);
  });
}

function requestToPromise<T>(request: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function read<T>(key: string): Promise<T | null> {
  const db = await openDb();
  const value = await requestToPromise(db.transaction(STORE).objectStore(STORE).get(key));
  db.close();
  return (value as T | undefined) ?? null;
}

async function write(key: string, value: unknown): Promise<void> {
  const db = await openDb();
  await requestToPromise(db.transaction(STORE, 'readwrite').objectStore(STORE).put(value, key));
  db.close();
}

export function loadProfile(): Promise<Profile | null> {
  return read<Profile>('profile');
}

export function saveProfile(profile: Profile): Promise<void> {
  return write('profile', profile);
}

export function loadRun(): Promise<RunState | null> {
  return read<RunState>('run');
}

export function saveRun(run: RunState | null): Promise<void> {
  return write('run', run);
}

export async function exportSave(profile: Profile, run: RunState | null): Promise<string> {
  return JSON.stringify({ profile, run }, null, 2);
}
