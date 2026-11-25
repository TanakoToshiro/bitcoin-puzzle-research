> English machine translation of the [Russian source](<../../../../ru/reports/experiments/signature-point-relations-20261111/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/05-signatures-and-provenance.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SIG-01 Signatures, Public Points and Operations

11 November 2026 Five checks on the received image E5 from 30 October and the saved comparisons E11. The main calculation took 38,82 Seconds, independent verification 10,01 All in a second 48,83 half-seconds 900 Measurements are an artifact of the initial study`runs/main/OUTER.json`; outside the image), audit - artifact of the original study (`AUDIT.json`; outside the picture), the boundaries of the checks - an artifact of the original study (`PLAN.json`; outside the picture.

## 1. Links nonce-point

For everyone 324 signatures re-extracted `r, s, z, Q` from raw-Transactions and parental outputs restored full points `R = s⁻¹(zG + rQ)`Independent affinity arithmetic confirmed both coordinates of all 324 Checks take into account the equivalence of signs in normalization S. [RFC 6979, §2.4](https://www.rfc-editor.org/rfc/rfc6979.html#section-2.4).

| Accurate verification | Volume | Coincidences |
|---|---:|---:|
| HASH160 both SEC-serialization `±R` dictionary 256 source-addresses | 1 296 request | 0 |
| `Rᵢ ± Rⱼ = δG` upon `abs(δ) ≤ 65 536` | 104 652 sign-check | 0 |
| `Rᵢ ± mQⱼ = δG`, `m = 1,…,8`same limit `δ` | 979 776 sign-checking 189 pointwise | 0 |
| `Rᵢ = ±(Qⱼ ± Qₖ)` for two different points of the same transaction | 9 806 templates 324 search | 0 |

Search HASH160 include71. In the relationships found, the limits on secrets missing from the archive are zero`runs/main/01_NONCE_POINTS.json`; outside the picture.

## 2. Discussion 87 discrepancies RFC6979

Effective nonce everyone 218 signatures with the published secret are independently verified with the restored points RFC6979/HMAC-SHA256 reproduced 131 nonce with regard to the mark, including 15 from 15 known signatures of disclosure 2019 Among the remaining years 87 **45 signatures accurately reproduced by DER** matching low-R from Bitcoin Core 0.17.0. This is a re-confirmation of records E11. These are 45 Signatures refer to ten keys and blocks 2019–2026 Coincidence establishes the compatibility of the signature path. Authorship remains undetermined. [Previously verified source Core](https://github.com/bitcoin/bitcoin/blob/v0.17.0/src/key.cpp)comparisons E11 - an artifact of the initial study (`../historical-signers-20261101/COMPARISONS.json`; outside the picture.

Remaining 42 cost-related Puzzle №2–46 January 2015 For every one of these keys, there's one remaining discrepancy 19 They're in the original funding block. The block time records the transaction's turn on nonce These signatories remain open.

| Check on the remaining ones 42 | Volume | Outcome |
|---|---:|---|
| RFC6979 s HMAC-SHA1, SHA224, SHA384, SHA512 | 168 candidate | 0 |
| The following accepted flow candidates RFC6979 | 16 signature | 0 |
| 32-byte-addition 0–255 in three representations with the removal of doubles | 32 172 candidate | 0 |
| Length of the smaller `k, n−k` | 42 significance | minimum 250 bit |
| General 32 bit in the same position or 64 a bit at arbitrary positions within a transaction or key | 31 couple, 124 sign | 0 |
| Recursion degree 1 or 2 neighbourly vin transaction | 4 linear 2 square windows, 128 signage | 0 |

For each recursion, the coefficients are determined by the first window transitions. The two subsequent transitions serve as an accurate check vin - the observed sequence for this test nonce It's still unknown. It's a supplement LE32 and BE32 beginning 32-byte-block BE32 At the end of it, the remaining bytes are zero. The key, date and transaction breakdown is an artifact from the original study`runs/main/02_NONCE_CLASSIFICATION.json`; outside the picture.

## 3. Sufficiency of signatures of one key

Table compiled 189 different public keys with a number of sighash, origin, dates and identifiers of signatures **106 keys without a known secret in the archive** There's exactly one signed message available 83 keys with a published secret 31 There are at least two messages, 10 - at least four, y 8 - at least five, y 6 - at least six 33 message66. Table CSV - an artifact of the initial study (`runs/main/03_SIGNER_GROUPS.csv`; outside the picture), full groups JSON - an artifact of the initial study (`runs/main/03_SIGNER_GROUPS.json`; outside the picture.

For Polynonce degree-recursion `D` requires at least `D+3` The common bit method requires multiple signatures of the same key and a base for a common bit structure nonce. In unclassified archival groups, both applicability checks are stopped by the number of messages. [Polynonce](https://kudelskisecurity.com/research/polynonce-a-tale-of-a-novel-ecdsa-attack-and-bitcoin-tears), [Adamoudis, Draziotis, Poulakis](https://arxiv.org/abs/2307.03979).

## 4. Unified map of historical operations

Five transactions, inputs and parent outputs are verified Puzzle-The positions matched the order of the initial outputs after filtration 11 The relative order of the sequences is the same.

| Operation | Precise binding |
|---|---|
| Financing 2015 | All 256 numbering `vout = i−1`The sum of each output is equal to `100 000 × i` sat |
| Redistribution 2017 | The first 96 inputs are expended vout 160–255 And then there's the extra entrance. The exits are No1, №53–160 summarily `900 000 × i` sat |
| Preparation of disclosure 2019 | №1, then65, 70, …, 160. Each 21 gateway 1 000 sat |
| Disclosure 2019 | 20 Puzzle-escaping vout 1–20 And then there's an extra entrance, and the only exit leads to No1 |
| Replenishment 2023 | №1 and 84 subsequent numbers in the original order `9 000 000 × i` sat |

**Composition of exits 2017 and 2023 It was exactly the same as one observed rule.** All original exits No. selected1–160, Not yet spent in the corresponding block, plus No1. It worked 108+1 and 84+1. There was no expenditure of the initial outputs from this range in the border blocks themselves, and this test is formulated on historical operations and checks the observed composition of their outputs.

All outputs of the five transactions are compared with the original Puzzle-Repeated exit assignment No1 It's still undetermined 400 000, 2 000 000, 79 000, 269 000 and 1 000 000 sat The original transaction has a version 1, others - version 2. All of them locktime It's zero, all the inputs sequence equal `0xffffffff`. Witness present 2023 years.

Sorting by sum allows for an observable order, including equal amounts in preparing a disclosure 87 paired inversions by output comparator BIP69. The verified parity and multiplicity partitions of the five do not provide a general rule for all six sequences. The map obtained describes the positions in the transactions. Internal branches, generation order and initialization time remain unknown. Map, sums and comparators are artifacts of the original study`runs/main/04_HISTORICAL_ORDER.json`; outside the picture), [BIP69](https://bips.dev/69/).

## 5. The exact relationship of public points

Covered 184 Puzzle-points and five additional public keys of signatories of reference transactions 70 point1–70, 18 point75–160 and 96 point161–256. Nana 17 766 The pairs have been tested for equality, opposite and `Pᵢ ± Pⱼ = δG` s `abs(δ) ≤ 65 536`For multipliers 2–16 both signs checked.

Found 240 small differences and six exact multiplicities. **All 246 Contradictions to published keys No1–17.** There are no equalitys and opposites between different points. There is no coincidence between historical groups. Independent scalar arithmetic reproduced everything 246 Conclusion is limited to verified public points and selected catalogue of formulas. List of relationships - artifact of the original study`runs/main/05_PUBLIC_POINTS.json`; outside the picture.

Hashes verified 312 The calculations were done with the saved files raw-bytes and tables E5. To repeat the five tests, use a research method Python and `run.py` Sources and hashes are an artifact of the original research`runs/main/INPUT_PINS.json`; outside the image), the launch code is an artifact of the original study (`run.py`; outside the image), the independent reconciliation code is an artifact of the original study (`audit.py`; outside the picture.
