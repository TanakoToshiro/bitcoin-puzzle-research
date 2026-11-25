> [English](<../../../../en/reports/runs/20261030-083810-c8e12d/REPORT-invocation-1.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/08-methodology-and-history.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).

# Запуск 20261030-083810-c8e12d

Создан: 2026-10-30T08:38:10.654743+00:00 (UTC).
Fingerprint: `eaea05870ed96fb50a78e9e8652e3f9e1a9034d4d50bca1eff6939be165e6273`.
Данные: `e3378b3bab77e287dc66dacf2a0d03f7282e4b2ab56b939c5455546359d616eb`; режим: SMOKE — не основной эксперимент.

Настройки и версии — артефакт исходного исследования (`manifest.json`; вне снимка) · Исходные известные решения — артефакт исходного исследования (`known_solutions.json`; вне снимка)

## Этапы и ограничения

| Этап | Состояние вычислений | Научный результат | Секунды всех попыток |
|---|---|---|---:|
| audit — артефакт исходного исследования (`tasks/audit/state.json`; вне снимка) | complete | passed | 4.250 |
| correlations — артефакт исходного исследования (`tasks/correlations/state.json`; вне снимка) | complete | complete | 4.000 |
| dataset-test — артефакт исходного исследования (`tasks/dataset-test/state.json`; вне снимка) | complete | complete | 4.484 |
| dataset-train — артефакт исходного исследования (`tasks/dataset-train/state.json`; вне снимка) | complete | complete | 4.110 |
| dataset-validation — артефакт исходного исследования (`tasks/dataset-validation/state.json`; вне снимка) | complete | complete | 4.157 |
| evaluate — артефакт исходного исследования (`tasks/evaluate/state.json`; вне снимка) | complete | complete | 4.219 |
| gen-java48-fwd-big-s1 — артефакт исходного исследования (`tasks/gen-java48-fwd-big-s1/state.json`; вне снимка) | complete | contradiction | 1.907 |
| gen-java48-fwd-big-s2 — артефакт исходного исследования (`tasks/gen-java48-fwd-big-s2/state.json`; вне снимка) | complete | contradiction | 1.875 |
| gen-java48-fwd-little-s1 — артефакт исходного исследования (`tasks/gen-java48-fwd-little-s1/state.json`; вне снимка) | complete | contradiction | 1.859 |
| gen-java48-fwd-little-s2 — артефакт исходного исследования (`tasks/gen-java48-fwd-little-s2/state.json`; вне снимка) | complete | contradiction | 1.907 |
| gen-java48-rev-big-s1 — артефакт исходного исследования (`tasks/gen-java48-rev-big-s1/state.json`; вне снимка) | complete | contradiction | 1.937 |
| gen-java48-rev-big-s2 — артефакт исходного исследования (`tasks/gen-java48-rev-big-s2/state.json`; вне снимка) | complete | contradiction | 1.938 |
| gen-java48-rev-little-s1 — артефакт исходного исследования (`tasks/gen-java48-rev-little-s1/state.json`; вне снимка) | complete | contradiction | 1.859 |
| gen-java48-rev-little-s2 — артефакт исходного исследования (`tasks/gen-java48-rev-little-s2/state.json`; вне снимка) | complete | contradiction | 1.890 |
| gen-lcg32-fwd-big-s1 — артефакт исходного исследования (`tasks/gen-lcg32-fwd-big-s1/state.json`; вне снимка) | complete | contradiction | 1.875 |
| gen-lcg32-fwd-big-s2 — артефакт исходного исследования (`tasks/gen-lcg32-fwd-big-s2/state.json`; вне снимка) | complete | contradiction | 1.875 |
| gen-lcg32-fwd-little-s1 — артефакт исходного исследования (`tasks/gen-lcg32-fwd-little-s1/state.json`; вне снимка) | complete | contradiction | 1.953 |
| gen-lcg32-fwd-little-s2 — артефакт исходного исследования (`tasks/gen-lcg32-fwd-little-s2/state.json`; вне снимка) | complete | contradiction | 2.016 |
| gen-lcg32-rev-big-s1 — артефакт исходного исследования (`tasks/gen-lcg32-rev-big-s1/state.json`; вне снимка) | complete | contradiction | 1.843 |
| gen-lcg32-rev-big-s2 — артефакт исходного исследования (`tasks/gen-lcg32-rev-big-s2/state.json`; вне снимка) | complete | contradiction | 1.875 |
| gen-lcg32-rev-little-s1 — артефакт исходного исследования (`tasks/gen-lcg32-rev-little-s1/state.json`; вне снимка) | complete | contradiction | 2.031 |
| gen-lcg32-rev-little-s2 — артефакт исходного исследования (`tasks/gen-lcg32-rev-little-s2/state.json`; вне снимка) | complete | contradiction | 2.031 |
| gen-xorshift32-fwd-big-s1 — артефакт исходного исследования (`tasks/gen-xorshift32-fwd-big-s1/state.json`; вне снимка) | complete | contradiction | 1.953 |
| gen-xorshift32-fwd-big-s2 — артефакт исходного исследования (`tasks/gen-xorshift32-fwd-big-s2/state.json`; вне снимка) | complete | contradiction | 2.078 |
| gen-xorshift32-fwd-little-s1 — артефакт исходного исследования (`tasks/gen-xorshift32-fwd-little-s1/state.json`; вне снимка) | complete | contradiction | 23.844 |
| gen-xorshift32-fwd-little-s2 — артефакт исходного исследования (`tasks/gen-xorshift32-fwd-little-s2/state.json`; вне снимка) | complete | fit_unknown | 32.063 |
| gen-xorshift32-rev-big-s1 — артефакт исходного исследования (`tasks/gen-xorshift32-rev-big-s1/state.json`; вне снимка) | complete | contradiction | 1.922 |
| gen-xorshift32-rev-big-s2 — артефакт исходного исследования (`tasks/gen-xorshift32-rev-big-s2/state.json`; вне снимка) | complete | contradiction | 2.094 |
| gen-xorshift32-rev-little-s1 — артефакт исходного исследования (`tasks/gen-xorshift32-rev-little-s1/state.json`; вне снимка) | complete | contradiction | 22.297 |
| gen-xorshift32-rev-little-s2 — артефакт исходного исследования (`tasks/gen-xorshift32-rev-little-s2/state.json`; вне снимка) | complete | fit_unknown | 32.047 |
| positive-control — артефакт исходного исследования (`tasks/positive-control/state.json`; вне снимка) | complete | passed | 4.094 |
| train-boosting-b0 — артефакт исходного исследования (`tasks/train-boosting-b0/state.json`; вне снимка) | complete | trained | 4.172 |
| train-boosting-b0-shuffled — артефакт исходного исследования (`tasks/train-boosting-b0-shuffled/state.json`; вне снимка) | complete | trained | 4.156 |
| train-boosting-b35 — артефакт исходного исследования (`tasks/train-boosting-b35/state.json`; вне снимка) | complete | trained | 4.172 |
| train-boosting-b35-shuffled — артефакт исходного исследования (`tasks/train-boosting-b35-shuffled/state.json`; вне снимка) | complete | trained | 4.188 |
| train-boosting-b69 — артефакт исходного исследования (`tasks/train-boosting-b69/state.json`; вне снимка) | complete | trained | 4.172 |
| train-boosting-b69-shuffled — артефакт исходного исследования (`tasks/train-boosting-b69-shuffled/state.json`; вне снимка) | complete | trained | 4.250 |
| train-logistic-b0 — артефакт исходного исследования (`tasks/train-logistic-b0/state.json`; вне снимка) | complete | trained | 3.828 |
| train-logistic-b0-shuffled — артефакт исходного исследования (`tasks/train-logistic-b0-shuffled/state.json`; вне снимка) | complete | trained | 3.906 |
| train-logistic-b35 — артефакт исходного исследования (`tasks/train-logistic-b35/state.json`; вне снимка) | complete | trained | 4.016 |
| train-logistic-b35-shuffled — артефакт исходного исследования (`tasks/train-logistic-b35-shuffled/state.json`; вне снимка) | complete | trained | 3.938 |
| train-logistic-b69 — артефакт исходного исследования (`tasks/train-logistic-b69/state.json`; вне снимка) | complete | trained | 4.032 |
| train-logistic-b69-shuffled — артефакт исходного исследования (`tasks/train-logistic-b69-shuffled/state.json`; вне снимка) | complete | trained | 3.938 |
| validate — артефакт исходного исследования (`tasks/validate/state.json`; вне снимка) | complete | passed | 0.766 |

