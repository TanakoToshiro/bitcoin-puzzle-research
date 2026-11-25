> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-lattice-relations-20261102/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-04 Polynomial connections of hidden differences

02.11.2026, Moscow, the next method after SEQ-03.

**The method has restored arbitrary large multipliers to36 from36 new
full-sized artificial chains Puzzle-decisions
No candidate found.** This is a negative result of a specific heuristic
Reducer is not proof of the absence of any affinity chain.
Real new private key, confirmed bit or shortened
No search space received.

## 1. What changed?

The hypothesis of the hidden sequence is preserved:

```text
s[i+1] = (a*s[i]+c) mod n
r[i] = s[i] mod 2^(i−1)
```

n order secp256k1. V SEQ-03 Precisely excluded short signed
multiplier, and the general straight line SMT I didn't pass the controls a,c,s[1]
permitted in all [0,n); SMT and- a not used.
The author’s actual method of generation remains unknown.

Decisions No75,80,…,135:13 observation74–134 famous
They're used to find the multiplier and the state.
№1–70 They only come in for a follow-up check83 decision-making
This is not a new closed test.

## 2. How the increase is eliminated

For i_j=75+5j, b_j=i_j−1, q=32:

```text
z[j] = s[i_j] / 2^b_j mod n
y[j] = r[i_j] / 2^b_j mod n
z[j] = y[j] + u[j] mod n,  0 <= u[j] < n/2^b_j

t[j] = 32*z[j+1] − z[j] mod n
t[j+1] = rho*t[j] mod n,  rho = a^5/32 mod n
```

The division represents multiplication by a modular inverse.
Affordable Y[j]=32*y[j+1]−y[j] mod n. His mistake regarding t[j]
equal e[j]=32*u[j+1]−u[j]and |e[j]|<n/2^b_j.
It's a precise transformation. It takes the initial step into account5; plates uncompressed
It's as if the neighboring published solutions were created by a single initial step.

Looking for short H(X)=sum h_j X^j s H(rho)=0 modulo n. Then it's him
folded Y give small modular residues limited by unknown e.
Four pre-recorded weighted lattices of dimension13
polynomial3,4,5,6. Weights take into account the growth of the observed width
on5 The bit at every step. Formulas and matrices are in [PROTOCOL.md](<PROTOCOL.md>)
scientifically JSON.

LLL It gives you a base of short vectors, a common linear divisor of the two vectors
polynomial F_n suggestive rho. Checked out gcd(5,n−1)=1, therefore
fifth-root a^5=32*rho regenerate modulo n.
Nonlinear common divisors are not replaced by an arbitrary root.

Key Limit: Short Vector Found LLL, **needlessly** exist
with a true attitude, and LLL It does not list all suitable vectors.
Therefore, the absence of a common root among the found polynomials does not exclude
all-possible rho.

## 3. Verification of the proposed multiplier

For everyone a We use a conditional restorer from SEQ-03, preserved
It's an unmodified local copy13 to the upper observations he
proposes invariant d=(a−1)*s[1]+c mod n. For fixed a,d
full-body s[1] It is calculated exactly as a union
arithmetic progressions; c=d−(a−1)*s[1] mod n.

After that, the No1–70. Confirmation means not empty set
states consistent with all observations, not just beautiful
the root of the polynomial SEQ-03 generality
Recovery of the invariant does not equal a single complete seed.

## 4. Full-length controls

All new a,c,s[1] derived from independent SHAKE-Domain multipliers
249–256 The restorer receives only observations
The truth is used after the method has been performed.

| Series | Scripts | Correctly restored a,d | Incorrectly accepted parameters |
|---|---:|---:|---:|
| Initial controls | 12 | 12 | 0 |
| New replication | 24 | 24 | 0 |
| Random sequences | 64 | No compatible candidates | 0 |

In each36 There were exactly one positive case proposed a.
In polynomial-length lattices k=4,5,6,7 was accordingly
4,5,6,7 And those who are in a position to be true rho.
This is verified after selection; the true rho It wasn't used for choice.

