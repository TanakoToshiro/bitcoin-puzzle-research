> English machine translation of the [Russian source](<../../../../ru/reports/experiments/prng64-solver-20261110/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# RNG64-03: fixation 17 open-ended

Protocol: [PROTOCOL.md](<PROTOCOL.md>)Previous results RNG64-02 readable
No change. The new data is only here 17 lineages
persist SCHEMES.json and MANIFEST.json.

Teams PowerShell from this folder:

> Executable code/The commands are omitted in the documentary copy.


Both bindings hold the lock by means Windows on RUN.lock. Existence of the file
does not mean an active process: protection is provided by blocking the byte of the OS.
PROCESS.json contains PID/path/Last launch time. Completed OUTPUT.json
and RESULT.json It's not allowed to change the fixed code.
You need a separate series for the new model worker.py manually into the catalogue,
run simultaneously run.py.

Transmitted to the solver family and observations. CHECKER_SECRET.json read
All states found are numerically rechecked; closed
synthetic-Control requires more than SAT, (a) complete enumeration with the final UNSAT.
Control positives/Negative tests with fixed states are
It is a test of implementation and is not issued for blind restoration.

For CryptoMiniSat formula-*.json precise CNF/XOR and blocking states;
for cvc5/Z3 persistence SMT2. query-*.json fixes the answer, time, limit, witness,
cause UNKNOWN and hash formula. Separate cross-control real/crosscheck use
Pilots and unsuccessful attempts are saved and included in the price.

Virtual environments are local. Used pycryptosat 5.18.0, cvc5 1.4.2,
z3-solver 5.3.3.0 and Python 3.11. Initial information about the interfaces is stored in sources.
Time is measured locally by CPU; They are not an estimate of complete exhaustion seed.
