> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-coupled-monomials-20261102/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-09 Relationships between monomes within the solver

02.11.2026. Run `SEQ-09-391bf2dfea48`Recorded limited series completed.

## Result

Monome dependencies are now used during the solution: certified
polynomials from common variables are transmitted to the Gröbner base
Small exhaustive controls and independent verification of completed decisions.
**New Recoveries Relative to Couples SEQ-08: 0.**
Option n restored 10 from 36 reinforced
positive inputs; the former method 22 from 36.
Option n² on its panel has not completed the restoration of any entrance;
Timeouts are reflected separately, not interpreted as a lack of solutions.

On positive examples with initial masks, search admission did not pass
none/panel. **No real search has been launched; a new real key
Or you don't get a bit. The model of the fractional-linear generator remains open.**

## What has changed mathematically?

There's still a model `s[i+1]=(A*s[i]+B)/(C*s[i]+D) mod n`where n order
secp256k1, `AD−BC != 0`, `C != 0`without poles at the first 135 fortunes.
Observations: `r[i]=s[i] mod 2^(i−1)` for 83 known keys.
The scalars of the initial states are studied; operations with the points of the curve here
Module and export order do not change.

From SEQ-08 Neighboring differences are preserved by step5 and cubic invariants:

```text
D[j] = r[next] − r[left] + 2^b[left] * (center[j] + u[j])
G(D0,D1,D2,D3) = D1*D3*(D0+D1) − D0*D2*(D2+D3) = 0 mod n
```

In the previous lattice, the coordinate represented the assumed value of the monome.
Now the line represents the coefficients of the polynomial `g(u)`Every generator
multiplicity N, on any valid true root
boundaries `|u[i]| <= X[i]` An accurate whole estimate is calculated:

```text
H = sum_alpha |g_alpha| * product_i X[i]^alpha[i]
H < N  =>  g(u) = 0 над целыми
```

Proof of triangular inequality and divisibility N. After this
Checks can remove a total non-zero integer factor of coefficients.
The failure of the evaluation does not mean that the polynomial is useless or there are no solutions.

`coupled_m1`: N=n, linear-shell G_j mod n;
dimensionality 16/53/89 for 5/9/13 fortunes. `coupled_m2`: N=n²,
single-rate G, generator G², n*u^beta*G and n²*monomes;
dimensionality88, just a panel5. This is a limited predefined set
without asserting the optimality or completeness of the whole ideal degree2.

