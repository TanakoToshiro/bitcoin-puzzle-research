> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-eight-independent-20261031/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E1j Independent implementation of general search No155

2026-10-31. Only new synthetic dots on the secp256k1. [Protocol](<PROTOCOL.md>), [journal](<RESULTS.md>), [table](<TABLES.md>)When you're done, CONCLUSION.md and ACCEPTANCE.json. The old designs and matrices do not change.

Search code `native.cpp` written separately and used C++17/OpenSSL instead Python/coincurve. He doesn't import E1i and does not read files; receives public data through stdin. The jump function and the parameters are saved so that you can verify the exact match between the answers and the six counters, the complete transcript of the intermediate points is not stored. Complete mathematical independence is not declared, the implementation of the same idea is checked by a different code and a different arithmetic of the curve.

From `research/puzzle71-hypotheses` (local) WSL Ubuntu-24.04 It is necessary only for native performance:

> Executable code/The commands are omitted in the documentary copy.


Binary `native`Source, compiler and version/hash OpenSSL fixate manifest.json and BUILD.json. Change of code/The parameters require a new experiment. All requests are time-controlled 900 (c) Unfinished persons remain with ERROR.json, completed DONE.json. RESULTS.md It is updated after each request. EVENTS.jsonl - detailed history in UTC; the user date of the protocol - Europe/Moscow.

The verifier stores artificial private scalars and seed only VERIFIER_ONLY_FIXTURES.json. Algorithm gets point, starts, length and an independent salt; ID case/blockage/seed It's not passed on to him. `runs/*/native-input.txt` It contains bytes that are sent exactly. SEARCH K N compressed_Q salt32hex start1hex … startKhex. Up to four tries. `--selftest` Separate arithmetic verification mode, not search queries.

The results contain all attempts, the number of additions/double-up/stepping-step/search, individual costs of preparation and inspection of the scalar, time and RSS. RSS The accumulated peak of the whole process, not the exact memory of the individual case worker consistent GPU. Eight launches of the old unaltered Python E1i They are used to reconcile keys and accurate counters, not to compare the speed of libraries with different profiling.

296 new challenges: 264 basic, 32 confirmatory; 336 C++ comparisons 8 Python. Additionally 24 calibration 144 The large intervals are of length up to 2^32; the artificial scalars around 2^154. It's not a real No155 non-confirmation MT-models.

Binarnik accepts N≤2^40; length/distance uint64_t, beginning and scalar BIGNUM. For real intervals N=2^146 You will need a separate implementation of wide distances. [What exactly is independently verified](<INDEPENDENCE.md>).
