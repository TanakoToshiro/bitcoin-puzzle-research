> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/parallel-wallets-20261102/04-bitcoinj/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/03-wallets.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# Task No4 — Bitcoin Wallet / bitcoinj

02.11.2026. **Practical reduction of the search for the present Puzzle before 2^32 not
received.** New result – accurate profile of issuance/export bitcoinj 0.12,
confirmed source account xpub diagnostic report Bitcoin Wallet
4.0, historical invalid-child edge case and accurate assessment of migration
prefix-It's a real one xpub/backup Author not found; new real ones private
keys No. Positive projections are exceptionally good synthetic conditional
righteous account xpub; the arithmetic formula was already in HD-01.

## What is new about what is new about HD-01/E9

**Application binding.** Release source Bitcoin Wallet 4.0, commit
`5276722f9c73e540b9bbb128c37783bfd173af4a`, 03.10.2014, plainly
`bitcoinj-core:0.12`library commit —
`83a9a71f3fff3f223d0737ad758b519a39dbbd62`This is a separate confirmation of the date
and dependency of the appendix, to the January border default branch contains
4.16/0.12.2; Subsequent versions are not declared verified by this audit.
[Release source](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/5276722f9c73e540b9bbb128c37783bfd173af4a/wallet/pom.xml#L60).

**Mass delivery and unloading.** API `freshKeys(RECEIVE_FUNDS,256)` really
giveaway 256 children; `getLeafKeys()` allows for unloading and lookahead through
`getPrivKeyBytes()`. Android Request Coins freshen receiving addresses,
manual backup carry-over protobuf It's on a computer Android WIF-CSV
It's unconfirmed `WalletTool` lookahead-size operates add-key, afterwards
One key is given out dump filtering the pool, including the first
absentee child by comparison `index > issuedCount`.
[Code API and filter](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/wallet/DeterministicKeyChain.java).

Performance of the original release JAR gave:

- lookahead=100, E=I=0: 266 public leaf records, two child-line private dump;
- lookahead=500, E=I=0: 1332 public leaf records, same-two child-lines;
- E=256/I=0, lookahead=100: 522 public leaf records and 258 child-lines.

Leaf `secret_bytes` in all protobuf absent, but private children
They are counted through ancestors. Private dump contains mnemonic and seed.
The order keeps the inserts/branching and loose keys, So line numberi
proverb child index i−1. The complete machine spreadsheet
[NUMERIC_REPORT.md](<NUMERIC_REPORT.md>).

**The real profile of the public anchor.** Android Report Issue collector public
wallet dump, wherein signing-wallet printer `Key to watch: xpub...` for `m/0'`
without private keys. This is a specific possible artifact that makes the former
conditional HD-01 Applicable method: a report relating to the author is required or
equivalent public point+chaincode+path. The presence of this function does not mean that
that the author sent or published such a report manual backup
reveals xpub through the external header.
[Android collectWalletDump](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/5276722f9c73e540b9bbb128c37783bfd173af4a/wallet/src/de/schildbach/wallet/ui/WalletActivity.java#L723),
[seal xpub](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/wallet/KeyChainGroup.java#L890).
Finished format and utilities: ARTIFACT_PROFILE.json - an artifact of the initial study (`ARTIFACT_PROFILE.json`; outside the picture),
inspect_profile.py - an artifact of the initial study (`inspect_profile.py`; outside the picture), predict_masked.py - an artifact of the initial study (`predict_masked.py`; outside the picture.

**Migration without a weak link RNG.** Repeated migration of one old backup
gives HD seed equally chosen oldest non-rotating key.
Juniors 128 bit old new-key seed It doesn't, but it's a famous mask
№135, Even if it is the one that is chosen old raw key, reveals
only 6 bit 128-bit entropy. The exact residual domain for her residue:
**5316911983139663491615228241121378304 = 2^122**. Do 2^32 This algorithm is not
Getting there; matching old origin line Puzzle It's also unknown.
That's the size of the intermediate prefix-domain of the proposed method, not proven
The lower bound of all attacks or the number of compatible wallets.

**Invalid-child features.** Bound helper receiver `IL=n` instead
deviations; retry In case of successive failures, the indexes are used
0,1,3,6,10,... instead of consecutive retry tested
original JAR; mistake retry It's artificially introduced. It's natural
HMAC-There's no way out edge cases They did not have an available limit seed
Or the odds for normal children bytes/formulae and limitations
check-up [MODEL_AND_LIMITS.md](<MODEL_AND_LIMITS.md>).

## Inspection and cost

- Confirmed SHA-256 general snapshot
  `d291351169b1bb483b580af8cf4c30e503941f7b15b81aabd418e93809a40b70`;
  The ranges have been retested public points and addresses of all 83 decisions.
  Maximum i=135, everything 3767 observed raw low bits. These are real data
  Used as a fixed form of mask/pass-by prefix-counts,
  not as an independent holdout A real new candidate.
- Original historical JUnit BIP32Test: 2 dough, 2 master and 10 descendant
  pair xprv/xpub; Java harness — 75 checks. Roundtrip protobuf, counters,
  lack of stored leaf secrets counting private leaf verified by execution.
- Independent Python reference drill public/chaincode available private
  bytes 3222 preserved Java nodes; separately 77 public/private CKD-reconciliation.
- Migration domain: 8702 exhaustive small systems, 34166 positive
  498234 negative prefix memberships, maximum 4092 old-key fortunes.
  In the present secp256k1-the exact amount is calculated, not brute force.
- App-profile adapter HD-01 forecast: 4/4 synthetic №71, 16 rogue
  branch/index/xpub/residue rejected; still 79 synthetic masks occasional
  The individual process receives only account xpub,
  four masked keys s mappings and target address. Seed full and raw children
  remain in a separate control file, which solver It doesn't open.

Every positive forecast is required 6 HMAC-SHA512, 6 public CKD and 3
Address checks, leaving up to three masked target-candidates before the address
It's the time of the test solver 0.015–0.032 s, launching Python-process
0.656–1.516 s. He is **failed account scalar/master xprv/seed**.
The exact times, the full inputs and answers are in JSON launches; values
They're automatically built from these tables control checks: 15929.

## Why without an additional artifact, the task remains open

Under normal derivation offsets demand account/branch public point **and**
chaincode, which are not in the decisions Puzzle. Lookahead, issued counters,
export order, birthday repetition backup help determine the path and
Check out a specific artifact, but do not create these HMAC-odds.
Public point of the final masked keyless raw-child point.

Fully raw normal child right account xpub subtract offsets and
obtain account xprv. It doesn't revert hardened `m→m/0'`restoration
master circulation seed They remain separate tasks old
migration key/his high 16 bytes, On the contrary, it directly determines BIP39 seed,
But such a secret is not established in the available data.

For a proven normal path, the product is reduced to standard BIP32
It's the finalized, limited outcome of the stage **exception
Bitcoin Wallet, version bitcoinj or all possible methods**.
The next meaningful step is a specific author’s diagnostic/watch-only
artifact or new working model of the circulation of unknown xpub; repeat
general seed/RNG brute force And the unlimited search for ways is unfounded.

History and user/API-path: [HISTORY_AND_EXPORT.md](<HISTORY_AND_EXPORT.md>).
Sources with URL/commit/UTC/SHA-256: SOURCES.json - an artifact of the initial study (`SOURCES.json`; outside the picture),
SOURCE_FACTS.json - an artifact of the initial study (`SOURCE_FACTS.json`; outside the picture); entrances: INPUT_PINS.json - an artifact of the initial study (`INPUT_PINS.json`; outside the picture.
Admission: ACCEPTANCE.json - an artifact of the initial study (`ACCEPTANCE.json`; outside the picture [README.md](<README.md>),
summarizing [SUMMARY_FOR_MERGE.md](<SUMMARY_FOR_MERGE.md>).
