> English machine translation of the [Russian source](<../../../../ru/reports/experiments/prng64-anchor-20261110/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# RNG64-04 - change of coordinates for 10 open-assemblies

Entrances taken unchanged from RNG64-03. Detailed staging and limits:
[PROTOCOL.md](<PROTOCOL.md>), [METHOD.md](<METHOD.md>).

Teams PowerShell from this folder:

> Executable code/The commands are omitted in the documentary copy.


Each engine of each line must complete its own blind synthetic-control
It's the first real-key request, and it reads the latent state by the checkout
not worker.py/The input of the algorithm contains only family and observations.
The control is not considered to have been passed by one state found: a final state is required
UNSAT After blocking all found conditions. UNKNOWN It doesn't rule out a model.

RUN.lock and WORKER.lock They use the OS lock, not the file. PROCESS.json
last PID, time and path, do not run the second runner on top of the living.
When restarted, completed OUTPUT/RESULT are used without repeated calculations;
The saved responses of individual requests restore the enumeration of states.
Incomplete worker First check its live process and lockdown.

Worker run directly through the baseline python.exe locally
surroundings PYTHONPATH. Therefore, the external watchdog complete
process solver, not just intermediate venv-launcher. Modification of source code
afterward MANIFEST.json The new model requires a separate series.

formula-*.json — XOR/CNF, formula-*.smt2 — cvc5. query-*.json retains
pre-exit 0, and the new coordinates immediately after anchor.
Lockdown SAT It is performed in new coordinates, numerical verification - in the original.
Details: cases/<id>/{synthetic,real}/<engine>.

RESULTS.md and JOURNAL.md Replenished after the stages. RUN_RESULT.json, SUMMARY.csv,
FINAL_REPORT.md and COMPLETE.json Create a list of clearly preserved open
The report is reassembled from artifacts without triggering solver.

API The solvers and the sources of the historic generators have not changed
earlier in series prng64-solver-20261110/sources and prng64-state-20261105/SOURCES.json.
The new series captures versions and hashes of its own binary libraries MANIFEST.json.
