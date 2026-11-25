> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sharedcoin-chain-20261102/NUMERIC_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/03-wallets.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Numbers SC-01

Launch `SC-01-d675aaaa8747b0be`, UTC 2026-11-01T23:07:14.902898+00:00. Tables are formed from CHECKS.json and RUN.json, The calculations don't repeat.

| Verification | Number |
|---|---:|
| Historic photographs sharedcoin.js | 46 |
| Verified SHA-256 source | 49 |
| Git blob cut-out 2015 | 3 |
| Fixed JS/Python vector | 84 |
| Independent affine-EC check-up | 84 |
| Plan addresses: comparisons | 406 |
| Recovery addresses: comparisons | 400 |
| Negative controls | 196 |
| Independent RC4 streams | 4 |

Comparisons do not mean unique keys: v1 Repeated in two versions to check backward compatibility, the recovery intentionally repeats the plans addresses.

| Slice | First, the key | Bytes RNG upon request | WebCrypto | Math.random | Index 100 plan |
|---|---|---|---:|---:|---|
| 2013 | False | [18, 18] | 1 | 0 | accepted |
| 2013 | True | [33, 18, 18] | 1 | 0 | accepted |
| 2015 | False | [18, 18] | 1 | 128 | rejected |
| 2015 | True | [33, 18, 18] | 1 | 128 | rejected |

Historical JS: 31.140 c; independent verification: 0.958 c. total launch with subprocess: 32.795 C. It's a control time, not benchmark seed-search.

Wednesday: Python 3.11.9, Node v24.18.0, coincurve 21.0.0. Network, browser UI, storage, time, password, server seed systemic entropy replaced with explicit synthetic adapters; the old browser did not run entirely.
