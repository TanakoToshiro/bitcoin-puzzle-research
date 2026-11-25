> English machine translation of the [Russian source](<../../../ru/reports/review-20261030/REVIEW.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../README.md>) · [Direction](<../../topics/08-methodology-and-history.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../docs/LATEST_RESULTS.md>).

# Review of published studies Bitcoin Puzzle 71

ID: `literature-review-20261030`Date: 30 October 2026. Status: review completed; the following experiments **proposed, but not launched**.

## Main conclusion

Finding the weak PRNG, seed in time, Electrum/BIP32, Solved key patterns and “close hash learning” have already been publicly discussed and implemented, but the published negative result sometimes refers to a much narrower model than the author claims, and several implementations reveal verifiable errors.

Confirmed method of extracting the key bit No71 We can't find a way to reduce the range in the sources we looked at **An accurate check of which bits or linear combinations of bits71 are determined by known solutions in the hypothesis MT19937**, Checking for historical compliance API This is a conditional test of the generator, not an established weakness HASH160.

Detailed protocols, procedures and limits: **[NEXT_EXPERIMENTS.md](<NEXT_EXPERIMENTS.md>)**.

## How the review was conducted and what does “not checked” mean

Authors' publications on GitHub, Discussions through search results, historical sources CPython and Armory, scientific work on linear relations MT. Selected files of eight research repositories with fixation are saved commit, URL, loading dates and SHA-256: SOURCES.json - an artifact of the initial study (`SOURCES.json`Historical primary sources and unsuccessful downloads: PRIMARY_SOURCES.json - an artifact of the initial study (`PRIMARY_SOURCES.json`Complete repository trees preserved as `TREE.json`A complete audit of all files and reproduction of all other calculations were not carried out.

