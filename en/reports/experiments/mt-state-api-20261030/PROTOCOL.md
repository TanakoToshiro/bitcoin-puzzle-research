> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-state-api-20261030/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E1b: condition MT historical API, pruning and hidden deviation

Locked 2026-10-30 before applying new models to private solutions seed. Arbitrary non-zero achievable state MT19937: 19937 coordinates twist, testable E1. The main projects and previous experiments do not change.

## Final models

1. getrandbits(i) with a forced high-bit; getrandbits(i-1), where1 return 1 No expense.
2. 32 sequential bytes: getrandbits(8), Python 2.7.9 randrange(256), Python 3.4.2 randrange(256). Big/little-endian byte-connection.
3. randrange(2**(i-1),2**i) into Python 2.7.9 and 3.4.2.
4. randrange(1,n_secp256k1) in both versions, then masking the younger ones i-1 bit and install senior.

Each model: stride 1/2. Before the task i>1 slip stride-1 Entire key generation calls, with the width of the current key i variable API. Numbering puzzle There are no initial additional gaps, and there are still missing decisions 24 configuration API/order/General steps API They are compared with both historical versions, but are not considered to be two different families.

## Unknown deviations

The Complete Model: Combining All Acceptable Stories rejection sampling. For a strict proof of ambiguity, it is enough to find inside it a family of states with any target value: the presence of an acceptable subfamily with all of them 2^70 Residues exclude the guaranteed definition of bit/XOR It's not proof of uniformity posterior lack of statistical advantage in a given distribution of states/seed.

For each configuration, a subfamily is built first without deviation 12 configurations rejection Non-zero history is additionally checked: one failure in each call randrange numbered c, wherein c mod 37 = 5 (numbered from zero) That's it 36 If the subfamilies are incompatible or do not give complete freedom of purpose, the result is noted only for them API-The random failure tree is not declared exhausted, and additional search for histories requires a separate record of parameters and limits before launch.

For the power boundary Python 3 / large-band Python 2 Each failure defines the highest bit of the proposed value 1, acceptance 0. It's an exact linear description of a fixed history Python 2 small ranges are used random() from 53 beat, no rejection; 2^k It scales exactly.

For order-Sufficient linear conditions are selected: 256-bit-number bit255=0; Python2 additionally bit256=0. Refusal Python2: bit256=1. Refusal Python3: everything 256 bit 1. It's a deliberately narrower permissible subfamily 1 to the accepted value is taken into account precisely: known residues are converted by subtraction 1 modulely 2^(i-1). Freedom of all 70 The bit of the original residue is transferred to the key by bijection +1, but XOR-Certificates of source bits are not issued for XOR-Key certificates.

Failure history equations are hypothetical conditions of the selected branch **non-additional published observations**. Separately show their rank, contribution 1225/3767 real observable bits and residual dimension.

## Control and Separation of Predictions

Before real data: accurate numerical data API arbitrary states in historical CPython, It's independent arithmetic, symbolic maps and real failure sequences. Synthetic data has the same set of known numbers1–70,75,80,…,135) And the same pruning. So you check if the original state is a solution, and if you're underdetermined, you build another state with the same observations and different nodes71, It does not claim a false unique recovery.

The additional positive control of the recovery algorithm uses more synthetic partially observable outputs (bytes), up to full rank and subsequent independent predictions puzzle. Recovery on the same scale puzzle You can’t ask if the dimension shows ambiguity.

On real data, the state is first selected only by No1–50 The predictions are saved and reproduced by the historical interpreter; then evaluated on all of them 33 known solutions >50. It's only after this result is saved that the remaining keys are added to the linear system, and the satisfaction of all the data after adding them is a test of compatibility, not the success of a delayed prediction.

For the complete system, the A, RHS, 70 target lines, baseline and independent directions. All evidence is numerically verified MT historical API; Ranks are rechecked by an independent exception. Non-zero history must actually be reproduced API Every verified witness is not allowed a zero state.

## Reproducibility

Snapshots of code, source code gf2, data runtime metadata; SHA-256, configuration, JSON-results, binary matrices, states, error logs and Markdown. Statuses complete/partial/inconsistent_branch different. RESULTS.md It is updated after the completed phase, NOTES.md Continuation misses the verified DONE-The steps, the code change, creates a new start CPU; The previous permit for long-term work is retained. If the size of the individual stage is unacceptable, the limit is fixed, not the negative scientific result.
