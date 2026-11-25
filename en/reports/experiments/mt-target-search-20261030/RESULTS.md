> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-target-search-20261030/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E1g: Conditional search has become cheaper, but the practical purpose is not yet justified

Date: 2026-10-30. Input E1e: `20261030-150813-643fdd30`; E1d: `20261030-131459-93a3e1c9`; E5: `20261030-114903-5757a87d`.

**There are indeed algorithmic shortcuts in individual stored spaces. The best simple, memory-free example is No145: minors 32 bit allows you to move on to interval-DLP on 112 bits instead 144. But an alternative acceptable story is the same API It almost completely returns the original range. It's an unconfirmed shortening of the real key space.**

**Among the models without unknown failures stands out No155: exactly eight intervals of length `2^146` model `getrandbits(i), stride=2`There's a little bit of a conditional algorithmic payoff in terms of finding the No155. The practical advantage shown over the current search No71 Nope.** No new confirmed limitation of the present key has been obtained for any purpose in this study.

## What's covered

Read it all 6920 lineage E1e and 3080 lineage E1d, everything 78 confined affinity spaces E1d, equations 436 Unrejected Limited Projections E1e: 206 lower and 230 Comparison with the top 256 catalogue E5. It's a combination of branch and number, not 436 There are four really limited keys, four rejected sequels E1e excluded from its ranking; their parent spaces E1d Not declared rejected.

