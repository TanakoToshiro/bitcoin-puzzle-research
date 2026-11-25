> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-applicability-drift-20261105/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-19 Low-cost link test with linear index additive

**Sensitivity on the synthetic is confirmed; in real data, this test did not find a connection.** There is no strict exclusion of a model, new key or confirmed bit of an unsolved problem.

## What changed

Checked out `s[i+1]=a*s[i]+b*i+c mod n`, n order secp256k1. All the coefficients and the initial state are unknown to the detector. The second difference removes the linear part of the index and leaves a geometric relationship with the factor a^5/32. It is a special family with one unknown root after the transformation SEQ-18 For the general second order, it is not transferred to it. [Conclusion](<MATH.md>).

Masks and omissions are original 83 Observations are used only 13 latest, No75–135 stepwise 5. No known bits were added k=4,5,6,7 size **12×12**, No coefficients or full states of synthetics were transmitted worker.

[Protocol](<PROTOCOL.md>), code, auditor, inputs and partitions are recorded before the first reduction in MANIFEST.json - an artifact of the initial study (`MANIFEST.json`There was no selection of parameters based on results.

## Calibration

| The family | Completed | Found the true linear F | The multiplier channel worked | The brevity threshold is exceeded |
|---|---:|---:|---:|---:|
| drift | 32/32 | 32 | 32 | 32 |
| affine | 12/12 | 12 | 12 | 12 |
| quadratic | 8/8 | 8 | 8 | 8 |
| null | 128/128 | — | 0 | 0 |

`drift`: b!=0, a not 0/1, The nondegenerate second difference. `affine`: b=0, sanity. `quadratic`: special case a=1, b!=0. In the line null no true F; These are random full states with the same masks, not a pattern of origin Puzzle.

The threshold of brevity S - maximum 64 calibration randomly: **0.6269473354**. Zero excesses on calibration random are given by the method of selecting a threshold and are not an independent result.

On a separate inspection part of 16 drift and 64 null:

- Multipliers: True Discoveries **16/16**, false positives **0/64**; admission **passed**;
- brevity: positive excesses **16/16**, false positives **0/64**; admission **passed**;
- sanity: **12/12** minimum 10/12.

Admission requires a minimum 14/16 positive for each channel and, accordingly, 0/64 either <=1/64 Eight false ones a=1 The zero false positives observed do not prove a zero probability of error in the population.

## Puzzle

After fixing CALIBRATION.json Four new lattices have been completed for Puzzle. Channels that have passed clearance:

| Canal | Score | Random score >= real | Ranked p | Amendment 2 channel |
|---|---:|---:|---:|---:|
| relation | 0 | 128/128 | 1.0 | 1 |
| shortness | 0.1641289498 | 57/128 | 0.4496124031007752 | 0.8992248062015504 |

Multiplier candidates a supportive >=4 polynomials: **0**. All untreated polynomials and candidates are retained in outputs/R000.json.gz. Counters refer to communication candidates, not to proven admissible states.

The real data has already been studied many times; this verification does not create an independent dataset holdout. There was no restoration here s[1],b,c, check the compatibility of all 83 observation or prediction of an unsolved key p There is no probability of the model being true.


## Time and audit

Science launch: **323.876 s**, numeracy worker **43.092 s**; difference Python And I/O, synthetic timeouts **0**, other unfinished/fallacies **0**. Limit 5 (c) Input 1200 Statuses and results - artifact of the original study (art`RESULTS.json`; outside the picture), descriptive summary - an artifact of the original study (`DESCRIPTIVE.json`; outside the picture.

Independent audit – an artifact of the original research (in Russian)`AUDIT.json`; out of the picture) checked the matrices 724 ^ "Construction from observations, U·B=L, det(U)=±1, polynomials, all nuclei through FLINT, Full synthetic states are further verified with an independent closed formula; second difference error identity and error boundaries are tested; splitting and tolerances are recalculated separately.

Former archive (art**9144** file saved SHA-256 and mtime; folded **1792** Dependency file. Hashed audit takes over 134.563 c and not in scientific time. The source and criteria after fixation did not change [README](<README.md>).

## Boundary of withdrawal

The heuristic detector is tested on a sample of parameters specified by the protocol. The absence of a signal does not prove the absence of permissible hidden states and does not apply to other modules, masks, order, transitions or degenerate cases F and a not equivalent to full recovery s[1],b,c. This series measures the applicability of a small lattice detector to one explicitly defined bond.
