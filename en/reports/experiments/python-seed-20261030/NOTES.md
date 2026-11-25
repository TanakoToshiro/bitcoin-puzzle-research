> English machine translation of the [Russian source](<../../../../ru/reports/experiments/python-seed-20261030/NOTES.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E2: journal

## 2026-10-30 Preparation of historical performances

Assembled CPython 2.7.9 and 3.4.2 from the official archives MD5, preserved SHA-256. Sources `Modules/_randommodule.c` and `Lib/random.py` It was exactly the same as previously recorded commit-I'm going to take pictures RNG They didn't fix it GCC 13.3, isolated build/install prefix and `--without-ensurepip --disable-shared`commands and records in the system Python Archives established runtime And the full logs are in this folder.

On the first separate application WSL catalogue runtime into `/tmp` It's an error in the availability of the environment, not the result of an experiment launcher, restorative runtime from a verified local archive prior to execution, the original failed log is stored in `preparation/oracle-2.7.9.log`; reassembly runtime I didn't have to.

Control of enforced refusal `randrange` I found the wrong expectation of the same 256-It's a bit query on both versions 2.7 rounded floating-point logarithm: `randrange(1, n_secp256k1)` get out 257 bit and formula 3.4 through `bit_length` giver 256. The independent implementation already retained both formulas; the expected value of the control test was wrong seed; log-in `oracle-2.7.9-attempt-2.log` The results of the actual historical vectors then determine the final tolerance.

It's essential for the expense MT: at 2.7 In this case, the probability of rejection is close to 1/2, at 3.4 - very small `randrange` Two versions cannot be deduplified or replaced by one 256-The simple equivalence of word assemblies only concerns `bits256` and `words_reverse_big`.

## 2026-10-30 10:27–10:30 UTC Vectors, tolerance and first results

Historical performance confirmed the difference 257/256 Every version has a check on it 11 520 baseline 256-bit values36 sequence × 320), tails of state, 72 at the limits of the length of words, negative seed coercive rejection sampling. Totally 23 040 The initial values coincided with the independent implementation. Vectors and exact information about executable binaries: `preparation/`; tolerance `preparation/VALIDATION.json`.

Launch created `20261030-102843-9581116c`Technical invocation budgeted 0 stopped until the calculations; the continuation has reached the limit 1200 All of a second 20 Positive controls were restored exactly seed 42421 into `[0,65536)` And we correctly predicted all the delayed synthetic solutions puzzle.

First physical pilot2.7.9, bits256, stride 1) checked out `[0,1048576)` And I didn't find a match1–50. This is an intermediate result of only one scheme; the remaining results are retained as the `runs/ID/RESULTS.md`, `tasks/*/RESULT.json` and `shards/`.

## 2026-10-30 10:34–10:36 UTC — Python 2.7.9 follow-up

All ten physical circuits 2.7.9 completed the pilot without matching seed within the specified range 3.4.2 continues; version results are not combined into a full space statement seed.

On a separate copy of the synthetic control search checked checkpoint: with one ready-made block and budget 0 process stopped seed 16384; The next call missed the finished block and calculated the remaining three; the third call missed all four. seed 42421 The original scientific artifacts didn't change. CHECKPOINT_TEST.json - an artifact of the initial study (`runs/20261030-102843-9581116c/CHECKPOINT_TEST.json`; outside the picture), 2,756 c, 49152 new synthetic checks.

## 2026-10-30 10:38 UTC - completion and permissible conclusion

All 40 phases completed: 20 positive control and 20 The pilot in each circuit completely covered the pilot `[0,1048576)`; none seed Didn't pass No1–50, Therefore, these deferred decisions did not participate in the selection and candidate No71 It didn't happen. The main launch with the controls took place 560,587 limiting 1200 There are no time-outs of scientific checks.

The sum of the pilot checks 20 971 520 pair seedschema-version, but different integer seed only 1 048 576. Equivalence `words_reverse_big` and `bits256` It covers four additional logical descriptions without recomputing, and versions and similar schemes are not considered independent cryptographic hypotheses.

Reception checked continuity 1360 block 1532 hash of frozen code/data/Completed artifacts and both archives runtime. Complete repeat resume With zero budget, I missed everything 40 completed tasks without recounting. ACCEPTANCE.json - an artifact of the initial study (`runs/20261030-102843-9581116c/ACCEPTANCE.json`; outside the picture), [CONCLUSION.md](<runs/20261030-102843-9581116c/CONCLUSION.md>).

A negative result applies only to the given API, Packaging, steps and small non-negative integer seed. It's 1/4096 (0,0244140625%) 32-bit space; timestamp creation puzzle It doesn't come in 2^32-search, string seed, `seed(None)`, other displacements/No exits and other wallets have been checked Python/MT19937 It does not reduce the range of N71.

Practical Acquisition: Reproducible historical performances and control of real difference randrange 2.7/3.4. The stored code can be used for a new valid range without re-archaeology and without inheriting the wrong initialization model from an external publication 2^32 It wasn't. E3/E4 They didn't start.
