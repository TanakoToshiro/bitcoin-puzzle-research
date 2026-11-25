> English machine translation of the [Russian source](<../../../../../../ru/reports/experiments/mt-all-targets-20261030/runs/20261030-131459-93a3e1c9/CONCLUSION.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../../README.md>) · [Direction](<../../../../../topics/02-prng-recovery.md>) · [Documents of the series](<../../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../../docs/LATEST_RESULTS.md>).

# E1d The result of the verification of all unsolved goals

Launch `20261030-131459-93a3e1c9`, 2026-10-30. **40/40 Phase complete, acceptance passed.**

Checked out 77 unsolved problem No1–160 From the frozen image: 8953 Unknown bits, 3080 individual projections and 40 joint.Submitted 32 Generator configuration: eight fixed packages 256-bit values and 24 configuration Python API.

**In some models, limitations are found.** Without Unknown Failures, Tasks Affected 102, 108, 139, 144, 149, 153, 155, 158. In conventional branches randrange: 71, 73, 76, 78, 79, 87, 91, 97, 98, 99, 102, 106, 108, 109, 111, 114, 116, 118, 119, 121, 123, 126, 128, 132, 133, 134, 139, 140, 141, 142, 143, 144, 145, 146, 147, 149, 151, 153, 156, 157, 158. Additional interconnections are found in 23 branches.

These results do not imply absolute knowledge of the real keys, but are accurate under the hypothesis of the corresponding generator, packaging and stride; restriction randrange It depends on the accepted history order the formulas relate to (key−1) mod 2^w, not XOR keys after transfer.

In particular, the new conditional d=69 for71 into interval3 stride2 zero arises after the addition 64 guard-conditions of the selected continuation No136–160 to 269 previous conditions, previous results E1b d=70 This is the added hypothesis of hidden failures, not new published information about the key.

## Limitations of individual keys

