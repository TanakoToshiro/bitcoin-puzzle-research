> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-nonlinear-20261102/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-02 More complex rules: the first cycle is completed

2026-11-02. Run `SEQ-02-96af00787024`.

**In the selected nonlinear dependencies, there is no confirmed signal.** Checked out 117 models with unknown numerical coefficients, 532 Boolean-models with unknown coefficients and 2952 No new private key, confirmed bit or reasonable shortening of search received.

## What's added after SEQ-01

The first cycle tested short affinity/XOR Dependencies and order structure, added here:

- several previous values, squares, products of previous values and terms with the source number puzzle;
- Boolean-polynomial2/3: AND-interaction of several past bits plus XOR/constant, including neighboring bit positions;
- combinations of addition, subtraction, XOR, AND, OR, multiplication and cyclic rotations.

Same picture: 83 Published decisions, including No1–70 Senior mandatory bit eliminated. Training No1–50, follow up51–70; The data has been studied before and is not being declared a new closed test SEQ-01 his80 sealed-The artifacts are checked by hashes without re-execution.

Complete set, difficulty limits, steps/phases and criteria are determined prior to the calculation of [PROTOCOL.md](<PROTOCOL.md>)Inputs and versions: MANIFEST.json - an artifact of the initial study (`MANIFEST.json`; outside the picture.

## 1. Recursion with unknown numerical coefficients

For example, `x_next = a + b*x1 + c*x2 + d*x1*x2 mod 2^w`, as well as quadratic forms and dependencies on the previous three words/number puzzle. The coefficients were not known in advance or selected from a small list: the exact solver took into account all values modulo2^w.

| Family of signs | Verified combinations of width/step/phase | contradiction |
|---|---:|---:|
| 1,x1,x2 | 23 | 23 |
| 1,x1,x2,x3 | 19 | 19 |
| 1,x1,x1² | 25 | 25 |
| 1,x1,x2,x1*x2 | 22 | 22 |
| 1,x1,x2,x1²,x1*x2,x2² | 11 | 11 |
| 1,x1,x2,i,i*x1 | 17 | 17 |

**All117 The models are already contradicting the data modulo2.** This is further confirmed by an independent exhaustive parity search of all coefficients, so neither increasing the bitwise coefficients in these models nor accelerating their combing will correct the contradiction modulo2^w It depends only on the parities of inputs and coefficients.

The conclusion relates to these direct recursion residues modulo2^w. It is not transferred to the reduction of the initial value modulo secp256k1 n, Unknown most significant bits, right-hand shifts of hidden words, or hash derivation.

The solver correctly handles even pivots and the number of solutions. If there are several coefficients,64 options are listed in full and the forecast is accepted only with their consent to the135. Big big one/divergent ambiguity must remain incomplete; in real117 There are no systems, they're all incompatible, and this mechanism is important in synthetics, where different coefficients can actually do the same thing.

## 2. Nonlinear bit rules

Checked out248 recursive single-digit models and284 single-transition inter-bit models - all532. All do not have an exact set of coefficients to explain the training observations.

Examples of covered dependencies: the current bit is expressed by XOR constants, past bits and their pairwise/triple AND; or through such interactions with the senior/The next little bit next to the previous key, and for each shape that was selected, all the odds were solved at the same time, not just a few hand formulas.

Independent verification of ordinary binary matrices confirmed in all532 The increase in rank of systems after adding the right side is an exact contradiction Boolean-functions of any memory and does not exclude weak approximate communication/The degree and minimum number of learning equations are specified by the protocol.

## 3. More complex grammar of operations

Checked out2952 syntactic variants with widths4,8,16,32 footsteps1–4 Algebraically identical expressions are not considered independent discoveries/Invert all bits was selected on training, after which the number of51–70.

The best option is 4-A bit formula with two subtractions and rotation:

```text
u = ROL4((x[i−1] − x[i−2]) mod16, 3)
prediction = NOT4((u − x[i−3]) mod16)
```

It worked **51/80 matching bits, 63.75%** on20 This is the best result after looking at thousands of expressions, not the established future accuracy. The prediction uses present previous values; it does not prove a standalone continuation of the chain.

## 4. Checking for random matches

The entire selection of all three families is repeated1023 New reproducible null sequences with the same observed bits/For each replica, the maximum of the entire family is taken into account.

| The family | Monte Carlo p | Holm p three-family |
|---|---:|---:|
| A: numerical factors | 1.000000 | 1.000000 |
| B: Boolean-polynomial | 1.000000 | 1.000000 |
| C: composites | 0.267578 | 0.802734 |

Woo2952 The formula is no worse than the real one **273/1023** That's why63.75% It's not a proven advantage95% Monte Carlo-interval0.240–0.295, It's far from the accepted threshold. The general level threshold within this series0.01; No family has reached it. p There is no probability of the generator being true and no probability of finding the key.

Full numerical tables are automatically generated from JSON: [RESULTS.md](<RESULTS.md>), SUMMARY.json - an artifact of the initial study (`SUMMARY.json`; outside the picture), REAL.json - an artifact of the initial study (`REAL.json`; outside the picture), zero replicas - artifact of the original study (`null/`; outside the picture. Acceptance confirmed exactly1023 replica0…1022 No passes or takes.

## Tests, errors and reproducibility

Programming Controls to Real Computations:

- 288 small-scale ring-The systems are fully integrated; among them,175 incompatible,33 singular80 ambiguous;
- 320 GF(2)-systems are checked with complete enumeration;
- 8856 Comparisons of vector grammar with scalar integer-arithmetic and independent rotation of the bit string;
- Four strong positive examples: quadratic word-chain, nonlinear Boolean-chain, inter-bit communication, ARX-Each is detected by at least one family after the same calibration/Holm;
- Replacement of all true values after No50 It does not change recursive predictions.

The first positive development example `x²+3x+7` upon b=8 had128 ratios above the prescribed limit64. It showed the boundary of the mechanism, not the error of the solution of the system `2x²+3x+1`early AssertionError And the explanation is saved in the journal64 And the real hypotheses didn't expand after looking at the results.

Separate audit.py - an artifact of the initial study (`audit.py`; outside the picture) independently checked117 Contradictions of parity,532 matrice rank and all2952 grammatical formulas by scalar arithmetic null-replica0,511,1022; The results matched16 The scientific files have not changed resume.

Machine acceptance: ACCEPTANCE.json - an artifact of the initial study (`ACCEPTANCE.json`Controls of the main launch1.002s, real-world models0.118s, null-calculations119.648s, independent auditing1.151s. These times do not include development, start-up Python recording/Computational budgets30 Minutes are not exhausted; additional search for the sake of spending the budget was not launched. GPU And the general environment hasn't changed.

## Boundary of withdrawal

A finite, reproducible search for more complex rules has been performed word/Boolean-There are contradictions in models, and the approximate advantage of composite formulas is explained by the scale of viewing.

Rules with hidden state, other reduction are not excluded/We didn't study flexible, noisy learning models here: exact families A/B To further complicate things, we need a new limited hypothesis and a new calibration; one formula that is well-suited to this70 The keys that have already been studied are not sufficient in themselves.

History persists in [JOURNAL.md](<JOURNAL.md>); teams in [README.md](<README.md>)Synthetic conditional predictions are not real solutions Puzzle.
