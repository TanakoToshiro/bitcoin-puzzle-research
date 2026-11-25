> English machine translation of the [Russian source](<../../../../ru/reports/experiments/order2-joint-shift-20261106/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# O2-J01 Intermediate results

6 November 2026. General shift filter and accurate calculation.

## controls

The saved result is an artifact of the original study (`stages/controls.json`; outside the picture. 200 exact count / prefix generator tests match independent all-shift enumeration.

## cases

The saved result is an artifact of the original study (`stages/cases.json`; outside the picture. 

## benchmark

The saved result is an artifact of the original study (`stages/benchmark.json`; outside the picture. 

## cost

The saved result is an artifact of the original study (`stages/cost.json`; outside the picture. 

<!-- O2-J01-FINAL -->

# O2-J01 Early cut-off by general shift

6 November 2026, Europe/Moscow. Continuation O2-L01. **We've done the exact cut-off before we build fours, and we've proven a closed formula for their number34 The previous entries kept the full answers, and the four paired tests were shortened1.22–80.77However, for real masks, the input domain decreases only by about a fraction of the size3.2time2^542 before2^540.322. Real states or bits Puzzle Not received.**

## What is added to the previous algorithm

V O2-L01 each x_i=(s_i−s135) mod p It had two residues, and the four positions were initially combined independently, which created unnecessary combinations: all the options selected must allow for the same s135.

With non-zero width and odd p remainder x_i It sets the transfer, it puts an upper or lower boundary on the t=s135, wherein t is fixed progression R+q*2^K. The new algorithm supports the crossing of these boundaries on a three-part prefix x It is generated only from the permissible range; prohibited full fours are not built.

After recovery A,B,C same interval t Updated for each next observation on the grid5. Individual residues may have been appropriate, but the joint shift is missing — now this is detected before expensive extraction of the matrix root5. First-order branches/constant, step-root5 And the final projector is saved.

## The exact formula and its meaning

Let me M Number of permissible support points s135; N_i the number of absolutes s_i with an observable mask; G_i=2^(K−k_i). For the four positions, we shall designate P=prod N_i, Q=prod(N_i−G_i). Then, M>=2 the number of fours that allow at least one general shift is equal to

```
F = P+(M−1)*(P−Q).
```

Primary M=0 result0, upon M=1 resultP. It's an exact integer that can be computed without any state enumeration. Proof: each time there's a reference shift, each set of allowables is the same x_i has the same power N_i flatly G_i New elements; a fixed four can only enter at one shift interval, so each new appearance is counted exactly once. [Full proof and conditions](<MATH.md>).

Formula tested for200 They also looked at empty sets and contradictory masks, and they looked at all the fours and all the reference shifts34 The independent counting of the working inputs through explicit sets and their neighboring intersections coincided with the formula and counter of actually generated quadruples.

Formula counts **Mask compatibility with general shift**, It's not the number of recurrent models p It is impossible to declare it in this form: the transfer ceases to be uniquely determined from the remainder.

## Completeness of responses and results

Checked out34 unchanged INPUT O2-L01:18 baseline p7/p17,10 new p37..523,4 pair-inlet127/257 and2 The families of parameters, the progression of shifts, the number of models and the predictions were completely identical. EXPECTED nontransmitted solver; It was only used after the search.

| Input | Former domain fours | Post-filter generated | Reconstructions of the matrix | Classes | Remains No71 |
|---|---:|---:|---:|---:|---|
| p127-new0 | 1,048,576 | 289,201 | 4,035 → 1 | 1 | [1] |
| p257-new0 | 1,048,576 | 289,201 | 14 → 1 | 1 | [2] |
| p37-new0 | 58,482 | 11,496 | 1,650 → 1 | 1 | [0] |
| p523-new0 | 9,060,480 | 2,559,456 | 5 → 1 | 1 | [2] |
| paired-p257-new1 | 1,081,344 | 289,201 | 38 → 3 | 2 | [1] |
| degen-constant | 6,561 | 781 | 1,736 → 66 | 434 | [1] |

Throughout the series, including recurring hypotheses at different inputs, the number of input combinations decreased with each other **26,686,100 before 7,322,969**, a reconstructions of the matrix - c **46,493 before 308**. These are different metrics: one reduces the number of quadruples that you create, the other reduces the subsequent expensive work, and you can't multiply them and declare them as a total reduction in key space.

All advanced cases have been completely covered0–2; the formal unambiguity of the0It doesn't carry any bits of information83 observations are used as a separate limitation, holdout No new conclusions are made about the probability of the generator in this series.

## Couple time and memory

For four fixed equals INPUT The two projects were re-launched in separate benchmark-catalogue tracemalloc Both of them; it's a predefined control measurement, and all the complete answers matched.

| Input | O2-L01 wall, s | New wall, s | The attitude is old/new | Old memory/new, MiB |
|---|---:|---:|---:|---:|
| p127-new0 | 22.363 | 0.467 | 47.90× | 11.27 / 1.84 |
| p257-new0 | 0.548 | 0.451 | 1.22× | 11.07 / 3.60 |
| p37-new0 | 5.926 | 0.073 | 80.77× | 9.83 / 0.59 |
| p523-new0 | 2.590 | 1.769 | 1.46× | 11.12 / 4.05 |

Wall include checkpoints; The calculation time of the blocks is separately stored in benchmark - an artifact of the initial study (`stages/benchmark.json`; outside the image. Memory is trackable Python/NumPy-discharge RSS. Tracemalloc It affects absolute times and especially the Python-part of the reconstruction; therefore, large acceleration factors are not carried over to cryptographic operations or to the present256-At the entrances where the old filter already left few reconstructions, the gain is much less.

## What does this mean for a real module?

Only the exact input was calculated F, No listing of actual candidates.

- before the general shift: approximately2^542;
- after the general shift: approximately2^540.321928;
- abbreviation3.200000once,1.678072domain bit.

This is consistent with the leading member of the formula: when tight grids F≈5*prod N_i, instead16*prod N_i The independent two remainders of four positions. **The exponential barrier remains.** The first-order branch still has about2^512 Improvements to late inspection reduce the number of reconstructions, but are applied after the selection of four and do not cancel the entry brute.

For the old one synthetic p65537:2^38 →2^36.310657, roughly3.225098The exact numbers and inputs are an artifact of the original study`stages/cost.json`; outside the picture.

The condition of one general shift for the four selected masks has now been processed precisely: further strengthening only the same criterion will not remove the remaining permissible fours **nonlinear conditions of recursion itself** Possible conditions from additional late observations still require a separate algorithm and verification; no valid exponential reduction is claimed here.

## Audit and preservation

An independent audit has verified 606 blocks and their continuous coverage, 322 families, 379 extreme representatives,33 full-length synthetic evidence of general shift and3470 unchanged files O2-L01. The continuation after the finished branch and the immutability of completed blocks are checked. AUDIT.json - an artifact of the initial study (`AUDIT.json`; outside the picture.

First attempt benchmark I stopped searching because of the old code name solver.py. The old implementation was placed under the original name in a separate runtime, We checked its byte match; the main code and the completed stages remained unchanged ERRORS.log, correction RESUME_ADAPTER.json. It is not a negative scientific result.

[README](<README.md>) Contains active commands; CSV - an artifact of the initial study (`NUMERIC_TABLE.csv`; outside the picture) and machine summary - an artifact of the original study (`NUMERIC_REPORT.json`; outside the image) allows you to reassemble the report without searching. RESULTS.md It saves intermediate records, the general log is supplemented with a new entry. All running passes are complete; there are no background tasks.
