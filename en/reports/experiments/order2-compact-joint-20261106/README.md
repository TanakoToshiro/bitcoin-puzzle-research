> English machine translation of the [Russian source](<../../../../ru/reports/experiments/order2-compact-joint-20261106/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# O2-C01: joint-search

First read [FINAL_REPORT.md](<FINAL_REPORT.md>), [RESULTS.md](<RESULTS.md>),
[PROTOCOL.md](<PROTOCOL.md>) and [SUPPLEMENT_PROTOCOL.md](<SUPPLEMENT_PROTOCOL.md>).

Basic programme: `run.py`builder/solver: `compact_solver.py`.
Supplement: `reviews/run_supplement.py`, `reviews/interval_adapter.py`.
Python — `../../.venv/Scripts/python.exe`Versions are recorded in MANIFEST.json.
All entrances to `cases/*/INPUT.json`; EXPECTED It's used by the verification code.
Preserve the originals SMT, answers, statistics, SHA-256, Witnesses found.

The cycle is closed on a fixed budget 18 partial **unfinished**.
COMPLETE means the completion of an experimental cycle with a report, not complete
recovery. UNKNOWN This is no exception to the hypothesis.

For an independent integrity check, from this folder, only read:

> Executable code/The commands are omitted in the documentary copy.


For new calculations, first create a separate folder and a new protocol.
In the existing folder, the kernel returns the saved OUTPUT, including incomplete,
It doesn't start a new search invisibly SAT-Requests to Restore
Blocking; this is checked in reviews/resume. Increase the limit - a new launch,
It should refer to the old one, retaining its results and status.

`reviews/finalize.py` Reassemble numerical tables and report from results without
Resetting the solvers and updates COMPLETE. This should only be done when
intentionally updating the report. `reviews/audit.py` re-writes the audit; for a new
Independent audits use a copy of the series to keep the old COMPLETE.
Old matrices and checkpoint Other experiments do not change.
