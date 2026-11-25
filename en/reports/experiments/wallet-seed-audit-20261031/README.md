> English machine translation of the [Russian source](<../../../../ru/reports/experiments/wallet-seed-audit-20261031/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E9 — seed Historic wallets and first pilot BX

First pass complete 31.10.2026. [Journal](<RESULTS.md>), [Wallet card and primary sources](<WALLET_MAP.md>), [pilotage](<PILOT_RESULTS.md>).

Specific result: for bx 2.0.0 + GNU libstdc++ The path is confirmed with no more 2^31−2 pre-state HMAC/BIP32. This is not the author's installed generator puzzle. Nana 65536 normalized states and 16 There are no coincidence patterns; it's just a limited prefix, not an exception to the family Electrum/Armory and bitcoinj Discussed separately from migration/Imports found bitcoinj-The migration path requires an independent hypothesis about the old key.

## Reproduction

From `research/puzzle71-hypotheses`:

> Executable code/The commands are omitted in the documentary copy.


Python 3.11 existing coincurve. Versions -- ENVIRONMENT.json. Public control examples BIP32/BIP39, Synthetic secrets and machine results are stored locally. Old work projects are not imported; verified works are read 83 decision-making E7 and independent arithmetic E8, Their hashes are fixed in blocks.

`fetch.py TARGETS*.json` downloads selected public sources without executing their code. sources/ It stores successful answers and errors; existing responses are not re-uploaded SOURCES.json is a fixed input: new downloads/corrections should be made in a new audit, otherwise resume rejects the hash discrepancy.

A short one of your own C++ check-up g++13 into WSL gave out RNG_CPP.json. Historical GCC4.9 The whole old wallet didn't start up. It was built only in this folder; it was a binary rng_control A synthetic test, not a search wallet.

## Files

- PROTOCOL.md and PILOT_PROTOCOL.md Area of study and fixed 16 schemas.
- SOURCES.json, sources/ — URL, UTC, SHA-256, raw-answers.
- CONTROLS.json, RNG_CPP.json independent/Official control comparisons.
- pilot/block-*.json — 64 Completed blocks with input hashes, time and first contradictions.
- PILOT_RESULT.json, PILOT_RESULTS.md - aggregates without re-search.
- ACCEPTANCE.json - checking the coverage of blocks, skipping finished stages, hashes and control data.
- FINAL_MANIFEST.json - hashes of artifacts at the time of completion.

## Future steps

1. Independently reproduce the full historical profile GNU-assemblies and minimum filter of all 16 diagrams; evaluate optimized CPU/GPU-cost 31-bit space. Current space Python-The pilot doesn't do a complete brute.
2. Check the differences libstdc++/libc++/MSVC as separate fixed families. You can't change `%255` habitually `%256`.
3. Expand BIP32-path/indexation only by individual hypotheses BIP39, Electrum import, arbitrary passphrase, child-of-child chains or omissions.
4. For bitcoinj-Look for a verifiable basis about the original old key 128-The bit space remains virtually inaccessible.

Known class of problem bx It's not our new cryptographic find, but the benefit of the result is a historically appropriate and ultimate model of weakness seed, straight MT-flow puzzle-keys.
