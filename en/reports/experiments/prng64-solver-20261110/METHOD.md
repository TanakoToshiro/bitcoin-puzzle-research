> English machine translation of the [Russian source](<../../../../ru/reports/experiments/prng64-solver-20261110/METHOD.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Linear transitions and precise transfers

Transition xorshift128+ linear GF(2). Every bit of the state after any
a fixed number of steps is XOR some 128 original bits.
circuit.py Calculate these linear forms as 128-One new bat mask SAT-
variable is introduced on each different form; the relationship is maintained XOR-equation.
Initial zero state excluded by general disjunction 128 bits.

Nonlinearity is coming out `z=x+y mod 2^64`For the position j:

`x_j XOR y_j XOR c_j = z_j`where `c_0=0`.

If z_j The following transfer can be expressed compactly:

- z_j=0: `c_(j+1) = x_j OR y_j`;
- z_j=1: `c_(j+1) = x_j AND y_j`.

These equations are true together with the bit equation of the sum, not in themselves.
At an unknown position, the full majority of three bits is used
`c_(j+1)=majority(x_j,y_j,c_j)`Even if only the higher bits are observed
words, transfers from all junior positions remain in the model
The observed bit extra transfers are not built. AND/OR encoded by three CNF-
sentences, majority - Six. XOR It is not replaced by scalar addition.

Engine two cvc5 It uses a different setting: the obvious 64-bit-state
Every single step, bit shifts/XOR and standard modular addition.
It is an independent engine and independent coding, but not verified externally
proof-certification UNSAT.

Complete Recovery: After each SAT They're only blocked 128 baseline
It's a bit of state, not an auxiliary transfer UNSAT completes the set.
UNKNOWN leaves the set incomplete, even if the true synthetic state
It's already found. Unity doesn't come from one lucky one SAT.

Acceleration and budget increases are different
level-limit 10 c; former baseline limited 20 s/request, the main new
cycle 120 s/A decision over time exceeding the previous limit means
Improved coverage, but by itself does not prove algorithm acceleration.
