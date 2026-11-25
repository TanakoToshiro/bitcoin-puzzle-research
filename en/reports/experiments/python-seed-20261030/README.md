> English machine translation of the [Russian source](<../../../../ru/reports/experiments/python-seed-20261030/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E2: historical Python random limited integer seed

[Protocol](<PROTOCOL.md>), [launch results](<RESULTS.md>), [intermediates](<NOTES.md>).

**Completed:** [summary 20261030-102843-9581116c](<runs/20261030-102843-9581116c/CONCLUSION.md>)All of it 20 Physical pilots have been fully tested `[0,1048576)` matchless seed. 20 The main search with the controls took over 560,587 (c) Archives and checks are maintained.

The work is done in a separate folder. The main search performs the real search CPython 2.7.9/3.4.2, collected from official sources, under WSL. Windows Python 3.11 It controls the launch and verifies the results. Historical interpreters are not installed systematically. Original archives, archives runtime, SHA-256, assemblies and control vectors are stored here; temporary WSL-The catalogue is retrieved from the archive if necessary.

It's only checked `[0, 2^20)` plainly integer seed. It's 1 048 576 meanings 1/4096 range 32-bit seed. Unix timestamp creation puzzle, linear seed There's no automatic entropy. Two versions, five physical API-diagrams and two steps 20 An equivalent assemblage of words adds four logical descriptions without recalculating.

Commands from this folder:

> Executable code/The commands are omitted in the documentary copy.


Launch structure: `code/` Frozen code and protocol; `inputs/` Data, historical vectors and metadata runtime; `tasks/control-*` Reconstitution of synthetic seed; `tasks/pilot-*` - Real solutions, everyone `shards/START-END.json` Determine the exact half-interval of the verified seed, Number of inspections and reasons for rejection. `DONE.json` It contains checksums of the completed search. `EVENTS.jsonl` It's written down `RESULTS.md` regather JSON, `NOTES.md` It preserves interpretations.

The stop is checked at the boundaries of the blocks 16384 seed; Completed blocks are passed, unfinished blocks can be recomputed and not counted twice. Changing inputs or computational code requires a new start. Archives of old interpreters are sufficient to resume after cleaning `/tmp` No new assembly.

A significant historical feature: in this range `randrange` at 2.7.9 request 257 bit because of logarithm rounding, and 3.4.2 — 256 bit `bit_length`These options have different random number consumptions and are tested separately. [CPython 2.7.9](https://www.python.org/downloads/release/python-279/), [CPython 3.4.2](https://www.python.org/downloads/release/python-342/); exact hashes - in SOURCES.json/RUNTIMES.json.

`finalize.py` Only a report is collected from the ready JSON And it checks the hash, and its hash is stored in the reception, and it's waiting for the completed negative pilot and the saved continuation control, rather than producing a negative conclusion for partial launch. `test_checkpoint_resume.py ID` It creates a separate copy of the synthetic control to check for renewal; the existing copy does not overwrite.
