> English machine translation of the [Russian source](<../../../../../../ru/reports/experiments/mt-public-lift-20261030/runs/20261030-175549-2d8c4a6e/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../../README.md>) · [Direction](<../../../../../topics/02-prng-recovery.md>) · [Documents of the series](<../../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../../docs/LATEST_RESULTS.md>).

# E1f Results of the current launch

ID `20261030-175549-2d8c4a6e`Scientific code: protocol is an artifact of the original research (`code/PROTOCOL.md`; outside the picture), the output of formulas - an artifact of the initial study (`code/DERIVATION.md`; outside the picture.

| Branch | Arithmetic rank | Minimum rank of pair amendment | Status |
|---|---:|---:|---|
| fixed-reverse-big-s1 | 173 /173 | 283 | complete |
| fixed-forward-big-s1 | 173 /173 | 281 | complete |
| api-bits_i-na-s1-zero | 173 /173 | 163 | complete |
| api-order3-na-s1-zero | 173 /173 | 281 | complete |

Synthetic cases: 18/18. Access to private data: only the values found by the algorithm; true values are not transmitted through the interface.

| w | r | Repeat | MITM additions | Selected baseline | Baseline additions | MITM peak Python byte |
|---:|---:|---:|---:|---|---:|---:|
| 12 | 4 | 0 | 37 | independent_hash | 5 | 4335 |
| 12 | 4 | 1 | 37 | independent_hash | 10 | 4479 |
| 16 | 8 | 0 | 69 | independent_hash | 111 | 6135 |
| 16 | 8 | 1 | 72 | independent_hash | 55 | 6135 |
| 20 | 8 | 0 | 90 | independent_hash | 262 | 6399 |
| 20 | 8 | 1 | 78 | independent_hash | 38 | 6399 |
| 24 | 12 | 0 | 156 | independent_hash | 1035 | 11719 |
| 24 | 12 | 1 | 146 | independent_hash | 268 | 11687 |
| 28 | 16 | 0 | 366 | independent_dlp | 16612 | 31759 |
| 28 | 16 | 1 | 450 | independent_dlp | 27535 | 31759 |
| 28 | 20 | 0 | 1512 | independent_dlp | 23880 | 134891 |
| 28 | 20 | 1 | 1201 | independent_dlp | 19916 | 134795 |
| 12 | 12 | 0 | 160 | independent_dlp | 151 | 10799 |
| 12 | 12 | 1 | 127 | independent_dlp | 109 | 10799 |
| 16 | 16 | 0 | 514 | independent_dlp | 528 | 30903 |
| 16 | 16 | 1 | 374 | independent_dlp | 336 | 30903 |
| 20 | 20 | 0 | 1815 | independent_dlp | 2086 | 134299 |
| 20 | 20 | 1 | 2066 | independent_dlp | 1702 | 134299 |
