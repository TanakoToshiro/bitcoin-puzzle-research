> English machine translation of the [Russian source](<../../../../../../ru/reports/experiments/mt-posterior-20261030/runs/20261030-124415-78192a38/CONCLUSION.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../../README.md>) · [Direction](<../../../../../topics/02-prng-recovery.md>) · [Documents of the series](<../../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../../docs/LATEST_RESULTS.md>).

# E1c Probability among compatible states MT

Date: 2026-10-30. Launch `20261030-124415-78192a38`Admission: **passed**.

## Result

For 12 previously verified schemes without unknown failures proved: prior non-zero MT each key71 has the same conditional probability 2^-70. Each key corresponds exactly to the 2^16100 Not a single bit, not a non-trivial bit XOR It's not preferable. It's an exact conclusion given prior, non-statement seed creator. [Evidence](<../../EXACT_UNIFORM.md>).

For three API with concealed refusals considered 1728 proposal-stories: 1254 compatible 474 Incompatible, separately tested 12 True histories of synthetic sets; they were not included in the estimates.

In all compatible proposal-The target residue had a full dimension: 70 bit71 and 74 for75. The conditional probabilities of all verified bits and XOR, and their weighted assessments - exactly 1/2. Winnings before random selection is not detected.

## Limitation detected by synthetic control

For interval3-synthetic-0 log2 importance-The weight of a true story is equal 32, at most in the sample 3: difference 2^29 For once interval3-synthetic-1 log2 importance-The weight of a true story is equal 21, at most in the sample 2: difference 2^19 This is the weights after adjusting for probability of proposition, not the ratio of probabilities of the stories themselves71, But their great weight shows why the empirical ESS And the same sample responses don't certify the complete conditional mixture. You can't zoom in on that same sample and declare the uniformity you find.

| Synthetic kit | max log2 weight proposal | log2 weight-weight | Difference |
|---|---:|---:|---:|
| byte_range3-synthetic-0 | 0 | 0 | 0 |
| byte_range3-synthetic-1 | 0 | 0 | 0 |
| byte_range3-synthetic-2 | 0 | 0 | 0 |
| byte_range3-synthetic-3 | 0 | 0 | 0 |
| interval2-synthetic-0 | 2 | 0 | -2 |
| interval2-synthetic-1 | 0 | 0 | 0 |
| interval2-synthetic-2 | 1 | 0 | -1 |
| interval2-synthetic-3 | 1 | 1 | 0 |
| interval3-synthetic-0 | 3 | 32 | 29 |
| interval3-synthetic-1 | 2 | 21 | 19 |
| interval3-synthetic-2 | 2 | 5 | 3 |
| interval3-synthetic-3 | 3 | 3 | 0 |

## Numerical results

| Set | Proposed | Compatible | ESS | Maximum weight | Dimension of purpose |
|---|---:|---:|---:|---:|---|
| byte_range3-synthetic-0 | 16 | 16 | 16.00 | 0.0625 | [70] |
| byte_range3-synthetic-1 | 16 | 16 | 16.00 | 0.0625 | [70] |
| byte_range3-synthetic-2 | 16 | 16 | 16.00 | 0.0625 | [70] |
| byte_range3-synthetic-3 | 16 | 16 | 16.00 | 0.0625 | [70] |
| interval2-synthetic-0 | 64 | 53 | 41.94 | 0.0678 | [70] |
| interval2-synthetic-1 | 64 | 54 | 54.00 | 0.0185 | [70] |
| interval2-synthetic-2 | 64 | 48 | 47.08 | 0.0408 | [70] |
| interval2-synthetic-3 | 64 | 52 | 50.28 | 0.0370 | [70] |
| interval3-synthetic-0 | 64 | 46 | 22.26 | 0.1250 | [70] |
| interval3-synthetic-1 | 64 | 33 | 26.67 | 0.1000 | [70] |
| interval3-synthetic-2 | 64 | 36 | 27.00 | 0.0889 | [70] |
| interval3-synthetic-3 | 64 | 40 | 24.35 | 0.1270 | [70] |
| byte_range3-real-71 | 64 | 64 | 64.00 | 0.0156 | [70] |
| byte_range3-real-75 | 64 | 64 | 64.00 | 0.0156 | [74] |
| interval2-real-71 | 256 | 215 | 203.65 | 0.0180 | [70] |
| interval2-real-75 | 256 | 200 | 198.08 | 0.0099 | [74] |
| interval3-real-71 | 256 | 146 | 91.78 | 0.0394 | [70] |
| interval3-real-75 | 256 | 139 | 65.56 | 0.0808 | [74] |

