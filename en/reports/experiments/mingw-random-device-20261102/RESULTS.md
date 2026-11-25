> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mingw-random-device-20261102/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# MINGW-RD-01 - the result of the check fixed random_device

**02.11.2026, completed.** The old defect MinGW It's backed up by primary source and computation SX/BX-chains **doesn't puzzle**:80 combinations,60 All of them contradict the known solutions already at No2–5. A new private key, bit or XOR-No contact received. GPU not used, current search SX unchanged.

The numbers below are taken from AUDIT.json - an artifact of the initial study (`AUDIT.json`; outside the picture), [numerical](<NUMERIC_REPORT.md>)Precise predictions - an artifact of the original study (`PREDICTIONS.json`; outside the picture. Protocol: [PROTOCOL.md](<PROTOCOL.md>)Preliminary conclusions and errors are kept separately: [JOURNAL.md](<JOURNAL.md>).

## What is established historically

Public [message MinGW #338](https://sourceforge.net/p/mingw-w64/bugs/338/) created06.05.2013: new process `std::random_device` I gave you the same first number. Upstream GCC4.7.4/4.8.2/4.9.2 contains fallback MT19937 s default seed5489. That's confirmed **code**, Not the controversial comments about `rand()` in discussion. [GCC4.7.4 random.h](https://github.com/gcc-mirror/gcc/blob/releases/gcc-4.7.4/libstdc%2B%2B-v3/include/bits/random.h), [GCC4.8.2 random.cc](https://github.com/gcc-mirror/gcc/blob/releases/gcc-4.8.2/libstdc%2B%2B-v3/src/c%2B%2B11/random.cc).

Condition - undefined `_GLIBCXX_USE_RANDOM_TR1`. Crossconfig MinGW The three versions do not include it.4.8.2/4.9.2 It is also clearly deactivated for native MinGW/MSys. Woo4.7.4 native configure check-in `/dev/random` and `/dev/urandom`, without a late explicit exception MinGW. This difference is recorded in RNG_CONTROLS.json. Precise assembly/The patches of the author's binary are unknown2019 upstream [correction GCC9](https://gcc.gnu.org/pipermail/libstdc++-cvs/2019q2/026853.html) substitute fallback on `rand_s` for MinGW-w64; The late date of the correction does not mean that the problem occurred after2015.

The chain with a standard constructor:

```text
MT19937 seed = 5489
первый random_device() = 3499211612
minstd_rand0 initial state = 3499211612 mod 2147483647 = 1351727965
SX/BX byte generation → BIP32 master → выбранный путь → маска puzzle
```

You can't transmit5489 directly minstd and consider it a reproduction SX. In full-time saved SX/BX-function **local random_device**, And then it's called once, so each of those calls gets the same first number again MT They are not alternatives seed With different rules of life, the object is a different model of application.

## What is verified and what is duplicated

Four chains: SX uniform8→32byte; SX23.05.2014 uniform16>>8→32byte; BX%255→16byte; BX%255→32Byte, for each20 paths: `m`, `m/0`, `m/0'/0`, `m/0'/1` s normal/hardened last-index i−1/i; BIP44 account0 external/change s normal i−1/i. It's conditional HD-compositions; the existence of paths in an experiment does not prove their use by the author.

All80 Combinations rejected by decisions1–50. On a fixed state, two SX-The version is the same entropy, therefore **unique sequences60, not80**. Real holdout51+ Not required; published keys51+ They were used only to verify the correctness of the original address data, not to select models.

| subset | Attitude to previous work |
|---|---|
| BX,16/32byte,40 GNU-pathways | The fixed state is included in the already fully verified domain E9; There's no new space. |
| SX uniform8,4 direct-master path GNU | Entering the complete E12-GPU. |
| SX uniform8,16 other GNU-pathways | Included in a separate series production E13; Only one point has been checked, its current status is not changed or overestimated. |
| SX23May uniform16>>8,20 pathways | This condition coincides with the previous SX entropy; There's no additional independent sequence. It's not proof that the algorithms are equal across the domain. |

**Practical conclusion:** search out BX/SX specially MinGW seed No need. The specific default model is closed fallback and the paths listed MinGW, everything Windows-Wallets or any other generation chains are not excluded.

## Verifiability

- Po Po10000 successive outputs of each of the three historical fallback-implementations coincided with their own Python MT19937 and NumPy RandomState. A new object has been tested, clearly token5489 faulty token.
-1590 historical comparisons C++ distribution with an independent formula, including the limits of rejection and the actual condition MinGW.
-83 the published keys are confirmed by the range, compressed public key and address;8 verified by independent affinity EC-arithmetic.
-80 Synthetic predictions for all20 This is in line with the independent EC-arithmetic,20 positive20 Negative Controls; Verified master from BIP32 test vector1.
- Re-launch uses the stored results457 file E12 still tested COMPLETE.json and haven't changed.
A separate admission counted the first real contradiction of all60 different sequences through an independent affinity EC-Arithmetic, re-start with a compulsory ban subprocess Hashes and time of modification of results have not changed. ACCEPTANCE.json - an artifact of the initial study (`ACCEPTANCE.json`; outside the picture.

The calculated part is about2,1s CPU/wall launchable WSL; Preparation, loading and assembly are not included. This is not a measurement of the speed of mass brutes, nor is it a basis for rent assessment GPU. The launch of historical functions is made with clearly specified modern adapters engines, not a full-time MinGW/Windows-binary; details in README.md.

## What stays open?

1. **Historical SX23.05.2014 uniform16>>8 randomly** different uniform8. Counterexample retained state5489 - an artifact of the initial study (`NON_EQUIVALENCE_WITNESS.json`; outside the picture); it serves only as proof of the difference in formulas, not a new assumption about the seed If you go back to this version, first, a separate audit of its lifetime/labourer HD-The chain and the score of differences from the already covered candidates, the full pass was not performed here.
2. Direct receipt entropy several `random_device()` In another historical application, you need to present a specific code before15.01.2015. Arbitrary packages of exits have not been checked and are not automatically added.
3. Clearly unconventional token, other rules of/preservation of the object, vendor-patches, MSVC others STL. This series doesn't rule them out. MSVC-branch uint16 with a kbyte from June SX a separate production, it cannot be mixed with uniform16>>8 May.

Author's links puzzle s MinGW The next meaningful separate audit from the previous list is a specific historical browser wallet/BitcoinJS, After fixing the achievable entropy chain.
