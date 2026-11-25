> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/parallel-wallets-20261102/04-bitcoinj/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/03-wallets.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# B4 — Bitcoin Wallet / bitcoinj: protocol

Task No4 from `PARALLEL_WALLET_RESEARCH.md`accepted 02.11.2026 (Europe/Moscow).
All recordings, downloads and computations are done only in this folder
GPU, cloud venv Neighboring experiments are not used.

## Hypotheses and the difference HD-01/E9

1. Establish a separate historical section Android Bitcoin Wallet, dependency
   from bitcoinj 0.12 (`83a9a71f3fff3f223d0737ad758b519a39dbbd62`), in fact
   counters/lookahead, order private dump and protobuf backup.
2. Check whether the backup format and migration of the old key are public
   An anchor or a limited unknown parameter
   Branches, selection of the old key, duplication seed and the limits of recovery.
3. Verify implementation boundary cases BIP32 (Serialization) invalid child,
   Repeated attempts) and distinguish them from conventional derivation. Generic masked BIP32,
   researched HD-01, It doesn't come back as a find.
4. Any new conditional recovery receives only explicitly stated inputs.
   final Puzzle public points non-replace raw-child public points.

## Inputs

- fixed `HD-01/inputs/known_solutions.json`: expected SHA-256
  `d291351169b1bb483b580af8cf4c30e503941f7b15b81aabd418e93809a40b70`.
  Save a separate copy, check ranges, public/address and 83 solutions.
- Mandatory HD-01 RESULTS/WALLETS/MATH and E9 WALLET_MAP read; new
  Sources are only primary code, history tags/commits and the authors' submissions.
- Historical BIP32-vectors bitcoinj unit fixtures separated synthetic.
- All your own seed/private keys Control, non-real candidates Puzzle.

## Provisional budgets

- HTTP: timeout 25 s on request, no more 2 try URL, finish-list
  Sources and metadata; successful downloads are saved and not repeated.
- Verification 83 known solutions: CPU, wall limit 60 s.
- Synthetics/historical vector/edge cases: CPU, more 120 s to launch,
  more 5000 derivatives 65536 The state of one small, exhaustive task.
- Separate Reducer: No More 60 s process, the finite number of cases;
  no overdoing seed/chaincode/unknown xpub.
- Local permission Java-control of original bitcoinj-core 0.12 from Maven
  Central It's got fixed dependencies inside this folder
  fixed JDK; compilation 60 s, launch 120 s, without a net.
- New immigration restrictions to check exhaustively 8/12-bit-model
  The prefix; the real size is only an accurate count and synthetic examples.
  Borders HMAC-The exits are clearly entered as fault injection, natural
  Normal vectors are checked without substitution HMAC.
- Save run ID, inputs, results, time, version of the environment and errors.
  Do not repeat a completed launch with the same inputs.

## Acceptance

Confirmed user experience/API-path, exact byte formulas and export
model; preserved sources with commit/URL/UTC/SHA-256; reproducible
Positive and negative controls on new claims; separate price
recovery branch/account, master xprv and seed. Lack of practice
A reduction is a completed limited result, not a proof of impossibility.

Numerical tables are built out of machine results. The report doesn't announce everything
decision-making holdout, If they are used in the selection, and do not treat
lookahead either timestamp It's a reduction in cryptographic entropy.
