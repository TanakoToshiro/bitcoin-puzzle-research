> [English](<../../../../en/reports/experiments/archive-attachments-20261102/FORMATS.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/05-signatures-and-provenance.md>) · [Документы серии](<INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).

# Форматы, распознавание и достаточные данные

Этот проход не повторяет математические recovery-эксперименты. Он использует профили предыдущих работ и отделяет сигнатуру файла от подтверждения его содержимого и происхождения.

| Цель | Признак и полезные данные | Что ещё нужно |
|---|---|---|
| Armory multipliers | `PrvChain (pkh, mult): HASH160,u` / `PubChain…`; pkh — 40 hex или пусто, u — 64 hex | Связь с исходной цепочкой, положение/порядок переходов; один файл может смешивать кошельки |
| Armory diagnostic ZIP | `wallet_analyze_logs.zip`, внутри возможны префиксы `walletID_parentDirectory_` у multipliers.txt | Искать и по содержимому, а не только точному имени; наличие ZIP не означает наличие журнала |
| Electrum 1.9.8 unsigned/partial | Внешний JSON; `input_info` может быть **JSON-строкой**; `KeyID=old(MPK,branch,index)`, MPK — 128 hex x||y | Точка secp256k1; raw pubkey/address должны соответствовать branch/index; авторство и карта Puzzle отдельно |
| Electrum complete | `complete=true` и hex подписанной транзакции | В проверенном историческом пути input_info уже отсутствует; blockchain raw hex не заменяет unsigned `.txn` |
| mSIGNA CoinDB public export | Boost text archive, маркер `22 serialization::archive`; version Keychain v2; point + chaincode | Это не произвольный xpub и не CSV; требуется schema-specific разбор, root/bin/account контекст |
| Legacy CoinQ public export | Ровно 123 байта: `01`, BE32(78), xpub payload78, BE32(count), BE32(32), SHA256d(public payload78) | Валидные point/version/hash. Count не связан checksum и не доказывает индексы |
| BIP32 xpub / zpub | Base58Check, **78 байт полезной нагрузки**, включая 32-byte chaincode | Проверка checksum/точки, header/version и source provenance; красивое имя поля недостаточно |

Первичные Armory-исходники: [логирование](https://github.com/etotheipi/BitcoinArmory/blob/268db0f3fa20c989057bd43343a43b2edbe89aeb/armoryengine/PyBtcAddress.py#L423), [копирование журнала recovery](https://github.com/etotheipi/BitcoinArmory/blob/268db0f3fa20c989057bd43343a43b2edbe89aeb/armoryengine/PyBtcWalletRecovery.py#L1715), [ZIP](https://github.com/etotheipi/BitcoinArmory/blob/268db0f3fa20c989057bd43343a43b2edbe89aeb/qtdialogs.py#L973). Минимальные условия уточнены в [Armory R2](<../parallel-wallets-20261102/01-armory/round2-20261102/RESULTS.md>): пяти подходящих переходов может быть достаточно для конкретной пары масок. Это условие, не обнаруженный вход.

Electrum-источники: [get_keyID](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/lib/wallet.py#L633), [as_dict/input_info](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/lib/transaction.py#L669). Предыдущий [профиль](<../parallel-wallets-20261102/02-electrum/ARTIFACT_PROFILE.md>) проверяет MPK и исходный anchor, но не гарантирует валидность raw tx hex. Наш контроль с `hex=00` проверяет только обнаружение metadata, не транзакцию.

mSIGNA Keychain v2 сохраняет name, hash, depth, parent_fp, child_num, pubkey, chain_code, privkey_ciphertext и privkey_salt; public export удаляет private-поля. Account содержит несколько keychains, bin может сохранять только дочернюю ветвь. Предыдущий [профиль CoinDB](<../parallel-wallets-20261102/03-msigna/ARTIFACT_PROFILE.md>) не реализует произвольный Boost-parser; эта работа также его не заявляет. Для настоящего CoinQ-файла готов строгий public parser — артефакт исходного исследования (`../parallel-wallets-20261102/03-msigna/round2/legacy_profile.py`; вне снимка). Его hash не подтверждает автора.

`scan.py` — детектор, не универсальный wallet parser. Он просматривает UTF-8/UTF-16 и HTML entities, имена, JSON-подобные поля, текстовые xpub-префиксы, Boost-header и 123-byte CoinQ envelope. ZIP/GZIP читаются в памяти; внешний код не исполняется, пути не распаковываются произвольно. Пределы: 32 MiB на элемент, 128 MiB на один контейнер с вложениями, глубина до трёх уровней, не более 3000 ZIP-элементов. Пропуски явно записываются. В принятом наборе пропусков нет.

Нет универсального распознавания PKCC без имени, 237-byte Armory records внутри любого бинарника, Base64 произвольной глубины, encrypted archives или всех версий сериализации. Найденный `4Mf…` потребовал отдельного разбора контекста: checksum корректен, но 46-byte payload не становится BIP32 от версии `04b24746`.
