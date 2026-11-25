> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-search-tuning-20261031/CONCLUSION.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E1l general search, individual intervals and reduction of training

2026-10-31. Preliminary limited selection for 24 training tasks and comparisons to 48 The real keys are the new test problems Puzzle We didn't.

Profiles selected: general **m1t2**, consistent **m1t2**. The choice is recorded before the first test request: SELECTION.json and EVENTS.jsonl. Profile m1t4 - former E1j. The code is taken as the basis of E1j and modified only for public μ/T; There is no new independent implementation here.

| L | Method / profile | Success | Medium additions | 95% Wilson succession |
|---:|---|---:|---:|---|
| 22 | separate / m1t2 | 32/32 | 150917.2 | [0.8928208017449293, 1.0] |
| 22 | union / m1t2 | 32/32 | 19352.9 | [0.8928208017449293, 1.0] |
| 22 | union / m1t4 | 32/32 | 24932.7 | [0.8928208017449293, 1.0] |
| 26 | separate / m1t2 | 16/16 | 351199.9 | [0.8063923194655637, 1.0] |
| 26 | union / m1t2 | 16/16 | 66619.1 | [0.8063923194655637, 1.0] |
| 26 | union / m1t4 | 16/16 | 99093.6 | [0.8063923194655637, 1.0] |

Average cost pairings (comparable method) / selected general:
- L=22, separate: **7.798×**, 32 Pair; both methods solved all cases: True; descriptive bootstrap 95%: [6.000577686643781, 9.912347779374686].
- L=22, old_union: **1.288×**, 32 Pair; both methods solved all cases: True; descriptive bootstrap 95%: [1.0913984771084726, 1.4888779094087266].
- L=26, separate: **5.272×**, 16 Pair; both methods solved all cases: True; descriptive bootstrap 95%: [3.1035744728327623, 7.866914454182533].
- L=26, old_union: **1.487×**, 16 Pair; both methods solved all cases: True; descriptive bootstrap 95%: [1.3144294927649613, 1.616202601221591].

Expenses include all wrong blocks, limited failures and repetitions, creating jumps/The sequential method uses the same four attempts for each block and stops only after the verified solution. The order of blocks is fixed in ascending order; the position of the hidden key is uniform, the algorithm is not transmitted.

Consistent baseline It independently selects its parameters in the same end grid. It re-prepares the jump points for each block; interblock caching is not implemented. Their cost is explicitly included and highlighted in the machine data, so the comparison is not presented as a result against the optimal sequential solver. The lowest cost in the four profiles is not a proven global optimum.

Memory: A common search stores up to eight traps, a sequential one at a time; both use 16 I've been working one sequential OpenSSL worker. Its accumulated RSS library/runtime, It is not equal to the memory of a mathematical algorithm.

Native queries along with controls: 880; summation solver 513.14 c. Peak RSS 7420 KiB. Preparation of fixtures/compilation/I/O is not included 48: eight exact coincidences with the E1j and 40 borderline/Negative inspections; limited positive oversights 0, No wrong keys.

Formal transfer of the selected general profile to eight length intervals 2^146 preparatory tame-path **2^75 compounding**, against 2^76 formerly T=4μ. This is an accurate preparation counter, not the full expected cost: wild-Tracks and repetitions are added. The probability of success at this width has not been proven.

**Separate result E1k More important for choosing a real goal:** No specific generator, no eight intervals155 A close-compatible alternative allows for the whole range, and an algorithmic improvement in this uncertainty does not eliminate it.

The test has already been reviewed; further parameter changes require a new test set/GPU-The next meaningful step is new verifiable limits on the origin of the keys, or a separate analysis of the reliability of walks, rather than re-declaring synthetic acceleration as a solution Puzzle.

All numbers are an artifact of the original study (`STATISTICS.json`; outside the picture), [table](<TABLES.md>), [protocol](<PROTOCOL.md>)Selection of parameters - artifact of the initial study (`SELECTION.json`; outside the picture), [E1k](<../mt-model-audit-20261031/RESULTS.md>).
