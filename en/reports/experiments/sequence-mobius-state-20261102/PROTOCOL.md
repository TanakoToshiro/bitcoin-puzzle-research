> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-mobius-state-20261102/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-06 A new nonlinear transition: a fractional-linear chain

02.11.2026. The user allowed to move to a new transition/justified
This is a change in the junction n stays good secp256k1.
The production is fixed until the actual data is verified
computational15 minutes; CPU-process GPU and installations.

## Model

```text
s[i+1] = (A*s[i]+B)/(C*s[i]+D) mod n
AD−BC != 0 mod n; C != 0 mod n
```

The coefficients are unknown, determined to a total non-zero
multiplier. C!=0 Isolates a nonlinear class and eliminates the previous affinity class
The model used for observations is the old model r[i]=s[i] mod2^(i−1).
It is assumed that there are no poles in the first135 condition/134 crossings.
At the pole, the candidate does not match this finite model; infinity
It's not replaced by zero. s_next=beta+alpha/s, alpha!=0.
Historical connection with the creator Puzzle It's not set.

The projective direct transition is given by the matrix M=[[A,B],[C,D]].
Fifth crossing M^5 Also Fractional Linear: Top Solutions No75,80,...,135
You can use it without incorrectly compressing the indexes
ICG `inverse(0)=0` Not considered in the branches with a hit in0;
It is a separate model, not a projective transition through infinity.

## The exact method and its computational limit

Four full states No120,125,130,135 neighbouring
triplets are clearly R=M^5. Restore the Fractional Linear
mapping in three pairs, through displays of threes in0,1,infinity.
Check the remaining upper observations backwards R.

For the simple p, |PGL(2,p)|=p*(p^2−1). Checked out gcd(5,|PGL|)=1;
then M=R^(inverse(5,|PGL|This is true for n and selected small
p=7,127,227. The fifth power transition is clearly checked.
Po Po M state120 restore s[1]Then we check everything83
Observations are direct without substituting true future values.

For partially observed states, ALL supplements are listed
s=r+2^b*q into[0,p). It's **combing**,
It is not a polynomial algorithm or an acceleration of general cryptanalysis.
Before the listing, we accurately consider a product of four sizes.
Limit1 000 000 task combinations, before4096 accepted models.
Exceeding `domain_budget`/`model_budget`Not a negative conclusion.

Selected anchors give the longest available four residues
It's a uniform top panel, and it's clearly the area that's kept separate
indiscernible/They are repetitive, but they are not rejected.
Result `complete_nondegenerate` means completeness only for
registered class with non-degenerate anchor triple.

## Controls and real data

- Accurate comparison of matrix and scalar performance, composition,
  Interpolation, pole treatment and fifth root extraction.
- All336 component PGL(2,7) to test the fifth root;
  Small recovery tasks are independently verified by a complete search
  matrix/initial state, including zero results.
- p=127 (7 bit227 (8 bit:4 New nonlinear chains, two common ones,
  Two inverted. Masks are scaled floor((i−1)*w/256), everything83
  The original index is saved. The non-polar chains are selected
  reproducible rejection sampling; The number of attempts continues.
- Full-size n: for the general and inversive family of4 new
  chain1,2,3 hidden bits at four anchors
  (24 Others79 The masks remain in their true form i−1.
  These are enhanced positive controls, not true completeness of observations.
- Po Po4 Accidental negative control on small present form
  and8 Full-size with reinforced anchors.
- Two full-length positive examples with real masks:
  first preflight. If the limit is exceeded, the search will not be launched and
  The admission of real search is considered to be unobtained.
- For the real ones83 decisions allowed for precise preflight cost,
  No matter the admission, real enumeration only when successful
  Positive controls with the same data form and limit compliance.

Do not extrapolate success with almost fully known anchors
real74–134 the bits we've seen/lack of
The basic exact method does not mean that a stronger method is impossible
a lattice or nonlinear algorithm.

SHA256/mtime all accepted SEQ-01..05 Continued; new results
cached sealed. Independent audit uses other receipts
Matrices by linear equations. Old scientific stages are not being fulfilled.

## Primary context

Blackburn, Gómez-Pérez, Gutierrez, Shparlinski, Math. Comp.74 (2005):
https://personales.unican.es/gomezd/Articles/Blackburn/mathcomp.pdf
Work shows recovery of some nonlinear generators
with sufficiently long open parts, with conditions and exceptions.
The result is not automatically transferred to the current mask; here
An independent exact basic method is investigated, not the implementation of the theorem2.
