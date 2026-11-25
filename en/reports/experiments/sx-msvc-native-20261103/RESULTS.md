> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sx-msvc-native-20261103/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SXM-02 - full native SX assembled low-byte chain confirmed

03.11.2026, Europe/Moscow.

**The rest of us after SXM-01 check completed: full Windows x64 SX s
historical CTP Nov2013 It's assembled and executed
`MT19937.next() & 255`, 32 byte entropy standard BIP32. Native CLI,
independent Python-standard CUDA-The nucleus agrees. Separate complete
The passage of this model is now technically sound; it has not yet been launched.**

A significant limitation has been found CLI: `hd-priv`/`hd-pub` line up
xprv No final translation of the line pipe directly
`hd-seed` This picture doesn't work. It's not a change entropy or BIP32:
himself xprv It is validated and verified using standard vectors.

## Agreed historical set

| Component | Recorded image |
|---|---|
| SX | `76813dd9294b7d6dfe7a28d03a7abd8eb7c7fbda`, 05.06.2014 19:20:35 −07:00 (06.06 UTC) |
| libbitcoin | `e11af9c489d1a682d2344183b35dd3bf0ef2dcf2`, 31.05.2014 |
| libwallet | `f7289e1b6c841ecacc6216be2929f914c92a999f`, 05.06.2014, archive EdgeApp |
| obelisk | `661ba4f3b4233a9f89c8c9ec2826917dba78d00d`, 24.05.2014, history libbitcoin-server |
| Compiler | original CTP Nov2013, 18.00.21114 / `_MSC_FULL_VER=180021114` |
| STL/CRT | VS2013 RTM 12.0.21005 **formal CTP include overlay** |
| Windows SDK | original headers/import libraries 8.1 |
| External libraries | historical native NuGet from projects; source and static x64 binaries |

