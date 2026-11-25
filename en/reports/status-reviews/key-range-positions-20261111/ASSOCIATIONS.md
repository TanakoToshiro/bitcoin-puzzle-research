> English machine translation of the [Russian source](<../../../../ru/reports/status-reviews/key-range-positions-20261111/ASSOCIATIONS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/08-methodology-and-history.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Relationships of provisions without the first ten keys

11 November 2026. Set: 73 decision11–70 no75–135 stepwise 5. The source is a previous vetted image of the project, not an updated Internet table, and the position is standardized to its own range of tasks: `(key−2^(n−1))/2^(n−1)`.

**In the selected tests, significant signs of unevenness, trend and serial dependence were not found.** This is not proof of the absence of a complex connection or cryptographic randomness.

## Descriptive results

- Average position: 52,02%; median: 50,18%.
- Below the middle 36 decisions above or in the middle 37.
- Ten sites 0–10%, …, 90–100%: **4, 6, 7, 9, 10, 4, 14, 7, 5, 7**. Waiting at uniformity 7,3 to the station.
- Correlation of Spearman position with problem number: +0,055.
- Correlation of neighboring positions for continuous No11–70: +0,067.
- Maximum Module Correlation on Lags 1–10: +0,245 lag-side 3. The joint maximum test is insignificant p≈0,502; There is no such thing as a pattern of reasoning.
- Number of series above/below 50% no11–70: 32 conditionally 30,97.

## Statistical audits

50 000 simulation/permutation, fixed seed 20261111, amendment Holm for the six inspections, the general level 0,01. Lags tested by single maximum test. misses after No70 They don't shrink into the neighborhood. [Plan](<ASSOCIATION_PROTOCOL.md>) It was recorded before calculating these statistics, but after viewing the previous histogram.

| Verification | Reference p, Monte Carlo | p afterward Holm |
|---|---:|---:|
| Uniformity, Kolmogorov-Smirnov | 0,563 | 1,000 |
| Uniformity of Ten Sites, Pearson | 0,248 | 1,000 |
| Average versus 50% | 0,552 | 1,000 |
| Trend by number, Spearman | 0,641 | 1,000 |
| Maximum autocorrelations on lags 1–10 | 0,502 | 1,000 |
| Number of series above/mid-point | 0,795 | 1,000 |

p The four original statistics are separately verified by standard functions SciPy: KS, χ², Spearman and Pearson lag-1. Numerical summary, versions and hashes: ASSOCIATION_RESULTS.json - an artifact of the initial study (`ASSOCIATION_RESULTS.json`; outside the picture); reproducible calculation: check_associations.py - an artifact of the initial study (`check_associations.py`; outside the picture.

## Permissible conclusion

14 decision-making 60–70% The observed maximum of the histogram, but the total statistics of the ten regions do not stand out relative to the uniform model, this is not the reason to consider the site preferred for the unsolved problem 73 Weak effects may go undetected; these tests do not test for arbitrary nonlinear relationships between full keys.

The set of known solutions is not proven by random sampling of the original series: it may have been influenced by the order and search methods; data has been used many times before; the current amendment does not cover all past studies; no new keys, bits or search launches are created by this analysis.
