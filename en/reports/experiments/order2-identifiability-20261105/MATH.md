> English machine translation of the [Russian source](<../../../../ru/reports/experiments/order2-identifiability-20261105/MATH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# O2-ID01 Distinctiveness and precise symmetries

Here n simple order secp256k1, s_i Canonical representatives[0,n). Observed r_i=s_i mod2^k_i, k_i=i−1; senior forced bit not observed.Indices83 Known solutions don't shrink.

## Matrix and omissions

For v_i=(s_{i+1},s_i,1)^T:

```
v_(i+1) = A v_i mod n,
A = [[a,b,c], [1,0,0], [0,0,1]].
v_(i+g) = A^g v_i mod n.
```

det(A)=−b; upon b≠0 For the linear part, reversible T=[[a,b],[1,0]] flat-grid g The coefficients of the second recursion are equal A_g=tr(T^g), B_g=−det(T^g)=−(−b)^g. Permanent C_g non-dividing1−a−b: `(A^(2g))[0,2]−A_g·(A^g)[0,2]`So the formula also works with its own meaning1. Different degrees of one common matrix are needed for unequal gaps; one cannot simply renumber observations in a row.

Uniform thinning can lose information about the initial coefficients, if the ratio of two characteristic roots is in order5, The roots match after step five modulo101 Two different non-degenerate transitions give the same s1,s6,s11,... although the full sequences are different. This is an example on a full thinned grid, not an established ambiguity of the present83 masks.

## When complete states determine coefficients

Difference d_i=s_{i+1}−s_i mod n satisfyingly d_{i+2}=a d_{i+1}+b d_i. Of the five complete states in succession known d0,d1,d2,d3. Primary D=d1²−d0·d2≠0:

```
a = (d2*d1-d0*d3)/D mod n
b = (d1*d3-d2*d2)/D mod n
c = s3-a*s2-b*s1 mod n.
```

This provides unambiguousness for the non-degenerate **full-fledged** Consistency D=0 There's a possibility of recursion of a smaller order s_(i+1)=r*s_i+d It seems to be a whole family of second orders: b=r²−a*r, c=(r+1−a)d. V CONTROL_TRACES.json There are two different pairsa,b) uniformly135 Because of states b≠0 It does not in itself guarantee a minimum order2.

## General Shift: Parameters do not have to be unambiguous

For anyone t∈F_n put s'_i=(s_i+t) mod n. Then a'=a,b'=b,

`c'=c+(1−a−b)t mod n`.

This is the exact symmetry of the family. It's already been seen for Mobius in SEQ-08; It is here that its concrete form and projection into the second order are tested, rather than a new general idea being stated.

Let me J Observable numbers with k_i≥1, K=max k_i=134, L=2^K. All translations compatible with the original masks are presented **precisely** how t=qL iconic q intervally

`ceil(−min_(i∈J) s_i/L) ≤ q ≤ floor((n−1−max_(i∈J) s_i)/L)`.

Proof of completeness: take t0∈[0,n). In canonization, each observed state either crosses the n, or not; s'_i−s_i=t0−epsilon_i*n. By saving at least one minor bit for everyone J oddity n it follows that epsilon_i So there's a common symbolic translation delta=t0−epsilon*n without crossing the boundary for observed conditions delta≡0 mod L. Inequalities above precisely provide canonical boundaries1 with zero bits observed, the interval is not affected n, So the same translations modulo n No duplication.

For each complete synthetic chain, this interval is calculated precisely/Zero Translation and the Limits of Forecast Change71. If1−a−b≠0, All different translations give different c. If a+b=1, c It remains the same, the ambiguity of states persists.

## Why an ambiguous state doesn’t always mean ambiguous71

L multiplely2^70. If s71+qL doesn't come out[0,n), everything q retain the younger70bit71. Therefore, a huge number of permissible states can give one desired key.

But s71 If it's outside the range of observed states, some allowable conditions q They can cross the border just for no71. Then the remainder changes +n or−n modulo2^70. Oddly n This change is non-zero q-three-field

```
s71+qL < 0
0 ≤ s71+qL < n
s71+qL ≥ n
```

This gives you an accurate projection of the class. With this design, their non-empty areas give you no more than two different residues: the simultaneous ability to cross both boundaries is excluded by the width of the interval less n. This is an accurate statement about the class of general translations, not about all compatible models with othersa,b).

Nana32 baseline positive examples SEQ-18 Each class has many states, but one prediction71. A pre-registered search for a separate counterexample found `selected-25`:all83 The masks match, and the remnants71 It's different. It uses the original256-This is a selected synthetic example, not a frequency estimate or two models of the present Puzzle.

## What does the budget of observations mean

83 masks3767 Observable bit positions;13 late-1352. Five unknown field values (a,b,c,s1,s2) near1280 Comparison of numbers does not prove the independence of constraints: the exact class of translations clearly demonstrates the dependence of information and the non-identification of complete parameters a,b, The transfer class and the required balance require separate checks.

After factorization of translations, coordinates can be used (a,b,d=s2−s1,c0=c−(1−a−b)s1). They are saved in any translation modulo n. But **cannot be** lay down s1=0 We need to re-impose the masks and put on the old masks: the translation changes the canonical representations, the compatibility of the masks and the allowable interval of the translation must be restored separately.

The second-order differential series has the rank of Hankel≤2, therefore det([[d0,d1,d2],[d1,d2,d3],[d2,d3,d4]])=0 mod n. This is a necessary cubic condition for six consecutive full states or for a uniformly thinned sequence; one determinant is not enough to have a general recursion with all masks. SEQ-18 The new solver must first show the restoration of the class on the original form of the masks.
