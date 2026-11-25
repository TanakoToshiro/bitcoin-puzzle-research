> English machine translation of the [Russian source](<../../../../ru/reports/experiments/historical-signers-20261101/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/05-signatures-and-provenance.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E11 What was distinguished by the signatures

2026-11-01. **We couldn't pinpoint a specific program, and we were able to rule out a few unaltered paths, and show why the rest of them are indistinguishable from this data.** It's an analysis of the signing2019 and individual transaction structures, not the generator recovery2015. Numbers are automatically generated in [NUMERIC_REPORT.md](<NUMERIC_REPORT.md>); a complete list of comparisons - COMPARISONS.json - an artifact of the initial study (`COMPARISONS.json`; outside the picture.

## Exact signatures

From324 accepted E5 signatures available218 Entrances with published private keys15 These are known keys of disclosure2019. Others203 A separate mixed group of solvers/Unknown signatories; it cannot be turned into a portrait of the creator.

All of them15 entries r, s and DER give:

- RFC6979/HMAC-SHA256 s low-S, testable Python-route Electrum2.9.3/3.3.4;
- standardized paths Core0.10.0/0.16.3 without low-R;
- function-driven bitcoinjs-lib2.3.0;
- function-driven pybitcointools commit aeb0a2..27July2017.

It's **Equivalence class at observable inputs**, Not four independent arguments in four wallets Electrum It's more likely because its code is easier to reproduce RFC6979 on15 the keys are already known from E5; The new contribution is to compare specific implementations and limit attribution.

**Electrum1.9.8 without further processing S:** matched r15/15, precise DER only5/15. His [transaction.py](https://github.com/spesmilo/electrum/blob/1.9.8/lib/transaction.py) regular `SigningKey` and `sigencode_der`; checked historical python-ecdsa0.11/0.13. Nana10 he gives out entrances n−s instead of low-S. It's the unaltered path that's excluded as the source of the final bytes S, Altered dependencies or signature processing outside the wallet restore compatibility Electrum1.9.8 generator2015.

**Core0.17.0 s grind=true:** precise DER9/15. The rest of us6 known inputs observed r most significant bit1; The standard path picks up another signature. The complete transaction contains11high-R from21 This confirms the restriction E10. Core switched off grinding, old versions, importation/Transfer of external signatures is still possible. [Source](https://github.com/bitcoin/bitcoin/blob/v0.17.0/src/key.cpp).

**Core0.9.3:** path-read `ECDSA_do_sign` OpenSSL and low-S The internal random state of the time OpenSSL It's not known; it doesn't reproduce exact random signatures0 It's a coincidence or a logical exclusion only by deterministic coincidences RFC6979, But it's not a mathematical proof of the impossibility of coincidence.

Dates matter: Core0.10.0 and bitcoinjs2.3.0 appeared after the initial funding; here they are compared as possible ways of signing2019. Commit-Version dates are saved separately and are not declared release dates.

## A rare difference that doesn’t help with real data

Historical python-ecdsa first digest modulely n for nonce, a checked old libsecp/bitcoinjs/pybitcointools baseline32On synthetic bytes digest=n, n+1 and2^256−1 They give different signatures; control detects that **everything218 real-life sighash less n**, So the difference is invisible here256-bit-hash probability digest≥n roughly3,73×10^-39. It is almost meaningless to expect that the usual expansion of the hull will allow distinguishing these paths on this basis.

Important detail pybitcointools: extracted `ecdsa_raw_sign` retain x-pointless r mod n. In proven cases x<n, The port does not declare the library to be fully equivalent in all rare cases/erroneous entrances.

## Assembling transactions

In preparation for disclosure2019 (`7c432…`)21 exit1000sat: №1, later65,70,…,160 - order of numbers Puzzle. He is **doesn't match** sorted `(value, scriptPubKey)`which, of course, causes [Electrum3.3.4 Transaction.from_io](https://github.com/spesmilo/electrum/blob/3.3.4/electrum/transaction.py)There is10 Therefore, this object is not an unaltered result of said constructor on a given set of outputs.

This is compatible with software assembly, rearrangement of outputs, another designer or import raw-transactions for signature. it is not proved that the user has refused Electrum: You don't have to repeat the sorting2019 fitting comparator; It doesn't set up a wallet either.

The other four reference transactions are compatible with the verified sorting. Part of the overlap is almost trivial: one input/Exit, increasing amounts or multiple outputs of one funding tx So sorting is not an independent strong imprint of the program.

## Early expenses are not equal to copyright costs

In the data E520 known expenses1–20 fell into the same block339085, as well as the initial funding8 signature high-S; s RFC6979+low-S It's just the signature number1. Slice saved in EARLY_SPENDS.json - an artifact of the initial study (`EARLY_SPENDS.json`You cannot transfer this mixed profile to the author of the financing: the small keys could be tracked and spent by unauthorized persons, and the block time does not show the order of the first appearance in the project mempool. The link between the signatories and the author has not been established.

## Controls and limit of reproduction

Passed24 key-case1,3,123456789,n−1 and digest0,1,n−1,n,n+1,2^256−1. Two historical functions python-ecdsa, independent Python-arithmetic coincurve, DER, alternating negative digest and low-R It's a replay Node-The process performed unchanged functions nonce/sign bitcoinjs2.3.0 plainly BigInt/OpenSSL-adapters:24control15/15 exact, real signatures.

It is the reproduction of functions and ports of paths, **Not launching full old wallets**. C++ Core I wasn't going to, rare rejections r=0/s=0, Inadmissible keys and all variants of third-party dependencies have not been investigated. sighash taken from E5, The full network crypto-audit of transactions has not been performed again E5/E10 and checkpoints unchanged.

## Additional search and further solution

Since the program is not defined, a second search is permitted:16 query Bitcointalk, Reading external catalogues, StackExchange, Reddit/reprints, Bitcoin.com, BitcoinWhosWho And the other pages we found. [Detailed analysis](<EXTERNAL_SEARCH.md>)No new verifiable initial report of the author about his programs was found in this restricted passage.

Now the meaningful limit has been reached: dozens more libraries using the same RFC6979/low-S And the input bytes will only increase the class of indistinguishable implementations **differentiation** Early source script with verifiable history, export/Metadata of a wallet tied to a message key or a truly unique serialization behavior signer2019→generator2015 It's still missing seed-There is no reason for this step.
