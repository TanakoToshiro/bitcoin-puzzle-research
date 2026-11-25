> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-cross-ratio-20261102/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-07 Recovery through a double relationship

02.11.2026. Continuation SEQ-06 at the direct direction of the user.
The protocol is fixed before synthetic restorations and recourse to
The real leftovers SEQ-01..06 persist SHA256 and mtime.
One CPU-computation GPU/installations; existing installations; python-flint.

## Conditions and the new equation

Same model M: s_next=(A*s+B)/(C*s+D) mod n, det(M)!=0, C!=0,
poleless 1–135. n order secp256k1.
Observe r[i]=s[i] mod 2^(i−1), indexes 1–70 and 75,80,...,135.

For five consecutive steps 5 condition a,b,c,d,e:

```text
F(a,b,c,d,e) = (a−c)(b−e)(c−d) − (a−d)(b−c)(c−e) = 0 mod n.
```

This is the equality of the double relations of the neighbouring fours after the reduction of
non-zero b−d. For non-degenerate neighboring threes, it is equivalent
Continuation of a single fractional-linear display a→b→c→d on e.
Projective double relationship: period 3, commonplace
The denominator can be zero, it can't be ruled out wrong
Neighboring triplets do not give an overall sufficiency; a final check is required.

## Grid without brute additions

Panels: the latest 5, 9 or 13 known upper states with step 5.
In every pillar s_i=r_i+2^b_i*(center_i+u_i), wherein center_i - mid-point
the exact range of allowable additions F; receive
cubical comparisons in u. All non-permanent monomes are replaced
variable y. Get it A*y+c=0 mod n; It's a weakening of the original system.

We construct an exact integer grid of the core of these comparisons and one shifted grid
layer c, using Gauss's modular exclusion. Coordinates scale
At the upper power limits of monomes, we add one attachment coordinate
scaled S. One LLL (delta=0.99, eta=0.51) panel/Example.
We only look at the lines with the last coordinate ±S. No additions
The four states, nor the combination of lattice lines, are crossed.

Each line is checked: divisibility of scale; limits u; equality
monomes to the works of restored u; truthfulness F;
nondegenerate M^5 of the last four states; the only
fifth-root M; C!=0; The absence of poles; all 83 observation.
Directly during reduction and audit are checked T*B=L and det(T)=±1.

LLL/the attachment here is a short string heuristic finder
The model that we found doesn't rule out the model
It proves uniqueness. The volume of the weakened monomyal system
Diagnostics, not the lower limit of complexity of the original nonlinear problem.

## Registered inspections

1. Algebra: All 7^5 five-over F7; equivalence F independent
   restoration of the fractional-linear matrix with nondegenerate triples.
   Separately degenerate fives, poles, period 3.
2. Independent Symbolic Disclosure F and monome-checking/centres;
   Preservation of the double ratio on synthetic trajectories.
3. Complete n: on each panel 5/9/13 posture 2 general 2 inverted
   chain 2,4,6,8,12 Hidden bits in all the selected panel.
   Totally 60 Outside the panel, the masks remain real.
   This is amplified data, not a real mask profile.
4. On each panel, 2 randomly selected h=4 and h=8:
   everything 12 The filtering of all candidates is the same.
5. Complete n, Real masks: one general and inverted example
   On every panel, everything 6 It's a separate validation of real search.
6. Real recovery is allowed only for the panel that has been restored
   Both positive chains with real masks, otherwise only allowed
   calculus/rank/The scale of the grid on real data.

Seed The list of tasks is determined by the code before launches
examples, selection seed after the effect or strengthening of real masks
Nonpolar chain generation is deterministic
rejection sampling, The number of attempts continues.

One task at most 30 (c) for all recovery tasks 10 minutes.
A timeout is an independent unsuccessful outcome; it does not equal the absence of a model.
New algorithm/panels/parameters after the results in this run do not add.

## Primary sources and independent part

- Shaun Bullett, MTH6111 Complex Analysis, 2009, section IV:
  https://webspace.maths.qmul.ac.uk/s.r.bullett/CA_sectionIVnotes.pdf
  The property of maintaining a double relationship
  on a simple field algebraically and is tested exhaustively F7.
- python-flint 0.9.0, fmpz_mat.lll:
  https://python-flint.readthedocs.io/en/latest/fmpz_mat.html
  Interface LLL and transformation matrices. The efficiency of this
  Monomial investments are not approved by these sources.
