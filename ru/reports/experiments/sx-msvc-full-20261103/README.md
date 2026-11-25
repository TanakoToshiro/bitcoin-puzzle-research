> [English](<../../../../en/reports/experiments/sx-msvc-full-20261103/README.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/01-historical-generators.md>) · [Документы серии](<INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).

# SXM-03: полный uint32-проход SX/MSVC

Отдельный запуск на основании исторического аудита SXM-02.
Постановка: [PROTOCOL.md](<PROTOCOL.md>). Фиксированные входы: CONFIG.json.

Текущий прогресс: full/STATUS.json; журнал: JOURNAL.md; stdout.log/stderr.log.
Каждый файл full/blocks/NNNNN.json описывает завершённый блок из 2^20 seed.
Полнота считается принятой только после COMPLETE.json, INDEPENDENT_AUDIT.json
и второго независимого READBACK_COMPLETE.json.

Запуск/продолжение в WSL: bash launch.sh. Ошибки и ожидающий проверки кандидат
блокируют автоматическое продолжение. Завершённую серию повторно не запускают.
Итоговый отчёт RESULTS.md создаётся после окончания и проверки покрытия.