| Option | № | Unknown bits | Dimension | Independent restrictions | Fixed bits |
|---|---:|---:|---:|---:|---:|
| api-bits_i-na-s2-zero | 102 | 101 | 85 | 16 | 0 |
| api-bits_i-na-s2-zero | 108 | 107 | 76 | 31 | 26 |
| api-bits_i-na-s2-zero | 155 | 154 | 149 | 5 | 1 |
| api-bits_im1-na-s2-zero | 102 | 101 | 89 | 12 | 0 |
| api-bits_im1-na-s2-zero | 108 | 107 | 76 | 31 | 26 |
| fixed-forward-big-s1 | 158 | 157 | 155 | 2 | 1 |
| fixed-forward-big-s2 | 144 | 143 | 141 | 2 | 1 |
| fixed-forward-big-s2 | 149 | 148 | 141 | 7 | 6 |
| fixed-forward-little-s1 | 153 | 152 | 151 | 1 | 0 |
| fixed-forward-little-s1 | 158 | 157 | 155 | 2 | 1 |
| fixed-forward-little-s2 | 139 | 138 | 137 | 1 | 0 |
| fixed-forward-little-s2 | 144 | 143 | 141 | 2 | 1 |
| fixed-forward-little-s2 | 149 | 148 | 141 | 7 | 6 |
| api-interval2-na-s2-sparse | 91 | 90 | 87 | 3 | 0 |
| api-interval2-na-s2-sparse | 97 | 96 | 81 | 15 | 0 |
| api-interval2-na-s2-sparse | 116 | 115 | 114 | 1 | 1 |
| api-interval2-na-s2-sparse | 119 | 118 | 114 | 4 | 0 |
| api-interval2-na-s2-sparse | 121 | 120 | 119 | 1 | 1 |
| api-interval2-na-s2-sparse | 123 | 122 | 112 | 10 | 0 |
| api-interval2-na-s2-sparse | 128 | 127 | 106 | 21 | 1 |
| api-interval2-na-s2-sparse | 132 | 131 | 105 | 26 | 2 |
| api-interval2-na-s2-sparse | 139 | 138 | 97 | 41 | 27 |
| api-interval2-na-s2-sparse | 141 | 140 | 136 | 4 | 0 |
| api-interval2-na-s2-sparse | 142 | 141 | 109 | 32 | 14 |
| api-interval2-na-s2-sparse | 144 | 143 | 142 | 1 | 1 |
| api-interval2-na-s2-sparse | 145 | 144 | 137 | 7 | 0 |
| api-interval2-na-s2-sparse | 149 | 148 | 147 | 1 | 1 |
| api-interval2-na-s2-sparse | 153 | 152 | 151 | 1 | 1 |
| api-interval3-na-s2-sparse | 87 | 86 | 85 | 1 | 0 |
| api-interval3-na-s2-sparse | 97 | 96 | 93 | 3 | 0 |
| api-interval3-na-s2-sparse | 108 | 107 | 106 | 1 | 1 |
| api-interval3-na-s2-sparse | 109 | 108 | 107 | 1 | 1 |
| api-interval3-na-s2-sparse | 114 | 113 | 112 | 1 | 1 |
| api-interval3-na-s2-sparse | 116 | 115 | 114 | 1 | 1 |
| api-interval3-na-s2-sparse | 121 | 120 | 119 | 1 | 1 |
| api-interval3-na-s2-sparse | 128 | 127 | 112 | 15 | 0 |
| api-interval3-na-s2-sparse | 132 | 131 | 98 | 33 | 26 |
| api-interval3-na-s2-sparse | 140 | 139 | 98 | 41 | 27 |
| api-interval3-na-s2-sparse | 144 | 143 | 111 | 32 | 14 |
| api-interval3-na-s2-sparse | 146 | 145 | 144 | 1 | 1 |
| api-interval3-na-s2-sparse | 147 | 146 | 139 | 7 | 0 |
| api-interval3-na-s2-sparse | 151 | 150 | 116 | 34 | 27 |
| api-interval3-na-s2-sparse | 157 | 156 | 155 | 1 | 0 |
| api-interval3-na-s2-zero | 71 | 70 | 69 | 1 | 0 |
| api-interval3-na-s2-zero | 76 | 75 | 74 | 1 | 0 |
| api-interval3-na-s2-zero | 102 | 101 | 83 | 18 | 0 |
| api-interval3-na-s2-zero | 106 | 105 | 104 | 1 | 1 |
| api-interval3-na-s2-zero | 108 | 107 | 76 | 31 | 26 |
| api-interval3-na-s2-zero | 111 | 110 | 109 | 1 | 1 |
| api-interval3-na-s2-zero | 116 | 115 | 114 | 1 | 1 |
| api-interval3-na-s2-zero | 121 | 120 | 119 | 1 | 1 |
| api-interval3-na-s2-zero | 123 | 122 | 121 | 1 | 1 |
| api-interval3-na-s2-zero | 126 | 125 | 124 | 1 | 1 |
| api-interval3-na-s2-zero | 133 | 132 | 131 | 1 | 1 |
| api-interval3-na-s2-zero | 141 | 140 | 139 | 1 | 1 |
| api-interval3-na-s2-zero | 143 | 142 | 89 | 53 | 32 |
| api-interval3-na-s2-zero | 144 | 143 | 142 | 1 | 1 |
| api-interval3-na-s2-zero | 145 | 144 | 143 | 1 | 1 |
| api-interval3-na-s2-zero | 146 | 145 | 116 | 29 | 24 |
| api-interval3-na-s2-zero | 151 | 150 | 141 | 9 | 6 |
| api-interval3-na-s2-zero | 157 | 156 | 155 | 1 | 0 |
| api-order2-na-s1-geometric-b | 73 | 72 | 65 | 7 | 7 |
| api-order2-na-s1-geometric-b | 78 | 77 | 65 | 12 | 10 |
| api-order2-na-s1-geometric-b | 79 | 78 | 65 | 13 | 11 |
| api-order2-na-s1-geometric-b | 99 | 98 | 65 | 33 | 28 |
| api-order2-na-s1-geometric-b | 108 | 107 | 84 | 23 | 3 |
| api-order2-na-s1-geometric-b | 133 | 132 | 65 | 67 | 62 |
| api-order2-na-s1-geometric-b | 144 | 143 | 130 | 13 | 10 |
| api-order2-na-s2-sparse | 111 | 110 | 106 | 4 | 4 |
| api-order2-na-s2-sparse | 134 | 133 | 130 | 3 | 3 |
| api-order2-na-s2-sparse | 145 | 144 | 143 | 1 | 0 |
| api-order2-na-s2-sparse | 157 | 156 | 141 | 15 | 0 |
| api-order3-na-s1-sparse | 98 | 97 | 96 | 1 | 0 |
| api-order3-na-s1-sparse | 102 | 101 | 97 | 4 | 4 |
| api-order3-na-s1-sparse | 118 | 117 | 116 | 1 | 1 |
| api-order3-na-s1-sparse | 145 | 144 | 107 | 37 | 32 |
| api-order3-na-s1-sparse | 156 | 155 | 154 | 1 | 1 |
| api-order3-na-s1-sparse | 158 | 157 | 133 | 24 | 3 |

