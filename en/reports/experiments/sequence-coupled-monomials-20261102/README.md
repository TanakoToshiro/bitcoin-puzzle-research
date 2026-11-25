> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-coupled-monomials-20261102/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-09 Monome dependencies within the solution

Results: [FINAL_REPORT.md](<FINAL_REPORT.md>)A new isolated series
at the direction of the user; accepted SEQ-01..08 They don't change.

`coupled_solver.py` It builds a coefficient lattice of polynomials
well-assessed `sum(abs(coefficient)*monomial_bound) < modulus`,
The Gröbner Basis solves them as polynomials
from common variables: works and degrees are already related in decision.
Candidate is further checked on the full chain and all 83 masks.

Comparison: copy of method SEQ-08 (`baseline`), new grid mod n
(`coupled_m1`), limited grid mod n² five-state
(`coupled_m2`The plan and limits are unchanged: [PROTOCOL.md](<PROTOCOL.md>),
MANIFEST.json - an artifact of the initial study (`MANIFEST.json`; outside the picture. List of new seed situated
`experiment.py:cases`old `data.py:cases` and `data.py:HIDDEN`
It is copied for the origin of the code and is not used in this series.

From the root of the work project, PowerShell:

> Executable code/The commands are omitted in the documentary copy.


First, the integrity is checked
commands do not repeat calculations; only a journal is allowed to be added.
Timeout is saved as a completed attempt on a limited budget and
It doesn't automatically restart. You need a new folder for the next series.

- `inputs/`: 48 pre-created entrances; truth serves only as an estimate.
- `results/`: 112 Results of methods, including timeouts.
- `lattices/`Precise matrices, transformations and certified polynomials.
- `progress/`: Record before a joint decision; survives its timeout.
- `ALGEBRA_CONTROLS.json`: 16 comprehensive small systems and 4 special occasions.
- `audit.py`, `inherited_audit.py`, `audit_common.py`: independent formulae,
  Another Gröbner algorithm, checking whole roots, chains and shifts.
  `inherited_audit.py` copied byte; the former `main` He's not called.
- `audit_packets/`, `AUDIT.json`Audit certificates, including
  A lattice with unfinished algebra.
- `CONTROLS.json`, `MEASUREMENTS.json`, `COMPARISON.json`: tables
  Constraints and Pair Comparison.
- `REAL.json`The structure of real constraints and individual search tolerances.
- `PRIOR_SNAPSHOT.json`: SHA256 and mtime All previously accepted files.
- `PROVENANCE.json`, `AUDIT_PROVENANCE.json`: origin of the copies.
- `ENVIRONMENT.json`: hashes of existing libraries.
- `RESUME_CHECK.json`: Continuation without new lattice computations.
- `ACCEPTANCE.json`, `COMPLETE.json`, `ARTIFACTS.json`Receipt and seal.

One computational CPU-process. Python 3.11.9, python-flint 0.9.0,
SymPy 1.14.0. GPU, Installations and old search stages are not used.
45 seconds for the science method-run, 1200 I'll give you a few seconds
The process can add a little time to the measured wall time.
The audit is performed separately, until 120 seconds for the saved package.

Service teams `accept.py` and `accept.py seal` used
Continuation checks and final printing
Artifacts can't be rewritten.
