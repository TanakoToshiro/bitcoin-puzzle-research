> English machine translation of the [Russian source](<../../../../ru/reports/experiments/prng64-anchor-20261110/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# RNG64-04 - coordinates at the first fully known exit

10 November 2026. **New local exceptions: 0; open local cases: 10.**
None of them 20 check-up synthetic-Recovery is not complete at the limit 0 SAT-witnesses in these attempts.
Case status: {'synthetic_incomplete': 10}. Given the previous series, locally excluded
50 from 60 registered assemblies. UNKNOWN It's not a refutation.

## What exactly is verified

Exactly 10 previous open cases RNG64-03, baseline synthetic-entrances saved
Only the coordinate system changes: we don't know the state immediately after
The first fully observable exit u,v satisfyingly `u+v=z mod 2^64`.
Early observations are expressed through a precise reverse transition; they are not discarded.
Status locking has also been transferred to the new system. [Rationale](<METHOD.md>).

CryptoMiniSat 5.18.0 use XOR+CNF, cvc5 1.4.2 - bit vectors.
Limits are the same: 120 s/request, 240 s/engine/occasional 8 SAT-fortunes.
Both engines are running on all ten synthetic-entrances; 4 independent CPU-process.
Z3, reductionist `(u,z-u)`It didn't re-start.
The previous comparison results are read from RNG64-03, without recalculating.

## Correctness before basic calculations

32 reduced-width They've been tested by both engines, and they've gone through a lot of work
partial observations prior to anchor, Younger and older masks.
For each complete family/assemblies checked all 128 basic vectors:
5 376 Comparisons of states with the previous independent numerical implementation.
20 pair fixed-state tests10 assembly × 2 engine: correct observation and
A deliberately corrupted bit. Zero state, ambiguity, and UNKNOWN.

Hidden synthetic states are only available checker-The solver's entrance
family/observations. Real data is only allowed to the engine that
finished blind-Restoration of this line and verification 83 masks
№71 for the two previous inter-key steps SAT It doesn't open that security clearance.
All SAT are checked by the usual execution in the original coordinates.

## Pair comparison with the previous coordinate system

In the columns status / states the number and status of the states found, not the number
allowable states UNKNOWN. Full time baseline And the current attempts
SUMMARY.csv - an artifact of the initial study (`SUMMARY.csv`; outside the picture.

| Case | Engine | Anchor | Before: status / states | Now: status / states | Now, with | The real entrance |
|---|---|---:|---|---|---:|---|
| plus23-17-26-big-02 | cms | 0 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.001 | not_run |
| plus23-17-26-big-02 | cvc5 | 0 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.000 | not_run |
| plus23-17-26-big-03 | cms | 0 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.015 | not_run |
| plus23-17-26-big-03 | cvc5 | 0 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.002 | not_run |
| plus23-17-26-little-02 | cms | 0 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.001 | not_run |
| plus23-17-26-little-02 | cvc5 | 0 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.001 | not_run |
| plus23-17-26-little-03 | cms | 0 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.009 | not_run |
| plus23-17-26-little-03 | cvc5 | 0 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.000 | not_run |
| plus23-18-5-big-02 | cms | 0 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.011 | not_run |
| plus23-18-5-big-02 | cvc5 | 0 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.000 | not_run |
| plus23-18-5-big-03 | cms | 0 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.007 | not_run |
| plus23-18-5-big-03 | cvc5 | 0 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.001 | not_run |
| plus23-18-5-big-06 | cms | 2 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.003 | not_run |
| plus23-18-5-big-06 | cvc5 | 2 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.002 | not_run |
| plus23-18-5-little-02 | cms | 0 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.002 | not_run |
| plus23-18-5-little-02 | cvc5 | 0 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.001 | not_run |
| plus23-18-5-little-03 | cms | 0 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.016 | not_run |
| plus23-18-5-little-03 | cvc5 | 0 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.000 | not_run |
| plus23-18-5-little-06 | cms | 2 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.006 | not_run |
| plus23-18-5-little-06 | cvc5 | 2 | incomplete_unknown / 1 | incomplete_unknown / 0 | 120.000 | not_run |


## Size of formulas

| Case | Variables | XOR-equation | Entry into XOR | Maximum length XOR |
|---|---:|---:|---:|---:|
| plus23-17-26-big-02 | 457 → 393 | 332 → 268 | 2240 → 1474 | 18 → 11 |
| plus23-17-26-big-03 | 457 → 393 | 332 → 268 | 2240 → 1474 | 18 → 11 |
| plus23-17-26-little-02 | 569 → 505 | 388 → 324 | 2695 → 1796 | 18 → 11 |
| plus23-17-26-little-03 | 569 → 505 | 388 → 324 | 2695 → 1796 | 18 → 11 |
| plus23-18-5-big-02 | 457 → 393 | 332 → 268 | 2571 → 1676 | 22 → 14 |
| plus23-18-5-big-03 | 457 → 393 | 332 → 268 | 2571 → 1676 | 22 → 14 |
| plus23-18-5-big-06 | 521 → 399 | 396 → 274 | 3721 → 1520 | 22 → 23 |
| plus23-18-5-little-02 | 569 → 505 | 388 → 324 | 3064 → 2017 | 22 → 14 |
| plus23-18-5-little-03 | 569 → 505 | 388 → 324 | 3064 → 2017 | 22 → 14 |
| plus23-18-5-little-06 | 633 → 567 | 452 → 386 | 4062 → 3449 | 22 → 26 |


These dimensions are clearly XOR/CNF-Models for Internal Transformation solver;
They don't measure the minimum size of a task, and they don't prove acceleration
machine data: reviews/CIRCUIT_SIZES.json. The change of coordinates is a bijection:
It does not change the number of valid states and does not add observations about the key.

## Cost, audit and reproducibility

Amount saved solver-time: 2400.079 c This is the sum of time
challenge, not wall-time a series with four processes. parallel load and
The differences in the semantics of internal limits limit the exact speed comparison.
For unfinished attempts, time is censored by a limit; of two timeouts, you cannot
The same speed of the algorithms.

Audit: reviews/AUDIT.json - an artifact of the initial study (`reviews/AUDIT.json`Counters: {'}queries': 20, 'rebuilt_cnf_xor': 10, 'outputs': 20, 'real_not_run': 20, 'synthetic_complete': 0}.
Hashes of code, libraries, formulas, states in both coordinate systems have been checked and
admission real-The old entrances 513 fixed
Files unchanged. Renewal check saved bytes and mtime everyone
173 Computational step files, OS lock check
It's a competitive takeover watchdog direct solver.

## Conclusion and limits

The result applies only to these inputs, coordinates, engines and budgets.
Lack of completion synthetic-Recovery does not rule out real models.
Decreasing the formula record does not in itself mean a practical gain.
A specific untested continuation is to simplify the network of transfers of a known amount
Identity and conditions of application
recorded [FUTURE.md](<FUTURE.md>)This is algebraically equivalent to the previous reduction
`(x,z-x)`; a new possible advantage applies only to encoding for the solver.
Acceleration has not yet been tested and no additional series has been launched.

Continuation and reassembly of the report: [README.md](<README.md>).
Interim results: RESULTS.md, JOURNAL.md, cases/, RUN_RESULT.json.
COMPLETE.json It is the end of the registered cycle, not the decision
All mathematical problems. New limitation on the real key71 in this series
Not received.
