> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-qcg-memory-20261106/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-25 - memory of the joint QCG-solver

Date: 06.11.2026. Continuation SEQ-24; Diagnostics and precise change of strategy Z3 on the stored synthetic data.

## Result

The main memory consumption in reproduction SEQ-24 bit-bound fallback Z3 After exhausting the native algebraic budget `solver.set("ff.preprocess", False)` It stores intermediate states and squares instead of pre-expansion. In the paired comparison of six inputs, it gave the peak of the OS **186.0–192.7 MiB**, into **11.78–12.20 lower** The peaks of the initial mode were observed with the same authorized budget.

Statuses of reference regime: {'unknown': 6}; modified:unknown': 6}. This is a comparison of limited launches. The peak ratio doesn't mean faster recovery or less asymptotics. The masks, all the transitions and monome dependencies aren't weakened. The real keys weren't launched.

## Where memory is used up

Diagnostics A employed full00, the same unmodified builder and Z3 5.3.3.0, committee `430d19e697e2ec9bad79ff210d41b4a7a5fcfa3e`; checked 35 hashes of the installed packet private memory was 77.9 MiB, Python tracemalloc peak — 5.18 MiB. Separate passageway ff-unique → ff-simplify → ff-solve → ff-sat had high-water near 210 MiB and ended with the exhaustion of the algebraic budget; until the final SMT fallback He deliberately didn't reach.

In-house check then-register `ff bv fallbacks = 1`, `mk bool var = 3532144`, `mk clause = 12346804`For about a year 25 searched through 2 GiB; So this was a little bit of a soft interrupt, and it saved the statistics, because these are the counters of the internal objects that were created, not the exact layout of the living bytes. `num allocs` It's an allocation accumulator that can't be read as current memory C++ heap-We didn't take a profile on each container, and the localization is based on phase measurements, track fallback, Counters and control strategy change.

Staffed QF_FF route: ff-unique, ff-simplify, later ff-solve / ff-sat / SMT. In this entrance ff-solve does not accept the residual Boolean structure, ff-sat exhausts the budget; SMT It can then run native algebra and exact bit coding ff-simplify eliminate 268 The result is more complex expressions, after which there is an expensive fallback. This is the behavior of a particular route, not a statement that LLL or Python They hold gigabytes.

