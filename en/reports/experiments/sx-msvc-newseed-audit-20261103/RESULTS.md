> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sx-msvc-newseed-audit-20261103/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SXN-01 — newseed/genpriv: Native audit and search cost

**A new end-private chain has been confirmed SX/MSVC. A full search has not been launched.**
The native generator and daughter keys matched the independent model RTX 3070 Ti
Laptop full-fledged uint32-The four-way system is estimated to be approximately **5.49 daylight**.
At this stage, it was decided not to automatically switch to multi-day search.
Negative result for Bitcoin Puzzle It's not here.

## Accurate validated model

```text
uint32 seed, включая 0
  → MSVC std::default_random_engine = MT19937(seed)
  → первые 16 draw % 255
  → 32 символа hex в нижнем регистре, с сохранением ведущих нулей
  → 100000 раундов SHA256(previous_bytes || original_hex32_ASCII)
  → master private scalar
  → сжатый SEC public key, удалить первый байт → только X (32 байта)
  → offset = SHA256d(decimal(index) || ':' || branch || ':' || X)
  → private child = (master + int_big_endian(offset)) mod secp256k1_order
```

First previous_bytes equally ASCII hex-line; then this 32 byte
preceding SHA256. V SHA hitch **line hex**, not 16 decoded bytes.
%255 byteless ff. A domain is nothing more 2^32 the initial sequences;
pairwise uniqueness of all entropy It's not claimed.

