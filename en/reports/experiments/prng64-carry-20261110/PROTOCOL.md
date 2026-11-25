> English machine translation of the [Russian source](<../../../../ru/reports/experiments/prng64-carry-20261110/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# RNG64-05 Exact network of transfers of a known amount

10 November 2026. Exactly the same 10 synthetic_incomplete from RNG64-04; entries are copied
Historical families, packing, masks known/fitting/holdout step
They don't change between the keys. The old results just get read.

State - immediately after the first fully known exit z. Submission:
64 free-bit x, c0=0, y_j=x_j XOR c_j XOR z_j; c_(j+1)=x_j OR c_j upon
z_j=0 and x_j AND c_j upon z_j=1. Last transfer discarded modulo 2^64.
Other independent bits y Nope z=0 forbidden x=0; upon z!=0 zero-state
It's impossible. The witness's return to his former state before offset0; lockdown
only x, because y It is clearly determined by the amount.

CMS: explicit AND/OR-transferences XOR-shapes, including constants
distribution through previous direct/Reverse transitions. Limitation anchor-sum
Used constructively and reused by the shared network of addition is not added.
The additions of the remaining observable outputs are encoded as before: only changes
network anchor and her substitution. Cvc5: independent bit-vector code
simplification, one 64-bit x And the obvious single-bit transfers, y It's concatenated.

Same ones pycryptosat 5.18.0/cvc5 1.4.2, parameters, 120 seconds/request,
240 seconds/engine/occasional 8 Two engines in all ten states synthetic-
entrances, four independent CPU-simultaneous occurrence. Baseline RNG64-04 only
This is a code check; algebraic reductionx,z-x) It's already known.

Up to the main series: all 8 local combinations x_j,c_j,z_j; sum
widthly 1..8; full-fledged recovery Reduced tasks with early/late
partial observations; fixation of the full state/spoiled bit for all
20 pair case×engine; zero sum, maximum words, overflow, ambiguity,
UNKNOWN. Both parties must reject the second y fixedly x,z.

Each engine gets real data only after its own complete blindness
synthetic-restoration containing the planted state and inspections 83 mask,
81 holdout and the hidden no71 For both previous cross-key steps, no secrets are passed on
worker. Fixed states serve as a verification of implementation, do not replace blind recovery.
All SAT check with the usual execution. UNKNOWN/cap/budget - Incomplete.
Local UNSAT only excludes this scheme; in conditions to check only
Two previous steps holdout-Candidate stops new tasks before checking the address.

Formulas, witnesses, time, errors, versions, hashes and intermediate conclusions are saved.
OS-locking runner/worker; Resume without repeating the completed steps.
Final audit, report and RESULTS.md in a new folder; GPU You don't need a cloud.
