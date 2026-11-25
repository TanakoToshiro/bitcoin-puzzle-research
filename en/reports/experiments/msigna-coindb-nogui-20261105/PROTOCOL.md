> English machine translation of the [Russian source](<../../../../ru/reports/experiments/msigna-coindb-nogui-20261105/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/03-wallets.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# MSG-DB-01 - Console audit CoinDB

05.11.2026, Europe/Moscow. User Request: Continue mSIGNA, **without GUI**.

Object: commit `ace0c828bed7441ef6ddda314674d882ecf4dbbe` from 13.01.2015. Previous R2 performer CoinCore HDKeychain, not CoinDB Keychain/Key. It is this extra layer that is being tested here.

1. `collect.py` It copies the anchored sources of the previous study and uploads the missing files to the official repository Git blob pre-preserved commit; SHA256 recorded SOURCES.json. Independent Python-reference It's copied unchanged.
2. `prepare.py` class-extracting Keychain/Key from Schema.h and their bodies Schema.cpp. Line numbers and hashes are written in EXTRACTION.json. `odb::access` just announced; pragmas It's not being processed Qt They don't connect.
3. CoinCore HDKeychain/secp256k1/BigInt and the rest of the necessary headings are copied unchanged hash.h excluded unused Hash9/scrypt-dependency; test substitution HMAC Nope aes.cpp contexts only EVP stacked EVP_CIPHER_CTX_new/free for OpenSSL3. Diffs preserved. `BN_LONG=long` Needed for unused old overloading BigInt.
4. `run.py` build-up g++ available WSL Ubuntu It makes five synthetic kits. It uses real ones Boost text archive and cryptographic calls. Packet installation, launch GUI, connection Bitcoin network, There is no reading of real wallets and transactions.
5. `verify.py` Verify all records with an independent affinity model BIP32. Python separately calculates the historical EVP_BytesToKey/SHA1 with five rounds; AES-CBC inspected separately openssl enc. It's an independent format check/KDF, non-independent implementation AES.
6. `finalize.py` Checks the sources, the bodies recovered build inputs, binary, stdin/stdout, verifier and reference. ACCEPTANCE and FINAL_MANIFEST Demonstrate a specific successful run.

Inputs: BIP32 vector1 seed, sequence 0…31, a labeled synthetic string, 32 zero and 32 FF-The last two are boundary controls API, **feeble seed writer**. Their derivatives and all files `.priv` into runs synthetic.

Version-1 check-up `load(...,1)` through Boost serialization access It's not a file released by a real old installer. Version-2 round-trip standardize `archive << object >> object`but Boost 1.83, non-library 2014 years.

Repeat in this folder under WSL:

> Executable code/The commands are omitted in the documentary copy.


GUI/ODB historical OpenSSL They're not acceptance conditions, they're not validated. You can't apply the result of a single error API-Branches to the entire staff wallet.
