> English machine translation of the [Russian source](<../../../../ru/reports/experiments/order2-compact-joint-20261106/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# O2-C01 Compact joint solution without external brute force

6 November2026. Continuation O2-N01. Initial hypothesis/mask/Same passes, unlike the ones we've seen O2-S01 build up135 One-step unknowns; work with an observed grid of multiples5 and a clear restoration of the initial step O2-L01.

Grid from min(75,first-time5 positive-widthed135, step5. x135=0, shift T=s135 Unknown and limited by its mask; other masks are superimposed onx_i+T) mod p. All x_i No hidden prefixes/factor solver Don't set it up.

Two fixed encodings, both Z3 QF_BV, random_seed0:
1. rank: cubic3×3-factorifier=0, nonzero D and K last window; no coefficients A/B/C.
2. coefficients: net-recursion5 generally unknown A,B,C, B!=0, The same undegenerate last determinant.

The first order is also decided symbolically, without p²-external brute: rank1-difference with non-zero components or total affinity transition1-The constant chain is a separate, precise shift projector. Restore the normal step from the coars matrix/affinity pair; retain entire families of second-order degenerate chain coefficients.

Every day SAT gives a whole four/a couple of supports, not three fixed values by the researcher135 state-check83 I'm going to lock down the four of them generic Or a first-order couple, not one absolute shift UNSAT Both symbolic branches, plus a permanent branch, the rejected full mask does not mean UNSAT Coars systems; these four are simply blocked.

Limit10(c) on one request,30s solver-time on the branch, before128 SAT-evidence; external watchdog90steam-in/code. UNKNOWN/Exhaustion is incomplete. Don't change the budget/seed After looking at the results of this experience.

Controls to partial inputs: full generic p17-case0-full, first-order modulo17 (r3,e4,s1=7), constant7 modulo17; everything83 The meanings are complete generic Change the fully observed s100 on +1 mod17. For each complete positive input, the exact families are known in advance; the negative must have an empty full answer/The error of full control this encoding to partial is not allowed.

Primary partial INPUT: p17-case0-all, p17-case1-all, p37-new0, p67-new0, p127-new0, p257-new0 from O2-J01. Comparison with complete sets. Real256-Don't turn on the bit launch GPU/clouds/new dependencies SMT every request, the answer, reason_unknown, statistics, witnesses, checks, entrances/code/version/Hashes, logs and results: Completed requests do not repeat; if you continue to restore the locks from the saved SAT. Inner SAT-The search can be exponential; the absence of an external cycle does not prove acceleration.
