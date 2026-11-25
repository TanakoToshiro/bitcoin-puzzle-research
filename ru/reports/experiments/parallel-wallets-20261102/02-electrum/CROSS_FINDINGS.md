> [English](<../../../../../en/reports/experiments/parallel-wallets-20261102/02-electrum/CROSS_FINDINGS.md>) · [Выбор языка](<../../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../../README.md>) · [Направление](<../../../../topics/03-wallets.md>) · [Документы серии](<../INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../../docs/LATEST_RESULTS.md>).

# Для общего сведения, без изменения соседних заданий

Задания№3 (mSIGNA/BIP32) и№4 (bitcoinj/BIP32): Electrum1.9.8 optional BIP32
использует публичные сериализации, которые не обязательно выглядят как Base58 xpub.
`get_master_public_key` возвращает repr((c,K)) для m/0'/; KeyID транзакции
содержит `bip32(chaincode,compressed_pubkey,/account/branch/index)`.
Срез1.9 помещал в это поле K без сжатия; срез1.9.8 — cK. Нельзя искать только
строки xpub и считать этим покрытыми все historical watch-only exports.

Источник1.9.8: [wallet.py:561](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/lib/wallet.py#L561),
[wallet.py:633](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/lib/wallet.py#L633).
Источник1.9: [wallet.py:659](https://github.com/spesmilo/electrum/blob/051c882a3f5288b467fbee1950ec391204a245c4/lib/wallet.py#L659).
Это сведения именно об Electrum; не переносить формат на mSIGNA/bitcoinj.

В1.9.8 CKD вычисляет `(IL+k) mod n` без явного reject IL>=n/child=0, а CKD_prime
не имеет retry следующего индекса. Это отличие обработки предельных случаев,
не доказательство маленького пространства master. Отдельные искусственные
HMAC-fault векторы в этом задании не запускались. Generic BIP32 повторно не исследован.
