> English machine translation of the [Russian source](<../../../../ru/reports/experiments/bx-libcpp-search-20261101/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E9e: BX 2.0 / libc++ minstd_rand → BIP32

01.11.2026. The user allowed to change GPU-The previous validation code and search. Separate version is created; results GNU/16807 They don't change.

The Only Change in the Scientific Hypothesis: Historical libc++ default_random_engine=minstd_rand, multiplier=48271, increment=0, modulus=2147483647. Verified source: LLVM llvmorg-3.5.0, libcxx/include/random. Completely historical BX-assembly is not reproduced; its use by the author puzzle It's not installed std::minstd_rand is used as an independent executor of a standard algorithm, not as proof of name historical default.

The rest is like E9d: state 1..2147483646, new state%255 bytes; entropy16/32 directly HMAC-SHA512("Bitcoin seed",entropy). Parents m,m/0,m/0'/0,m/0'/1; final normal child i−1/i. Mask 2^(i−1)+(child mod 2^(i−1)). Totally 16 schemas. GPU filter 49 junior-bits50, CPU checks out1–50, Then postponed decisions. CPU and Python-standard is also used 48271; old-school GNU-verifier We can't.

Before the full search: 20 RNG-vectors through an independent std::minstd_rand; former SHA/HMAC/EC/scalar historical BIP32-Tests; newly created 80 parents, 720 children, 256 all16 fingerprints and 516 adjacent/boundary states; 64 synthetic cases posture 16 schemes, loss of candidates/overflow/The border, the short measure 3×1048576 states in different ranges, only after passed A manifest is recorded and a full search is launched in the neighbourhood bx-libcpp-full-20261101.

Full search: 2048 block size1048576, last1048574, block256. SHA-chain, atomic checkpoints, exclusive lock. Mistake/overflow It does not cover; training candidate It stops the search for independent verification. The fixed inputs cannot be changed; the finished blocks are not recalculated as they continue 16 libc++-schemas. 4090/The cloud is unused.
