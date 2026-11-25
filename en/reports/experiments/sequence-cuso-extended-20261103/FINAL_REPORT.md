> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-cuso-extended-20261103/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-16 continuation cuso limitless

Launch `SEQ-16-b2d9cd644576`Outcome formed 2026-11-03T22:13:46.294625+00:00.

All accounted for **32 formerly limited recordings**: 16 Unaltered entrances, two modes cuso. Full recovery confirmed for **4 pair/entrance** on **2 different entrances**. These are synthetic controls; a new real key Puzzle Nope.

The main line contains 28 native-Attempts and four analytically closed recordings without new native-Additional attempts are accounted for separately.

**Completion of this series means completion of the registered limited launches and their audit; it does not mean that all the original small root problems have been solved or that all previous timeouts have received a mathematical answer.**

## Initial accounting 32 record

The categories below are mutually exclusive: successful continuation takes precedence over initial limitation. Raw statuses and all additional attempts are kept separately in the `RESULTS.json`.

| The result is a pair method/entrance | Number |
|---|---:|
| There is a computational limitation | 22 |
| HG It is impossible for all degrees at the initial box | 4 |
| proved the futility of the recursive branch achieved | 2 |
| complete chain restored | 4 |

No single category is evidence of the absence of an original hidden generator; in particular, a non-productive recursive branch certificate does not exclude later external call lattices.

| Saved entrance | optimal | graph |
|---|---|---|
| `seq09__positive_p13_h24_general` | `timeout`; `attempts`; no mathematical answer | `timeout`; `attempts`; no mathematical answer |
| `seq09__positive_p13_h24_inverse` | `timeout`; `attempts`; no mathematical answer | `timeout`; `attempts`; no mathematical answer |
| `seq11__null_p5_0` | `timeout`; `attempts`; no mathematical answer | `timeout`; `attempts`; no mathematical answer |
| `seq11__null_p5_1` | `timeout`; `attempts`; no mathematical answer | `timeout`; `memory_retry`; no mathematical answer |
| `seq11__original_p5_general` | Certificate for all degrees | Certificate for all degrees |
| `seq11__original_p5_inverse` | Certificate for all degrees | Certificate for all degrees |
| `seq11__positive_p5_h16_general` | branch-certification | `timeout`; `followup`; no mathematical answer |
| `seq11__positive_p5_h16_inverse` | branch-certification | `timeout`; `followup`; no mathematical answer |
| `seq11__positive_p5_h18_general` | `timeout`; `attempts`; no mathematical answer | `process_failure`; `attempts`; no mathematical answer |
| `seq11__positive_p5_h18_inverse` | `timeout`; `attempts`; no mathematical answer | `error`; `attempts`; no mathematical answer |
| `seq11__positive_p5_h20_general` | `timeout`; `attempts`; no mathematical answer | `error`; `attempts`; no mathematical answer |
| `seq11__positive_p5_h20_inverse` | `timeout`; `attempts`; no mathematical answer | `error`; `attempts`; no mathematical answer |
| `seq11__positive_p5_h24_general` | `timeout`; `attempts`; no mathematical answer | `process_failure`; `attempts`; no mathematical answer |
| `seq11__positive_p5_h24_inverse` | `timeout`; `attempts`; no mathematical answer | `process_failure`; `attempts`; no mathematical answer |
| `seq12__positive_p6_h20_general` | chain restored; 920.9 (c) `attempts` | chain restored; 1296.5 (c) `graph_v2` |
| `seq12__positive_p6_h20_inverse` | chain restored; 215.2 (c) `attempts` | chain restored; 1327.3 (c) `graph_v2` |

## What has been increased and changed

* V SEQ-15 was 180 seconds and size up 256. Starting budget SEQ-16 — 1800 seconds, size up 2048 and 8 GiB Address space for the process.
* For launches not yet started, a continuation is registered: 1800 seconds, size up 8192, 8 GiB two-stream native-It's a permitted ceiling, not a statement that the grid is the size of the library 8192 It was built or reduced.
* Two additional graph checks h16 got 3600 seconds, size up 8192, 8 GiB four native-stream, sequentially after the main queue.Protection stops the attempt with available memory below 2 GiB.
* For the last still active graph check of a random entrance, the period is extended to 3600 seconds from the initial start, without restarting LLL 2096. The second random graph input after the memory protection stops is repeated separately with the same hourly budget.
* The construction of the graph is accelerated by two precise changes: the search for an index is replaced by a dictionary with the same first entry, the edges are added by one ordered list 24 Count, criterion mincut, The weights and shifts selected did not change.
* Completed LLL/Gröbner's base was only reused when the inputs were exactly matched and the hashes were checked LLL does not retain the internal checkpoint; It's got its input matrix.
* V `followup/` and `priority_graph/` It's a separately tested variant that exits a proven non-productive recursion, and it changes the control of the algorithm, and it's clearly separate from the usual one cuso. V `attempts/` and `graph_v2/` This option is not included.

