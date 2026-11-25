> English machine translation of the [Russian source](<../../ru/reports/NEXT_AFTER_E9D_20261101.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../README.md>) · [Direction](<../topics/08-methodology-and-history.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../docs/LATEST_RESULTS.md>).

# The following checks after the full BX/GNU-passageway

01.11.2026. These are sentences; no new computational experiments have been started on this file.

E9d flatly 16 scheme BX 2.0.0/GNU minstd_rand0 → BIP32. It does not exclude other implementations default_random_engine or other means of derivation puzzle s BX It's not set.

## Priority 1: same version BX s libc++

Original source verified [libc++ from LLVM 3.5.0, include/random](https://raw.githubusercontent.com/llvm/llvm-project/llvmorg-3.5.0/libcxx/include/random): in executable definitions (lines) 1859–1863 picture viewed) default_random_engine — minstd_rand s multiplier=48271, increment=0, modulus=2147483647. GNU-The current kernel variant uses multiplier=16807.

This is a concrete historical alternative, not an arbitrary substitution PRNG. On his own Clang does not mean libc++: You need to choose a standard library. Compatibility with the full historical BX-assemblies with this environment must be confirmed by its build-instruction/Sources; the authorship of this assembly is not established.

The proposed experiment: to preserve the source and SHA-256, Get independent test vectors, keep the old ones 16 scheme BIP32 bytes mod255, replace the generator family minstd_rand. Check the positives again/negative controls and GPU/CPU-The total space is the same. 1..2147483646. Time reference – approximately one hour in the current 3070 Ti Laptop, proceeding 45,7 mines of the previous full passage and similar workload; this is extrapolation to a new measurement 4090 This check is not required.

## Priority 2: limited extension of confirmed uses BX

First historical instructions and team examples, then a pre-fixed list hardened final children, extra-documented lengths seed transformation between seed and HD. Do not multiply arbitrary biases, paths and encodings without a basis. New variants must have separate identifiers, synthetic positive examples and value estimates until full passage.

This stage has not been completed, and it may be less justified than a change of direction if there is no historical basis for specific options.

## Further candidates - only after checking the prerequisites

1. Other historical C++ standard libraries, including Windows: first set out default_random_engine And the availability of the assembly on the right date 2014 Do not automatically transfer current results GNU/libc++.
2. Specific source vulnerability entropy In a historical wallet: you need verifiable code and limited space, not the assumption that any SecureRandom equal timestamp or Java Random48.
3. Migration bitcoinj: primer 16 bytes of the old key through BIP39 already restored to E9, But a limited set of old keys can't be found, and without that reason, computational search is not warranted.

Do not repeat the studies performed MT/Python, simple XOR-lift, No256/MPK without a new source or a new model HASH160 and the usual quality BIP32 No additional reason for the negative result BX.

The criteria for choosing the next series: historical feasibility, a clear testable hypothesis, final cost and new result relative to the experiments already saved BX limit the next series in advance; the absence of coincidences is not a reason to endlessly add arbitrary options.
