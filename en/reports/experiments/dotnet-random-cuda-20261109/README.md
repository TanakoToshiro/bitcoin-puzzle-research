> English machine translation of the [Russian source](<../../../../ru/reports/experiments/dotnet-random-cuda-20261109/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# DN-G01 — GPU System.Random

[FINAL_REPORT.md](<FINAL_REPORT.md>), [PROTOCOL.md](<PROTOCOL.md>),
[RESULTS.md](<RESULTS.md>)Complete seed-The search hasn't started yet.

`engine.cu` - precise CUDA RNG filter16 circuits; `gpu.py` — ctypes API;
`reference.py` - unchanged CPU-standard DN-R01. `test_gpu.py` history
Acceptance and limited pilots CPU-The experiment doesn't change.
GPU-library `libdotnet.so` work through WSL Ubuntu24.04 / CUDA13.2.
Assembly flags/version/hashes BUILD and MANIFEST. Fast-math It's not used.

All commands below are executed from this folder in PowerShell. Repeat
`test_gpu.py` You do not need a sealed folder: this will repeat the tests and the journal.

The future full passage team (prepared, **failed**):

> Executable code/The commands are omitted in the documentary copy.


One persistent CUDA-context[0,2147483648), blockages2^20.
8 pilot ranges are imported without repeating GPU-calculations.
Repeat the same command after stopping will check and miss the finished
If you make a mistake/overflow completed checkpoint Not created; candidates
tested CPU They stop the line. `flock` protects against the second runner,
PROCESS containsPID All the results are written into a new folder.

There is a controlled stop after several new blocks
`--max-new-blocks N`where N And to keep removing that argument.
Change seed-range, size block, code or filters within an existing
The boundaries are broken down around imported pilots.
The complete plan is arithmetically verified
Audit of all ranges, chains and candidates. COMPLETE runner self-indulgence
There is no evidence of this audit.

Controls of the binding are kept separately in
`../dotnet-random-cuda-runner-controls-20261109`theirs SHA-256 bound
RUNNER_CONTROLS.json. ERROR into controls/overflow-checkpoint - intentional
A negative test, not a pilot's mistake.

Check the current archive without computation:

> Executable code/The commands are omitted in the documentary copy.


Reassembly of the report from ready-made JSON, without searching:
`wsl -d Ubuntu-24.04 -- python3 reviews/finalize.py`.
It updates the signature; a new independent audit is best kept separately.
