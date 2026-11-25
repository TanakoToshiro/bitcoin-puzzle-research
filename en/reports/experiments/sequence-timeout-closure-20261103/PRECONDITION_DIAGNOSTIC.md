> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-timeout-closure-20261103/PRECONDITION_DIAGNOSTIC.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Additional cost diagnostics LLL

First previous case SEQ-12, null_p6_0, It's tested in another way:
LLL(delta=.75,eta=.51) then LLL(delta=.99,eta=.51) It's the result.
Intermediate basis and both transition matrices allow to obtain the full
whole-certificate T=T2*T1, T*B=L, det(T)=±1.
The input lattice, weights, equations and boundaries are unchanged, but the final
The reduced base may differ. The result is stored separately.
The original single-pass algorithm is not declared complete by such a result.
It's a diagnostic candidate for acceleration, limit 600 seconds, unchanged
Key results. Selection null_p6_0 It is made in the order of the list, without a true root.
