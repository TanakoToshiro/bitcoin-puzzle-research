> English machine translation of the [Russian source](<../../../../ru/reports/experiments/dotnet-random-cuda-20261109/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).


- 2026-11-09T20:16:33.170184+00:00: GPU vectors: all 40 x 8704 integers / NextBytes / Next(256) agree with historical C#.

- 2026-11-09T20:16:38.327513+00:00: GPU search: all 33 synthetic result sets match CPU; full holdouts agree.

- 2026-11-09T20:16:41.408694+00:00: All acceptance controls passed. Launching bounded paired/new GPU pilots only.

- 2026-11-09T20:16:41.483534+00:00: Paired block 0: kernel 0.007926s, API 0.008642s.

- 2026-11-09T20:16:41.566564+00:00: Paired block 1: kernel 0.007991s, API 0.008640s.

- 2026-11-09T20:16:41.647661+00:00: Paired block 2: kernel 0.007992s, API 0.008928s.

- 2026-11-09T20:16:41.757506+00:00: New block 0: kernel 0.030506s, API 0.031297s; candidates 0.

- 2026-11-09T20:16:41.857397+00:00: New block 1: kernel 0.030483s, API 0.031277s; candidates 0.

- 2026-11-09T20:16:41.959228+00:00: New block 2: kernel 0.030488s, API 0.031400s; candidates 0.

- 2026-11-09T20:16:42.061396+00:00: New block 3: kernel 0.030502s, API 0.031196s; candidates 0.

- 2026-11-09T20:16:42.161140+00:00: New block 4: kernel 0.030555s, API 0.031454s; candidates 0.

- 2026-11-09T20:16:42.174482+00:00: GPU port and pilot cycle finished. Full seed domain not launched.

<!-- DN-G01-FINAL -->
## Outcome

CUDA-transfer accepted33 CPU-The search and historical vectors coincided. 34.37million seed/s kernel, everything16 - Uniquely6029312 real-life seed, candidate0, A full search didn't start. [Report](<FINAL_REPORT.md>).
