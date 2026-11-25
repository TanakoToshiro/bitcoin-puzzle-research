> English machine translation of the [Russian source](<../../../../ru/reports/experiments/prng64-state-20261105/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# RNG64-01 - restoration of the state from direct assembly 64-bit-word

05.11.2026, Europe/Moscow. The protocol is fixed until the limitations of real keys are resolved.

## Area

Three accurate historical models: xorshift64* R12 L25 R27, multiplier 2685821657736338717; xorshift128+ L23 R17 R26; xorshift128+ L23 R18 R5. One, Figure19 arXiv1402.6246v1, second Figure3 arXiv1404.0390v1, third TableI same version2014. The latest versions of the article and modern engines do not replace historical parameters.

Four consecutive next() raw 256-bit key. Direct key is checked/inverse order of four words and big/little-endian bytes within each word; the final string of bytes reads as big-endian integer. Starting the next key through d exits, d=4,…,16: zero12 There's no compression of the problem numbers, including missing unknown solutions3×4×13=156 schemas.

key[i]=2^(i−1)+(raw[i] mod2^(i−1)). The senior forced bit is not an observation. The zero state is forbidden. The initial state is arbitrary seed No overheating, fixed preheating and pre/post-output whole-number next They're covered by a free initial state for a reversible transition; they're not separate independent hypotheses. Variable omissions between words of the same key, arbitrary permutations4!, reseeding, float, hashing, other masks and families are not included.

## Data separation and method

Picture83 Known decisions to move from E15, range-check/SEC/address coincurve independent affine The use of late solutions is necessary for the complete64-So this is a bit of an observation **new split**, not the old train1–50: only130 no135 — fitting; everyone81 solutions holdout, They are not involved in the restoration or selection of circuits/packaging/stride fixed above, not to be fixed by holdout.

The first filter has only one key:130 for64*, №135 for128+. Two full words and a part of the third inside the key give the necessary conditions, independent of the key d. If they are contradictory, everything13 stride for this model/It's not reconstitution of the whole sequence, and it doesn't require access to holdout.

64*: multiplier is odd, turns modulo2^64. The full word gives the exact inner state; the reverse/Direct Transitions Restore All4-word Contradiction is verified by ordinary integer arithmetic, without SMT. When matching, the state to the first word is unequivocal.

128+: after a well-known complete exit y conditionu,v), y=u+v mod2^64, therefore v=y−u. The decider only gets64 bitwise u; transitions/addition/facemask BitVec64. You can't replace addition XOR. For local solutions, the following excellent u, not yet received unsat The completeness of many states requires unsat after excluding the found; timeout/The limit is retained as incompleteness.

Limit of one SMT-request60c, at most256 The main series does not extend these limits adaptively to real data SAT normal execution to verify all observed bits; state to rewind to the beginning of sequence for each d, second-hand fitting-key, only then holdout. In full coincidence, calculate the number71 and check his published address, don't import the key into his wallet.

## Controls before real launches

Historical C99 transition Python: arbitrary non-zero states, extreme bits, exact64bit overflow, both128+Reversibility of steps. Synthetics with the same83 numbers, masks/packaging/omissions, hidden states separately from solver-Check the recovery, full check holdout, distortion fitting-bit, insufficient observation/ambiguity, exhaustion of the solver's resource, preservation/Continuation without repeating completed tasks: Failed positive control blocks the application of the appropriate method to real data; write down its limit.

The independence of states is not equal to the number of bits observed64* Inversion of the full word as64 independent restrictions128+ separate the rank of linear LSB-the necessary conditions and exact nonlinear results; do not name134 observation134 independent equations. LSB(sum)=LSB(xor) It is only permissible for the smallest bit of the actual output word.

## Artifacts

Sources/URL/date/SHA256; config, version, hashes of code/data; synthetic inputs and individual checker states; SMT2 each request, the results/causeunknown, local candidates and counter-examples; CSV posture156 circuitry RESULTS.md After the steps, when you change the code/new entrances run ID. Old studies should not be changed, except for a separate summary record of the total RESULTS.md. No GPU And without a whole lot of stuff going on.

Negative inference is limited to this set of direct4-word Historical availability PRNG does not prove its use by the author Puzzle.
