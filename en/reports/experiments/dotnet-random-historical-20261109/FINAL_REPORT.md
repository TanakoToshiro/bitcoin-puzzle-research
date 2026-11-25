> English machine translation of the [Russian source](<../../../../ru/reports/experiments/dotnet-random-historical-20261109/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# DN-R01 - historical.NET System.Random

9 November 2026, Europe/Moscow. **Implementation, synthetic restoration and
Value assessment completed.Full pass of this seed-space
It's been done 786,432 differential seed (0.03662109%) for 16 circuits;
No match. Estimate of the remaining passageway is about
3.14 one-hour CPU-with a bandage.**

## What is established by historical sources

Officially maintained [Microsoft Reference Source from 12 November 2014 year](https://github.com/microsoft/referencesource/blob/9da503f9ef21e8d1f2905c78d4e3e5cbb3d6f85a/mscorlib/system/random.cs),
commit `9da503f9ef21e8d1f2905c78d4e3e5cbb3d6f85a`The picture precedes Puzzle. Original, URL,
reply API with file history, loading time and SHA-256 are `sources/`.
SHA-256 random.cs: `f3f146bf93c1af7243e102ca50f8737a20f0ff97dd5446fa9104a67b8d817422`.

This is a subtracting generator with an array of 55 whole values used.
`NextBytes` use `InternalSample()%256`. `Next(256)` calculate
`(int)((InternalSample()*(1.0/2147483647))*256)` s double. Both consume
One internal output per byte, but they extract different parts of the output
old range file [0..0x7f] contradictory NextBytes; model
carried over `%256`, not a comment.

Designer accepts signed Int32, substitute seed module,
? Int32.MinValue — Int32.MaxValue. Therefore, the range **[0,2147483648)**
cover all entrance classes seed. This is the upper limit of the number of streams, not
Proof that all threads are different. The designer uses no argument
Environment.TickCount; A complete search is not required to limit time
It's all about creating a wallet System.Random, cryptographic
RandomNumberGenerator And not to an arbitrary wallet C#.

Original Compiled Separately with Replacement namespace and two unavailable
Exclusion text resources: Algorithmic operators retained `/checked-`
fixture unchecked Int32. The source is collected by a modern installed compiler
Framework; wet **We do not announce the launch of the original binary 2014 year**.
Established Framework 4.0.30319.42000 additional control is used,
It's not a replacement for a historical source `build/BUILD.json`.

## Critical detail: overflow

Python-standard clearly signed Int32 post-subtract/Additions.
Nana 24 from 40 control seed
naive option with unlimited Python int It's at odds with the historical code.
For example, seed 1073741823: zero-index
2 equal 1972525356, naive transference
giver 1972525350. Seed 0 and Int32.MaxValue They also diverge on the third
exit: 1649316166 against 1649316172.

You can't just replace all operations with arithmetic modulo 2147483647 or
consider seed 2147483647 The upper limit is included in the search.
Counterexamples - an artifact of the original study (`PORTING_NOTES.json`The scanner received saves the image literal-routine
double-operations Next(256); The possible acceleration did not change after the pilot.

## Exactly 16 circuitry

| Parameter | Options |
|---|---|
| Receipt 32 bytes | NextBytes; 32 challenge Next(256) |
| Conversion to unsigned 256-bit | big-endian; little-endian |
| Consumption of reference blocks | each and every second |
| Initial displacement | 0; 1 block |

For puzzle i takes raw-block `phase+stride*(i−1)` apply
`key=2^(i−1)+(raw mod 2^(i−1))`The gaps between puzzle They don't compress the flow.
One generator lives the entire sequence 32 internal call to the block.
Schemes and their table ID: SCHEMES.json - an artifact of the initial study (`SCHEMES.json`; outside the picture.

Repeated initialization on each key, other offsets/omissions, variable
length, Next(), NextDouble(), absolute value of the negative BigInteger,
HD-derivative entropy→mnemonic→seed these 16 scheme **don't**. The author's relationship
Puzzle s C# or with these operations is not established.

## Correctness and restoration checks

83 The published decisions from the previous unmodified image are verified by
the range compressed to the public key and address by two implementations: coincurve
independent Python-Arithmetic. Used 50 the keys to learning,
33 for holdout. DATA_CHECK.json - an artifact of the initial study (`DATA_CHECK.json`; outside the picture.

40 boundary-and-random signed seed × 8704 internal exits
It is based on the historical source, independent C#-core and Python. Additionally
matched Framework, both byte-API, division NextBytes
Two calls and negative aliases seed. It's all checked
348,160 whole exits and 696,320
The control vectors are an artifact of the original study`controls/VECTORS_CHECK.json`; outside the picture.

For each of them 16 There are two synthetic cases: a small seed and seed
from the top half of the domain 32 search in the window of 4096 seed
I found one train-A coincidence that correctly predicted everything 33 holdout.
Additionally seed 765432 ranged [0,2^20), singularly
in this range. Truth-The scanner did not read the file; it was only transmitted to it train-
Bytes and boundaries. **This is a limited recovery, not a global uniqueness
everywhere 2^31.** The boundaries of the windows reveal some of the information about the algorithm seed.

Complete sets checked C# and Python on 256 seed; conflicting observations;
seed 0 and 2147483647; mutation train-a bit of each circuit; separately a mutation holdout
№75; continuation checkpoint and the immutability of the finished blocks
runner checked out OS-locking and importing the pilot without repeating
launch worker. Audit covers 61 checkpoint in this series;
check-up runner stored in the adjacent folder and linked by hashes.

Synthetic results - an artifact of the original study (`SYNTHETIC_TABLE.csv`; outside the image), audit - artifact of the original study (`AUDIT.json`; outside the picture),
controls runner - an artifact of the initial study (`reviews/RUNNER_TEST.json`Two fixes to the binding before her
acceptances are described in [NOTES](<reviews/NOTES.md>); historical core and results
The pilot did not change.

## The real pilot and the time of full passage

| Start, inclusive | The end, exceptionally | Core time, with | Seed/s | Train-candidate |
|---|---:|---:|---:|---:|
| 0 | 262,144 | 1.235 | 212,316 | 0 |
| 1,073,741,824 | 1,074,003,968 | 1.220 | 214,927 | 0 |
| 2,147,221,504 | 2,147,483,648 | 1.231 | 213,000 | 0 |

Three ranges don't overlap seed check-in 16 diagrams;
The general sequence of internal outputs is being reused
timing **You do not need to multiply by 16**. Checked out
12,582,912 pair seed/Partial matching of early bits by candidate not
It is considered that all training masks are required.

Total time C#-core: 3.685 Average speed: 213,409 seed/s.
Core prediction for 2^31: 2.80 At blocks, at blocks 2^18 remains
8189 the blocks, because three pilots are imported, to start the process and
File binding measured medianly 0.152 s/block
empty ranges, without re-examining real seed. With that expense
evaluation of the remaining work **3.14 hourly**.

Peak WorkingSet piloting process: 18.20–18.24 MiB.
It's an assessment of one local CPU-It's a queue on the current car
measured speed of multithreaded or CUDA-Other workloads
Prolonged heating and the cost of journaling can change time.

## What can be concluded next step

Technically feasible: Precisely prepared CPU-implementation
It's like a pilot in a few hours, unlike the previous general recursion here
It is not necessary to restore an arbitrary large internal state:
The limited space of the entrance seed.

However, zero candidates for 0.03662109% domain does not exclude anything
for the rest 2,146,697,216 seed. There are no real keys or bits
The next final experiment is a complete pass **same 16 scheme**
independently audited coverage [0,2147483648). Ready team with checkpoint,
check the entrances, OS-lock, Import of three pilot units and stop at
Full passage **failed** in this preparatory cycle.

Commands and limitations: [README.md](<README.md>)All the numerical tables are built
from NUMERIC_REPORT.json - an artifact of the initial study (`NUMERIC_REPORT.json`; outside the image), without recalculating the searches.
