> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sx-historical-20261101/PILOT_PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E12 - fixed CPU-pilot SX

Hypothesis: internal 32-byte seed team sx hd-seed cut-off 16.05.2014), historical libwallet May 2014, successive direct children master; key puzzle It's a masking of the younger i−1 biting and bit-setting i−1.

Exactly 8 diagrams: GNU minstd_rand0 + uniform_int_distribution GCC 4.8.2/4.9.2 (the same output in verified sources) or LLVM libc++ 3.5 minstd_rand + his distribution; normal/hardened final child; index i−1/i. Seed 32 byte, master parent m, without BIP39 And no additional ways. LLVM 3.5 here is a conditional compatible configuration to the end 2014 The year, the uninstalled maker's machine entropy The team is not covered.

GNU: state←16807×state mod2147483647; x=state−1; repeat x≥2147483392; byte=x//8388607.
LLVM: state←48271×state mod2147483647; x=state−1; repeat x≥2147483392; byte=x&255.
Normalized initial states of full possible passage: [1,2147483647).

Up to the present data: historical tests, comparison of all intermediates extended-keys, direct execution distribution The pilot scanner has to restore the synthetic state of each circuit to the [1,4097), Reject the modified filter at the same interval, give everything 4×16 candidates with zero filter length and match Python in extreme conditions.

Present data: only known No50 for 49-The survivors are being checked on all number1–50, Then (only if they all matched) at No51+. Training/circuitry holdout It's not manufactured RNG: four non-intersecting blocks65536 states, starting with1. Totally262144/2147483646 ≈0,012207% space RNG. The pilot doesn't rule out other states CPU-pilot- 120 The scanner's seconds of operation; if you exceed it, keep a partial result/Control.

The measurement takes into account all four circuits at once, the launch time/external wall It's separate from internal time CPU-Extrapolation is not an estimate of the future GPU-It's a mistake master/child It stops a scientific result; it's not replaced by an index omission child Makes a team mistake.

Completed blocks with the same hashes don't run again. Changing inputs requires a separate new one run. Complete GPU-This pilot's passage is not carried out.
