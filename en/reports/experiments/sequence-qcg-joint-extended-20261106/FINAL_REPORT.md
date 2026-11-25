> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-qcg-joint-extended-20261106/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-24 - six repetitions SEQ-23 resourced

Date: 06.11.2026. **All six full-length synthetic tasks requested were repeated. No positive recovery was received; resource stops did not exclude the quadratic model.** New statuses: external_memory_limit: 6. The real keys weren't checked.

## What's increased

| Parameter | A previous attempt SEQ-23 | New repeat SEQ-24 |
|---|---:|---:|
| Time check-sat | 60 s | 600 s |
| Parameter Z3 max_memory | 768 | 8192 |
| External limit of the process | 90 s | 660 s |
| External limit of memory | 1 GiB | 8 GiB |
| Parallel solvers | 2 | 1 |

The sequential queue allowed for a larger budget to be allocated to one task while maintaining system reserve 10 GiB available physical memory and commit headroom. The controller also checked the lower reserve 2 GiB, separate from the process limit max_memory The external monitor and the external monitor are different mechanisms; the result is determined by the actually activated limiter.

## Same mathematical problems

Repeated full00..full05: four chains with a true quadratic transition and two random inputs from SEQ-23. Module, export order, 135 states, 83 source masks, all 134 transitional a,b,c, The connections of squares and the selection of a representative of the general shift are preserved.

An unmodified builder is used SEQ-23 same version Z3. For **6/6** new challenges SMT-The body coincides byte with the previous query saved, including the end of the lines. In the full query, only two resource directives have changed 17497 variable 17659 No higher bits or true coefficients were transmitted to workflows.

It is a re-search from the beginning, not a continuation of the internal state Z3: checkpoint SEQ-23 There was no minor technical revision of the inspection CRLF executed before fixing the new code and launches; origin is described in PREPARATION.md.

## Results for each entry

| Input | Type | Time of the process, with | Maximum measured memory, GiB | New result |
|---|---|---:|---:|---|
| full00 | QCG | 98.695 | 8.123 | External limit 8 GiB |
| full01 | QCG | 92.634 | 8.033 | External limit 8 GiB |
| full02 | QCG | 93.768 | 8.041 | External limit 8 GiB |
| full03 | QCG | 94.406 | 8.039 | External limit 8 GiB |
| full04 | Random | 97.077 | 8.036 | External limit 8 GiB |
| full05 | Random | 99.057 | 8.032 | External limit 8 GiB |

Total consecutive queue time: **575.666037 s**. The sum of time of work processes: 575.636590 c. Previous memory threshold 1 GiB exceeded 6/6 It's a measured process consumption; it's not an estimate of enough memory to make a complete decision.

Proven Admissible Solutions at Positive Inputs: 0/4; coincidences with the general shift reference class: 0/4. Verified SAT at random entrances: 0/2. All answers or reasons for non-response are stored separately QCG One mask at a time.

A small excess of the external threshold, if present in the table, reflects the discreteness of monitoring 0.25 c Process time includes preparation and serialization; limit 600 (c) is called check-sat. Internal statistics are available only for attempts in which Z3 have returned the response; after a forced stop, they may be absent.

## Accounting for completion and open issues

All six records SEQ-23 Related to new attempts at CLOSURE.json - an artifact of the initial study (`CLOSURE.json`; outside the picture. Launch completed 6/6; Without a final response, the decision-maker remained **6/6**. Instructions COMPLETE This refers to the completion of a registered queue and audit, not to proof of the absence of roots in limited cases.

All the old files SEQ-23, including the previous six memory-limit Nine minor constraints, kept unchanged NIA and six unlaunched full-size NIA-No inputs were restarted: the user requested a repeat of six full-size inputs FF-Trying.

## Verification and reproducibility

The audit confirmed the byte coincidence of all six mathematical problems, the invariability of the builder, launch parameters and resource tracks (see below)123 For the four positive inputs, valid source chains and general shift representatives are retested; this is correctness control, not restoration.

Save it SHA-256 and mtime 11186 files of previous series, including all 250 file SEQ-23. Checked out 1792 previous dependencies and 35 file Z3. Workers PID directly belonging to the base Python; separate control 48 MiB Confirmed the memory monitor.

Code, inputs, benchmark and plan are recorded before launch; reports and results are stored separately. RESULTS.json - an artifact of the initial study (`RESULTS.json`; outside the picture), AUDIT.json - an artifact of the initial study (`AUDIT.json`; outside the picture), [README.md](<README.md>), [PROTOCOL.md](<PROTOCOL.md>)In runs/full*/ There are exact requests, PID, Stages, memory tracks, output and final statuses. You can use these inputs in a new directory for the next replay; stored internal statuses checkpoint No search.

This experience tests the increase in the budget of a specific accurate FF-It doesn't rule out other nonlinear algorithms, it doesn't establish the absence of a quadratic connection, and it doesn't give you a new real key or bit.
