> [English](<../../../../en/reports/experiments/bitcoinj-wallet416-completion-20261105/RESULTS.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/03-wallets.md>) · [Документы серии](<INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).

# B4-R3 — Bitcoin Wallet 4.16 / bitcoinj 0.12.2: завершённый ограниченный followup

05.11.2026, Europe/Moscow. **Закрыты конкретные вопросы прерванного B4-R2: сравнение трёх release JAR, rotation/encryption/restore, повтор raw и исходный parser/backup-код приложения до4.16. Исправлена ошибка контрольных входов. Новый способ восстановить Puzzle без артефакта автора не получен; кошелёк не исключён.**

Это продолжение [B4](<../parallel-wallets-20261102/04-bitcoinj/RESULTS.md>) и [протокола B4-R2](<../parallel-wallets-20261102/04-bitcoinj/followup-20261102/PROTOCOL.md>). Старый partial STATUS и старые runs не изменены. Итоговая приёмка находится здесь: ACCEPTANCE.json — артефакт исходного исследования (`ACCEPTANCE.json`; вне снимка), VERIFICATION.json — артефакт исходного исследования (`VERIFICATION.json`; вне снимка), [протокол](<PROTOCOL.md>).

## Важная поправка к прежнему стенду

В `AuditHarness.java` первого этапа и `LifecycleHarness.java` followup литералы A/B имеют **65 hex digits**, то есть257/258 бит. Они выходят за диапазон secp256k1 scalar. Исторический `getSecretBytes()` выдавал усечённые32 байта; их старшие16 байтов у A и B одинаковы. Поэтому assertions вида «выбран A, а не B» по сравнению migration seed не различали эти исходы.

Обнаружение и область: CONTROL_INPUT_CORRECTION.json — артефакт исходного исследования (`CONTROL_INPUT_CORRECTION.json`; вне снимка). Это дефект исследовательского контроля, не свидетельство штатного генератора больших либо усечённых случайных ключей. Он не отменяет независимо проверенные HD vectors/children, но снижает доказательность прежних migration-origin assertions. Старые75/95 assertions нельзя без оговорки предъявлять как достаточную проверку выбора A/B.

В новой копии заменены A/B на допустимые64-digit scalars с различными high128; добавлены явные проверки диапазона и несовпадения migration entropy. Diff LifecycleHarness — артефакт исходного исследования (`core/LifecycleHarness.java.patch`; вне снимка), diff probe — артефакт исходного исследования (`core/AutoUpgradeProbe.java.patch`; вне снимка). Все три библиотеки перепроверены. Исправленная app-серия также использует допустимые входы. Подготовительная серия с прежними литералами сохранена и не суммируется с результатом.

## Точные версии и исполнение

| Bitcoin Wallet source tag | Commit | bitcoinj в pom |
|---|---|---|
| 4.0 | 5276722f9c73e540b9bbb128c37783bfd173af4a | 0.12 |
| 4.07 | f3069d807355758f4d277b91a704ad7361162c3e | 0.12.1 |
| 4.11 | f3bf0d9bfc9accd590f0d3ee4fd9a0ed0aa12ed2 | 0.12.2 |
| 4.14 | d34356255afe1ba1ea4f25826bff3dceacf0a72e | 0.12.2 |
| 4.15 | 88670469c70dc4c33e8e0d246ea3664db50b3ee9 | 0.12.2 |
| 4.16 | 9fd26ee927184e0e5898106acb53652627113588 | 0.12.2 |

bitcoinj commits:0.12 — `83a9a71f3fff3f223d0737ad758b519a39dbbd62`;0.12.1 — `9eab6977bdedad4fee8d84d447bdda93611162f4`;0.12.2 — `e6372c5d7da699ebdcc7253223a096bafb483368`. Tag4.16 — commit22.12.2014, то есть до исторической границы15.01.2015. Source pom содержит4.16-test; подписанный production APK не получен и не проверен. В стенде явно выбрана mainnet-конфигурация.

Проверены107 действующих прежних source pins; добавлены/скопированы24 файла приложения по закреплённым URL: SOURCES.json — артефакт исходного исследования (`SOURCES.json`; вне снимка). Исполнены оригинальные release JAR и буквально выделенные WalletUtils methods; целые Crypto/Iso8601Format неизменны. Android UI/OS заменены только необходимыми константами/аннотацией, остальные экраны не исполнялись. Java8u302 на Windows — современный desktop runtime, не Dalvik/ART2014.

