> English machine translation of the [Russian source](<../../../../../../ru/reports/experiments/public-key-forensics-20261030/runs/20261030-114903-5757a87d/CONCLUSION.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../../README.md>) · [Direction](<../../../../../topics/05-signatures-and-provenance.md>) · [Documents of the series](<../../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../../docs/LATEST_RESULTS.md>).

# E5 Conclusions on public keys and signatures

Date of photo: 2026-10-30. Launch `20261030-114903-5757a87d`.

**Public key No71 Not found in the checked kit.** Blockstream and mempool.space
agree: 72 confirmed transactions, all incoming; no expenditures, current
mempool All three pages of confirmed history are checked
provider, 72 UTXO totality 710195986 sat, raw-bytes of incoming transactions
and public points of the sender in two SEC-Serializations. Search by ten
page-stored/The table does not give an additional point corresponding to the number71.
This is a limited search, not proof of no publication anywhere.

## What's confirmed

- Restored 256 the addresses of the original transaction; 160 checked with the table and
  83 Full private keys with addresses.
- Checked out 179 input costs in the 70 Transactions. Catalogue assembled
  public-point 184 puzzle-addresses: 1–70, five-in 75 before 160,
  all 161–256. Among the relevant 1–160 it 88 points; No71 Not one of them.
- All in the cover checked raw/txid/JSON 220 transactions 254 differential
  public places, including those not related to puzzle. Not all of these entrances 220
  The transactions were part of the signature analysis area.
- All 324 Selected signatures verified coincurve independent Python-arithmetic:
  323 legacy P2PKH single-handed P2WPKH, everything SIGHASH_ALL. Parental raw-exits
  They confirm sums and scripts. There are no unsupported inputs to the selected area.
- Repeats r Not found in any key or between different keys.
  Possibility of other errors nonce That's not out of the question.

## Signatures 2019 year: useful clarification

V [disclosure](https://mempool.space/tx/17e4e323cfbc68d7f0071cad09364e8193eedf8fefbcbd8a21b4b65717a4b3d3)
checked 21 Entrance 20 relate puzzle: 65,70,…,160. There's no other entrance
reference 256 For the addresses 15 these 20 puzzle private key
are now published; **15/15 The signatures matched exactly with the RFC6979/HMAC-SHA256**
without additional entropy, taking into account k/n−k normalize s.

It's a verifiable fact about specific signatures Electrum,
Armory or Bitcoin Core It does not establish the generation of keys 2015 For a year
The remaining five entrances are checked accurately nonce Private key is not possible here.
Shared controller of these logins and account authorship – different statements; joint statements
Signatures do not prove one identity.

In all the selected set checked 218 signatures with a known private key;
131 coincidental RFC6979, 87 Other signatures include late ones
the costs of the decision-makers; it is not 87 evidence of the creator's weakness
It may be related to another acceptable implementation nonce, extra entropy,
grinding We didn't get any new checks on those options.

## Correction of Insecure Historical Descriptions

Small income from 16 May 2019 They did not reveal the recipients’ points by themselves.
The required keys are disclosed by the expenditure of 1 June 2019. Woo
[replenishment 2023 year](https://mempool.space/tx/12f34b58b04dfb0233ce889f674781c0e0c7ba95482cca469125af41a78d13b3)
one-way 85 In one earlier essay, we've looked at the outputs 3050 entrances
and 67 outputs; these numbers do not describe this verified transaction
The wallet for such unconfirmed characteristics can not be used.

## Reproducibility and the next step

All eight stages are complete wall time stage 293,595 c without writing the code.
Stopped after the first three stages, continued the other five, and then resume
fulfilled 0 new stages and 0 HTTP-Controls include downloads 500 formal
Bitcoin Core sighash-vectors BIP143. Initial answers are preserved
hashes, upload times, signatures, accurate messages z and binding prevout.

[Number report](<REPORT.md>)catalogue CSV - an artifact of the initial study (`catalog.csv`; outside the picture), catalogue JSON - an artifact of the initial study (`catalog.json`; outside the picture),
Signatures - an artifact of the original study (`signatures.json`; outside the picture), landmarks - artifact of the original study (`anchor-inputs.json`; outside the picture),
Coverage of sources - an artifact of the initial study (`publications.json`; outside the picture), acceptance - artifact of the initial study (`ACCEPTANCE.json`; outside the picture.

Kangaroo no71 It didn't start: no point found
There were no foreign address keys, and further expansion makes sense with a new one
source of a public point, specific signature error hypothesis or reasonable
historical model seed. Repeat the same sources and signatures are not required.
