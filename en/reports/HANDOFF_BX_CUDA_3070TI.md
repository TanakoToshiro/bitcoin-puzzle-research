> English machine translation of the [Russian source](<../../ru/reports/HANDOFF_BX_CUDA_3070TI.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../README.md>) · [Direction](<../topics/08-methodology-and-history.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../docs/LATEST_RESULTS.md>).

# Task for a separate chat: BX 2.0 → BIP32 on RTX 3070 Ti

Prepared 01.11.2026, Moscow – This is a self-sufficient transfer of the current task, not a report on the finished one CUDA-implementation.

## What needs to be done

**Transfer existing CPU-search BX → BIP32 locally NVIDIA GeForce RTX 3070 Ti Laptop GPU, Check the correctness and measure the real speed of all 16 schemas.** After measurements, evaluate the complete passage of the initial state space and the feasibility of the next test on a leased RTX 4090.

The last instruction of the user is to carry out the transfer in a separate chat; the current chat is only instructed to keep this task GPU-code not written, assembly CUDA This chain is not followed, GPU-Search didn't start. Only source reading and availability checks were done CUDA/GPU.

Work autonomously through implementation, local testing and limited benchmarks: don't rent a server, don't run a full multi-hour search without a separate task, don't create another chat automatically.

## Why are we checking this out?

The project explores the public Bitcoin Puzzle. Purpose: **problem-solving**, including a known public key; No71 The user is looking for patterns and weaknesses of generation, not just speeding up the search for private keys or kangaroo.

Current hypothesis: the author may have used a historically available tool **Libbitcoin Explorer (bx) 2.0.0**, assembled GNU libstdc++, weakly seed, Then receive the child private keys BIP32 and range them puzzle masking.

**The author's relationship puzzle s BX It's not set.** We've found a suitable, limited hypothesis that we can test in its entirety, and even a very fast full pass can give you a negative answer, and the probability of success has not been quantified.

Known published private keys - **full decisions of the relevant puzzle**, Not to be confused with our hypothesis that before the masking, there might have been another one inside the supposed generator 256-bit BIP32 child scalar. Its lower bits must be consistent with published decisions.

## Exact computational hypothesis

Historical BX 2.0.0: commit `aae99b278fdbfa31005cfa083ccbbf909212cbe4`, 14.12.2014. V `src/utility/utility.cpp`:

> Executable code/The commands are omitted in the documentary copy.


For the purposes under consideration GNU libstdc++ `default_random_engine` — `minstd_rand0`:

```text
p = 2147483647
initial_state = seed % p; если 0, заменить на 1
state = 16807 * state mod p
next_byte = state mod 255
```

Critical: **mod 255, not mod 256**; byte is taken from **new** The total space of the various normalized initial states **1..2147483646 inclusively**, idiom `2^31 − 2`It's not a private key space puzzle and not unknown arbitrary 256-The bit state of the wallet.

Checking two lengths entropy: **16 and 32 byte**. Both threads for the same state have a common prefix **directly BIP32 master**, without mnemonic, BIP39 and PBKDF2:

```text
I = HMAC-SHA512(key="Bitcoin seed", data=entropy)
master_private = parse256(I[0:32])
master_chain_code = I[32:64]
```

Normal CKDpriv BIP32, compressed SEC public keys:

```text
для hardened: data = 0x00 || ser256(parent_private) || ser32(index)
для normal:   data = compressed_public(parent_private) || ser32(index)
I = HMAC-SHA512(key=parent_chain_code, data=data)
child_private = (parse256(I[0:32]) + parent_private) mod n
child_chain_code = I[32:64]
```

Here `n = FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141`, `ser32`/`ser256` big-endian. Check the inadmissible master/child, including `IL >= n` and zero child. In the current hypothesis retry/skip Not given: this case is a clear mistake/It's an incomplete block, not a quiet throwaway of the candidate. IL=0 for child In itself, let us assume that the final child It's non-zero.

For each length entropy check out four **parenting**:

| Number path coded | Parent | Indices |
|---:|---|---|
| 0 | `m` | `[]` |
| 1 | `m/0` | `[0]` |
| 2 | `m/0'/0` | `[0x80000000, 0]` |
| 3 | `m/0'/1` | `[0x80000000, 1]` |

After the parent comes another **single-handed non-hardened child** with the index:

```text
j = puzzle_number − 1 + offset, offset ∈ {0, 1}
```

So basically, everything `2 длины × 4 родителя × 2 offset = 16 схем`. Puzzle - neighbouring children One parent within the schema, not a sequential deepening of the path.

Intended transformation BIP32 child scalar `k_i` decision puzzle `i`:

```text
d_i = 2^(i−1) + (k_i mod 2^(i−1))
```

A forced most significant bit is not an observation of the original child. Keep your real numbers puzzle: omissions in known solutions do not compress indexes.

