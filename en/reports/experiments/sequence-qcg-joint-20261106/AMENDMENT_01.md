> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-qcg-joint-20261106/AMENDMENT_01.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Clarification of process admission and control prior to the main series

Source PROTOCOL.md, code MANIFEST.json and TOY_RUN.json They're still intact. After a small phase, FF answered all 10 exact tasks and ablation; NIA He answered a fully observable negative problem and its ablation, but did not respond to all of them 9 partially observable tasks (7 external limits, 2 internal unknown/timeout). Prior to independent cross-checking, the main series was not launched.

Change of plan: Admission separate by encoding. After independent confirmation of small answers, only FF on all six original full-size entrances NIA-Attempts of the main plan are noted not_run_failed_small_gate, It's not full-size search timeouts NIA-Requests are saved for a separate sequel, and this decision is made prior to any full-length attempts.

In the original Windows-launch Popen(sys.executable) observed the redirection process venv. Therefore, the initial peak_sampled_bytes are not an estimate of the solver's memory and are excluded from the conclusions/The lack of response is stored as observable facts, with no statement about the memory used or the exact stoppage stage NIA. After the end of the process line Python There's no left. Monitoring is being fixed in a new one run_main.py: direct-launch sys._base_executable path-wise Z3 into PYTHONPATH; PID Memory is checked by a separate control with the allocation 48 MiB. Current ones worker.py and encoding.py They don't change.

Basic limits FF-The old series: 60 s Z3, 90 (c) for the entire working process, max_memory=768 MB, limit 1024 MiB, It's up to two processes PID They're recorded. They're saved.smt2, statistics, reasons unknown, External status. Real keys are not inputs.

AMENDMENT_MANIFEST.json The new audit is completed after a successful small validation and monitoring test, but before the main search VALIDATION_FF.json and FULL_FF_RUN.json; Primary records are not replaced.
