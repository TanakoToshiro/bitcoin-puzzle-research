> English machine translation of the [Russian source](<../../../../ru/reports/experiments/prng64-solver-20261110/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).


- 2026-11-10T13:37:18.019369+00:00 Controls passed: 16 exhaustive toy cases, 34 fixed-state pairs, ambiguity, zero rejection, resource limits.

- 2026-11-10T13:37:28.607898+00:00 Pilot plus23-17-26-big-02 cms: incomplete_unknown; 10.002s

- 2026-11-10T13:37:40.716128+00:00 Pilot plus23-17-26-big-02 cvc5: incomplete_unknown; 10.001s

- 2026-11-10T13:37:52.839211+00:00 Pilot plus23-17-26-little-02 cms: incomplete_unknown; 10.010s

- 2026-11-10T13:38:04.908286+00:00 Pilot plus23-17-26-little-02 cvc5: incomplete_unknown; 10.001s

- 2026-11-10T13:38:09.543270+00:00 Pilot plus23-18-5-big-01 cms: complete; 2.481s

- 2026-11-10T13:38:20.021579+00:00 Pilot plus23-18-5-big-01 cvc5: complete; 8.448s

- 2026-11-10T13:38:24.149595+00:00 Pilot plus23-18-5-little-01 cms: complete; 2.055s

- 2026-11-10T13:38:30.684922+00:00 Pilot plus23-18-5-little-01 cvc5: complete; 4.510s

- 2026-11-10T13:38:30.688531+00:00 Method order fixed by synthetic pilots: ['cms', 'cvc5', 'z3-baseline']

- 2026-11-10T13:40:32.729658+00:00 plus23-17-26-big-02 synthetic cms: incomplete_unknown, states=0

- 2026-11-10T13:42:34.772095+00:00 plus23-17-26-big-02 synthetic cvc5: incomplete_unknown, states=0

- 2026-11-10T13:44:36.858938+00:00 plus23-17-26-big-02 synthetic z3-baseline: incomplete_unknown, states=0

- 2026-11-10T13:46:38.936586+00:00 plus23-17-26-big-03 synthetic cms: incomplete_unknown, states=0

- 2026-11-10T13:48:41.076680+00:00 plus23-17-26-big-03 synthetic cvc5: incomplete_unknown, states=0

- 2026-11-10T13:50:43.143222+00:00 plus23-17-26-big-03 synthetic z3-baseline: incomplete_unknown, states=0

- 2026-11-10T13:50:54.891894+00:00 plus23-17-26-big-06 synthetic cms: complete, states=1

- 2026-11-10T13:51:05.164478+00:00 plus23-17-26-big-06 real cms: unsat, states=0

- 2026-11-10T13:51:30.569120+00:00 Parallel continuation: 4 disjoint cases; 2 completed cases reused. Worker code and budgets unchanged.

- 2026-11-10T13:51:30.579879+00:00 plus23-17-26-big-06 synthetic cms: complete, states=1

- 2026-11-10T13:51:30.619237+00:00 plus23-17-26-big-06 real cms: unsat, states=0

- 2026-11-10T13:51:41.381924+00:00 plus23-17-26-big-07 synthetic cms: complete, states=1

- 2026-11-10T13:51:48.661317+00:00 plus23-17-26-big-06 independent cvc5: unsat

- 2026-11-10T13:51:54.580674+00:00 plus23-17-26-big-07 real cms: unsat, states=0

- 2026-11-10T13:52:02.939582+00:00 plus23-17-26-little-06 synthetic cms: complete, states=1

- 2026-11-10T13:52:14.789138+00:00 plus23-17-26-little-06 real cms: unsat, states=0

- 2026-11-10T13:52:17.650433+00:00 plus23-17-26-big-07 independent cvc5: unsat

- 2026-11-10T13:52:17.655299+00:00 plus23-18-5-big-01 synthetic cms: complete, states=1

- 2026-11-10T13:52:21.830407+00:00 plus23-18-5-big-01 real cms: unsat, states=0

- 2026-11-10T13:52:28.503557+00:00 plus23-18-5-big-01 independent cvc5: unsat

- 2026-11-10T13:52:34.916451+00:00 plus23-17-26-little-06 independent cvc5: unsat

- 2026-11-10T13:53:31.780267+00:00 plus23-17-26-little-02 synthetic cms: incomplete_unknown, states=0

- 2026-11-10T13:53:33.867422+00:00 plus23-17-26-little-03 synthetic cms: incomplete_unknown, states=0


### Intermediate conclusion 2026-11-10T13:54:16.280823+00:00

New local contradictions, confirmed by two engines: plus23-17-26-big-06, plus23-17-26-big-07, plus23-17-26-little-06, plus23-18-5-big-01.
All methods are exhausted synthetic without full recovery: plus23-17-26-big-02, plus23-17-26-big-03. These are no exceptions.
The remaining lines are still being calculated, and the difference in value is due to the location of two fully known outputs; it is premature to conclude that all locations are located.

