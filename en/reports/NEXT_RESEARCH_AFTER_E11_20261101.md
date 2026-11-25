> English machine translation of the [Russian source](<../../ru/reports/NEXT_RESEARCH_AFTER_E11_20261101.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../README.md>) · [Direction](<../topics/08-methodology-and-history.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../docs/LATEST_RESULTS.md>).

# After E11: how to narrow down the generator2015 test-free

**Updating after the first phase 01.11.2026:** [E12 SX](<experiments/sx-historical-20261101/RESULTS.md>) Reproduced a fixed May chain of historical HD-function and distribution GNU/libc++; The controls are over. CPU-pilot8 check-out262144 condition RNG, No coincidence, it's just that0,012207% space, full of space SX-There's no passage. The next specific action is: [CUDA-chain-pilot](<experiments/sx-historical-20261101/GPU_HANDOFF.md>)It's not a repeat of the original source search255 already22.07.2014; late equivalent RNG-The first part is not to duplicate. Below is the original plan and its boundaries.

Date: 2026-11-01. Suggestions; new compute series not launched; priority reflects verifiability and additional information, not the likelihood of the author using the program.

## What counts

- E9g already complete:16 BIP44 tuple, two-way2 147 483 646 No states, no candidates roadmap on running It is old; the source of the current state, experiments/bx-bip44-20261101/RESULTS.md and COMPLETE.json. It's the old one roadmap And the certificates don't change.
- BX normal/hardened/BIP44 The results relate to their exact `%255` Do not distribute them to all previous versions, C++-libraries and transformations entropy.
- E1/E2/E7 have already covered the relevant MT-models, seed32 and circulation through local projections. E1k It has shown that some free states are not verifiable; returning to them without a new limitation will not add information about the generator.
- E3/E7 check out Armory and old Electrum-derivation; E7/E8 found MPK among the accepted pool. E9 restore regular sources entropy and bitcoinj-We don't need to repeat these discoveries.
- E10/E11 I didn't install the author's program2019 They combine several libraries into a single class, and limit the Electrum1.9.8 unchanged signer2019 does not exclude him as generator2015.

## 1. SX hd-seed Main following candidate

In the preparation of this sentence, the primary code of the predecessor was found BX: commit00819fb694ae1b521931443229a41724d9b24f90. [Patch](https://github.com/libbitcoin/libbitcoin-explorer/commit/00819fb694ae1b521931443229a41724d9b24f90.patch) dated16April2014; [file](https://github.com/libbitcoin/libbitcoin-explorer/blob/00819fb694ae1b521931443229a41724d9b24f90/src/hd-seed.cpp) contains `default_random_engine(random_device())`, `uniform_int_distribution<uint8_t>(0,255)` and32byte entropy by default, then `libwallet::hd_private_key(entropy)`.

It's not proven BX `%255`Distribution may otherwise convert outputs engine And spend it when you reject it, even if you don't engine get other seed and all the daughter keys GNU s31-The bit state preserves the final order of search size, but the specific assembly and algorithm distribution It still needs to be installed SX It's not proven by the creator.

The first step: restore the suitable to15January2015 ligament SX+libwallet+libbitcoin+standard C++-library; trace changes from found commit before this date, check the actual master/child Algorithm, serialization, invalid-child The rules and ways of the then-teams/Do not replace examples `libwallet` modern BIP32 by name.

Acceptance before full search: historical C++ Performance and independent standards are the same seed/master/children; There are positive and negative artificial Puzzle It's the same mask, it's finite, it's fixed to comparison, then it's the pilot, and it's the cost estimate, and if it's short, it's a full search for new ones tuple. №1–50 filter, No51+ It's only after the matching pattern is fixed, and mistakes and timeouts are not refutations.

The expected benefit: a new reproducible historical chain with a measurable cost of verification, or a documented lack of necessary dependencies seed into BX.

## 2. Historical assemblies Windows/MSVC dependency BX/SX

V E9 historic build-lock It wasn't. GNU and libc++ keep out MSVC or the binary options that were supplied build scripts, metadata/release packages precise standard-library header prior to the date of financing; establish engine, initial state, random_device and error-handling MSVC not to be used as evidence2014.

The good thing is, a new end generator, or a proven match to a model that's already been tested, and if you match up, don't run a new search, even if it's discovered MT short-lived seed, former Python seed32 Does not exclude this chain: initialization C++ engine and converting its output into HD seed They might be different.

## 3. Specific JavaScript-wallet2013–2014, later MWC1616

This is a previously proposed, but not completed family. [Developers V8](https://v8.dev/blog/math-random) confirm MWC1616 finishing2015. The fact itself is not binding Puzzle s JavaScript.

Select a specific archival version of the library/The wallet and prove the achievability of the weak path: Math.random systemic crypto, transformation float→bytes, entropy pool/RC4, time/events and subsequent creation HD seed. You can't declare it found Math.random-function as a real source of keys without analyzing the calling code. If there is independent qualitative system entropy, short PRNG doesn't do seed short.

Only then synthetics with masking and omissions Puzzle: Can the algorithm restore state or predict delayed keys? 64-bit-state doesn't mean32-bit seed. Through HMAC/BIP32 You cannot directly transfer linear limits to output PRNG. A complete search is only after evaluating the actual residual uncertainty.

## 4. The historical transformation of the weak entropy into seed wallet

Verified BX-The series passed the raw bytes to BIP32. Chain `entropy→BIP39 words→PBKDF2→BIP32` The other, even if the final path is BIP44. There may also be documented imports into another wallet hex/ASCII/base64/hash: include only specific chains of manuals or source codes to15January2015.

Po Po bitcoinj Senior migration is already known128-The old key prefix via the BIP39. The new result will be only a proven limited source of this old key, including the provider and rotation128A bit doesn’t turn into a practical search.

## What to put off

Additional equivalent RFC6979-libraries; general repeat of pseudonym search; same MPK-candidates; free MT-states; arbitrary account/offset/entropy lengths. Return with a new primary basis or a new algorithm with a proven win.

Recommended Next Step: Limited Historical Audit SX Don't promise the cost of a full pass before playback distribution/HD-A negative result would exclude specific chains rather than establish a single remaining brand; the match must pass independent deferred keys and addresses.
