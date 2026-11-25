> [English](<../../../../../en/reports/experiments/prng64-assembly-20261110/reviews/AUDIT_NOTES.md>) · [Выбор языка](<../../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../../README.md>) · [Направление](<../../../../topics/02-prng-recovery.md>) · [Документы серии](<../INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../../docs/LATEST_RESULTS.md>).

# Техническая заметка аудита

10 ноября 2026. Первый запуск reviews/audit.py остановился на
`z3.parse_smt2_file`: `Z3Exception: file access error` при пути с кириллицей.
Чтение передано Python pathlib.read_text(encoding='utf8'), затем тому же
парсеру Z3 через parse_smt2_string. Входные SMT2 и расчётные результаты не
менялись. Это ошибка загрузчика аудита, не UNSAT и не ошибка основной серии.
