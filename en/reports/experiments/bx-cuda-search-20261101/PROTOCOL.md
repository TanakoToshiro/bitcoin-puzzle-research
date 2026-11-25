> English machine translation of the [Russian source](<../../../../ru/reports/experiments/bx-cuda-search-20261101/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E9c — BX → BIP32 CUDA, local RTX 3070 Ti Laptop

Task: HANDOFF_BX_CUDA_3070TI.md, 01.11.2026. First testable GPU-straight-forward 16 scheme E9b. Normalized states 1..2147483646; entropy minstd_rand0 mod255 length 16/32; parentage m, m/0, m/0'/0, m/0'/1; last puzzle−1+offset, offset 0/1. No new family seed/The author's connection Puzzle s BX It's not set.

GPU check out the junior 49 bit child №50 everywhere 16 The survivors check the unchanged state CPU executable E9b: All training No1–50, later holdout. Wrong BIP32-The node or buffer overflow makes the block incomplete; there is no silent discard. IL=0 permitted child with a non-zero result.

First architecture: one GPU-flux entropy, general master/Parents within the stream; unsigned fixed-base window 8 bit, table 32×256 points, affine table + Jacobian accumulation, Normalization of every public key field routines copying only up to point_get_coords, with hashes and licenses; worker assemble.py It doesn't start.

Correctness of Exceptional Accumulation Cases: Zero Numbers and Initial Numbers are Processed infinity. For permissible 0<k<n windows are stacked from junior to senior; the previous sum is less than the next non-zero term, and any partial sum does not exceed k<n. Therefore, equal or opposite points in the incomplete mixed-add Impermissible scalars are discarded to multiplication. This proof applies only to this path, does not transform the borrowed point_add (c) a total group operation.

Before the benchmark: SHA512/HMAC boundary lengths and random values; addition of scalars/invalid master/child; public keys with edges and zero windows; 14 historical BX-vectors 10×8 parent and 720 children from EXPECTED; 16 Synthetic restorations, negative training/holdout; everything 16 low49 on a fixed independent sample; the tail batch, borders, invalid range, overflow, stop/resume; compute-sanitizer if available.

Benchmark After Controls: Size Calibration batch/block, Then a few non-overlapping areas and repeats; a series after warm-up. Basic measurement budget maximum 900 c. All samples are saved, intentional re-designations are designated, unique coverage is considered to be a combination of intervals. Full passage and lease are not allowed by this task/c 16 circuitry GPU events full-on wall time s CPU-check, telemetry, VRAM, extrapolation of the full space 6.2 Billions of targeted checks/c on this chain.
