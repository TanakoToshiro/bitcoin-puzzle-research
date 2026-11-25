> English machine translation of the [Russian source](<../../ru/reports/RESEARCH_ROADMAP_20261101.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../README.md>) · [Direction](<../topics/08-methodology-and-history.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../docs/LATEST_RESULTS.md>).

# The following checks after BX/GNU current BX/libc++

**Updating after E11, 01.11.2026 22:49 MSC:** section 1 and 2 Completed without a match. E9g finished 05:50 MSCs; aggregated checked 80 finite-frame BX. Primary [cross-check](<status-reviews/e11-crosscheck-20261101/REVIEW.md>) checked all 12 288 six-way blocks and the results are reproduced E11. Below are the historic launch shots and the original plan, not the current status [audition SX and its dependencies](<NEXT_RESEARCH_AFTER_E11_20261101.md>)where different from the `%255` transformation RNG. Section 3 It has not been launched; a new search does not begin with this update.

**Update 01.11.2026 04:48 MSC:** Users have allowed the section2. Prepared, tested and launched16 minimal BIP44-circuitry [series E9g](<experiments/bx-bip44-20261101/README.md>)The two complete passages shall be made sequentially8 diagrams for generator; status [here](<experiments/bx-bip44-20261101/RESULTS.md>)Section3 The launch does not mean the completion or elimination of hypotheses.

**Update 01.11.2026 afterward E9f:** libc++ normal-final Completed without coincidence; paragraph1 below32 hardened-The two-generator circuits are also complete without a match4096 hardened-The blocks are re-tested [audition](<experiments/bx-hardened-final-20261101/status-reviews/20261101T014107Z-final.md>)The next computing item that's not done yet is a partition2, minimal BIP44-New permits/This update doesn't create launches, and the text below is saved as a baseline and historical snapshot of progress.

Compiled 01.11.2026, Moscow, it's a plan **New search series not launched**. It only continues as it has already been authorized libc++-The object of the study is public Bitcoin puzzle, Any unsolved problem, including problems with a published public point.

## 0. Status and immediate mandatory action

GNU/16807: pass-through 2 147 483 646 condition ×16 diagrams complete, no matches; checked all2048 This is a negative result for specific schemes, not for all wallets.

