> English machine translation of the [Russian source](<../../../../ru/reports/experiments/order2-symbolic-20261106/MATH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# O2-S01 Exact limitations without class enumeration

## Equivalent model

All right s_i and difference d_i canonical [0,p). Let's put it d_i=(s_(i+1)−s_i) mod p. Initial affinity recursion is equivalent to the system

```
d_(i+2) = a*d_(i+1)+b*d_i mod p,
s_(i+1) = s_i+d_i mod p,
0 <= a < p, 1 <= b < p.
```

From the original recursion, equality for differences is obtained by subtracting adjacent rows c_i=s_(i+2)−a*s_(i+1)−b*s_i constantly modulo p, because c_(i+1)−c_i=d_(i+2)−a*d_(i+1)−b*d_i=0. So there's no unnecessary sequences: c recovers in the first three s. Degenerate sequences of lesser order are not intentionally discarded.

Symbolically remain unknown a,b,134 difference135 It's factored into states c It's a record, but it contains a free general shift through states. The solver doesn't enumerate classes in advance; it looks for any values that satisfy the constraints SAT-The search may still have exponential complexity; the absence of an external class loop does not mean a polynomial algorithm.

## Transfers and precise boundaries

In whole numbers, the same system can be written as follows:

```
s_i+d_i = s_(i+1)+p*epsilon_i, epsilon_i in {0,1},
a*d_(i+1)+b*d_i = d_(i+2)+p*q_i,
0 <= q_i <= 2*p-4.
```

The final boundary follows from 0<=a*d_(i+1)+b*d_i<=2*(p−1)^2 and floor(2*(p−1)^2/p)=2p−4 for p>=3. Transfers can't be discarded or assumed to be equal. If you project the comparison onto the lower bits, the term p*q_i It remains; it is in odd condition p It doesn't disappear at all modulo2^k. Therefore, the observed minor bits do not by themselves give a similar recursion modulo2^k.

In implementation w=bit_length(p); a,b,s,d have w bit and unsigned limitations <p. Sum s+d calculated w+1 The sum of the two works and the right part with q calculated in 2w+1 bitah q has w+1 These widths eliminate unaccounted overflow: the sums do not reach2^(w+1) and2^(2w+1) The alternative encoding uses URem equal modulo p. Module p non-replaceable2^w, XOR It's not used in place of addition.

All135 Indices remain in the chain. Masks only on the original83 Numbers, senior established puzzle-The bits are not observation. The late numbers don't shrink. On the smaller modules, the widths scale rounded down, like in the case of a smaller one O2-Q01.

## Checking the target without listing states

After SAT We check the evidence with ordinary integer arithmetic and we get r=s71 mod2^h. We only add a ban on this r. This eliminates all states and classes with this prediction SAT It shows a new possible prediction UNSAT It proves that all the predictions for this model and input have been found. UNKNOWN does not exclude any unfound value; an empty list UNKNOWN It doesn't mean empty projection.

This is a weaker goal than restoring all coefficients/states, but even the first SAT It requires a solution to a nonlinear modular system: Checking for fully disclosed states separately from checking for partial masks: positive full control does not confirm scaling on hidden data.
