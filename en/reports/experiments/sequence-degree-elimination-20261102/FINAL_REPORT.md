> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-degree-elimination-20261102/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-10 Exclusion of high degrees before decision

02.11.2026. Run `SEQ-10-9a392fd87bdc`Limited series and independent audit completed.

## Result

New solver extracts linear equations from certified polynomials
before calculating the Gröbner basis 16 New reinforced positive inputs:
SEQ-10 — **10 restoration**,
straight-line F5B — **0**,
heuristics SEQ-08 — **12**.
The denominator is here 16 specified inputs; incomplete cases are noted below.

New Recoveries Relative to Direct F5B: 10.
Relatively SEQ-08: **0 new cases**,
? 2 The case has only been restored SEQ-08.
These differences are more important than the comparison of total numbers.

On four positive examples with the original masks, the new method gave
0/4. The actual search was not in the protocol
It didn't start. **There is no real key or bit; the original model remains open.**

## Testable idea

V SEQ-09 short lines of lattice already gave strict whole equations, but
straight-line F5B There's some of these systems that don't fit into the budget
algebraic solution; Mobius transition, module n, export order,
The differences and cubic invariants of the double ratio remain the same.

The coefficients of polynomials form A; columns are ordered downwards
full extent, then lex. The exact rational transformation preserves:

```text
H = T*A,  det(T) != 0
A*m(u) = 0  <=>  H*m(u) = 0
```

After excluding high degrees, the strings of degree are found 1.
They give linear limits to the original variables u. If their rank
complete, a single rational point is determined; it is checked
All the original polynomials and should have integer coordinates
The non-zero proves a contradiction
Variables, exact substitution is performed and the nonlinear residue is solved.

All original polynomials have been rigorously evaluated SEQ-09
`sum(abs(g_alpha)*X^alpha) < N`Their rational combinations are equal, too
For derivatives of linear equations, you don't need to repeat a small estimate.
The arbitrary values of independent monomes are not taken for decision.
Removal of factors, branches or substitution of equations with approximations were not applied.

Only whole limited roots are passed on to the former complete tester
code: the relative trajectory of 135 fortunes, all 83 masks and intervals
The shift state class is being restored; the global state class is being rebuilt
The uniqueness of the real generator is not confirmed.

Before the new series was fixed, the three old systems showed the presence of the
8, 12 and 4 This is the calibration described in PROTOCOL.md;
Old examples are not included in the confirmatory sample and have not been recalculated LLL.

## New Entrances and Equal Conditions

24 new entrances: 16 reinforced positives, 4 positive
masked 4 random panel 5 use N=n², panel 13 — N=n.
Levels h=12,16,18,20; General and inverted generator to level.
In the selected panel known 256−h Minor bits; outside the panel, the masks are original.
Seed, The code and order are fixed prior to launch; all inputs are stored in advance.
The truth is used only for evaluation and independent audit.

Entrance starts first SEQ-08 (`primal`), then one general LLL
(`prepare`Straight F5B (`raw`) and a new solver (`degree`receive
The same stored polynomials. The limit of every algebra 15 seconds;
for primal and training 45 The total science budget 900 seconds.

Beginning 96 from 96 planned stages;
Measured total time of child processes - 809.65 s.
Wall time It involves starting and finishing the process, so the timeout
It is possible to slightly exceed the specified limit.

“Lim” in the table means an uncompleted or uninitiated attempt.
This is not a negative response to the existence of a model.

| Panel / polynomial | Decisive | h12 | h16 | h18 | h20 |
|---|---|---:|---:|---:|---:|
| 5, n² | Former SEQ-08 | 2/2 | 2/2 | 0/2 | 0/2 |
| 5, n² | Straight F5B SEQ-09 | 0/2 (2 Lim | 0/2 (2 Lim | 0/2 | 0/2 |
| 5, n² | Exclusion of degrees SEQ-10 | 2/2 | 2/2 | 0/2 | 0/2 |
| 13, n | Former SEQ-08 | 2/2 | 2/2 | 2/2 | 2/2 |
| 13, n | Straight F5B SEQ-09 | 0/2 (2 Lim | 0/2 (2 Lim | 0/2 (2 Lim | 0/2 |
| 13, n | Exclusion of degrees SEQ-10 | 2/2 | 2/2 | 2/2 | 0/2 |

All statuses:

- `primal`: `heuristic_no_candidate` — 12, `translation_classes_found` — 12.
- `prepare`: `prepared` — 24.
- `raw`: `no_certified_equations` — 10, `timeout` — 14.
- `degree`: `no_certified_equations` — 10, `translation_classes_found` — 10, `unit_ideal` — 4.

New cases concerning SEQ-08: Nope.

Only SEQ-08: `positive_p13_h20_general`, `positive_p13_h20_inverse`.

At random entrances, a new method was issued 4 strict
The statement refers to specific artificial inputs
and the given boundaries; the real keys were not thus excluded.

## What exactly accelerated?

The Algebraic Stage of Successful New Recoveries 3.34–9.53 c, median 3.52 s.
This is the time after the polynomials are received. The cost of the common lattice is recorded
The acceleration of algebra cannot be imputed as the same acceleration of everything
The assembly line, by comparison primal into MEASUREMENTS.json preserved
The amount of time for preparation and new decision.

Ways of the new solver: `{'empty': 10, 'linear_unique': 10, 'constant_row': 4}`.
Pathway `linear_unique` means that the Gröbner base for this entrance
It was not necessary at all; all unknowns were defined by linear lines.
Primary `constant_row` The contradiction is obtained by rational exclusion.

Straight F5B limited 15 in seconds of algebra, and in SEQ-09 limit 45 seconds
This applies to the entire method, including LLL. Therefore, interserial times
They don't compare like the same budgets. The main comparison is fresh budgets
paired entrances of this series with the same 15-Secondary limits.

## Independent verification

- 16 Small mixed systems, each aligned with all 289 whole
  pointwise [-8,8]². More 6 In some cases, the contradictions are checked, fractional root
  free affinity space and residual nonlinear solution.
- Checked out 48 precision lattice certificates
  and 782 strict polynomial strings.
- Checked out 24 The outcome of the new decision, including
  14 Not empty systems T*A=H and
  reversibility T Proved by precise arithmetic; linear system independently
  settled in SymPy. All roots are inserted into the original polynomials.
- Classes, complete chains, shear intervals and conditional projections No71
  The projections belong to synthetic inputs.
- 14 Uncompleted stages are not given for
  Completed algebraic tests and did not continue in the audit.
- All 2274 previous accepted files SEQ-01..09
  preserved SHA256 and mtime. The hashes of existing dependencies have been tested.
  Continuation without new calculations checked in RESUME_CHECK.json.

Files, commands and sources: README.md, SOURCES.md, AUDIT.json.

## Importance for further research

The series separates the adequacy of already obtained polynomials from the cost of their
Simple linear consequences can be hidden
in dense polynomials of high degrees; precise exclusion makes them available.
Two examples of the level do not provide a universal estimate of the probability of success.

For real masks, the main restriction remains at the stage of obtaining
The next meaningful step is to change the design
polynomial lattice or to obtain additional reasonable restrictions.
Increasing Gröbner's time alone will not create missing polynomials.
New Shift Systems, Modules and Transitions of the Hidden State SEQ-10
No protocol was added after fixing.
