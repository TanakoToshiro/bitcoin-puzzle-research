> English machine translation of the [Russian source](<../../../../ru/reports/experiments/python-expanded-20261030/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E2b: hypotheses Python

Locked 2026-10-30 before viewing the results of a new search, the user has allowed the extension without a time limit, including GPU. Workers puzzle/puzzle-ubuntu And the previous launches are unchanged.

## Area of verification

The full space of the obvious integer seed `[0,2^32)`one seed before the whole sequence. Python use `init_by_array`not scalar MT init_genrand. Negative integer seed They have an equivalent absolute value int, lines, float, seed(None), SystemRandom In particular, the usual seed(None) It takes systemic entropy. fallback `int(time.time()*256)` It's coming out 32 batter 2015 You can't announce a year Python generally excluded.

Ten exact ways of issuing × two-step × six-shift = **120 circuitry**:

0. `bits256`: getrandbits(256); equivalent words_reverse_big.
1. `words_forward_big`eight getrandbits(32), direct order, big-endian words.
2. `words_forward_little`: direct order, little-endian words.
3. `words_reverse_little`: reversed order, little-endian words.
4. `randrange_order_py2`: CPython 2.7.9 randrange(1,n_secp256k1), 257 Deflection bit.
5. `randrange_order_py3`: CPython 3.4.2 same challenge, 256 Deflection bit.
6. `bits_i`: getrandbits(i) and a forced most significant bit.
7. `bits_i_minus1`: getrandbits(i-1) and the forced most significant bit; for i=1 bring back 1 **calllessly RNG**, historical getrandbits(0) We can't.
8. `interval_py2`: CPython 2.7.9 randrange(2**(i-1),2**i).
9. `interval_py3`: CPython 3.4.2 same challenge. randint(lo,hi-1) equivalent.

General API 0–3,6–7 They're validated on both versions, but the same sequences aren't counted as supposedly independent families **into 32-bit-out**: 0,1,8,16,32,64; It's only the finite chosen biases, not all possible biases 1/2: task i>1 throw away stride-1 The same function for the current i. For fixed 256-bit API It's equivalent to the original indexes `(i-1)*stride`For the variable width, it is precisely the scheme described that is clearly chosen, not an arbitrary flow.

After draw: `key_i = 2**(i-1) | (draw & (2**(i-1)-1))`Missing puzzle They don't shrink.

## Filter proof

GPU/C++ It is only accelerated **filter1–12** (66 All past and all exits beyond the limited buffer MT historical Python for precise verification1–50, and then all pending known decisions and addresses No71. Overflow never throws away seed. If none seed No passes by1–12, It doesn't match up with all the Nos1–50. Full space seed by non-intersecting semi-intervals; missed/The wrong block is not considered verified.

Before the search: compare GPU and CPU with real historical interpreters for all 120 boundary charts/deterministic seed; Synthetic reconstruction of each circuit; control of incorrect observations; check boundaries 2^32 and seed>2^32; reconciliation 135 step-by-step Python-Arithmetic; preservation and continuation testing: limited buffer is artificially tested, positive candidates are reproduced by normal historical execution/Compiler, data, vectors, coverage and errors.

## Organization

First, speed measurement and control GPU - full range; in case of error GPU - stop with the exact coverage, not negative output timestamp 2014-01-01 UTC — 2015-02-01 UTC, Then the rest of the full space. That's the priority of checking **non-statement**. The previously tested small range for older circuits will be repeated as part of a combined full scanner: this slight redundancy is explicitly accounted for, the result is not called a new unique coating.

`RESULTS.md` reassembled from artifacts; `NOTES.md` Old conclusions don't get erased. String conclusions seed, float timestamp, fallback time*256, repeat seeding For each key, other models require separate follow-up protocols rather than a silent extension of that.
