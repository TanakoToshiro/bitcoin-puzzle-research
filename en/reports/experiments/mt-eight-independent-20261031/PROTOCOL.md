> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-eight-independent-20261031/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E1j Independent implementation and increase of synthetic tasks

2026-10-31, Europe/Moscow. Geometry reference E1g algorithm E1i It's not changing. It's a new implementation C++/OpenSSL, importation Python-solver without coincurve In search, independence means a new control code/And the algorithmic idea and the function of jumps are intentionally the same. It's a test of implementation and scaling, not an independent mathematical proof of success.

Parameters frozen: K=8, μ=max(2,floor(sqrt(N/(2K)))), 16 leaps, T=4μ, up to four attempts, salt and SHA-256 match on specification E1i. One wild, eighteen tame, memory O(K). Synthetic scalars are located near 2^154, So we don't limit cryptographic verification to small absolute scalars 2^154+h*2^L, h=1,25,108,116,137,145,228,252. These are new artificial dots, not the point of the real No155.

Before measurements: comparison OpenSSL independently Python-cryptography for conventional and boundary scalars; all 128 eight-length 16 plus eight negative points in the gaps; additional extremes at larger scalars. Any wrong key returned stops the experiment. Limited failure is recorded, not considered an erroneous key.

Basic set: N=2^20 (128 independent cases, 2^24 (96), 2^28 (32), 2^32 (8): everything 264 We all have randomly the right block and bias; hidden seed is only verifier-The first eight cases of each size are compared to an independent search of the entire range, broken down into eight adjacent intervals, with the same resources N=2^20 They are also performed unchanged E1i Python-solver; Comparison of keys, steps, attempts, appeals and complete counters of group operations. E1i limit full_range length 2^28, We don’t change the old code for large tasks.

Separate confirmation after the main set: 32 novelty N=2^30, The first eight of them are also full range 296 new challenges, 336 measuring C++ eight questions and eight comparisons with the old Python. The verifier creates and stores all inputs in advance; the algorithm receives only inputs Q, intervals and an independent random salt. Do not transmit the correct block number, private scalar, seed Once you've seen the results, don't change the parameters; the change requires a new experiment.

Consider all attempts, including unsuccessful ones, not just successful ones. Keep the outcome of each attempt separate. Report: success rates of the first attempt and all four, confidence intervals separately in size, paired costs on a comparative subsample, preparation work/inspections, the size of the stored structures, RSS The absence of errors on the final set does not prove reliability N=2^146.

Native process is consistent, one CPU worker, Reuses only the library context of the curve; tables/There are no traps between tasks 900 It's like a freeze-proof timeout, it's fixed as an unfinished timeout, it's not dropped from the statistics OpenSSL/compiler metadata And save the original hashes/You don't change the matrix GPU and no cloud.
