> English machine translation of the [Russian source](<../../../../ru/reports/experiments/python-expanded-20261030/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Extended verification Python (E2b)

[Protocol](<PROTOCOL.md>), [results](<RESULTS.md>), [intermediates](<NOTES.md>)Current launch: [20261030-105921-2f40f0fd](<runs/20261030-105921-2f40f0fd/RESULTS.md>).

**Completed:** [summary](<runs/20261030-105921-2f40f0fd/CONCLUSION.md>)All of it 2^32 seed and 120 diagrams checked without matching. Recontinuation missed everything 1024 block without changing their hashes/recording time.

Coverage plan: all 4 294 967 296 plainly integer seed and 120 scheme/step/It's the ultimate test of the specific ways in which we can use history `random`not all Python. Complete brute-force includes second-round Unix timestamp, caught up 32 bit, but not arbitrary float, strings and system entropy.

Calculation CUDA locally RTX 3070 Ti Laptop (8 GiB) through WSL Ubuntu-24.04, CUDA 13.2, sm_86. Hardware information and exact compilation command: BUILD.json - an artifact of the initial study (`BUILD.json`; outside the picture. GPU pick-up seed Generator, not private range keys puzzle. Every day seed It is initialized once for everyone 120 schemas. CPU-implementation of the same filter is used for control; independent references are CPython 2.7.9/3.4.2 separate Python-calculus MT.

GPU checks the minor bits of known Nos1–12. First block MT limited 624 In other words, when there is a shortage of buffers seed It is transmitted to the historical interpreter and **non-discard**. The present candidate is checked by No1–50, All Deferred Decisions and Address No71. Even if there are no first candidates 12 This is enough to eliminate the verified seed/diagrams, full condition MT and 70 unknown bits number71 They do not recover by themselves.

Commands from this folder (Windows PowerShell):

> Executable code/The commands are omitted in the documentary copy.


Don't run two teams `resume` simultaneously ID. An unfinished block can be repeated; a block without `.sha256` It doesn't count Ctrl+C The current block may not be saved; previously confirmed blocks remain on the disk ID. Old historical runtime/Sources are not copied many times: archives of the neighboring `python-seed-20261030`Their hashes and metadata are saved.

`validation/` keeper 518 400 comparisons of historical outputs, CPU/GPU Vectors, synthetic reductions for all 120 Negative control, overflow control and seed border 2^32. `runs/ID/code` and `inputs` frozen. `shards/START-END.json` paired SHA-256 It contains the exact half-interval and candidates. `SUMMARY.json` It stores the machine coating `RESULTS.md` It is updated after each block, `EVENTS.jsonl` It's being written down E1/E2/E3 And the basic project doesn't change.

Methodical sources: preserved official sources [CPython 2.7.9](https://www.python.org/downloads/release/python-279/) and [3.4.2](https://www.python.org/downloads/release/python-342/)To accommodate a large fortune MT memory GPU documentation used [CUDA Programming Guide](https://docs.nvidia.com/cuda/cuda-programming-guide/pdf/cuda-programming-guide.pdf)This is an engineering implementation of verification, not a new cryptographic attack.

Addenda to the interpretation: [line-field/float seed Windows Python 2.7.9](<SEED_DOMAIN_AUDIT.md>), [precise exceptions to the three float-constructions](<PRECISION_EXCLUSIONS.md>), [matching 2.7.8/3.4.1](<ADJACENT_VERSIONS.md>)These are separate arguments on source and arithmetic; they don't change the frozen protocol GPU.

After a temporary lockdown Windows Added a re-recording wrapper. Preferred continuation command (do not run parallel to another) resume):

> Executable code/The commands are omitted in the documentary copy.


It checks the same frozen code and skips the same ready-made blocks; only the processing of the temporary code is changed PermissionError recording JSON. During the work it is safer to monitor the number of ready `shards/*.sha256` and process lines to externally view mutable SUMMARY.json He didn't block his replacement.

At complete launch `verify_final_resume.py ID` Confirms the omission of all blocks, and `finalize.py ID` Checks the full coverage and forms CONCLUSION.md/ACCEPTANCE.json Isolated bounce checks have already been saved in INTEGRITY_CONTROLS.json; `test_integrity.py` It should not be repeated over existing ones fixtures.

## Future experiments

[Specific unverified schemes and conditions for their launch](<FUTURE_EXPERIMENTS.md>):byte/symbolization, direct generation rejection In the big beat, reseeding between tasks, temporary seed outside 32 bit, low-level _random.Random(None), These directions are not included in the result E2b.
