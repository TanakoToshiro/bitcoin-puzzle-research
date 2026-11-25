> [English](<../../../../en/reports/experiments/historical-signers-20261101/NUMERIC_REPORT.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/05-signatures-and-provenance.md>) · [Документы серии](<INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).

# E11 — числовой отчёт

15 известных ключей раскрытия2019. Совпадение означает точный DER; остальные группы не используются как авторские подписи.

| Проверенный путь | Совпало r | Совпало s / DER |
|---|---:|---:|
| Electrum1.9.8 transaction.py + python-ecdsa0.11 | 15/15 | 5/15 |
| Electrum2.9.3 / 3.3.4 Python signer | 15/15 | 15/15 |
| Core0.10.0 / 0.16.3 default signer | 15/15 | 15/15 |
| Core0.17.0 grind=true | 9/15 | 9/15 |
| bitcoinjs-lib2.3.0 | 15/15 | 15/15 |
| pybitcointools aeb0a2… (2017-07-27) | 15/15 | 15/15 |

## Отдельные группы E5

| Группа | Модель | Входов | Точный DER |
|---|---|---:|---:|
| reveal2019 | rfc6979_low_s | 15 | 15 |
| reveal2019 | rfc6979_unnormalized_s | 15 | 5 |
| reveal2019 | raw_digest_low_s | 15 | 15 |
| reveal2019 | core017_low_r | 15 | 9 |
| other_solver_or_unknown | rfc6979_low_s | 203 | 116 |
| other_solver_or_unknown | rfc6979_unnormalized_s | 203 | 47 |
| other_solver_or_unknown | raw_digest_low_s | 203 | 116 |
| other_solver_or_unknown | core017_low_r | 203 | 128 |

## Порядок транзакций

Точно по comparator Electrum3.3.4, не эвристическая метка владельца.

| Событие | Version | Входы отсортированы | Выходы отсортированы |
|---|---:|---|---|
| genesis2015 | 1 | True | True |
| redistribution2017 | 2 | True | True |
| deposit2019 | 2 | True | False |
| reveal2019 | 2 | True | True |
| topup2023 | 2 | True | True |

Python-контроли: 24; независимые JS/OpenSSL-контроли: 24; все прошли.
Известных входов всего: 218; sighash >= n: 0.
Основной Python-расчёт: 1.338 с; это не включает написание кода, сеть и Node.
Сохранённых HTTP-ответов: 59; состояния: {'fetched': 52, 'http_error': 7}.
