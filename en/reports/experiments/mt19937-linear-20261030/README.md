> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt19937-linear-20261030/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E1: MT19937 → bit-definition Puzzle 71

An isolated experiment. [Recorded protocol](<PROTOCOL.md>), [numerical results of launches](<RESULTS.md>), [Interpretations and Interim Conclusions](<NOTES.md>).

**Completed:** [output and launch certificates 20261030-093024-0567d283](<runs/20261030-093024-0567d283/CONCLUSION.md>)In all eight circuits, any 70-bit-remain71 Compatible with known solutions; found limitations on bits or XOR No. It's the result for an arbitrary achievable state MT, narrow-mindedness seeded-models.

Used Python 3.11 from the existing research environment, symbolic performance and GF(2) use Python integer, without Z3; coincurve It is used only to re-check published decisions seed: full-scale transition MT dimensionality 19937.

Commands from this folder:

> Executable code/The commands are omitted in the documentary copy.


`resume` Checks hashes of frozen code, data and completed artifacts, as well as a version of the environment `runs/ID/code/`The unfinished circuit is recalculated in its entirety; the stages that have already been saved are readable. Each call is written separately to `invocation-N.json`Events are written in `EVENTS.jsonl`New code for new research run through `run`Don't change the frozen folder.

Matrixes are stored as a simple binary format described in the report. pickle Each coefficient is a bitmask of state coordinates `witnesses.json` high-number hex: coordinate 0 - Most significant bit of the word 0, coordinates 1…19936 - successive junior→word-bit 1…623 before twist. For numerical reproduction set the index MT=624.

Boundary of the result: incompatibility excludes the specified scheme; uncertainty in an arbitrary state does not exclude additional information from the limited seeding. Collaboration does not confirm historical origin puzzle. Search acceleration is not declared without independently verified restrictions.

Additional check of the invariance of the transition image is saved in `runs/ID/transition-image-check.json`; its reproduction: `..\..\.venv\Scripts\python.exe check_transition_image.py ID`It uses a frozen generator and other implementation of the exception, the basic experiment does not repeat. `summarize_run.py` - the auxiliary report generator added after calculation, its hash is recorded in the reception; the source of the launch itself is unchanged.