Next F5B/grevlex above QQ; zero-ideal FGLM/lex, more256
standard monomes and256 whole root extraction nodes
`u0*u1` is the product of the same `u0` and `u1` It's already on the exclusion.
FGLM Requires nullity; used API and the algorithms are checked with
[official documentation SymPy](https://docs.sympy.org/latest/modules/polys/reference.html).

Each root passes the initial intervals, restoring the relative
path135 condition and verification of all83 masks
Success means restoring true synthetic
class shift; the global uniqueness of the original model is not stated.

## New confirmatory sample

48 new entrances: 36 reinforced positives, 6 positive
masked6 random, for everyone h/The panels are two generators: general and
Inversive. We know from the selected panel256−h minor bits; outside the panel
The masks are original. h=8,12,16,20,24,32. For n² used16 panel-inlet5;
for the rest of the methods,48. Planned112 launch method;
actually started 102,
Others have received status `total_budget` without starting the process.

All inputs are saved until the first calculation seed and the code is fixed in
MANIFEST.json. Truths are not passed on to restore functions
old-door SEQ-08 before the protocol was fixed, described separately in
PROTOCOL.md It's not included in this table.

In a cell, the number of true classes reconstructed from two given examples.
“Lim” refers to an incomplete attempt, not a negative response.

| Panel | Method | h8 | h12 | h16 | h20 | h24 | h32 |
|---:|---|---:|---:|---:|---:|---:|---:|
| 5 | SEQ-08, pair-control | 2/2 | 2/2 | 2/2 | 0/2 | 0/2 | 0/2 |
| 5 | Related monomes, n | 2/2 | 2/2 | 0/2 | 0/2 | 0/2 | 0/2 |
| 5 | Related monomes, n² | 0/2 (2 Lim | 0/2 (2 Lim | 0/2 (2 Lim | 0/2 | 0/2 | 0/2 |
| 9 | SEQ-08, pair-control | 2/2 | 2/2 | 2/2 | 2/2 | 0/2 | 0/2 |
| 9 | Related monomes, n | 2/2 | 2/2 | 2/2 | 0/2 | 0/2 | 0/2 |
| 13 | SEQ-08, pair-control | 2/2 | 2/2 | 2/2 | 2/2 | 0/2 (1 Lim | 0/2 (2 Lim |
| 13 | Related monomes, n | 0/2 (2 Lim | 0/2 (2 Lim | 0/2 (2 Lim | 0/2 | 0/2 (2 Lim | 0/2 (2 Lim |

| Method | Enhanced positives | Reference masks | Random entries with a model | timeouts |
|---|---:|---:|---:|---:|
| SEQ-08, pair-control | 22/36 | 0/6 | 0/6 | 0 |
| Related monomes, n | 10/36 | 0/6 | 0/6 | 7 |
| Related monomes, n² | 0/12 | 0/2 | 0/2 | 8 |

The number of specified inputs, including incomplete and uninitiated
Detailed coverage of each entry: MEASUREMENTS.json.

Status of all attempts:

- `baseline`: `heuristic_no_candidate` — 21, `translation_classes_found` — 22, `total_budget` — 5.
- `coupled_m1`: `no_certified_equations` — 24, `translation_classes_found` — 10, `unit_ideal` — 2, `timeout` — 7, `total_budget` — 5.
- `coupled_m2`: `no_certified_equations` — 8, `timeout` — 8.

Separate result: 2 random-entry
have received a strict certificate of contradiction (`unit_ideal`, the basis contains1).
The necessary whole equality is incompatible with QQ, permissible
There's no root within the given boundary for these inputs
the former status of "no candidate found"; it does not apply to
This does not mean that the area of positive recovery is widened.

Two examples per level - diagnostic sample, not universal assessment
the probability of success0at random entrances with timeouts or
A non-started attempt does not mean a complete negative check of these inputs.

## Where the restriction has arisen

On the panels5 and9 A simple coefficient lattice loses strict integer equality
before the old heuristics ceases to extract the correct relative chains.
Lost pair restorations are listed in COMPARISON.json;
This lack of input equality does not in itself remove the joint solution.

For n² The following number of certified lines is stored on two
positive inputs of each level: h8: 77/77; h12: 63/63; h16: 49/49; h20: 0/0; h24: 0/0; h32: 0/0.
Having a large number of lines does not mean that the final system is easy
extractable roots. Records progress fixate LLL certification
before algebra; unfinished bases and roots are not declared verified.

Limitation45 seconds are given for the entire method-start, including starting the process,
Reduction, verification and algebra: The total time of child processes:
1200.03 seconds; total limit1200 seconds.
A slight excess45 second-in-second wall-measurements
The overall limit left the process
10 Attempts untried.
The last attempt begun `coupled_m1/positive_p13_h24_general`
I only got the rest of them around12 Seconds of the budget and did not save
The grating; it cannot be compared as a full-fledged45-A second try.

For real masks, the upper panels are left approximately122–182 hidden
the initial state bits, depending on the index, are significantly greater,
more h in enhanced controls, with appropriate synthetic examples
No successful admission; REAL.json It contains only the structure of real
The failure of this algorithm does not exclude the hidden connection itself.

## Verification of the result

- 16 Small systems: all625 square-point [-12,12]^2 checked
  root extracted4 In this case, the positive dimension is checked
  Contradiction, incomplete root and negative roots
  monometic z He gives a false answer that violates the z=x*y.
- 101 the exact lattice certificates, of which
  14 with incomplete subsequent algebra.
  Generators, weights, index checked, T*B=L and det(T)=±1.
- 11 Attempts did not leave a lattice certificate;
  They are listed separately and are not among the verified bars.
- 1122 Certified polynomial strings;
  for 954 extraneously
  A true synthetic root is inserted and an exact whole zero is obtained.
  All the reduced lines are viewed, not the selected successful ones.
- 12 finished-system
  retested by the algorithm Buchberger workman F5B. Entire roots
  re-extracted by factorization of exclusionary polynomials
  The systems were not solved in the audit under the guise of continuing the experiment.
- Accepted classes, entire trajectory, general shift intervals and conditional
  projection71 They're independent formulas. They're projections
  It is only for the synthetic entries of this series.
- SHA256 and mtime everyone 1818 past-accepted
  file SEQ-01..08 The hashes of existing dependencies have been verified.
  Continuation without new calculations confirms RESUME_CHECK.json.

Primary sources and limits of their use: SOURCES.md. Source
Data, code, exact certificates and commands are stored in this folder.

## Conclusion for continuation

Required change accomplished: relationships between monomes are real
included in the decision and the completed results are independently confirmed
There is no expansion of the recovery area in this sample.

The following self-experiment should distinguish between two limitations:
obtaining sufficient stringent polynomials and the cost of their joint
The solution n² Non-trivial systems are already in place
separately check the preliminary reduction of an ideal or other
Algebraic solver. For the initial masks of a single solver replacement
It is not enough: first you need polynomials that undergo rigorous evaluation.
No change in the algebra algorithm, no extension of the shift system in this series
After receiving the data is not started.