After all83 The conditional set of initial states had
routine2^113.43–2^118.12 This is the power of the elements that are clearly described
multiplicity a,d, not the entropy of a real generator, nor
counting all the alternative models.

Projection on the artificial No71 gave one option in33 cases,
two-way3 The true meaning has always been there
projections are not a prediction of this No71.

Time of one positive recovery:0.213–0.362s,
median0.238s startlessly Python. The sum of saved times of the main
36 positive64 zero cases18.902s. Preparation, development,
Primary polynomial inspections, degenerate controls and audits are not included.

## 5. This data

Code, protocol, inputs and positive controls are recorded in
MANIFEST.json - an artifact of the initial study (`MANIFEST.json`; out of the picture) to the actual pilot.

| Length of polynomial | Polynomials from a reduced basis | par | Common Divisors of the Positive Degree |
|---:|---:|---:|---:|
| 4 | 13 | 78 | 0 |
| 5 | 13 | 78 | 0 |
| 6 | 13 | 78 | 0 |
| 7 | 13 | 78 | 0 |

Totally52 preserved polynomial and312 paired gcd-They're not being announced
independent statistical tests, in all pairs gcd=1. Not one
candidate a It has not yet been completed, so the real recovery phase d/condition
The pilot's time is around0.143s. Matrixes and results - an artifact of the original study (`REAL.json`; outside the picture.

This result reduces practical interest in the selected one-step
affinity model: the reducing agent successfully processes proven new
random instances with exactly this form of observation, and Puzzle see
It's an exploratory evaluation, not a proof of structure
The numerical probability of the sequence origin.

## 6. Where the method is incomplete

Separately investigated a=0,1,−1 and a constant chain a=1 righteous
multiplier proposed, but conditional LLL/Babai-restorative
And so, even among the positives, I got the accepted result
There is a documented case of incomplete recovery.

Compatible for a continuous chain a It does not have to be equal to the used
generation: different a fittingly c They give the same sequence.
These cases are not included in36/36 They were not declared to be an erroneous definition
The artifacts are: degenerate/ - an artifact of the initial study (`degenerate/`; outside the picture.

36/36 Successful random control does not guarantee success for everyone
multipliers, periods, initial states or their distributions.
No other module, variable parameters, unknown
Export reshuffling, other masking or cryptographic derivation.

## 7. Independent Audit and Preservation

- 300 polynomial gcd principal Python-algorithmically SymPy
  before the actual calculation.
- Independent audit uses native polynomials FLINT:32 240 pair
  posture105 Save packages, including all312 real couples.
- Rebuilt420 relationship from observations, checked
  U*B=B_reduced and det(U)=±1; The state grids are also checked and
  numbered s[1].
- The representatives, including the boundaries of progressions, have been independent
  direct generation and all relevant observations verified/projections.
- Replacement69 The lower observations did not change the grids, candidates a,
  invariant fit on the top panel; the broken chain was
  Insulation control is an artifact of the original study`ISOLATION_CONTROL.json`; outside the picture.
- All204 received file and seals SEQ-01/02/03 preserved SHA-256 and mtime.
  Their search phases did not repeat GPU They haven't changed.

Independent Auditor to be held3.985s. Acceptance of the audit - an artifact of the initial study (`AUDIT.json`; outside the picture),
final acceptance and repetition without computation - an artifact of the initial study (`ACCEPTANCE.json`; outside the picture.

Mathematical Context: Lattice Attacks on Trimmed Generators
lineage Stern / Contini–Shparlinski. The authors separately note heuristics
the boundaries of this line of methods; coincidence with a specific historical
The implementation is not approved here. [Primary source](https://researchers.mq.edu.au/en/publications/on-sterns-attack-against-secret-truncated-linear-congruential-gen/).

## 8. The next fork

Repeat the same set of bars or enlarge the old one SMT-time-out
There's no basis for that right now. It took an exact rejection of the general model
a complete algorithm or certificate of absence of all valid relationships,
That's what this series doesn't do.

A further independent class must change the assumption, for example
a latent state output function or module thereof, with a separate final state
The next class in this series didn't launch.
