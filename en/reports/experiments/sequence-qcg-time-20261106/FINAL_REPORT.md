> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-qcg-time-20261106/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-27 - time together QCG-solver

Date: 06.11.2026. The scope of the experiment is complete; the mathematical reconstruction remains open.

## Result

At the same formula `ff.fused_reduction=true` together `ff.preprocess=false` Increased the speed of Native Conflicts in 3.67–6.00 times at six stored inputs; aggregate velocity ratio 4.56×. Za 120 Seconds of entry received in total 146 conflict 32. It is a measured acceleration of the processing of the branches being tested, not a proven acceleration of full recovery.

All 12 The main launches remain `unknown / timeout`Rebuilding the four positive chains 0/4; Final answers to the six inputs 0/6. Timeout is not a negative answer. Real keys haven't been explored; new states/keyboard/No bats.

## What takes time

On an unalterable Windows DLL baseline full00: check 120.070 c, CPU 117.438 c, six native tests. So the process is busy with computation `ff solve seconds` near 2.7 c describe the initial stage, not all subsequent challenges to native theory.

V source `theory_ff::check_native` Every time he creates a new one `ff::solver`; the old summary doesn't collect his times. Only clocks and counters are added to four exact commit files Z3. Corrected diagnostic record A4:

| Stage | Seconds |
|---|---:|
| Whole `solver.check()` | 120.075 |
| All native checks | 117.242 |
| `algebra.solve` inside | 112.909 |
| Coding and preparation of native inputs | 3.696 |
| Including `prepare` | 3.358 |
| Collecting current equality | 0.235 |
| Explaining conflicts | 0.059 |
| Additional verification of root decompositions | 0.008 |

The lines are nested in each other; they can't be stacked 94.0% measured check It's the solution of algebraic systems 12 Native challenges, 11 conflicts; 11 There are no base cache misses, no hits. This localizes the main flow after formula preparation. The individual fractions of the variables, reductions and basis are not measured.

Diagnostics collected in Ubuntu/WSL, because it's affordable Windows MSVC does not contain standard C++ Clean and instrumented local assemblies have the same Release-flags including `Z3_FF_HAS_UINT128=0`They both went through 10 small-scale standards and 2 straight-line SMT-control; full00 into A3 gave 11 Every one of them. Windows same time 6: numerical Linux can't be given away Windows-All acceleration comparisons below are made on the original set Windows DLL.

## What's changed

Main regime: `ff.preprocess=false, ff.fused_reduction=true`All other mathematical and search parameters are the same; seed 0. V `ff_polynomial.cpp:820–839` reduction updates F := F + scalar·monomial·G It's a direct way to build an intermediate product and then add it up, preserves the assumptions used and the exact arithmetic of the field, and the number of internal steps may differ: the result of the comparison relates to the implementation with the previous numerical budget, not to the identical sequence of all events.

No restrictions have been removed: 135 states, 134 square-link z=s², 134 transitional a,b,c, a≠0, Exact boundaries of entire representatives and former gauge. Full-length formula: 17497 variables, 17659 statements. Initial 83 masks and omissions saved, all 3767 Observable bits; hidden bits and witnesses are not passed on to the search process SMT coinciding with the old SEQ-24. Only the parameters of the algorithm have been changed.

## Choice of option and pair check

Plan B It's fixed to the pilot full00 posture 60 c: baseline — 2 conflict; fused — 13; buckets — 13; bounded — 2. Bounded returned timeout through 83.98 (c) showing the delay of the soft timer; external limit 90 (c) Safe. Fused Selected according to the recorded speed of conflicts; the difference with buckets It's almost negligible on the pilot, and it doesn't prove that one is superior to the other 40/40 Small checks on archival complete search 360536 motorcade control dependency remained UNSAT.

Plan C: 120000 ms check, max_memory=2048 MIB, external 150 s/2 GiB on the process; sequential queue, order baseline/fused Compilations and other solvers didn't run at the same time full00–03 — QCG; full04–05 - random. Full00 It is not an independent checkpoint and is not an independent checkpoint.

