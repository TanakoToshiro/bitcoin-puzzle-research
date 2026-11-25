> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-cross-ratio-20261102/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-07 Double relation and relative latent state

[Final report](<FINAL_REPORT.md>)On 24 new enhanced controls
Classes containing true chains; conditional projection
synthetic key number71 It's all unambiguous
positive tolerance was not passed, there is no real search and exclusion of the model.

SEQ-07A Monomial lattice with a strict decoder. SEQ-07B separately
Registered shift class decoder and new control data.
The results of the first approach are preserved without substitution.

Teams from the root of the project, PowerShell:

> Executable code/The commands are omitted in the documentary copy.


Integrity first, if you have the team results
omitting the computational stages, adding only `JOURNAL.jsonl`,
It's removed from the integrity manifesto
Do not delete: a new experiment should have its own folder.

- `PROTOCOL.md`, `MANIFEST.json`: source and frozen code.
- `translation/PROTOCOL.md`, `translation/MANIFEST.json`: a new decoder,
  Cause and independent control examples.
- `solver.py`cubic conditions, modular linearization, LLL and a strict decoder.
- `translation_decoder.py`Verification of the relative chain, exact intervals
  general shift and conditional projection of the key No71.
- `inputs/`, `results/`, `lattices/`: 78 Original packages and compressed certificates.
- `translation/inputs/`, `translation/results/`, `translation/lattices/`:
  36 The control truth is stored separately from the solver's input.
- `translation/DIAGNOSTIC.json`Application of a new decoder to the old
  Control grids; not an independent confirmation sample.
- `audit.py`, `audit_packets/`, `AUDIT.json`: Independent inspection without new LLL.
- `REAL.json`, `translation/REAL.json`: Structural assessment and closed admission.
- `ENVIRONMENT.json`: SHA256 1792 Local dependency files.
- `PRIOR_SNAPSHOT.json`: SHA256 and mtime 714 previous accepted files.
- `ARTIFACTS.json`, `ACCEPTANCE.json`, `COMPLETE.json`: Integrity and acceptance boundaries.

Python 3.11.9, existing python-flint 0.9.0; SymPy It's just for audit.
The packets were not installed CPU-process GPU.
Don't take it `heuristic_no_candidate` for proof of incompatibility;
Do not accept a single class as proof of global uniqueness.
