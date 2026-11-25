> English machine translation of the [Russian source](<../../../../ru/reports/experiments/author-toolchain-audit-20261101/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/05-signatures-and-provenance.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E10 Archive audit: what is known about the author’s programs

Date: 2026-11-01. **It was not possible to reliably establish the author’s personal set of programs based on the materials found.** Checkable limits on one way of signing are found2019 and several exact matches of addresses with software materials; none connects a particular generator to the source keys2015. Matrix of statements: EVIDENCE.csv - an artifact of the initial study (`EVIDENCE.csv`Numbers and coverage: [NUMERIC_REPORT.md](<NUMERIC_REPORT.md>), AUDIT_SUMMARY.json - an artifact of the initial study (`AUDIT_SUMMARY.json`; outside the picture.

## Direct messages and archives

The account `saatoshi_rising`, UID991321, Current profile and search by author in Ninjastic They show one message: [27 April2017, msg18765941](https://bitcointalk.org/index.php?topic=1306983.msg18765941#msg18765941)The proprietary text describes the serial keys of a deterministic wallet and the masking RNG, operating system, length seed And the derivation route is unnamed.

The only program named here is **Large Bitcoin Collider**, This confirms familiarity with the project, at least in terms of knowledge about it, but not the use, participation in the development or use of its generator Wayback-postcard2020–2026 give the same normalized own text: comparison - an artifact of the original study (`ARCHIVE_COMPARISON.json`Archival profile pages are checked separately; the absence of other posts in the available index does not prove that there have never been deleted publications.

Forum account signature and proof of key control are different things1CEND...the block time04:29:12UTC27April2017, a message -06:41:08UTC. The subsequent July redistribution is consistent with the promise, but is not in itself a cryptographic signature of this text.This is not grounds to declare an account false; it is a limit of certainty when linking further traces.

## Accurate matches that have been verified

**173uj.. BlockCypher Java.** The parent of the original funding uses this address `BlockCypherTest.java`; [commit8February2016](https://github.com/mmazi/blockcypher-java/commit/9297c9ae0b487da253c9d2c7b886be7d33877964) The test doesn't have a private key, and it doesn't sign anything with that address Puzzle. This is a real match of public test data, but not evidence Java in the set of the author; even the ownership of the parental address to the author himself is not established.

**№1 and bitcoinjs/BIP21.** In an early topic, the assumption was found on the demo address from fixture; [neighbourhood](https://bitcointalk.org/index.php?topic=1306983.msg13412913#msg13412913) He says that this is a well-known scalar1. The mention of such an address does not identify the creator or his library, and similarly, small keys and their uncompressed addresses may have been used by many people before Puzzle.

**Bitstamp/BitGo.** Neighboring100BTC parental transaction9b11…:2 later spent in2-of-3 multisig; WalletExplorer assigns to the recipient Bitstamp. [Official communication Bitstamp9January2015](https://blog.bitstamp.net/post/bitstamp-is-open-for-business-better-than-ever/) confirming the implementation BitGo It's the side of the neighboring payment, not the creator's installed program Puzzle. The recipient label does not make the sender an operator Bitstamp/BitGo.

**Python, MT19937, Electrum, BIP44 in discussions.** The examples found are from researchers and solvers [topic Seed bruteforce2024](https://bitcointalk.org/index.php?topic=5489247.0) paths entropy They're listed as assumptions. They can't be converted into a historical confession by the author [Russian theme23January2015](https://bitcointalk.org/index.php?topic=932434.0) amaclin expressly denies the creation of a transaction; Bulista Later, he describes his own search bot, and their software preferences are not transferred to the creator.

**Incoming messages to addresses.** Late OP_RETURN mentionably CPU And the requests for help are signed by senders of small transfers to known addresses, and they don't indicate the recipient's owner's programs ECIES-ciphertext SEC-key2023 is also available to any sender and does not prove the use of ECIES recipient.

**Another site with the same name.** Page viewed`saatoshirising.wiki` Claims authorship and offers the key71 behind5000No verified link to the account or source keys, her statements are not included in the copyright case, no payments and no contacts have been made.

## What Really Limits Software Options

From the ones we've tested E5 Signatures Received Counters: Disclosure2019 contains **11high-R from21**, replenishment-training2019 —1from1; all these signatures low-S. E5 previously established the exact baseline RFC6979/HMAC-SHA256 for15 Signatures of known disclosure keys. This is not a new result of recovery nonce; A new comparison here is with the historical ways of signing.

V Bitcoin Core0.17.0 [`CKey::Sign`](https://github.com/bitcoin/bitcoin/blob/v0.17.0/src/key.cpp) pick up low-R upon `grind=true`; this is the default value in`key.h`eh `script/sign.cpp` He's calling it in without turning it off. **This standard path could not create observables high-R signature2019.** The exception relates to the way of creating a signature, not to Core collector/to the transmitter of a transaction already signed Core, Modified assembly, external signature and other libraries are still possible.

To verify historical compatibility read **Electrum3.3.4 from13February2019**, I mean, before disclosure. [`ecc.py`](https://github.com/spesmilo/electrum/blob/3.3.4/electrum/ecc.py) Uses a deterministic signature SHA256 normalization low-S, without low-R cycle; also checked`ecc_fast.py`It's compatible with observation, but it's not unique to the world Electrum: same key and sighash They can do the same thing in a number of libraries Python, The OS and the original generator version are not derived from this.

Early reading3.3.6 used as a pointer; the historical conclusion is fixed3.3.4, Not beyond a later release/execution of historical wallets was not carried out here: the source of the path was checked, and the cryptographic basis was taken from the accepted E5.

Transaction version2 meet up2017, not first time2023. Compressed points2015, plug-in2017 and SegWit2023 Compatible with different tools, imports and settings changes; they do not form a single wallet update history.

## A working list of programs without fictitious probabilities

| The family / role | What an audit does | What remains unknown |
|---|---|---|
| LBC | Named author's account | Was it a user, especially a generator? |
| Electrum, signing2019 | Compatibility with a specific release3.3.4 | Whether it was used at all; the connection with2015 |
| Core0.17, signature-making | High-R rule out a proven path | Core older, external signatures, broadcaster not excluded |
| Electrum old / BIP32, Armory, Casascius, other deterministic libraries | Historical candidates of previous E8/E9; There are no new direct references | Program, version, seed diagram |
| Python MT19937 / BX C++ | In the available reports - research hypotheses | Copyright use is not established; old negative tests retain the same boundaries |
| Java BlockCypher / bitcoinjs | Exact public test matches explained | The connection with the personal set of the author is not proven |

Statement "almost certainly" Electrum1.9, because BIP32 “Not yet” is not being tested: [`wallet.py` Electrum1.9.8](https://github.com/spesmilo/electrum/blob/1.9.8/lib/wallet.py) contains BIP32-Date of release Electrum2 The prominence and usability of a program is not a substitute for proof of use by an individual.

## Completeness and continuation

Final building: 16 169 archival reports of the main topic; 21 The exact inter-thematic request returns 441 message 53 The current forum is additionally presented 364 pagewise / 7280 After the merger, 16 341 unique post_id and 18 267 Versions of the text 284 search identifiers automatically selected 200 Priority versions for analysis; this is not 200 There is independent evidence in the current building 30 Messages that are not available in the issuance of the archive of the main topic: even full receipt API This does not make it an exhaustive archive of the forum.

Additional Attribution Traps Discussed in EVIDENCE A18–A20: comment RNG author's code 2025 of the year; late confident statements about Electrum/Bitnik without initial confirmation; experiment by another creator of the test problem, where it was actually used Electrum. None of these are new messages saatoshi_rising.

The complete passage refers to **The main theme is available in an accessible API archive**, uniquely post_id and reconciliation total; individual current pages and Wayback The cross-theme exact queries cover the entire index API, Search results, index date, current page and original message date vary. New records, deleted prior to archiving, closed sources and unindexed attachments are not covered. Errors HTTP and incomplete current pagination are listed in machine artifacts, not called negative finds.

The next reasonable step is a small comparative laboratory **historical signatory2017/2019** known E5 keys and the same sighash: exact signatures, low-S/low-R, This may rule out additional standard configurations, but does not promise to define a generator2015. Separate archival progress will require a new primary artifact: a signed message, an original script with a verifiable history, or an early mention of a then nonpublic technical identifier seed-Extension from this audit was not received.
