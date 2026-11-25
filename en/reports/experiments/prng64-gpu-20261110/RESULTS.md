> English machine translation of the [Russian source](<../../../../ru/reports/experiments/prng64-gpu-20261110/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# RNG64-GPU-01 - working GPU-search 10 November 2026

GPU-port is implemented and completed **NVIDIA GeForce RTX 3070 Ti Laptop GPU**. Two precise
The encodings are checked on the previous ten synthetic inputs RNG64-05. Fully
64-Bit recovery and new real keys/No bits received.

## Result

Option `subtract`: **33601.23–44466.36 million candidates/s**
consideringly host/transmission/Reading the results of each batch. Acceleration relative
one-compiled CPU-flow on the same inputs and ranges:
**155.94–369.98 once**.
Total overkill 2^64 At these measured speeds, it would require
**13.1–17.4 one-time**.
This is a linear extrapolation of the measured velocity, not an estimate of time SAT-solutions.

Separate working start of the first assembly with a record of each completed chunk and
atomic checkpoint gave **11.21 billion/s** consideringly
file-based I/O; appropriate extrapolation, **52.1 years**.
Initial compilation/context And it's taken into account separately here.
DURABLE_BENCHMARK.json - an artifact of the initial study (`DURABLE_BENCHMARK.json`; outside the picture. The speed above refers to
batch-processing without saving each result to the disk.

## What's moved

One GPU work-item check-in x immediately after the first complete
exit z. The second word is calculated as (z−x) modulo 2^64. Independent option
`carries` builds it up through a biting AND/OR-A network of the old series. GPU faithfully
straight-line/reverse xorshift-transitions and all original masks, rejecting the candidate immediately
after a mismatch of available observation, for assemblies with passes checked
the next full word before calculating an earlier partial observation.

GPU It's doing a parallel, precise brute force with filtration CDCL
CryptoMiniSat and SMT cvc5 Not moved GPU-streams speed up inspections,
but does not shrink the space 2^64. Successful search in the range around known
The synthetic state serves as a control and is not called blind recovery.

## Checks

{
  "full_width_flags": 5282,
  "full_width_traces": 5282,
  "positive_interval_candidates": 655420,
  "grid_stride_positive_candidates": 20000060,
  "boundary_intervals": 80,
  "negative_controls": 10,
  "reduced_exhaustive_instances": 32,
  "zero_overflow_controls": 32,
  "overflow_rejected": 1,
  "invalid_ranges_rejected": 4,
  "wrong_resume_rejected": 1,
  "resume_chunks_unchanged": 39,
  "concurrent_lock_rejected": 1
}

Confirmed flags and all intermediate states/outputs with the previous numerical implementation.
Checked the pledged state of all ten assemblies and alternative SAT-witness
RNG64-05. 32 The reduced tasks were completely solved and coincided with the full CPU-brute
All non-zero word pairs. Zero and modular overflow are processed precisely.
Candidate buffer overflow is considered an error, the range is not counted.
The resumption has retained bytes and mtime 39 files, outdated cursor restored
over the complete ranges, incompatible with checkpoint and the second owner of the OS-blocking
Controls are an artifact of the original study`CONTROLS.json`; outside the image), audit - artifact of the original study (`AUDIT.json`; outside the picture.

## Measurements

OpenCL driver-mounted 617.42; 46
compute units. API/assembly/The execution checks for errors. Python 3.11.9,
Numba 0.68.1; CPU-standard JIT-compiled, one thread.
Warming up, JIT compilation GPU They are excluded from speeds and recorded separately.
Each line contains a minimum of five dimensions; ranges are repeated intentionally
for measurement and are not summed up in a unique search coverage. GPU events separated
full-on batch wall-time. The series took 39.428 with the preparation.

| Case | Encoding | Full speed, million/s | GPU events, million/s | CPU, million/s | Acceleration | 2^64, years |
|---|---|---:|---:|---:|---:|---:|
| plus23-17-26-big-02 | subtract | 33601.23 | 56947.84 | 144.36 | 232.75 | 17.4 |
| plus23-17-26-big-02 | carries | 8152.92 | 9215.36 | 144.36 | 56.47 | 71.7 |
| plus23-17-26-big-03 | subtract | 36934.89 | 63012.80 | 236.85 | 155.94 | 15.8 |
| plus23-17-26-big-03 | carries | 8197.18 | 9282.99 | 236.85 | 34.61 | 71.3 |
| plus23-17-26-little-02 | subtract | 37216.89 | 65734.87 | 115.94 | 321.01 | 15.7 |
| plus23-17-26-little-02 | carries | 8293.88 | 9408.97 | 115.94 | 71.54 | 70.5 |
| plus23-17-26-little-03 | subtract | 44074.21 | 84232.86 | 208.30 | 211.59 | 13.3 |
| plus23-17-26-little-03 | carries | 8501.99 | 9705.75 | 208.30 | 40.82 | 68.8 |
| plus23-18-5-big-02 | subtract | 37082.94 | 63668.72 | 134.29 | 276.13 | 15.8 |
| plus23-18-5-big-02 | carries | 8164.43 | 9251.43 | 134.29 | 60.80 | 71.6 |
| plus23-18-5-big-03 | subtract | 37018.75 | 64160.14 | 224.94 | 164.57 | 15.8 |
| plus23-18-5-big-03 | carries | 6551.12 | 7262.23 | 224.94 | 29.12 | 89.2 |
| plus23-18-5-big-06 | subtract | 36931.92 | 63289.98 | 100.21 | 368.55 | 15.8 |
| plus23-18-5-big-06 | carries | 8326.59 | 9415.46 | 100.21 | 83.09 | 70.2 |
| plus23-18-5-little-02 | subtract | 38103.45 | 66393.87 | 119.63 | 318.52 | 15.3 |
| plus23-18-5-little-02 | carries | 6422.73 | 7133.71 | 119.63 | 53.69 | 91.0 |
| plus23-18-5-little-03 | subtract | 44466.36 | 84214.50 | 193.65 | 229.62 | 13.1 |
| plus23-18-5-little-03 | carries | 6736.44 | 7470.01 | 193.65 | 34.79 | 86.8 |
| plus23-18-5-little-06 | subtract | 36984.55 | 63408.43 | 99.96 | 369.98 | 15.8 |
| plus23-18-5-little-06 | carries | 6566.60 | 7261.66 | 99.96 | 65.69 | 89.0 |


Complete repetitions/interval/times: BENCHMARK.json - an artifact of the initial study (`BENCHMARK.json`; outside the picture),
Summary: SUMMARY.csv - an artifact of the initial study (`SUMMARY.csv`; outside the picture), surroundings and hashes: MANIFEST.json - an artifact of the initial study (`MANIFEST.json`; outside the picture.
Measurements are short, depending on frequencies/temperature/Laptop load and do not give
Promises of constant multi-year speed.

## Why this is not enough to restore

Preliminary controls confirm formula computation; witness state
is actually in the range listed
GPU-method - the volume of complete search: after taking into account the first full output remains
64-Candidate verification is fast, but the exponential volume is maintained.
A negative response of a limited range is not UNSAT the whole scheme.

For practical continuation, you need an algorithm that reduces search: for example,
Well-founded constraint breaking and a hybrid with a solver
given GPU It's not a substitute for this algorithm. You need to check the hybrid acceleration
individually; current measurements do not prove its effectiveness CPU-limit
This is a unique experience that has not yet been completed: launches 600/1200 It wasn't here.

Real Entry Not Started: Previous Full Admission blind-There's no control.
All 185 fixed-file RNG64-05 Commands preserved
and the continuation of a limited range: [README.md](<README.md>).
