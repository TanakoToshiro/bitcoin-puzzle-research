> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-cross-ratio-20261102/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-07 Recovery through double ratio invariants

02.11.2026, Moscow. Run `SEQ-07-a387b84e2164`.

**A method of restoring a relative fractional-linear chain is obtained
without going through the four hidden additions 24 new enhanced controls
The true class of shifts is found; in all 24 inside the found class
Unambiguously restored synthetic key number71. In the real profile
The masks failed to recover, the real search didn't start, the model
Not rejected, no new real key or bit.**

The result consists of a verified algebraic condition, heuristic
lattice restoration of relative states and exact conditional
Recovery of the allowable general shift
Model classes are not proven.

## Model and exclusion of parameters

The model is maintained SEQ-06:

```text
s[i+1] = (A*s[i]+B)/(C*s[i]+D) mod n
AD−BC != 0; C != 0; r[i] = s[i] mod 2^(i−1)
```

n order secp256k1. All first 135 states must be finite;
The poles are not replaced by zero. The export order and the module remain unchanged.
The historical connection of this generator with the creator Puzzle It's not set.

Fifth crossing R=M^5 It is also a sub-linear, so the upper observations are
№75,80,...,135 form a suitable uniform sequence.
For its five neighbouring values a,b,c,d,e double-relation
condition A,B,C,D:

```text
F = (a−c)(b−e)(c−d) − (a−d)(b−c)(c−e) = 0 mod n.
```

This is a cubic condition after the reduction of non-zero b−d. In different ways
elements of neighbouring threes (a,b,c) andb,c,d) it's a continuation
single-image a→b→c→d on e. Equality considered
Projectively: the zero denominator of the usual double ratio does not result in
erroneous exclusion of periodic chains with period 3.

