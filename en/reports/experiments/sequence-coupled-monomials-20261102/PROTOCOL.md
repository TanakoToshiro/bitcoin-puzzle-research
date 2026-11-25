> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-coupled-monomials-20261102/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-09 Relationships between monomes within the solver

02.11.2026. The user has expressly allowed the use of dependencies between
The monomes in the solution of the system n, masks and limitations
Trajectories old: SEQ-08, no poles, non-affinity fractional linear stroke.

## Technical calibration prior to registration of new inputs

On old positive examples SEQ-08, General generator, investigated
only the size of short polynomials of a simple lattice mod n. Panel5:
h12 — 9 polynomial |g|<n; h16/20/24 - none.
Panels9/13 upon h20 None of them (minimum estimates are available) 259/260 bits.
This is a diagnosis of old inputs, not a new confirming sample.
Old files/Stages do not change; truth is not used in line selection.
New results are not attributed to this calibration.

## From Modular Conditions to Entire Equality

Differences persist SEQ-08 cubical G_j(u)=0 mod n.
In the new lattice, the line stands for POLYNOM, not intended values
independent monomes. Coordination of monome u^alpha scale
B_alpha=product(X_i^alpha_i), wherein |u_i|<=X_i Proved by the original masks.

If each generator of the lattice is converted into 0 mod N on an acceptable root,
So any whole combination has the same property
g_alpha Calculate an accurate estimate H=sum(|g_alpha|*B_alpha).
Only if H<N, conclude g(u)=0 It's a sufficient condition
It is not necessary: its failure does not mean the absence of a useful polynomial.

Two pre-fixed options:

- `coupled_m1`panels5/9/13, N=n. The grid of all the coefficient vectors,
  belonging mod n linear G_j. Lined up RREF:
  standardized G_j and n*Monom for non-reversible coordinates.
- `coupled_m2`, just a panel5, N=n². The only one G standardize
  senior mono L (graded lex), so that its coefficient 1 mod n.
  Monomas M Initial support with constant and linear monomes;
  columns S=M+M. Generators: G², n*u^beta*G for beta in M except L,
  n²*u^alpha For the remaining leading coordinates, different lead monomes
  They give a triangular basis. All generators are divided into n² on the true root.
  It is a specific limited system of shifts, not the whole ideal of degree2.

One LLL, delta=0.99, eta=0.51. No uncertified lines are available
After a rigorous evaluation, you can divide the polynomial by
Non-zero whole content: it doesn't change a lot of its zeros.

## Joint nonlinear solution

Certified polynomials are submitted to SymPy squirrel
variable u_i. Therefore, u_i*u_j, u_i² and other monometrics are bound together during
Calculation of the Gröbner basis, not just in subsequent verification.
All right grevlex, method f5b, field QQ. For the null-dimensional ideal is allowed
FGLM into lex upon <=256 standard monomes; whole roots are extracted
Consistent exclusion and rational decomposition of univariant
polynomials, with a limit256 The roots must be in the initial intervals.

No certified equalities, positive dimensionality, algebra limit
and timeout are different outcomes QQ proverb
It's a few very limited solutions. It takes the same thing to take root
complete verification of the relative chain and all83 masks at shift intervals.
The global uniqueness of the model is not stated.

## New pair entrances and limits

Panels5/9/13, h=8,12,16,20,24,32; one common and one inverted
level-up/panel:36 reinforced positive inputs.
In the selected panel known 256−h The minor bits; outside her mask i−1.
The panel has two random entrances h16 and two positives with the real
More masks12 All the entrances48 entrances.

Comparisons are made at each entrance `baseline` (copy) SEQ-08 differences)
and `coupled_m1`For everyone16 panel-inlet5 add `coupled_m2`.
Totally112 General and inverse examples with the present
The masks on each panel are launched first. Seed They're coded.
45 seconds for one method, 20 minutes of total child processes.
The achieved limit is not considered a negative result of the model.

Real search is separate for each method/panels: restored
Both new examples with real masks, except for the structure calculation.
No real search and no conclusions about the lack of real models.
Intermediate sets after the data do not add, parameters are not selected.

## Verification

Exhaustive small control of the associated solution, including the system,
where monomial linear relaxation gives you extra values
precision generators mod n/n², T*B=L, det(T)=±1 and scales
Certified string – accurate assessment and independent substitution
The Gröbner base and the final roots
independently verified; complete chain and shifts are checked by previous
independent formulas. SHA256/mtime SEQ-01..08 They're still there.

One computational CPU-process; existing process; SymPy/python-flint,
without GPU, Installation and execution of previous search stages.

## Primary materials

https://docs.sympy.org/latest/modules/polys/reference.html
Official definitions GroebnerBasis, is_zero_dimensional and FGLM.
https://eprint.iacr.org/2024/1577.pdf
Context of the joint application of lattice and algebraic exclusion;
The specific algorithm of this work is not reproduced here H<N
It is derived directly from triangular inequality and divisibility.
