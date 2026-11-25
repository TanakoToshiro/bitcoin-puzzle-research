> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-target-search-20261030/TABLES.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Number tables E1g

Synthetics: 18 tasks, 72 launches; 89.932 (c) together with individual processes.

Medians of three normal positive examples per size. Boundary/Negative controls are excluded from measurement medians.

| The algorithm | W / L | The initial additions / diminished | Relationship | Table, records | Python peak, byte |
|---|---:|---:|---:|---:|---:|
| bsgs | 12 / 4 | 123 / 59 | 2.08 | 64 / 16 | 9375 / 4609 |
| bsgs | 16 / 6 | 420 / 96 | 4.38 | 256 / 32 | 29151 / 6233 |
| bsgs | 20 / 8 | 1522 / 152 | 10.01 | 1024 / 64 | 132155 / 9441 |
| bsgs | 24 / 10 | 7145 / 291 | 24.55 | 4096 / 128 | 543803 / 16153 |
| kangaroo | 12 / 4 | 750 / 247 | 3.04 | 0 / 0 | 4886 / 4792 |
| kangaroo | 16 / 6 | 2524 / 433 | 5.83 | 0 / 0 | 4886 / 4920 |
| kangaroo | 20 / 8 | 9623 / 773 | 12.45 | 0 / 0 | 5270 / 4952 |
| kangaroo | 24 / 10 | 35778 / 1321 | 27.08 | 0 / 0 | 5334 / 4952 |

Additions take into account preparation, doubling and final point verification. The exact number of additions does not equal the number of steps: details in SYNTHETIC.json. Python peak It excludes the native library and the initial loading of the interpreter. Kangaroo keeper 16 jumps and one end trap; zero in the table column means no BSGS-tables, not zero memory.

## Consolidation of stories

| Purpose | An alternative story | Dimension to filter No256 | Maximum of missing candidates | Top share of exclusion |
|---|---|---:|---:|---:|
| 140 | api-interval3-na-s2-zero | 139 | 5205 | 7.4688087e-39 |
| 145 | api-order3-na-s1-zero | 144 | 166562 | 7.4688984e-39 |
| 71 | api-byte_range3-big-s1-zero | 70 | 0 | 0 |

The number of vanished is the upper limit in terms of the number of remote states and the equal size of the linear mapping layers. It's not a claim that so many candidates have really disappeared. Float lower_fraction_of_full=1.0 into JSON rounded; precise whole and excluded_fraction_upper_bound They're content fields.

## Direct additive MITM: implementation

| Purpose | Branch | Part sizes, log2 | Bytes of the table: SEC33 + numeral | Medium additions/component Gray-listing |
|---|---|---:|---:|---:|
| 145 | api-order3-na-s1-sparse | [53, 54] | 360287970189639680 | 1 / 1 |
| 140 | api-interval3-na-s2-sparse | [49, 49] | 22517998136852480 | 1 / 1 |
| 155 | api-bits_i-na-s2-zero | [74, 75] | 812247035053578976755712 | 1 / 1 |
| 163 | fixed-forward-big-s1 | [77, 78] | 6497976280428631814045696 | 1 / 1 |
| 192 | fixed-forward-little-s1 | [79, 79] | 25991905121714527256182784 | 1 / 1 |

These are the dimensions of a particular uncompressed table, not the lower bound of memory for all possible algorithms/Sorting, alignment, second-part responses and collision control require additional memory/The average number of additions counts each changed output bit, does not replace XOR Sorting the directions within each part rearranges only the parameters and doesn't change the set.
