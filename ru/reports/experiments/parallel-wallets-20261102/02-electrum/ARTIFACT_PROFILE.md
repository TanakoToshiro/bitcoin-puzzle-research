> [English](<../../../../../en/reports/experiments/parallel-wallets-20261102/02-electrum/ARTIFACT_PROFILE.md>) · [Выбор языка](<../../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../../README.md>) · [Направление](<../../../../topics/03-wallets.md>) · [Документы серии](<../INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../../docs/LATEST_RESULTS.md>).

# Пригодный артефакт Electrum old

Нужен файл с проверяемым происхождением, связанным с генератором Puzzle.
Тип1: top-level master_public_key в old wallet/watch-only backup.
Тип2: незавершённый1.9.8 `.txn`, форма:

```json
{
  "hex": "serialized transaction",
  "complete": false,
  "input_info": "[{\"KeyID\":\"old(128_HEX_CHAR_MPK,0,17)\",\"address\":\"RAW_CHILD_ADDRESS\",\"redeemPubkey\":\"04_PLUS_128_HEX\"}]"
}
```

Это схема с placeholders, не готовая транзакция. В test fixtures hex="00"
проверяет metadata serializer; это намеренно не валидная Bitcoin transaction.
Наш extractor не утверждает валидность tx hex: он проверяет KeyID и его
соответствие raw address/pubkey. В реальном приёме нужен также источник файла.

MPK: ровно64 байта x||y, без04, точка secp256k1. Parser принимает c=0/1,
0<=index<2^31 как явно ограниченный профиль типичного пула; сам old алгоритм
использует decimal ASCII и не задаёт BIP32-границы. Некорректный KeyID,
невалидная точка или несовпадающий исходный anchor отклоняются.

Число MPK равно числу разных валидных old(MPK,...) в metadata. На4 fixtures
по1 MPK. Реальных новых артефактов0. Не выводить C=1 для неизвестного автора
из этого synthetic результата. MPK сам по себе не говорит, какая строка
экспорта стала puzzle i: нужен receiving count/префикс импортов/явная карта.

Public-input schema solve.py:

```text
mode = "artifact"
artifact = parsed JSON above
observations = [{puzzle, branch, index, masked: "0x..."}, ...]
targets = [{puzzle, branch, index, address: final compressed Puzzle P2PKH}, ...]
```

Образец с **только синтетическими** данными:
`runs/el02-v1/full-1.input.json`. Это132 receiving и3 change; №135 относится
к change2, цель№71 — receiving70. Полный raw child/master не передаётся.

Результат: дедуплицированные MPK, арифметические интервалы, максимум3 masked
кандидата и совпадения с адресом цели. Непустое пересечение не доказывает
master*sG relation. Достоверный результат требует совпадений с независимыми
решениями/публичными точками/адресами. Полная стоимость дана в MATH.md.

Сохранённый complete=true файл без input_info даёт0 MPK. Поиск по blockchain
tx hex не эквивалентен поиску `.txn` JSON. Old MPK обычно не имеет xpub-префикса.
