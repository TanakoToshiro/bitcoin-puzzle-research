> [Русский оригинал / Russian source](<../../../../ru/reports/experiments/prng64-elimination-pilot-width25-20261113/FINAL_REPORT.md>) · [Language selection](<../../../../README.md>)

> Documentation copy, 2026-11-25. [Home](../../../README.md) · [Topic](../../../topics/02-prng-recovery.md) · [Series documents](INDEX.md)
> Historical plans are not launch instructions. Current findings are in the [latest summary](../../../docs/LATEST_RESULTS.md).

# RNG64 — longer prefixes with a 25-variable limit

13 November 2026. The same two synthetic RNG64-05 cases were tested with the same complete anchor words. All longer prefixes from the earlier search were used when at least one saved ordering fitted within 25 variables per table. This includes the variable being eliminated. The overall limit of 20 million cells was removed so that every prefix with an acceptable individual table size could be tested.

The check constructs an exact table of compatible combinations. The fraction of excluded combinations equals the rejection rate for uniformly chosen observed bits with a fixed anchor word.

| Case | Outputs | Additional bits | Maximum variables | Compatible combinations | Rejected |
|---|---|---:|---:|---:|---:|
| plus23-17-26-big-02 | Two outputs | 4 | 21 | 16 of 16 | 0% |
| plus23-17-26-big-02 | Second complete output | 3 | 25 | 8 of 8 | 0% |
| plus23-18-5-big-06 | Two outputs | 4 | 23 | 16 of 16 | 0% |
| plus23-18-5-big-06 | Second complete output | 6 | 21 | 64 of 64 | 0% |
| plus23-18-5-big-06 | Second complete output | 7 | 23 | 128 of 128 | 0% |

The saved synthetic observations are compatible in every check. Numerical execution of the transition on 8,192 states per case confirmed all compatible combinations in 5 of 5 tables. There were 5 comparisons with shorter prefixes and 6 comparisons with exhaustive enumeration on a four-bit model.

Computation and verification took 1.25 s. [Results](../../../evidence/prng64-elimination-pilot-width25-20261113/RESULTS.json) · [Plan](../../../evidence/prng64-elimination-pilot-width25-20261113/PLAN.json).
