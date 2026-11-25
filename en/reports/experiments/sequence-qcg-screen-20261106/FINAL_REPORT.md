> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-qcg-screen-20261106/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-22 Quadratic transition of the latent state

Date: 06.11.2026. Status: Completed accurate preliminary check of the three designs with the original masks. **The hypothesis QCG on Puzzle It's not ruled out, it's not confirmed, it's not been activated.**

Model: s[i+1]=a*s[i]²+b*s[i]+c mod n, a≠0, n order secp256k1. This is a new check at the request of the user after completing the small cycle SEQ-18–21. The quadratic dependence on the state differs from the quadratic additive in the index in SEQ-21.

## What's established?

| Construction | Accurate result | Boundary of withdrawal |
|---|---|---|
| Exclusion a,b,c on five adjacent states | Obtained the required polynomial degree 4. For everyone 66 windows1..70: strict HG-L1 Certificate is not possible in all degrees of a particular ideal and permissible monomial orders at the selected box | The common ideal of all conditions and the model itself QCG That's not excluded |
| Joint linear staging of all 66 conditions | 69 errors 1332 Monomial coordinates, rank 66. The true vector has the norm ≥2^1020, But there's an extraneous vector of the norm in the grid n<2^256 | The search for the true vector as the shortest in this particular homogeneous linearization is closed; nonlinear dependencies are closed CVP and other investments have not been verified |
| Five-step passes | The exact composition has a degree 32. Free polynomial degree 32 fit-in 12 late-transition 65/65 entrances, including real and casual | All of this 65 polynomial **not** This is the fifth iteration of a quadratic polynomial 32 Weaknesses of the model are too weak |

Therefore, the increase in size/timeline LLL This is not a claim that any grid attack is impossible QCG.

## How the original masks are taken into account

The same used 83 Notable solutions: No1..70 no75..135 stepwise 5. Observations are juniors i−1 bit raw-Unknown high bits were not replaced by zeros in the hypothesis test: in all neighboring conditions they remain variable. The only use of zero high bits is an explicitly designated demonstration solution of a weakened free degree model 32.

After eliminating the coefficients and the overall shift, each window uses four errors e[i]=2*u[i+1]−u[i]where s[i]=r[i]+2^(i−1)*u[i]Borders R[i]=2^(257−i). Even for the most informative neighbor window No66..70 The weights of the leading monomes are 2^758..2^760, then n<2^256. For all windows, the maximum divisibility monomes have reversible coefficients **solitary** It is an ideal, not a conclusion from the failure of the solver.

In co-linearization det(L)=n^66*2^458633; 1263 independent coordinate vectors are shorter than the lower bound of the true vector 0, Therefore, they do not solve the original monomyal system with z[0]=1. Monomial dependencies in this linear construction have been removed; their use within a nonlinear solver remains a separate task.

The global model has only four field parameters a,b,c,s[1]Local obstacles **not**, all 83 There was no single computation of the compatibility of the entire nonlinear system.

## Degree 32 publication

Nana 32 true QCG independently verified degrees 2,4,8,16,32, seniority a^31 next 16*a^30*b. Checked out 13 stepping-step 5 no70 before135. Preservation of the four intermediate states replaces the degree 32 Five quadratic equations; the difficulty turns into additional unknowns. You can't replace the three general parameters of the composition 33 free coefficients and consider the resulting fit as evidence QCG.

Woo [job](https://personales.unican.es/gomezd/Articles/Blackburn/mathcomp.pdf) The test here is not a reproduction of her algorithm or a transfer of her estimates. [LITERATURE.md](<LITERATURE.md>)All the proper formulas and limits of conclusions: [MATH.md](<MATH.md>).

## Controls and independent audit

32 fresh-faced QCG-chains 32 The independent random sequences got exactly the real masks and omissions, the full states were used only for arithmetic control QCG-chains all reset 66 necessary invariants; on random complete chains, none. **This is a test of formulas, not the detection of a connection on one mask and not the assessment of sensitivity.**

- Checked out 4290 window 30030 Certificates of leading monomes and 4224 Values through independent determinants.
- SymPy independently derived the determinant, normalized by polynomial and all shifts; FLINT He tested the entire determinants, compositions, interpolation and necessary symmetry of the composition.
- Scientific time: 13.913811 limit 120 C. Arithmetic audit: 7.398207 c; the entire audit with a reading of the previous archive: 170.294162 s.
- LLL-reductions: 0; root-searching: 0; Timeouts of the scientific stage: 0. This is a deliberately limited preliminary stage, not a negative result of the complete solver.
- All 10843 The previous files have been saved SHA-256 and mtime; 1792 Dependency files matched the saved hashes cuso/SEQ-17 They didn't restart.

Source code, auditor, data and criteria are recorded in MANIFEST.json They did not change before and after. RESULTS.json - an artifact of the initial study (`RESULTS.json`; outside the picture), AUDIT.json - an artifact of the initial study (`AUDIT.json`; outside the picture), GEOMETRY.json - an artifact of the initial study (`GEOMETRY.json`; outside the picture) contain machine results; [README.md](<README.md>) - check-in teams.

## Remaining task

The perspective can be changed by a joint nonlinear production that preserves the common a,b,c and the relationship between monomes/intermediate states, before applying it to Puzzle, A positive result of recovery or distinction on synthetics with the original masks is required. SEQ-22 I didn't build a method like this; there's no reason to promise success. There's no fortune, no new key, no bit of an unsolved problem.
