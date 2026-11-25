> English machine translation of the [Russian source](<../../../../ru/reports/experiments/electrum198-newwallet-20261104/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/03-wallets.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# EL-NW-01 — Electrum 1.9.8 BIP32 / NewWallet

Work has begun 04.11.2026, completion of the inspection 05.11.2026, Europe/Moscow.

**The branch is reproduced on historical CPython 2.7.9 Windows amd64 and Linux64. A very weak generator seed The author's real public parameters Puzzle not found; application of restoration to the present Puzzle Not done. Electrum Not excluded.**

A separate gap from the coverage card is closed for the following source operations: 1.9.8. This is not a complete audit of all the supplied binaries and GUI. Old reports on 1.7.4/1.9/OldWallet They're not replaced.

## Historical slice and reproduction

Commit [`f92b483942d3f8ee51506e0436d9b524db33a336`](https://github.com/spesmilo/electrum/tree/f92b483942d3f8ee51506e0436d9b524db33a336), 16.03.2014, tag 1.9.8. Complete upstream-archive SHA256 saved; eight previously used files checked with E9. Site map -- SOURCE_FACTS.json - an artifact of the initial study (`SOURCE_FACTS.json`; outside the picture), archives and dependencies - DOWNLOADS.json - an artifact of the initial study (`DOWNLOADS.json`; outside the picture.

The unaltered wallet modules were executed account, bitcoin, mnemonic, commands, transaction; GUI-method CSV Literally extracted, only the file selection shell has been replaced/messages. Python-ecdsa 0.11, slowaes 0.1a1, pbkdf2 1.3 They're connected from the original archives without a system installation NewWallet, but `setup.py` 1.9.8 does not declare him in install_requires and the archive does not contain it in lib. Therefore, the presence of a class in the source does not prove that every historical distribution is ready to run it without additional dependence.

Wallets are exclusively synthetic, sockets in the stand are prohibited, file encryption is checked with a test password. PyQt4, lively GUI, network and complete installation packages Electrum They didn't start. Two profiles are used PYTHONHASHSEED=0; Universality of multiple accounts for all hash-Profiles are not approved.

## Creation, Recovery and Precise Chain

| Operation | Verified result |
|---|---|
| New wallet default | OldWallet, seed_version=4. NewWallet/version=6 chosen only when `config.get('bip32') is True`line `'true'` It's not enough. |
| CLI | Definition `--bip32` commented; the present parser flag-false exit=2. A variant of the Boolean configuration value exists; the usual GUI-create should factory. |
| Entropy | `ecdsa.util.randrange(2^160)`: in a vetted 0.11 default os.urandom. Control confirmed requests 21 byte and rejection, not MT/time/32-It's a bit state. |
| Mnemonic | SHA256 from 20-byte entropy+nonce; old-coding Electrum dictionary 1626 first words 13 words. Nonce extend HMAC-SHA512 keyed `Seed version`starting at hex `01`. |
| Seed for BIP32 | PBKDF2-HMAC-SHA512, 2048 iterations, salt `mnemonic`, 64 Encryption password wallet is not mnemonic passphrase; into get_seed passable passphrase. |
| Common keys | `m/0'/a/b/i`: a - An account without hardened, b=0 receive or 1 change, i - an index from scratch. P2PKH and WIF They use a compressed public key. |
| Restore seed | Hex/routine 12 old-word OldWallet; 13-word phrase and arbitrary dissimilar text may choose NewWallet. Verification is_seed into from_seed Commented: the phrase with the wrong prefix is accepted. This is not evidence that the author used a weak phrase. |
| Normalization | Core apply strip and NFC. The internal gaps and the register affect the PBKDF2; wizard It also translates the input into the lower case BIP39/NFKD-way. |

Two adjacent test tubes entropy=1 and 2 gave equal mnemonic: nonce=181 and 180 That's right. Third entrance `(1<<159)+0x123456789abcdef` gave nonce=238 other mnemonic. This is the expected collision of the algorithm “next suitable value”, not the small space found.

13 These words contain the first four 32-Block bits and one word from the following: no more than a filter `2^128 × 1626` The perfect options HMAC-model 8-bit prefix gives a scale of about 2^131 valid phrases; this is an estimate, not a proof of exact entropy/There's no basis for a complete search of this area.

## Exports, MPK artifacts

For the clean NewWallet afterward change_gap_limit(256) and synchronize export **260 lineage**: receive 0..255 current account, change 0..2, later `m/0'/1/0/0` from next_addresses. The title is separate OldWallet without next_accounts past-out 259 It doesn't carry over here 260 WIF And the addresses are independently verified dumpprivkeys maintains the transmitted order and returns the list of lists.

Two accounts in verified profiles gave blocks a=0, a=1, address a=2. This observation is specific CPython/hash-Profiles. The general order of accounts sets Python2 dict, It's not a promise of sorting by number. Windows/Linux CSV matching lines, bytes SHA It differs because of the translation of lines.

The public node of a regular wallet - **m/0'**, rootless m:

- getmpk return Python-repr pair `(chain_code, K)`where K — 64 byte x||y without 04.
- from_mpk expectation `K:chain_code`Straight round-trip conclusion getmpk ends in error; rearranged pair with colon creates watch-only with the same addresses.
- In this case watch-only restoration cK It remains empty`FIXME` Addresses are calculated by K, but get_keyID gives out an incomplete line with an empty compressed K. It's not a new known MPK Author.
- Complete seeded-wallet form `bip32(chain_code,compressed_K,/a/b/i)`In the unfinished `.txn` KeyID present input_info, wherein input_info — JSON-line inside JSON. Primary complete=True The transfer of the transaction to the blockchain does not carry these elements metadata.

This branch needs **K together chain code right-way**. Old 128-hex MPK OldWallet without chain code cannot be declared sufficient BIP32-parameter. Xpub and the public key of one puzzle-Addresses can also not be attributed to the node without verification m/0'.

## Conditional reinstatement

Independent recover_public.py - an artifact of the initial study (`recover_public.py`; outside the picture) takes an obvious public node, source/target paths and the famous masked key from the model Puzzle. He doesn't overdo it seed, read out wallet It doesn't go online. Formula and constraints [MATH.md](<MATH.md>).

Known to be m/0' public node everything a/b/i remain non-hardened, So the totals are calculated publicly child opens up the private node m/0From a masked observation with at least a few lower bits, up to three candidates for the target masked key are obtained; the address allows them to be verified mnemonic parent m through hardened-border.

Every profile is checked 12 positive scenarios receive/change and different accounts; change of the observed bit, chain code give way 36 It's the three inputs entropy and **twofold mnemonic**, It's not three independent roots JSON-example 3 candidate 1 No candidate for the present address Puzzle This result has not been declared.

## Additional defects of the selected section

- Exactly entropy=`2^160−1` nonce-search went over 20 bytes and completed `TypeError: Odd-length string`This edge doesn't give you a practical little wallet family.
- Involuntary HMAC IL=n private CKD Returns the parent’s key with a new one chain code, cross-index BIP32. The usual official vectors coincide; the artificial edge does not mean frequent collision.
- Object BIP32_Account_2of3 Realizes the Inherited redeem_script 2-of-2; separate get_redeem_script s 3 The keys are not called in this way/It's created as a download BIP32_Account_2of2. Checked by execution, not corrected CSV may contain a number of contaminated WIF; It is not equal to the usual sequence of single keys.

## MPK author and applicability Puzzle

Revisited the saved text corpus of two studies of attachments on new accurate BIP32-profile: **71 file**, fixable SHA256. The only one body s xpub contains 6 appearances xpub messaged 63965983/63967343, topic 5493466 - separate halving tribute puzzle from 19.04.2024. He's not the author of the original series Bitcoin Puzzle. Coincidences with BIP32 KeyID, master_public_keys, K:chain pair getmpk There's no information in the text that you've seen PUBLIC_ARTIFACT_REVIEW.json - an artifact of the initial study (`PUBLIC_ARTIFACT_REVIEW.json`; outside the picture.

This is a limited re-examination of existing text data, not a new full web search OCR The unavailable sources of the previous archival audit remain inaccessible, and the author's trusted node is missing, so real recovery has not been launched.

**Decision:** Keep the exact branch as a proven conventional model; don't run the massive brute force. The next meaningful step is to have a new artifact linking the author to the original K+chain code, or specific evidence of a limited source seed. Staffed Electrum s OS entropy This study is not excluded.

## Verification and reproducibility

ACCEPTANCE.json - an artifact of the initial study (`ACCEPTANCE.json`; outside the picture) indicates successful run-In each of them: 260 CSV-lineage + 15 supplementary addresses/WIF, independent Python3-check, 6 formality BIP32 vector 1, 12/36 masked recovery-control, 15 restoration of a synthetic private node from a full child. Rolled both runtime executable, python27.dll, Historical modules, dependencies, archives and input text corpus.

Repeat: `python -B run_native.py windows-amd64` or `linux64`then `python -B verify.py <путь-к-NATIVE.json>`; a short supplementary series -- `run_native.py <профиль> extra.py`Everything is new run-catalogue Linux required WSL Ubuntu-24.04 prepared runtime neighbourly export-order For a public example: `python -B recover_public.py <SYNTHETIC_PUBLIC_INPUT.json> <новый-output.json>`.

Error preparatory attempts are saved separately, and stand errors are corrected: old-style class Python2, test-on entropy outside 160-the bit range, encoding the Cyrillic path in JSON And the relative path in the verification script, the historical source did not change Electrum. FINAL_MANIFEST.json - an artifact of the initial study (`FINAL_MANIFEST.json`; outside the picture) captures the final artifacts.
