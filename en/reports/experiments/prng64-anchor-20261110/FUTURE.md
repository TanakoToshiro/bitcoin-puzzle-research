> English machine translation of the [Russian source](<../../../../ru/reports/experiments/prng64-anchor-20261110/FUTURE.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Untested Continuation: Simplify transfers of known amounts

This is a proposal for a separate series, not a change RNG64-04 and an unstated acceleration.
The current series isolates the coordinate transfer, retaining the previous transfer encoding.

V anchor word-word z=x+y mod 2^64. For each bit:

`y_j = x_j XOR c_j XOR z_j`, `c_0=0`.

In conjunction with this equality, the ordinary transference majority(x_j,y_j,c_j) simplified:

- upon z_j=0: `c_(j+1) = x_j OR c_j`;
- upon z_j=1: `c_(j+1) = x_j AND c_j`.

Checked by substitution of two values c_j and x_j. Primary z_j=0 and c_j=0 have
y_j=x_j, Therefore, the transfer is x_j; upon c_j=1 have y_j=NOT x_j, transference 1.
Primary z_j=1 and c_j=0 have y_j=NOT x_j, transference 0; upon c_j=1 have y_j=x_j,
transference x_j. Last transfer of bits63 drop off modulo 2^64.

So that's it y and the transfers can be expressed through 64 bat x, spread out
linear transition XOR-A known sum must be used
exactly once; do not forget the limitation of the non-zero state and confuse
subtraction/This reduction is algebraically equivalent `(x,z-x)`
formerly Z3, Therefore, it is not new information in itself and is not a guarantee of winning.
The verifiable difference is a clear simplified network AND/OR and XOR for CryptoMiniSat,
not general bit-vector subtraction.

Possible next series: same set of open entrances, exhaustive at first
transfer-control recovery, Comparison with current stored formulas
Before this test, consider the acceleration as unproven.
