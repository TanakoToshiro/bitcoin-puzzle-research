> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt19937-linear-20261030/NOTES.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E1: Interpretations and Interim Conclusions

## 2026-10-30 - before basic calculations

The protocol is recorded in PROTOCOL.md. Schemes eight; seed is not selected; the projection of many achievable states on 70 unknown bits number71.

In development, the usual exception for building a step matrix is separated from the complete reduction in observations for the target projection: a stop on the first free senior column leaves the lower support columns and is unsuitable for canonical projection 120 Small systems with a lot of brute force. Scientific results were not miscalculated.

The first set of ten tests was completed 0,867 c: known MT-vector CPython, symbolism twist, rank 19937, restoration of the full state, contradictions, XOR With free single bits and packaging, an independent verification code is added, with synthetic data and intentional damage to the certificate.

## 2026-10-30 09:30–09:36 UTC - the main result and acceptance

Launch: [20261030-093024-0567d283](<runs/20261030-093024-0567d283/CONCLUSION.md>)Extended 11 Preliminary tests were performed for 1,812 c, then the same set of frozen code went inside the main launch invocation budgeted 0 correctly stopped before calculating the tasks; the next one continued with a limit 3600 c. It has completed all ten stages of 67,007 c. Third invocation budgeted 0 I missed all the completed stages and didn’t count anything.

Data: Re-checked ranges, compressed public points and addresses 83 decisions; SHA-256 snapshot `d291351169b1bb483b580af8cf4c30e503941f7b15b81aabd418e93809a40b70`Forced most significant bits ruled out, left 3767 observations.

Intermediate conclusions are the same in all eight schemes: at No1–50 rank 1225 and 70 free target bits; after No1–70 rank 2415 and 70 Free bits; further No75,80,…,135 They don't change the dimension of the projection `rank(A)=3767`, `rank([A;B])=3837`, `d=70`All of it 120 The steps are saved and verified independently, no incompatible circuitry, no particular unknown bit or no trivial XOR Not found.

This is a stronger result than “the solver did not find the bit”: for each circuit saved 71 numerical state (baseline) + 70 changes, together 568. C-implementation MT into CPython I've checked that all of these states are consistent with published solutions and target residues, so that the independence of the target directions and the linearity of the generator ensure compatibility **anyone** from 2^70 leftover71. Matrixes and states are available in `runs/ID/tasks/<схема>/`Scientific data are not recalculated when creating the final Markdown.

Additional precise verification resolved the issue of achievability, not just the size of the stored state: rank after the first and second twist equal 19937. So the transition pattern is invariant, and it's reversible, and there are no extra transition states 38,781 c and written in transition-image-check.json - an artifact of the initial study (`runs/20261030-093024-0567d283/transition-image-check.json`; outside the picture. Along with the main run, 105,787 The budget is not exhausted; it is not necessary to repeat the completed calculations for the sake of spending the limit.

Admission: ACCEPTANCE.json - an artifact of the initial study (`runs/20261030-093024-0567d283/ACCEPTANCE.json`; outside the picture 185 hashes/data/In addition, the hash of additional verification was recorded separately, and the additional reporting assistants did not change the frozen computational code.

Inference Boundary: Accurate negative response about extracting information from known decisions **the arbitrary achievable state in these eight schemes**. No reductions 70-There's no bit space. That doesn't rule out MT narrowly seed corroborates MT real source puzzle. extracting information directly from HASH160 into E1 It wasn't investigated. E2/E3/E4 They didn't start.

Do not repeat this picture again/A new solution puzzle You can add a new start; you can explore a specific historical initialization as a separate, narrower hypothesis. Old stages, states and conclusions are preserved.
