> [English](<../../../../en/reports/experiments/dotnet-random-gpu-full-20261110/README.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/01-historical-generators.md>) · [Документы серии](<INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).

# DN-G02 — завершённый полный поиск

Сначала FINAL_REPORT.md и FULL_AUDIT.json. COMPLETE.json — исходная запись runner; AUDITED_COMPLETE.json связывает независимый аудит.

Команда запуска была: `wsl -d Ubuntu-24.04 -- python3 reviews/run_full.py --out ../dotnet-random-gpu-full-20261110` из папки DN-G01. Все вычисления завершены, возобновление не требуется.

blocks/ сохраняет SCAN, VERIFIED и цепочки CHECKPOINT; импортированные блоки имеют IMPORT.json. Старые источники и результаты не изменены.
