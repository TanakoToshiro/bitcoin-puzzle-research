> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sx-cuda-20261101/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E12 GPU: historical SX

Isolated sequel./sx-historical-20261101/GPU_HANDOFF.md.
Full production: PROTOCOL.md; results: RESULTS.md; Consequential conclusions: JOURNAL.md.
Old ones SX/BX checkpoints And the manifestos don't change. SOURCE_PINS.json It's fixing the sources.

WSL Ubuntu-24.04, from this folder:

> Executable code/The commands are omitted in the documentary copy.


`all` reuses the completed acceptance and pilots with the same inputs, then performs
GNU and LLVM sequentially. `SERIES.lock` — flock for the duration of the trial; PROCESS.json
retain PID and /proc start ticks. Existence of the file lock doesn't mean
Re-start checks the chain of blocks and continues from the first
For a controlled stop, create a file STOP in this folder;
Continue to remove it and repeat it `python3 run.py all`Completed blocks are unchanged.
Candidate or ERROR It requires analysis of the cause; there is no automatic pass.

GPU filter №50 It doesn't prove the model. CPU verifier check out1–50, later holdout;
The real candidate stops the series to an independent affine/address check.
FULL COMPLETE It only comes after an independent audit.py. Audits are retained
With new files, old control artifacts are not overwritten.

`setup.py` stored as a log of the original transfer; do not run over the series.
Current builds are used for reproduction pinned source and build.sh.

## Resume after file race

The first full launch stopped after 96 block Windows/WSL sharing violation
atomic-substitution STATUS. GPU-There were no mistakes runner and FINAL_MANIFEST
retained unchanged; the binding version resume.py separately fixed RESUME_MANIFEST.json.
It repeats only the occupied file operation and does not overwrite the received one PILOTS.
After this amendment, the current continuation team: `python3 resume.py`;
single-launch stdout/stderr: `python3 launch_v2.py`.
Discussion and control with three artificial failures: status-reviews/resume-review.json.
Completed 96 Blocks saved by byte, list SHA256 included in the parsing.
Original stderr.log and LAUNCH_RESULT.json Maintaining the first error; the final
performance is reflected in stderr-v2.log and LAUNCH_RESULT_v2.json.
Independent verification Windows after completion: `python readback.py`.
