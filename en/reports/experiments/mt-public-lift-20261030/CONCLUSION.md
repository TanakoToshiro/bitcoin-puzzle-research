> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-public-lift-20261030/CONCLUSION.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E1f - Is it possible to use connections E1e Only on public places?

Completed 2026-10-30. Run `20261030-175549-2d8c4a6e`. [Teams](<README.md>), [journal](<NOTES.md>), [formulae](<DERIVATION.md>).

**For the studied method of lifting E1e No practical gain has been received.** This shows a working public algorithm for a really small one XOR-correction: it extracts the right bits without knowing the full top private key E1e Specifically, there is no simple arithmetic identity, and the residual dependencies found do not allow for a verified small linearly parameterized correction.

## What is checked on the ready data E1e

The outcome read E1e, everything 5566 saved by the selected equations, SMALL_UPPER_SETS.csv results E6H. Source MT-The matrices were not recalculated: the new computations were post-processing of the saved strings. Three models of the initial examples and one were selected pre_increment-It's a model 4 specific branches, not all 40 branch E1e. In each, everything is considered 173 unknown scalar and 101 A public point of view among them.

Bits are presented as affinity GF(2)-Then the full numerical scalars are arranged by character χ=(-1)^parity above F_n. The independence of the characters allows one rank to check **fixed-rate modulo n** equally Σ aᵢkᵢ=c, including all linear combinations of previous lines.

| Branch | Arithmetic rank | Minimum rank of correction of a pair of top points | Couple | Lower grade for the starting group |
|---|---:|---:|---|---:|
| fixed-reverse-big-s1 | 173/173 | 321 | 161,162 | 71,170,226: 432 |
| fixed-forward-big-s1 | 173/173 | 281 | 167,224 | 71,170,227: 356 |
| api-bits_i-na-s1-zero | 173/173 | 163 | 161,198 | 71,166,202: 334 |
| api-order3-na-s1-zero | 173/173 | 317 | 161,162 | 71,170,226: 426 |

Full rank means that the target point cannot be obtained by a universal fixed linear combination of the remaining points and G This does not prohibit the coefficients obtained by nonlinear analysis of specific points, nor does it prohibit individual specially selected subfamilies.

Checked out 20200 steam 20478 So a few points have global private characters, and they can't be reduced by adding other columns 63 For them, all the coefficients are precisely covered by the location of two direct abbreviations: the actual minimum ranks 458 and 461. Sets of four or more are cut off by a monotonous assessment, without listing all sets or states.

**Outcome of the audit:** any combination of two or more available public scalars in four selected families, the rank of linear parameterization correction is not less than 140. Minor amendment of ≤32 independent binary parameters, suitable for the selected algorithm, is excluded71 and any non-empty combination of available public scalars (separate lower grades of rank) 180, 144, 115 and 178 accordingly.

These numbers **are not the entropy of corrections or the lower bound for any algorithm**. A function of many parameters may have few values; for example, AND several bits have a high rank Fourier-We didn't prove the lower bound of the number of different numerical corrections 2^r appointments; the usual full MITM in two separate halves, the order 2^(r/2). For the arbitrary Walsh-Even this separability is not guaranteed in polynomials 70-bit-remain71 Not received.

Evidence and tables: [boundary](<POST_ANALYSIS_PROOF.md>), ARITHMETIC_AUDIT.csv - an artifact of the initial study (`runs/20261030-175549-2d8c4a6e/ARITHMETIC_AUDIT.csv`; outside the picture), `lift/*/ARITHMETIC_RANK.json`, `multi-bounds/`, `triple-arrangements/`, MULTI_BOUND_VERIFICATION.json - an artifact of the initial study (`runs/20261030-175549-2d8c4a6e/MULTI_BOUND_VERIFICATION.json`; outside the picture.

## XOR, masking pre_increment

`x XOR y = x+y−2(x AND y)` exact integer equality, also true modulo n. But xG,yG dot unknown (point unknown)x AND y)G. Dropping bits on shifting also leaves an unknown residue; it is not a point operation available for free.

For pre_increment used accurately `k=2^w+x+1−2^w·[x=2^w−1]`Overflow was not ignored: negative check made on a non-empty affinity slice with guaranteed zero indicator256 is limited internally 1..n−1. The identity of the whole family must also exist in such a slice; its absence from the cut is sufficient for this negative conclusion. The cut is not considered a new observation of real keys.

## A public algorithm that really works with a small correction

In positive control X=2^w+x, Y=2^w+(x XOR C), C - The famous mask with r The algorithm only gets one QX,QY,C and HASH160 He's calculating

`D = QX−QY+C G = 2(x AND C)G`

decides subset-sum posture r point-point 2^(j+1)G, Only the selected ones are restored r bits, from which the target point is built and checked HASH160. Others w−r The bits aren't transmitted to the algorithm, and they're not recovered/memory O(2^ceil(r/2)) For this particular model, the adjustments to the selected bits are straightforward: ranges are relatively small n.

18 case-by-case secp256k1 They have smaller ranges. Independent comparisons interval BSGS upper X direct search of the target HASH160. Baseline Selected in advance according to the leading worst grade, not by the success of a particular x. Both methods are measured; two repetitions do not give a statistically stable time benchmark. The main counter is addition calls, including doublings and a neutral element; non-trivial curve, doubling and hash operations are additionally given separately in CSV.

