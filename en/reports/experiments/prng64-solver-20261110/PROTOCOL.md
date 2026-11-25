> English machine translation of the [Russian source](<../../../../ru/reports/experiments/prng64-solver-20261110/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# RNG64-03 - Resolving the remaining 17 localization

Continuation RNG64-02, 10 November 2026. Don't change the old series.
flatly 17 lineage not_run_control_incomplete from prng64-assembly-20261110.
The same synthetic meanings, masks, families, packing, fitting №135/130,
holdout others 81 solutions, key distances max(offsets)+1/+4.
New families, permutations and distances are not added.

New production: direct unfolding of linear transition to 128 bita
state; XOR-The equations are clearly conserved. Nonlinearity is only in transferences
Additions of output words. CryptoMiniSat receiver XOR+CNF. Engine two cvc5
receives a direct model of bit vectors with individual states in steps.
For comparison, the initial Z3 limit-bound 120 only if new methods are used
They didn't finish the control 20-Secondary results are saved as baseline.

First, exhaustive reduced-bit checks and complete checks
128-bit states with fixed input, contradictions, ambiguity, UNKNOWN.
Pilot: first in line ID four-pair family×endian from 17 lines;
CryptoMiniSat and cvc5, 10 seconds on request, until 4 Pilots are just the ones synthetic.
Further, the order of the engines is selected by the number of completed controls, then time;
equally CryptoMiniSat Do not read hidden states to select a method.

For each of them 17 entrances 120 seconds/request, 240 seconds/method
before 8 Local states. Incomplete methods leave UNKNOWN, not UNSAT.
The next method is only tried if the previous one hasn't finished
It is transmitted only to the verification code, not API/Re-search for the solver
With the new engine, it doesn't import a synthetic secret like a found witness.

The real problem is allowed only after a complete synthetic enumeration
containing the planted state, checks 83 numbers, holdout and the hidden no71.
Real queries are used only by engines that have passed the control of this line.
upon UNKNOWN The actual input can first complete the control of another engine.
All SAT Check the usual execution UNSAT real-world
Recheck an independent engine with a separate limit 120 It's a failure
The repetition is noted separately and does not become a refutation of the first UNSAT.
Local UNSAT eliminates the circuit for any inter-key distances
Only two previous distances can be checked; the full holdout-candidate
It stops the series until it is independently addressed.

Preserve the initial inputs, formulas XOR+CNF/SMT, answers/witness/cause UNKNOWN,
Renewal does not repeat the completed stages
limit/The code is a new launch identity. Detailed results, including:
Uncompleted, published separately from RNG64-02. GPU/No cloud is required.

Interface sources: https://github.com/msoos/cryptominisat/blob/master/python/README.md
and https://cvc5.github.io/docs/latest/options.html (read) 10 November 2026).
