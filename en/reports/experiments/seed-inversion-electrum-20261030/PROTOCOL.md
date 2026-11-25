> English machine translation of the [Russian source](<../../../../ru/reports/experiments/seed-inversion-electrum-20261030/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/03-wallets.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E7 - applicability of treatment MT, publicity Electrum, feedback Armory

2026-10-30. Protocol to settlement. Goal is any unsolved puzzle. CPU, without GPU/clouds; total limit of new computations 1200 seconds, no code preparation/Save results are not re-computed. When you change the code, new ID; Errors and timeouts are saved.

## Evaluation of ideas submitted

1. Address init_by_array - new in relation to E1/E2b A published method requires certain full words, and its applicability is verified, and no recovery from arbitrary partial keys is promised.
2. Nonce from known private keys and RFC6979 already checked in E5: 324 signatures, 218 extraction/comparison nonce, 15/15 matches in the selected package 2019 There's no need to repeat this paragraph. Other well-defined defects require a separate protocol, the authorship of the signatories is not known.
3. Candidate for old Electrum MPK - New, cheap and final test MPK Among the observed points is not confirmed.
4. Masking inside the chain is speculative, but different from E3/E6H One exact version is being tested classic Armory permanently unknown 256-bitten C, It's not a set of arbitrary hashes.

## A: MT init_by_array

Primary source: Stackered, Florian Picca, 22.04.2024; functions.py and recover_64bitSeed.py persist URL/UTC/SHA-256 And the license, and the actual execution CPython 2.7.9/3.4.2 from E2 independent reference_mt. For 64/96/128 bits: three fixed bits SHA-256-derived seed with the top bit installed. Save the state to twist first 2160 uint32. Restore seed full-sided window I out 8/10/12 Special outputs; independent exits; full hidden words: positive control, unavailable data puzzle.

Take unchanged certified matrices E1 eight-pack/Confirm the step SHA-256 posture DONE.json. Add an exact limitation Python I[0]=0x80000000 (in coordinates) E1 It's one bit; the lower bits 31 bit I0 do not affect the flow. Consider separately observations No1–50 all 83 solutions.

For L=2,3,4 word-word seed necessary L+2 full-word I: formula K Uses threes, recovery indexes 4..623. Scanning everything a=2..624−(L+2), including canonical a=228. Projection size: rank([A;T])−rank(A), Save all the sizes, fixed bits and better projection with evidence and input matrix. Independently verify the minimum by adding target lines to the source system Stackered in canonical positions.

Synthetic seed with the same packages, masks and passes to check observations/the true state and size of the projection space <=20, list the permissible additions to the local area, turn seed and check the rest of the observations within the budget 20, You can clearly record the stop of this method without brute force. The projection size is up to a nonlinear length limit seed; It is not the lower limit of complexity seeded-attacks.

## B: Electrum 1.9.8 OldAccount

Save account.py and bitcoin.py. Exactly H=doubleSHA256(ASCII('%d:%d:'%(index,branch)) || X_BE32 || Y_BE32); MPK — 64 byteless 04. Public derivation P_child=P_master+(H mod n)G. Performing historical AST-function get_sequence/Hash/sha256 into CPython 2.7.9; Comparison with current implementation and independent private/Affine pathways.

Fixed pool of candidates: all 254 spots E5 and 254 reference points250–256 from E6H, unite compressed SEC. Fixed displays: index=stride*(puzzle−1)+offset, stride∈{1,2}, offset∈{0,1,2}, branch∈{0,1}. Check the No256,255,254 full-set E6H, first256 It's like an early filter. Don't pick up after the result. To match all three, check number250–253 and known minor residues, then a separate check of any predicted candidate at the address/12 maps.

Controls: Synthetic known MPK, everything 12 The correct derivation must be in the kits after masking s It is possible to check the formula of two residues s mod 2^(i−1) transpositionally n. Present existence MPK It doesn't promise s; check-up/Addresses are mandatory.

## C: feedback classic Armory

Model: d_(i+1)=2^i + (((d_i*(C XOR H(uncompressed(d_i G)))) mod n) mod 2^i). Permanent C, successive puzzle passless/Re-indexing. Selection by number1–50, check-up C no51–70. It's a modified user algorithm, not a regular schema Armory.

Exact linear integer encoding: C XOR H = H + sum c_j*(1−2h_j)2^j, c_j∈{0,1}. d_i*a_i = q_i*n + r_i + l_i*2^i, 0<=r_i+l_i*2^i<n, q_i>=0. Don't replace mod n on mod 2^256. Positive/Negative little control (8 bit C, routine 251, seven puzzle) brute-force 256 The real request Z3 maximum 30 c; at sat Check numerically, a separate singularity request maximum 30 s. unknown/timeout It's not a rebuttal SMT2 and solver statistics into artifacts.

## Acceptance

Individuals JSON-stages, copies of the code/inputs, versions, hashes, log attempts RESULTS.md After each stage, check stop/resume, skipping the finished stages and reassembling the report NOTES.md; number JSON. The result should distinguish the inapplicability of a particular completion-search excluded MPK-Candidates, time-outs and model refutation.
