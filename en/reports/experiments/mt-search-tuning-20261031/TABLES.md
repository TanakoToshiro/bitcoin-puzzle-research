> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-search-tuning-20261031/TABLES.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E1l - preserved measurements

Status: complete; 336/336 measurements.

| Set | L | Method | Profile | Success | Medium additions | Average seconds | Average attempts |
|---|---:|---|---|---:|---:|---:|---:|
| test | 22 | separate | m1t2 | 32/32 | 150917.16 | 4.4032 | 16.219 |
| test | 22 | union | m1t2 | 32/32 | 19352.94 | 0.4570 | 1.188 |
| test | 22 | union | m1t4 | 32/32 | 24932.72 | 0.5616 | 1.000 |
| test | 26 | separate | m1t2 | 16/16 | 351199.88 | 10.5116 | 10.000 |
| test | 26 | union | m1t2 | 16/16 | 66619.06 | 1.7408 | 1.062 |
| test | 26 | union | m1t4 | 16/16 | 99093.62 | 2.3899 | 1.000 |
| train | 18 | separate | m1t1 | 23/24 | 22585.50 | 0.5809 | 12.333 |
| train | 18 | separate | m1t2 | 24/24 | 30003.12 | 0.8446 | 11.750 |
| train | 18 | separate | m1t4 | 24/24 | 46713.42 | 1.2512 | 11.667 |
| train | 18 | separate | m2t2 | 24/24 | 42946.38 | 1.1027 | 11.750 |
| train | 18 | union | m1t1 | 23/24 | 6759.75 | 0.1288 | 1.542 |
| train | 18 | union | m1t2 | 24/24 | 5686.46 | 0.1029 | 1.083 |
| train | 18 | union | m1t4 | 24/24 | 7506.25 | 0.1397 | 1.000 |
| train | 18 | union | m2t2 | 24/24 | 7559.54 | 0.1302 | 1.083 |

| L | Comparison with the selected general | par | Cost ratio | Both have decided | Descriptive bootstrap 95% |
|---:|---|---:|---:|---|---|
| 22 | separate | 32 | 7.798 | True | [6.000577686643781, 9.912347779374686] |
| 22 | old_union | 32 | 1.288 | True | [1.0913984771084726, 1.4888779094087266] |
| 26 | separate | 16 | 5.272 | True | [3.1035744728327623, 7.866914454182533] |
| 26 | old_union | 16 | 1.487 | True | [1.3144294927649613, 1.616202601221591] |

If you fail, the cost ratio is not an acceleration with equal reliability. All failed attempts are included. Point preparation and final validation are also included Wilson-intervals STATISTICS.json.
