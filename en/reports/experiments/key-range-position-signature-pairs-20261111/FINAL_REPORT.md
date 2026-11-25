> English machine translation of the [Russian source](<../../../../ru/reports/experiments/key-range-position-signature-pairs-20261111/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/06-key-position-statistics.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Pairs of Public Signatures and Half Range

11 November 2026 On a year 73 The threshold in both schemes has passed 0 of the six tests, adjusted for six and 0 six-adjusted 78. I've got a calculation 4,5 seconds.

## Methods

For each pair, two medians of the same key are used for all its signatures. Each feature is broken down into four previous equal baskets. The first test compares the coincidence of the halves of two features with the label of the upper half of the key range. The statistics are bilateral and use the absolute deviation of the number of approvals from the key range 73/2. The second test compares the joint distributions in 16 In the Pearson table 2×16 column number 4a+b quarterly a and b from 0 before 3. The zero distribution is derived from signed controls, so rare cells are counted according to the empirical distribution.

The stored controls are used 208 signature 73 keys with original transaction patterns, signature origins and signature algorithms 33 January signatures with an unknown recipe in the generation used a uniform surrogate nonce. The circuits include full ranges and saving a quarter of each key 2 047 hull min-P. The main amendment covers six new tests. the expanded includes 72 The plan is an artifact of the original study`PLAN.json`; outside the image) · Origin of signatures - an artifact of the original study (`../key-range-position-folded-s-pooled-20261111/runs/main/PROVENANCE.json`; outside the picture.

## Synthetics

Entire signature histories are selected from the bank for the same key and quarter. When linked in half, the weight is increased by agreeing the key label with the equality of halves of the pair. When alternated quarters, the parity of the fourth numbers is used 60% and 70% The weight of the selection is determined 256 Selection preserves the history of a single key, and the combined context of different keys in a transaction can change.

| Scheme | Independent zero, six tests | Independent zero, 78 test |
|---|---:|---:|
| Full ranges | 15/256 | 9/256 |
| Quarters saved | 7/256 | 9/256 |

For halves, you're showing a match test, for quadruples, Pearson is showing you, and the ranges are two control circuits.

| Couple | Form | Level | Actual consent | Amendment 6 | Amendment 78 |
|---|---|---:|---:|---:|---:|
| r–z | Half | 60% | 60,1%–60,4% | 15,6%–19,1% | 2,7%–5,9% |
| r–z | Half | 70% | 69,9%–70,3% | 73,0%–82,0% | 39,5%–57,0% |
| r–z | Alternation of quarters | 60% | 60,0%–60,4% | 3,1% | 0,0%–0,8% |
| r–z | Alternation of quarters | 70% | 69,7%–70,3% | 31,2%–33,2% | 5,1%–7,0% |
| r–Ry | Half | 60% | 59,8%–60,2% | 10,5%–12,1% | 1,6%–2,7% |
| r–Ry | Half | 70% | 69,1%–69,8% | 73,0%–73,4% | 29,7%–39,5% |
| r–Ry | Alternation of quarters | 60% | 60,2%–60,8% | 2,0%–5,5% | 0,4%–1,6% |
| r–Ry | Alternation of quarters | 70% | 70,2%–70,3% | 28,9%–29,3% | 10,2%–11,7% |
| z–Ry | Half | 60% | 60,0%–60,2% | 13,7%–16,8% | 1,2%–2,3% |
| z–Ry | Half | 70% | 70,0% | 74,6%–82,4% | 33,2%–43,0% |
| z–Ry | Alternation of quarters | 60% | 59,4%–59,8% | 2,0%–5,9% | 0,0%–0,4% |
| z–Ry | Alternation of quarters | 70% | 69,8%–70,0% | 27,7%–31,6% | 5,5%–10,2% |

Synthetics at ranges - an artifact of the initial study (`runs/main/SYNTHETIC_uniform.json`Synthetics with quarters - an artifact of the initial study (outside the picture)`runs/main/SYNTHETIC_quarter_matched.json`; outside the picture.

## Archive

| Couple | Test | Raw p | Amendment 6 | Amendment 78 |
|---|---|---:|---:|---:|
| r–z | Meet the halves | 1,0000 / 1,0000 | 1,0000 / 1,0000 | 1,0000 / 1,0000 |
| r–z | Pearson 2×16 | 0,8662 / 0,8530 | 1,0000 / 0,9995 | 1,0000 / 1,0000 |
| r–Ry | Meet the halves | 0,2593 / 0,2310 | 0,7856 / 0,6929 | 1,0000 / 1,0000 |
| r–Ry | Pearson 2×16 | 0,6963 / 0,6748 | 0,9980 / 0,9941 | 1,0000 / 1,0000 |
| z–Ry | Meet the halves | 0,5000 / 0,4990 | 0,9619 / 0,9658 | 1,0000 / 1,0000 |
| z–Ry | Pearson 2×16 | 0,5723 / 0,5522 | 0,9819 / 0,9746 | 1,0000 / 1,0000 |

In every pair p First, you've got the full ranges, then you've got the saved quarters, you've got the key tables, you've got Pearson's numbers, you've got the exact fractional arithmetic, you've got the corrections recalculated from the stored controls, and the tables are an artifact of the original study`runs/main/RESULTS.json`; outside the picture) · Audit - an artifact of the original study (`AUDIT.json`; outside the picture.
