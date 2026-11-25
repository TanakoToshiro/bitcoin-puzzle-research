> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-qcg-fused-unlimited-20261106/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-29 - background launch QCG timelessly

On behalf of the user from 06.11.2026: It's a live launch, not a final report or a completion certificate.

queue: full00..full05, While one input is running, the others are waiting. ff.preprocess=false, ff.fused_reduction=true, timeout=0 timer Z3 switched off max_memory=8192 MiB: The external timer has been removed encoder and worker SEQ-28 preserved; each is preserved worker compare SMT s SEQ-24.

Automatic background process controls memory: maximum working/private 8 GiB pollingly 0.25 c, the former emergency reserve of computer memory 2 GiB. If it exceeds the current level, it stops worker And he records the reason. He checks for the new entry 10 GiB Available memory; with a lack of waiting until 120 It's memory protection, not decision time. Internal algorithmic budgets Z3 The old ones.

Work begins again; saved checkpoint The process does not survive a reboot of the computer. New results are saved as they appear runs/fullXX; MEMORY.jsonl and PHASES.jsonl They contain a magazine. queue.stdout.log and queue.stderr.log - output of the background control process. RUN_STARTED.json and LAUNCH.json contain process identifiers; START_CONFIRMED.json It only records the successful start, not the current state in the future. RUN.json will appear after the queue is completed.

The assistant doesn't create schedules, and he doesn't monitor progress. The background memory limiter and logging work independently/The shutdown of open tasks in this launch has not yet been completed. The old sealed series does not change.
