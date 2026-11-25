> English machine translation of the [Russian source](<../../../../ru/reports/experiments/entropy-mnemonic-seed-20261103/HISTORICAL_PATH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Historic route BX 2.0.0

03.11.2026, Europe/Moscow. **Proposed chain BX → BIP39 → PBKDF2
Unconfirmed: The verified teams BX 2.0.0 Another algorithm.** It's a result
check the full tree, called functions and initial tests, not the output from 404.

## Versions and strength of evidence

- Explorer commit `aae99b278fdbfa31005cfa083ccbbf909212cbe4`, release v2.0.0
  published 14.12.2014. Complete API-tree 526 entries, truncated=false.
  [Tree](https://github.com/libbitcoin/libbitcoin-explorer/tree/aae99b278fdbfa31005cfa083ccbbf909212cbe4).
- Assembly install.sh branch `libbitcoin/version2`not immutable
  dependency SHA. Found her last commit prior to publication BX:
  `e44cc97bdd3fcd3d3c6c31b19f069a17fe3eb82f`, 13.12.2014 10:36:42 UTC,
  tag-pointer v2.7.0 In the resulting catalogue. 355 entries,
  truncated=false. Tag of the library itself v2.0 (without the last one).0) point
  `03d769e6b19b8c41c8ed721f0a013b17136374c8`, 05.01.2014, and not
  Automatically exact dependency of December EXE.
  [Historical library code](https://github.com/libbitcoin/libbitcoin-system/tree/e44cc97bdd3fcd3d3c6c31b19f069a17fe3eb82f).
- RNG release Windows x64 PE It is confirmed by the previous isolated emulation:
  80 scenarios, 50 768 It's checked here SHA-256 PE/old artifacts and
  reproduced outputs independent MT; There was no re-emulation.
- The same PE statically found mnemonic-encode/decode and Electrum help
  strings. It's an additional proof of interface EXE It didn't start;
  dynamical mnemonic-function library commit
  **not established**. See. BINARY_STATIC.json - an artifact of the initial study (`BINARY_STATIC.json`; outside the picture.
- Unchanged historical mnemonic.cpp performed in modern C++ harness
  type-adapter/hex/assert. This is a test of the original algorithm, not a reconstruction
  assemblage 2014 years. `-fwrapv` clearly 32-bit-overflow
  Intermediate expressions; original C++ elsewhere UB for some entrances.

All the original files, URL, loading time SHA-256: SOURCES.json - an artifact of the initial study (`SOURCES.json`; outside the picture.
Git blob hashes checked with the trees: SOURCE_VERIFICATION.json - an artifact of the initial study (`SOURCE_VERIFICATION.json`; outside the picture.
Exact lines of evidence: SOURCE_FACTS.json - an artifact of the initial study (`SOURCE_FACTS.json`; outside the picture.

## Real commands and bytes

V src/generated.cpp registered `mnemonic-encode` and `mnemonic-decode`.
Both implementations directly leave the transition from Electrum on BIP39 into TODO.
Their headlines describe Electrum. Names mnemonic-new/mnemonic-to-seed not found
nor in the tree of this commit, Not on his team roster.
[Encoder](https://github.com/libbitcoin/libbitcoin-explorer/blob/aae99b278fdbfa31005cfa083ccbbf909212cbe4/src/commands/mnemonic-encode.cpp),
[decoder](https://github.com/libbitcoin/libbitcoin-explorer/blob/aae99b278fdbfa31005cfa083ccbbf909212cbe4/src/commands/mnemonic-decode.cpp).

1. `seed` bit-length ≥128, multiple 8; default 128. Windows RNG:
   single-handed uint32 → MT19937 → exit `%255`. Seed 0 Let's say.
2. `mnemonic-encode` receiver base16, pairwise bytes. Register
   hex Allowed any; an odd number hex-the symbols are rejected, leading zeros
   They're saved, there's no reversal ≥16 Byte. Both target lengths,
   16 and 32, allowable; upper limiting BIP39 Not in this code.
3. `encode_mnemonic` return first bytes into hex with two digits per byte,
   then read another 8 hex-numerical uint32. It's BE-routine 4-Byte blocks.
   Tail in 1–3 Bytes are ignored by the library 16/32 No tail.
4. The only fixed English dictionary contains 1626 unique
   ASCII-For words n=1626 and again x:

   ```text
   a = x mod n
   b = (floor(x/n) + a) mod n
   c = (floor(x/n²) + b) mod n
   ```

   Exit - words a,b,c. Totally 12/24 words, but this **not BIP39**. Checksum,
   SHA256 entropy-checksum and 11-There are no bit indexes here.
5. Encoder junction ASCII-space and completes the line newline.
   ASCII simultaneously the same UTF-8. V stdin-deserialization decoder
   separators LF, CR, TAB and space s token compression; words then searched
   literalism std::string. Case folding/NFKD Not in this way.
6. Passphrase-No parameter. Password, salt, PBKDF2 iterations and dkLen
   **not applicable**. You can't frame "mnemonic", 2048 and 64 from BIP39.
7. Decoder He handles the full threes, ignores the rest 1–2 word-checker
   dictionary properly (unknown word gives) index=1626). Right from the start
   write-up newline into std::cout. Returns concatenation hex chunks
   **without addition chunk before 8 figures**.
8. `hd-new` receiver hex→bytes check out ≥16 It's these bytes bytes go
   HMAC-SHA512 keyed ASCII `Bitcoin seed`first 32 byte- scalar, others
   32 — chaincode. Between decoder and HMAC PBKDF2 missing.

[Library codec](https://github.com/libbitcoin/libbitcoin-system/blob/e44cc97bdd3fcd3d3c6c31b19f069a17fe3eb82f/src/wallet/mnemonic.cpp),
[base16](https://github.com/libbitcoin/libbitcoin-system/blob/e44cc97bdd3fcd3d3c6c31b19f069a17fe3eb82f/src/formats/base16.cpp),
[HD](https://github.com/libbitcoin/libbitcoin-system/blob/e44cc97bdd3fcd3d3c6c31b19f069a17fe3eb82f/src/wallet/hd_keys.cpp).

## Loss of leading zeroes: why not declare all codec identical E15

For the right ones encoder-triplet inverse restore uint32 x.
However, the conclusion `ss << val` It doesn't keep a fixed width. It's a loss of zeros
**each** The whole thing, not just the beginning entropy.

| Input | Output decoder | Consequence in transfer to hd-new |
|---|---|---|
| `baadf00d` ×4 | same hex | Same ones 16 seed-byte that in E15 |
| 16 zero-byte | `0000` | 2 byte; deflected |
| `00112233` + `baadf00d` ×3 | `112233` + `baadf00d` ×3 | 15 byte; deflected |
| `00112233` + `baadf00d` ×7 | `112233` + `baadf00d` ×7 | 31 byte; permissible modified seed |
| `01122334` + `baadf00d` ×7 | 63 hex-symbol | Oddly hex; deflect |

Save it 136 RNG seed: length16 permissible107, preserve bytes;
27 oddize hex,2 too short seed. For length32:82 retain bytes,
13 allowable alteration seed,41 oddize hex. This is a control sample
non-estimation uint32-All the cases matched in the domain Python and two assemblies
original C++ Full data: CONTROL_TRACES.json - an artifact of the initial study (`CONTROL_TRACES.json`; outside the picture.

For the target 16-byte inputs accepted hd-new result source-model
equal to the original; for 32-That's not true of bytes E15 preserved
bytes and **rule out** new composition with a permissible reduced32 seed.
The search for this individual codec error is not registered or performed here.

## BIP32 compositional boundaries

`hd-private` It's clearly an index and hard flag; The instrument does not choose everything
40 schema E15. Normal HMAC-message = compressed parent SEC ||
ser32_BE(index); hardened = 00 || ser256_BE(parent) || ser32_BE(index+2³¹).
Master check-in secret through verify_private_key; child return invalid
failure-proof ec_add. There is no automatic search for the following methods
The full library invalid-EC The audit was not repeated in the current series.

Consistency `seed → mnemonic-encode → mnemonic-decode → hd-new` possible
It doesn't prove the script. It doesn't prove the script
user BX It does not prove its use by the author Puzzle. It's source-backed
composition codec, without PBKDF2. BIP44 - independently composed HD-indexes,
not a sign of presence BIP39.

V bitcoinj0.12 BIP39/PBKDF2 It's already been confirmed by a previous audit BX entropy
(c) another historical instrument would require a particular composition
and the new protocol; automatically change the main candidate bitcoinj You can't.
Availability at the library API for entropy The ability of the programmer, not the evidence
This is the user route of the author.

## Decision

A new chain BX 2.0.0 → BIP39/PBKDF2 It didn't pass the historical test. CPU/GPU
Search implementation and pilot not launched; full domain cost estimate
remains **measured**, It's not zero. It's affordable GPU It's not an obstacle.
Preserves the exact alternative source path his leading-zero limitation,
so that further research does not repeat the mistaken premise.
