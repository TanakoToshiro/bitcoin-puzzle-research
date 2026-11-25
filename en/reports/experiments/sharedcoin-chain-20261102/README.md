> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sharedcoin-chain-20261102/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/03-wallets.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SC-01 — SharedCoin

Bottom line: [RESULTS.md](<RESULTS.md>)Intermediate conclusions and errors: [JOURNAL.md](<JOURNAL.md>)The field: the exact historical chain seed→key RNG-context, storage seed, offer/recovery. Real seed They don't move. GPU Neighboring projects are not used.

From the root `btc test`, PowerShell:

> Executable code/The commands are omitted in the documentary copy.


`prepare.py` It checks hashes, copies of accepted inputs, and builds a history `fetch.py`Reloading the saved successful URL I don't need it. `run.py` With the same code, data, and versions, you skip a pre-made launch RUN/TRACES/CHECKS into previous-runs And it creates a new one ID. When interrupting an incomplete short JS-It is done again; within a separate 30-second-stand checkpoints A partial result is not passed off as a completed one.

`report.py` reassemble NUMERIC_REPORT.md, without changing interpretations RESULTS/JOURNAL. `verify.py` check out TRACES independent Python-arithmetic, coincurve and RC4. `seal.py verify` checks the integrity of the received set; new data should be issued with a new series or update with an explicit log entry, not a hidden replacement of conclusions.

The environment is fixed in RUN.json: Python 3.11.9, Node v24.18.0, version coincurve and OS. General.venv The research folder already existed; the packages were not updated. Node Executes old files with explicit adapters, doesn't emulate the entire historical browser Math.random, WebCrypto, time and password are synthetic and recorded in sharedcoin.cjs.

Main artifacts: SOURCES/INPUT_PINS (origin), HISTORY/SOURCE_AUDIT (history and lines), TRACES (keys, addresses,) pool, requests), CHECKS (checks) RUN (ID, code/data, versions, durations and errors subprocess), COMPLETE (integrity) All private keys in TRACES Specially created synthetic controls.
