> English machine translation of the [Russian source](<../../../../ru/reports/experiments/wallet-seed-audit-20261031/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E9 Historical wallets: source seed derivation

Date: 31.10.2026, Moscow, limited first pass at the request of the user, the aim is to establish real historical ways of obtaining seed and child keys and select a testable hypothesis for a public series Bitcoin Puzzle. It's not supposed that the author used a specific wallet puzzle A separate step after receiving the full child key.

Check it out Electrum 1.9.8, classical Armory preserved commit 2015-01-08, bitcoinj 0.12 and Libbitcoin Explorer 2.x Chronology confirmation prior to initial funding puzzle. Bitcoin Core Use it as a control of historical absence HD in the old version selected; modern BIP39/Electrum-formats are not automatically transferred back.

First, trace the chain entropy → seed → master/chaincode → child. Separate staff creation, import/Recovery and migration of the old wallet commit/tag and date, dependency RNG, Initial notifications of specific errors Do not repeat checks already completed Armory/Electrum without changing the stage.

Respond to network responses with URL, UTC and SHA-256. Load limitation: 8 MiB/answer, time-out 25 c, no more than four threads: Access errors and missing files are not an exception to the model; third-party applications should not be installed; downloaded programs should not run as applications; isolated synthetic checks of minimum viewed functions with public reference values are allowed.

The first computational pilot - only after fixing a specific model and controls CPU, summarily 15 Don't run a full brute force seed, GPU-Searching or searching for wallets outside the public domain puzzle. Time for development/If a historically valid weak path is not found, the result is a proven map and boundaries, not a fictional one seed-Too much.

Each completed stage shall be reflected in RESULTS.md. Save machine results, errors, versions and hashes. The useful result can be negative: the usual path uses the OS entropy, therefore timestamp-This conclusion does not prove the entropy of the author's machine/The migration is not carried over to the usual new creation.