Plans, source, queue transfer and resource changes are listed in `EXECUTION_NOTE.md` and launch and sequel manifests. Files received SEQ-15 And earlier experiments have not been edited.

## Completed internal stages

| Series | Records | Completed reductions | They're the exact cache | Maximum completed size | Maximum size started |
|---|---:|---:|---:|---:|---:|
| `attempts` | 32 | 281 | 206 | 2048 | 2096 |
| `followup` | 3 | 19 | 9 | 1024 | 2096 |
| `priority_graph` | 1 | 0 | 0 | 0 | 2096 |
| `graph_v2` | 2 | 2 | 0 | 697 | 697 |
| `memory_retry` | 1 | 0 | 0 | 0 | 2096 |

This is a record of events from the saved logs, including exact reuse of the matrices LLL This does not mean that the entire automatic search is complete cuso. The dimensions include simple lattices of proven non-productive branches; the same size does not mean the same difficulty. Complete independent grate equality testing is declared separately for successful recovery. Data on each call and degree of the module `MEASUREMENTS.json`.

## Successful recovery

| Input | Regime / series | Time, with | Dimensions checked LLL | Compatible overall shifts |
|---|---|---:|---|---:|
| `seq12__positive_p6_h20_general` | optimal / `attempts` | 920.873 | 2–768 | 3291 |
| `seq12__positive_p6_h20_inverse` | optimal / `attempts` | 215.196 | 2–512 | 16030 |
| `seq12__positive_p6_h20_general` | graph / `graph_v2` | 1296.488 | 697 | 3291 |
| `seq12__positive_p6_h20_inverse` | graph / `graph_v2` | 1327.290 | 697 | 16030 |

From 2 rebuilt various entrances 2 They've been reconstituted by the same methods `../sequence-cuso-20261103/BASELINES.json`In particular, both SEQ-12 h20 have been restored to SEQ-14; This is confirmed by an independent cuso.

Successful launches independently verified 37 reductions: integer T·B=L and det(T)=±1. Strict HG-L1 boundary confirmed for 1195 whole relationships preserved; this is **not** The number of independent equations.

Each root is tested by the original polynomial and integer box. The nondegenerate fractional-linear transition has been restored 135 states and intervals of general shift compatible with all 83 The true synthetic response is only used after the solution and belongs to the reconstructed class. It's not necessarily the only absolute latent state.

Time is taken from the stored results. Some computation was done simultaneously, using precise caches; it's not an isolated benchmark for mode speed. Full time spent also includes unsuccessful and diagnostic attempts.

For an accepted current employee null0 beginning restored from heartbeat, (a) the extended period is controlled by UTC wall clock; Regular coordinators use the monotonic. Therefore, times are given as operational budget accounting without stating the exact comparative speed `CLOCK_OBSERVATION.json`.

Between UTC-marking and monotonic-There is an observed divergence in seconds: h16 graph squander UTC near 62 Budgets, just minutes 1800/3600 (c) refers to the clock of the appropriate coordinator; `seconds` Successful results are taken from worker. Both duration representations are retained in `MEASUREMENTS.json`The damp times were not corrected retroactively.

## Two precise obstacles

For reference p5-mask control I=(n,G) normalized ton,F) monotic F. The weight of the leading mono is not less n. F-adical decomposition proves that any non-zero integer combination of shifts from I^m weighted L1-standard n^m, anyhow m. Strict HG-Verification of maximum divisibility monomes enhances output to any permissible order of monomes for the same polynomial and box. This does not preclude the addition of other joint equations or the replacement of variables.

Four recordings (two) original p5 × two regimes) are taken into account by these certificates: additional native-They did not follow their path`native_run_executed=false`This is separately reflected in the initial results, without artificial timeouts.

In other cases, after one whole F carry out F=aG+nH, gcd(a,n)=1 and gcd(LC(F),n)=1. Then the recursive ideals are equalF,n^m), And the infinite idealF). In the selected native-shifting LM(F) There's only a multiplicity n^m: stringent HG-This certificate refers to a recursive call that has already been achieved h16 optimal. The observer of the late graph attempts did not perform any analytical stops`LIVE_TRAP_SUPERVISOR_COMPLETE.json`: stops=[]Separate branch-cutting variant recorded 11 Proven returns from unproductive recursion; these are not global negative responses.

