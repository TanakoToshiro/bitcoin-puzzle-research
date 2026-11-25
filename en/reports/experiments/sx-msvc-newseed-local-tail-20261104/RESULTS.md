> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sx-msvc-newseed-local-tail-20261104/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SXN-04: Full passage complete - no candidates

**4 November 2026 into 14:45:25 MSC** complete range **[0, 4294967296)**.
Re-audit `store.py --complete` on Windows It was a success.

| Indicator | Outcome |
|---|---:|
| Seed | 4 294 967 296 from 4 294 967 296 |
| Schemes for each seed | 4 |
| par seed × scheme | 17 179 869 184 |
| Block by block 131072 seed | 32 768 |
| Candidates / coincidence / mistake | 0 / 0 / 0 |
| Untested residue | 0 |

## What's tested

Accurate model `SXN-X-only-MT19937-mod255-16-hexlower-SHA256x100000-v1`:
uint32 seed → MT19937, first 16 draw %255 → lowercase hex ASCII32 →
100000 iteration SHA256 → X-only MPK → private children.
Four circuits: **receive-i-1, receive-i, change-i-1, change-i**.
Filter Puzzle #50: 49 The little bits, target **48190542746452**.
Old ones 20 BIP32-The schemes do not apply to this passage.

**Conclusion as applicable:** total negative result for this final
The models and these four circuits in the entire domain uint32 seed. Compatible with the filter
There are no candidates. This does not rule out other options SX/MSVC and not
decision Puzzle 71.

## Continuity and control

On a rented basis RTX 4090 first-tested **32655 block**:
`[0, 4280156160)`After a regular budget stop in the 10:06:01 MSC
The entire confirmed prefix is saved to the PC and verified with the server.

As directed by the user, the same run continued RTX 3070 Ti Laptop
into WSL Ubuntu-24.04. Local launch 14:17:40 ISC, closing -- 14:45:25 MSK.
Written **113 block**, **14 811 136 seed**, range
`[4280156160, 4294967296)`New run It is not created, there are no repetitions of the range.

The audit confirmed the absence of gaps and overlaps, accurate counters of all four
schemes, hash chain and certificate COMPLETE. SHA256 **32657 source cloud
file** Re-matched with the saved deleted manifesto: they didn't change.
Two sessions with the same package hash own build/GPU metadata.

Pre-start controls of each session and final GPU-Post-control passed:
**19 native cases, 45 modular cases, four planted-candidate**. Before the local
Complete border checks were also carried out/overflow.
MATCH No candidates; candidates for individual CPU-review Mistakes runner Nope.
Upon completion GPU The originals and the model didn't change during the sequel.

## Identifiers and evidence

- Run ID: `e3374da0-c7a5-48af-b6df-946610889b1e`.
- RUN SHA256: `9cc3a8a72ae23bbfe274976c29f7c25486da8a23d21d635eead8742b57a075ef`.
- Package digest: `cbaea9f7f288cfff543bb245820ca7dc79ae57bf7fd627114254ce8b4cf3e31f`.
- Build 4090: `e8c6c76c5acf2977c623b8992a014677942dd60a9e5183d030ba0f4bb5db730e`.
- Build 3070 Ti: `4d57f5e13e34118350c50218c63a85c0caad5b4d132307c5d78979bdd043d618`.
- Finals head: `efd21e9d83ed6b37510db79d2881fd9f5b14d1d14fb5fe67ff9d0242a8003689`.
- SHA256 file COMPLETE.json: `5bf8195a9ce8e8f4fb00a31e380ea701fd56e1b015e8fc98ce1e2e6b008a0ec8`.

Run on PC: `sx-newseed-4090-ubuntu/backups/full-01/` from the root of the project.
Up-to-date files STATUS.json, CHECKPOINT.json and COMPLETE.json.
LOCAL_STATUS/REMOTE_STATUS preserved as historical photographs SSH-backup.

A complete audit is an artifact of the original study (`FINAL_AUDIT.json`• Verification of prefix, sessions and post-controls - an artifact of the original study (in Russian)`FINAL_VERIFICATION.json`; outside the picture)
Certificate of Completion - an artifact of the initial study (`COMPLETE.json`; outside the picture) · Local continuation journal - an artifact of the original study (`console.log`; outside the picture.

## Rentals

VM **1167271** removed; the panel shows **04.11 10:15 MSC**.
Old tom **182439**, UUID `138ba4b9-5c2c-4be0-94f8-2b4566ad0162`,
removed after manual user confirmation UUID checklisted
Remote; active; operating VM The panel shows the total flow rate
**0,00 ₽/hour**, balance **4,28 ₽**.

SXN-4090-Backup It's switched off `sxn-4090` and `sxn-4090-4-10-00`
transferred PAUSED; Other automations have not changed.
Detailed rental result - an artifact of the initial study (`../sx-msvc-newseed-4090-deploy-20261103/CLEANUP_RESULT.json`; outside the picture.

