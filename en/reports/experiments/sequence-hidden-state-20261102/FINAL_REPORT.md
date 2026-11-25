> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-hidden-state-20261102/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-03 Hidden modular chain: the first cycle

Date: 02.11.2026, Moscow – Continuing to seek connections after SEQ-01/02.

**The exact negative conclusion for one new class is obtained:
phony-chain modulo order secp256k1 multiplier
from −2^32 before 2^32 It is incompatible with published decisions.**
The addition and the initial state are arbitrarily permitted in all
256-bit-range modulo n. It's not too short seed.

At the same time, the ambiguity of recovery was detected and checked:
Many different full states and additions can give the same
There are four artificial chains that have been restored
multiplier and invariant of the chain, and all permissible initial states
They are described by arithmetic progressions. **The real new key, the bat
or reducing the range of unresolved Puzzle Not received.**

## 1. Difference from previous inspections

Model:

```text
s[i+1] = (a*s[i] + c) mod n
r[i]   = s[i] mod 2^(i−1)
puzzle[i] = 2^(i−1) + r[i]
```

Here n - group order secp256k1, It's not a coordinate field module.

```text
n = FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141
```

SEQ-01/02 We looked at the direct recursions of the observed residues modulo2^w.
Now when reducing the full state is subtracted q*n. Since n oddly
unknown q It changes the smaller bits, so the old parity contradiction
There is no evidence of a negative result in this series.

One step corresponds to one number puzzle, straight-line a,c They're permanent.
Allowed 0<=s[i],c<n; The zero latent state was not forbidden
a multiplier n−u. The historical use of this model by the author
Masking up the initial state is also a guess.

The entrance was old83 published decisions with the same SHA-256. Multiplier and
The invariant would be selected by No1–70; №75,80,…,135 intended for additional
This data has been studied before and is not a new closed test.

## 2. Exact exception 8 589 934 593 factor

Let me q[i]=floor((a*s[i]+c)/n). Primary a>=0 significance q lie down [0,a],
upon a<0 in [a,0]Therefore, |q[i]−q[i+1]|<=|a|.
Subtract two consecutive transitions:

```text
s[i+2] − (a+1)*s[i+1] + a*s[i] = (q[i]−q[i+1])*n
```

For No68,69,70 common-law67 We'll mark it M=2^67,
d1=r[69]−r[68], d2=r[70]−r[69] (mod M). For any allowable a:

```text
h = (d2−a*d1) * inverse(n,M) mod M
```

There must be a whole representative h s |h|<=|a|.
Primary |a|<=B=2^32 It is enough to check the broader condition |h|<=B.
**Even this relaxed condition is not fulfilled for any of us a into [-B,B].**

The full range is calculated precisely through integer amounts floor and
Euclidean transformations8.6 There were no billions.
Unknown most significant bits, c and s[1] from the necessary condition eliminated.

Certificate EXCLUSION_CERTIFICATE.json - an artifact of the initial study (`EXCLUSION_CERTIFICATE.json`; outside the picture)
contains the original residues, the inverse element, the coefficients and two sums:

```text
8 589 934 593
+ 30 262 565 723 027 149 167
− 30 262 565 731 617 083 760
= 0
```

That's the number of allowables a for a relaxed environment, not p-meaning.
The independent implementation counted the same integer points over another
And the recursive formula got the same zero
It is not necessary to estimate the probability of a random better match.

Excluded a=0..2^32 and a=n−2^32..n−1 modulo n. The rest of it
The multiplier range is not excluded by this test.

## 3. What is restored on artificial chains

The first positive test revealed an erroneous premise of the initial
Plan: It is not necessary to restore the original s[1],c without
Checking their uniqueness **before the actual analysis**
into [AMENDMENT-01.md](<AMENDMENT-01.md>); original protocol retained.

Precise symmetry:

```text
s'[i] = (s[i]+delta) mod n
c'    = (c+(1−a)*delta) mod n
```

It keeps recursion delta multiple2^134 and no observed
s[i]+delta cross-over0/n, persist83 the observed residue.
The condition of not crossing the border is essential: this is not an assertion
The ambiguity of any possible data set.

General shift invariant:

```text
d = ((a−1)*s[1]+c) mod n
s[i] = (s[1]+T[i]*d) mod n
T[1]=0; T[i+1]=(a*T[i]+1) mod n
```

