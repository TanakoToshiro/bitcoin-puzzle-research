> English machine translation of the [Russian source](<../../../../ru/reports/experiments/armory-import-variants-20261105/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/03-wallets.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# ARM-IMP-01 — Armory: historical versions and imports

05.11.2026, Europe/Moscow. **Additional slices and specific import routes were tested, practical recovery from one published solution Puzzle Not received; limited weak generator for new brute force found. Armory Not excluded.**

It's a continuation [A1](<../parallel-wallets-20261102/01-armory/RESULTS.md>) and [A1-R2](<../parallel-wallets-20261102/01-armory/round2-20261102/RESULTS.md>)Their synthetics recovery-results manifests They didn't change or recalculate.

## Slices and differences in generation

All the dates below commit date UTC, It doesn't have to be the date of publication of the installer 15.01.2015. Complete pins, formal GitHub-Archives and verification of previous files: SOURCES.json - an artifact of the initial study (`SOURCES.json`Comparison of methods: COMPARISON.json - an artifact of the initial study (`COMPARISON.json`; outside the picture), summary: VERSION_FACTS.json - an artifact of the initial study (`VERSION_FACTS.json`; outside the picture.

| Slice | Commit / date | Chaincode absently C | RNG source-based | Staffed multipliers.txt |
|---|---|---|---|---|
| v0.88-beta | 8af1b12eda3e3796c1318eef050c4899f43db1bf, 18.04.2013 | Separate random 32 byte | Crypto++ AutoSeededRandomPool | No |
| v0.90-beta | 1ddcfa91d6bc56da0c883a4117db7be982b2296e, 26.11.2013 | DeriveChaincodeFromRootKey | AutoSeededX917RNG s AES | No |
| v0.91.1 | babe3b19e0451af7ba1571dd4c38a1d19d957de3, 01.05.2014 | From root | AutoSeededX917RNG s AES | There is |
| v0.92 | 7bd89850a90a280e3345c29d7e0338b62f841548, 29.07.2014 | From root | AutoSeededX917RNG s AES | There is |
| v0.92.3 | 268db0f3fa20c989057bd43343a43b2edbe89aeb, 02.10.2014 | From root | AutoSeededX917RNG s AES | There is |
| January snapshot | 61a596fa94f9cacf9fb00c4e02d0eb65d8b17513, 08.01.2015 | From root | AutoSeededX917RNG s AES | There is |

When clearly given root and C All six routes retain both values 0.90, root-only Recovery calculates the previous non-standard HMAC256 s 32-byte size of the add-on; it is not standard HMAC blocky SHA256=64 In byte 0.88 lack of C It causes a new random byte request **substitute root chaincode instead of a lost accident C The old wallet is wrong**.

The transition formula in all six sources is maintained: `k_next = k × (C XOR SHA256d(uncompressed(P))) mod n`In C++ We changed the wrappers, the diagnostics and the total multiplier output, not this formula root/C It didn't. C++ at this stage was compared according to the source; the new native build It's not coming.

Extracted as well vendored Crypto++ osrng/randpool/rng From the same archives: RNG_SOURCES.json - an artifact of the initial study (`RNG_SOURCES.json`; outside the picture. AutoSeeded RNG address OS_GenerateRandomBlock; in the respective platform branches, this CryptGenRandom or /dev/urandom. V X917 and seed, and AES key In the early slices, the generator object is static; in the later slices, it's recreated, but it's short timestamp-only or 32-bit seed-It's source analysis, not auditing every OS, builds, bugs entropy-Provider or state of the author's machine.

Sources: [0.88 create/root importation](https://github.com/etotheipi/BitcoinArmory/blob/8af1b12eda3e3796c1318eef050c4899f43db1bf/armoryengine.py), [0.92.3 wallet](https://github.com/etotheipi/BitcoinArmory/blob/268db0f3fa20c989057bd43343a43b2edbe89aeb/armoryengine/PyBtcWallet.py), [X917 auto-seeding](https://github.com/etotheipi/BitcoinArmory/blob/268db0f3fa20c989057bd43343a43b2edbe89aeb/cppForSwig/cryptopp/osrng.h).

## Which import options are verified by execution

Nana CPython 2.7.9 Windows amd64 and Linux64 Literally highlighted historical Python-Methods. Realities secp256k1-counting python-ecdsa 0.11; independent Python3-The test used a separate affinity arithmetic. PyQt4/SWIG, disk wallet and blockchain They're replaced by adapters createNewWallet stops after choice root/C, before creating the file; requests RNG This track returns predetermined synthetic bytes, which checks route choice and number of requests, not quality CSPRNG.

| Pathway | Result |
|---|---|
| Raw hex, uppercase hex, routine uncompressed WIF, raw s checksum | Returning the same thing 32-byte scalar. |
| One byte error in checksummed key | verifyChecksum corrects it; the original key is restored in the check. |
| Bytes raw upside down, checksum leftover | verifyChecksum recognizer reverse And it brings back the right order. |
| Two damaged positions | The test case is rejected. It does not claim that all possible examples are missing checksum-collisions. |
| Mini keys | Parser receiver 22 and 30 The symbols decodeMiniPrivateKey also 26, external parser They don't miss them marker=01/PBKDF2 unsupported. |
| Compressed WIF | Parser return 38 bytes; actual createFromPlainKeyData demand 32 It's not a silent, successful, lossy import compression-flag. Python switched off assert It wasn't. |
| Raw zero n | Utility parser It returns bytes on its own; it's not evidence that you can have a wallet with a key like this GUI There's a separate range check. The total behavior of all the incorrect ones bulk-vent native C++ untested. |
| Line of form BIP38 | At the verified point of entry of the decoder BIP38 no; test Base58-length 58 prefixed 6P rejected. SecurePrint a separate mechanism, it should not be considered BIP38. |
| Single GUI import | A yes to the first address sends the original bytes. A no, then a yes to the second address sends it to the second address byte-reversed scalar. "Cancel" does not cause import. The body of the method is executed before the recording call is intercepted. |
| Engine importExternalAddressData | Two different keys added, repeat of first not added.Import gets chainIndex=-2, C=ff…ff; root/C The wallet hasn't changed. |

Compressed-key error detection slightly different: in 0.90 check-in marker beforehand checksum, In the neighboring versions reviewed, the condition is different, but this does not change the established staffing limit 32-byte-constructor for the complete compressed WIF. An artificially cropped or pre-converted foreign key is another scenario that requires its own input.

Same name engine-method `bulkImportAddresses` In all selected sections, an unfinished stub that returns None. Real GUI-The key list path is in the DlgImportAddress.processMultiSig: He goes through the lines, he skips PublicX/PublicY, Deduplicates addresses and calls separately importExternalAddressData. This one GUI bulk-The path was viewed from the source; it didn't execute all of the dialogues and native errors, in particular, a successful stub call is not a test bulk-import.

Sources: [utility parser and checksum](https://github.com/etotheipi/BitcoinArmory/blob/268db0f3fa20c989057bd43343a43b2edbe89aeb/armoryengine/ArmoryUtils.py), [addresser](https://github.com/etotheipi/BitcoinArmory/blob/268db0f3fa20c989057bd43343a43b2edbe89aeb/armoryengine/PyBtcAddress.py#L366), [GUI-importation](https://github.com/etotheipi/BitcoinArmory/blob/268db0f3fa20c989057bd43343a43b2edbe89aeb/qtdialogs.py#L3128).

## Export arrangements and implications for Puzzle

GUI Key Lists taker `getLinearAddrList(withAddrPool=True)` It stores the order of the wallet's records, then it applies filters. It's not a list sorted by chainIndex. Imports can be between deterministic records if the pool is expanded after them.

Control history `[0,1,2,importA,importB,3]` gave:

| Choice | ChainIndex extradition |
|---|---|
| S unused-pool | 0, 1, 2, −2, −2, 3 |
| No unused upon highestUsed=1 | 0, 1, −2, −2 |
| No imports, pooled | 0, 1, 2, 3 |
| Only imported | −2, −2 |
| Separate sorted helper | −2, −2, 0, 1, 2, 3 — **wrongness GUI** |

The same result was obtained in six sections and two runtime-The value of all exported keys and uncompressed-P2PKH addresses are independently verified 0.88 hex is displayed in groups with spaces; this is a difference of presentation, not another scalar.

Imports do not convert the original key into deterministic root doesn't imported posterity root. External keys can come from a completely different generator. If the author masked the total export strings by the line number, the number/importation-place unused-pool mapping. Without the original file, this data is unknown; arbitrary scavenging of permutations is not triggered.

## Other routes: what is established by the source

| Route | What's happening and the checkpoint |
|---|---|
| Complete Armory wallet-file | It's loading the existing state/entries; selects the menu *.wallet. Universal Converter Not Proven Bitcoin Core wallet.dat. File migration of all historical formats was not performed. |
| Old paper/root+C | Restores both explicit meanings. Imported key root/C No, they need to be kept separate. |
| New short paper/root-only | Get it C from root. This is not the way to replace the missing random C wallet 0.88. The format is also selected compared to the saved C with a derivative, not just by program number. |
| Fragmented backup | In the view 0.92.3 reconstruct 64 byte root+C, either 32 byte root deductible C. Complete Shamir/recovery GUI It didn't happen again at this stage. |
| SecurePrint | Preliminarily removes the mask through a separate KDF/unmask, Then they use the same root/C or imported key. Covering cryptography and all password options were not executed at this stage. |
| Watch-only/PKCC | requires a public point of view and C, does not create the missing private root. Format/Conditional recovery has already been verified A1. No new artifacts by the author. |
| Sweep | Transfers funds to the selected address of the target wallet; it is not importing a new one deterministic chain private key. Creation/Transactions were not sent. |

## Why Recovery Without More Data Is Open

Previous ones A1/A1-R2 They solve problems with known transition multipliers or additional public parameters A Unknown: They are dependent on C and full starting points of the public, the public points of the reduced puzzle-The keys are not equal to these starting points.

The new clarification limits the applicability of the journal: **0.88/0.90 don't write that staff multipliers.txt, conditional recovery A1**. You can't promise to find a file like this in every old installation 0.91.1/0.92/0.92.3/The January section path is present, but the author's journal is unknown.

Import differences, reverse casually/outputable C provide accurate conditional models, but do not provide unknowns root/C/No cheap, unconditional recovery; no other attacks proved possible. Previous archival search didn't find any associated journal/PKCC, The new Internet search was not launched here.

**Decision:** The next sufficient material is the author's confirmed artifactroot/public+C, proper journal, source journal export s mapping) or a proven weak source of external imported Before that Armory It is possible, but not confirmed by the generator.

## Acceptance and limits

On each of the two profiles: **96 parser-cases, 18 route-of-route root/C, 18 importation events, 24 filtered list, 72 lineage key export, 18 single-branch**. ACCEPTANCE.json - an artifact of the initial study (`ACCEPTANCE.json`; outside the picture) indicates successful runs independent VERIFICATION.json. Comparison of results Windows/Linux, hashes of the selected methods, source archives past pins. FINAL_MANIFEST.json - an artifact of the initial study (`FINAL_MANIFEST.json`; outside the picture) captures new artifacts.

These are the selected source codes and the selected operations native C++/PyQt4, binary-wallet migration, Non-standard assemblies, real OS/RNG-full-time bulk/SecurePrint/fragmented Imports are not declared verified. Corrections only concerned the stand adapter (see below)isRegistered, regular constant of order, radioImport) and the gaps in the old export; source Armory The wrong attempts are kept separate.

Repeat: `python -B run_native.py windows-amd64` or `linux64`then `python -B verify.py <путь/NATIVE.json>`We need neighbors already prepared CPython2.7.9 runtimes baseline ecdsa0.11 from Electrum-experiment; the system installation is not performed. [PROTOCOL.md](<PROTOCOL.md>) Describes the insulation and volume.
