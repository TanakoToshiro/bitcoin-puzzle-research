> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/parallel-wallets-20261102/04-bitcoinj/HISTORY_AND_EXPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/03-wallets.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# B4 Historical cut and actual unloading

## Confirmed version

Selected Bitcoin Wallet **4.0**, release tag `v4.0`, commit
`5276722f9c73e540b9bbb128c37783bfd173af4a`, 03.10.2014 08:32:11 UTC.
[Source pom](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/5276722f9c73e540b9bbb128c37783bfd173af4a/wallet/pom.xml#L60)
clearly `org.bitcoinj:bitcoinj-core:0.12`.
[CHANGES](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/5276722f9c73e540b9bbb128c37783bfd173af4a/wallet/CHANGES)
describe HD, fresh receiving addresses It's the same dependency
It is installed regardless of the date of the library.

Library slice: `v0.12`, commit
`83a9a71f3fff3f223d0737ad758b519a39dbbd62`, 02.10.2014.
The original was taken for launch Maven-artifact `bitcoinj-core-0.12.jar` s
fixed SHA-256 and dependencies of his pom. It's a launch release JAR,
Not a reproducible bit assembly statement commit.

Tag appendix development/test configuration (`4.0-test`, versionCode
190). His README separate production-branch mainnet/package/build
Signed by the settings production APK It didn't start or compare here
bitwise; conclusions about Android UI grounded release source and CHANGES.

To control the historical border, the last is preserved commit default branch before
15.01.2015: `2d04a45680ede640e53de272ad028afb008c152e`, 01.01.2015.
There it is `4.16-test` and **bitcoinj 0.12.2**. Therefore, the result of the exact
behavior 0.12 It is not automatically transferred to all January assembly 2015.
Full audit 0.12.1/0.12.2 It didn't work.

## How to get hundreds of keys

1. Create/pocket out 4.0. New wallets are regular HD; old-timers HD
   summon current/fresh API, when required upgrade.
2. Android Request Coins when a new opening without a saved address is called
   `wallet.freshReceiveAddress()`So hundreds of grants are technically achievable
   Re-opening; creating a separate button 256 export WIF»
   tested UI Not confirmed.
3. Convenient technical way - to move the staff backup on the computer and through
   bitcoinj API cause `wallet.freshKeys(RECEIVE_FUNDS, 256)`It's one packet
   call-back 256 children. `getPrivKeyBytes()` materialize private
   scalars There's a pool available to unload an already calculated pool
   `DeterministicKeyChain.getLeafKeys()` The clear path of each record.
4. Then the external script can use a mask Puzzle keys
   don't go back to HD-chain.

[RequestCoinsFragment](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/5276722f9c73e540b9bbb128c37783bfd173af4a/wallet/src/de/schildbach/wallet/ui/RequestCoinsFragment.java#L163),
[Wallet.freshKeys](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/core/Wallet.java#L407),
[getLeafKeys](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/wallet/DeterministicKeyChain.java#L1077).
The last option is the short one Java-binding, not confirmed Android GUI-function.

## WalletTool not equal to the export of everything lookahead

`--lookahead-size` processed in `add-key`issuing **single-handed**
`freshReceiveKey()`In `create`/`dump` This option does not make a packet issue.
`dump --dump-privkeys` trigger `Wallet.toString` → `KeyChainGroup.toString` →
`chain.getKeys(false)`That is, it filters leaf-pool issued counters.
[WalletTool](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/tools/src/main/java/org/bitcoinj/tools/WalletTool.java#L925),
[filter](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/wallet/DeterministicKeyChain.java#L1054).

This filter compares `childIndex > issuedCount` also misses the first
missing-index `childIndex == issuedCount`If he's already in lookahead.
Therefore, in E=I=0 Two lines are drawn, and when E=256/I=0 — 258, when the pool is full.
This is a feature of the dump, not an additional one relation between private keys.
Numbers verified by execution release JAR; table [NUMERIC_REPORT.md](<NUMERIC_REPORT.md>).

Private dump contains WIF-CSV, ? `ECKey{pub=..., priv=...}`Private hex
received `BigInteger.toByteArray()`: variable length, possible lead `00`
for a positive number. To mask/compare integer either
normalized 32 The same one private dump also printed mnemonic and
64-byte seed; low-number child-The lines do not limit the disclosed secret.
[ECKey.toString](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/core/ECKey.java#L1115).

## Counters, branching

- RECEIVE_FUNDS/REFUND use external branch 0; CHANGE/AUTHENTICATION —
  internal branch 1. It's `m/0'/0/i` and `m/0'/1/i`.
- Issued counters They are independent of the number of children. `currentReceiveKey`
  returns the current address again; `freshReceiveKey` He's pushing the meter.
  Finding a used address with a large index can also raise it.
- Lookahead default 100, threshold=33. Replenishment occurs if
  `issued + size + threshold - numChildren > threshold`In an empty branch
  calculated 133 public children. The checklists do not change at all.
- The main container -- `LinkedHashMap`: persists **insertion**.
  First nonleaf root/account/external/internal, later public children
  Primary blocks lookahead giver external beforehand internal, further
  Extensions are inserted later: all exports do not have to be sorted along the way.
- Loose/imported keys in serialization and text dump go before HD-chains.
  A few HD chains They also have their own order; a single line number does not define the
  branch/index, (a) the imported records may not have any HD path.

All of the listed properties are linked to SOURCE_FACTS.json - an artifact of the initial study (`SOURCE_FACTS.json`; outside the picture.
The schemes of arbitrary permutations were not crossed.

## Backup copies and public anchor

Normal Android wallet stored app-private `wallet-protobuf`. Manual backup
serialize Wallet protobuf and **later** encrypt OpenSSL-compatible
Base64 `Salted__` formatAES-256-CBC, 8-byte salt. Automatic files
rolling backup remove transaction/block metadata, preserve key records.
Their presence does not mean publication.
[README](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/5276722f9c73e540b9bbb128c37783bfd173af4a/wallet/README),
[backup](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/5276722f9c73e540b9bbb128c37783bfd173af4a/wallet/src/de/schildbach/wallet/ui/WalletActivity.java#L941),
[rolling backup](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/5276722f9c73e540b9bbb128c37783bfd173af4a/wallet/src/de/schildbach/wallet/WalletApplication.java#L378).

V protobuf recorded:

- `DETERMINISTIC_MNEMONIC`: `secret_bytes`, cached 64-byte BIP39 seed
  into `deterministic_seed` or appropriate encrypted fields).
- `DETERMINISTIC_KEY`: public key, own 32-byte chaincode, repeated
  uint32 path; at external/internal — issued_subkeys and lookahead_size.
- In a tested plaintext signing-wallet root/account/branches have private
  bytes, ? leaf records only public+chaincode+path. Private leaf anyway
  You can get it from your ancestors. Watch-only backup It doesn't contain such secrets.
- Private leaf The file is not present because the user is not available
  It's because it's counting mnemonic and cached seed does not
  Two independent systems of equations.

[wallet.proto](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/wallet.proto#L42),
[serializeToProtobuf](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/wallet/DeterministicKeyChain.java#L585).

**Specific additional source account xpub:** Android Settings → Report
Issue collector `wallet.toString(false, true, true, null)`In signing-wallet
`KeyChainGroup.toString(false)` printer `Key to watch: xpub...` for
account `m/0'`though private keys/seed They don't output. It's tested and sourced
and release JAR. So, the author's diagnostic report could give
anchorless private backup. The author's report **not found**; mailing
No reports were carried out.
[collectWalletDump](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/5276722f9c73e540b9bbb128c37783bfd173af4a/wallet/src/de/schildbach/wallet/ui/WalletActivity.java#L723),
[Key to watch](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/wallet/KeyChainGroup.java#L890).

Absent parent fingerprint imported watching account maybe
line up xpub; `public point + chaincode + path` And they're preserved.
The series of this version uses fixed xpub/xprv version bytes neither
choose tpub/tprv over the net. `getPubOnly()` retain in-memory reference
parent: inside signing-wallet may have access to private ancestor.
Exported xpub-line of such reference and private ancestor It doesn't contain.
The verification profile - ARTIFACT_PROFILE.json - an artifact of the initial study (`ARTIFACT_PROFILE.json`; outside the picture), utility--
inspect_profile.py - an artifact of the initial study (`inspect_profile.py`; outside the picture.
