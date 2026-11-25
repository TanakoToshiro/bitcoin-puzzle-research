> [Русский оригинал / Russian source](<../../ru/docs/LATEST_RESULTS.md>) · [Language selection](<../../README.md>)

# Latest results

[Home](../README.md) · [Detailed overview](../reports/README.md)

The archive was prepared on 25 November 2026. The latest final reports found in the source research directory are dated 14 November. Four RNG64 series were added after the 13 November overview.

## 13–14 November: RNG64 variable elimination

| Series | Scope | Result |
|---|---|---|
| [Graph width](../reports/experiments/prng64-elimination-width-20261113/FINAL_REPORT.md) | 20 saved formulas for ten open cases, with original constraints and auxiliary-variable chains | The orders found have widths of 115–132. Full-state tables were not constructed; compatibility of real observations was not tested |
| [Initial pilot](../reports/experiments/prng64-elimination-pilot-20261113/FINAL_REPORT.md) | Two synthetic cases; four subsets containing 2–5 additional bits with a fixed anchor word | All combinations are compatible; 0% rejected |
| [25-variable limit](../reports/experiments/prng64-elimination-pilot-width25-20261113/FINAL_REPORT.md) | Five new subsets with 3–7 additional bits | All combinations are compatible; 0% rejected |
| [32-variable limit](../reports/experiments/prng64-elimination-pilot-width32-20261114/FINAL_REPORT.md) | Four new subsets with 4–9 additional bits | All combinations are compatible; 0% rejected |

The three pilots comprise 13 subset checks. For the two fixed synthetic anchor words, direct numerical execution found witnesses for every possible combination. This is neither full-state recovery nor a search on real Puzzle inputs. The ten open constructions remain open.

Graph-width lower bounds exceed the capacity of a single dense table in 32 GiB for all twenty original graphs. For the chain representations this is established for only two of twenty: the lower bounds for the remaining eighteen still allow a smaller width, but no suitable ordering was found. This barrier concerns dense tables in these representations, not SAT, sparse structures, or every possible algorithm.

In the graph report, width w refers to the table after elimination. The pilots' variable-count limit includes the variable being eliminated. These numbers are not directly comparable without adjusting the convention. Nine additional observed bits also do not mean that only nine unknown state bits remain.

[Selected machine-readable results](../evidence/README.md) · [Saved-hash verification](../metadata/latest-verification.json).

## 11–13 November: signatures and key positions

SIG-01 found no useful exact relations between nonce points and Puzzle points within its declared formula catalogue. Of the earlier 87 RFC6979 mismatches, 45 are explained by compatible low-R signing; the remaining 42 concern January 2015 spends and are not proven to belong to the author. Each of the 106 public keys without a known secret has only one message in the archive, which is insufficient for the tested multiple-signature methods. [Report](../reports/experiments/signature-point-relations-20261111/FINAL_REPORT.md).

Position tests initially covered 83 keys, then 73 after excluding puzzles 1–10, and 208 signatures. None of the four models produced a confirmed advantage. Specialized direct tests improved sensitivity to a particular artificial dependency, but did not confirm a signal in the archive. [Topic](../topics/06-key-position-statistics.md).

The sequentially expanded family reached 241 tests. In the latest global calibrations using 2047 datasets, the tested isolated extreme values of the new tests cannot reach p≤0.05; the corresponding synthetic controls have zero detection rates after global correction. This is a limitation of the method, not an exclusion of complex dependencies. Smaller families also produced no confirmed signal. [Latest report](../reports/experiments/key-range-position-coordinate-signature-triplets-20261113/FINAL_REPORT.md).

## What has not changed

The complete .NET search finished with no matches within its 16 schemes. The count of excluded extended RNG64 constructions remains 50/60. The author's program is unknown. There is no new private key, previously unknown bit, or practical search reduction.