The statements and conclusions are read; the code portions on which key statements depend are selectively checked; the code was not started; the own short audit checks checksums, minimum arithmetic counterexamples and generator differences: audit_review.py - an artifact of the initial study (`audit_review.py`; outside the picture), AUDIT_RESULTS.json - an artifact of the initial study (`AUDIT_RESULTS.json`; outside the picture 80 It's the number of files, not the number of independently reproduced studies.

The search included requests `bitcoin puzzle 71 generator research`, `bitcoin puzzle MT19937 state recovery Python random seed analysis`, `bitcoin puzzle Mersenne Twister partial bits linear algebra rank 71`, exact combinations `bitcoin puzzle` s `rank`, `linear algebra`, `untwister`and the historical function `BitcoinArmory ComputeChainedPrivateKey`Links from the found papers were checked separately. Closed groups and unpublished experiments are not available; the review does not prove the completeness of the search.

There are three grades: **Verified by the authors in this volume**, **a specific lack of verification**, **No available reproducible report found**. The last estimate does not mean that no one has ever performed an experiment; the number of previous attempts and the probability of being “checked a hundred times” cannot be estimated from this data.

## What's already published

| Source | Considering | What can be taken from the published |
|---|---|---|
| [mlartab](https://github.com/mlartab/bitcoin-puzzle-systematic-analysis/tree/b47cfaec489890b385b388f16cb12e947768f790) | Python MT, Java, C rand, dictionaries, SAT | Ideas have already been tested; broad negative conclusions require revision due to errors below |
| [lutfiEmre](https://github.com/lutfiEmre/bitcoin-puzzle-71-research/tree/37f41a6bcef0febe5cc0280125322753dec79552) | Historical generators, temporary seed, Precise vectors, classification of families | Useful map of limited coverage; author explicitly separates hypotheses from evidence |
| [PuzzleForge](https://github.com/verknode/puzzleforge1/tree/a3d1d6ada38888a24404b169f089331e0f6a1c8e) | 126 variants of search order models, generator hypotheses | Documented sequential control on past tasks; stated the absence of a model that passed the selection criterion |
| [HomelessPhD/BTC32](https://github.com/HomelessPhD/BTC32/tree/f5b982e1ce850aa7efda40c09d5cfb5c500dcdb0) | Key position in the interval, histograms, autocorrelation | Such simple patterns have long been studied; the distribution graph does not give a forecast71 |
| [vuke](https://github.com/oritwoen/vuke/tree/3f5d3dd29f98c70142eb7e144e29164f5888fbcf) | Tools for the weak PRNG, Milksad, masking | The presence of the tool does not mean a complete search for all models puzzle |
| [intelligent-puzzle-solver](https://github.com/georgetoloraia/intelligent-puzzle-solver/tree/b7761e81d133b15fe2a67d02fcabdf74c6a8229e) | Adaptive search around partial coincidences HASH160 | Heuristics are implemented; there is no independent comparative result confirming the winnings in the materials reviewed |
| [ACD421](https://github.com/ACD421/bitcoin-puzzle-solvers/tree/4d74ed67e84000d63021678d4c3e6c3f8b4a7889) | Encoding a complete cryptographic chain in SAT | The statement of the complete correct model is not confirmed by the verified arithmetic section |
| [glv-kangaroo-paper](https://github.com/consigcody94/glv-kangaroo-paper/tree/b37e067e237529eda425735485746aa8f399dfa7) | Kangaroo/GLV and a separate essay on the origin of keys | The performance of group search and reasoning about the generator are different questions; there is an incorrect informational argument in the essay |

Sami GitHub-Publications are not considered peer-reviewed scientific evidence [Harase, 2013/2014](https://arxiv.org/abs/1301.5435) is devoted to linear relations MT19937, not a solution Bitcoin Puzzle; It justifies the choice of mathematical apparatus, but not the probability of success at No71.

## Specific results of the publication audit

### R1. Published "complete brute force" Python random"doesn't fit in with that." API

V [mt_brute.cpp](https://github.com/mlartab/bitcoin-puzzle-systematic-analysis/blob/b47cfaec489890b385b388f16cb12e947768f790/cpp/mt_brute.cpp#L28) scalar initialization is used MT multiplier `1812433253`The first word generated is placed in the upper part 256-These are two separate features of the model, not optimization details.

For the obvious integer seed historical [CPython 2.7.9](https://github.com/python/cpython/blob/a5f49f5bb46b6b8c7bf1ffedbaf3009186b94b50/Modules/_randommodule.c#L302) apply `init_by_array`; [getrandbits](https://github.com/python/cpython/blob/a5f49f5bb46b6b8c7bf1ffedbaf3009186b94b50/Modules/_randommodule.c#L454) It puts the first word in the lower part CPython 3.4.2. So, the stated exception Python hereby C++-The scanner's not justified.

Independent illustration on the established Python 3.11.9: for seed=0 classical scalar initialization MT into NumPy first-hand `2357136044`, Python — `3626764237`For four seed checked out 256 It's the control of difference **ignition Python 2.7/3.4**: The historical behavior here is established by reading the source, the execution of historical versions is yet to be completed.

We can't conclude from this that Python is a probable source puzzle. You can't substitute either `Random.seed(None)` simple time: in [Python-wrapper 2.7.9](https://github.com/python/cpython/blob/a5f49f5bb46b6b8c7bf1ffedbaf3009186b94b50/Lib/random.py#L100) There's a source of systemic entropy, clearly numerical models seed, linear seed automatic seeding It's got to be separated.

### R2. Java-check-up rejects any seed already puzzle №1

V [java_crack.cpp, lineage 69–73](https://github.com/mlartab/bitcoin-puzzle-systematic-analysis/blob/b47cfaec489890b385b388f16cb12e947768f790/cpp/java_crack.cpp#L69) for n=1 set up `start=0` and `mask=0`The result is zero regardless of the generator, whereas the key is expected 1. This is a sufficient counterexample of the suitability of this verification code; a complete search is not necessary to detect it.

Our previous independent experiment Java48 It's a separate negative result for its eight circuits, and fixing someone else's code is no reason to repeat the identical models we've already tested.

### R3. Unlucky SAT-search MT non-exclusion MT

[z3_crack.py](https://github.com/mlartab/bitcoin-puzzle-systematic-analysis/blob/b47cfaec489890b385b388f16cb12e947768f790/scripts/z3_crack.py#L47) Limits the state of a particular scalar 32-It's not an arbitrary state MT19937 neither Python integer seeding. The code also summarizes results other than `sat`to one message without separating `unknown` from `unsat`; if successful, switches to another generator API — Python random.

In the found sources, no reproducible report was found with the matrix of observations, its rank and projection of a set of permissible states on the same site 70 unknown bits number71. This is a limited statement of search, not a claim for reinvention MT: The approach through linear algebra is known.

### R4. Historical wallets were studied much more carefully, but the coverage is finite

V [NEGATIVE_RESULTS.md](https://github.com/lutfiEmre/bitcoin-puzzle-71-research/blob/37f41a6bcef0febe5cc0280125322753dec79552/NEGATIVE_RESULTS.md) It lists specific short dictionaries, time windows, encodings, paths and transformationsBIP32/Electrum "Negative result of the timestamp In one coding, it does not exclude arbitrary seed same wallet.

[EXACT_GENERATOR_MONTE_CARLO.md](https://github.com/lutfiEmre/bitcoin-puzzle-71-research/blob/37f41a6bcef0febe5cc0280125322753dec79552/EXACT_GENERATOR_MONTE_CARLO.md) It examines the exact implementations of the three canonical families, two transformations, six attributes, and a classifier of the nearest centroid. [Code](https://github.com/lutfiEmre/bitcoin-puzzle-71-research/blob/37f41a6bcef0febe5cc0280125322753dec79552/exact_generator_model_selection.py#L33) uses sequences No1–40, posture 24 teaching and 12 test sequences per class, 30 The claimed lack of distinguishability is relevant to this protocol; it doesn't exclude all traits. Even successful family recognition doesn't yet restore the identity of the family seed.

There is a reproducibility limitation: in the fully preserved tree of this commit absent `solved_keys.json`readable `solved_sequence_model_selection.py`and `generator_cascade.py`, which is referenced in the brutes log Monte Carlo It doesn't automatically become irreproducible 17 Checked available files with hashes of the author's manifest matched 16; spread out README. It's a lack of completeness/No proof of incorrect numerical results AUDIT_RESULTS.json - an artifact of the initial study (`AUDIT_RESULTS.json`; outside the picture.

V [CASCADE_COVERAGE.md](https://github.com/lutfiEmre/bitcoin-puzzle-71-research/blob/37f41a6bcef0febe5cc0280125322753dec79552/CASCADE_COVERAGE.md) The author notes the lack of Casascius C2 We can't pass this gap off as our discovery without historical evidence seed The new huge vocabulary remains a weakly motivated overdose.

### R5. Armory 2012 CKD and classic chain Armory different models

[ARMORY_VECTOR_LOCK.md](https://github.com/lutfiEmre/bitcoin-puzzle-71-research/blob/37f41a6bcef0febe5cc0280125322753dec79552/ARMORY_VECTOR_LOCK.md#L98) restricts the inspection HD-formula gist 2012 It leaves a classical sequence of years apart, and it's an honest boundary, not a hidden error by the author.

In the source Armory from 8 January 2015, [ComputeChainedPrivateKey](https://github.com/etotheipi/BitcoinArmory/blob/61a596fa94f9cacf9fb00c4e02d0eb65d8b17513/cppForSwig/EncryptionUtils.cpp#L718)multiplier is obtained XOR chaincode and `hash256` It's a public key, and then it's multiplied by a private scalar in the order module of the group HMAC-SHA512 CKD. The image confirms the existence of the code before the creation puzzle, It's not the creator's use of it. It's restoring the exact format, serialization and sequence API a meaningful task before any seed-search.

### R6. “Information of juniors puzzle “Introduced in Seniors” – Wrong Argument

esse [bitcoin_puzzle_anatomy.md](https://github.com/consigcody94/glv-kangaroo-paper/blob/b37e067e237529eda425735485746aa8f399dfa7/supplementary/bitcoin_puzzle_anatomy.md#L78) Expand the limit of total information by maximum number puzzle, reference to the nesting of modules 2^n. This reasoning applies to residues **same-number**. There are different outputs of the generator `raw_i`for Electrum It also changes the index in the hashed message, and the senior number does not automatically absorb the restrictions of the other numbers.

But the inverse conclusion is, seed It's recovering, too, wrong 83 decision-making 3767 The observed positions of the free bits are the number of observations **unproven 3767 bit-independent seed**. Independence and informativeness depend on the model, which is why you need to rank a particular system rather than counting numbers or saying "sufficient information."

### R7. Complete SAT-The chain requires arithmetic checks before complexity assessment

V [bitcoin_sat_encoder.py, lineage 211–248](https://github.com/ACD421/bitcoin-puzzle-solvers/blob/4d74ed67e84000d63021678d4c3e6c3f8b4a7889/bitcoin_sat_encoder.py#L211) The reduction function discards the higher bits and uses the condition `not(p < result)` pre-subtracting p. For the entrance 1 The three iterations described give `12884904820`And the right balance -- 1. This is reproduced by a separate short arithmetic, without running CNF-coder.

Therefore, this section does not specify the declared operation on the module p. It is not possible to conclude on the full effectiveness of SAT-The attack, or its correctly measured failure SAT-The project is not offered now: the error found does not make the correct task easy.

### R8. Interval statistics and “close hashes” – already existing ideas

[BTC32_dummy_analysis.m](https://github.com/HomelessPhD/BTC32/blob/f5b982e1ce850aa7efda40c09d5cfb5c500dcdb0/BTC32_Analysis/BTC32_dummy_analysis.m) He builds histograms and autocorrelations of normalized key positions `dlmread` → calculation double → `vpa` It's unsuitable: the accuracy of the whole is lost before it gets to higher precision. It doesn't devalue rough distribution charts. The author himself warns separately about the effect of small sampling and retraining.

Woo [PuzzleForge Hypothesis Lab](https://github.com/verknode/puzzleforge1/blob/a3d1d6ada38888a24404b169f089331e0f6a1c8e/docs/HYPOTHESIS_LAB.md) more stringent scheme: forecast of each historical problem according to the previous ones, joint calibration of models on synthetic histories; stated absence of past models at No1–70. Theirs [Generator Lab](https://github.com/verknode/puzzleforge1/blob/a3d1d6ada38888a24404b169f089331e0f6a1c8e/docs/GENERATOR_LAB.md) It requires exact matches and clearly does not treat the coincidence of several bits as a search direction, these calculations were not repeated in this review.

V [intelligent-puzzle-solver](https://github.com/georgetoloraia/intelligent-puzzle-solver/blob/b7761e81d133b15fe2a67d02fcabdf74c6a8229e/README.md) Search for keys with matching prefixes HASH160; [code](https://github.com/georgetoloraia/intelligent-puzzle-solver/blob/b7761e81d133b15fe2a67d02fcabdf74c6a8229e/main.cpp#L271) It actually accumulates these clusters, and the paper we looked at didn't find a win control on new data with the same number of unique calculations, so you should check for this conditional effect, rather than draw the correlations of individual bits again.

Additional statistical risk: [README vuke](https://github.com/oritwoen/vuke/blob/3f5d3dd29f98c70142eb7e144e29164f5888fbcf/README.md#L447) Overestimates the credibility of a short cascade P5/P10/P15. In our masking scheme, it's 4+9+14=27 Free bits, idealized independent tests 2^32 seed expected 32 This is a calculation to illustrate from README, It's not a statement of the actual false outcome of the tool, it needs additional precise deferred solutions and counting the number of hypotheses that have been tested.

## Limitations of the review

The first page of the Creator’s message on BitcoinTalk returned 403. The citation about the serial keys of a deterministic wallet is available in the repositories in question, but its context is not reconfirmed by direct access BIP32, Electrum specific seed. The assertions “exactly” BIP32and almost certainly Electrum“not accepted as established facts.”

The search also found [mnfadel/bitcoin-puzzle-forensics](https://github.com/mnfadel/bitcoin-puzzle-forensics) analysis-descriptive ECDSA nonce/RFC6979, however GitHub and API returned 404. His findings were not used and his audit nonce It's not declared an unverified direction. There's not enough information from the search description.

There was no complete audit of the blockchain, the current availability of the public key No71 The review does not confirm their current status kangaroo You can't move it one at a time HASH160 without the necessary public point.

## What we have done and what not to repeat

Previous [report](<../runs/20261030-084332-8f0918/REPORT.md>) retains its force: 24 Precise weak generator models rejected; on selected artificial data of significant signal HASH160→No bits found in the six models. The review doesn't turn these findings into new discoveries or extend them to other generators.

Don't repeat the same 24 models, regular histograms, simple polynomials for all known keys and learning new settings on an already disclosed test. New runs should refer to a specific gap from this review, have a separate ID and their artifacts. The numerical results of the survey are available in JSON; Changes in interpretations should be made with a new dated record, keeping this document.
