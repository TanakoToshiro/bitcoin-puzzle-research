> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-search-tuning-20261031/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E1l individual intervals, general search and cost of preparation

2026-10-31. After E1j/E1k. The goal is algorithmic: test the advantage of general search on new synthetic dots versus consecutive limited search for eight early-output intervals MT-Models and the Real Key No155 The completed results should not be used as a new test sample.

Geometry: beginnings 2^154+h·2^L, h=[1,25,108,116,137,145,228,252]length N=2^L. The algorithm gets only the public point, the intervals, the independent salt and the parameters. The secrets and the block selection are only in the verifier. Save all the inputs until training; do not run the test until the choice of parameters is fixed derived from E1j/OpenSSL, No new independent implementation is announced.

Four predefined profiles: μ=max(2,floor(sqrt(N/(2K)))) and T=μ,2μ,4μ; fourth μ=2·max(2,floor(sqrt(N/(2K)))), T=2μ. Everywhere 16 The same surges, up to four salts, the old distance stopping rule and the protective step limit K=8; separately K=1. The sequential method visits start-up intervals, stops working only after a proven solution, pays for incorrect intervals in full, and the absence of a solution after limited attempts does not prove that there is no key.

Training: 24 new challenges N=2^18, All four profiles of both methods. The rule of choice for each method: first the largest number of solved problems, then the minimum sum of all additions (including unsuccessful attempts), then the profile name. This is the final setting, not a proof of global optimum or exact expected cost.

Test after fixing the choice: 32 new challenges N=2^22 and 16 new N=2^26. Methods: selected general, selected consecutive, common with the previous T=4μ. If you select an old generic profile, you use the result once, don't repeat the same query. Total cost of all attempts, reliability and paired comparisons report separately. Paired bootstrap Descriptive, only on common successful pairs and only if there are no failures; in case of failures, acceleration cannot be reported only on successful cases.

Controls before training: the previous profile must match E1j eight old public key and counter queries; all profiles of both methods at the edges of reduced tasks; negative point in between. Control cases are not included in the statistics. Any wrong key stops the experiment.

Resources: CPU one-way worker, without GPU The profile of each query is public, and the time measurement includes trapping and checking the response, and the preparation of each individually solved interval is paid baseline It doesn't use general caching of the jump table between blocks, it's a comparison restriction to mark. Memory without large tables. RSS include OpenSSL/runtime. Protective timeout 900 c to native request. Completed requests to save with SHA The new parameters after the test require a new experiment.
