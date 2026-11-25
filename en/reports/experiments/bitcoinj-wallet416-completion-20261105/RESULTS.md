> English machine translation of the [Russian source](<../../../../ru/reports/experiments/bitcoinj-wallet416-completion-20261105/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/03-wallets.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# B4-R3 — Bitcoin Wallet 4.16 / bitcoinj 0.12.2: boundless followup

05.11.2026, Europe/Moscow. **The specific issues of the interrupted B4-R2: three-way release JAR, rotation/encryption/restore, repeat raw starting parser/backup-code4.16. Fixed the check-in error, a new way to recover Puzzle without the artifact of the author is not received; wallet is not excluded.**

It's a continuation [B4](<../parallel-wallets-20261102/04-bitcoinj/RESULTS.md>) and [protocol B4-R2](<../parallel-wallets-20261102/04-bitcoinj/followup-20261102/PROTOCOL.md>)Old partial STATUS old runs The final reception is here: ACCEPTANCE.json - an artifact of the initial study (`ACCEPTANCE.json`; outside the picture), VERIFICATION.json - an artifact of the initial study (`VERIFICATION.json`; outside the picture), [protocol](<PROTOCOL.md>).

## Important amendment to the previous stand

V `AuditHarness.java` first stage and `LifecycleHarness.java` followup literary A/B have **65 hex digits**, idiom257/258 They're out of range secp256k1 scalar. Historical `getSecretBytes()` truncated32 byte; their seniors16 byte A and B They're the same assertions type A, not Bcompared migration seed They didn't distinguish between outcomes.

Detection and area: CONTROL_INPUT_CORRECTION.json - an artifact of the initial study (`CONTROL_INPUT_CORRECTION.json`It's a defect in research control, not evidence of a regular generator of large or truncated random keys HD vectors/children, But it reduces the evidence of the former migration-origin assertions. Old ones75/95 assertions cannot be presented without reservation as a sufficient test of the A/B.

In the new copy replaced A/B permissible64-digit scalars varying high128; Explicit range checks and inconsistencies added migration entropy. Diff LifecycleHarness - an artifact of the initial study (`core/LifecycleHarness.java.patch`; outside the picture), diff probe - an artifact of the initial study (`core/AutoUpgradeProbe.java.patch`All three libraries rechecked. Corrected app-The series also uses valid inputs. The preparatory series with the same literals is saved and does not add up to the result.

## Exact versions and execution

| Bitcoin Wallet source tag | Commit | bitcoinj into pom |
|---|---|---|
| 4.0 | 5276722f9c73e540b9bbb128c37783bfd173af4a | 0.12 |
| 4.07 | f3069d807355758f4d277b91a704ad7361162c3e | 0.12.1 |
| 4.11 | f3bf0d9bfc9accd590f0d3ee4fd9a0ed0aa12ed2 | 0.12.2 |
| 4.14 | d34356255afe1ba1ea4f25826bff3dceacf0a72e | 0.12.2 |
| 4.15 | 88670469c70dc4c33e8e0d246ea3664db50b3ee9 | 0.12.2 |
| 4.16 | 9fd26ee927184e0e5898106acb53652627113588 | 0.12.2 |

bitcoinj commits:0.12 — `83a9a71f3fff3f223d0737ad758b519a39dbbd62`;0.12.1 — `9eab6977bdedad4fee8d84d447bdda93611162f4`;0.12.2 — `e6372c5d7da699ebdcc7253223a096bafb483368`. Tag4.16 — commit22.12.2014, up to the historical border15.01.2015. Source pom contains4.16-test; signed production APK It's not received or verified mainnet-configuration.

Checked out107 formerly source pins; added/copied24 file-file URL: SOURCES.json - an artifact of the initial study (`SOURCES.json`; outside the picture. Original release JAR and literally highlighted WalletUtils methods; whole Crypto/Iso8601Format unchanged. Android UI/OS Replaced only with the necessary constants/The other screens were not executed. Java8u302 on Windows modern desktop runtime, not Dalvik/ART2014.

Primary sources: [pom4.16](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/9fd26ee927184e0e5898106acb53652627113588/wallet/pom.xml), [WalletUtils4.16](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/9fd26ee927184e0e5898106acb53652627113588/wallet/src/de/schildbach/wallet/util/WalletUtils.java), [KeyChainGroup0.12.2](https://github.com/bitcoinj/bitcoinj/blob/e6372c5d7da699ebdcc7253223a096bafb483368/core/src/main/java/org/bitcoinj/wallet/KeyChainGroup.java).

## Differences in Libraries After Correcting Entry

| Monitoring | 0.12 | 0.12.1 | 0.12.2 |
|---|---|---|---|
| Filtered leaf dump upon E=I=0 | 2 | 0 | 0 |
| Primary E=3, I=2 | 7 | 5 | 5 |
| Migration key timestamp=0, cutoff=0 | Rejection | Accepted | Accepted |
| A@100/B@200, cutoff=100 | B | A | A |
| Repeated straight upgrade likewise cutoff | Rejection | New chain, same child | New chain, same child |
| Rotation upon cutoff=200 | New random seed | Seed from B | Seed from B |
| Implicit currentReceiveKey on non-HD wallet | It's over | Read→write lock hanging | It's over |

Primary rotation old-time chain It stays in the file, the new one becomes active cutoff201 both loose keys excluded; new audited seeds didn't match seed A/B. The coincidence of different instances after correct re-migration means the repetition of the same chain, not new equations about the hidden root.

For0.12.1 hovering is confirmed simultaneously by the source, new limited probe and stored stack: main wait WriteLock inside upgrade, restrained read lock. Watchdog finished **own** JVM code42. V0.12.2 currentKey regular reentrant lock, same probe It's a specific accessibility defect, not a way to narrow it down seed. The test does not model the entire multithreaded Android lifecycle.

Observation `markPubKeyAsUsed` herein clone/current scripts: issued external increased0 into0.12/0.12.1 on1 into0.12.2; current It changed in all three. This is another reason to fix the operation and the version when you compare rows to indexes.

Staffing formula HD and the paths are preserved: `m/0'/0/i`, `m/0'/1/i`. HDKeyDerivation0.12 and0.12.1 matching bytes; diff0.12.2 change Javadoc overload int: HD_VERSION_DIFF.patch - an artifact of the initial study (`HD_VERSION_DIFF.patch`; outside the picture.810 children All three libraries are independently identical scalar/public/chaincode. The old ones injected-invalid-child Verifications are not automatically extended to all user scenarios.

## What Really Changes App Recovery

In vetted4.0/4.07/4.11/4.14 textual backup loaded through `new Wallet(params)` then import loose keys. Wallet already has a new HD seed, So re-restore the same lines gives you different results HD-The imported keys are retained.

S4.15 The method first creates an empty non-HD KeyChainGroup, import WIF And then they build Wallet. Afterwards, upgrade seed It comes out of the old key [commit d8aa5dc0 from17.12.2014](https://github.com/bitcoin-wallet/bitcoin-wallet/commit/d8aa5dc01a299008b88da22785ef8ae4660e79ce)This is now confirmed by the execution of the original method, not just the equivalent sequence of calls.

Nana4.15/4.16:

- For different dates, the oldest permissible key; Rearrangement of lines with different dates does not change it.
- At equal dates, the import procedure applies: AB choose A, BA — B. The missing date gives0, orderly undated backup It's also significant.
- Modification of the younger part only old scalar with high16 bytes leaves HD seed The old one. Compressed/uncompressed WIF single-handed scalar also gives migration seed.
- Scalar1 retain leading zeros: high16 bytes zero, and BIP39 seed It's the usual64-This is a deliberate boundary control, not detected by a weak one seed Author.
- Repeat one WIF remains two parser-in writing, but one imported key. Filtration/Import counter checked; arbitrary mixed backup ambiguous metadata They are not fully covered.

Parser read/write tested11 valid fixtures: equal/zero dates, duplicate, general high-prefix, leading zeros, compression, comments and additional column rejected six specific malformed/network entrances: leading space, double space before the date, tab separator, indented comment, false checksum and WIF These are selected checks of the real network `split(" ")`not universal tolerant parser partial fuzzing.

Protobuf restore retain seed and the following issued child afterward256 receive+3 change; wrong network rejected. API-Extradition does not prove the existence Android-export256 WIF.

## Two different layers of encryption

**Inner spending password.** V0.12/0.12.1/0.12.2 tested Scrypt/AES encryption, round-trip, password change and incorrect control password used N=4096 coincidental `SCRYPT_ITERATIONS` source-based EncryptKeysDialogFragment4.16. In serialized encrypted protobuf no plain secret_bytes or cached seed, but public key/chaincode/path They're still there Python wire-parser checked the fields; c **password-plate** independently deciphered mnemonic and cached seed (6 records, with scrypt/UTF16-BE and AES-CBC.

In-memory `currentReceiveKey` immediately encrypt In addition, it maintains access to the previous private object. After serialization/This path is closed after loading decrypt same current-cache may remain unsuitable for private getter, then lookup lively chain right-handed private. This is a difference between the state of objects and the contents of the file; it does not result in recovery private randomly encrypted backup No password.

**External manual backup.** Android serialize first protobuf, then Crypto.encrypt. Entire historical accomplishments Crypto.java Six versions ciphertext (normal) backup and Unicode control on profile) independently decrypted Python: Base64 `Salted__`,8-byte salt, AES256-CBC and OpenSSL-compatible MD5 derivation. The call contains a constant NUMBER_OF_ITERATIONS=1024, used OpenSSLPBEParametersGenerator gives a proven single-pass MD5-chain KDF; This format cannot be described as PBKDF2-1024. Password conversion here uses juniors8 bit Java char, as opposed to the internal scrypt/UTF16-BE. It's format testing, not selection PIN/Password.

External ciphertext non-open protobuf s public HD metadata. Public account xpub unencoded diagnostic/protobuf It can be a useful artifact; a single presence encrypted backup It does not automatically provide it. [Crypto4.16](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/9fd26ee927184e0e5898106acb53652627113588/wallet/src/de/schildbach/wallet/util/Crypto.java), [spending-password caller](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/9fd26ee927184e0e5898106acb53652627113588/wallet/src/de/schildbach/wallet/ui/EncryptKeysDialogFragment.java).

## Real solutions and applicability

Fixed snapshot83 decisions saved with SHA256 `d291351169b1bb483b580af8cf4c30e503941f7b15b81aabd418e93809a40b70`Independently recalculated3403 hypothetical **repeat raw scalar**:159 The pairs are arithmetically compatible, the maximum total number of observed low bits among the compatible7. Amongst2775 pair overlap≥8 The compatibility of short masks does not prove repetition; unpublished keys are not.

Consequently, clone/current/re-upgrade a scenario that requires repeating one raw in two of these known positions with≥8 It's not an exception, it's a common bit, it contradicts data HD-generator, or any possible order of unloading scalar Not used as unknown raw public points; forced MSB The mask was not considered the original bit of the generator.

Migration uses high128 The old full key, even though the mask is known135 It belongs to the chosen one old key, remains the former intermediate prefix-domain2^122. New confirmation caller/selection does not reduce it to2^32. This score refers to a particular path, not the common lower bound of all attacks.

Author's account xpub/diagnostic/backup No new global search for artifacts has been performed here. Some published solutions remain unknown HMAC public point/chaincode; routine BIP32, rotation corrected restore They don't remove this condition password search re-establishment Puzzle Nope.

## Acceptance and remaining boundaries

New corrected results:

- 101 library assertions (33+34+34) on three versions;810 independent child-reconciliation.
- 228 app assertions (38×6);2490 independent HD-node reconciliations, including protobuf. Together with core —3300 node-check-ups, not3300 unique keys of the author.
- 12 outer and6 inner Decryption of exclusively synthetic controls with known passwords.
- 3403 real-life pairings raw Retested independently. Old complete small toy enumeration7938 Systems are saved; not restarted or summed up as new controls.

Finals core-compilation/The launches took up total13.10s, app-series17.43s It's a stand time, not a key search time. Source hashes, methods, dependencies and outputs are fixed in the reception/manifest.

**Status: specific continuation B4-R2 completed and accepted within these boundaries.** Complete production APK/Android lifecycle, Dalvik/ART and RNG Old OS, all formats of damaged backup, All user scripts, historical binary builds and application to the author's present artifact remain out of coverageBitcoin Wallet4.16 “Anything” from this data would be incorrect. Bitcoin Wallet/bitcoinj source Puzzle Not excluded.
