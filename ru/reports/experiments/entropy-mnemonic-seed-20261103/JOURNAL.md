> [English](<../../../../en/reports/experiments/entropy-mnemonic-seed-20261103/JOURNAL.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/01-historical-generators.md>) · [Документы серии](<INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).

# Журнал entropy → mnemonic → seed

03.11.2026, Europe/Moscow. Прочитан HANDOFF_ENTROPY_MNEMONIC_SEED_20261103.md.
Папки серии при первом осмотре не было. Новая серия ограничена историческим
аудитом и, при подтверждении цепочки, контролями и пилотом. Полный поиск
пользователем отдельно не поручен. Старые эксперименты не запускаются и не меняются.

- NVIDIA-SMI: RTX 3070 Ti Laptop GPU, driver 617.42, 0 MiB, 0%, процессов нет.
- Get-Process не обнаружил python/cuda/nvcc/puzzle/bx/wsl. CIM и WSL в sandbox
  вернули отказ в доступе; это не доказательство отсутствия процессов внутри WSL.
- Python 3.11.9. Прямая загрузка GitHub в sandbox: DNS error 11001.
  Web-tool не смог открыть GitHub API tree. Доступность источника не смешивается
  с отсутствием исторической функции.
- Сохранённое полное дерево BX commit aae99b278fdbfa31005cfa083ccbbf909212cbe4:
  526 entries, truncated=false. Найдены реальные команды mnemonic-encode/decode.
  Имена mnemonic-new/to-seed из современных версий пока не используются.
- COMPLETE E15: 4096 блоков, 2^32 seed, 40 схем, 0 candidates/errors.
  Это прямые entropy→BIP32, не проверка PBKDF2; прежняя оценка CPU устарела.

## Исторический этап

- Официальные API/raw-файлы получены после разрешённого sandbox escalation.
  Ошибочные предположения о v2.0.0 теге библиотеки дали 404/422 и сохранены;
  каталог показал настоящий v2.0 и декабрьский version2 snapshot e44cc97b.
  HTTP-ошибки не использовались как доказательство отсутствия функции.
- В полном BX tree 526 entries найдены mnemonic-encode/decode; в реестре и
  командных source/header — Electrum и TODO перехода на BIP39. В dependency
  tree 355 entries найден mnemonic.cpp: словарь1626, без PBKDF2/checksum/NFKD.
- Обнаружена потеря leading zeros каждого chunk при ss << val. Первоначальная
  возможность тождества codec-цикла E15 ограничена: для32-byte inputs существуют
  валидные изменённые seed. Это явно исправлено в HISTORICAL_PATH/RESULTS.
- Релизный PE совпадает по SHA-256 и содержит старые command/help strings.
  Полный PE не запускался. Точная dependency сборки и динамическое поведение
  его mnemonic остаются непроверенными; source snapshot не выдан за build lock.

## Предрегистрация и контроли

- До контролей записаны PROTOCOL.md и SCHEMES.json: поисковых схем0,
  историческая цепочка BIP39 не принята. Реальные решения не загружались.
- WSL после escalation: активного поиска не обнаружено; только системный
  unattended-upgrades Python. Современные Python3.12.3/g++13.3.0; GPU не нужен.
- Оригинальный mnemonic.cpp с типовыми shims собран O0/O2 и -fwrapv.
  Run e90010c1a91e738c:475 native-команд в каждой сборке, полное совпадение
  с Python;330 entropy/9 decode-edge cases плюс136 RNG. Stdout newline и
  неполные chunks воспроизводятся. Оба stderr пусты.
- Все80 сохранённых бинарных RNG scenarios/50768 bytes сверены Python MT;
  binary emulation не повторялась. E15 inputs103 проверены по manifest.
- Для136 RNG cases:16-byte accepted107/preserved107;32-byte accepted95,
  из них13 изменённых. Это не частота на полном домене и не real search.
- После контролей дополнительно закреплены generated.cpp и stdin utility.ipp;
  control inputs не менялись. Всего32 source Git blobs сверены с деревьями.

## Решение об измерениях и завершение

- BIP39/PBKDF2-пилот не запускать по установленному отсутствию такого пути
  в выбранных командах. Search speed/cost в PILOT_DECISION.json — null.
  Ни прежняя скорость E15, ни runtime codec controls не выдаются за прогноз.
- Buffer overflow, GPU filters, поиск/checkpoint recovery, BIP39 standard vectors
  не приняты и не объявлены проверенными: соответствующая серия не создана.
- Read-only аудит:125 старых pinned файлов неизменны,53 сохранённых source
  responses проверены SHA-256,32 Git blobs,330 traces и475×2 native outputs.
- Итог — точное историческое препятствие и принятые ограниченные codec controls.
  Полный поиск не запускался. Следующая новая гипотеза требует отдельного
  исторического основания/протокола; ни BIP39-композиция, ни old-codec bug
  автоматически не расширены до поиска.
- Проверка resume из Windows была отклонена guard: str(Path) даёт backslash
  вместо slash в input manifest, меняя run ID. Ошибка сохранена ERRORS.jsonl;
  исходные результаты не переписаны. Код принятого run не менялся ради обхода
  guard; resume проверяется в исходной WSL-среде. Ограничение указано в README.

- Resume в исходной WSL-среде:0 пересчитанных случаев;9 файлов сохранили SHA-256 и mtime.
- Общий RESULTS.md дополнен отдельной записью EMS-01; прежние байты сохранены целиком.
- Финальный manifest AUDIT_COMPLETE.json относится к завершённому историческому аудиту, не к полному поиску.
