> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-eight-independent-20261031/REPRODUCE.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Continuation and independent reproduction E1j

It is enough to read the results README.md, CONCLUSION.md, TABLES.md and STATISTICS.json. For the reassembly of numerical tables used report.py: To check the stored inputs, the counters, and to skip the finished work acceptance.py after the series has been completed.

The assembly was performed locally, without packet installation, by a team from the root workspace:

> Executable code/The commands are omitted in the documentary copy.


For your own assembly reconciliation, use another output file or a separate copy of the study: binary participate manifest It should not be replaced in a fixed launch. BUILD.json contains a compiler, flags, SHA source/binary/hash libcrypto. Same thing libcrypto You don’t need a fixed environment or a new experiment with a clearly different version.

An example of accurate public input can be taken from any runs/*/native-input.txt. The entrance consists of a single line SEARCH K N Q salt start1 ... startK; All private scalars are missing worker Takes several such lines sequentially, outputs one JSON It resets the local search state between tasks. `--version` show off OpenSSL; `--selftest` It gives out separate arithmetic controls.

experiment.py run check-in manifest, FIXTURES_HASH and DONE If you're done, the child processes don't start. If the stage is interrupted, the finished requests are skipped, the rest continue from the saved set. The algorithm didn't change from the intermediate browsing T, A new folder and a new independent confirmation set are needed.

Reproducibility files:

- manifest.json The unchanging scientific inputs and plan;
- BUILD.json, VERSIONS.json - surroundings;
- VERIFIER_ONLY_FIXTURES.json, FIXTURES_HASH.json Artificial secrets and frozen generation, only for the verifier
- controls/ — 24 arithmetic and 144 search controls;
- runs/ — 336 The Native Dimensions and Eight Python-reconciliation;
- reference-audit/ two additional branches after observations, excluded from comparative statistics;
- RETRIES.json All measurement cases that require repetition;
- ACCEPTANCE.json, FINAL_MANIFEST.json - the final acceptance and hashes of artifacts.

Format of time: events in UTC, user-date report Europe/Moscow. Expenses CPU inside native It doesn't include writing code/assembly/data generation. `roundtrip_seconds` It takes into account the exchange with the process. RSS A high level of memory usage for one process per session, rather than the sum of memory of all tasks.