- 2026-11-10T13:54:30.242478+00:00 plus23-18-5-big-02 synthetic cms: incomplete_unknown, states=0

- 2026-11-10T13:54:36.890902+00:00 plus23-18-5-big-03 synthetic cms: incomplete_unknown, states=0

- 2026-11-10T13:55:34.205237+00:00 plus23-17-26-little-02 synthetic cvc5: incomplete_unknown, states=0

- 2026-11-10T13:55:35.503969+00:00 plus23-17-26-little-03 synthetic cvc5: incomplete_unknown, states=0

- 2026-11-10T13:56:31.864339+00:00 plus23-18-5-big-02 synthetic cvc5: incomplete_unknown, states=0

- 2026-11-10T13:56:38.535828+00:00 plus23-18-5-big-03 synthetic cvc5: incomplete_unknown, states=0

- 2026-11-10T13:57:35.306588+00:00 plus23-17-26-little-02 synthetic z3-baseline: incomplete_unknown, states=0

- 2026-11-10T13:57:37.319151+00:00 plus23-17-26-little-03 synthetic z3-baseline: incomplete_unknown, states=0

- 2026-11-10T13:58:01.098735+00:00 plus23-18-5-big-07 synthetic cms: complete, states=1

- 2026-11-10T13:58:26.742590+00:00 plus23-18-5-big-07 real cms: unsat, states=0

- 2026-11-10T13:58:33.699069+00:00 plus23-18-5-big-02 synthetic z3-baseline: incomplete_unknown, states=0

- 2026-11-10T13:58:33.703783+00:00 plus23-18-5-little-01 synthetic cms: complete, states=1

- 2026-11-10T13:58:37.762728+00:00 plus23-18-5-little-01 real cms: unsat, states=0

- 2026-11-10T13:58:40.275112+00:00 plus23-18-5-big-03 synthetic z3-baseline: incomplete_unknown, states=0

- 2026-11-10T13:58:43.872273+00:00 plus23-18-5-little-01 independent cvc5: unsat

- 2026-11-10T13:59:37.019201+00:00 plus23-18-5-big-06 synthetic cms: incomplete_unknown, states=0

- 2026-11-10T13:59:56.895047+00:00 plus23-18-5-big-07 independent cvc5: unsat

- 2026-11-10T14:00:41.990872+00:00 plus23-18-5-little-02 synthetic cms: incomplete_unknown, states=0

- 2026-11-10T14:00:45.550810+00:00 plus23-18-5-little-03 synthetic cms: incomplete_unknown, states=0

- 2026-11-10T14:01:38.661965+00:00 plus23-18-5-big-06 synthetic cvc5: incomplete_unknown, states=0

- 2026-11-10T14:01:58.670277+00:00 plus23-18-5-little-06 synthetic cms: incomplete_unknown, states=0

- 2026-11-10T14:02:43.666689+00:00 plus23-18-5-little-02 synthetic cvc5: incomplete_unknown, states=0

- 2026-11-10T14:02:47.236684+00:00 plus23-18-5-little-03 synthetic cvc5: incomplete_unknown, states=0

- 2026-11-10T14:03:40.390817+00:00 plus23-18-5-big-06 synthetic z3-baseline: incomplete_unknown, states=0

- 2026-11-10T14:04:09.502684+00:00 plus23-18-5-little-07 synthetic cms: complete, states=1

- 2026-11-10T14:04:12.114527+00:00 plus23-18-5-little-06 synthetic cvc5: incomplete_unknown, states=1

- 2026-11-10T14:04:29.593721+00:00 plus23-18-5-little-07 real cms: unsat, states=0

- 2026-11-10T14:04:45.400979+00:00 plus23-18-5-little-02 synthetic z3-baseline: incomplete_unknown, states=0

- 2026-11-10T14:04:48.952511+00:00 plus23-18-5-little-03 synthetic z3-baseline: incomplete_unknown, states=0

- 2026-11-10T14:05:45.804813+00:00 plus23-18-5-little-07 independent cvc5: unsat

- 2026-11-10T14:06:13.838023+00:00 plus23-18-5-little-06 synthetic z3-baseline: incomplete_unknown, states=0

- 2026-11-10T14:06:13.844875+00:00 Registered 17-case cycle finished; independent artifact audit pending.

- 2026-11-10T14:07:05.382642+00:00 Parallel continuation: 4 disjoint cases; 17 completed cases reused. Worker code and budgets unchanged.

- 2026-11-10T14:07:05.389712+00:00 Registered 17-case cycle finished; independent artifact audit pending.


<!-- RNG64-03-20261110 -->
## RNG64-03 — 17 open assemblies, 10 November 2026

New production XOR+CNF/CryptoMiniSat and independent direct model cvc5. New localizations UNSAT: 7; Open local tasks: 10. Status: {'synthetic_incomplete': 10, 'local_unsat': 7}. Mistakes/UNKNOWN They're not considered exceptions. The old results are preserved.
[Report](<FINAL_REPORT.md>).
