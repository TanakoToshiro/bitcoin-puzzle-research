> English machine translation of the [Russian source](<../../../../ru/reports/experiments/historical-signers-20261101/NUMERIC_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/05-signatures-and-provenance.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E11 - numerical report

15 disclosure keys2019. Coincidence means accurate DER; Other groups are not used as copyright signatures.

| Proven path | Coincided r | Coincided s / DER |
|---|---:|---:|
| Electrum1.9.8 transaction.py + python-ecdsa0.11 | 15/15 | 5/15 |
| Electrum2.9.3 / 3.3.4 Python signer | 15/15 | 15/15 |
| Core0.10.0 / 0.16.3 default signer | 15/15 | 15/15 |
| Core0.17.0 grind=true | 9/15 | 9/15 |
| bitcoinjs-lib2.3.0 | 15/15 | 15/15 |
| pybitcointools aeb0a2… (2017-07-27) | 15/15 | 15/15 |

## Separate groups E5

| Group | Model | Entrances | Precise DER |
|---|---|---:|---:|
| reveal2019 | rfc6979_low_s | 15 | 15 |
| reveal2019 | rfc6979_unnormalized_s | 15 | 5 |
| reveal2019 | raw_digest_low_s | 15 | 15 |
| reveal2019 | core017_low_r | 15 | 9 |
| other_solver_or_unknown | rfc6979_low_s | 203 | 116 |
| other_solver_or_unknown | rfc6979_unnormalized_s | 203 | 47 |
| other_solver_or_unknown | raw_digest_low_s | 203 | 116 |
| other_solver_or_unknown | core017_low_r | 203 | 128 |

## Transactional arrangements

Exactly comparator Electrum3.3.4, It's not a heuristic label of the owner.

| Event | Version | Entrances sorted | Exits sorted |
|---|---:|---|---|
| genesis2015 | 1 | True | True |
| redistribution2017 | 2 | True | True |
| deposit2019 | 2 | True | False |
| reveal2019 | 2 | True | True |
| topup2023 | 2 | True | True |

Python-Control: 24; independent JS/OpenSSL-Control: 24; We all passed.
Famous entrances of everything: 218; sighash >= n: 0.
Basic Python-Calculation 1.338 c; this does not include code writing, networking and Node.
Saved HTTP-answers: 59; state: {'fetched': 52, 'http_error': 7}.
