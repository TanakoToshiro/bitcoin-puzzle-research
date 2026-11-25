> English machine translation of the [Russian source](<../../../../ru/reports/status-reviews/readme-update-20261109/REVIEW.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/08-methodology-and-history.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Updating the overall README — 09.11.2026

Final reports read RNG64-01, eight-series O2, LSCREEN-01, SEQ-18/19, generality SEQ-20/21, SEQ-22–28 and saved results SEQ-29. The summary relies on local artifacts, not new network search or the launch of solvers README preserved README_BEFORE_UPDATE.md - an artifact of the initial study (`README_BEFORE_UPDATE.md`; outside the picture.

## What has changed meaningfully

### RNG64-01: new final negative test

[Report](<../../experiments/prng64-state-20261105/FINAL_REPORT.md>): xorshift64* R12/L25/R27 multiplier 2685821657736338717 and xorshift128+ 23/17/26, 23/18/5. Four packs of four consecutive 64-bit-outs and 13 The distance between the beginnings of the keys 156 registered schemes.

All excluded 12 Necessary local inspections within the130/135: four reversible arithmetic contradictions for 64* eight UNSAT Z3 for 128+. It's not 156 independent SMT and not seed. The contradiction is not resolved by increasing only the key spacing. Other parameters, permutations, intrakey passes and transformations are not covered 128-The bit coding got a timeout on the first case; the main abbreviated method is complete UNSAT proof-checker It wasn't.

### Applicability of lattice: to distinguish between lack of sensitivity and absence of signal

[LSCREEN-01](<../lattice-applicability-20261105/REPORT.md>) thwart HG-The criterion of a single cube on nine panels, not the prohibition of the Möbius model.

[SEQ-18](<../../experiments/sequence-applicability-order2-20261105/FINAL_REPORT.md>) missed out 32 Second-order synthetic recursion: This detector is not eligible for new assessment Puzzle. [SEQ-19](<../../experiments/sequence-applicability-drift-20261105/FINAL_REPORT.md>) and [SEQ-20/21](<../../experiments/sequence-applicability-final-20261105/FINAL_REPORT.md>) found their special connections on synthetics with the original masks, but Puzzle The signal channels were not detected SEQ-21 The vector length channel didn't pass the tolerance; the polynomial channel passed. These are not strict exceptions to all hidden states.

### Second order: eight completed studies of the method

| Series | Result | Practical boundary |
|---|---|---|
| [O2-ID01](<../../experiments/order2-identifiability-20261105/FINAL_REPORT.md>) | Full-size classes of ambiguity and synthetic example of the same 83 masks with different remnants No71; low-end | Ambiguity of the absolute state does not always mean ambiguity of the goal; a known number of bits does not prove distinguishability |
| [O2-Q01](<../../experiments/order2-quotient-20261106/FINAL_REPORT.md>) | Accurate factorization of the total shift, interval projector of all permissible shifts; 31 Small class search completed | Search for unknown class remains orderly 2^1024; The projector is only cheap after the class assignment baseline modulo61 unfinished |
| [O2-S01](<../../experiments/order2-symbolic-20261106/FINAL_REPORT.md>) | Two precise SMT-codes; 28 Partial requests and two increased repetitions UNKNOWN | The imaginability of truth is tested separately by substitution; it is not restoration |
| [O2-L01](<../../experiments/order2-late-lifts-20261106/FINAL_REPORT.md>) | Enumeration of four late relative states, algebraic restoration of coefficients; single-digit fifth root of transition for the present n; The four old little ones were solved SMT-entrance | Appreciated input domain near 2^542. Question aliasing step5 presently n specified, but hidden states not received |
| [O2-J01](<../../experiments/order2-joint-shift-20261106/FINAL_REPORT.md>) | Precise early cut-off by general shift; 34 Previous responses retained | For real masks only 3.2×: 2^542 → 2^540.322. Big accelerations toy-Codes are not the same abbreviation of real search |
| [O2-N01](<../../experiments/order2-nonlinear-20261106/FINAL_REPORT.md>) | Square/The cubic conditions are accurate 24 full answer matched | A new way to get candidates slower 1.77–89.93×; remains approximately 2^398 triplet |
| [O2-C01](<../../experiments/order2-compact-joint-20261106/FINAL_REPORT.md>) | Three compact joint recordings without external brute force of threes; 12 full inspections completed | All 18 Two of them found one family, but they didn't prove complete |
| [O2-P01](<../../experiments/order2-polynomial-elimination-20261106/FINAL_REPORT.md>) | The polynomial exception solved six small partial problems, all of which were 10 Control tasks completed | Slower O2-J01 into 8.08–161.22×. A tight representation requires about 2^147 byte plus 2^398 prefix |

These degrees are the cost of specific ways of enumerating/I'm not going to show you the lower bounds for all attacks Puzzle It's not restored, it's not excluded 1–2 The target bit on the reduced module is not a recovery 70 bit-bit71. Among the tested small methods O2-J01 It's still cheaper; it's still impractical at its actual size.

### QCG: The long run ended with a memory restriction

SEQ-22–28 have already been partially listed in README; The exact collaborative model preserved the states, masks and connections of the monomes ff.preprocess It took away the early growth of memory fused reduction It has increased the speed of internal conflicts, but none of these metrics indicate recovered bits or percentage of global searches.

V SEQ-29 RUN.json - an artifact of the initial study (`../../experiments/sequence-qcg-fused-unlimited-20261106/RUN.json`; outside the picture) queue is complete **07.11.2026 into 14:50:37 MSC**. The six tasks were performed sequentially, the general wall 61880.924 s = **17.189 ?**. All six have external_memory_limit, Each process has reached a threshold 8 GiB roughly **2.665–3.030 ?**. These are four positive full-size synthetic inputs and two random ones; the answers are SAT/UNSAT Not received.

In this reconciliation, the RUN six OUTER, saved parameters, hashes of requests and byte coincidence of mathematical bodies with SEQ-24. Timer check It's been disabled, the memory limit is saved. RESULT.json There's no answer from the solver FINAL_REPORT/COMPLETE The series is also no: **completion of the queue is confirmed by saved records, scientific acceptance of the series is not declared completed**. Historical README This series only describes the start; it's not changed. There was no restart, no change in limits, no process control in this update.

## Verifiability of updates

CHECKS.json - an artifact of the initial study (`CHECKS.json`; outside the image) contains the result of checking the files listed by the nine COMPLETE series RNG64/O2, direct hash links of certificates SEQ-18–28 cross-check SEQ-29. Everything checked **12 051 file-writing 19 certificate**, gaps and discrepancies SHA-256 — **0**. This is not a complete re-audit of all the attached dependencies SEQ: For their compact certificates, directly specified RESULTS/AUDIT/FINAL_REPORT. INVENTORY.json - an artifact of the initial study (`INVENTORY.json`It captures the major reporting artifacts. It's a test of integrity and consistency, not a re-search, not a new independent mathematical audit of evidence.

From README Removed outdated suggestions to start already completed versions, open questions retained: original artifacts of the author, as yet unexplored food pathways, new mathematical constructs, unfinished solutions cuso/SEQ-17 full-size QCG. Experimental catalogues and checkpoints unchanged.
