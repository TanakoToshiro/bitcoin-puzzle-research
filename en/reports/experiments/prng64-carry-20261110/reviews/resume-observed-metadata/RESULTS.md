> English machine translation of the [Russian source](<../../../../../../ru/reports/experiments/prng64-carry-20261110/reviews/resume-observed-metadata/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../../README.md>) · [Direction](<../../../../../topics/02-prng-recovery.md>) · [Documents of the series](<../../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../../docs/LATEST_RESULTS.md>).


- 2026-11-10T17:51:12.320693+00:00 Controls passed: {'status': 'passed', 'local_truth_table': 8, 'word_pairs': 87380, 'solver_sum_cases': 712, 'exhaustive_recovery_instances': 32, 'fixed_cases': 20, 'seconds': 3.070227000003797}

- 2026-11-10T17:53:12.763107+00:00 plus23-17-26-little-02 synthetic cms: incomplete_unknown; 120.018s; states=0

- 2026-11-10T17:53:14.854659+00:00 plus23-17-26-big-03 synthetic cms: incomplete_unknown; 120.007s; states=0

- 2026-11-10T17:53:14.855665+00:00 plus23-17-26-big-02 synthetic cms: incomplete_unknown; 120.001s; states=0

- 2026-11-10T17:53:14.856922+00:00 plus23-17-26-little-03 synthetic cms: incomplete_unknown; 120.002s; states=0

- 2026-11-10T17:55:14.054883+00:00 plus23-17-26-little-02 synthetic cvc5: incomplete_unknown; 120.000s; states=0

- 2026-11-10T17:55:16.161344+00:00 plus23-17-26-big-02 synthetic cvc5: incomplete_unknown; 120.001s; states=0

- 2026-11-10T17:55:17.183006+00:00 plus23-17-26-little-03 synthetic cvc5: incomplete_unknown; 120.001s; states=0

- 2026-11-10T17:55:17.185870+00:00 plus23-17-26-big-03 synthetic cvc5: incomplete_unknown; 120.002s; states=0

- 2026-11-10T17:57:14.507806+00:00 plus23-18-5-big-02 synthetic cms: incomplete_unknown; 120.003s; states=0

- 2026-11-10T17:57:16.617142+00:00 plus23-18-5-big-03 synthetic cms: incomplete_unknown; 120.005s; states=0

- 2026-11-10T17:57:17.687094+00:00 plus23-18-5-big-06 synthetic cms: incomplete_unknown; 120.014s; states=0

- 2026-11-10T17:57:19.754741+00:00 plus23-18-5-little-02 synthetic cms: incomplete_unknown; 120.012s; states=0

- 2026-11-10T17:59:15.801447+00:00 plus23-18-5-big-02 synthetic cvc5: incomplete_unknown; 120.002s; states=0

- 2026-11-10T17:59:17.889621+00:00 plus23-18-5-big-03 synthetic cvc5: incomplete_unknown; 120.000s; states=0

- 2026-11-10T17:59:18.928008+00:00 plus23-18-5-big-06 synthetic cvc5: incomplete_unknown; 120.001s; states=0

- 2026-11-10T17:59:21.017526+00:00 plus23-18-5-little-02 synthetic cvc5: incomplete_unknown; 120.001s; states=0


### Intermediate conclusion 2026-11-10T18:00:55.260100+00:00

Attempts completed 8 from 10 All completed cases so far synthetic_incomplete; No real inputs. The equivalence of the new network is confirmed by pre-inspections. 64 independent bits do not mean 64 SAT-variables: in a typical case, the total number of variables 391 instead 393, entering XOR 1516 instead 1474. So far, there is no practical gain in completed restorations.

- 2026-11-10T18:01:16.232872+00:00 plus23-18-5-little-03 synthetic cms: incomplete_unknown; 120.004s; states=0

- 2026-11-10T18:01:18.363887+00:00 plus23-18-5-little-06 synthetic cms: incomplete_unknown; 120.011s; states=0

- 2026-11-10T18:03:19.600374+00:00 plus23-18-5-little-06 synthetic cvc5: incomplete_unknown; 120.000s; states=0

- 2026-11-10T18:03:28.224808+00:00 plus23-18-5-little-03 synthetic cvc5: incomplete_unknown; 130.724s; states=1

- 2026-11-10T18:03:28.228364+00:00 Ten-case exact-carry experiment finished; artifact audit pending.

- 2026-11-10T19:33:08.273538+00:00 Controls passed: {'status': 'passed', 'local_truth_table': 8, 'word_pairs': 87380, 'solver_sum_cases': 712, 'exhaustive_recovery_instances': 32, 'fixed_cases': 20, 'seconds': 3.070227000003797}

- 2026-11-10T19:33:08.309274+00:00 Ten-case exact-carry experiment finished; artifact audit pending.
