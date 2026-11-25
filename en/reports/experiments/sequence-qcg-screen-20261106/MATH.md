> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-qcg-screen-20261106/MATH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-22: Definition of conditions and the precise meaning of obstacles

## Observations

n simple order secp256k1; s[i]∈[0,n). The model is being tested s[i+1]=a*s[i]²+b*s[i]+c mod n, a≠0, with the same order of export as in the previous SEQ. Well known r[i]=s[i] mod q[i], q[i]=2^(i−1), for1..70 no75..135 stepwise 5. Senior forced bat Puzzle non-observe s[i].

V 83 summarily 3767 bit; the model is given four field parameters a,b,c,s[1]that is to say, less 1024 This is the count **proverb** And it also doesn't give you a reason to say that the global model is undefined just because of the individual short windows, and the checks below relate to specific designs.

## Exclusion of non-dividing coefficients

Four transitions of a quadratic polynomial give a linear dependence of the columns of the matrix with rows [1,s[j],s[j]²,s[j+1]], j=t..t+3. Its determinant is zero n. The general shift of the five states does not change the determinant: they are elementary operations on columns with a single determinant. So you can put the first state at zero and write the rest down through a single determinant D[j]=s[j+1]−s[j].

The immediate disclosure of the determinant gives its negation:

```text
G(D0,D1,D2,D3) =
 (D0*D2−D1²)*D2*(D1+D2)
 − (D1*D3−D2²)*D0*(D0+D1).
```

This is a necessary condition, including zero differences. No sufficiency is claimed: degenerate data and linear transition a=0 can also be converted G A single local condition does not, by itself, establish the total coefficients of the entire chain.

Let me s[i]=r[i]+q[i]*u[i]Then

```text
T[i] = D[i]/q[i] mod n,
Y[i] = (r[i+1]−r[i])/q[i] mod n,
e[i] = 2*u[i+1]−u[i],
T[i] = Y[i]+e[i] mod n.
```

From 0≤s<n shoulder |e[i]|≤floor((n−1)/q[i])<n/q[i]<2^(257−i). It's negative e We're allowed R[i]=2^(257−i); interwindon e - general variables. Accurate allowables e are also related to existence u and limitations of states; independent box It's a weakening.

Substitution D[t+j]=q[t]*2^j*T[t+j] giver G(D)=16*q[t]^4*Q(T). Pauline Q:

```text
−T0²*T1*T3 + T0²*T2² − 2*T0*T1²*T3
+4*T0*T1*T2² + 4*T0*T2³ − 2*T1³*T2 − 4*T1²*T2².
```

For everyone t=1..66 built P_t(e)=Q(Y+e) mod n. It's a degree condition 4 four relative errors, not the degree of 32. An independent audit will include Q determinant SymPy, reveals P symbolically, and values on complete synthetic chains are checked through an integer determinant FLINT.

## Separate ideal and strict HG-L1

Evidence is used SEQ-16, copies of `reference/`For I=(n,P), fixed positive boundaries R and the permissible monomial order: if the leading coefficient P turn around n, a the weight of the leading mono M, W(M)=∏R[i]^M[i]no less n, any non-zero H∈I^m satisfies

```text
||H(R*X)||_1 ≥ n^m,  m≥1.
```

Therefore, a strict criterion ||H(R*X)||_1<n^m, modular zero to whole zero on everything box, You can't get inside these degrees of ideal **criterion**, Its inaccessibility does not preclude either roots or other means of obtaining whole equations.

A brief basis of proof: standardize P modulely n monotic F with the same master monome;n,F)=(n,P). Monic division gives a single decomposition H=ΣA_k*F^k hosted A_k extra-multiple M. For H∈(n,F)^m factor A_k divide n^max(0,m−k). Leading monometrics of various A_k*F^k They do not match: degree of multiplicity M definitively k. Lead member H It has at least some weight n^max(0,m−k)*W(M)^k≥n^m. The weights are not less 1. This is the lower bound for one weighted part L1-norms.

In any permissible order, the leading monome P maximum divisibility Q(Y+e) There are exactly seven monomes, all degrees 4, factored ±1,±2,±4. The coefficients are reversible by n, Translation between integer ideals is tested both ways, so the barrier applies to any order of magnitude.

