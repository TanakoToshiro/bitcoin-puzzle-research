> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-applicability-order2-20261105/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-18 Small grids with initial masks: hidden second order

**Completed: the selected detector failed a second-order recursion sensitivity test Puzzle It's possible.** All 172 There are no timeouts and no errors 304.180 c (about) 5 minutes, and the calculations within worker — 57.705 c. the rest includes launch; Python and I/O. Maximum time of one worker with the start, 2.230 limit 5 s.

## What you checked

Hidden crossing `s[i+2]=a*s[i+1]+b*s[i]+c mod n`where n order secp256k1, It's got the initial lower mask and the actual number gaps b It's non-zero. 16 Controls have different roots of the characteristic polynomial F_n, still 16 These are two subfamilies of the same second-order model, all tested for a nondegenerate true quadratic annulator.

All saved 83 masked observations, but the lattice uses only the latest 13, №75–135 stepwise 5. From SEQ-04 Four lattices are taken unchanged 13×13 upon k=4,5,6,7. No known bits were added, no lattice expanded, no states recovered 688 minor reductions LLL.

Prior to launch, fixed [protocol](<PROTOCOL.md>), partitioning and inputs - an artifact of the original study (`MANIFEST.json`; outside the image), the detector code is an artifact of the original study (`probe.py`; outside the picture. Worker It only receives observations and ID. The total quadratic multiplier of the polynomials found and the normalized length of short strings are studied. [Conclusion of formulas](<MATH.md>).

## Results

| Monitoring | Entrances | True annulator discovered | Length threshold exceeded | Range S |
|---|---:|---:|---:|---|
| affine | 12 | 12 | 12 | 11.590012…12.451382 |
| split | 16 | 0 | 0 | -0.084014…0.269651 |
| irreducible | 16 | 0 | 0 | -0.089681…0.319414 |
| null | 128 | — | 0 | -0.141505…0.715588 |

In the line affine linear annulator: 12/12 Checking the detector's performance on a simpler connection, not restoring the keys split/irreducible the annulator is quadratic. The zero results of these lines are 32 knowingly related sequences.

All of them 32 No second-order controls found **No polynomial extracted is divided into true polynomials F**. So failure doesn't come down to requiring four supporting polynomials too much 128 The quadratic channel also did not work; this in itself is not the virtue of a test that misses positive cases.

Length threshold S = **0.7155876922** chosen as a maximum 64 The zero exceedance on this part is given by the method of selecting the threshold.

- the true quadratic multiplier: **0/16** positive against required ≥14/16; false-positive **0/64**;
- Exceeding the length threshold: **0/16** positive against required ≥14/16; false-positive **0/64**;
- Both predetermined accesses to real data are not passed.

**Puzzle never reappraised**, even on the bars saved SEQ-04. No new one p-value for real keys, claims of randomness or negative responses on the existence of a valid recursion.

## What does it change?

Cheap testing has led to the next computational step: there is no reason to apply the same second-order detector to a computer Puzzle The new version must first show sensitivity on the original masks, repeating the same test with a long timeout is meaningless: all attempts are completed; the reason for the result is not a time limit.

The difference between the first and second order has a structural cause: monic F condition F|H specifies the index coefficients n linearly F and n² It's an explanation of the extra complexity, not a proof that another algorithm is impossible 83 observations, other sizes/designs, modules, masks or export order.

Together with [LSCREEN-01](<../../status-reviews/lattice-applicability-20261105/REPORT.md>) There are two kinds of obstacles: the exact impossibility of strict HG-And the empirical insensitivity of these small lattices to the general second order is not a universal prohibition of the lattice approach.

## Verification and preservation

Arithmetic audit – an artifact of the initial study (`AUDIT.json`; off-picture: all 688 Matrices are independently constructed from observations; verified U·B=L, det(U)=±1, Extracted polynomials and BPDs through FLINT. The formula of the true F Independently recovered from complete synthetic states. Additional audit is an artifact of the original study`METRICS_AUDIT.json`; outside the image) separately recalculated polynomial pooling, candidate support, partition, threshold and both tolerances.

Rolled SHA-256 and mtime everyone 8598 former artifacts, SHA-256 1792 The old reports and results are unchanged 125.061 The scientific code and protocol were not changed after the fixation; the additional auditor and the reporting files were created separately.

Machine-readable results - an artifact of the original study (`RESULTS.json`; outside the picture), descriptive summary - an artifact of the original study (`DESCRIPTIVE.json`; outside the image), parameters and full states in TRUTH.json, All observations, matrices and logs are saved read-only check-up [README](<README.md>).
