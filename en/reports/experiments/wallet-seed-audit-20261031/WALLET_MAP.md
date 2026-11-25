> English machine translation of the [Russian source](<../../../../ru/reports/experiments/wallet-seed-audit-20261031/WALLET_MAP.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E9 - source map seed and derivation

Slice study 31.10.2026. Dates below -- commit/tag In the original sources that were saved, there was no set date for the creation of the author's wallet 2015. Completeness of all wallets and assemblies is not declared.

| Implementation / regime | Source of input | The next chain | What's established? |
|---|---|---|---|
| Electrum 1.9.8, newcomer | ecdsa.util.randrange(2^128), In a proven dependency, os.urandom | 100000 SHA256-iteration → old-school master → addictive children | The state path is not equal Python MT Or one time. |
| Electrum 1.9.8, option bip32 | ecdsa.util.randrange(2^160), transformation/mnemonic selection | Alternative NewWallet, BIP32 | BIP32-The branch is already present in this release, although it is not selected by default/The restoration of this branch has not been carried out. |
| Armory, commit 2015-01-08 | Crypto++ AutoSeededX917RNG<AES>, system-entropy | root → derivative chaincode → chain | Already researched E3. No short track was found in the standard path viewed timestamp seed. |
| bitcoinj 0.12, new HD | SecureRandom.nextBytes, default 128 bit entropy | BIP39, 2048 PBKDF2-HMAC-SHA512 → BIP32 m/0'/0/i and m/0'/1/i | Quality depends on the specific JVM/OS-Provider; automatically counting Java Random48 You can't. |
| bitcoinj 0.12, migration | The first 16 bytes of the oldest non-rotating private key | BIP39 empty passphrase → BIP32 | Keeps maximum 128 bit of the original entropy; if the old key is weak, HD-It doesn't make it strong. It just reduces the quality of the key to 128 A bit is not a practical vulnerability. |
| Libbitcoin Explorer 2.0.0 + GNU libstdc++ | One meaning random_device → minstd_rand0 | seed-bytes → hd-new → BIP32 | Nothing more 2^31−2 states regardless of length seed; This is a particular weak path puzzle It's not set up with him. |
| Bitcoin Core 0.9.3, staffed keypool | OpenSSL RAND_bytes for each new key | Independent CKey::MakeNewKey | It's not HD-chain in view mode. Use Core import/The signature does not exclude another generator. |

## Electrum: It is important to distinguish between normal mode and option

Commit `f92b483942d3f8ee51506e0436d9b524db33a336`, 2014-03-16; annotated tag 1.9.8 It's pointing at him version.py A new creation without a number config.bip32 choose OLD_SEED_VERSION, It's optional NEW_SEED_VERSION.

- [Choice of implementation, wallet.py:1818](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/lib/wallet.py#L1818).
- [OldWallet.init_seed, wallet.py:1717](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/lib/wallet.py#L1717); [random_seed, bitcoin.py:524](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/lib/bitcoin.py#L524).
- [python-ecdsa 0.11 randrange:19–55](https://github.com/tlsfuzzer/python-ecdsa/blob/36e9cfa80fcf8b53119adc787e54a5892ec1eb2c/ecdsa/util.py#L19)by default os.urandom, In case of unsuccessful selection, the exception is not fallback to timestamp. The deterministic auxiliary functions below the file are not this standard call.
- [The old derivation, account.py:70](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/lib/account.py#L70); [alternative creation, wallet.py:281](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/lib/wallet.py#L281).

Presence `import random` The large file does not prove the use MT for seed. Dependence setup.py admitting ecdsa>=0.9, so-called 0.11 The historical vectors of the old derivation have already been tested E7; They weren't counted here.

## bitcoinj: Migration is an independent hypothesis

Commit `83a9a71f3fff3f223d0737ad758b519a39dbbd62`, 2014-10-02, tag v0.12. [Official release notes](https://bitcoinj.org/release-notes) describe transition HD Default and migration of old wallets.

- [KeyChainGroup.java:776–814](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/wallet/KeyChainGroup.java#L776): oldest key after rotation cutoff, reading 32-byte secret, leaves bytes[0:16], uses an empty passphrase.
- [ECKey.java:902](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/core/ECKey.java#L902): The private key is serialized in 32 It's about seniors 128 Not the younger ones.
- [DeterministicSeed.java:103](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/wallet/DeterministicSeed.java#L103): entropy transmuted mnemonic then seed; You can't just pass it on 16 bytes BIP32.
- [MnemonicCode.java:126](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/crypto/MnemonicCode.java#L126):executable PBKDF2_ROUNDS=2048. Commentary on 4096 Next to the challenge is outdated; the realized constant cannot be replaced by this comment.
- [DeterministicKeyChain.java:108](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/wallet/DeterministicKeyChain.java#L108):the real way m/0'/0/i or m/0'/1/i, not automatically BIP44.

Migration cannot be automatically linked to Android-mistake 2013: code takes into account the rotation of old weak keys; you need to confirm the application/provider/history. [Initial notification 2013 year](https://bitcoin.org/en/alert/2013-08-11-android) does describe the problem and need for rotation, but does not identify the author's wallet puzzle. A limited set of old keys for practical search in this passage is not found.

## BX 2.0.0: narrowing seed-space

Commit `aae99b278fdbfa31005cfa083ccbbf909212cbe4`, 2014-12-14. This is the real way of the then available tool, not an arbitrary homemade one PRNG.

- [random_fill, utility.cpp:116](https://github.com/libbitcoin/libbitcoin-explorer/blob/aae99b278fdbfa31005cfa083ccbbf909212cbe4/src/utility/utility.cpp#L116): one starting value random_device, default_random_engine, later `% numeric_limits<uint8_t>::max()` - divisor 255.
- [The default value is 128 bit seed.hpp:159](https://github.com/libbitcoin/libbitcoin-explorer/blob/aae99b278fdbfa31005cfa083ccbbf909212cbe4/include/bitcoin/explorer/commands/seed.hpp#L159).
- [GCC 4.9.2 random.h:1571](https://github.com/gcc-mirror/gcc/blob/releases/gcc-4.9.2/libstdc%2B%2B-v3/include/bits/random.h#L1571): default_random_engine=minstd_rand0; parameters a=16807,c=0,m=2147483647 defined above. [Normalization of the initial state](https://github.com/gcc-mirror/gcc/blob/releases/gcc-4.9.2/libstdc%2B%2B-v3/include/bits/random.tcc#L120).
- [hd-new](https://github.com/libbitcoin/libbitcoin-explorer/blob/aae99b278fdbfa31005cfa083ccbbf909212cbe4/src/commands/hd-new.cpp) raw seed-bytes; [hd-private](https://github.com/libbitcoin/libbitcoin-explorer/blob/aae99b278fdbfa31005cfa083ccbbf909212cbe4/src/commands/hd-private.cpp) It's clearly a number hardened-flag.

The staff seed-byte-free ff, later HMAC/BIP32 The main problem is the power of the source space, not the noticeable correlation of the daughter keys. std::default_random_engine depending C++-Libraries: result GNU cannot be transferred without being checked libc++/MSVC. The author's installed vehicle is unknown.

Authors [Milk Sad](https://milksad.info/disclosure.html#suspected-rng-problems-in-older-bx-versions) They've already made the old way 2.x Our contribution here is to reinforce the version and GNU-variant, accurate reproduction seed→BIP32 A limited test is a public one puzzle. Modern 3.x s MT and clock seed It came later; it cannot be attributed to the creation puzzle into 2015 A full historical period build-lock bx/version2 not restored; derivative semantics verified by own test vectors bx this commit.

## There are already known limitations of regular routes

[Armory E3](<../armory-classic-20261030/NOTES.md>) I've already followed root→chaincode and systemic entropy. [Bitcoin Core 0.9.3 key.cpp:361](https://github.com/bitcoin/bitcoin/blob/40d20412ff173e8eea2f456fd749663c8cabda18/src/key.cpp#L361) and [wallet.cpp:45](https://github.com/bitcoin/bitcoin/blob/40d20412ff173e8eea2f456fd749663c8cabda18/src/wallet.cpp#L45) Confirm the independent creation of keys in keypool. The presence of such functions is not a proof of the quality of a particular OS, state OpenSSL It doesn't have a full failure audit API, hardware RNG and providers.

Known solutions puzzle - full keys after masking. They are not automatically equal to the original child keys and do not give the original seed A regular, secure wallet.
