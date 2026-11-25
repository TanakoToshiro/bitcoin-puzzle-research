> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-eight-independent-20261031/TABLES.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E1j Independent measurements

Status: complete; ready 344/344 requests.

| Set | L | Method | Success | First attempt | Medium additions | Medium steps | Average seconds |
|---|---:|---|---:|---:|---:|---:|---:|
| confirmation | 30 | native_full8 | 8/8 | 8/8 | 2164032.88 | 2162014.75 | 52.3656 |
| confirmation | 30 | native_union | 32/32 | 32/32 | 379568.19 | 377627.47 | 9.1521 |
| main | 20 | native_full8 | 8/8 | 8/8 | 60915.50 | 59091.62 | 1.3281 |
| main | 20 | native_union | 128/128 | 125/128 | 13646.05 | 11864.42 | 0.2864 |
| main | 20 | python_reference | 8/8 | 8/8 | 13113.25 | 11372.62 | 0.8108 |
| main | 24 | native_full8 | 8/8 | 8/8 | 215753.62 | 213855.25 | 4.5128 |
| main | 24 | native_union | 96/96 | 96/96 | 47579.54 | 45752.68 | 1.0901 |
| main | 28 | native_full8 | 8/8 | 8/8 | 996174.75 | 994196.25 | 23.1189 |
| main | 28 | native_union | 32/32 | 32/32 | 184916.59 | 183014.34 | 4.3465 |
| main | 32 | native_full8 | 8/8 | 8/8 | 4441198.38 | 4439137.25 | 109.1693 |
| main | 32 | native_union | 8/8 | 8/8 | 733246.62 | 731273.88 | 17.3736 |

## Pair comparison: only the same eight keys of each subsample

| Set | L | par | Common / mid-fold | Relationship | Descriptive bootstrap 95% |
|---|---:|---:|---:|---:|---|
| confirmation | 30 | 8 | 382545.38 / 2164032.88 | 5.657 | [4.951924291413174, 6.576764637018469] |
| main | 20 | 8 | 13113.25 / 60915.50 | 4.645 | [4.257589058412487, 5.1057201439451] |
| main | 24 | 8 | 45248.62 / 215753.62 | 4.768 | [4.370143303804064, 5.155655654203031] |
| main | 28 | 8 | 194843.75 / 996174.75 | 5.113 | [4.443831166318051, 6.004645888360627] |
| main | 32 | 8 | 733246.62 / 4441198.38 | 6.057 | [5.336638516264389, 6.81665371567296] |

## Reliability of general search, separately in size

| Set | L | First try, 95% Wilson | All four, 95% Wilson | Average attempts / maximum |
|---|---:|---|---|---:|
| confirmation | 30 | [0.8928208017449293, 1.0] | [0.8928208017449293, 1.0] | 1.0000 / 1 |
| main | 20 | [0.9333562549485678, 0.9919975836032445] | [0.9708630437264916, 1.0] | 1.0234 / 2 |
| main | 24 | [0.9615244121423243, 1.0] | [0.9615244121423243, 1.0] | 1.0000 / 1 |
| main | 28 | [0.8928208017449293, 1.0] | [0.8928208017449293, 1.0] | 1.0000 / 1 |
| main | 32 | [0.6755924351161198, 1.0] | [0.6755924351161198, 1.0] | 1.0000 / 1 |

All attempts, including limited failures, are included in the cost. The number of successes after four attempts is not equal to the number of successes of the first launch SEARCH They didn't.

RSS Accumulated maximum of ONE Native process, includes OpenSSL and runtime; It's not a single peak of every task. 16 jumps, up to eight serialized scalar traps, multiple work points RSS straight out Python tracemalloc Native time excludes starting the process and parsing the entrance, involves preparing jumps/tracks and check the scalar found.

Python-reference use tracemalloc and other library; its time is not a comparison of speed backend. Eight comparisons verify the match between the results and the exact counters.
