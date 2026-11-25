import { mkdtemp, cp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const here = dirname(fileURLToPath(import.meta.url));
const repo = resolve(here, '..');
const run = (command, args, cwd = repo) => execFileSync(command, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] }).trim();
const remote = run('git', ['remote', 'get-url', 'origin']);
const source = run('git', ['rev-parse', 'HEAD']);
if (run('git', ['status', '--porcelain'])) throw new Error('Commit source changes before publishing.');
// Only the generated, fixed site/dist directory is replaced for a clean build.
await rm(join(here, 'dist'), { recursive: true, force: true });
process.stdout.write(run(process.execPath, ['build.mjs'], here) + '\n');
const staging = await mkdtemp(join(tmpdir(), 'puzzle-pages-'));
try {
  run('git', ['init', '--initial-branch=gh-pages'], staging);
  run('git', ['remote', 'add', 'origin', remote], staging);
  const existing = run('git', ['ls-remote', '--heads', 'origin', 'gh-pages'], staging);
  if (existing) {
    run('git', ['fetch', '--depth=1', 'origin', 'gh-pages'], staging);
    run('git', ['reset', '--mixed', 'FETCH_HEAD'], staging);
  }
  await cp(join(here, 'dist'), staging, { recursive: true });
  run('git', ['config', 'user.name', run('git', ['config', 'user.name'])], staging);
  run('git', ['config', 'user.email', run('git', ['config', 'user.email'])], staging);
  run('git', ['add', '--all'], staging);
  if (run('git', ['status', '--porcelain'])) {
    run('git', ['commit', '-m', `Publish website from ${source}`], staging);
    run('git', ['push', 'origin', 'HEAD:gh-pages'], staging);
  }
  console.log('Published build to gh-pages; check GitHub Pages deployment status.');
} finally {
  const allowed = resolve(tmpdir()) + (process.platform === 'win32' ? '\\' : '/');
  if (!resolve(staging).startsWith(allowed) || !staging.includes('puzzle-pages-')) throw new Error('Unexpected staging path');
  await rm(staging, { recursive: true, force: true });
}