The reconnaissance receives only masked observations
a; A weighted grid with two unknowns, LLL rational Babai
offer d. For fixed a,d everything s[1] And then they're exactly:
crossroads n Divide the range into intervals, and within the interval
baseline modulo2^b It's an arithmetic progression.
The supplement is defined as c=d−(a−1)*s[1] mod n.

| True a synthetics | Restored a,d | Number of permissible s[1] after83 observations, log2 | Variations of masked No71 |
|---|---:|---:|---:|
| 1 664 525 | Yes | 117.779 | 1 |
| −1 664 525 | Yes | 116.366 | 1 |
| 2 147 483 647 | Yes | 116.676 | 1 |
| −4 294 967 296 | Yes | 116.019 | 1 |

For LLL used59–70; True states in the restorer are not
All the observations were checked before70 and compatibility13 supplementary
In each example, different compatible states are clearly constructed
shifty2^134. Projection of all found families on No71 singularly
This is an example of how predictions are made
A masked key is sometimes possible without a single full state.
**This is not a prediction of the present No71.**

LLL/Babai does not list all possible d. Failure to do so does not mean failure
Model inconsistencies: Exactly listing states conditionally to found states a,d.

## 4. arbitrary multiplier modulo n

A direct description of all the hidden states and a,c into QF_NIA
(Z3),20 Seconds on the task, external limiter30 seconds, one stream,
solver's memory limit1 GiB.

On a toy module31 Masks are scaled by source numbers:
floor((i−1)*5/256). Exhaustive brute force a,c,s[1] I've established:

| Monitoring | Exact number of decisions | Straight SMT |
|---|---:|---|
| Positive, a=7 | 1 | unknown / timeout |
| Positive, a=27 | 2 | stopped by external |
| Random negative | 0 | unknown / timeout |
| Full-size positive, arbitrary a | No counting | unknown / timeout |

The direct nonlinear description didn't pass the positive control
generality SMT-search **never launched**. It's a limitation of what we've tried
algorithm/The statement is not proof of the absence or existence of a common chain.
Results and stderr processes: SMT_SUMMARY.json - an artifact of the initial study (`SMT_SUMMARY.json`; outside the picture), smt/ - an artifact of the initial study (`smt/`; outside the picture.

## 5. Inspections and safety

- 5000 floor-sums3000 calculation/The listings are straight forward.
- 16 250 Fully small cases checked the boundaries q And the equation signs.
- 800 small problems of an exact set of states are verified by complete enumeration;
  Their projections on other indices are also checked.
- Four full-length recoverys, four changes to one observation,
  a=0,1,−1 as degenerate cases;16 random sequences rejected
  The last one is behavior control, not universal power assessment.
- Independent audit:4000 new floor-For example, a real certificate,
  all four sets of states, U*B=B_reduced, det(U)=±1, factor Babai,
  Direct execution by representatives, including the ends of progressions.
- Checked out SHA-256 change-time162 old series files,
  including seals. Old scientific artifacts have not been changed.

The main controls have taken over2.203s, real-world0.00058s,
independent auditing0.111s (no start) Python). SMT-process
about one and a half minutes in total; one reached the outside watchdog.
Development and design are not included in these times. GPU not used;
The general environment libraries have not been established or changed.

History contains the first AssertionError on the false claim of uniqueness
state. In addition, the shade of the variable in the final field has been corrected AUDIT;
faulty JSON It was saved separately, and the zero certificate itself was correct.
The results of these design errors were not hidden or accepted
for scientific reasoning.

Acceptance and immutability of re-launch: ACCEPTANCE.json - an artifact of the initial study (`ACCEPTANCE.json`; outside the picture.
Commands and file composition: [README.md](<README.md>).

## 6. What makes sense to do next

The current negative result is closed by the short signed
multiplier in a constant one-step affinity chain modulo n. Not closed:
large factors, other modules, permutations/omissions, variables
parameters, other output function and cryptographic derivation.

For the big unknown a We need a new method for differences and transfers
It's a big shift before the solution, and it has to restore it
pinpoint a,d new synthetic examples and distinguish
Predictability compatibility. Simply increasing the timeout of the current
QF_NIA Expansion of the list of formulas does not replace this step.

Mathematical context of lattice reduction of truncated quantities:
[Frieze et al., 1988](https://doi.org/10.1137/0217016).
Applicability to a completely unknown multiplier is not proven here.
The novelty of the algorithm in the world literature is not stated.
