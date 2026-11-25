> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-posterior-20261030/NOTES.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E1c Intermediate conclusions

## 2026-10-30 Checking the key without a wallet

On the question of the user, the stored values of the key No71. 3486 records 172 different meanings; addresses compressed/uncompressed They're independently computed by two implementations. No matches. This is a test of specific candidates, not an exception to the entire family MT. Importing into a wallet adds nothing to comparing the received address with the published address of the task. Even the matching of the key does not establish the uniqueness of the internal state`address-audit/RESULT.json`; outside the picture.

## 2026-10-30 Transition from Existence to Probability

For 12 The previous certificates give an exact uniform conditional distribution No71 uniformly prior It's non-zero. Each key corresponds exactly to 2^16100 So choosing a random compatible state in these circuits doesn't give you an advantage. This conclusion doesn't automatically apply to an unknown mechanism seed creator. [Proof and sources of rank](<EXACT_UNIFORM.md>).

For unknown rejections, simple averaging of stories is wrong: in a small example, it gives 1/2 instead 1/3. Built importance-sampling pilot-weight 2^(g+m-rank). Exhaustive control of all 1023 Non-zero states of the small generator checked 2816 systems 176 And stories, in addition 8192 Random sentences restored artificial bias: assessment 0,248950 precisely 0,225806. Difference 0,023143 meets a pre-selected control boundary 0,05; This is the control of implementation, not the accuracy of future estimates MT.

Prior to the launch fixation, positive control is strengthened: instead of degenerate probability 0 So we've selected an artificial case with both possible tags. We didn't use the real data for the selection smoke-The control was not a scientific run, and then the code and protocol were recorded in the `20261030-124415-78192a38`.

## 2026-10-30 historical API continuation

All 12 Synthetic systems are compared with the present Python 2.7.9/3.4.2, including the full sequence 135 the number of failures and the number of failures after the first proposal stationary `--max-new 1`; the continuation misses this one checkpoint. Acceptance will separately check its hash and change time.

The pilot's job is to determine the signal or the limit of applicability of the method, even if all the stories in the sample give a probability 1/2, This does not prove the uniformity of the mixture in all unknown histories. ESS It only assesses the observed weights and does not exclude rare heavy stories.

## 2026-10-30 The synthetic part is complete

All 12 Synthetic kits completed to the actual proposal-For four grades byte_range3 setup 16/16 The proposed stories are shared; ESS=16. For interval2 compatible stories 53, 54, 48, 52 from 64; ESS=41,94 / 54 / 47,08 / 50,28. For interval3 compatible 46, 33, 36, 40 from 64; ESS=22,26 / 26,67 / 27 / 24,35. Different weights and incompatible histories are found, but complete freedom is maintained in all compatible branches 70 target bits.

Separate analysis of genuine synthetic stories also yielded dimensionality to the goal 70. Hence, even knowledge of these particular stories would not restore the No71 This is the result of four random states API, It wasn't a universal theorem about all stories: true stories weren't added to the estimate, they weren't used to adjust them, they went to pre-designated real sets; volumes and parameters didn't change.

## 2026-10-30 - the limit of coverage of random histories is found

A detailed comparison of the weights of the true story with sentences reinforced the limitation of the previous conclusion interval3-synthetic-0 log2 importance-The weight of a true story is equal 32, maximum 3: difference 2^29. Woo interval3-synthetic-1 — 21 against 2, idiom 2^19; at synthetic-2 — 5 against 2. That's the weight after dividing proposal-probability, not the probabilities of individual histories d=70.

Consequence: Independent geometrical sentences do not provide validated coverage of the conditional distribution of histories ESS It may look acceptable and not detect a large weight lost, so all pilot scores remain diagnostic50% In the sample, it doesn't go up to a full mixture statement. The scientific parameters haven't changed; the actual sets that have already been assigned are brought to an end for reproducible diagnostics, not for a claim for extracted bits 12 schemes without refusals from this problem does not depend.

## 2026-10-30 — E1c completed: 20261030-124415-78192a38

Completely executed pilot: 1728 stories, 1254 compatible, 0 It's not the full dimension of the target; true synthetic stories are accounted for separately. Numerical scores are not a substitute for proof of coverage of all hidden stories log2 The weight of the true history and maximum proposal — 29 bit; it's a specifically identified limit to the reliability of a sentence checkpoints No recounting 597 Various old and new candidates tested; new matches 0.

[Outcome, limitations and continuation](<runs/20261030-124415-78192a38/CONCLUSION.md>).
