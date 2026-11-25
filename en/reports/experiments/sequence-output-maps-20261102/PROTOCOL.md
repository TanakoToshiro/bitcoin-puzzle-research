> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-output-maps-20261102/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-05 The function of the hidden chain

02.11.2026. The new end series is ordered by the user "further".
The protocol is fixed before the calculation of the present data in this series.
Computational stage budget15 minute CPU/wall; one trial, without GPU,
packet installations, brute force seed and the repetition of old scientific stages.

## Three hypotheses

The hidden chain is the same: s[i+1]=(a*s[i]+c) mod n,
0<=a,c,s[1]<n, n order secp256k1. Now the part we're looking at
puzzle[i]−2^(i−1) formed in one of three ways, b=i−1:

1. `msb`: senior b bit 256-bit-state, s>>(256−b).
2. `bit_reverse`: junior b beat after turning all around256 beat.
3. `byte_reverse`: junior b post-pivot32 bytes.

Leading zeros are retained: operations are always over256 bits/32 Bytes.
No combination of these transformations and the selection of parameters after
Historical application by the author has not been established.

The entrance was old83 solutions. Fit: №75,80,...,135. Verification: No1–70,
They don't feed into the parameter arrays. All the data has been studied.
This is not a new closed test puzzle excluded.

## Relationship grid

We convert the observation into a known senior prefix y[i] full-fledged s[i].
For msb/bit_reverse known b bit byte_reverse first stage
use only8*floor(b/8) full bits of the senior prefix.
The last incomplete byte is mandatory in the final verification.

s[i]=y[i]+u[i], 0<=u[i]<2^(256−known_bits).
For a step5 difference t[j]=s[i_(j+1)]−s[i_j] mod n multiplier
rho=a^5 mod n. Affordable Y[j]=y[i_(j+1)]−y[i_j] mod n,
mistake e[j]=u[i_(j+1)]−u[i_j]Polynomial relationships and couples
gcd applied SEQ-04, but **subdivided2^b**
multiplierless32 extractively a.

Lengths of polynomials k=4,5,6,7; grating13. Polynomial weight
coordinates P_j=2^(256−74+loss−5j), loss=0 for msb/bit_reverse,
loss=7 for byte_reverse (Conservative loss of incomplete bytes).
Window weights W_l=2^(5l). LLL delta=3/4. All pairs of base polynomials;
linear gcd giver rho, a=rho^(inverse(5,n−1)) mod n.
Common divisors are more conserved without arbitrary choice
the root128 Excessiveness is incompleteness.

## Recovery and accurate verification of withdrawal

From what we found a lattice s[1],c use-center
Senior prefixes and their weights. Babai suggestive d=(a−1)*s[1]+c mod n.
Then, when fixed, a,d **everything** permissible s[1] Calculated precisely:
s[i]=s[1]+T[i]*d mod n; Each observation determines the combination of intervals
for s[i]We move it and cross the intervals s[1].

msb/bit_reverse They give one interval. byte_reverse give up128 interval
Because of the unknown higher bits of the last partial byte
Take a candidate on a rounded prefix without checking those bits.
Conditional sets and projections on No71 preserved; uniqueness
A complete initial state is not expected.

## Verifications and final stages

Before the actual analysis: roundtrip/precise intervals of all three maps on
reduced16-versus full-time, shifts and
Intersections, projections. Full-length checks use
Independent direct serialization and generation of hidden chain.

For each map12 New random full-size positive chains,
SHAKE-domain `SEQ-05/controls/v1/{kind}/`numbers0..11.
The actual pilot is allowed only when >=10/12 right a,d and
There's no wrong parameter map remains
Untested on real data, not rejected.

For every past map:12 New positive responses with a separate
domain64 null sequences with the same masks/indices.
Degenerate a=0,1,−1/The constant chain is the individual boundaries of the method
without requiring the restoration of the only true a.

Independent audit of matrices, gcd, interval/serialization and conditional
Replacement of lower observations should not change fit Upstairs.
hashey mtime all accepted files SEQ-01..04 All the results are saved
Renewable without repeated scientific calculations; final artifacts sealed.

The method is heuristic, the absence of a candidate does not prove impossibility
model/Success in synthetics is not getting a real key.
Don't pick up new ones maps After a negative real result.
