> English machine translation of the [Russian source](<../../../../ru/reports/experiments/prng64-solver-20261110/EXECUTION.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Modification of execution method, 10 November 2026

After the pilot and the first successive attempts, it is customary to perform four
The formulas, the methods, the limits, the order of the engines inside
of each case, entrances and accepted worker.py They don't change.
reviews/parallel_run.py; lockdown RUN.lock common with the initial binding.

Consistent runner It has been removed along with its current worker beforehand
A snapshot of the processes and a list of completed files saved
into reviews/SWITCH.json; An incomplete request is not a negative result.
Save completed answers are not recomputed. New binding continues
Incomplete query with the same inputs. The code of the previous series has not changed.

The timing of new attempts may depend on simultaneous loading
It is considered a pure comparison of engine performance; the pilot was consistent.
Measurable solver time are the time of the call for perf_counter; own
The limits of different engines may have different semantics wall/CPU. General external
watchdog It's saved. The main conclusion is whether the constraints are complete or incomplete.

Continuation team:

> Executable code/The commands are omitted in the documentary copy.


## Clarification of the procedure for independent audit

The main engine of each real problem is allowed only after complete blindness
Second engine for independent control real-UNSAT He was called upon after these
Controls of the main engine and its own comprehensive/fixed tests,
But not always after your own complete blind restoration of the same line.
This is a deviation from the strict reading of the admission of each engine to PROTOCOL.md.

The primary conclusions are not based on this deviation: blind-check-up
For the secondary answers, separate reviews/cross_controls.py
It complements the missing blind controls; the temporal order is not rewritten.
CROSS_CONTROLS.json Distinguish between preliminary and retrospective control,
also UNKNOWN. Incomplete retrospective testing is not considered successful.
