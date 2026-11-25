> [Русский оригинал / Russian source](<../../ru/docs/METHODS_AND_LIMITS.md>) · [Language selection](<../../README.md>)

# Data, methods, and limits of inference

[Home](../README.md)

## What is observed

The main snapshot contains 83 known solutions: puzzles 1–70 and 75–135 in steps of 5. These are the published, complete Puzzle private keys, not fragments of those private keys. Partial observations arise only when hypothesizing a larger original raw value.

A frequently tested hypothesis is `key[i] = 2^(i−1) + (raw[i] mod 2^(i−1))`. The forced leading bit is not an observation of the generator. The mask is an assumption; missing puzzle indices are not compressed out of the sequence. The public point of a Puzzle key is not a substitute for the original wallet's raw public point.

[Public table](../data/puzzle-solutions/source.txt) · [Source URL, timestamp, and SHA-256](../data/puzzle-solutions/source.json).

## Reading result statuses

| Status | What it establishes |
|---|---|
| Complete negative search | Every member of the declared finite domain was checked for the specified schemes |
| Exact contradiction / UNSAT | No solution exists in the stated model; read the constraints and verification method |
| No signal detected | The selected statistics and sample did not confirm an effect; statistical power matters |
| Synthetic success | The method works under the stated control conditions, not necessarily on Puzzle data |
| Timeout / memory limit / UNKNOWN | The attempt did not mathematically resolve the question |
| Conditional recovery | Additional data, such as the authentic MPK or chain code, are required |
| Cycle completed | The plan was executed within its limits, which may include unresolved cases |

## General limitations

- The known keys have been examined repeatedly. A new split of the same dataset is not independent confirmation.
- Several signatures from one key are not several independent keys; their records must stay together when splitting data.
- Success with a small modulus, a stronger mask, or an interval around known ground truth does not automatically extend to the original scale.
- A nonce recovered using a known private key is a diagnostic quantity, not an available feature for predicting an unknown key.
- Arithmetic modulo the secp256k1 group order differs from arithmetic modulo a power of two.
- SHA-256 verifies a particular file version's integrity, not its scientific conclusions.
- A signature matching a program demonstrates compatibility with a signing path; it does not prove which generator was used in 2015.
- A missing file or inaccessible source is not a negative result about its contents.

Full protocols accompany the reports. [Document index](DOCUMENT_INDEX.md).
