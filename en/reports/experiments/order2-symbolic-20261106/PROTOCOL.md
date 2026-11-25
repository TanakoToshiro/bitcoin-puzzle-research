> English machine translation of the [Russian source](<../../../../ru/reports/experiments/order2-symbolic-20261106/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# O2-S01 Symbolic restrictions on differences and transfers

6 November 2026. Continuation O2-Q01. New folder; old computations and files don’t change.

Purpose: to replace the complete class entries with precise constraints, two independent forms of the same model: homogeneous recursion of modular differences with the remainder URem and obvious limited transfers a,b, The conditions and differences are unknown; b!=0. No true coefficients/condition solver They're not transmitted c All omissions are accounted for by preserving all135 position only CPU, cloudless/GPU.

Control first: two old inputs with full observable statesp7-case0-full, p17-case0-full) and their negative variants (to change the fully observable) s60 on s60+1 mod p, The complete initial sequence clearly defines the coefficients of non-degenerate control s60 give UNSAT.

Then 8 ready partial entrances: p11-case0/1-all, p17-case0/1-all, p31-new0/1, p61-new0/1. Comparison of the exact projection of the target with the saved complete O2-Q01, matrix/Don't go overboard.

New positive synthetic examples: modules127,257,65537, two at a time; parameters SHA256('O2-S01|p|case|attempt|field') mod p, b from1 beforep-1; It's just a non-zero difference maker83 reference numbers, width floor((i-1)*bit_length(p)/256), goal floor(70*bit_length(p)/256). These tests measure the limit of the solver, do not prove applicability to the real n.

Fixed Z3 random_seed=0. One request maximum5000MS, total series of projections of one input/maximization20c64 SAT-The testimonials SAT Only the remainder of the target, not the class, is blocked: this is how different forecasts are listed without listing all states/Completeness is only the final UNSAT. UNKNOWN/The limit does not mean the absence of a state or uniqueness SMT every request, statistics, reason UNKNOWN, independent examination of each SAT The two options use one backend Z3, They're not two independent solvers.

When positives fail/In the case of negative complete controls, the corresponding encoding is not allowed for partial problems/invalid certificate; UNKNOWN Incomplete control and also non-admission. If you're in a partial search, terminate that entry, maintain the limit, proceed to the next fixed test256-The search is not included in this stage.

The restart does not repeat the completed query-Incomplete login is saved as the limit of this budget, not automatically retraceable/encoding is a new experience, not a rewriting of the results RESULTS.md. Finale: Accurate mathematics, verified sets/Limits, time and memory, comparison with ready-made O2-Q01, Audit of the immutability of old data.
