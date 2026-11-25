> English machine translation of the [Russian source](<../../../../ru/reports/experiments/bx-cuda-search-20261101/JOURNAL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E9c Intermediate conclusions

01.11.2026. GPU It's confirmed: RTX 3070 Ti Laptop, 8 Gib, sm_86, CUDA 13.2.86, driver 617.42. The main sources have not changed; field.cuh copied with hashes and licenses, assemble.py It didn't launch E9 Used from the saved image.

First assembly: scan_kernel use 255 register/stream 784 byte frame, compiler report spills. This is a specific potential limitation occupancy/speed; new optimization cycle is not included in the task G — 524288 byte.

Before the measurements passed 16 SHA512, 72 HMAC, 168 EC, 135 scalar-add examples, 14 historical nodes BX, 80 parents 720 children, 4096 low49 comparisons, 64 end-to-end positive/The boundaries of negative cases/Overflow checked; compute-sanitizer by standard path and PATH No one found sanitizer passable sanitizer-test.

First control resume found out NameError into Python-binding (undefined) P). Next team PowerShell I still started the measurements, so the benchmark stopped SIGINT. All completed pre-tests, old bench.py and telemetry saved in pilot-before-resume-fix; They are excluded from the final comparative statistics errors/. Correcting the binding doesn't change CUDA-binary, field/SHA/BIP32 or input data, before the final series of controls resume re-executed; launch protected by verification exit code.

In the preliminary tests met GPU event time more WSL perf_counter wall time. The reason has not yet been established; we cannot silently consider these timers interchangeable wall-clock time.time_ns external Windows Stopwatch The report should show the discrepancy and conservative full speed in external time GPU events - separately as an indication CUDA, It is not an independent guarantee of accuracy.

Final series completed: 151 measurement, including 144 basic batch In three episodes Windows Stopwatch — 240.37 (c) the entire process and 629826 states/s everyone 16 diagrams; main pipeline — 824019 states/s. It's 19.52× / 25.54× relative CPU-base; full passage extrapolated to 56.83 / 43.44 minute, not met. Temperature 48–57 °C, reported SM clocks 825–840 MHz, power 25–46.23 Waht? power.limit N/A. median GPU-wide memory.used 157 MiB, explicit buffers Significantly less; the difference in measurement areas is preserved.

Additional acceptance after the series: 8256 low49 comparisons for each provision 516 continuous/extreme states and 16 public keys independently Python-arithmetic passed. Stop/resume fulfilled 1, later 3, later 0 blocks; the finished benchmark has not re-initialized GPU. All 103 frozen-file E9b tested SHA-256 And they're the same field And the standards are also unchanged.

Practical solution: the local map is already suitable for a full test of these 16 hypotheses in about an hour while maintaining speed; starting requires a separate task. RTX 4090 You can test it briefly to measure scaling, but you don't have to rent 4090 It's not multiplied. Re-open price list Runpod shows up0.89/ ⁇ ; contradictory advertising text of the same company is marked separately, nothing is rented Puzzle from BX undetermined.
