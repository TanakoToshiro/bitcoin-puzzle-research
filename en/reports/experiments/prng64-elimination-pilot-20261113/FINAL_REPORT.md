> [Русский оригинал / Russian source](<../../../../ru/reports/experiments/prng64-elimination-pilot-20261113/FINAL_REPORT.md>) · [Language selection](<../../../../README.md>)

> Documentation copy, 2026-11-25. [Home](../../../README.md) · [Topic](../../../topics/02-prng-recovery.md) · [Series documents](INDEX.md)
> Historical plans are not launch instructions. Current findings are in the [latest summary](../../../docs/LATEST_RESULTS.md).

# RNG64 — a pilot using subsets of observations

13 November 2026. The complete anchor word was fixed for two saved synthetic RNG64-05 cases. The low bits of two other outputs were considered jointly, and the low bits of the second complete output were considered separately. In each variant, the longest tested prefix fitting the table limits was selected. The choice was made from the graph before evaluating the bit values of those outputs.

Variable elimination leaves a table of observable combinations. The fraction of empty combinations is exactly the rejection rate of a uniform random control with the same anchor word. The table below reports the maximum number of variables in a joined table, including the variable being eliminated.

| Case | Outputs | Bits beyond the anchor word | Variables per table | Compatible combinations |
|---|---|---:|---:|---:|
| plus23-17-26-big-02 | Two outputs | 2 | 8 | 4 of 4 |
| plus23-17-26-big-02 | Second complete output | 2 | 17 | 4 of 4 |
| plus23-18-5-big-06 | Two outputs | 2 | 9 | 4 of 4 |
| plus23-18-5-big-06 | Second complete output | 5 | 18 | 32 of 32 |

All saved synthetic observations passed the checks on the selected subsets. On the four-bit model, 6 tables matched independent exhaustive enumeration and contained both compatible and incompatible combinations. The rejection rates apply to the selected masks and the two fixed synthetic words.

The rejection rate is 0% for all four subsets. An independent check using ordinary transition execution on 1,024 synthetic states per anchor word found a witness for every combination. Among the tested orderings for longer prefixes, the smallest joins required 21 and 25 variables for the permutation case, and 23 and 21 for the case with skipped outputs, in table-row order. These counts refer to the orderings found.

Computation took 3.52 s. [Exact results and ordering estimates](../../../evidence/prng64-elimination-pilot-20261113/RESULTS.json) · [Audit](../../../evidence/prng64-elimination-pilot-20261113/AUDIT.json) · [Plan](../../../evidence/prng64-elimination-pilot-20261113/PLAN.json).
