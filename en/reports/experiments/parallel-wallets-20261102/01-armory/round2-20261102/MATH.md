> English machine translation of the [Russian source](<../../../../../../ru/reports/experiments/parallel-wallets-20261102/01-armory/round2-20261102/MATH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../../README.md>) · [Direction](<../../../../../topics/03-wallets.md>) · [Documents of the series](<../../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../../docs/LATEST_RESULTS.md>).

# R2 Accurate connections of partial children and circumvention of the chain

## 1. Two partial keys at a known ratio

Let me n order secp256k1; `0<x,y<n`, `y=A*x mod n`, `0<A<n`.
Of the two final Puzzle keys The masking hypothesis is known only to
`x mod w1=r1`, `y mod w2=r2`where `w1=2^b1`, `w2=2^b2`, b=i−1.
Compulsory most significant bit in r It doesn't turn on.

```
x = r1+w1*q, y = r2+w2*t
a = A*w1*inverse(w2,n) mod n
d = (A*r1-r2)*inverse(w2,n) mod n
t = (a*q+d) mod n
```

Boundaries: `q_min=1` upon r1=0, otherwise 0;
`q_max=floor((n−1−r1)/w1)`Similarly t_min,t_max. They rule out zero
private keys. Since 0<=t<n, The canonical remnant of the comparison coincides with t.
Each q, satisfies the rectangle, gives exactly one complete x, and vice versa.
It is an exact transformation, not a relaxation or an assumption of entropy.

Denote `F(L,m,a,b)=sum_{i=0}^{L−1} floor((a*i+b)/m)`.
For 0<T<m number q into [s,s+L), whose `(a*q+d) mod m<T`equally

```
F(L,m,a,d+a*s) − F(L,m,a,d+a*s−T).
```

Proof: for z=m*h+r, 0<=r<m, difference
`floor(z/m)−floor((z−T)/m)` equal 1 flatly r<T. Conditionalities t into [lo,hi]
comes out count(<hi+1)−count(<lo). Borders T<=0 and T>=m processed
directly. Negative b demand floor-divisions, not zero truncations.

F It's called the Euclidean exchange of lattice axes
wholes a/m and b/m; then 0<=a,b<m applies the amount of
lengthy `floor((a*L+b)/m)`leftover `(a*L+b) mod m` and exchange m,a.
The implementation is used Python integers, no overflows uint64.
Definition and standardization O(log m) procedure described in
[official documentation ACL](https://atcoder.github.io/ac-library/production/document_en/math.html).
The library's code was not copied; its interface limitations were limited to2^32 They don't apply here.

After the exact one count binaryly q-We visit only the non-empty intervals.
That's how it is **whole** kit K keys, if K<=1024. Bill price O(log n)
arithmetic iterations; enumerations O((K+1)*log Q*log n), memory O(K+log Q).
These are estimates of the number of operations on large integers (up to the order of magnitude)512 bit, no EC.
Primary K>1024 return the exact number and budget_refused before the listing.
Not much 2^127 possible q, neither BSGS, neither LLL It's not required.

For the real ones b=129/134 The observed pair has strong limitations
**if A known**. But the sum263 It doesn't guarantee uniqueness A=1
Compatible balances are maintained approximately2^122 keys; this
The counterexample is accurate2^(256−b1−b2) substitute count
This is not evidence of the independence of observation Armory.

## 2. Why is a short journal enough?

Staff crossing: `u_j=BE(C XOR D(U(P_j)))`, `m_j=u_j mod n`,
`k_(j+1)=m_j*k_j mod n`; C constant, U —65-byte uncompressed point,
D —double-SHA256. Between No130 no135 testable
The export scheme has exactly five transitions: `A=product(m_129..m_133) mod n`.

Work switches: the order of five lines is not necessary for arithmetic
After the recovery candidate x calculate HASH160(U(xG)); he should
coincide parent hash One line, the full line u receive C, calculate
next private key And we do it again. We check each one u, general C whole set
Multiple records with the same lines parent hash different u
Ambiguity is rejected. Repetitive identical records are deleted.

This format requires a completed parent hash. The first cycle was empty
hash partly unlock-A new way to restore order
It doesn't apply to them, and it doesn't simulate the repetition of one address
state in this cycle: the removal of duplicates is designed to repeat logging,
Not bypassing the cryptographic cycle many times.

For a couple125/130 possible x more; their correctness is determined by verification
factual log hashes and chains. No135 remains holdout. In all experiences
chaincode/baseline points/full keys Not in the entrance packet.

Mathematically, one is enough to generate candidates A. For the subsequent
receipt C It is enough to have one properly attached full u. However,
a separate field "product of five factors" is not declared as a standard export:
The true source of these values is five lines multipliers.txt.

## 3. Unknown location of strings

If the required five unique records go in a row, bounded window scan seeker
Their position is the exact solver of the pair, and inside the window, order can be anything.
For L Unique strings are checked L−4 windows, maximum512. It's O(L) challenge
arithmetic count plus/Validation of the remaining candidates.
Total overkill C(L,5) subsets don't work. Strictly intermittent journal
Two wallets may not contain a suitable window - such a negative
The control is passed, and it is not declared to be the absence of a chain at all.

The position of the window in the file and chainIndex - different sizes. It's a five-point distance
transitions are given by a hypothesis about the order of the initial export; scanner proverb
For the real author, it is not restored accounts/Automatic omissions.

## 4. Reverse Motion on Disordered Mixed Journal

After receiving the current full k and C line-by-line u:

```
candidate_parent = k * inverse(u mod n,n) mod n
P_parent = candidate_parent * G
HASH160(U(P_parent)) == log_parent_hash
BE(C XOR D(U(P_parent))) == u
```

With a single coincidence, the previous private key. Strings can
Belong to different wallets; check the total C and hash He throws away strangers.
All lines are scanned to detect ambiguity, the first one is not selected
Coincidence O(L*d) EC-calculation d steps; L<=512,
more100000 check-up256 Every test is a calculation
point from scalar, HASH160, a coincidentally hash — double-SHA256 and XOR.
Modular inverses Preliminarily calculated on the lines once.

Presence C does not make a general reverse transition `P -> m(P)*P` It's cheap
unknown m It's taken from a particular final collection of the journal
There is no predecessor, the normal return passage stops.
Secret start reverse.py deducted pair solver, non- test oracle.

## 5. Recovery of the gap with an additional starting point

For the famous P_a torn and C publically g Steps, compute
B=product(m) mod n testable `B*P_a=P_current`Then
`k_a=k_current*inverse(B,n) mod n`It also gives you all the intermediates keys.
Used in an experiment chainIndex74→80, six steps, limit8.
The wrong point does not pass the check P_a — **new-foundation
public datum**, finality masked puzzle-key.

## 6. What does not recover from decisions alone

No A two numerical residues130/135 place around2^127 first-line
raw and2^122 second, that is, about2^249 **pair**. Each pair gives rise to
own ratio; It's not a number of different ratio, unproven entropy and not
Lower boundary of attack A s Armory still requires unknowns SHA/XOR
Multipliers and full path. New fast exact count does not calculate the unknown A.

Default C=g(root) It does not remove this obstacle: g using historical
SHA256/HMAC256-It's like a conclusion, not a linear rule
The multipliers are useful when the multipliers are already extracted; the multipliers themselves depend on the factors
It is impossible to rearrange the transitions of the generator when creating a chain.

The real unknowns children It's not received at this stage A,
no short journal, nor the starting point of the author confirming Armory-hypothesis.
