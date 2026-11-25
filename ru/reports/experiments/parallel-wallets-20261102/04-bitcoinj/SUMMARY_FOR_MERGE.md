> [English](<../../../../../en/reports/experiments/parallel-wallets-20261102/04-bitcoinj/SUMMARY_FOR_MERGE.md>) · [Выбор языка](<../../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../../README.md>) · [Направление](<../../../../topics/03-wallets.md>) · [Документы серии](<../INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../../docs/LATEST_RESULTS.md>).

# Задание №4 — Bitcoin Wallet / bitcoinj

- Завершён ограниченный этап; практического ускорения настоящего Puzzle до 2^32 не найдено.
- Bitcoin Wallet 4.0 закреплён commit `5276722f9c73e540b9bbb128c37783bfd173af4a`, 03.10.2014; зависимость bitcoinj 0.12 явная.
- Срез 4.16 у даты отсечения использует 0.12.2; поведение 0.12 не переносится на него автоматически.
- Нормальные пути m/0'/0/i и m/0'/1/i; пакетная выдача freshKeys(…,256) подтверждена release JAR.
- Lookahead=500 даёт 1332 public leaf records, но при нулевых issued counters обычный dump выводит две строки детей.
- Фильтр `index > issuedCount` включает первый невыданный child; E=256/I=0 дал 258 строк детей, не 256.
- Private dump выводит hex BigInteger и mnemonic/seed; leaf secret_bytes в protobuf отсутствуют, private пересчитывается через предков.
- Порядок экспорта — вставки, расширения двух ветвей и loose keys; номер строки не равен автоматически child index.
- Новый конкретный публичный якорь: Android Report Issue wallet dump содержит Key to watch account xpub без private keys.
- Авторский xpub/backup не найден; подготовлены ARTIFACT_PROFILE.json, public inspector и отдельный checker.
- Migration-prefix ограничение проверено точно: если №135 был source old raw key, остаётся 2^122 entropy-prefix кандидатов; слабый RNG не предполагался.
- Найдены edge cases IL=n принимается и retry 0/1/3/6/10; проверены на JAR, практической связи для обычных ключей не дали.
- Исторические JUnit: 2 теста/12 xkey-узлов; Java harness 75 checks; Python 15929 checks, 8702 toy prefix-системы, 3222 Java nodes сверены независимо.
- 4/4 conditional synthetic №71 и 16 отрицательных; по 79 synthetic masks после прогноза. Это адаптер прежней HD-01 формулы, не новая атака.
- С account xpub прогноз не восстанавливает account scalar/master/seed; hardened m→m/0' остаётся отдельной границей.
- Итог: [RESULTS.md](<RESULTS.md>); точная модель: [MODEL_AND_LIMITS.md](<MODEL_AND_LIMITS.md>); числовые таблицы: [NUMERIC_REPORT.md](<NUMERIC_REPORT.md>).
