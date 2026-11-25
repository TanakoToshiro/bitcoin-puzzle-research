> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sx-historical-20261101/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E12 — SX: Historical chain and limited CPU-pilot

[Results](<RESULTS.md>), [number-pilot](<PILOT_RESULTS.md>), [history RNG](<HISTORY.md>), [eight-point](<PILOT_PROTOCOL.md>), [further GPU-stage](<GPU_HANDOFF.md>).

The work is public Bitcoin puzzle. The goal is to test a historically achievable weak source entropy for a deterministic wallet SX The author has not identified it. A full search in this folder has not been performed.

## Recorded sources

- SX `69b29c08090f7b832d49e24bf385011793a43cd7`, 16 May 2014: hd-seed/hd-priv/hd-pub and utilities.
- libwallet: copy EdgeApp `495a0fa8448ffceb4a598201f27dafa0a99639e8` and BWallet `5a01940e282e94279403b7db211148fb49aac7ce`. HD header, implementation and the tests match by-by and by- Git blob SHA1.
- libbitcoin-system `05423dc1669b06f695a7717e44710b8756d481a6`:read EC/HMAC API, The arithmetic and format of the compressed point are confirmed.
- GNU GCC 4.8.2/4.9.2 `bits/random.h` and `random.tcc`; libc++ LLVM 3.5.0 `random` and `algorithm`Distributions are executed from extracted original functions.
- 87 Photos of Three Historical Pathways SX/BX; dates, URL, The original bodies and errors are saved. These aren't all branches of the repository, and they're not proof of the builder's installation.

`SOURCES.json` contains URL, time, SHA256, HTTP-status and location of the body; `sources/` It preserves the originals. `errors/` It stores the initial errors of the network, the historical installers are only read, the terms of the original project licenses are stored in the original images. LICENSE/COPYING libwallet are also in native/. Functions GCC and libc++ They have their own licenses from the saved full files, not declared as the original code of this project.

## What was done

Full source `hd_keys.cpp`him header historical tests libwallet preserved unchanged. `native/include/adapter.hpp` Provides explicit adapters EC/HMAC/Base58/serialization modern libsecp256k1/OpenSSL. It is a reproduction of historical functions, **Not assembling a full old wallet or an old compiler**. Network challenges/No wallets.

`prepare.py` historical GNU operator() class libc++ distribution/independent_bits_engine. Modern standard minstd engines They're used with parameters checked against old headers. The call counter checks the rejection floorlog/clz testy API It's clearly stated.

`model.py` - separate Python-numericalization RNG, BIP32 and Base58; `affine.py` A copy of the independent affinity reference from the research folder. `check.py` compare 1173 case by case master, eight direct children and one nested BIP44 child. These are cryptographic controls. BIP44 It is not included in the eight pilot schemes.

`native/faults.cpp` frames HMAC-exits: invalid master, child IL≥n, zero-point child permissible IL=0; Checks for the absence of re-issue HMAC. `native/scan.cpp` Separate single-threaded filter of the younger 49 bit50. `pilot.py` First he checks the synthetics and the boundaries, then he checks the eight blocks of the real pilot1–50 And then there's No51+.

## Checking the saved result without computation

From the root btc test:

> Executable code/The commands are omitted in the documentary copy.


This team only reads the final hashes. `ACCEPTANCE.json` separately certifies the completed verification of continuation with the prohibition subprocess: 51 File of completed calls and inputs has not changed native-There were no replays.

## Reassembly/copying

The final artifacts of this folder are fixed. To reassemble, copy the folder to a new adjacent experiment directory and use the new pilot launch directory while retaining the original certificate. Do not overwrite the received folder for the sake of remeasuring. For a new copy, order:

1. `make_cases.py`, `prepare.py` deterministic preparation from already saved sources.
2. `bash build.sh` through WSL Ubuntu-24.04 - Assembly and historical controls. Local controls are required g++, OpenSSL and libsecp256k1.
3. `check.py` comparison C++ and Python, independent affinity arithmetic.
4. `pilot.py` from Windows Python 3.11 - causes WSL-Scanner: Invariably completed calls are taken from `pilot/*.json`; changed inputs cause failure instead of data mixing RUN-catalogue in a new copy.
5. `acceptance.py` Checking raw data, coverage, rare failures and continuation without repetition.

`fetch.py URLS-*.json` It's only necessary to retrieve public sources. Existing successful images don't reload; it archives environmental errors. `history.py` Reassembles a descriptive table from images, without networking and calculating keys.

The pilot budget -- 120 Seconds of scanner's internal time, in fact 19,85 Controls and overhead are counted separately, pauses and partial coverage are not converted into a negative total. ENVIRONMENT.json; point-in/individual times: pilot/*.json.
