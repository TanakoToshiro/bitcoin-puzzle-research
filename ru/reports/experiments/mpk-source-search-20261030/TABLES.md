> [English](<../../../../en/reports/experiments/mpk-source-search-20261030/TABLES.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/05-signatures-and-provenance.md>) · [Документы серии](<INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).

# E8 — числовые результаты из сохранённых JSON

Этот файл пересобирается `report.py`. Интерпретации и журнал находятся в [RESULTS.md](<RESULTS.md>).

| Показатель | Значение |
|---|---:|
| Моделей специального корня №256 | 48 |
| Выживших моделей | 0 |
| Синтетических сценариев | 48 |
| Контрпримеров старому фильтру №256 как ребёнка | 24 |
| Время root256, с | 0.528760200 |
| Независимых аффинных проверок | 48 |
| Время дополнительной проверки, с | 0.584705800 |
| Попыток получения источников | 57 |
| Успешных ответов | 56 |
| Сканируемых документов | 49 |
| Уникальных точек | 83 |
| Уже проверенных в E7 | 81 |
| Новых точек | 2 |
| Проверок новых точек | 24 |
| Совпадений | 0 |

## Специальный корень №256

| t | Порядок | Шаг | Смещение | Ветвь | Первый конфликт по решениям | Первый конфликт по точкам |
|---:|---|---:|---:|---:|---:|---:|
| 0 | ascending | 1 | 0 | 0 | 6 | 255 |
| 0 | ascending | 1 | 0 | 1 | 5 | 255 |
| 0 | ascending | 1 | 1 | 0 | 6 | 255 |
| 0 | ascending | 1 | 1 | 1 | 5 | 255 |
| 0 | ascending | 1 | 2 | 0 | 5 | 255 |
| 0 | ascending | 1 | 2 | 1 | 6 | 255 |
| 0 | ascending | 2 | 0 | 0 | 6 | 255 |
| 0 | ascending | 2 | 0 | 1 | 6 | 255 |
| 0 | ascending | 2 | 1 | 0 | 5 | 255 |
| 0 | ascending | 2 | 1 | 1 | 6 | 255 |
| 0 | ascending | 2 | 2 | 0 | 5 | 255 |
| 0 | ascending | 2 | 2 | 1 | 5 | 255 |
| 0 | descending | 1 | 0 | 0 | 5 | 255 |
| 0 | descending | 1 | 0 | 1 | 5 | 255 |
| 0 | descending | 1 | 1 | 0 | 6 | 255 |
| 0 | descending | 1 | 1 | 1 | 5 | 255 |
| 0 | descending | 1 | 2 | 0 | 5 | 255 |
| 0 | descending | 1 | 2 | 1 | 5 | 255 |
| 0 | descending | 2 | 0 | 0 | 6 | 255 |
| 0 | descending | 2 | 0 | 1 | 5 | 255 |
| 0 | descending | 2 | 1 | 0 | 5 | 255 |
| 0 | descending | 2 | 1 | 1 | 5 | 255 |
| 0 | descending | 2 | 2 | 0 | 5 | 255 |
| 0 | descending | 2 | 2 | 1 | 4 | 255 |
| 1 | ascending | 1 | 0 | 0 | 5 | 255 |
| 1 | ascending | 1 | 0 | 1 | 5 | 255 |
| 1 | ascending | 1 | 1 | 0 | 5 | 255 |
| 1 | ascending | 1 | 1 | 1 | 5 | 255 |
| 1 | ascending | 1 | 2 | 0 | 5 | 255 |
| 1 | ascending | 1 | 2 | 1 | 6 | 255 |
| 1 | ascending | 2 | 0 | 0 | 5 | 255 |
| 1 | ascending | 2 | 0 | 1 | 4 | 255 |
| 1 | ascending | 2 | 1 | 0 | 5 | 255 |
| 1 | ascending | 2 | 1 | 1 | 6 | 255 |
| 1 | ascending | 2 | 2 | 0 | 4 | 255 |
| 1 | ascending | 2 | 2 | 1 | 6 | 255 |
| 1 | descending | 1 | 0 | 0 | 5 | 255 |
| 1 | descending | 1 | 0 | 1 | 6 | 255 |
| 1 | descending | 1 | 1 | 0 | 6 | 255 |
| 1 | descending | 1 | 1 | 1 | 6 | 255 |
| 1 | descending | 1 | 2 | 0 | 5 | 255 |
| 1 | descending | 1 | 2 | 1 | 5 | 255 |
| 1 | descending | 2 | 0 | 0 | 5 | 255 |
| 1 | descending | 2 | 0 | 1 | 5 | 255 |
| 1 | descending | 2 | 1 | 0 | 5 | 255 |
| 1 | descending | 2 | 1 | 1 | 5 | 255 |
| 1 | descending | 2 | 2 | 0 | 5 | 255 |
| 1 | descending | 2 | 2 | 1 | 6 | 255 |

t=1: Q256; t=0: Q256−2^255G. Прямой индекс `stride*(i−1)+offset`; обратный `stride*(255−i)+offset`.

## Источники

| Категория | Попыток | Успешно |
|---|---:|---:|
| archive-discovery | 4 | 4 |
| archive-snapshot | 7 | 6 |
| creator-source-or-archive | 4 | 4 |
| early-discussion | 15 | 15 |
| puzzle-catalog | 2 | 2 |
| related-discussion | 5 | 5 |
| repository-blob | 8 | 8 |
| repository-commit | 1 | 1 |
| repository-tree | 2 | 2 |
| research-repository | 9 | 9 |

## Не получено

- [http_error, HTTP 503](https://web.archive.org/web/20260924162859id_/https://bitcointalk.org/index.php?topic=1306983.msg18765941): `HTTP Error 503: Service Unavailable`
