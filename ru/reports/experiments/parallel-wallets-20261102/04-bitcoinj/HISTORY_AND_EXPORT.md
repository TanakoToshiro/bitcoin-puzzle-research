> [English](<../../../../../en/reports/experiments/parallel-wallets-20261102/04-bitcoinj/HISTORY_AND_EXPORT.md>) · [Выбор языка](<../../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../../README.md>) · [Направление](<../../../../topics/03-wallets.md>) · [Документы серии](<../INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../../docs/LATEST_RESULTS.md>).

# B4 — исторический срез и реальная выгрузка

## Подтверждённая версия

Выбран Bitcoin Wallet **4.0**, release tag `v4.0`, commit
`5276722f9c73e540b9bbb128c37783bfd173af4a`, 03.10.2014 08:32:11 UTC.
[Исходник pom](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/5276722f9c73e540b9bbb128c37783bfd173af4a/wallet/pom.xml#L60)
явно задаёт `org.bitcoinj:bitcoinj-core:0.12`.
[CHANGES](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/5276722f9c73e540b9bbb128c37783bfd173af4a/wallet/CHANGES)
описывает HD, свежие receiving addresses и ту же зависимость. Дата приложения
установлена независимо от даты библиотеки.

Срез библиотеки: `v0.12`, commit
`83a9a71f3fff3f223d0737ad758b519a39dbbd62`, 02.10.2014.
Для запуска взят оригинальный Maven-артефакт `bitcoinj-core-0.12.jar` с
закреплённым SHA-256 и зависимостями из его pom. Это запуск release JAR,
а не заявление о воспроизводимой побитовой сборке commit.

Tag приложения содержит development/test конфигурацию (`4.0-test`, versionCode
190). Его README описывает отдельную production-ветку с mainnet/package/build
настройками. Подписанный production APK здесь не запускался и не сравнивался
побитово; выводы об Android UI основаны на release source и CHANGES.

Для контроля исторической границы сохранён последний commit default branch до
15.01.2015: `2d04a45680ede640e53de272ad028afb008c152e`, 01.01.2015.
Там уже `4.16-test` и **bitcoinj 0.12.2**. Следовательно, результат о точном
поведении 0.12 не переносится автоматически на все сборки января 2015.
Полный аудит 0.12.1/0.12.2 не выполнялся.

## Как получить сотни ключей

1. Создать/открыть кошелёк 4.0. Новые кошельки штатно HD; старые переходят в HD
   при вызове current/fresh API, когда требуется upgrade.
2. Android Request Coins при новом открытии без сохранённого адреса вызывает
   `wallet.freshReceiveAddress()`. Поэтому сотни выдач технически достижимы
   повторным открытием; отдельной кнопки «создать 256 и экспортировать WIF»
   в проверенном UI не подтверждено.
3. Удобный технический путь — перенести штатный backup на компьютер и через
   bitcoinj API вызвать `wallet.freshKeys(RECEIVE_FUNDS, 256)`. Это один пакетный
   вызов, возвращающий 256 children. `getPrivKeyBytes()` материализует их private
   scalars через сохранённых предков. Для выгрузки уже рассчитанного пула есть
   `DeterministicKeyChain.getLeafKeys()` с явным путём каждой записи.
4. После этого внешний скрипт может применить маску. Изменённые Puzzle keys
   не подаются обратно в HD-цепочку.

[RequestCoinsFragment](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/5276722f9c73e540b9bbb128c37783bfd173af4a/wallet/src/de/schildbach/wallet/ui/RequestCoinsFragment.java#L163),
[Wallet.freshKeys](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/core/Wallet.java#L407),
[getLeafKeys](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/wallet/DeterministicKeyChain.java#L1077).
Последний вариант — короткая Java-обвязка, а не подтверждённая Android GUI-функция.

## WalletTool не равен экспорту всего lookahead

`--lookahead-size` обрабатывается в `add-key`, который выдаёт **один**
`freshReceiveKey()`. В `create`/`dump` эта опция не делает пакетную выдачу.
`dump --dump-privkeys` вызывает `Wallet.toString` → `KeyChainGroup.toString` →
`chain.getKeys(false)`, то есть фильтрует leaf-пул по issued counters.
[WalletTool](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/tools/src/main/java/org/bitcoinj/tools/WalletTool.java#L925),
[фильтр](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/wallet/DeterministicKeyChain.java#L1054).

В этом фильтре сравнение `childIndex > issuedCount` пропускает также первый
невыданный индекс `childIndex == issuedCount`, если он уже есть в lookahead.
Поэтому при E=I=0 выводятся две строки, а при E=256/I=0 — 258, когда пул полон.
Это особенность дампа, а не дополнительный relation между private keys.
Числа проверены исполнением release JAR; таблица — [NUMERIC_REPORT.md](<NUMERIC_REPORT.md>).

Private dump содержит не WIF-CSV, а `ECKey{pub=..., priv=...}`. Приватный hex
получен через `BigInteger.toByteArray()`: длина переменная, возможен ведущий `00`
для положительного числа. Для маскировать/сравнивать следует integer либо
нормализованные 32 байта. В том же private dump также печатаются mnemonic и
64-байтный seed; малое число child-строк не ограничивает раскрытый секрет.
[ECKey.toString](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/core/ECKey.java#L1115).

## Counters, ветви и порядок

- RECEIVE_FUNDS/REFUND используют external branch 0; CHANGE/AUTHENTICATION —
  internal branch 1. Это `m/0'/0/i` и `m/0'/1/i`.
- Issued counters независимы от числа рассчитанных детей. `currentReceiveKey`
  повторно возвращает текущий адрес; `freshReceiveKey` продвигает счётчик.
  Обнаружение использованного адреса с большим индексом также может поднять его.
- Lookahead по умолчанию 100, threshold=33. Пополнение происходит, если
  `issued + size + threshold - numChildren > threshold`. В пустой ветке
  рассчитываются 133 public children. Счётчики выдачи при этом не меняются.
- Основной контейнер — `LinkedHashMap`: сохраняется **порядок вставки**.
  Сначала nonleaf root/account/external/internal, затем public children
  блоками. Первичный lookahead даёт external перед internal, но дальнейшие
  расширения вставляются позже: весь экспорт не обязан быть отсортирован по пути.
- Loose/imported keys в сериализации и текстовом дампе идут перед HD-цепочками.
  Несколько HD chains также имеют свой порядок; один номер строки не определяет
  branch/index, а импортированные записи могут вообще не иметь HD path.

Все перечисленные свойства привязаны к SOURCE_FACTS.json — артефакт исходного исследования (`SOURCE_FACTS.json`; вне снимка).
Схемы произвольных перестановок не перебирались.

## Резервные копии и публичный якорь

Обычный Android wallet хранится как app-private `wallet-protobuf`. Manual backup
сериализует весь Wallet protobuf и **потом** шифрует его в OpenSSL-совместимый
Base64 `Salted__` формат (AES-256-CBC, 8-байтная соль). Файлы автоматического
rolling backup удаляют transaction/block metadata, сохраняя key records.
Их наличие не означает публикацию.
[README](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/5276722f9c73e540b9bbb128c37783bfd173af4a/wallet/README),
[backup](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/5276722f9c73e540b9bbb128c37783bfd173af4a/wallet/src/de/schildbach/wallet/ui/WalletActivity.java#L941),
[rolling backup](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/5276722f9c73e540b9bbb128c37783bfd173af4a/wallet/src/de/schildbach/wallet/WalletApplication.java#L378).

В protobuf записываются:

- `DETERMINISTIC_MNEMONIC`: слова в `secret_bytes`, cached 64-байтный BIP39 seed
  в `deterministic_seed` (либо соответствующие encrypted fields).
- `DETERMINISTIC_KEY`: public key, собственный 32-байтный chaincode, repeated
  uint32 path; у external/internal — issued_subkeys и lookahead_size.
- В проверенном plaintext signing-wallet root/account/branches имеют private
  bytes, а leaf records — только public+chaincode+path. Private leaf всё равно
  можно вывести из предков. Watch-only backup не содержит таких секретов.
- Private leaf отсутствует в файле не потому, что пользователю он недоступен,
  а потому, что он пересчитывается. Копия mnemonic и cached seed не создаёт
  двух независимых систем уравнений.

[wallet.proto](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/wallet.proto#L42),
[serializeToProtobuf](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/wallet/DeterministicKeyChain.java#L585).

**Конкретный дополнительный источник account xpub:** Android Settings → Report
Issue собирает `wallet.toString(false, true, true, null)`. В signing-wallet
`KeyChainGroup.toString(false)` печатает строку `Key to watch: xpub...` для
account `m/0'`, хотя private keys/seed не выводятся. Это проверено и исходником,
и release JAR. Значит, относящийся к автору диагностический отчёт мог бы дать
нужный якорь без private backup. Сам такой отчёт автора **не найден**; рассылка
отчётов не выполнялась.
[collectWalletDump](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/5276722f9c73e540b9bbb128c37783bfd173af4a/wallet/src/de/schildbach/wallet/ui/WalletActivity.java#L723),
[Key to watch](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/wallet/KeyChainGroup.java#L890).

Отсутствующий parent fingerprint у импортированного watching account может
изменить строку xpub; `public point + chaincode + path` при этом сохраняются.
Сериализация этой версии использует фиксированные xpub/xprv version bytes и не
выбирает tpub/tprv по сети. `getPubOnly()` также сохраняет in-memory ссылку на
parent: объект внутри signing-wallet может иметь доступ к private ancestor.
Экспортированная xpub-строка такой ссылки и private ancestor не содержит.
Профиль проверки — ARTIFACT_PROFILE.json — артефакт исходного исследования (`ARTIFACT_PROFILE.json`; вне снимка), утилита —
inspect_profile.py — артефакт исходного исследования (`inspect_profile.py`; вне снимка).
