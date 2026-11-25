> English machine translation of the [Russian source](<../../../../ru/reports/experiments/archive-attachments-20261102/FORMATS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/05-signatures-and-provenance.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Formats, Recognition and Sufficient Data

This passage does not repeat mathematical recovery-It uses the profiles of previous work and separates the signature of a file from the confirmation of its contents and origin.

| Purpose | Sign and useful data | What else do you need? |
|---|---|---|
| Armory multipliers | `PrvChain (pkh, mult): HASH160,u` / `PubChain…`; pkh — 40 hex or empty, u — 64 hex | Link to the original chain, position/Transition order; one file can mix wallets |
| Armory diagnostic ZIP | `wallet_analyze_logs.zip`Prefixes are possible inside `walletID_parentDirectory_` at multipliers.txt | Search by content, not just the exact name; presence ZIP does not mean that there is a journal |
| Electrum 1.9.8 unsigned/partial | External JSON; `input_info` maybe **JSON-line**; `KeyID=old(MPK,branch,index)`, MPK — 128 hex x||y | Point secp256k1; raw pubkey/address should be appropriate branch/index; authorship Puzzle separately |
| Electrum complete | `complete=true` and hex signed-in | In a proven historical path input_info is already missing; blockchain raw hex substitute unsigned `.txn` |
| mSIGNA CoinDB public export | Boost text archive, marker `22 serialization::archive`; version Keychain v2; point + chaincode | It's not arbitrary xpub neither CSV; required schema-specific disassembly root/bin/account context |
| Legacy CoinQ public export | Exactly 123 byte: `01`, BE32(78), xpub payload78, BE32(count), BE32(32), SHA256d(public payload78) | Valid point/version/hash. Count bound checksum and doesn't prove indexes |
| BIP32 xpub / zpub | Base58Check, **78 payload**, including 32-byte chaincode | Verification checksum/points header/version and source provenance; A beautiful field name isn't enough |

Primary Armory-source: [logging](https://github.com/etotheipi/BitcoinArmory/blob/268db0f3fa20c989057bd43343a43b2edbe89aeb/armoryengine/PyBtcAddress.py#L423), [copying recovery](https://github.com/etotheipi/BitcoinArmory/blob/268db0f3fa20c989057bd43343a43b2edbe89aeb/armoryengine/PyBtcWalletRecovery.py#L1715), [ZIP](https://github.com/etotheipi/BitcoinArmory/blob/268db0f3fa20c989057bd43343a43b2edbe89aeb/qtdialogs.py#L973)Minimum conditions specified in [Armory R2](<../parallel-wallets-20261102/01-armory/round2-20261102/RESULTS.md>): five suitable transitions may be sufficient for a particular pair of masks. This is a condition, an undetected input.

Electrum-sources: [get_keyID](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/lib/wallet.py#L633), [as_dict/input_info](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/lib/transaction.py#L669).Previous [profile](<../parallel-wallets-20261102/02-electrum/ARTIFACT_PROFILE.md>) check-in MPK starting anchor, but does not guarantee validity raw tx hex. Our control is with `hex=00` checks only for detection metadata, Not a transaction.

mSIGNA Keychain v2 retain name, hash, depth, parent_fp, child_num, pubkey, chain_code, privkey_ciphertext and privkey_salt; public export remove private-fields. Account containing keychains, bin It can only save the child branch [profile CoinDB](<../parallel-wallets-20261102/03-msigna/ARTIFACT_PROFILE.md>) does not carry out arbitrary Boost-parser; This work doesn't state it either CoinQ-file-ready public parser - an artifact of the initial study (`../parallel-wallets-20261102/03-msigna/round2/legacy_profile.py`; outside the picture hash It doesn't confirm the author.

`scan.py` A detector, not universal wallet parser. He's looking through UTF-8/UTF-16 and HTML entities, names, JSON-field-like, text-like xpub-prefixes, Boost-header and 123-byte CoinQ envelope. ZIP/GZIP They're readable in memory; external code is not executed, paths are not unpacked arbitrarily. 32 MiB on the element, 128 MiB one container with attachments, depth up to three levels, no more 3000 ZIP-Passes are clearly recorded. There are no passes in the accepted set.

No universal recognition PKCC without a name, 237-byte Armory records inside any binary, Base64 of arbitrary depth, encrypted archives or all versions of serialization `4Mf…` It requires a separate context analysis: checksum correct, but 46-byte payload doesn't BIP32 version `04b24746`.
