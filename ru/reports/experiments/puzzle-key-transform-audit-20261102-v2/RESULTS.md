> [English](<../../../../en/reports/experiments/puzzle-key-transform-audit-20261102-v2/RESULTS.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/07-masks-and-order.md>) · [Документы серии](<INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).

# MAP-01 — преобразование исходных ключей в puzzle-ключи

Проверены 32 точно заданные конструкции/контрольные случая: 22 противоречат хотя бы одному известному ключу, 10 не исключены. Это не 32 независимые гипотезы: T30 повторяет T22, T28–T30 — прежние float-исключения. Условные строки действуют только при их условиях.

| ID | Операция | Статус | Первое противоречие №1–50 | Первое №51+ | Число противоречий |
|---|---|---|---:|---:|---:|
| T01 | low | not_excluded | — | — | 0 |
| T02 | high | not_excluded | — | — | 0 |
| T03 | byte_reverse | not_excluded | — | — | 0 |
| T04 | bit_reverse | not_excluded | — | — | 0 |
| T05 | hex_prefix | not_excluded | — | — | 0 |
| T06 | hex_suffix | not_excluded | — | — | 0 |
| T07 | word32 | not_excluded | — | — | 0 |
| T08 | drop_hex | not_excluded | — | — | 0 |
| T09 | variable_hex | not_excluded | — | — | 0 |
| T10 | reverse_slice | not_excluded | — | — | 0 |
| T11 | hex_floor | contradiction | 2 | 51 | 45 |
| T12 | byte_floor | contradiction | 2 | 51 | 62 |
| T13 | literal_one | contradiction | 2 | 51 | 62 |
| T14 | unpadded_binary | contradiction | 4 | 54 | 40 |
| T15 | reverse_after | contradiction | 1 | 51 | 83 |
| T16 | uint32_final | contradiction | 33 | 51 | 51 |
| T17 | uint64_final | contradiction | — | 65 | 19 |
| T18 | uint32_residue | contradiction | 34 | 51 | 49 |
| T19 | uint64_residue | contradiction | — | 67 | 16 |
| T20 | js_shift | contradiction | 33 | 51 | 51 |
| T21 | float_residue | contradiction | — | 57 | 27 |
| T22 | float_final | contradiction | — | 54 | 29 |
| T23 | float_fullwidth | contradiction | 2 | 51 | 81 |
| T24 | float_word64 | contradiction | — | 57 | 27 |
| T25 | decimal_short_final | contradiction | — | 57 | 27 |
| T26 | decimal12_final | contradiction | 41 | 51 | 43 |
| T27 | decimal_short_residue | contradiction | — | 59 | 25 |
| T28 | old_random256 | contradiction | 2 | 51 | 81 |
| T29 | old_randomb | contradiction | — | 56 | 28 |
| T30 | old_uniform | contradiction | — | 54 | 29 |
| T31 | odd_hex_decode | contradiction | 1 | 51 | 42 |
| T32 | long_L_slice | contradiction | 2 | 51 | 65 |

Все числовые строки получены из REAL.json; exact-support и necessary-only различаются в CATALOG.json/PROTOCOL.md. Противоречия — детерминированные, не статистические. Повторно просмотренный набор №51+ не является новым закрытым тестом.

## Главное ограничение

Для T01–T10 построены 830 прообразов и 829 вторых различных прообразов; все прямые подстановки проверены. Это объясняет, почему отдельные конечные ключи не выбирают между младшими битами, старшим префиксом, разворотом байтов и рядом ошибок hex. Свидетельства не обязаны принадлежать одной PRNG/HD-цепочке. Валидность каждого raw как скаляра отмечена отдельно.

### Переменная длина hex — отдельный условный вывод

Если b кратно4 и residual содержит менее b/4 hex-цифр, unpadded-prefix модель T09 вынуждает x=residual: у более длинного x первые b/4 цифр не могут начинаться с нуля. Это проверено исчерпывающе в малом мире.

- №69: единственный исходный x=`0x1d83275fb2bc7e0c`, длина 61 бит.

Это условное значение по модели T09, не найденный настоящий исходный ключ. Если автор брал полные256-битные исходники, такой случай отвергает T09; если переменная длина исходника разрешена, модель остаётся совместимой. Нужна информация об исходной цепочке, а не второй перебор известных puzzle-ключей.

Нельзя переносить отрицательный BX/SX GPU-результат с младшей маски на старший префикс или иной переставленный raw. Однако строковый suffix достаточной длины с точной маской (T06) и корректное чтение32-битных слов с точной склейкой (T07) являются той же функцией, что T01; новая GPU-серия для них дублировала бы старую. Правильное удаление L у hex(long) Python2 также не меняет число.

## Что установлено про потерю точности

Сетка binary64 применяется только к точному целому значению float/Number. Операция должна непосредственно завершать обработку либо переходить в точную маску, как указано в модели. Если округляется только остаток, проверяется остаток, а не весь ключ. Если число далее превращается в кратчайшую decimal-строку, сетка уже другая: используем только необходимый предел17 значащих десятичных цифр. Python2 str(float) имеет12 значащих цифр. Значения, прошедшие такой необходимый фильтр, не объявляются достижимыми.

Двоичное и десятичное представления протестированы отдельно, включая контрпример1000000000000000100 против точного binary64-целого1000000000000000128. Современный Node подтверждает операции ES5 на синтетических данных; это не запуск браузера2015. Python2 моделировался по исходникам, его исторический executable в этом исследовании не запускался.

## Источники и воспроизводимость

[CPython2.7.9 functions](https://github.com/python/cpython/blob/v2.7.9/Doc/library/functions.rst), [long parser](https://github.com/python/cpython/blob/v2.7.9/Objects/longobject.c), [float conversion](https://github.com/python/cpython/blob/v2.7.9/Objects/floatobject.c), [12-digit constant](https://github.com/python/cpython/blob/v2.7.9/Include/floatobject.h), [CPython3.4.2 functions](https://github.com/python/cpython/blob/v3.4.2/Doc/library/functions.rst), [ECMA-2625.1](https://262.ecma-international.org/5.1/). Снимки/URL/даты/SHA256: SOURCE_MANIFEST.json.

Исполняемый протокол: PROTOCOL.md/models.py; controls: CONTROLS.json и controls/JS_OUTPUT.json; проверка83 адресов coincurve+affine: DATA_VALIDATION.json; точные контрпримеры: REAL.json; прообразы: PREIMAGES.json. Старые источники зафиксированы PRIOR_PINS.json и проверяются после серии.

## Следующее обоснованное действие

Сам по себе этот аудит не даёт нового бита №71 и не устанавливает генератор. Полезно искать конкретный экспортный формат/фрагмент преобразующего скрипта либо пару raw→puzzle. До такого артефакта следует вести раздельные классы: точная младшая маска (включая эквивалентные строки), старший префикс и перестановки перед маской. Расширять GPU сразу на все неразличимые варианты здесь не обосновано и не выполнялось. Генераторные проверки high/reverse из SEQ-05 остаются отдельным условным результатом.
