> English machine translation of the [Russian source](<../../../../ru/reports/experiments/key-range-position-qy-signature-tests-20261111/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/06-key-position-statistics.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Qy Signatures in key position checks

11 November 2026 It took a year 327,6 limit-second 900 Checked out 73 key and 208 Synthetics is built on the basis of signatures 5374 Full enclosures p≤0,05 In both cases, the controls were carried out 0 from 50 tests.

## Data and statistics

For Qy In each historical group, eight features are aggregated by the median signatures of one key. r and s divided into groups, z on 2²⁵⁶, Ry on the field module, minor bytes on 255. Qy It's divided into a field module Ry public nonce-Each median falls into one of four equal baskets.

| Group | Keys | Signatures |
|---|---:|---:|
| Qy | 73 | — |
| January 2015 | 36 | 36 |
| Late expenses | 37 | 157 |
| Disclosure 2019 | 15 | 15 |

Previous statistics compare halves and Pearson table 2×4. Two-way match counting uses a distance from half the number of keys. In Pearson, strings represent half the range of the key, and columns represent the baskets of the feature. Zero distributions are derived from complete enclosures with original signature patterns, number of key signatures, algorithms, and classes s. For 33 Unexplained January signatures use the former uniform surrogate nonce. Signatures of a single key give one line in the group 2019 Years are also found in the late-expenditure group.

Common min-P consider 50 Tests at the same time 2 047 In the case of control and the string being evaluated, rank matching is conservatively counted; circuits use full ranges or retain a quarter of the range of each key. [Pearson's Statistical Formula](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.chi2_contingency.html) · [Ranking calibration](https://arxiv.org/abs/1411.7565) • Plan - an artifact of the initial study (`PLAN.json`; outside the picture.

## Synthetics

For each of them 25 two levels and two forms of communication 128 You pick the vector of the quarters of the keys, then you take a whole synthetic history of each key from a separate bank of signed cases, and agreeing with half the field or two extreme quarters increases the weight of the story. 60% and 70% They give you a weight. Actual consent depends on the baskets available. Reassembly saves the history of one key and can change the combined context of different keys in a transaction.

| Monitoring | Independent null housing | Reassembled null buildings by group |
|---|---:|---:|
| Ranges | 14/256 | curve 7/128, early 7/128, later 7/128, reveal2019 4/128 |
| Quarters | 6/256 | curve 5/128, early 3/128, later 7/128, reveal2019 8/128 |

The power table shows the match test for the halves and Pearson's center-to-edge link. Signatures have a range of eight features and both control circuits Qy Second test passes, actual consent and basket availability are preserved for each feature.

| Group | Form of communication | Level | Proportion of passes on raw p | Proportion of passes after amendment |
|---|---|---:|---:|---:|
| Qy | Half | 60,0% | 30,5%–34,4% | 3,1%–7,8% |
| Qy | Half | 70,0% | 89,1%–92,2% | 46,9%–59,4% |
| Qy | Centre - edges | 60,0% | 21,1%–27,3% | 0,0%–7,0% |
| Qy | Centre - edges | 70,0% | 79,7%–86,7% | 39,1%–62,5% |
| January 2015 | Half | 60,0% | 0,0%–21,9% | 0,0%–3,1% |
| January 2015 | Half | 70,0% | 0,0%–68,0% | 0,0%–24,2% |
| January 2015 | Centre - edges | 60,0% | 8,6%–20,3% | 0,0%–3,1% |
| January 2015 | Centre - edges | 70,0% | 43,0%–60,2% | 4,7%–17,2% |
| Late expenses | Half | 60,0% | 0,0%–29,7% | 0,0%–2,3% |
| Late expenses | Half | 70,0% | 0,0%–76,6% | 0,0%–23,4% |
| Late expenses | Centre - edges | 60,0% | 5,5%–22,7% | 0,0%–3,1% |
| Late expenses | Centre - edges | 70,0% | 25,8%–71,1% | 0,8%–29,7% |
| Disclosure 2019 | Half | 60,0% | 0,0%–14,1% | 0,0%–0,8% |
| Disclosure 2019 | Half | 70,0% | 0,0%–37,5% | 0,0%–5,5% |
| Disclosure 2019 | Centre - edges | 60,0% | 2,3%–14,8% | 0,0%–1,6% |
| Disclosure 2019 | Centre - edges | 70,0% | 14,1%–29,7% | 0,0%–3,9% |

Proportion of rows with access to both halves s One-quarter of the donors were keys 0,0% three groups while maintaining classes high-S and low-S. Synthetics at ranges - an artifact of the initial study (`runs/main/SYNTHETIC_uniform.json`; outside the picture) · Synthetics with preservation of quarters - an artifact of the original study (`runs/main/SYNTHETIC_quarter_matched.json`; outside the picture.

## Archive

General p family 0,871 for ranges and 0,915 The table is ordered by the larger of the two corrected p. The boundary of the decision was fixed before calculation.

| Group and attribute | Test | Keys | Raw p, ranges / quarter | Scorr. p, ranges / quarter |
|---|---|---:|---:|---:|
| reveal2019/r_low_byte | Pearson 2×4 | 15 | 0,0605 / 0,0684 | 0,8804 / 0,9150 |
| reveal2019/Ry_low_byte | Pearson 2×4 | 15 | 0,0596 / 0,0693 | 0,8706 / 0,9175 |
| later/r | Pearson 2×4 | 37 | 0,1074 / 0,0791 | 0,9688 / 0,9297 |
| reveal2019/Ry | Coincidences | 15 | 0,1357 / 0,1289 | 0,9927 / 0,9912 |
| early/z | Pearson 2×4 | 36 | 0,1538 / 0,1567 | 0,9971 / 0,9976 |
| later/s | Pearson 2×4 | 37 | 0,1440 / 0,1538 | 0,9966 / 0,9976 |
| later/r | Coincidences | 37 | 0,1807 / 0,1382 | 0,9980 / 0,9956 |
| early/s_low_byte | Pearson 2×4 | 36 | 0,1733 / 0,1733 | 0,9976 / 0,9990 |
| reveal2019/s | Pearson 2×4 | 15 | 0,1987 / 0,1641 | 0,9995 / 0,9980 |
| curve/Qy | Coincidences | 73 | 0,8110 / 0,8237 | 1,0000 / 1,0000 |
| curve/Qy | Pearson 2×4 | 73 | 0,5361 / 0,5464 | 1,0000 / 1,0000 |
| early/r | Coincidences | 36 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| early/r | Pearson 2×4 | 36 | 0,5840 / 0,5859 | 1,0000 / 1,0000 |
| early/s | Coincidences | 36 | 0,6304 / 1,0000 | 1,0000 / 1,0000 |
| early/s | Pearson 2×4 | 36 | 0,5923 / 0,5220 | 1,0000 / 1,0000 |
| early/z | Coincidences | 36 | 0,8618 / 0,8638 | 1,0000 / 1,0000 |
| early/Ry | Coincidences | 36 | 0,8730 / 0,8682 | 1,0000 / 1,0000 |
| early/Ry | Pearson 2×4 | 36 | 0,2241 / 0,2031 | 0,9995 / 1,0000 |
| early/r_low_byte | Coincidences | 36 | 0,2344 / 0,2368 | 1,0000 / 1,0000 |
| early/r_low_byte | Pearson 2×4 | 36 | 0,5327 / 0,5195 | 1,0000 / 1,0000 |
| early/s_low_byte | Coincidences | 36 | 0,6001 / 0,6343 | 1,0000 / 1,0000 |
| early/z_low_byte | Coincidences | 36 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| early/z_low_byte | Pearson 2×4 | 36 | 0,9893 / 0,9946 | 1,0000 / 1,0000 |
| early/Ry_low_byte | Coincidences | 36 | 0,8740 / 0,8599 | 1,0000 / 1,0000 |
| early/Ry_low_byte | Pearson 2×4 | 36 | 0,2671 / 0,2788 | 1,0000 / 1,0000 |
| later/s | Coincidences | 37 | 0,7505 / 1,0000 | 1,0000 / 1,0000 |
| later/z | Coincidences | 37 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| later/z | Pearson 2×4 | 37 | 0,9448 / 0,9419 | 1,0000 / 1,0000 |
| later/Ry | Coincidences | 37 | 0,7446 / 0,7285 | 1,0000 / 1,0000 |
| later/Ry | Pearson 2×4 | 37 | 0,7842 / 0,7822 | 1,0000 / 1,0000 |
| later/r_low_byte | Coincidences | 37 | 0,5156 / 0,5181 | 1,0000 / 1,0000 |
| later/r_low_byte | Pearson 2×4 | 37 | 0,3003 / 0,2739 | 1,0000 / 1,0000 |
| later/s_low_byte | Coincidences | 37 | 0,5171 / 0,4956 | 1,0000 / 1,0000 |
| later/s_low_byte | Pearson 2×4 | 37 | 0,4604 / 0,4463 | 1,0000 / 1,0000 |
| later/z_low_byte | Coincidences | 37 | 0,3193 / 0,3291 | 1,0000 / 1,0000 |
| later/z_low_byte | Pearson 2×4 | 37 | 0,4688 / 0,4858 | 1,0000 / 1,0000 |
| later/Ry_low_byte | Coincidences | 37 | 0,5259 / 0,5015 | 1,0000 / 1,0000 |
| later/Ry_low_byte | Pearson 2×4 | 37 | 0,3218 / 0,3120 | 1,0000 / 1,0000 |
| reveal2019/r | Coincidences | 15 | 0,6045 / 0,5830 | 1,0000 / 1,0000 |
| reveal2019/r | Pearson 2×4 | 15 | 0,8384 / 0,8335 | 1,0000 / 1,0000 |
| reveal2019/s | Coincidences | 15 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| reveal2019/z | Coincidences | 15 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| reveal2019/z | Pearson 2×4 | 15 | 0,8340 / 0,8262 | 1,0000 / 1,0000 |
| reveal2019/Ry | Pearson 2×4 | 15 | 0,4370 / 0,4336 | 1,0000 / 1,0000 |
| reveal2019/r_low_byte | Coincidences | 15 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| reveal2019/s_low_byte | Coincidences | 15 | 0,6006 / 0,6113 | 1,0000 / 1,0000 |
| reveal2019/s_low_byte | Pearson 2×4 | 15 | 0,6626 / 0,6831 | 1,0000 / 1,0000 |
| reveal2019/z_low_byte | Coincidences | 15 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| reveal2019/z_low_byte | Pearson 2×4 | 15 | 0,8145 / 0,8379 | 1,0000 / 1,0000 |
| reveal2019/Ry_low_byte | Coincidences | 15 | 0,5889 / 0,6060 | 1,0000 / 1,0000 |

Archive checks use the previous ones 73 Synthetic estimates refer to two predefined forms of communication and specified group sizes p - an artifact of the initial study (`runs/main/RESULTS.json`; outside the picture) · Audit - an artifact of the original study (`AUDIT.json`• Frozen plan and code - artifact of the original study (`FROZEN.json`; outside the picture.
