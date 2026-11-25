> [English](<../../../../../en/reports/experiments/parallel-wallets-20261102/04-bitcoinj/RESULTS.md>) · [Выбор языка](<../../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../../README.md>) · [Направление](<../../../../topics/03-wallets.md>) · [Документы серии](<../INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../../docs/LATEST_RESULTS.md>).

# Задание №4 — Bitcoin Wallet / bitcoinj

02.11.2026. **Практического сокращения поиска настоящего Puzzle до 2^32 не
получено.** Новый результат — точный профиль выдачи/экспорта bitcoinj 0.12,
подтверждённый источник account xpub в диагностическом отчёте Bitcoin Wallet
4.0, два исторических invalid-child edge case и точная оценка миграционного
prefix-перебора. Реальный xpub/backup автора не найден; новых реальных private
keys нет. Положительные прогнозы — исключительно synthetic и условны на
правильный account xpub; арифметическая формула уже была в HD-01.

## Что установлено нового относительно HD-01/E9

**Привязка приложения.** Release source Bitcoin Wallet 4.0, commit
`5276722f9c73e540b9bbb128c37783bfd173af4a`, 03.10.2014, явно использует
`bitcoinj-core:0.12`; библиотечный commit —
`83a9a71f3fff3f223d0737ad758b519a39dbbd62`. Это отдельное подтверждение даты
и зависимости приложения. К границе января default branch уже содержит
4.16/0.12.2; последующие версии не объявляются проверенными этим аудитом.
[Release source](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/5276722f9c73e540b9bbb128c37783bfd173af4a/wallet/pom.xml#L60).

**Массовая выдача и выгрузка.** API `freshKeys(RECEIVE_FUNDS,256)` действительно
выдаёт 256 детей; `getLeafKeys()` позволяет выгрузить и lookahead через
`getPrivKeyBytes()`. Android Request Coins выдаёт свежие receiving addresses,
manual backup переносит protobuf на компьютер. Прямой массовый Android WIF-CSV
не подтверждён. В `WalletTool` lookahead-size действует в add-key, после чего
выдаётся один ключ. Обычный dump фильтрует пул, дополнительно включая первый
невыданный child из-за сравнения `index > issuedCount`.
[Код API и фильтра](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/wallet/DeterministicKeyChain.java).

Исполнение оригинального release JAR дало:

- lookahead=100, E=I=0: 266 public leaf records, две child-строки в private dump;
- lookahead=500, E=I=0: 1332 public leaf records, те же две child-строки;
- E=256/I=0, lookahead=100: 522 public leaf records и 258 child-строк.

Leaf `secret_bytes` во всех этих protobuf отсутствуют, но private дети
пересчитываются через предков. Private dump также содержит mnemonic и seed.
Порядок сохраняет вставки/расширения ветвей и loose keys, поэтому строка №i
не доказывает child index i−1. Полная машинная таблица —
[NUMERIC_REPORT.md](<NUMERIC_REPORT.md>).

**Реальный профиль публичного якоря.** Android Report Issue собирает public
wallet dump, где signing-wallet печатает `Key to watch: xpub...` для `m/0'`
без private keys. Это конкретный возможный артефакт, делающий прежний
условный HD-01 метод применимым: нужен относящийся к автору отчёт либо
эквивалентные public point+chaincode+path. Наличие этой функции не означает,
что автор отправлял или публиковал такой отчёт. Зашифрованный manual backup
не раскрывает xpub через внешний заголовок.
[Android collectWalletDump](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/5276722f9c73e540b9bbb128c37783bfd173af4a/wallet/src/de/schildbach/wallet/ui/WalletActivity.java#L723),
[печать xpub](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/wallet/KeyChainGroup.java#L890).
Готовые формат и утилиты: ARTIFACT_PROFILE.json — артефакт исходного исследования (`ARTIFACT_PROFILE.json`; вне снимка),
inspect_profile.py — артефакт исходного исследования (`inspect_profile.py`; вне снимка), predict_masked.py — артефакт исходного исследования (`predict_masked.py`; вне снимка).

**Миграционная связь без слабого RNG.** Повторная миграция одного old backup
даёт тот же HD seed при одинаково выбранном oldest non-rotating ключе.
Младшие 128 бит этого old ключа на новый seed не влияют. Но известная маска
№135, даже если она относится именно к выбранному old raw key, раскрывает
только 6 бит 128-битной entropy. Точный остаточный домен для её residue:
**5316911983139663491615228241121378304 = 2^122**. До 2^32 этот алгоритм не
доходит; соответствие old origin одной из строк Puzzle также неизвестно.
Это размер промежуточного prefix-домена предложенного метода, а не доказанная
нижняя граница всех атак или число совместимых кошельков.

**Invalid-child особенности.** Bound helper принимает `IL=n` вместо его
отклонения; retry при последовательных отказах использует индексы
0,1,3,6,10,... вместо последовательных. Граница и retry проверены на
оригинальном JAR; ошибки для retry введены искусственно. Такие естественные
HMAC-выходы не найдены. Эти edge cases не дали доступного ограничения seed
или коэффициентов для нормальных детей. Точные bytes/формулы и ограничения
проверки — [MODEL_AND_LIMITS.md](<MODEL_AND_LIMITS.md>).

## Проверки и стоимость

- Подтверждён SHA-256 общего snapshot
  `d291351169b1bb483b580af8cf4c30e503941f7b15b81aabd418e93809a40b70`;
  заново проверены диапазоны, public points и адреса всех 83 решений.
  Максимум i=135, всего 3767 наблюдаемых raw low bits. Эти реальные данные
  использованы как фиксированная форма масок/пропусков и для prefix-counts,
  а не как независимый holdout нового реального кандидата.
- Оригинальные исторические JUnit BIP32Test: 2 теста, 2 master и 10 descendant
  пар xprv/xpub; Java harness — 75 проверок. Roundtrip protobuf, счётчики,
  отсутствие stored leaf secrets и пересчёт private leaf проверены исполнением.
- Независимый Python reference сверил public/chaincode и имеющиеся private
  bytes 3222 сохранённых Java nodes; отдельно 77 public/private CKD-сверок.
- Миграционный домен: 8702 исчерпывающих малых систем, 34166 положительных и
  498234 отрицательных prefix memberships, максимум 4092 old-key состояний.
  При настоящем secp256k1-размере выполнен точный подсчёт, не brute force.
- App-profile адаптер прежнего HD-01 прогноза: 4/4 synthetic №71, 16 неверных
  branch/index/xpub/residue отклонены; ещё 79 synthetic masks на случай
  проверены после прогноза. Отдельный процесс получает только account xpub,
  четыре masked keys с mappings и target address. Seed и полные raw children
  остаются в отдельном контрольном файле, который solver не открывает.

Каждый положительный прогноз потребовал 6 HMAC-SHA512, 6 public CKD и 3
проверки адреса, оставив до трёх masked target-кандидатов перед адресной
проверкой. Время самого solver 0.015–0.032 s, включая запуск Python-процесса
0.656–1.516 s. Он **не восстановил account scalar/master xprv/seed**.
Точные времена, полные входы и ответы находятся в JSON запусков; значения
в таблицах автоматически строятся из них. Независимые control checks: 15929.

## Почему без дополнительного артефакта задача остаётся открыта

При штатной деривации offsets требуют account/branch public point **и**
chaincode, которых нет в решениях Puzzle. Lookahead, issued counters,
export order, birthday и повторение backup помогают определить путь и
проверить конкретный артефакт, но не создают этих HMAC-коэффициентов.
Публичная точка окончательного masked ключа не заменяет raw-child point.

С полным raw normal child и правильным account xpub можно вычесть offsets и
получить account xprv. Это не обращает hardened `m→m/0'`; восстановление
master и обращение seed остаются отдельными задачами. Полный выбранный old
migration key/его high 16 bytes, напротив, прямо определяет BIP39 seed,
но такой секрет в доступных данных не установлен.

Для проверенного нормального пути продукт сводится к стандартному BIP32
семейству. Это завершённый ограниченный результат этапа, **не исключение
Bitcoin Wallet, всех версий bitcoinj или всех возможных методов**.
Следующий осмысленный шаг — конкретный авторский diagnostic/watch-only
артефакт или новая работающая модель обращения неизвестного xpub; повтор
общего seed/RNG brute force и неограниченный поиск путей не обоснованы.

История и user/API-путь: [HISTORY_AND_EXPORT.md](<HISTORY_AND_EXPORT.md>).
Источники с URL/commit/UTC/SHA-256: SOURCES.json — артефакт исходного исследования (`SOURCES.json`; вне снимка),
SOURCE_FACTS.json — артефакт исходного исследования (`SOURCE_FACTS.json`; вне снимка); входы: INPUT_PINS.json — артефакт исходного исследования (`INPUT_PINS.json`; вне снимка).
Приёмка: ACCEPTANCE.json — артефакт исходного исследования (`ACCEPTANCE.json`; вне снимка). Команды — [README.md](<README.md>),
краткая сводка — [SUMMARY_FOR_MERGE.md](<SUMMARY_FOR_MERGE.md>).
