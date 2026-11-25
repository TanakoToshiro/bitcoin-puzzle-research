> English machine translation of the [Russian source](<../../../../ru/reports/experiments/key-range-position-point-signature-pairs-20261111/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/06-key-position-statistics.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Public key coordinates and signature features

11 November 2026 In both schemes, the threshold has passed 0 from 24 test-adjusted 24 and 0 corrected 130. The main calculation took 51,8 seconds.

## Data and verification of controls

For Qx and Qy The coordinates of the public point of each key are taken r, z, Ry and 2·min(s,n−s)/n We've got medians for all the key signatures 73 The keys give one line. Used 208 Coordination Ry pertaining nonce-For each pair, they checked the parity of halves, parity of quarters and co-distribution of quarters according to Pearson 2×16.

Coordination Qx reproduced for the same synthetic keys 392302 basket Qy and a quarter of the key 18 And all of the complete recalculations of the signatures matched the coordinates, all of the previous signs and states of the generator. For calibration, independent zero, and selection bank, we took the first, middle, and last hull in each circuit, preserved the origin of the signatures, the transaction patterns, and the signature methods 33 January signatures with an unknown recipe used uniform surrogate nonce. Origin of signatures - artifact of the original study (`../key-range-position-folded-s-pooled-20261111/runs/main/PROVENANCE.json`; outside the picture.

Amendment min-P use 2 047 The first family contains the signed hulls on the circuit 24 The second test also includes the new test 106 The same tests, the same controls, one test must pass p≤0,05 And in full ranges, and with quarters saved, the plan is an artifact of the original study`PLAN.json`; outside the picture.

## Synthetics

Entire histories of the same key and quarter are selected for a given link, the dot and signatures remain from the same story 60% and 70% They give you the weight of the selection 256 The overall transactional context of the different keys may change when this is selected.

| Scheme | Responses at independent zero, correction 24 | Amendment 130 |
|---|---:|---:|
| Full ranges | 7/256 | 9/256 |
| Quarters saved | 9/256 | 6/256 |

Table shows fractions of detections at nominal level 70%. The ranges cover both control schemes.

| Couple | Form of communication and test | Actual consent | Amendment 24 | Amendment 130 |
|---|---|---:|---:|---:|
| Qx–r | Honesty of halves | 70,0%–70,1% | 58,6%–68,0% | 39,5%–57,0% |
| Qx–r | Parity of quarters | 69,9%–70,0% | 57,4%–78,1% | 35,5%–44,1% |
| Qx–r | Pearson on the alternation of quarters | 69,9%–70,0% | 12,5%–17,2% | 2,0%–5,9% |
| Qx–z | Honesty of halves | 69,4%–69,6% | 49,6%–63,3% | 42,6%–54,7% |
| Qx–z | Parity of quarters | 68,5%–69,3% | 40,2%–43,8% | 20,3%–34,8% |
| Qx–z | Pearson on the alternation of quarters | 68,5%–69,3% | 9,0%–10,2% | 3,9%–6,2% |
| Qx–Ry | Honesty of halves | 69,6%–70,0% | 50,4%–66,0% | 42,2%–46,1% |
| Qx–Ry | Parity of quarters | 69,4%–69,9% | 57,0%–63,7% | 43,0%–46,1% |
| Qx–Ry | Pearson on the alternation of quarters | 69,4%–69,9% | 14,8%–16,0% | 3,1%–10,2% |
| QxNorm. s | Honesty of halves | 69,6%–69,8% | 52,7%–66,8% | 18,4%–43,8% |
| QxNorm. s | Parity of quarters | 69,6%–70,5% | 62,9%–69,9% | 39,8%–43,4% |
| QxNorm. s | Pearson on the alternation of quarters | 69,6%–70,5% | 9,4%–12,1% | 2,0%–6,6% |
| Qy–r | Honesty of halves | 70,4%–70,6% | 69,1%–76,2% | 22,7%–59,0% |
| Qy–r | Parity of quarters | 70,0% | 67,2%–69,1% | 46,5% |
| Qy–r | Pearson on the alternation of quarters | 70,0% | 16,0%–20,7% | 3,9%–6,6% |
| Qy–z | Honesty of halves | 69,6%–70,3% | 56,6%–64,5% | 27,0%–46,5% |
| Qy–z | Parity of quarters | 69,8%–70,0% | 49,6%–74,6% | 26,2%–53,5% |
| Qy–z | Pearson on the alternation of quarters | 69,8%–70,0% | 12,5%–13,7% | 4,3%–6,2% |
| Qy–Ry | Honesty of halves | 69,3%–69,9% | 61,3%–66,4% | 43,4%–46,1% |
| Qy–Ry | Parity of quarters | 70,0%–70,7% | 67,2%–70,3% | 25,8%–35,2% |
| Qy–Ry | Pearson on the alternation of quarters | 70,0%–70,7% | 12,9%–18,4% | 3,1%–5,5% |
| QyNorm. s | Honesty of halves | 69,7%–70,0% | 64,1%–67,2% | 19,9%–56,6% |
| QyNorm. s | Parity of quarters | 70,0%–70,3% | 68,0%–68,8% | 47,7%–49,2% |
| QyNorm. s | Pearson on the alternation of quarters | 70,0%–70,3% | 21,5%–23,4% | 5,1%–11,3% |

Synthetics at ranges - an artifact of the initial study (`runs/main/SYNTHETIC_uniform.json`Synthetics with quarters - an artifact of the initial study (outside the picture)`runs/main/SYNTHETIC_quarter_matched.json`; outside the picture.

## Archive

| Couple | Test | Raw p | Amendment 24 | Amendment 130 |
|---|---|---:|---:|---:|
| Qx–r | Honesty of halves | 0,1567 / 0,1548 | 0,9487 / 0,9414 | 1,0000 / 1,0000 |
| Qx–r | Parity of quarters | 1,0000 / 1,0000 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| Qx–r | Pearson 2×16 | 0,7188 / 0,7012 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| Qx–z | Honesty of halves | 1,0000 / 1,0000 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| Qx–z | Parity of quarters | 0,3501 / 0,3501 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| Qx–z | Pearson 2×16 | 0,4385 / 0,4160 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| Qx–Ry | Honesty of halves | 1,0000 / 1,0000 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| Qx–Ry | Parity of quarters | 1,0000 / 1,0000 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| Qx–Ry | Pearson 2×16 | 0,3721 / 0,3633 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| QxNorm. s | Honesty of halves | 0,1001 / 0,1006 | 0,8628 / 0,8687 | 0,9995 / 0,9995 |
| QxNorm. s | Parity of quarters | 1,0000 / 1,0000 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| QxNorm. s | Pearson 2×16 | 0,1240 / 0,1064 | 0,9072 / 0,8940 | 1,0000 / 1,0000 |
| Qy–r | Honesty of halves | 0,6538 / 0,6548 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| Qy–r | Parity of quarters | 0,3672 / 0,3462 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| Qy–r | Pearson 2×16 | 0,6572 / 0,6353 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| Qy–z | Honesty of halves | 1,0000 / 1,0000 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| Qy–z | Parity of quarters | 0,3359 / 0,3511 | 0,9980 / 1,0000 | 1,0000 / 1,0000 |
| Qy–z | Pearson 2×16 | 0,2422 / 0,2378 | 0,9946 / 0,9932 | 1,0000 / 1,0000 |
| Qy–Ry | Honesty of halves | 0,3457 / 0,3657 | 0,9995 / 1,0000 | 1,0000 / 1,0000 |
| Qy–Ry | Parity of quarters | 0,6367 / 0,6294 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| Qy–Ry | Pearson 2×16 | 0,7363 / 0,7437 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| QyNorm. s | Honesty of halves | 0,3384 / 0,3511 | 0,9985 / 1,0000 | 1,0000 / 1,0000 |
| QyNorm. s | Parity of quarters | 0,4863 / 0,4902 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| QyNorm. s | Pearson 2×16 | 0,8159 / 0,8125 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |

In every pair p First you have ranges, then quarters. Eight tables are recalculated by keys. Pearson's statistics are checked by fractional arithmetic. Archive tables are an artifact of the original study`runs/main/RESULTS.json`; outside the picture) · Audit - an artifact of the original study (`AUDIT.json`; outside the picture.
