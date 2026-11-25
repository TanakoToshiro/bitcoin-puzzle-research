> English machine translation of the [Russian source](<../../ru/reports/HANDOFF_ENTROPY_MNEMONIC_SEED_20261103.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../README.md>) · [Direction](<../topics/08-methodology-and-history.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../docs/LATEST_RESULTS.md>).

# Transfer of the task: historical chain entropy → mnemonic → seed

Date: 03.11.2026, Europe/Moscow. This is a plan for a new study, not a report of a search performed.

## Task for a new chat

Explore a specific historical path `ограниченный RNG → entropy → мнемоника → PBKDF2 → BIP32 → дочерние ключи → puzzle-маска`available prior to creation Bitcoin Puzzle January 2015 First set implementation and perform independent controls, then measure CPU/GPU-The main candidate is a confirmed generator Windows BX 2.0.0: `uint32 → MT19937 → выходы %255`.

It's an investigation of a public cryptographic problem BX Don't substitute it for proof of weak implementation, don't extend the work to other people's wallets, private backups, human phrases or arbitrary ones passphrase.

Working root:
`[WORKSPACE]`

All new materials should be stored separately:
`research/puzzle71-hypotheses/experiments/entropy-mnemonic-seed-20261103/`

If the folder already exists, read the journal first, check status and live processes. Continue matching run, don't duplicate. Old projects, accepted kernels, manifestos and checkpoints Don't change it handoff It doesn't run calculations.

## Read before work

Ways are lower relative `research/puzzle71-hypotheses/`:

1. `RESEARCH_ROADMAP_20261101.md` - differentiation of straight lines seed-bytes BIP39. Other items roadmap Don't start automatically.
2. `experiments/msvc-seed-audit-20261102/RESULTS.md`, `PROTOCOL.md`, `SOURCES.json`, `SOURCE_FACTS.json`, `BINARY_CONTROLS.json`, `GPU_HANDOFF.md` Historical generator Windows BX.
3. `experiments/bx-msvc-mt19937-cuda-20261102/FINAL_REPORT.md`, `PROTOCOL.md`, `SCHEMES.json`, `COMPLETE.json`, `READBACK_COMPLETE.json`, `FINAL_MANIFEST.json` - already completed direct passage prepare/build/audit on top of the saved results.
4. `experiments/wallet-seed-audit-20261031/WALLET_MAP.md` Historical paths of different wallets.
5. `experiments/parallel-wallets-20261102/04-bitcoinj/SUMMARY_FOR_MERGE.md`, `RESULTS.md`, `MODEL_AND_LIMITS.md` - already proven features bitcoinj; Don't repeat the entire audit.
6. `experiments/export-order-electrum-20261103/RESULTS.md` and `experiments/puzzle-key-transform-audit-20261102-v2/RESULTS.md` Limiting assumptions about order and masking, not including their alternatives in the new series automatically.

If this memo diverges from the machine results, use verified artifacts and explicitly record the correction CPU-report MSVC He says that the search has not yet been complete: it is a state at the time of its writing E15 It's already done.

## What is known and what is not yet

