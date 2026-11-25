> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-degree-elimination-20261102/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-10 Exclusion of high degrees to the Gröbner basis

02.11.2026. The next experiment is authorized by the user
module n, Exports and masks are preserved. Only the way of dealing is changed
already certified polynomials SEQ-09.

## Non-sampling calibration

On three saved positive examples SEQ-09 done RREF
ratio QQ with monomes in descending order of degree:

- n, panel 9, h16 general: rank 33, degree {3:5, 2:20, 1:8}.
- n, panel 13, h16 general: rank 57, degree {3:9, 2:36, 1:12}.
- n², panel 5, h16 general: rank 49, degree {6:1, 5:4, 4:14,
  3:16, 2:10, 1:4}.

This is the basis for the method. Old examples are not added to the new sample.
Neither the previous search stages nor the previous ones LLL They don't re-start.

## New method

The starting lines are polynomials only g well-assessed H < N from SEQ-09.
They're zero above integers at every allowed root. Monomes are sorted
(a) in the full extent of the lex). For the coefficient matrix A built
rationalization [A | I] stepwise [H | T].
Certificates retained T*A=H and det(T) != 0: The system has the same zeros.
Rational combinations of already proven zeros are again zeros.
reassess H < N You don't need these combinations.

Strings of degree 1 They give affinity limits to the original variables.
If all variables are defined, the only one
the rational candidate is tested in all original polynomials;
The nonzero constant proves a contradiction.
If free variables remain and there are no polynomials, the result is
It's a positive dimension, otherwise it starts on a smaller system
former F5B/grevlex, FGLM Extraction of whole roots (limits) 256/256).
Common chain of 135 fortunes 83 The masks are checked as before.

No guessing factors, no branching, no squares
Unstrict equations or enumeration of hidden higher bits.

## New Fixed Sample and Comparison

Two targeted cases: panel 5 s N=n² panel 13 s N=n.
For each panel: h=12,16,18,20, general and inverted
generator8 positive, two positive with initial
masks and two random h16. Totally 24 new entrances:
16 reinforced positives, 4 with the original masks, 4 accidental.

Seed fixed experiment.py. All inputs are created before the first launch.
First all the original masks, then by levels h Both panels, then random.
For each entrance:

1. The old method SEQ-08 on differences (`primal`before 45 seconds.
2. One common coefficient grid (`prepare`before 45 seconds.
3. Direct solution of original polynomials SEQ-09 (`raw`before 15 seconds.
4. Exclusion of high degrees and affinity variables (`degree`before 15 seconds.

The last two receive the same stored set of polynomials and an equal
Their algebraic time is separated from their general training.
96 Planned stages, total budget of subsidiaries 900 seconds.
Timeout, lack of strict polynomials and proven contradictions differ.
A skip due to budget is not considered a failed model check.
Parameters and inputs after confirming results are not selected.

This series checks the solver and contains a structural calculation of the real
Admission of future real search: both positive
Examples with the original masks restored for the appropriate panel.
In this series, the real reduction and over-examination are not planned.

## Acceptance

Small systems with mixed high and low degrees, dependent
strings, free variables, contradiction, incomplete root and
Residual nonlinear solution: independent audit of the transformation,
exact roots, original polynomials, lattices, shifts and complete chain.
Preservation SHA256/mtime all accepted SEQ-01..09, existing libraries,
Continuation testing without computation CPU-process;
no installations, GPU Changes to previously accepted files.
