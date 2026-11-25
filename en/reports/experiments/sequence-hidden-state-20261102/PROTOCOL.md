> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-hidden-state-20261102/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-03 - hidden affinity chain modulo n

The production 02.11.2026, before calculating the results of this sequence.
The user allowed to start restoring the hidden state and connections.
This is a separate final series; SEQ-01/02, GPU And the general environment doesn't change.
The local limit of the calculations in this series: 15 minute CPU/wall computational
subprocesses, without extending hypotheses to use the remainder of time.

## Hypothesis and data

`s[i+1] = (a*s[i] + c) mod n`, `0 <= s[i], c < n`.
`n = FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141`.
We're just watching `r[i] = s[i] mod 2^(i-1)` full puzzle key,
We can rule out the mandatory most significant bit
nondetermined Puzzle. Zero hidden state
The model is wider than the allowable generator Bitcoin private keys.

One step per room, direct order, permanent a,c, No permutations,
Unknown omissions or parameter changes 83 decision-making SEQ-02;
Missed numbers are saved. All data has been studied before.

The main computational class: **whole -2^32 <= a <= 2^32**,
any 256-bit c any s[1]Negative a representatives
factor n-u. It's 8589934593 representatives, not all multipliers modulo n.
Selection/Recovery uses observations to No70; №75..135 —
An additional test, not a new closed test.

## A. Required condition that does not require knowledge of the older bits

Introduce q[i]=floor((a*s[i]+c)/n). Primary a>=0: 0<=q[i]<=a;
upon a<0: a<=q[i]<=0. Therefore, |q[i]-q[i+1]|<=|a|.

For the three j,j+1,j+2, M=2^(j-1), d1=(r[j+1]-r[j]) mod M,
d2=(r[j+2]-r[j+1]) mod M:

`h = (d2-a*d1)*inverse(n,M) mod M`,
wherein h s `|h|<=|a|`.

First, relax the border until B=2^32 I guess/list a
into [-B,B] for triple No68,69,70 (M=2^67). It's a hit counting task
a modular linear function in two intervals
Euclidean floor sums and range-division, not 8.6 billion iterations.
If the number >4096, status `candidate_budget`, not a negative.
Primary <=4096 We list everything, then check the exact ones |h|<=|a|
for all available consecutive threes up to70. Empty multitude
There is an exact contradiction to the whole limited class, regardless of c,s[1].
A non-empty set is only the necessary conditions, not a generator found.

## B. Restoration of the full state when found a

For every allowable a Calculate known coefficients
`s[i]=(A[i]*s[1]+C[i]*c) mod n`.
Po Po 12 observation59..70 We build a weighted grid with two
unknown s[1],c. Use it LLL precise and rational Babai.
The proposed candidate is accepted only when checking all observations
№1..70; additionally projected No75,80,...,135 without true states.
Approximate method CVP not complete: failure Babai proverb
Lack of condition, with too many a We don't make arbitrary choices.
Synthetic observations contain only remnants; truth is not transmitted
Reconstruction to the restorer s[1],c The truth is compared to the truth.

Before the Real Analysis: Four Full-Size Positive Chains
s a=1664525, -1664525, 2147483647, -4294967296 independent SHAKE
256-bitten c,s[1]the same 83 index/Separately inspecting masks a=0,1,-1
and cases of ambiguity as a boundary do not require a unique recovery.
Strong control parameters are not a statement of real RNG.

## C. Completely unknown 256-bit-multiplier

A separate pilot of precise nonlinear SMT: a,c,s[1] randomly modulo n,
intermediate states are limited [0,n). Checking the full lineup
observations without announcement test. On small modules, results are verified
with exhaustive brute force; the masks scale as floor((i-1)*w/256).
At the present level, first one positive synthetic
full chain a time-out20 Only if the reconstitutor
It really does get an agreed result, it is allowed to be real
A pilot with the same limit. `unknown`/time-out – the limitation of the algorithm;
It is not a denial of the model or proof of non-identification.

## Checks and withdrawal criteria

- floor sums/counting/listing against direct brute force on small data;
- q-Limits and a necessary condition for positive/negative a;
- recursive floor sum for the certificate of a real account;
- full-length recovery and tainted observations;
- equality U*B=B_reduced and det(U)=+-1; verification of forecasts;
- Small random sequences as negative controls.

With a precise empty space, no search is made for the best approximate
formulae and not required Monte Carlo p for this logical contradiction.
A positive coincidence does not in itself prove a historical model.
A separate audit and comparison of alternatives will be required.

The old ones seals read-check/It's a hash before and after
protocol, inputs, parameters and results have SHA-256. Completed stages
When you repeat it, you don't compute. Errors and timeouts are stored in the log.
Do not change accepted old reports or scientific JSON.
