> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-qcg-joint-20261106/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-23 a joint nonlinear solution QCG

Consolidated: [FINAL_REPORT.md](<FINAL_REPORT.md>)Formulas and accuracy: [MATH.md](<MATH.md>)Initial plan: [PROTOCOL.md](<PROTOCOL.md>)clarification of tolerance and correction of monitoring to the main series: [AMENDMENT_01.md](<AMENDMENT_01.md>).

The series contains only synthetics QCG-chains and two random full-length inputs use exactly the original 83 masks 135 The workflow only gets INPUT.json; The full benchmark is available to the auditor separately, and it's running a precise collaborative solver, not a single-player test HG-ideal.

## Verification of preserved archives

From the root of the project in PowerShell:

> Executable code/The commands are omitted in the documentary copy.


Additional verification of the clarification manifesto without searching:

> Executable code/The commands are omitted in the documentary copy.


For re-reading SHA-256/mtime past 10936 file 1792 Add previous dependencies `--full-prior` The full audit has already been completed in the final audit. 35 file Z3 routinely `verify`.

## Files and stages

- `cases/*/INPUT.json` - solver inputs, without generator parameters and closed states; `CHECKER_TRUTH.json` - a separate standard.
- `encoding.py` - Unaltered exact NIA/FF systems; `worker.py` - construction.smt2 single check-sat, without reading the standard.
- `TOY_RUN.json`, `reference/*.json`, `VALIDATION_FF.json` Initial small attempts, complete independent brute force and separate tolerance of encodings. NIA I did not pass the admission to the main stage.
- `MONITOR_TEST.json`, `run_main.py` Proven launch of the baseline directly Python Controlling the Real Worker PID/The original monitor from experiment.py It is preserved for history; its small measurements of memory are excluded from the results.
- `FULL_FF_RUN.json`, `cases/full*/ff/OUTER.json` - six major launches and external restrictions RESULT.json It's not created. OUTER.json This is the final record of the restriction.
- `cases/*/*/query.smt2`, `MODEL.json`, `START.json`, `stdout.log`, `stderr.log` - exact task, control hashes, dimensions and output PROCESS.json.
- `GAUGE_WITNESSES.json` Reference representatives of the overall shift to check the system after a search; not workflow inputs.
- `OPEN_CASES.json` Separate consideration of small restrictions NIA, main limitations FF and unexplained NIA-These are new recordings SEQ-23, change the old SEQ-16/17.
- `RESULTS.json`, `AUDIT.json` Scientific Statuses and Independent Audit. `MANIFEST.json` and `AMENDMENT_MANIFEST.json` code/data/Plan before the relevant launches; `ARTIFACTS.json` The final archive of all files.

Don't start the stages `setup`, `toy`, `full`, `run`, `validate`, `finish` or `seal` If you continue with a specific limited request, use the new directory and save the link/hash query.smt2; new limits, PID, Memory and response are written separately checkpoint In the memory of the solver, a high-limit repeat will start the search anew, and the old constraint mark remains historical instead of turning back into a negative answer.
