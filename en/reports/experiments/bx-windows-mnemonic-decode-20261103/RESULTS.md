> English machine translation of the [Russian source](<../../../../ru/reports/experiments/bx-windows-mnemonic-decode-20261103/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# BMD-01 Loss of zeros confirmed by official Windows BX

03.11.2026. **Official BX2.0.0 Windows x64 Really remove the lead
zeroes32-bit-block mnemonic-decode.** Checked out the real one
CLI-chain encode→decode→hd-new real-world stdout into stdin next
This closes the main gap of the previous team source-only conclusion EMS-01.

SHA-256 EXE:
`d60329e6dacc7edda87c7c6ad12a79a5f556199a51658b6b66ddc26827118832`.
[Official asset](https://github.com/libbitcoin/libbitcoin-explorer/releases/download/v2.0.0/bx-windows-x64-mainnet.exe).
The file is copied unchanged from a fixed historical audit.
Original dependency EXE Now it is not possible to verify this behavior:
measured executable on Windows. This is not a new audit of all the functions of a binary.

## What really happened?

| Reference entropy | Actual outcome decoder | hd-new |
|---|---|---|
| `baadf00d` ×8 | same32 byte | xprv, exit0 |
| `00112233` + `baadf00d` ×7 | `112233` + `baadf00d` ×7,31 byte | other xprv, exit0 |
| `01122334` + `baadf00d` ×7 |63 hex-figure | invalid argument, exit−1 |
|32 zero-byte | `00000000`,4 byte | seed less128 bit exit−1 |

Exit−1 observed Windows subprocess how4294967295. Precisely bytes, including
starting-point CRLF decoder, return codes and stderr preserved SMOKE.json - an artifact of the initial study (`SMOKE.json`; outside the picture)
and852 unique native call logs - an artifact of the initial study (`calls`; outside the image cwd separate,
hollow explicit config, BX_* environment remote,10s timeout for a child trial.
Network teams and real-world teams wallet/private inputs It wasn't.

## Controls

- **216 codec cases**, They all matched the independent model136 formerly
  RNG seed (0,1,2³²−1), position/width hex-blocks, internal odds
  Loss of numbers, zero blocks, extreme permissible/deflectable lengths and entropy16.
- **129 accepted master-xprv** tested Base58Check casually HMAC-SHA512:
  scalar and chaincode coincided with the actual transformation seed.
- **180 final HD children**:3 modified seed ×20 formerly HD-scheme ×synthetic
  number1/50/71. Normal/hardened children, parents xprv matched
  independent Python affine-EC model.32→16-byte accepted case on.
- Prepared limited CPU worker passed **20 positive +20 negative**
  filter targets from native binary traces, multitude20 candidates,
  abandonment capacity19, borderline uint32 and throwing away the already covered inputs.
- In vetted207 case of reference length32:83 unchanged,40 changed_valid,
  82 odd-hex reject,2 too-short reject. This is a specially designed control
  sample, **not estimating full domain frequencies**.

Binary acceptance is an artifact of the initial study (`BINARY_CONTROLS.json`; outside the picture), bytes traces - an artifact of the initial study (`BINARY_TRACES.json`; outside the picture),
HD traces - an artifact of the initial study (`HD_TRACES.json`; outside the picture), CPU worker controls - an artifact of the initial study (`BLOCK_CONTROLS.json`; outside the picture.
Real solutions Puzzle/holdout All the new keys are synthetic.

## Separate search area prepared

`uint32 → MT19937 →32×%255 →8 uint32 BE chunks → hex без leading zeros → bytes → BIP32`.
New input accepted only **even-length hex from32 before62 symbolism**,
idiom effective master seed16…31 byte64 already covered E15, odd
hex and<16-byte seed spurned by reality BX. You can skip them before HD.

Odd losses in different chunks It can be given an even length: removal
Only whole zero bytes are wrong16 byte
No area.32→16-case does not necessarily coincide with E15 entropy16 equally RNG seed.

Save **flatly20 scheme E15 baseline length32, id20…39**, without any new parents,
indexes, RNG or masks. Training1–50, holdout51+ after the candidate.
[Exact specification](<SEARCH_SPEC.md>), SCHEMES.json - an artifact of the initial study (`SCHEMES.json`; outside the picture),
standard - an artifact of the initial study (`search_reference.py`; outside the picture), bounded CPU worker - an artifact of the initial study (`block_reference.py`; outside the picture.

**The basis for a separate search series now exists.** The next stage is a new one
copy CUDA HD-code with this transform/predicate variable length seed,
Reception and measured pilot. Full search CUDA-pilot and cost assessment
There is no such thing as readiness; unattended full-run It's not coming.
46,49s — time to collect native controls, It's not search speed.

Old ones EMS-01/E15 artifacts/checkpoints It's saved. The result doesn't establish
The author's program does not exclude the entire BX. There are no new real keys or bits.
