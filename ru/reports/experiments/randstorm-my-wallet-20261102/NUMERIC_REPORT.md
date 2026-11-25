> [English](<../../../../en/reports/experiments/randstorm-my-wallet-20261102/NUMERIC_REPORT.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/03-wallets.md>) · [Документы серии](<INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).

# RND-01 — числовые контроли

UTC: 2026-11-01T22:28:40.995111+00:00. Время тестового цикла: 6.778с; подготовка/загрузки не включены.

Сценариев: 24; независимо воспроизведённый pool: 21; ключей: 115; адресов (два формата): 230; affine-проверок: 23; утверждений о влиянии входов: 19.

| Сценарий | Math.random вызовов | WebCrypto запросы (32-bit words) | RC4 KSA | Ключи | Итог |
|---|---:|---|---:|---:|---|
| fallback_base | 128 | [] | 1 | 5 | OK |
| fallback_replay | 128 | [] | 1 | 5 | OK |
| fallback_other_math | 128 | [] | 1 | 5 | OK |
| fallback_other_time | 128 | [] | 1 | 5 | OK |
| fallback_other_password | 128 | [] | 1 | 5 | OK |
| fallback_other_server | 128 | [] | 1 | 5 | OK |
| fallback_other_events | 128 | [] | 1 | 5 | OK |
| fallback_no_extra_inputs | 128 | [] | 1 | 5 | OK |
| fallback_body_server | 128 | [] | 1 | 5 | OK |
| late_reseed | 128 | [] | 1 | 5 | OK |
| one_byte_between_keys | 128 | [] | 1 | 5 | OK |
| preinitialized | 128 | [] | 1 | 5 | OK |
| preinitialized_changed_password_server | 128 | [] | 1 | 5 | OK |
| minified_bundle | 128 | [] | 1 | 5 | OK |
| webcrypto_base | 0 | [32] | 1 | 5 | OK |
| webcrypto_other_math | 0 | [32] | 1 | 5 | OK |
| webcrypto_other_system_entropy | 0 | [32] | 1 | 5 | OK |
| webcrypto_other_password | 0 | [32] | 1 | 5 | OK |
| webcrypto_late_reseed | 0 | [32] | 1 | 5 | OK |
| old2012_no_crypto | 128 | [] | 1 | 5 | OK |
| old2012_with_getrandomvalues | 128 | [] | 1 | 5 | OK |
| jan2015_fallback_raw | 128 | [] | 0 | 0 | RNG Pool has not been seeded with sufficient entropy yet |
| jan2015_fallback_wallet | 128 | [] | 1 | 5 | OK |
| jan2015_webcrypto_wallet | 128 | [64] | 1 | 5 | OK |

## Метаморфические контроли

- `exact_replay`: True
- `minified_same`: True
- `body_server_same`: True
- `late_reseed_ignored`: True
- `preinitialized_password_server_ignored`: True
- `webcrypto_math_ignored`: True
- `webcrypto_late_reseed_ignored`: True
- `2012_getrandomvalues_ignored`: True
- `extra_byte_changes_sequence`: True
- `first_byte_discarded`: True
- `modulo_not_rejection`: True
- `initialization_48_bit_truncation`: True
- `fallback_other_math_matters`: True
- `fallback_other_time_matters`: True
- `fallback_other_password_matters`: True
- `fallback_other_server_matters`: True
- `fallback_other_events_matters`: True
- `webcrypto_system_entropy_matters`: True
- `webcrypto_password_matters`: True

Все параметры синтетические. `jan2015_fallback_raw` — ожидаемая блокировка библиотечного вызова без предварительного seed_large, не авария аудита и не отрицательный поиск puzzle. Версия07.01.2015 сверена по RC4/ключам/адресам, её полный pool не воспроизводился независимо.

Настоящих puzzle-ключей проверено: 0. Ни скорость поиска, ни успешная атака на настоящий кошелёк этим тестом не измеряются.
