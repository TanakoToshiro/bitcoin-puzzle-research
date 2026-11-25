> English machine translation of the [Russian source](<../../../../ru/reports/status-reviews/key-range-positions-20261111/ASSOCIATION_PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/08-methodology-and-history.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Additional verification of provisions without No1–10

11 November 2026. The plan is written before the statistics of this comparison are computed, but after looking at the general histogram, which is an exploratory analysis of reusable data, not a new closed test.

Set: all 73 number-solution >10 from the previous scan x=(k−2^(n−1))/2^(n−1), range [0,1). For consistency only used 60 successively 11–70. Passes 71–74 And they don't shrink anymore.

Six pre-selected statistical checks:

1. Deviation of the distribution of all 73 Bilateral statistics of Kolmogorov-Smirnov.
2. Ten interval unevenness: Pearson statistics.
3. Deviation of the mean from 0,5.
4. Monotonic trend by problem number: Spearman correlation module, permutation test.
5. Serial addiction No11–70: maximum Pearson correlation module on lags 1–10; A single permutation test of the maximum, rather than choosing the best lag after viewing.
6. Number of series above/below 0,5 no11–70; bilateral deviation from the conditional average with a fixed number of values on each side, permutation test.

For the first three tests 50 000 simulations of independent uniform residues with corresponding bits (rounding down to the grid of each number) 50 000 The numerical positions are stored float64; above its accuracy, the grids are almost continuous, the lower exact bits of the keys are not used in analysis seed NumPy 20261111; blockage 2500. Monte Carlo p=(extreme+1)/(50000+1), later Holm for the six tests, total alpha=0,01. The originals are also published p And all the descriptive results.

Constraints: The sample of solved problems is not proven by random sampling of the original series; unknown keys are excluded, not replaced by zeros. Insignificance does not prove independence or absence of complex communication. The amendment covers these six tests, not all past studies of the project. Computing does not restore the keys and does not start a search.
