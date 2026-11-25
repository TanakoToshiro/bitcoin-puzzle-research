> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-eight-intervals-20261030/CONCLUSION.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E1i Joint search for eight intervals gives low-memory acceleration on synthetics

2026-10-30. **A specific conditional algorithm for geometry No155: eight tame-walks and one common wild-On an independent confirmation, he asked for an average of 5.49 less group additions than full range search also with eight tame And the same number of traps.** You don't need a big table.

This is a positive result about the algorithm at eight intervals **confirms** model getrandbits(i), stride=2 and does not set limits on this key155. Novelty of the cryptographic algorithm is not stated: a specific adaptation has been investigated kangaroo to the already proven conditional geometry.

## Algorithm and cost

Each tame It starts at the right edge of its interval and leaves one end trap with a known scalar wild start off Q; When a well-known scalar trap is matched, it is subtracted wild The result is verified by the public dot and membership, the correct block number is unknown to the algorithm, and the independent public salt changes for a new round. [Complete Algorithm, Reasoning and Limitations](<ALGORITHM.md>)executable solver - an artifact of the initial study (`solver.py`; outside the picture.

Primary K length-range N, mid-jump μ and T=4μ step tame expense O(Kμ+N/μ), memory O(K+16). Choice μ order sqrt(N/K) giver **heuristic O(sqrt(KN)) with continued probability of success**. This is derived from the placement of intervals and specific walks, and not attributed to an arbitrary set of 2^d The correctness of each returned answer is checked accurately; the probability of hitting wild into tame-The path for our jump function is not proven for arbitrarily large N.

For this conditional space No155: K=8,N=2^146, scale `2^74.5` Group operations and eight traps against `2^77` full-range 154. Proportion of scale about 5.66 The old version of the eight separate searches had scale `2^76` And that refines the algorithmic assessment E1g; spaces E1g They haven't.

## Measurements

In a clean launch **168/168** Measuring launches have been successful: 120 basic comparisons, 16 check-up K=1/2/4/8 and 32 launch 16 The new confirmation keys were passed in front of him 26 small-scale/Negative algorithmic controls and independent verification of arithmetic 56 Measuring tasks are separated Python-arithmetic of the curve. Solver It was launched by a separate process and received only public JSON, without a hidden key, block number or fixture seed.

Confirmation N=2^18, K=8, 16 For example, the parameters are fixed before the measurements:

| Indicator | General search for eight intervals | Full range, eight tame |
|---|---:|---:|
| Successful solutions | 16/16 | 16/16 |
| Average additions with preparation and verification | 6209.06 | 34085.62 |
| Average time solver, s | 0.3736 | 2.1375 |
| Maximum measured Python-memory, byte | 6354 | 7854 |

Average transaction ratio 5.490; pair-descriptive bootstrap 95%: [4.989, 6.003]Repeats, preparation and checks are included, unsuccessful attempts are not deleted from time 16 confirmatory Wilson 95% — [0.806, 1.000]; the sample is small and does not prove the reliability of a large real search 16/16 probability of success 100%.

In the main set, the gain relative to the full range with eight tame grew up 2.56× upon N=2^8 before 4.02× upon N=2^12 and 4.80× upon N=2^16. The last algorithm was also used in the 2.62 There are less than eight separate additions capped-Full tables, including modification K: [TABLES.md](<TABLES.md>), CSV - an artifact of the initial study (`TABLES.csv`; outside the picture), AGGREGATES.json - an artifact of the initial study (`AGGREGATES.json`; outside the picture.

General BSGS-table 32 records won on the small ones N=2^8/2^12, but N=2^16 demanded 2.38 times more additions than total kangaroo. Its price at a fixed price m grows K·N/m; This is not a small memory of the square root method when increasing N.

All clean solver-process 220.72 (c) Starting interpreters; time within solver — 83.66 C. Code preparation, reading and the original pilot excluded are not included tracemalloc, eliminates the native library secp256k1 and basic loading Python. Eight traps and 16 The jumps are the same for the main pair being compared; multiple work points and numerical counters are also required BSGS 32 records plus work points, his memory is not declared by byte equal.

## Boundaries of results

- Comparison with implemented simple capped-kangaroo, Not with the best published multikangur implementations. 5.49× It is not possible to measure acceleration in relation to any existing solver.
- There is no constant probability of success 16-hash-walk N=2^146. Scaling to its present width is a valid heuristic, an unexecuted experience.
- All intervals are conditional with respect to one MT/API/stride-Models. Models where No155 It has a full range, not excluded. No new true private key bits have been received.
- Even the scale `2^74.5` Group operations exceed the average `2^69` entries of the brute force71 by the number of operations of different types; the speeds of these operations are not equal71 on-site 4090 Not shown. Speed 6.2 billion HASH160-check-up/(c) shall not be transferred to these walks.

## Pilot correction and reproducibility

The first pilot was stopped after 27 The public salt contained the name of the case with the number of the correct block. The algorithm didn't disassemble that label, but the interface wasn't strict enough pilot-invalid-labels - an artifact of the initial study (`pilot-invalid-labels/`; out of the picture) and excluded. The clean kit used new keys and independent cryptographic salts; parameters and walking code were not matched by the pilot, and mandatory negative controls were performed until the clean set. [Journal](<NOTES.md>).

Every completed request has request/result/DONE with hashes. Resume It checks them and doesn't run the finished tasks again/to the checking code; solver.py He does not read files or import a generator. [Protocol](<PROTOCOL.md>), confirming statistics - an artifact of the original study (`STATISTICS.json`; outside the picture. It's a lot of stuff GPU There are no changes to the old matrices.

**The next reasonable step:** independent implementation of the same multi-intermediate search and a larger blind synthetic test, especially failure rates and constant multipliers in fixed memory155 It also requires a rationale for the model itself; the current algorithmic gain does not replace this.
