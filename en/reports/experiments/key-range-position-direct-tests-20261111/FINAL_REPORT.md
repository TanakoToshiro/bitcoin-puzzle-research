> English machine translation of the [Russian source](<../../../../ru/reports/experiments/key-range-position-direct-tests-20261111/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/06-key-position-statistics.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Direct key position tests by coordinate Qx

11 November 2026 On a stored synthetic with nominal matching 70% The new tests found a link in 88,3–91,4% The previous family of four models had a share of the same 40,6% for both controls 73 The archive keys did not pass any of the new tests p≤0,05. Launch's up 32,1 seconds.

## Methods

Half of the initial ranges are compared 73 keys11 For each key, we calculate the exact quarter of the field that it enters Qx. The match test considers the absolute deviation of the number of halves approvals 73/2. Pearson's Criterion uses a table 2×4, where the rows correspond to halves of the range and the columns correspond to four quarters of the field Qx. [Binomial test](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.binomtest.html) · [The Pearson Criterion](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.chi2_contingency.html).

For every test p rank-rate 4 095 The two controls use uniform keys from the initial ranges and uniform keys from the actual quarter of each range. All points are obtained by multiplying the generator by synthetic scalars. For the family of two tests, the Bonferroni amendment is applied p≤0,05 The plan recorded before launch is an artifact of the original study`PLAN.json`; outside the picture) · Plan and code hashes - an artifact of the original research (`FROZEN.json`; outside the picture.

## Comparison on saved signal

Same tested 128 The levels represent the selection parameter of the previous experiment. The column "Previous Four Models" shows the proportion of p≤0,05 At least one model, after adjusting for four models, the columns of individual new tests show the shares of their own p. The last column shows the proportion of cases in which at least one new test passed the threshold after adjusting for two tests p, the previous transfer assessment included an additional condition.

| Monitoring | Nominal level | Actual consent | The former four models | halves matching | Pearson 2×4 | Two tests corrected |
|---|---:|---:|---:|---:|---:|---:|
| Ranges | 55% | 55,2% | 5,5% | 8,6% | 5,5% | 7,0% |
| Ranges | 60% | 58,8% | 5,5% | 26,6% | 20,3% | 20,3% |
| Ranges | 65% | 65,0% | 14,1% | 71,1% | 53,9% | 59,4% |
| Ranges | 70% | 70,2% | 40,6% | 93,8% | 87,5% | 91,4% |
| Quarters | 55% | 55,2% | 4,7% | 14,8% | 12,5% | 14,1% |
| Quarters | 60% | 60,6% | 10,9% | 34,4% | 28,9% | 30,5% |
| Quarters | 65% | 65,6% | 26,6% | 72,7% | 60,2% | 62,5% |
| Quarters | 70% | 69,4% | 40,6% | 91,4% | 84,4% | 88,3% |

For independent coincidences with zero probability 0,5 double-check 73 Rejects the null hypothesis with the number of coincidences ≤27 or ≥46. Its actual size 3,44%. Power with true probabilities 55%, 60%, 65% and 70% form 10,5%, 34,5%, 68,7% and 92,2%. This is a calculation for one predefined form of communication.

## A new signal "center - edges"

Candidates were selected within a given quarter of the key, and the probability of acceptance depended on half of the key's range agreeing to be hit Qx It's in one of the two extreme quarters of the field, and each control circuit is created by 128 Half the field, half the field Qx They mix central and extreme quarters, so the match test is not sensitive to this form of connection.

| Nominal level | Pearson 2×4, ranges | Pearson 2×4, quarter | Corrected, ranges | Corrected, quarters |
|---|---:|---:|---:|---:|
| 55% | 7,8% | 14,8% | 7,0% | 9,4% |
| 60% | 26,6% | 32,0% | 20,3% | 24,2% |
| 65% | 52,3% | 56,3% | 39,8% | 47,7% |
| 70% | 82,8% | 86,7% | 70,3% | 81,3% |

At the level 70% The match test only worked in the 2 and 3 from 128 On independent zero controls, the family gave 16/512 and 18/512 The number of passes, Wilson's actual agreement and Wilson intervals for all conditions are preserved in the results - an artifact of the original study`runs/main/RESULTS.json`; outside the picture.

## Archive

halves coincidence 29 from 73. In the lower half of the range, counters by quarters Qx composed 8, 10, 10 and 8. In the top half, 16, 10, 9 and 2.

| Test | p, ranges | p, quarter | Scorr. p, ranges | Scorr. p, quarter |
|---|---:|---:|---:|---:|
| halves matching | 0,103 | 0,099 | 0,206 | 0,198 |
| Pearson 2×4 | 0,105 | 0,102 | 0,210 | 0,204 |

Qx This amendment covers two tests of current experience Roadhero same 83 published decisions from 160 The tasks, composition and meanings coincided with the archive. [Catalogue](https://github.com/roadhero/Bitcoin-Puzzle-Info/blob/main/BTC-Solved-Unsolved.txt) • Reconciliation of the catalog - an artifact of the initial study (`CATALOG_CHECK.json`; outside the picture.

Recalculated 73 Archival dots 1 534 The number of cases that were saved matched the number of approvals, and the previous number of detections are reproduced from the journal 34 table-checked SciPy. The hashes of inputs and frozen files matched before and after the calculation`runs/main/TABLES.npz`; outside the image) · Limit and launch time - artifact of the original study (`runs/main/OUTER.json`; outside the picture.
