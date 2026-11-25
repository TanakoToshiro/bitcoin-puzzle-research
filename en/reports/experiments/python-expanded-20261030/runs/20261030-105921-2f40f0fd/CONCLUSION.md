> English machine translation of the [Russian source](<../../../../../../ru/reports/experiments/python-expanded-20261030/runs/20261030-105921-2f40f0fd/CONCLUSION.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../../README.md>) · [Direction](<../../../../../topics/01-historical-generators.md>) · [Documents of the series](<../../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../../docs/LATEST_RESULTS.md>).

# E2b: full-scale Python finished

Launch `20261030-105921-2f40f0fd`. **All 4 294 967 296 wholesome seed tested 120 Not one of them has reproduced the known keys1–12.** Therefore, none of them will reproduce all No1–50/Deferred decisions in these schemes.Candidate No71, a certain unknown bit, or XOR Not received.

## What's expanded on the pilot?

| Indicator | E2 | E2b |
|---|---:|---:|
| Various integer seed | 1 048 576 | 4 294 967 296 |
| Share of space seed32 | 0,0244140625% | 100% |
| Methods of obtaining the key | 256-bit-value/words randrange(order) | Also variable width getrandbits straight randrange range |
| Initial passes 32-bit-outs | 0 | 0, 1, 8, 16, 32, 64 |
| Step | 1/2 | 1/2 |

E2b contains 120 physical configuration API/step/The same behavior of the two versions is not recalculated as different families.Full specification: Frozen protocol is an artifact of the original study`code/PROTOCOL.md`Number of inspections seedScheme: **515,396,075,520**; It's not so different seed It's not so much independent hypotheses E2 Repeated as part of the combined scanner and not added to the shared space.

## Verifiability

- 518 400 Historical values are compared with independent Python-arithmetic 135 successive puzzle; 57 594 Available prefix values are checked CPU/GPU. Two overflows of the bounded buffer in the vectors are clearly marked and agree on CPU/GPU.
- All 120 synthetic circuits have been restored seed 42421 on CPU, on GPU. Negative observations, overflow transmission instead of discarding and extreme seed 2^32−1/2^32.
- 1024 Non-intersecting blocks are precisely covered `[0,2^32)`everyone has SHA-256. Rolled 2061 Launch artifact hashes.
- Checked out stop/Continuation from one finished block and repeated resume Completed Launch: All 1024 The block is skipped, hashes and change time are saved.
- On isolated copies, the deviation of the damaged checkpoint, repeated interval and changed inputs; exceeding the capacity of the list of candidates disables the entire GPU-Artifact - artifact of initial research (artifact)`INTEGRITY_CONTROLS.json`; outside the picture.
- Acceptance - an artifact of the initial study (`ACCEPTANCE.json`; outside the image), machine coating - artifact of the initial study (`SUMMARY.json`; outside the image), intermediate journal - artifact of the original study (`EVENTS.jsonl`; outside the picture), controls - artifact of the initial study (`../../validation/VALIDATION.json`; outside the picture), [history](<../../NOTES.md>).

The amount of time inside the scanner: **579.997 s**; involves computing, allocating memory and transmitting results, but not running the process/CUDA-Context and reporting: Sum of sessions supervisor, Including the interrupted notes of the journal: **1668.593 s**. From creation ID to the last block: 1793.530 (c) including management pauses/Validation is specified separately in validation. GPU - local RTX 3070 Ti Laptop; indicators MT-The scanner cannot be compared to the speed of the search Bitcoin-addresses.

One session was interrupted due to temporary blocking Windows substitute SUMMARY.json. All the finished blocks were preserved. The sequel used a re-write wrapper, an artifact of the original study`continuation/resume_robust.py`; outside the image without changing the frozen computing code/Number of blocks already saved without subsequent recording block-complete into EVENT because of the interruption: 1; Their hashes and coverage are file-checked. It's an operational reporting error, not a negative result.

## Additional substantiated conclusions

1. **Windows CPython 2.7.9: covered and incomplete seed, hash-reducible**, including the lines and float. The source reduces them to unsigned long from 32 That's why it's a total brute integer seed32 covers all such conditions for the corresponding 96 scheme Python 2.7.9. It's a conclusion from the source, not execution Windows runtime And not too much dictionary. [Exact proof and limitations](<../../SEED_DOMAIN_AUDIT.md>).
2. **Three specific float-designs are excluded for any seed** The first is the opposite of the first2, second56, third54. Formulas, output boundaries and code: [calculus](<../../PRECISION_EXCLUSIONS.md>).
3. **Neighboring Python 2.7.8 and 3.4.1 They have the same algorithms used**: at 2.7.8 both files are identical by chance, 3.4.1 matching C-kernel AST the methods invoked, and the difference in the wrapping refers to the unused triangular(). This is a transfer to the source, without separate execution runtime: [comparison](<../../ADJACENT_VERSIONS.md>).

## What stays open?

Normal is not excluded seed(None) with systemic entropy, large integer seed, fallback int(time.time()*256), linear seed Python 3, 64-hashes Python 2 on Linux, other initial displacement/outflow, reseeding between tasks, other conversions and versions. Direct low-level _random.Random(None) flips seeding; It cannot be identified with the wrapper random.Random(None).

The next meaningful step requires a separate final hypothesis. [List of future experiments](<../../FUTURE_EXPERIMENTS.md>) includes untested bytes/symbolism, other rejection sampling, reseeding large-scale seed. Expand the old one integer range 120 No more diagrams are needed. seed32 It's already covered. There's no useful signal available HASH160, Neither its impossibility follows from this result.