All 3080 lines, including negative results: ALL_TARGETS.csv - an artifact of the initial study (`ALL_TARGETS.csv`Each fixed bit and its value: FIXED_BITS.csv - an artifact of the initial study (`FIXED_BITS.csv`Full dimensions and limits on the branches: MODEL_COVERAGE.json - an artifact of the initial study (`MODEL_COVERAGE.json`; outside the picture.

For `getrandbits(i−1)` with stride=2 №102 dimensional 89 instead 101, №108 — 76 instead 107 (26 All the combined constraints of this circuit 603, of 560 beyond the individual keys stride=1 It doesn't give those limits.

## What can be used

CANDIDATE_SPACES.json - an artifact of the initial study (`CANDIDATE_SPACES.json`; outside the image) specifies for each limited key the exact affinity space: base residue and independent directions. All valid residues are obtained XOR any subset of directions with a base; their number 2^dimension. Then a forced higher bit is added, and in order-pre-executed +1 mod 2^w. This is a ready-made description of the conditionally shortened search space, not a list of found real keys.

[EQUATIONS.md](<EQUATIONS.md>) shows short formulas, including between different keys; EQUATIONS.json - an artifact of the initial study (`EQUATIONS.json`; outside the image) saves certificates. Key-to-key communication can restrict joint search or provide additional information after solving one of the associated keys. It does not necessarily fix the bit of the individual key by itself.

A specific example of a model getrandbits(i−1), stride=2: `k71[1] XOR k71[4] XOR k71[22] XOR k127[32] XOR k150[96] = 0`These are the usual bits of keys, with zero minor bit. No71 separately remains completely free, but participates in joint communication relations_involving_71 A machine file of equations.

In fixed packaging reverse-big stride1, fitting getrandbits(256), link found `k111[15] XOR k111[30] XOR k132[46] XOR k132[61] XOR k160[142] XOR k160[157] = 1`Every one of them 77 The keys are separate and free getrandbits(256) - an artifact of the initial study (`STANDARD_GETRANDBITS256.json`; outside the picture) coincided with this package on 480 current values CPython; The historical packaging has already been checked in E1/E2.

Restrictions derived from the former 83 The new decisions cannot be added back as new independent observations: certificates already express them through old lines. New independently validated information about the key or generator can reduce the dimension further.

For example, the conditional space No108 still contains 2^76 values 64 times the full range of No71 from 2^70 The abbreviation found is significant within the model, but does not in itself make this task easier than the current complete combing No71.

## Why are these not yet proven bits? puzzle

There is another compatible model `getrandbits(i)` stride=1, everything 8953 Unknown bits are collectively free, and a specific counterexample is saved, an artifact of the original research`MODEL_COUNTEREXAMPLE.json`Outside the picture: The state of the other model reproduces everything 83 So you can't just choose a model from one of the known solutions, but it violates one of the declared conditional fixed bits, so you can't just match the known solutions and declare the prediction true.

## Reviews and continuation

Synthetic controls use the same methods 83 the observed index, trimming and all 77 Every line of the card and every joint certificate are checked; the ranks are checked in the opposite order pivot. Historical Python fulfilled 160 reproductions160; Fixed packages are additionally verified C-implementation MT current Python.

Resume missed everything 40 stages; 480 checkpoint-file saved SHA-256 The damaged copy is rejected, the scientific code and the data are unchanged, a technical error in the restoration of the library WSL It's stored in the journal; the unfinished stages are followed by a separate sequential sequel 5615.177 c; in parallel, this is not common wall time. Acceptance - an artifact of the initial study (`ACCEPTANCE.json`; outside the picture.

## Future experiments

1. Check source number161–256 separately, with their addresses and status, rather than mixing them with the current table1–160.
2. Calculate the general limitations of combining different stories randrange and to assess what conditional relationships are experiencing the expansion of the family.
3. Find independently verifiable evidence of a specific API/stride/initialization of the creator; without this value, bits remain model hypotheses.
4. With new information about the associated key, recalculate the ranks and compare the actual decrease in other spaces; a separate search requires an estimate of cost.