The main primary references:
[SX](https://github.com/libbitcoin/libbitcoin-explorer/commit/76813dd9294b7d6dfe7a28d03a7abd8eb7c7fbda),
[libbitcoin](https://github.com/libbitcoin/libbitcoin-system/commit/e11af9c489d1a682d2344183b35dd3bf0ef2dcf2),
[archive libwallet](https://github.com/EdgeApp/libwallet/commit/f7289e1b6c841ecacc6216be2929f914c92a999f),
[obelisk](https://github.com/libbitcoin/libbitcoin-server/commit/661ba4f3b4233a9f89c8c9ec2826917dba78d00d),
[CTP Microsoft](https://www.microsoft.com/en-us/download/details.aspx?id=41151),
[Boost 1.55.0.16](https://www.nuget.org/packages/boost/1.55.0.16).

From libbitcoin, libwallet and obelisk All of the above are collected project units;
from NuGet sourced LevelDB/Snappy/CRC32C. For everything EXE — **158
translation units**, including console main, and 16 external static libraries.
**Original Sources EXE They didn't.** A clear driver used
cl/link, reproducible source lists and static-release Project configuration.
This is a modern reconstruction of the historical chain on the current Windows, not
original release EXE, non-full image of OS 2014 year and not launch log
old-timer MSBuild. Dependencies agreed on the graph SX; older NuGet-references
In their own projects, dependencies are not issued for a separate build-lock.

The official packets are extracted locally, without installing them Desktop
CRT collapsing payload hash signed Microsoft bootstrap; MSI has
Valid Authenticode. Checked out 1 330 Git-files of seven saved images,
2 156 files of the restored chain, 2 565 SDK-file 11 490 file
25 loaded NuGet-Not all downloaded versions were included in the final version EXE;
The exact composition of the link is preserved in `build/june5/sx.link.json`.
INPUT_READBACK.json - an artifact of the initial study (`INPUT_READBACK.json`; outside the picture.

SHA-256 original EXE:
`5c7e41fcca83345907d3be4539c903e79bfb91f1d82c603d9369da6e013d2aba`.

## What's specified regarding SXM-01

1. **CTP It has its own layer of five headings.** In the former isolated
   RNG-It wasn't on control. Without it, the whole program would have to be in control C2280
   at std::pair. Official `Toolset.props` staker CTP/include first, after
   There's no error in reproducing this order
   patchless SX/STL. All RNG-checks are repeated x86/x64: **12 553 script,
   459 136 meanings 10 specialty URNG-architecture**; exits
   It's very similar to the old series RNG It hasn't changed.
   RNG_RECHECK.json - an artifact of the initial study (`RNG_RECHECK.json`; outside the picture.
2. **Picture 3 In June, there were uncompleted places:** main return
   enum class how int without cast (C2440); stealth-show-addr referred enum flags,
   which has not yet been in May libwallet. Historical corrections found
   5 In June, an agreed set of them was assembled. `hd-seed.cpp` and `utility/coin.cpp`
   between SX-snapshot **bitwise**.
3. Late README-committee obelisk It was on another branch, only by date
   was insufficient; used merge MSVC-port containing headers.

Complete order and failed attempts [JOURNAL.md](<JOURNAL.md>).
All 37 file FINAL_MANIFEST Checked and saved their hashes.

## Native chain and control

In a separate test version `coin.cpp` replaced **source-type seed**:
instead random_device - given uint32. Challenges engine/distribution, 32-byte
cycle HD-code retained; additionally printed entropy-track.
Precise diff - an artifact of the initial study (`instrumented/coin.patch`; outside the picture. Systemic RNG Not called in for control.
Original EXE Concurrently checked with a clear argument entropy.

```text
uint32 seed
  → MSVC default_random_engine = MT19937
  → uniform_int_distribution<uint16_t>(0, 65535)
  → uint8_t(sample) = MT.next() & 255
  → 32 байта entropy
  → libwallet::hd_private_key
  → стандартные BIP32 master/children
```

| Verification | Result |
|---|---|
| The Challenges of the Real Native CLI | 572, All expected results confirmed |
| Standard BIP32-vector | 17, full xprv and xpub |
| Implemented uint32 seed | 16, including 0, 1, borderline 2²⁰/2³¹ and 2³²−1 |
| All the same 20 scheme | 320 daughter xprv coincided with an independent affine Python |
| Additional entropy-entrances | 5: zero, FF, sequence, zeros at the edges |
| Misguided CLI-entrances | 4: Damaged keys and inappropriate indexes |
| CUDA against native | 320/320 junior 49-Bit results matched |
| A real search Puzzle | **0 seed, never launched** |

For native/Python Complete serializations were compared private scalar, chain code,
depth, index and fingerprint. Additional vetted xpub and addresses. CUDA
Compared directly with the results native similarly id20–39,
into 16 synthetic singleton-blocks; target 0 is not a target key Puzzle.
NATIVE_CONTROLS.json - an artifact of the initial study (`NATIVE_CONTROLS.json`; outside the picture),
Native cases - an artifact of the original study (`controls/NATIVE_CASES.json`; outside the picture),
GPU_NATIVE_BRIDGE.json - an artifact of the initial study (`GPU_NATIVE_BRIDGE.json`; outside the picture.

## Limitations of Historical CLI

`read_stream` has `trim=false`eh `set_serialized` first is_base58.
Therefore, xprv s LF/CRLF But he rejects it, even though it is xprv without delimiter accepted.
Original `hd-seed` printer CRLF: routine pipe It requires cleaning of the end
It's on the caller side, and it's got the exact bytes in the controls xprv without LF;
**The historical code has not been corrected**. This result is not declared as evidence
the efficiency of an arbitrary old SX-Script.
STDIN_NEWLINE.json - an artifact of the initial study (`controls/STDIN_NEWLINE.json`; outside the picture.

Another proven feature: CLI index `-1` how uint32 MAX;
`abc` and `4294967296` They're rejected, all chosen 20 diagrams use explicit
Non-negative indices do not depend on this behavior.
INDEX_PARSING.json - an artifact of the initial study (`controls/INDEX_PARSING.json`; outside the picture.

## Decision

**The New Final low-byte The model received native confirmation
full-pass 2³² seed formerly 20 length-line 32.** It's
85 899 345 920 seed×scheme. Accepted CUDA-The core has not changed; the former pilot
SXM-01 giver 909 754 seed/c. prognosis **78,68 minutes** (76,19–81,45 in groups,
plus the possible cost of a new checkpoint-Bandages.

For this mathematical hypothesis, a mistake newline It does not change the valid created
master xprv result BIP32 It's the exact line, but the hypothesis is
The author literally used the usual pipe these SX-The "commands" did not pass the check.
Native reconstruction also does not prove that the author used it at all SX,
MSVC, This set of dependencies or the chosen paths.

May staff high-byte The path remains unconfirmed; reasons to run
It didn't add too much. Different displays of generators don't mean
The incompatibility of all their exits.

A full search in this series has not been performed/bits Puzzle and
There is no negative result across the domain
pass-through [FULL_SEARCH_DECISION.md](<FULL_SEARCH_DECISION.md>).
