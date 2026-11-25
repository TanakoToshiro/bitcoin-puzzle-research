> English machine translation of the [Russian source](<../../../../ru/reports/experiments/prng64-state-20261105/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# RNG64-01 historical64-bit PRNG: finished-up

05.11.2026, Europe/Moscow. Run `11e6f6bfd5b76889`.

**All156 The registered schemes are rejected by exact local contradictions.** It's12 the necessary checks within a separate key, each covering13 inter-key distances seed and GPU-No new real keys or bits have been received.

| The family | Packaging | d | Outcome | Sufficient surveillance |
|---|---:|---|---|---|
| xorshift64*, R12 L25 R27, ×2685821657736338717 |4|4…16|52 excluded|№130|
| xorshift128+,23/17/26 |4|4…16|52 excluded|№135|
| xorshift128+,23/18/5 |4|4…16|52 excluded|№135|

Packaging:4 successive64-bit-out, straight/backward order of words, big/little-endian within each word; the final raw256→junior puzzle-The initial state is arbitrary, non-zero64/128The bits are not limited to the initialization method13 distance d=4…16 Each signifies the beginning of a new key through d call: after4 effluent d−4. Room skips are maintained.

## Why is this a rigorous test?

№130 reveals129 least significant bits, No135 —134; In both situations, you can see two full words and part three64* One full word is reversible by an odd multiplier and uniquely sets the state/The partial block contradicts it in all4 Masks, values and counterexamples are stored in LOCAL.json.

For128+ withdrawal modulo2^64. After a well-known complete z conditionu,z−u), that is sufficient64 bit-bye u. SMT consider XOR-transition and addition transfers8 task-point135 finished unsat; It's not here timeout, There are no unexplored states left outside the limited sample.

The discrepancy within the key is independent of the intervals between the keys/Variable inter-key intervals or warming up will not eliminate it for the same4 This does not apply to key gaps, other permutations, parameters PRNG, masks, float or hashing.

## Acceptance and cost

- 83 the published decisions are compared by range, compressed SEC and address coincurve independent affine arithmetic; there are no data contradictions.
- 7168 C99 gateway gcc O0/O2 matched Python; Just as many backsteps have been tested.
-12 Synthetic local restorations, each unique; additional request after SAT Confirmed the absence of a second state 32.299s.
-156 full synthetic circuits with all83 by numbers and trimming: 12948 accurate masks, including 12636 holdout-predictions; 156 correct hidden nos71. Solver didn't CHECKER_SECRET.
Lack of observations verified:128+ At least two different states are found in one full word. Resource-limit unknown Save as incomplete fitting-Observations found.
All real local checks were taken in total **32.387s**. That rules out staging/installation/controls/The audit is not the speed of the search.
- Re-decision8 preserved SMT2 confirmed unsat;4 Integer counterexample retested. Rerun did not change the hashes/mtime 42 task-Artifacts and did not solve the problem again.

Fitting pre-registered as No130/135; others81 decisions abandoned holdout. Real data up to holdout It didn't make it split, old-school1–50 It doesn't show up here83 The solutions for checking the correctness of addresses were not used to fit models.

## Linear Limits and Additional Verification Limit

For128+ only LSB sums are linear XOR-And that's the level of all these conditions83 number102(big-endian) or29(little-endian), less128; twofold fitting-numbers6 or4. These numbers are calculated by coefficients, without fitting valued holdout. Therefore, the success of the method was ensured by full words and a precise nonlinear problem, rather than the declared independence of all134 Ranks are an artifact of the original research`runs/11e6f6bfd5b76889/RANKS.json`; outside the picture.

Additional direct coding128 Unknown bits without reduction to u on the first occasion received **unknown/timeout behind 60.021s**. Others7 This additional method is not completed and is not considered another confirmation SMT2 It's finished. Both use it Z3, separate SAT-engine/testable proof trace It wasn't used.

First launch audit.py Met a technical error in the discovery of Cyrillic Windows-path Z3 C API. Correction only in a separate binding: Python reading UTF-8, Z3 receives a string/entrances/SMT2 The record is an artifact of the original study`reviews/AUDIT_FIX.json`; outside the image), audit - artifact of the original study (`AUDIT.json`; outside the image), direct coding - an artifact of the original study (`reviews/DIRECT_ENCODING.json`; outside the picture.

## Continuation

It doesn't make sense to repeat this series or only increase the key intervals24 It would require a new protocol, using any of the other protocols PRNG writer Puzzle It's not proven.

[Protocol](<PROTOCOL.md>), [mathematics](<MATH.md>), 156 diagrams - an artifact of the initial study (`runs/11e6f6bfd5b76889/SCHEMES.csv`; outside the image), machine results - an artifact of the original study (`runs/11e6f6bfd5b76889/RESULTS.json`; outside the picture), sources - artifact of the original study (`SOURCES.json`; outside the picture), [team](<README.md>).
