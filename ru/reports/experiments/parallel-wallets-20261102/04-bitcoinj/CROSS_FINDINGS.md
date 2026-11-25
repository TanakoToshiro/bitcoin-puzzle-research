> [English](<../../../../../en/reports/experiments/parallel-wallets-20261102/04-bitcoinj/CROSS_FINDINGS.md>) · [Выбор языка](<../../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../../README.md>) · [Направление](<../../../../topics/03-wallets.md>) · [Документы серии](<../INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../../docs/LATEST_RESULTS.md>).

# Находки для соседних заданий — без изменения их папок

Для №5 (MultiBit historical HD) и №6 (Hive), **только если их конкретная версия
действительно использует bitcoinj 0.12**:

- Нельзя выводить удобство массового private dump из одного наличия
  `--lookahead-size` в WalletTool. Опция применяется в add-key, выдаётся один
  fresh key, а dump использует getKeys(false) и issued counters.
- Фильтр этой версии включает также индекс, равный issuedCount, когда он уже
  рассчитан. Leaf private bytes не хранятся, но доступны через private предков.
- В xpub API фиксированы version bytes; detached parent fingerprint может
  менять строку без изменения point/chaincode. Сравнивать семантические поля.

Источник: bitcoinj commit `83a9a71f3fff3f223d0737ad758b519a39dbbd62`,
[WalletTool](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/tools/src/main/java/org/bitcoinj/tools/WalletTool.java#L925),
[getKeys](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/wallet/DeterministicKeyChain.java#L1054).
Продуктовые зависимости MultiBit/Hive здесь не устанавливались.
