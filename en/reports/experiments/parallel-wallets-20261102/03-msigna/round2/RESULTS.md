> English machine translation of the [Russian source](<../../../../../../ru/reports/experiments/parallel-wallets-20261102/03-msigna/round2/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../../README.md>) · [Direction](<../../../../../topics/03-wallets.md>) · [Documents of the series](<../../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../../docs/LATEST_RESULTS.md>).

# Second run No3 history CoinVault performance HDKeychain

02.11.2026. **New recovery root or accelerating the present Puzzle №71 Not received.** A significant limitation of the first run is closed: now the compiled original HDKeychain on308 In some cases, additionally verified12 historical editions `hdkeys.cpp` separate legacy CoinQ Vault. No early multiplicative junction was found in any junction viewed BIP32 or a scheme with known coefficients from the solutions.

## What's done for the first time?

Compiled unchanged `hdkeys.cpp`, `hdkeys.h`, `BigInt.h`, `secp256k1.cpp` from commit ace0c828bed7441ef6ddda314674d882ecf4dbbe. Files are checked bypass on the first run WSL Ubuntu, g++13.3.0 and OpenSSL3.0.13. Common packages/The surroundings didn't change.

Adaptation is limited to dependencies: local copy `hash.h` removed Hash9/sha3/scrypt and includes; SHA256/RIPEMD160/HMAC remain original OpenSSL-Added clearly managed test hook HMAC for10 boundary cases; in all other cases it is empty and the present HMAC. For an overloaded operator not used herein BigInt added compile define `BN_LONG=long`Complete diff - an artifact of the initial study (`native/hash.patch`; outside the picture), pins - an artifact of the initial study (`native/INPUT_PINS.json`; outside the picture), team/version - an artifact of the original study (`runs/native-8f30656acce7/build.json`; outside the picture), the entrance is an artifact of the original study (`runs/native-8f30656acce7/inputs.json`; outside the picture) and raw conclusion - artifact of the original study (`runs/native-8f30656acce7/stdout.txt`; outside the picture) retained.

**This is the execution of a cryptographic kernel with an adapted title described, not a historical assembly Qt/ODB-application and non-reproduction OpenSSL2014.** Storage error `Keychain::child` first-rounder belongs to CoinDB this native harness The first job was limited only by Python-model; now removed for validated functions CoinCore, but not for everyone GUI/export/database operations.

All308 Incidents have been:12 nodes BIP32 vectors1/2,256 synthetic children Comparison of the results already saved,16 public/private inspections10 injected IL,5 leading-zero parents, imported33-byte constructor, hardened-public rejection, unknown version,3 intolerable path and3 path aliases. Numbers are automatically collected in [NUMERIC_REPORT.md](<NUMERIC_REPORT.md>)Assembling2.955c, binary set1.136This is not the time to restore the key.

New specific observations:

- `HDKeychain(33-byte 00||private, chaincode)` Rejects such an argument as incorrect public point, then78-byte xprv-This confirms the first-entry clause for imported33-byte API: Such confusion breaks the challenge, rather than nullifying or narrowing secret. Staffed CoinDB signing/export clear-cut00; absence of such removal in a separate API It does not become a small key generator.
- Linear parser receiver `/2` how `0/2`, a single apostrophe as `0'`, `00/02` how `0/2`; `m/2/0`, `2/` and `2147483648` It rejects. It's reproducible aliases After the choice canonical path routine HMAC It remains; additional searches of options for the same path do not make sense.
- Unknown version persistence78-byte importation, and getPublic lay out default public version. Changing the title does not create a new one scalar/chaincode. Leading zeroes and exceptions to invalid IL checked in C++.

## History: What Really Changed

GitHub API verified for two file names: `deps/CoinCore/src/hdkeys.cpp` and `deps/CoinClasses/src/hdkeys.cpp`with a limited history of the ancestor cutoff commit. Received3 the new name, and10 old (renaming)14.04.2014 present on both lists; retained12 existing editions of the file, renaming in the old way commit I didn't download it because the file was already moved [8e1f287d from29.12.2013](https://github.com/ciphrex/mSIGNA/blob/8e1f287d7bd1d6e245f6f82047f9add5c1023772/deps/CoinClasses/src/hdkeys.cpp)This is the boundary of observed inclusion CoinClasses c this repository, not a statement of all earlier upstream-history BIP32.

All of them12 editorial private transition use `k += Il`then modulo n; HMAC receiver parent chaincode and33-byte key material + BE32 index; new chaincode — IR. Including source in December2013 After the addition standard has been changed Armory-The type with publicly calculated multipliers is not found here.

