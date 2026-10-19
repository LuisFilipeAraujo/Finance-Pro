import { appendFile, mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';

// Stores sign-ups as JSON Lines in data/ (gitignored — e-mails are personal
// data). Works for local dev and a single long-lived server; serverless hosts
// (e.g. Vercel) have a read-only filesystem, so swap this module for a real
// database before deploying there. The rest of the app only sees addToWaitlist.
const DATA_DIR = path.join(process.cwd(), 'data');
const WAITLIST_FILE = path.join(DATA_DIR, 'waitlist.jsonl');

// Serializes writes within this process so the duplicate check can't race.
let queue = Promise.resolve();

async function readEmails() {
  try {
    const content = await readFile(WAITLIST_FILE, 'utf8');
    return new Set(
      content
        .split('\n')
        .filter(Boolean)
        .map((line) => JSON.parse(line).email),
    );
  } catch (error) {
    if (error.code === 'ENOENT') return new Set();
    throw error;
  }
}

export function addToWaitlist(email) {
  const task = queue.then(async () => {
    const emails = await readEmails();
    if (emails.has(email)) return { alreadyListed: true };

    await mkdir(DATA_DIR, { recursive: true });
    const entry = { email, createdAt: new Date().toISOString() };
    await appendFile(WAITLIST_FILE, `${JSON.stringify(entry)}\n`, 'utf8');
    return { alreadyListed: false };
  });
  queue = task.catch(() => {});
  return task;
}