Full evidence: `OBSTRUCTION_PROOFS.md`, `OBSTRUCTION_ORDER_EXTENSION.md`Integer certificates and independent verification of this Sage/ChainConverter The known existence of synthetic roots is consistent with these limited conclusions.

## Additional Attempts and Remaining Limitations

| Series | Input / regime | Raw status | Time, with |
|---|---|---|---:|
| `followup` | `seq11__positive_p5_h16_general` / graph | `timeout` | 3600.258 |
| `followup` | `seq11__positive_p5_h16_inverse` / graph | `timeout` | 3600.265 |
| `followup` | `seq11__positive_p5_h16_general` / optimal | `interrupted_for_memory_scheduling` | 2170.832 |
| `priority_graph` | `seq11__positive_p5_h16_inverse` / graph | `error` | 613.165 |
| `graph_v2` | `seq12__positive_p6_h20_general` / graph | `roots_returned` | 1296.488 |
| `graph_v2` | `seq12__positive_p6_h20_inverse` / graph | `roots_returned` | 1327.290 |
| `memory_retry` | `seq11__null_p5_1` / graph | `timeout` | 3600.232 |

Protecting the shared memory of the last two graph controls: `later_primary_worker_stopped_for_serial_retry`Threshold is available memory WSL below 1 GiB. When activated, it is maintained `MEMORY_STOP.json`and the stopped entrance shall be repeated separately in `memory_retry/` post-queue h16: 3600 c-size 8192, 8 GiB, four threads, one input at a time and protection of available memory 2 GiB. Such a resource restart is not considered proof of the absence of roots.

* SEQ-09 p13 In both modes, the limit has been reached again 1800 seconds in calculating the integer basis of Gröbner, until LLL. Diagnosing the same ideal over GF(n) s 2 GiB finished native-memory error, with 8 GiB - limit 300 It's not negative results, it's not a test of the grids, it's not the basis for automatic shift selection.
* First h16-graph-try 4 GiB native flatter reported `std::bad_alloc`; the wrapper then received `IndexError` idle stdout. Repeat the reduction of the saved matrix 2096 s 8 GiB stopped 455,46 The matrix is saved, the reduction is not complete.
* Additional optimal h16 general administratively suspended 2170,83 (c) for the release of memory, incomplete LLL size 1536. Prepared smaller reductions are preserved; h16 inverse optimal It didn't start in an extra queue with that cutoff native optimal records are taken into account and have certificates of the achieved recursive branch.
* Diagnostic FLINT-matrix reduction 1024 exhausted 180 It's not a replacement native flatter And it didn't make his cache.

For h18 inverse graph separately removed the extra unloading of all ribs and the retention of the temporary rib list 24 graphs and six stored bases 8 GiB finished 142,93 s MemoryError already inside native mincut igraph. She didn't do it LLL It wasn't put in the main line, so this memory optimization alone isn't enough `FAILURE_DIAGNOSES.json`.

Unfinished cases require a new reasonable step: p13 Effective calculation of the original ideal/automatic shifts; for large grids, sufficient memory and time native-For proven branches, it's a change in the solution path, not just an increase in their limits. These capabilities are not presented as validations in this report.

## Reproducibility and acceptance

Fixed source materials are used SEQ-15: cuso `fb2747d2105a8e48499bf10a3a717cf80c14d079`, flatter `d2b8026f29b4a69e987b15d4b240f8a5053275d3`, msolve `3672113ee2c696a2ac9c637636e0f7214f500ba1`; Sage 10.9. Total dependencies, native-The files and their hashes are stored in environmental manifestos API solver.

Convert 5981 post-file SHA-256 and the time of change, 1792 file Windows-dependencies, fixed sources and 13 native-files. `PROCESS_CHECK.json` It confirms the absence of abandoned experimental workers. `ACCEPTANCE.json`, `COMPLETE.json` and `ARTIFACTS.json` are created only after the completion of queues and audit `verify.py` performs the check without writing to a sealed folder.

Machine-readable results: `RESULTS.json`A complete list of previous records: `ATTEMPTS.json`; root check: `*_ROOT_AUDIT.json`Complete verification of successful launches: `*_SUCCESS_AUDIT.json`All the old ones timeout/error-files are saved even if a separate sequel is subsequently successful.
