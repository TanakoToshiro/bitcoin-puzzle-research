> English machine translation of the [Russian source](<../../../../ru/reports/experiments/python-seed-20261030/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E2: historical Python and limited integer seed

Locked 2026-10-30 before viewing the search results for these solutions.

## Purpose and limit

Check for models mistakenly identified with Python random In the external scanner we looked at CPython 2.7.9 and 3.4.2 are collected from official sources in an isolated WSL-The primary pilot only looks at explicit nonnegative integers seed `[0, 2^20)`this 0,0244140625% space 32-bit seed, not Python seed. The range does not include Unix timestamp creation puzzle. Confirmation of exclusion Python It's generally unacceptable.

Estimated budget: up to 1200 s wall time Controlling the restoration of synthetic seed and the main search together, after assembly/development and obtaining control vectors. Each completed block is saved. When the budget is exhausted, specify actual intervals; do not automatically expand to 2^32 And don't run any other experiments.

## Accurate models

`rng = random.Random(seed)` historical interpreter, one initialization call to sequence 256-bit-value:

1. `bits256`: `getrandbits(256)`.
2. `words_forward_big`: eight consecutive `getrandbits(32)`each in big-endian, Connecting the order of issue, read how big-endian.
3. `words_forward_little`: same with little-endian Bytes of words.
4. `words_reverse_big`: reverse order of eight big-endian words.
5. `words_reverse_little`: reverse order of eight little-endian words.
6. `randrange`real `randrange(1, n_secp256k1)`including rejection sampling. The upper limit is excluded; width=`n−1`, to the accepted remainder shall be added 1.

Each description is checked for stride 1 and 2: puzzle i Uses a zero-index source element `(i−1)*stride`The very first element is used for the No1 And it's used up, even though it doesn't have any free bits `key_i = 2^(i−1) | (raw_i & (2^(i−1)−1))`The masked key does not return to the generator; late task skips do not compress the sequence.

`words_reverse_big` and `bits256` are equivalent assemblies of the same sequence uint32. Equivalence has to pass historical vectors and test the original semantics. If successful, one search with two logical names is performed. 24 logical descriptions (2 version × 6 API × 2 stride), 20 physical searches2 × 5 × 2); Versions are considered separate checks, not 20 independent cryptographic families.

## Controls prior to search clearance

Seed for vectors: `0, 1, 5489, 2^32−1, 2^64+0x123456789, 2^256−1`For every version/API obtain 320 baseline values and tail of the following 10 uint32. It covers the first 160 keys used stride 2. Independent Python-calculus `init_by_array`/twist/tempering It should match up with historical interpreters getrandbits on word boundaries and forced rejected samples randrange.

Mandatory positive control: separately restore synthetic seed 42421 spatially `[0,2^16)` for every physical search. Control solutions1–50 and deferred numbers51–160 They are created with the same masks/stride. Exactly one match is expected seed The damaged assembly must differ on the control vectors `2^32−1` large seed They are tested by vectors, not by a search outside the pilot.

## Real data and acceptance

Picture 83 previously tested solutions are copied to launch with SHA-256. Selection uses only No1–50. Survivors seed are checked by all late known decisions; only complete matching gives the candidate number71 point-checker/HASH160/address coincurve. Timeout is not considered a negative result.

Processing is going in blocks 16384 seed; each retains the exact half-intervals, the number of checks, the distribution of the number of the first discrepancy, the survivors seed, time and hashes of inputs. Completed blocks at resume An unfinished block can be repeated, but it never counts twice. `RESULTS.md` It is updated after each completed physical search; the block log and results are available earlier.

Original archives, versions are preserved/build-log/archive runtime, Precise vectors, frozen code/protocol/The inputs, the results of the controls and the pilot, the errors and the interpretations Python It's only used for local numerical tasks, not for network operations seed, `seed(None)`other challenges API, variable omissions, non-standard initial offsets and other ranges seed excluded from this protocol.
