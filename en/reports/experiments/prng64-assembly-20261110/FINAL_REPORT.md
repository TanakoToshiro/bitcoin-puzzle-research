> English machine translation of the [Russian source](<../../../../ru/reports/experiments/prng64-assembly-20261110/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# RNG64-02 the result of limited expansion, 10 November 2026

From 60 registered assemblies: **31 New local contradictions**,
**12 Transfers of previously proven contradictions**, **17 half-way**.
The kit contains 3 families, 2 byte 10 location/omissions.
State checks, not too much seed. Candidates who have come to the real holdout: 0.

| The family | New UNSAT | Equivalent to the old UNSAT | Not complete |
|---|---:|---:|---:|
| plus23-17-26 | 9 | 4 | 7 |
| plus23-18-5 | 6 | 4 | 10 |
| star12-25-27 | 16 | 4 | 0 |

The cycle on the registered protocol is completed, but incomplete mathematical data
The tests remain open. They can't be added to the excluded hypotheses.

## Methodology and data

Used 83 solution from an unchanged image RNG64-01; ranges, public
Keys and addresses are checked independently Python-arithmetic coincurve.
Protocol and hashes: [PROTOCOL.md](<PROTOCOL.md>), MANIFEST.json - an artifact of the initial study (`MANIFEST.json`; outside the picture.
Parameters of all lines: SCHEMES.json - an artifact of the initial study (`SCHEMES.json`; outside the picture), numbers: SUMMARY.csv - an artifact of the initial study (`SUMMARY.csv`; outside the picture.
Local fitting: №130 for 64*, №135 for 128+. The second one is reserved
supplementary fitting, others 81 — holdout. It's not split №1–50.

Six new cyclic rotations of the straight line/inverse order; separately direct and
reverse-order offsets (0,2,4,6) or0,1,3,4). The Invisible Old Word
discarded only under local conditions; no forced bit is used.
12 The equivalences are certified by relative exit times and masks.
[Mathematical justification](<MATH.md>).

Woo xorshift64* One full word gives you a single state xorshift128+
condition z formu,z−u modulo 2^64), remains 64 bat.
All transfers in addition are counted 20 s/request before 60 s/local problem,
before 8 SAT-It required a total blindness to allow real entry
restoration of a synthetic example with the same mask and assembly.

## Monitoring and audit

Checked out 7 168 historical outings and 1 440 assembly-case/parsing
contradictions, ambiguity and UNKNOWN artificially resource-limit.
For complete synthetic restorations, a series of all 83 number
with two key distances, 81 holdout and hidden no71.

A separate audit is an artifact of the original study (`reviews/AUDIT.json`; outside the picture) uses a new numerical implementation
Transitions, handling and assembly; checks entrances, witnesses SAT, face-masks SMT.
Repeated UNSAT-query:unsat': 29, 'unknown': 1}.
All 15 real-life SMT-The contradictions were confirmed by repetition UNKNOWN pertaining
proof of the uniqueness of the synthetic state plus23-18-5-little-08.
Separate repetition of this audit with a limit 60 c: cases\plus23-18-5-little-08\synthetic\search\query-001.smt2: unsat, 22.422 s.
First UNKNOWN The limits of the main series and its conclusions have not changed.
Used the same Z3, This is a re-execution, not independent SMT-engine
and non-formal certificate UNSAT. Synthetic secrets were not passed on to the interface
The old ones, the old ones 470 The attached files are not changed.
Verification of re-entry run.py: 776 step-file
Save bytes and time of change; completed calculations did not repeat.

## Cost and result

The total time of the synthetic tasks saved: 419.920 (c) The real challenges:
31.809 c These are the times of task from OUTPUT.json, partial wall-time with preparation,
cryptographic controls, process start-ups and audits SMT:
85.867 s. GPU And the cloud wasn't used.

New localities UNSAT These assemblies are excluded regardless of the distance between
Keys: A single known key is not consistent with any non-zero state.
Increasing the cross-key step won't fix them
permutations, intervals, PRNG or alternative methods of masking.

Open options:
- plus23-17-26-big-02: incomplete_unknown
- plus23-17-26-big-03: incomplete_unknown
- plus23-17-26-big-06: incomplete_unknown
- plus23-17-26-big-07: incomplete_unknown
- plus23-17-26-little-02: incomplete_unknown
- plus23-17-26-little-03: incomplete_unknown
- plus23-17-26-little-06: incomplete_unknown
- plus23-18-5-big-01: incomplete_unknown
- plus23-18-5-big-02: incomplete_unknown
- plus23-18-5-big-03: incomplete_unknown
- plus23-18-5-big-06: incomplete_unknown
- plus23-18-5-big-07: incomplete_unknown
- plus23-18-5-little-01: incomplete_unknown
- plus23-18-5-little-02: incomplete_unknown
- plus23-18-5-little-03: incomplete_unknown
- plus23-18-5-little-06: incomplete_unknown
- plus23-18-5-little-07: incomplete_unknown

For them, the current method has not completed synthetic control of the registered
limit; the actual inputs are unexplored
retaining the same synthetic examples, but with a new solution technique or more
This is preferable to expanding the list of hypotheses without completing the controls.
There is no restriction on the real key No71 Not from that experience.

## Artifacts and continuation

RUN_RESULT.json - an artifact of the initial study (`RUN_RESULT.json`; outside the picture), cases/<id>/RESULT.json, INPUT.json,
search/OUTPUT.json, query-*.smt2 and query-*.json It contains all the intermediate results.
Causes UNKNOWN preserved query JSON. [README.md](<README.md>) commands
Resume, audit and reassemble the report without repeating the main series.
COMPLETE.json fixes the completed computational cycle with the specified limits,
It's not a decision 60 mathematical problems.
