> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-qcg-joint-20261106/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-23 a joint nonlinear solution of the quadratic model

Date: 06.11.2026. **Precise joint solver implemented and tested on small problems 256-There's no recovery yet with bitmasks: all six major attempts are limited to memory. It's not a negative response about the model. Real keys haven't been verified.**

## What has changed relative to SEQ-22

Within the solved system are given common a,b,c all 135 For each of the states 134 transitions mandatory z[i]=s[i]² mod n and s[i+1]=a*z[i]+b*s[i]+c mod n. Works a*z[i] and b*s[i] The links between monomes are valid during the search; they're not delayed until the candidate is tested.

Hidden intermediate states between No70,75,…,135 Free polynomial degree 32 Four new positive chains and two random inputs have the original 83 masks: junior i−1 bit, no1..70 no75..135 step-by-step 5. Parameters, states, and higher bits are not available in the public domain INPUT.json, Transferable to the work process.

In addition, a part of the general shift freedom is eliminated: according to the proved equivalent condition, at least one informatively observed state must be less than 2^134. A reference representative or a particular small state was not passed to the solver; success would separately account for the acceptable solution and the coincidence with the class of the true chain. [Evidence and accurate coding](<MATH.md>).

## Verification of correctness before the main series

Implemented two codings in the established Z3 5.3.3.0: numeric QF_NIA straight-field QF_FF. These are two representations of one problem in one product, not two independent solvers.

Total independent over-the-counter **360536** kit a,b,c,s1 gave the exact standard for 10 The field encoding answered correctly **10/10**, including two incompatible inputs; all SAT-The candidates have gone into a whole lot of solutions. These little masks are not the original ones 256-They are used only to verify the implementation.

On the control sequence [2,7,6,9,7] mod 17 both coded UNSAT available z=s² and SAT After removing only these bonds, the resulting weakened models do not satisfy the original QCG-This clearly confirms that the monome connections limit the search itself.

Integer encoding did not respond to everything 9 partially observed small tasks: 7 stopover 25 c 2 unknown cause timeout. So she's not allowed to six full-size entrances NIA-attempt **non-start** They are not considered full-size timeouts.

Checked out 1697 Transformation of acceptable small solutions by a general shift and 2731 All positive small and full-size standards after normalization satisfy each statement of both encodings under closed substitution, the latter being a correctness audit, not a recovery with unknown parameters.

## Main series with initial masks

The field task contains **17497 variable 17659 assertion**: 3 total coefficients, 135 states, 134 square and 17225 Binary upper bounds prevent masks from being traversed through reduction mod n. Parts of the condition were not disclosed further.

| Input | Type | Time of the process, with | Maximum measured memory, MiB | Result |
|---|---|---:|---:|---|
| full00 | QCG | 38.349 | 1024.88 | External memory limit; no response |
| full01 | QCG | 40.623 | 1024.03 | External memory limit; no response |
| full02 | QCG | 35.872 | 1024.18 | External memory limit; no response |
| full03 | QCG | 32.929 | 1024.44 | External memory limit; no response |
| full04 | Random | 32.731 | 1026.14 | External memory limit; no response |
| full05 | Random | 33.212 | 1025.62 | External memory limit; no response |

For each launch: 60 inside Z3, 90 (c) External limit, internal max_memory=768 MB outer threshold 1024 MiB. Up to two processes were running simultaneously, all six stopped by an external memory monitor before being retrieved SAT/UNSAT; The time limit didn't cause these stops 1024 MiB It reflects the discrete measurement of 0.25 c. Internal limit Z3 The calculation was not completed before the external limit.

Main queue time: **107.456693 s**, The sum of time of the six processes: 213.715408 This is limited pilot time, not full decision time forecast checkpoint In case of forced stop not received; exact tasks.smt2 around 11.8 MB each), parameters, PID And the external statuses are preserved.

**All 4 Positive controls went unanswered; both random controls also went unanswered.** The ability to distinguish between these classes has not been measured, and the success of recovery from the original masks has not been confirmed QCG Not compatible with her masks.

## Correction of process control

In the first small line Windows venv launcher Python Initial memory measurements are relevant to that memory and excluded from scientific findings. Original records are saved. Until full-size search, the controller is replaced by a new one run_main.py direct-start Python, modelless/The control process has identified 48 MiB; Monitor confirms match PID consumption around 59 MiB.

Separate tolerance FF The monitor fix is recorded in [AMENDMENT_01.md](<AMENDMENT_01.md>) and AMENDMENT_MANIFEST.json **before** The first protocol, code and MANIFEST.json They're not rewritten. So there's a little restriction NIA main limitations FF They differ in the stage, cause and reliability of memory measurements.

## Audit and retained restrictions

The final audit was: 8 of the full-length statements in all cases, 6 saved-up/hashes/statuses, 4 A witness to the general shift 10936 file of the previous series, 1792 previous dependencies and 35 file Z3. Previous scientific files have been preserved SHA-256 and mtime.

Uncompleted requests are listed in OPEN_CASES.json - an artifact of the initial study (`OPEN_CASES.json`; outside the picture: 6 Basic limitations of memory FF, 9 smallness NIA separately 6 primary NIA-The inputs can be repeated with different limits in the new directory; there is no stored search state to continue from the same point SEQ-16/17 This experiment has not changed.

RESULTS.json - an artifact of the initial study (`RESULTS.json`; outside the picture), VALIDATION_FF.json - an artifact of the initial study (`VALIDATION_FF.json`; outside the picture), AUDIT.json - an artifact of the initial study (`AUDIT.json`; outside the picture), [README.md](<README.md>)The technical semantics of the encodings are verified with [leadership Z3 field-wise](https://microsoft.github.io/z3guide/docs/theories/Finite%20Fields/) and established API; Proof of accuracy and its limitations are given in MATH.md.

## Conclusion within the bounds of experience

Now there's a proven, accurate co-production with monome dependencies and reproducible full-size queries. On the current pilot, the hurdle was the cost of solving: NIA I didn't pass a small security clearance FF It's different from the theoretical barrier of the individual HG-ideal SEQ-22: There's no proof that it's impossible, there are resource constraints on a particular implementation, and increasing the limit doesn't guarantee recovery, and the success of synthetics with the original masks has yet to be demonstrated.
