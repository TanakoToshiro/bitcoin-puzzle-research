> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sx-cuda-20261101/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E12-GPU Complete passage of historical SX-scheme

The full range is verified for the eight recorded circuits. **Filter No. candidates50 — 0; No new keys or bits.**

| RNG | Blocks | Conditions | Conditions × 4 scheme | GPU API wall, s | State/s everyone 4 scheme |
|---|---:|---:|---:|---:|---:|
| gnu492 | 2048 | 2,147,483,646 | 8,589,934,584 | 291.368 | 7,370,358 |
| llvm350 | 2048 | 2,147,483,646 | 8,589,934,584 | 293.091 | 7,327,014 |

Totally 17,179,869,168 pair state×scheme, 4096 blocks; each RNG flat-cover [1,2147483647). The last block of each passage contains 1048574 state of affairs CPU/GPU-Full-pass pilots are not added to the cover.

Sum wall challenge GPU posture WSL perf_counter: 584.459 c9.74 Active time of two bundling launches on the same meter: 767.624 c. By markings UTC active launches have taken place 801.225 c; scale difference 33.600 c is stored explicitly, the exact cause is not established here API perf_counter, non-calendar pipeline. Calendar from the first start to completion: 15.34 mines, including a pause in recovery 119.225 Assembling and initial controls are not included in this interval. CUDA events They're kept separately.

## Controls and independent audit

Transferred sources and primitives fixed SHA256; baseline E12 checked 457 Files. GPU coincident 1173 historical RNG entropy/draws occasionally, 1173 master and 9384 child key/chain/public knots. GNU4.8/4.9 They have the same numerical variant and are not considered separate searches.

All eight planted-Models have been tested positively, negatively20 and holdout №135. Verified accurate normal/hardened HMAC bytes, EC/SHA512/HMAC/scalar addition, boundaries, targeted rejection, bits0, Buffer overflows that are involuntary master/child. Runner stop-checked/Continuation, immutability of completed blocks, damage, error, candidate and competitive blocking; GPU stop/resume passed for both RNG.

One bind failure: Windows/WSL suspending STATUS.json afterward 96 It's not the stored blocks GPU-Error and non-negative result stderr, proven chain and SHA256 These are the blocks, separate versions resume.py It repeats the file entry and reuses the pilots without overwriting; it passes three artificial failures CUDA, FINAL_MANIFEST all 96 The blocks remained unchanged after resuming stderr empty.

Independent Windows-Audit - an artifact of the original study (`audits/independent-windows-1793565291161593500.json`Outside the picture, I read it all over again 4096 The blocks, the ranges, the chain, input/manifest pins, the results of both passes, the source and the binding correction COMPLETE - an artifact of the initial study (`COMPLETE.json`; outside the picture) refers to the preceding WSL-Audit: Disassembly of the stop - artifact of the original study (art`status-reviews/resume-review.json`; outside the picture), versions - artifact of the original study (`ENVIRONMENT.json`; outside the picture), pilots - artifact of the original study (`PILOTS.json`; outside the picture), controls - artifact of the initial study (`CONTROLS.json`; outside the picture.

## Boundary of withdrawal

Only: GNU16807/LLVM48271, historical uniform_int_distribution, entropy32, parent m, children i−1/i normal/hardened, baseline puzzle-Mask. Holdout It was not used to select a model and was not required on real data: no state passed even the training filter50. Therefore, the verification of all known solutions for a real candidate was not launched.

Other versions are not excluded/platforms, MSVC uint16, source entropy, path, length, or transformation SX No new experiments with the author handoff They didn't do it E12/BX sources checkpoints Separate previously formulated directions are available for continuation; these eight passes with the same inputs are not required to be repeated.
