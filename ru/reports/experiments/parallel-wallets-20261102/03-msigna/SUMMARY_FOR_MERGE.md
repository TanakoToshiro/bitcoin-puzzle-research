> [English](<../../../../../en/reports/experiments/parallel-wallets-20261102/03-msigna/SUMMARY_FOR_MERGE.md>) · [Выбор языка](<../../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../../README.md>) · [Направление](<../../../../topics/03-wallets.md>) · [Документы серии](<../INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../../docs/LATEST_RESULTS.md>).

# №3 mSIGNA / CoinVault — 02.11.2026
1. Завершён ограниченный аудит commit ace0c828bed7441ef6ddda314674d882ecf4dbbe,13.01.2015.
2. Штатный просмотренный путь — обычный аддитивный BIP32; ускорения реального№71 не получено.
3. Подтверждён source-level путь New Keychain → unlock → View Private BIP32 → xprv → multibip32 в цикле.
4. Прямой GUI-export256 WIF и наличие CLI во всех бинарных установщиках не установлены.
5. CoinDB paths: root/1/i change, root/2/i receiving; i=0…; дополнительные bins3…; имя аккаунта не HD-уровень.
6. Общий keychain даёт одинаковые raw в разных accounts при одном bin/index; multisig-адреса могут различаться.
7. Cosigner pubkeys сортируются заново на каждом leaf; одна позиция в script не равна одной цепочке.
8. Keychain identity=HASH160(pubkey||chaincode); `.pub`/account/bin archives содержат публичные параметры.
9. Bin export сбрасывает внешний index/имя, но сохраняет child metadata и bin-level point/chaincode.
10. Найдено ошибочное сохранение parent scalar в child(i,true,empty_lock); штатный AccountBin использует false.
11. Узкий сценарий одинакового raw из этой ошибки отвергнут: решения№2 и№4 требуют противоположной чётности.
12. Invalid child вызывает exception без автоматического skip; leading zeros штатно дополнены до33 байт.
13. Независимая модель:12 исторических vector nodes/24 xkeys;12 xkeys также сверены с архивным mSIGNA output.
14. Контроли:256 children,32 public/private,32 shared-account,32000 малых комбинаций,10 IL boundary,6 leading-zero.
15. Все83 реальные solutions повторно проверены по range/public/address; synthetic использует те же маски/пропуски.
16. Основной запуск около4.06с CPU; это контроль, не recovery. Оригинальные C++/Qt binaries не запускались.
17. Реальных root/bin xpub автора нет; найденных новых ключей0, остаточный поиск≤2^32 не предъявлен.
18. Итог: [RESULTS.md](<RESULTS.md>); числа: [NUMERIC_REPORT.md](<NUMERIC_REPORT.md>); профиль: [ARTIFACT_PROFILE.md](<ARTIFACT_PROFILE.md>).
19. Второй заход:308 native core cases,12 исторических редакций,legacy123-byte public-export parser; [новая сводка](<round2/SUMMARY_FOR_MERGE.md>). Ограничение C++-неисполнения выше относится к первому этапу; GUI/ODB остаются непроверенными.