- Official BX 2.0.0 published 14.12.2014. Original commit: `aae99b278fdbfa31005cfa083ccbbf909212cbe4`.
- For Windows x64 The selected section of the release binary is checked by emulation: 80 scenarios, 50 768 Byte, matching with an independent model `MT19937(seed32)` and `%255`no `%256`no Python random neither minstd. Seed 0 Domain, please `[0, 4294967296)`.
- E15 complete the straight chain `entropy → BIP32`: 2^32 seed × 40 circuitry 4096 It's not a mnemonic test, it's zero candidates and errors on the saved result/PBKDF2.
- 40 scheme E15: entropy 16/32 byte; for each length of the parent `m`, `m/0`, `m/0'/0`, `m/0'/1` s normal/hardened last child and index `i−1/i` (16 options, plus `m/44'/0'/0'/0`, `m/44'/0'/0'/1` s normal last child and index `i−1/i` (4 The source of truth, SCHEMES.json. These paths are research, not the author’s established choice.
- Woo bitcoinj 0.12 historical BIP39-path confirmed: usually 128 bit SecureRandom → mnemonic → 2048 PBKDF2-HMAC-SHA512 → BIP32. This in itself is not the ultimate search 2^32. Migration from the old key has also been studied; a practical reduction to 2^32 It's not there.
- **Exactly the route BX 2.0.0 The mnemonic has not yet been confirmed by this assignment.** Not to say that specific CLI-There were teams in the modern world BX. Attempts to reveal alleged names `mnemonic-new.cpp` / `mnemonic-to-seed.cpp` did not provide verified content; 404 or a download failure doesn't prove there's no function commit and addiction.
- Fixed passphrase deterministic mnemonic/PBKDF2 does not increase the number of options of the original RNG: maximum 2^32 for a selected length entropy. This is the upper limit of the number of outputs, not proof of the absence of collisions and not proof of the weakness of the present Puzzle.

## Phase 1. The historical admissibility of the chain

Find it in official repositories/Precise commands or library methods that existed prior to funding Puzzle. Check code and dependencies, not just modern instructions.

Lock down URL, commit/tag, date, original files and SHA-256. Divide: confirmed behavior of the release binary; confirmed source path; compatible but not verified user program composition.

Install:

- allowable length entropy and transformation of the input (hex/bytes, leading zeros, order of bytes;
- specific type of mnemonics: BIP39 or any other historical algorithm; checksum, order of bits, exact vocabulary and language;
- gaps/code/normalization mnemonic and passphrase, including the presence or absence NFKD;
- precise password/salt, number of iterations and length PBKDF2-exit;
- which bytes are transmitted to BIP32 And what branches really belong to this tool.

If the way is BX unconfirmed, maintain the result and limit the coverage, do not mask an arbitrary modern composition under the normal path 2014 Possible importation of it entropy c another instrument is to be considered as a separate hypothesis only with a specific historical basis.

Output: `HISTORICAL_PATH.md`, `SOURCES.json`, `SOURCE_FACTS.json`, stored source `RESULTS.md` Write down what is established and what remains unknown.

## Phase 2. Pre-registration of final schemes

Before viewing the results of real search create `PROTOCOL.md` and `SCHEMES.json`.

The main limited option: Windows BX MT19937, entropy 16/32 byte, confirmed historical dictionary, empty passphrase. Support for both lengths and the chosen vocabulary must first be confirmed. Do not add languages, passwords or non-standard iterations without a reason.

If the historical path allows for the chosen BIP32-set is convenient to keep 40 scheme E15 change only entropy→master. This makes it possible to accurately compare the coating. **This does not mean that the entire set is full-time**. If the story requires a different set, justify the differences before launch. BIP44 and BIP39 Independent parts of the chain.

Mask: `puzzle_key[i] = 2^(i−1) + (raw_child mod 2^(i−1))`Keep the exact conventions of the old protocol and the task numbers1–50; holdout №51+ check after the selection of the candidate, do not select the parameters holdout. Don't squeeze the gaps. Don't add them dict-order, alternative masks or other RNG in this series.

## Phase 3. Reference and acceptance

In the new folder, implement an independent Python-standard CPU/GPU-path; reused code to copy with origin and hashes fixed. fix environment, compiler versions/CUDA/libraries.

Check:

1. Preserved vectors of historical RNG, including seed 0, 1 and 2^32−1; precise `%255`.
2. Standard BIP39-vectors, if applicable, and separately historical features of implementation. Unicode-The checks serve as normalization control, rather than expanding the password space.
3. Phased bytes: entropy, checksum, mnemonic UTF-8, salt, PBKDF2 seed, master scalar/chaincode, intermediate BIP32-knots and final masks.
4. BIP32-vectors normal/hardened, zero-carrying HMAC-Inadmissible rules IL/child Repeated indices are taken from established implementation.
5. For each registered scheme, a synthetic positive and negative case; hits at the boundaries of the block and domain; consistency CPU/GPU-Filters with a reference.
6. Candidate buffer And overflow: don't lose candidates in silence, check for blank, single and multiple matches.
7. Stopping/Continuation, damaged or incomplete checkpoint, Competitive launch blocking process identified by PID and start-time/Completed blocks with the same inputs don't repeat.

The real candidates found are checked with an independent chain and addresses, not by importing into the wallet.

## Phase 4. Pilot and decision on full passage

Check availability GPU And no other active search. Don't stop someone else/The user previously allowed the local CPU/GPU, No cloud rental.

Measure after admission 3–5 Long enough pilot blocks after warming up, not limited to comfortable little ones seed. Measure the entire registered chain with filters and recording results.

Show me: seed/s for the entire set of schemes; time PBKDF2 and HD separately; full wall-clock speed; memory; block size; start;/record/validation; the expected time of the entire domain and the uncertainty range PBKDF2-one-off entropy Reuse between branches - do not multiply the price PBKDF2 on the number of paths unnecessarily

Don't put up with the old ones 2 ? 36 min E15 Do not declare the value of one number 2048: You need actual implementation and measurement PBKDF2 First, evaluate the validity of optimization and the completeness of the historical hypothesis.

The immediate result of the new assignment is a historical audit, the controls taken, the pilot and the recommendation of a full pass with numerical value handoff; Separate it from the pilot and apply the user's current instruction in a new chat, not request permission again if the new chat has already explicitly assigned a full pass.

## If you're assigned a full pass

Freeze code, schemas, inputs and versions before launch `[0,2^32)` No gaps and no repetitions for each accepted circuit checkpoints, block ranges, hashes/Chain of results, number of errors and candidates; generate reports from artifacts. The length of the block is determined by the pilot, does not have to match the size of the pilot E15.

When the candidate stops for independent reproduction and verification of students/Deferred decisions and addresses. Stop, fall or timeout It's not a complete negative search read-only coverage/hash/the accepted code, without rewriting artifacts already referred to COMPLETE.

## Documents and criterion of outcome

In the new folder, lead `README.md`, `PROTOCOL.md`, `JOURNAL.md`, `RESULTS.md`, machine settings/Results, error log, versions and hashes. After each step, save the output and its boundaries. Completed calculations with matching inputs do not repeat. New diagram composition or code after viewing the result - a new start with a new one ID.

Generally `research/puzzle71-hypotheses/RESULTS.md` Add a separate entry with a link; don't rewrite the old conclusions. In unavailable sources, distinguish between lack of access and lack of historical path.

A useful result can be any of the three:

- A proven historical path, controlled and measured end-search price
- exact obstacle: no path is established, unaffordable measured cost or insufficient data;
- in case of a separately assigned full pass - a verified candidate or the exclusion of only registered schemes in the full domain.

A negative result does not exclude everything BX, BIP39, passphrase, Generators, export orders or wallets, and no pilot's score proves which software the author used.
