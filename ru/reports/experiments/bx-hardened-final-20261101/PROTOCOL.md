> [English](<../../../../en/reports/experiments/bx-hardened-final-20261101/PROTOCOL.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/01-historical-generators.md>) · [Документы серии](<INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).

# E9f — hardened final children, protocol fixed before execution

Only roadmap section1. Two normalized BX generators, multipliers16807 and48271 modulo2147483647; advance then byte=state%255. Scan all states1..2147483646 independently for each generator. Entropy16/32 bytes, direct BIP32 master (Bitcoin seed), parent paths m, m/0, m/0'/0, m/0'/1, offsets0/1. Final index = 0x80000000 + puzzle_number - 1 + offset. Exactly32 new tuples. Parent hardening is unchanged. No BIP39/BIP44 or extra paths.

Masked key = 2^(i-1) + raw mod2^(i-1); only lower bits observed. GPU necessary filter is low49 of puzzle50 child. CPU verifier checks all training1..50 and only then holdout51+. Frozen known.tsv contains83 published full keys. Invalid BIP32 nodes or overflow are errors, not eliminated candidates. Full training hit stops both searches pending independent address verification.

Use independent Python hashlib/hmac/coincurve, OpenSSL/libsecp256k1 CPU and inherited CUDA primitives. Validate historical BX/BIP32 vectors, actual HMAC payload bytes, every new scheme positive/negative/holdout and earlier-training corruption, intermediate nodes, contiguous and tail low49, RNG vectors, buffer overflow, boundaries and stop/resume. Generic child API retains both hard/non-hard modes. Fixed-base EC uses disjoint ascending unsigned windows; valid scalar partial sums are strictly between0 andn, avoiding infinity in the inherited mixed-add routine.

After controls, four 1048576-state pilot blocks per generator, measured wall time including verification; retained as pilots and not subtracted from full sequential coverage. No speedup presumed. Sequential full passes on local3070Ti only. Atomic blocks with config/input hashes and a chain; final independent inventory reread. Aggregate runner lock prevents duplicate GPU work. Preserve all prior artifacts. Results apply only to these32 hypothesized mappings, not the creator's actual generator. Candidate-free result does not exclude other wallets.
