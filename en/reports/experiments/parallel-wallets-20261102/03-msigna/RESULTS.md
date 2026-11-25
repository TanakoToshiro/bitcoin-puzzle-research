> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/parallel-wallets-20261102/03-msigna/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/03-wallets.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# №3 — mSIGNA / CoinVault: completed limited audit

02.11.2026. **Viewed the staff path is reduced to standard additive BIP32; accelerating the search for Puzzle №71 Not received.** The new result is relative to HD-01 - accurate paths/Exports, repetition of keys in general keychain between accounts and a specific private account error API-For the simplest scenario of using this error, we get a strict contradiction to the known solutions. mSIGNA As a possible source of the initial chain, this is not excluded.

## Historical base and achievable exports

Slice [ciphrex/mSIGNA ace0c828bed7441ef6ddda314674d882ecf4dbbe](https://github.com/ciphrex/mSIGNA/tree/ace0c828bed7441ef6ddda314674d882ecf4dbbe), commit from13.01.2015 07:36:42 UTC. This is a specific source tree before the cutoff, not a proof of the date of each published binary assembly desktop-catalogue bitcoin.org already fixed HD-01; Market share and relationship with the author Puzzle Unknown. Historical comparisons [editorial BIP32 d201d139 from30.12.2014](https://github.com/bitcoin/bips/blob/d201d139cd159e3d762c922349c9705c8ab6bbdb/bip-0032.mediawiki); late vectors2017/2020 not issued for existing in2015.

Specific user path by source:

1. Create/open Vault → New Keychain either Account Wizard. `MainWindow::newKeychain` receiver32 byte entropy, `Keychain` minimum16 byte, `HDSeed` apply HMAC-SHA512 keyed `Bitcoin seed`. Wizard separately generates generation for each cosigner; Numbers in names - a way to avoid collisions of names, not derivatives of one root.
2. Select and unlock private keychain → **View Private BIP32 Master Key**. `Vault::exportBIP32` → `Keychain::exportBIP32` →78 byte → `ViewBIP32Dialog` show off Base58Check in the text box. Exports depend on the selected keychain, not-for-profit account. For imported extended child window signatureMasterIt doesn't turn it into a starting point master.
3. Copyed xprv can be passed on to the one included in the tree `multibip32 <xprv> "2/0"`In single-key tool **Private key** into hex and extended private child. Cycle by `2/0`…`2/255` giver256 baseline children; the syntax of the path relative, prefix `m/` The parser doesn't accept it. It's a specific path GUI-export xprv → staffed CLI cycled → external masking script. There's a binary multibip32 In each installer, it's not confirmed; its source is confirmed in the tree GUI-export256 WIF Not found.

The alternative is Export Private/Public Keychain, file `.priv`/`.pub`This Boost text archive, **not** list WIF not a line xprv. `Keychain` archive v2 orderly name, hash, depth, parent_fp, child_num, pubkey, chain_code, privkey_ciphertext, privkey_salt. Primary salt=0 ciphertext contains unencrypted scalar; when encrypting a public point and chaincode They're still there. Public export remove private-fields. Account export include a set of keychains, threshold, pool/time/compression and bins. All right `std::set<shared_ptr<Keychain>>` It is not a stable number cosigner.

Primary seats: MainWindow - an artifact of the initial study (`sources/src/mainwindow.cpp`; outside the picture) lines680–708,901–944,978–1012,1169–1206,1986–2009; dialog - an artifact of the initial research (`sources/src/viewbip32dialog.cpp`; outside the picture) lines25–37; multibip32 - an artifact of the initial study (`sources/deps/CoinDB/tools/multibip32/src/multibip32.cpp`; outside the picture) lines40–100; Schema.h - an artifact of the initial study (`sources/deps/CoinDB/src/Schema.h`; outside the picture) lines246–302,645–705; Vault - an artifact of the initial study (`sources/deps/CoinDB/src/Vault.cpp`; outside the picture) lines733–752,981–997,1227–1252. URL, UTC, SHA-256 and Git blob every file SOURCES.json - an artifact of the initial study (`SOURCES.json`; outside the picture.

## Product-specific ways and relationships

For everyone root keychain R regular account uses **R/1/i (change)** and **R/2/i (default receiving)**, i begin0. Additional bins receiver3,4,…; root It may already be an imported child extended key. Account-name/id, threshold number cosigner add HD-level. `AccountBin::loadKeychains` publicize R/bin; `Key` reference root and derivation_path; private leaf calculated from unlocked root along the way i. No staff hardened-boundary root and default/change.

Pool default25 on bin. When creating an account, records are created change0, receiving0, change1, receiving1,...but this **designation**, Not universal export order. Issuance of the next address selects UNUSED minimally index, a the list request sorts account name, bin name, status DESC, index ASC. Meaning0 parameter issue It means “the next free” and the first real child too0. Any display puzzle→child The specific operation must be indicated; arbitrary permutations have not been investigated.

Cryptographic identity keychain — `HASH160(compressed_pubkey || chaincode)`,20 byte, and standard parent fingerprint first4 byte `HASH160(pubkey)`These are different quantities; none of them replaces xpub. Account hash include threshold and sorted identities, while uncompressed_keys byte0. Change of name doesn't change keys/threshold/compression with another name, deviates from account hash; Different accounts with a partially shared set cosigners possible.

**Common keychain + equal bin/index = equal raw scalar in different accounts.** Threshold/other cosigners changeover P2SH script/address, but not scalar. Nana32 Synthetic indices confirmed: same common key, different addresses of two accounts. Canonical sorting is done again bytes leaf-public-key for each script; position cosigner changed15 once31 And so the column is the first pubkey"is not one" HD-The chain, the duplicate raw It is only a test of the consent of the minor residues; the independent equations of root It doesn't add.

AccountBin export Interesting as a potential artifact: `makeExport` retain bin-level public keychains, clears names and sheds bin.index into0/linkage account, however keychain child_num/depth/parent_fp/chaincode They're still there child_num lets you know1/2/3...and bin xpub sufficient for the following normal children. Original root such export He doesn't become famous. Parent-reference derivation_path not included Keychain text archive.

Reasons: Schema.cpp - an artifact of the initial study (`sources/deps/CoinDB/src/Schema.cpp`; outside the picture) lines187–203,283–302,313–337,359–382,415–478,511–531; Schema.h - an artifact of the initial study (`sources/deps/CoinDB/src/Schema.h`; outside the picture) lines175–176,305,364–365,442–485,583; Vault.cpp - an artifact of the initial study (`sources/deps/CoinDB/src/Vault.cpp`; outside the picture) lines1421–1467,1670–1705,1750–1775,1858–1877.

## BIP32 and found differences in implementation

`HDKeychain::getChild` use compressed33-byte parent pubkey for normal or `00 || ser256(k)` for hardened, later BE32 index; HMAC key —32-byte parent chaincode. IL treated big-endian; child=(parent+IL) mod n, chaincode=IR. Normal public: IL·G+K. `BigInt::getBytes(false)` despite the name of the parameter, it is big-endian BN_bn2bin; pre-conservation private child left-handed33 Byte. The full lead zeros are saved, there is no separate space reduction here.

78-byte format: version4/depth1/parent_fp4/child_num4/chaincode32/key33. Defaults mainnet0488ade4/0488b21e. Metadata not included HMAC. Fingerprint not cryptographic secret, child_num not seed. Next Next post child picks up IR, chaincode It's not copied from a parent cosigners general chaincode The code doesn't impose.

The following limited differences are found:/defects:

- Invalid IL≥n or child=0/infinity This leads to an exception; automatic transition to i+1 viewed AccountBin/CLI There's no way. BIP32 It tells you to move on to the next index. It's a stop of a rare path, not a small one master-space. IL=0 allow for a non-zero resultant child.
- Designer of78 byte doesn't check version and coherence root metadata; private/public prefixed key-data. CoinDB does not store when imported version, while export construct HDKeychain current defaults. This can normalize the title, but does not change it k/c. Depth — unsigned char, afterward255 overflowing; normal paths have depth2, So it's not their derivation difference, and our profile's strict validator deliberately rejects the unknown version and the wrong point.
- `HDSeed::getSeed()` returns the empty field seed_: constructor calculate master, but not seed_. In the viewed generator are used getMasterKey/getMasterChainCode; hollow getter hollow seed into HMAC.
- **Storage error in `Keychain::child(i,true,empty_lock)`**, Schema.cpp - an artifact of the initial study (`sources/deps/CoinDB/src/Schema.cpp`; outside the picture), line111: `child->privkey_ciphertext_ = privkey_` retain parent scalar. Pubkey/chaincode/metadata in this respect, child. After unlock Private exports will be available scalar parent chaincode child; public export uses previously preserved correct child point. Independent source-model The example shows specific incompatible xpub, preserved results.json. Old C++ binary It is not a test of semantics of appropriation end-to-end Starting an old application get_private=false defective branch is not executed; the regular branch AccountBin It's like that, not empty lock_key coded correctly child scalar. For imported33-byte private format has an additional constructor-path, Its efficiency is not stated here.

**The final test of the new error hypothesis:** if the external program has caused this private-child API straight children single-handed root and exported them scalar without further CKD, everything raw equal s. Then `r_i ≡ r_j (mod 2^min(i−1,j−1))`Full small check checks32000 combinations, and positive/negative control with real masks is maintained separately2 key=3 demand s mod2=1, №4 key=8 demand s mod8=0. Contradiction. Only the same scenario is rejected raw; further derivation `(parent scalar, child chaincode)` contains HMAC It's not ruled out by this test, and there's no reason to do this non-standard path as the primary path.

## Verifications and limits

Precise counters/the time is automatically formed in [NUMERIC_REPORT.md](<NUMERIC_REPORT.md>)main launch runs/f38837a65fce/results.json - an artifact of the initial study (`runs/f38837a65fce/results.json`; outside the picture. Python3.11.9, only standard library, CPU, near4.06(c) the entire main set; that is, **control time, no recovery**. Packages/general.venv/GPU They haven't changed.

Independent affine secp256k1 pattern24 xkeys for12 historical BIP32-vector1/2, ?12 xkeys vector2 It also coincided with the archives output.txt mSIGNA. Extended256 synthetic children,32 public/private equivalence,32 inter-account examples,10 boundary injection IL,6 leading-zero Injections IL - artificial unit cases, never-found HMAC preimages. Original C++/Qt/ODB not assembled and GUI not started: proved source-level A path supported by independent vectors, not full binary compatibility.

Picture83 decision-making SHA-256 `d291351169b1bb483b580af8cf4c30e503941f7b15b81aabd418e93809a40b70`Reconfirmed ranges public key and address every decision. Synthetic observations preserve83 indexes and omissions, maximum134 minor bits, sum3767. No unknown key is zeroed. There's no recovery solver and no statement holdout. The model didn't get it puzzle public point as raw point.

## What is required to advance

Only code + decisions not disclosed parent point/chaincode, henceforth HMAC offsets It's still unknown account/bin the counter limits possible paths, but does not HMAC key. Independent cosigners add unknowns roots. Found metadata Not turned into cheap odds; residual search≤2^32 No, no, no, no71 Post-mask unknown70 bits.

Conditionally useful artifact - a real root xpub/`.pub` or public account export paired `(pubkey,chaincode)` necessary cosigner; either bin export with this pair and the confirmed indices match. Profile and validator: [ARTIFACT_PROFILE.md](<ARTIFACT_PROFILE.md>), inspect_artifact.py - an artifact of the initial study (`inspect_artifact.py`Profile check doesn't prove identity, real candidates found0; random-search xpub I didn't do it right xpub applicable already known HD-01 masked-child It's not a new discovery of this stage normal child and ancestor xpub standardize ancestor scalar; masked Puzzle key It's not like that child. Seed from xprv/The scalar doesn't do that.

The next reasonable step is to test a specific new export artifact, if it appears. It is not necessary to expand the track tree without new data. The absence of a found method is not proof that other attacks are impossible.

## Supplement: second approach 02.11.2026

Upon new request fulfilled [historical native-audition](<round2/RESULTS.md>).308 cases on a compiled baseline HDKeychain passed; adaptation hash-header modern OpenSSL It's clearly described. It removes the restriction Python-only tested CoinCore, but does not mean performance GUI/CoinDB. Checked out12 old editions and legacy CoinQ format; added parser123-byte public export. New recovery Puzzle The numbers and limits of the first stage are saved as history; the current result is by reference.
