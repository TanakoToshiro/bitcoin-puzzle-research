> English machine translation of the [Russian source](<../../../../ru/reports/experiments/order2-nonlinear-20261106/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# O2-N01 Nonlinear conditions before the fourth value is selected

6 November 2026. Continuation O2-J01. Don't change old files. Affinity recursion is being checked2 modulo p same-masked/Passes.

For fixed u=x120,v=x125,t=x130 upon x135=0 let it w=x115. Rank condition2 six-state110..135 giver x110=P2(w) modulo p, wherein P2 It's quadratic. The next step gives you x105=P3(w) degree3. Draw formulas, check the equivalence of the previous reverse recursion; do not declare these conditions as additional independent information.

New way of enumerating: three prefixes120/125/130 with a general shift; to change the permissible values z=x110, decide P2(w)=z into F_p Completely filter the roots with a mask w, general shift and P3(w) masked105; then-full downstream O2-J01. Consider the zero leading coefficients: linear, constant polynomial and the need to return ALL w. K=0 and D=0 They refer to the former separate branch of degenerate sequences rather than the negation of the whole model.

Controls before search: all square/linear/polynomial modulo7,11,17 against direct rooting;1000 deterministic identities P2/P3 against normal reverse recursion;33 full-length synthetic witness with these prefixes, including checking the presence of a known witness w Full-length prefixes are NOT considered blind restoration.

Complete blind search:18 old-school p7/p17 entrances, p37-new0/1, p67-new0/1, p127-new0, p257-new0 —24 entrance O2-J01. Solver read INPUT; EXPECTED It's just checking the results1024 prefix;60branch-on/try at best200000 Prefixes. Incompleteness clearly retained; control timeouts are not negative/constant Leave the branch unchanged.

Couple benchmark on p17-case0-all, p37-new0, p127-new0, p257-new0: former O2-J01 And the new algorithm with tracemalloc both of them INPUT, Count not only the number of fours that came out, but all the prefixes that were visited, checked z, quadratic equations, returned roots, constant-case scanning, coefficients/Matrices, memory and time.

For real masks – only analytical cost: width110 below115 on5bit, so the number z110 up to the general boundaries approximately in32more w115. You can't hide this work behind a small number of candidates that have been released GPU Keep all the inferences, errors and statuses.
