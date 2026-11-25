> English machine translation of the [Russian source](<../../../../ru/reports/experiments/prng64-assembly-20261110/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# RNG64-02: word transpositions and omissions inside raw-key

Continuation RNG64-01 from 5 November, a separate series from 10 November 2026.
Precise pre-recorded set: [PROTOCOL.md](<PROTOCOL.md>),
SCHEMES.json - an artifact of the initial study (`SCHEMES.json`The code and inputs are recorded in MANIFEST.json.
Historical sources and native vectors are inherited from
`../prng64-state-20261105`; integrity checked 470 files of the old series.

From this folder, PowerShell:

> Executable code/The commands are omitted in the documentary copy.


First, make sure that the previous run.py Completed: two simultaneous launches
It's not supported. Renewal uses saved ones RESULT.json and OUTPUT.json;
When you're done, you don't do it again
run.py. Increasing the limits or changing the model requires a new series with separate inputs.

The results of each option are: `cases/<id>/RESULT.json`synthetic input of the solver
contains only family/observations, The hidden state is located separately in
CHECKER_SECRET.json. The solver is run by a separate process without transmitting it
It's an interface discipline, not a file access sandbox.

`search/query-*.smt2` exact formulas; close to the answers, time, statistics, reasons
UNKNOWN and witnesses SAT. `JOURNAL.md` and `RESULTS.md` Replenished after the stages.
RUN_RESULT.json and CSV The reports aggregate the stored results71
It's only tested on synthetic batches UNSAT real-life holdout
not used: the necessary condition has already been violated fitting-key.

The audit has its own numerical implementation of transitions/circulation/assemblies and
playback UNSAT-request Z3. It's not independent SMT-engine
and non-formal certification UNSAT. The audit files are separated from the accepted code.
