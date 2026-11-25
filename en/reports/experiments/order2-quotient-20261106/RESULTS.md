> English machine translation of the [Russian source](<../../../../ru/reports/experiments/order2-quotient-20261106/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# O2-Q01 - stage log

6 November 2026. Only synthetic checks, the real condition has not been restored.

## projection_controls

Stage saved: the machine result is an artifact of the initial study (`stages/projection_controls.json`; outside the picture. 500 The interval projections coincided with a complete search of shifts.

## resume_control

Stage saved: the machine result is an artifact of the initial study (`stages/resume_control.json`Post-block stop, continuation and restart completed launch verified.

## old_cases

Stage saved: the machine result is an artifact of the initial study (`stages/old_cases.json`; outside the picture. 

## larger_cases

Stage saved: the machine result is an artifact of the initial study (`stages/larger_cases.json`; outside the picture. 

## fullsize

Stage saved: the machine result is an artifact of the initial study (`stages/fullsize.json`; outside the picture. 33 given 256-The exact projection coincided with the previous evidence; the coefficients were not restored.

## old_integrity

Stage saved: the machine result is an artifact of the initial study (`stages/old_integrity.json`; outside the picture. 

<!-- O2-Q01-FINAL -->

# O2-Q01 Accurate class search and unification of forecasts71

6 November 2026, Europe/Moscow. Continuation O2-ID01. **Step complete: the algorithm is correct on the scaled-down problems that have been tested, and it really speeds them up modulo n Not yet, real recursion Puzzle Not restored or excluded; no real bits71 Not received.**

## Specific algorithm

Remove the overall shift and look for four coordinates `(a,b,d,c0)`where `d=s2−s1`, `c0=c−(1−a−b)*s1 mod p`It's equivalent `(a,b,d1,d2)` For homogeneous recursion of differences, the canonical chain begins with `x1=0,x2=d`; the initial states are equal `(x_i+t) mod p`The old masks on x They're not directly superimposed.

For a given class, an exact one is built **interval solver t**. Boundaries `p−x_i` Distribution of cases of transfer through p. In each interval, observations are reduced to the compatibility of comparisons `t = r_i−x_i+epsilon_i*p mod 2^k_i`The result is a final list of arithmetic progressions with number of elements and residue No71. Huge arrays of shifts are not listed O(m²) comparisons O(m) And when you combine all the classes that you find, you get a full set of predictions only after you've covered all the classes.

Separate NumPy-The author lists the classes for small p, It checks shifts through the widest possible observation and other masks, and it serves as a verifiable final search and acceleration test; scales it directly to the top n You can't. [Evidence and details](<MATH.md>), [launcher](<PROTOCOL.md>).

## Completeness check and new synthetic tasks

All **27** past-entries modulo7,11,17 They gave a perfect match between the full sets of A's and predictions with an independent old brute force, which includes ambiguous and degenerate answers, complete control observations, and late grid, and the new method was not limited to restoring a single true synthetic state.

New non-degenerate examples are given deterministically before the results are calculated. solver receives only the module and83 masks. Truth All four class searches have been completed:

| Input | Classes tested | Compatible classes | Five | Remains No71 | A new search, with | That's a lot of stuff / covering |
|---|---:|---:|---:|---|---:|---|
| p31-new0 | 893,730 | 1 | 1 | [0] | 2.149 | 17.185, 100% |
| p31-new1 | 893,730 | 2 | 2 | [0] | 2.749 | 15.678, 100% |
| p61-new0 | 13,618,860 | 1 | 1 | [0] | 41.791 | 60.026, 14.90% (limit) |
| p61-new1 | 13,618,860 | 1 | 1 | [0] | 34.525 | 60.023, 15.58% (limit) |

In these four tasks, the width of the goal **everything1bit**. V p31-new1 Compatible are different()a,b) full and s71=8,20, But their little bit is common. In the other new examples, the full five is unique83 The masks are used as restrictions, separate holdout It's not here. These results don't prove that we can predict70bit-bit71.

Nana modulo31 The acceleration of this implementation of the complete search was **5.70–8.00 once**, with exact matching of answers modulo61 In both cases, a direct search is interrupted by the staff limit60(c) its full independent comparison **unfinished**. It's the limit of the control method, not a contradiction of the model, not a negative result. Percentage means covering parametric fives; extrapolated time does not end up being measured.

Measured peak tracemalloc In four new searches, 3.00–3.60MiB; And it's a straight line 9.03–9.13MiB. These are traceable discharges **partial RSS**. New search time – the sum of block calculations, without file entry/output; y baseline - The whole challenge solver, It's about checking the answers, comparing specific implementations, not optimal algorithms, recursion update counters, shift candidates, comparisons, and exact times CSV - an artifact of the initial study (`NUMERIC_TABLE.csv`; outside the picture.

Totally31 basic class search covered 29,870,964 parametric classes with repetitions between inputs 83.908(c) Not included; baseline, Data generation, projection of found classes, auditing and file entry/conclusion.

## Full-length projection and negative controls

Nana33 formerly synthetic256-In the first few bits, the test code only transmitted the canonical class and observations, the projector independently reconstructed all the permissible shifts and exact sets of residues, all the power and projections matched the old evidence, including: selected-25 with two different residues33 call-out 0.023464c, completed 21474 comparisons; maximum 84 The entrance interval.

**This is a test for a given class, not its restoration256-bat masks.** The success of the cheap second step doesn't take away the cost of the first500 The arbitrary projections coincided with a direct enumeration of all shifts; 128 They're empty, they've tested full observations, zero widths, altered masks and transfer boundaries.

## The exact obstacle and the next choice

Factorization reduces the domain with `p^4*(p−1)` fives `p^3*(p−1)` For order secp256k1 it still is **roughly2^1024** Even a perfect interval projector doesn't make it feasible to enumerate them ceil(p/2^K) The interval version should be used on the current size, but the number of classes remains the same.

The following unsolved mathematical problem is formulated more precisely: to obtain the constraints directly on the `(a,b,d1,d2)` It's a trimmed observation without full class listing, with all cases of modular transfer remaining brute-force to this module, GPU-transferring this enumeration or repeating insensitive lattice SEQ-18 New families are not justified now/Other experiments were not started.

## Audit, continuation and artifacts

The independent audit has repeated 10479 Small solutions by scalar arithmetic and separately homogeneous recursion of differences 3663 blocks, SHA-256-chains, precise continuous domains and input bindings/Checked out171 Stop after one block, continuation and immutability of finished blocks checked; rerun of the general run used ready-made steps. AUDIT.json - an artifact of the initial study (`AUDIT.json`; outside the picture.

Checkpoint new quotient-Two limited solutions baseline-Passages retain status, coverage and time, but old control solver non-renewable checkpoint; We don't pass them off as full checks31 Passage complete, no background searches.

Commands and constraints [README](<README.md>)The machine stages stages - an artifact of the initial study (`stages`; outside the picture), entrances/complete solutions cases - an artifact of the initial study (`cases`; outside the picture), full-size projections - fullsize - an artifact of the initial study (`fullsize`; outside the picture), environment and hashes CODE_INPUTS.json - an artifact of the initial study (`CODE_INPUTS.json`This report is reassembled from the stored results without recalculating RESULTS.md and JOURNAL.md.
