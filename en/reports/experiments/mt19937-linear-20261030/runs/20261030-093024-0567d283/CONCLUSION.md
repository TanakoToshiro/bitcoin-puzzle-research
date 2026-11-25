> English machine translation of the [Russian source](<../../../../../../ru/reports/experiments/mt19937-linear-20261030/runs/20261030-093024-0567d283/CONCLUSION.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../../README.md>) · [Direction](<../../../../../topics/02-prng-recovery.md>) · [Documents of the series](<../../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../../docs/LATEST_RESULTS.md>).

# MT19937: bits XOR key-bits71 not defined

Launch: `20261030-093024-0567d283`All eight circuits are completed for **67.007 s** limiting 3600 c CPU.

**Exact result:** in each verified scheme, any of the 2^70 lower balance No71 compatible 83 No unknown bits and no non-trivial ones XOR These bits are not fixed 2^70 It is defined by the range and is not considered found.

| Scheme | rank(A) | rank([A;B]) | Free target bits d | XOR-restriction | Number of witnesses |
|---|---:|---:|---:|---:|---:|
| forward-big-s1 - an artifact of the initial study (`tasks/forward-big-s1/result.json`; outside the picture) | 3767 | 3837 | 70 | 0 | 71 |
| forward-big-s2 - an artifact of the initial study (`tasks/forward-big-s2/result.json`; outside the picture) | 3767 | 3837 | 70 | 0 | 71 |
| forward-little-s1 - an artifact of the initial study (`tasks/forward-little-s1/result.json`; outside the picture) | 3767 | 3837 | 70 | 0 | 71 |
| forward-little-s2 - an artifact of the initial study (`tasks/forward-little-s2/result.json`; outside the picture) | 3767 | 3837 | 70 | 0 | 71 |
| reverse-big-s1 - an artifact of the initial study (`tasks/reverse-big-s1/result.json`; outside the picture) | 3767 | 3837 | 70 | 0 | 71 |
| reverse-big-s2 - an artifact of the initial study (`tasks/reverse-big-s2/result.json`; outside the picture) | 3767 | 3837 | 70 | 0 | 71 |
| reverse-little-s1 - an artifact of the initial study (`tasks/reverse-little-s1/result.json`; outside the picture) | 3767 | 3837 | 70 | 0 | 71 |
| reverse-little-s2 - an artifact of the initial study (`tasks/reverse-little-s2/result.json`; outside the picture) | 3767 | 3837 | 70 | 0 | 71 |

## What's proven by calculation

Transition MT presented 19937 by independent coordinates, first and second twist equal 19937: The transition pattern is invariant and the transition is reversible; no extra transition coordinates are included 3767 The observed free bits of known solutions 3767 independent linear equations 70 The target line increases the rank exactly by 70: `3837 − 3767 = 70`Transition image verification - artifact of the original study (`transition-image-check.json`; outside the picture.

Therefore, the set of permissible states after known solutions has a dimensionality 16170. When fixing any residue No71 there remains dimensionality 16100, idiom 2^16100 Zero flux is excluded by nonzero observations. This is a calculation in a given model; it doesn't assume that the real ones are seed They evenly fill the space.

Constructive Certificate Retained: Basic Condition s0 and 70 directions Δs. For each direction, the usual MT preserve 83 The target balance is changed to an independent direction Δt. Any residue required is obtained XOR-In this run, the direction of the target residue corresponds to individual bits.

Checked out **568 numerical states** embedded C-MT CPython. The test program does not import the symbolic generator, and the ranks are additionally obtained with the exception of the lower support column, whereas the designer uses the older 120 The intermediate stages have been independently verified.

## Interim conclusions

After No1–50: 1225 equations, rank 1225, everything 70 The target bits are free1–70: 2415 equations, rank 2415, everything 70 Consecutive appendix No75,80,…,135 None of the eight circuits have reduced the dimension of the target residue `tasks/<схема>/stages/` and listed in [RESULTS.md](<RESULTS.md>).

All circuits are joint. So, arbitrary state MT19937 These observations have not ruled out, but have not been confirmed as the real source of the keys71 remains 2^70; reduction of space by this method, 1×.

## What the result does not mean

He doesn't rule out the weak 32-bit seed, specific historical initialization Python/It's a different library, an additional state limitation, or some other output expense, and these models define a narrower set of states HASH160: He used only known private decisions of others puzzle.

You don't need to repeat the same linear analysis of these eight circuits in this image seeding. The next meaningful question is what changes with accurate limited historical initialization. E2 It didn't automatically start.

## Artifacts and acceptances

Gone 11 Checking tests 185 hashes of frozen code, data and completed artifacts. Zero budget stop and follow-up checked; repeat `resume` I missed all ten completed stages without counting.

Protocol - an artifact of the original study (`code/PROTOCOL.md`; outside the picture), [numerical](<RESULTS.md>)Acceptance - an artifact of the initial study (`ACCEPTANCE.json`; outside the picture), event log - artifact of the original study (`EVENTS.jsonl`; outside the image), the initial data - an artifact of the original study (`inputs/known_solutions.json`For each diagram, a matrix, observation tags, projections of all stages, witness states, hashes and a separate report of the verification code are stored.

The main run took 67.007 c; additional verification of the invariance of the transition pattern 38.781 C. Together 105.787 c; development and preliminary tests are accounted for separately. The absence of a constraint here is an accurate inference within a given linear model, not a consequence of timeout or insufficient power of the statistical test.
