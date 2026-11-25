> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sx-msvc-newseed-cuda-opt-20261103/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SXN-02 Profiling and optimization CUDA newseed/genpriv

Objective: Measure the expensive operations accepted SXN-01 and speed it up, and keep it up
accurate bytes. Complete search Puzzle It doesn't start; everything targets synthetic.
Old source, binary and seals do not change.

Measure separately MT/hex, stretch100000, formatting/D2H, GPU public-key,
host parsing four SHA256d/scalar-add/filter. For device-phase out
CUDA events, for host/end-to-end — UTC wall and perf_counter. Profile not to replace
Instructions counting or old bandwidth estimation.

Permissible optimizations: specialization SHA256 for two fixed blocks,
precalculation padding schedule/constant, GPU integer intrinsics, independent
chains in one stream, start parameters/portions, reduction of overhead costs.
Exactly 100000 SHA256 rounds and past 16 MT draw %255 They're still there.

Each measured variant is first compared byte with the accepted binary
hashlib/affine and native preserved cases uint32, zero
bytes, different number of rounds/sizing and size not multiples of the block.
Synthetic complete pipeline: four-way receive/change × i−1/i for i=50.

Comparisons at the same size, change order baseline/optimized,
Show the scatter and selected parameters. Declined options and errors save.
Quick short measurements are needed for selection; the result is taken in full stretch100000.
Extrapolation uint32 Measurement of current implementation/Cars, no warranty
Multi-day work or proof of impossibility of further optimization.
