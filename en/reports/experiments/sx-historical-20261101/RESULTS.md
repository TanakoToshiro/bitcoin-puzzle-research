> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sx-historical-20261101/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E12 - historical chain SX

01.11.2026. **Historical Reproduction and Limited CPU-The pilot is complete. Full search not running, hypotheses SX Not yet excluded.**

Stage One: Recording History hd-seed before 15.01.2015, libwallet/libbitcoin algorithm uniform_int_distribution. Restore the achievable chain with controls to the pilot BX-Passes are not overwritten or repeated.

Sources, time of receipt, SHA256 and mistakes: SOURCES.json and sources/. Installers and downloaded programs are not automatically executed.

## Historic result

A specific compatible chain of May has been restored 2014 year: `sx hd-seed` argumentlessly → 32 byte `default_random_engine(random_device())` and `uniform_int_distribution<uint8_t>(0,255)` → `libwallet::hd_private_key` → `sx hd-priv [--hard] i` → mask puzzle. The installer didn't fix it commit So the version of the author's machine is unknown SX 16.05.2014, libwallet 10–13.05.2014 and EC/HMAC API libbitcoin 15.05.2014. Complete old set of libraries was not going: historical HD-Functions with explicit modern adapters. [Sources and method](<README.md>).

Two archival copies libwallet similar HD-Files and tests; checked SHA256 and 53 Git blob SHA1 The old primary files URL libwallet now404, It's a restriction on the origin of the archive, not a lack of a historical library168 HTTP-answers:159 successful9 HTTP404 (including remote ones)/The primary network errors of the environment are stored separately.

**Significant new clarification:** distinction uniform early SX. In the Preserved History, the Transition `random_fill` on `%255` present commit `252b5d…` from22.07.2014. Late RNG-Partially coincides with the already verified BX; It's not a reason to repeat the old full passes HD-chains entropy and indices. [87 snapshots and changes](<HISTORY.md>).

GNU 4.8.2/4.9.2 for this challenge: `state←16807×state mod2147483647`, `x=state−1`repeating `x≥2147483392`byte `x//8388607`. libc++3.5: multiplier48271, same rejection threshold, byte `x&255`It's not `%255` not-so-normal `%256`In both schemes, the full domain of normalized states is2147483646. Presence random_device does not expand this domain after the state is reported minstd.

Study of correction HD-generator2014. Replacement HMAC-key `Bitcoin seed` length13 finish-zero per line length12 **It does not create another by itself HMAC**: complement HMAC It makes them equivalent, which is proven. Other changes to the old library don't mix with the accepted May chain SX HD-child The teams were still incomplete; the team hd-priv check-up valid emerge24April.

The June code is also found `min_uniform_dist_size`: uint8 For a regular branch, uint16 for MSVC. This is a separate historical question left behind Windows-assemblies; results GNU/libc++ It doesn't apply to it.

## Control checks

- 4 historical C++-test libwallet,36 statements: BIP32-vectors, public derivation, serialize/deserialize, wrong type of key.
- 1173 RNG-for example,391 on GCC4.8.2/GCC4.9.2/libc++3.5. In every group254 Specially designed rejection cases engine all32 Byte matched.
- 11 730 precise extended private nodes coincided with an independent Python;192 child/public Checks are made with pure affinity arithmetic.
- 8 artificial HMAC-fault-proof invalid-master/invalid-child, admittance IL=0 and the absence of concealment retry/skip.
- The scanner restored8 One per circuit, the modified filters are rejected128 expected candidates;24 check-out/rejections coincided with Python.
- All83 published input solutions are checked by range and address;8 Affinity arithmetic is used, and the original file is saved SHA256.
- Continuation is carried out with the compulsory ban of new subprocess: completed51 JSON challenge/The entrances were unchanged, there was no re-scanning.

Artifacts: CONTROLS.json - an artifact of the initial study (`CONTROLS.json`; outside the picture), SCANNER_CONTROLS.json - an artifact of the initial study (`SCANNER_CONTROLS.json`; outside the picture), INVALID_CHILD_CONTROLS.json - an artifact of the initial study (`INVALID_CHILD_CONTROLS.json`; outside the picture), ACCEPTANCE.json - an artifact of the initial study (`ACCEPTANCE.json`; outside the picture.

## Pilot of the real data

Fixed8 diagrams RNG × normal/hardened child × i−1/i;32 byte entropy, direct-child master. For everyone RNG checked `[1,262145)`,4 block65536. Candidates49-bit filter number50 —0, errors0. Deferred decisions No51+ They weren't used to pick a model RNG covered **0,012207%** This is a negative result only for listed conditions; full search and exclusion of the family are not reported.

Numbers are automatically stored in [PILOT_RESULTS.md](<PILOT_RESULTS.md>) and PILOT.json - an artifact of the initial study (`PILOT.json`; outside the picture. GNU:27 375,65 state/s everyone4 circuitry CPU-extrapolation21,79h. libc++:25 514,54 state/s everyone4,23,38Together, the real scanner worked19,85c, external wall23,35c. It's single-threaded CPU-pilot; acceleration CUDA cost4090 Not until they measured.

**Permissible conclusion:** A historically specific new chain is reproduced and fit for final validation/No bit found. Pilot gives no reason to believe SX It's an improbable prefix that is too small a fraction of the space, and it wasn't chosen on a probabilistic basis, and priority is determined by verifiability and ultimate cost, not by an established link to the author.

## Continuation

The next stage is a separate one CUDA-implementation8 circuitry3070Ti, transfer HMAC/EC-Primitives from the previous series, comparing each intermediate and a real filter C++ distribution and Python, The pilot and the full aisle measurement, then the full range at an acceptable local price, with checkpoint/resume and a stop at the candidate's. [Specific assignment](<GPU_HANDOFF.md>)Additional paths, lengths, MSVC and BIP39 In this stage, do not automatically include.

The early entry of the beginning is saved above. [JOURNAL.md](<JOURNAL.md>)Final files capture COMPLETE.json. Old ones BX/E11 The artifacts are unchanged.
