> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-targets256-20261030/CONCLUSION.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E1e - the result of checking all initial 256 address

Completed 2026-10-30. ID: `20261030-150813-643fdd30`. [Teams and formats](<README.md>), [protocol](<PROTOCOL.md>), [journal](<NOTES.md>).

**Links senior numbers to the No71 and other unknowns found as exact consequences of the tested models MT19937. No confirmed new private key or real key bit has been received.** The origin of the actual sequence from these models has not been established.

Completed 40 branch / 32 configuration: 6920 individual projections, 3080 transfers from the entire upper block and 3840 pair71 with a separate top number 256 address 83 The keys are known; all of them have been analyzed 173 Unknown77 lower, 96 Number of unknown bits 28873; You don't have a forced high bit on. You have public dots for everyone 96 The top numbers, but their private meanings are unknown.

## The most visible links with the No71

The table shows what would have changed **Knowing the numerical private values** These values are not derived from public dots; groups are selected from short lines of stored base; no global search for the best group has been conducted.

| Model | Seniors | Freedom No71 before → afterward | Additional conditions |
|---|---|---:|---:|
| Python getrandbits(256), standard packaging | 170,226 | 70 → 39 | 31 |
| Straight order 32-bit words, big-endian | 170,227 | 70 → 2 | 68 |
| getrandbits(i), exit | 166,202 | 70 → 0 | 70 |

Example of standard packaging (bit numbers from zero):

`k71[11] XOR k170[2] XOR k170[9] XOR k226[194] XOR k226[201] = 0`

