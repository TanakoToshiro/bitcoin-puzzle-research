> English machine translation of the [Russian source](<../../../../ru/reports/experiments/order2-symbolic-20261106/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# O2-S01 Limitations on coefficients and differences

6 November 2026, Europe/Moscow. Continuation O2-Q01. **The exact model without external class enumeration has been built and tested, but the tried-and-tested symbolic search has not yielded practical benefits28 Partial requests of the main series will reach a limit without SAT-This is the limit of two specific encodings/regimes Z3, It's not a refutation of recursion, it's not a proof that you can't recover. The real clues weren't explored by this solver.**

## What's been done?

Instead of overkill `(a,b,d1,d2)` A system of unknown modular differences is recorded:

```
d_(i+2) = a*d_(i+1)+b*d_i mod p
s_(i+1) = s_i+d_i mod p
```

The second accurate record retains integer transfers:

```
s_i+d_i = s_(i+1)+p*epsilon_i, epsilon_i in {0,1}
a*d_(i+1)+b*d_i = d_(i+2)+p*q_i, 0 <= q_i <= 2*p-4.
```

Coefficients a,b And all the hidden states are unknown c removed and restored from any SAT-Proved equivalence of original affinity recursion; the bits extended so as not to lose the older parts of the works135 Masks are only applied to the original83 The passes didn't shrink. [Mathematics](<MATH.md>).

Every one found SAT-forecast71 It should be locked in its entirety, without listing the remaining states of the same class UNSAT This proves that many predictions are complete, and it's correct, but it doesn't guarantee a quick search for the first evidence.

## Controls and Small Known Answers

Both encodings passed two positive and two negative controls with fully observable states modulo7/17: everything **8 completed entrances**. Negative cases differ in spoiled s60, The rest of the observations remain the same. SAT-The evidence is retested by independent ordinary execution of the original recursion, not only by difference equations.

Nana8 Partial inputs with the already known complete answer are obtained:

| Input | O2-Q01: full search, with | Complete projection O2-Q01 | Residues: c / status | Transfers: c / status |
|---|---:|---|---|---|
| p11-case0-all | 0.072 | [0, 1] | 5.056, UNKNOWN | 5.232, UNKNOWN |
| p11-case1-all | 0.028 | [1] | 5.066, UNKNOWN | 5.040, UNKNOWN |
| p17-case0-all | 0.179 | [0] | 5.069, UNKNOWN | 5.051, UNKNOWN |
| p17-case1-all | 0.155 | [0] | 5.065, UNKNOWN | 5.047, UNKNOWN |
| p31-new0 | 2.149 | [0] | 5.062, UNKNOWN | 5.402, UNKNOWN |
| p31-new1 | 2.749 | [0] | 5.469, UNKNOWN | 5.054, UNKNOWN |
| p61-new0 | 41.791 | [0] | 5.801, UNKNOWN | 5.071, UNKNOWN |
| p61-new1 | 34.525 | [0] | 5.103, UNKNOWN | 5.548, UNKNOWN |

For new modules127,257,65537 Two non-degenerate positive examples have been prepared1,2,4It's a bit at the same relative scale of the masks12 requests6entrances×2coding UNKNOWN, cause timeout. The true values are only available to the verification code and are not used for recovery.

Totally28 partial requests were given UNKNOWN. **The empty array of residues found here does not mean that there are no acceptable values.** No recovery has taken place; no new forecast limits have been obtained from these requests5000ms due to processing of completion backend; The sum of time of the main series checks is saved 158.560c, without building, running processes and auditing. Memory maximum by metric Z3 955.03MB, partial RSS.

## Budget sensitivity

After the main series, a separate protocol selected the smallest partial example with the only known prediction p11-case1-all. Both unaltered encodings received60000MS on request; previous results are not overwritten. [Additional protocol](<SUPPLEMENT_PROTOCOL.md>).

- **remainder**: statuses ['unknown'], 60.074c; residues found []fullness False.
- **carry**: statuses ['unknown'], 60.039c; residues found []fullness False.

This is a test of the effect of a short limit on one input, not a guarantee of the speed limit of all possible SMT/SAT-Approaches O2-Q01 A full response to this entry has already been received 0.028(c) No need to repeat the search.

## Where is the obstacle?

The overall shift can already be handled cheaplyO2-Q01). In the new entry, a bottleneck - a joint definition of unknowns a,b and differences in works `a*d+b*d`, together with the transfers q. Low bits of observations do not allow to discard p*q: p It's odd, so this term affects even the lower bits. Bit recording and explicit transfer boundaries provide accuracy, but they don't actually cut off effectively.

External brute force approximately2^1024 Classes are replaced by symbolic restrictions, but the internal SAT-The search doesn't have to be fast **It wasn't an improvement**. There is no reason to run it on a real basis256-The bit module, transfer the listing to GPU or approve the receipt of bit number71.

For further progress, a new way to reduce the space of coefficients is needed/For example, a separate verifiable scheme for eliminating unknowns or processing the rank of difference sequences. This is the direction of the next development, not the implemented algorithm and the promised gain. Simply increasing the time of all current queries based on this experience is not justified.

## Audit and reproducibility

In order to distinguish the error of encoding from the difficulty of searching, all **28 positive partial encoding** Checked with fully substituted known evidence: SAT In all cases, these checks confirm the presumption of the condition; **It is not considered to be a blind restoration**. Retained separately in PINNED_CONTROLS.json - an artifact of the initial study (`PINNED_CONTROLS.json`; outside the picture.

Audit checked the hashes SMT, anchorage/coda, all SAT-evidence of the main series, 94,435 Integer cases of transfer boundaries and 3,891 unchanged files O2-Q01. UNSAT grounded Z3; evaluator UNSAT-There's no proof. Two encodings use one backend They are not called independent solvers. AUDIT.json - an artifact of the initial study (`AUDIT.json`; outside the picture.

Entrances, enquiries, statistics, reasons for stopping and witnesses are saved in cases - an artifact of the initial study (`cases`; outside the picture), additional mode in supplement - an artifact of the initial study (`supplement`; outside the picture), numerical tables in NUMERIC_TABLE.csv - an artifact of the initial study (`NUMERIC_TABLE.csv`; outside the picture. [README](<README.md>) It contains commands to continue and reassemble the report. Uncompleted requests are saved as execution limits; timeouts are not replaced by negative responses. Old projects are unchanged; background computations are not.

On a separate copy of the control checked continuation after saved SAT: The first query was not repeated or changed; the completed re-launch recorded nothing. RESUME_CHECK.json - an artifact of the initial study (`RESUME_CHECK.json`; outside the picture.
