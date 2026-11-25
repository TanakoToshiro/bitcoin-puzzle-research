> English machine translation of the [Russian source](<../../../../ru/reports/experiments/bx-mnemonic-cuda-20261103/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# BMC-01C - Completed the full test BX mnemonic-path

**Full source domain `[0, 2³²)` vetted: candidates 0, mistake 0.**
Date: 03.11.2026, Europe/Moscow. The result excludes only 20
registered schemes of new codec-path given RNG/indexes/Mask.
Neither the author’s program nor the inapplicability of all BX-The wallets are not set up by this.

## Actual coverage

| Category of reference MT seed | Number |
|---|---:|
| Totally uint32 seeds | 4,294,967,296 |
| Modified permissible seed, new HD-calculation | 375,652,270 |
| Unchanged, already covered E15 | 2,557,460,402 |
| Oddly hex, formal BX reject | 1,361,854,624 |
| Even hex, less 16 byte, BX reject | 0 |
| New seed×scheme | 7,513,045,400 |
| Full blocks on 2²⁰ | 4,096 |
| Filter No. candidates50 / mistake | 0 / 0 |

The sum of the categories is equal 4 294 967 296, pass-through/No replays changed_valid
all over the domain **8.74633598%**. That's the starting number RNG-states,
It's not the proven number of unique wallets 20 variants
applied to each of these seed; Removal of other categories checked
historical binary audit precise GPU/CPU-by comparison.

Chain: Windows BX 2.0.0 uint32 → MT19937 → 32 outputs %255 → 8 BE uint32 chunks
→ unpadded hex each chunk → strict hex parser → 16…31-byte seed → BIP32.
The allowed modified string contains an even number hex-symbolism 32 before 62.
BIP39/PBKDF2 Parents are absent m, m/0, m/0'/0, m/0'/1 s normal/hardened
final i−1/i; m/44'/0'/0'/0 and /1 s normal final i−1/i.
Exact list - artifact of the original study (`compact/SCHEMES.json`; outside the picture.
Mask 2^(i−1)+(raw mod 2^(i−1)); The order and omissions of the numbers did not change.

## Speed and completion

- First adopted kernel: 879,398 baseline seed/s,
  forecast 81.40 min code/controls/pilots
  preserved baseline; They didn't have a full passage.
- Tight changed_valid worklist Save the same calculations and passed the acceptance
  Again: 7,293,829 seed/s in five pilot groups,
  acceleration 8.29×,
  forecast 9.81 min.
- Factually wall-time invocation full passage: **9.67 min**.
  It includes block/checkpoint IO and misses the ones already calculated 20 pilot units.
- Sum API-timelessly 4096 adopted blocks, including reuse pilot:
  7.30 min; CUDA events 6.96 min.
  These numbers don't add up to invocation wall.
- Clearly highlighted data GPU block 2²⁰: 42,500,120 byte
  (40.53 MiB), besides context/module overhead.
  GPU: RTX 3070 Ti Laptop, CUDA 13.2. Cloud leases were not used.

20 The search pilot blocks were reused as artifacts, without new ones
computations, and enter into 4096 exactly once hashes equality of results
Checked separately. Synthetic controls and classify-only Measurements are not included in the coverage.

## Acceptance and independent audit

CUDA peered 12 473 MT seeds / 399 136 words, to all the boundaries of the source blocks,
native decoder traces all hex-length 8…64. Variables checked master lengths,
17 standard BIP32 vectors, 180 native HD cases, SHA/HMAC/EC/scalar-add,
precise HMAC messages And the leading zeros scan posture 20 cross-reference
s affine CPU The tests included the intervals 20 positive / 20 negative
synthetic cases, verifier training/holdout controls, many candidates/overflow,
invalid HD builds, complete last block and domain bounds. Everyone's gone.

Runner tested stop/resume, non-repetition of finished blocks, damaged/circumcised
checkpoint, modified inputs, Competitive blocking, error and candidate stop.
Errors are not counted as negative results.

After completion of the separate Linux audit and separately implemented Windows
readback check out 4096 ranges, SHA-chain, 4 categories,/inputs/acceptance
and origin. Windows readback check out 33
input hashes, 40 acceptance hashes and
940 origin hashes. Old ones BMD/E15 Artifacts preserved.
COMPLETE - an artifact of the initial study (`compact/COMPLETE.json`; outside the picture), Windows readback - an artifact of the initial study (`compact/status-reviews/windows-readback-1793660048600239400.json`; outside the picture),
Controls - an artifact of the initial study (`compact/CONTROLS.json`; outside the image), the pilot - an artifact of the original study (`compact/PILOTS.json`; outside the picture.

## Conclusion Bitcoin Puzzle

No new one seed Didn't even match up with 49-bitten training-filter50. Therefore,
Candidates to check for all Nos1–50 It didn't appear real holdout №51+ not
New real ones were also used private keys/No bits received.

**Confirmed decoder error does not explain known sequence
Puzzle these 20 combinations.** Their further re-examination is not necessary.
Other paths, generators, masks, orders or custom compositions outside of this
No automatic expansion was performed on them.
