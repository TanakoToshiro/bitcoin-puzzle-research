> English machine translation of the [Russian source](<../../../../ru/reports/experiments/prng64-carry-20261110/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# RNG64-05 Simplification of the network of transfers of known amount

10 November 2026. **New local exceptions: 0; open cases: 10.**
Complete synthetic-restorations: 0 from 20 attempts10 cases × 2 engine.
Save SAT-witnesses: 1. Case status: {'synthetic_incomplete': 10}.
All saved 21 request: 1 SAT, 20 UNKNOWN, 0 UNSAT.
Given the previous series, locally excluded 50 from 60 registered assemblies.
UNKNOWN It's not considered a refutation of the circuit71 Not received.

## Verified modification

Immediately after the first full release is known z=x+y mod 2^64.
Instead of two clearly defined words, a network is built from one x:

```
c_0 = 0
y_j = x_j XOR c_j XOR z_j
c_(j+1) = x_j OR c_j    при z_j=0
c_(j+1) = x_j AND c_j   при z_j=1
```

The last transfer is discarded y fixedly x,z no; lockdown
SAT carry out 64 bitumen x. Primary z=0 only forbidden x=0, Not all zero
In particular, the amount x=y=2^63 rightly z=0 modulo 2^64.

CMS plainly AND/OR and affinity XOR-constant shapes; cvc5 - independent
implementation through bit extraction, single-bit transfers and concatenation y. Others
outputs, direct/reverse transitions, packing And the masks don't change anchor-
The amount is used once by design. [Mathematics](<METHOD.md>).

It is algebraically the same reductionx,z−x), which was already present in the former Z3.
The reduction in the number of clearly independent input bits is not new information about
condition: the old amount limit already set the same allowable pairs x,y.
The subject of experience is the effectiveness of a particular network for solvers.

## Correctness control

Checked out 8 local combinations x_j,c_j,z_j and
87380 whole-word pairs 1..8. Both engines were carried out
712 checks for small words 64-of the boundary cases,
including the prohibition of alternative y fixedly x,z, zero and overflow.

32 reduced recovery-tasks coincide
complete enumeration of all non-zero states, including early ones/late partial masks.
20 A pair of full-bit tests confirmed the correct
state and rejected the corrupted observed bit UNKNOWN
Fixed states are not passed off as blind recovery.

Each engine is allowed to enter the actual input only after its own full entry
blind-monitoring and inspection 83 synthetic masks, 81 holdout and the hidden no71 for
Two previous steps. The secret is available checker-coda worker. All SAT additionally
are checked by the previous numerical implementation of the generator in the original coordinates.

## Comparison of the previous ten inputs

Versions and limits have not changed: pycryptosat 5.18.0, cvc5 1.4.2, Python 3.11.9;
120 s/request, 240 s/engine/occasional 8 Four independent states CPU-occasional.
Baseline RNG64-04 It is read from saved files; its calculations are not repeated.
Others PRNG, Transitions and inter-key steps are not included in this series.

| Case | Engine | Before: status / states | Now: status / states | Now, with | The real entrance |
|---|---|---|---|---:|---|
| plus23-17-26-big-02 | cms | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.001 | not_run |
| plus23-17-26-big-02 | cvc5 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.001 | not_run |
| plus23-17-26-big-03 | cms | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.007 | not_run |
| plus23-17-26-big-03 | cvc5 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.002 | not_run |
| plus23-17-26-little-02 | cms | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.018 | not_run |
| plus23-17-26-little-02 | cvc5 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.000 | not_run |
| plus23-17-26-little-03 | cms | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.002 | not_run |
| plus23-17-26-little-03 | cvc5 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.001 | not_run |
| plus23-18-5-big-02 | cms | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.003 | not_run |
| plus23-18-5-big-02 | cvc5 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.002 | not_run |
| plus23-18-5-big-03 | cms | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.005 | not_run |
| plus23-18-5-big-03 | cvc5 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.000 | not_run |
| plus23-18-5-big-06 | cms | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.014 | not_run |
| plus23-18-5-big-06 | cvc5 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.001 | not_run |
| plus23-18-5-little-02 | cms | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.012 | not_run |
| plus23-18-5-little-02 | cvc5 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.001 | not_run |
| plus23-18-5-little-03 | cms | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.004 | not_run |
| plus23-18-5-little-03 | cvc5 | incomplete_unknown / 0 | incomplete_unknown / 1 | 130.724 | not_run |
| plus23-18-5-little-06 | cms | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.011 | not_run |
| plus23-18-5-little-06 | cvc5 | incomplete_unknown / 0 | incomplete_unknown / 0 | 120.000 | not_run |


