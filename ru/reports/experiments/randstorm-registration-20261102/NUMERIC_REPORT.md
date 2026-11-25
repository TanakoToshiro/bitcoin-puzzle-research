> [English](<../../../../en/reports/experiments/randstorm-registration-20261102/NUMERIC_REPORT.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/08-methodology-and-history.md>) · [Документы серии](<INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).

# RND-02 — числовые результаты

UTC: 2026-11-01T22:41:50.551596+00:00; CPU/Node-аудит 0.737с (без подготовки/сети).

| Сценарий | Ключи | KSA | Math.random | WebCrypto | Первая KSA после _seed |
|---|---:|---:|---:|---:|---|
| normal | 1 | 1 | 0 | 1 | True |
| changed_password | 1 | 1 | 0 | 1 | True |
| changed_system_entropy | 1 | 1 | 0 | 1 | True |
| no_server_entropy | 1 | 1 | 0 | 1 | True |
| short_password | 0 | 0 | 0 | 1 | False |
| mismatch | 0 | 0 | 0 | 1 | False |
| uuid_network_error | 0 | 0 | 0 | 1 | False |
| already_has_address | 0 | 0 | 0 | 1 | False |
| counterfactual_no_webcrypto | 1 | 1 | 128 | 0 | True |
| injected_early_rc4_control | 1 | 1 | 0 | 1 | False |

False при отсутствии KSA не означает раннего запуска. Единственный сценарий с ранней KSA — явно искусственный injected_early_rc4_control. В нём WebCrypto уже был вызван. counterfactual_no_webcrypto — контроль ветки, а не описание обычного Chrome31.

Прежние неизменные файлы RND-01: 78. Настоящий поиск: False. Полный исторический браузер запускался: False.
