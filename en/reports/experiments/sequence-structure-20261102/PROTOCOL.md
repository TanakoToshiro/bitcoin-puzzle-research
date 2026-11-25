> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-structure-20261102/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-01 Links of minor bits and order structure

Locked 2026-11-02 before calculating the results CPU, new folder; old experiments, common environment and GPU-The search is unchanged.

## Data and meaning of observations

Source: `../child-derivation-audit-20261102/inputs/known_solutions.json`, a local copy of c SHA-256. 83 decisions: 1–70 sequentially 75,80,…,135. Before analysis, check the ranges, public key and Base58Check-address coincurve/hashlib.

Posted private key - the full key of the corresponding puzzle. In the hypothesis of pre-masking the initial value only bits 0…i−2 They're observations of the initial output. The mandatory most significant bit is eliminated. Unknown decisions don't turn into zero-value observations 32 There are too few sequential observations above for the selected models.

No. is used for training1–50. №51–70 - Consecutive inspection, No75–135 This is NOT a new closed test: these solutions have already been used by previous studies puzzle It is not considered a proven wallet index; it is the published order that is examined.

## A. Precise short dependencies

Word widths: 1,2,4,8,16,32 Steps: 1,2,3,4,5,8,10; Consider each phase separately, without compressing the gaps.

1. Unknown `a,c` into `x_next = a*x + c mod 2^b`. Find all the valid coefficients with an accurate solution of linear congruences, distinguish between no solutions, singularity and ambiguity, predict only for a single pair. Ambiguity is not a refutation.
2. Sequential number polynomials within the degree phase 0–3: zero corresponding finite difference modulus 2^b. Check all training transitions, do not adjust the degree on the test.
3. For each individual bit 0–31: quinox XOR-recursion 1,2,3,4,6,8; step-step 1,2,3,4, phases separately. GF(2)-solver returns inconsistent/unique/ambiguous. Ambiguous systems do not predict.

For word-model 8 training transitions and 4 consistent test purposes; for XOR less `2*(order+1)+4` teaching equations and 4 If there is a lack of data, the combination is omitted and not considered validated.

Predictions of exact models after No50 recursive: actual values No51+ Fixed coefficients and training tail give prediction to number one135. Rating by No51–70: `(correct_bits−wrong_bits)/sqrt(total_bits)`Maximum for all permissible models - family statistics A. Forecasts are also checked with all suitable known solutions No75–135; They are not used to select a model.

## B. Fixed simple predictors

Same widths and steps, phases combined (one formula) The previous values are taken from the source indexes, all bits used should be observed.

Formulas: `x1`, `2*x1−x2`, `3*x1−3*x2+x3`, `x1 XOR x2`, `x1 XOR x3`, `x1 XOR x2 XOR x3`; additionally for s=1,2,3,5,8 upon s<b: `x1 XOR (x1>>s)` and `(x1<<s) XOR x2`All the results modulo 2^b.

They're single-junction diagnostic predictors, and they use actually known prior clues to test them, and their success doesn't mean they can build a long chain on their own 8 teaching and 6 In training, choose a straight line or inverted line b Model statistics are the minimum of positive standardized learning advantage and the advantages of selected orientation on the test B. Consider the real dependencies of estimates through modeling the entire algorithm.

## C. Order, phases, blocks

On No1–70, with the exception of mandatory bits:

- bit-frequency 0–31;
- matching every bit on the lag 1…16, less 12 steam;
- phase-frequency 2,3,4,5,8,10, bits 0–15; phase against the others, no less 6/12 observations;
- frequency-change/post-fixed 20,30,40,50, bits 0–15, less 10 on each side;
- block-length 10 and 16 against the others, bits 0–15, less 8/12;
- minority b=4,8,16,32 lag-bat 1,2,3,4,5,8,10,16, less 12 The repetition of some positions of adjacent blocks is already covered with lags, not a separate discovery.

Every statistic is an absolute deviation from independent uniform bits in units of theoretical standard deviation C. Random controls take into account overlapping pairs and multiple viewing.

## Statistical findings and budget

1023 independent reproducible null sequences: SHAKE-256 published/ID It's a computational null reference, not a statement of origin puzzle. Repeat the entire selection in each replica/selection A,B,C. Save the highs and fit counters for each replica `p=(1+count(null_max>=real_max))/(1023+1)`Then Holm in three families together alpha=0.01. Minimum allowable p=1/1024; confidence intervals Monte Carlo A boundary result requires a separate series with a large number of replicas, not an automatic opening announcement.

A comparison with random data separates the anomaly from the expected result of bruising formulas, but does not prove the generator/The total negative inference is limited to the enumerated widths, orders and partitions. Long nonlinear rules, cryptographic rules derivation And arbitrary permutations are not explored.

Computational budget of the first series 30 Controls to real analysis: congruence and GF(2) against an exhaustive small standard, known as affinity/polynomial/XOR/Alternating sequences, regime change, masking and no test inputs in the recursive prediction. The limit is logged; incomplete zero calibration remains unfinished.

Save protocol, code/input hashes, versions, control results, tables of real models and statistics, zero replicas in parts, STATUS/JOURNAL/RESULTS. Coinciding manifest allowance resume without repeating finished parts; changing inputs requires a new folder in the series JSON No computation of the experiment. Do not change the shared files of parallel chats.
