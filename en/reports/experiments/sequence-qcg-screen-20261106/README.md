> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-qcg-screen-20261106/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-22 Quadratic transition of the latent state

Bottom line: [FINAL_REPORT.md](<FINAL_REPORT.md>)Precise formulation and limitations: [PROTOCOL.md](<PROTOCOL.md>), [MATH.md](<MATH.md>)Source analysis: [LITERATURE.md](<LITERATURE.md>).

This is a preliminary check of the three designs with the original masks; no exception QCG, It's not calibrating the detector or restoring the keys SEQ Scientific code, auditor, inputs, criteria and sources are recorded in MANIFEST.json The results are written only to new files; restarting on top of the completed series is not allowed.

## Verification of the saved result

From the root of the project, PowerShell:

> Executable code/The commands are omitted in the documentary copy.


For re-checking SHA-256/mtime everyone 10843 previous files and 1792 Add dependency files `--full-prior`It reads files and can take a few minutes. AUDIT.json already contains the result of a complete check; it is not required to repeat it for normal reading of the report.

## Files

- `INPUTS.json`, `known_solutions.json`: real masks and 32 QCG + 32 independent random controls; full synthetic states are saved for audit only.
- `screens/*.json`: 65 full records, in each 66 polynomials, leading certificates and demonstration polynomials degree 32; Synthetics also check for true errors.
- `GEOMETRY.json`catalogue 1332 Monomes, rank, weights and a clearer shorter extraneous vector.
- `mathcore.py`, `experiment.py`: formulas and disposable stages `setup`, `run`, `seal`; `audit.py`: independent SymPy/FLINT Checking and preservation of the previous archive.
- `RESULTS.json`, `AUDIT.json`:numerical results and audit. `finish_report.py` It forms the text according to the saved results, without repeating the scientific calculation.
- `MANIFEST.json`: pre-launch locking; `ARTIFACTS.json`: summary list SHA-256, including reports; `COMPLETE.json`: the completion of only the specified volume.
- `reference/`Unmodified copies of two previously proven statements about a separate ideal; origin records `SOURCES.json`.

To play back the calculation, you need a separate new directory and a new pre-launch fix `setup/run/audit/seal` It's on top of this complete catalog.
