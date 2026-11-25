> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-eight-independent-20261031/CONCLUSION.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E1j Independently check the overall search for eight intervals

2026-10-31, Europe/Moscow. **A new implementation has been completed for C++/OpenSSL and 296 new synthetic tasks at intervals up to 2^32. General search decided 296/296 tasks 293 Eight checks against the previous one Python/coincurve They matched the key and all six compared counters.** There's no wrong keys returned.

In an independent confirmatory kit N=2^30: 32/32 In a paired subsample of eight cases, the general search used an average of **5.66 less-addition**, It's more than finding the entire range with the same eight traps N=2^32 relevant relationship-- **6.06**. These relationships relate to implemented basic algorithms and specific new samples, not to any existing optimized algorithm solver.

It's confirmation of implementation and the observed scaling on larger tasks MT-model, belonging to the present key No155 eight intervals and reliability with N=2^146 **unproven**. Real point No155 It wasn't transmitted to the algorithm.

## What's done independently

New native.cpp written separately, does not import or cause the old solver. Arithmetic is used OpenSSL 3.0.13, not libsecp256k1/coincurve; compiler g++ 13.3.0. Multiplication is implemented through its own cycle double-and-add top-up OpenSSL, to clearly take into account each addition/It's doubling. It keeps the same mathematical algorithm 16 leaps, T=4μ And four attempts; it's not an independent proof of the idea itself kangaroo.

In the old days Python Six counters matched: additions, doubles, steps tame, step-step wild, The complete sequences of the intermediate points were not preserved; the equality of the counters was not declared a separate byte check of each point of the path Python-arithmetic of the curve.

