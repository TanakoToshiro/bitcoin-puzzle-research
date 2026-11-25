> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-model-audit-20261031/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E1k The matching of known keys does not verify these four models

2026-10-31. Completed. Read the finished lines E1e; MT-No matrices were generated. Ranks are independently recalculated above the lines read in two orders of exception, not taken from the old report.

**All 3767 Observable bits are independent as linear functions 19937-This is true even after the condition raw256[254]=0, sufficient for the admissibility of scalar No256.**

Consequence: any assignment of all the published lower bits admits a state, and after excluding any problem solved, the remainder is completely free holdout-It's redundant, it's proven to have zero predictive power at once, and a forced most significant bit is not considered a prediction.

| Model | Rank of observations | Rang with guard | Rank with No155 | Dimension No155 |
|---|---:|---:|---:|---:|
| api-bits_i-na-s2-zero | 3767 | 3768 | 3917 | 149 |
| api-bits_i-na-s1-zero | 3767 | 3768 | 3922 | 154 |
| api-bits_im1-na-s1-zero | 3767 | 3768 | 3922 | 154 |
| api-bits_im1-na-s2-zero | 3767 | 3768 | 3922 | 154 |

**Eight intervals are retained only for a specific getrandbits(i), stride=2.** Already getrandbits(i), stride=1 giveaway 2^154 leftover155 with the same true observations and sufficient scalar guard. Combining these alternatives is the full initial interval; there is no confirmed abbreviation of this key.

Main API There are no unknown rejections. Stride/API Different hypotheses, not new stories randrange. The unification is not proof of the falsehood of the main hypothesis: it shows the dependence of reduction on its choice. The list is finite; we do not declare the completeness of all possible generation programs.

Controls: 64/64 a set of observations (half of the random ones) MT-states, half independent random bits) constructively reproduced 88 conditions, including 24 witness155 with real observations in full alternatives. Direct numerical execution verified getrandbits before256, It's not just equations.

Enforcement of witnesses - CPython 3.11. Historical equivalence getrandbits It's been explored before; new historical binaries haven't been launched here seed The nonlinear conditions of the remaining unknown public points were not imposed.

Calculation time: 2.722 C. Machine result - artifact of the initial research (`AUDIT.json`; outside the picture), everything holdout-Consequences - an artifact of the initial study (`HOLDOUT.csv`; outside the picture), witness states - artifact of the initial study (`WITNESSES.json`; outside the image), hashes - artifact of the original study (`INPUTS.json`; outside the picture.

Continuation: Only a new observation, which is not free in the model, a limitation of the method of obtaining a state, or an independent reason to choose a specific generation program is useful.
