> English machine translation of the [Russian source](<../../../../../../ru/reports/experiments/high-points-xor-20261030/runs/20261030-122003-bb9bb8/CONCLUSION.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../../README.md>) · [Direction](<../../../../../topics/07-masks-and-order.md>) · [Documents of the series](<../../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../../docs/LATEST_RESULTS.md>).

# E6H Results of a limited study

Run: `20261030-122003-bb9bb8`Date: 2026-10-30. Purpose: Any unsolved puzzle, Including a public point of view.

**Conditional starting points constructed; practical acceleration of recovery chaincode The private key has not been obtained by the verified method.**

## Real data

From a verified image E5 Public keys taken No250–256. SEC, HASH160 And the addresses are double-checked 254 Possible starting points for public128+64+32+16+8+4+2), coiled coincurve and independent affinity arithmetic.
For No254–256 preserved 64 combination and hashes of two proposed transitions Armory: real-points.json - an artifact of the initial study (`real-points.json`; outside the picture 14 The individual points for the three indexes are not 14 Candidates for private scalar.
The camouflage condition and the sequential chain assumption remain hypotheses 1..n−1 It is not only derived from the listing of points.

## What is tested on reduced models

Five widths C (12,16,20,24,28 bit), two independent deterministic chains per width, one at a time/two/Three crossings: 30 In all cases, the correct synthetic C It is part of the found set; all sets coincide exactly with the independent set BSGS+For the widths 12/16 a complete scalar enumeration has been checked; for 8 The bit is a complete brute force on public group equations.

| Number of crossings | The only solution is 10 chain |
|---:|---:|
| 1 | 0/10 |
| 2 | 9/10 |
| 3 | 10/10 |

In selected toy groups q near 2^(w−1), Therefore, one multiplier residue often has two w-These frequencies of ambiguity cannot be transferred to secp256k1: her order is close to 2^256.

## Cost

Joint MITM split-bit C Additional transitions increase the size of the group vector; the number of assignments for each half remains 2^(w/2). Comparison is one BSGS DLP first transition and check the few received C It's control, not launch DLP present puzzle.

| Bit C | MITM, 3 transition, median with | DLP+selection, median with | Appointments in each half |
|---:|---:|---:|---:|
| 12 | 0.001094 | 0.000192 | 64 |
| 16 | 0.004134 | 0.000586 | 256 |
| 20 | 0.015617 | 0.001403 | 1024 |
| 24 | 0.063815 | 0.006994 | 4096 |
| 28 | 0.271150 | 0.028784 | 16384 |

For three transitions, the joint search in these launches was in 5.07–12.09 Short times are noisy; accurate counters of operations and table sizes are given in [REPORT.md](<REPORT.md>) and comparison.csv - an artifact of the initial study (`comparison.csv`; outside the picture.
Increase in width by 4 The bit increases the size of each half in 4 It's just that MITM on 256-bit C orderly 2^128 It's an evaluation of a particular algorithm, not a lower bound for all possible methods.

## Controls and reproducibility

96 synthetic cases secp256k1 and 16 check-out XOR-We tested the neutral element, the order of the toy subgroup, the full dot count on the small curve, the negative example (many solutions are empty), the deadline has expired.
Passed 13/13 Stages; Computational stages of successful launch 3.824 C. Control of stopping after three stages/Confirmed each stage exactly once; the final stage resume fulfilled 0 Damage to stage data, code and artifacts is found on isolated copies. ACCEPTANCE.json - an artifact of the initial study (`ACCEPTANCE.json`; outside the picture.
First launch 20261030-121919-311766 stopped because UTF-8 BOM into CSV. He's saved with traceback; After fixing the loader, a new one was created ID. Code preparation time, safety checks and failed launch times are not included during the science stages above.The budget is not exhausted; increasing the size of the model without a new algorithm was not required to repeat the expected growth.

## Permissible conclusion and continuation

General limitations are useful for identification and verification C. In the tried and tested MITM They didn't reduce the complexity of the usual discrete logarithm. Armory source puzzle This is not excluded; possible other algorithms for related XOR-Multipliers are untested.
At real points, the system didn't work chaincode, No private key, no bit/XOR real-life puzzle Not received. No161–256 This data is useful as a source of constraints, not as new rewards.
Expanding the goal to any unsolved problem eliminates the need to return to No71, But it does not eliminate the main difficulty: knowledge of the public chain and C It allows you to calculate the following public points, not automatically their numerical private scalars. Reverse derivation is also not free.
Continue this direction meaningfully with the emergence of a new way to solve related group problems XOR equations, entropy constraints C Or the original private anchor with a proven link to the chain, a new method to first compare on the same stored control chains, to use new independent chains for scientific confirmation MITM It's not a new acceleration.

Launch teams/continuation: [README](<../../README.md>)Manual history: [NOTES](<../../NOTES.md>).
