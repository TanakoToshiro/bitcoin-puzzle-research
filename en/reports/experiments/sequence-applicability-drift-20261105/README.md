> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-applicability-drift-20261105/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-19 Applicability of small lattices with a linear index addition

[Outcome](<FINAL_REPORT.md>), [protocol](<PROTOCOL.md>), [mathematics](<MATH.md>)Machine results are an artifact of the original research (`RESULTS.json`; outside the image), audit - artifact of the original study (`AUDIT.json`; outside the picture.

Verification of saved files from the root of the project, without new computational experiments

> Executable code/The commands are omitted in the documentary copy.


`verify --full-prior` It's also re-reading all of the old archives and dependencies that have been saved SHA-256 The normal test covers a new one seal, freeze-in/code and five sources used.

`setup`, `run`, `audit.py`, `seal` They create disposable artifacts and are not designed to be re-run in a accepted directory. You need a separate directory to play back; old files are saved.

TRUTH.json It contains only synthetic truth. Worker reading blind/*.json s ID and disguised observations; the coefficients are not transmitted to him. R000 - Pre-frozen real entry, only saved performance is allowed CALIBRATION.json. All completed matrices, transformations, polynomials and metrics in outputs/*.json.gz, statuses and stderr into logs/*.json. Limits and errors are not considered negative answers.

relations.py, recovery.py and probe.py copied SEQ-18 The new design uses their integers/polynomial helpers; old-school lattice(), norms() and recover() They're not called. drift.py build-up 12-The code, the criteria, the inputs and the auditor are recorded before the launch of the linear channel MANIFEST.json; Explanatory and final documents can be added after fixation.
