> English machine translation of the [Russian source](<../../../../ru/reports/experiments/prng64-gpu-20261110/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# RNG64-GPU-01

Precise GPU-search x for ten synthetic inputs RNG64-05. State
at the first complete exit: (x,z−x modulo 2^64). Two implementations of the second word:
arithmetic and explicit transfer network/The old crossings.

Required 64-bit Python and established OpenCL GPU-driver. GPU and CLI use
only the standard library Python. For CPU-benchmark NumPy/Numba.
This car was used Python 3.11.9 from
`[USER_HOME]\AppData\Local\Programs\Python\Python311\python.exe`.
System packages/The drivers didn't change. GPU pick out OpenCL GPU, priority NVIDIA.

From this catalog:

> Executable code/The commands are omitted in the documentary copy.


Intentional repetition benchmark rewrites BENCHMARK/MANIFEST in this series;
Once the code has been changed, it is required again validate. To preserve the experience gained
Use a separate copy of the catalog CPU-The series is unchanged.

Limited range at synthetic input and continuation by the same command:

> Executable code/The commands are omitted in the documentary copy.


For the transfer network: `--mode carries`Numbers allow `0x`- Format, end of range
not loop modulo 2^64. Maximum batch — 2^26. `--seconds` limit
new batches; fully completed intervals are retained until exit
with the same parameters reads completed chunks, preserve mtime and content.
Identity anchors the original input GPU source and host code; The inconsistency is rejected.
RUN.lock It's protected by the OS lock, when the candidate buffer overflows batch not
It is counted; you need to repeat it in smaller portions in a separate launch.

`interval_complete` It means only the end of the range
Control with a specially selected range does not allow access to real data.
CLI This version works with synthetic INPUT, There's no real regime.

Files: [protocol](<PROTOCOL.md>)Controls - an artifact of the initial study (`CONTROLS.json`; outside the picture),
Benchmark - an artifact of the initial study (`BENCHMARK.json`; outside the picture), [result](<FINAL_REPORT.md>)Generable kernels/ contain
precise OpenCL C and build logs; `SOURCE_SNAPSHOT.json` safety-check RNG64-05.

Handbook API: [OpenCL 1.2 specification](https://registry.khronos.org/OpenCL/specs/opencl-1.2.pdf).
The speed and valid conclusions are based on stored local measurements.
