> English machine translation of the [Russian source](<../../../../ru/reports/experiments/child-derivation-audit-20261102/MATH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/03-wallets.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Formulas, conditions and limits of the result

Let me n order secp256k1, raw_i - reference child private key. Export processing hypothesis:

`puzzle_i = 2^(i−1) + raw_i mod 2^(i−1)`.

The solution is known `r_i = raw_i mod 2^b_i`where b_i=i−1. Setting the most significant bit - the result of processing, not observation raw. In the fixed set, the maximum b=134, sum b posture83 decisions=3767. This sum cannot be mechanically subtracted from the bits master.

## Additive family: Electrum old and normal BIP32

Electrum old: `raw_i=(s+a_i) mod n`, `a_i=doubleSHA256(ASCII(index:branch:)+MPK_bytes) mod n`. MPK - public point sG, It's not one of the addresses. BIP32: `I=HMAC-SHA512(c,serP(K)||ser32(index))`, `raw_i=(s+parse256(I_L)) mod n`new chaincode=I_R. For the famous xpub everything non-hardened The paths can be passed in public and folded offsets modulo n. Hardened The path uses a private value at the entrance HMAC And it doesn't meet that condition.

And the known offsets:

`raw_i=s+a_i−t_i*n`, t_i∈{0,1} for a_i.

Everyone's threshold t_i — n−a_i. Sort the thresholds, break them down [1,n) no more m+1 Inside the interval, all t_i Observations are fixed and observations become joint comparisons `s ≡ r_i−a_i+t_i*n (mod 2^b_i)`Modules are nested; just check the compatibility with the longest residue, get an exact set of arithmetic progressions without listing the roots raw_i=0. This is implemented in additive.py and thoroughly tested on800 Small systems, including incompatible and complete observations.

Nana24 synthetic BIP32-examples of the present order,83 indexes and known xpub check-in `sG=K` approximately2^114.78–2^117.69 arithmetic variants; one longest residue of them about2^122. Other observations added4.31–7.22 The abbreviation bit in these examples **not** distribution master keys, Not limiting all possible algorithms and not estimating the cost of a better one DLP. Fixed xpub scalar s It is mathematically unique; it is the intermediate space of the proposed arithmetic method BIP32 master from seed It's not included in that account either.

For a lesser purpose i≤j fixation j That's enough.

`raw_i mod2^(i−1) ∈ {r_j+a_i−a_j+u*n mod2^(i−1):u=−1,0,1}`.

This is applicable to and fully applicable to non-hardened paths from a famous xpub. Old E7 I've already checked it out Electrum; The new result extends the test to BIP32. The masked target key is selected by checking the address, and it does not allow you to restore the unknown MPK/xpub. Five REAL_RELAXED_WITNESSES It shows that equations with arbitrary free a_i Different parents allow it. They don't prove the existence of a corresponding parent HMAC-a key or a wallet.

## Multiplicative family: Armory classic

Historic move:

```text
m_j = BE_integer(C XOR doubleSHA256(uncompressed(P_j))) mod n
k_(j+1) = m_j*k_j mod n
P_(j+1) = m_j*P_j
```

And the known watch-only `(P_root,C)` The public path gives everything m_j and their works `a_i=product(m_j) mod n`Then `raw_i=a_i*s mod n`where s It's a private root. You don't need the source secret to compute a_i. **One chaincode without a suitable public starting point is not sufficient for this path**, as well as a point without chaincode. In this interface puzzle i correspondently i-junction root (Armory chainIndex=i−1); The other indices should be set separately.

From `raw_i = r_i+2^b_i*q_i` should:

```text
alpha_i = a_i * inverse(2^b_i) mod n
beta_i  = r_i * inverse(2^b_i) mod n
alpha_i*s − beta_i ≡ q_i (mod n)
0 ≤ q_i ≤ floor((n−1−r_i)/2^b_i)
```

It's a copy Hidden Number Problem small-minded q_i. Use the weight w_i=2^b_i. The basis of the dimensional grid m+1:

```text
diag(n*w_1, ..., n*w_m), последний столбец нулевой;
последняя строка (alpha_1*w_1, ..., alpha_m*w_m, 1).
```

Purpose `(beta_i*w_i+floor((n−1)/2), ..., floor((n−1)/2))`For the present s There is a grid vector with coordinate errors of order n/2. LLL reduces the base; accurate by rational arithmetic Babai nearest-plane I'm going to ask for a candidate, check all the observations and `sG=P_root`; false nearest vector is not accepted. For each example, the base is saved unimodular transform (tested) det=±1 and U*B=B_reduced), reduced basis, target, Babai coefficients and candidate. This is a reproducible positive experiment, not a proof of success Babai wallet-wise/The size of the leak.

Nana12 independent synthetic root historical default chaincode Recovery works on four indices120/125/130/135 (119/124/129/134 known minor bits).79 The other known indices of each case are used after recovery, It's not like a bar.36 change residue/chaincode/index It's a separate process recover_watchonly.py receives watch-only data masked private key, It recalculates the public multipliers and reconstructs the root seed: algorithm256-bit scalar He doesn't get it when he's selected.

HNP/LLL A well-known class of methods: [Boneh–Venkatesan, CRYPTO 1996](https://cs.stanford.edu/people/dabo/pubs/abstracts/dhmsb.html)This is the concrete transformation of history Armory-chains and observations Puzzle; Novelty in the world literature is not stated.

## What doesn't decide

For the present Puzzle `(P_root,C)` Armory No one found, in the unknown C multiplier XOR with unknown bytes and hashing unknown full starting points HNP-You can't get the entrance `puzzle_i*G`This is the point of the changed key, not raw_i*G. Former E6H I was looking at another unknown problem C; his MITM maintain the scale of order2^128, ? feedback E7 It's not a staff chain.

For BIP32 unknown chaincode and public parent; simple subtraction of two offspring removes s, but leaves two unknowns HMAC-exit. Code + masked private keys They don't give us the coefficients that we used, and if you have a lot of constraints, it can mean you're unique, but it doesn't offer a cheap way to find it2^32 or the proven acceleration of this No71.

Root/seed/ancestor - different goals: restored Electrum exponent not necessarily revealing mnemonic; BIP32 account private key behind hardened-level does not disclose master above him; private scalar without chaincode equal xprv. In the positive Armory-The test is restored by the root private scalar classic chain.
