> English machine translation of the [Russian source](<../../../../ru/reports/experiments/order2-nonlinear-20261106/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# O2-N01 Intermediate results

6 November 2026. Nonlinear conditions and cost of inversion.

## controls

The result is an artifact of the original study (`stages/controls.json`; outside the picture. All small polynomial roots,1000 identities,33 fullsize supplied-prefix checks and degree-drop controls passed.

## cases

The result is an artifact of the original study (`stages/cases.json`; outside the picture. 

## benchmark

The result is an artifact of the original study (`stages/benchmark.json`; outside the picture. 

## cost

The result is an artifact of the original study (`stages/cost.json`; outside the picture. 

<!-- O2-N01-FINAL -->

# O2-N01 Nonlinear conditions of recursion itself

6 November 2026, Europe/Moscow. Continuation O2-J01. **The square and the cubic conditions are deduced, implemented and tested. They allow fewer quadruples to be produced, but the way we tried to produce them was slower than the previous method on all four paired tests24 Practical reduction of real search and new bits Puzzle Nope.**

The model is old: s_(i+2)=a*s_(i+1)+b*s_i+c modulo simple p, b!=0, canonical states, initial states83 Masks and numbers, a coercive senior puzzle-The bit is not an observation checkpoints They haven't changed.

## What Nonlinear Conditions Provide

After the overall shift has been eliminated x135=0. Let me w=x115 - the last unknown, and u=x120,v=x125,t=x130 The three of the prefixes selected have six different states110..135 Hankel's rank2. After the coefficients are excluded, this gives

```
x110 = P2(w) mod p, степень P2 <= 2;
x105 = P3(w) mod p, степень P3 <= 3.
```

Formulas are accurate, with full consideration modulo p. They don't replace XOR They don't add up, they don't throw off the transfers x110/x105 And the single shift is checked together. [Conclusion of formulas](<MATH.md>).

**This is the same information that the previous algorithm tested by reverse recursion after selecting the data w.** The new presentation allows you to try to get only suitable w The rewrite of the equations itself does not create additional observations.

Tested algorithm override the permissible z=x110, quadratic P2(w)=z Fully in the field, checks the mask w, total shift and cubic P3(w) observation105, Then it launches the previous full downstream. Externalu,v,t) They come out of masks; the hidden true three solver It's not transmitted.

Linear and permanent are taken into account P2. In particular, u=1,v=2,t=0 giver P2(w)=5/4, independently w. In such a case, by coincidence z You need to return all the allowables w, not zero/It's one root 28 permanent 168 First-order degenerate initial sequences/constant They remain in the former separate branches.

## Correctness and scope of work

All24 Entrance complete:18 formerly p7/p17, two p37/p67, p127-new0 and p257-new0. Fully coincided families, shifts, model numbers and forecasts O2-J01. There were no hidden parameters EXPECTED It was only used for post-search checks83 Observations are limitations; individual holdout Nope.

| Input | Fours of the old method | Requests P2(w)=z | Returned field roots | After P3 and general shift | Projections No71 |
|---|---:|---:|---:|---:|---|
| p17-case0-all | 1,424 | 1,091 | 1,155 | 91 | [0] |
| p37-new0 | 11,496 | 12,234 | 12,130 | 808 | [0] |
| p127-new0 | 289,201 | 574,106 | 572,447 | 23,666 | [1] |
| p257-new0 | 289,201 | 575,748 | 577,408 | 5,808 | [2] |

Throughout the series, the previous method **652,850** The new one only came out **35,466**, but it did **1,259,188** Root requests, root filtering, degree drop testing, and cubic condition. The small number of candidates released hides a lot of work if you count only the last column.

The completeness of the new method is explained simply: any permissible w is the only z=P2(w), and a complete search of the permissible z with a complete solution of the quadratic equation must return w. A permanent case requires a separate full refund w. Conditions K=0/D=0 pass only in generic-branches; first/The zero order is not lost. This is confirmed by an accurate comparison of the complete answers.

## Pair dimension

The same INPUT, new individual catalogues, tracemalloc All the comparisons are complete; there are no timeouts in these measurements.

| Input | O2-J01 wall, s | Nonlinear inversion wall, s | Slowdown | The old memory/new, MiB |
|---|---:|---:|---:|---:|
| p17-case0-all | 0.067 | 0.119 | 1.77× | 0.22 / 0.09 |
| p37-new0 | 0.069 | 0.731 | 10.66× | 0.59 / 0.18 |
| p127-new0 | 0.448 | 23.117 | 51.65× | 1.84 / 0.89 |
| p257-new0 | 0.409 | 36.788 | 89.93× | 3.61 / 3.58 |

Wall include checkpoint and the tools, memory - trackable discharges, not RSS. Tracemalloc influence Python-It's arithmetic; these coefficients are not the universal speed of all implementations wall. The table of all square residues has not been precalculated; each discriminant is processed by a field root extraction algorithm toy-downstream There is an array of inversions that cannot be transferred to256The bit is costless.

## Exact boundary for real masks

Mask110 contains109bat and mask115 —114Before the grid's joint constraints z110 roughly32grid-size w115. Substitution z instead w Translates the original Descartes domain approximately2^542 into2^547, And then we solve the quadratic equations, and with the general shift, the comparison is also about32time 2^540.321928 against **2^545.321928**. This is the price of a proven method of accessing a nonlinear condition, not an estimate of all possible algorithms.

Simple prefix exceptions can be transferred earlier:

```
K=t*u+t*v-t²-v² != 0;
D(w)=(v-u)²-(u-w)*(t-v) != 0.
```

For t!=0 The first test prohibits no more than one u for eachv,t); upon K!=0 The second one prohibits not more than one w. According to the exact dimensions of real masked nets, their aggregate exclusion is limited from above by fractions **9.4705e-42** field O2-J01. The border is conservative and allows crossings. **It only applies to inspections K,D, Not the full force of multi-faceted masks P2/P3.** Integer calculation and proof - artifact of the original study (`REAL_PREFIX_BOUNDS.json`; outside the picture), [mathematics](<MATH.md>).

In addition, this particular scheme with external brute force()u,v,t) roughly **2^398** Threes that are compatible with the general shift, even the free solution of the latter w It's a constraint on the selected search partition, not a lower bound on any conceivable algorithm.

## Conclusion and the Next Unsolved Problem

The nonlinear equations are correct, but the scheme to go through an earlier state is> turn the square polynomial> cubical **failed to win**. She's being moved GPU full-on256-The current, cheaper, validated algorithm is not valid O2-J01.

For further advancement, a way to use several multi-membered conditions is needed **together in several senior parts**, Without an external brute force of almost all threes, and without replacing one unknown with a longer grid of another, such an algorithm has not been implemented in this experiment. A negative result does not exclude other methods for solving limited modular systems, nor does it refute the generator hypothesis itself.

## Audit and artifacts

Checked out6587 square/linear/polynomial modulo7/11/17 straight rooting;1000 Identities and determinants;33 It's a full-length synthetic example with DATA prefixes, and the last one is arithmetic control, not blind state recovery.

Audit rechecked 125 continuous blocks with SHA-256-chains, 236 families, 252 extreme shifts and 236 The full small checks confirm the sequences found p² zero K amidst p³ prefixes and no more than one zero D upon K!=0. Checked out1320 unchanged files O2-J01 Continue without repeating the finished blocks. AUDIT.json - an artifact of the initial study (`AUDIT.json`; outside the picture.

[README](<README.md>) contains commands; CSV - an artifact of the initial study (`NUMERIC_TABLE.csv`; outside the picture), machine summary - an artifact of the original study (`NUMERIC_REPORT.json`; outside the picture), [protocol](<PROTOCOL.md>), RESULTS.md and JOURNAL.md They save the results and the inferences. Real keys haven't been moved, cloud/GPU All running passages are complete, no background tasks.