## How to check on a candidate

For selection/Discards use known solutions **№1–50**. Decisions **№51 higher** - only a postponed check after the match of all trainers.

Current fast CPU-the regimen first compares **49 lower-bit child for50**. Almost state–scheme They're dropped right away50 matched, check the other numbers1–50, then postponed decisions. No1 It does not contain free bits and does not filter the state.

GPU can make an early filter, and rare survivors can undergo a full screening CPU. In this embodiment, it is necessary to clearly describe the division of work, measure the entire chain with transmissions/Do not declare a single filter test to be proof of recovery.

If it's a match, you need to independently calculate the private values and addresses of the intended targets, not declare the key found only through an early filter HASH160 for each candidate: here the correspondence to known scalars is checked, the addresses are needed for final verification.

## Location of the project and authoritative artifacts

Root workspace:

```text
[WORKSPACE]
```

Research folder:

```text
research\puzzle71-hypotheses
```

Relative links below are counted from the folder of this file.

### Ready CPU-version E9b - the basis of transfer

[Catalogue and teams](<experiments/bx-native-search-20261101/README.md>)

- search.cpp - an artifact of the initial study (`experiments/bx-native-search-20261101/search.cpp`; out of the picture C++17, libsecp256k1, OpenSSL, OpenMP; regimes `master`, `child`, `dump`, `scan`.
- driver.py - an artifact of the initial study (`experiments/bx-native-search-20261101/driver.py`; outside the picture) - preparation, controlled launches, checkpoints And a report.
- known.tsv - an artifact of the initial study (`experiments/bx-native-search-20261101/known.tsv`; out of the picture 83 known solutions, number and complete hex private key.
- EXPECTED.json - an artifact of the initial study (`experiments/bx-native-search-20261101/EXPECTED.json`; out of the picture 14 historical test vectors BX; 10 sets of intermediate values, including generator edges; 16 positive synthetic cases.
- CONTROLS.json - an artifact of the initial study (`experiments/bx-native-search-20261101/CONTROLS.json`; outside the image) - results of implementation checks.
- `experiments/bx-native-search-20261101/synthetic/` - data of all 16 diagrams, negative variants and spoiled delayed observations.
- [PROTOCOL.md](<experiments/bx-native-search-20261101/PROTOCOL.md>) Fixed hypotheses and rules CPU-experiment.
- BUILD.json - an artifact of the initial study (`experiments/bx-native-search-20261101/BUILD.json`; outside the picture) - library versions, equipment and assembly parameters.
- [RESULTS.md](<experiments/bx-native-search-20261101/RESULTS.md>), [COSTS.md](<experiments/bx-native-search-20261101/COSTS.md>), COST_ESTIMATE.json - an artifact of the initial study (`experiments/bx-native-search-20261101/COST_ESTIMATE.json`; outside the picture) - measurements and calculations.
- ACCEPTANCE.json - an artifact of the initial study (`experiments/bx-native-search-20261101/ACCEPTANCE.json`; outside the picture), FINAL_MANIFEST.json - an artifact of the initial study (`experiments/bx-native-search-20261101/FINAL_MANIFEST.json`; outside the picture) - acceptance and SHA-256 103 Photo files.

### Historical background and Python-standard E9

[Map of historical sources](<experiments/wallet-seed-audit-20261031/WALLET_MAP.md>), [results](<experiments/wallet-seed-audit-20261031/RESULTS.md>), study.py - an artifact of the initial study (`experiments/wallet-seed-audit-20261031/study.py`; outside the picture), SOURCES.json - an artifact of the initial study (`experiments/wallet-seed-audit-20261031/SOURCES.json`; outside the picture.

`study.py` contains simple functions `rng`, `master`, `child`, `path`, `masked` Imports are safe, but they're safe **avoid running the functions of the old report/pilot**, file-up E9. Official sources and historical tests are preserved in the `sources/`No need to reload.

Original JSON known solutions:

```text
experiments/seed-inversion-electrum-20261030/runs/20261030-124911-1a7e70/inputs/known_solutions.json
```

Independent simple arithmetic secp256k1:

```text
experiments/mpk-source-search-20261030/secp_reference.py
```

Python 3.11 s coincurve available here:

```text
research\puzzle71-hypotheses\.venv\Scripts\python.exe
```

V WSL systemic Python 3.12.3, coincurve It's not installed. CPU driver use WSL only the standard library; the preparation of standards was carried out through Windows venv. This is not an obstacle: you can use stored standards and native CPU executable.

## Already measured CPU-base

CPU: **AMD Ryzen 9 6900HX**, 8 physical nuclei, 16 streams WSL2 Ubuntu-24.04.

First native version g++ 13.3, libsecp256k1 **0.2.0**, OpenSSL **3.0.13**, `-O3 -march=native -fopenmp`.

| Indicator | Result |
|---|---:|
| Extended measurements, 16 flow | 32 132–32 590 condition/s |
| median | **32 266 condition/s** |
| Checked schemes for condition | **16** |
| Full space | 2 147 483 646 condition |
| Extrapolation of the full passage | **18,49 hourly** |
| It's already uniquely tested | **2 523 184** condition |
| Percentage of area | **0,117495%** |
| Full matches found | **0** |

It's extrapolation by short/Medium measurements that are not actually complete 18-The clock passage 21 Benchmark, interval repetitions didn't add to the unique coating50 on a single pair gave only ×1,054; At the other checkpoint, it was a little slower native The version is a common code and multithreading, not the order of comparison itself.

Microprofile of one CPU-stream

- new-compressed public key scalar: about **26,33 max**;
- HMAC-SHA512 posture 37 cached ipad/opad: **0,433 max**;
- CKDpriv ready-made public key parent: **0,503 max**;
- RNG + master: **2,606 max**.

The normal discarded state in all 16 diagrams: **10 fixed-base multiplication G scalar** and **26 HMAC-SHA512** (2 master, 8 intermediate children, 16 final-filter children). Parent `m/0'` branch-wise 0 and 1, It shouldn't be calculated twice. The approximate micromeasurement count is about 94% cost of components public key; This is not an accurate profiling of the complete nucleus.

Do not use the user's declared **6,2 Billions of targeted checks/on 4090** It's like the speed of this chain. There are new unrelated scalars and dependent levels BIP32, It's not a sequence of steps at neighboring points.

## Local GPU-Wednesday and what has already been inspected

Confirmed by the teams at the start of the current transfer:

> Executable code/The commands are omitted in the documentary copy.


It's **mobile 3070 Ti**, not desktop-Pre-measure the current frequencies, temperature and available power telemetry. `power.limit` I've been returning this car N/A. You can't take the speed off desktop 3070 Ti or 4090 card-name/number CUDA cores. For this map, the expected target build architecture is sm_86, device-test/compiler.

Work projects contain potentially useful arithmetic:

```text
puzzle-ubuntu/cuda/kernels.cuh
puzzle-ubuntu/cuda/test-field.cu
puzzle-ubuntu/cuda/test_field.py
puzzle-ubuntu/cuda/gpu-tables.cuh
puzzle-ubuntu/cuda/normalize-thread.cuh
puzzle-ubuntu/gpu/vendor/inc_ecc_secp256k1.h
puzzle-ubuntu/gpu/vendor/inc_ecc_secp256k1.cl
puzzle-ubuntu/licenses/hashcat-license.txt
puzzle-ubuntu/licenses/libsecp256k1-COPYING.txt
```

V `kernels.cuh` eat `add_mod`, `sub_mod`, `mul_mod`, `inv_mod`, `point_double`, `point_add` (Jacobian + affine), fixed-base It's a compliant header generated OpenCL/CUDA strangers kernels. Do not connect without macro analysis/Prerequisites. `point_add` does not treat all exceptional cases as a universal group operation; when reusing, check that the selected scheme covers infinity, zero digits, equality of points and boundary scalars, or prove the unattainability of specific branches.

**Don't let go `puzzle-ubuntu/cuda/assemble.py` in the working project:** he rewrites `kernels.cuh`If necessary, copy the appropriate arithmetic and license to a new experiment, fix SHA-256 the original file and transformations. the original work files and checkpoints Don't change.

Previously, it was separate GPU-brute Python seed32:

```text
research/puzzle71-hypotheses/experiments/python-expanded-20261030/scanner.cu
```

It can tell you the launch organization, but **does not implement the current BX → BIP32 hypothesis**. His speed and full pass 2^32 seeds They're not part of the task.

## Proposed organization CUDA-version

Create a new catalog, for example:

```text
research/puzzle71-hypotheses/experiments/bx-cuda-search-20261101
```

Don't change frozen E9/E9b. Store code, protocol, assembly logs, libraries/borrowings, test results, errors and measurements within the new catalog `README.md`updated `RESULTS.md` and a journal of intermediate conclusions JSON/CSV, Changes in conclusions add with date. After completion update the general `research/puzzle71-hypotheses/README.md` and `NOTES.md`.

Working architecture for the choice of the performer:

1. GPU receives an interval of initial states; generates entropy and BIP32 master.
2. Performs the necessary intermediate CKDpriv/public-key Overuse of the common parent `m/0'`, public keys and HMAC-fortunes where it is advantageous.
3. For everyone 16 check-in final child for50. Surviving states and schemes maintain no losses/Buffer overflows.
4. Full examination of training/holdout may be carried out CPU-It's a benchmark for rare survivors, and it's time to take that part into account separately and at full speed.

Possible starting point fixed-base approach - window tables G and Jacobian accumulation The size of the window, batch inversion, fused/staged kernels You don't need to reach a record right away, you need to choose the distribution of work by threads based on accuracy and measurement GPU-version.

## Mandatory checks to the main benchmark

Not limited to the result of “on” GPU Also zero coincidences.”

1. **SHA512/HMAC:** compare CPU for the sizes and boundary values used/Check out the random entrances endian, length of message, padding, length HMAC key.
2. **Scalars and EC:** compare public keys addition mod n s libsecp256k1; occurrence 1, n−1, transference 256 bit, result 0, IL=0, IL≥n, Zero window digits, random scalars. Unusable inputs don't have to turn into successful computations.
3. **Intermediate nodes:** match entropy, master, parents, chain codes, compressed public keys and children posture `EXPECTED.json` E9b. There 10 condition × 8 parentage × 9 children = **720 daughter-nodes**, including hardened Indices. Historical 14 BX-Vectors must also pass through.
4. **Positive end-to-end Control:** restore synthetic states everywhere 16 Negative mutation of training data should be rejected; corrupted holdout It has to be different from a complete match GPU-filter CPU, It doesn't lose it.
5. **CPU/GPU comparison** compare final-child low bits/flags on a conspicuous fixed sample, not only hits. For a real interval, compare the final set of candidates; artificial data is guaranteed to have survivors.
6. **Boundaries and accounting:** beginning/end of space, count non-multiple block size, last partial batch, hollow/inadmissible range; do not miss or duplicate states checkpoint/resume. Overload candidate buffer mistake/Repeat the block, not a quiet loss.
7. **CUDA-errors:** check out allocation, launch, async execution; useable compute-sanitizer You don't count the problem block as covered.

The success of controls confirms the implementation of the model, not the fact of application BX writer puzzle.

## How to measure and what to expect from the result

Basic unit: **states per second when checking all 16 scheme**. It can be shown additionally state–scheme/(c) but not to be confused; the latter meaning in 16 times more.

Separate:

- creation/loading tables and warming up;
- pure GPU-timeCUDA events with correct synchronization;
- data transmission, collection of candidates and CPU-verification;
- full-fledged wall time labourer batch/series;
- peak VRAM and launch parameters.

First, a small range for calibration. Then at least a few repetitions in different parts of space and a fairly long series after warming up. Record all the measurements, do not choose only the maximum speed GPU-benchmarking is reasonable to limit **15 minutely** post-production/control; complete seed-If the first version is slower, the search is not included in this task CPU, To honestly save the result and specify a specific bottleneck.

Save for each launch ID, interval `[start, stop)`, number of states/diagrams, code and hashes of inputs, settings CUDA, Version, telemetry, times and results benchmark-The intervals are not added up as a new unique coating resume; Intentional repetition to measure performance is designated separately.

Full passage formula:

```text
hours = 2147483646 / (states_per_second_all16 * 3600)
```

Landmarks, **speed forecast GPU**:

| Speed of all 16 scheme | Time of full space |
|---:|---:|
| 25 000 condition/s | 23,86 ? |
| 100 000 condition/s | 5,97 ? |
| 250 000 condition/s | 2,39 ? |
| 1 000 000 condition/s | 35,79 min |

The main expected scientific result of this stage: **testable GPU-Implementation and Measured Cost of a Complete Hypothesis Test**, It's not necessarily finding the key. If real candidates come along, save everything and independently verify them separately.

GPU-The port is useful if it significantly reduces the available **18,49 CPU-hourly** Or it allows you to cheaply expand the number of circuits in future experiments 16 diagrams in the process of benchmarking is a separate version of the study.

## Assessment 4090 completion criteria

V E9b Official pages are preserved Runpod: `experiments/bx-native-search-20261101/sources/`When you look at it 01.11.2026 on the price list **$0,89/?**; There was another advertising figure on the model page at the same time, which is a baseline estimate, not a guaranteed current price/Availability, re-check the price before a new lease recommendation.

Speeding 3070 Ti It is possible to justify the feasibility of a short test 4090, But you can't give the estimated scaling factor as a measurement, you can show the speed for the desired time and the notional cost separately from the actual local map result.

The task is completed when:

- CUDA-The version is assembled and actually executed on the local 3070 Ti Laptop;
- Positive, negative and intermediate comparisons have passed or a specific malfunction has been documented without false results.
- Reproducible measurements of the entire chain and an honest comparison with CPU;
- Time of complete passage and bottlenecks are described/next step;
- README contains commands for assembly, inspection, benchmark and continuation; RESULTS and the general journal has been updated;
- E9/E9b and work projects with checkpoints They've remained unchanged.

In the final answer to the user, the main thing is: real speed GPU everywhere 16 circuitry, acceleration/slowing down CPU, the expected time of full passage, what exactly is checked and whether there is a reason to proceed to 4090. Give links to saved reports.
