> English machine translation of the [Russian source](<../../../../ru/reports/experiments/prng64-anchor-20261110/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# RNG64-04 - coordinates at the first fully known exit

10 November 2026. Exactly 10 lineage synthetic_incomplete from RNG64-03.
Do not change families, observations, synthetic states packing, masks split.
Fitting №135; №130 supplementary fitting; others 81 solutions holdout.
Previous files and checkpoints Just read it.

Let me a Minimum exit time from full 64-The unknown, the two
64-I'll give you the bits of state right after this exit a summation
observational z modulo 2^64. For t>a direct transition; for t<a It's the exact opposite.
When returning a witness, calculate the state before exit 0 through T^(-(a+1)); upon
locking the witness back to coordinates a. Zero-state is forbidden.
The known amount remains an exact limit, not XOR It's not free word knowledge.

Two previous engines, without changing their versions/parameters: CryptoMiniSat 5.18.0
(XOR+CNF), cvc5 1.4.2 (bit-vectors). The coordinate system and direction change
Turning the transitions. 120 s/request, 240 s/engine/task before 8 states,
how RNG64-03. Four independent cases simultaneously, one stream per solver.
Inside the case CMS first, cvc5 For a pure pair comparison, the full
synthetic-The control of each of the two engines is carried out at all ten inputs.
Baseline Do not recalculate: use saved answers RNG64-03.

Before blind controls: exhaustive reduced-width brute force, including partial
pre-observation anchor; check-up 128 Basic vectors with full parameters;
positive/negative cases with fixed states, ambiguity,
zero prohibition, UNKNOWN. The algorithm doesn't get it CHECKER_SECRET.

The real data of a particular engine receives only after its own completed
blind-list synthetic, containing the planted state, and inspections
series 83 number + covert71 For both of the previous inter-core steps.
Both approved engines can independently verify the actual input real-
The request cannot be made before your own complete blind-control of this engine.
UNSAT afterward SAT means a complete enumeration; UNKNOWN/cap/budget —
Incompleteness. Real locality UNSAT eliminates the scheme for any inter-key steps.
In the real world, check only max(offsets)+1 and max(offsets)+4.
Full candidate holdout Stops new tasks before address check.

Save all formulas, states in both coordinates, answers, time, versions and hashes.
Re-start does not recalculate completed tasks runner
and worker; external watchdog specifically completes the immediate process solver,
launcher venv-launcher. Timeouts are not exceptions.
Audit, RESULTS.md And the report is in this folder GPU/clouds and model extensions.
