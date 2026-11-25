> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-eight-intervals-20261030/TABLES.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E1i: clean-measurement

Finished launches: 168. Pilot's out.

| Set | L / K | Method | Success | Medium additions | Medium steps | Peak Python, byte | Average seconds |
|---|---|---|---:|---:|---:|---:|---:|
| K_scaling | 12 / 1 | union_kangaroo | 4/4 | 567.25 | 410.00 | 5292 | 0.0295 |
| K_scaling | 12 / 2 | union_kangaroo | 4/4 | 659.00 | 481.25 | 5390 | 0.0371 |
| K_scaling | 12 / 4 | union_kangaroo | 4/4 | 749.00 | 503.00 | 5648 | 0.0391 |
| K_scaling | 12 / 8 | union_kangaroo | 4/4 | 1072.25 | 687.75 | 6194 | 0.0549 |
| confirmation | 18 / 8 | full_eight_tame | 16/16 | 34085.62 | 33454.19 | 7854 | 2.1375 |
| confirmation | 18 / 8 | union_kangaroo | 16/16 | 6209.06 | 5656.00 | 6354 | 0.3736 |
| main | 8 / 8 | full_eight_tame | 8/8 | 1321.12 | 979.00 | 7314 | 0.0707 |
| main | 8 / 8 | full_kangaroo | 8/8 | 1839.12 | 1639.25 | 5772 | 0.1170 |
| main | 8 / 8 | separate_kangaroo | 8/8 | 900.38 | 490.50 | 5596 | 0.0489 |
| main | 8 / 8 | shared_bsgs32 | 8/8 | 175.00 | 0.00 | 6209 | 0.0083 |
| main | 8 / 8 | union_kangaroo | 8/8 | 515.38 | 207.38 | 6162 | 0.0252 |
| main | 12 / 8 | full_eight_tame | 8/8 | 4367.38 | 3904.38 | 7346 | 0.2632 |
| main | 12 / 8 | full_kangaroo | 8/8 | 6771.00 | 6501.62 | 6024 | 0.4349 |
| main | 12 / 8 | separate_kangaroo | 8/8 | 2647.25 | 1975.88 | 5628 | 0.1574 |
| main | 12 / 8 | shared_bsgs32 | 8/8 | 684.50 | 0.00 | 6273 | 0.0320 |
| main | 12 / 8 | union_kangaroo | 8/8 | 1087.38 | 703.25 | 6290 | 0.0606 |
| main | 16 / 8 | full_eight_tame | 8/8 | 16517.12 | 15938.12 | 7790 | 1.0216 |
| main | 16 / 8 | full_kangaroo | 8/8 | 30028.25 | 29668.75 | 6056 | 1.9545 |
| main | 16 / 8 | separate_kangaroo | 8/8 | 9005.75 | 8110.62 | 5884 | 0.5623 |
| main | 16 / 8 | shared_bsgs32 | 8/8 | 8179.75 | 0.00 | 6305 | 0.3997 |
| main | 16 / 8 | union_kangaroo | 8/8 | 3442.00 | 2940.75 | 6322 | 0.1989 |

## The ratio of basic search costs to total search across eight intervals

| Set | L | Basic method | Average transaction ratio |
|---|---:|---|---:|
| main | 8 | full_eight_tame | 2.563 |
| main | 8 | full_kangaroo | 3.569 |
| main | 8 | separate_kangaroo | 1.747 |
| main | 8 | shared_bsgs32 | 0.340 |
| main | 12 | full_eight_tame | 4.016 |
| main | 12 | full_kangaroo | 6.227 |
| main | 12 | separate_kangaroo | 2.435 |
| main | 12 | shared_bsgs32 | 0.629 |
| main | 16 | full_eight_tame | 4.799 |
| main | 16 | full_kangaroo | 8.724 |
| main | 16 | separate_kangaroo | 2.616 |
| main | 16 | shared_bsgs32 | 2.376 |
| confirmation | 18 | full_eight_tame | 5.490 |

Addition includes doubling, preparation of jumps/There's no exception to slow repetitions. Memory tracemalloc excludes native libsecp256k1 and basic loading Python. The keys are the same for paired comparisons; the salt is public, independent and the same within the comparison full_eight_tame There are as many traps and jumps as you have union_kangaroo. Shared BSGS keeper 32 records plus work points, so its actual memory is compared by bytes rather than declared identical.
