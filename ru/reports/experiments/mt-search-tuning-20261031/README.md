> [English](<../../../../en/reports/experiments/mt-search-tuning-20261031/README.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/02-prng-recovery.md>) · [Документы серии](<INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).

# E1l — воспроизведение

[Протокол](<PROTOCOL.md>), [живой журнал](<RESULTS.md>), [таблицы](<TABLES.md>), итог после завершения — CONCLUSION.md.

Из `research/puzzle71-hypotheses`:

> Исполняемый код/команды опущены в документационной копии.


Компиляция нового исходника: `g++ -std=c++17 -O3 -Wall -Wextra native.cpp -lcrypto -o native` внутри локального WSL, в этой папке. Сохранённый измеренный бинарник не перезаписывать; проверочную сборку делать в другом месте. Manifest фиксирует исходник, бинарник, harness и протокол. Публичный ввод: `SEARCH K N Q salt mu_factor t_factor start...`. Алгоритм не читает файлы и не получает секрет/ID/seed.

Версии и хэши: BUILD.json, VERSIONS.json, manifest.json. Поисковые запросы — queries/<SHA>/request.json и native-input.txt. Результаты агрегированных измерений — runs/. Секреты только у проверяющего кода — VERIFIER_ONLY_FIXTURES.json. Выбор параметров неизменяем после SELECTION.json; новое исследование требует новой папки и нового теста.