All fixed bits, base points of affinity spaces, directions, equations, and certificate numbers are stored in SPACES.json - an artifact of the initial study (`results/SPACES.json`Structural overview: GEOMETRY.csv - an artifact of the initial study (`results/GEOMETRY.csv`; outside the picture); some former spaces: E1D_GEOMETRY.json - an artifact of the initial study (`results/E1D_GEOMETRY.json`The scan took about a minute 4.76 c. without construction or re-exclusion MT-for the six main purposes independently XOR-checked all 115 the relevant certificates of reference; the inspection took about 3.39 c. The hashes of the original matrices coincided with DONE.json. Details of verification - an artifact of the original study (`results/VERIFICATION.json`; outside the picture.

Ratings recorded **before** synthetic tests: [RANKING.md](<RANKING.md>)his SHA-256 fixed PRE_TEST.json - an artifact of the initial study (`synthetic/PRE_TEST.json`; out of the picture wall time It's all separate stages, without coding or reading literature. COSTS.json - an artifact of the initial study (`results/COSTS.json`; outside the picture), [TABLES.md](<TABLES.md>).

## №145: Precise transformation of a public task

Branch `api-order3-na-s1-sparse`the same projection as in E1d. Coordination `r=(k−1) mod 2^144`, not the least significant bits k. All bits fixed 0…31:

`r mod 2^32 = c = 0x067ca909`.

Let me `r=c+2^32*z`, `0≤z<2^112`Because c It does not consist of units, the addition 1 He does not speak for the youngest, nor does he turn around `2^144`That's why **whole-numbered**, then modulo n:

`k = 2^144 + c + 1 + 2^32*z`.

For a published point Q known `K0=2^144+c+1`, `H=2^32 G` and `Q0=Q−K0 G`We get it `Q0=zH`You can do it instead H use G multiply Q0 backwards `2^32` modulo n. V TRANSFORM145.json - an artifact of the initial study (`results/TRANSFORM145.json`; outside the picture) retained this Q, both transformed points, H and all five of the remaining XOR-conditionality z. **The private key for this conversion has not been used or calculated.**

After a fixed word, there are five independent connections, so the exact set has `2^107` For a simple, memory-free algorithm, we use the interval that contains it `2^112`And we check five connections after we find a scalar. It's not an algorithm with automatically assigned complexity `2^53.5`.

Preparation-- O(144) additions/Doubles and a small permanent memory. Interval-kangaroo heuristically O(`2^56`) group operations instead of O(`2^72`) for reference number145: **scale-up `2^16`**. The selected control option stores 16 There is a probability of failure at the finite limit; no result rejects the branch BSGS approximately `2^56` records; such a real record; BSGS not proposed to be launched.General assessments interval-DLP memory difference BSGS/kangaroo set forth [Galbraith–Ruprai](https://www.math.auckland.ac.nz/~sgal018/RamCiren.pdf).

## №140: When the meeting in the middle is really applicable

`api-interval3-na-s2-sparse`width 139, d=98; 27 fixed bits and 14 independent XOR. Fixed positions: 32,34–39,41–43,45–50,52–57,59–61,63,84. Values and exact relationships - in SPACES.json. It's not 98-In canonical parameterization, there are related components of dimensions 12 and 6, The remaining parameters have non-overlapping single support; the independent junior free block has only two bits.

Components can be divided into groups by 49 parameter **non-overlapping**. If their masks S₁,S₂, ? base - affinity shift, then

`r = (base & ~(S₁|S₂)) + f(u) + g(v)`

It's like an integer, where f and g include appropriate bits base and XOR The non-intersection of support proves equality. XOR It's not replaced by addition at all. The separation masks are saved in VERIFICATION.json. The public point is compared `f(u)G` and `Q−(2^139+constant)G−g(v)G`.

It's a worker MITM: list `2^49`The dot formation is paid: pre-calculate the degrees of two G; stepwise Gray change each affected output bit with the appropriate addition/The repositioning of directions makes expensive changes rare COSTS.json; The average is close to one addition per element, plus preparation, table search and storage.

Straight table SEC33 + 7-bytecode **22.52 PB** No overheads; option C 8-byte index in the preliminary rating - 23.08 PB. This is an assessment of a specific implementation, **non-universal lower bound of memory**. In the table `2^28` records can be changed to the division 28+70; large-scale `2^70` listing/It's a scale that's comparable to normal interval-DLP №140 O(`2^69.5`) with a much smaller memory, without convincing practical victory.

The algorithms Gaudry–Schost For products of intervals, it is not automatically applicable to arbitrary XOR-map: appropriate geometry, walking and constant analysis, possible better memory-based method for these sets **unfaltered**; It's not implemented in this cycle. [Primary work](https://www.math.auckland.ac.nz/~sgal018/RamCiren.pdf).

## Other objectives and the price of assumptions

**№71, byte_range3-big-s1-sparse:** d=52, 18 XOR without fixed bits E5 No, fission 26+26 at the scalar level, but HASH160 It doesn't provide a group point for halves comparison `2^52` targeted checks, not `2^26`In E1d There was no such strong reduction: it appeared under the additional conditions of future refusals E1e, It's not because of new solutions.

**№73, order2-s1-geometric-b:** d=65, two-block `2^64`bits 0…63 and 65 free to go pre_increment block-start `0xf9·2^64` and `0xfb·2^64`And then the keys are added `2^72` and 1. The transfer at the end of the block is accounted for by the shift of the entire interval; the older fixed zeros exclude wrapping at the width 72. No point: until `2^65` HASH160-inspections, reduction in 128 once73 and 32 number of candidates relative to the number of71. The same d=65 number78,79,99,133 in this story, but the public spots for them in E5 No. There's only one stored compatible story for this configuration; it's extended to other stories **failed**, No proof of sustainability of reduction Python/API It is impossible to pass off as an alternative history of the same model.

**№155, getrandbits(i), stride=2:** Five limitations, d=149, There are no unknown rejections 147 fixed at zero; four others XOR They're tying the top byte of the residue together 146 The bit is independent, and the top byte can receive exactly **1,25,108,116,137,145,228,252**. Therefore, the valid keys are eight precise intervals `2^154 + h·2^146 + [0,2^146−1]`Full boundaries - artifact of the original study (`results/BLOCKS155.json`It costs eight small integer calculations to get a list; for each block, the known is shifted Q.

Simple bounded-kangaroo The eight blocks have a scale of up to `8·O(2^73)=O(2^76)` against O(`2^77`The wrong block requires a finite limit; the correct block depends on repeats. This is roughly a twofold reduction of the specified scale when checking all blocks, not a guaranteed time for a successful solution BSGS-The table can be reused between blocks: cost `m+8·2^146/m`memory m records; optimum around `2^74.5`It's still an unavailable memory d=149 There is no need for a free search `2^74.5`.

**Top Nos163 no192:** upon `fixed-forward-big-s1` №163 has d=155 instead 162; straight-line MITM 77+78 independent interval-DLP O(`2^81`At the No192 `fixed-forward-little-s1` d=158 instead 191, smashing 79+79, against O(`2^95.5`) The last gain relative to the task itself is great, but requires order `2^79` the record in the method shown; in absolute cost, it is not ahead of the selected lower goals192 The componentity and enumeration are stored in the general tables; there is no additional separate synthetic test for this purpose MT-Hypotheses remain assumptions.

## What Happened When Stories Combined

For the three leading conditional abbreviations, an already certified zero-alternative **similar** It's a new combination of conserved spaces, not a new one MT-Result to scalar filter No256: №71 -all `2^70`; №140 -all `2^139`; №145 -all `2^144` Shifting coordinates +1 It is a bijection and does not change power.

The border `k256<n` It's taken into account without assuming independence of purpose nullity s projection d every candidate has `2^(s−d)` If the filter has been removed I It can completely remove no more conditions `floor(I/2^(s−d))` Preserved exact candidates SCALAR_DOMAIN.json received:

- №71: Not a single completely remote candidate; everything `2^70` That's right.
- №140: remains at least `2^139−5205`Potential exceptions <`7.47·10^−39`.
- №145: remains at least `2^144−166562`, same upper share estimate.

Exact numbers and branches - artifact of the original study (`results/HISTORY_UNIONS.json`These statements refer to linear observations/guards A complete nonlinear collaborative system of all published public points was not solved here, and the presence of almost all candidates does not prove that any algorithmic acceleration is impossible, but excludes the preservation of the claimed small set as a complete coverage of these stories.

Adding other stories can only expand the unification, we don't claim full coverage of the stories API even for155 There is a standard model getrandbits(256) It's a full single projection, so it's not universally reduced either, and neither the size of the space nor the priority in the ranking was interpreted as a probability of the model being true.

## Synthetics with scalars closed from the algorithm

Structural analogue No145: W/L = 12/4,16/6,20/8,24/10; Three examples, five independent XOR This is a test of transformation and interval-DLP, **nonvalidation MT-generator and not literally truncated 144-bit-matrix**. Four more cases check boundaries and transfers/Two negatives are the wrong condition of the bit/For everyone: BSGS and kangaroo, baseline and reduced ranges.

All **72 launch** The following tests have been carried out: 64 positive results and 8 For each positive task, the returned key was matched with a validation code; negative results kangaroo They're not in themselves proof of the emptiness of the range BSGS It's the ultimate control public JSON; secretion verifier-The file was not opened by the algorithm. The full results are an artifact of the original study`results/SYNTHETIC.json`; outside the image), requests and answers - an artifact of the original study (`synthetic/`; outside the picture), [summary-table](<TABLES.md>).

Nana W=24,L=10 median kangaroo: **35778 → 1321** Preparation and verification, acceleration of operations **27.08×**; Python peak **5334 → 4952 byte**. BSGS: **7145 → 291** compounds, **4096 → 128** The observed scaling is consistent with the square root of the interval length; a small set does not prove asymptotic or success rate for the actual width. 89.93 c - the entire control stage with the start of individual processes. GPU Not used.

## Comparison with current No71 and decision to continue

Crash No71: `2^70` full range inspections, on average `2^69` at a uniform position and no repetitions. At the speed reported by the user 6.2 billion/with **3017 years** average 4090. Calculation - an artifact of the initial study (`results/BASELINE71.json`The speed was not measured again; it is not carried over to random EC-Walking, working with tables or listing limited sets `2^65` nominees73 near **94 years** at this optimistic transferable speed71 d=52 would be about 4.2 Average time, but the limitation is lost already in the considered unification of stories.

Different types of operations are compared separately:145 There is a real conditional algorithmic gain on group operations, but this is not an estimate of the time at which the 4090 And it's not a reason for an expensive launch155 scale `2^76` Group operations do not give a reasonable advantage over `2^69` Inspections of the medium-sized inspection No71. Woo MITM memory/References to it are an essential part of the price.

**The following justified direction - No155 as a small algorithmic stand for a general search across eight intervals with a common public point**, with a clear memory budget and comparisons to normal interval-DLP. It doesn't require you to guess the failure history until you find a substantially better method, the real search number155 Don't launch145 We need an independent way to eliminate zero-history or confirm the younger word; improvement kangaroo It doesn't solve the problem73 The next useful step is to expand compatible stories order2, before investing in the listing `2^65` The right points for the No145/155 The obstacle is not waiting for the future disclosure of the upper private keys.

It's too much GPU-Search and cross-key search didn't start. Completed MT-The matrices have not been recalculated, the old files have not been changed. New results and source code are stored in this separate folder. Further refinements should be added with a new dated record; numerical TABLES.md regather JSON without repeating the tests.
