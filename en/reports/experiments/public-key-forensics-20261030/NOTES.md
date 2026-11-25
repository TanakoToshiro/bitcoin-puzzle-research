> English machine translation of the [Russian source](<../../../../ru/reports/experiments/public-key-forensics-20261030/NOTES.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/05-signatures-and-provenance.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E5 Journal of Intermediate Conclusions

## 2026-10-30 - staging and preparation

At the request of the user, a check of public keys No71 preparation
A catalog of signatures of related transactions. [Protocol](<PROTOCOL.md>) limit
five historical landmarks, direct costs of the initial
exits, history No71 and the final list of publications. Working search projects
and E2b They don't change. Read the updated report E2b: everything 2^32 integer seed and
120 diagrams are fully checked; filter matches No1–12 Nope.

Third-party [pointer](https://lotterypuzzle.org/sources/) used
only to obtain the complete txid. Bytes, addresses, inputs and signatures are checked
Attribution of the individual is not the goal and does not follow from the group
primary format API: [Esplora](https://github.com/Blockstream/esplora/blob/master/API.md).

Initial requests Blockstream and mempool.space I agree with No71 72 confirmed
transactions, 0 Exits spent, current outputs mempool-It's not zero yet
checking all pages of history and not excluding a separate public publication
Therefore, the final conclusion is not reached at the preparatory stage.

Initial funding does indeed have 256 exits. API pointer 179
the initial outputs spent and 70 various directly consuming transactions;
These references are to be verified by raw-The first four landmarks are used
P2PKH, replenishment 2023 — P2WPKH, Therefore, we cannot count everything z single-handed legacy
It's an algorithm BIP143 with a verified amount of parental withdrawal.

Checks before the analysis of real signatures have passed: all 500 formal Bitcoin Core
sighash-vector v28.0, formal native P2WPKH vector BIP143, positive/
negative ECDSA verification by independent arithmetic, high-S/low-S, wrong key,
message prevout, Distinguish between a repeated signature and the same r different
Messages, three synthetic checks RFC6979. Sources with SHA-256 preserved
SOURCES.json and sources/; signature/The transfer of funds is not used.

Prior to the main analysis, the protocol is supplemented with an accurate verification RFC6979 already
published puzzle-She's not picking up the keys nonce and
Unknown private keys, even a match in the transaction of the common controller
The method of signature in the relevant year, and not the generation of 2015.

## 11:49 UTC - fixed start and stop

ID `20261030-114903-5757a87d`The first three stages are controls, five landmarks
Address directory complete. Raw The five reference points are the same for the two providers;
routine/the amount of initial outputs confirmed, 160 addresses and 83 The decisions are aligned.
A regular stop has been completed; further continuation misses these stages.

## 11:54 UTC Completion of collection and cryptographic verification

The Complete Confirmed Story No71 contains 72 transactions 72 UTXO without
Both providers agree; mempool All the original bytes of stories are empty
preserved and verified with JSON. Public points of senders of incoming transfers
checked for exact conformity HASH160 №71 in compressed and uncompressed format;
No match, all ten planned URL publications were obtained;
tabulated 88 valid SEC-No, none of them corresponds to the number71.
The lack of results is limited to these sources, not the entire Internet.

Checked out 179 input costs in the 70 Transactions. The catalog contains 184
puzzle-dots 1–70,75,80,…,160,161–256. All investigated 254 spots
(including external incoming sources), raw/txid/JSON 220 transactions.

Checked out 324 selected signatures by two implementations 323 P2PKH and
single-handed P2WPKH; everything SIGHASH_ALL. Unsupported cases/No invalid signatures.
No replays found r Not with a single public key or between different keys.
This does not exclude other errors nonce It does not verify the entire history of signatures
each address: the area is fixed by the protocol.

Transactions of disclosure 2019: 20 puzzle-entrances 65,70,…,160 and one outside entrance.
For 15 already known private keys have been calculated nonce, tested
their point, then matched RFC6979 No extra entropy. **15/15 match**
sign-change k upon low-S. This does not define the wallet and does not allow
Transfer the output to the generation of private keys in 2015 For the five unknowns
There are no private keys for such verification.

In the entire selected area 131/218 The verified signatures matched the exact RFC6979.
87 Inconsistencies can not be called errors of the creator: the set includes costs
Responding to other acceptable schemes nonce and possible options grinding.
No new options were selected for these results.

Confirmed the factual error of previously read third-party essay: tx
`12f34b58b04dfb0233ce889f674781c0e0c7ba95482cca469125af41a78d13b3` one-way 85
exits, not 3050/67. May arrivals 2019 and the revealing expenditure of June 2019
Technical specifications cannot be used to
Attribution of the wallet without checking the exact txid.

## 11:55 UTC The boundary of the result and continuation

All 8 Stages complete; wall time 293,595 (c) without preparation. Call history:
3 stage, then 5, later 0 zero-in HTTP-downloads, checked 861 hash of entrances,
transaction artifacts and original network responses/time-outs
The final reception further captures all the individual signatures
export CSV and a dot catalog.

Public key/bit71 not received, kangaroo It didn't start. It's the final one
reproducible catalogue and negative replay verification r, not evidence
Impossibility of another attack [result](<runs/20261030-114903-5757a87d/CONCLUSION.md>).
No need to repeat saved computations; new sources/hypothesize
It's a sequel with its own coating checkpoints
unchanged.
