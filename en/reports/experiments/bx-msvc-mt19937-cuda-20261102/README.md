> English machine translation of the [Russian source](<../../../../ru/reports/experiments/bx-msvc-mt19937-cuda-20261102/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E15 — Windows BX MT19937 GPU

Isolated continuation of the historical MSVC-audit. [Protocol](<PROTOCOL.md>),
diagrams - an artifact of the initial study (`SCHEMES.json`; outside the picture), [results](<RESULTS.md>), [journal](<JOURNAL.md>).

WSL Ubuntu-24.04, from this folder:

> Executable code/The commands are omitted in the documentary copy.


Full passage - one MT RNG,40 circuitry seed[0,2^32),4096 Don't use the old blocks
minstd normalization, the exact list length/path/hard/offset copied MSVC-audit.
run.py all re-accept/Pilots and ready-made blocks at matching entrances.
SERIES.lock — flock; PROCESS.json containsPID/start ticks. STOP stop before
the next block; remove before proceeding ERROR/There is no automatic pass for the candidate.

Windows launch_and_audit.ps1 keep separate mutex and launch WSL-passage in the background.
After success, he performs readback.py and finalize_report.py: FINAL_REPORT.md,
READBACK_COMPLETE.json entries RESULTS.md. POSTRUN_STATUS.json/HOST_PROCESS.json
describe the coordinator, POSTRUN_MANIFEST.json It's a code that captures it
only COMPLETE + independent READBACK_COMPLETE,Not stopping the process.

prepare.py - single transfer/generation of standards; do not run over the accepted series.
The assembly is reproduced pinned The old ones BX/SX/MT checkpoints They don't change.
Original EXE They are not running; their historical emulation has already been saved and hash-tested.
