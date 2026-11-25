> [English](<../../../../en/reports/experiments/bitcoinj-wallet416-completion-20261105/PROTOCOL.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/03-wallets.md>) · [Документы серии](<INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).

# B4-R3 — завершение прерванного Bitcoin Wallet/bitcoinj followup

05.11.2026, Europe/Moscow. Цель — общая приёмка конкретных вопросов B4-R2, точное сравнение 0.12/0.12.1/0.12.2 и исполнение Android restore/backup-методов до4.16. Не заявляется проверка всего Android-приложения.

Все прежние файлы читаются без изменений. Новые результаты находятся здесь. Пакеты, GPU, облако, реальные кошельки и Bitcoin network не используются. Стенд Java работает только с синтетическими данными; пути вывода находятся в runs/core-runs.

Порядок:

1. `collect.py`: проверка последних действующих записей старых download manifests, копирование и догрузка исходников по закреплённым commits. Неудачная старая попытка получить отсутствующий WalletMaintenanceDialogFragment сохраняется как недоступный источник; реальный MaintenanceDialogFragment имеется. Повторные исторические записи fetch-журнала не трактуются как одновременно действующие pins.
2. `audit_saved.py`: проверка прежних input digests, stdout/results,810 children, protobuf и3403 raw-reuse пар. В исходных migration-контролях обнаружены некорректные A/B: они имеют65 hex digits и совпадающие верхние128 бит после усечения в32 байта. Поэтому принятие старого вывода не означает принятие этого дизайна контроля.
3. `run_core.py`: копия прежнего LifecycleHarness с заменой только A/B на допустимые, различимые скаляры и явными assertions диапазона/разных entropy. Diffs сохранены. Повтор затронутых тестов обоснован дефектом входов. Отдельный auto-upgrade probe имеет внутренний watchdog2s, внешний timeout10s. Lifecycle≤60s, compile≤45s, heap512MiB. Runner завершает только свои дочерние процессы.
4. `prepare.py`/`run_app.py`: буквально выделенные пять методов WalletUtils (restore protobuf/Base58, read/write keys), целые неизменённые Crypto.java и Iso8601Format.java шести source tags. Адаптеры: mainnet Constants, исходный BACKUP_MAX_CHARS, DateUtils.SECOND_IN_MILLIS и пустая SuppressLint-аннотация. Это desktop-JVM исполнение методов, не эмулятор Android/GUI. Для каждого профиля применяется соответствующий release JAR bitcoinj.
5. `verify.py`: независимые BIP39/PBKDF2/BIP32 и EC через Python/cryptography; wire-parser protobuf без bitcoinj; independent AES/scrypt/MD5 decode синтетических ciphertext с известными паролями. Проверяются значения child, public/chaincode, выбор migration origin и формат backup. Пароли не подбираются.
6. `finalize.py`: проверка происхождения, source/build/dependency/output pins, общая ACCEPTANCE и FINAL_MANIFEST. Общая таблица покрытия ссылается на этот новый результат; исходный partial STATUS остаётся историей.

Три bitcoinj-профиля; шесть Android-профилей 4.0/4.07/4.11/4.14/4.15/4.16. На app-профиль:11 валидных текстовых fixtures,6 malformed/network fixtures, protobuf restore с массовой выдачей256 receive+3 change, внешний backup и Unicode control. Перед контрольной миграцией выполняется явный upgrade; implicit upgrade отдельно исследуется ограниченным probe.

Первая app-серия с ошибочно заимствованными A/B сохранена как подготовительная и **не включается в итоговую приёмку**. LATEST_RUN/LATEST_CORE указывают исправленные runs. Старые root/entropy synthetic inputs не выдаются за реальные seed-кандидаты автора.

Повтор на данном ПК:

> Исполняемый код/команды опущены в документационной копии.


Используются уже установленные Java8u302 и Python3.11/cryptography, а также закреплённые JAR из прежнего этапа. Все encrypted/private файлы, созданные стендом, синтетические. Времена контролей не являются оценкой восстановления Puzzle.
