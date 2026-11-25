> English machine translation of the [Russian source](<../../../../ru/reports/experiments/bx-cuda-search-20261101/COSTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E9c Local transfer BX → BIP32 on CUDA done

01.11.2026, Moscow. RTX 3070 Ti Laptop, 8 Gib, sm_86. Exactly 16 diagrams of the initial hypothesis; GPU calculate entropy/master/parents and child №50, CPU check out training/holdout It's the search for a normalized initial state BX, non-sequential search of private keys Puzzle.

## Measured speed and full passage

| Metrica | Conditions/s 16 scheme |
|---|---:|
| Conservative: The whole process is external Windows Stopwatch | 629,826 |
| Main series: sum of states / totality pipeline wall time | 824,019 |
| Media of individual major batch | 822,859 |
| Minimum-maximum batch | 788,995–876,943 |
| Summarized CUDA-event timer | 804,481 |
| CPU E9b, 16 flow Ryzen 9 6900HX | 32,266 |

The external process has taken 240.37 c including initialization, calibration, recording JSON/hashes, telemetry and launch WSL. This is a deliberately conservative estimate of the work cycle, not the core maximum 144 batch and 183.24 measured pipeline; each batch check out 16 schemas. State–scheme/s flatly 16 more than once; they cannot be given out as states/s. GPU events consider only kernel; CPU-Checking candidates and copying included in pipeline. Real Survivors in Dimensions 0, coincidental 0; zero-price CPU-The test is separately tested with synthetics.

Acceleration relative to preserved CPU-bases: **19.52×** In conservative external time, **25.54×** posture pipeline. Complete passage 2147483646 states are extrapolated into **56.83 minutes** / **43.44 minutes** respectively, instead of 18.49 CPU-The full passage has not started; stability has not been measured for the whole time.

### Restricting timers

V 109 basic batch CUDA events exceed API wall time more 1%. The cause of the local discrepancy has not been established time.time_ns giver 812,622 states/s, external Windows Stopwatch Measure the entire process regardless of Python-timer WSL. So the primary number above is external, with the explicit inclusion of overhead CUDA time from wall time and call it the gear price difference: when the clocks diverge, it's incorrect [documentation NVIDIA](https://docs.nvidia.com/cuda/cuda-c-best-practices-guide/index.html), event timestamps clockwork GPU; It's not a diagnosis of the difference.

## Checks

Controls to the final series: 16 SHA512, 72 HMAC, 168 public-key/invalid-scalar, 135 scalar-add/invalid-child cases; 14 historical BX-vectors 80 parents 720 children; 4096 precise low49 comparison 256 states; 64 through synthetic script for all 16 The modified early filter is rejected by the GPU, modified training-observation CPU and is rejected there, corrupted holdout It's different from a complete coincidence. These artificial reconstructions are not finds Puzzle.

After the main series, the reception further compared everything 8256 low49 value 516 states in continuous and boundary batch, including multiple block size The length and end of the space, all matching the independent CPU-standard; 16 public keys plain Python-These additional tests were not used to select parameters and are not included in the speed statistics.

Borders checked, incomplete batch, invalid range and buffer overflow. Overflow is not counted as a negative block: after repetition with sufficient capacity, all returned 32 Expected recordings stop/resume: One block, then three more, then zero repeat computations; the tail has a 2 states. cryptographic/launch/async Errors make the block incomplete. Compute-sanitizer not installed in the accessible CUDA toolkit; launch sanitizer Detailed artifacts are not claimed CONTROLS.json, controls/, RESUME_CONTROL.json; additional final check-- ACCEPTANCE.json.

## Coverage and Limitations of the Hypothesis

Conducted 151,389,184 state-tests in the final measurements, including intentional repetitions GPU-coating with pre-completed samples and real control units: **12,715,541 states0.592114%)**. The intersections are combined, the interrupted unwritten block is not included synthetic-No examples or arbitrary reference states were added CPU-The coverage is not separately summed up here.

The author's relationship Puzzle s BX Speed does not increase the probability of this hypothesis; a negative small range does not exclude the remaining states retry/skip unacceptable BIP32-Nodes are not replaced by a silent pass.

## Resources and bottleneck

Table of windows 524288 byte, clear device buffers maximize 557064 It's not complete VRAM footprint context CUDA. Observable GPU-wide VRAM/temperature/capacity/frequencies stored in STATISTICS.json and telemetry.jsonl; power.limit reported N/A. Maximum memory.used includes the driver and other users GPU, This is not the exact size of the algorithm.

scan_kernel: 255 register/stream 784 byte local frame; ptxas report spills. Low potential occupancy, individual field inversions repeating HMAC-Building - reasonable candidates for the next profiling, but their shares GPU-time is not measured 94% CPU-profile GPU. Block size selected from 64/128/256 For the samples saved: SELECTION.json. This is a small selection, not a proof of optimality.

## RTX 4090

The local map is already making the full time hypothesis test available 16 Rental schemes are optional; full local run will require a separate assignment.Short test RTX 4090 It makes sense to test the scaling and possible expansion of the study, but its speed is here **measured**. You cannot promise a multiplier by number CUDA cores formerly 6.2 Billions of targeted checks/s.

Nana [price-page Runpod](https://www.runpod.io/pricing) re-check 01.11.2026 indicated $0.89/ч для RTX 4090. [Страница модели](https://www.runpod.io/gpu-models/rtx-4090) одновременно содержит $0.89 in the title and $0.34 в тексте; реальный тариф/наличие требуют проверки перед заказом. Для условного расчёта используем $0.89, No deployment, no storage, no downloads, no taxes.

| Desirable full pass | Required states/s everyone 16 | Conditional Computational Price at $0.89/? |
|---|---:|---:|
| 60 min | 596,523 | $0.890 |
| 30 min | 1,193,046 | $0.445 |
| 15 min | 2,386,093 | $0.223 |
| 10 min | 3,579,139 | $0.148 |

These are thresholds, not forecasts RTX 4090. Fifteen-minute separate test would cost about $0.223 only GPU-The other car needs a new assembly/version with controls and portable paths of input artifacts; current acceptance refers to local WSL-Wednesday.

## History and reproduction

First strapping resume possessed NameError before GPU-Benchmark, which started next PowerShell-command, stopped; source/measurements are preserved in pilot-before-resume-fix And they're excluded from the final speed statistics real-The blocks retain value for the coverage. CUDA-The binary and the maths did not change when corrected errors/ and JOURNAL.md.

[Teams](<README.md>), [protocol](<PROTOCOL.md>)Statistics - an artifact of the original study (`STATISTICS.json`; outside the image), all measurements are an artifact of the original study (`TABLES.csv`; outside the picture), telemetry - an artifact of the original study (`telemetry.jsonl`; outside the picture), external timer - artifact of the original study (`WINDOWS_BENCH_TIMING.json`; outside the picture), sources - artifact of the original study (`SOURCES.json`; outside the picture. E9/E9b And the work projects haven't changed.
