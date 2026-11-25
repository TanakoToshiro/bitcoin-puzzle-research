> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sx-msvc-distribution-20261103/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SXM-01 - precise MSVC distribution restored

03.11.2026, Europe/Moscow.

**The byte generator is reproduced by the old compiler for x86 and x64. May
`uniform16 >> 8` Not confirmed as a full-time employee MSVC-team.
In June, another one came along low-byte It's made of synthetics
Controls and measurements; complete passage Puzzle It didn't start.**

Complete native assembly SX Historical dependencies remain unconfirmed.
This limits the recommendation of a full search, although it itself RNG is no longer
It's based on the name of the compiler.

## Reconstructed tool chain

- CTP Nov2013: compiler `18.00.21114`, `_MSC_FULL_VER=180021114`.
- Original STL/CRT RTM `12.0.21005`including `random` and `xutility`.
- Headers and import libraries Windows SDK 8.1.
- Local CRT DLL for both architectures; there was no system installation.

[An announcement Microsoft from 18.11.2013](https://devblogs.microsoft.com/cppblog/announcing-the-visual-c-compiler-november-2013-ctp/)
indicates that CTP Changes the compiler and uses a standard library VS2013.
Received [formal CTP](https://www.microsoft.com/en-us/download/details.aspx?id=41151)
and fragments needed [formal ISO VS2013](https://download.microsoft.com/download/2/5/5/255DCCB6-F364-4ED8-9758-EF0734CA86B8/vs2013.3_dskexp_ENU.iso).
From ISO Only the selected files are read through HTTP Range. Package STL inside
imagery RTM 12.0.21005: number Update 3 name ISO not given
Title version. Contemporary reprint dates Download Center are not
The basis of historical dating.

Checked five Authenticode-signature Microsoft, 14 payload hashes signed
manifestos, 2 156 recovered files and 212 Git blobs SX.
SOURCE_AUDIT.json - an artifact of the initial study (`SOURCE_AUDIT.json`; outside the picture), SIGNATURES.json - an artifact of the initial study (`SIGNATURES.json`; outside the picture),
GIT_SOURCES.json - an artifact of the initial study (`GIT_SOURCES.json`; outside the picture), TOOLCHAIN_FILES.json - an artifact of the initial study (`TOOLCHAIN_FILES.json`; outside the picture.

## Precise algorithm

```text
default_random_engine = MT19937, инициализированный одним uint32
uniform_int_distribution<uint16_t>(0, 65535)(engine) = uint16_t(engine())
```

Full range uint16 choose `_Get_all_bits()`In `_Rng_from_urng`
intermediate 32 bit; range MT equal 0…2³²−1, therefore `_Bits=32`,
There are no discards and one call is carried out engine. Return uint16 leaves
junior 16 Type widths are natively tested for both architectures.

| SX-code | Precise byte |
|---|---|
| May `uniform_dist(engine) >> 8` | `(MT.next() >> 8) & 255` |
| June `uint8_t(distribution(engine))` | `MT.next() & 255` |
| Late `engine() % uint8_max` | `MT.next() % 255`generator E15 |

For seed=1 first MT-word `0x6ac1f425`: distribution giver `0xf425`,
byte `f4`June `25`, BX `%255` — `46`In the June stream appears
`ff`impossible for `%255`These are different maps seed→entropy. Such as
Counterexamples do not prove non-intersection of multiple outputs or uniqueness
everyone entropy. The upper limit of the number of sequences 2³²; seed 0 Let's say.

## History MSVC-draft

Checked out 211 ancestor snapshots from `893f2c10` before `252b5d18`including
Intermediate deleting and moving files: the dates below refer to commits
Not for published binary releases.

| State | Tested behaviour |
|---|---|
| 23 May, `893f2c10` | High-byte The code exists, but `hd-seed.cpp` into `sx_wallet.vcxproj` unconditional `ExcludedFromBuild=true`; the main project does not collect it. |
| Others high-byte snapshots | Totally 47: 13 excluded `main`, 34 global `invoke`not yet implemented `hd_seed::invoke`Of the last 23 without reference from the project high-byte MSVC No path has been established. |
| 1 June, `8ac6c1f5` | Team moved to `hd_seed::invoke`, the exception to the project is removed `>>8`: Now the minor byte is retained. |
| 3 June, `16547705` | The source graph links console main → dispatch → generated factory → `hd_seed::invoke` → `random_fill(32)` → `hd_private_key`The team and utility included libsx; absent ClCompile units It's not in this picture. |
| 22 July UTC, `252b5d18` | `random_fill` substituted `%255`This generator is already in place E15. |

Matrix - an artifact of the original study (`HISTORY_MATRIX.json`; outside the picture),
[springboard](https://github.com/libbitcoin/libbitcoin-explorer/blob/893f2c101b8a54f6855427660ba9173ca7c28c2f/src/hd-seed.cpp),
[transference 1 June](https://github.com/libbitcoin/libbitcoin-explorer/commit/8ac6c1f5f8988dc6efcec1bfd065296710e8e32e),
[June](https://github.com/libbitcoin/libbitcoin-explorer/blob/165477059fc79d1b69a2c44f5693e51efc09f673/src/hd-seed.cpp).

**Source connectivity is not a journal of successful linking of everything SX.**
The project requires libbitcoin, libwallet, obelisk old NuGet-dependency.
A complete consistent configuration of these dependencies is not collected here.
Natively assembled and executed isolated RNG/distribution-substitution-control
synthetic uint32 systemic random_device. Ready official
early SX EXE It's not verified EXE does not prove impossibility
The June version.

## Control and pilot

Native x86/x64 assembly CTP They gave the same results: **12 553
script 459 136 gateway**. Checked out 12 473 inherited
MT-vectors, long streams across borders 624/625/2500, seed 0 and 2³²−1,
ten specially specified exits URNG. For everyone distribution sample
confirmed MT draw. The standard is a separate scalar MT-model.
RNG_CONTROLS.json - an artifact of the initial study (`RNG_CONTROLS.json`; outside the picture.

The June Mathematical Model is completed **synthetical** pilot
`entropy32 → BIP32` formerly 20 scheme id20…39. It measures computational
The price, rather than making up for the historical background check of the entire program
Puzzle and holdout It is not read; artificial 49-bit target — `0x123456789ab`.

CUDA passed MT-vectors SHA/HMAC/EC/scalar-add, 17 BIP32-vectors scan20 against
affine CPU in five spaced intervals (28 seed), 20 positive/20
negative filters, overflow, invalid master/child, borderline uint32 and
positive control of the latter seed the last block.
GPU-Controls - an artifact of the initial study (`pilot-low32/CONTROLS.json`; outside the picture.

| Metrica | Result |
|---|---:|
| Benchmark | 5 group × 4 block × 2²⁰ seed |
| Synthetic seed | 20 971 520 |
| Seed × 20 scheme | 419 430 400 |
| Full time bands with recording | 23,052 s |
| API wall / CUDA events | 22,947 / 22,914 s |
| Speed of all 20 scheme | 909 754 seed/s |
| GPU init | 0,828 s |
| A clear memory GPU, without context | 557 064 byte |
| Forecast full full 2³² | 78,68 min |
| Range by group | 76,19–81,45 min |
| Covering Real Search Puzzle | **0** |

RTX 3070 Ti Laptop, CUDA 13.2. This is the prediction of the received kernel on this machine
There is no guarantee of a future full of runner with checkpoints.
Synthetic blocks can not be counted into a search with another target.
PILOT.json - an artifact of the initial study (`pilot-low32/PILOT.json`; outside the picture), READBACK.json - an artifact of the initial study (`READBACK.json`; outside the picture.

## Decision

1. **May staff MSVC high-byte option not to go too far:** team
   such RNG Not confirmed, but there are specific projects
   Signs of incomplete transfer. Customized rework is a separate
   A hypothesis for which a separate basis is required.
2. **June low-byte The model is new and final.** Its algorithm, controls and price
   In order to confirm the viability of the historical
   SX-The program's full passage has been postponed for now.
3. To move to a real search, first confirm the native launch of June
   `sx hd-seed` with recorded historical dependencies or verified
   Early binary. Check the embedded synthetics seed, entropy32 and xprv.
   Then make a decision about the passage approximately on 1 hour 20 minutes.

New keys/bits Puzzle And there is no negative result of real overexamination.
Uncertainty itself MSVC distribution closed; the boundary proved to be
The entire historical program has been preserved.
