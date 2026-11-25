> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/order2-compact-joint-20261106/reviews/AUDIT_NOTES.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# Audit observations

First launch audit.py stopped Z3 `from_file`: `file access error`
path Windows It's an error in downloading the saved SMT into
It is not the result of a solver or a change in the computational core.
Corrected by reading UTF-8 financially Python and `from_string`The contents SMT
his SHA-256 The audit is repeated after correction.

At the next launch, control with substituted states p257/interval
received UNKNOWN behind 10 (c) in the presence of unknowns A/B/C. To verify the correctness
encoding in the verification code is additionally substituted with the calculated coefficients,
It's a total stand-up of the witness, obviously **not**
Blind recovery. Basic results and timeouts unchanged.
