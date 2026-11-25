> English machine translation of the [Russian source](<../../../../ru/reports/experiments/bx-windows-mnemonic-decode-20261103/SEARCH_SPEC.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# BMD-01: final new version prepared after binary controls

Object: public Puzzle. Confirmed real CLI-composition
BX2.0.0 Windows x64; The connection of the program with the author is still not established.
Complete search and measurement GPU-The pilot did not perform this test.

## Exact chain and many new ones inputs

```text
uint32 s ∈ [0, 4294967296)
→ MT19937(s), первые32 uint32 outputs %255
→ 32-byte E
→ mnemonic-encode (8×3 слова)
→ mnemonic-decode (нефиксированная ширина hex каждого uint32)
→ строгий hex parser, hd-new minimum16 bytes
→ BIP32, 20 схем E15 для исходной entropy32
→ младшая puzzle-маска
```

Exactly equivalent abbreviation for correctly generated words:

```text
H = concat(format(BE32(E[4j:4j+4]), 'x') for j=0..7)
```

Zero is encoded by a single symbol `0`Considering something new HD-family
upon `len(H) ∈ {32,34,…,62}`. HD seed equal `bytes.fromhex(H)` (16…31 byte.

The remaining classes are excluded **before HD**, Separate counters:

- `len(H)==64`: entropy Not changed, the scheme has already been covered E15;
- odd length: official hex parser rejects;
- even-length<32: formal hd-new dismissive128 beat.

The classes must sum up the entire range of references viewed RNG seed.
Do not declare the number of new states equal to the size of everything uint32-domain and not
judge136 historical seed. V future full-run baseline
The domain is still used for classification HD only performed
into changed_valid-Possible conflicts of the converted seed don't
search is erroneous and do not give the right to skip unverified RNG state.

Important controls: `01234567` and `0abcdef0` internal chunks lose one
hex-Total loss2 even, but subsequent byte boundaries They're reassembling.
Removing only whole null bytes from the chunks is an incorrect optimization.

For the reference entropy16 There is no new class: any shortening or
odd hex, either<16bytes; length-extend16 equal E15.
Woo32→16 Transformation cannot be automatically discarded E15
length16: received16bytes usually not equal to the first16 baseline entropy.

## Exactly20 HD-scheme

SCHEMES.json - an artifact of the initial study (`SCHEMES.json`; outside the picture) - bybyte the same fields20 lineage E15 s length32,
baseline id20…39 preserved. `length:32` length **before codec**;
lengthless master seed variable16…31 It's not complemented by zeros anywhere.

| Parent | Final child | Index |
|---|---|---|
| m | normal/hardened | i−1 / i |
| m/0 | normal/hardened | i−1 / i |
| m/0'/0 | normal/hardened | i−1 / i |
| m/0'/1 | normal/hardened | i−1 / i |
| m/44'/0'/0'/0 | normal | i−1 / i |
| m/44'/0'/0'/1 | normal | i−1 / i |

This is a research set, not a staff configuration/pick-off BX.
Index puzzle i retained with passes; mask =2^(i−1)+(raw mod2^(i−1)).
Filter of the future search:49 lower-bit training№50, then1–50.
Holdout№51+ only after training-Candidate, synthetic71 into controls
They do not use the real thing holdout data.

Invalid master/child Makes the block unfinished with an error; do not take it
to source-level reject and don't shift the index. Any candidate saves first
referenced RNG seed, E, H, effective seed and scheme ID, independently
count CLI/affine reference. Buffer overflow - block error.

## What's ready, what else is needed for production search

- `search_reference.py`: transform, MT→entropy, BIP32/SEC independently
  affine arithmetic,20 There's no dictionary in hot path; equivalence
  The formulas for the dictionary and real binary paths have been tested.
- `block_reference.py`: limited CPU worker≤4096 states; explicit categories,
  variable master length, abandonment overflow/invalid HD. The real thing targets
  Not in the code. `BLOCK_CONTROLS.json`: targets taken from native binary traces.
- Before the full passage: transfer only this one transform/predicate and length
  (c)a new copy of the adopted CUDA HD-code; check the intermediate bytes/knots,
  everything20 planted-positive/negative, extreme seed/blocks, candidate buffer,
  checkpoint corruption/stop/resume/concurrency and independent verification of candidates.
- After you've taken it,3–5 Dispersed pilot blocks after warming up, measure
  RNG+codec, HD and wall/IO, share eligible, GPU memory. Then give it a real one
  cost `[0,2^32)`Speed E15 and46 seconds native controls not
  That's the estimate. The cost is now **measured**.

Full-fledged search runner s checkpoints/GPU Not in the current folder; CPU worker
not declared ready for unattended full-run. No real states
filtered Puzzle The new area is narrow and reasonable
Binary behavior, so the next reasonable step is to CUDA-acceptance
And the pilot, no new ones RNG,passphrase,dict-order,masks or path extensions.
