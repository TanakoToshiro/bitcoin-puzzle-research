> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-qcg-time-20261106/PROTOCOL_A.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-27 Localization of time of joint QCG

Objective: Find out where the time goes SEQ-26 upon ff.preprocess=false, and try precise acceleration. No masks, hidden bit boundaries, connections z=s², transitions gauge They don't delete. Workflows only get stored synthetic inputs. Original series and installed .venv They don't change.

Source: exact commit Z3 430d19e697e2ec9bad79ff210d41b4a7a5fcfa3e. Code theory_ff It does not add up the times created ff::solver, henceforth ff encode/solve seconds They do not explain the total 600 c. Local assembly Release-control from this source; then only the diagnostic clock is added/And the counters are in preparation and native theory DLL It's stored until it's used DLL It is loaded only by individual child processes through Z3_LIB_DIRS. No established library is replaced.

Measured: all native check; collection of current equalitys; explanation of conflict; preparation of inputs/Clearing of terms; rewriting; solve-eqs and freezing of bits; coding of polynomials; algebra proper solve; model check; root propagation. Some indicators are nested together and should not be summed up as independent wall time within the process; there are no parallel solvers in search measurements/compilation.

First profile full00, 120 s check, max_memory=2048 MIB, external 2 GiB/150 C. Clean local build and installed library serve as control of the impact of assembly and measurement. Timers are not optimization. Before a full-size profile, local builds pass small exact benchmarks; true full-size witnesses are used only by audit.

From the profile results, the exact candidates and the overall comparison budget are separately recorded solve_eqs/compact-coding/The cache is selected by measurement, not by the assumption of the fraction of unknown bits. More native checks per second are not declared acceleration recovery without SAT/UNSAT. All timeouts and errors are saved.
