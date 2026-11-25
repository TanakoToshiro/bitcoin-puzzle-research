> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sx-msvc-newseed-audit-20261103/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SXN-01 Native Auditing and Measurement newseed/genpriv

Authorized 2026-11-03 after preliminary detection of a separate branch SX.
A complete search Puzzle At this stage it is not started: first accurate historical
chain, synthetic controls, measurement and complete pass decision.

1. Don't change the sealed SXM-01/02/03. Use them toolchain, objects
   library CUDA only for reading, with verification SHA256 before and after.
2. Native test build: replace only the source uint32 for new_seed,
   add diagnostic tracks entropy/stretch/public/MPK/sequence.
   Don't change RNG, SHA, indexes or arithmetic of the original version.
3. Additional diagnostics EXE clearly compressed=false serve
   control Electrum-Mathematics; it is not considered historical EXE.
4. Check it out 16 spaced uint32 seed, both receive/change, indexes
   0/1/49/50, borders, leading-zero entropy, insertion LF/CRLF faulty seed.
   Verify with independents scalar-MT, hashlib and affine-secp256k1 models.
5. Po Po Git-history RNG format MPK. Separately
   determine the suitability of private and public derivation
   Successful and unsuccessful controls; lack of regular assembly is not a substitute
   It's a random patch.
6. CUDA measure 100000 SHA256(previous_bytes || original_hex32_ASCII).
   Entrance first 16 MT19937 draws %255, hex In the lower case.
   Check it out SHA256 padding/lengths, shortened and complete chains, native controls;
   then full synthetic pipeline: stretch → public X → four genpriv
   variantreceive/change × i-1/i), i=50, artificially target.
7. Full domain of potential future search [0,4294967296). Synthetic
   pilot off-cover Puzzle; real-life/holdout Don't read.
   Extrapolation refers only to the measured implementation on that machine.
8. Bottom line: history, precise bytes and constraints, controls, speed,
   the cost of a full pass and an explicit decision, if the model is unusable or
   Unjustified price does not automatically go to the brute.
