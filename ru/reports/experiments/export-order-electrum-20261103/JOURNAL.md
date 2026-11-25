> [English](<../../../../en/reports/experiments/export-order-electrum-20261103/JOURNAL.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/07-masks-and-order.md>) · [Документы серии](<INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).


## 2026-11-02T21:15:31.888693+00:00

Run 480770ed371d9e8b: pinned inputs/runtime/source. Starting or resuming finite 21-profile series.

## 2026-11-02T21:15:55.610391+00:00

Run 998c4f7b58bcf26a: pinned inputs/runtime/source. Starting or resuming finite 21-profile series.

## 2026-11-02T21:15:58.073165+00:00

x86-unset: exact hashes/dict slots and 12 CSV files passed.

## 2026-11-02T21:16:00.573805+00:00

x86-0: exact hashes/dict slots and 12 CSV files passed.

## 2026-11-02T21:16:03.094054+00:00

x86-1: exact hashes/dict slots and 12 CSV files passed.

## 2026-11-02T21:16:05.606614+00:00

x86-42: exact hashes/dict slots and 12 CSV files passed.

## 2026-11-02T21:16:08.111791+00:00

x86-4294967295: exact hashes/dict slots and 12 CSV files passed.

## 2026-11-02T21:16:10.637676+00:00

x86-random-a: exact hashes/dict slots and 12 CSV files passed.

## 2026-11-02T21:16:13.156558+00:00

x86-random-b: exact hashes/dict slots and 12 CSV files passed.

## 2026-11-02T21:16:15.462348+00:00

amd64-unset: exact hashes/dict slots and 12 CSV files passed.

## 2026-11-02T21:16:17.764810+00:00

amd64-0: exact hashes/dict slots and 12 CSV files passed.

## 2026-11-02T21:16:20.110389+00:00

amd64-1: exact hashes/dict slots and 12 CSV files passed.

## 2026-11-02T21:16:22.434835+00:00

amd64-42: exact hashes/dict slots and 12 CSV files passed.

## 2026-11-02T21:16:24.762447+00:00

amd64-4294967295: exact hashes/dict slots and 12 CSV files passed.

## 2026-11-02T21:16:27.148256+00:00

amd64-random-a: exact hashes/dict slots and 12 CSV files passed.

## 2026-11-02T21:16:29.456537+00:00

amd64-random-b: exact hashes/dict slots and 12 CSV files passed.

## 2026-11-02T21:16:37.817812+00:00

linux64-unset: exact hashes/dict slots and 12 CSV files passed.

## 2026-11-02T21:16:40.817944+00:00

linux64-0: exact hashes/dict slots and 12 CSV files passed.

## 2026-11-02T21:16:43.749241+00:00

linux64-1: exact hashes/dict slots and 12 CSV files passed.

## 2026-11-02T21:16:46.719099+00:00

linux64-42: exact hashes/dict slots and 12 CSV files passed.

## 2026-11-02T21:16:49.733676+00:00

linux64-4294967295: exact hashes/dict slots and 12 CSV files passed.

## 2026-11-02T21:16:52.650993+00:00

linux64-random-a: exact hashes/dict slots and 12 CSV files passed.

## 2026-11-02T21:16:55.644968+00:00

linux64-random-b: exact hashes/dict slots and 12 CSV files passed.

## 2026-11-02T21:16:57.811264+00:00

Native series and public-only reconstruction completed. Independent final audit/report pending.


<!-- EXP01-final -->

03.11.2026 МСК. Финальный независимый аудит:252 CSV,273 неизменённых method snippets,910 module hashes,126 public-only maps. Повторное обращение resume не изменило ни хэш, ни mtime файлов run; отчёт пересобирается побайтно.

Подготовительные ошибки: sandbox не смог загрузить официальный x86 Python из-за relocation DLL; разрешённый запуск вне sandbox прошёл. Извлекатель первоначально нашёл несколько __init__ и был ограничен классом ElectrumSequence. Затем устранены Unicode-пути в метаданных и абсолютном outdir Python2. Failed run480770ed371d9e8b сохранён, принят новый998c4f7b58bcf26a. Исторические тела методов/модели от этих исправлений не изменялись.
