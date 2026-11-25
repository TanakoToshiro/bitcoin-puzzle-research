> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/parallel-wallets-20261102/01-armory/ARTIFACT_PROFILE.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/03-wallets.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# Verified artifacts Armory

## 1. multipliers.txt - new sufficient entrance

On release v0.92.3 (commit 268db0f3fa20c989057bd43343a43b2edbe89aeb,
02.10.2014) sliced 61a596f (08.01.2015) `safeExtendPrivateKey` and
`safeExtendPublicKey` The list of successful transitions to
`ARMORY_HOME_DIR/multipliers.txt`Conditions debug There's no recording around.

```
PrvChain (pkh, mult): <40 hex символов HASH160 несжатого parent>,<64 hex u>
PubChain (pkh, mult): <40 hex символов HASH160 несжатого parent>,<64 hex u>
```

Reconstruction private key afterward unlock passable pubkey field pkh
It can be empty. It's allowed by the parser; there are mask checks and
permanent C. The format does not contain wallet ID, chainIndex, timestamps, root
public key himself C. Journal general datadir: Possible mixing of wallets,
re-transitions after recovery/re-derivation, pruning/omissions.
The current solver requires an already allocated continuous segment of the correct order
and clearly defined indices. Self-dividing mixed
Log, search for arbitrary permutations and authorship by file name are not claimed.

`PyBtcWalletRecovery.py` copy multipliers.txt diagnostically
for a specific recovery path with file transfer
He can collect her files `wallet_analyze_logs.zip`name of the element
look `walletID_parentDirectory_filename`That doesn't mean automatic
publication of the archive or the existence of such an archive by the author Puzzle.
Not to be confused with individual multipliers restored imported keys into
recovery report: They have a different formula, our format does not apply to them.

**Minimum sufficient verified profile:** multiplier
anchorage 120/125/130/135 + precise index mapping + four
To restore the mask itself C You need at least one complete one u-recording
anchor; the entire segment contains such records71 anchor chainIndex<=70
in accordance with the selected order. For purposes No140/160 later, perhaps anchor.
Adequacy demonstrated in controls, guarantee LLL wallet-wise
It is not approved; the information minimum number of bytes is not proven.

Package `recover.py` regime log It contains exactly:

```
id, mode="log", anchor_chain_index, log,
observations=[{puzzle,chain_index,masked_private}],
targets=[{puzzle,chain_index}]
```

Secret root/children, public raw points and C There are no examples
PUBLIC_PACKETS.json active launch; all data clearly synthetic.

## 2. PKCC / watch-only

`getRootPKCC()` return root public key 65/33 bytes and C 32 bytes.
`writePKCCFile` Creates six-line text: version 1; EasyType16 root ID;
four-line 16 byte 2-byte doubleSHA checksum. ID — 9 bytes:
version/sign-bit P (0x80), 6-byte wallet ID, 2-byte checksum. First two
data lines X_BE32; the last two C. Precise EasyType16-alphabet:
`asdf` + `ghjk` + `wert` + `uion` (16 symbols, no spaces.

`artifacts.py pkcc` checks version, lengths, checksums, correctness EC point
and mainnet wallet ID The first child, and the first child, anchor=-1, P and C.
Auto-correction of old typos GUI It doesn't happen again. Wallet ID/short-lived checksums
It doesn't authenticate the author C without X and the sign is not sufficient for
public derivation. Root ID Without four lines of data, it's also not enough.

## 3. One binary child record PyBtcAddress

Length 237 bytes, integer metadata little-endian, scalar/coordinates big-endian.
Displacement relative to the beginning of the recording (not the beginning) wallet file):

| Field | Offset | Bytes |
|---|---:|---:|
| HASH160 / checksum | 0 / 20 | 20 / 4 |
| Version / flags | 24 / 28 | 4 / 8 |
| C / checksum | 36 / 68 | 32 / 4 |
| Signed chainIndex / chainDepth | 72 / 80 | 8 / 8 |
| IV / checksum | 88 / 104 | 16 / 4 |
| Private data / checksum | 108 / 140 | 32 / 4 |
| U(P) / checksum | 144 / 209 | 65 / 4 |
| Time / block ranges | 213 | 24 |

C and U(P) They are also open when encrypted private data.
`forkOnlineWallet` Copy address records, delete private data; C/P/index
Separate, serviceable records child sufficient forward-anchor
profile; root record It's not necessary. Imported chainIndex=-2 It's unusable.
Displacement root record headlined 1.35 — 846; but our tool **non-scan
full wallet files**, accepts only allocated 237 bytes. Verification checksum
confirms chainIndex (it doesn't have a separate one) checksum) and origin.

`artifacts.py record` check-in public flag, version1.35, checksum C/P/HASH160,
correspondence HASH160 point-and-negative child index either root=-1. Private
data They don't. Flags encryption/private report as metadata.

## 4. Normal Export Key Lists

GUI Extend Address Pool accepts the quantity; >=1000 requiring additional
confirmation Key Lists available Include Unused, Private Hex/Base58,
PublicX/PublicY, ChainIndex (The visibility of some fields depends on the mode of operation) UI).
All right linearAddr160List/order of records, not index sorting; importation
It can break the sequence. Receiving/change They share a common chain
separate BIP44-The branch isn't meant here.

Normal child-lineage C It's not printed. Include Paper Backup Root reveals
private root, ? C It is printed separately only if it does not coincide with the default
This is not to be confused with the conclusion PKCC. PublicX/PublicY exportation
They are useful only if they have not been replaced by final points masked keys.

Available public solutions/There are not enough addresses for any of the first
No real artifact associated with the author was found in this work.
cross-exploration wallet/log No files were conducted.
