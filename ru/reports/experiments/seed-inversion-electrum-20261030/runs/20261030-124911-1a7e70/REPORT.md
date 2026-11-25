> [English](<../../../../../../en/reports/experiments/seed-inversion-electrum-20261030/runs/20261030-124911-1a7e70/REPORT.md>) · [Выбор языка](<../../../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../../../README.md>) · [Направление](<../../../../../topics/03-wallets.md>) · [Документы серии](<../../INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../../../docs/LATEST_RESULTS.md>).

# E7 — результаты

Run: `20261030-124911-1a7e70`. Статус: complete.

Выполнено 13/13 стадий; время научных попыток 112.032 с (без подготовки).

## MT: минимальное число свободных битов локального окна

Число до нелинейных ограничений seed. Это размер пространства для прямого дополнения слов, не нижняя граница всех seeded-атак.

| Схема | Наблюдения | Seed, бит | Мин. свободных координат | Начало I | Канонический I228 |
|---|---|---:|---:|---:|---:|
| forward-big-s1 | train50 | 64 | 128 | 2 | 128 |
| forward-big-s1 | train50 | 96 | 160 | 2 | 160 |
| forward-big-s1 | train50 | 128 | 192 | 2 | 192 |
| forward-big-s1 | all83 | 64 | 68 | 372 | 128 |
| forward-big-s1 | all83 | 96 | 100 | 371 | 160 |
| forward-big-s1 | all83 | 128 | 132 | 370 | 192 |
| forward-big-s2 | train50 | 64 | 128 | 2 | 128 |
| forward-big-s2 | train50 | 96 | 160 | 2 | 160 |
| forward-big-s2 | train50 | 128 | 192 | 2 | 192 |
| forward-big-s2 | all83 | 64 | 128 | 2 | 128 |
| forward-big-s2 | all83 | 96 | 160 | 2 | 160 |
| forward-big-s2 | all83 | 128 | 192 | 2 | 192 |
| forward-little-s1 | train50 | 64 | 128 | 2 | 128 |
| forward-little-s1 | train50 | 96 | 160 | 2 | 160 |
| forward-little-s1 | train50 | 128 | 192 | 2 | 192 |
| forward-little-s1 | all83 | 64 | 68 | 372 | 128 |
| forward-little-s1 | all83 | 96 | 100 | 371 | 160 |
| forward-little-s1 | all83 | 128 | 132 | 370 | 192 |
| forward-little-s2 | train50 | 64 | 128 | 2 | 128 |
| forward-little-s2 | train50 | 96 | 160 | 2 | 160 |
| forward-little-s2 | train50 | 128 | 192 | 2 | 192 |
| forward-little-s2 | all83 | 64 | 128 | 2 | 128 |
| forward-little-s2 | all83 | 96 | 160 | 2 | 160 |
| forward-little-s2 | all83 | 128 | 192 | 2 | 192 |
| reverse-big-s1 | train50 | 64 | 128 | 2 | 128 |
| reverse-big-s1 | train50 | 96 | 160 | 2 | 160 |
| reverse-big-s1 | train50 | 128 | 192 | 2 | 192 |
| reverse-big-s1 | all83 | 64 | 125 | 367 | 128 |
| reverse-big-s1 | all83 | 96 | 157 | 366 | 160 |
| reverse-big-s1 | all83 | 128 | 189 | 365 | 192 |
| reverse-big-s2 | train50 | 64 | 128 | 2 | 128 |
| reverse-big-s2 | train50 | 96 | 160 | 2 | 160 |
| reverse-big-s2 | train50 | 128 | 192 | 2 | 192 |
| reverse-big-s2 | all83 | 64 | 128 | 2 | 128 |
| reverse-big-s2 | all83 | 96 | 160 | 2 | 160 |
| reverse-big-s2 | all83 | 128 | 192 | 2 | 192 |
| reverse-little-s1 | train50 | 64 | 128 | 2 | 128 |
| reverse-little-s1 | train50 | 96 | 160 | 2 | 160 |
| reverse-little-s1 | train50 | 128 | 192 | 2 | 192 |
| reverse-little-s1 | all83 | 64 | 125 | 367 | 128 |
| reverse-little-s1 | all83 | 96 | 157 | 366 | 160 |
| reverse-little-s1 | all83 | 128 | 189 | 365 | 192 |
| reverse-little-s2 | train50 | 64 | 128 | 2 | 128 |
| reverse-little-s2 | train50 | 96 | 160 | 2 | 160 |
| reverse-little-s2 | train50 | 128 | 192 | 2 | 192 |
| reverse-little-s2 | all83 | 64 | 128 | 2 | 128 |
| reverse-little-s2 | all83 | 96 | 160 | 2 | 160 |
| reverse-little-s2 | all83 | 128 | 192 | 2 | 192 |

Полные специальные слова позволили восстановить все 9 контрольных seed на обеих исторических версиях. Это положительный контроль с полными словами, не результат восстановления из puzzle-масок.

## Electrum

501 уникальный(х) MPK-кандидат(ов), 12 отображений, 6012 кандидат–отображение проверок, совпадений всех трёх верхних задач: 0.
Отрицательный результат ограничен этим пулом и отображениями. Не исключает Electrum.

## Маскирование внутри Armory-цепочки

Z3: **unknown**. Причина/вывод: timeout.
Время первого запроса 30.239 с. Запрос и точная модель: feedback.smt2 — артефакт исходного исследования (`feedback.smt2`; вне снимка), feedback.json — артефакт исходного исследования (`feedback.json`; вне снимка).
unknown/timeout не является опровержением.

## Артефакты и продолжение

- historical-2.7.9 — артефакт исходного исследования (`historical-2.7.9.json`; вне снимка)
- historical-3.4.2 — артефакт исходного исследования (`historical-3.4.2.json`; вне снимка)
- mt-controls — артефакт исходного исследования (`mt-controls.json`; вне снимка)
- projection-forward-big-s1 — артефакт исходного исследования (`projection-forward-big-s1.json`; вне снимка)
- projection-forward-big-s2 — артефакт исходного исследования (`projection-forward-big-s2.json`; вне снимка)
- projection-forward-little-s1 — артефакт исходного исследования (`projection-forward-little-s1.json`; вне снимка)
- projection-forward-little-s2 — артефакт исходного исследования (`projection-forward-little-s2.json`; вне снимка)
- projection-reverse-big-s1 — артефакт исходного исследования (`projection-reverse-big-s1.json`; вне снимка)
- projection-reverse-big-s2 — артефакт исходного исследования (`projection-reverse-big-s2.json`; вне снимка)
- projection-reverse-little-s1 — артефакт исходного исследования (`projection-reverse-little-s1.json`; вне снимка)
- projection-reverse-little-s2 — артефакт исходного исследования (`projection-reverse-little-s2.json`; вне снимка)
- electrum — артефакт исходного исследования (`electrum.json`; вне снимка)
- feedback — артефакт исходного исследования (`feedback.json`; вне снимка)

Остались: нет.
Команды и границы: [README](<../../README.md>). Ручные выводы: [NOTES](<../../NOTES.md>).
