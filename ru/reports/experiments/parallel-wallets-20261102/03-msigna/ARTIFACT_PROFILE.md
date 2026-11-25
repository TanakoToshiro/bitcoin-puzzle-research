> [English](<../../../../../en/reports/experiments/parallel-wallets-20261102/03-msigna/ARTIFACT_PROFILE.md>) · [Выбор языка](<../../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../../README.md>) · [Направление](<../../../../topics/03-wallets.md>) · [Документы серии](<../INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../../docs/LATEST_RESULTS.md>).

# Профиль потенциального публичного артефакта

Нужны source URL/file SHA-256, подтверждённое происхождение, тип root/bin/account export, compressed public point33 bytes + chaincode32 bytes, depth, parent_fp, child_num, identity HASH160(pubkey||chaincode). Для account дополнительно threshold, список cosigners по identity, bins, compressed_keys; для проверки Puzzle — явное отображение puzzle index → bin/child index. Имя account не часть деривации.

Файл `.pub`/account/bin — Boost text archive v2, не CSV/xpub. Поля перечислены в RESULTS.md. В этой работе parser Boost archive не реализован и реального файла автора нет. Профиль JSON принимает уже выделенный xpub и служит проверкой пары point/chaincode/identity. Raw point без chaincode, HASH160 identity, parent fingerprint или Puzzle address недостаточны.

Пример полностью SYNTHETIC: `runs/f38837a65fce/artifact_profile_example.json`. Запуск `python inspect_artifact.py <profile.json>` проверяет Base58Check, длину, mainnet version, curve point, root metadata и identity, выводит первый normal descendant. Никакой сетевой отправки/поиска/подбора секрета. Содержимое профиля не считается доказанной принадлежностью Puzzle автоматически.

Root xpub даёт обе обычные ветки1/2; bin xpub даёт только descendants своего bin. Bin export сбрасывает внешний index в0, но сохраняет child_num/depth/fingerprint внутри keychain. За импортированной hardened-границей исходный master не восстанавливается публичной деривацией. Валидация identity не отличает намеренно повторённую пару point/chaincode с изменённой metadata: последнюю нужно сверять с первичным артефактом.
