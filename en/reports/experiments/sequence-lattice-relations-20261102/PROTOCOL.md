> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-lattice-relations-20261102/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-04 Weighted polynomial relationships of differences

02.11.2026, before calculating the actual data in this series, the user asked
The following method. Separate series after SEQ-03; The old series don't change.
Work limit: 15 minutes of computational stages; one CPU-process GPU,
without packet installations, SMT brute seed.

## Model and difference

Same hypothesis s[i+1]=(a*s[i]+c) mod n, 0<=a,c,s[1]<n,
n order secp256k1. Observation r[i]=s[i] mod2^(i−1).
Now **a arbitrary modulo n**, not limited 32 bits.
Heuristic method: failure LLL It does not prove the incompatibility of the model.

Used before83 Published decisions. Order and indexes
They're fixed, unknown numbers don't shrink.
13 observations75,80,...,135. Others No1–70 don't
Multiplier selection or state grid; this is an additional check
Previously studied data is not a new closed test.

## Precise transformation

Let me i_j=75+5j, b_j=i_j−1, q=32.
z_j=s[i_j]*inverse(2^b_j,n) mod n;
y_j=r[i_j]*inverse(2^b_j,n) mod n.
Then z_j=y_j+u_j mod n, 0<=u_j<n/2^b_j.

t_j=q*z_(j+1)−z_j mod n - Geometric chain:
t_(j+1)=rho*t_j mod n, rho=a^5/32 mod n.
Known Y_j=q*y_(j+1)−y_j mod n, ? t_j=Y_j+e_j mod n,
e_j=q*u_(j+1)−u_j, |e_j|<n/2^b_j.

Looking for short polynomials H(X)=sum h_j X^j s H(rho)=0 modulo n.
Then for every window l:
sum h_j Y_(l+j) ≡ −sum h_j e_(l+j) mod n.

## Weighted lattice

Fixed polynomial lengths k=4,5,6,7 (degree)3–6).
Difference12, window t=13−k; grating k+t=13.
P_j=2^(256−74−5j), W_l=2^(5l).

The first k lines: diag(P_j) first k columns;
The rest of the time Y_(l+j)*W_l. The latest t lines:
first-zero k columns diag(n*W_l).
LLL delta=3/4 transformatively U. From every non-zero h-piece
is distinguished by polynomial; normalization primitive/sign, The duplicates are removed.
All pairs of reduced base polynomials are considered.
GCD above F_n degree1 candidate rho. GCD persist
as not permitted; factorization/The arbitrary selection of the root is not carried out.
It is not allowed to choose polynomials according to the true a synthetics.

Since gcd(5,n−1)=1, a=(32*rho)^(5^−1 mod(n−1)) mod n,
including a=0. Checking the fifth power transition clearly.
All candidates from the four grids are combined (limit)128;
Excess means incompleteness, not arbitrary choice.

For everyone a state-grid SEQ-03 suggestive d=(a−1)*s[1]+c.
All permissible s[1] fixedly a,d calculated accurately
It's arithmetic progressions. It uses unchanged local progression
copy helper core.py from SEQ-03, her SHA fixed; old fixed; old driver It doesn't start.
After fit posture13 Upper decisions are checked all70 Lower observations.
Forecasts of unsolved problems are permissible only after complete coincidence.
A positive result would require a separate audit.

## Controls and the Final Experiment

To the actual calculation:12 New Full-Size Synthetic Chains
s a,c,s[1] from SHAKE256, everything83 The index and the real masks10/12
Successful restorations of true a,d required for the admission of a real
Any incorrect candidate who's been admitted will stop the security clearance.
Fixed domain `SEQ-04/synthetic/v1/`numbers0..11.

Check the conversion algebra/borderline e on independent direct generation;
polynomial gcd against independent implementation, U*B=B_reduced,
det(U)=±1 and the divisibility of coordinates by weight a=0,1,−1,
A permanent chain is a separate boundary, without the requirement of uniqueness.

If the pass is passed: a single real pilot;64 new independent
null sequences with the same masks, plus24 positive
line SHAKE-Controls assess sensitivity
The probability of historical origin is not Puzzle.
Absence of a candidate is not declared an exact exception to the general a.

Independent audit of saved matrices/polynomial/candidates and projections,
SHA256/mtime Old artifacts, repeat without new scientific calculations.
Results, Limitations, Failures, and Any Changes Prior to Real Analysis
The results are preserved SEQ-03 They don't count.

## context

The search for short polynomial relationships refers to the lattice line
Stern / Contini–Shparlinski; Adaptation to variable junior masks
It's bred here, and it requires control. Novelty isn't claimed in the literature.
Primary source on heuristic boundaries:
https://researchers.mq.edu.au/en/publications/on-sterns-attack-against-secret-truncated-linear-congruential-gen/
