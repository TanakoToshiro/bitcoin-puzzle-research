> English machine translation of the [Russian source](<../../../../ru/reports/experiments/entropy-mnemonic-seed-20261103/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# EMS-01 — entropy → mnemonic → seed, 03.11.2026

**Bottom line: BX 2.0.0 old-timer Electrum codec, without BIP39/PBKDF2.**
Historic obstacle for assigned pilots set
loss effect of leading zeros decode; It's not a new key that's been found.

- [Result](<RESULTS.md>), [historical](<HISTORICAL_PATH.md>).
- [Protocol](<PROTOCOL.md>), schemas: no search accepted - artifact of the original study (`SCHEMES.json`; outside the picture.
- Primary sources - artifact of the original research (`SOURCES.json`; outside the image), lines of code - artifact of the original study (`SOURCE_FACTS.json`; outside the picture),
  Controls - an artifact of the initial study (`CONTROLS.json`; outside the image), control bytes - an artifact of the original study (`CONTROL_TRACES.json`; outside the picture.
- The decision on the pilot - an artifact of the original study (`PILOT_DECISION.json`; outside the image), final check - artifact of the original study (`AUDIT_COMPLETE.json`; outside the picture.
- [Journal](<JOURNAL.md>)Errors in obtaining sources are stored in SOURCES.json,
  Local technical obstacles in the ERRORS.jsonl.

Complete EXE BX I didn't do it mnemonic.cpp It's compiled unchanged
but minimal type/hex/assert shims modern g++ are not assembly 2014.
Old ones E15 outputs starting checkpoints They haven't.

Checking the results already available in WSL (uncounted):

> Executable code/The commands are omitted in the documentary copy.


Initial assembly in a new copy without ready-made results is performed through
`bash build_controls.sh`then `python3 run_controls.py` into WSL. Original
The accepted folder for the sake of reproduction is not reassembled.

If CONTROLS.json It already exists `run_controls.py` matching input/result hashes
It doesn't repeat the calculation/Binaries Reject Reuse
Prepared results: for new inputs We need a new series/run ID. Run ID this
The version contains platform path separators; Windows-launch resume deflects,
Therefore, it is performed in the original WSL-Wednesday. `readback.py` work in Windows.
Current ones
accepted outputs Do not remove for the sake of re-starting. `readback.py` only reads
artifacts and prints the result.

These are synthetic controls **not CPU-searcher**. GPU-run, domain coverage,
training/holdout candidate checks evaluation 2³² It is not intentionally available here:
chain BIP39 The next step requires a new historical
Reasons, such as exact importation entropy (c) a different instrument or a separate instrument
production old-codec options; these directions are not automatically started.
