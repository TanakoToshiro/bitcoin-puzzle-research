> English machine translation of the [Russian source](<../../../../ru/reports/experiments/bx-windows-mnemonic-decode-20261103/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# BMD-01 official Windows BX and zero-loss

03.11.2026, Europe/Moscow. New order: check the official decoder
Windows-Binary analysis. Upon confirmation, prepare a separate hypothesis only for
alterable32-byte inputs s20 formerly HD-variants of this length.
A full search by this errand is not declared to have begun BIP39/PBKDF2 mission closed.

## Before the results

- Original official x64 mainnet asset BX2.0.0 fixed SOURCES and
  SHA256 d60329e6dacc7edda87c7c6ad12a79a5f556199a51658b6b66ddc26827118832.
- All new files are in this folder. EMS-01/E15 manifests, code, checkpoints
  starting asset You can't change it EXE testable SHA-256.
- Here's the real thing CLI, Not modern reassembly library source.
  Just launch mnemonic-encode/decode, hd-new limited hd-private
  Synthetic calls cwd, plainly empty config, without BX environment,
  stdin/stdout/stderr pipes, CREATE_NO_WINDOW, timeout for each child trial.
  No wallets/user-friendly backup/networking/real keys.
- The first smoke cases It is a record of actual behavior, and exit status without
  pre-declaration of the source model correct
  It is not a negative result of the hypothesis.
- Next designed cases: leading zeros every position4-byte chunk, zero-point
  chunk, lengths hex-number, even/an odd total loss of digits, unchanged,
  <16-byte result; initial entropy16 as negative control of the new coating.
  Saved136 RNG seeds include0,1,2^32−1; RNG It's not being scanned again.
- Keep accurate input/stdout/stderr bytes, return code, time, PID, argv,
  binary hash. End-to-end stdout encode→stdin decode→stdin hd-new non-substitute
  step-line Python-The model is computed separately for comparison.
- Each accepted xprv decode Base58Check compare master scalar/chaincode
  s HMAC-SHA512("Bitcoin seed", factually decoded bytes). Nothing PBKDF2.

## If the effect is confirmed

For reference32-byte entropy smash8 BE uint32. Take it for everyone lowercase
hex without leading zeros (zero) → "0“), concatenate. Consider a new search
only 32≤number hex-figures≤62 It's evenly long64 - duplicate E15; odd
or<32 — rejected. This condition must coincide with the real CLI before the reception.
Odd loss in individual chunks It is permissible when the total length is even:
You can’t delete only the whole zero bytes of each block.

Lock down20 scheme length32 from E15 changeless parent/hard/offset, regular
mask2^(i−1)+(raw mod2^(i−1)), training1–50, holdout51+ Only after the candidate.
Nana synthetic Check out the real ones parent/final HD nodes for20 circuitry
including normal/hardened indexes49/50. Unchanged cases and rejects
must be weeded out HMAC/HD. Full domain uint32 It is not excluded by a partial test.

Preparing a search doesn't mean a full search
No new schemas, no new schemas, no more specifications
standard controls And the next actionable step, with a numerical score only after the pilot.
