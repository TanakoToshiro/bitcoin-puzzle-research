> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-joint-invariants-20261102/SOURCES.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Origin and justification

Initial Invariants and Centered Differences - Accepted SEQ-08.
Former n²-grid SEQ-09. Exact exclusion of degrees and roots - SEQ-10.
Files taken from accepted copy SEQ-11; PROVENANCE.json fixes
Original. The only change support.py - addition of a panel 6.
The old algorithms of the solvers have not been changed. joint_solver.py - new code.

Justification of the new design directly: if Gi(u)=0 modulo n,
piece Gi(u)*Gj(u), n*u^beta*Gi(u), n²*u^alpha multiple n² on the same root.
Any integer combination retains this property
lesser n² The value must be equal to zero above the whole.

The equality of the base to the initial sum of lattices is confirmed by two exact
inclusions, regardless of the order of modular exclusion
checked out HNF existing python-flint. That's not a statement
optimality of a set of shifts or a general algorithm for solving all problems
multidimensional Coppersmith. Efficiency is assessed only by the new series.
