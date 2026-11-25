> [Русский оригинал / Russian source](<../../../../ru/reports/experiments/prng64-elimination-width-20261113/FINAL_REPORT.md>) · [Language selection](<../../../../README.md>)

> Documentation copy, 2026-11-25. [Home](../../../README.md) · [Topic](../../../topics/02-prng-recovery.md) · [Series documents](INDEX.md)
> Historical plans are not launch instructions. Current findings are in the [latest summary](../../../docs/LATEST_RESULTS.md).

# RNG64 — constraint-graph width

13 November 2026. Twenty saved synthetic CMS formulas were checked for ten open cases, one formula from RNG64-04 and one from RNG64-05 per case. Every formula's hash matched its COMPLETE.json. The estimates use the composition of the constraints. Compatibility of observations was not evaluated.

Edges join variables appearing in the same constraint. The original graphs use the saved XOR constraints and disjunctions. In the second representation, long constraints are represented by chains of binary XOR and OR operations with intermediate variables.

The lower bound uses the largest original constraint and the minimum graph degree after successive contractions. The upper bound is the smaller width of two constructed orderings. The first chooses a minimum-degree vertex; the second minimizes the number of added edges among the 12 lowest-degree vertices. The bounds apply to these graph representations.

At width w, one dense table after elimination requires 2^w bits even with one bit per combination. Other tables and overhead are excluded from this memory estimate. A single such table fits w=38 in 32 GiB or w=36 in 8 GiB.

| Case | RNG64-04 original | RNG64-04 chains | RNG64-05 original | RNG64-05 chains |
|---|---:|---:|---:|---:|
| plus23-17-26-big-02 | 128–130 | 31–131 | 49–128 | 31–130 |
| plus23-17-26-big-03 | 128–130 | 31–130 | 49–129 | 29–129 |
| plus23-17-26-little-02 | 129–131 | 33–132 | 51–128 | 33–129 |
| plus23-17-26-little-03 | 128–130 | 34–129 | 52–127 | 33–127 |
| plus23-18-5-big-02 | 128–129 | 33–116 | 53–117 | 32–119 |
| plus23-18-5-big-03 | 128–129 | 33–116 | 53–117 | 31–116 |
| plus23-18-5-big-06 | 128–129 | 31–125 | 46–115 | 28–117 |
| plus23-18-5-little-02 | 128–130 | 36–118 | 54–117 | 35–117 |
| plus23-18-5-little-03 | 128–129 | 34–119 | 56–116 | 34–118 |
| plus23-18-5-little-06 | 128–129 | 47–129 | 62–127 | 44–127 |

The orderings found yielded widths of 115–131 for the original graphs and 116–132 for the chains. The smallest width, 115, was obtained for the original RNG64-05 formula plus23-18-5-big-06. A dense table under that ordering would require 2^112 bytes. No tables were constructed.

The lower bounds for the original graphs are 46–129. Therefore, for all twenty original graphs, even one dense table exceeds 32 GiB under any ordering. For the chain graphs, the lower bounds are 28–47 and exceed 38 in two cases. For the remaining eighteen, the bounds allow an ordering of width 38 or less to exist.

An independent set-based recomputation reproduced the minimum-degree ordering's width for all twenty original graphs. The main estimation took 7.89 s. [Results for all graphs](../../../evidence/prng64-elimination-width-20261113/RESULTS.json).

The estimation methods are described in [Bucket Elimination](https://ics.uci.edu/~csp/r48b.pdf) and [Contraction and Treewidth Lower Bounds](https://www.jgaa.info/index.php/jgaa/article/view/paper117).
