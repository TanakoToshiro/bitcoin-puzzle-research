> English machine translation of the [Russian source](<../../../../ru/reports/experiments/msigna-coindb-nogui-20261105/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/03-wallets.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# MSG-DB-01 — mSIGNA/CoinDB: Additional scenarios without GUI

05.11.2026, Europe/Moscow. **For the first time, historical CoinDB Keychain/Key and their serialization: 335 The results on five synthetic inputs matched the independent model private-child The branch has been confirmed and refined Puzzle And no new small space for brute force has been obtained.**

Continuation [first-line](<../parallel-wallets-20261102/03-msigna/RESULTS.md>) and [R2](<../parallel-wallets-20261102/03-msigna/round2/RESULTS.md>)The user has ruled out GUI from the mission; GUI The previous reports and their artifacts haven't changed.

## What exactly is verified

Sources mSIGNA `ace0c828bed7441ef6ddda314674d882ecf4dbbe`, commit from 13.01.2015 07:36:42 UTC. Sixteen files checked by Git blob a previously fixed tree; SOURCES.json - an artifact of the initial study (`SOURCES.json`; outside the picture CoinDB literally highlighted announcements Keychain/Key and appropriate methods: EXTRACTION.json - an artifact of the initial study (`EXTRACTION.json`; outside the picture. This expands the previous one native-check-up CoinCore; full-fledged Vault/ODB-There was no trial.

Assembly: existing WSL Ubuntu, g++13.3, OpenSSL3.0.13, Boost serialization1.83. For AES Only the method of selection has been changed/release EVP-contexts; from hash.h Extraneous algorithms have been removed. [Protocol](<PROTOCOL.md>), AES diff - an artifact of the initial study (`native/aes.cpp.patch`; outside the picture), hash diff - an artifact of the initial study (`native/hash.h.patch`; outside the picture. Historical OpenSSL2014, old-school Boost installer mSIGNA They didn't reproduce.

Admission: ACCEPTANCE.json - an artifact of the initial study (`ACCEPTANCE.json`; outside the image), independent verification - an artifact of the original study (`runs/20261104T222610Z/VERIFICATION.json`; outside the picture), inputs - artifact of the original study (`runs/20261104T222610Z/stdin.txt`; outside the picture), raw conclusion - artifact of the original study (`runs/20261104T222610Z/stdout.txt`; outside the picture. **67 checked-in × 5 entrances = 335**, not 335 different generators, an earlier set of305 It's saved as a preparatory step, and it doesn't add up again, and no test uses an unknown private key.

## Private-child: wherein error

Let's make it real parent — `(s,c)`his right BIP32-child — `(s_i,c_i)`In `Keychain::child(i,true,empty_lock)` private scalar **parent s**, but a public point, chaincode and metadata take off child. In other words:

```text
сохранённый public:       (s_i·G, c_i)
после unlock, private:   (s,     c_i)
```

This is now confirmed by the execution of the original CoinDB, It's not just the appropriation model normal and hardened indices. Not empty lock key The original method encrypts the correct `s_i`and export/round-trip coincide BIP32.

| Operation | Confirmed behavior |
|---|---|
| Straight private BIP32 export faulty child | scalar parent and chaincode child. Its public equivalent is not the same as a separate public export same object. |
| Straight `getSigningPrivateKey` faulty child | Reduces a new sequence from a mixed pair `(s,c_i)`. |
| `Key(child,7).try_privkey()` after one mistransition | Going through `root()` preserved derivation_path: gets it right `root/i/7`Storage error child It's not a substitute here private leaf. |
| Boost export/import equally child | Parent-reference derivation_path They're not serialized child becomes separate root, and private leaf It comes from a mixed pair. |
| Second consecutive error private-child | Save scalar again s, but next public point It is calculated from a mixed parent. Now the public key `Key` may diverge from private, calculated through the original root full path. |
| Encryption After Creating an Error child | Keeps the infidel already scalar; It doesn't correct a mistake. |
| Not empty lock key every private-child transition | Provides the correct sequence, including a proven two-level path. |

The meaning of the word "key" in these operations differs: the field of the object, a separate xprv export and the private key `Key` The audits did not create or sign transactions; the discrepancies were established/It's a match for the keys themselves.

Staffed `AccountBin::loadKeychains` trigger **public** `child(index_)`staffed `Key` receiver private leaf from root s derivation_path. Therefore, private-child bug It is not proven as a conventional generator mSIGNA. There would be an additional external challenge/API-Author's script.

Primary sources: [child and Key](https://github.com/ciphrex/mSIGNA/blob/ace0c828bed7441ef6ddda314674d882ecf4dbbe/deps/CoinDB/src/Schema.cpp#L94), [serialized](https://github.com/ciphrex/mSIGNA/blob/ace0c828bed7441ef6ddda314674d882ecf4dbbe/deps/CoinDB/src/Schema.h#L246).

## Import, condition of the object and copying

**xprv import keeper 33 byte `00 || s`.** It's a regular result `HDKeychain.key()`, not shortened seed. `exportBIP32` and `getSigningPrivateKey` Remove the service zero and work correctly. `child(i,true)` He doesn't delete it and he transmits it 33 byte constructor, counting public point: challenge is over `Invalid key`Confirmed and for plain, for encrypted import. Public child Importing the right thing extended child Relative derivation: imported `root/2` later `/7` coincidental `root/2/7`.

Additional non-standard states:

- **Copy constructor Keychain copyless hash_.** It's empty identity while maintaining key fields; xprv export The old. `operator=` count identity, retains the name destination. These operations are different metadata, random seed. That's what achievability is copy constructor in standard export not established: viewed `Vault::exportKeychain` work through shared_ptr, without such copying.
- **Straight importPrivateKey Does not check the match of the original pair and does not reset the already open cache.** In the control, you first see the old one private, afterward lock/unlock — scalar second-object public/C. It's API misuse two-synthetic keychains. Staffed Vault He calls it after searching for the saved hash and when added private to public-only object; you cannot transfer the test of direct incompatible call to any regular import.
- **Repeated importBIP32 (c) the subsidiary is already maintaining parent/path.** Public The data is replaced, and `Key` may continue to receive private old-style root/path. Viewed Vault create Keychain beforehand importBIP32; This scenario requires the object to be reused by external code.
- **Lock/clear** checked: closed private-child rejected; `Key::privkey` closed root It returns the empty vector `try_privkey` throws an exception. `clearPrivateKey` remove private-It's not successful null key creation.

Sources: [Keychain declaration/copy/load](https://github.com/ciphrex/mSIGNA/blob/ace0c828bed7441ef6ddda314674d882ecf4dbbe/deps/CoinDB/src/Schema.h#L156), [import/export methods](https://github.com/ciphrex/mSIGNA/blob/ace0c828bed7441ef6ddda314674d882ecf4dbbe/deps/CoinDB/src/Schema.cpp#L213), [Vault import](https://github.com/ciphrex/mSIGNA/blob/ace0c828bed7441ef6ddda314674d882ecf4dbbe/deps/CoinDB/src/Vault.cpp#L766).

## Archives and encryption

Real Boost v2 round-trip kept root/public/keychain data. For the subsidiary object confirmed the absence parent/path After loading, this is a check of the field diagram on Boost1.83; Compatibility with all archives Boost2014 It's not claimed.

Unchanged `load(ar,1)` former vector-field chaincode salt and private salt read and discarded; `privkey_salt_` fixed in0. Nana **synthetical v1** plain scalar persists 48-byte ciphertext treated plain and leads to `Invalid key` upon export. It shows the contract loader, But it doesn't prove that a particular old release produced just that encrypted v1-File full of old writer/There's no historical file at this stage Boost and legacy123-byte CoinQ - different formats.

Real AES-code AES256-CBC and `EVP_BytesToKey(SHA1,5)`, salt - eight bytes in the presentation uint64 For the current platform little-endian salt Five matches were obtained with a separately calculated Python KDF + openssl enc. Checked correct and one wrong lock key, encrypt/decrypt and encrypted-child round-trip. Rejection of the wrong key is not proof of authenticity CBC or the impossibility of accidental correctness padding.

V random.h - an artifact of the initial study (`sources/deps/CoinCore/src/random.h`; outside the picture) the source is OpenSSL RAND_bytes; salt It also comes from there. It's not reproduced here entropy-state of the old OS or OpenSSL. Zero/FF entropy was clearly **stand**. No connection passphrase generationally root These checks do not follow: lock key It is used to store existing private.

## Applicability Puzzle and early code

From the old days R2 Result: twelve reviewed editions HDKeychain December2013 additive BIP32; legacy CoinQ own123-byte Exports and other means of creating keychain. They're not recompiled here and they don't become CoinDB because of the same name native-The test is related to the specified January cut.

Scenario "Always export the saved" scalar faulty private-child without further CKDIt still gives you the same thing raw s. He has already been rejected by the known decisions No2 no4 In the first study: incompatible `s mod2=1` and `s mod8=0`Recursive repetition of this branch when empty lock key It does not in itself eliminate the permanence of scalar.

If, after a mistake, export/import performed correctly CKD from `(s,c_i)`The meanings are already different **not excluded** constant-test raw, but requires the unknown s and c_i. From published masked decisions HMAC-The coefficients don't become known. No limited domain seed leftover ≤2^32 Not found; full search has not started.

Real root/bin xpub, account/keychain export There's no other artifact associated with the author in the assignment. No previous studies have shown such candidates; no new general archival search has been conducted **Unfulfilled due to lack of required entry**, For a defective object, it's particularly important to check the consistency public/private and the manner in which it is used: public export It may not describe the sequence that you created private API.

**Bottom line:** a specific part of the remaining nongui-scripting CoinDB, storage private-child, Repeated calls, copy/assignment and selected serialization. mSIGNA source Puzzle It's not excluded. All arbitrary API-compositions Vault/ODB, old binary builds, all RNG/entropy The next valid input is the author's artifact or a specific confirmed way of obtaining an external seed.
