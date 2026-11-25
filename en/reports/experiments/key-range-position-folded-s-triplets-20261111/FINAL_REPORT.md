> English machine translation of the [Russian source](<../../../../ru/reports/experiments/key-range-position-folded-s-triplets-20261111/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/06-key-position-statistics.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Threes with normalized s and half-range

11 November 2026 On a year 73 The threshold in both schemes has passed 0 from 12 post-adjustment 12 and 0 after correction 106. I've got a calculation 6,2 seconds.

## Data and methodology

Each key uses feature medians for all of its signatures 2·min(s,n−s)/n For each three, two bilateral tests compare parity of the sum of halves or quarters numbers with a label of half the range of the key 2×8 Compares the distributions of eight halves, and Pearson 2×64 compare 64 quadruple.

Preserved controls take into account the origin 208 signatures, transaction patterns and methods of signing 33 January signatures with an unknown recipe applied uniform surrogate nonce. In every scheme 2 047 null housings are corrected min-P. The extended family includes 94 past 12 The same test must pass p≤0,05 And in full ranges, and with quarters saved, the plan is an artifact of the original study`PLAN.json`; outside the image) · Origin of signatures - an artifact of the original study (`../key-range-position-folded-s-pooled-20261111/runs/main/PROVENANCE.json`; outside the picture.

## Synthetics

The link is set by selecting entire signature histories of the same key and quarter 60% and 70% It's the weight of the selection. It's the condition and the circuit 256 For a signal of one half, the positive indicator corresponds to combinations 000 and 111. When reassembling, the overall transactional context of different keys may change.

| Scheme | Independent zero, amendment to 12 | Amendment 106 |
|---|---:|---:|
| Full ranges | 17/256 | 9/256 |
| Quarters saved | 6/256 | 5/256 |

Below is the nominal level 70%. The ranges cover both schemes.

| Troika | Form | Test | Actual consent | Amendment 12 | Amendment 106 |
|---|---|---|---:|---:|---:|
| r–zNorm. s | Honesty of halves | Honesty of halves | 70,0%–70,4% | 70,3%–72,3% | 40,2%–45,3% |
| r–zNorm. s | All three in one half | Pearson 2×8 | 64,9%–65,3% | 20,3%–26,2% | 6,2%–8,6% |
| r–zNorm. s | Alternation of quarters | Parity of quarters | 69,0%–69,8% | 60,2%–75,4% | 20,3%–45,7% |
| r–zNorm. s | Alternation of quarters | Pearson 2×64 | 69,0%–69,8% | 3,9%–5,1% | 0,0%–1,6% |
| r–RyNorm. s | Honesty of halves | Honesty of halves | 69,7%–69,9% | 62,5%–66,0% | 45,3%–49,2% |
| r–RyNorm. s | All three in one half | Pearson 2×8 | 64,8%–65,1% | 13,3%–20,3% | 3,5%–4,3% |
| r–RyNorm. s | Alternation of quarters | Parity of quarters | 70,1%–70,3% | 67,2%–75,4% | 44,9%–48,0% |
| r–RyNorm. s | Alternation of quarters | Pearson 2×64 | 70,1%–70,3% | 4,3%–5,9% | 0,0%–1,6% |
| z–RyNorm. s | Honesty of halves | Honesty of halves | 69,7%–70,4% | 64,5%–69,1% | 19,5%–38,3% |
| z–RyNorm. s | All three in one half | Pearson 2×8 | 65,3%–65,8% | 17,6%–24,6% | 2,0%–16,4% |
| z–RyNorm. s | Alternation of quarters | Parity of quarters | 69,4%–69,7% | 61,7%–69,9% | 24,2%–35,2% |
| z–RyNorm. s | Alternation of quarters | Pearson 2×64 | 69,4%–69,7% | 3,9%–5,5% | 0,0%–1,2% |

Synthetics at ranges - an artifact of the initial study (`runs/main/SYNTHETIC_uniform.json`Synthetics with quarters - an artifact of the initial study (outside the picture)`runs/main/SYNTHETIC_quarter_matched.json`; outside the picture.

## Archive

| Troika | Consents of parity halves / quarters | Busy columns from 64 | Single-key columns |
|---|---:|---:|---:|
| r–zNorm. s | 38 / 34 | 42 | 25 |
| r–RyNorm. s | 37 / 38 | 37 | 17 |
| z–RyNorm. s | 31 / 35 | 40 | 22 |

| Troika | Test | Raw p | Amendment 12 | Amendment 106 |
|---|---|---:|---:|---:|
| r–zNorm. s | Honesty of halves | 0,8184 / 0,8242 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| r–zNorm. s | Parity of quarters | 0,6494 / 0,6382 | 0,9995 / 0,9995 | 1,0000 / 1,0000 |
| r–zNorm. s | Pearson 2×8 | 0,9985 / 0,9985 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| r–zNorm. s | Pearson 2×64 | 0,8477 / 0,8555 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| r–RyNorm. s | Honesty of halves | 1,0000 / 1,0000 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| r–RyNorm. s | Parity of quarters | 0,8105 / 0,8301 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| r–RyNorm. s | Pearson 2×8 | 0,8218 / 0,7949 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| r–RyNorm. s | Pearson 2×64 | 0,9858 / 0,9873 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| z–RyNorm. s | Honesty of halves | 0,2271 / 0,2329 | 0,8721 / 0,8745 | 1,0000 / 1,0000 |
| z–RyNorm. s | Parity of quarters | 0,8208 / 0,8193 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| z–RyNorm. s | Pearson 2×8 | 0,7588 / 0,7656 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| z–RyNorm. s | Pearson 2×64 | 0,9624 / 0,9595 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |

In every pair p So you've got ranges, then quarters. Six tables are recalculated by keys, Pearson's statistics are checked with precise fractional arithmetic p - an artifact of the initial study (`runs/main/RESULTS.json`; outside the picture) · Audit - an artifact of the original study (`AUDIT.json`; outside the picture.
