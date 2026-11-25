> English machine translation of the [Russian source](<../../../../ru/reports/experiments/randstorm-my-wallet-20261102/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/03-wallets.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# RND-01 — Blockchain.info My Wallet: chain Randstorm

**02.11.2026. The chain audit is complete, the real search has not started.** Officially elected My Wallet, commit`031863d30590754f5d02fc10488236b1dc30f7f7` from29.12.2013. Reproduced historical BitcoinJS bundle And the specific functions of creating a key with synthetic entropy sources. **a small, practically scalable space for the present puzzle until established**.

The main conclusion is that there is no straight chain32-bit seed → BIP32-masterThis **browser-only + extra-entries → general RC4 → private keys**. Unknown browser, order of events, password, server entropy and the position in the stream getRandomValues The main section library does not use Math.random foreground pool. The historical defect does not prove the applicability of the attack to the author puzzle.

## Selection of source and version

- The main slice is the last commit beforehand01.01.2014, [archive](https://github.com/blockchain/unused-My-Wallet/tree/031863d30590754f5d02fc10488236b1dc30f7f7)It's a calendar choice before checking the result, not looking for a convenient weak example.
- Additional slices:25.12.2012 (`5028357283f2493975d8dd28fd0d4d7c421a2353`and07.01.2015 (`5116e636cc77331b4f700ad60b1b51171142e5fa`They can't be combined into a single schema2013/2014/2015 The selection limit is not the actual year commit.
-23 preserved wallet-file-check Git blob SHA1 Official trees, all loads have SHA256/URL/time. PROVENANCE.json - an artifact of the initial study (`PROVENANCE.json`; outside the picture), SOURCES.json - an artifact of the initial study (`SOURCES.json`; outside the image), additional sources - artifact of the original study (`SUPPLEMENTAL_SOURCES.json`; outside the picture.
- Fully old browser/The site didn't launch JS performed Node VM with clearly defined inputs; network, DOM And the wallet's storage is replaced by controlled stubs, which are feature playbacks, not proof of a real deployed version of the service or the configuration of the author's machine.

## Precise chain of the main slice

1. When loading `bitcoinjs.js` generalize `rng_pool`If available `window.crypto.getRandomValues` and `Int32Array` requested32 32-bit-words128bytes); they XOR-mixed little-endian. Otherwise128 challenge Math.random grant `t=floor(65536*r)`in pool Record the senior and junior bytes t: everything256byte, branch Netscape4 early JSBN It's already been replaced in this section.
2. V pool XOR-time is mixed up in milliseconds, in fact, the younger32cliques/The keys mix the time, the mouse `clientX*clientY`Everyone seed_int pointer4byte; order matters.
3. Staffed `MyWallet.generateNewKey(_password)` first `_seed`: time, SHA256 current password or argument signup, later `extra_seed` (if any) from the answer API or `body.data('extra-seed')`. SHA256/hex figure out big-endian every word XOR-mixed little-endian. Public availability endpoint/The name of the field does not make the value known extra_seed for29.12.2013 not established; a customer's comment on randomness is not considered an independent quality check.
4. `new Bitcoin.ECKey(false)` trigger `ECDSA.getBigRandom(n)`The first time `SecureRandom.nextBytes` Another time stamp is added, and it is executed RC4 KSA factual pool, later pool It's clearing WebCrypto-lineage pool128, not256; The reproduction code does not artificially add to it256.
5. JSBN for256-bit **consumer33byte**, Then replace the first byte with zero32byte- big-endian number x. Private key: `1 + (x mod (n−1))`It's not32byte to key, not range mask puzzle neither rejection sampling.
6. Subsequent keys are taken from the following33byte RC4. New facilities SecureRandom They do not create independent states ECDSA evoke getBigRandom And it consumes the total flow, and the additional consumption of even one byte changes the binding of subsequent keys to the indexes.
7. There's no track explored BIP32/master/chain code. Password is used as an additional entropy and in storage protection, but the standard path is not the recovery of all keys from one stored HD-mnemonics. By default, the primary slice creates uncompressed public keys/address; for puzzle Individual exports would be required/masking and selecting a compressed public key, which limits literal compliance with the standard interface, but does not exclude modification/script.

Primary lines: [wallet.js](https://github.com/blockchain/unused-My-Wallet/blob/031863d30590754f5d02fc10488236b1dc30f7f7/wallet.js#L579), [pool/RC4](https://github.com/blockchain/unused-My-Wallet/blob/031863d30590754f5d02fc10488236b1dc30f7f7/bitcoinjs.js#L2999), [JSBN33byte](https://github.com/blockchain/unused-My-Wallet/blob/031863d30590754f5d02fc10488236b1dc30f7f7/bitcoinjs.js#L2445), [getBigRandom](https://github.com/blockchain/unused-My-Wallet/blob/031863d30590754f5d02fc10488236b1dc30f7f7/bitcoinjs.js#L3923)Detailed numerical values of all synthetic inputs and intermediate: CASES.json/NATIVE.json.

## What the controls really showed

CHECKS.json - an artifact of the initial study (`CHECKS.json`; outside the picture), [NUMERIC_REPORT.md](<NUMERIC_REPORT.md>):24 script;21 fully independent Python-reconstruction pool, time, RC4 and keys;115 keys and230 addresses matched coincurve;23 The first public keys were additionally matched with a clean one affine-EC.19 I've been through the entrance checks minified bundle gives the same five keys as the original one in a fixed control scenario; universal byte equivalence of all branches is not claimed.

- Change of initial Math.random, time, password, server seed event **before** first KSA changes the sequence in the verified fallback-scripts.
-B WebCrypto-branching Math.random Does not affect the keys: calls Math.random for pool0, request getRandomValues Changing system words or early passwords affects.
- After the first one KSA supplementary seed_int/_seed They only change the zeroed pool and **don't change live RC4**. This is confirmed by a password change/server seed/events between the keys. TODO absentee reseeding It is already present in the historical source; our observation is not declared a new vulnerability.
If you artificially consume one byte **before** staffed _seed, password server seed, The ones that are added later don't affect the next key **proof**, That the normal registration did indeed carry out early consumption, and that the pathway to premature start should be set separately.
An additional byte between the first and second key saves the first key and changes the subsequent key.
- Zero checked/maximum33byte-entry JSBN: first-byte modulo(n−1)+1 reproduced independently.

Slice2012 modern-tested navigator-Scripts ignored getRandomValues, has128 challenge Math.random and an old branch Netscape4. Slice07.01.2015 contains msCrypto, seed_large check-up pool. Straight ECKey without seed_large and WebCrypto expected to be blocked; standard wrapping _seed It works with synthetic inputs2015 tested RC4/keynote/address from captured KSA, **full-fledged pool This new version has not been independently reconstructed**. Having an input length check by itself does not prove its entropy.

## Browser Generator: Why It's Not Easy2^32

Discussed specific **V8 3.22.24**, commit-metadata31.10.2013 preserved sources/v8-tag-metadata.json. It is a historical source for controlled Math.random, Not the author's browser.

```text
state0 = 18273*(state0 & 0xffff) + (state0 >> 16)
state1 = 36969*(state1 & 0xffff) + (state1 >> 16)
word   = ((state0 << 14) + (state1 & 0x3ffff)) mod 2^32
Math.random = word / 2^32
```

Formula confirmed C++-way, x64 full-codegen and lithium. It's not often copied MWC multiplier36969/18000 concatenation16+16. **32exit bit doesn't mean32The initial state bit.**

Bootstrap receiver8byte`kRandomStateSize=2*kIntSize`of per-isolate It's a generator48-bit LCG `state←(0x5deece66d*state+11) mod2^48`, NextBytes It takes a high byte every step of the way little-endian x64 first/last4bytes form two32-bit words; zeros are forbidden. Initialization LCG taker seed out of the flag, callback embedder, rand_s (Windows), /dev/urandom temporary fallback, then brings him to48bits.106 synthetic bootstrap-Examples coincided between Python independent JS BigInt.

**Bottom line:** fixed-point bootstrap third-party Math.random-call up MWC-states are no more than2^48 condition LCG. This is the upper power limit of a particular initial family, not proof of exact entropy/It is not a universal lower limit of complexity of restoration, nor the space of all things wallet-Unknown additional inputs/You can't just throw out the position in the stream, even if you know it Math.random-state early server seed or WebCrypto This can prevent the recovery of keys.

Sources: [V8 Random/conversion](https://github.com/v8/v8/blob/3.22.24/src/v8.cc#L113), [bootstrap](https://github.com/v8/v8/blob/3.22.24/src/bootstrapper.cc#L2638), [LCG/initialization](https://github.com/v8/v8/blob/3.22.24/src/utils/random-number-generator.cc), [constants](https://github.com/v8/v8/blob/3.22.24/src/utils/random-number-generator.h)Old V8 He was not going to do it; he was doing it exactly JS wallet-functions with explicit transcription of browser arithmetic, verified by sources.

Presence WebCrypto on a particular deployed browser/There's no evidence here GitHub-path Chromium32 Crypto.cpp gave404, notebook SUPPLEMENTAL_SOURCES.json; It's not evidence of absence API. **You can't ascribe fallback common Chrome only because of his Math.random He was weak.**

## Applicability puzzle and decision to continue

This result does not refute Randstorm does not exclude My Wallet It shows why the hypothesis doesn't boil down to a new cheap one GPU-series SX. Real puzzle-keyboard/No bits were searched for or received; no brute force was measured, no lease was justified RC4 value Math.random; Recovery will require a separate algorithm.

Before the scanner must be confirmed **one-accessible configuration**:

1. A specific old browser and wallet-slice fallback It's actually active. The most specific next challenge is to map the slice25.12.2012 with its browser, because it rng don't getRandomValues; This is an untested full model of that version.
2. Implementation path to the first KSA: Early consumption, initial timers/events, presence of a password/server seed. Check on historical handlers/It’s not about disabling sources just for the sake of a little bit of brute force.
3. Only then is the synthetic restoration of the **masked** If you don't have a limited entry or recovery model, you don't start the full pass.

A separate useful test – find a real staff consumer SecureRandom, launching RC4 before _seed. Synthetic capability demonstrated, but the attainability of normal creation of a new wallet is not established brainwallet, And here the password is just one of the additional inputs.

## Conservation and acceptance

Training teams/check-up/reassemblies of tables: README.md. `check.py` check-in hashes And it skips the finished computations when the inputs match. Cache retested with prohibition subprocess, hashes mtime The results don't change.457 pre-accepted files E12 All parameters are synthetic and published in CASES.json; random user data was not read. source errors and intermediate conclusions are stored in JOURNAL.md. Full Manifesto of Completion: COMPLETE.json.
