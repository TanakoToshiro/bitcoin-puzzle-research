> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-nonlinear-20261102/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-02 More complex rules of sequence

Recorded before real statistics are calculated 2026-11-02. Continuation SEQ-01, Separate series; old files/surroundings/GPU They don't change. The computational budget 30 minute CPU No new source keys, after preparation seed-Hypotheses or search for wallet artifacts.

## Data and separation

Local copy of the same 83 proven solutions SEQ-01 s SHA-256. Full published puzzle keys In the hypothesis of external masking, we consider observations of the initial value only bits 0…i−2. Mandatory most significant bit eliminated. Numbers don't shrink. Preparation checks the shot against the previously received seal SEQ-01; full-fledged EC-The audit is not required again.

Training: No1–50; follow-up check: No51–70. It's already studied data, not a new closed test75,80,…,135 They're used only to further test recursive predictions. Unfamiliar solutions are never set up by zeros. Separately distinguish between a recursive prediction with no true next values and a one-junction diagnosis with a known past.

## A. Unknown coefficients of nonlinear word-recursion

Widths b=2,4,8,16,32; step-step d=1,2,3, phases separately 2^b. Designations: x1,x2,x3 - past phase values, i - reference number puzzle. A linear combination of the following features with unknown coefficients:

1. AR2: `[1,x1,x2]`.
2. AR3: `[1,x1,x2,x3]`.
3. quadratic1: `[1,x1,x1²]`.
4. bilinear2: `[1,x1,x2,x1*x2]`.
5. quadratic2: `[1,x1,x2,x1²,x1*x2,x2²]`.
6. counter2: `[1,x1,x2,i,i*x1]`.

The solver of exact linear congruences modulo 2^b It has to distinguish between inconsistency, singularity, and several valid coefficients pivot is eliminated by the usual reversible operation; if all elements are even, with an even right side we divide the system/module2 And we take into account the free higher bits of variables. The odd right side in the even row is not compatible. This is not a field: division by an even element as reversible is forbidden.

For the forecast, a single solution of coefficients is required OR the coincidence of forecasts of all permissible coefficients64 decisions are listed in full; with a larger number of `ambiguous_budget`For a little ambiguity, all recursive predictions are up to135 They are calculated without a true future; if they diverge, the status of `ambiguous_forecast`It's not estimated. It's necessary x² and x They coincide in parity, and different polynomial coefficients sometimes give a single function modulo2^b. Not at all `2*p+4` of the teaching equations, where p the number of factors, and 6 Statistics, maximum `(correct_bits−wrong_bits)/sqrt(test_bits)` no51–70, maximum0. To preserve the number of solutions of ambiguous systems; no arbitrary representative is declared the only true rule.

## B. Nonlinear Boolean-recursion

Precise training of algebraic normal form over GF(2), including the constant and all square-free monomies of the degree to2 either3.

- One bit j=0…31, lag-set1,2,3),(1,2,4),(1,3,5),(1,2,3,4); degree2/3; step-step1,2,3 Subsequent predictions are recursive, including additional known numbers before135.
- Inter-bit templates for j=0…23, degree2/3, step-step1/2, all the lines together: `(j@lag1,j@lag2,j+1@lag1)`, `(j@lag1,j+1@lag1,j+2@lag1)`at j>0 also `(j@lag1,j@lag2,j−1@lag1)`It's just one-junction diagnostics: the model doesn't predict the other bits of future keys.

All entrances/The discharges must be observed `2*p+4` teaching equations, 6 Inconsistency of test targets/singularity/They vary. Only single coefficients are judged on the test. Maximum standardized advantage is statistics B. One successful short bit forecast is not enough.

## C. Fixed grammar of addition, XOR, AND/OR, multiplication

Widths b=4,8,16,32, step-step1,2,3,4. Operations `+,-,XOR,AND,OR,*`entrances x1,x2,x3 already limited b Instant results. Intermediate results modulo2^b. For each pair of operations:

- `(x1 op1 x2) op2 x3`;
- `x1 op1 (x2 op2 x3)`;
- `ROL_b(x1 op1 x2,r) op2 x3`, r=1,3,5,7,11 upon r<b.

The syntactic variants are recorded in total; equivalent expressions are not considered independent discoveries b-It's a bit prediction, you don't pick the best output bit after you see it12 teaching and12 It's a single-junction diagnostic.

Direct or inverted training is selected for all b Orientation of bits min(positive train-advantage test-Advantage of the chosen orientation. Grammar maximum - statistics C. Metrics and orientation coincide with the principle SEQ-01, but the new expressions contain embedded operations/spinning.

## Sizing and criterion

1023 New reproducible null sequences SHAKE-256, domain `SEQ-02/20261102/null/v1/`, the line number in ASCII. Same form of observation/Every line repeats all the fits, rank checks, orientation and maximum choices A/B/C. p=(1+number null_max≥real_max)/1024; Holm In three families, alpha0.01. It's a correction inside SEQ-02, It is not a promise of error control for an unlimited number of future research series. MC-If the calibration is incomplete, final output is forbidden.

A positive signal would require further checks; current decisions are already known and do not form a fresh one test. Even higher accuracy50% It does not automatically reduce the key space, but the number of compatible keys coefficients spaceless master seed. Negative inference applies only to registered families, data adequacy conditions and ambiguity processing.

## Controls and safety

Prior to analysis: accurate ring solver against exhaustive small systems, GF(2)-solver against brute force, known as nonlinear word-chain/Boolean-chain/bitwise/ARX-Chain: Controlling the absence of a true future in recursive predictions, grammar vs. independent prediction scalar-arithmetic, especially overflow and width ROL. Check the stop/Continuation of previously completed blocks JSON The inputs are fixed by hashes; the report is reassembled without running the experiment.
