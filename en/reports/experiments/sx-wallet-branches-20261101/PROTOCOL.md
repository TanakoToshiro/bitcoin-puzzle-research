> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sx-wallet-branches-20261101/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E13: 32 branch-schema SX

Isolated continuation sx-cuda-20261101. The former eight direct-master The circuits are not scanned.
The exact table SCHEMES.json, posture 16 circuitry GNU16807 and LLVM48271.

Schemes 0–3: parent m/0; 4–7: m/0'/0; 8–11: m/0'/1.
In every quartet final index: i−1, i, 0x80000000+i−1, 0x80000000+i.
12–13: m/44'/0'/0'/0; 14–15: m/44'/0'/0'/1; final normal i−1/i.
Don't add hardened final into BIP44, new accounts, lengths parents.

Entropy — 32 the previous exact byte of the previous SX uniform/rejection:
state←a×state mod2147483647; x=state−1; reject x>=2147483392;
GNU byte=x//8388607, LLVM byte=x&255. Seed one-on-one master, Not on a mission.
Domain of each RNG: [1,2147483647), 2048 block-wise 1048576, last 1048574.
Mask puzzle retain i−1 bit i−1.
GPU filter 49 minor-bit50; CPU checks out1–50;
holdout №51+ only after training-match. Any real candidate will remain
and stops the series from being independent affine/An error is not a negative result.

Controls: reference pins; 1173 RNG/entropy/draws; Exact parents, children and intermediates
historical libwallet, Python and CUDA; affine-check-up 32 planted-circuits;
formal BIP32-vector 1–4, including leading zeros; positive/negative all the circuits;
boundaries targeted rejection, bits0, overflow, invalid-master/child; stop/resume,
Hashes of completed blocks, competitive lock and retry Windows/WSL sharing violation.
Pilot: 3 block 1048576 state RNG. Measure API perf_counter and UTC,
CUDA events Separately; do not carry the speed of the previous series.

SHA256 inputs It's fixed until it's received and it's searched prev_hash,
config_sha256 own digest. Checkpoints They are not overwritten when continuing.
Re-admission/pilot with the same inputs Persistent recording error
stops execution, temporary sharing violation repeat rename.
Any change to the computational inputs requires a separate series.

Official sources: sources/bip-0032.mediawiki and bip-0044.mediawiki,
URL/date/SHA256 into PROVENANCE.json. These paths are historically possible, but the author's choice is not proven.
The number of hypotheses and the completeness of the coverage are not the probability of the model being true.

The new version inherits EC/HMAC/RNG accepted SX; historical HD-function CPU remain
immutable, new wrapper It sets paths. setup-transfer: prepare.py, completion
vectors finish_prepare.py, supplementation of tests: configure_controls.py; finalist
fixed manifest. Old ones SX/BX certificate/checkpoints They just read.
