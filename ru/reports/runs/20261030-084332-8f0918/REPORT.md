> [English](<../../../../en/reports/runs/20261030-084332-8f0918/REPORT.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/08-methodology-and-history.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).

# Запуск 20261030-084332-8f0918

Создан: 2026-10-30T08:43:32.514397+00:00 (UTC).
Fingerprint: `a61c76549dd8c31b061e88ab59913e945e59432f10accbc42c6395b2077effbe`.
Данные: `e3378b3bab77e287dc66dacf2a0d03f7282e4b2ab56b939c5455546359d616eb`; режим: основной.

Настройки и версии — артефакт исходного исследования (`manifest.json`; вне снимка) · Исходные известные решения — артефакт исходного исследования (`known_solutions.json`; вне снимка)

## Этапы и ограничения

| Этап | Состояние вычислений | Научный результат | Секунды всех попыток |
|---|---|---|---:|
| audit — артефакт исходного исследования (`tasks/audit/state.json`; вне снимка) | complete | passed | 4.500 |
| correlations — артефакт исходного исследования (`tasks/correlations/state.json`; вне снимка) | complete | complete | 4.235 |
| dataset-test — артефакт исходного исследования (`tasks/dataset-test/state.json`; вне снимка) | complete | complete | 51.172 |
| dataset-train — артефакт исходного исследования (`tasks/dataset-train/state.json`; вне снимка) | complete | complete | 27.688 |
| dataset-validation — артефакт исходного исследования (`tasks/dataset-validation/state.json`; вне снимка) | complete | complete | 9.625 |
| evaluate — артефакт исходного исследования (`tasks/evaluate/state.json`; вне снимка) | complete | complete | 18.469 |
| gen-java48-fwd-big-s1 — артефакт исходного исследования (`tasks/gen-java48-fwd-big-s1/state.json`; вне снимка) | complete | contradiction | 1.828 |
| gen-java48-fwd-big-s2 — артефакт исходного исследования (`tasks/gen-java48-fwd-big-s2/state.json`; вне снимка) | complete | contradiction | 1.828 |
| gen-java48-fwd-little-s1 — артефакт исходного исследования (`tasks/gen-java48-fwd-little-s1/state.json`; вне снимка) | complete | contradiction | 1.812 |
| gen-java48-fwd-little-s2 — артефакт исходного исследования (`tasks/gen-java48-fwd-little-s2/state.json`; вне снимка) | complete | contradiction | 1.922 |
| gen-java48-rev-big-s1 — артефакт исходного исследования (`tasks/gen-java48-rev-big-s1/state.json`; вне снимка) | complete | contradiction | 1.781 |
| gen-java48-rev-big-s2 — артефакт исходного исследования (`tasks/gen-java48-rev-big-s2/state.json`; вне снимка) | complete | contradiction | 1.797 |
| gen-java48-rev-little-s1 — артефакт исходного исследования (`tasks/gen-java48-rev-little-s1/state.json`; вне снимка) | complete | contradiction | 1.828 |
| gen-java48-rev-little-s2 — артефакт исходного исследования (`tasks/gen-java48-rev-little-s2/state.json`; вне снимка) | complete | contradiction | 1.859 |
| gen-lcg32-fwd-big-s1 — артефакт исходного исследования (`tasks/gen-lcg32-fwd-big-s1/state.json`; вне снимка) | complete | contradiction | 1.828 |
| gen-lcg32-fwd-big-s2 — артефакт исходного исследования (`tasks/gen-lcg32-fwd-big-s2/state.json`; вне снимка) | complete | contradiction | 1.812 |
| gen-lcg32-fwd-little-s1 — артефакт исходного исследования (`tasks/gen-lcg32-fwd-little-s1/state.json`; вне снимка) | complete | contradiction | 1.797 |
| gen-lcg32-fwd-little-s2 — артефакт исходного исследования (`tasks/gen-lcg32-fwd-little-s2/state.json`; вне снимка) | complete | contradiction | 1.875 |
| gen-lcg32-rev-big-s1 — артефакт исходного исследования (`tasks/gen-lcg32-rev-big-s1/state.json`; вне снимка) | complete | contradiction | 1.781 |
| gen-lcg32-rev-big-s2 — артефакт исходного исследования (`tasks/gen-lcg32-rev-big-s2/state.json`; вне снимка) | complete | contradiction | 1.813 |
| gen-lcg32-rev-little-s1 — артефакт исходного исследования (`tasks/gen-lcg32-rev-little-s1/state.json`; вне снимка) | complete | contradiction | 1.812 |
| gen-lcg32-rev-little-s2 — артефакт исходного исследования (`tasks/gen-lcg32-rev-little-s2/state.json`; вне снимка) | complete | contradiction | 1.843 |
| gen-xorshift32-fwd-big-s1 — артефакт исходного исследования (`tasks/gen-xorshift32-fwd-big-s1/state.json`; вне снимка) | complete | contradiction | 1.860 |
| gen-xorshift32-fwd-big-s2 — артефакт исходного исследования (`tasks/gen-xorshift32-fwd-big-s2/state.json`; вне снимка) | complete | contradiction | 2.000 |
| gen-xorshift32-fwd-little-s1 — артефакт исходного исследования (`tasks/gen-xorshift32-fwd-little-s1/state.json`; вне снимка) | complete | contradiction | 1.875 |
| gen-xorshift32-fwd-little-s2 — артефакт исходного исследования (`tasks/gen-xorshift32-fwd-little-s2/state.json`; вне снимка) | complete | contradiction | 2.016 |
| gen-xorshift32-rev-big-s1 — артефакт исходного исследования (`tasks/gen-xorshift32-rev-big-s1/state.json`; вне снимка) | complete | contradiction | 1.828 |
| gen-xorshift32-rev-big-s2 — артефакт исходного исследования (`tasks/gen-xorshift32-rev-big-s2/state.json`; вне снимка) | complete | contradiction | 2.016 |
| gen-xorshift32-rev-little-s1 — артефакт исходного исследования (`tasks/gen-xorshift32-rev-little-s1/state.json`; вне снимка) | complete | contradiction | 1.844 |
| gen-xorshift32-rev-little-s2 — артефакт исходного исследования (`tasks/gen-xorshift32-rev-little-s2/state.json`; вне снимка) | complete | contradiction | 2.047 |
| positive-control — артефакт исходного исследования (`tasks/positive-control/state.json`; вне снимка) | complete | passed | 4.078 |
| train-boosting-b0 — артефакт исходного исследования (`tasks/train-boosting-b0/state.json`; вне снимка) | complete | trained | 11.125 |
| train-boosting-b0-shuffled — артефакт исходного исследования (`tasks/train-boosting-b0-shuffled/state.json`; вне снимка) | complete | trained | 10.891 |
| train-boosting-b35 — артефакт исходного исследования (`tasks/train-boosting-b35/state.json`; вне снимка) | complete | trained | 11.468 |
| train-boosting-b35-shuffled — артефакт исходного исследования (`tasks/train-boosting-b35-shuffled/state.json`; вне снимка) | complete | trained | 11.063 |
| train-boosting-b69 — артефакт исходного исследования (`tasks/train-boosting-b69/state.json`; вне снимка) | complete | trained | 11.032 |
| train-boosting-b69-shuffled — артефакт исходного исследования (`tasks/train-boosting-b69-shuffled/state.json`; вне снимка) | complete | trained | 11.172 |
| train-logistic-b0 — артефакт исходного исследования (`tasks/train-logistic-b0/state.json`; вне снимка) | complete | trained | 4.703 |
| train-logistic-b0-shuffled — артефакт исходного исследования (`tasks/train-logistic-b0-shuffled/state.json`; вне снимка) | complete | trained | 4.500 |
| train-logistic-b35 — артефакт исходного исследования (`tasks/train-logistic-b35/state.json`; вне снимка) | complete | trained | 4.344 |
| train-logistic-b35-shuffled — артефакт исходного исследования (`tasks/train-logistic-b35-shuffled/state.json`; вне снимка) | complete | trained | 4.328 |
| train-logistic-b69 — артефакт исходного исследования (`tasks/train-logistic-b69/state.json`; вне снимка) | complete | trained | 4.391 |
| train-logistic-b69-shuffled — артефакт исходного исследования (`tasks/train-logistic-b69-shuffled/state.json`; вне снимка) | complete | trained | 4.343 |
| validate — артефакт исходного исследования (`tasks/validate/state.json`; вне снимка) | complete | passed | 0.750 |

