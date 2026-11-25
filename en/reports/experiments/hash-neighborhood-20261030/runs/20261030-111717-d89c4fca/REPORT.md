> English machine translation of the [Russian source](<../../../../../../ru/reports/experiments/hash-neighborhood-20261030/runs/20261030-111717-d89c4fca/REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../../README.md>) · [Direction](<../../../../../topics/08-methodology-and-history.md>) · [Documents of the series](<../../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../../docs/LATEST_RESULTS.md>).

# E4 conditional proximity of keys when matched HASH160

Launch `20261030-111717-d89c4fca`, 2026-10-30T11:17:17.938338+00:00. [Protocol](<../../PROTOCOL.md>).

Stages completed: 76/76. Computational time: 292.358 from 900 s.

Stages, time and hashes: state.json - an artifact of the initial study (`state.json`Inputs and versions: config.json - an artifact of the initial study (`config.json`The story of the sequel: invocations.jsonl - an artifact of the initial study (`invocations.jsonl`; outside the picture). Interpretations: [NOTES.md](<../../NOTES.md>).

## Result

Significant advantages of neighbors after Holm: **0 from 12** (family) alpha=0.01).

| Prefix, beat | radius | Metrica | par | Neighbors: success | Monitoring: success | Frequency ratio | p Holm |
|---:|---:|---|---:|---:|---:|---:|---:|
| 8 | 16 | prefix | 12288 | 49 | 52 | 0.942 | 1 |
| 8 | 16 | next8 | 12288 | 45 | 47 | 0.957 | 1 |
| 8 | 4096 | prefix | 92160 | 372 | 340 | 1.094 | 1 |
| 8 | 4096 | next8 | 92160 | 370 | 371 | 0.997 | 1 |
| 8 | 16777216 | prefix | 92160 | 388 | 340 | 1.141 | 0.483215 |
| 8 | 16777216 | next8 | 92160 | 360 | 359 | 1.003 | 1 |
| 12 | 16 | prefix | 3740 | 0 | 2 | 0.000 | 1 |
| 12 | 16 | next8 | 3740 | 21 | 12 | 1.750 | 0.986435 |
| 12 | 4096 | prefix | 28080 | 6 | 5 | 1.200 | 1 |
| 12 | 4096 | next8 | 28080 | 112 | 100 | 1.120 | 1 |
| 12 | 16777216 | prefix | 28080 | 10 | 5 | 2.000 | 1 |
| 12 | 16777216 | next8 | 28080 | 113 | 105 | 1.076 | 1 |

## Uncertainty and sensitivity

The frequency difference is expressed in units of nominal random frequency p0. Intervals bootstrap approximate and clustered by target. Simultaneous 99% interval Bonferroni for 12 metric; Holm It is applied to significance testing, not intervals.

| p | R | Metrica | 95% interval/p0 | Simultaneously 99% | Reliability bootstrap | Detectable multiplier reference point (80%, iid) |
|---:|---:|---|---|---|---|---:|
| 8 | 16 | prefix | [-0.542; 0.396] | [-0.875; 0.708] | passed | 1.812 |
| 8 | 16 | next8 | [-0.458; 0.375] | [-0.750; 0.667] | passed | 1.812 |
| 8 | 4096 | prefix | [-0.044; 0.225] | [-0.146; 0.321] | passed | 1.296 |
| 8 | 4096 | next8 | [-0.175; 0.164] | [-0.289; 0.269] | passed | 1.296 |
| 8 | 16777216 | prefix | [-0.008; 0.272] | [-0.106; 0.363] | passed | 1.296 |
| 8 | 16777216 | next8 | [-0.194; 0.189] | [-0.336; 0.311] | passed | 1.296 |
| 12 | 16 | prefix | [-5.522; 0.000] | [-8.723; 0.000] | **rarely/degenerate** | 6.898 |
| 12 | 16 | next8 | [-0.144; 1.352] | [-0.736; 1.835] | passed | 2.472 |
| 12 | 4096 | prefix | [-0.833; 1.062] | [-1.510; 1.719] | **rarely/degenerate** | 3.152 |
| 12 | 4096 | next8 | [-0.169; 0.387] | [-0.372; 0.576] | passed | 1.537 |
| 12 | 16777216 | prefix | [-0.298; 1.829] | [-1.037; 2.591] | **rarely/degenerate** | 3.152 |
| 12 | 16777216 | next8 | [-0.199; 0.342] | [-0.386; 0.527] | passed | 1.537 |

The power benchmark assumes independent hashes and a normal approximation; it is not an achieved power guarantee in case of cluster dependence bootstrap. The conservative border is also maintained Hoeffding by purpose; it has much greater effects and is in analysis.json.

## Controls and costs

Positive artificial local function: all six prefix tests must pass before the main experience is triggered. 0/8 A run with at least one trigger. 95% interval of response rate: [0.0, 0.3694166475528192]Eight runs do not confirm level accuracy 1%.

Centres: 1048576; New neighbors: 256508; new control: 256508; objectives: 32. Total unique hashes of the main sample: 1561624 (without synthetic controls).

One of the neighbors examined had to 4.088 The hashing times of the centers. 122.460 (c) Neighbors, together with control: 66.484 s.

## Permissible conclusion

This pilot doesn't show the benefits of looking near the center by validated metrics, but it doesn't show that there aren't all the effects. 32 goals, short prefixes, three radii and a limited number of events.

From this data, we cannot deduce the acceleration of the complete 160-bit-match or key bit number71. Search at this address No71 The cost of finding centers should be included in any future estimate of winnings. The working search project is unchanged.

Repeat this one seed Further expansion is a new pre-recorded experience; with the signal first replication, if not a new meaningful hypothesis, not setting the threshold on this data.
