> English machine translation of the [Russian source](<../../../../ru/reports/experiments/prng64-carry-20261110/METHOD.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Exact network of known amount

Known z=x+y mod 2^w for the condition immediately after the first full exit.
For every bit j And the usual addition is:

`y_j = x_j XOR c_j XOR z_j`, `c_0=0`.

Substitution in majority(x_j,y_j,c_j) gives:

- z_j=0 ⇒ `c_(j+1)=x_j OR c_j`;
- z_j=1 ⇒ `c_(j+1)=x_j AND c_j`.

All 8 Local combinations are stored in controls/CARRY_MATH.json. End transfer
discarded: this modulo 2^w, It's not limiting the lack of overflow.
For fixed x,z all transfers and y unambiguously y=(z−x) mod 2^w.
From local identity and c_0=0 Induction by bit position follows correctness
for any width w; checks for small words 64-The bit boundaries are checked for implementation.

V CMS variable 1..64 target x. The rest are auxiliary transfer variables
The affinity constant is stored in a separate bit of the mask, not a single one
It is replaced by an unknown variable. y build-up x/c/z, then the forms spread out
previous exact straight and reverse transitions anchor-
No extras are added. The rest of the outputs are left with the same addition model.

Cvc5 Uses a separate implementation: extracting bits of one 64-bit x,
single-bit OR/AND-transfers, XOR concatenation y. Subtraction as a finished operation
It is not used; ordinary modular subtraction serves as an independent verification of the result.

Zero sum does not mean zero state x=y=2^63 allowable
z=0 modulo 2^64. Therefore, it is only forbidden x=0 upon z=0. Primary z!=0 zero
It's no longer structurally possible, and these cases have been tested by both solvers.

Blocking the solution found - only by x. It's full, because it's different y upon
similar x,z Impossible; individual tests explicitly prohibit correct y fixedly
x demand UNSAT. Return of state to offset0 and subsequent masks are checked
The previous numerical implementation of the generator.

Reduction doesn't give you any more information about the real key
already limited 128-bit-state 2^64 pairs before the rest of the observations.
Only the effectiveness of the explicit network is tested solver. 64 independent input bits
do not 64 SAT-Variables: Auxiliary variables are also included in the formula size.
Comparison with the previous series is made on the same inputs and limits.