status / states The number and status of witnesses found, not the number of witnesses
allowable states UNKNOWN. Full numerical table: SUMMARY.csv - an artifact of the initial study (`SUMMARY.csv`; outside the picture.

## The only partial SAT-result

V `plus23-18-5-little-03` engine cvc5 found SAT-witness 10.723 C. It satisfies all 134 It's the bits that we've seen, but it doesn't match the initial state, and the embedded state has also been verified by the normal execution synthetic-There are at least two states of entry that are permissible. It's the ambiguity of observation, not error SAT-After blocking the condition, the next request was unknown behind 120.001 cUnknownExplanation.TIMEOUT). The initial state has not been restored, the completeness of the enumeration has not been proven; there is no tolerance to the actual entry.


Machine reconciliation: reviews/PARTIAL_SAT.json - an artifact of the initial study (`reviews/PARTIAL_SAT.json`; outside the picture RNG64-04
at these entrances SAT-There were no witnesses. One witness was partial
The result is at a specific input; there is no full recovery and no new exception.

## Sizes of formulas CMS

| Case | All SAT-variable | CNF-suggestions | XOR-equation | Entry into XOR |
|---|---:|---:|---:|---:|
| plus23-17-26-big-02 | 393 → 391 | 394 → 390 | 268 → 267 | 1474 → 1516 |
| plus23-17-26-big-03 | 393 → 390 | 394 → 387 | 268 → 267 | 1474 → 1511 |
| plus23-17-26-little-02 | 505 → 502 | 727 → 720 | 324 → 323 | 1796 → 1809 |
| plus23-17-26-little-03 | 505 → 502 | 727 → 720 | 324 → 323 | 1796 → 1809 |
| plus23-18-5-big-02 | 393 → 390 | 394 → 387 | 268 → 267 | 1676 → 1637 |
| plus23-18-5-big-03 | 393 → 390 | 394 → 387 | 268 → 267 | 1676 → 1637 |
| plus23-18-5-big-06 | 399 → 397 | 394 → 390 | 274 → 273 | 1520 → 1388 |
| plus23-18-5-little-02 | 505 → 503 | 727 → 723 | 324 → 323 | 2017 → 1980 |
| plus23-18-5-little-03 | 505 → 503 | 727 → 723 | 324 → 323 | 2017 → 1980 |
| plus23-18-5-little-06 | 567 → 565 | 727 → 723 | 386 → 385 | 3449 → 3108 |


64 Independent input bits don’t mean everything 64 SAT-variables: transfers and linear
Forms remain auxiliary variables. The network rewires the connections and doesn't have to
It's the size before the internal transformations
solver, It's not measuring the minimum complexity of a task.
reviews/CIRCUIT_SIZES.json.

## Time and audit

Amount saved solver-time: 2410.810 c. Main series of
End of preliminary controls until completion: 735.907671 s wall-time The magazine.
Controls are in place 3.070 c; installation, code writing and auditing
into solver-time Four processes and internal differences wall/CPU-limit
They limit the accuracy of direct speed comparisons
Measurement, not proof of equal speed of two encodings.

Audit reviews/AUDIT.json - an artifact of the initial study (`reviews/AUDIT.json`; outside the image) checked the code, libraries, copies of inputs,
Both saved formulas and witnesses matching the original arithmetic.
{'queries': 21, 'rebuilt_cnf_xor': 10, 'outputs': 20, 'real_not_run': 20, 'synthetic_complete': 0, 'rebuilt_smt': 11, 'sat_witnesses': 1}. The old ones 187 non-file-file
The update saved bytes and mtime everyone 177
Computational step files. Competitive OS lock checked watchdog
directing the immediate process solver, nonintermediate launcher.

## Permissible conclusion

Equivalence of simplified network tested. Practical result of recovery
This is determined by the table above and refers only to these inputs and limits.
Non-passage blind-Control is not a negative result on the actual
New conclusions will require a complete solution, not a renaming
UNKNOWN There's no running of any additional computational series here.

This series does not confirm the use of xorshift128+ writer Bitcoin Puzzle.
Ten cases - specific assemblies within the proposed model; their open
The status is not evidence of this model
I didn't give you any more information about the real key GPU-prototype
separately designed RNG64-GPU-01 and RNG64-05 Not on.

All intermediate states, formulas, answers and causes UNKNOWN preserved cases/;
progress of work JOURNAL.md and RESULTS.md. Teams -- [README.md](<README.md>).
COMPLETE.json records the completion of the registered cycle with the specified limits,
It's not the solution of all ten mathematical problems.
