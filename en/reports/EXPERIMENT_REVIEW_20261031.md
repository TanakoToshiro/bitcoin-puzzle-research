> English machine translation of the [Russian source](<../../ru/reports/EXPERIMENT_REVIEW_20261031.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../README.md>) · [Direction](<../topics/08-methodology-and-history.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../docs/LATEST_RESULTS.md>).

# Overview of the experiments performed - 31.10.2026

Structure reviewed 20 catalogues of experiments, general summary and history E1e–E1l, proof E1k and the relevant part audit.py; matched ACCEPTANCE.json All eight new directions. All eight are recording passed. It's a review of existing artifacts, not a new independent run of checks or a full audit of all the source codes. Experiments, key search, and matrix recounting were never launched REVIEW_SOURCES_20261031.json.

## Major change in previous proposals

The first three directions are NEXT_DIRECTIONS_20261030.md It has already been significantly studied: the top number161–256, Expansion of stories, verifiability of models. It's wrong to go back to them as uncompleted tasks. The narrower open questions that remain are listed below: the reports of previous launches and their "next steps" sections are historical snapshots; current status is determined by subsequent research.

There's no validated new private key or bit of a real unknown key from the results we've looked at. There are exact conditional constraints and reproducible algorithmic results on artificial problems. These are different advances.

## Eight additional destinations

| Series | What's done? | Conclusion for further work |
|---|---|---|
| [E1e, everything 256 address](<experiments/mt-targets256-20261030/CONCLUSION.md>) | 40 branches, 173 Unknown keys; links between bottom and top numbers. Four specific stories rejected by public point No161. | Links require unknown numerical values of top keys or a new way to use public points MT. |
| [E1f, public-point](<experiments/mt-public-lift-20261030/CONCLUSION.md>) | In four branches, the universal linear arithmetic ascent has been tested and the small linear parameterization of the correction is limited. | A simple transition from XOR The bits don't work to add the dots XOR-corrections give an algorithm on synthetics, but the necessary structure on these puzzle-No models found. |
| [E1g, choice of objectives and cost](<experiments/mt-target-search-20261030/RESULTS.md>) | Learned 436 limited E1e-projections, 78 spaces E1d; allocated conditional numbers145 no155. | №145 allows for conditional transformation to 112-bit interval-DLP, №155 - eight length intervals 2^146. Alternative stories bring back the whole thing/almost the entire range of leading randrange-candidates. |
| [E1h, storytelling](<experiments/mt-order2-history-union-20261030/CONCLUSION.md>) | Another valid story of the same order2/stride1; fulfilled 462 condition Python 2.7.9. | For No73,78,79,99,133 former 65-The bit limits are not mandatory: each target has a full range again. It's not a statement of their joint independence. |
| [E1i, eight intervals](<experiments/mt-eight-intervals-20261030/CONCLUSION.md>) | General wild-walk-in tame, 168 clean measurement launches. | On the confirmatory synthetics 5,49× There's less additions to the full search that's been implemented, and the original pilot with the salt that's not strict enough is excluded and saved separately. |
| [E1j, independent implementation](<experiments/mt-eight-independent-20261031/CONCLUSION.md>) | C++/OpenSSL, 296 new artificial tasks, the length of intervals to 2^32; 296/296 decisions, 293 on the first try. | The synthetic algorithmic result is reproduced. On the confirmation, the average cost ratio is reproduced 5,66×; This is the unmeasured acceleration of this155 and no proof of reliability in the 2^146. |
| [E1k, testability](<experiments/mt-model-audit-20261031/RESULTS.md>) | Four schemes: rank of all 3767 The observed bits are complete, also with sufficient guard for256. | Any observed minor bits can be reproduced by the state. Holdout It doesn't predict the excluded balance. Alternatives allow full range No155. |
| [E1l, generalization](<experiments/mt-search-tuning-20261031/CONCLUSION.md>) | 24 teaching and 48 new test tasks; the choice of parameters is fixed before the test. | T=2μ I have improved the general method relatively T=4μ into 1,288/1,487 Only preparation of a real scale formally requires 2^75 It’s not easy to try; the real search is unfounded. |

V E1l Comparison with consecutive search is 7,798× and 5,272× It's two sizes, but a sequential implementation doesn't caches the preparation between the blocks baseline, Not a proof of winning relative to the optimal solver. Numbers E1i/E1j/E1l They are different comparisons and not multiplied.

## Why? E1k particularly

At random 19937-bit-state MT line-rank 3767 This means that any observational values have a prototype256 So, he raises the rank to one, and he retains that property 83 The published decisions are not a verification of the origin of these four models.

This does not mean that there are no limits on the state or all future outputs getrandbits(i), stride=2 projection155 has 149 free coordinates instead 154. But the close alternatives considered return all 154, So the choice of eight intervals depends on the unconfirmed choice of program seed Compatibility with all the nonlinear equations of the other published points E1k He doesn't decide.

## Status of earlier directions

- Initial cycle: 24 specific PRNG-Models rejected; confirmed signal HASH160 in the selected statistics/ML Nope.
- E1/E1b/E1c/E1d: linear spaces and distributions MT Probabilistic pilots of unknown stories do not prove the completeness of the mixture.
- E2/E2b: 2^32 integer seed for 120 specific Python-The schemes are checked; that is not all seed or all the programs.
- E3/E6H: Armory Reconstructed and joint XOR-Transitions are studied on small tasks; real chaincode Not received.
- E4/E5: chosen HASH160-neighborhoods did not give a confirmed advantage; public dots and signatures checked, repeats r Not in the selected signatures.
- E7/E8: specific Electrum MPK-candidate 48 specialty256 Rejected; published by the faithful MPK Not found in a limited search. Feedback Armory It is a time-out, not a denial.

These old results have been checked against the general summary and history; their computational acceptance has not been re-executed; current balance sheets, new solutions and external publications in this local review have not been updated.

## What is no longer offered as new

1. Expansion itself MT-analysis161–256 - accomplished E1e.
2. Simple line translation XOR-Public relations and the former parameterization of the minor amendment are covered E1f in four branches.
3. Finding more stories to remove the obligation of the same 65-abbreviations, a sufficient counterexample has already been obtained E1h.
4. Coverage holdout four-scheme E1k Its zero volume of prediction is proved immediately.
5. Independent repetition of the former Python-Search for eight intervals - completed E1j; The next question should be about a new property, not the same repetition.

## Really open sequels

For myself Puzzle: Independent basis for selecting a generation program/seed; a new family, like a historical MWC1616; final public hash-construction256. Completed experimental series of the last two types in the catalogs viewed are not found.

More difficult mathematical direction: to estimate the number of different **numerical** corrections and the possibility of their compact presentation, or to suggest another nonlinear way to use known points. E1f It does not provide a general lower bound for such algorithms. Fourier-You can't pass the rank as entropy for correction, and before long computations, you need a specific algorithm and positive control, then you need to estimate complexity.

Separate algorithmic research: reliability of walks to combine intervals, optimization of the schedule/caching baseline, The exact constants and probabilities of failure may be useful in itself, but it does not add to the evidence of belonging to this No155 selected intervals.

No new experiments on this document have been launched checkpoints unchanged.
