> [English](<../../../../../en/reports/experiments/parallel-wallets-20261102/03-msigna/NUMERIC_REPORT.md>) · [Выбор языка](<../../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../../README.md>) · [Направление](<../../../../topics/03-wallets.md>) · [Документы серии](<../INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../../docs/LATEST_RESULTS.md>).

# Числа из сохранённых результатов

Run `f38837a65fce`. Источник: f38837a65fce/results.json — артефакт исходного исследования (`runs/f38837a65fce/results.json`; вне снимка).

| Контроль | Число |
|---|---:|
| known_solutions_validated | 83 |
| historical_vector_nodes | 12 |
| archive_xkeys_matched | 12 |
| mass_export_children | 256 |
| public_private_equivalence | 32 |
| shared_keychain_account_cases | 32 |
| small_exhaustive_duplicate_cases | 32000 |
| injected_invalid_boundary_cases | 10 |
| leading_zero_cases | 6 |
| private_child_bug_cases | 1 |
| metadata_invariance_cases | 2 |
| artifact_negative_cases | 3 |
| hardened_public_rejections | 1 |

Основной набор: 4.064965с CPU wall time, включая проверки и запись артефактов; не время recovery.
Cosigner position changes: 15/31.
Маски: максимум 134, сумма 3767 битов; независимость не предполагается.
Constant-export: 1 положительный, 1 отрицательный контроль; 0.000315800с; real-compatible=false.
Свидетель противоречия: [[2, '0x3'], [4, '0x8']].

Это Python source-model + исторические эталонные строки. Исходный C++ binary не исполнялся.
