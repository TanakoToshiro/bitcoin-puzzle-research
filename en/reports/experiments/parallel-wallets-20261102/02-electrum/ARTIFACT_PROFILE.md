> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/parallel-wallets-20261102/02-electrum/ARTIFACT_PROFILE.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/03-wallets.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# Suitable artifact Electrum old

Need a file with verifiable origin associated with the generator Puzzle.
Type1: top-level master_public_key into old wallet/watch-only backup.
Type2: unfinished1.9.8 `.txn`shape:

```json
{
  "hex": "serialized transaction",
  "complete": false,
  "input_info": "[{\"KeyID\":\"old(128_HEX_CHAR_MPK,0,17)\",\"address\":\"RAW_CHILD_ADDRESS\",\"redeemPubkey\":\"04_PLUS_128_HEX\"}]"
}
```

It's a diagram with placeholders, not a finished transaction test fixtures hex="00"
check-in metadata serializer; It's intentionally not valid Bitcoin transaction.
Ours extractor non-validity tx hex: check out KeyID his
correspondence raw address/pubkey. In a real reception, you also need the source of the file.

MPK: flatly64 byte x||y, without04, point secp256k1. Parser receiver c=0/1,
0<=index<2^31 as a clearly limited profile of a typical pool; old algorithm
use decimal ASCII It doesn't BIP32-Incorrect boundaries KeyID,
faulty point or mismatched starting point anchor They're deflecting.

Number MPK equal to the number of valid old(MPK,...) into metadata. Nana4 fixtures
posture1 MPK. Real New Artifacts0. Leave out C=1 by an unknown author
from synthetic result. MPK It doesn’t tell you which line is
export puzzle i: needle receiving count/prefix/A clear map.

Public-input schema solve.py:

```text
mode = "artifact"
artifact = parsed JSON above
observations = [{puzzle, branch, index, masked: "0x..."}, ...]
targets = [{puzzle, branch, index, address: final compressed Puzzle P2PKH}, ...]
```

Sample with **synthetically** data:
`runs/el02-v1/full-1.input.json`This132 receiving and3 change; №135 pertaining
to change2, target71 — receiving70. Complete raw child/master It's not transmitted.

Result: deduplicated MPK, arithmetic intervals, maximum3 masked
Candidate and matching target address, non-empty crossing doesn't prove
master*sG relation. Reliable results require a match with independent
decision-making/publically/The full cost is given in MATH.md.

Save complete=true fileless input_info giver0 MPK. Search blockchain
tx hex searchless `.txn` JSON. Old MPK usually xpub-prefix.