Независимо проверено решений: **83**. Обучение генераторов: №1–50; отложенные решения: №51–160.

## A. Генераторы

Сводка: `{"contradiction": 22, "fit_unknown": 2}`.
Проверяются только 24 заранее указанные модели. Противоречие исключает конкретную модель/упаковку. Тайм-аут, unknown и неоднозначность не исключают гипотезу. Частичные совпадения не повышают оценку шанса найти №71.

## B. HASH160 → бит ключа

Попарные зависимости: 11200 тестов на обучающей выборке; открытий после Holm: **0**. Минимальное p=2.03604e-05, скорректированное p=0.228037.
Все 11 200 проверок — артефакт исходного исследования (`correlations.csv`; вне снимка). Это исследовательская проверка на обучении; признаки по ней не отбирались.

| Модель | Бит | Accuracy | 95% CI | Holm p | Идеальный × |
|---|---:|---:|---|---:|---:|
| logistic | 0 | 49.609375% | 48.079283%–51.140199% | 1 | 0.996109 |
| logistic | 35 | 50.415039% | 48.884199%–51.945102% | 1 | 1.004168 |
| logistic | 69 | 50.805664% | 49.274603%–52.335215% | 0.929423 | 1.008122 |
| boosting | 0 | 50.268555% | 48.737821%–51.798785% | 1 | 1.002693 |
| boosting | 35 | 49.414062% | 47.884212%–50.945011% | 1 | 0.994175 |
| boosting | 69 | 50.073242% | 48.542671%–51.603676% | 1 | 1.000733 |

Ориентировочная чувствительность при мощности 80% и консервативной поправке на 6 тестов: **2.9506 процентного пункта** сверх 50%.
Идеальный множитель = 1/(1,5−accuracy), при равномерном положении внутри половин и бесплатном предсказании. Это описательная оценка, не измеренное ускорение. В машинном результате сохранены обучение, инференс, базовые прогнозы, одновременные интервалы и контроли с перемешанными метками.

Контроли с перемешанными метками: пройдены.
Подробные метрики и стоимость — артефакт исходного исследования (`tasks/evaluate/result.json`; вне снимка).

**Подтверждённого преимущества не обнаружено в рамках этих моделей и выборок.** Это не доказательство невозможности предсказания. Повторная выборка не вычисляется без прошедшего отбор сигнала.

## Продолжение

Завершённые этапы с теми же входами пропускаются. Для продолжения используйте `resume --run 20261030-083810-c8e12d --budget-seconds N`. Unknown решателя — уже зафиксированный результат при лимите 30 с; его повторение с иным лимитом требует нового эксперимента. Изменения модели после просмотра теста требуют нового запуска и нового seed.

Исходные логи, результаты и отдельные попытки лежат в `tasks/`. Ручные интерпретации ведутся отдельно в `NOTES.md`.
