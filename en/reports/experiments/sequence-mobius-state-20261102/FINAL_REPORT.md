> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-mobius-state-20261102/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-06: sublinear transition

02.11.2026, Moscow. Run `SEQ-06-422b74557e11`.

**New nonlinear transition explored, exact base reducing agent
For real masks, it's computationally unusable 2^518
The combinations of the hidden parts of the four reference states
They didn't move; the model wasn't rejected, there was no new key or bit.**

This is a complete cycle of development, control recovery and evaluation
This is not a complete search for the parameters of the model Puzzle.

## What's changed since? SEQ-05

The transition changes, not the order of bytes or a randomly selected module:

```text
s[i+1] = (A*s[i]+B)/(C*s[i]+D) mod n
AD−BC != 0 mod n; C != 0 mod n
r[i] = s[i] mod 2^(i−1)
```

Here n order secp256k1; A,B,C,D and s[1] Unknown. Total non-zero
The matrix multiplier doesn't change the transition. Inside the class is the inverse
generator `s_next = beta + alpha/s`The connection of this class with the historical
creator-generator Puzzle It's not set.

The model requires finite states in positions 1–135: The poles are forbidden.
Projective infinity is not replaced by zero
rule ICG `inverse(0)=0` Not included for trajectories that
They go to zero ICG It remains a separate model.

## What the method does

The five steps of the fractional-linear transition again give a fractional-linear transition
R=M^5. Four full states No120,125,130,135 They define it by three
pairing → output" if the neighboring threes consist of different values.

The fifth root here is unambiguous p group PGL(2,p) has
routine q=p(p²−1); for n and control p=7,127,227 tested gcd(5,q)=1.
If 5e=1 mod q, piece `(M^5)^e=M` Lagrange's theorem `M=R^e`;
Group commutability is not required for this argument.

After receipt M recover s[1]And then they play again
everything 135 condition and all conditions are checked 83 It's a known remnant
The parameters of synthetic examples are not transmitted to the reducing agent.

But the reference states are partially known
all permissible additions `s=r+2^b*q` This is the stage for four supports
It makes direct application impossible. The limits are predefined.
1 000 000 task combinations, before 4096 Detection of accepted models
4097-The model returns `model_budget`; the overkill is not declared complete.

Status `complete_nondegenerate` means completeness only for finite
Non-affinity trajectories with non-degenerate reference threes
All six pairs of supports have incompatible residues on common minors
The meanings of the bits are obviously different
It does not interfere with the actual recovery; it prevents the volume of additions.

## Benchmarking results

| Data data | Result | Boundary of withdrawal |
|---|---|---|
| Complete n, general and inverted transitions; four supports are reinforced to 253–255 bit-known | 24/24 True matrices and initial states, each result is unique | Others 79 masks of the present shape; reinforced four supports make these tasks much easier than real |
| p=127,227; scaled-up | The true model is present in all 8 cases; 7 brute-force completed | Only 5 cases are unique; yet 2 leave 8 and 2 model; the latter is limited by the model limit |
| Independent random data: 8 minor 8 full-length | 0/16 suite | This is control of the behavior of the program, not statistical evidence of randomness Puzzle |
| Two full-size positive chains with real masks | Both got it `domain_budget`listed 0 | Admission to search on this data form is not received |
| Real 83 decision-making | Only an accurate calculation of the volume, listed 0 | The model remains open |

All saved 50 control packages: 47 complete enumeration,
1 limited number of models and 2 stopped before being listed.
In complete or partial positive packages, the true model
found 32/32 once **That's not it 32 single-digit**:
singularity is established in 29 occasions.

Particularly revealing `small_positive_227_3`: The synthetic chain has
period 3. After 120 191 from 170 520 combinations already found 4097 compatible
model 28 differentiation s[71], including the real one
It's the ambiguity of a particular small
The problem is not an ambiguity of the full size Puzzle.

Small non-polar chains are determined rejection sampling.
Number of attempts and seed stored in each packet; the sample does not represent
uniform distribution of all generators.

## Exact cost on real data

The number of allowable additions for support with the remainder r and b famous bits:

```text
count = floor((n−1−r)/2^b)+1
```

| Index | Lesser bits are known | Positions to the width 256 |
|---:|---:|---:|
| 120 | 119 | 137 |
| 125 | 124 | 132 |
| 130 | 129 | 127 |
| 135 | 134 | 122 |

A product of exact four sizes - approximately **8,581×10^155 ≈ 2^518**.
It's about in 8,581×10^149 It's over the limit. It's an exact whole and four
size retained `REAL_PREFLIGHT.json`; the number is slightly less 2^518,
although its logarithm is rounded to 518,0.

**This is the cost of a particular enumerator, not the lower limit of complexity
Cryptanalysis and not proof of insufficiency of observations.** All of them
83 decisions openly 3767 bit positions; the method uses the rest
It's an observational tool to test for additions that have already been built
The independence of these bit conditions can engage these connections earlier
It is not intended or proved here.

## Independent inspection and preservation

- Checked out 336 component PGL(2,7), including fifth root extraction
  Separate execution of the permutations of eight projective points.
- Independently listed all 2058 par "non-affinity matrix, initial
  finality F7. Of them 1302 Polar trajectories,
  462 They have degenerate supports 294 They're in the study class.
  All 22 The same set of observations was obtained with the same complete set of observations
  model, as well as the reducing agent 4 random set.
- Checked out 1476 compositions/appeals, 654 interpolation, 725 poles
  and 1565 exact amounts of additions.
- All 4136 Re-tested model solutions are independently verified
  The five-step transition matrix is obtained by another
  The way is the nucleus of a linear system of three equations; they all matched.
- SHA256 and mtime everyone **637 previous accepted files SEQ-01..05** preserved.
  The old search series, GPU And the dependency setup didn't start.

Initial strapping `study.py` wrongly demanded the completion of each
a positive example and settled on the lawful `model_budget`.
Transition to `execute.py` It only changed the processing of that outcome
protocol, seed, limits and first 11 Packages are saved unchanged;
That confirms it `EXECUTION_MANIFEST.json`Details `EXECUTION_NOTE.md`.

Accepted packages contain a total of 1 844 577 the combinations listed;
time of their execution, about 7,40 c. This is the sum of the timers of the received packets,
It's not the full time of development, diagnosis and audit.

## Conclusion for continuation

Transition to the new class completed. Accurate and verified baseline
restorer, but **Recovery from Real Masks
Not for this class yet**. Increase the limit of direct transfer
It doesn't make any sense.

The content continuation of this model is a separate method that uses
the truncated states prior to brute force
point: preservation of the double relation in a fractional-linear transition,
which allows to exclude parameters A,B,C,D and get polynomial
The effective solution to these conditions is here
**not implemented or verified**; Small and real masks should be
individual tolerances, like in this series/module SEQ-06
They didn't start.

Primary context: Blackburn, Gómez-Pérez, Gutierrez, Shparlinski,
[Predicting Nonlinear Pseudorandom Number Generators, Math. Comp. 74 (2005)](https://personales.unican.es/gomezd/Articles/Blackburn/mathcomp.pdf).
The authors investigate the recovery of nonlinear generators with sufficient
The conditions of these observations do not give automatic solutions
for our masks; SEQ-06 It is not an implementation of their lattice algorithm.

Data and reproduction: `CONTROLS.json`, `REAL_PREFLIGHT.json`,
`PREFLIGHT_DETAIL.json`, `TINY_EXHAUSTIVE.json`, `AUDIT.json`, `README.md`.
