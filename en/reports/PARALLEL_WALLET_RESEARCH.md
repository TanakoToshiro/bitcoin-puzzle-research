> English machine translation of the [Russian source](<../../ru/reports/PARALLEL_WALLET_RESEARCH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../README.md>) · [Direction](<../topics/08-methodology-and-history.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../docs/LATEST_RESULTS.md>).

# General staging for parallel chats: wallets and child key connections

Date of production: 02.11.2026. Each chat reads this file, general rules and **Just your numbered assignment**. The task is assigned by a user message, such as: Take the task number2 After the appointment, start work without re-agreement, if the number is not specified, specify it so that two chats do not take the same program.

This file is a general, immutable setting. Chats don't run automatically; the user opens them and transfers the number.

## Purpose of the user

Explore the historical wallets available before 15 January 2015 It was a year that allowed you to get hundreds of daughter private keys in a convenient way, upload them and then change them with a simple script. **Proven weakness seed, RNG Password is not required and is not the basis for selection.**

To study regular child derivatives and try to use the relationships between derivatives together with all known solutions Bitcoin Puzzle. The desired result is a significant reduction in computational cost compared to direct search No71; An example of the desired scale - restoration root/parameter 2^32 It's a benchmark, not a promise of results. Any unsolved problem is good, including problems with a published public point.

Do not replace this task with another overreach of the weak seed, brainwallet, optimisation GPU correlation-seeking HASH160 without connection with the studied derivative. MSVC/BX/SX They are studied separately.

## Work folder and division of responsibility

Root of the project:

`[WORKSPACE]`

The research folder, then `LAB`:

`[WORKSPACE]\research\puzzle71-hypotheses`

Every chat creates and changes **just your folder**:

| Number | Programme | Folder's relative LAB |
|---|---|---|
| 1 | Armory classic | `experiments/parallel-wallets-20261102/01-armory` |
| 2 | Electrum | `experiments/parallel-wallets-20261102/02-electrum` |
| 3 | mSIGNA / CoinVault | `experiments/parallel-wallets-20261102/03-msigna` |
| 4 | Bitcoin Wallet / bitcoinj | `experiments/parallel-wallets-20261102/04-bitcoinj` |
| 5 | MultiBit Classic and historical frontier HD | `experiments/parallel-wallets-20261102/05-multibit` |
| 6 | Hive desktop | `experiments/parallel-wallets-20261102/06-hive` |

The first four tasks are the main set5–6 The six programs do not necessarily mean six different mathematical generators.

Do not change work projects `puzzle`, `puzzle-ubuntu`Other people's experiments, checkpoints, GPU-code and processes, do not update the general `.venv` You don't have to put packets in it, you can use a separate environment or a local environment if you need to `vendor` inside your folder, fix versions. Reading general data is allowed; copy the necessary functions with hashes and without side entries to the originals.

**Do not edit parallel general `LAB/RESULTS.md`, `LAB/README.md` and this file.** Instead, each chat is writing to itself `SUMMARY_FOR_MERGE.md`The general summary after completion will bring the main chat, if found related to another program, save `CROSS_FINDINGS.md` with a reference to the source and specifying the task number; do not change the adjacent folder and do not start working for the neighboring chat.

If you already have results in your folder/STATUS, First, read them and continue from the last state. Don't overwrite an existing launch. Don't run subagents or additional chats yourself.

## Mandatory general reading

Before your assignment read:

- [Outcome HD-01](<experiments/child-derivation-audit-20261102/RESULTS.md>).
- [Historical selection of wallets](<experiments/child-derivation-audit-20261102/WALLETS.md>).
- [Formulas and conditions of results](<experiments/child-derivation-audit-20261102/MATH.md>).

You don't have to re-read all of the project's experiments. Additional materials are listed in your assignment. Old records of plans and running processes may become obsolete; current work doesn't require verification or modification GPU-series.

## Data and meaning of observations

Basic fixed set:

`LAB/experiments/child-derivation-audit-20261102/inputs/known_solutions.json`

At the time of production: 83 published decisions, the maximum number135. It's a snapshot, not a statement of the current state of the network. Don't fill the unknown keys with zeros snapshot origin, time and hash; do not replace the shared file.

Hypothesis of external changes in exports:

```text
puzzle_key[i] = 2^(i−1) + (raw_child[i] mod 2^(i−1))
```

Published private keys **final keys Puzzle**. In this hypothesis, they reveal only the younger ones `i−1` bits raw-child. The forced most significant bit is not an observation of the generator 134 bitwise raw, summarily 3767 bits on all solutions; summation does not mean their independence.