In addition, separate from the pre-assigned comparative sample, the first positive problem with two attempts and the first negative problem with four are tested Python It also matched the responses to six counters, and this is the post-observational twig coverage, not the new blind statistic. reference-audit/RESULT.json - an artifact of the initial study (`reference-audit/RESULT.json`; outside the picture.

Before measurements: 24 arithmetic tests for ordinary, random and boundary scalars; 144 Search Engine Controls, including all 128 eight-length 16, There are eight negative points and big extremes. There are no wrong answers and no false positives controls/RESULT.json - an artifact of the initial study (`controls/RESULT.json`; outside the picture), ARITHMETIC.json - an artifact of the initial study (`controls/ARITHMETIC.json`; outside the picture), CASES.json - an artifact of the initial study (`controls/CASES.json`; outside the picture.

## New challenges and reliability

All scalars are artificial, around 2^154; The unknown part of the search is limited to small relative to the order of the curve intervals 155-A scalar bit record does not mean a complete solution 155-bit DLP. The maximum length of one interval is increased in **16384 once** prior confirmation N=2^18. The full range of the largest test has a length 2^40, merging of eight intervals 2^35 candidates.

Binary is specially limited N≤2^40. Beginnings/scalar BIGNUM, length and distance uint64_t. It is not a ready implementation for the present N=2^146; The transfer would require wider counters and a new test, and the question of asymptotics here is separated from the technical limits of this test code.

| Set | Length of interval | Success after ≤4 attempt | First attempt | Medium additions | Average seconds |
|---|---:|---:|---:|---:|---:|
| confirmation | 2^30 | 32/32 | 32/32 | 379568.2 | 9.152 |
| main | 2^20 | 128/128 | 125/128 | 13646.1 | 0.286 |
| main | 2^24 | 96/96 | 96/96 | 47579.5 | 1.090 |
| main | 2^28 | 32/32 | 32/32 | 184916.6 | 4.347 |
| main | 2^32 | 8/8 | 8/8 | 733246.6 | 17.374 |

In the primary set pre-appointed 128/96/32/8 occasional L=20/24/28/32; confirmation 32 new L=30. In all sets, block and displacement were evenly selected; salt is independent of them and opaque. ID case, correct unit, private scalar and generator seed All the inputs and secrets of the verifier were saved until the first measurement, and the parameters did not change after viewing the results.

Failed first attempts **hidden**: And then they used the following of four pre-specified salts, and their steps and time are included in the price RETRIES.json - an artifact of the initial study (`RETRIES.json`; outside the picture; each attempt has its own reason, distance, bound, tame/wild steps. A case without a solution after four attempts would mean limited failure, not the exception of the model.

For confirming L=30 The number of successful full launches 95% Wilson-interval [0.8928208017449293, 1.0]; for the largest L=32 — [0.6755924351161198, 1.0]On the largest size, there are only eight random examples, so confidence is much weaker [TABLES.md](<TABLES.md>)The sum total of successes does not replace the statistics of individual sizes.

## Cost: Pair comparisons and scaling

| Set | L | par | Common / full: medium additions | Relationship |
|---|---:|---:|---:|---:|
| confirmation | 30 | 8 | 382545.4 / 2164032.9 | 5.657 |
| main | 20 | 8 | 13113.2 / 60915.5 | 4.645 |
| main | 24 | 8 | 45248.6 / 215753.6 | 4.768 |
| main | 28 | 8 | 194843.8 / 996174.8 | 5.113 |
| main | 32 | 8 | 733246.6 / 4441198.4 | 6.057 |

Comparing **eight-key**, Not eight baseline average of all 128 The full range is also broken down into eight adjacent parts: the same number tame, Races and final traps/The starting points, all the reruns and checks of the scalar found are included. The individual costs of preparation and final inspection are saved in the results.

The confirmatory ratio of averages has a descriptive pairing bootstrap 95% [4.951924291413174, 6.576764637018469]The comparison sample is small; it is not a confidence acceleration interval for the present N=2^146. Slope log2 average steps L And the four basic sizes **0.4959**, the benchmark of quadratic root growth - 0.5. This is the ultimate observation, not the proof of asymptotics.

All 336 The Native Measurements were taken in total 2236.21 inside solver; eighteen Python-reconciliation 6.49 C. Control: 74.20 Writing code, compiling, creating data and sharing with the process are not included; native time includes preparing a search and verifying a response, eliminating one-time initialization of the process and parsing public input. Python included tracemalloc, Therefore, its time is not used to compare the performance of two backend.

Maximum RSS native worker — **7360 KiB**. This is the accumulated peak of the entire process with OpenSSL and runtime, It's not the memory of a single task 16 Jump points, up to eight serialized scalar traps and several work points; no large table. RSS former Python tracemalloc They measure different volumes. Detailed numbers STATISTICS.json - an artifact of the initial study (`STATISTICS.json`; outside the picture), TABLES.csv - an artifact of the initial study (`TABLES.csv`; outside the picture.

## What it changes for research No155

The old mistakes Python-implementation coincurve They don't explain the observed acceleration: other implementations and arithmetic reproduce the result and the tested counters, and new dimensions explore a specific memory-free method for combining intervals.

Conditional square-root scale for K=8,N=2^146 — sqrt(KN)=2^74.5, against 2^77 It's for full range **not the exact number of operations of our algorithm**: while maintaining its parameters μ=2^71, T=4μ=2^73, So there's only eight tame-require K·T=**2^76 single-attempt**, before wild-So even a favorable extrapolation doesn't turn this method into a little bit of search, it's a fine-tuning of parameters, not a real search.

A square-rooted estimate of the total expected cost additionally assumes a non-degenerate probability of success; we have not proved that it persists in this hash walk N=2^146. The real thing GPU-Benchmark and practical advantages over averages 2^69 Address checks71 No; the speeds of different types of operations cannot be identified.

The next question is not just about the correctness of the code: it requires a more rigorous analysis of the probability of crossing walks, or an even larger independent series, and for the real purpose - separate reasons to adopt a generator model/private-key Puzzle This experiment didn't work.

## Reproducibility

New folder E1j, The old matrices and results have not been changed. [Protocol](<PROTOCOL.md>), assembly and versions - an artifact of the original study (`BUILD.json`; outside the picture), manifest - an artifact of the initial study (`manifest.json`; outside the picture), journal - artifact of the original study (`EVENTS.jsonl`; outside the picture), [team](<README.md>)All of it 344 Measuring queries are complete; data and states of each stage are saved. Ready requests are passed through hashes/A new experiment is needed; the confirmed set cannot be passed off as blind again.
