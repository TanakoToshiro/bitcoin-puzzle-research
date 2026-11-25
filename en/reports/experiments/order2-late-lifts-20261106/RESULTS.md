> English machine translation of the [Russian source](<../../../../ru/reports/experiments/order2-late-lifts-20261106/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# O2-L01 - stages

6 November 2026. The full results and limitations are below.

## controls

Retained: the result is an artifact of the original study (`stages/controls.json`; outside the picture. 98784 affine maps modulo7 and33 fullsize generic controls passed; Jordan and alias controls checked.

## old_cases

Retained: the result is an artifact of the original study (`stages/old_cases.json`; outside the picture. 

## new_cases

Retained: the result is an artifact of the original study (`stages/new_cases.json`; outside the picture. 

## Pair comparison and valuation

Same ones SMT-inputs - an artifact of the original study (`PAIRED_SMT.json`; outside the picture), search of classes - an artifact of the initial study (`BASELINE_COMPARISON.json`; outside the image), the real value without a search is an artifact of the original study (`REAL_COST_ONLY.json`; outside the picture.

<!-- O2-L01-FINAL -->

# O2-L01 Recovery for late states

6 November 2026, Europe/Moscow. Continuation O2-Q01 and O2-S01. **We have a working finite algorithm with a significant reduction in brute force on synthetic problems SMT It's now fully resolved in its budget, but for the present256-The bit module stays around2^542 Candidates: A Practical Search Puzzle And there's no new real bit yet.**

## Algorithm and new refinement

1. Removing a general shift relative to the unknown s135: x_i=(s_i−s135) mod p, x135=0. For every mask x_i two known residues corresponding to the transfer through p. No senior part s135 It's not supposed to be famous.
2. We're just going through the older parts x115,x120,x125,x130. These four values together with zero x135 set five full states on the grid5. And there is no difference between them **Algebraically excluded coefficients A,B,C** a rarefied recursion.
3. Discard candidates for the remaining observations on the grid5. Then we take the exact root of the fifth power of the transition matrix and restore the normal step, the whole series and the class of the general shift.
4. Independent interval projector O2-Q01 Returns all shifts that are compatible with all83 Predictions are combined, not selected one convenient answer.

**For the present n stepping5 definitely.** n mod5=2, therefore gcd(5,n*(n²−1))=1. Sufficient indicator of the group of reversible affinity transformations F_n² — E=n*(n²−1). If H - a thinned transition, its only fifth root H^e, wherein5e=1 mod E. This eliminates the previous general danger aliasing It's just for this module and this model modulo101 from O2-ID01 remains true, but to n It wasn't a mistake; now the scope of applicability has been clarified.

The root is taken in coordinates()x_(i+5),x_i,1), It's not misread as companion-This is a statement about the matrix of the hypothetical generator; circumscribed observations by themselves do not yet reveal it. [Evidence](<MATH.md>).

The zero determinant is not declared a contradiction. For the modules in question, order is not lost when thinning5; These chains are covered by a separate full branch of the first order and constant values. All corresponding second-order coefficients are stored in families11/31/61 They do not satisfy the single root condition; this algorithm is not claimed for them.

## Verified results

All **18** past-entries modulo7/17 (full, all)83 Masks, only late masks) exactly matched the full sets of five O2-Q01. The predictions and the degenerate solutions coincided, and on the smallest tasks, the new method is often slower than the previous one because of additional reconstructions.

Ten new non-degenerate synthetic inputs have been completely solved. Solver received INPUT; The true parameters were checked after the search, and each answer contains the true class and the prediction, and the completeness also relies on mathematical branching and an accurate comparison with the old exhaustive standard; one hit in the entirety truth It is not considered proof of completeness.

| Input | Four component candidates | Root reconstructions after filter | Classes | Remains No71 | Wall, s |
|---|---:|---:|---:|---|---:|
| p37-new0 | 58,482 | 1,650 | 1 | [0] | 0.879 |
| p37-new1 | 61,560 | 1,985 | 1 | [0] | 1.046 |
| p67-new0 | 78,608 | 323 | 1 | [1] | 0.237 |
| p67-new1 | 78,608 | 312 | 1 | [0] | 0.205 |
| p127-new0 | 1,048,576 | 4,035 | 1 | [1] | 2.948 |
| p127-new1 | 1,015,808 | 4,138 | 1 | [0] | 2.850 |
| p257-new0 | 1,048,576 | 14 | 1 | [2] | 0.284 |
| p257-new1 | 1,048,576 | 16 | 1 | [1] | 0.296 |
| p523-new0 | 9,060,480 | 5 | 1 | [2] | 1.826 |
| p523-new1 | 8,923,200 | 4 | 1 | [3] | 1.660 |

For37/67/127 target-width1bit, for257/523 —2bat. **These are artificial tasks, not predictions of the present71.** All83 observations are used as a separate limitation, holdout The time difference between modules is not monotonous: the rounding of widths and the density of candidates after the filter change the number of expensive reconstructions wall-ten new cases 12.230(c) without prior controls, pair comparisons and audits.

Module65537 by the same rule2^38=274,877,906,944 combinations of four climbs and4,295,032,832 First-order combinations **never launched**: predetermined10It's an estimate of value, not a negative result, not proof that it can't be solved.

## Same entrances where I stayed SMT

In a separate comparison, unaltered INPUT O2-S01 for127/257. Both of them are accurate SMT-coded5000There's a lot of answers here.

| Input O2-S01 | Wall s tracemalloc, s | Classes | Five | Remains No71 |
|---|---:|---:|---:|---|
| p127-new0 | 42.353 | 1 | 1 | [0] |
| p127-new1 | 25.542 | 1 | 1 | [1] |
| p257-new0 | 0.774 | 1 | 1 | [3] |
| p257-new1 | 1.147 | 2 | 2 | [1] |

In the last example, two different models yield one two-bit residue, which demonstrates the ability to predict a target projection without the uniqueness of the entire model at a given synthetic input127 The algorithm is over, but its time is longer than the previous short one SMT-Budget: This is not a statement that SMT I would never have found the answer on a longer launch.

## Comparable Measurement of Speed and Memory

Memory tracking slows down markedly Python-So the raw times of the main series are not divided into the instrumented times of the former solver. There are two additional measurements with tracemalloc at **methodologies**, uniformly INPUT; There were a lot of decisions that coincided.

| Input | New method wall, s | Complete class chores wall, s | The attitude is old/new | A new memory/old, MiB |
|---|---:|---:|---:|---:|
| p37-new0 | 7.189 | 5.300 | 0.74× | 9.83 / 3.57 |
| p67-new0 | 1.632 | 57.037 | 34.95× | 11.10 / 3.98 |

Nana67 gain approximately35× posture wall, on37 The new algorithm loses. This is a comparison of two specific implementations and includes a record checkpoint; The ratio of the time of calculation of blocks is separately stored in FAIR_TIMING.json - an artifact of the initial study (`FAIR_TIMING.json`; outside the image. Memory - traceable discharge Python/NumPy, partial RSS. The new method uses more memory. The speed on toy modules can't be transferred to the computer256beat.

## The full cost of the present task

From the scan already checked83 Only the number of permissible senior parts is calculated **without listing real candidates**. Widths of115/120/125/130 equal114/119/124/129With two leftovers per position, that's about **2^542** The first-order branch has approximately2^512 Exact integers and input: artifact of the original study`REAL_COST_ONLY.json`; outside the picture.

To compare the domains of this conditional model, the five absolute late states give approximately2^660 Combinations, the old search for classes - approximately2^1024. Reduced to2^542 Filtration reduces the number of reconstructions of matrices, but its input deckartes domain is still listed by this algorithm/The absence of true recursion has not been established, and no probability of its truth is derived from these dimensions.

## Control, preservation and further border

Root control's gone all over98,784 reversible affinity transformations modulo7 and33 previous full-length synthetic chains Jordan, First order, constant and sheer ambiguity modulo11 The full-length controls get five full states -- that's a reconstruction check, not a recovery256-Blindly beat the older parts.

An independent audit uses a different3×3-arithmetic, checks 270 reconstructions, 245 families, 473 Continuous blocks with hash chains and all18 The old complete sets constant/first_order entrances modulo17 It is a complete independent process (respectively)1392 and19 Continuation after the finished branch and repeat of the completed launch saved blocks 3,891 unchanged files O2-Q01. AUDIT.json - an artifact of the initial study (`AUDIT.json`; outside the picture.

The next exact task is **reduce the four unknown older parts before their Cartesian enumeration**, For example, to derive additional verifiable exclusion conditions from the already reduced thinned recursion; this is not yet a direction of development, not a ready win SMT O2-S01 or launch2^542 There are no grounds for candidates.

Code, entrances, families, checkpoint, Intermediate conclusions and protocols are stored here. [README](<README.md>)numerical data - an artifact of the initial study (`NUMERIC_TABLE.csv`; outside the picture), [journal](<JOURNAL.md>). The pairing error (no copied module) was logged and corrected prior to the calculation; it was not a negative result. All major passes running are complete; one expensive domain stopped before launch at cost; no background searches. The general research journal is supplemented with a separate entry.
