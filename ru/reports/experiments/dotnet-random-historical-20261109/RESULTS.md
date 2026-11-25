> [English](<../../../../en/reports/experiments/dotnet-random-historical-20261109/RESULTS.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/01-historical-generators.md>) · [Документы серии](<INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).


- Data: all 83 solutions verified with coincurve and independent Python arithmetic.

- Historical source / independent C# / Python / installed Framework: 40 seeds x 8704 outputs agree.

- Synthetic recovery: all 32 scheme/seed cases and the 2^20 search recovered the planted seed; holdouts verified.

- Filter controls: exhaustive C#/Python agreement, contradiction, endpoints and checkpoint resume passed.

- Real pilot 0: [0,262144), 1.235s, 0 train candidates; all 16 schemes.

- Real pilot 1: [1073741824,1074003968), 1.220s, 0 train candidates; all 16 schemes.

- Real pilot 2: [2147221504,2147483648), 1.231s, 0 train candidates; all 16 schemes.

- Fixed cycle complete; report/audit pending. Full 2^31 scan was not started.

<!-- DN-R01-FINAL -->
## Итог цикла

Исторический исходник 2014-11-12 восстановлен; 33 синтетических восстановления с holdout прошли. Реальный пилот: 786432 seed ×16 схем, 0 кандидатов, 0.03662109% покрытия. Полный проход не выполнен, прогноз с обвязкой 3.14 ч CPU. [Отчёт](<FINAL_REPORT.md>).
