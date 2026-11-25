> English machine translation of the [Russian source](<../../../../ru/reports/experiments/order2-symbolic-20261106/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# O2-S01 - reproducibility

From this folder:

> Executable code/The commands are omitted in the documentary copy.


run.py prepare INPUT separately CHECKER_TRUTH, launches each pair/Encoding in a new process and updating RESULTS.md. solver.py reads only INPUT. Hidden options are used by the verification code after the result, not to customize the search.

Code and PROTOCOL frozen in MANIFEST.json. Changing the code requires new experience OUTPUT Not re-calculated; requests are saved after each SAT/UNSAT/UNKNOWN. When interrupted before OUTPUT worker re-reading query And it restores the prohibitions of the predictions that have already been found. UNKNOWN It is considered to be the limit of a given launch, not automatically repeated.

> Executable code/The commands are omitted in the documentary copy.


One request5c, the whole series of projections20(c) External process emergency limit60C. The hourly values here are not the limitations of future research, but a fixed mode for comparing this experience. The restart does not extend this budget.

V cases/<entrance>/<code>/ preserved IDENTITY.json, SMT-LIB every request, SHA-256, statistics Z3, SAT-certificates and independent integer inspections, stdout/stderr, OUTPUT.json. Large synthetic Truth They are close to each other, not transmitted worker. Where there are exceptions ERRORS.log. A numerical report is built from these files without re-searching. Z3 max memory - metric backend, partial RSS; processes are isolated so that the previous tasks do not overstate the maximum of the following.

Old files O2-Q01 Their final manifesto is checked before experience and during the final audit/Positive findings. Reality Puzzle It's not part of this launch.

Independent audit and reassembly of the report after completion of saved stages:

> Executable code/The commands are omitted in the documentary copy.


The audit repeats the checks provided by witnesses, without looking for hidden parameters. finalize.py only reads the results, updates the report and hashes; old records RESULTS.md The additional increased limit is described separately in SUPPLEMENT_PROTOCOL.md, his artifacts in supplement/.
