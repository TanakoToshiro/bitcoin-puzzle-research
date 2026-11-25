> English machine translation of the [Russian source](<../../../../ru/reports/experiments/order2-compact-joint-20261106/MATH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Compact system: area of accuracy

We are working on a simple field F_p, p>=7, b!=0, gcd(5,p(p²−1))=1.
For the real world secp256k1 This condition has been fulfilled b=0,
Other modules, maps or generation history are not added.

Let's put it y_j=s_(5j), x_j=y_j−s135 modulo p. The grid starts with the first
informative 5, not later 75. The remaining observations are checked
after restoring the full step; numbers are not compressed.

## Rank instead of unknown coefficients

Difference d_j=x_(j+1)−x_j obey d_(j+2)=A d_(j+1)+B d_j.
For five consecutive differences a,b,c,d,e:

```
a*c*e + 2*b*c*d − a*d*d − b*b*e − c*c*c = 0 (mod p).
```

It's the Hankel matrix determinant [a b c; b c d; c d e]On the last one
A window of four differences is required D=d1²−d0*d2!=0 and K=d1*d3−d2²!=0.
Then A=(d2*d1−d0*d3)/D, B=K/D!=0 unambiguously C is one
transition x. Each previous cubic determinant is linear in a new way
the left-hand side, its coefficient K It's not zero. So the left sequel
It's the only one that matches the reverse recursion
D_next=−B*D_previous; Degeneration does not occur along the way.

No strings D,K This evidence doesn't work. You can't give it away alone
Local cubic equations for a complete description of all recursions.

The second entry directly defines the general A,B,C and B!=0. Generally
The undegenerate branch gives the same set as rank.

## Degenerate branches

If the difference is non-zero and d_j*d_(j+2)=d_(j+1)², Their relationship is permanent
? x Affinity recursion is first order
This is a difference; the last one is not enough for this equivalence.
The case of all null differences is handled by a separate constant-branch.
For second-order reversible recursion, there are no other degenerate branches:
the determinant of neighboring pairs of differences is carried by the multiplier −B; zero
Everywhere and non-zero sequence is the first degree.

First-order family r,d represent p−1 second-order sets:
a!=r, b=r(r−a), c0=(r+1−a)d. The constant sequence represents
p(p−1) These families are not arbitrarily reduced to one coefficient.

## Return to the starting point

Affinity step matrix 5 It's reversible E=p(p²−1) multiplet
elements of the affinity group used in dimension 2. Primary gcd(5,E)=1
G=H^(5^−1 mod E) It's the only fifth root H here
(x_(i+5),x_i), and notx_(i+1),x_i). From G recover 135 condition
and the parameters of ordinary recursion; they are checked by direct execution.
The first degree uses the indicator p(p−1). Previously proven conditions
and independent root checks are in O2-L01; Matrices are not rebuilt.

## Precise elimination T

Primary x135=0 anchor mask T=R+q*L, L=2^K. For the positive k<=K:

```
x_i mod 2^k = (r_i−R+eps_i*p) mod 2^k.
```

p It's odd, so the two residues are different eps_i determined
himself x_i. eps=1 demand x_i+T>=p, eps=0 demand x_i+T<=p−1.
These are respectively the lower and upper integer boundaries q. Add on
0<=q<=floor((p−1−R)/L). Intersection - interval; if not empty, its minimum
canonicalize SMT-Witness, discarding the others T drop-off
No class of relative states.

The maximum mask is required at the anchor 135. Zero k not
When you calculate the upper limit, you first check it
x_i<=p−1−R, if unsigned-underflow It didn't create false compatibility.
The full projector then returns **everything** changes that are compatible with all
83 Observations; minimal grid shift 5 You don't have to fit them by yourself.

## Boundaries of results

SAT is verified by direct execution, all observations and independent
It's a small data shift. It's a completeness UNSAT both
Symbolic branches after blocking each found four/couples.
UNKNOWN It doesn't give you an upper estimate of the remaining set, even if all
The models found before the timeout predict one bit, this is not enough.

Absence of external search of threes does not mean polynomial algorithm:
bit SAT-The search remains potentially exponential
Small fields here are not deduced the term of full-size recovery.