libc++/48271 on 01.11.2026 02:54:19 MSC: running, 1 382 023 168 state, 1318/2048 blocks, **64,3555%**, near826831 state/s posture pipeline, residue15,4 There are no candidates after the filter and no matches of training. stderr No error files, no code hashes checked/inputs, sequence and hash chain of all1318 The audit image is an artifact of the original study`status-reviews/20261031T235420Z-libcpp.json`; outside the image), the current prefix verification code is an artifact of the original study (`check_active_libcpp.py`; outside the picture. Upon examination of the process GPU100%, memory157MiB, temperature58°C. This is a snapshot, not a constant monitoring.

The next step after the end: check COMPLETE.json, everything2048 block, exactly [1,2147483647), scheme/mistake/survivors, hashes accepted CPU/GPU-If you're a candidate, stop the expansion of the models, independently reproduce the entire chain and check the addresses. If there's no match, fix two negative families, then select the next limited series GPU Parallel tests.

## 1. The following computational series: hardened final children

**Reason for priority:** sourced BX2.0.0 there was a clear hard-option. Current full passes are checked only non-hardened last child. This is a real possibility of the program, although its author uses it puzzle undetermined. [Source hd-private.cpp fixed commit](https://github.com/libbitcoin/libbitcoin-explorer/blob/aae99b278fdbfa31005cfa083ccbbf909212cbe4/src/commands/hd-private.cpp).

Preserve the old conditions: generators16807/48271; entropy16/32; parentage m, m/0, m/0'/0, m/0'/1; offset0/1. Change **last index**:

```text
j = 0x80000000 + (puzzle_number − 1 + offset)
```

It's **32 scheme** by two generators (16 on the generator), without re-energizing already excluded normal-options. Hardening parent hardening last child Different parameters, not to be confused.

Useful property: the last hardened-child You don't need your parent's public key EC-The work can be removed, but do not assume the winnings in advance: normal-Nodes up the way may still require EC. Change CUDA, CPU-verifier and Python-Check the actual input bytes HMAC: 00||ser256(parent)||ser32(index), not compressed SEC.

Order: separate protocol → historical BIP32-vector + positive/negative examples of each new scheme → Comparison of intermediate nodes and all filters CPU/GPU → 3–5 pilot units → full-passage → Work reference for two generators, on the order of one to two hours locally GPU comparablely/better speed, **unmeasured value of the new core**.

## 2. Next series: Fixed paths BIP44

**Reason:** BIP44 dated24.04.2014 It's an option that existed at the right time, but it's not proof that BX It was automatically selected or used by the author. [Primary BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki).

The proposed minimum set of parents:

```text
m/44'/0'/0'/0   — первый Bitcoin account, external
m/44'/0'/0'/1   — первый Bitcoin account, change
```

Last one child normal, index i−1/i. Lengths entropy16/32 And both generators **16 scheme**. Don't add right away accounts1..100 arbitrary coin_type. General hardened-Parents cache; measure the whole tree, not just one HMAC.

Here the hypothesis is preserved **raw BX-bytes → BIP32**. Transformation entropy→BIP39→PBKDF2→BIP32 — **other** chain; the presence of a path BIP44 does not in itself allow silently to add or remove BIP39.

The result of a negative full pass will only exclude these paths and the chain, the cost to set by the pilot: more levels, but a significant part is common1–3 GPU-For a couple of hours, review the measurement budget instead of running it without estimating.

## 3. Lower priority: other permissible lengths entropy

BX2.0.0 It allows you to set the number of bits at least128 multiple8; default128. This is confirmed by the preserved seed.hpp and [seed.cpp](https://github.com/libbitcoin/libbitcoin-explorer/blob/aae99b278fdbfa31005cfa083ccbbf909212cbe4/src/commands/seed.cpp)They've been tested16/32 The input of another length changes HMAC master, even entropy It has a common prefix.

Limited offer: **24 and64 byte**, the previous four parents and normal final child, offsets0/1, both generators **32 scheme**. The choice of these lengths is a heuristic for the final series, the author's undetected setting; other permissible lengths are not excluded hd-new/dependency, not seed-team.

Do not multiply this set immediately by hardened/BIP44/Pilot is required; reference to the previous two complete passages is of order1–2 hours, but new lengths/If there is no more historical justification, this stage can be postponed in favor of another direction.

## 4. The frontier of expansion BX

Proposed budget **next**, (a) not already granted authorisation: before6 GPU-post-control/The exact plan is chosen after the pilots, order1→2→3. If the budget doesn't allow you to complete the whole set, keep partial coverage without declaring a model exclusion. The temporal estimates above are reserves for planning, not measurement.

Don't start an endless search of ways, accounts, codes, offsets and permutations. For each new measurement, there must be a historical example, specification or specific implementation tuple: RNG, seed length, transformation seed, parent path, hardening final child, index formula, mask, coating tuple and intervals, not the number of similar launches.

After a limited series without matches leave BX It's closed to the current set and only comes back on a new base, and negative results don't make it more likely that you're going to make another customization.

## 5. Research without long-term GPU-brute

### 5.1. Historical assemblies C++/Windows

Find the exact standard library and its default_random_engine realistically puzzle assembly BX. Check it out compiler/toolchain, dependencies, source seed It's a way of initializing MSVC default lack evidence2014 The result of the phase is a reproducible new model or documented lack of sufficient basis2–4 hours of work; **GPU-search**, until the state is known, the rules seed and cost, previously full historical build-lock BX It's not restored.

### 5.2. Historical JavaScript-wallets and MWC1616

It's a separate family from CPython MT, tested in E2. Developers V8 confirm MWC1616 finishing2015; This is a reason to look for the right historical chain, but not a proof of the weakness of a particular wallet. [Initial publication V8](https://v8.dev/blog/math-random).

Order: Select a specific version JS-the wallet, to establish the actual source of bytes and fallback (Math.random / systemic crypto), transformation float→bytes, additional impurities, possible entropy pool/RC4, deterministically children and mask puzzle. Only after that is a synthetic recovery test. **64-The bit state is not automatically equal to32-bit seed; statism Math.random It does not mean that there is a complete search.** Do not replace the real wallet with a direct withdrawal MWC into private key. The first result is a map of the chain and an assessment of complexity, not a search for the addresses of extraneous wallets.

### 5.3. bitcoinj and migration of the weak old key

E9 I have already established the first16 bytes key → BIP39 empty passphrase → BIP32. We don't need to repeat this discovery. The next step we need is to find a valid one **limited source of old keys** in a suitable historical implementation128-The space is not practical because of GPU. Don't tie automatically Android RNG2013 authored puzzle; Check the specific version, provider and key rotation.

### 5.4. New primary traces of the generation method

Addresses/signatures, existing MPK-hypotheses and Nos256 The new work must be linked to a specific source that has not been viewed before: the archive code/export/a document, not another general search for the same text URL, date SHA-256 Explaining why the artifact relates to generation; sending program/The signature does not have to match the key program BIP32 One public point is not enough: you need to chain code/extended public key Or an additional vulnerability, not asking for other people's secrets or reaching out to people without a user's name.

## 6. A more distant mathematical branch

V E1f/E1j Simple translations have already been studied XOR (c) group relations; E1k showed a weak testability of a number MT-Do not pass off the re-finding of a compatible model as proof that the generator is correct.

An open question: can you compactly present **numerical** for conditional bit constraints, not just its linear/Fourier-Order: explicitly formulate an algorithm and the information available to it; reduced synthetics with unknown algorithm secret; Comparison of time and memory with independent baseline; And then asymptotic estimates of the actual size2^75 the previous method or requires knowledge of the correct unconfirmed MT-Do not transfer it to the real branch GPU-It's an algorithm study, not a near-term practical attack.

## What not to repeat without new reasons

- Complete GNU/libc++ same-pass tuple and the entrances.
- Complete Python seed32 search MT-analysis already described in E1/E2.
- E5:324 signature/220 transactions and search for repeats r You can only add new data with the correct attribution of the signatory.
- HASH160-neighborhood E4 Or the same bit prediction models without a new controlled effect.
- Searching for the old MPK and appointment No256 root without a new artifact.

## General Rule for Accepting a New Series

First, we fix the hypotheses and the data, then we create models1–50; №51+ All published solutions are full end keys; partial observations are assumed values **before** masking.

Each circuit needs synthetic reduction, a negative example CPU/GPU-reconciliation of intermediate nodes, checking ranges, errors and candidate buffer. Time-out/The error is incompleteness, not negative result. On the full pass, give the exact coverage, the constant hashes and the sum of the intervals; the modified models receive a separate ID. Any candidate is independently provided with a public key and address checkpoints and accepted manifestos.

The nearest recommended choice after completion E9e: **first hardened final children**, then minimally BIP44-The rent4090 not yet necessary: the cost of limited series should first be measured on the available3070 Ti.