The source of the specified commit is saved from URL and SHA-256 into sources - an artifact of the initial study (`sources/SOURCE_MANIFEST.json`; outside the picture), additional manifesto - artifact of the original study (`sources/SOURCE_MANIFEST_02.json`Itinerary confirmation: [smt_strategic_solver.cpp](https://github.com/Z3Prover/z3/blob/430d19e697e2ec9bad79ff210d41b4a7a5fcfa3e/src/tactic/portfolio/smt_strategic_solver.cpp)Behavior ff.preprocess and pass free Boolean: [ff_simplify.cpp](https://github.com/Z3Prover/z3/blob/430d19e697e2ec9bad79ff210d41b4a7a5fcfa3e/src/ast/simplifiers/ff_simplify.cpp).

## Two precise measures

1. Field bit variable u∈{0,1} substitute If(B,1,0). Got it 272 field + 17225 Boolean unknowns instead 17497 All the original statements have been converted by one substitution; the proof of bijection in [MATH.md](<MATH.md>)One minute pilot full00: unknown/timeout, near 311 MiB high-water.
2. Reference formula + ff.preprocess=false. Minute pilot full00: unknown/timeout, near 185 MiB. This measure is chosen for the main comparison as simpler and showed less memory consumption on the pilot.

Boolean replacement also makes ff-simplify skip the unfolding; elim-term-ite insertion 17225 So its effect can't be explained solely by substitution 256 Control with a constant formula shows the essential role of pretreatment strategy. BV fallback It was not switched off anywhere; its absence in the new regime during this budget is an observation, not a ban.

## Pair comparison

In both modes: timeout 120 c, max_memory 2048 MiB, soft-interruption 2 GiB, boundary 2.5 GiB or 5 (c) upon request, external time 150 c. In one process, the order of regimes alternated. Parameters and plan are fixed before launch in [PROTOCOL_MAIN.md](<PROTOCOL_MAIN.md>)Pilots are adaptive and not considered an independent sample.

| Input / type | Original check, s | The initial peak of the OS, MiB | New check, s | New peak OS, MiB | Peak ratios | A new answer |
|---|---:|---:|---:|---:|---:|---|
| full00 / qcg | 25.46 | 2269.4 | 120.07 | 192.7 | 11.78× | unknown: timeout |
| full01 / qcg | 28.00 | 2270.2 | 120.07 | 191.2 | 11.87× | unknown: timeout |
| full02 / qcg | 25.78 | 2270.6 | 120.07 | 186.0 | 12.20× | unknown: timeout |
| full03 / qcg | 25.64 | 2270.8 | 120.09 | 191.3 | 11.87× | unknown: timeout |
| full04 / null | 24.45 | 2269.2 | 120.10 | 191.2 | 11.87× | unknown: timeout |
| full05 / null | 28.93 | 2269.2 | 120.07 | 192.0 | 11.82× | unknown: timeout |

Peaks - maximum available high-water counter working set / pagefile process Windows. This can be more than the maximum of current memory captured by each sample 0.1 c; both values saved. Table time -- check, constructionless/It's time to finish. 942.75 c. The initial processes were stopped from memory earlier; therefore, the same allowed budgets are compared, not the same amount of search performed BV fallback Six new launches: 0.

For comparison: in SEQ-24 the same six entrances reached 8 GiB roughly 93–99 This is where the new regime was tested 120 This is evidence of practical savings in the measured interval, not a guarantee of the memory ceiling 600 c or unlimited search.

## Correctness and boundaries

Save 83 observational positions, 82 informative masks, 3767 famous minor bits, 135 states with initial omissions, 134 restriction z=s², 134 transition, non-zero a, the exact boundaries of the hidden bits and gauge. The main series remains the same 17497 field variables and 17659 The only thing that changes is the parameter of the solver.

Three regimes gave 30/30 The expected responses are based on ten small standards 360536 The corteges reproduced the old complete set of solutions; SAT-Eight closed substitutions of four full-length positive witnesses in the original and Boolean recordings have passed, workflows only receive public input, not synthetic truth.

All 11291 previous files, 1792 former dependencies and 35 file Z3 Checked; archives unchanged. Packaging technical fixes JSON/Readings of the manifesto key that do not affect formulas or budgets are saved in [TECHNICAL_REPAIRS.md](<TECHNICAL_REPAIRS.md>)Partial Pilot Intersection B The first small test is recorded in the protocol C; The main pair experiment is consistent.

Absence SAT/UNSAT The new measure removes early memory bloating at these inputs in the verified interval; recovery from the original masks has not yet been shown/Conflicts cannot be directly translated into recovery bits or completion rates.

## Files and repetition

- RESULTS.json - an artifact of the initial study (`RESULTS.json`; outside the image: both memory records and statistics of all pairs AUDIT.json - an artifact of the initial study (`AUDIT.json`; outside the picture: audit; CLOSURE.json - an artifact of the initial study (`CLOSURE.json`; Outside the picture: link to old limited entrances.
- `diagnostics/`, `pilot/`, `validation/`, `runs/`Configuration, Logic, Phase and Memory `inputs/`: unaltered public tasks; `reference/`: individual control truths.
- `bench_worker_v2.py` + `support.run_process` They reproduce the selected input in the new output directory `mode="original"`, `solver_parameters={"ff.preprocess": false}`staffed baseline It's an empty parameter dictionary. Old catalogs aren't overwritten.
- For regular code Z3 sufficiently after the initial solver cause `solver.set("ff.preprocess", False)`This is a recommendation for a given measured route; on other tasks, winning is not guaranteed.


## Additional localization: what the pre-processing deployed

After completion of the main queue, a separate inspection was performed DAG full00 without check-sat The initial measurements are an artifact of the original study`diagnostics/dag/DAG.json`; outside the picture), verification - artifact of the original study (`DAG_AUDIT.json`; outside the picture), [pre-program](<DAG_PROTOCOL.md>).

ff-unique/ff-simplify fixed s2…s135 and z1…z134 -all 268 There's still some unknowns in between a,b,c,s1 The number of unknowns has changed 17497→17229; the number of unique nodes of the graph - 87911→90755. In addition, the syntactic degree s1, calculated on the graph without polynomial disclosure, grew from 2 before 2^134 = 21778071482940061661655974875633165533184.

This does not mean an exponential number of stored nodes: DAG And the measurement shows how a set of local quadratic connections became a deeply framed chain. Native algebra then ran out of budget, and bitwise fallback He created millions of objects ff.preprocess=false It stores explicit local equations and, in validated runs, prevents this early transition. The transducer itself remains semantically accurate; it is the computational effect on these problems that fails.
