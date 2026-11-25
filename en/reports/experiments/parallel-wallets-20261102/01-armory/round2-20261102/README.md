> English machine translation of the [Russian source](<../../../../../../ru/reports/experiments/parallel-wallets-20261102/01-armory/round2-20261102/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../../README.md>) · [Direction](<../../../../../topics/03-wallets.md>) · [Documents of the series](<../../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../../docs/LATEST_RESULTS.md>).

# Armory R2 teams

Bottom line: [RESULTS.md](<RESULTS.md>), formulae: [MATH.md](<MATH.md>)data for
recovery: [RECOVERY_PATHS.md](<RECOVERY_PATHS.md>).

From the root of the project:

> Executable code/The commands are omitted in the documentary copy.


Environment: existing Python3.11.9 .venv, coincurve21.0.0; supplementary
No need for packets. The exact counting code is standard Python with big wholes.
The medium is only used for reading bytecode It's off when you read the entrances
first-check105-file-based manifest; current data copied from SHA256.

ACTIVE_RUN.json indicates the accepted series. PROTOCOL.md and WINDOW_PROTOCOL.md
They're saved until they run the test timeout
60 second, main pilot180 seconds; additional window stage30 seconds.
Partially completed stage, when continuing, is performed again, completed
It doesn't happen again. Code pins Do not allow the old to continue run A changed solver.
Use a new copy for independent repetition/new ID, preserve
run; No new entry shall be substituted in the existing snapshot.

Individual processes:

> Executable code/The commands are omitted in the documentary copy.


Examples of entrances PAIR_INPUT.json, WINDOW_INPUT.json, REVERSE_INPUT.json into run.
PAIR/WINDOW receive only2 observations, log_lines and targets. Separate
SYNTHETIC_ORACLE.json The decision-makers don't read. REVERSE Gets a full starter
scalar/C **first-decisor**; public bridge - explicitly added
variantization bridge. All of these keys are just control keys.

Only complete ones are allowed parent hashes; idle unlock hash-line
They're rejected. Log deduplication Remove exact repetitions, do not model cycles
with repeatable source addresses. Short segment must be complete;
scanner seek consecutive windows, reverse Scanning all the records.

`exact_pair.solve` returns count even when exceeded cap, not
It's a list of candidates budget_refused, It's not the lack of a solution.
`reverse.py` report missing_predecessor/ambiguous/budget separately.
Targets have explicit puzzle/chain_index: interpretation mapping
It remains part of the hypothesis, not an inference from the number of lines in the journal.

`report.py build` collect/STATUS/SUMMARY/ACCEPTANCE from the finished files.
`report.py seal` make-up manifest once; `verify` checks it out and the old one
manifest, without repeating the research. Initial first-cycle documents
intentionally left unchanged; a new summary is in this folder.
