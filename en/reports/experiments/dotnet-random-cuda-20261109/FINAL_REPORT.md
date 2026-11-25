> English machine translation of the [Russian source](<../../../../ru/reports/experiments/dotnet-random-cuda-20261109/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# DN-G01 — GPU-historical System.Random

9 November 2026, Europe/Moscow. **Transfer completed and accepted NVIDIA GeForce
RTX 3070 Ti Laptop GPU. All previous historical vectors and 33 synthetic
matching CPU. The speed of five new pilots 34.37 million seed/s
posture CUDA-event time, 33.47 million seed/s API. All 16 scheme
They're treated simultaneously seed-The space didn't start.**

## Preserved model

Same ones 16 scheme DN-R01: NextBytes/Next(256), big/little endian, stride1/2,
phase0/1. Source: Official System.Random from 12 November2014; CPU-snapshot
his 482 The file is saved unchanged. Train: decision-making1–50;
holdout:33 published decisions above50. Passes don't shrink, expense32
doorways raw-The author's communication Puzzle s C# It's still undetected.

One CUDA thread correspondent seed. For all schemes used
For each call number, the tables contain diagram masks
o rejects by the observed byte. Generator calls are not allowed; after
excluding all flow schemes seed It's over.

Unchecked Int32 implemented uint32 modulo2^32 and a clear iconic beat.
Signed overflow C++ It's not used. Next(256) twofold double-multiplication
rounded RN and the transformation to the whole with truncation; fast-math
The semantics of these primitives are described in [CUDA Double Intrinsics](https://docs.nvidia.com/cuda/archive/12.4.0/cuda-math-api/group__CUDA__MATH__INTRINSIC__DOUBLE.html)
and [CUDA Type Casting Intrinsics](https://docs.nvidia.com/cuda/archive/12.3.2/cuda-math-api/group__CUDA__MATH__INTRINSIC__CAST.html).
Seed2147483647 included; it cannot be replaced seed0, as established DN-R01.

## What's tested

- 40 signed seed ×8704 Exit for each of the three streams: InternalSample,
  NextBytes, Next(256). All 1,044,480 matching
  historical C#-reference.
- Complete sets GPU-coincidence33 synthetic ranges coincided with
  CPU, range2^20. Python checked out train and holdout.
- For256 seed matched16-It’s not just the number of candidates.
  Mutation train-The bit is separately rejected for each of the16 schemas.
- Zero length ranges, one seed,129 seed, partial CUDA-block
  border2^31 Checked with each mask, the wrong range is rejected
  and Python-wrapper, and C ABI.
- Primary64 seed and buffer capacity4 counter64, result
  `incomplete_overflow`; checkpoint You don't make a completion. You don't make a mistake
  It turns into zero candidates GPU return
  seed+mask, then Python pairing seed/circuit.
- Renewal does not change finished files; live flock prohibits parallel
  runner; The pilot is imported without re-entry kernel. Complete interval plan
  [0,2^31) arithmetically verified, **The search for this plan was not carried out**.

Artifacts: CONTROLS.json - an artifact of the initial study (`CONTROLS.json`; outside the picture), VECTOR_CONTROLS - an artifact of the initial study (`VECTOR_CONTROLS.json`; outside the picture),
BOUNDARY_BUFFER_CONTROLS - an artifact of the initial study (`BOUNDARY_BUFFER_CONTROLS.json`; outside the image), audit - artifact of the original study (`AUDIT.json`; outside the picture.
Mistake in `controls/overflow-checkpoint/ERROR.json` It's intentionally created by a test.
During the normal control procedures/pilots CUDA-There were no mistakes.

## Pair comparison with CPU

Repeated exactly three ranges2^18 from DN-R01. It's transfer control and
Time comparison; repetition is not considered a new unique coating.

| Block | CPU, s | GPU kernel, s | CPU/kernel | CPU/GPU API |
|---|---:|---:|---:|---:|
| 0 | 1.235 | 0.007926 | 155.8× | 142.9× |
| 1 | 1.220 | 0.007991 | 152.6× | 141.2× |
| 2 | 1.231 | 0.007992 | 154.0× | 137.9× |

CPU-values retained from DN-R01 It's the same car. The measurements are single
non-simultaneous relationships are not statistical trust
spacing. GPU API include/copying of output buffers and
synchronization, but not loading the filter and startingWSL.

## New pilots

| Block | First seed | Seed blockwise | Kernel, ms | API, ms |
|---|---:|---:|---:|---:|
| 0 | 268,435,456 | 1,048,576 | 30.506 | 31.297 |
| 1 | 269,484,032 | 1,048,576 | 30.483 | 31.277 |
| 2 | 270,532,608 | 1,048,576 | 30.488 | 31.400 |
| 3 | 271,581,184 | 1,048,576 | 30.502 | 31.196 |
| 4 | 272,629,760 | 1,048,576 | 30.555 | 31.454 |

All five new ranges are non-overlapping0. Unique
testedGPU 6,029,312 seed: former786432 new5,242,880.
Coverage -- **0.280762%** from2^31; That's not enough to exclude
16 No new keys or bits. PILOTS.csv - an artifact of the initial study (`PILOTS.csv`; outside the picture),
machine summary - an artifact of the original study (`NUMERIC_REPORT.json`; outside the picture.

## Resources and forecast

GPU: NVIDIA GeForce RTX 3070 Ti Laptop GPU,8GiB, compute capability8.6. Assembly CUDA13.2,
`-O3 -arch=sm_86 --fmad=false`,128threads/block. The scanning core uses
76 register/thread; attribute localSizeBytes
equal0. It's not a measurement of the full VRAM:
contextCUDA and service expenses are not included in the amount of explicit buffers.
metadata GPU.json - an artifact of the initial study (`GPU.json`; outside the picture) and BUILD.json - an artifact of the initial study (`BUILD.json`; outside the picture.

Five short-haul pilots only have full time kernel roughly
**62.5 s**. With that in mind API and measured checkpoint leftover
The work is estimated at approximately **147.0 c2.45 mines**,
plus a single launchWSL, creationCUDA-context, loading the filter and
final independent audit. Cost checkpoint five-pointed
ranges, without repeating seed-search; median40.65Ms.

This is an extrapolation of a short pilot, not a measured full pass
Laptop power limitation, background tasks and file system can
increase the time GPU-Context is maintained between blocks; separate
launchWSL for every million seed prepared runner missing.

## Ready for full passage

The team is prepared in README. Runner Writes a new series, checks the code,
entrances and library, holdsOS-lock, Save the hash chain and stop
In case of a candidate or an error, the plan consists of2051 intervals:
8 testedGPU-ranges are imported, remain2043 new blocks.
The boundaries are further divided around short paired pilots
There are no passes or double counts, the candidate is independently vetted Python
posture50 train and33 holdout before any statement about the key.

A complete search **not yet launched**. After that, a separate check will be required
Accurate coverage and files, not just availability COMPLETE. GPU-transference
It does not add hypotheses about wallets and does not prove usage.NET author.