| Input | Conflicts baseline | Conflicts fused | Speed ratios | Peak OS baseline / fused, MiB | Both answers |
|---|---:|---:|---:|---:|---|
| full00 | 5 | 24 | 4.80× | 215.4 / 263.7 | unknown / timeout |
| full01 | 6 | 25 | 4.17× | 216.5 / 263.9 | unknown / timeout |
| full02 | 5 | 21 | 4.20× | 215.4 / 250.6 | unknown / timeout |
| full03 | 6 | 22 | 3.67× | 216.8 / 262.2 | unknown / timeout |
| full04 | 5 | 30 | 6.00× | 215.3 / 272.4 | unknown / timeout |
| full05 | 5 | 24 | 4.80× | 214.7 / 263.4 | unknown / timeout |

OS Peaks: baseline 214.7–216.8 MiB, fused 250.6–272.4 MiB. They include service building/query serialization; they cannot be directly compared to other measuring code SEQ-26. The speed of conflicts is a secondary metric: different branches and learned constraints, unknown share of the global space explored, no time estimate to complete recovery, no guarantee of behavior in a longer search 600 s/8 GiB.

## Verification of the selected scalar reduction

After the measurements are completed, additionally checked 8 task p=17 real n, In both modes, equations x·y=1, y=x², y²=k: upon k=1 witness x=y=1; upon k=3 from x³=1 and x⁴=3 shoulder x=3, contradictory 27≡1 (No module is divided) 26). All the answers matched these proven benchmarks F4/batch/the low-field path, and the statistics of each fused-The launch confirmed the implementation fused reductions. These service parameters were not used in the main series. SCALAR_VALIDATION.json - an artifact of the initial study (`SCALAR_VALIDATION.json`; outside the picture), AUDIT_EXTRA.json - an artifact of the initial study (`AUDIT_EXTRA.json`; outside the picture.

## Verification and reproduction

AUDIT.json - an artifact of the initial study (`AUDIT.json`; outside the picture: 64 Small answers, 20 matching full-size bodies, initial masks/monomes, all 11994 previous files SHA-256 and mtime, 1792 previous dependencies and 35 file Z3. The official source archive and 3661 Extracted files checked; libraries and diagnostics patch preserved.

RESULTS.json - an artifact of the initial study (`RESULTS.json`; outside the picture), COMPARISON.json - an artifact of the initial study (`COMPARISON.json`; outside the picture), [PROTOCOL_B.md](<PROTOCOL_B.md>), PLAN_C.json - an artifact of the initial study (`PLAN_C.json`; outside the image) contain full metrics and conditions stdout/stderr, Memory tracks and reasons for stopping are saved. Checkpoint There's no search. CLOSURE.json - an artifact of the initial study (`CLOSURE.json`; outside the picture) associates new attempts with old open entrances.

Repeat to a new folder outside the sealed experiment `replay_case.py full00 --mode fused --output <новая-абсолютная-папка> --timeout-ms 120000 --memory-mib 2048`, using research `.venv/Scripts/python.exe -B`The script uses the same API-settings and external limits. It's a start-up, not a continuation checkpoint.

Technical corrections are not hidden: two early launch attempts have ended before check off-road WSL and the definition of a downloaded library A3 The repeated values of the diagnostic statistics were mistakenly read as the first value; these detailed indicators are not used for selection. Worker v3 They keep all the records and add them together A4 Check the equality of the number of copies and native checks. [STATISTICS_CORRECTION.md](<STATISTICS_CORRECTION.md>) An additional deeper profile has not been collected: WSL restarted and cleared the temporary assembly tree; failure occurred before the source codes were changed, the archives were saved and the control system was ready/The instrumental libraries are not affected.

For further accurate search, it makes sense to keep the optimizations found. The main open question now is getting stronger limits on branches without guessing the full set of bits; this experiment did not develop such a method.
