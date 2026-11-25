> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-qcg-joint-extended-20261106/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-24 Repeat six full-size FF-task SEQ-23

User Request: Increase Memory and Time and Repeat All Six Full-Size Tests SEQ-23 It's a continuation of specific six limited attempts, not a new set of hypotheses or synthetic inputs.

## Immutable parts

Inputs full00..full05: four QCG and two random, same n, 135 states, 83 base-mask 134 transition; general a,b,c, squares, precise bit upper bounds and selection of a general shift representative encoding.py SEQ-23 without modification, it is checked SHA-256. Version and 35 file Z3 must coincide with SEQ-23.

For each attempt, the system is constructed in the same way Python-in code and in the same order check-sat her SMT-The body is compared byte to the saved request SEQ-23. Only two changes in resource parameters are allowed: timeout and max_memory. The new serialization is stored separately. Workflow inputs don't contain reference states or coefficients. Real keys, small keys NIA-Restrictions and Unexplained Full-Size NIA-The tasks are not included in this repetition.

## New budget

| Limitation | SEQ-23 | SEQ-24 |
|---|---:|---:|
| timeout inside Z3 | 60 s | 600 s |
| Parameter max_memory | 768 | 8192 |
| External limit of the entire workflow | 90 s | 660 s |
| External limit max(private, working set) | 1024 MiB | 8192 MiB |
| Simultaneously working solvers | 2 | 1 |

The choice of sequential queue is due to measured availability approximately 17 GiB physical memory 12.8 GiB commit headroom machine-training 32 GiB RAM. Before each launch, at least 10 GiB available physical memory and commit headroom; wait 120 c is fixed separately. If there are no resources, the input receives deferred_host_resources It's not a given attempt, and if you drop any of the two reserves, it's lower 2 GiB The working process stops with the status host_memory_pressure, off-limits 8 GiB.

The workflow is started directly by the basic Python, without venv-The guide, with the direction of the Z3 into PYTHONPATH And no visible window PID and memory on a separate basis 48-MiB Memory is checked once in a while 0.25 c, the process path and system backup are maintained once in a 5 c. queue updates are displayed once in a 30 (c) Completion only applies to its own PID workflow.

## Status and evidence

All six entries receive a separate attempt in the registered queue. SAT-Candidate is verified by independent integer recursion on all 135 conditions, initial masks and a!=0. For positive inputs, the general shift class and exact state are separately compared; uniqueness is not stated UNSAT A consensus error occurs on positive control because the known admissible evidence has already been verified in SEQ-23. UNSAT At random input, it is recorded as the answer of the solver, without a statement of independent certificate.

unknown/timeout, memory, External stops, system memory pressure, errors and delayed inputs vary. The restriction does not turn into a negative response UNSAT. Success in synthetics alone does not allow conclusions about real-world data.

## Safety and audit

All new code, controller, auditor, plan, inputs, reference and environment snapshot are recorded before launches in the MANIFEST.json. Historical 11186 files including 250 file SEQ-23) persist SHA-256/mtime; tested 1792 previous dependencies and 35 file Z3. General README/RESULTS Update only after completion, narrowly and with a backup and verification of no competitive change.

New ones are kept.smt2, hashes of previous requests, PID, stage/Search, resource track, answers or reasons to stop checkpoint It's the solver's internal memory; it's a re-search from the beginning SEQ-23 And their statuses remain historical, and the result is a separate table of how all six of the previous constraints match the new responses.
