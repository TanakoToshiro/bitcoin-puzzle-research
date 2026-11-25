> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sx-msvc-full-20261103/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SXM-03 full search SX/MSVC: result

**Full pass complete, matching the filter of known key number50 Nope.**
Proven model does not explain the sequence Bitcoin Puzzle anyhow
from 20 fixed diagrams and any uint32 seed. Candidate for No71 Not received.

## Completeness and result

| Indicator | Result |
|---|---:|
| Range seed, inclusively | 0 … 4 294 967 295 |
| Seed | 4 294 967 296 |
| Schemes | 20 (id 20–39) |
| Checked couples seed × scheme | 85 899 345 920 |
| Blocks | 4 096 × 1 048 576 seed |
| Passes / overlap | 0 / 0 |
| Filter candidates No50 | 0 |
| Mistakes CUDA / BIP32 / overflow | 0 |
| Time of complete passage with checkpoints and reading blocks, UTC | 78.812 min |
| Same, WSL perf_counter | 77.562 min |
| Sum of time GPU API | 4511.481 s |
| Sum of time CUDA events | 4581.987 s |
| Average speed of full passage | 908,267 seed/s |

First completed block: 2026-11-03T13:35:49.353033+00:00; last one: 2026-11-03T14:54:07.577575+00:00.
Duration API, CUDA events and the whole passage is measured by different timers;
The full pass indicator includes the retention of control points.

## What exactly is excluded

The historical June model SX from SXM-02: MSVC `std::default_random_engine`
equal `std::mt19937`, initialized by one uint32 seed. For each of them
32 bytes entropy take one draw and `draw & 255`These 32 bytes are transmitted
straight BIP32, without mnemonic, Password and additional conversion.

For the puzzle number i masked
`2^(i-1) + (child_key mod 2^(i-1))`The pattern set is unchanged:

| Parent | Last index | Number of schemes |
|---|---|---:|
| m | i−1, i; normal and hardened | 4 |
| m/0 | i−1, i; normal and hardened | 4 |
| m/0'/0 | i−1, i; normal and hardened | 4 |
| m/0'/1 | i−1, i; normal and hardened | 4 |
| m/44'/0'/0'/0 | i−1, i; normal | 2 |
| m/44'/0'/0'/1 | i−1, i; normal | 2 |

GPU check-in 49 The minor bits of the known key No50
`22bd43c2e9354`; the purpose of the filter
`0x2bd43c2e9354`Consistency throughout sequence No1–50 necessary
That filter passes through, so zero of the full filter is enough
to exclude the model, the actual candidates for CPU-There was no check.
Holdout №51+ It is not used in the search or selection of models.

## Checks

- Reversed prior to launch 37 artifact SXM-01 and 392 artifact SXM-02.
  CUDA-library 20 The scheme is copied without changes from the accepted pilot.
- Before and after full passage: 320 comparisons CUDA with native child keys,
  20 positive 20 Negative filters; control of the latter uint32 seed
  inside the full upper block; deviation overflow, wrap, rogue BIP32-knots.
- New strapping checked for a stop/Continuation without re-setting,
  configuration change, block damage, omission, exclusion, preservation
  Candidate and Competitive Launch CPU verifier synthetically
  positive control of 50 Numbers and negative control.
- After completion `audit.py` I read all the blocks separately `readback.py`,
  using only a standard library and not importing runner/audit,
  Rechecked the ranges, SHA256-chain, configuration, inputs and counters.
  Coverage of each 20 scheme 4 294 967 296 seed.
- Older pilots and synthetic checks are not included in the actual coverage.

Evidence: COMPLETE.json - an artifact of the initial study (`COMPLETE.json`; outside the picture),
INDEPENDENT_AUDIT.json - an artifact of the initial study (`INDEPENDENT_AUDIT.json`; outside the picture),
READBACK_COMPLETE.json - an artifact of the initial study (`READBACK_COMPLETE.json`; outside the picture),
SCHEMES.json - an artifact of the initial study (`SCHEMES.json`; outside the picture), CONFIG.json - an artifact of the initial study (`CONFIG.json`; outside the picture.

## Application to the puzzle

**This final hypothesis can be closed with a negative result.**
That doesn't rule it out SX/MSVC other dates and implementations generally RNG, length
entropy, displacement RNG-flow, additional transformations or other HD-Ways.
The study does not establish the program used by the puzzle maker.

The limitation of historical CLI from SXM-02: routine pipe `hd-seed`
→ `hd-priv` It breaks because of the line translation xprv without LF/CRLF works;
A valid generator has been tested and HD-the mathematics of this assembly, not the faulty pipe.

Historical assembly: [SXM-02](<../sx-msvc-native-20261103/RESULTS.md>).
Protocol: [PROTOCOL.md](<PROTOCOL.md>)Magazine: [JOURNAL.md](<JOURNAL.md>).
