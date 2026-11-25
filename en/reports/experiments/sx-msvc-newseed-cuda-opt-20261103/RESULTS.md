> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sx-msvc-newseed-cuda-opt-20261103/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SXN-02 — CUDA-optimisation newseed/genpriv, 03.11.2026

Accelerated conveyor for confirmed in [SXN-01](<../sx-msvc-newseed-audit-20261103/RESULTS.md>)
On the model RTX 3070 Ti Laptop received **10 845,81 seed/s**, including all four
diagrams: receive/change × indexes 49/50. Direct pair comparison gives **+11,32%**
Capacity and reduced time for **10,17%**. Extrapolation of the full
uint32-domain- **4,583 daylight**. A full search was not launched; all targets are synthetic.

**That's changed.** deployed SHA-256 rounds with fixed variables;
for the second, permanent padding-block pre-calculated schedule sums K+W.
Selected the usual CUDA C++ variant 1: 256 threads, 1000 Iterations for launch,
recommended package 65536 seed. Public-point, four SHA256d, addition
groups and filters are carried out on GPU. Normally, on CPU come back
Counters and candidates. Eliminated the issuance of all roots CPU, re-sending
in EC-kernels with small packages and Python-child key cycle.

Unchanged MT19937, first 16 draw `%255`, lowercase hex ASCII preserve
zero, exactly 100000 SHA256 historical X-only MPK. These are the four patterns of the old one
Electrum private export, not 20 BIP32-completed SXM-03. Old source,
binaries and results SXN-01 They weren't edited.

**Where time is wasted.** Package 65536 seed; CUDA events for device-phase.

| Operation | Measurement |
|---|---:|
| Original stretch, 256 threads | 6161,82 ms GPU |
| Specialized stretch | 6032,80 ms GPU |
| Public-point new-line | near 4,9 ms GPU |
| All four child keys and filter | near 0,33 ms GPU |
| MT + hex | usually 0,09–0,46 ms GPU; near- 3,3 ms |
| Return of counters, no candidates | near 0,13–0,18 ms CUDA-event span |
| Former Python child/filter s audit-data | 0,53–0,59 down host monotonic |
| Lightened CPU child/filter without audit-data | near 0,39 down host monotonic |

Stretch more **99,8% measured device-phase** new assembly line.
Every day seed demand **200000 compression blocks** SHA-256: entrance
100000 iteration 64 So I need a bit more, so I need a separate one padding-block.
Micrometers on 10000 iterations: data compression — 365,18 Ms padding compression —
242,58 These are separate artificial nuclei, not valid Electrum-hashes;
Their times cannot be strictly stacked due to differences in registers and planning.
It shows that even the permanent padding-The block remains a substantial work.

CUDA SHA-nucleus has accelerated itself to **2,14%**. The remainder of the winnings received
Transfer of closing transactions and reduction of exchanges with CPU. Additional
The options did not give a significant gain in relation to the adopted:

| Option full stretch100000 | GPU ms | Registries per stream |
|---|---:|---:|
| Reference core | 6161,82 | 56 |
| Specialization, option 1 | 6032,80 | 56 |
| Explicit funnel-shift / lop3, variant 2 | 6047,61 | 61 |
| Two independent chains per stream, option 3 | 6035,96 | 125 |
| Option 1, chunk 4000 | 6034,39 | 56 |
| Option 1, chunk 10000 | 6034,17 | 56 |

