> English machine translation of the [Russian source](<../../ru/reports/REVIEW_CHATGPT_HIGH_POINTS_20261030.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../README.md>) · [Direction](<../topics/08-methodology-and-history.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../docs/LATEST_RESULTS.md>).

# Evaluation of the response: top public points

Date: 2026-10-30. Status: Testing arguments and coverage, without a new computational experiment.

User file read `[USER_HOME]/.codex/attachments/bd89da96-8b80-494b-a8aa-3632924b4b1c/Вставленный текст.txt`The archive referred to in the text `puzzle_high_public_points_check.zip` not enclosed: statement 14 dotted 96 Synthetic tests are not a validated result.

## Verdict

There is a useful direction that we have not yet completed: the construction of small sets of possible starting points for the upper problems and the joint limitation of several transitions Armory common chaincode. Public keys themselves No161–256 They are already assembled and tested in E5. Their new application does not equal the discovery of new blockchain data or a ready attack.

### Correct arithmetic

Under the conditional model d_i = 2^(i−1) + (K_i mod 2^(i−1)), 0 <= K_i < 2^256:

```
K_i = d_i + (t−1)*2^(i−1),  0 <= t < 2^(257−i)
R_i = Q_i + (t−1)*2^(i−1)*G,  Q_i = d_i*G
```

Consequently, for the No256 There are two possible points R_256: Q_256 and Q_256−2^255*G. For No255 - Four, for No254 - Eight. Total 14 individual points, but 8*4*2 = 64 triplet254–256. So many combinations can be built cheaply; testing the existence of a common unknown chaincode It doesn't make it cheap.

These are candidates for points K_i*G, numerical K_i. If K_i must be a valid private scalar, additionally acting 1 <= K_i < n; The listing of points does not by itself prove that unknown scalars belong to this interval n. Points at infinity are excluded from the normal chain of public keys.

### What remains difficult in Armory

For the historical classic Armory from E3 The exact relationship is as follows:

```
H_i = SHA256(SHA256(uncompressed_SEC(R_i)))
R_(i+1) = BE(C XOR H_i) * R_i
```

It's correlated with the fixed [source 2015 year](https://raw.githubusercontent.com/etotheipi/BitcoinArmory/61a596fa94f9cacf9fb00c4e02d0eb65d8b17513/cppForSwig/EncryptionUtils.cpp)Not just with a changeable branch master. In the old days E3 Official vectors and independent arithmetic have already been checked; no reconstruction is required.

For one pair of points, obtaining a multiplier in the usual way requires a discrete logarithm relative to R_i. Several transitions give an additional structure: a common C, differential H_i. This is a meaningful statement, but a quick decision from the text sent does not follow.

We can rewrite it XOR bitwise c_j the chain code h_ij bit j wholesome BE(H_i), then:

```
BE(C XOR H_i) = BE(H_i) + sum_j c_j*(1−2*h_ij)*2^j
R_(i+1) − BE(H_i)*R_i = sum_j c_j * [(1−2*h_ij)*2^j*R_i]
```

It's a system of equations with binary unknowns and values in an elliptic curve group. It's not a system of linear equations over a curve GF(2), fixable E1. Breakdown 256 Unknown bits in half gives naive meet-in-the-middle scale 2^128 The combinations in each half; it's a reference point for this method, not a lower bound, not a proof of impossibility of improvement. Many joint transitions need to be investigated separately.

Even recovery C The top part does not show how to get the number71: The public derivation is forward, and the back step contains a hash of an as-yet-unknown previous point, so you need a separate reverse recovery algorithm, or an available starting point for the desired chain, and validated indexation. Armory historical source puzzle not installed.

### That in response repeats what was done

- E5 already contains 96 public keys161–256 with reference to the initial outputs and verified raw-transactions.
- Checked out 324 chosen ECDSA-signatures, repetitions r No, for me 15 Available private keys in a disclosure transaction 2019 year nonce matched RFC6979/HMAC-SHA256 So the proposal to reintroduce nonce using known private keys and comparing them with RFC6979 It has already been implemented in this area.
- The separation of late solver costs and historical packages has already been factored in. Sharing does not prove the identity of the author or the same generation and signature software.
- Warning about nonlinearity of limitation d_i(S)*G = Q_i Right, but not a new way to include public keys in the matrix MT.

Support: [result E5](<experiments/public-key-forensics-20261030/runs/20261030-114903-5757a87d/CONCLUSION.md>), [result E3](<experiments/armory-classic-20261030/runs/20261030-105108-7ecfb506/CONCLUSION.md>), [terminologyization E3](<experiments/armory-classic-20261030/CLARIFICATION.md>)Published puzzle-The solutions remain the full keys K_i A separate hypothetical initial value.

## Suggested addition to the next cycle

Before the next big one seed-To do a limited mathematical test of this area:

1. Build sets of starting points No254–256 catalogue E5 and verify by independent arithmetic; expand to smaller numbers only when necessary, as the number of candidates grows exponentially.
2. Describe the exact system of general XOR-Multipliers and sequential link conditions: First, check the identifiability and cost on reduced groups with independent synthetic chains.
3. Comparison with individual DLP and a complete search for diminished C, It takes into account the memory, the number of transitions, the false decisions and the cost of choosing branches. Measure scaling by size, not just the success of a toy example.
4. If there is no mechanism to improve the complexity and path from the top fragment to No71, Maintain the limit of the result and do not run a difficult search on secp256k1.

It's an addition to [prior-plan](<NEXT_HYPOTHESES_AFTER_E5.md>), not a statement about the bit found, chaincode The novelty of this production has not been established.
