> [English](<../../../../en/reports/experiments/sequence-selective-algebra-20261102/README.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/04-sequences-and-lattices.md>) · [Документы серии](<INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).

# SEQ-13 — выборочное завершение старой алгебры

План: [PROTOCOL.md](<PROTOCOL.md>). Итог: [FINAL_REPORT.md](<FINAL_REPORT.md>).
Ровно 14 непустых сохранённых систем SEQ-09 получают новую попытку
решателем SEQ-10. Прежние записи не меняются, LLL не повторяется.

Из корня проекта в PowerShell:

> Исполняемый код/команды опущены в документационной копии.


Готовые исходы, включая таймауты, не повторяются. JOURNAL.jsonl дописывается.

- SELECTED.json: заранее выбранные записи и исходные SHA256.
- SOURCES.json: исходные решётки и сравнение с baseline тех же входов.
- inputs/, lattices/source/: точные копии, без новой редукции.
- results/degree/, algebra/, algebra_checkpoints/, progress/: новые исходы.
- AUDIT.json, audit_packets/: повторные сертификаты и независимая алгебра.
- MEASUREMENTS.json, COMPARISON.json: все времена и парные исходы.
- RESOLUTION_MAP.json: исходный timeout, новый ответ, остальные открытые записи.
- RETRY_INDEX.json: только новые незавершённые попытки этой серии.
- PRIOR_SNAPSHOT.json, PROVENANCE.json, ENVIRONMENT.json: целостность и происхождение.
- RESUME_CHECK.json, ACCEPTANCE.json, COMPLETE.json, ARTIFACTS.json: приёмка.

Один CPU-процесс, до 60 с на новую алгебру и 600 с всего;
аудит до 120 с на вход отдельно. Без установок и GPU.
