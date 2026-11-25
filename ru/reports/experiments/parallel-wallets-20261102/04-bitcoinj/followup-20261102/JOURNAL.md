> [English](<../../../../../../en/reports/experiments/parallel-wallets-20261102/04-bitcoinj/followup-20261102/JOURNAL.md>) · [Выбор языка](<../../../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../../../README.md>) · [Направление](<../../../../../topics/03-wallets.md>) · [Документы серии](<../../INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../../../docs/LATEST_RESULTS.md>).

# B4-R2 — журнал

## 02.11.2026 — второй проход

Прочитаны STATUS, RESULTS, JOURNAL, PROTOCOL и MODEL первого этапа.
Новые направления: delta 0.12.1/0.12.2, HD rotation, encryption/restore,
необходимые low-bit условия повторной выдачи raw child. Предыдущие результаты
не перезапускаются и не перезаписываются.

## 02.11.2026 — новые исходники и уточнение encryption control

Закреплены релизы bitcoinj 0.12.1/0.12.2 и Android 4.07/4.11/4.15/4.16.
Найден первичный fix commit d8aa5dc01a299008b88da22785ef8ae4660e79ce от
17.12.2014: restore старого Base58 backup раньше создавал Wallet() с новым HD
seed, теперь создаёт non-HD KeyChainGroup и импортирует loose keys до Wallet().
Также найдены >= вместо > в private-dump filter, inclusive rotation cutoff
и разрешение повторного upgrade с добавлением новой chain.

Первый LifecycleHarness на 0.12 завершился на неверном предположении, что
currentReceiveKey после encrypt обязательно не имеет plaintext ancestor.
В protobuf secret/cached-seed fields уже отсутствуют, но in-memory currentKeys
могут оставаться привязаны к предыдущим private objects. Неудачный запуск
сохранён; изменённый контроль отдельно измеряет immediate/reloaded/decrypted
cache и active-chain lookup, не замалчивая различие. Это local synthetic probe,
не извлечение секрета из реального backup и не найденный ключ Puzzle.

На 0.12.1 implicit auto-upgrade остановился на currentReceiveKey для non-HD
wallet; первый запуск завершён по 90 s лимиту. Диагностический повтор сохранил
живой stdout до этой точки; внешний jstack не подключился за 10 s. Не считать
timeout опровержением модели или доказательством deadlock. Исходник показывает
currentKey с readLock и upgrade с writeLock; выделен отдельный внутренний
watchdog probe со stack capture. Для остальных сценариев применяется явный
public upgrade, без правки оригинального bitcoinj. Проверка процессов после
завершения tool session не обнаружила оставшихся java процессов.
