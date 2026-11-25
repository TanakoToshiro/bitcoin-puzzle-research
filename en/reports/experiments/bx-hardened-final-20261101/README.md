> English machine translation of the [Russian source](<../../../../ru/reports/experiments/bx-hardened-final-20261101/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E9f — hardened final children twofold BX-generator

Only section allowed1 [roadmap](<../../RESEARCH_ROADMAP_20261101.md>). [Current results](<RESULTS.md>), [immutable/journal](<JOURNAL.md>), [protocol](<PROTOCOL.md>)The old ones checkpoints It doesn't change. A negative result only applies to32 listed tuple.

Orchestra inWSL Ubuntu-24.04 from this folder:

> Executable code/The commands are omitted in the documentary copy.


The first team audits prior passes, accepts both versions, runs full passes sequentially and checks the result. SERIES.lock Prohibits the second trial. PROCESS.json retainPID, time, boot_id and/proc/stat If the process is alive, backup automation should not run another instance COMPLETE.json plus FULL_AUDIT.json; single-handed STATUS=complete Without these certificates, it is not enough.

The preparations were carried out separately: setup.py intoWindows Python3.11 venv version16807/48271. Every day cpu/search.cpp gather up g++ -O3 -march=native -std=c++17 -fopenmp -Wno-deprecated-declarations s-lsecp256k1 -lcrypto. prepare.py and batch_check.py prepare launchWindows venv afterward CPU-assemblies, then bash build.sh intoWSL. Do not recreate these files after acceptance: changes require a new version.

Controls/Pilots separately: python3 accept_core.py 16807, later48271. Audit of old aisles: python3 audit_previous.py inWSL: preserved manifest contain absolute/mnt/c He's just reading old catalogues.

To stop, create an empty fileSTOP At the end of the series, the orchestra will transmitSTOP current worker, And then you have to keep the completed blocks and come out, and then you can continue after you find out why, just delete those blocks STOP-Files in a new series and repeat run_series_v2.py. Candidate/Error not automatically bypass. Don't edit old ones checkpoints, Don't count the error as a negative result, after correcting the status reading race03:37 relevant RUN_INPUTS_v2.json rooted stdout-v2.log/stderr-v2.log; The original binding is retained for audit stdout.log/stderr.log.

No cloud lease, BIP44, other lengths entropy or roadmap. The computer must remain on. The received files of each kernel are frozen FINAL_MANIFEST.json; root RESULTS.md updated every10 seconds during the full pass.
