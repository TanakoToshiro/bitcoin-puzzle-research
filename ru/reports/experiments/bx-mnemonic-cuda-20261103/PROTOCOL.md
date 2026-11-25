> [English](<../../../../en/reports/experiments/bx-mnemonic-cuda-20261103/PROTOCOL.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/01-historical-generators.md>) · [Документы серии](<INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).

# BMC-01 — конечный поиск BX mnemonic на CUDA

03.11.2026, Europe/Moscow. Пользователь поручил продолжить начатую build.sh
подготовку и довести проверку применимости к Bitcoin Puzzle до конца. После
приёмки и измеренного пилота выполняется полный зарегистрированный домен;
облачная аренда не используется. Старая BMD-01/E15 серия не меняется.

## Зафиксированная гипотеза

Официальный BX2.0.0 Windows x64: uint32→MT19937→32 outputs %255→entropy32;
old Electrum encode/decode сокращает leading zeros каждого BE uint32 chunk.
Новая мастер-строка = конкатенация восьми unpadded lowercase hex,0→"0".
Ровно4 категории: unchanged64hex; changed_valid even32..62hex;
reject_odd; reject_short even<32hex. Только changed_valid передаётся как16..31
байт в BIP32 HMAC("Bitcoin seed",bytes). PBKDF2/BIP39 отсутствуют.
Nibble-сдвиги между chunks не заменять удалением целых нулевых байтов.

SCHEMES.json =20 строк E15 для исходной length32,id20..39, без изменения
parent/hard/offset. Родители m,m/0,m/0'/0,m/0'/1 с normal/hardened final
i−1/i; m/44'/0'/0'/0 и /1 с normal final i−1/i. Маска:
2^(i−1)+(raw mod2^(i−1)). Эти пути не являются атрибуцией автора.
Training№1–50, предварительный фильтр49 младших бит№50. Реальные holdout№51+
использовать лишь после полного training match; не выбирать по ним параметры.

Полный исходный домен[0,4294967296), включая0 и0xffffffff.4096 блоков2^20.
Начала/концы uint64; не допускать wrap. В каждом блоке сумма4 категорий равна
числу исходных seed, HD pairs=20×changed_valid. Unchanged покрыт E15;
source rejects не создают seed в проверенной CLI-цепочке. Invalid HD — ошибка
всего блока, не reject и не отрицательный результат. Не сдвигать child index.

## Приёмка до реального поиска

- Проверить сохранённые происхождение/хэши BMD-01 и E15; не запускать prepare
  заново. Зафиксировать текущую сборку и окружение. Готовые артефакты с теми же
  input pins не пересчитывать.
- CUDA MT: все12473 E15 seeds/32words, все границы блоков,0/1/max. CUDA codec:
  эти же entropy плюс все native32 traces и дополнительные min/max lengths.
  Сверить category,exact hex,effective bytes, а не только счётчики.
- Master/parents/final key-chain-public: BMD native traces,17 BIP32 vectors,
  inherited SHA/HMAC/EC/scalar-add vectors, точные37-byte HMAC payloads,
  ведущие нули,normal/hardened и invalid nodes.
- Реальный scan kernel сверить с affine CPU для20 выходов каждого eligible
  seed в разнесённых коротких диапазонах.20 positive/20 negative synthetic
  фильтров; synthetic training/holdout verifier controls; bits0 many matches,
  overflow, empty/singleton, block/domain boundaries и полный последний блок.
- Ошибочные master/child test builds обязаны прерывать блок; пропущенные codec
  cases не должны выполнять HD. Category counters сверяются независимо CPU.
- Runner: atomic checkpoints,stop/resume,skip completed,changed config,
  truncated/corrupt block,worker error,candidate stop и конкурентная блокировка.

## Пилот и полный проход

После прогрева5 разнесённых измерений по4×2^20 seed:у0,2^30,2^31,3×2^30 и
конца домена. Каждая1M часть сохраняется отдельно вместе с input pins, временем
и категориями; после приёмки эти20 блоков используются полным проходом без
повторного вычисления. Они входят в полный домен ровно один раз. Synthetic
controls и classify-only benchmarks покрытием поиска не считаются.
Отдельный classify-only замер оценивает RNG+codec; full-minus-classify — лишь
приблизительная оценка добавленной HD-стоимости, не независимый профиль stages.
Показать pipeline wall/IO,API/CUDA time,init,memory,eligible fraction,диапазон
полной стоимости по фактическим измерениям. E15 время не переносить.

Перед full заморозить inputs/acceptance hashes. Последовательные blocks имеют
SHA-chain/config pins; кандидат сохраняется и останавливает завершение до
независимой проверки. Error,timeout,STOP не считаются завершением. После полного
покрытия отдельный read-only процесс и отдельный Windows readback проверяют
4096 диапазонов,категории,хэши,принятый код и отсутствие кандидатов/ошибок.
Не расширять RNG,пути,passphrase,маски или порядок экспорта после результата.

Отрицательный результат исключает только эти20 сочетаний нового codec-path
в полномuint32-домене. Он не исключает все BX/кошельки и не устанавливает ПО автора.
