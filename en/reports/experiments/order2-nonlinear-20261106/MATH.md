> English machine translation of the [Russian source](<../../../../ru/reports/experiments/order2-nonlinear-20261106/MATH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# O2-N01 Quadratic and cubic conditions

Working in F_p, p The axis of the states and the general shift are the same as O2-L01/J01: x135=0. Denote w=x115,u=x120,v=x125,t=x130; z=x110. Fixation()u,v,t) Choosing a candidate prefix, rather than getting those hidden states from the data for free.

## Deletion of coefficients

Differences in six values(z,w,u,v,t,0):

```
d0=w-z; d1=u-w; c=v-u; d=t-v; e=-t.
```

For second-order recursion differences, the determinant of the Hankel matrix3×3 equal to zero:

```
(w-z)*(c*e-d²) - (u-w)²*e + 2*(u-w)*c*d - c³ = 0 mod p.
```

Let me K=c*e-d². Primary K!=0 It gives you an exact square polynomial

```
z=P2(w)=w-[e*(u-w)²-2*c*d*(u-w)+c³]/K mod p.
```

For convenient execution, we introduce linear polynomials:

```
D(w)=c²-(u-w)*d
AN(w)=d*c-(u-w)*e
CN(w)=v*D(w)-u*AN(w)-K*w.
```

Primary D(w)!=0 the coefficients of thinned recursion are equal A=AN/D, B=K/D, C=CN/D. Therefore,

```
P2(w)=[u*D(w)-AN(w)*w-CN(w)]/K
P3(w)=[w*D(w)-AN(w)*P2(w)-CN(w)]/K = x105.
```

Degrees no higher2 and3. These conditions exactly coincide with the reverse execution of the previous recursion on the grid5. They are not new independent information beyond the observations already used110/105; The way this information is accessed changes before the Quartet is created.

## Full receipt of candidates through the roots

Instead of going all over w masked115 The new algorithm is going through the permissible z masked110 decides P2(w)=z into F_p. Then check the mask115, D!=0, one general shift110/115/120/125/130/135, cubical P3(w) masked105 It's only after these checks that you create a quartet and launch the previous one downstream.

All square roots are calculated precisely through the discriminant and modular square root. Table of all square residues is not precalculated; used Tonelli–Shanks at p mod4=3 The context of the module is general, but the results for each discriminant are not cached into a size tablep. This is important for comparing the cost to a larger module.

Algorithm Complete: Any compatible w there is exactly one z=P2(w), brute-force z; The complete solver of the quadratic equation must return w. Different z don't duplicate w. The subsequent conditions are necessary. The degenerate source chains are still covered by separate branches O2-L01/J01.

## Special cases – they cannot be lost

K=0 regardless w. In a non-degenerate branch, this is not possible with B!=0; This prefix is only allowed in generic-First-order sequences/constant They continue to be inspected separately.

D(w)=0 It is not a denial of the whole model generic-The branches pass through it, and the degenerate families are preserved.

Quadratic coefficient P2 equal t/K. If t=0, It's going down u=1,v=1,t=0 linearly P2(w)=w. Primary u=1,v=2,t=0 get out **permanent P2(w)=5/4**. In the latter case, the equation either has no roots, or admits ALL w; The usual full listing of permissible w testable D and P3. The mere presence of a cubic/A quadratic condition does not guarantee a strong cut-off of each prefix.

## What is really excluded to the fourth value

nonlinear condition K!=0 You can check it out by nowu,v,t):

```
K=t*u+t*v-t²-v².
```

For everyone v,t!=0 It prohibits no more than one u. Primary t=0 K=0 only if v=0. For a full field, the number of zeros K amidst p³ triplet p². On masked nets, you cannot automatically count the share1/p, But there's a strict upper limit.

```
bad_prefixes <= N_v*(N_t-I[t=0 allowed])
                + N_u*I[t=0 allowed]*I[v=0 allowed].
```

Primary K!=0 D(w) or does not apply to0, or prohibits exactly one of the w. Therefore, it is easy to postpone the inspections K,D Before the listing gives only a limited exception; the exact upper limit for real masks is kept separately.

## Why fewer days off doesn’t mean less work

The new scheme lists z110, The mask of which the present data109bat, whereas a mask w115 has114To the joint boundaries of the grid z roughly32It's twice as longu,v,t) The roots may be small, but every one is tested z It requires solving the equation, and then some of the roots are discarded with masks and a general shift, and it's wrong to count only the four that come out.

External fixation of three late values has a huge domain in itself, even if the last unknown is solved perfectly, and neither this method nor the few cube-tested candidates are practical algorithms256beat.

This experiment does not test all possible ways to solve limited modular polynomial systems. The negative result refers to a specific exact scheme x110 -> draw P2 -> check out P3“and its measured value.”
