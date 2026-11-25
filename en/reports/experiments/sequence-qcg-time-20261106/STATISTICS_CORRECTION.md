> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-qcg-time-20261106/STATISTICS_CORRECTION.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Correction before optimization selection

Z3 statistics::update appends duplicate-key entries; get_key_value returns the first entry. Worker v2 lost all but the first per-instance profiling value. Its native total/root/collection counters are cumulative and remain valid, but its profile native instances/inputs/encode/solve/prepare substage/conflict-premise values are not aggregate measurements. No optimization was selected from these values.

Worker v3 saves all raw indexed entries and sums equal keys; mathematical construction and solver parameters are unchanged. Profile A4 repeats the instrumented full00 check for 120 seconds, requiring native instance sum to equal the original native check count. A3 records remain untouched.
