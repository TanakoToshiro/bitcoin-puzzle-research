> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-qcg-joint-20261106/MATH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-23: accuracy of the joint system and criteria

## What's decided

In contrast, SEQ-22, This is a search for a satisfactory assignment of the entire original nonlinear model a,b,c state s[1]..s[135]eh≠0, It's all simple n order secp256k1. All 134 The junction is set simultaneously. Each junction has a secondary square z[i] and two equalities:

```text
z[i] = s[i]² mod n
s[i+1] = a*z[i] + b*s[i] + c mod n.
```

So the monomes didn't become independent linear coordinates. The equality of a square and the product with common coefficients participate in the solution before getting a candidate z This is exactly what you're looking for QCG; After its introduction, the maximum degree of each equation is 2. This does not mean little computational complexity.

№70→75, №75→80 and other intervals contain all intermediate s. There is no compression of gaps, no free degree polynomial 32. Actual constants a,b,c There is no synthetic standard in the work requests.

## Limited wholes

For single representatives 0≤s,z<n There are only one whole k,l:

```text
s[i]² = z[i] + n*k[i]
a*z[i] + b*s[i] + c = s[i+1] + n*l[i].
```

Exact sufficient boundaries: 0≤k≤n−2 and 0≤l≤2n−3. The first follows fromn−1)²; second 2(n−1)²+(n−1). All variables are whole, so there are no fractional states or fractional private states s=r+q*u, q=2^bits, s 0≤u≤floor((n−1−r)/q). All in a full-size model 622 Integer variables. The correctness of the representation does not guarantee that QF_NIA-Heuristics will find the answer in the allotted time.

## The final field and the exact mask

In the field F_n private k,l They don't need it. The observed state is written as r+q*u, wherein u It is divided into binary field variables v_j. Each v_j clearly belongs to {0,1}; bitsum giver Σ2^j*v_j. Primary bits>0 decomposition-length n, therefore u It doesn't turn around. It's also a binary comparison u≤U, U=floor((n−1−r)/q). Then 0≤r+q*u<n, And the field record has exactly the lower bits required.

No upper limit r+q*u could have turned around n give away modulo q. So the upper limit is part of the original exact problem, not a heuristic gain bits=0 There's no information, so it doesn't need to be decomposed into bits. Unobserved states are also field variables without disclosure.

Full-size field system: 3 factor + 135 condition + 134 square + 17225 unknown binary variable = **17497 variable**. Allegations 17659: 1 condition a≠0, 134 square-links, 134 transition 17225 terms of bits, 82 masks 82 exact upper bounds and 1 It's a large nonlinear system, despite the degree of 2 of every arithmetic equality.

## Removing a portion of the general shift freedom

For the arbitrary d∈F_n transformation

```text
s'[i] = s[i]+d mod n
a' = a
b' = b−2*a*d mod n
c' = a*d²−b*d+c+d mod n
```

It saves all the transitions M=2^max(bits), main series M=2^134. Describe the minimum of observed states with bits>0 through m. Choice d=−M*floor(m/M) shifts all the observed representatives downward without crossing 0 and n, And their little bits are saved. Unobserved states can turn around n; It doesn't break any transitions or data.

Therefore, the limitation of at least one informationally observed state is less M"preserves the existence of the solution NIA This is a disjunction of inequalities; c FF Disjunction of zeroing of the corresponding most significant bits u. Meaning m It's not handed over to the solver, it's the decider of the state and the parameters. It's not the only representative of each class, and it's not the proof that recovery is unique.

For comparison with the standard, general shift invariants are used:

```text
a,
C = a*c+b/2−b²/4 mod n,
y1 = a*s[1]+b/2 mod n.
```

The equality of these three values for two QCG s a≠0 is equivalent to belonging to one class of general field shift: b shift d, equality y1 It connects the initial states, equality C delivers the desired transformation c. Further states coincide with the accuracy of this induction shift.

But the model itself can have other ambiguities1 It does not carry the observed bits, and two prototypes of one s[2] under a quadratic transition can produce the same later states SAT-The candidate is considered a solution of the system even when it differs from the reference class: "Proven solution", "reference class shift" and "precise reference chain" are taken into account separately; uniqueness is not explored by this pilot.

## Checking dependencies during the search

Fully observable states [2,7,6,9,7] mod 17 inconsistent with QCG. Three different entrances 2,7,6 exit 7,6,9 It is clearly defined by a quadratic polynomial X²+X+1. For the entrance 9 he gives 6, a 7.

If available z=s² both encodings answer UNSAT. When you're off **only** linkage SAT: free-flowing z They can make transitions SAT-Models do not pass the initial test QCG-So dependencies really limit search, not just filter output.

## Interpretation checks and limitations

Independent complete selection of small a,b,c,s1 check-up SMT. All valid small chains are further transformed by a general shift: check masks, membership in a full set of solutions and class invariants. Closed substitution of reference values in all statements confirms the compatibility of positive controls with encoding; **Not running a recovery with a known response** It's not sensitivity.

You only need a small field set to verify implementation, and it has a different module and a different volume of masks 256-A random small input sometimes allows for a real QCG, which correctly takes into account the complete search; mark random non-equal UNSAT.

Failure in time, memory or internal limit of the solver is stored as computational incompleteness. No number of such stops proves that the source keys are not quadraticly connected. All real keys remain outside the new series.
