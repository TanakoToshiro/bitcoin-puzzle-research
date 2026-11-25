> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-difference-gauge-20261102/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-08 - general shift is excluded before the grid construction

02.11.2026, Moscow. Run `SEQ-08-f817953eb705`.

**Going to neighboring differences is done and verified. Grids are reduced
s 27/91/155 before 16/53/89 The set of successfully restored positive inputs for the two methods coincided, and no expansion of the recovery region was found in this sample.
The real masks didn't go through; the real search didn't start
The model is not rejected and there is no new real key or bit.**

This is a paired comparison on the new data: each input is transmitted and received
method SEQ-07B (`legacy`), and the new method (`differences`) Previously received
succession SEQ-07 Not included in these statistics
positive inputs: the old 16/60, new 16/60.

## What has changed in mathematics?

The model is old: `s_next=(A*s+B)/(C*s+D) mod n`, det!=0, C!=0,
poleless 135 fortunes. n order secp256k1; observed
junior i−1 The historical attribution of the generator has not been established.
Upper observations No75,80,...,135 step 5 and submit to the transition M^5.

Instead of absolute hidden states, neighboring whole differences are used
`D_j=s[j+1]−s[j]`The cubic condition of the double ratio takes the form:

```text
G = D1*D3*(D0+D1) − D0*D2*(D2+D3) = 0 mod n.
```

There is no general shift in the system of variables LLL. On the panel
from k condition k−1 For different masks, it says:

```text
s_j = r_j + 2^b_j*q_j, 0 <= q_j < C_j
D_j = r_(j+1) − r_j + 2^b_j*v_j
v_j = 2^(b_(j+1)−b_j)*q_(j+1) − q_j
−(C_j−1) <= v_j <= 2^(b_(j+1)−b_j)*(C_(j+1)−1).
```

This is the formula of a whole difference of initial states in [0,n). Transfer mod n
It's not discarded under the guise of a known minor remnant
Limits of interval shells; independence of different v_j It's not supposed.
After restoring the relative course, their compatibility is checked
exact intervals of the general shift over all 83 Observation.

Each G Linearized by monomes; a weighted modular lattice is constructed.
Performing alone LLL With the previous settings, only lines are considered
last-coordinate ±S. From linear coordinates, candidates are obtained
Differences; Relative states are restored in reverse
s z[135]=0. Then they're checked M^5, fifth-root M, lack of
The poles, the entire relative course and all the original masks.

Supplements of states, the value of the total shift and the combination of lines do not
It's listed SEQ-07B, sub-ordinates
Not for real works: Candidates are only accepted
After checking the original nonlinear model.

## Comparison on new chains

On every panel and level h One general and one inverted are checked
chain with new pre-recorded seed. In the selected panel
known 256−h The smaller bits, the masks are outside i−1. All given
levels h≤120 They reinforce real observations; they're not the original profile Puzzle.

In the table on the left, the old method, on the right new; the number means recovery
A class that contains a true chain.

| Hidden bits on the fortune | Panel 5 | Panel 9 | Panel 13 |
|---:|---:|---:|---:|
| 12 | 2/2 → 2/2 | 2/2 → 2/2 | 2/2 → 2/2 |
| 16 | 2/2 → 2/2 | 2/2 → 2/2 | 2/2 → 2/2 |
| 20 | 0/2 → 0/2 | 2/2 → 2/2 | 2/2 → 2/2 |
| 24 | 0/2 → 0/2 | 0/2 → 0/2 | 0/2 → 0/2 |
| 32 | 0/2 → 0/2 | 0/2 → 0/2 | 0/2 → 0/2 |
| 48 | 0/2 → 0/2 | 0/2 → 0/2 | 0/2 → 0/2 † |
| 64 | 0/2 → 0/2 | 0/2 → 0/2 | 0/2 → 0/2 |
| 80 | 0/2 → 0/2 | 0/2 → 0/2 | 0/2 → 0/2 |
| 96 | 0/2 → 0/2 | 0/2 → 0/2 | 0/2 → 0/2 |
| 120 | 0/2 → 0/2 | 0/2 → 0/2 | 0/2 → 0/2 |

