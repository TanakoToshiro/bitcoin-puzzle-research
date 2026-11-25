> English machine translation of the [Russian source](<../../../../ru/reports/experiments/wallet-seed-audit-20261031/PILOT_PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E9-BX-GNU Registered limited pilot

Hypothesis: `bx 2.0.0 seed` on libstdc++ s default_random_engine=minstd_rand0 → raw-byte → `bx hd-new` (BIP32) → successive → mask puzzle. Not applicable BIP39/PBKDF2; It's a different chain.

Historical formulae: s'=16807*s mod (2^31−1), s from 1..2^31−2, byte=s'%255 (namely) 255, not 256). Standard length seed — 16 byte; separately check 32. At the entrance initial random_device the value is normalized modulus p, Zero is replaced by one. Normalized states are taken over UNIX timestamps neither Python seed.

Prefixes BIP32: m, m/0, m/0'/0, m/0'/1. For puzzle i final non-hardened index i−1+offset, offset=0/1. Totally 16 hypotheses (two lengths) × four-prefix × Prefixes are limited export options; their use is not established by the creator. Within each hypothesis, single-parent children, not a sequence chain child-of-child. Missing known solutions do not compress the numbering.

Pilot: Normalized states 1..65536 inclusive, blocks on 1024, science-ceil CPU-check-in 900 seconds wall time. First, compare the known numbers1–50; all51+ set aside for a candidate who has been trained. A subsample of low states is selected for reproduction/It's a measure of value, not an assumption that they're more likely 0,00305% full space; lack of coincidence does not exclude family.

Before the data, check: seed-bytes C++ std::default_random_engine against Python-formulas; published master/child vectors bx 2.0.0 and BIP32; coincidence of the public point of two arithmetic; positive restoration of the artificial state for each 16 circuits, negative control with altered minor bit byte255 They do not appear, but such a restriction cannot be transferred to bytes HMAC/The daughter key.

After all the known solutions have been completely matched, independently check the addresses and stop for a separate confirmation of the hypothesis. resume Only when the code, protocol and input hashes match 31-brute-force GPU This pilot doesn't launch.
