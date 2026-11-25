> [English](<../../../../en/reports/experiments/bx-windows-mnemonic-decode-20261103/JOURNAL.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/01-historical-generators.md>) · [Документы серии](<INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).

# BMD-01 журнал

03.11.2026. По новому поручению начата проверка официального Windows-декодера.
При первом осмотре папки серии не было. Совпадающий запуск отсутствует.
Старый EMS-01 завершён; его результаты не пересобираются и не изменяются.
Текущих Python/BX/GPU-search процессов в Get-Process не обнаружено.
Предрегистрация записана до запуска исторического EXE.

## Реальный бинарник

- Проверены100 прежних pinned файлов; x64 PE скопирован с тем же SHA-256.
- Native smoke: unchanged32 → xprv;32→31-byte altered → другой xprv;63-hex
  и short4-byte → явный отказ. Реальные CRLF/stdout передавались между командами.
- Binary run41d4c5a2802e10e1:216 codec cases совпали со source model;
  129 master-xprv сверены по checksum/HMAC,180 final children по20 схемам
  на3 synthetic inputs и номерах1/50/71. Никаких реальных ключей/holdout.
- Сохранены852 уникальных process calls с PID,UTC,argv,точными bytes,returncode
  и hashes. Сетевые команды не выполнялись; все BX вызовы ограничены10s.
  Отказы odd/short учитываются как ожидаемый результат CLI, не как сбои вычисления.

## Подготовка нового варианта

- SCHEMES.json сохраняет поля20 прежних строк E15 length32,id20…39.
- Из нового класса исключены unchanged64hex, odd-hex и even<32hex. Рабочий
  predicate: чётная длина32…62. Nibble-сдвиги внутри последовательности проверены.
- Source-free hot-path reference заменяет words на восемь hex chunks; full
  словарный и native пути совпали в216 cases. Effective seed16…31bytes без padding.
- Bounded CPU worker:20positive/20negative targets из official native HD traces,
 20 many candidates, capacity19 overflow rejected, uint32 boundaries и invalid
  ranges. Это не real search и не production runner.
- Read-only аудит независимо связал852 call logs с216 entropy traces,
 129 master-xprv и180 final-HD results;100 старых pins неизменны.
- CUDA-приёмка и измеренный пилот остаются следующим отдельным вычислительным
  этапом. Полный поиск не запускался; численная GPU-стоимость не выдумывается.

- Resume:0 новых binary calls/CPU blocks;859 файлов сохранили hashes и mtime.
- Общий RESULTS.md дополнен BMD-01 без изменения прежних байтов.
- COMPLETE относится к binary audit и search-spec preparation, не к полному поиску.
