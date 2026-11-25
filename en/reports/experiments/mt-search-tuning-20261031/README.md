> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-search-tuning-20261031/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E1l - reproduction

[Protocol](<PROTOCOL.md>), [journal](<RESULTS.md>), [table](<TABLES.md>)And then, after completion, CONCLUSION.md.

From `research/puzzle71-hypotheses`:

> Executable code/The commands are omitted in the documentary copy.


Compilation of the new source: `g++ -std=c++17 -O3 -Wall -Wextra native.cpp -lcrypto -o native` locally WSL, In this folder, you don't overwrite the stored measured binary; you do the verification assembly somewhere else. Manifest It fixes the source, the binary harness Public input: `SEARCH K N Q salt mu_factor t_factor start...`The algorithm doesn't read files and it doesn't get a secret/ID/seed.

Version and hash: BUILD.json, VERSIONS.json, manifest.json. Search queries queries/<SHA>/request.json and native-input.txt. The results of the aggregated measurements runs/. The only secrets are in the verification code VERIFIER_ONLY_FIXTURES.json. The choice of parameters is unchanged after SELECTION.json; A new study requires a new folder and a new test.
