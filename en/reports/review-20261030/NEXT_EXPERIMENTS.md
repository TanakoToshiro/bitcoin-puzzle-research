> English machine translation of the [Russian source](<../../../ru/reports/review-20261030/NEXT_EXPERIMENTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../README.md>) · [Direction](<../../topics/08-methodology-and-history.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../docs/LATEST_RESULTS.md>).

# The following experiments after the literature review

Date: 30 October 2026. Reason: [REVIEW.md](<REVIEW.md>)The status of all experiments is below: **proposed, not implemented**. No defect found in the review does not mean that the key can be extracted.

## Working arrangements

First to execute E1 Determine the information about No71 hypothetically MT19937. E2 Prepare reliable models of historical Python, Not to inherit a negative erroneous conclusion from someone else’s scanner. E3 - separate work with historical sources; E4 There is limited control over a specific search statement around matching hashes, and a new large collection of “all possible generators” is yet to be built.

The proposed computing cycle is as follows: **120 minute CPU wall time** After the code was prepared, 15 minutes of control examples, before 60 minute E1, before 20 limited-minute E2, before 15 pilot-minutes E4, 10 It's a new budget proposal, not a launch that's already started. Archives E3 If the test cases don't pass, the corresponding scientific run doesn't start; stop time and reason to save.

First, it's saved `PROTOCOL.md`, settings and hash code. For each experiment, a new folder `experiments/<ID>/`, the machine result, the initial parameters, the journal and its `RESULTS.md`; in general `NOTES.md` Added a link. Old auto-generated `RESULTS.md` It's not manually editable. You'll need your own launch commands for new computations/Continuation: current `lab.py` It only implements the first cycle listed below E1–E4 It's still missing.

## E1 - Are bits number determined71 partial-exit MT19937?

**A gap.** There are attempts SAT/untwister, But in the studied publications, an accurate calculation of the rank and projection of permissible states on the No was not found71. General technique of linear analysis MT Novelty is possible here only in verifiable application to specific observations puzzle and an explicit certificate of outcome.

**Hypothesis.** `raw_i` It consists of eight consecutive outputs MT19937. Check the pre-fixed eight diagrams: the order of straight words/reverse, bytes of the word big/little, source-key/The first source key used is the first in the sequence i−1 The bits are observable, the senior force bit is unobservable. Variable-consumption `randrange`,line seeding And additional hashes are not included.

**Method.** symbolically tempering transition MT above GF(2). The condition must be the correct achievable state MT: use a proven basis of dimensionality 19937 either 19968 the stored bits with a clear display through twist You can't count everything in silence 19968 The bit is an independent valid state, and transfer the output to a narrower model. Zero forbidden state count separately.

For each scheme, build a system `A s = y`for 70 free bits71 - display `B s = t`Maintain your rank A, the co-operation, dimensionality of the nucleus and

`d = rank([A; B]) − rank(A)`.

In a collaborative linear model d The size of the set of allowable residues No71; `70 − d` the number of independent linear constraints on it, check both fixed individual bits and XOR several bits: the absence of a specific single bit does not exclude a certain parity.

First, consider the limitations of the number1–50, Then, if you're staging it the same way, add all the known solutions that have been put aside 83 known solutions from the verified image, therefore agreeing to these 83 So, solutions in themselves are not a new independent prediction: to preserve what is known after each group is added.

**Controls and certificates.** Check the numerical execution on several synthetic states, outputs on both sides twist and known vectors MT; restoration of the fully observable state; artificially contradictory system; case in which only XOR For the constraint found, keep the linear string combination that outputs it. For uncertainty, keep the numerically enforceable witness states and the basis of variations in the target residue SMT It's not enough to have a certificate.

**Criterion and stop.** If there is inconsistency, the scheme is rejected d=70 and correct accounting of permissible states of observation do not give linear restrictions on the71 in this scheme d<70 check the certificate with the second implementation and compliance with synthetic tasks, then issue **conditional** reduction 2^d The full candidate is verified by an independent cryptography at the address MT.

**Practical sense.** 3767 Observations are not sufficient for a single arbitrary 19937-The bit state is only counted by the number of equations, but this does not answer the question of a single target bit. E1 He's the one who answers r The independent limitations are really true for the real generator and are effectively used by the enumerator, the theoretical number of candidates decreases in the 2^r This is not a guaranteed acceleration of the current GPU-Code: the cost of transferring allowable balances must be measured separately.

## E2 - Historical Python: Accurate semantics instead of incorrect exclusion

**A gap.** Confirmed discrepancies seeding and the order of words published byPython random full scanCorrection is necessary for credibility, but does not in itself increase probability Python-hypotheses.

**Preparation.** Lock down CPython 2.7.9 and 3.4.2. In a separate environment, obtain reference sequences for seed `0, 1, 5489, 2^32−1` and two pre-selected large integers integer seed + `getrandbits(256)`eight `getrandbits(32)` with assembly; `randrange(1, n_secp256k1)` real rejection sampling. Linear and automatic seed document separately, not to be confused with 32-It's a bit of space `randrange` not include in linear protocol E1 with a fixed flow of words.

