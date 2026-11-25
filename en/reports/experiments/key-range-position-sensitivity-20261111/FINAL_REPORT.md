> English machine translation of the [Russian source](<../../../../ru/reports/experiments/key-range-position-sensitivity-20261111/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/06-key-position-statistics.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Sustainability and sensitivity of key position prediction

11 November 2026 The plan is complete. 73 keys, 208 signatures, 20 The main calculation and audit took place 568,1 limit 900 C. Synthetic enclosures: 1534. The previous criteria on archival data passed 0/4 models.

## Forecast on archive keys

Average probability of 20 Non-teaching predictions are evaluated once for each key Brier Model error on metadata minus model error with public features 0,5 mistake Brier equal 0,25. Adjusted threshold p — 0,05 in both controls. Transfer No11–60 → №61+ It's taken from the old protocol.

| Model | Old wins | Average winnings | Brier | Winning in the smashing | p, ranges | p, quarter | Transfer |
|---|---:|---:|---:|---:|---:|---:|---:|
| curve/degree_1 | +0,00638 | +0,00717 | 0,25883 | 14/20 | 0,109 | 0,250 | +0,02058 |
| curve/degree_2 | -0,01829 | -0,01974 | 0,29078 | 0/20 | 0,539 | 0,477 | -0,22347 |
| later/degree_1 | -0,00008 | +0,00759 | 0,30483 | 11/20 | 0,406 | 0,531 | -0,07465 |
| later/degree_2 | -0,02468 | -0,04530 | 0,30247 | 0/20 | 0,945 | 0,469 | -0,02388 |

Linear Q the range of wins between splits: -0,00674…+0,01448, median +0,00652. The average model gave 40/73 correct answers; base Brier 0,26601, s Q — 0,25883. Partitions are reused by the same 73 Rating at No61+ It is not a new independent sample.

## Sensitivity to a given connection

Synthetic scalars selected by agreement Qx≥P/2 The points and signatures are calculated from the scalars themselves. The Consent column shows the actual share of coincidences. Levels are selection parameters, so the match with a given percentage is approximate.

In the Detection column, an event is counted according to at least one of four models: p≤0,05; For “Transfer” additionally requires a positive gain Brier The two controls are evaluated separately. 95% Wilson intervals refer to the frequencies of Monte Carlo at fixed zero banks.

| Monitoring | Level | Consent | Detection | Transferred | Coverage |
|---|---:|---:|---:|---:|---:|
| Ranges | Zero | 49,9% | 0/64 (0,0%; Dee 0,0%–5,7%) | 0/64 (0,0%; Dee 0,0%–5,7%) | 64/64 |
| Ranges | 55,0% | 55,2% | 7/128 (5,5%; Dee 2,7%–10,9%) | 6/128 (4,7%; Dee 2,2%–9,8%) | 128/128 |
| Ranges | 60,0% | 58,8% | 7/128 (5,5%; Dee 2,7%–10,9%) | 6/128 (4,7%; Dee 2,2%–9,8%) | 128/128 |
| Ranges | 65,0% | 65,0% | 18/128 (14,1%; Dee 9,1%–21,1%) | 15/128 (11,7%; Dee 7,2%–18,4%) | 128/128 |
| Ranges | 70,0% | 70,2% | 52/128 (40,6%; Dee 32,5%–49,3%) | 48/128 (37,5%; Dee 29,6%–46,1%) | 128/128 |
| Quarters | Zero | 50,7% | 6/64 (9,4%; Dee 4,4%–19,0%) | 6/64 (9,4%; Dee 4,4%–19,0%) | 64/64 |
| Quarters | 55,0% | 55,2% | 6/128 (4,7%; Dee 2,2%–9,8%) | 6/128 (4,7%; Dee 2,2%–9,8%) | 128/128 |
| Quarters | 60,0% | 60,6% | 14/128 (10,9%; Dee 6,6%–17,5%) | 11/128 (8,6%; Dee 4,9%–14,7%) | 128/128 |
| Quarters | 65,0% | 65,6% | 34/128 (26,6%; Dee 19,7%–34,8%) | 28/128 (21,9%; Dee 15,6%–29,8%) | 128/128 |
| Quarters | 70,0% | 69,4% | 52/128 (40,6%; Dee 32,5%–49,3%) | 39/128 (30,5%; Dee 23,2%–38,9%) | 128/128 |

At the highest level of a given level (70%) check-up has worked in 30,5%–37,5% Even this dependence is missed in most synthetic enclosures, and additional partitioning of these same keys will not replace new independent observations.

The applicability of the estimate is limited to a given type of communication, range sizes and previous models. Negative result refers to the detection of a connection in this case. It does not exclude weaker dependencies or another generation mechanism. Re-partitioning and control keys did not add independent real-world observations.

## Reproducibility

Old partition compatibility confirmed for all four models. previous run hashes verified22) and sources150). The audit recalculated the amendments to 1152 Repeat in a different way, repeating 8 full synthetic enclosures and separately checked 436 signatures through verifier ECDSA.

Plan - an artifact of the initial study (`PLAN.json`; outside the picture) [Protocol](<PROTOCOL.md>) • Fixing before launch - an artifact of the initial study (`FROZEN.json`; outside the picture) · Results - artifact of the original study (`runs/main/RESULTS.json`; outside the picture) · Breakdowns - an artifact of the original study (`runs/main/FOLDS.json`; outside the image) · Synthetic replications - an artifact of the original study (`runs/main/TRIALS.jsonl`; outside the picture) · Signs - an artifact of the initial study (`runs/main/FEATURES.npz`; outside the picture) · Audit - an artifact of the original study (`AUDIT.json`; outside the picture) · Starting an audit - an artifact of the original study (`verify.py`; outside the picture.
