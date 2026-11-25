> [English](<../../../../../../en/reports/experiments/mt19937-linear-20261030/runs/20261030-093024-0567d283/RESULTS.md>) · [Выбор языка](<../../../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../../../README.md>) · [Направление](<../../../../../topics/02-prng-recovery.md>) · [Документы серии](<../../INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../../../docs/LATEST_RESULTS.md>).

# E1 MT19937: результаты

ID: `20261030-093024-0567d283`. Обновлено: 2026-10-30T09:32:16.687255+00:00.

Протокол: PROTOCOL.md — артефакт исходного исследования (`code/PROTOCOL.md`; вне снимка). Manifest — артефакт исходного исследования (`manifest.json`; вне снимка), журнал — артефакт исходного исследования (`EVENTS.jsonl`; вне снимка).

Все результаты относятся к восьми фиксированным схемам и произвольному достижимому состоянию MT19937. Наличие совместного состояния не идентифицирует генератор создателя.

| Этап | Статус | Результат | CPU wall time, с |
|---|---|---|---:|
| controls — артефакт исходного исследования (`tasks/controls/result.json`; вне снимка) | завершён | 11 контролей, rank(twist)=19937 | 1.539 |
| data — артефакт исходного исследования (`tasks/data/result.json`; вне снимка) | завершён | 83 решений; 3767 наблюдений | 0.037 |
| forward-big-s1 — артефакт исходного исследования (`tasks/forward-big-s1/result.json`; вне снимка) | завершён | rank(A)=3767; d=70; XOR=0; фиксированных битов=0 | 8.017 |
| forward-big-s2 — артефакт исходного исследования (`tasks/forward-big-s2/result.json`; вне снимка) | завершён | rank(A)=3767; d=70; XOR=0; фиксированных битов=0 | 5.414 |
| forward-little-s1 — артефакт исходного исследования (`tasks/forward-little-s1/result.json`; вне снимка) | завершён | rank(A)=3767; d=70; XOR=0; фиксированных битов=0 | 6.193 |
| forward-little-s2 — артефакт исходного исследования (`tasks/forward-little-s2/result.json`; вне снимка) | завершён | rank(A)=3767; d=70; XOR=0; фиксированных битов=0 | 4.434 |
| reverse-big-s1 — артефакт исходного исследования (`tasks/reverse-big-s1/result.json`; вне снимка) | завершён | rank(A)=3767; d=70; XOR=0; фиксированных битов=0 | 8.049 |
| reverse-big-s2 — артефакт исходного исследования (`tasks/reverse-big-s2/result.json`; вне снимка) | завершён | rank(A)=3767; d=70; XOR=0; фиксированных битов=0 | 5.278 |
| reverse-little-s1 — артефакт исходного исследования (`tasks/reverse-little-s1/result.json`; вне снимка) | завершён | rank(A)=3767; d=70; XOR=0; фиксированных битов=0 | 6.267 |
| reverse-little-s2 — артефакт исходного исследования (`tasks/reverse-little-s2/result.json`; вне снимка) | завершён | rank(A)=3767; d=70; XOR=0; фиксированных битов=0 | 4.480 |

## Промежуточные стадии

