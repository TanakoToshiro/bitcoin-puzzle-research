> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-degree-elimination-20261102/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-10 Exclusion of high degrees

Bottom line: [FINAL_REPORT.md](<FINAL_REPORT.md>)The production: [PROTOCOL.md](<PROTOCOL.md>).
This is a standalone new series on fixed fresh entrances.
Accepted SEQ-01..09 remain unchanged.

Polynomials strictly certified by lattice SEQ-09, transform first
They're very precise, rational operations on strings, high-grade monoma
The resulting linear constraints are solved before Gröbner.
Reversible transformation and certificate of equality of line spaces are preserved.

From the root of the project, PowerShell:

> Executable code/The commands are omitted in the documentary copy.


Integrity first, then continuation
Timeouts, they don't automatically count JOURNAL.jsonl It's finished.
A new series requires a new folder; accepted results are not overwritten.

- `degree_solver.py`certificate T*A=H, det(T) != 0, affinity exception,
  Residual system solution, if necessary.
- `coupled_solver.py`, `difference_solver.py`, `solver.py`, `mobius.py`,
  `translation_decoder.py`: byte copies of accepted implementations.
- `data.py`: only used make_packet; list seed situated
  new experiment.py, old-school data.cases He's not called.
- `inputs/`: 24 New entrances; truth is not transmitted to restoration.
- `results/primal`old heuristics SEQ-08; `results/prepare`: one common
  the coefficient grating to the entrance; `results/raw` and `results/degree`:
  Two solvers of the same polynomials with the same algebra limit.
- `lattices/`, `algebra/`, `progress/`Accurate certificates and steps.
- `arithmetic.py`, `ARITHMETIC.json`: 16 exhaustive 6 Special controls.
- `audit.py`, `polynomial_audit.py`, `inherited_audit.py`, `audit_common.py`:
  independent review; previous main They're not called.
- `AUDIT.json`, `audit_packets/`: the results of the inspections.
- `CONTROLS.json`, `MEASUREMENTS.json`, `COMPARISON.json`: coating,
  pair differences, separate preparation time and algebra.
- `REAL.json`: only the structure of real masks and future search tolerances.
- `PROVENANCE.json`, `PRIOR_SNAPSHOT.json`, `ENVIRONMENT.json`: origin,
  SHA256/mtime previous files and hashes of existing dependencies.
- `RESUME_CHECK.json`, `ACCEPTANCE.json`, `COMPLETE.json`, `ARTIFACTS.json`:
  Continuation without computation, acceptance and integrity.

One computational CPU-process. Python 3.11.9, python-flint 0.9.0,
SymPy 1.14.0. No GPU The overall scientific budget 900 seconds;
before 45 momentarily primal/prepare, before 15 momentarily raw/degree.
Completion of the process can slightly increase the measured wall time.
The audit is performed separately, until 120 Just a second to enter.