Two cases per level, exploration sample. Last successful point
is not a guaranteed boundary for all generators;
significance h, The ones that were not in the table, they weren't checked
new seed, parameters LLL or additional solutions after the result.

Number of jointly restored entrances with the same classes and exact
shift intervals: **16**.
The data of all couples, including failures, are in PAIRED_MEASUREMENTS.json.

Zero controls: by 6 random inputs for each method;
class found 0 old
0 It's a test
Program behavior, not evidence of randomness or incompatibility Puzzle.

Number of classes with synthetic key projection No71 one-way/two-way
values: legacy — 15/1; differences — 15/1.
The true value goes into the validated projection
And even the single meaning of a key inside it doesn't prove global
uniqueness for the whole model.

## Size and time

| Conditions in the panel | Dimension, old → new | Median relationship of time old/new | Completed pairs |
|---:|---|---:|---:|
| 5 | 27 → 16 | 2.80× | 24 |
| 9 | 91 → 53 | 1.94× | 24 |
| 13 | 155 → 89 | 2.48× | 23 |

Time is the internal stages of the solver, without starting Python, generation,
Certificate records and independent audits used in each pair
This is a local measurement on this machine, not a universal measurement
acceleration estimate; scatter and all baseline times retained.

The new wording reduces the matrices, but the intervals of unknowns are
differences wider than the intervals of individual centered additions:
uniformly h The initial addition after centering has a radius
near 2^(h−1), And the difference is up to 2^h−1. The lower dimension itself
This does not guarantee the expansion of the recovery area.

Limited launches: 1; each listed CONTROLS.json. The † label indicates that there is such an outcome at the level. a timeout does not equal the absence of compatible models.
Total time of child processes - 808.28 c,
launching Python. Total registered limit - 900 (c)
limit of one method of entry - 30 s.

## Real Masks and Limits of Output

On the same six new positive chains with real masks
Each method received 0/6 These are six paired entrances
Not twelve independent examples. Not one panel/The method didn't pass the clearance.

For real 83 Only the structure of the systems is tested
dimensions and coefficients; LLL-They didn't run a search
The results of the tests do not exclude compatible real models.
Neither the real private key nor its bit has been received.

The general exclusion of the shift eliminated the specific redundancy, but the solver
still replaces dependent monomes with independent coordinates and searches
only individual short lines LLL. It remains heuristic
The completeness of nonlinear reduction is not proven.

## Verification and preservation

- 26 740 checks for the exact integer difference on small fields, including
  Different masks and negative differences; 1000 numerical G=F.
- Symbolic identity G=F. For each verified lattice packet
  New method coefficients redisclosed through five accumulated
  condition and F, not a working formula G.
- 143 accurate certificates: T*B=L, det(T)=±1,
  belonging to the original modular comparisons, the correct grid index,
  The presence of a true synthetic root within the limits used.
- All lines ±S Viewed by an independent decoder through cofactors
  Linear system and scalar stroke: Classes, shear intervals and projections
  №71 limited launches are not considered verified lattices.
- SHA256 and mtime everyone **1283 past-accepted
  file SEQ-01..07** Preexisting dependency hashes checked.
  The old scientific stages, GPU And the packet installations didn't start.

Original solver.py and translation_decoder.py copied from
SEQ-07 Unchanged and working only at new pair entrances
The origin is being recorded PROVENANCE.json and AUDIT_PROVENANCE.json.
Teams and verification of continuation without new ones LLL: README.md and RESUME_CHECK.json.

## Outcome for continuation

The set of successfully recovered positive inputs from the two methods matched. No expansion of the recovery region was found in this sample
But it didn't solve the problem of recovering from real masks.
Re-increase the number of states or budgets of the same LLL-lineage
It is not justified by this result.

The following meaningful change should use dependencies
between monomes in the decision of the system, not only in the verification of candidates.
In this series, such a nonlinear solver was not implemented or launched.
Mathematical context and primary references are retained in
[SEQ-07](<../sequence-cross-ratio-20261102/FINAL_REPORT.md>).
