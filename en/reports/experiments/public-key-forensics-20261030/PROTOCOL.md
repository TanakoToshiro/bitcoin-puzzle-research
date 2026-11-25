> English machine translation of the [Russian source](<../../../../ru/reports/experiments/public-key-forensics-20261030/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/05-signatures-and-provenance.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E5 Public keys and signatures puzzle: frontiers

Locked 2026-10-30 before analyzing bytes of transactions
data; without signature;/Transactions are sent without changing search projects.

## Questions

1. Whether the public key being checked has been found, HASH160 addressable
   №71 `1PWo3JeB9jrGwfHDNpdGK54CRas7fsVzXU`?
2. What public keys are actually disclosed by transaction inputs
   referenced 256 What are the only published decisions that we know?
3. Are there repetitives? ECDSA r among the verified signatures; whether the keys are the same,
   messages s? Distinguish signature repetition from potential repeat nonce.
4. For already published full private keys, check the exact match
   nonce standard RFC6979/HMAC-SHA256 without additional entropy; take into account
   equivalence k and n−k normalize s. It's a signature stamp
   Not proof of wallet family or key generation in 2015 year.

## The final set of sources and the disclosed coverage

- The Five Transaction Guidelines: Original 2015, redistribution 2017, petty
  receipt 2019, spending 2019, replenishment 2023. References from third parties
  only a means of finding txid. Data is taken from Esplora API Blockstream/mempool.space.
- Restore 256 addresses at the original exits 1–160 check back
  table, already checked 83 Decisions with appropriate public keys.
- Get it outspends everyone 256 Initial outputs and transactions of their immediate
  It's a finite graph, not a complete circumvention of the history of everything 256 addresses.
- For No71 separately receive address statistics, all available confirmed
  history with pagination (before) 100 page 25), mempool and UTXO; Compare the two sources.
  This is a snapshot of current providers, not an archive of ever-deleted ones mempool-transactions.
- View fixed open tables and primary forum posts;
  any found SEC-check points mathematically and accurately HASH160.
  Do not count the wordpublic keyOn the site, proof of the existence of the point.
- To verify signatures, download the parental transactions of suitable
  entrancespuzzle-entrances and all entrances of the five landmarks Other direct expenditure inputs
  They are classified separately, without trying to recover someone else’s private keys.
- Protective limit 600 successful HTTP-loading and 30 network-minutes wall time.
  Limits, errors, unsupported scripts, and incomplete coverage are clearly saved.

## Checks

Save URL, time, SHA-256 The initial response of each download, including errors.
Calculate txid serialized witness; cross-check JSON s raw. For the key
point secp256k1, HASH160 and scriptPubKey Expendable parental output.
Do not accept the public key of one of the senders of the incoming transfer as the key No71.

Support legacy P2PKH, P2WPKH and nested P2SH-P2WPKH: DER, sighash ALL/NONE/SINGLE,
ANYONECANPAY, historical SIGHASH_SINGLE out-of-range. For witness use
BIP143 and the verified amount of parental exit. Multisig/P2WSH/Taproot others
Scripts are clearly highlighted as unsupported by this stage coincurve
independent Python-arithmetic; original high-S preserve
libsecp256k1 normalize s.

Prior to analysis: control of serialization/txid, positive and negative signatures,
faulty prevout/pubkey/message, repeat r uniformly/different messages,
low-S/high-S, official-vector sighash Bitcoin Core and BIP143.
RFC6979 check coincurve synthetically keyed/Main checks are being carried out
to limit the precise configuration without selecting additional entropy and grinding;
The non-match does not exclude other variants of deterministic signature.
Repeat r with the same public key and different messages mark the candidate
Weakness; the conclusion about recovery to make only after additional verification.
At this stage, do not launch mass lattice-Attacks and do not take out "bad" nonce»
The known solutions are used as the distribution of multiple signatures
Control, not to gain access to third-party addresses.

## Attribution and inference

Divide: Proven consumption of a particular output; joint key control
the following of the signatures; the hypothesis about the connection of transactions with the creator; the statement of the account
The signature of the solver is not evidence of a generation program
Sharing doesn't prove that one person signed.

If the key is number71 not found, the conclusion is only "not found in the specified coating" and not
proof of the absence of any publications, if found independently
exact correspondence to the address; launch kangaroo - separate next stage.
Save the code, the data, checkpoints, catalogue JSON/CSV, report, journal and team
continuation/reassembly without repeated network calls.
