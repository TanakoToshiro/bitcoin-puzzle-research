> English machine translation of the [Russian source](<../../../../ru/reports/experiments/core093-rng-import-20261105/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/03-wallets.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# CORE-RNG-01 — Bitcoin Core 0.9.3: RNG, official assembly, importation

Date: 05.11.2026 MSC: Continuation of the line Bitcoin Core into WALLET_COVERAGE_20261104.md.

Task: Separate the conventional generation of individual keys from an external generator, check for real archival binaries and specific processing errors RNG/Circulation of key space or unknown state OpenSSL It's not part of this experiment.

## Recorded material

- Core commit `40d20412ff173e8eea2f456fd749663c8cabda18`.
- OpenSSL `OpenSSL_1_0_1i`, commit `2b456034457b58454aae3998a2765b6a5b9bc837`.
- Official `bitcoin-0.9.3-linux.tar.gz` and `bitcoin-0.9.3-win.zip`both SHA-256 coincided with the official SHA256SUMS.asc. Signed PGP It wasn't tested. SOURCES.json contains URL, sizes and hashes.
- From the archives are launched bitcoind Linux32/Linux64/Windows32/Windows64. They're not reassembled 2014 Years are not emulated.
- Linux32 using private unpacking libc6-i386/lib32stdc++6/lib32gcc-s1 Ubuntu, without installing packets in the OS apt And the hashes are saved.

## Binary checks

`audit_binaries.py` independent affine secp256k1 and Base58Check on Python stdlib. No address, no address WIF are not calculated by Core For the expected result, each key in the unloading is checked.

Each launch: a new catalogue `runs/<UTC>-<profile>-<mode>`, `-datadir=.`, regtest, `-listen=0 -connect=0 -dnsseed=0 -discover=0 -upnp=0 -maxconnections=0`. RPC address 127.0.0.1; The password is artificial and stored on the team regtest genesis and zero connections. `getinfo.testnet=false` This version is normal for regtest. Windows receives relative file names so that the encoding of the old application does not depend on the Cyrillic alphabet of the absolute path.

Regime `normal`:

1. Version, genesis, generation of compressed keys keypool, dictation reserve-keys, refill.
2. import scalar 1 two-handed encodings, n−1, randomly 128-the exact number; the exact preservation WIF and addresses.
3. Negative controls: 0, n, 2^256−1, WIF another network, raw hex, banishment Base58 (`0`Control of the name `checksum` This is the symbol used; a separate valid Base58 There is no wrong checksum here.
4. Repeated importprivkey shifter label. Importwallet dateable/equal-date/label/reserve/change; incorrect line is omitted; repeated importwallet doesn't change label.
5. Dumpwallet Sorted by time, then numerically uint160 keyid (little-endian byte-byte HASH160). After the restart, all keys are checked labels and birthdays.

Regime `restore-encrypt`: restoration of full dump new wallet, saving all source keys, encryption with an artificial password, refusal dumpprivkey upon locked wallet, unlock, both modes of importation encrypted wallet, second restart Re-examination of the keys/birthdays. Additional proprietary random keys of a new wallet are permissible.

Regime `invalid-wallet`: disposable Linux-process WIF zero-point scalar through importwallet. Expected non-zero exit confirmed assertion into console-log; This is a positive control of application error, not a successful import. Windows-The accident is not checked by this regime.

Linux strace retain openat/read/connect; reading /dev/urandom In official binary books, it is separated from static reading of the source, and the quality of nucleus entropy is not derived from one observation.

## RNG-control

`prepare_rng_probe.py` extraction CKey::Check and CKey::MakeNewKey. Metadata and extraction hash RNG_EXTRACTION.json. Minimum shell CKey It has a clearly zeroed storage; it does not reproduce all the details of the historical placement of the object in memory.

`build_rng_probe.sh` collector OpenSSL 1.0.1i modern GCC, `linux-x86_64 no-shared no-asm no-dso no-krb5 -fPIC`and C++14-This is a historical algorithm assembly, not a broken reproduction Gitian. The original archive and extracted methods are not patched.

Link wrappers RAND_bytes/RAND_poll They only introduce artificial failures within the test process scalar; retry; bytes return 0/−1; waivers valid storage; limited 16 Failure to receive zero credits; the real OpenSSL without entropy polling; healthy OpenSSL conventional polling. No weak keys are used outside the test.

## Procedural observations

The first team Windows64 `-version` Unsupported: The Old One daemon Started a normal launch, created a new one default-The catalogue stopped because of the absence RPC-This trial run is not considered an isolated test: the log shows a request to determine the external IP And initialize the network streams 0. All the files were created between 23:14:04 and 23:14:13 UTC; existing user wallet No inventory creation times. After checking the absence bitcoind The new catalogue has been completely moved to `incidental-version-probe`, inventory No files have been deleted. Subsequent checks use the explicit limitations above.

Two early normal-run stopped on the wrong expectation testnet=true; Control replaced by verification genesis. First Linux32 didn't start 32-bit loader; Local libraries have eliminated the cause C++11-strapping C++14 for aggregate initialization; This change only applies to the tying/erroneous attempts are retained, but not included in accepted checks.

## Boundaries of withdrawal

Not checked macOS/GUI, every historical compiler and distribution, modified third-party builds, old cores/CryptoAPI, Virtual machine clones, all modes ENGINE, real entropy failures on the author's machine, damaged Berkeley DB, arbitrary external generators: no transfer of coins, block generation, password brute force or GPU-To apply to the author, additional data on the origin of the keys are required/condition RNG.