Do not substitute the public point of final puzzle-key base-point raw-child. Do not submit the changed key back to the wallet chain: it is a separate one feedback-It's a hypothesis, not a regular export followed by processing puzzle not automatically equal child index: consider receiving/change, accounts, Imported keys, address pool and export order.

Check the ranges first, public/address and the origin of the inputs, or refer to the validations that have already been taken and confirm the matching of hashes. For synthetics, reproduce real masks and omissions; do not simplify the task by discreetly revealing the full range of the hashes raw-child.

## General order of research and criteria of the result

1. **Historical attainability.** Set the record/commit before the cut-off date and the specific user path → hundred-key → Exports. Use primary sources, release notes, The presence of the program in the old catalog confirms fame, but not market share or use by the author.
2. **Precise model.** Write seed/root/chaincode, private/public transitions, byte formats, indices, counters, reduction modulo n, It's about treating inappropriate children, branches and boundaries, highlighting what children have in common and what depends on the hash of unknown data.
3. **Unknown parameters.** Divide: solutions only+code; additionally known MPK/xpub/watch-only; full-source private child. Do not declare parameters known just because they relate to watch-only. They may not be in open data.
4. **A new method.** Propose a specific equation/An algorithm with an estimate of value, first a small exhaustive positive and negative control, then the actual size secp256k1. Allows lattice, joint modular constraints, algebra and other valid methods, and you don't need to repeat standard statistics without a new hypothesis.
5. **Verification without leaking the answer.** The restorer receives only the declared data available. The secret to verify is outside of it. Save the solver inputs and response; if possible, a separate process/New predictions are tested on data not used in the selection 83 Not to be called independent, then independent holdout.
6. **The price of the result.** Distinguish between the number of solutions, the size of the intermediate set and the cost of finding root For cheap recovery, count preparation, memory, hashes/EC-operations and measured time; different types of operations are not compared as the same71 mask unknown 70 bits, not 71.
7. **Fair limit.** If the coefficients are unknown or the method is not scaled, specify the exact location of the obstacle.Timeout does not mean refutation.No way found does not mean proven impossibility.Negative/The conditional result with reproduced artifacts is the completed result of the stage.

Work locally on CPU; short controls and pilots, without clouds and GPU. For every solver/A long test should set a limit in advance PROTOCOL and maintain an intermediate state. Do not run unrestricted brute force It's already allowed to read the source code, write the code and have limited CPU-Controls are carried out independently.

## Format of the results of each chat

Create in your folder:

- `PROTOCOL.md` Accurate hypothesis, inputs, budget, different from previous works.
- `README.md` - commands to launch, continue, verify and reassemble the report.
- `JOURNAL.md` - predescribed intermediate conclusions, changes in hypotheses, errors.
- `RESULTS.md` A clear result with conditions, numbers, limits and next steps.
- `STATUS.json` task number, program version, current stage, completed/partial/error, The last date and what's left.
- `SOURCES.json` and `INPUT_PINS.json` — URL/commit/UTC/SHA-256, Errors, copies of common inputs.
- Machine results, code, environment versions, configuration and ID Completed calculations with the same inputs do not run again.
- `SUMMARY_FOR_MERGE.md` — 10–20 lines for the general journal: what is checked, what is new, conditions of applicability, counters, what is not, a link to the result.

You can build numerical tables from the saved results. You can't erase old interpretations: you can fix it with a new entry private keys New real candidates are independently vetted by known solutions/publically/Addresses prior to any declaration of success.

---

## Task No1 — Armory classic: multiplicative

**Main question:** Can partial child keys be used to recover? root or missing parameters of the staff chain, without the assumption of a weak seed?

Pivot cut: `etotheipi/BitcoinArmory`, commit `61a596fa94f9cacf9fb00c4e02d0eb65d8b17513`, 08.01.2015. The original tree has already been preserved in `LAB/experiments/armory-classic-20261030/sources/`.

Read further:

- [E3 NOTES](<experiments/armory-classic-20261030/NOTES.md>).
- [E6H: former XOR-MITM](<experiments/high-points-xor-20261030/NOTES.md>).
- `HD-01/armory_hnp.py`, `recover_watchonly.py`, `ARMORY_HNP_SUMMARY.json` inside `experiments/child-derivation-audit-20261102/`.

It has already been received: with known **root public key And chaincode** The public chain determines the multipliers. HNP/LLL restore root masked120/125/130/135. 12/12 synthetic success, 36 negative, separate public-input The process watch-only Repeating this test without a new condition is not a new work.

The work of his chat:

1. Clarify the formats of the real watch-only/export: lay root point, chaincode, chainIndex, How they are exported and whether they can be found separately, highlight artifacts that would actually make the restorer applicable. If you look for publications, limit yourself to specific sources related to the author Puzzle, Don't repeat the search Electrum MPK.
2. The main mathematical step is to try to weaken the requirement of the known watch-only: share partial private observations, conditional public reference points and permanent chaincode. Show me clearly where they come from HNP-the coefficients of the proposed new model.
3. For the new algorithm, first a small, precise problem with verifiable completeness, then a scaling score and a full-size control E6H, wherein XOR-MITM He didn't outdo the usual DLP and kept the scale of order 2^128.
4. If the cost remains impractical, issue an exact minimum set of missing public data and a ready format for verifying it chaincode "another simple variable."

Don't include feedback-A model with masked keys inside the transition without a separate historical basis feedback E7 gave timeout, not a refutation; the indefinite repetition of the request is not part of this task.

**Result:** new way to get coefficients/root or a documented limit and verifiable profile of the desired artifact recovery Not enough.

## Task No2 — Electrum: old-school accounts, MPK exportation

**Main question:** Do they give the characteristics of the real? Electrum-Exports and old derivatives are a new way to restore master/MPK or predict masked children without prior knowledge MPK?

Pivot cut: Electrum 1.9.8, commit `f92b483942d3f8ee51506e0436d9b524db33a336`, 16.03.2014. Files `account.py`, `wallet.py`, `commands.py`, `bitcoin.py`, `gui/qt/main_window.py` preserved HD-01/sources.

Read more [E7 NOTES](<experiments/seed-inversion-electrum-20261030/NOTES.md>), [E9 WALLET_MAP](<experiments/wallet-seed-audit-20261031/WALLET_MAP.md>) and [search MPK](<experiments/mpk-source-search-20261030/RESULTS.md>).

We already know: standard old-It's additive offset — doubleSHA256 from MPK And the index MPK I would have predicted less masked target with a small number of transfers. 501 former MPK-Candidate and index displays are checked without matches; they do not need to be repeated. BIP32 It was optionally available in 1.9.8 - not to endure the features Electrum 2.x back automatically.

The work of his chat:

1. Track the staff CSV/dumpprivkeys and the pool increase: receiving/change, accounts, imported keys, next_addresses, order of lines, metadata. Stick only the really possible simple index mappings. Don't start randomly bruising the permutations.
2. Explore older versions/transitions accounts before the cut-off date if they change the formula or availability MPK, not just the design UI. First, justify the choice of a specific cut.
3. Check out a new joint production with the unknown MPK conditions `MPK=sG`, hash offsets and partial children. If a way to clean up is suggested/weaken SHA-The barrier is to give algorithms, positive controls and price SHA-outputs are free variables and do not declare such relaxation as a wallet.
4. With a conditional result, clearly specify the desired artifact, number candidate MPK So let's say we target a new specific artifact, not repeat the old list.

**Result:** new-source MPK/a new mathematical relationship or a limited negative result stretched exponent distinguish seed/mnemonic.

## Task No3 — mSIGNA / CoinVault: implementation BIP32

**Main question:** Is there a historical implementation and organization keychains structure other than the standard structure already disassembled BIP32 And one that can help with recovery?

Pivot cut: `ciphrex/mSIGNA`, commit `ace0c828bed7441ef6ddda314674d882ecf4dbbe`, 13.01.2015. HD-01/sources contains README, CoinCore `hdkeys.cpp/.h`, keychainmodel, viewbip32dialog and multibip32. In the catalogue bitcoin.org the appendix is presented as desktop mSIGNA/CoinVault.

The work of his chat:

1. Bring it GUI/CLI-path to specific exported private children or extended key: serialization/number account, keychain identity, routine cosigner-keys and output addresses multisig-address directly coincides with the address Puzzle after an external change.
2. Track real child paths and intermediate chaincodes, processing leading zeros, hardened, invalid child and version fields. Separate metadata, portable/It is duplicated from cryptographic secrets.
3. Comparison of implementation with historical BIP32 If you find a difference, you can test it with your own examples, and then you can estimate the cryptographic value master-space.
4. Explore **specific** dependency keychains/accounts/cosigners and exports. Standard formula `k_child=k_parent+IL mod n` hers masked-Restrictions not to be rediscovered - they HD-01.

**Result:** implementation/verifiable limited parameter or confirmation that the product in a proven way is reduced to an already known BIP32-In the second case, don't expand the path tree indefinitely.

## Task No4 — Bitcoin Wallet / bitcoinj: HD-chains and the actual delivery of children

