> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/parallel-wallets-20261102/02-electrum/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/03-wallets.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# EL-02: launch

Python3.11.9, It's just a standard library. You don't have to install anything.
All commands to execute from this folder. `-B` prevent __pycache__.

> Executable code/The commands are omitted in the documentary copy.


`run.py` maintains stages `runs/el02-v1`It's already there inputs/outputs
and CHECKS They are not recreated; the responses are checked against the control data.
Don't delete completed outputs forresume". `report.py` build-up
NUMERIC_REPORT.md from JSON; `acceptance.py` check-in SHA256 sources, copies,
common originals and all JSON After the first call RUN_MANIFEST.json
It captures scientific artifacts; subsequent calls reject their alteration.

In this launch, everything34 public-input In the event of an accident, before the occurrence
output repeat run.py only starts an unfinished task; checkpoint
plough-in128 Candidates maintain the boundary/answers
for an audit resume inside of one unfinished task yet
It is not implemented: it is repeated completely, maximum1024 candidate/30s, without
Repeat completed tasks. For new research, create another run ID,
Change the protocol before computation; do not mix new data into el02-v1.

Restorer/The predictor works as a separate process:

> Executable code/The commands are omitted in the documentary copy.


The example above creates a new output conditional synthetic predictor; staff
It doesn't need to be re-run. The output file isn't overwritten.
The format of the new real inputs is described in ARTIFACT_PROFILE.md. solve.py reading
precisely-defined public-input JSON; SYNTHETIC_SECRETS.json It doesn't pass on
And its code doesn't read adjacent files. It's a separate interface/process
File system isolation: Secrets remain available to the auditing process.

`prepare.py` copies the original known inputs with hash control and receives
basic upstream Sources. Finished downloads don't repeat. Additional
Verified versions are downloaded through prepare.fetch; precise URL/UTC/SHA into SOURCES.json.
To recover the missing source, use it label/url from
this manifest through fetch; Existing sources are not replaced6
requests received DNS error into sandbox; Repeat with authorized access passed.
Totally20 new attempts within the established limit25; Errors saved.

Files:

- RESULTS.md Output, limitations and specific next input.
- MATH.md Accurate bytes, collaborative model and algorithm price.
- NUMERIC_REPORT.md - table of scientific JSON.
- SOURCE_FACTS/SOURCES/INPUT_PINS - quoted places, downloads and pins.
- runs/el02-v1/SOURCE_CONTROLS.json - implementation of selected historical methods.
- runs/el02-v1/*.input.json and *.output.json individual public-input tasks.
- runs/el02-v1/SYNTHETIC_SECRETS.json - exclusively control secrets.
- SUMMARY_FOR_MERGE.md A short summary for the main chat.

LegacyDict into source fixtures reproduce list-returning keys/values
Python2. Real Python2 hash-table iteration not reproduced or reproduced
attributed Python3. Fixture transaction hex="00" — metadata-control,
partial Bitcoin transaction. All of this is reflected in the conclusions.