Primary materials on the preservation of a double relationship:
[Shaun Bullett, MTH6111, section IV](https://webspace.maths.qmul.ac.uk/s.r.bullett/CA_sectionIVnotes.pdf).
Here the condition over a simple field is derived algebraically and verified separately.

## The first solver and the problem found

Recent studies 5, 9 and 13 Upper observations: respectively 1, 5 and 9
Each one has centered hidden parts
`s=r+2^b*(center+u)`After replacing monomes with separate coordinates
This is a linear modular system A*y+c=0.

For it built a precise weighted lattice with a shifted layer and one
The location of the attachment. **27, 91 and 155**. The task is done
single-handed LLL-reduction; only lines with attachment coordinate are considered
±S. Supplements of states and string combinations are not listed.
Used of the existing python-flint 0.9.0,
[interface fmpz_mat.lll](https://python-flint.readthedocs.io/en/latest/fmpz_mat.html).
The presence of this interface is not a guarantee of the success of the method.

Strict decoder SEQ-07A required simultaneously acceptable u equality
each monomial coordinate of the corresponding product u.
He did not restore any of them 60 reinforced positive chains.
All initial results are saved; this outcome is not replaced by results
The next decoder.

The analysis of the first case with two hidden bits revealed a specific reason:

```text
истинные u:             −2, −1,  1, −2, 0
линейные координаты LLL: −1,  0,  2, −1, 1
```

The differences are correct, but the overall shift has changed to +1. Same thing F invariantly
All states are shifted, and also monomyal linearization
Allows short strings to have consistent linear coordinates
with uncoordinated auxiliary monomes
is not proof of recovery, but can give verifiable
The relative chain hypothesis.

## Second decoder: Relative chain and precise intervals

Separate protocol SEQ-07B fixed `translation/PROTOCOL.md`
after this diagnosis and until the creation of new control results.
Grid, LLL And then you look at the old lines.

1. From linear coordinates, the assumed states are constructed mod n.
   From each is deducted the estimated state No135; get out
   relative-chain z s z[135]=0.
2. Initial cubes are checked F, recover R single
   fifth-root M. The total relative stroke should coincide with the entire panel
   be non-affinicient and have no poles.
3. A general shift t=s[135] It is searched conditionally and accurately, without too much:

```text
t = r[135] + 2^b*q, b = bits[135]
s[i] = (z[i]+t) mod n
```

Here b no less than any mask in the kits in question i
Only two transfers are possible w=0/1. Checking the residue takes on the form

```text
(z[i]+r[135]−w*n) mod 2^bits[i] = r[i].
```

The selected transfer sets the interval for q. The limitations of all are crossed
83 And you get a precise set of allowable shifts
relative class; q Any false hypothesis is not listed
Discarded when checking the chain or intervals.

Conditional projection at No71 particularly simple: b>=70 shift q*2^b doesn't change
junior 70 bits before transfer mod n. Therefore, **intercompatible
relative-class** No more than two keys are possible71, appropriate
This is not a limit on the number of candidates for the whole model.
There may be many unknown relative classes.

## Independent confirmation SEQ-07B

The entire upper panel selected was opened 256−h The little bits,
wherein h=2,4,8,12. Outside the panel left real masks i−1. It's significant
Enhanced observations, not the original completeness of data Puzzle.

| Panel | h=2 | h=4 | h=8 | h=12 |
|---|---:|---:|---:|---:|
| 5 conditions, No115–135 | 2/2 | 2/2 | 2/2 | 2/2 |
| 9 conditions, No95–135 | 2/2 | 2/2 | 2/2 | 2/2 |
| 13 conditions, No75–135 | 2/2 | 2/2 | 2/2 | 2/2 |

Each cell has one new general transition and one new inversion transition.
Totally **24/24** Restored classes containing the true chain.
Each launch found one class; this is not proof of the absence of others.

All of them 24 Projection of the class found on the synthetic key No71
It has exactly the same value and it matches the true value
This is not always the case: for example, when h=12 remain 44–123
The conditional uniqueness of the key does not require shifting in one class
The uniqueness of the full state.

The six new random control sets did not yield compatible classes.
This small control does not estimate the global probability of falsehood
signal Puzzle; Each accepted class is additionally accurate
arithmetic testing.

A separate decoder is applied to already saved 78 grids SEQ-07A:
He found true classes in all of them 60 reinforced positive cases,
including intermediate h=6. It's **diagnostic sampling after
development**, not yet 60 independent evidence.

Practical difference from SEQ-06 I can see it already h=12: four-pillar
flat-out 2^48 The new solver doesn't list them.
In two new five-element examples h=12 The whole decision-maker took about
0,019–0,020 (c) for 9 elements 1,32–1,60 c, for 13 — 14,06–14,50 s.
This is measuring the internal stages on this machine, without generating data
launch Python and an independent audit 2^48 For comparison, it didn't start.
Equality of information profile with SEQ-06 It is not stated: here reinforced
The entire panel selected, and additional observations are used earlier.

## What happened to the real masks?

SEQ-07A: 0/6 Recovery on synthetics with real masks.
SEQ-07B: **0/6** These are the complete heuristics
Attempts, not timeouts or exceeding the brute force limit.

None of the panels have passed positive clearance, so for the real ones
83 Only structural comparisons are made/lattices;
LLL-There was no real residue search. The zeroes above are the controls
It's not the number of compatible models.

In the five-element panel, real observations contain 114–134 junior
bat 142–122 position unknown to the width 256. Confirmed
The examples were the maximum 12. **12 The highest verified point of this
A series without a set algorithm limit.**

Linearization is very debilitating, for real panels 5/9/13 remain
26/90/154 Monomial coordinates and only 1/5/9 linear mod n.
Rough logarithm of the volume of a rectangle of coordinates divided by an index
the lattice, is about 7237/29971/55985 It's not a bit
takes into account the dependence of monomes, does not consider the original nonlinear solutions
It's not the bottom line of recovery complexity
It does not prove the impossibility of a stronger method.

## Audit and reproducibility

- Checked out 16 807 five-over F7. Nana 7350 non-degenerate fives
  condition F independently verified with a matrix of linear cofactors;
  period 3 And the poles are clearly processed.
- Invariance is independently symbolically verified F shifting
  in four different ways 114 lattice coefficients disclosed
  other expressions through differences and coincided with the work implementation.
- All 114 Certificates are verified precisely: T*B=L, det(T)=±1, belonging
  lines of initial modular comparisons, the correct lattice index,
  The scale of the true synthetic root is acceptable.
- All 24 new 60 Diagnostic relative classes are lost
  independent scalar arithmetic, allowable shifts independently
  obtained by partitioning at the points of transfer, not by a working intersection
  Key projections No71 They're also collated.
- The conditional shift solver is further compared with a complete brute force
  into 300 problems over small fields.
- Save SHA256 and mtime everyone **714 previous accepted files SEQ-01..06**.
  Hashes checked 1792 Files of existing dependencies. GPU,
  The previous scientific phases were not launched.

SEQ-07A contains 78 tasks, SEQ-07B — 36 The total time of the daughters
process 401 and 214 (c) respectively, including the launch Python.
All 114 LLL-the tasks are completed in limits; further verification does not repeat
LLL. Post-stopping recovery and integrity control are described in README.

## Conclusion for the next step

The double ratio gave a working mechanism on the amplified data.
The main useful finding - restoration **relative-class**,
After which the total shift and projection of the key are solved by precise intervals.
This is very different from the four hidden states SEQ-06.

For real masks, there's no working recovery yet
Continuation - eliminate the general shift before the grid is built, then
Measure the limit of recovery when increasing the hidden part on new
A simple increase in the size of the panel in this series benefits
I didn't show it on real masks. This next episode didn't run here.

Basic data: `CONTROLS.json`, `translation/CONTROLS.json`,
`translation/DIAGNOSTIC.json`, `translation/MEASUREMENTS.json`, `REAL.json`,
`translation/REAL.json`, `AUDIT.json`, `ALGEBRA_AUDIT.json`.
