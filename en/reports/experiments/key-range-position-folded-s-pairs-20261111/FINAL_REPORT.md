> English machine translation of the [Russian source](<../../../../ru/reports/experiments/key-range-position-folded-s-pairs-20261111/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/06-key-position-statistics.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Couples with normalized s and half-range

11 November 2026 The threshold in both schemes has passed 0 of the nine tests after adjustment to nine, and 0 after correction 94. I've got a calculation 6,1 seconds.

## Data and methodology

For each 73 The keys have one median of a feature for all its signatures s first calculated 2·min(s,n−s)/n In each signature, parity tests compare the halves or parity of the quarters of two characters to half the range of the key 2×16 Comparison of the joint distributions for all combinations of quarters.

Preserved signed controls take account of origin 208 signatures, transaction patterns and methods of signing 33 January signatures with an unknown recipe used uniform surrogate nonce. In each scheme, an amendment min-P received 2 047 The main family includes nine new tests, the expanded one includes more 85 The same test must pass the same test p≤0,05 The plan is an artifact of the original study`PLAN.json`; outside the image) · Origin of signatures - an artifact of the original study (`../key-range-position-folded-s-pooled-20261111/runs/main/PROVENANCE.json`; outside the picture.

## Synthetics

For a given link, a whole history of signatures of the same key and quarter is selected 60% and 70% It's the weight of the selection. It's the condition and the circuit 256 Reassembly can change the overall transactional context of different keys.

| Scheme | Responses at independent zero, correction 9 | Amendment 94 |
|---|---:|---:|
| Full ranges | 15/256 | 9/256 |
| Quarters saved | 11/256 | 5/256 |

Below are the results at the nominal level 70%. The ranges cover both schemes.

| Couple | Form of communication and test | Actual consent | Amendment 9 | Amendment 94 |
|---|---|---:|---:|---:|
| rNorm. s | Honesty of halves | 70,0% | 74,2%–76,2% | 26,6%–44,1% |
| rNorm. s | Parity of quarters | 69,3%–69,6% | 70,7%–71,5% | 40,6%–41,0% |
| rNorm. s | Pearson on the alternation of quarters | 69,3%–69,6% | 26,2%–32,8% | 6,2%–12,5% |
| zNorm. s | Honesty of halves | 69,5%–70,1% | 73,4%–75,4% | 36,3%–47,7% |
| zNorm. s | Parity of quarters | 70,3%–70,4% | 77,3%–78,9% | 12,1%–48,4% |
| zNorm. s | Pearson on the alternation of quarters | 70,3%–70,4% | 26,2%–30,5% | 6,6%–7,4% |
| RyNorm. s | Honesty of halves | 68,9%–69,7% | 66,0%–73,0% | 28,9%–46,1% |
| RyNorm. s | Parity of quarters | 69,1%–69,9% | 68,4%–73,4% | 15,2%–55,1% |
| RyNorm. s | Pearson on the alternation of quarters | 69,1%–69,9% | 29,7%–35,5% | 7,8%–10,2% |

Full ranges - artifact of the original study (`runs/main/SYNTHETIC_uniform.json`; outside the picture) · Saved quarters - artifact of the original study (`runs/main/SYNTHETIC_quarter_matched.json`; outside the picture.

## Archive

| Couple | Test | Raw p | Amendment 9 | Amendment 94 |
|---|---|---:|---:|---:|
| rNorm. s | Honesty of halves | 0,8140 / 0,8052 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| rNorm. s | Parity of quarters | 0,6431 / 0,6357 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| rNorm. s | Pearson 2×16 | 0,8257 / 0,8125 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| zNorm. s | Honesty of halves | 1,0000 / 1,0000 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| zNorm. s | Parity of quarters | 0,6489 / 0,6240 | 1,0000 / 0,9990 | 1,0000 / 1,0000 |
| zNorm. s | Pearson 2×16 | 0,8701 / 0,8496 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| RyNorm. s | Honesty of halves | 0,4878 / 0,4761 | 0,9927 / 0,9922 | 1,0000 / 1,0000 |
| RyNorm. s | Parity of quarters | 1,0000 / 1,0000 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| RyNorm. s | Pearson 2×16 | 0,7778 / 0,7656 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |

In every pair p First, the ranges are shown, then the quarters are shown, three tables are recalculated by keys, Pearson's statistics are checked with exact fractional arithmetic, and the table results are an artifact of the original study`runs/main/RESULTS.json`; outside the picture) · Audit - an artifact of the original study (`AUDIT.json`; outside the picture.
