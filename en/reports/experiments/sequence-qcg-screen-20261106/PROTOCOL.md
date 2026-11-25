> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-qcg-screen-20261106/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-22 Quadratic transition of the latent state: accurate preliminary check

Model: s[i+1]=a*s[i]^2+b*s[i]+c mod n, a!=0; n order secp256k1. This is not a quadratic supplement on the index of SEQ-21 and not direct transfer of residues modulo 2^w from SEQ-02.

## Volume

The specific prerequisites of grid approaches are checked, not all possible attacks on them QCG. Three tasks:1) Individual conditions of the fourth degree after exclusion a,b,c; (2) joint linear formulation of these conditions in monomic variables;3) accurate five-fold composition and the danger of its replacement by an arbitrary degree polynomial 32. Scientific code, inputs, audits and criteria are recorded prior to launch.

The previous photo is being used 83 decisions: 1..70 and 75..135 stepwise 5, junior i-1 bit without a forced most significant bit. 32 fresh-faced QCG-chain SHAKE256, uniform a!=0,b,c,s1; 32 New independent uniform complete sequences 135 states are retained for arithmetic control; observations have exactly the original 83 These checks check identities and certificates **are not a statistical estimate of the sensitivity of the hidden communication detector**.

## Neighbouring conditions

For D[i]=s[i+1]-s[i] have

G(D0,D1,D2,D3)=(D0*D2-D1²)*D2*(D1+D2)-(D1*D3-D2²)*D0*(D0+D1)=0 mod n.

It's a minus for the four-line determinant [1,s[i],s[i]²,s[i+1]]The divisions D no, therefore identity is necessary in degenerate cases; sufficiency for QCG It is not approved without additional conditions.

For each of them 66 panels of five consecutive indices t..t+4, t=1..66: q[i]=2^(i-1), y[i]=r[i]/q[i] mod n, Y[i]=2*y[i+1]-y[i]The true normalized difference T[i]=D[i]/q[i]=Y[i]+e[i] mod n, e[i]=2*u[i+1]-u[i], u[i]=floor(s[i]/q[i]). |e[i]|<n/q[i]The original unequal masks persist.

Stavim Q(T0,T1,T2,T3)=G(T0,2*T1,4*T2,8*T3)/16. Pauline Q has seven degree monomes 4 coefficiently1,1,-2,4,4,-2,-4. For everyone P=Q(Y+e) check the carrier of maximum divisibility monomes, reversibility of coefficients mod n weight R[i]=2^(256-(i-1)). We check the identity of the standardization of the ideal. If all conditions are met, the proof SEQ-16 It's a lack of strictness HG-L1 certificate in all degrees **separate** idealn,P), fixedly box. This does not apply to the common ideal of all P or other criteria.

## Joint linear production

All 66 P common 69 variable e[1]..e[69]Take the combination of all structurally possible monomes (including zero coefficients of a particular input) z[alpha]The congruence matrix has 66 unique pivot-monomes e[t]^2*e[t+1]*e[t+3]coefficient -1, zero coefficients in the other rows. That gives you an exact rank 66 above F_n, regardless of the data.

Let me B[alpha]=workmanship R[i]^alpha[i], K=max B, W[alpha]=K/B[alpha]The weighted lattice has det=n^66*workmanship W. Any vector encoding true monomes with z[0]=1, normal >=K. For maximum monome W=1 vector n*unit(alpha) It is always in the bar and has a normal n. If K>n, The true monomial vector cannot be the shortest, and the clear evidence, rank, determinant and identity of the true monomes on synthetics are checked.

That's the obstacle **the search for the true vector as the shortest in the linearization**. It does not prove that all the lines LLL It's useless, that you can't nonlinearly exclude monomes, or that you don't have the original roots z[alpha]=workmanship z[e_i]^alpha[i] They're not included in a linear lattice; the loss of these dependencies is directly counted as a design limitation, and the shortness of vectors is not used here as a test of real data.

## Passes and degrees 32

For each positive control, an accurate f∘f∘f∘f∘f. Degrees being checked 2,4,8,16,32, seniority a^31, factor X^31 equal 16*a^30*b, everything 13 step-pair 5 no70 before135. The normal shape is also checked y=a*s+b/2, y_next=y²+C. It serves as an identity, but does not replace observation: the unknown affinity transformation does not retain the known lower bits.

In the late days 13 observation75..135 Demonstration polynomial is constructed: permissible ones are selected lifts x[i]=r[i]interpolation H degree <=11 posture 12 transitions, then P32=H+X^20*workX-x[i]), i=0..11. At different nodes P32 degree 32 satisfies all 12 It's evidence of insufficiency **loose-play 33 ratios**, not evidence of QCG. The necessary symmetry of the composition relative to its center is recorded: for any fifth iteration of the quadratic f all odd odd odds after the shift X->X-b/(2a) The failure of this test proves that a particular P32 It is not the fifth iteration of a quadratic polynomial; passing by itself does not prove anything like that.

## Decision on further calculations

If the individual HG-designs are closed with certificates, and the shortest vector approach of joint linearization has a clearer, shorter external evidence LLL The proven barrier is stronger than the additional end-launch, to real recovery and assessment of the presence of QCG-Other collaborative nonlinear productions and the exact compositional model remain open.

Limit of the scientific part 120 c. without LLL, magnification of known bits, large grids, SMT or full recovery. Sources are hashed prior to launch 10843 artifacts are checked by SHA-256 and mtime once in the final audit; dependencies - SEQ-17 ENVIRONMENT.json. Auditing independently uses SymPy determinant P and FLINT For composition, interpolation and symmetry, the reports and their final statuses are kept separate from the previous series.
