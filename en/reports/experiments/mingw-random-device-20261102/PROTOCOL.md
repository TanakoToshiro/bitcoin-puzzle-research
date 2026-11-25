> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mingw-random-device-20261102/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# MINGW-RD-01 fixed random_device

Date of production: 2026-11-02. CPU, changeless SX/GPU-This is a separate audit of historical implementation and limited verification of a particular fixed state, not a new complete brute force.

1. Save GCC 4.7.4/4.8.2/4.9.2 random.h/random.tcc/random.cc and selection settings fallback. Check the branch without `_GLIBCXX_USE_RANDOM_TR1`, default seed and the number of calls in SX/BX. Separately MinGW/libstdc++ and MSVC.
2. Reproduction of historical functions fallback with clear adapters; compare MT19937 independently Python-implementation NumPy RandomState. Check the reset when creating a new object and the continuation of one object Python random.seed equivalently C++ seed.
3. Calculate the first value random_device normalization GNU minstd_rand0. Get it SX uniform8 entropy32 and BX %255 entropy16/32. Recalculate a limited set of former paths in this one state, do not repeat their complete passes.
4. Reading the historical journal found a separate version SX from 23.05.2014: uniform16 subsequent >>8 Add its exact chain for the same fixed state entropy32. It's not the old one MSVC-branch uint16 It's about throwing away the older bits distribution with an independent formula to real solutions.
5. Pathways: parents m, m/0, m/0'/0, m/0'/1 s normal/hardened last-index i−1/i (16); parentage m/44'/0'/0'/0 and /1 s normal i−1/i (4). Totally20 on entropy-model; four entropy-model =80 It's a limited list, not all possible paths SX Deep paths – testable conditional composition HD-functions, not proof of use by a particular wallet.
6. Real solutions1–50 - Hypothetical testing. Holdout51+ You can only see it after you've got a complete match in the training, and you've got a forced higher bit removed from your observations, and you've got to keep the exact predictions and the first contradiction of each model BIP32/Cryptography and synthetic positives/Negative controls are mandatory.
7. Finish with classification: repeat previously covered space; new finite fixed chain; untested historical configuration MinGW, SX or Windows No conclusions about the author's program without separate evidence.

Sources and failed downloads: SOURCES.json. Results and continuation: RESULTS.md. Previous studies are only read, borrowed files are copied with hashes.
