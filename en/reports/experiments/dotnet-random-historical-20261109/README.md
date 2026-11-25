> English machine translation of the [Russian source](<../../../../ru/reports/experiments/dotnet-random-historical-20261109/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# DN-R01 historical System.Random

First [FINAL_REPORT.md](<FINAL_REPORT.md>), [PROTOCOL.md](<PROTOCOL.md>),
[RESULTS.md](<RESULTS.md>). COMPLETE means the completion of the preparatory
experiment. **Real seed-search performed only 3×2^18 meanings.**

Historical source and metadata `sources/`; service-adapted
assembly `build/`; Python — `reference.py`independent C#-core `Worker.cs`.
Isolated Cryptographic Standard `crypto_ref.py` copied unchanged.
Versions, compilation commands and hashes are recorded in BUILD/ENVIRONMENT/MANIFEST.
GPU and the cloud was not used, new Python-No dependencies were established.

33 synthetic cases `synthetic/`; closed for worker truths are indicated
`TRUTH_CHECKER_ONLY.json`. Worker receives events.tsv, boundary
output file. EVENTS contain only train ≤50. Holdout check-in Python
afterward train-Real pilots. Real pilots `pilot/0..2`Each with its own range
and a hash chain link. `NUMERIC_REPORT.json` and CSV It's built from stored data.

Initial cycle starts `lab.py`; after sealing, do not run it
in this folder to save the log `full_scan.py`,
It is not called automatically and only writes to a new series.

For the next full pass, **The team is ready, but not yet completed**:

> Executable code/The commands are omitted in the documentary copy.


The team works from this folder. By default, the range [0,2147483648), block
262144, single-handed CPU-line, all16 Three pilot ranges already tested
imported with the verification of hashes and a new link in the chain; worker Nope.
Repeat when interrupted **same-man**: The finished blocks are only checked
The last unfinished block is recalculated
It is recorded as a lack of candidates train-queue
stops; Python check out holdout for independent review.

OS byte-range lock protects against two simultaneous runner. PROCESS.json keeper
PID Time and time, but the mere fact of having a file is not considered an active lock.
CONFIG prohibits inconspicuous code change/data/The final range
COMPLETE The future passage requires additional independent audits
Coverage and chains; having a file does not replace this audit.

Testing runner They're in the next file
`../dotnet-random-runner-controls-20261109`; links and hashes --
`reviews/RUNNER_ARTIFACTS.json`This is a small technical test, not a second
It's a full-fledged search. It's an admission correction `reviews/NOTES.md`.

Check current artifacts without computation:

> Executable code/The commands are omitted in the documentary copy.


`reviews/finalize.py` Reassemble the report and tables from JSON repeatless
Search and update signatures. A new independent audit is conducted separately
retaining COMPLETE The general journal is supplemented by a record DN-R01.
