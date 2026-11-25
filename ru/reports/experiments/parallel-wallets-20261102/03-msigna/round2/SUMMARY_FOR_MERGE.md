> [English](<../../../../../../en/reports/experiments/parallel-wallets-20261102/03-msigna/round2/SUMMARY_FOR_MERGE.md>) · [Выбор языка](<../../../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../../../README.md>) · [Направление](<../../../../../topics/03-wallets.md>) · [Документы серии](<../../INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../../../docs/LATEST_RESULTS.md>).

# №3 mSIGNA — второй заход, 02.11.2026
1. Новый recovery/ускорение настоящего№71 не получены; первый итог сохранён.
2. Исполнен исходный CoinCore HDKeychain cutoff commit на308 native cases; все прошли.
3. Криптографический core не менялся; hash dependency subset/test hook и BN_LONG alias документированы.
4. Среда: уже установленный WSL,g++13.3,OpenSSL3.0.13; исторический GUI/ODB не собран.
5.12 BIP32 nodes,256 children,16 public/private,10 injected IL,5 leading-zero и9 parser/metadata cases.
6. Подтверждено:33-byte private аргумент key+chain конструктора отвергается;78-byte xprv работает.
7. Найдены3 aliases пути, но после канонизации это обычная CKD без сужения secret.
8. Проверены12 исторических hdkeys.cpp редакций с29.12.2013; все используют addition IL.
9. С03.03.2014 invalid-object заменён exception; legacy skip-loop нового exception не перехватывает.
10. Legacy CoinQ HD-ветка использует прямые BIP32 children и другой binary export.
11. Legacy CLI newkeychain создаёт независимые keys; HD требует библиотечного вызова/импорта.
12. Public deterministic legacy export=123 bytes, включает78-byte xpub и SHA256d(xpub).
13. Legacy identity включает metadata, CoinDB identity=HASH160(pubkey||chaincode).
14. Счётчик numsavedkeys не связан с hash:10 изменений подтверждены независимым format-контролем.
15. Готов read-only parser;4 positive exports/6 negative cases, реальных author artifacts0.
16. Native исполнение1.136с,сборка2.955с; это не recovery time. Пакеты/GPU не менялись.
17. Отчёт: [RESULTS.md](<RESULTS.md>), [NUMERIC_REPORT.md](<NUMERIC_REPORT.md>), ACCEPTANCE.json — артефакт исходного исследования (`ACCEPTANCE.json`; вне снимка).
