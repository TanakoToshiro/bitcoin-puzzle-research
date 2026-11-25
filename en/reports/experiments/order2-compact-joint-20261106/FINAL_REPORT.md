> English machine translation of the [Russian source](<../../../../ru/reports/experiments/order2-compact-joint-20261106/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# O2-C01 - joint recovery without external brute force

6 November 2026, Europe/Moscow. Continuation O2-N01.

**Three accurate records of the system have been implemented and verified 18 partial
The search is not complete at fixed limits, two launches have found one each
the family, and then received UNKNOWN. Winning before the previous exact
No brute force at these small entrances, no real keys were examined.
new bits or exclusions of recursion modulo n Nope.**

## What's changed?

O2-N01 He listed the three senior parts and then turned the square polynomial.
Here, the outer cycle of threes is completely eliminated
selects all states on the grid in step 5: 17–22
relative states instead of 135 One-step numbers and passes saved.
After SAT The single-digit fifth root restores the full step, and the independent
Projector checks everything 83 Recovery and returns all permissible shifts.

Three records:

1. `rank`Cubic determinants of Gankel differences; A/B/C excluded.
2. `coefficients`General unknown short recursion coefficients.
3. `interval`: same recursion but general shift T Replaced with the exact minimum
   All classes of relative states are preserved.

The first order and permanent chains are accounted for by separate branches, with complete
The last nondegenerate determinants D and K
Cubic equations alone are not sufficient to prove completeness.
See. [mathematics](<MATH.md>), [protocol](<PROTOCOL.md>),
[supplementary](<SUPPLEMENT_PROTOCOL.md>).

## Inputs and boundaries of the experiment

Synthetic entrances modulo 17,37,67,127,257, from previous studies.
83 index: 1–70 and 75,80,…,135. Widths scaled from the original mask
k_i=i−1. True states/EXPECTED The search process was not passed on.
All 83 observations are used as restrictions; individual holdout this
It's not a test of a real generator Puzzle.

Z3 QF_BV, random_seed=0; 10 c upon request, 30 summarily solve-time on the branch,
before 128 SAT, external watchdog 90 (c) In the first UNKNOWN branching
Incomplete. Completeness requires UNSAT both branches after blocking all
found supports plus accounting constant. These conditions are not at any partial entrance
The number of known families found does not replace the certificate of completeness.

## Numbers from saved results

In the columns of new methods: **solver seconds; found/All families are still
fully**. All new lines incomplete. Full answers O2-J01 repeatedly
No computation. Old time is saved invocation time, new check-time
Z3; These are different measurement boundaries and not paired benchmark. Relation of times
The acceleration coefficient is not stated.

| Input | O2-J01, full answer, c | rank | coefficients | interval |
|---|---:|---:|---:|---:|
| p127-new0 | 0.226 | 12.28; 0/1 | 20.06; 0/1 | 20.05; 0/1 |
| p17-case0-all | 0.022 | 10.25; 0/7 | 14.98; 1/7 | 10.69; 0/7 |
| p17-case1-all | 0.020 | 19.92; 1/1 | 10.43; 0/1 | 10.41; 0/1 |
| p257-new0 | 0.207 | 14.71; 0/1 | 20.10; 0/1 | 20.37; 0/1 |
| p37-new0 | 0.025 | 11.18; 0/1 | 12.84; 0/1 | 14.73; 0/1 |
| p67-new0 | 0.037 | 11.87; 0/1 | 17.32; 0/1 | 19.53; 0/1 |

Totally solver time main series and additions: 287.887 (c)
It has partial entrances: 271.741 Installation,
Code writing, formula building and auditing are not included. UNKNOWN received
22 Partial search branches; the remaining branches completed UNSAT.

Maximums of internal statistics Z3 `max memory`: rank 323.00 MB,
coefficients 74.68 MB, interval 152.55 MB.
It's an internal meter **peak RSS process**. In these experiences interval
There is no end to, or steady reduction of, time/From the single memory
No statistical conclusion is made about all settings of the solver.

For p17-case1-all/rank The found family coincided with a single family
The old full answer; the new solver still hasn't proved the absence of others.
For p17-case0-all/coefficients found only 1 from 7. Their synthetic predictions
leftover 71 equal 0; This is not a limitation of the present 70-The bit residue.

## Monitoring and audit

- 12/12 complete tasks completed: generic, first-order, constant broken
  full-fledged generic, The negative control is really empty.
- 700 Minimum shift vs. independent search of all T;
  of 412 Zero widths and contradictions checked.
- 12600 windowless modulo 7: cubic
  The condition is equivalent to one total reversible recursion.
- 15 Expected families are independently verified
  It's all over the shifts; the full sets and the target residues matched.
- 42 Checks for full witness substitution in three encodings.
  It's **non-extraordinary recovery**. In the first case of the audit,
  which leaves the coefficients unknown, p257/interval gave UNKNOWN; later
  Coefficients and differences are also used to check the formula itself.
- All 68 Save requests verified by SHA-256; SAT
  re-checked for the saved SMT And the usual recursion.
- Continuation from saved SAT reproduced UNSAT, unchanged
  previous request; reading the completed results did not change the artifacts.
- 1320 file O2-J01 and 522 file O2-N01
  peer-to-peer COMPLETE. The received nucleus did not change.

Corrections of only checking binding are described in [AUDIT_NOTES](<reviews/AUDIT_NOTES.md>).
Audit: AUDIT.json - an artifact of the initial study (`AUDIT.json`; outside the picture. Numbers: CSV - an artifact of the initial study (`NUMERIC_TABLE.csv`; outside the picture),
JSON - an artifact of the initial study (`NUMERIC_REPORT.json`; outside the picture. SMT, witnesses and statistics: `cases/` and `supplement/`.

## Permissible conclusion and continuation

It was possible to build an accurate compact joint system and eliminate the shift
No loss of class, a practical algorithm for restoring the senior parts
This step has not yet been taken: even the field to 257 They are not closed in a short fixed
There's no exterior overload, but inside SAT It's a complex nonlinear search.
Extrapolate these times to 256 It is impossible to beat or declare a method impossible.

A larger full-size launch is not warranted by these results at this time.
The next meaningful option is a specialized algebraic exception
several older parts, taking into account their arithmetic progressions,
These are the same six closed control entrances
We've got timeouts with the promise of results, and we've saved formulas to continue
precise INPUT/EXPECTED, baseline SMT, Versions, budgets and all partial witnesses.
New limits/the solver must be fixed by a separate start; current UNKNOWN
nameless UNSAT The results of this cycle should not be rewritten.