Woo 8 Predetermined diagnostic flags were activated ESS/Even the absence of flags does not prove the coverage of unseen heavy stories: four batches, weights, probabilities and diagnostic deferred values. [full-sheet](<RESULTS.md>)Machine results are an artifact of the original research (`SUMMARY.json`; outside the picture.

Set No75 It didn't have a value for it, but it was public and already known to the researcher, so it's a diagnostic test, not an independent blind test. Brier score probabilities 1/2 equal 0,25 It doesn't have a predictive advantage.

## Checking the keys at the address

New Compatible Conditions Received 425 various candidates71; It's a match to the address 0. Together with previously verified 172 meanings 597 various keys. Compressed and uncompressed Addresses are locally verified, dots coincurve independent Python-All candidates and origins are artifacts of the original study`CANDIDATE_ADDRESS_AUDIT.json`; outside the picture.

Uploading to the wallet is not necessary: the verifiable condition is the coincidence of the received address with the address puzzle, The match confirms the appropriate key, but not the uniqueness of the original state of the generator. The discrepancy excludes a particular candidate.

## Controls and reproducibility

Exhaustive control: 1023 the state of a small generator, 176 stories, 2816 Separate control of incorrect equal weighting and 8192 MC-suggestions, everything 12 Original synthetic sets are verified by historical Python. Acceptance is additionally completed 1254 numerical repetitions, 36 historical repetitions and 30 independent rank checks with the opposite order pivot. Acceptance - an artifact of the initial study (`ACCEPTANCE.json`; outside the picture.

A pause after the first proposal and the sequel is verified resume missed 1728 stories; 3519 checkpoint-file saved SHA-256 and mtime. The damaged copy is rejected, and reassembling the numerical report doesn't repeat the calculation, it gives the same text.

Sum of saved time proposal-Calculations: 834.443 c; individual true stories: 15.564 c; acceptance: 143.406 c. These are separate measured categories, not total wall time The whole thing. CPU; version Python/packages: VERSIONS.json - an artifact of the initial study (`VERSIONS.json`; outside the picture), pip freeze - an artifact of the initial study (`requirements-frozen.txt`; outside the picture.

## Permissible conclusion and continuation

For the uniform prior and 12 For fixed linear circuits, randomly compatible states do not reduce the expected number of key checks. For hidden failures, the pilot did not detect a signal in the branches studied, but does not prove the uniformity of the complete mixture MT, uniform prior starting seed. One cannot convert the number of fit states into an estimate of the probability of a real key without a model of their origin.

With a uniform goal N=2^70 Checking different keys in any fixed order requires an average ofN+1)/2 Independent, even choice with return requires, on average, N Building a compatible state and checking the address add computational cost; speeding up such search relative to GPU-The brute force has not been measured or declared.

The current volume is complete. It's enough to reproduce the story manifest, separate samples, RESULTS/NOTES and teams README; Previous experiments and projects have not changed.

## Future experiments

1. Reasonable limitations on historical seed/A script that really reduces a lot of states.
2. An analytical estimate of the mass of unseen stories or a precisely calibrated conditional sentence; simply increasing the number of random stories does not resolve the issue of coverage.
3. Full modelling randrange borderline secp256k1, without sufficient restrictions only on the subfamily accepted/rejected values.
4. New checks for any new data offsets that have appeared using a separate pre-recorded protocol.
