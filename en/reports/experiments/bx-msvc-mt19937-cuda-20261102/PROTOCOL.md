> English machine translation of the [Russian source](<../../../../ru/reports/experiments/bx-msvc-mt19937-cuda-20261102/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E15 — Windows BX2.0.0 MT19937, full-fledged uint32 domain

Continuation msvc-seed-audit-20261102/GPU_HANDOFF.md on a new commission from the user.
Previous SX Completed and audited. Old experiments/certificate/checkpoints They don't change.
Checked out SHA256 starting COMPLETE accepted HD/CUDA series; ORIGIN_AUDIT.json/SOURCE_PINS.json.
Historic basis - official Windows x64 BX2.0.0, commit aae99b278fdbfa31005cfa083ccbbf909212cbe4.
Its stored isolated emulation:80 scenarios,50768 byte. Downloaded EXE They don't start completely.

## End mechanism and circuits

One uint32 seed fixture std::mt19937(single integer), his32 output is converted %255.
Entropy32 her first16 byte master. Zero is acceptable; do not normalize seed
modulo2^31−1 non-replace0 on1/5489. Seed once-extracted master, not puzzle.
domain[0,4294967296), including0xffffffff. All end/stop/Block positions are used64-bit numbers.
4096 block-wise1048576 seed; last[4293918720,4294967296), It's the same size.

SCHEMES.json copied without modification:40 schema40 on RNG. For entropy16 and32:
m,m/0,m/0'/0,m/0'/1 final normal/hardened, indexi−1/i;
m/44'/0'/0'/0 and m/44'/0'/0'/1 final normal i−1/i. Totally20 by the length.
Full volume171798691840 state×scheme. The mask keeps the younger onesi−1 biti−1.
GPU filter —49 minor bits of the real No50. CPU check out1–50; holdout№51+ only
afterward training-match. Candidate retains seed,entropy,All knots and stops the search;
independent affine-The auditor must confirm known decisions/Addresses prior to any key statements.

## Implementation and monitoring

CUDA keep first33 init-word and current state. Generation of the first32 MT outputs demand
significance init0..428. Multiplication1812433253 and temper11/7/15/18 carried out uint32 s wrap.
The first32 entropy-bytes common to both lengths; master/parents They're cached between circuits.
CPU checker std::mt19937 historical HD-Functions with previous adapters.
Python-standard model_mt.py/NumPy and a separate full MT reference They check words, not just bytes.

RNG-Controls include the initial136 seed, both sides4096 Block boundaries and all top bits.
Checked out entropy,word output,both master,parent/final key-chain-public;40 baseline
planted-positive/negative and2 newest extremes seed. The last one GPU-block should be found
artificially target at0xffffffff. BIP32 official vectors,EC/SHA/HMAC,payload,invalid nodes,
bits0/overflow,range-breakingstop/resume,spoilage checkpoint,lock and sharing retry It's mandatory.
Synthetics and real data are separated. An error is not considered a negative result.

Pilots:3 block2^20, at0,2^31 And the upper limit. Speed, everybody40 circuitry seed,
API perf_counter/UTC and CUDA events Separately, register/spill/local-memory reportage build logs/GPU.json.
Once measured, estimate the full local term. No cloud lease.

Before full fixed input/acceptance hashes; block SHA256 chain.
Ready blocks are not repeated when continuing Windows readback full-on
re-examination4096 blocks, configuration, code/sources, range0..2^32 And the bottom line.
The report is formed from files, the general log is supplemented with a new entry.

A negative result applies only to these40 combinations Windows BX MT/%255,
entropy16/32,pathways/indexes/masks. x86 It is not dynamically verified;
linkage BX It's unproven MSVC/SX distribution,different lengths/paths off-cover.
