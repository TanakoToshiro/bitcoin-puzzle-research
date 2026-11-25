> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/parallel-wallets-20261102/02-electrum/MATH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/03-wallets.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# Exact joint model and limit of proven method

For old Electrum 1.7.4/1.9/1.9.8:

```
seed0 = ASCII(hex-seed), как хранит old wallet
h0 = seed0
h(t+1) = SHA256(h(t) || seed0), t = 0..99999
s = BE(h100000)
M = ser32(x(sG)) || ser32(y(sG))
z(c,k) = BE(SHA256(SHA256(ASCII(decimal(k)+":"+decimal(c)+":") || M)))
a(c,k) = z(c,k) mod n
raw(c,k) = (s + a(c,k)) mod n
r_i = d_i mod 2^(i-1)
```

No chaincode; c=0 receiving, c=1 change. MPK has 64 byte x||y without
SEC-prefix 04; raw pubkey/WIF — uncompressed. Targeted Puzzle into snapshot
use compressed public/address: The external script must re-encode the key.
Counters are decimal ASCII without leading zeros, not ser32(index). Consistency
Independently indexed, the previous private child It is not the entrance of the next.
In the chosen OldAccount There is no zero-pass cycle raw child / infinite
For a point s beyond the permissible range, the inspection ecdsa SigningKey;
We do not attribute to the source a non-existent retry/modulo creation master.
Our synthetic s take out [1,n); This is a control of derivation, not an assertion
finding seed-preimage each-chosen s.

## What's changed accounts export

For CSV 1.9.8 import-free and with one old account:
`(c,k)=(0,i-1)` upon i<=R, otherwise `(1,i-R-1)` before i=R+C.
Primary I Imported lines instead of i used i-I; first I belong
Every actual crossing of the branch boundary changes
entrance SHA. This is a small family of silhouettes known to/limited R,
but **known-unknown MPK**. For a normal unused pool C=3.
Options C>3 require a history of use or explicit additional generation.

For 1.7.4 CSV through dict.items(): mapping depends on the dictionary raw-addresses and
implementation Python 2. The free permutations didn't go over runtime
It doesn't make the unknown raw-Addresses in a known order
It's an unknown, not a cryptographic advantage CSV
would contain themselves raw private keys; reformed
The list does not automatically store this information.

## A joint equation without MPK

```
M = ser64(sG)
s + a_i(M) - t_i*n = r_i + 2^b_i*q_i
t_i in {0,1}, 0 <= r_i+2^b_i*q_i < n, b_i=i-1
```

The difference between two lines removes s, leaves `a_i(ser64(sG))-a_j(ser64(sG))`.
Definition M=sG Reduce the number of unknowns (independently)MPK random
512 bit, but does not allow to calculate SHA offsets lower-bit s. No
substitute a_i Free wholes, and then declare the root found a wallet.
HNP-factor Armory It does not occur here: s all children equal 1,
dependency offsets from s passes through the full point and SHA256d.

Verified specific accurate baseline: list s, calculate M=sG, check out
first the longest observation; discard non-matched, check the rest
In the sequential range, an initial
scalar multiplication one by one group addition next M. It cuts back
price EC-The number of candidates, but not the number of candidates
single-handed SHA256d, two SHA256 not one operation EC not alone SHA).

The complete scalar cycle has n-1≈2^256 candidates, O(1) secondary
observational/If you use the staff image separately 128-bit
seed, A comprehensive search has approximately 2^128 seed and 100000 SHA256 on stretch;
This is a different strategy, it is not launched and is not weak seed. Not one
The score is not the lower limit of all possible attacks.
Exhaustive toy policing199 show the accuracy of the system and uniqueness
8 Positive answers, but they still go through everything198 s. It's a demonstration
The difference between uniqueness and value is not proof SHA-resilience.
Full-size pilot check-in1024 s into **pre-reported artificial interval**;
to obtain such an interval of solutions Puzzle The method doesn't work.

## When the real artifact was found

`old(MPK,branch,index)` into unsigned.txn eliminates the unknown M gives one
anchor child. Himself MPK checked as the point of the curve; reference address
and redeemPubkey, If there is, they're tested by public derivation
metadata inside the artifact, but a connection with Puzzle It requires a separate check.

For a given display of indices are calculated a_i. Precise intervals
condition s implemented model.intervals, pointy raw_i=0.
Non-empty arithmetic intersection **proverb** sG=MPK and s.
Conditional formula E7 For a lesser purpose, it remains:

```
d_i in {2^b_i + ((r_j+a_i-a_j+u*n) mod 2^b_i): u=-1,0,1}, j>=i
```

For C different candidates MPK and L **well-founded** mapping
prepared offsets require C*L*m SHA256d; pinpoint
implementation O(m^2) modular inspections and O(m) It's because of the slack
zero2m+1 For one purpose, up to3 candidate/address check-up
It's good to weed out the infidels first MPK four-long
And then we can check the rest of them C, neither L not appointed small
fileless/source and order data
real-life0, real candidates MPK0.

Unknown complete raw child different masked: known M,c,k full-fledged
raw immediately s=(raw-a) mod n testable sG=M. Masked key That doesn't work.
Even received stretched exponent does not100000 SHA256 to mnemonic.
New real private keys/bits not received; budget of order2^32 accessible
There's no way to get rid of the data SHA-Barrier; impossibility not proven.
