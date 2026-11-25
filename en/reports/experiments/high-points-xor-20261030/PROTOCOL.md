> English machine translation of the [Russian source](<../../../../ru/reports/experiments/high-points-xor-20261030/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/07-masks-and-order.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E6H - upper public points and general XOR-chaincode

Date: 2026-10-30. The protocol is fixed before the computation. The goal is extended by the user: any unresolved puzzle, Known private keys serve as controls, not only the transfer of computation to brute force is considered a success/routine DLP.

## Hypothesis and data

Conditionally d_i = 2^(i−1) + K_i mod 2^(i−1). Then R_i = Q_i + (t−1)2^(i−1)G, t=0..2^(257−i)−1. Original K_i supposedly 256-In addition, when interpreted as a private key 1<=K_i<n. Public dots do not automatically verify the last condition for each unknown K_i.

The data is only taken from the completed E5, run 20261030-114903-5757a87d: points.json and catalog.csv. The network and the main projects are not used SHA-256. The arithmetic standard is a copy reference.py from E3. Check it out SEC, HASH160 and addresses; build sets No250–256 (254 highlight 64 combination254–256. The kits do not contain restored private keys.

Classic Armory: R_(i+1) = (C XOR H(R_i))*R_i, H=doubleSHA256(uncompressed SEC), number big-endian, scalar modulus of the order of the group: Assumption of successive indices and general C It's not historically validated/chaincode Not known.

Precise transformation: (C XOR H) = H + sum_j c_j (1−2h_j)2^j. Therefore, Y_i=R_(i+1)−H_i R_i = sum_j c_j A_ij, A_ij=(1−2h_ij)2^j R_i. This is an equation in a group, not a linear system GF(2).

## Testing

1. Controls secp256k1: 96 deterministic synthetic source keys for i=254,255,256; The true dot must be present in the set point arithmetic coincurve and an independent affinity reference XOR-decomposition and synthetic transitions Armory on independent tracks, including the zero/singular/lead-bit C casually C. Zero multipliers/Do not ignore the points silently.
2. Real points and formulas: No250–256, independent arithmetic, address, hash inputs; keep all sets 64 branch H For two transitions, building constraints is not a solution.
3. Reduced groups for complexity assessment: E/F_p: y²=x³+7, p=6q−1, p and q simple; p≡2 mod3, #E=p+1=6q. Generator of the order subgroup q multiplied by 6 It's being tested. w=12,16,20,24,28; 2 independent deterministic chains per width; C has w bit H - junior w bit doubleSHA256 SEC with an explicitly indicated field length. q begin 2^(w−1), It's a modified toy model, not a proof-of-concept secp256k1. For w=8 separately check the full calculation of the points of the curve.
4. In each 10 chain-solve C One, two and three junctions30 common objectives meet-in-the-middle Binary coefficients; time, number of group additions, dictionary size, candidates. Save all the solutions H The hidden scalars are accessible only by external verification.
5. Basic comparison: one BSGS DLP at the first transition, the listing of multiplier representatives a+kq<2^w recovery C=(a+kq) XOR H; It's a cost control, not a proposed attack on puzzle. For w<=16 Verify a complete set of solutions with an independent scalar toy brute force C.
6. Negative control w=12: Replace the last public key and compare multiple MITM/BSGS/complete brute force, no need to demand no accidental solution a priori/continuation without repetition of the finished stages, mismatch of hashes of inputs and reassembly of the report.

## Limitation and withdrawal

CPU, without GPU and clouds; first launch before 1200 seconds wall time The budget boundary is checked between limited stages; the incomplete is written and can continue separately; the atomic stages, for which there are internal deadline checks in search cycles; the time of interrupted attempts to take into account.

Don't go too far 256-bit C The comparison should separate the reduction of false decisions from the decrease in complexity 256 By keeping the cost in order 2^(w/2) and the absence of a new acceleration mechanism to complete with a limited negative result for the tested method Armory Don't reject.

Reconstruction chaincode, if it ever takes place, is evaluated separately from the numerical private key recovery: known top points and C So, you get a public derivation forward, and the back step contains a hash of an unknown point. Any unsolved problem requires you to explicitly show the path from the parameter you find to a useful prediction/Recovery. No161–256 Success at their well-known points would be a research result, not a new reward.

Start saves configuration, source code, versions, input hashes and completed JSON-stages. RESULTS.md Reassembled from artifacts after each stage, manual interpretations are stored separately in NOTES.md. Teams: study.py run, resume ID, report ID, verify ID.