| Схема | До № | Наблюдений | Ранг A | Совместна | Размерность остатка №71 | XOR-ограничений |
|---|---:|---:|---:|---|---:|---:|
| forward-big-s1 | 50 — артефакт исходного исследования (`tasks/forward-big-s1/stages/p050.json`; вне снимка) | 1225 | 1225 | да | 70 | 0 |
| forward-big-s1 | 70 — артефакт исходного исследования (`tasks/forward-big-s1/stages/p070.json`; вне снимка) | 2415 | 2415 | да | 70 | 0 |
| forward-big-s1 | 75 — артефакт исходного исследования (`tasks/forward-big-s1/stages/p075.json`; вне снимка) | 2489 | 2489 | да | 70 | 0 |
| forward-big-s1 | 80 — артефакт исходного исследования (`tasks/forward-big-s1/stages/p080.json`; вне снимка) | 2568 | 2568 | да | 70 | 0 |
| forward-big-s1 | 85 — артефакт исходного исследования (`tasks/forward-big-s1/stages/p085.json`; вне снимка) | 2652 | 2652 | да | 70 | 0 |
| forward-big-s1 | 90 — артефакт исходного исследования (`tasks/forward-big-s1/stages/p090.json`; вне снимка) | 2741 | 2741 | да | 70 | 0 |
| forward-big-s1 | 95 — артефакт исходного исследования (`tasks/forward-big-s1/stages/p095.json`; вне снимка) | 2835 | 2835 | да | 70 | 0 |
| forward-big-s1 | 100 — артефакт исходного исследования (`tasks/forward-big-s1/stages/p100.json`; вне снимка) | 2934 | 2934 | да | 70 | 0 |
| forward-big-s1 | 105 — артефакт исходного исследования (`tasks/forward-big-s1/stages/p105.json`; вне снимка) | 3038 | 3038 | да | 70 | 0 |
| forward-big-s1 | 110 — артефакт исходного исследования (`tasks/forward-big-s1/stages/p110.json`; вне снимка) | 3147 | 3147 | да | 70 | 0 |
| forward-big-s1 | 115 — артефакт исходного исследования (`tasks/forward-big-s1/stages/p115.json`; вне снимка) | 3261 | 3261 | да | 70 | 0 |
| forward-big-s1 | 120 — артефакт исходного исследования (`tasks/forward-big-s1/stages/p120.json`; вне снимка) | 3380 | 3380 | да | 70 | 0 |
| forward-big-s1 | 125 — артефакт исходного исследования (`tasks/forward-big-s1/stages/p125.json`; вне снимка) | 3504 | 3504 | да | 70 | 0 |
| forward-big-s1 | 130 — артефакт исходного исследования (`tasks/forward-big-s1/stages/p130.json`; вне снимка) | 3633 | 3633 | да | 70 | 0 |
| forward-big-s1 | 135 — артефакт исходного исследования (`tasks/forward-big-s1/stages/p135.json`; вне снимка) | 3767 | 3767 | да | 70 | 0 |
| forward-big-s2 | 50 — артефакт исходного исследования (`tasks/forward-big-s2/stages/p050.json`; вне снимка) | 1225 | 1225 | да | 70 | 0 |
| forward-big-s2 | 70 — артефакт исходного исследования (`tasks/forward-big-s2/stages/p070.json`; вне снимка) | 2415 | 2415 | да | 70 | 0 |
| forward-big-s2 | 75 — артефакт исходного исследования (`tasks/forward-big-s2/stages/p075.json`; вне снимка) | 2489 | 2489 | да | 70 | 0 |
| forward-big-s2 | 80 — артефакт исходного исследования (`tasks/forward-big-s2/stages/p080.json`; вне снимка) | 2568 | 2568 | да | 70 | 0 |
| forward-big-s2 | 85 — артефакт исходного исследования (`tasks/forward-big-s2/stages/p085.json`; вне снимка) | 2652 | 2652 | да | 70 | 0 |
| forward-big-s2 | 90 — артефакт исходного исследования (`tasks/forward-big-s2/stages/p090.json`; вне снимка) | 2741 | 2741 | да | 70 | 0 |
| forward-big-s2 | 95 — артефакт исходного исследования (`tasks/forward-big-s2/stages/p095.json`; вне снимка) | 2835 | 2835 | да | 70 | 0 |
| forward-big-s2 | 100 — артефакт исходного исследования (`tasks/forward-big-s2/stages/p100.json`; вне снимка) | 2934 | 2934 | да | 70 | 0 |
| forward-big-s2 | 105 — артефакт исходного исследования (`tasks/forward-big-s2/stages/p105.json`; вне снимка) | 3038 | 3038 | да | 70 | 0 |
| forward-big-s2 | 110 — артефакт исходного исследования (`tasks/forward-big-s2/stages/p110.json`; вне снимка) | 3147 | 3147 | да | 70 | 0 |
| forward-big-s2 | 115 — артефакт исходного исследования (`tasks/forward-big-s2/stages/p115.json`; вне снимка) | 3261 | 3261 | да | 70 | 0 |
| forward-big-s2 | 120 — артефакт исходного исследования (`tasks/forward-big-s2/stages/p120.json`; вне снимка) | 3380 | 3380 | да | 70 | 0 |
| forward-big-s2 | 125 — артефакт исходного исследования (`tasks/forward-big-s2/stages/p125.json`; вне снимка) | 3504 | 3504 | да | 70 | 0 |
| forward-big-s2 | 130 — артефакт исходного исследования (`tasks/forward-big-s2/stages/p130.json`; вне снимка) | 3633 | 3633 | да | 70 | 0 |
| forward-big-s2 | 135 — артефакт исходного исследования (`tasks/forward-big-s2/stages/p135.json`; вне снимка) | 3767 | 3767 | да | 70 | 0 |
| forward-little-s1 | 50 — артефакт исходного исследования (`tasks/forward-little-s1/stages/p050.json`; вне снимка) | 1225 | 1225 | да | 70 | 0 |
| forward-little-s1 | 70 — артефакт исходного исследования (`tasks/forward-little-s1/stages/p070.json`; вне снимка) | 2415 | 2415 | да | 70 | 0 |
| forward-little-s1 | 75 — артефакт исходного исследования (`tasks/forward-little-s1/stages/p075.json`; вне снимка) | 2489 | 2489 | да | 70 | 0 |
| forward-little-s1 | 80 — артефакт исходного исследования (`tasks/forward-little-s1/stages/p080.json`; вне снимка) | 2568 | 2568 | да | 70 | 0 |
| forward-little-s1 | 85 — артефакт исходного исследования (`tasks/forward-little-s1/stages/p085.json`; вне снимка) | 2652 | 2652 | да | 70 | 0 |
| forward-little-s1 | 90 — артефакт исходного исследования (`tasks/forward-little-s1/stages/p090.json`; вне снимка) | 2741 | 2741 | да | 70 | 0 |
| forward-little-s1 | 95 — артефакт исходного исследования (`tasks/forward-little-s1/stages/p095.json`; вне снимка) | 2835 | 2835 | да | 70 | 0 |
| forward-little-s1 | 100 — артефакт исходного исследования (`tasks/forward-little-s1/stages/p100.json`; вне снимка) | 2934 | 2934 | да | 70 | 0 |
| forward-little-s1 | 105 — артефакт исходного исследования (`tasks/forward-little-s1/stages/p105.json`; вне снимка) | 3038 | 3038 | да | 70 | 0 |
| forward-little-s1 | 110 — артефакт исходного исследования (`tasks/forward-little-s1/stages/p110.json`; вне снимка) | 3147 | 3147 | да | 70 | 0 |
| forward-little-s1 | 115 — артефакт исходного исследования (`tasks/forward-little-s1/stages/p115.json`; вне снимка) | 3261 | 3261 | да | 70 | 0 |
| forward-little-s1 | 120 — артефакт исходного исследования (`tasks/forward-little-s1/stages/p120.json`; вне снимка) | 3380 | 3380 | да | 70 | 0 |
| forward-little-s1 | 125 — артефакт исходного исследования (`tasks/forward-little-s1/stages/p125.json`; вне снимка) | 3504 | 3504 | да | 70 | 0 |
| forward-little-s1 | 130 — артефакт исходного исследования (`tasks/forward-little-s1/stages/p130.json`; вне снимка) | 3633 | 3633 | да | 70 | 0 |
| forward-little-s1 | 135 — артефакт исходного исследования (`tasks/forward-little-s1/stages/p135.json`; вне снимка) | 3767 | 3767 | да | 70 | 0 |
| forward-little-s2 | 50 — артефакт исходного исследования (`tasks/forward-little-s2/stages/p050.json`; вне снимка) | 1225 | 1225 | да | 70 | 0 |
| forward-little-s2 | 70 — артефакт исходного исследования (`tasks/forward-little-s2/stages/p070.json`; вне снимка) | 2415 | 2415 | да | 70 | 0 |
| forward-little-s2 | 75 — артефакт исходного исследования (`tasks/forward-little-s2/stages/p075.json`; вне снимка) | 2489 | 2489 | да | 70 | 0 |
| forward-little-s2 | 80 — артефакт исходного исследования (`tasks/forward-little-s2/stages/p080.json`; вне снимка) | 2568 | 2568 | да | 70 | 0 |
| forward-little-s2 | 85 — артефакт исходного исследования (`tasks/forward-little-s2/stages/p085.json`; вне снимка) | 2652 | 2652 | да | 70 | 0 |
| forward-little-s2 | 90 — артефакт исходного исследования (`tasks/forward-little-s2/stages/p090.json`; вне снимка) | 2741 | 2741 | да | 70 | 0 |
| forward-little-s2 | 95 — артефакт исходного исследования (`tasks/forward-little-s2/stages/p095.json`; вне снимка) | 2835 | 2835 | да | 70 | 0 |
| forward-little-s2 | 100 — артефакт исходного исследования (`tasks/forward-little-s2/stages/p100.json`; вне снимка) | 2934 | 2934 | да | 70 | 0 |
| forward-little-s2 | 105 — артефакт исходного исследования (`tasks/forward-little-s2/stages/p105.json`; вне снимка) | 3038 | 3038 | да | 70 | 0 |
| forward-little-s2 | 110 — артефакт исходного исследования (`tasks/forward-little-s2/stages/p110.json`; вне снимка) | 3147 | 3147 | да | 70 | 0 |
| forward-little-s2 | 115 — артефакт исходного исследования (`tasks/forward-little-s2/stages/p115.json`; вне снимка) | 3261 | 3261 | да | 70 | 0 |
| forward-little-s2 | 120 — артефакт исходного исследования (`tasks/forward-little-s2/stages/p120.json`; вне снимка) | 3380 | 3380 | да | 70 | 0 |
| forward-little-s2 | 125 — артефакт исходного исследования (`tasks/forward-little-s2/stages/p125.json`; вне снимка) | 3504 | 3504 | да | 70 | 0 |
| forward-little-s2 | 130 — артефакт исходного исследования (`tasks/forward-little-s2/stages/p130.json`; вне снимка) | 3633 | 3633 | да | 70 | 0 |
| forward-little-s2 | 135 — артефакт исходного исследования (`tasks/forward-little-s2/stages/p135.json`; вне снимка) | 3767 | 3767 | да | 70 | 0 |
| reverse-big-s1 | 50 — артефакт исходного исследования (`tasks/reverse-big-s1/stages/p050.json`; вне снимка) | 1225 | 1225 | да | 70 | 0 |
| reverse-big-s1 | 70 — артефакт исходного исследования (`tasks/reverse-big-s1/stages/p070.json`; вне снимка) | 2415 | 2415 | да | 70 | 0 |
| reverse-big-s1 | 75 — артефакт исходного исследования (`tasks/reverse-big-s1/stages/p075.json`; вне снимка) | 2489 | 2489 | да | 70 | 0 |
| reverse-big-s1 | 80 — артефакт исходного исследования (`tasks/reverse-big-s1/stages/p080.json`; вне снимка) | 2568 | 2568 | да | 70 | 0 |
| reverse-big-s1 | 85 — артефакт исходного исследования (`tasks/reverse-big-s1/stages/p085.json`; вне снимка) | 2652 | 2652 | да | 70 | 0 |
| reverse-big-s1 | 90 — артефакт исходного исследования (`tasks/reverse-big-s1/stages/p090.json`; вне снимка) | 2741 | 2741 | да | 70 | 0 |
| reverse-big-s1 | 95 — артефакт исходного исследования (`tasks/reverse-big-s1/stages/p095.json`; вне снимка) | 2835 | 2835 | да | 70 | 0 |
| reverse-big-s1 | 100 — артефакт исходного исследования (`tasks/reverse-big-s1/stages/p100.json`; вне снимка) | 2934 | 2934 | да | 70 | 0 |
| reverse-big-s1 | 105 — артефакт исходного исследования (`tasks/reverse-big-s1/stages/p105.json`; вне снимка) | 3038 | 3038 | да | 70 | 0 |
| reverse-big-s1 | 110 — артефакт исходного исследования (`tasks/reverse-big-s1/stages/p110.json`; вне снимка) | 3147 | 3147 | да | 70 | 0 |
| reverse-big-s1 | 115 — артефакт исходного исследования (`tasks/reverse-big-s1/stages/p115.json`; вне снимка) | 3261 | 3261 | да | 70 | 0 |
| reverse-big-s1 | 120 — артефакт исходного исследования (`tasks/reverse-big-s1/stages/p120.json`; вне снимка) | 3380 | 3380 | да | 70 | 0 |
| reverse-big-s1 | 125 — артефакт исходного исследования (`tasks/reverse-big-s1/stages/p125.json`; вне снимка) | 3504 | 3504 | да | 70 | 0 |
| reverse-big-s1 | 130 — артефакт исходного исследования (`tasks/reverse-big-s1/stages/p130.json`; вне снимка) | 3633 | 3633 | да | 70 | 0 |
| reverse-big-s1 | 135 — артефакт исходного исследования (`tasks/reverse-big-s1/stages/p135.json`; вне снимка) | 3767 | 3767 | да | 70 | 0 |
| reverse-big-s2 | 50 — артефакт исходного исследования (`tasks/reverse-big-s2/stages/p050.json`; вне снимка) | 1225 | 1225 | да | 70 | 0 |
| reverse-big-s2 | 70 — артефакт исходного исследования (`tasks/reverse-big-s2/stages/p070.json`; вне снимка) | 2415 | 2415 | да | 70 | 0 |
| reverse-big-s2 | 75 — артефакт исходного исследования (`tasks/reverse-big-s2/stages/p075.json`; вне снимка) | 2489 | 2489 | да | 70 | 0 |
| reverse-big-s2 | 80 — артефакт исходного исследования (`tasks/reverse-big-s2/stages/p080.json`; вне снимка) | 2568 | 2568 | да | 70 | 0 |
| reverse-big-s2 | 85 — артефакт исходного исследования (`tasks/reverse-big-s2/stages/p085.json`; вне снимка) | 2652 | 2652 | да | 70 | 0 |
| reverse-big-s2 | 90 — артефакт исходного исследования (`tasks/reverse-big-s2/stages/p090.json`; вне снимка) | 2741 | 2741 | да | 70 | 0 |
| reverse-big-s2 | 95 — артефакт исходного исследования (`tasks/reverse-big-s2/stages/p095.json`; вне снимка) | 2835 | 2835 | да | 70 | 0 |
| reverse-big-s2 | 100 — артефакт исходного исследования (`tasks/reverse-big-s2/stages/p100.json`; вне снимка) | 2934 | 2934 | да | 70 | 0 |
| reverse-big-s2 | 105 — артефакт исходного исследования (`tasks/reverse-big-s2/stages/p105.json`; вне снимка) | 3038 | 3038 | да | 70 | 0 |
| reverse-big-s2 | 110 — артефакт исходного исследования (`tasks/reverse-big-s2/stages/p110.json`; вне снимка) | 3147 | 3147 | да | 70 | 0 |
| reverse-big-s2 | 115 — артефакт исходного исследования (`tasks/reverse-big-s2/stages/p115.json`; вне снимка) | 3261 | 3261 | да | 70 | 0 |
| reverse-big-s2 | 120 — артефакт исходного исследования (`tasks/reverse-big-s2/stages/p120.json`; вне снимка) | 3380 | 3380 | да | 70 | 0 |
| reverse-big-s2 | 125 — артефакт исходного исследования (`tasks/reverse-big-s2/stages/p125.json`; вне снимка) | 3504 | 3504 | да | 70 | 0 |
| reverse-big-s2 | 130 — артефакт исходного исследования (`tasks/reverse-big-s2/stages/p130.json`; вне снимка) | 3633 | 3633 | да | 70 | 0 |
| reverse-big-s2 | 135 — артефакт исходного исследования (`tasks/reverse-big-s2/stages/p135.json`; вне снимка) | 3767 | 3767 | да | 70 | 0 |
| reverse-little-s1 | 50 — артефакт исходного исследования (`tasks/reverse-little-s1/stages/p050.json`; вне снимка) | 1225 | 1225 | да | 70 | 0 |
| reverse-little-s1 | 70 — артефакт исходного исследования (`tasks/reverse-little-s1/stages/p070.json`; вне снимка) | 2415 | 2415 | да | 70 | 0 |
| reverse-little-s1 | 75 — артефакт исходного исследования (`tasks/reverse-little-s1/stages/p075.json`; вне снимка) | 2489 | 2489 | да | 70 | 0 |
| reverse-little-s1 | 80 — артефакт исходного исследования (`tasks/reverse-little-s1/stages/p080.json`; вне снимка) | 2568 | 2568 | да | 70 | 0 |
| reverse-little-s1 | 85 — артефакт исходного исследования (`tasks/reverse-little-s1/stages/p085.json`; вне снимка) | 2652 | 2652 | да | 70 | 0 |
| reverse-little-s1 | 90 — артефакт исходного исследования (`tasks/reverse-little-s1/stages/p090.json`; вне снимка) | 2741 | 2741 | да | 70 | 0 |
| reverse-little-s1 | 95 — артефакт исходного исследования (`tasks/reverse-little-s1/stages/p095.json`; вне снимка) | 2835 | 2835 | да | 70 | 0 |
| reverse-little-s1 | 100 — артефакт исходного исследования (`tasks/reverse-little-s1/stages/p100.json`; вне снимка) | 2934 | 2934 | да | 70 | 0 |
| reverse-little-s1 | 105 — артефакт исходного исследования (`tasks/reverse-little-s1/stages/p105.json`; вне снимка) | 3038 | 3038 | да | 70 | 0 |
| reverse-little-s1 | 110 — артефакт исходного исследования (`tasks/reverse-little-s1/stages/p110.json`; вне снимка) | 3147 | 3147 | да | 70 | 0 |
| reverse-little-s1 | 115 — артефакт исходного исследования (`tasks/reverse-little-s1/stages/p115.json`; вне снимка) | 3261 | 3261 | да | 70 | 0 |
| reverse-little-s1 | 120 — артефакт исходного исследования (`tasks/reverse-little-s1/stages/p120.json`; вне снимка) | 3380 | 3380 | да | 70 | 0 |
| reverse-little-s1 | 125 — артефакт исходного исследования (`tasks/reverse-little-s1/stages/p125.json`; вне снимка) | 3504 | 3504 | да | 70 | 0 |
| reverse-little-s1 | 130 — артефакт исходного исследования (`tasks/reverse-little-s1/stages/p130.json`; вне снимка) | 3633 | 3633 | да | 70 | 0 |
| reverse-little-s1 | 135 — артефакт исходного исследования (`tasks/reverse-little-s1/stages/p135.json`; вне снимка) | 3767 | 3767 | да | 70 | 0 |
| reverse-little-s2 | 50 — артефакт исходного исследования (`tasks/reverse-little-s2/stages/p050.json`; вне снимка) | 1225 | 1225 | да | 70 | 0 |
| reverse-little-s2 | 70 — артефакт исходного исследования (`tasks/reverse-little-s2/stages/p070.json`; вне снимка) | 2415 | 2415 | да | 70 | 0 |
| reverse-little-s2 | 75 — артефакт исходного исследования (`tasks/reverse-little-s2/stages/p075.json`; вне снимка) | 2489 | 2489 | да | 70 | 0 |
| reverse-little-s2 | 80 — артефакт исходного исследования (`tasks/reverse-little-s2/stages/p080.json`; вне снимка) | 2568 | 2568 | да | 70 | 0 |
| reverse-little-s2 | 85 — артефакт исходного исследования (`tasks/reverse-little-s2/stages/p085.json`; вне снимка) | 2652 | 2652 | да | 70 | 0 |
| reverse-little-s2 | 90 — артефакт исходного исследования (`tasks/reverse-little-s2/stages/p090.json`; вне снимка) | 2741 | 2741 | да | 70 | 0 |
| reverse-little-s2 | 95 — артефакт исходного исследования (`tasks/reverse-little-s2/stages/p095.json`; вне снимка) | 2835 | 2835 | да | 70 | 0 |
| reverse-little-s2 | 100 — артефакт исходного исследования (`tasks/reverse-little-s2/stages/p100.json`; вне снимка) | 2934 | 2934 | да | 70 | 0 |
| reverse-little-s2 | 105 — артефакт исходного исследования (`tasks/reverse-little-s2/stages/p105.json`; вне снимка) | 3038 | 3038 | да | 70 | 0 |
| reverse-little-s2 | 110 — артефакт исходного исследования (`tasks/reverse-little-s2/stages/p110.json`; вне снимка) | 3147 | 3147 | да | 70 | 0 |
| reverse-little-s2 | 115 — артефакт исходного исследования (`tasks/reverse-little-s2/stages/p115.json`; вне снимка) | 3261 | 3261 | да | 70 | 0 |
| reverse-little-s2 | 120 — артефакт исходного исследования (`tasks/reverse-little-s2/stages/p120.json`; вне снимка) | 3380 | 3380 | да | 70 | 0 |
| reverse-little-s2 | 125 — артефакт исходного исследования (`tasks/reverse-little-s2/stages/p125.json`; вне снимка) | 3504 | 3504 | да | 70 | 0 |
| reverse-little-s2 | 130 — артефакт исходного исследования (`tasks/reverse-little-s2/stages/p130.json`; вне снимка) | 3633 | 3633 | да | 70 | 0 |
| reverse-little-s2 | 135 — артефакт исходного исследования (`tasks/reverse-little-s2/stages/p135.json`; вне снимка) | 3767 | 3767 | да | 70 | 0 |

## Как проверить и продолжить

Матрица `matrix.bin` содержит наблюдения A, затем 70 строк B; формат: `<8sII`, magic `MTGF2V1\0`, число строк, размерность 19937; каждая строка — 2493 little-endian байта.
`observations.json` задаёт номер puzzle, бит и RHS. `stages/*.json` сохраняют ранги и сертификаты каждого добавления данных.
`witnesses.json` содержит базовое состояние и направления; `verification.json` — независимые ранги и проверку обычным C-MT. Для несовместной системы сохранён сертификат 0=1.
Команды запуска, продолжения и проверки приведены в README эксперимента. Завершённые этапы с совпадающими хешами пропускаются.

Интерпретации и исправления выводов хранятся отдельно в NOTES.md эксперимента; этот числовой отчёт пересобирается из JSON.
