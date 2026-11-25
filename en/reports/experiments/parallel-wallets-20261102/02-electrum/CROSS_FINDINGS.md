> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/parallel-wallets-20261102/02-electrum/CROSS_FINDINGS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/03-wallets.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# For general information, without changing the neighboring tasks

Tasks3 (mSIGNA/BIP32) and4 (bitcoinj/BIP32): Electrum1.9.8 optional BIP32
Uses public serializations that don't necessarily look like Base58 xpub.
`get_master_public_key` return repr((c,K)) for m/0'/; KeyID transaction
contains `bip32(chaincode,compressed_pubkey,/account/branch/index)`.
Slice1.9 put in K free of compression; cut1.9.8 — cK. You can't just look
lineage xpub And consider it all covered historical watch-only exports.

Source1.9.8: [wallet.py:561](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/lib/wallet.py#L561),
[wallet.py:633](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/lib/wallet.py#L633).
Source1.9: [wallet.py:659](https://github.com/spesmilo/electrum/blob/051c882a3f5288b467fbee1950ec391204a245c4/lib/wallet.py#L659).
This information is exactly Electrum; format-free mSIGNA/bitcoinj.

V1.9.8 CKD calculate `(IL+k) mod n` plainly reject IL>=n/child=0, ? CKD_prime
none retry This is the difference between processing extreme cases
Not proof of a small space master. Separate artificial
HMAC-fault Vectors in this task were not started. Generic BIP32 Not re-examined.
