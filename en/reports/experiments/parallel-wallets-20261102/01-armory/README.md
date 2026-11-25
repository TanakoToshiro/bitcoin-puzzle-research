> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/parallel-wallets-20261102/01-armory/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/03-wallets.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# A1 Armory - reproduction

Bottom line: [RESULTS.md](<RESULTS.md>)Brief summary: [SUMMARY_FOR_MERGE.md](<SUMMARY_FOR_MERGE.md>).
Mathematics: [MATH.md](<MATH.md>)Formats: [ARTIFACT_PROFILE.md](<ARTIFACT_PROFILE.md>).

From the root of the project, PowerShell:

> Executable code/The commands are omitted in the documentary copy.


ACTIVE_RUN.json This indicates the received series. Early erroneous launch has not been deleted.
PROTOCOL written before the calculation, the addition multiplier log - before the first
For each stage of the launch timeout 60 seconds, to re-launch 180 seconds.
Stages are preserved atomically in the sense ofJSON It only comes after successful success
"returns" are not repeated
It can be done again. `--new-run` create a separate ID endure
accepted inputs-Verification; use only with unchanged data/code
The new data requires a separate study, not a replacement of the image.

For pure independent repetition, copy this folder without runs/ACTIVE_RUN/
MANIFEST to a new location within the permitted area and set up bootstrap.py
accessible vendor. We do Python3.11.9, coincurve21.0.0, sympy1.14.0,
python-flint0.9.0, mpmath1.3.0. Now coincurve It comes from the general.venv, ?
sympy/flint/mpmath from HD-01/vendor **read-only**; bytecode It's off.
No packages were installed in the general environment. `prepare.py` fixing
copies of entrances; `fetch_release.py` loading v0.92.3 and no more downloading
You don't need network access to compute.

Separate Reconstitution (Create a New Reconstitution) output, Do not overwrite accepted:

> Executable code/The commands are omitted in the documentary copy.


Format solver-packages are described in ARTIFACT_PROFILE; examples PUBLIC_PACKETS.json
in an active series. `log` lacking P/C, `anchor` Getting them clearly. Parsers
issue metadata; for the solver, you need to add observations, mapping and targets.
They don't search for or modify wallet files. Launching someone else's historical GUI
The real origin of the artifact cannot be established checksum.

SYNTHETIC_ORACLE.json stored separately from the solver's inputs; solver not
All the test subjects private keys They're only for tests.
SOLVER_OUTPUT It preserves answers and lattices, not just the flag of success.
NUMERIC_REPORT It is based on results; audit.py check out
Independent Transitions and Historical serializer once. seal.py check-in
hashes of code, sources and artifacts without repetition recovery.
