> English machine translation of the [Russian source](<../../../../ru/reports/experiments/order2-polynomial-elimination-20261106/MATH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Polynomial exception: what is proven and what it is worth

The conditions of previous experiments are preserved: a simple field, b!=0, reversible
fifth step, lower bits without forced higher bit
count-off 135. Observation numbers aren't compressed.

## Parameterization without previous high parts

Let me w=x115, u=x120, v=x125, t=x130, x135=0. For fixed u,v,t:

```
c=v-u, d=t-v, e=-t
K=c*e-d*d
D(w)=c*c-(u-w)*d
AN(w)=d*c-(u-w)*e
CN(w)=v*D(w)-u*AN(w)-K*w
```

On the common branch K!=0 and D(w)!=0. Coarse recursion factors:
A=AN/D, B=K/D, C=CN/D. Consequently,

```
x_(i-5) = [D(w)*x_(i+5) - AN(w)*x_i - CN(w)] / K.
```

After choosing three supports, the division goes to a constant K, Therefore, all previous
polynomial w: degree 2,3,4,... These high parts don't go over
are not independently introduced as SMT-with variables K=0 no common branch;
The first order and constant sequences are processed separately.

## Exact finite set as polynomial

The prefix gives an interval T=s135 progressively R+q*2^Kmask. From the mask 115 and
This interval gives us a finite set W. Pauline

```
H(w)=prod_(a in W)(w-a)
```

It is square free and spreads over F_p. Remove gcd(H,D), thus
excluding all degenerate w without losing a common branch.

For previous observation i plurality S_i contains x_i,
which allow at least one shift from the **starting** prefix interval.
Let me P_i(w) - deduced by polynucleus P_i(w) in S_i equally

```
Q_i(P_i(w))=0, Q_i(z)=prod_(a in S_i)(z-a).
H_new=gcd(H,Q_i(P_i)).
```

Roots H_new It's exactly the intersection of two finite sets
constantly P_i, zero-left Q_i(P_i), vacant and repeated
roots Q_i(P_i). The GNR is normalized. All the calculations can be done
modulely H; decrease H previously calculated states are reduced
It's not a heuristic degree limitation. H_new delite H.

At the degree H=1 The root is removed immediately and transmitted to the previous exact
check the remaining masks 1 roots-end
are drawn from the original W. This work is taken into account; factorization
The extraction of roots is not considered free.

Individuals i They may have different permissible T. Therefore, crossing through
BPD is a necessary cut-off, not proof of the existence of a common
And then there was the shift joint.evaluate crosses the intervals for the entire grid;
Then the normal execution and the exact projector check everything 83 observation.

## Why this does not eliminate the main dimension

Three reference values u,v,t They're still listed
the number of prefixes compatible with the general shift 2^398 (exact counting)
O2-N01 It's saved and checked, it's not computed by brute force
Explains how to eliminate the three pillars themselves together.

In addition, a dense polynomial H size equal to the number of candidates W.
For any non-empty prefix interval, you can select one permissible T.
Display s115 -> (s115-T) mod n bijectively, so W contains at least
everything s115 published 114-bitmask: approximately 2^142 elements.
After linear removal D No more than one disappears
tape-recording H orderly 2^142 coefficients, roughly 2^147 byte
even at the ideal 32 bytes per coefficient without service costs.
That's a limitation **scribbled**, low-level
any recursion algorithm, a compact product of an arithmetic
The progression itself does not give an equally compact ND of the composition.

For modules, it's a small degree. You can honestly check the correctness here
and measure whether the replacement of scalar brute force pays off with polynomial operations.
Even the successful elimination of all dependent states does not yet provide an applicable condition
256-Bit recovery. Proven module options and conversions
Masks are listed in the protocol; other hypotheses are not affected.