**Main question:** do they add specific API, lookahead, migration bitcoinj Available relationships between derivatives that are not present in the abstract model BIP32?

Library reference section: bitcoinj 0.12, commit `83a9a71f3fff3f223d0737ad758b519a39dbbd62`, 02.10.2014. Support annex — Bitcoin Wallet Andreas Schildbach of that period; his exact version and library binding have yet to be established, not counting the date of the library as the date of each application build.

Read [E9 WALLET_MAP](<experiments/wallet-seed-audit-20261031/WALLET_MAP.md>). HD-01/sources contains HDKeyDerivation, DeterministicKeyChain, WalletTool.

We already know: the standard paths of this version `m/0'/0/i` and `m/0'/1/i`not automatically BIP44. In certain migrations, seniors are used 16 bytes of the old key through BIP39. This has already been investigated as a mechanism, but is not a weakness without limiting the original key. Android RNG-faults seed brute force Not to be included in this new task.

The work of his chat:

1. Identify the real issue/export keys: issued counters, lookahead, granting receiving/change, serialization wallet protobuf and WalletTool. Distinguish pre-calculated public children from the actual exported private children.
2. Explore the links between old and new account in case of regular migration, re-use seed/chaincode and backup structures **short-term RNG**. Check whether the format provides an accessible public anchor or a limited unknown.
3. Restoring the exact derivation and invalid-child Logic; check on historical vectors/synthetics, any difference between BIP32 It should be shown in specific bytes.
4. For a mathematical sentence, specify the minimum input data and separately the possibility to restore account key, master xprv starting seed. Hardened-Don't ignore the border.

**Result:** New communication specific to the application/libraries, or a reasonable reduction to a standard family and an accurate export data profile generic BIP32 mission number3/HD-01.

## Task No5 — MultiBit: First, check the child key hypothesis itself

**Main question:** Could it have been really affordable? 15.01.2015 MultiBit Do you use simple actions to give specific derivatives rather than a set of independently generated keys?

There's a historical catalog MultiBit desktop. Full new audit Classic into HD-01 Not fulfilled, not attributing later MultiBit HD All the old wallets with that name.

The work of his chat:

1. Record available Classic/HD versions release/alpha dates, dependency bitcoinj and the actual possibilities of mass creation/Use primary repositories and release notes.
2. If the appropriate version creates an independent keypool, documenting this by the calling code and **complete**: not to seek out a non-existent common master and don't go over to weaknesses RNG Instead of the user's task.
3. Only if the date available is confirmed HD-schema, to study its real ways, exports and differences bitcoinj0.12. General details bitcoinj belong to mission number4; Here to explore the product differences/transitions/formats.
4. The new relationship is checked with a final reproducible test; in the absence of differences, explicitly combine the mathematical family with the standard one BIP32.

**Result:** historically validated inclusion/excluding a particular path HD-shortlist; When you turn it on, it's a stand-alone difference and an assessment of its benefits. You don't have to artificially get a positive result.

## Task No6 — Hive desktop: independent verification of user-friendly path

**Main question:** did Hive desktop before the cut-off date, a convenient deterministic export chain that adds a new variant to the Electrum/Armory/BIP32?

Hive catalogue bitcoin.org on14.01.2015. Its exact generation code/export HD-01 Not yet explored desktop, web Mobile products under a common name.

The work of his chat:

1. Find the exact official desktop release/commit dependency15.01.2015; Determine what the product is and how the user receives it/export Hundreds of keys.
2. Track the generational challenges, private/public branching, storage seed/chaincode If the generation is independent or the export is inconvenient for the script, fix it without making a fictitious statement HD-parent.
3. If used, bitcoinj/standard BIP32, to examine only the proven differences of the product: export order, migration, shared metadata, additional transformations. Do not duplicate generic-algorithm job4.
4. With a new family formula or unusual connection, build an independent benchmark, test with real masks and attempt to restore; measure the price and missing parameters.

**Result:** a specific historical model and its intrinsic value or documented lack of a new model Randstorm Do not automatically add to this chat.

---

## How to Complete Your Chat

In the final message, give a link to your RESULTS.md and SUMMARY_FOR_MERGE.md; short name new, conditions, proven scales, which remained unknown, do not report "wallet excluded" if only the version is excluded/path/If only the conditional method is found synthetic recovery, This should be seen from the first sentence of the end.

The main chat reads six separate works SUMMARY_FOR_MERGE, Groups the same mathematical families, checks the bases of new statements and only then updates the general family RESULTS. Chats should not simultaneously “update the shared research file.”
