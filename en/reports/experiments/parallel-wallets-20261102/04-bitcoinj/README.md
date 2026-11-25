> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/parallel-wallets-20261102/04-bitcoinj/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/03-wallets.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# B4 - Launch and playback

All private keys, seed and wallets in `runs` — **SYNTHETIC CONTROLS** either
historical unit-test vectors. No new real candidates have been received.
Results of the study: [RESULTS.md](<RESULTS.md>).

Working directory PowerShell:

> Executable code/The commands are omitted in the documentary copy.


Requirements Python 3.11 pre-existing `cryptography` (tested) 49.0.0) and
fixed JDK 8. Java JAR/dependencies are preserved in `sources/vendor`;
version/hashes SOURCES.json. Common venv It hasn't changed pip/Maven install No need.
`py` launcher I can't find it on this car Python; teams use `python`.

> Executable code/The commands are omitted in the documentary copy.


The first two teams use content-addressed run ID. If COMPLETE.json
It is already there, return the saved result and do not repeat the calculations.
Integrity check is being carried out `seal.py`Changes in significant inputs
another run ID; old-school completed and failed runs They're still there.
Java subprocess limits: compile/JUnit 60 s, harness 120 s; Python controls
wholesomely 120 s, separate predictor 60 s. Application windows don't open
The network is not used during the control.

In another installation JDK change JDK into `run_java.py` before relaunch
and keep it in provenance. `build_report.py` numericalize
report source facts available JSON; RESULTS.md It contains an interpretation.

## Analysis of the Public Artifact Provided

The inspector reads plaintext protobuf textual dump And he just goes out public
anchors/metadata It's not deciphering secrets backup.
An example on the saved synthetic wallet:

> Executable code/The commands are omitted in the documentary copy.


For author-related account xpub We need separate justified branch/child-index
mappings. Format-- ARTIFACT_PROFILE.json; fully-working public entrances
synthetic checker are control run:

> Executable code/The commands are omitted in the documentary copy.


This example re-runs a short application verification only by explicit
request of the user; it is sufficient to reconcile the result already performed
read `case-0-prediction.json`The predictor accepts account xpub,
masked observations and target address; ground-truth The file is not in the interface.
Verification training observations necessary pairwise carry-conditions;
It does not in itself prove the existence of a common account scalar.
Final masked target checks the address, but account/seed They're not.

## Getting hundreds private children historical API

V bitcoinj 0.12 post-loading plaintext signing-wallet:

> Executable code/The commands are omitted in the documentary copy.


This challenge is changing counters memory Wallet; He didn't play on the real thing
with custom wallets, export lookahead demand getLeafKeys() clear-cut
branching/ways. `WalletTool --lookahead-size=256 dump --dump-privkeys`
It is not equivalent to this packet call.

## Sources and renewal

HTTP-Metadata, errors of the original sandbox DNS, successful downloads
permitted network access and the hashes are stored in SOURCES.json. For downloading
source is the final manifests `metadata_urls.json`, `source_urls.json`,
`dependency_urls.json`, `additional_urls.json`; `fetch_sources.py` check-in
cache and doesn't download successful sources again BIP32
historical text provenance general HD-01 snapshot.

`prepare_sources.py` It is intended for the initial copying of common inputs,
It's not to replace frozen snapshot A new condition
retain/separate protocol, shared laboratory files and adjacent
Experiments don't change.

What's unknown: the real thing account xpub The author, the exact program,
Export Procedure and Choice of the Old migration key. We need a specific one to continue
author-related artifact or new finite algorithm unknown xpub.
