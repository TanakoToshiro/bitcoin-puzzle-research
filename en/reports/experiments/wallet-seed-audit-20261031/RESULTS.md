> English machine translation of the [Russian source](<../../../../ru/reports/experiments/wallet-seed-audit-20261031/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E9 First Passage Journal for Historical Wallets

Date: 31.10.2026, Moscow. ID `wallet-seed-audit-20261031`. [Basic protocol](<PROTOCOL.md>), [pilot BX](<PILOT_PROTOCOL.md>)Changes to previous computing projects have not been implemented.

## Phase 1 Map of staff creation and migration, completed

Official sources checked Electrum 1.9.8, bitcoinj 0.12, Bitcoin Core 0.9.3, Libbitcoin Explorer 2.0.0, historical libstdc++ GCC 4.9.2 and python-ecdsa 0.11. Armory taken from an already tested E3, without recalculating the chains commit/tag, UTC receiving SHA-256 — SOURCES.json and sources/. Exact areas and conclusions are summarized in WALLET_MAP.md.

A specific, limited path has been found: `bx 2.0.0 seed` use `default_random_engine(random_device())`, then every byte `engine()%255`In libstdc++ 4.9.2 default_random_engine is minstd_rand0, s 2^31−2 non-zero states. So even qualitative ones random_device does not give this path more than the specified number of possible sequences; 128/256-The bit length of the output does not restore lost entropy. It's a reproduction of a known class of problem, not a statement of a new one CVE use bx writer puzzle.

This model is different from previously excluded Python seed32: Here the short state generates a **seed wallet**, later HMAC/BIP32 It forms daughter keys. Linear observations MT The child keys themselves do not belong to it.

Additional lead: bitcoinj 0.12 When you migrate your old wallet, you take the first one 16 bytes of the oldest private key not marked for rotation BIP39 entropy. It's not arbitrary timestamp and not vulnerability if the original key is of good quality; but the weakness of the old key may persist after the transition to HD. The relationship of such a scenario with puzzle It's not set.

Electrum 1.9.8 Select the old system; optional bip32 So we're going to take a different path in this release, so the statement "before" Electrum 2.0 none BIP32 It would be too strong. In both of the paths we looked at, the initial entropy is taken through ecdsa.util.randrange; dependency-wise 0.11 default os.urandom. Indicated in setup.py dependency range 0.11, All the assemblies are untested by this.

## Phase 2 - Implementation controls, completed

CONTROLS.json - an artifact of the initial study (`CONTROLS.json`; outside the picture: 20 comparisons seed-bytes C++/Python; 14 formal master/child-vectors bx; 8 BIP39-vectors for the migration chain; 16 positive restorations of artificial small state in all pilot circuits; change of one observed bit is rejected; 16 points verified by independent affinity Python-It's arithmetic, it's a match for migration seed Two synthetic keys with the same first 16 Bytes.

Monitoring C++ fitted g++ 13.3, (a) historical definitions are compared by source GCC 4.9.2. A full historical wallet/The old compiler didn't run. BIP39-control ASCII-vectors; generalized Unicode-Normalization is not declared. The time of this control stage is recorded in JSON.

## Phase 3 - limited pilot BX, finished

Fixed 16 diagrams, normalized states 1..65536. The state, the hashes and the first contradictions are stored in blocks [PILOT_RESULTS.md](<PILOT_RESULTS.md>), the baseline data PILOT_RESULT.json and pilot/. Low states are not considered more likely; this prefix is chosen to test the process and measure the price of a full cycle 31-The bit area is not checked at the current stage.

Completed 64/64 block, 65536 condition 1048576 Status-Scheme Tests: Candidates who have passed all training decisions No1–50, No; Deferred Nos51+ We didn't use it to select the model. All the checks were on a particular mismatched known junior residue, not a timeout 37,390 c; separately control- 0,428 c. Complete state pass 1..2^31−2 It's not done. The proportion of space is about 0,00305176%; A negative result does not exclude the family and does not assess the likelihood that the author has chosen it.

COST_ESTIMATE.json - an artifact of the initial study (`COST_ESTIMATE.json`; outside the image: measured speed about 1753 normalized states/c 16 Linear extrapolation of the same sequence Python-And the whole area code 14,18 It's not GPU-The next practical step is an independent native filter with the same historical vectors and a price measurement of the full end pass.

## Phase 4 - Reception, complete

ACCEPTANCE.json - an artifact of the initial study (`ACCEPTANCE.json`; outside the picture: checked 52 hash of stored network response bodies, continuous coverage 64 The blocks, the number of circuits and the first inconsistencies 0 new search blocks; SHA-256 and mtime 65 The files (blocks and controls) have not changed Markdown reassembled bytewo equally; damaged copy of the coating rejected ENVIRONMENT.json. The hashes of the final artifacts FINAL_MANIFEST.json.

**Outcome of the first passage:** Confirmed a specific historically acceptable weak chain of creation seed into GNU-variant bx 2.0.0; built and tested its limited detector for the public puzzle. New private key/There's no bat C++, The lengths, routes and methods of import require separate models bitcoinj-The exact mechanism of migration is restored, but a limited number of old keys and communication with the author puzzle Not yet.

## Errors and limits of sources

First sandbox-request failed DNS; Public source loading is performed after authorized network start-up. WSL originally E_ACCESSDENIED, After the local launch is allowed, the short control is compiled. These are environmental errors, not generator results.

Some predictive paths of addiction have returned HTTP 404/422; Errors saved. python-ecdsa util.py rooted ecdsa/, not src/ecdsa/. LinuxSecureRandom.java tree-selected bitcoinj Not found: a specific provider Android/JVM This aisle has not been rebuilt libbitcoin v2.0 January 2014 no-dependence bx movable version2: installation bx I was obviously referring to this branch BIP32 Checked out your own historical tests bx; historic build-lock No dependency.

The first funding date limits the possible generation time from above, but does not specify the day of creation seed. The versions of the programs that appeared later are not transferred to the 2015 A year without a separate historical basis Milk Sad 3.x early bx 2.x different.
