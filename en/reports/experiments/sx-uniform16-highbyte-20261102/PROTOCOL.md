> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sx-uniform16-highbyte-20261102/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E14 — SX uniform16 >> 8, cut-off 23 May 2014

Source: commit893f2c101b8a54f6855427660ba9173ca7c28c2f, src/hd-seed.cpp.
Original, URL, time of receipt SHA256 preserved sources/ and PROVENANCE.json.
The cut-off date is not approved by the date of the first appearance of the algorithm.
In this file uniform_int_distribution<uint16_t>(0,65535) apply withoutifdef;
The result is taken as the highest byte MSVC It does not limit the code MSVC.
In the absence ENTROPY team32 bytes and transmits them libwallet::hd_private_key.

## Precise RNG-model

m=2147483647; a=16807 GNU, a=48271 LLVM. Initial state normalizes seed%m,
zero replaced1. After the transition x=state−1. Primary x>=2147418112 repeat the transition.
GNU4.8.2/4.9.2: uniform16=floor(x/32767), byte=uniform16>>8=floor(x/8388352).
libc++3.5: uniform16=x&65535, byte=(x>>8)&255. Before receiving32 received bytes.
No replacement for uint8 uniform, %255 simple state>>8.

The old threshold2147483392 divider8388607 It doesn't apply here. The first rejection has
65534 possible engine-exit, not254. All relevant initial states
built through a^(-1) mod m and checked by each of the3 historical distributions.
198540 Control cases are checked for accurate32 byte engine calls; additionally
byte boundaries are checked GNU, border rejection, normalization and determinism samples.
GNU4.8/4.9 Two implementations of control, one numerical version of the full search.

## The final set

Totally40 diagrams20 each RNG; entropy32, former puzzle-Mask.
Schemes0–3 parent m/0;4–7 m/0'/0;8–11 m/0'/1: normal/hardened i−1/i.
12–13 m/44'/0'/0'/0;14–15 m/44'/0'/0'/1: normal i−1/i.
16–19 parent m: normal/hardened i−1/i. Exact listing SCHEMES.json.
The choice of these paths retains the coverage of previous E12-GPU/E13, but changing RNG/seed.
Previous negative results are not used instead of new model calculations.

Domain of each RNG [1,2147483647), 2048 block1048576, last1048574.
Totally85899345840 state×scheme. GPU filter out49 bit50; CPU check-in
famous1–50. Holdout №51+ only fully training-match. The real candidate
The series is maintained and stopped until independent affine/address check.

## Acceptance and implementation

SHA256 source, accurate RNG-reproduction Python/C++/CUDA,1173 HD-script,
11730 intermediate extended nodes,23460 final child nodes,40 planted-circuitry
positive and negative training/holdout case and independent affine.
Official BIP32-vector1–4, EC/SHA/HMAC, HMAC serialization, invalid nodes,
bits0/overflow, rejection/boundaries, stop/resume, lock and retry file record.
Mistakes don't count as negative results full-pass through to a successful reception.
Pilot--3 block RNG; measure API perf_counter, UTC and CUDA events separately.
Then two consecutive full passages on the local3070Ti. The cloud is not in use.

The received inputs are fixed before the passage. Each block corresponds to a chainSHA256.
Completed blocks don't repeat as they continue Windows readback check-in
full coverage and pins, Then the result and the general journal are automatically generated.
Old experiments/checkpoints They don't change SX not proven with the author;
MSVC engine/distribution, other parents/lengths Other wallets are not checked here.
