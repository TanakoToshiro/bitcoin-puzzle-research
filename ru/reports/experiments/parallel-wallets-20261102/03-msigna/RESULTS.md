> [English](<../../../../../en/reports/experiments/parallel-wallets-20261102/03-msigna/RESULTS.md>) · [Выбор языка](<../../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../../README.md>) · [Направление](<../../../../topics/03-wallets.md>) · [Документы серии](<../INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../../docs/LATEST_RESULTS.md>).

# №3 — mSIGNA / CoinVault: завершённый ограниченный аудит

02.11.2026. **Просмотренный штатный путь сводится к стандартному аддитивному BIP32; ускорения поиска настоящего Puzzle №71 не получено.** Новый результат относительно HD-01 — точные пути/экспорты, повтор ключей при общем keychain между аккаунтами и конкретная ошибка отдельной приватной API-ветки. Для простейшего сценария применения этой ошибки получено строгое противоречие известным решениям. mSIGNA как возможный источник исходной цепочки этим не исключается.

## Историческая база и достижимый экспорт

Срез [ciphrex/mSIGNA ace0c828bed7441ef6ddda314674d882ecf4dbbe](https://github.com/ciphrex/mSIGNA/tree/ace0c828bed7441ef6ddda314674d882ecf4dbbe), commit от13.01.2015 07:36:42 UTC. Это конкретное дерево исходников до отсечения, не доказательство даты каждой опубликованной бинарной сборки. Известность desktop-приложения в каталоге bitcoin.org уже закреплена HD-01; доля рынка и связь с автором Puzzle неизвестны. Сопоставлена историческая [редакция BIP32 d201d139 от30.12.2014](https://github.com/bitcoin/bips/blob/d201d139cd159e3d762c922349c9705c8ab6bbdb/bip-0032.mediawiki); поздние векторы2017/2020 не выданы за существовавшие в2015.

Конкретный пользовательский путь по исходникам:

1. Создать/open Vault → New Keychain либо Account Wizard. `MainWindow::newKeychain` получает32 байта entropy, `Keychain` требует минимум16 байт, `HDSeed` применяет HMAC-SHA512 с ключом `Bitcoin seed`. Wizard отдельно вызывает генерацию для каждого cosigner; номера в именах — способ избежать коллизий имён, не производные одного root.
2. Выбрать и разблокировать private keychain → **View Private BIP32 Master Key**. `Vault::exportBIP32` → `Keychain::exportBIP32` →78 байт → `ViewBIP32Dialog` показывает Base58Check в текстовом поле. Экспорт зависит от выбранного keychain, не от имени account. Для импортированного extended child подпись окна «Master» не превращает его в исходный master.
3. Скопированный xprv можно передать включённому в дерево `multibip32 <xprv> "2/0"`. В single-key режиме инструмент выводит **Private key** в hex и extended private child. Цикл по `2/0`…`2/255` даёт256 исходных children; синтаксис пути относительный, префикс `m/` парсер не принимает. Это конкретный путь GUI-export xprv → штатный CLI в цикле → внешний скрипт маскирования. Наличие бинарника multibip32 в каждом установщике не подтверждено; подтверждены его исходники в данном дереве. Прямой GUI-export256 WIF не найден.

Альтернатива — Export Private/Public Keychain, файлы `.priv`/`.pub`. Это Boost text archive, **не** список WIF и не строка xprv. `Keychain` archive v2 сохраняет по порядку name, hash, depth, parent_fp, child_num, pubkey, chain_code, privkey_ciphertext, privkey_salt. При salt=0 ciphertext содержит незашифрованный scalar; при шифровании публичная точка и chaincode всё равно присутствуют. Public export удаляет private-поля. Account export включает набор таких keychains, threshold, pool/time/compression и bins. Порядок `std::set<shared_ptr<Keychain>>` нельзя считать стабильным номером cosigner.

Первичные места: MainWindow — артефакт исходного исследования (`sources/src/mainwindow.cpp`; вне снимка) строки680–708,901–944,978–1012,1169–1206,1986–2009; диалог — артефакт исходного исследования (`sources/src/viewbip32dialog.cpp`; вне снимка) строки25–37; multibip32 — артефакт исходного исследования (`sources/deps/CoinDB/tools/multibip32/src/multibip32.cpp`; вне снимка) строки40–100; Schema.h — артефакт исходного исследования (`sources/deps/CoinDB/src/Schema.h`; вне снимка) строки246–302,645–705; Vault — артефакт исходного исследования (`sources/deps/CoinDB/src/Vault.cpp`; вне снимка) строки733–752,981–997,1227–1252. URL, UTC, SHA-256 и Git blob каждого файла — SOURCES.json — артефакт исходного исследования (`SOURCES.json`; вне снимка).

## Пути и отношения, специфические для продукта

Для каждого root keychain R обычный аккаунт использует **R/1/i (change)** и **R/2/i (default receiving)**, i начинается с0. Дополнительные bins получают3,4,…; root может быть уже импортированным дочерним extended key. Account-name/id, threshold и номер cosigner не добавляют HD-уровень. `AccountBin::loadKeychains` выводит публичный R/bin; `Key` хранит ссылку на root и derivation_path; приватный leaf вычисляется от разблокированного root по этому пути и i. Нет штатной hardened-границы между root и default/change.

Pool по умолчанию25 на bin. При создании аккаунта записи создаются change0, receiving0, change1, receiving1,…, но это **порядок создания**, не универсальный порядок экспорта. Выдача очередного адреса выбирает UNUSED с минимальным index, а запрос списка сортирует account name, bin name, status DESC, index ASC. Значение0 параметра issue означает «следующий свободный», при этом первый реальный child тоже0. Любое отображение puzzle→child должно указывать конкретную операцию; произвольные перестановки не исследовались.

Криптографическая identity keychain — `HASH160(compressed_pubkey || chaincode)`,20 байт, а стандартный parent fingerprint — первые4 байта `HASH160(pubkey)`. Это разные величины; ни одна не заменяет xpub. Account hash включает threshold и отсортированные identities, а при uncompressed_keys ещё байт0. Изменение имени не меняет ключи. Один и тот же набор/threshold/compression с другим именем отклоняется по account hash; разные аккаунты с частично общим набором cosigners возможны.

**Общий keychain + одинаковый bin/index = одинаковый raw scalar в разных аккаунтах.** Threshold/другие cosigners меняют P2SH script/address, но не этот scalar. На32 синтетических индексах подтверждено: общий ключ тот же, адреса двух аккаунтов разные. Каноническая сортировка выполняется заново по байтам leaf-public-key для каждого script; позиция одного cosigner менялась15 раз на31 соседнем переходе. Поэтому столбец «первый pubkey» не является одной HD-цепочкой. Дубликат raw даёт только проверку согласия младших остатков; независимых уравнений о root не добавляет.

AccountBin export интересен как потенциальный артефакт: `makeExport` сохраняет bin-level public keychains, очищает имена и сбрасывает bin.index в0/связь с account, однако keychain child_num/depth/parent_fp/chaincode остаются. При обычном создании child_num позволяет узнать1/2/3…, а bin xpub достаточен для следующих normal children. Исходный root из такого export не становится известным. Parent-ссылка и derivation_path не входят в Keychain text archive.

Основания: Schema.cpp — артефакт исходного исследования (`sources/deps/CoinDB/src/Schema.cpp`; вне снимка) строки187–203,283–302,313–337,359–382,415–478,511–531; Schema.h — артефакт исходного исследования (`sources/deps/CoinDB/src/Schema.h`; вне снимка) строки175–176,305,364–365,442–485,583; Vault.cpp — артефакт исходного исследования (`sources/deps/CoinDB/src/Vault.cpp`; вне снимка) строки1421–1467,1670–1705,1750–1775,1858–1877.

## BIP32 и найденные отличия реализации

`HDKeychain::getChild` использует compressed33-byte parent pubkey для normal или `00 || ser256(k)` для hardened, затем BE32 index; HMAC key —32-byte parent chaincode. IL трактуется big-endian; child=(parent+IL) mod n, chaincode=IR. Normal public: IL·G+K. `BigInt::getBytes(false)` несмотря на имя параметра возвращает big-endian BN_bn2bin; перед сохранением private child дополняется слева до33 байт. Полные ведущие нули сохраняются, отдельного сокращения пространства здесь нет.

78-byte format: version4/depth1/parent_fp4/child_num4/chaincode32/key33. Defaults mainnet0488ade4/0488b21e. Metadata не входит в HMAC. Fingerprint не cryptographic secret, child_num не seed. Следующий child берёт новый IR, chaincode не копируется от родителя. Между cosigners общей chaincode код не навязывает.

Обнаружены следующие ограниченные отличия/дефекты:

- Invalid IL≥n или child=0/infinity приводят к исключению; автоматического перехода к i+1 в просмотренном AccountBin/CLI пути нет. BIP32 предписывает перейти к следующему индексу. Это остановка редкого пути, не малый master-space. IL=0 допустим при ненулевом результирующем child.
- Конструктор из78 байт не проверяет version и согласованность root metadata; private/public определяется префиксом key-data. CoinDB при импорте не хранит version, а при export конструирует HDKeychain с текущими defaults. Это может нормализовать заголовок, но не изменяет k/c. Depth — unsigned char, после255 переполняется; обычные пути имеют глубину2, поэтому это не их отличие деривации. Строгий валидатор нашего профиля намеренно отвергает неизвестную version и некорректную точку.
- `HDSeed::getSeed()` возвращает незаполненное поле seed_: constructor вычисляет master, но не присваивает seed_. В просмотренном генераторе используются getMasterKey/getMasterChainCode; пустой getter не означает пустой seed в HMAC.
- **Ошибка хранения в `Keychain::child(i,true,empty_lock)`**, Schema.cpp — артефакт исходного исследования (`sources/deps/CoinDB/src/Schema.cpp`; вне снимка), строка111: `child->privkey_ciphertext_ = privkey_` сохраняет parent scalar. Pubkey/chaincode/metadata при этом относятся к child. После unlock приватный экспорт будет иметь scalar родителя и chaincode ребёнка; публичный экспорт использует ранее сохранённую правильную child point. Независимый source-model пример показывает конкретные несовместимые xpub, сохранённые в results.json. Старый C++ binary не исполнялся, поэтому это проверка семантики присваивания, не end-to-end запуск старого приложения. При get_private=false дефектная ветка не выполняется; штатный AccountBin именно такой. При непустом lock_key шифруется правильный child scalar. Для imported33-byte private формата есть дополнительный constructor-path, его работоспособность здесь не утверждается.

**Конечная проверка новой гипотезы ошибки:** если внешняя программа вызывала этот private-child API для прямых children одного root и экспортировала их scalar без дальнейшей CKD, все raw равны s. Тогда `r_i ≡ r_j (mod 2^min(i−1,j−1))`. Полный малый контроль проверяет32000 комбинаций, а положительный/отрицательный контроль с реальными масками сохраняется отдельно. На настоящих решениях №2 key=3 требует s mod2=1, №4 key=8 требует s mod8=0. Противоречие. Отвергнут только сценарий одинакового raw; дальнейшая деривация от неправильного `(parent scalar, child chaincode)` снова содержит разные HMAC и этим тестом не исключена. Основания делать такой нестандартный путь основным не найдено.

## Проверки и пределы

Точные счётчики/время автоматически сформированы в [NUMERIC_REPORT.md](<NUMERIC_REPORT.md>), основной запуск runs/f38837a65fce/results.json — артефакт исходного исследования (`runs/f38837a65fce/results.json`; вне снимка). Python3.11.9, только standard library, CPU, около4.06с на весь основной набор; это **время контролей, не recovery**. Пакеты/общая .venv/GPU не изменялись.

Независимая affine secp256k1 модель совпала по24 xkeys для12 узлов исторических BIP32-векторов1/2, а12 xkeys vector2 совпали также с архивным output.txt mSIGNA. Выведены256 synthetic children,32 public/private equivalence,32 межаккаунтных примера,10 инъекций граничного IL,6 leading-zero примеров. Инъекции IL — искусственные unit cases, не найденные HMAC preimages. Оригинальные C++/Qt/ODB не собраны и GUI не запускался: доказан source-level путь, поддержанный независимыми векторами, а не полная бинарная совместимость.

Снимок83 решений имеет SHA-256 `d291351169b1bb483b580af8cf4c30e503941f7b15b81aabd418e93809a40b70`. Повторно подтверждены диапазоны, public key и address каждого решения. Synthetic observations сохраняют все83 индекса и пропуски, максимум134 младших бита, сумма3767. Ни один неизвестный ключ не подставлен нулём. Здесь нет recovery solver и нет заявления о holdout. Модель не получала puzzle public point в качестве raw point.

## Что требуется для продвижения

Только код + решения не раскрывают parent point/chaincode, следовательно HMAC offsets по-прежнему неизвестны. Общий account/bin счётчик ограничивает возможные пути, но не даёт HMAC key. Независимые cosigners добавляют неизвестные roots. Найденные metadata не превращаются в дешёвые коэффициенты; остаточный поиск≤2^32 не предъявлен. Для №71 после маски неизвестны70 битов.

Условно полезный артефакт — настоящий root xpub/`.pub` или public account export с парой `(pubkey,chaincode)` нужного cosigner; либо bin export с этой парой и подтверждённым соответствием индексов. Профиль и валидатор: [ARTIFACT_PROFILE.md](<ARTIFACT_PROFILE.md>), inspect_artifact.py — артефакт исходного исследования (`inspect_artifact.py`; вне снимка). Проверка профиля не доказывает принадлежность автору. Найденных реальных кандидатов0; общий поиск произвольных xpub не выполнялся. С правильным xpub применим уже известный HD-01 masked-child метод; это не новая находка данного этапа. С полным исходным normal child и ancestor xpub стандартно восстанавливается ancestor scalar; masked Puzzle key не является таким child. Seed из xprv/скаляра этим не обращается.

Следующий обоснованный шаг — проверять конкретный новый экспортный артефакт, если он появится. Расширять дерево путей без новых данных не требуется. Отсутствие найденного метода не является доказательством невозможности других атак.

## Дополнение: второй заход 02.11.2026

По новому запросу выполнены [исторический и native-аудит](<round2/RESULTS.md>).308 случаев на скомпилированном исходном HDKeychain прошли; адаптация hash-header и современная OpenSSL явно описаны. Это снимает ограничение Python-only для проверенного CoinCore, но не означает исполнения GUI/CoinDB. Проверены12 старых редакций и legacy CoinQ format; добавлен parser123-byte public export. Нового восстановления Puzzle нет. Числа и пределы первого этапа выше сохранены как история; текущий итог — по ссылке.
