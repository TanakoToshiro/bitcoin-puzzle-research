> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-qcg-fused-extended-20261106/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-28 six QCG-tasks: fused reduction, 600 c 8 GiB

Date: 06.11.2026 (Moscow) Repeat all six saved full-size synthetic problems with settings SEQ-27 resources SEQ-26.

## Outcome

Status: **{'unknown': 6}**. Proven positive recovery: **0/4**; coincidences of the true class of shift: 0/4. There is no final answer left **6/6**. OS Peaks: **464.6–558.2 MiB**.

All the original masks, the exact boundaries of the hidden parts and the nonlinear connections of the monomes are preserved SEQ-24 on 6/6 The resource stop is not a negative response about the model. Real keys have not been verified; new real states/keyboard/This series doesn't set any bits.

## Protocol

full00..full05 sequentially, one process at a time Windows DLL Z3 5.3.3.0, committee 430d19e697e2ec9bad79ff210d41b4a7a5fcfa3e. random_seed=0; parameters Python API: timeout=600000 Ms max_memory=8192 MiB, **ff.preprocess=false, ff.fused_reduction=true**.

External restrictions: 660 c on the trial, 8 GiB maximum working/private. Poll 0.25 c, once-in-time 5 (c) The starting reserve for free physical and commit-memory 10 GiB; spare-room 2 GiB. The launch monitor coincides with the SEQ-26. PLAN.json - an artifact of the initial study (`PLAN.json`; outside the picture), [PROTOCOL.md](<PROTOCOL.md>), PREFLIGHT.json - an artifact of the initial study (`PREFLIGHT.json`; outside the picture.

Four positives QCG-The entrance and the two random controls were the same. 83 position: No1–70, №75–135 stepwise 5; 82 informative masks, 3767 The little bits we've seen 135 states, 134 square-link z=s², 134 transitional a,b,c, a≠0, Exact boundaries of representatives and former gauge. Every request: 17497 variables, 17659 The omissions are not compressed; the squares do not become independent unknowns.

Every search is launched from the beginning checkpoint No; re-entries are not a new independent sample/status is available only to the auditor and is not transferred worker.

## Results

| Input / type | Check, s | Peak OS, MiB | Answer | Reason | Native checks | Native conflicts | BV fallback |
|---|---:|---:|---|---|---:|---:|---:|
| full00 / qcg | 600.07 | 523.1 | unknown | timeout | 155 | 154 | 0 |
| full01 / qcg | 600.11 | 515.5 | unknown | timeout | 147 | 146 | 0 |
| full02 / qcg | 600.06 | 464.6 | unknown | timeout | 106 | 105 | 0 |
| full03 / qcg | 600.06 | 552.4 | unknown | timeout | 176 | 175 | 0 |
| full04 / null | 600.06 | 549.6 | unknown | timeout | 176 | 175 | 0 |
| full05 / null | 600.06 | 558.2 | unknown | timeout | 177 | 176 | 0 |

Time of turn: **3649.57 s** (60.83 min). Check wall/CPU Recorded immediately after return check, until statistics are preserved; construction and recording SMT not included check. Peak OS - maximum high-water working-set/pagefile And then you have the meter from the stored meter, including the query preparation, and you keep the sample peaks of the current memory separately.

## Comparison

V SEQ-27 setup fused bal 146 native conflicts against 32 for six pairs 120-second checks at the limit 2 GiB; all the answers unknown/timeout. This series checks the extension of the optimized mode to 600 s/8 GiB.

Below is a historical comparison with the former 600-second-start SEQ-26, whose ff.preprocess=false, but fused defaulted false. This is not a new simultaneous pair experiment; machine loading conditions and launch points vary.

| Input | Conflicts SEQ-26 | Conflicts SEQ-28 | Speed ratios |
|---|---:|---:|---:|
| full00 | 29 | 154 | 5.31× |
| full01 | 31 | 146 | 4.71× |
| full02 | 29 | 105 | 3.62× |
| full03 | 26 | 175 | 6.73× |
| full04 | 29 | 175 | 6.03× |
| full05 | 32 | 176 | 5.50× |

Native conflict means the current branch is rejected, not the proven incompatibility of the entire input. Counters don't measure the number of bits recovered, the percentage of global search completed, or the time remaining. Even a big win on these counters doesn't prove a practical full recovery.

## Correctness check

Encoder SEQ-23 and 35 file Z3 Unchanged.Reused 40/40 small standards and 8/8 separate checks of scalar reduction from SEQ-27; No new mathematical transformations. Before the main queue, we checked that both settings were loaded through the same queue replay-Any code found SAT is checked by straight integer arithmetic; for positive inputs, the shift class is further compared.

Z3 It can return multiple entries of a single statistical key SEQ-27, All index records are retained RAW_STATISTICS.json The old, erroneous way of getting only the first record is not used. WORKER_CHANGES.patch - an artifact of the initial study (`WORKER_CHANGES.patch`; outside the picture) shows changes in the shell SEQ-26: parameters from the plan, raw/summary statistics and CPU-time.

Audit confirmed **20526 file** s SHA-256/mtime, **1792 former dependencies**, **35 file Z3**, 734 memory-counting 6 The old experiments haven't changed. AUDIT.json - an artifact of the initial study (`AUDIT.json`; outside the picture), RESULTS.json - an artifact of the initial study (`RESULTS.json`; outside the picture), COMPARISON.json - an artifact of the initial study (`COMPARISON.json`; outside the picture.

## Open-ended tasks and repetition

CLOSURE.json - an artifact of the initial study (`CLOSURE.json`; outside the picture) associates each new outcome with SEQ-26 and SEQ-27. V runs/fullXX preserved query.smt2, SOLVER_OPTIONS.json, MODEL.json, START/CHECK_STARTED, RAW_STATISTICS.json, response or cause of external stop, memory track, phase, stdout/stderr. Inner checkpoint Nope.

Repeating a Save Query: Research `.venv/Scripts/python.exe -B replay.py <каталог-runs/fullXX>`Mandatory solver-local settings are read from SOLVER_OPTIONS.json; single-handed query.smt2 They don't reproduce the regime they studied without them replay.py It sets the internal limits 8 GiB/660 (c) and the sequence provides run.py; It protects the previous weekend catalogues from overwriting, and for a new queue, you need a new catalogue of the experiment.
