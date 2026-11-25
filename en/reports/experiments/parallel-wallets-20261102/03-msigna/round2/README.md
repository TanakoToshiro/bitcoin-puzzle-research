> English machine translation of the [Russian source](<../../../../../../ru/reports/experiments/parallel-wallets-20261102/03-msigna/round2/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../../README.md>) · [Direction](<../../../../../topics/03-wallets.md>) · [Documents of the series](<../../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../../docs/LATEST_RESULTS.md>).

# Second approach mSIGNA

Bottom line: [RESULTS.md](<RESULTS.md>), [SUMMARY_FOR_MERGE.md](<SUMMARY_FOR_MERGE.md>)The first stage is level higher and saved.

From this folderPython3, stdlib; native-run requires already established Linux g++/OpenSSL):

> Executable code/The commands are omitted in the documentary copy.


Native launch WSL: `python3 native_run.py` catalogue round2, accessible /mnt/c. He only creates local native/runs, It doesn't install packages, it gives build/run timeout120C. Compilation commands and versions - runs/native-8f30656acce7/build.json. Detailed hash shim diff — native/hash.patch. Save native-results coincidentally ID It will be reused without a new performance.

On a new car ID native-run It may be different due to the file platform/- Archived translations run This is proof of a validation already performed; do not overwrite it. Build pins The collector does not repeat the already successful downloads and recorded errors.

`report.py` Checks the saved hashes original core bytes, native outputs and legacy assertions, build-up NUMERIC_REPORT/HISTORY_FACTS/ACCEPTANCE and update STATUS He's not launching the second call EC/solver Re-community `../build_report.py` It only applies to the first phase and updates it STATUS; After that, you should follow the actual report `report.py`.

Use it to continue STATUS.json. No GUI/ODB runtime, previous versions OpenSSL They don't count as verified wallets into runs strictly SYNTHETIC; parser non-scanning/network.
