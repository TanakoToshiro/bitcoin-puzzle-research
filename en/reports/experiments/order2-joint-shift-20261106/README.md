> English machine translation of the [Russian source](<../../../../ru/reports/experiments/order2-joint-shift-20261106/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# O2-J01

Continuation O2-L01. Start with FINAL_REPORT.md, PROTOCOL.md, MATH.md. Synthetic search only; for the present n - accurate calculation of the area of masks, without searching for states.

The working team from this folder:

> Executable code/The commands are omitted in the documentary copy.


Used wrapper, Because the unchangeable old solver When self-hashing, expects a name solver.py. Its exact copies are in the reviews/legacy_runtime. First attempt benchmark stopped to calculate on the absence of this name; ERRORS.log Save. Wrapper Changes only the placement of the old implementation for comparison, checks byte matching; computational code and old checkpoints It's not edited/34 Completed entrances were not re-started. RESUME_ADAPTER.json It contains an explanation and hashes.

joint_solver.py receives INPUT. To verify the results are used EXPECTED finished O2-L01, but they're not part of solver. All83 Observations are limitations of a particular holdout No, the original recursion modules support the same O2-L01; the shift compatibility formula is separately checked and modulo11.

search/generic - blocks1024 three-component prefix, not fours; generated_quads The sum must be exactly equal to the formula. search/first_order - the former full branch. Continuous ranges are maintained SHA-256-chains/input, counters, time and decision families. Completed blocks are not executed again.

> Executable code/The commands are omitted in the documentary copy.


One copy runner The catalogue60c on a branch, stop between blocks; incomplete result does not prove complete predictions10Millions of compatible fours don't start tracemalloc; four-pair benchmark s tracemalloc The memory metric is not the full metric RSS.

Audit/reassembly of the report:

> Executable code/The commands are omitted in the documentary copy.


finalize.py It doesn't repeat the search; it builds numerical tables based on stored results RESULTS.md And the error log is saved solver It is not a change in hypothesis or a negative result.