Accurate certificate: native.cert - an artifact of the initial study (`runs/20261030-150813-643fdd30/tasks/fixed-reverse-big-s1/native.cert`; outside the picture), recording 12715. All formulas selected: [MIXED_EQUATIONS.md](<runs/20261030-150813-643fdd30/MIXED_EQUATIONS.md>)with precise masks, and provenance: MIXED_EQUATIONS.json - an artifact of the initial study (`runs/20261030-150813-643fdd30/MIXED_EQUATIONS.json`Additional groups: SMALL_UPPER_SETS.csv - an artifact of the initial study (`runs/20261030-150813-643fdd30/SMALL_UPPER_SETS.csv`; outside the picture.

## One senior number

From 3840 The tested pairs additional transfer was found in 6 branching + They're all conditional on a particular story randrange. In standard packaging getrandbits(256) No single top number reduces freedom71.

| Branch | Upper room | Dimension to → afterward | Coordination |
|---|---:|---:|---|
| api-interval2-na-s1-sparse | 181 | 70 → 69 | key_bits |
| api-interval2-na-s1-zero | 233 | 70 → 69 | key_bits |
| api-interval3-na-s1-sparse | 182 | 70 → 69 | key_bits |
| api-interval3-na-s2-zero | 176 | 68 → 67 | key_bits |
| api-order3-na-s1-sparse | 168 | 70 → 69 | pre_increment |
| api-order3-na-s1-zero | 170 | 70 → 68 | pre_increment |

`pre_increment` signify `(key−1) mod 2^(i−1)`:found XOR refer to these coordinates, not automatically to the bits of the original key. For `key_bits` These are the lower bits of the private key.

## Other unknowns and general rank

For 2748 from 2772 combinations of the undeniable branch + The bottom number, knowing the entire top block, would reduce the dimension 230 It's the number of model and number combinations, not the number of confirmedly limited real keys. ALL_TARGETS.csv - an artifact of the initial study (`runs/20261030-150813-643fdd30/ALL_TARGETS.csv`; outside the picture), TRANSFER_FROM_UPPER.csv - an artifact of the initial study (`runs/20261030-150813-643fdd30/TRANSFER_FROM_UPPER.csv`; outside the picture.

In the standard model d(L)=8952, d(U)=15735, d(L,U)=16170; independent mixed relations 8517 = d(L)+d(U)−d(L,U). All joint restrictions 12703. And each of them 173 The unknown keys individually have a full linear dimension256 It retains an affinity shell. Consequently, there is no fixed bit or XOR It's not a statement about the solution of nonlinear equations of public points.

In the remaining undeniable branches, the number of mixed restrictions lies in the range 4397–8953. Thousands of relationships are expected from the dimension MT It doesn't support the creator model E1d preserved BASELINE_COMPARISON.csv - an artifact of the initial study (`runs/20261030-150813-643fdd30/BASELINE_COMPARISON.csv`; outside the picture: in randrange They are caused by additional assumptions about deviations, not new observations from addresses.

## Verification for these points

4 Branches rejected; 36 They're not rejected by the tests that we've used byte_range3 with stride=2 (big/little, sparse/zero) extension256 single-state MT. His prediction No161 It doesn't match the published public dot, it only excludes these specific sequel stories, a witness compatible with all of them 83 He was wrong on a previously unknown key.

Produced 17473 Comparisons of the addresses of candidates from individual witness states (number of checks, non-unique candidates); no matches. The discrepancy of an arbitrary witness at a non-zero dimension does not exclude the entire branch. BOUNDED_CHECKS.json - an artifact of the initial study (`runs/20261030-150813-643fdd30/BOUNDED_CHECKS.json`; outside the picture), `tasks/*/WITNESSES.json`In all of them 40 Checking the boundary of the scalar No256 It kept the linear shell.

## Verification and reproducibility

Passed 32 synthetic maps up to No256, 48 Exhaustive small systems, three reconciliations with previous matrices E1d, 216 Controls of the scalar region and positive/Negative cryptographic controls. Historical ones Python 2.7.9/3.4.2: 32 synthetic 98 The Native Core has directly checked the real witnesses 714775 Certificates and ranks with the opposite order of lead bits. Python checked out 1303 chosen/Distributed certificates; damaged RHS found.

Admission: 152 checkpoints, 920 Files have not changed since the full resume; new stages 0. Save 8 The reassembly of the main table is identical by byte; damage to a copy of the input is detected. ACCEPTANCE.json - an artifact of the initial study (`runs/20261030-150813-643fdd30/ACCEPTANCE.json`; outside the picture), PYTHON_CERTIFICATE_CHECKS.json - an artifact of the initial study (`runs/20261030-150813-643fdd30/PYTHON_CERTIFICATE_CHECKS.json`; outside the picture), manifest.json - an artifact of the initial study (`runs/20261030-150813-643fdd30/manifest.json`; outside the picture), DEPENDENCIES.txt - an artifact of the initial study (`runs/20261030-150813-643fdd30/DEPENDENCIES.txt`; outside the picture.

Sum of measured stages 40 branches: 5690.962 c94.85 mines) in parallel; this shall not be wall-time the whole session and not the measurement CPU-time. Model controls: 122.153 (c) In summary, code preparation/installation is not included here. GPU unused.

Limitation error Python on 4300 Decimal digits are corrected only by setting up serialization to 10000 numerals; completed matrices were not counted. Separate acceptance error with separators Windows-Fixed in the verification script, errors, causes and corrections saved; the scientific code of the main launch was unchanged.

## The following experiments have not yet been performed

1. Try to use short connections No71–170–226, №71–170–227 no71–166–202 First, get the exact transformation with the transfers in mind and estimate the complexity. XOR You can't replace the bits of scalars with the addition of dots, you need positive synthetic control and comparison with independent search.
2. Check whether useful limitations persist when combining other valid histories randrange; Do not choose a story only for the convenience of restriction No71.
3. Find a model origin test or new numerical solutions that can turn stored conditional equations into known ones RHS.
4. A complete search for shorter supports and alternative bases for the rest of the lower goals. The current choice of shorter base lines does not prove optimal.

Ready-made matrices and certificates allow you to continue these checks without reconstituting the current ones 40 branches.
