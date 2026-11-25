> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sx-historical-20261101/PILOT_RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E12 — CPU-pilot SX

complete_bounded_pilot

| RNG | Conditions | Blocks | states/s everyone 4 | CPU-extrapolation, h | Candidates |
|---|---:|---:|---:|---:|---:|
| gnu492 | 262144 | 4 | 27375.6 | 21.79 | 0 |
| llvm350 | 262144 | 4 | 25514.5 | 23.38 | 0 |

Only a fixed prefix is checked, maximum 0,012207% on RNG. The absence of candidates does not exclude the family. CPU-extrapolation refers to this single-threaded code, not GPU. The code, inputs and results of each call are stored in pilot/.

Control scenarios: 8. Completed calls with unchanged inputs are skipped.
