> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/parallel-wallets-20261102/02-electrum/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/03-wallets.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# EL-02 — Electrum: finished-stage

2026-11-02. **Unavailable beforehand MPK New Practical Recovery
master or masked children Not received.** New results - confirmed
Difference in Exportation1.7.4 and1.9.8 and the specific format of the accompanying
artifact MPK: half-transaction `.txn` s `input_info.KeyID`.
Artifact of the author Puzzle Not found; positive recovery-check-up synthetic.
Electrum As a possible generator is not excluded.

## Historical slices and the user path

Basic: [1.9.8, f92b483942d3f8ee51506e0436d9b524db33a336](https://github.com/spesmilo/electrum/tree/f92b483942d3f8ee51506e0436d9b524db33a336), 16.03.2014 conventionally HD-01 pin.
Additionally selected1.7.4, because release notes1.7 Describe the mass export
and Python console, ?1.7.3 — account selector. This allows you to check, which means
old account selector New deterministic roots.
Tag1.7.4 point `e8ffe29554dbb616005218f9686a3d9d8c85ca49`, commit14.05.2013.
intermediate1.9: `051c882a3f5288b467fbee1950ec391204a245c4`, tag04.11.2013.
Dates/objects GitHub preserved SOURCES. Verification is limited to these slices
full story pre-2015 There's no assemblies.

For the new usual1.9.8 wallet without config.bip32 get out old seed_version4.
The Way: Create a Wallet → Python console `wallet.change_gap_limit(256)` →
`wallet.synchronize()` → Wallet / Private Keys / Export → CSV. Clean
unused old account it256 receiving plus3 change, everything259 lineage
Data and headline. Generation/synchronize Need: Change the settings itself
It doesn't make a string by itself. Existing history can increase the pool beyond
gap limit. For desired256 The external script can take the first keys256
receiving; It should be clearly set.

The path is confirmed by the source and execution of selected methods with fake
account/storage/network objects. Complete Python2/PyQt4 GUI It didn't start;
historical speed GUI It's not measured1.9.8 old private export
repeat stretch/check-seed On the lines, so "convenient" doesn't mean instantaneous.
Option BIP32 It exists, but should not be mixed with old-the default circuit.

## What's new in export order

| Pathway | Actual sequence | What's allowed to assume |
|---|---|---|
| 1.9.8 CSV | Title: address/private_key; later addresses(True), loop-on | For the clean old account — receiving0..R−1, later change0..C−1 |
| 1.9.8 dumpprivkeys() | Same one addresses(True), result - list of lists WIF | It's not a flat list or a dictionary |
| 1.9.8 dumpprivkeys(addresses) | Order of the transmitted list | Any other order must come from a known list, not guessed |
| 1.7.4 CSV | get_private_keys(...).items() | Python2 dict iteration; Derivative procedure is not guaranteed |
| 1.7.4 dumpprivkeys() | Dictionary address→WIF | Don't endure list-semantics1.9.8 backwards |

Evidence: [CSV1.7.4:1757](https://github.com/spesmilo/electrum/blob/e8ffe29554dbb616005218f9686a3d9d8c85ca49/gui/gui_classic.py#L1757),
[CSV1.9.8:1954](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/gui/qt/main_window.py#L1954),
[addresses:538](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/lib/wallet.py#L538),
[get_account_addresses:1037](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/lib/wallet.py#L1037).

Imported keys prefix addresses(); inside Python2 dictionary
It's not supposed to be famous account-blockages keys() dictionary
inside receiving, later change. After them, they're not on yet
address next_addresses. V NewWallet They fit in `(branch,index)=(0,0)`
next account; It's not another one child current account. I've met you
The address is not added a second time. pending_accounts keeper metadata, and export
address next_addresses.

**Normal OldWallet creates account0.** V1.7.4 sequences[0] staffed
Initialization also does not provide a set of independent old accounts. Account selector
It does not prove new by itself master keys. V1.9 old account determined
seed_version4; into1.9.8 class OldWallet. Verified48 offsets three-way
They matched byte/account salt into old-No formula.

Simple, well-founded map1.9.8 - piecey receiving/change border R and
prefix I of imports, see para. [MATH.md](<MATH.md>)There's no reason to announce
staffed export stride2, alternation receiving/change or reverse.
V1.7.4 dict-order depending on the original address and Python runtime; arbitrary
No reshuffling was done501 MPK and48 model256 We didn't do it again.

CSV lacking MPK, branch, index, label or account ID. It contains raw
address and WIF; if the original itself is saved CSV, full raw keys They're available now.
It should not be attributed to the preserved only processed list of it metadata.
A few private WIF for multisig1.9.8 GUI glue through an empty line:
This is another reason not to consider any line as one old child.

## New verifiable profile of artifact

Code chain1.9.8:

1. `wallet.get_keyID(0,(c,k))` → `old(MPK,c,k)`.
2. `wallet.add_input_info` adds KeyID starting redeemPubkey to the entrance.
3. `Transaction.get_input_info` copy KeyID into metadata.
4. `Transaction.as_dict` include input_info **only if is_complete=False**.
5. `TxDialog.save` writes JSON into `unsigned.txn`.

Sources: [get_keyID:633](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/lib/wallet.py#L633),
[get_input_info/as_dict:669](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/lib/transaction.py#L669),
[save:108](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/gui/qt/transaction_dialog.py#L108).

`input_info` here JSON-line inside JSON, It's not necessarily an array.
One old KeyID giver128 hex symbolism MPK, branch and index single-handed raw child.
Example of form and ready-made public-input verifier — [ARTIFACT_PROFILE.md](<ARTIFACT_PROFILE.md>).
With multiple inputs of one wallet MPK It is repeated and deduplicated.
Signed complete `.txn` along the way, broadcast/raw blockchain
transaction They don't keep it metadata. We're not claiming a leak MPK on the blockchain.

It's **a new target file type relative to the considered E8 textual
search**, It's an undetected creator file
It's not known now; it's not been done again E8 scanner
continuous hex, I probably would have seen MPK inside plain-text KeyID, if
The document was already in its body; it does not claim to bypass the previous search.

Other suitable artifacts: old wallet/watch-only backup s top-level
`master_public_key`copied getmpk or GUI MPK/QR. V1.9.8 OldAccount.dump
duplicationless mpk into accounts[0]; we need an upper level wallet storage.
It's just an address bar label-export and txid That's not a profile.
For1.9.8 BIP32 getmpk return repr((chaincode,K)), not necessarily xpub
Base58; metadata You have to look at the version. CROSS_FINDINGS.md.

## Calculation and fair limit

All numbers are built from the saved results: [NUMERIC_REPORT.md](<NUMERIC_REPORT.md>).

- 83 the input keys are independently verified by range, secp256k1 public and P2PKH;
  SHA256 snapshot coincident HD-01, maximum134 minor bits, sum3767.
- 6 source fixtures confirm/pool/dump/metadata;48 offsets match
  at1.7.4,1.9,1.9.8. Python2 dict hash-order It didn't emulate.
- In the small real EC order199 tested8 positive8 negative
  pinpoint EC+SHA256d The solver doesn't get MPK or secret.
  Each exhaustively checks198 s; The results coincided with a separate complete
  oracle, We've got eight unique positives, and we've got them all counting
  Eight incompatible negatives. Offsets They are not replaced by free numbers.
- 4 synthetic sp256k1-sized exponents, receiving-count256/132/100/70:
  separate process KeyID, matching raw anchor and4 masked observation
  issue three candidates No71; The address leaves the correct one in all4 occasions.
  Remaining79 mask-shaped/Passes in case checked after
  conclusion, all316 inspections;12 Negative changes rejected/They don't answer.
  The formula of three transfers was already in E7; The new one here is the artifact interface and
  piecey export maps, It involves changing the branch between the observation and the target.
- Full-size joint pilot:1024 predetermined synthetic interval;
 1106 SHA256d positively1024 In negative control, the interval is not
  effluent Puzzle. It's workable verifier, recovery256 beat.

The full production and the cost -- [MATH.md](<MATH.md>)Removal s subtraction
The equations leave the unknown SHA256d from ser64(sG). No export order,
neither old accounts They didn't give us a way to calculate these offsets without MPK. Directly accurate
brute s remain orderly2^256; staff-space128-bit seed separately
less, but its exhaustive search is not practical and has not been launched here.
These are estimates of specific methods, the unproven lower bounds of cryptanalysis.
A practical way of order2^32 from83 No decisions or sources have been received.

## What next?

Substantive next input – associated with the author unsigned/partially signed
Electrum `.txn`, old watch-only backup either MPK And then, you know, the origin.
check the point raw anchor; limit export map according to the actual size of the pool;
check out4 long observations,79 The remaining and the target address
real-life MPK-candidate0, new private keys/bits0. Absence
No such artifact has been proven globally; the stage is completed with limited results.

All the records are in02-electrum. General RESULTS/README, Other people's experiments,
surroundings GPU-The processes haven't changed. Synthetic secret - control scalar,
Not real resources and not found mnemonic. Sources, errors DNS,
UTC/SHA256, codes public-input The results are preserved.