For the best neighbouring window No66..70 boundary of error 2^191,2^190,2^189,2^188, (a) the weight of the seven maximum monomes, from 2^758 before 2^760, much larger n<2^256. Early windows are weaker. Ceiling down R accurately floor((n−1)/q)+1 does not give a significant gain; **Certificates are formally classified as R**, without affirmation box/shifts.

The result is not carried over to the joint ideal (n,P_1,…,P_66), additional dependencies e, other export or criterion LLL A separate ideal after the certificate is a consequence of the proven boundary of this design, not a timeout.

## Joint linearization: what exactly is closed

Take the unified structural carrier of all P_t, including the constant monome: 1332 coordinates 69 variable e. The zero coefficients of a particular input do not remove the structural coordinate. Linearization replaces each monome e^α independent z_α. Every one of them 66 The strings are a unique mono e[t]²*e[t+1]*e[t+3] factored −1. The other lines don't have it: its extreme indexes define the entire window A posture n exactly 66 for any observation.

Denote B_α=∏R[i]^α[i], K=max B_α=2^1020, W_α=K/B_α. Considered **nucleus**

```text
L = { diag(W)*z : z∈Z^1332, A*z=0 mod n }.
det(L) = n^66 * 2^458633.
```

The determinant follows from the surjectivity of the display A:Z^1332→F_n^66 And then diagonal scaling, for a real monomial vector z_0=1, Therefore, its constant coordinate is equal to K, Euclidean rule ≥K. But for the c coordinate B_α=K vector n*unit_α lie L and normal n<K. Found 1263 linearly independent coordinate witness n*W_α*unit_α normal <K.

Thus, **The true monomial vector is not the shortest in this lattice**. Extraneous witnesses have a constant coordinate 0 They break monomyal dependencies. They don't belong to the affinity slice z_0=1. The evidence does not exclude CVP/a search on that slice, another attachment, the utility of other lines of the reduced basis, or a joint nonlinear exclusion `log2_encoded_lower_bound_minus_geomean` only a descriptive value, not an additional certificate or p-value.

This paragraph does not fulfill the user's previous desire to consider monomial dependencies in the decision: it clearly checks the limitations of their removal QCG into SEQ-22 It was neither implemented nor launched.

## Five Steps and False Degree Freedom 32

For f(X)=aX²+bX+c, a≠0, degree f,f²,…,f⁵ equal 2,4,8,16,32; two-leader ratios f⁵:

```text
[X^32] f^5 = a^31,
[X^31] f^5 = 16*a^30*b.
```

Here f^5 The five initial transitions are equivalently represented by four intermediate hidden states and five quadratic equations: 32 It's not necessary to keep the intermediate variables, but the number of unknowns increases. Both productions retain only three common coefficients a,b,c; free-flowing 33 There are no coefficients in this composition.

Nana 13 late observations No75..135 permissible lifts x_j=r_j (All hidden higher bits are equal to zero) 12 interpolation H degree ≤11 satisfies H(x_j)=x_(j+1). Pauline

```text
P32(X)=H(X)+X^20*∏(X−x_j), j=0..11,
```

degree 32 and satisfies 12 It's built for real data and everything 64 It's in control **unrecovered states or coefficients QCG**, a an acceptable solution of a weakened model with an arbitrary polynomial.

It is further shown that each of these 65 specific P32 This is not the fifth iteration of any quadratic polynomial f centre h=−b/(2a); f(X+h) even, then f⁵(X+h) It's even, for any degree polynomial 32 The possible center is clear: h=−[X^31]P/(32*[X^32]P). Built P32 After that shift, you have non-zero odd odds, which is a necessary composition test, not enough classification of all compositions.

Finally, y=a*s+b/2 translating QCG into y_next=y²+C, C=a*c+b/2−b²/4. Identity tested for 32 Unknown Affinity Transformation n It does not store known lower bits, so the normal form itself does not transfer the algorithm for known higher approximations to our problem.

## Level of withdrawal

All arithmetic identities are tested on the full states of synthetics **oracle formula-audit**, The sensitivity of the hidden detector was not measured 32 successful identity, nor 32 Zero controls are not the result of detecting communications on a single mask Puzzle the problem of existence was not solved QCG: The model remains open.
