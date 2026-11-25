> [Русский оригинал / Russian source](<../../../../ru/reports/experiments/prng64-elimination-pilot-width32-20261114/FINAL_REPORT.md>) · [Language selection](<../../../../README.md>)

> Documentation copy, 2026-11-25. [Home](../../../README.md) · [Topic](../../../topics/02-prng-recovery.md) · [Series documents](INDEX.md)
> Historical plans are not launch instructions. Current findings are in the [latest summary](../../../docs/LATEST_RESULTS.md).

# RNG64 — longer prefixes with a 32-variable limit

14 November 2026. The same two synthetic RNG64-05 cases were tested with the same complete anchor words. For each new prefix fitting the limit of 32 variables per table, the saved ordering with the smallest total cell count was selected. The count includes the variable being eliminated.

The rejection rate is the fraction of incompatible combinations of additional bits when those bits are chosen uniformly and the anchor word is fixed.

| Case | Outputs | Additional bits | Variables per table | Compatible combinations | Rejected |
|---|---|---:|---:|---:|---:|
| plus23-17-26-big-02 | Two outputs | 6 | 31 | 64 of 64 | 0% |
| plus23-17-26-big-02 | Second complete output | 4 | 30 | 16 of 16 | 0% |
| plus23-18-5-big-06 | Second complete output | 8 | 30 | 256 of 256 | 0% |
| plus23-18-5-big-06 | Second complete output | 9 | 31 | 512 of 512 | 0% |

For plus23-18-5-big-06 in the two-output mode, a longer prefix requires at least 40 variables under the saved orderings.

Direct evaluation of 32,768 synthetic states per case confirmed all compatible combinations in 4 of 4 tables. The saved observations passed every check. Projections onto smaller masks matched the results obtained with the limit of 25.

Computation and verification took 35.36 s. [Results](../../../evidence/prng64-elimination-pilot-width32-20261114/RESULTS.json) · [Plan](../../../evidence/prng64-elimination-pilot-width32-20261114/PLAN.json).
