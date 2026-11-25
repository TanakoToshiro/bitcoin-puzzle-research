> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/parallel-wallets-20261102/04-bitcoinj/NUMERIC_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/03-wallets.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# Numerical results B4

Automatically built `build_report.py` preserved JSON. No new calculations.

Java run: `java-679b54999ef0`; Python run: `controls-861ce64b4b6a`.

| Script | Issued E / I | Lookahead / threshold | Public leaf records | Child-lineage private dump | Leaf secret_bytes |
|---|---:|---:|---:|---:|---:|
| fresh | 0 / 0 | 100 / 33 | 266 | 2 | 0 |
| lookahead100 | 0 / 0 | 100 / 33 | 266 | 2 | 0 |
| issued256 | 256 / 0 | 100 / 33 | 522 | 258 | 0 |
| lookahead500 | 0 / 0 | 500 / 166 | 1332 | 2 | 0 |
| change_first | 140 / 140 | 100 / 33 | 546 | 282 | 0 |
| migration | 0 / 0 | 100 / 33 | 266 | 2 | 0 |

In these cases private dump contains mnemonic and cached seed; The number of rows of children does not measure the amount of secret that has been revealed. `fresh` Measured here after creation Wallet/KeyChainGroup and serialization.

| Verification | Result |
|---|---:|
| Historical JUnit BIP32Test | 2 dough, 2 root + 10 descendant-vector |
| Java harness | 75 check-up |
| Independent Python checks | 15929 |
| Known Solutions: Range + public + address | 83 / 83 |
| Precisely small prefix-system | 8702 |
| Positive / negative prefix memberships | 34166 / 498234 |
| Verified Java-derived nodes | 3222 |
| Public/private CKD reconciliation | 77 |
| Forecast synthetic №71 famously xpub | 4 / 4 |
| Unfaithful xpub / branch / index / residue | 16 rejected |
| Additional masked-post-prognosis | 79 each synthetic chance |
| Checks on damaged/coded-profile | 3 deviation |

## The price of migration prefix-brute

Condition: The line really refers to **old raw-the key chosen by migration**. This correspondence itself is unknown.

| Surveillance number | Famous least significant bits raw | log2 number entropy-prefix candidates |
|---|---:|---:|
| 1 | 0 | 128.000000 |
| 120 | 119 | 128.000000 |
| 125 | 124 | 128.000000 |
| 130 | 129 | 127.000000 |
| 135 | 134 | 122.000000 |

Minimum accurate score: `5316911983139663491615228241121378304`this 2^122, not 2^32. The brute force wasn't done.

## Time and operations

Original Java harness: 3.485 s; Python-Control it all: 27.125 s.

| Synthetic case | Solver s | The whole process s | HMAC-SHA512 / public CKD | Address checks | Targeted candidates |
|---|---:|---:|---:|---:|---:|
| 0 | 0.032 | 0.750 | 6 / 6 | 3 | 3 |
| 1 | 0.015 | 1.516 | 6 / 6 | 3 | 3 |
| 2 | 0.016 | 0.656 | 6 / 6 | 3 | 3 |
| 3 | 0.015 | 1.484 | 6 / 6 | 3 | 3 |

Every day public CKD include HMAC, multiplier IL and addition of points (IL=0 Address verification requires additional kG and HASH160/Base58Check. The costs of these transactions are not equal.
