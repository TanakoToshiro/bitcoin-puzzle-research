> [English](<../../../../en/reports/experiments/sequence-qcg-time-20261106/PROTOCOL_B.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/04-sequences-and-lattices.md>) · [Документы серии](<INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).

# SEQ-27 B: exact engine strategies, registered before pilot

Use the unchanged installed Windows Z3 and archived encoder, ff.preprocess=false throughout. No input or assertion changes, same seed 0. Pilot full00: baseline; fused (ff.fused_reduction=true); bounded (ff.bounded_elimination=true); buckets (ff.geobucket=true). Each check 60000 ms/max_memory 2048 MiB; external 90 seconds/2 GiB. Sequential, no simultaneous build. Every mode must first reproduce all ten archived exhaustive toy references with 10000 ms/1024 MiB. SAT models are independently checked, dependency control must remain UNSAT.

Rationale: A4 attributes 112.909/120.068 seconds to native algebra.solve and only 3.358 to preparation. The existing native solver computes a basis on successive bit assignments (11 cache misses, no hits); original ff solve timers do not aggregate these. Fused reduction avoids temporary polynomial products; geometric buckets change exact polynomial accumulation; bounded elimination retains costly definitions as equations instead of expanding them. None drops equations, relaxes domains, supplies hidden bits, or changes the algebra budget. Do not select parser/root-scan micro-optimizations given their measured small cost.

Pilot selection: first compare any verified full SAT/UNSAT results, then native conflicts per check second as an explicitly incomplete progress proxy. A candidate must improve conflicts/second at least 1.5x, have no fallback/resource-error regression, and stay within 2 GiB. If none qualifies, retain baseline and report no demonstrated acceleration. If one qualifies, choose largest proxy (tie order fused, bounded, buckets), freeze selection, then compare baseline/selected on all six inputs with 120-second checks, alternating order by input. This validation is paired repeated measurement, not independent holdout; full00 participates in selection. Native branch counts do not measure fraction of the global search space or recovery speed.

A planned deeper timer extension could not start because WSL restarted and cleared the temporary build tree. No extra source patch or build was applied; instrument_deep.py is retained as an unexecuted implementation after its initial file-read failure. Existing control/profile libraries and archive/patch remain. No claim about exclusive time inside individual algebra routines will be made from A4.