Future final staging: receive/change × index i−1/i - four schematics
PROPOSED_SCHEMES.json - an artifact of the initial study (`PROPOSED_SCHEMES.json`The puzzle mask is the same.
`2^(i-1) + (private_child mod 2^(i-1))`The full volume 4 294 967 296 seed,
17 179 869 184 pair seed×scheme. The old ones 20 BIP32-The ways don't apply here.

## Why is it historical? X-only variant

V commit libwallet `5a01940e282e94279403b7db211148fb49aac7ce` from 10.05.2014
**simultaneously** There have been two substitutions: OpenSSL BN_rand → single-seed engine %255,
clear uncompressed public key → `secret_to_public_key(secret)` secondly
argument. API libbitcoin since the introduction 24.04.2014 has compressed=true
It's the default libwallet Then remove the first byte as if it were a prefix 04.
Therefore, in our historical collection remains X, not X||Y.

[Historical diff libwallet](https://github.com/EdgeApp/libwallet/commit/5a01940e282e94279403b7db211148fb49aac7ce),
[API libbitcoin](https://github.com/libbitcoin/libbitcoin-system/blob/382fa8c5abd5c98df10908d4db86e07bb2f0e8ac/include/bitcoin/utility/ec_keys.hpp).

Prior to this, the changes were used BN_rand requestingly 128-bit number and
uncompressed public key **MT + routine 64-byte Electrum MPK**
In the history that you've seen, the standard version is not validated. It's only verified
in a separately labeled diagnostic assembly with compressed=false not offered
second-to-last uint32-Search. Examples README regular XY-Ways.

History confirmed by six Git blobs, including the same May file in two
archives libwallet. June commit present EdgeApp; his absence
BWallet It was not replaced by a fictional coincidence. HISTORY.json - an artifact of the initial study (`HISTORY.json`; outside the picture.
This is a conclusion about the available history and specific dependencies, not about all third-party ones
Forks and not about using the program by the creator of the puzzle.

## Native Assembly and Limitations

Used in full x64-assembly SXM-02: SX `76813dd9`, libwallet `f7289e1b`,
libbitcoin `e11af9c4`, CTP Nov2013 / VS2013 RTM / SDK8.1. Old source,
facilities, libraries and EXE One new test has been recompiled object
electrum_keys substitutive uint32 instead random_device and tracks;
The rest of the program is linked from the previous objects to a new folder.
Diagnostic XY EXE has a separate additional patch and is not issued for
The original program. BUILD.json - an artifact of the initial study (`BUILD.json`; outside the picture), `build/*/instrumentation.patch`.

**A confirmed path is working private export `newseed → genpriv`.** Full-fledged
Public derivation is not confirmed by this: `generate_public_key` read out
32 byte Y starting `MPK.data()+32`though logically MPK only 32 byte.
This incorrect public path has not been followed or turned into a search model.
In diagnostics XY-Public derivation coincided with independent points.

`set_seed` cut off LF/CRLF, limitation hd-priv from SXM-02 bearable
on genpriv. Uppercase hex It changes stretching. newseed lead out lowercase.
Private scalars and their masks can be checked regardless of historical background
uncompressed WIF and the faulty public export of this image.

## Controls

- **388 basic native-challenge**: 16 spaced uint32 seed, 32 newseed
  for two assemblies, 256 genpriv, 32 diagnostic genpub, 16 comparisons with the original
  EXE, 12 cases of formatting and 8 negative cases.
- **15 supplementary native-challenge**: seed 453/474/925 leading or
  zeroing entropy; original genpriv It's been tested on four circuits.
  Previous ones 9 challenge PRELIMINARY.json kept separately and not included in 403.
- Rolled entropy, full stretch, SEC public key, MPK, sequence offset and WIF.
  Refusal of the wrong person SXN_TEST_SEED refer to the test source seed he
  Ends the process with an error, not to a user argument newseed.
- CUDA: 13 SHA256 padding/length-vectors MT at the limits of range,
  0/1/2/999/1000/1001/100000 rounds, different divisions into kernel launches,
  64 private child comparison native more 12 After a series on sustainability,
  four-way/negative filters, seed 0 and 2^32−1, wrong boundaries.
- Second reading recalculated 16 roots 256 private children,
  checked Base58Check, native-transcripts, source objects and GPU pins.
  Seals SXM-01/02/03 They're still there. READBACK.json - an artifact of the initial study (`READBACK.json`; outside the picture.

## Measurement by RTX 3070 Ti Laptop

Time includes time MT/hex, 100000 SHA256, public-point CUDA-core,
four private keys and a synthetic filter CPU.
Future not included checkpoints, interruptions and restoration of the process.
Every day stretch kernel performs no more 1000 rounds; condition is maintained
on GPU. Basic kernel: 56 registerless spill/local memory.

| Series | Processed seed | Speed, seed/s | Full Domain Prediction |
|---|---:|---:|---:|
| Primary pilot, 3 packet-size | 114,688 | 9,240.18 | 5.38 daylight |
| Sustainability, 5 × 65536 | 327,680 | 9,060.28 | 5.49 daylight |
| 64 threads, two-pack | 131,072 | 9,322.75 | 5.33 daylight |

In addition, on large packages compared 64/128/256 threads forward and reverse
The best average result is the best 64. Checked out 18 independent
full key evidence. Distribution of individual keys stability-blocks correspond
**5.32–6.08 daylight**. These are short synthetic measurements, no guarantee
Continuous operation at the same speed for several days and not lower
price limit for other implementations/devices.

PILOT.json - an artifact of the initial study (`PILOT.json`; outside the picture), STABILITY.json - an artifact of the initial study (`STABILITY.json`; outside the picture),
LARGE_BATCH_TUNING.json - an artifact of the initial study (`LARGE_BATCH_TUNING.json`; outside the picture. Repeated synthetic
The ranges are considered to be the work done to measure, rather than a unique coating.

## Decision on applicability

**The model is new, reproducible and finite; E15/BIP32 and SXM-03 She's not excluded.**
There is reason to keep her as a candidate for a separate search
The current price is approximately 5,5 daylight GPU, (a) the author's connection with this
There's no private chain installed. It doesn't automatically start.
The next computational step is to reduce the price or separately allocated a full
passageway X-only circuitry durable checkpoints and independent verification
nominees1–50. XY-The option is not added without a new historical basis.

**Coverage of the present Puzzle: 0.** Real keys/holdout have not been used;
No new keys or bits have been received. The result of this step is an accurate model
The proven history, the controls taken and the price measured are not the exception of the hypothesis.
DECISION.json - an artifact of the initial study (`DECISION.json`; outside the picture.
