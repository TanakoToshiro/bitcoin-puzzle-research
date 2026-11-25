> [English](<../../../../../../en/reports/experiments/parallel-wallets-20261102/03-msigna/round2/JOURNAL.md>) · [Выбор языка](<../../../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../../../README.md>) · [Направление](<../../../../../topics/03-wallets.md>) · [Документы серии](<../../INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../../../docs/LATEST_RESULTS.md>).

# Второй заход — журнал

02.11.2026: пользователь запросил ещё один заход. Прочитаны STATUS/RESULTS/PROTOCOL первого этапа; старые runs не повторялись. Выбраны ещё не проверенные legacy CoinQ и история переименования HDKeychain, затем native-проверка.

Сначала WSL inventory из sandbox вернул E_ACCESSDENIED; разрешённый read-only запрос показал Ubuntu24.04. Уже установлены g++ и OpenSSL/Boost headers. Ничего не устанавливалось. Сетевой web-open дал cache-miss; pinned raw/API запросы успешны. Два предположенных файла hash.cpp/secure_allocator.h отсутствуют (404): hash inline, typedef secure_bytes_t обычный vector; они не требуются. Ошибки и две первоначальные повторные404 сохранены.

До запуска native_run записаны бюджет и область проверки. Скопированы исходные hdkeys/BigInt/secp256k1, локально адаптирован только hash.h dependency subset с явным injectable digest. Сборка3с,308 native cases прошли с первого запуска. Старый GUI и CoinDB storage bug бинарно не проверены. Подтверждён отдельный33-byte constructor rejection и path aliases.

История дала12 редакций файла за29.12.2013–10.11.2014 плюс неизменный cutoff2015. Во всех просмотренных private transitions сложение IL, не умножение. До03.03.2014 invalid child возвращался как объект; после — исключение, что несовместимо с оставшимся legacy skip-loop.

Legacy CLI newkeychain создаёт независимые CoinKey; HD доступен библиотечно/импортом. Новый123-byte public-export parser проверен на4 положительных,6 отрицательных примерах и10 изменениях count, исключённого из checksum. Это provenance/index metadata finding, не секретная связь. Реального артефакта автора нет.

Этап завершается без нового Puzzle key/recovery. Результаты первого этапа не стираются; добавляется ссылка на новый отчёт и обновляется текущий STATUS. Сводка второго захода отдельно предназначена для общего журнала.
