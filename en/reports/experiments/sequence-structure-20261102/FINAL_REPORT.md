> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-structure-20261102/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-01 The first sequence analysis cycle is completed

Date: 2026-11-02. Run: `SEQ-01-0681891fc7a8`.

**There is no significant signal in the recorded set of short dependencies and order structures.** No new private key, a validated bit or a suitable range reduction has been received. This is a limited negative result, not proof of the absence of a more complex connection.

## What's tested

The original image contains 83 decisions: No1–70 consecutively, then No75,80,…,135. Ranges, compressed public keys and addresses of all 83 The solutions are tested. SHA-256 source and local copy, code, protocol, Python/packages: MANIFEST.json - an artifact of the initial study (`MANIFEST.json`; outside the picture.

From consideration excluded the mandatory most significant bit of each puzzle. Posted private keys self-full puzzle; The lower bits are regarded as observations of the assumed initial values only in the pre-masking hypothesis.

| Verification | Actually permissible options | Result |
|---|---:|---|
| Unknown a,c: leftover = a×preceding+c modulo 2^b | 68 | Everything contradicts the learning sequence |
| Polynomial degree sequences 0–3 / finite | 207 | Everything contradicts the learning sequence |
| Affine XOR-recursion 1,2,3,4,6,8 | 577 | 576 Contradictions in training; 1 rule didn't make a prediction |
| Fixed formulas: previous values, differences XOR shifting | 475 | There is no significant advantage in consecutive verification |
| Frequencies, lags, phases, regime change boundaries and blocks | 1275 | The maximum deviation is insignificant after taking into account the entire search |

Widths 1,2,4,8,16,32; for word-step-piece 1,2,3,4,5,8,10. Not all combinations are provided with enough data: they are skipped at predetermined thresholds word-Models are actually steps away from 5, for XOR before 4. This cannot be described as a complete test of all partitions or arbitrary recursions.

For accurate models, the coefficients were fixed at No1–50; The predictions were then built recursively without substituting the actual next keys. For diagnostic fixed predictors, one transition with known previous values was tested - this is a weaker task, not a standalone generator of future keys.

## Two notable but unconfirmed observations

1. Bit 23 subsequence26,29,32,…,50 The exact rule `bit[i] = 1 XOR bit[i−3]` explains these nine learning observations, on the following six relevant issues51–70 gives **3 mistake 6**; four suitable published decisions after the70 more **1 mistake 4**. This exact recursion is refuted, the forecast of unknown keys on it is not justified.
2. In bat 2 roomy `i mod 5 = 3` (with the exception of the mandatory bit) the unit is **2/13**, in the rest, **39/54**. It looks obvious in itself, but when you do it all over again 1275 tests on random sequences as strong or greater a maximum occurred in the **125/1023** This is not a reason to announce a fifth chain or a special export mode.

## Calibration of the entire search

For each of them 1023 The reproducible independent null sequences are repeated by all three families, including learning, orientation selection, length tolerances and maximum selection. Random data have the same observable bits and numbers as real ones.

| The family | Monte Carlo p | Holm p posture 3 families |
|---|---:|---:|
| A: precision-model | 1.000000 | 1.000000 |
| B: fixed predictors | 0.811523 | 1.000000 |
| C: structure | 0.123047 | 0.369141 |

General level threshold: 0.01. No family has reached it p-The maximum value of the search, not the probability of truth/falsity of the hypothesis. MC-intervals, leading formulas and all numerical tables are automatically generated in [RESULTS.md](<RESULTS.md>) from REAL.json - an artifact of the initial study (`REAL.json`; outside the picture) and null/ - an artifact of the initial study (`null/`; outside the picture.

Consecutive verification No51–70 It's not considered a new closed test: published solutions have been analyzed before. Random data reproducibility testing reduces the risk of mistaking an expected match for a discovery, but it doesn't eliminate all the consequences of previous hypotheses and it doesn't prove the generator is safe.

## Verification of implementation and cost

- 480 GF(2)-systems 480 affine-systems are checked with an exhaustive search of all solutions of each small example.
- Positive examples: affinity chain, polynomial, two alternating chains, XOR-recursion and frequency change. Each one gives at least one significant family after the same zero calibration/Holm. This is a demonstration of sensitivity to these strong examples, not a guarantee of weak communication detection.
- Separate audit.py - an artifact of the initial study (`audit.py`; outside the picture) independently counted 57 small-scale affine-brute-force 207 polynomial checks through tables of differences, 577 rank XOR-systems, 475 predictors and 1275 statistician with scalar arithmetic.
- The absence of dependence of recursive forecasts on actual values No51+. All descriptors exclude the mandatory bit; unknown real keys are not used.
- Zero replicas reproduced 0,511,1022; All the highs and counters matched.
- After the first part, 16 line-up resume: Six recorded files were saved SHA-256 and mtime. Upon completion, the call was repeated **0 new-look**.

Machine acceptance: ACCEPTANCE.json - an artifact of the initial study (`ACCEPTANCE.json`; outside the picture CPU-calculation: controls 0.416 s, real-life 0.043 s, zero-point 46.597 s; supplementary independent verification 0.328 s. These amounts do not include start-up Python, record/Report reassembly, code writing and development preview 30-The minute limit of the series is not reached. GPU Not used.

## What's not closed

Unexplored: Long/nonlinear recursions, arbitrary permutations, widths above 32, full restoration of the original 256-bit values, unknown reduction module, hidden wallet parameters and all variants of inaccurate/It doesn't follow from the results that the two keys are cryptographically independent.

The next extension should be chosen for a separate reason, such as the export format found or the derivative formula 70 If you don't recalibrate your values, you're going to increase the number of random findings. You don't have to repeat the exact rules and the same sets of statistics that you've already rejected.

Continuation/reassembly: [README.md](<README.md>)History, Interim Findings and Correction Before Main Run: [JOURNAL.md](<JOURNAL.md>)Complete pre-recorded set: [PROTOCOL.md](<PROTOCOL.md>).
