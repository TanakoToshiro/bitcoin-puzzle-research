> English machine translation of the [Russian source](<../../../../ru/reports/experiments/msvc-seed-audit-20261102/GPU_HANDOFF.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# The following separate series: MSVC/BX MT19937

It's a prepared task **non-immediate launch command**. Current SX/GPU Don't stop and don't load in parallel Puzzle It's not proven.

## Fixed mechanism

Official Windows x64 BX 2.0.0, commit aae99b278fdbfa31005cfa083ccbbf909212cbe4, December release 2014:

`uint32 seed → std::mt19937(single integer) → 32 выхода → каждый %255 → entropy16/32 → BIP32 → masked puzzle key`.

The domain `[0, 2^32)`including seed0 and seed0xffffffff. Block indices, calculation of the last seed and end must have uint64; keep out uint32 Before the boundaries are compared, preliminary results random_device The design is not an additional unknown parameter MT: The second, single word is used.

Exactly 40 circuitry SCHEMES.json. Parents m, m/0, m/0'/0, m/0'/1 normal/hardened i−1/i; BIP44 external/change normal i−1/i. Lengths 16 and32. It's not SX uniform neither GNU/libc++ minstd. Don't add other ways/lengths in the same passage.

## Implementation

One seed generalize 32-byte entropy, first16 They serve the second length 32 first MT-exits are enough 429 significance init (indexes)0..428); keep up33 and current j=0..31:

```text
y = (state[j] & 0x80000000) | (state[j+1] & 0x7fffffff)
x = state[j+397] ^ (y>>1) ^ ((y&1) ? 0x9908b0df : 0)
temper x стандартными 11/7/15/18 и масками 0x9d2c5680/0xefc60000
byte[j] = x % 255
```

Verified CPU-code: model_mt.py. Don't keep it full 624-word scattering by habit; compare register pressure/spills and the actual speed 33-word Storage does not guarantee the best occupancy - the pilot decides master general parent-between the diagrams; the former SHA/HMAC/secp256k1 carry over pins Into a new folder.

Filter: Junior49 bit50, then-independent CPU-check-in1–50. Anybody training-match retain seed, entropy, way, all intermediate; Stop the expansion and check for known numbers51+ independently affine-EC. Only after complete coincidence can the unsolved candidates be displayed and their addresses checked.

## Acceptance until full search

- BINARY_CONTROLS Historically, it is RNG; RNG_CONTROLS and 136 seed exploit GPU, add the boundaries of all blocks/topbit/0xffffffff.
- Check them both entropy/master/parent/final The key, not just the number of matches. 40 planted-positive and40 negative; Separate real data from synthetics.
- Check the full last block, overflow, stop/resume, damaged checkpoint Prohibition of re-execution of ready blocks.
- Check the standard BIP32-vectors and existing invalid-child/HMAC-check-up HD-Coda.
- Then measure a few blocks GPU: kernel time and wall pipeline, everything40 schemas without current SX-load.

Possible breakdown of —4096 block-wise2^20 seed, But choose the size after the pilot state×scheme =171798691840. The speed of the previous minstd-You can't move the aisles here. CPU Python-pilot176 seed/s everyone40 It's a benchmark, not an estimate GPU.

After the measurement, calculate the full term, select a reasonable local budget, only then run the full pass4090 requires a separate measure or an explicitly marked rough estimate; until the economic benefit is established.
