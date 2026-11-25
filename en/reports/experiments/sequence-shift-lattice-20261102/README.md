> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-shift-lattice-20261102/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-11 a grid with an additional monomial shift

Result: [FINAL_REPORT.md](<FINAL_REPORT.md>)Plan: [PROTOCOL.md](<PROTOCOL.md>).
The new lattice is the sum of the previous coefficient n²-The lattice and its copies,
Multiplied by one variable. The choice of a variable depends only on
geometry and boundaries, before reduction and without the answer SEQ-10
Copyed unchanged SEQ-01..10 They don't overrecord.

From the root of the project, PowerShell:

> Executable code/The commands are omitted in the documentary copy.


Integrity check first. Ready stages, including timeouts, re-run
They don't do it, they don't JOURNAL.jsonl It's written down. Repeat enlarged
The budget must receive a new folder or a new attempt; the old outcome
It's not changed.

- `inputs/`: 12 fresh entrances; seed and order in experiment.py.
- `shift_solver.py`: a new basis, a structural choice of direction and LLL.
- `results/`Five separate entry stages, including limits and omissions.
- `constructions/`, `progress/`: the design is maintained until LLL.
- `lattices/`Accurate reduced bases and certified polynomials.
- `algebra/`, `algebra_checkpoints/`: solutions and available transformations.
- `ARITHMETIC.json`: six small checks of divisibility and equality of lattice.
- `audit.py`, `AUDIT.json`, `audit_packets/`independent disclosures, HNF,
  Certificates of reduction and algebra, complete control of chains and masks.
- `CONTROLS.json`, `MEASUREMENTS.json`, `COMPARISON.json`,
  `AXIS_SELECTIONS.json`Results, times and choice of variables.
- `RETRY_INDEX.json`: index of records timeout/total_budget/
  preparation_unavailable folder results preserved SEQ-series;
  baseline, SHA256 It's not a substitute for journals.
- `REAL.json`Structural calculation; no real search.
- `PROVENANCE.json`, `PRIOR_SNAPSHOT.json`, `ENVIRONMENT.json`:
  origin of the code, SHA256/mtime previous files, existing libraries.
- `RESUME_CHECK.json`, `ACCEPTANCE.json`, `COMPLETE.json`, `ARTIFACTS.json`:
  Continuation without counting, acceptance and integrity.

Saved inputs allow for a repeat of the limited launch
state LLL or Gröbner is not usually retained; guarantees
There is no continuation with the interrupted machine instruction.

One computational CPU-process. Python 3.11.9, python-flint 0.9.0,
SymPy 1.14.0. Without installations and GPU. Do 90 (c) to prepare each grid,
30 (c) for each decision, 45 on primal; general budget 1200 s.
Audit separately: up to 180 The end of the process can be a little bit
scale up wall time relative to a given limit.