| w | r | MITM compounds, median | Baseline | Additions baseline, median | Peak Python MITM / baseline, byte |
|---:|---:|---:|---|---:|---:|
| 12 | 4 | 37 | independent_hash | 7.5 | 4407 / 3181 |
| 12 | 12 | 143.5 | independent_dlp | 130 | 10799 / 9605 |
| 16 | 8 | 70.5 | independent_hash | 83 | 6135 / 3181 |
| 16 | 16 | 444 | independent_dlp | 432 | 30903 / 29381 |
| 20 | 8 | 84 | independent_hash | 150 | 6399 / 3181 |
| 20 | 20 | 1940.5 | independent_dlp | 1894 | 134299 / 132449 |
| 24 | 12 | 151 | independent_hash | 651.5 | 11703 / 3245 |
| 28 | 16 | 408 | independent_dlp | 22073.5 | 31759 / 2.19059e+06 |
| 28 | 20 | 1356.5 | independent_dlp | 21898 | 134843 / 2.19069e+06 |

For example, w=28,r=20: 1512/1201 compounding 23880/19916 at BSGS, roughly 16-It's a multiple of transaction and memory gains, and it's the real result of a public algorithm that's positively controlled **non-acceleration for the present puzzle**. Little ones r Early matching of direct brute-force is sometimes faster; r=w There's no winning rate tracemalloc pertaining Python-discharge, not to all memory libsecp256k1.

## Control of mixed XOR-member

A more complex model has been tested Y=2^w+(x XOR ((x<<s) mod 2^w)). The amendment is now unknown, simple split It doesn’t work: you need to fix it s And then you do the exact bits MITM by group difference, with mandatory verification of candidates QX The coincidence of one amendment does not prove the correctness of the hidden values.

64 (b) the small and comprehensive control and 12 We've had some recent comparisons O(2^((w+s)/2)) plus collision checks, memory O(2^((w−s)/2)). Reduced memory is paid for by additional assignments x, So it doesn't implement the desired circumvention of its restoration BSGS figure w/2. A separate early match is sometimes beneficial in the number of transactions, but there is no improvement in the indicator.

| w | s | MITM compounds, median | BSGS compounds, median | Peak Python MITM / BSGS, byte |
|---:|---:|---:|---:|---:|
| 12 | 2 | 419.5 | 118.5 | 10832 / 9753 |
| 12 | 4 | 651.5 | 150.5 | 8381 / 9751 |
| 16 | 2 | 1636.5 | 461 | 24454 / 29532 |
| 16 | 4 | 1384.5 | 494.5 | 18241 / 29532 |
| 20 | 2 | 5121.5 | 1815.5 | 82690 / 132601 |
| 20 | 4 | 5299 | 1919.5 | 53867 / 132601 |

All operations, doublings, hashes, tables, time and memory: COMPARISON.csv - an artifact of the initial study (`runs/20261030-175549-2d8c4a6e/COMPARISON.csv`; outside the picture), SCALING.csv - an artifact of the initial study (`runs/20261030-175549-2d8c4a6e/SCALING.csv`; outside the picture) Additional control: [SEPARATOR_PROTOCOL.md](<SEPARATOR_PROTOCOL.md>)It's new XOR-scalar patterns, not chain repetition Armory E6H.

## What exactly is established and what remains open

1. Universal linear arithmetic rise with fixed coefficients modulo n For the selected four families, the exact rank is excluded.
2. The tested small amendment approach works on public points in positive controls; E1e No structure was found. Observed reductions 70→39, 70→2, 70→0 They do not provide a new algorithm for public points.
3. Joint restrictions can give you a win with a special structure E1e No target public point or new key received/No new generator refutation, nonlinear algorithms, multiple numerical value compression corrections, special subfamilies and other branches E1e They stay open.

## Verifiability

Independently vetted 115492 New bits given by exception with opposite order of lead bits, all four triangular rank evidence 173, private forms and all 20200 The list of classes of threes is checked 120000 Small field assignments. The algorithms that we're studying are run by separate processes with JSON The algorithms do not read the truth files or import the secret generator, and the current case is stored by the verification code after the processes are completed.

Admission: 26 the main control points, 286 Unchangeable files when repeated, 0 They're reproducing the results and the exact counters of the public algorithm 20 Source files, including four matrices E1e, preserved SHA-256 and the time of change. ACCEPTANCE.json - an artifact of the initial study (`runs/20261030-175549-2d8c4a6e/ACCEPTANCE.json`; outside the picture), INDEPENDENT_VERIFICATION.json - an artifact of the initial study (`runs/20261030-175549-2d8c4a6e/INDEPENDENT_VERIFICATION.json`; outside the picture), DEPENDENCIES.txt - an artifact of the initial study (`runs/20261030-175549-2d8c4a6e/DEPENDENCIES.txt`; outside the picture.

## Future experiments are not performed

1. Check the possibility of a low-power set **numerical** changes without removing its power from Fourier-You need a structured evaluation or an algorithm, not a state-by-state search.
2. Investigate nonlinear constraints at specific published points and special compatible subfamilies with independent win control.
3. Transfer the exact arithmetic audit to other branches E1e only under a new reasonable assumption; a simple increase in the number of points or the size of the former MITM It's not a new method.
