> [English](<../../../../../en/reports/experiments/parallel-wallets-20261102/01-armory/ARTIFACT_PROFILE.md>) · [Выбор языка](<../../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../../README.md>) · [Направление](<../../../../topics/03-wallets.md>) · [Документы серии](<../INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../../docs/LATEST_RESULTS.md>).

# Проверяемые артефакты Armory

## 1. multipliers.txt — новый достаточный вход

В релизе v0.92.3 (commit 268db0f3fa20c989057bd43343a43b2edbe89aeb,
02.10.2014) и срезе 61a596f (08.01.2015) `safeExtendPrivateKey` и
`safeExtendPublicKey` дописывают строки успешных переходов в
`ARMORY_HOME_DIR/multipliers.txt`. Условий debug вокруг записи нет.

```
PrvChain (pkh, mult): <40 hex символов HASH160 несжатого parent>,<64 hex u>
PubChain (pkh, mult): <40 hex символов HASH160 несжатого parent>,<64 hex u>
```

При восстановлении private key после unlock без переданного pubkey поле pkh
может быть пустым. Это разрешено парсером; остаются проверки масок и
постоянного C. Формат не содержит wallet ID, chainIndex, timestamps, root
public key или самого C. Журнал общий для datadir: возможны смешение кошельков,
повторные переходы после восстановления/повторной деривации, обрезка/пропуски.
Текущий решатель требует уже выделенный непрерывный сегмент правильного порядка
и явно заданное соответствие индексов. Самостоятельное разделение смешанного
журнала, поиск произвольных перестановок и авторство по имени файла не заявляются.

`PyBtcWalletRecovery.py` копирует multipliers.txt в диагностическую папку
при конкретном пути восстановления с переносом файлов. Диалог логов
умеет собирать её файлы в `wallet_analyze_logs.zip`; имя элемента
имеет вид `walletID_parentDirectory_filename`. Это не означает автоматической
публикации архива или существования такого архива у автора Puzzle.
Не путать с отдельными multipliers для восстановленных imported keys в
recovery report: у них другая формула, наш формат к ним не применяется.

**Минимальный достаточный проверенный профиль:** непрерывные множители от
якоря до обучающих позиций 120/125/130/135 + точное index mapping + четыре
маски. Для восстановления самого C нужна хотя бы одна полная u-запись после
якоря; весь сегмент содержит такие записи. Для цели №71 anchor chainIndex<=70
при выбранном соответствии. Для целей №140/160 допустим более поздний anchor.
Достаточность продемонстрирована в контролях, гарантия LLL для всех кошельков
не утверждается; информационно минимальное число байтов не доказано.

Пакет `recover.py` режима log содержит ровно:

```
id, mode="log", anchor_chain_index, log,
observations=[{puzzle,chain_index,masked_private}],
targets=[{puzzle,chain_index}]
```

Секретные root/children, публичные raw points и C отсутствуют. Примеры —
PUBLIC_PACKETS.json активного запуска; все данные явно synthetic.

## 2. PKCC / watch-only

`getRootPKCC()` возвращает root public key 65/33 bytes и C 32 bytes.
`writePKCCFile` создаёт текст из шести строк: версия 1; EasyType16 root ID;
четыре строки по 16 байтов с 2-byte doubleSHA checksum. ID — 9 bytes:
версия/бит знака P (0x80), 6-byte wallet ID, 2-byte checksum. Первые две
строки данных — X_BE32; две последние — C. Точный EasyType16-алфавит:
`asdf` + `ghjk` + `wert` + `uion` (16 символов, без пробелов).

`artifacts.py pkcc` проверяет версию, длины, checksums, корректность EC point
и mainnet wallet ID по первому ребёнку; возвращает anchor=-1, P и C.
Автоисправление опечаток старого GUI не повторяется. Wallet ID/короткие checksums
не аутентифицируют автора. Сами строки C без X и знака недостаточны для
публичной деривации. Root ID без четырёх строк данных также недостаточен.

## 3. Одна бинарная дочерняя запись PyBtcAddress

Длина 237 bytes, integer metadata little-endian, scalar/coordinates big-endian.
Смещения относительно начала записи (не начала wallet file):

| Поле | Offset | Bytes |
|---|---:|---:|
| HASH160 / checksum | 0 / 20 | 20 / 4 |
| Version / flags | 24 / 28 | 4 / 8 |
| C / checksum | 36 / 68 | 32 / 4 |
| Signed chainIndex / chainDepth | 72 / 80 | 8 / 8 |
| IV / checksum | 88 / 104 | 16 / 4 |
| Private data / checksum | 108 / 140 | 32 / 4 |
| U(P) / checksum | 144 / 209 | 65 / 4 |
| Time / block ranges | 213 | 24 |

C и U(P) сохраняются открытыми также при зашифрованных private data.
`forkOnlineWallet` копирует адресные записи, удаляет private data; C/P/index
сохраняются. Отдельной исправной записи child достаточно для forward-anchor
профиля; root record необязателен. Imported chainIndex=-2 непригоден.
Смещение root record в заголовке 1.35 — 846; но наш инструмент **не сканирует
полные wallet files**, принимает только выделенные 237 bytes. Проверка checksum
не подтверждает chainIndex (у него нет отдельной checksum) и происхождение.

`artifacts.py record` проверяет public flag, version1.35, checksum C/P/HASH160,
соответствие HASH160 точке и неотрицательный child index либо root=-1. Private
data не выводятся. Flags encryption/private сообщаются как metadata.

## 4. Обычный Export Key Lists

GUI Extend Address Pool принимает количество; >=1000 требует дополнительного
подтверждения. В Key Lists доступны Include Unused, Private Hex/Base58,
PublicX/PublicY, ChainIndex (видимость некоторых полей зависит от режима UI).
Порядок — linearAddr160List/порядок записей, не сортировка по индексу; импорт
может нарушать последовательность. Receiving/change пользуются общей цепочкой,
отдельная BIP44-ветка здесь не подразумевается.

У обычных child-строк C не печатается. Include Paper Backup Root раскрывает
private root, а C отдельно печатается только если не совпадает с default
выводом. Это не следует путать с PKCC. PublicX/PublicY исходного экспорта
полезны только если они не были заменены точками окончательных masked keys.

Имеющихся публичных решений/адресов недостаточно ни для одного из первых
трёх профилей. Настоящий связанный с автором артефакт в этой работе не найден;
широкого поиска чужих wallet/log файлов не проводилось.
