> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-qcg-joint-extended-20261106/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-24 Extended repetition of the full-size SEQ-23

Repeat the same six FF-entrances with initial masks, with 8 GiB external memory and 600 s check-sat The line is consistent. [Protocol](<PROTOCOL.md>), [summary](<FINAL_REPORT.md>).

`encoding_seq23.py` It's a byte copy of the previous builder SMT-A body with a saved task before searching. Only two resource parameters change; old files don't change. New state Z3 Starts the search from the beginning checkpoint The old attempt doesn't exist.

## Post-completion verification

From the root of the project:

> Executable code/The commands are omitted in the documentary copy.


Add `--full-prior` re-check 11186 previous files and 1792 previous dependencies. They've already been verified in the final audit; routine verify Checks out the new series and 35 file Z3.

## Saved data

- `inputs/full*/` - formerly public INPUT.json and query-seq23.smt2; `INPUT_MAP.json` It connects their hashes to previous attempts.
- `CHECKER_TRUTH.json`, `reference/GAUGE_WITNESSES.json` The auditor’s standard; the workflow does not read them.
- `runs/full*/query.smt2`, `MODEL.json` A new task and verification of a match with the previous body.
- `runs/full*/PROCESS.json`, `START.json`, `CHECK_STARTED.json` — PID, parameters, beginning of construction/search.
- `runs/full*/MEMORY.jsonl`, `RESOURCE_WAIT.json`, `OUTER.json` Resource track, system reserve expectation, and final reason for completion.
- `RESULT.json` comes up on the answer Z3; At an external stop, the result is stored in OUTER.json. `ERROR.json`If it does, it contains a technical exception. stdout/stderr They are always available for running processes.
- `RESULTS.json`, `AUDIT.json`, `CLOSURE.json` Comparison of six cases, audit and list of remaining restrictions.
- `MANIFEST.json` coded/plan/entrances before launch; `ARTIFACTS.json` The final archive, including the reports.

Do not re-run the steps on top of the completed directory. Use a separate folder for the next increase in the limits and keep in touch with a particular previous record COMPLETE means the completion of the specified queue and report, not receiving a response for each limited case.