Независимо проверено решений: **83**. Обучение генераторов: №1–50; отложенные решения: №51–160.

## A. Генераторы

Сводка: `{"contradiction": 24}`.
Проверяются только 24 заранее указанные модели. Противоречие исключает конкретную модель/упаковку. Тайм-аут, unknown и неоднозначность не исключают гипотезу. Частичные совпадения не повышают оценку шанса найти №71.

## B. HASH160 → бит ключа

Попарные зависимости: 11200 тестов на обучающей выборке; открытий после Holm: **0**. Минимальное p=2.58589e-05, скорректированное p=0.28962.
Все 11 200 проверок — артефакт исходного исследования (`correlations.csv`; вне снимка). Это исследовательская проверка на обучении; признаки по ней не отбирались.

| Модель | Бит | Accuracy | 95% CI | Holm p | Идеальный × |
|---|---:|---:|---|---:|---:|
| logistic | 0 | 50.029182% | 49.893841%–50.164524% | 1 | 1.000292 |
| logistic | 35 | 50.041199% | 49.905857%–50.176540% | 1 | 1.000412 |
| logistic | 69 | 49.947739% | 49.812397%–50.083081% | 1 | 0.999478 |
| boosting | 0 | 50.037193% | 49.901851%–50.172535% | 1 | 1.000372 |
| boosting | 35 | 50.060272% | 49.924930%–50.195613% | 1 | 1.000603 |
| boosting | 69 | 49.909782% | 49.774442%–50.045125% | 1 | 0.999099 |

Ориентировочная чувствительность при мощности 80% и консервативной поправке на 6 тестов: **0.2608 процентного пункта** сверх 50%.
Идеальный множитель = 1/(1,5−accuracy), при равномерном положении внутри половин и бесплатном предсказании. Это описательная оценка, не измеренное ускорение. В машинном результате сохранены обучение, инференс, базовые прогнозы, одновременные интервалы и контроли с перемешанными метками.

Контроли с перемешанными метками: пройдены.
Подробные метрики и стоимость — артефакт исходного исследования (`tasks/evaluate/result.json`; вне снимка).

**Подтверждённого преимущества не обнаружено в рамках этих моделей и выборок.** Это не доказательство невозможности предсказания. Повторная выборка не вычисляется без прошедшего отбор сигнала.

## Продолжение

Завершённые этапы с теми же входами пропускаются. Для продолжения используйте `resume --run 20261030-084332-8f0918 --budget-seconds N`. Unknown решателя — уже зафиксированный результат при лимите 30 с; его повторение с иным лимитом требует нового эксперимента. Изменения модели после просмотра теста требуют нового запуска и нового seed.

Исходные логи, результаты и отдельные попытки лежат в `tasks/`. Ручные интерпретации ведутся отдельно в `NOTES.md`.
