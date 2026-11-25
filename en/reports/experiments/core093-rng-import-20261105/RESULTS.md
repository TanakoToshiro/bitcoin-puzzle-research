> English machine translation of the [Russian source](<../../../../ru/reports/experiments/core093-rng-import-20261105/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/03-wallets.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# CORE-RNG-01 — Bitcoin Core 0.9.3

05.11.2026, MSK. **Limited official audit completed Windows/Linux-Binaries, Imports and Specific Denial RNG. A new substantiated model for enforcing Puzzle Not received.** This is not a complete audit of all historical OSes, assemblies and states OpenSSL. At the direct direction of the user, further experiments of this branch are discontinued; only the preservation of the results already obtained is performed.

## What's verified by execution

| Official bitcoind 0.9.3 | Generation/keypool/importation/export/restart | Recovery and encrypted wallet | Zero scalar through importwallet |
|---|---:|---:|---|
| Windows64 | 87 inspections PASS | 129 inspections PASS | Didn't start |
| Windows32 | 87 inspections PASS | 129 inspections PASS | Didn't start |
| Linux64 | 87 inspections PASS | 129 inspections PASS | Controlled assertion abort, confirmed |
| Linux32 | 87 inspections PASS | 129 inspections PASS | Controlled assertion abort, confirmed |

Totally **866 accepted binary checks**, Including two positive crash checks, unloading checks include independent calculation secp256k1, addresses, WIF The number of tests does not mean the number of independent hypotheses **13 RNG-control** baseline Core historical OpenSSL 1.0.1i. The list of specific launches and their hashes fixes ACCEPTANCE.json; procedures and limitations [PROTOCOL.md](<PROTOCOL.md>).

The two official archives have been checked with SHA256SUMS.asc. PGP-The signature wasn't verified `v0.9.3.0-g40d2041-beta`, OpenSSL 1.0.1i. Sources are fully secured commit/hash into SOURCES.json - an artifact of the initial study (`SOURCES.json`Archival applications were launched on the current Windows/WSL, Not on the OS 2014 years. Linux32 Received libraries from local unpacking official Ubuntu-packages, without system installation.

## Generator and assembly chain

1. `CWallet::GenerateNewKey → RandAddSeedPerfmon → CKey::MakeNewKey → RAND_bytes(32) → Check` create a separate scalar ranged `1..n−1`. Keypool It stores pre-created keys. Issuance of the address takes an existing one reserve-key; refill It generates additional keys HD-seed/path Not in this chain.
2. **Official Windows-assembly MinGW-w64, not MSVC.** Gitian use targets i686-w64-mingw32/x86_64-w64-mingw32 static OpenSSL 1.0.1i. There is no private key generation `std::random_device`, MT19937 or `uniform_int_distribution`So the models SX/MSVC fixed MinGW random_device on Core They're not.
3. `-frandom-seed=bitcoin` into Gitian The reproducibility of the compiler. FAKETIME time-fix **assembly**. These parameters don't set seed wallet during execution.
4. Standard OpenSSL RAND_SSLeay This version is used SHA-1-based state pool: STATE_SIZE=1023 and ENTROPY_NEEDED=32 It's not a single generator uint32 seed. In addition to the accumulated state, counters are involved PID, previously mixed data and, in a conventional assembly, the contents of the output buffer prior to recording.
5. Nana Linux source `RAND_poll` reading OS random devices; **strace present Linux32/64-Binaries confirmed the discovery /dev/urandom reading 32 byte**. It's in the code fallback `/dev/random`, `/dev/srandom`, EGD, service PID/UID/time. The mere fact of reading does not prove the entropy quality of any historical nucleus.
6. Nana Windows `CInit` trigger RAND_screen; herein OpenSSL it RAND_poll plus readscreen. `rand_win.c` mixing CryptoAPI CryptGenRandom, system-statistics/counters and other available data; Core add up performance counter periodically performance registry data. In the branch PROV_RSA_FULL 64 byte CryptGenRandom zero-in **valuation** entropy, But the bytes themselves are still mixed up, and this can't be read as lack of system randomness CryptoAPI historical Windows It didn't work here.

Reasons: [formality](https://bitcoin.org/en/release/v0.9.3), [binary-archive](https://bitcoincore.org/bin/insecure/bitcoin-core-0.9.3/), [Core key.cpp](https://github.com/bitcoin/bitcoin/blob/40d20412ff173e8eea2f456fd749663c8cabda18/src/key.cpp), [util.cpp](https://github.com/bitcoin/bitcoin/blob/40d20412ff173e8eea2f456fd749663c8cabda18/src/util.cpp), [Gitian Windows](https://github.com/bitcoin/bitcoin/blob/40d20412ff173e8eea2f456fd749663c8cabda18/contrib/gitian-descriptors/deps-win.yml), [OpenSSL md_rand.c](https://github.com/openssl/openssl/blob/2b456034457b58454aae3998a2765b6a5b9bc837/crypto/rand/md_rand.c), [rand_win.c](https://github.com/openssl/openssl/blob/2b456034457b58454aae3998a2765b6a5b9bc837/crypto/rand/rand_win.c).

## Confirmed processing error RNG

`CKey::MakeNewKey` **ignores the return value RAND_bytes**. He repeats the challenge only when it is unacceptable scalar. Precise bodies Check/MakeNewKey They are removed from the source without any corrections. C++-bandage link wrappers described separately.

- If RAND_bytes returned 0 or −1, but the buffer contains a permissible scalar, The method takes the key.
- If the failure does not change a predefined buffer, this buffer is accepted. This is artificial control; the real new buffer is accepted CKey You don’t have to have that previous content.
- If only zeros are issued, the code keeps repeating the call 16 Issues and forced exclusion of the binding on the next attempt; the endless process is not abandoned.
- **The real one OpenSSL 1.0.1i**, collected from historical source, with artificially disconnected RAND_poll really recorded 32 byte, returned 0 lackingly entropy, a MakeNewKey I took them, normal polling takeover 1.

This is a reproduction of the failure processing error, **proof**, That such a refusal was made by the author Puzzle. In this experience, the system source was specially removed; real calls, counters, memory were not restored PID and timing author, reasonable range seed full-on GPU-There's no change to the current search engine.

`CWallet::EncryptWallet` also does not RAND_bytes for encryption master key and salt - established by reading the source. **CMasterKey encryption is not HD-master Address generation.** Controlled refusal is precisely encryption RNG not performed separately; healthy encrypt/unlock/import/export It is tested on all four binary options.

## External keys, import and order

- Correct WIF imported with the same scalar and compression flag. Even even scalar 1 with leading null bytes and n−1 They're accurate. Compressed/uncompressed representation scalar different public keys/addresses and can be stored simultaneously in one wallet.
- Core It is not known whether the imported scalar from BIP32, A weak external generator or a manual script. Import does not add a parent chaincode Or the external chain index. Restoring the full chain dump new wallet All the original keys were retained; the new wallet They also have their own random keys.
- `importprivkey` test scalar sets birthday=1. Re-imports change label, Although the key already exists. Birthday=1 persistence restart, including encrypted wallet.
- `importwallet` Passes unrecognizable strings and pre-existing keys. Re-importation does not overwrite label/time the existing key. `reserve=1` linewise **non-recreate keypool**: such imported key is subsequently unloaded as `change=1`if not asked label.
- **Date importwallet is not properly maintained:** AddKeyPubKey write down the key and the old metadata prior to assignment nCreateTime from the line restart dump The date is set; after that, restart It's missing GetKeyBirthTimes Takes her out of the chain regtest control `2011-02-02T21:16:42Z` (genesis minus two hours. This time refers to the test chain, not to any real-world time wallet. The same problem has been confirmed for encrypted importwallet. Keys and labels They're still there.
- `dumpwallet` sort out birthday, numerically CKeyID/uint160. On equal dates, that's the order little-endian significance HASH160, not Base58-addresses, import numbers, keypool index or scalar. Therefore, the numbering of lines of unloading without information about metadata It does not prove the original order of generation.
- V `importwallet` lack of `key.IsValid()` beforehand GetPubKey. Both Linux-release-binary Base58Check-correct WIF **zero-point scalar** trigger assertion `fValid` into `key.cpp:389` and finishing the process. `importprivkey` Returned a staffing error with the same input −5. This is a login processing error, not creating a null key or restoring a private key.

Reasons: [rpcdump.cpp](https://github.com/bitcoin/bitcoin/blob/40d20412ff173e8eea2f456fd749663c8cabda18/src/rpcdump.cpp), [wallet.cpp](https://github.com/bitcoin/bitcoin/blob/40d20412ff173e8eea2f456fd749663c8cabda18/src/wallet.cpp), [uint256.h](https://github.com/bitcoin/bitcoin/blob/40d20412ff173e8eea2f456fd749663c8cabda18/src/uint256.h) preserved RPC/dump/restart-artifacts.

## Applicability Puzzle

**Staff HD-chain Core 0.9.3 It still doesn't fit: it's not in this version.** Mistakes RNG/importwallet They do not determine the origin of the keys themselves Puzzle. Zero scalar It does not become a key; loss birthday It changes the way we export, not scalar.

Core It is a possible means of importing, storing, exporting and signing the keys created by an external program, which requires a specific external model or author's data to verify such a scenario: wallet/dump s metadata, system-reference/build-up entropy, According to the available data, the wallet is not completely excluded; a total negative search result for unknown states RNG It's not coming. It hasn't started again.

Not closed: macOS full GUI; all historical OSes and compilers; third-party patches/ENGINE; Quality of Systemic Entropy at a Specific Moment 2014/2015; snapshot/fork-scenarios; arbitrary external generators and damaged bases, previously retained general mark "full audit of historical records" RNG/“No assembly is made” is replaced by this specific volume, not a universal one PASS.

## Environment and reproducibility

All the test ones bitcoind System libraries were not installed, existing searches were not touched RPC-magazines, dumps And the bounce logs are saved. FINAL_MANIFEST.json describes hashed artifacts and excluded workers caches.

First trial team `-version` was unsupported and briefly launched a regular daemon: A new one was created default wallet and the definition of the external IP. It is excluded from the isolated results regtest. After completion, checked creation times all files and no process; the created directory is moved to `incidental-version-probe`Existing user experience wallet Details, including corrected early test expectations, are given in PROTOCOL.md.
