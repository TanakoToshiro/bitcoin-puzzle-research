> English machine translation of the [Russian source](<../../../../ru/reports/experiments/prng64-solver-20261110/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# RNG64-03 decision 17 open-ended tasks, 10 November 2026

**New local exceptions: 7; The remaining open local tasks: 10.**
Status: {'synthetic_incomplete': 10, 'local_unsat': 7}. The previous series had 31 new exception and 12 transference
old contradictions; with this continuation locally excluded 50 from 60 lines.
Open cases cannot be considered negative results
There is no new restriction on the real key71 Not received.

## What's changed

Same ones 17 synthetic examples, assemblies, masks and fitting/holdout. Straight linear
transition 128 bits XOR-Addition transfers are encoded
precise AND/OR/majority-terms. CryptoMiniSat receiver XOR+CNF; independent cvc5 —
bit vectors of straight states and additions modulo 2^64. Original Z3 used
The last one to be controlled with a higher limit. [Rationale](<METHOD.md>).

No too much seed change PRNG/packing No, it's fixed [protocol](<PROTOCOL.md>).
Versions: pycryptosat 5.18.0, cvc5 1.4.2, z3-solver 5.3.3.0, Python 3.11.9.
All calculations are local CPU, without GPU/Input and code: MANIFEST.json; binary
libraries: ENVIRONMENT.json; full dependencies: requirements-frozen.txt.

## Correctness

16 full-time 5/6 bit: all permissible non-zero states
Comparison with the complete answers of both engines. 34 A pair of full-size tests:
17 assembly × 2 engine, fixed correct state and corrupted observed
Ambiguity, zero-state prohibition and resource UNKNOWN.
These checks with a known condition are not issued for blind recovery.

The algorithm only gets it family/observations; hidden state available to the examiner
The primary real problem is allowed after complete blindness synthetic-listings,
83 numbers with reference passes, 81 holdout and the hidden no71 for the two previous steps.
Every day SAT It is checked by normal performance. UNSAT after banning all found
states means completeness; one SAT finishless UNSAT - an incomplete result.

## Pilot and comparison

| Case | Engine | Result | Solver time, s |
|---|---|---|---:|
| plus23-17-26-big-02 | cms | incomplete_unknown | 10.002 |
| plus23-17-26-big-02 | cvc5 | incomplete_unknown | 10.001 |
| plus23-17-26-little-02 | cms | incomplete_unknown | 10.010 |
| plus23-17-26-little-02 | cvc5 | incomplete_unknown | 10.001 |
| plus23-18-5-big-01 | cms | complete | 2.481 |
| plus23-18-5-big-01 | cvc5 | complete | 8.448 |
| plus23-18-5-little-01 | cms | complete | 2.055 |
| plus23-18-5-little-01 | cvc5 | complete | 4.510 |

The order of methods is chosen only for these reasons synthetic-pilots: ['cms', 'cvc5', 'z3-baseline'].
On two occasions 23/18/5-01 CryptoMiniSat Completed the recovery and proved
singularity 2,1–2,5 seconds; before Z3 He found a fortune, but he exhausted the limit
This is a confirmed improvement on these fixed values
Inputs, not universal acceleration PRNG-cryptanalysis.

Pilots are limited 10 s/The main series is 120 s/request, 240 s/method
before 8 The previous limit was 20 s/If the new result requires more
20 c. the mere receipt does not separate a change in model from an increase in budget.
You can't say it's accurate speedup based on the old timeout.

## Results of all 17 lineage

| Assembly | Outcome | Successful synthetic-engine | Synthetic solver time, s | Independent real-control |
|---|---|---|---:|---|
| plus23-17-26-big-02 | synthetic_incomplete | — | — | — |
| plus23-17-26-big-03 | synthetic_incomplete | — | — | — |
| plus23-17-26-big-06 | local_unsat | cms | 9.651 | unsat |
| plus23-17-26-big-07 | local_unsat | cms | 9.307 | unsat |
| plus23-17-26-little-02 | synthetic_incomplete | — | — | — |
| plus23-17-26-little-03 | synthetic_incomplete | — | — | — |
| plus23-17-26-little-06 | local_unsat | cms | 12.516 | unsat |
| plus23-18-5-big-01 | local_unsat | cms | 2.481 | unsat |
| plus23-18-5-big-02 | synthetic_incomplete | — | — | — |
| plus23-18-5-big-03 | synthetic_incomplete | — | — | — |
| plus23-18-5-big-06 | synthetic_incomplete | — | — | — |
| plus23-18-5-big-07 | local_unsat | cms | 22.042 | unsat |
| plus23-18-5-little-01 | local_unsat | cms | 2.055 | unsat |
| plus23-18-5-little-02 | synthetic_incomplete | — | — | — |
| plus23-18-5-little-03 | synthetic_incomplete | — | — | — |
| plus23-18-5-little-06 | synthetic_incomplete | — | — | — |
| plus23-18-5-little-07 | local_unsat | cms | 27.38 | unsat |


Numbers derived from RUN_RESULT.json - an artifact of the initial study (`RUN_RESULT.json`; outside the picture), SUMMARY.csv - an artifact of the initial study (`SUMMARY.csv`; outside the picture),
PILOT.json and cases/*/*/*/OUTPUT.json. Time of all saved requests,
Including pilots, unsuccessful attempts and independent checks: 4265.689 s.
It's a sum solver time, not wall-time with the start of processes and preparation.
It does not include an interrupted incomplete request when switching the bandage;
its process and launch time are saved in reviews/SWITCH_PROCESSES.json.
After the first consecutive cases, four independent CPU-process.
108 The completed files were saved bytes and mtime. One incomplete
request for independent review cvc5 has been restarted; a stop is not considered UNSAT.
Changes in execution and the effect of competing loads on times: [EXECUTION.md](<EXECUTION.md>).

## Audit and reproducibility

Audit: reviews/AUDIT.json - an artifact of the initial study (`reviews/AUDIT.json`; outside the picture 835
the files of the previous series, unchangedqueries': 77, 'cnf_xor_formulas_rebuilt': 33, 'outputs': 62, 'independent_sat_witnesses': 15, 'real_unsat': 7, 'independently_confirmed_unsat': 7, 'independent_83_plus_71_series': 14, 'secondary_blind_controls_complete': 7, 'secondary_blind_controls_retrospective': 5, 'secondary_blind_controls_incomplete': 0}.
The auditor’s numerical implementation is separated from the generator CNF and cvc5-Two engines
Provide an independent review of completed real-UNSAT, But it's not an external formal
Certificate of proof. UNKNOWN The second engine is marked separately.

Deviation of the order of secondary inspections: part real-cross-control
completed synthetic-control of the main engine, but before its own
The primary conclusion is correct. Missed
secondary blind-The controls are performed separately after the main series; their outcomes and
retrospective order is maintained in reviews/CROSS_CONTROLS.json and EXECUTION.md.
All seven secondary blind checks have now been completed; five have been carried out retrospectively.

Renewal: 430 Computational step files have been saved
content mtime; The completed tasks were not repeated
defender runner from doubles; competitive takeover is indeed rejected
into reviews/LOCK_CHECK.json. Teams are brought in [README.md](<README.md>).

## Boundaries of withdrawal and continuation

Local UNSAT Exclude exactly specified assemblies for any key inter-distance.
It's not a conclusion against everyone xorshift128+, wallets or the original method of masking.
Remaining cases require another way to address the retained limitations or
All formulas and intermediate states found
Repeat closed circuits are not required.

Open cases by type of assembly: {'rotation': 8, 'intra_gap': 2}. That's eight shifts with two
full exits at a distance of three steps and two assemblies 23/18/5 s offsets
(0,2,4,6), straight-line endian. For all ten, the real entrances
None of the three methods completed blind control at the limit.
The next testable idea is to change the coordinates XOR-first-state
fully observable output, retaining accurate inverse transitions for early bits.
This is a proposal so far, not an accelerated test; no additional cycle has been started here.

Interface sources: [CryptoMiniSat Python](https://github.com/msoos/cryptominisat/blob/master/python/README.md),
[cvc5 options](https://cvc5.github.io/docs/latest/options.html)Snapshots and SHA-256 — sources/SOURCES.json.
