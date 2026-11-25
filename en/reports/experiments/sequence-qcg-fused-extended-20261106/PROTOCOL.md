> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-qcg-fused-extended-20261106/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-28 repeating six QCG-task fused reduction

User task: all six full-size, stored synthetic inputs ff.preprocess=false and ff.fused_reduction=true, 600 seconds check and 8 GiB on trial.

Mathematical model, encoder SEQ-23, baseline 83 masks, the exact upper bounds of the hidden parts, 134 dependency z=s² and 134 The transition persists QCG-The entrance and two random controls are taken from SEQ-26/27. The search process reads only public synthetic INPUT.json. The verifier uses former positive witnesses separately, and the actual search is not part of the series.

All right full00..full05, one process at a time Windows DLL Z3 old, random_seed=0. timeout=600000 Ms max_memory=8192 MIB; external 660 s/8 GiB maximum working/private. Monitor, measurement intervals, starting reserve 10 GiB and emergency reserve 2 GiB coincide SEQ-26. Algorithm parameters are taken from PLAN.json, pass through Solver.set and are kept separately in SOLVER_OPTIONS.json. Bodies SMT compare with SEQ-24. Each launch begins the search anew. checkpoint Nope.

Re-used 40 minor controls and 8 scalar reduction checks SEQ-27. There's no new mathematical transformation. Before the search, a short check of loading parameters through the same dataset replay-After that, an independent arithmetic test of any SAT, Comparison of the true class, check masks, bodies SMT, Statistics and Preservation of Previous Files/Repeating the entire old test set is not required to change only resources.

Statistics Z3 is stored in the original index form and with the summation of the same keys, as corrected in SEQ-27. Check wall/CPU Measured immediately after the return check, until statistics are preserved/Conflicts are considered performance indicators, unrecovered bits or fractions of the space explored.

Permissible outcomes: verified SAT, UNSAT, unknown Resource stops are not considered negative responses. Comparison with previous ones 600-second-rate SEQ-26 It's a historical, not new, concurrent pairing series that retains all the reasons for stopping and all the references to old open-ended problems. No previous archive is edited.
