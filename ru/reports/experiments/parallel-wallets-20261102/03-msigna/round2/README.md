> [English](<../../../../../../en/reports/experiments/parallel-wallets-20261102/03-msigna/round2/README.md>) · [Выбор языка](<../../../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../../../README.md>) · [Направление](<../../../../../topics/03-wallets.md>) · [Документы серии](<../../INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../../../docs/LATEST_RESULTS.md>).

# Второй заход mSIGNA

Итог: [RESULTS.md](<RESULTS.md>), [SUMMARY_FOR_MERGE.md](<SUMMARY_FOR_MERGE.md>). Первый этап находится уровнем выше и сохранён.

Из этой папки (Python3, stdlib; native-run требует уже установленный Linux g++/OpenSSL):

> Исполняемый код/команды опущены в документационной копии.


Native запуск в WSL: `python3 native_run.py` из каталога round2, доступного через /mnt/c. Он создаёт только local native/runs, не устанавливает пакеты, даёт build/run timeout120с. Команды компиляции и версии — runs/native-8f30656acce7/build.json. Подробный hash shim diff — native/hash.patch. Сохранённый native-results при совпавшем ID переиспользуется без нового исполнения.

На новой машине ID native-run может отличаться из-за файловой платформы/переводов строк. Архивный run остаётся доказательством уже выполненной проверки; не перезаписывайте его. Build pins фиксируют исходные файлы. Коллектор не повторяет уже успешные скачивания и зафиксированные ошибки.

`report.py` проверяет сохранённые хэши, original core bytes, native outputs и legacy assertions, строит NUMERIC_REPORT/HISTORY_FACTS/ACCEPTANCE и обновляет STATUS текущего второго захода. Он не запускает EC/solver заново. Общий `../build_report.py` относится только к первому этапу и обновляет его STATUS; для актуальной сводки после него следует выполнять этот `report.py`.

Для продолжения используйте STATUS.json. Ни GUI/ODB runtime, ни прежние версии OpenSSL не считаются проверенными. Все wallets в runs строго SYNTHETIC; parser не сканирует диск/сеть.