**Controls.** The independent implementation must coincide with the historical interpreter 160 The initial keys for each test seed. Positive control must be restored by artificially hidden seed from a small space in advance, for example 2^16; False word permutations should be detected, check the extremes, the number of actually viewed seed and no overflow of the meter.

**Basic limited test.** Only after the controls save the final list of schemes and space `[0, 2^20)` for the pilot, use No1–50 Filtering; the only one that has passed seed Check for all other known solutions and addresses, stop on a budget with the exact cursor and number of checks, negative pilot refers only to the space viewed 2^32-Do not declare the passage fulfilled, do not start automatically and do not motivate only by the fact that someone else's code is mistaken.

**Expected value.** The safe margin of excluded implementations; the chance of obtaining the key remains unknown E1 has already excluded the appropriate class of any allowable conditions with the same fixed flow rate and packaging, the pilot of this nested model skip and keep a reference to the exclusion certificate.

## E3 - Classical Armory before 2015: reproduce the real algorithm

**A gap.** In the dossier reviewed, vectors Armory relate HD CKD from gist 2012; The classical chain is clearly left separate. This is a gap known to the authors. Found a historical source with a different formula; links Armory maker puzzle undetermined.

**Method.** Record the product version/commit, root-generation chaincode, Public key representation, exact value `hash256`, order of bytes, first derivative record, chain external/change Find the official test vectors or get them in an isolated historical assembly 160 Two implementations, including the private and public paths, where the masked key is fed back into the chain, are considered a separate hypothesis and not be labeled as the behavior of the wallet.

**The result of stage one.** Table of reproduced API And functions, vectors, historical evidence of existence, and a list of the unknown 2–4 If the original environment is not reproduced, save the specific blocker, do not replace it with a similar modern library.

**When to move on to puzzle.** Only when there is a verified restriction seed/root/chaincode or other specific verifiable feature of generation, if arbitrary cryptographic root and chaincode, And that's to stop. The random, huge vocabulary doesn't follow from this gap. Casascius C2 can be included in the future table API, But it's already noted in someone else's review, and it also requires a reasonable number of inputs.

## E4 - Does the prefix match? HASH160 Advantage to neighboring keys?

**A gap.** The idea is implemented in the published adaptive solver; There is no independent comparison of its effectiveness in this paper, and our previous single bit correlation test did not measure this conditional local effect.

**Pilot.** Use new synthetic keys from the range No71 and the whole chain `k → compressed pubkey → SHA256 → RIPEMD160`Select independent synthetic targets in advance; don't pass their private keys to the candidate selection algorithm 8 or 12 **bits**, It's an affordable pilot of small thresholds, not a reproduction of extremely rare ones 8–14 hex-coincidences of someone else's program.

To fix three scales of the neighborhood: displacement to 2^4, before 2^12 before 2^24; You can evenly select unique neighbors without leaving range. You can remove centers, all previously viewed keys and duplicates. Control is the same number of new uniform keys with the same boundary processing CPU-Time. The initial limit 2^20 centre-up 2^18 New neighbors total; reduction due to the budget write as incomplete, do not change thresholds after viewing the result.

**Metrics.** On new neighbors, measure the probability of matching the prefix and left out of selection of the following: 8 bit HASH160. For each threshold/Comparison with the Control, Amendment Holm For all pre-approved tests, the level of 0,01. Key unit of independence - center/Objective: use clusters bootstrap Or rearranging whole groups, not counting highly dependent neighborhood observations as independent trials, keeping the confidence interval of winning and limiting the effect that the sample is able to rule out.

**Controls.** For an artificial function with a pre-introduced local dependency, the method must detect it; for an independent random function, it must not systematically produce a positive result seed And new targets are required for replication B not to use.

**Boundary of withdrawal.** The significant effect of the short prefix does not mean a gain in the search for the full prefix 160-You need independent validation, stability on new targets, and cost-adjusted winnings. A negative pilot is limited to verified thresholds, scale and test power71 On the basis of "close hashes" should not be.

## Other future experiments

Do not include in the next cycle:

1. Restoring the Availability of Research ECDSA/RFC6979 Comparison of signatures with verified public transactions puzzle. First, install the already executed coating; do not consider the signature of the solver as proof of the creator’s program.
2. Verification of possible publications of the public key No71 Primary data; preparation kangaroo Only with verified compliance of the point address.
3. Extension of generators by MT variable flow rate, xorshift128+, other LCG historical realizations JavaScript. Each circuit requires a separate, precise protocol and bases.
4. Recognition of wallet families by new features: only after measuring power on independent synthetic roots and taking into account the already published data Monte Carlo. Family classification does not equal restoration seed.
5. New models HASH160→bit: only with a meaningful new hypothesis, with new closed data; increasing the size of the model is not such a hypothesis in itself.
6. Complete SAT/SMT-chain secp256k1→SHA256→RIPEMD160: first correct vectors and scaling on small tasks, without the promise of transferring to 70 Unknown bits.
7. GLV/symmetry GPU-implementation only for the validated applicable algorithm; it is a separate budget.
8. Measurement of search block intersections between workers This is useful regardless of cryptographic hypotheses, but it doesn't apply to finding key information.
