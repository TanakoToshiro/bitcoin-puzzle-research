> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sx-wallet-branches-20261101/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E13 — SX wallet branches

32 diagrams by user staging. [Protocol](<PROTOCOL.md>), table - artifact of the initial study (`SCHEMES.json`; outside the picture),
[results](<RESULTS.md>), [chronology](<JOURNAL.md>).

V WSL Ubuntu-24.04, from this folder:

> Executable code/The commands are omitted in the documentary copy.


launch.py launcher run.py all, preserve stdout/stderr and the environment.
Repeated `python3 run.py all` Continue with the first missing block, checking
already recorded chain; successful acceptance/Pilots don't repeat themselves. SERIES.lock use
flock, PROCESS.json contains PID/start ticks/cmdline. For a regular stop, create
file STOP; Remove it before the sequel/ERROR It requires analysis, not to be missed.
Don't let go prepare.py/configure_controls.py over the accepted series. Reproduce assembly
from pinned The old experiments/checkpoints They don't change.

Completeness is determined by the root COMPLETE.json and an independent audit. Partial passage
It does not exclude the model in the entire range. BIP44 does not mean BIP39: precise
SX entropy32 directly master. Other options are not included in this experiment.

## Current autonomous launch

launch_and_audit.ps1 — Windows-Background coordinator. He's holding a named
mutex, perform WSL launch.py, successful COMPLETE launch automatically
Windows readback.py and finalize_report.py. The last to write FINAL_REPORT.md, complement
general RESULTS.md creates READBACK_COMPLETE.json. POSTRUN_STATUS.json condition
coordinator, HOST_PROCESS.json his PID/start time. POSTRUN_MANIFEST.json fixation
Closing the chat is not required for operation and does not serve as a stop.

Candidate/Error does not trigger an exclusion report: the sequence will stop with
HOST_ERROR.txt/POSTRUN_STATUS:error. A negative result is only acceptable if
READBACK_COMPLETE.json and POSTRUN_STATUS:complete. To view progress read
STATUS.json and `<mode>/full/STATUS.json`; not to create a second worker.
