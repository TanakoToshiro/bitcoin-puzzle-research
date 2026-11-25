> English machine translation of the [Russian source](<../../../../ru/reports/experiments/seed-inversion-electrum-20261030/NOTES.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/03-wallets.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E7 evaluation of proposals, interim conclusions and continuation

## 2026-10-30 Pre-launch assessment

Of the four sentences, a new short cycle is justified for initialization MT search MPK Electrum It's a well-known point nonce and comparison RFC6979 repeat E5; It didn't repeat itself Armory A separate speculative model, assigned a limited exact query with control examples.

Sources verified directly: [Stackered, 22.04.2024](https://stackered.com/blog/python-random-prediction/), [published](https://github.com/StackeredSAS/python-random-playground), [Electrum 1.9.8 OldAccount](https://raw.githubusercontent.com/spesmilo/electrum/1.9.8/lib/account.py), [Hash from bitcoin.py](https://raw.githubusercontent.com/spesmilo/electrum/1.9.8/lib/bitcoin.py)Photos from the URL, UTC and SHA-256 — sources/SOURCES.json; historical CPython - archives E2 with proven hashes.

## 2026-10-30 — MT: positive control, then the limit of applicability

Run `20261030-124911-1a7e70`On CPython 2.7.9 and 3.4.2 condition/outputs of all nine fixed seed length 64/96/128 The bit coincided with an independent implementation 8/10/12 Special speeches given to candidates seed, Checking the other exits left the correct seed In all nine cases, the four different positions of the local window also restored the correct position seed. This confirms the transfer of the method to historical versions and the correctness of the indexation, but not its applicability to partially observed puzzle-data.

Scanned 29 664 Local projections: eight circuits E1, two sets of observations and windows 4/5/6 words, all permissible beginnings. In addition, a known bit is introduced I[0]=0x80000000. When using only the No1–50 Each such window is completely free: 128/160/192 coordinates, all of them 83 And the best solutions are sizes 68/100/132 for seed64/96/128. Canon windows I[228...] They were completely free. 48 The best projection certificates contain specific states and independent directions; they are verified from observations and separately from target coordinates.

For nine synthetic seed In all eight packages, the exact reproduction of observations with the same masks and omissions has been verified: 72 The projections are the same for all joint right-handers, so these controls have the same limit of direct complement seed from the masked synthetic data is not stated: a direct search of additions was not started, because the minimum 68 exceed the predetermined limit 20.

The conclusion is limited by the strategy of linear projection → List the missing window coordinates → draw init_by_arrayThere are more additions than there are seed It's the same width; the cost of one attempt varies, so it's a comparison of the number of combinations, not a universal estimate of time seeding They're nonlinear and not included in this size seeding remain open; new ones remain open; seed64/96/128 Not excluded.

In the general folder there is also a completed E1b (mt-state-api-20261030): supplementary API/History gives us the uncertainty of an arbitrary state E7 It uses eight different matrices E1; projections E7 It is not automatically transferred to models E1b. Their previous calculations were not repeated.

## 2026-10-30 — Electrum: negative MPK and positive conditional consequence

42 historical get_sequence-The vectors matched the new implementation 12 synthetic master keys/mappings by seven indexes: 84 The real pool, the public, the private and the affinity pathways. 254 point E5 + 254 candidate E6H, After removing the seven matches, 501. Checked both branches and index=stride*(puzzle−1)+offset for stride=1/2, offset=0/1/2: 6012 Candidate-displaying checks. None of them passed even filter No256; before the checks255/254 The real candidates didn't make it Electrum Not proof of absence MPK from other sources.

Additional control after the main run confirmed the substantive part of the proposal: MPK One known masked solution of a higher number allows you to calculate three candidates for the smaller number 24 synthetic cases (No71 no100, famous135, everything 12 Each time there were three candidates, HASH160 I left it right. The predictor only gets MPK and d_135, non-mastery s; s The artifact is used outside for inspection. electrum-conditional-prediction.json.

Accurate justification: let public supplements be known a_j,a_i, given n, and j>=i. Got it K_j=s+a_j−t_j*n, K_i=s+a_i−t_i*n, t_j,t_i∈{0,1}. Then K_i = K_j+(a_i−a_j)+(t_j−t_i)*n, wherein the transfer difference −1,0,1. From d_j famously K_j mod 2^(i−1), Therefore:

```
b = (d_j + a_i − a_j) mod 2^(i−1)
d_i ∈ { 2^(i−1) + ((b + u*n) mod 2^(i−1)) : u∈{−1,0,1} }
```

For j=i should be used r_j=d_j mod 2^(j−1), That gives you the same formula on a module; it's almost interesting j>i. It's not disclosure s And not the actual result puzzle. The real thing is needed MPK, derivation/The main missing parameter right now is confirmed MPK. Therefore, an archival search for this particular public parameter has a clear criterion of utility.

## 2026-10-30 — feedback Armory: result is limited by timeout

An accurate model with known d_i at the entrance of transitions and permanent 256-bitten C. XOR expressed by the linear sum of binary variables, reduction in order secp256k1 preserved through integer private/It's a different object than E6H, where the original scalars are unknown.

Little control (C8, routine 251, The seven keys have been restored C=173; When the last bit was changed, the system became incompatible. The complete sets matched with exhaustive brute force 256 The real system of the 49 crossings1–50 stopped unknown/timeout behind 30,239 limit 30 000 Ms. Save feedback.smt2, version Z3, statistics and all input coefficients through known keys C Not received, the uniqueness test/postponed51–70 It was not launched for lack of a model.

You can continue with another exact encoding, private or other solver partitioning. A simple time extension is a new launch on a separate budget; you can't replace the result timeout The big system didn't scale blindly.

## 2026-10-30 - reception

13 stages completed or given the prescribed limit of implementation; scientific attempts 112,032 s. 48 Projection Certificates Verified, Final resume fulfilled 0 new stages, after report/resume hashes mtime All scientific artifacts have been preserved, three intentional damages on isolated copies rejected checkpoints The numerical tables are formed from JSON, The manual inferences are here.

## Future experiments

1. Look for confirmed Electrum MPK/public descriptor In particular historical sources, with origin and verification at the top, do not arbitrarily expand the pool of random points.
2. For feedback Armory Explore stronger limitations/encoding and comparing solvers on increasing synthetic cases before a new real-world query.
3. For MT joint limitations of initialization and observations without a full listing of windows; first demonstrate recovery seed using synthetic data with the same masks E1b It requires a separate production with an unknown failure history.
4. New defects nonce - only with the exact model and origin of the signatures; already executed E5 Don't repeat it.
