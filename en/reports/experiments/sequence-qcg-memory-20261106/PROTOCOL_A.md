> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-qcg-memory-20261106/PROTOCOL_A.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-25 Memory diagnostics, stage A

Request: Determine the source of memory consumption SEQ-24 and try an accurate, more compact representation without loosening the masks/The new files are separate; the old series remain unchanged.

It's being investigated first full00, with the same builder and entrance1) baseline SolverFor(QF_FF) with diagnostics;2) step-measurement ff-unique, ff-simplify, ff-solve, ff-sat, Separate passage of stages is a means of localization, not identical in budgets to the repetition of the standard strategy. At the stages where the conversion returns, the result is retained; ff-solve does not support the residual formula, it is checked ff-sat-No statements from the task are manually deleted.

Budget of the diagnostic process: 60 main check/separate stage, 90 from outside time 2 GiB requesting a staff interruption Context.interrupt For statistics; external emergency boundary 2.5 GiB or 5 It's a diagnostic stop, not an optimization, not a negative result. There are no parallel solvers.

The phases are recorded private/working-set memory, Python tracemalloc, handler Z3-allocation, stdout/stderr And the final statistics/hashes Z3 coincide SEQ-24. It's the Commite's source 430d19e697e2ec9bad79ff210d41b4a7a5fcfa3e read from the official repository; saved URL and SHA-256. The source code is used to interpret measurements and does not replace experimentation.

After the diagnosis, a separate stage is recorded B: The exact optimization of the representation, the proof of equivalence, the small benchmarks and the comparison on the six previous inputs. The choice depends on the measured cause. All intermediate results are saved; reducing memory by abandoning search or cutting restrictions is not considered a successful optimization.