Woo SHA-no option spills/local memory posture ptxas. EC-core: 96 registers,
32 byte stack, without spill loads/stores; child/filter: 64 register-free spills.
Package 131072 almost exactly doubled GPU stretch before 12064,96 MS, therefore more
The package didn't show any benefits. `ncu`/`nsys` are not present in the verified chain;
exploited CUDA events, host timers and ptxas. Hardware stall counters and SASS
instruction mix Raw measurements are an artifact of the original study`MEASUREMENTS.json`; outside the picture),
The initial profile is an artifact of the original study (`BASELINE_PROFILE.json`; outside the picture), ptxas - an artifact of the initial study (`build-tail.log`; outside the picture.

**Time check.** During the measurement, a discrepancy of hours was detected WSL:
`CLOCK_REALTIME` sometimes gallops around 0,92–0,95 (c) `CLOCK_MONOTONIC`
also diverges from `CLOCK_MONOTONIC_RAW` and CUDA events. Cause of clock corrections
It didn't get installed UTC-based `states_per_second` preserved
as a diagnosis, but are not used for final speed or optional selection.

Repeated three pairs on the same range, with the order baseline→optimized,
optimized→baseline, baseline→optimized. Original CPU-conveyor
lightened: removed hex-formatting children, audit digest and witnesses,
The prefixes are prepared in advance. Both sides count the exact four scalars and the filter.

| conveyor | Seed | CLOCK_MONOTONIC_RAW | Seed/s | Forecast 2^32 |
|---|---:|---:|---:|---:|
| Original CUDA + lightened CPU | 196608 | 20,18003 s | 9742,70 | 5,102 daylight |
| Optimized GPU | 196608 | 18,12755 s | 10845,81 | 4,583 daylight |

External Windows Stopwatch gave 9754,10 and 10849,19 seed/(c) respectively;
on each packet the difference with RAW less 0,04 C. Distribution of three optimized
packages: 10841,45–10848,17 seed/This is a short series; it does not prove
stability of the laptop for several days
measurement 56–63°C, observed SM clock 840 MHz. Acceleration and power parameters
It didn't change WSL - an artifact of the initial study (`CLOCK_COMPARISON.json`; outside the picture), external clock - artifact of the original study (`HOST_CLOCK.jsonl`; outside the picture),
Recalculation - an artifact of the original study (`READBACK.json`; outside the picture.

Previous assessment SXN-01 into 5,49 The day was received in another series and with others
overhead; the difference cannot be attributed entirely to it CUDA-optimization.
Final API optimized.py - an artifact of the initial study (`optimized.py`; outside the picture) uses CLOCK_MONOTONIC_RAW.

**Accuracy checks.**

- All three SHA-The options coincide with the adopted initial implementation at the borders
  uint32, odd sizes, different sizes threads, rounds and chunk. Checked full
  100000 iterations and saved native-results.
- New full new GPU-conveyor **19 native-vector / 76 children**,
  including leading/trailing zero entropy. It's a reconciliation with the saved
  results Windows, not new 403 native-call.
- **65536 full-length / 262144 children** coincided with the previous conveyor
  full-on 256-bit results through SHA256 digests. All intermediates X
  separately checked native and affine control.
- 69 Roots tested by independent affine/hashlib calculation; four 49-bit
  planted hits, Negative goal, compulsory coincidence of all schemes,
  incomplete blocks and upper boundary seed passed.
- 45 extreme cases of addition include offset ≥ n sum 0. Used
  calculus Electrum `(root + offset) mod n`not BIP32-rejections.
- Failed roots, overflow candidate buffer and incorrect parameters
  It ends in a mistake. Success requires `processed == count` and
  `checked_schemes == 4*count`; the packet cannot be set off.
- Re-reading by a separate process is recalculated hashlib/affine for 19
  native-vectors, checked hashes of measured files, new API all 86
  print-artifact SXN-01. This is a re-read by the same agent, not a second auditor.

SHA-Controls - an artifact of the initial study (`VARIANT_CONTROLS.json`; outside the picture), GPU-Controls - an artifact of the initial study (`TAIL_CONTROLS.json`; outside the picture),
re-reading – an artifact of the original study (`READBACK.json`; outside the picture), origin EC-Code - an artifact of the initial study (`TAIL_PROVENANCE.json`; outside the picture.

**Applicability Puzzle.** The model remains a separate finite hypothesis
confirmed private export historical SX/MSVC. Optimization has reduced
the price, but did not establish a link with the author Puzzle I didn't rule out a model.
Coverage of the present Puzzle — **0**, There are no new keys or bits
require separate runner s durable checkpoints, range control and
by independent testing of candidates against other known indices
limited batch API; multi-day runner It didn't start.

Code and commands: [USAGE.md](<USAGE.md>)The final hashes: COMPLETE.json - an artifact of the initial study (`COMPLETE.json`; outside the picture)
and FINAL_MANIFEST.json - an artifact of the initial study (`FINAL_MANIFEST.json`; outside the picture.
