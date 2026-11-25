> English machine translation of the [Russian source](<../../../../../../ru/reports/experiments/parallel-wallets-20261102/01-armory/round2-20261102/NUMERIC_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../../README.md>) · [Direction](<../../../../../topics/03-wallets.md>) · [Documents of the series](<../../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../../docs/LATEST_RESULTS.md>).

# R2 Numbers of saved results

Run `20261102T013922Z`Just reassembling the report.

| Verification | Number of |
|---|---:|
| Direct comparisons floor-sum | 26702 |
| Completely overgrown little ones pair-system | 57660 |
| They're not empty / idle | 18372 / 39288 |
| secp256k1 pair positive / negative | 16 / 48 |
| Independent affine-transitions | 32 |
| Reverse complete / correct stop | 4 / 4 |
| Window positive / interleaving-no-window | 2 / 2 |

| Couple learning | Synthetic chains | Arithmetic candidates | Confirmed keys in each | Arithmetic time, ms |
|---|---:|---:|---:|---:|
| 130/135 | 8 | 1–1 | 1 | 8.156–11.566 |
| 125/130 | 8 | 8–21 | 1 | 65.201–204.031 |

The time of arithmetic includes precise count and a full listing, no log-validation
and predictions `seconds` into JSON include them; launch them; Python It doesn't.
All have short packages5 unique records and2 Remote take.
Couple125/130 has holdout135; pair130/135 latenant solved holdout
in the picture140/160 new synthetic goals, not real solved values.

| Package | Candidates | floor-sum calls | Euclidean rounds | Search nodes | All right, miss |
|---|---:|---:|---:|---:|---:|
| pair-0-130-135 | 1 | 256 | 14537 | 128 | 14.365 |
| pair-0-125-130 | 13 | 3360 | 195579 | 1692 | 168.030 |
| pair-1-130-135 | 1 | 256 | 11212 | 128 | 15.726 |
| pair-1-125-130 | 8 | 2078 | 109631 | 1046 | 103.325 |
| pair-2-130-135 | 1 | 256 | 13487 | 128 | 14.052 |
| pair-2-125-130 | 21 | 5398 | 244507 | 2719 | 210.318 |
| pair-3-130-135 | 1 | 256 | 14030 | 128 | 12.866 |
| pair-3-125-130 | 11 | 2828 | 143669 | 1424 | 122.797 |
| pair-4-130-135 | 1 | 256 | 14477 | 128 | 12.935 |
| pair-4-125-130 | 8 | 2080 | 100896 | 1047 | 110.620 |
| pair-5-130-135 | 1 | 256 | 15156 | 128 | 13.586 |
| pair-5-125-130 | 10 | 2580 | 126359 | 1299 | 99.659 |
| pair-6-130-135 | 1 | 256 | 10324 | 128 | 13.865 |
| pair-6-125-130 | 9 | 2328 | 125269 | 1172 | 122.899 |
| pair-7-130-135 | 1 | 256 | 11518 | 128 | 10.701 |
| pair-7-125-130 | 8 | 2078 | 87047 | 1046 | 68.687 |

## Accurate account with conditionally known A

In this table A derived synthetic oracle It's just for complexity analysis.
For the present Puzzle such A No, the number of candidates is not time
search; large numbers were not listed.

| Couple | b1/b2 | Arithmetic candidates | log2(count) |
|---|---|---:|---:|
| 69/70 | 68/69 | 664613997892457936451903530140172296 | 119.000 |
| 120/125 | 119/124 | 8194 | 13.000 |
| 125/130 | 124/129 | 13 | 3.700 |
| 130/135 | 129/134 | 1 | 0.000 |

Counterexample A=1, b=129/134: 5316911983139663491615228241121378304 candidateslog2=122.000); search_nodes=0, status budget_refused.

## Reverse journal

| Package | Status | Lower chainIndex | Checks parent | Seconds | Bridge |
|---|---|---:|---:|---:|---|
| reverse-0 | complete | -1 | 37830 | 2.9835 | — |
| reverse-0-gap | missing_predecessor | 80 | 14500 | 1.1765 | — |
| reverse-0-gap-bridge | complete | -1 | 36250 | 2.7760 | 74→80 (6) |
| reverse-0-gap-bridge-wrong | missing_predecessor | 80 | 14500 | 1.1719 | — |
| reverse-1 | complete | -1 | 37830 | 3.0578 | — |
| reverse-1-gap | missing_predecessor | 80 | 14500 | 1.0970 | — |
| reverse-1-gap-bridge | complete | -1 | 36250 | 2.8320 | 74→80 (6) |
| reverse-1-gap-bridge-wrong | missing_predecessor | 80 | 14500 | 1.1509 | — |

In every parent check one scalar-to-point and HASH160; inversions are considered
once291/290 Unique lines. Double-SHA256 match-check
hash. Bridge furthermore6 public EC-Transitions. RSS Not measured.

## Finding the position of the fragment

| Package | Window | Not empty | Total arithmetic of candidates | Copy that | Seconds |
|---|---:|---:|---:|---:|---:|
| window-0 | 479 | 4 | 4 | 1 | 0.1303 |
| window-0-interleaved | 318 | 7 | 7 | 0 | 0.1389 |
| window-1 | 479 | 3 | 3 | 1 | 0.1440 |
| window-1-interleaved | 318 | 1 | 1 | 0 | 0.0743 |

## Stage time

| Stage | Seconds |
|---|---:|
| toy | 0.549749 |
| forward | 3.923224 |
| reverse | 17.082094 |
| information | 0.003282 |
| window | 1.318200 |

The times have not translated into GPU/cloud value. Count, EC, HASH and integer
iterations are accounted for separately; there is no statement of a new practical key.
