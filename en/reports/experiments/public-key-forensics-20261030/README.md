> English machine translation of the [Russian source](<../../../../ru/reports/experiments/public-key-forensics-20261030/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/05-signatures-and-provenance.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E5 Checkable catalogue of public keys and signatures puzzle

**First pass complete.** Key No71 not found in the checked coating;
tested 220 raw-transactions 324 signatures, repetitions r No, the catalog contains
public-point 184 puzzle-addresses. [Conclusions](<runs/20261030-114903-5757a87d/CONCLUSION.md>),
Acceptance - an artifact of the initial study (`runs/20261030-114903-5757a87d/ACCEPTANCE.json`; outside the picture.

The goal is to find the exact public key71 in the final set of sources and collect
Verified signatures of historical transactions without mixing the login owner
creator puzzle And a late solver.

- [Protocol and borders](<PROTOCOL.md>).
- [Journal of Interim Findings](<NOTES.md>).
- [Launch results](<RESULTS.md>).
- [Main launch report](<runs/20261030-114903-5757a87d/REPORT.md>).

## Teams PowerShell from this folder

> Executable code/The commands are omitted in the documentary copy.


Wednesday: research Python 3.11 / coincurve; actual versions saved
into config.json. The net is exceptional GET Publicly available sources
Wallet programs, signing real transfers and sending transactions
Only synthetic control messages are signed
Examples with public test keys.

`cache/` - snapshot of answers, name by SHA-256 URL, `.body` byte-informed
`.json` s URL/timelessly/hashem. Mistakes `errors.jsonl` bodies HTTP-mistakes.
The read answer is cached forever in this picture. `run` **non-update** current
A new network image needs a new directory/cache and
singular/ID; Do not delete the old cache for an update. `resume` single-handed
ID You cannot run in two processes simultaneously.

## Data area and format

The original transaction has 256 P2PKH-Exit index puzzle match
the order and amount of the output and is checked against the saved table of the first 160 addresses.
Five landmarks and their txid are config.json. All 83 published
private puzzle-The keys are control values, not parts of the keys.

For No71 compare Esplora-Provider: address statistics, complete
A confirmed history of pagination, UTXO; mempool It is maintained separately for each.
For the remaining addresses, the direct costs of the initial exits are checked
It's not the whole history of each address71 check-in raw;
The public points of their senders are also checked for compliance with the71, including
other SEC-serialization, but are not automatically declared recipient keys.

V `runs/ID/tx` preserved raw hex and JSON; txid non-calculated witness,
Serialization and fields are matched `signatures/` - individual checked entrances:
precise prevout, public key, DER, r/s, sighash type and digest, results
coincurve and independent arithmetic. High-S remains in the record; library
The test uses equivalent normalization. Parent raw confirm script
sum prevout; It's essential BIP143.

`catalog.json` / `catalog.csv` grant 256 addresses and found points with sources;
`points.json` includes all the points studied, including those not related to
puzzle. `signatures.json` Contains verified signatures, repetitions r plainly
unsupported scripts. `anchor-inputs.json` Separate the five historical landmarks
from the rest of the costs. `target-history.json` and `publications.json` pinpoint
Search Coverage and Restrictions No71.

In a signature with an already published private key nonce calculated ECDSA
and then to the point, and then to the point of
[RFC6979/HMAC-SHA256](https://www.rfc-editor.org/rfc/rfc6979)It's not a recovery
A match doesn't prove a specific wallet.
discrepancy does not exclude RFC6979 supplementary/grinding.

Raw bytes/txid/Signatures are verified locally. Complete history and inclusion in
The current chain is based on the answers of observers: full node and
archive mempool They're not used here
It does not prove that it has never been published anywhere.

## Possible continuation

1. With the exact coincidence of the point with No71 - separate training kangaroo.
2. With real repetition r for one key and different messages - separate
   Checking for specific weaknesses, while maintaining the difference puzzle/foreign keys.
3. Additional Address Histories and Publication Archives – New End List
   Sources and a new image; already verified bytes do not re-download.
4. Changing the generation model/seed - only on the basis of new data;
   signature 2019/2023 The year does not automatically determine the generator 2015 years.