Первичные источники: [pom4.16](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/9fd26ee927184e0e5898106acb53652627113588/wallet/pom.xml), [WalletUtils4.16](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/9fd26ee927184e0e5898106acb53652627113588/wallet/src/de/schildbach/wallet/util/WalletUtils.java), [KeyChainGroup0.12.2](https://github.com/bitcoinj/bitcoinj/blob/e6372c5d7da699ebdcc7253223a096bafb483368/core/src/main/java/org/bitcoinj/wallet/KeyChainGroup.java).

## Различия библиотек после исправления входов

| Контроль | 0.12 | 0.12.1 | 0.12.2 |
|---|---|---|---|
| Filtered leaf dump при E=I=0 | 2 | 0 | 0 |
| При E=3, I=2 | 7 | 5 | 5 |
| Migration key timestamp=0, cutoff=0 | Отвергается | Принимается | Принимается |
| A@100/B@200, cutoff=100 | B | A | A |
| Повторный прямой upgrade при том же cutoff | Отвергается | Новая chain, тот же child | Новая chain, тот же child |
| Rotation при cutoff=200 | Новый случайный seed | Seed из B | Seed из B |
| Implicit currentReceiveKey на non-HD wallet | Завершается | Read→write lock зависает | Завершается |

При rotation старая chain остаётся в файле, новая становится активной. При cutoff201 оба loose keys исключены; новые проверенные seeds не совпали с seed A/B. Совпадение разных экземпляров после корректной повторной миграции означает повтор той же цепочки, не новые уравнения о скрытом root.

Для0.12.1 зависание подтверждено одновременно исходником, новым ограниченным пробником и сохранённым stack: main ждёт WriteLock внутри upgrade, вызванного при удерживаемом read lock. Watchdog завершил **свой** JVM кодом42. В0.12.2 currentKey использует обычный reentrant lock, и тот же probe завершился. Это конкретный дефект доступности, не способ сузить seed. Проверка не моделирует весь многопоточный Android lifecycle.

Наблюдение `markPubKeyAsUsed` в данном clone/current сценарии: issued external увеличился на0 в0.12/0.12.1 и на1 в0.12.2; current изменился во всех трёх. Это ещё одна причина фиксировать операцию и версию при сопоставлении строк с индексами.

Штатная формула HD и пути сохраняются: `m/0'/0/i`, `m/0'/1/i`. HDKeyDerivation0.12 и0.12.1 совпадает побайтно; diff0.12.2 меняет только Javadoc перегрузки int: HD_VERSION_DIFF.patch — артефакт исходного исследования (`HD_VERSION_DIFF.patch`; вне снимка).810 children всех трёх библиотек независимо совпали по scalar/public/chaincode. Прежние injected-invalid-child проверки автоматически не расширяются на все пользовательские сценарии.

## Что реально меняет восстановление приложения

В проверенных4.0/4.07/4.11/4.14 текстовый backup загружается через `new Wallet(params)` и затем import loose keys. Wallet уже имеет новый HD seed, поэтому повторное восстановление тех же строк даёт разные HD-цепочки. Сами импортированные ключи сохраняются.

С4.15 метод сначала создаёт пустую non-HD KeyChainGroup, импортирует WIF и лишь затем конструирует Wallet. При последующем upgrade seed выводится из старого ключа. Исправление — [commit d8aa5dc0 от17.12.2014](https://github.com/bitcoin-wallet/bitcoin-wallet/commit/d8aa5dc01a299008b88da22785ef8ae4660e79ce). Теперь это подтверждено исполнением оригинального метода, а не только эквивалентной последовательностью вызовов.

На4.15/4.16:

- При различных датах выбирается старейший допустимый key; перестановка строк с разными датами его не меняет.
- При равных датах действует порядок импорта: AB выбирает A, BA — B. Отсутствующая дата даёт0, поэтому порядок undated backup тоже существенен.
- Изменение только младшей части old scalar при тех же high16 bytes оставляет HD seed прежним. Compressed/uncompressed WIF одного scalar также даёт тот же migration seed.
- Scalar1 сохраняет leading zeros: high16 bytes нулевые, а BIP39 seed получается обычным полным64-байтным результатом. Это намеренно заданный граничный контроль, не обнаруженный слабый seed автора.
- Повтор одного WIF остаётся двумя parser-записями, но одним imported key. Фильтрация/счётчик импорта проверены; произвольные смешанные backup с неоднозначными metadata не объявляются исчерпывающе покрытыми.

Parser read/write проверен на11 валидных fixtures: порядок, равные/нулевые даты, duplicate, общий high-prefix, leading zeros, compression, комментарии и дополнительный столбец. Отвергнуты шесть конкретных malformed/network входов: leading space, двойной пробел перед датой, tab separator, indented comment, неверный checksum и WIF другой сети. Это выбранные проверки реального `split(" ")`, не универсальный tolerant parser и не полный fuzzing.

Protobuf restore сохраняет seed и следующий выдаваемый child после256 receive+3 change; wrong network отвергается. API-массовая выдача не доказывает существование Android-кнопки экспорта256 WIF.

## Два разных слоя шифрования

**Внутренний spending password.** В0.12/0.12.1/0.12.2 проверены Scrypt/AES encryption, round-trip, смена пароля и неправильный контрольный пароль. Использованный N=4096 совпадает с `SCRYPT_ITERATIONS` в исходнике EncryptKeysDialogFragment4.16. В сериализованном encrypted protobuf нет plain secret_bytes или cached seed, но public key/chaincode/path остаются. Отдельный Python wire-parser проверил поля; с **известным синтетическим паролем** независимо расшифрованы mnemonic и cached seed (6 записей), с scrypt/UTF16-BE и AES-CBC.

In-memory `currentReceiveKey` сразу после encrypt в контроле сохраняет доступ к прежнему private object. После сериализации/загрузки этот путь закрыт. После decrypt тот же current-cache может оставаться непригодным для private getter, тогда как lookup активной chain даёт правильный private. Это различие состояния объектов и содержимого файла; из него не следует восстановление private из произвольного encrypted backup без пароля.

**Внешний manual backup.** Android сначала сериализует весь protobuf, затем применяет Crypto.encrypt. Исполнены целые исторические Crypto.java шести версий. Двенадцать ciphertext (обычный backup и Unicode control на профиль) независимо расшифрованы Python: Base64 `Salted__`,8-byte salt, AES256-CBC и OpenSSL-compatible MD5 derivation. Вызов содержит константу NUMBER_OF_ITERATIONS=1024, но используемый OpenSSLPBEParametersGenerator даёт проверенный однопроходный MD5-chain KDF; нельзя описывать этот формат как PBKDF2-1024. Password conversion здесь использует младшие8 бит Java char, в отличие от внутреннего scrypt/UTF16-BE. Это проверка формата, не подбор PIN/пароля.

Внешний ciphertext не равен открытому protobuf с public HD metadata. Public account xpub в незашифрованном diagnostic/protobuf может быть полезным артефактом; одно наличие encrypted backup не предоставляет его автоматически. [Crypto4.16](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/9fd26ee927184e0e5898106acb53652627113588/wallet/src/de/schildbach/wallet/util/Crypto.java), [spending-password caller](https://github.com/bitcoin-wallet/bitcoin-wallet/blob/9fd26ee927184e0e5898106acb53652627113588/wallet/src/de/schildbach/wallet/ui/EncryptKeysDialogFragment.java).

## Реальные решения и применимость

Закреплённый snapshot83 решений сохранён с SHA256 `d291351169b1bb483b580af8cf4c30e503941f7b15b81aabd418e93809a40b70`. Независимо пересчитаны3403 пары для гипотезы **повторения одного raw scalar**:159 пар арифметически совместимы, максимальное общее число наблюдаемых low bits среди совместимых —7. Среди2775 пар с overlap≥8 совпадений нет. Совместимость коротких масок не доказывает повтор; непубликовавшиеся ключи этим не проверены.

Следовательно, clone/current/re-upgrade сценарий, который требует повторить один raw в двух таких известных позициях с≥8 общими битами, противоречит данным. Это не исключение HD-генератора или всех возможных порядков выгрузки. Реальные scalar не использовались как неизвестные raw public points; forced MSB маски не считался исходным битом генератора.

Миграция использует high128 старого полного ключа. Даже при гипотезе, что известная маска№135 принадлежит именно выбранному old key, остаётся прежний промежуточный prefix-домен2^122. Новое подтверждение caller/selection не уменьшает его до2^32. Эта оценка относится к конкретному пути, не является общей нижней границей всех атак.

Авторский account xpub/diagnostic/backup не предоставлен и не найден прежними этапами. Новый глобальный поиск артефактов здесь не выполнялся. Из одних опубликованных решений остаются неизвестны HMAC public point/chaincode; обычный BIP32, rotation и исправленный restore не снимают это условие. Полного перебора, password search или нового восстановления Puzzle нет.

## Приёмка и оставшиеся границы

Новые исправленные результаты:

- 101 library assertions (33+34+34) на трёх версиях;810 независимых child-сверок.
- 228 app assertions (38×6);2490 независимых HD-node сверок, включая protobuf. Вместе с core —3300 node-проверок, а не3300 уникальных ключей автора.
- 12 outer и6 inner расшифровок исключительно синтетических контролей с известными паролями.
- 3403 реальные пары повторного raw проверены повторно независимо. Старое полное малое toy enumeration7938 систем сохранено; заново не запускалось и не суммируется как новый контроль.

Итоговые core-компиляции/запуски заняли суммарно13.10s, app-серия17.43s на данном ПК; это время стенда, не поиска ключа. Хеши исходников, методов, зависимостей и выходов закреплены в приёмке/manifest.

**Статус: конкретное продолжение B4-R2 завершено и принято в этих границах.** Полный production APK/Android lifecycle, Dalvik/ART и RNG старых ОС, все форматы повреждённых backup, все пользовательские сценарии, исторические бинарные сборки и применение к настоящему артефакту автора остаются вне покрытия. Формулировка «Bitcoin Wallet4.16 проверен целиком» по этим данным была бы неверной. Bitcoin Wallet/bitcoinj как источник Puzzle не исключён.
