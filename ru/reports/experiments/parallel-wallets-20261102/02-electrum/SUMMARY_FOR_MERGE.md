> [English](<../../../../../en/reports/experiments/parallel-wallets-20261102/02-electrum/SUMMARY_FOR_MERGE.md>) · [Выбор языка](<../../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../../README.md>) · [Направление](<../../../../topics/03-wallets.md>) · [Документы серии](<../INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../../docs/LATEST_RESULTS.md>).

# №2 Electrum — EL-02, 2026-11-02
1. Этап завершён ограниченным результатом: практического восстановления без MPK нет.
2. Проверены1.7.4/e8ffe295,1.9/051c882a и основной1.9.8/f92b4839.
3. Old-формула одинакова:48 совпавших offsets; обычный old wallet имеет account0.
4. Новое: CSV1.7.4 идёт через dict.items(), CSV1.9.8 — прямо по списку addresses.
5. В1.9.8 чистый old export: receiving-блок затем change-блок, default change gap3.
6. Imports идут префиксом; BIP32 next_addresses добавляются в конце с дедупликацией.
7. Закреплены кусочные index maps; произвольные перестановки/старые501 MPK не повторялись.
8. Новый профиль артефакта: unsigned/partial `.txn` содержит old(MPK,branch,index) в KeyID.
9. Complete1.9.8 `.txn` опускает input_info; on-chain MPK из этого не следует.
10. Готов parser с проверкой точки и исходного raw address/pubkey; реального файла автора нет.
11. 83 исходных решения независимо проверены; SHA совпал,134 max bits,3767 sum bits.
12. 8 positive +8 negative toy EC/SHA систем полностью перебраны по198 s, без MPK на входе.
13. 4 full-size synthetic exponent случая:4/4 условных целей№71,316 heldout масок,12 negatives.
14. Full joint pilot:1024 кандидата на контроль,1106/1024 SHA256d; интервал задан искусственно.
15. Связь MPK=sG сохранена; SHA-barrier не устранён, уменьшение до2^32 не получено.
16. Реальных новых MPK-кандидатов0, новых ключей/битов0; Electrum не исключён.
17. Примечание для BIP32: старые public exports могут быть tuple/KeyID, а не Base58 xpub.
18. Итог: [RESULTS.md](<RESULTS.md>); числа: [NUMERIC_REPORT.md](<NUMERIC_REPORT.md>); код/пины/приёмка здесь.
