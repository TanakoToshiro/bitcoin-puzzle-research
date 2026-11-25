> English machine translation of the [Russian source](<../../../../ru/reports/experiments/key-range-position-20261111/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/06-key-position-statistics.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Position of the key within the range Puzzle

11 November 2026 On a year 83 published keys and 218 saved signatures checked position in range, signs of signatures and points, restored nonce, Historical groups and half-range forecasts 61,0 None of the four models showed a proven advantage over a pre-selected criterion. The table of all positions is an artifact of the original study`runs/main/KEY_POSITIONS.csv`; outside the image), audit - artifact of the original study (`AUDIT.json`; outside the picture.

## Target and groups

For the room `i` bandwidth `w = 2^(i−1)`, displacement equals `d−w`position `(d−w)/w`. Half and quarters are defined integerly. This takes into account feature #1, which has a width equal to one, and the2, One that only has two positions. CSV Stores position, half, quarter, number of signatures by group and partition to check the forecast.

| Key group | Keys | Upper half | Quarters from bottom to top | Average situation |
|---|---:|---:|---|---:|
| All | 83 | 42 | 17 / 24 / 24 / 18 | 0,5040 |
| January expenses 2015 | 46 | 22 | 10 / 14 / 14 / 8 | 0,4778 |
| Later expenses | 37 | 20 | 7 / 10 / 10 / 10 | 0,5366 |
| Disclosure 2019 | 15 | 8 | 2 / 5 / 6 / 2 | 0,5061 |
| Beyond disclosure 2019 | 68 | 34 | 15 / 19 / 18 / 16 | 0,5036 |

January and Late Groups Give a Breakdown 83 key 46 and 37. All 15 The keys of the disclosure are also presented in late costs. Their signatures are analyzed separately, with the common identity of the key to the same verification unit 68 The January group consists of the No1–46, So in this slice, number and early group affiliation are related. Block time refers to spending. Groups and results are an artifact of the original study`runs/main/RESULTS.json`; outside the picture.

## Indicators and references

Both coordinates have been checked for public keys Q And their smaller bytes r, s, z, coordinate Ry And the lower bytes of these four things 218 signature Rx equal r, therefore Rx single-signature r. Several signatures of a single key are reduced to medians within the corresponding historical group, and Spearman correlation, halves separation, rank difference between quarters, and nonlinear relationship by rank correlation of distances are tested.

Restored k It is used in the diagnosis of a smaller `k, n−k`, two fixed 16-The prediction is based on public measurements. Observations from one historical group give one vector per key. All key records are shared together, and the model's normalization is calculated on the training part. [Group cross-validation](https://scikit-learn.org/stable/modules/cross_validation.html#cross-validation-iterators-for-grouped-data).

Built 127 control sets with uniform sampling over full ranges and 255 The second circuit stores the halves and quarters along with the composition of the observed groups. Both circuits store the transaction patterns, the number of signatures on the key, the format SEC and archival S. Recalculation sighash after replacement of the corresponding P2PKH-Scripts. Identifiers prevout They're fixed in the templates nonce They're modeled with the same compatible recipe, re-received before testing 218 baseline sighash and 176 pairing r,s for these recipes. [RFC 6979](https://www.rfc-editor.org/rfc/rfc6979.html#section-3.2), plan - an artifact of the original study (`PLAN.json`; outside the picture.

For 42 January signatures with an unspecified recipe adopted a separate model assumption of uniformity nonce. Early signature signs have entered exploration diagnostics, synthetic transactions serve as templates for signatures with a replaced key, and recipes and metadata control proven mechanisms within that model.

## Ranking, nonlinear and historical checks

For 80 Registered checks of public features applied to the entire family p composed 0,531 for full ranges and 0,320 The most noticeable link is when you keep quarters Qx with the position has an absolute correlation of Spearman 0,286. Her raw p with the preservation of quarters 0,0078, corrected 0,320.

Amongst 15 signatures 2019 year correlation with the lesser of `k, n−k` form 0,714. For the median nonce later expenses of the same 15 The observed correlation is equal to the −0,171. This is an additional descriptive juxtaposition after the primary check-up 80 Diagnostic inspections with minimally adjusted p equally 0,148 with the preservation of quarters, and 0,305 It's in full range 0,148 rank nonce All statistics and corrections are an artifact of the original study`runs/main/CALIBRATION.json`; outside the picture), comparison 15 keys - an artifact of the original study (`HISTORICAL_DISTRIBUTIONS.json`; outside the picture.

For the history, the fractions of quarters, average positions, rank relationships with the number and height of the first flow were compared, as well as the most notable partitions with a minimum by 10 In the reconciliation, two Kolmogorov-Smirnov distances are added for the shape of the distributions 2 047 new uniform sets with the same ranges p equal 0,742. For early and late expenses, the distance is equal 0,162 corrected p=0,983. For the disclosure and remaining keys, the distance is equal 0,168 corrected p=1,000. Historical checks - an artifact of the original study (`HISTORICAL_DISTRIBUTIONS.json`; outside the picture.

## Upper-half forecast

Five key blocks are fixed regardless of the labels, two fixed models with a linear and a quadratic core tested 83 coordinates were added to the keys Q. Nana 37 Late spending keys were added coordinates Q And the aggregate signatures, each pair uses the same kernel power Puzzle. The late group base also uses the height of the first stored late flow rate and the number of signatures Brier Measures the average square of probability errors, smaller values are better.

| Signs | Degree | Brier base | Brier signified | Correct answers with signs | Balanced accuracy |
|---|---:|---:|---:|---:|---:|
| Q, 83 key | 1 | 0,25904 | 0,26508 | 45/83 | 54,1% |
| Q, 83 key | 2 | 0,26076 | 0,27052 | 46/83 | 55,4% |
| Q and signatures, 37 keyboard | 1 | 0,28952 | 0,28960 | 19/37 | 50,1% |
| Q and signatures, 37 keyboard | 2 | 0,26553 | 0,29021 | 21/37 | 56,0% |

All four values Brier exceedingly 0,25, constant-probability 0,5. On a separate partition, models trained on numbers up to No60 and tested 23 Higher numbers from the same archive Q bal 15/23 against 12/23 The base, and the win Brier compiled 0,000084. In five blocks of it Brier worsened 0,0060. The study criteria requires an adjustment p higher 0,05 both control schemes and improvement on the deferred block 0 from 4 Forecasts for each key - artifact of the initial study`runs/main/RESULTS.json`; outside the picture.

Positive synthetic control with a given signal passed 83/83. Rolled 83 Integer tags, partitions, saved scores of four models, corrections for control sets and hashes 152 The full results belong to a single archived corpus of published decisions`AUDIT.json`; outside the image), input files - artifact of the original study (`runs/main/INPUT_PINS.json`; outside the image), the launch code is an artifact of the original study (`run.py`; outside the picture.
