> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-qcg-compact-extended-20261106/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-26 six QCG-tasks: ff.preprocess=false, 600 c 8 GiB

Date: 06.11.2026. Repeat six saved full-size synthetic tasks with precise strategy SEQ-25 resources SEQ-24.

## Outcome

Status: **{'unknown': 6}**. Positive recovery: **0/4**; The true classes of shift are found: 0/4. There is no final answer left **6/6**. Peaks of the OS in running processes: **265.7–277.8 MiB**. Bodies of mathematical queries coincided with SEQ-24 on 6/6 entrances.

All original masks, exact boundaries of hidden bits and links between monomes are preserved/Memory restriction does not mean that the model is incompatible; the real keys were not verified; the synthetic positive witnesses available to the auditor were not passed on to the solver.

## Protocol

One process at a time, full00..full05, seed solver 0. Parameters API: timeout=600000 Ms max_memory=8192 MiB, ff.preprocess=false. External boundaries are fully consistent SEQ-24: 660 c on the trial, 8 GiB maximum working/private; survey 0.25 c, track 5 c. At least before launch 10 GiB free-spirited commit-memory, emergency reserve 2 GiB. PLAN.json - an artifact of the initial study (`PLAN.json`; outside the picture), [PROTOCOL.md](<PROTOCOL.md>).

Four QCG-The input and two random controls are taken unchanged from the previous series 83 position (No1–70, №75–135 stepwise 5), 82 informative masks, amount 3767 famous minor bits, 135 states, 134 square z=s², 134 transition a≠0 and gauge. 17497 field variables, 17659 The omissions are not compressed; the squares do not become independent unknowns.

Every day check The launches are a repeat of the data previously studied, not a new independent sample.

## Results on entrances

| Input / type | Check, s | Peak OS, MiB | Answer | Reason | Native checks | BV fallback |
|---|---:|---:|---|---|---:|---:|
| full00 / qcg | 600.08 | 269.1 | unknown | timeout | 30 | 0 |
| full01 / qcg | 600.10 | 272.6 | unknown | timeout | 32 | 0 |
| full02 / qcg | 600.08 | 269.3 | unknown | timeout | 30 | 0 |
| full03 / qcg | 600.08 | 265.7 | unknown | timeout | 27 | 0 |
| full04 / null | 600.09 | 271.7 | unknown | timeout | 30 | 0 |
| full05 / null | 600.09 | 277.8 | unknown | timeout | 33 | 0 |

Time of the whole turn: **3641.94 s** (60.70 mins check It does not include building, saving a request and completing a process high-water working-set/pagefile Selective current peaks are stored separately, and a slight outside boundary exceedance due to a discrete survey, if any, refers to actual spending, not an increase in the authorized budget.

## Comparison with previous series

V SEQ-24 Initial preprocessing brought all six tasks to an external limit 8 GiB roughly 93–99 from the general time. SEQ-25 Preserve the intermediate equations by setting ff.preprocess=false: into 120-The second run of the peaks 186–193 MiB, all the answers unknown/timeout. The current series checks the extension to 600 c at the previous limit 8 GiB.

Here, the exact request is additionally saved and the equality of the old body is checked check, But the buffers of internal libraries selected during serialization can affect the peak relative to the SEQ-25. So the difference in small peaks between these series is not attributed solely to search duration/early 8-GiB Limitations are determined by the actual statuses above.

The number of native checks and conflicts -- watching the solver work, not the number of bits recovered, not the percentage of completed searches, not estimating perspective on a single timeout. Successful memory retention does not prove practical solvability. CLOSURE.json - an artifact of the initial study (`CLOSURE.json`; outside the image) relates each previous open case to the current outcome.

## Correctness check

Builder and installed Z3 preserved SHA-256: Z3 5.3.3.0, committee 430d19e697e2ec9bad79ff210d41b4a7a5fcfa3e. Re-used vetted in the SEQ-25 30/30 Small answers and eight closed substitutions; no new mathematical transformations were introduced. The auditor checks all positive witnesses, masks, resource settings, query bodies and if available SAT - coefficients found/states of straight integer arithmetic.

Audit: **11857 file**, **1792 former dependencies**, **35 file Z3**, 735 The historical series has not been changed. AUDIT.json - an artifact of the initial study (`AUDIT.json`; outside the picture), RESULTS.json - an artifact of the initial study (`RESULTS.json`; outside the picture), INPUT_MAP.json - an artifact of the initial study (`INPUT_MAP.json`; outside the picture.

## Conservation and repetition

In every runs/fullXX located query.smt2, SOLVER_OPTIONS.json, MODEL.json, track MEMORY.jsonl, phases stdout/stderr, The answer is, or the reason for the external stop query.smt2 identically SEQ-24, parameter max_memory and ff.preprocess run through Python API, Not unsupported global directives SMT-LIB. An inspection of the export version prior to the first launch revealed this difference; the variant and the fix are retained in preflight_failed and EXPORT_CORRECTION.json - an artifact of the initial study (`EXPORT_CORRECTION.json`The formulas and allowed resources did not change during the correction.

Use the task to reproduce replay.py catalogue runs/fullXX: he reads the mandatory SOLVER_OPTIONS.json apply Solver.set. Himself replay.py Set internal constraints; external constraints; 8 GiB/660 provides run.py. Launching one query.smt2 without JSON/API-It doesn't mimic the strategy that we've studied. Old output catalogs are protected from overwriting checkpoint No search.