There is a real difference in the invalid child: before [5881cff0 from03.03.2014](https://github.com/ciphrex/mSIGNA/blob/5881cff053e5ec5f65d67ea61507847a4d18ff83/deps/CoinClasses/src/hdkeys.cpp) returned invalid object; an exception is thrown from this change. Legacy `CoinQ::Keychain::numkeys` still `if (!child) continue`. .  skip It's designed for an old contract2015 Exclusion before the condition does not allow skip. This incompatibility explains the change in the behavior of a rare error, but not a cheap one root. Under the standard assumption of uniform HMAC even the top BIP32-valuation256 fewer2^-119; It cannot be turned into an assumption of hundreds of missing indices.

Other changes viewed: verification public point in the constructor, copy constructor, namespace/include renaming full_hash identity, linear paths and uncompressed public output. Historical metadata and signs of transitions are stored in HISTORY_FACTS.json - an artifact of the initial study (`HISTORY_FACTS.json`; outside the picture native-We do not claim to check each old edition: native fulfilled cutoff-code, history compared by source.

## Legacy CoinQ The other export, the same mathematical family

It's the same tree CoinQ_vault_db.hxx - an artifact of the initial study (`sources/deps/CoinQ/src/CoinQ_vault_db.hxx`; outside the picture), different from CoinDB Schema First call. `Key` taker `extendedkey_->hdkeychain().getChild(childnum)`eh private-key getter same-sex index from private extended key. Keeps one xpub/xprv, And the meter is straight children0,1,It is a different pool organization, but standard CKD. `Keychain::child` publicize child publically parent A private branch with an erroneous assignment from a new CoinDB It's not transferable here.

It is important to distinguish between creation: CLI-example calls `CoinVault v0.0.1`him `newkeychain <file> <name> <numkeys>` trigger **key-making** through CoinKey.generateNewKey; separate `newHDKeychain` CLI-command viewed command map Nope. HD It is maintained through the library newHDKeychain and import ready-made extended-key You can't declare this one `newkeychain` conveniently obtaining hundreds of connected children without prior notice HD-Date of delivery of this example in the specific GUI-The installer is not installed.

Legacy deterministic export has123 byte:

```text
deterministic=01 | extkey_size=BE32(78) | extkey78 |
numsavedkeys=BE32 | hash_size=BE32(32) | SHA256d(public_extkey78)
```

For public export The entire file can be restored xpub. It's **not Boost text archive** from the first approach private export extended key contains private data hash It's still calculated public extended key. The non-deterministic format instead stores private/public flag, A list of independent keys and a chain of hashes. You don't have to accept all files `.pub`/`.priv` in one format.

A useful new detail: legacy identity tie-in **everything78 byte xpub**, including version/depth/fingerprint/index. CoinDB identity tie-in pubkey||chaincode. Therefore, the same cryptographic pair with different metadata may differ legacy identity. More importantly: `numsavedkeys` not included hash; Ten changes to the meter have passed the immutable hash test. The meter cannot be considered authenticated proof of number of children or exact match Puzzle. Verification checksum It does not prove the origin of the artifact from the author.

Done read-only legacy_profile.py - an artifact of the initial study (`legacy_profile.py`; outside the picture), receiving **only public deterministic123-byte export**. He checks the format point, xpub version and SHA256d, give out identities and warns in the data about the lack of communication of the counter with hash.4 synthetic export cases,6 damage and10 Replacement of the counter passed; initial ODB-exporter The control artifacts are an artifact of the original research`runs/legacy-a676fc1e0a81/results.json`; outside the picture private/xprv into native-entrances synthetic published BIP32 test vectors, The user’s real wallets were not read.

## Mathematical Summarization and Exact Boundary

The new alternative path does not provide the known ones Puzzle coefficients: and legacy straight-line children, and CoinDB root/bin/i demand the unknown K/c inside HMAC. Counters, identity and aliases non-replace chaincode. Coincidence of a cryptographic pair with different metadata only repeat the same thing raw. No conjecture of the short seed, flattened RNG Not used here.

New real-life xpub-candidate0, restoration0, leftover≤2^32 No, it's a stronger test of implementation and historical boundaries, not a repeat of what was previously stated generic BIP32 recovery. From83 Only a fixed copy is reused/hash; their full EC-The first approach control was not counted raw from synthetic native-inputs not issued for permissible entry recovery: The restoration was not carried out at all.

The following experiment requires a **a new link or a particular artifact**, for example legacy123-byte public export either CoinDB root/bin export, It's got origins and indexes, and it's ready for the first one parser. To expand the empty path tree further, or simply to lengthen the brute force, this result is not justified; neither the entire wallet nor all possible attacks are declared excluded.
