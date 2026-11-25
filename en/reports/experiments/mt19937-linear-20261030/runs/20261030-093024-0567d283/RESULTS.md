> English machine translation of the [Russian source](<../../../../../../ru/reports/experiments/mt19937-linear-20261030/runs/20261030-093024-0567d283/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../../README.md>) · [Direction](<../../../../../topics/02-prng-recovery.md>) · [Documents of the series](<../../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../../docs/LATEST_RESULTS.md>).

# E1 MT19937: results

ID: `20261030-093024-0567d283`Updated: 2026-10-30T09:32:16.687255+00:00.

Protocol: PROTOCOL.md - an artifact of the initial study (`code/PROTOCOL.md`; outside the picture. Manifest - an artifact of the initial study (`manifest.json`; outside the picture), journal - artifact of the original study (`EVENTS.jsonl`; outside the picture.

All results relate to eight fixed circuits and an arbitrary attainable state MT19937. Having a co-state does not identify the creator generator.

| Phase | Status | Result | CPU wall time, s |
|---|---|---|---:|
| controls - an artifact of the initial study (`tasks/controls/result.json`; outside the picture) | finished | 11 control, rank(twist)=19937 | 1.539 |
| data - an artifact of the initial study (`tasks/data/result.json`; outside the picture) | finished | 83 decisions; 3767 observation | 0.037 |
| forward-big-s1 - an artifact of the initial study (`tasks/forward-big-s1/result.json`; outside the picture) | finished | rank(A)=3767; d=70; XOR=0; fixed-bit=0 | 8.017 |
| forward-big-s2 - an artifact of the initial study (`tasks/forward-big-s2/result.json`; outside the picture) | finished | rank(A)=3767; d=70; XOR=0; fixed-bit=0 | 5.414 |
| forward-little-s1 - an artifact of the initial study (`tasks/forward-little-s1/result.json`; outside the picture) | finished | rank(A)=3767; d=70; XOR=0; fixed-bit=0 | 6.193 |
| forward-little-s2 - an artifact of the initial study (`tasks/forward-little-s2/result.json`; outside the picture) | finished | rank(A)=3767; d=70; XOR=0; fixed-bit=0 | 4.434 |
| reverse-big-s1 - an artifact of the initial study (`tasks/reverse-big-s1/result.json`; outside the picture) | finished | rank(A)=3767; d=70; XOR=0; fixed-bit=0 | 8.049 |
| reverse-big-s2 - an artifact of the initial study (`tasks/reverse-big-s2/result.json`; outside the picture) | finished | rank(A)=3767; d=70; XOR=0; fixed-bit=0 | 5.278 |
| reverse-little-s1 - an artifact of the initial study (`tasks/reverse-little-s1/result.json`; outside the picture) | finished | rank(A)=3767; d=70; XOR=0; fixed-bit=0 | 6.267 |
| reverse-little-s2 - an artifact of the initial study (`tasks/reverse-little-s2/result.json`; outside the picture) | finished | rank(A)=3767; d=70; XOR=0; fixed-bit=0 | 4.480 |

## Intermediate stages

| Scheme | To No | Observations | rang A | Together | Residue dimension No71 | XOR-restriction |
|---|---:|---:|---:|---|---:|---:|
| forward-big-s1 | 50 - an artifact of the initial study (`tasks/forward-big-s1/stages/p050.json`; outside the picture) | 1225 | 1225 | yes | 70 | 0 |
| forward-big-s1 | 70 - an artifact of the initial study (`tasks/forward-big-s1/stages/p070.json`; outside the picture) | 2415 | 2415 | yes | 70 | 0 |
| forward-big-s1 | 75 - an artifact of the initial study (`tasks/forward-big-s1/stages/p075.json`; outside the picture) | 2489 | 2489 | yes | 70 | 0 |
| forward-big-s1 | 80 - an artifact of the initial study (`tasks/forward-big-s1/stages/p080.json`; outside the picture) | 2568 | 2568 | yes | 70 | 0 |
| forward-big-s1 | 85 - an artifact of the initial study (`tasks/forward-big-s1/stages/p085.json`; outside the picture) | 2652 | 2652 | yes | 70 | 0 |
| forward-big-s1 | 90 - an artifact of the initial study (`tasks/forward-big-s1/stages/p090.json`; outside the picture) | 2741 | 2741 | yes | 70 | 0 |
| forward-big-s1 | 95 - an artifact of the initial study (`tasks/forward-big-s1/stages/p095.json`; outside the picture) | 2835 | 2835 | yes | 70 | 0 |
| forward-big-s1 | 100 - an artifact of the initial study (`tasks/forward-big-s1/stages/p100.json`; outside the picture) | 2934 | 2934 | yes | 70 | 0 |
| forward-big-s1 | 105 - an artifact of the initial study (`tasks/forward-big-s1/stages/p105.json`; outside the picture) | 3038 | 3038 | yes | 70 | 0 |
| forward-big-s1 | 110 - an artifact of the initial study (`tasks/forward-big-s1/stages/p110.json`; outside the picture) | 3147 | 3147 | yes | 70 | 0 |
| forward-big-s1 | 115 - an artifact of the initial study (`tasks/forward-big-s1/stages/p115.json`; outside the picture) | 3261 | 3261 | yes | 70 | 0 |
| forward-big-s1 | 120 - an artifact of the initial study (`tasks/forward-big-s1/stages/p120.json`; outside the picture) | 3380 | 3380 | yes | 70 | 0 |
| forward-big-s1 | 125 - an artifact of the initial study (`tasks/forward-big-s1/stages/p125.json`; outside the picture) | 3504 | 3504 | yes | 70 | 0 |
| forward-big-s1 | 130 - an artifact of the initial study (`tasks/forward-big-s1/stages/p130.json`; outside the picture) | 3633 | 3633 | yes | 70 | 0 |
| forward-big-s1 | 135 - an artifact of the initial study (`tasks/forward-big-s1/stages/p135.json`; outside the picture) | 3767 | 3767 | yes | 70 | 0 |
| forward-big-s2 | 50 - an artifact of the initial study (`tasks/forward-big-s2/stages/p050.json`; outside the picture) | 1225 | 1225 | yes | 70 | 0 |
| forward-big-s2 | 70 - an artifact of the initial study (`tasks/forward-big-s2/stages/p070.json`; outside the picture) | 2415 | 2415 | yes | 70 | 0 |
| forward-big-s2 | 75 - an artifact of the initial study (`tasks/forward-big-s2/stages/p075.json`; outside the picture) | 2489 | 2489 | yes | 70 | 0 |
| forward-big-s2 | 80 - an artifact of the initial study (`tasks/forward-big-s2/stages/p080.json`; outside the picture) | 2568 | 2568 | yes | 70 | 0 |
| forward-big-s2 | 85 - an artifact of the initial study (`tasks/forward-big-s2/stages/p085.json`; outside the picture) | 2652 | 2652 | yes | 70 | 0 |
| forward-big-s2 | 90 - an artifact of the initial study (`tasks/forward-big-s2/stages/p090.json`; outside the picture) | 2741 | 2741 | yes | 70 | 0 |
| forward-big-s2 | 95 - an artifact of the initial study (`tasks/forward-big-s2/stages/p095.json`; outside the picture) | 2835 | 2835 | yes | 70 | 0 |
| forward-big-s2 | 100 - an artifact of the initial study (`tasks/forward-big-s2/stages/p100.json`; outside the picture) | 2934 | 2934 | yes | 70 | 0 |
| forward-big-s2 | 105 - an artifact of the initial study (`tasks/forward-big-s2/stages/p105.json`; outside the picture) | 3038 | 3038 | yes | 70 | 0 |
| forward-big-s2 | 110 - an artifact of the initial study (`tasks/forward-big-s2/stages/p110.json`; outside the picture) | 3147 | 3147 | yes | 70 | 0 |
| forward-big-s2 | 115 - an artifact of the initial study (`tasks/forward-big-s2/stages/p115.json`; outside the picture) | 3261 | 3261 | yes | 70 | 0 |
| forward-big-s2 | 120 - an artifact of the initial study (`tasks/forward-big-s2/stages/p120.json`; outside the picture) | 3380 | 3380 | yes | 70 | 0 |
| forward-big-s2 | 125 - an artifact of the initial study (`tasks/forward-big-s2/stages/p125.json`; outside the picture) | 3504 | 3504 | yes | 70 | 0 |
| forward-big-s2 | 130 - an artifact of the initial study (`tasks/forward-big-s2/stages/p130.json`; outside the picture) | 3633 | 3633 | yes | 70 | 0 |
| forward-big-s2 | 135 - an artifact of the initial study (`tasks/forward-big-s2/stages/p135.json`; outside the picture) | 3767 | 3767 | yes | 70 | 0 |
| forward-little-s1 | 50 - an artifact of the initial study (`tasks/forward-little-s1/stages/p050.json`; outside the picture) | 1225 | 1225 | yes | 70 | 0 |
| forward-little-s1 | 70 - an artifact of the initial study (`tasks/forward-little-s1/stages/p070.json`; outside the picture) | 2415 | 2415 | yes | 70 | 0 |
| forward-little-s1 | 75 - an artifact of the initial study (`tasks/forward-little-s1/stages/p075.json`; outside the picture) | 2489 | 2489 | yes | 70 | 0 |
| forward-little-s1 | 80 - an artifact of the initial study (`tasks/forward-little-s1/stages/p080.json`; outside the picture) | 2568 | 2568 | yes | 70 | 0 |
| forward-little-s1 | 85 - an artifact of the initial study (`tasks/forward-little-s1/stages/p085.json`; outside the picture) | 2652 | 2652 | yes | 70 | 0 |
| forward-little-s1 | 90 - an artifact of the initial study (`tasks/forward-little-s1/stages/p090.json`; outside the picture) | 2741 | 2741 | yes | 70 | 0 |
| forward-little-s1 | 95 - an artifact of the initial study (`tasks/forward-little-s1/stages/p095.json`; outside the picture) | 2835 | 2835 | yes | 70 | 0 |
| forward-little-s1 | 100 - an artifact of the initial study (`tasks/forward-little-s1/stages/p100.json`; outside the picture) | 2934 | 2934 | yes | 70 | 0 |
| forward-little-s1 | 105 - an artifact of the initial study (`tasks/forward-little-s1/stages/p105.json`; outside the picture) | 3038 | 3038 | yes | 70 | 0 |
| forward-little-s1 | 110 - an artifact of the initial study (`tasks/forward-little-s1/stages/p110.json`; outside the picture) | 3147 | 3147 | yes | 70 | 0 |
| forward-little-s1 | 115 - an artifact of the initial study (`tasks/forward-little-s1/stages/p115.json`; outside the picture) | 3261 | 3261 | yes | 70 | 0 |
| forward-little-s1 | 120 - an artifact of the initial study (`tasks/forward-little-s1/stages/p120.json`; outside the picture) | 3380 | 3380 | yes | 70 | 0 |
| forward-little-s1 | 125 - an artifact of the initial study (`tasks/forward-little-s1/stages/p125.json`; outside the picture) | 3504 | 3504 | yes | 70 | 0 |
| forward-little-s1 | 130 - an artifact of the initial study (`tasks/forward-little-s1/stages/p130.json`; outside the picture) | 3633 | 3633 | yes | 70 | 0 |
| forward-little-s1 | 135 - an artifact of the initial study (`tasks/forward-little-s1/stages/p135.json`; outside the picture) | 3767 | 3767 | yes | 70 | 0 |
| forward-little-s2 | 50 - an artifact of the initial study (`tasks/forward-little-s2/stages/p050.json`; outside the picture) | 1225 | 1225 | yes | 70 | 0 |
| forward-little-s2 | 70 - an artifact of the initial study (`tasks/forward-little-s2/stages/p070.json`; outside the picture) | 2415 | 2415 | yes | 70 | 0 |
| forward-little-s2 | 75 - an artifact of the initial study (`tasks/forward-little-s2/stages/p075.json`; outside the picture) | 2489 | 2489 | yes | 70 | 0 |
| forward-little-s2 | 80 - an artifact of the initial study (`tasks/forward-little-s2/stages/p080.json`; outside the picture) | 2568 | 2568 | yes | 70 | 0 |
| forward-little-s2 | 85 - an artifact of the initial study (`tasks/forward-little-s2/stages/p085.json`; outside the picture) | 2652 | 2652 | yes | 70 | 0 |
| forward-little-s2 | 90 - an artifact of the initial study (`tasks/forward-little-s2/stages/p090.json`; outside the picture) | 2741 | 2741 | yes | 70 | 0 |
| forward-little-s2 | 95 - an artifact of the initial study (`tasks/forward-little-s2/stages/p095.json`; outside the picture) | 2835 | 2835 | yes | 70 | 0 |
| forward-little-s2 | 100 - an artifact of the initial study (`tasks/forward-little-s2/stages/p100.json`; outside the picture) | 2934 | 2934 | yes | 70 | 0 |
| forward-little-s2 | 105 - an artifact of the initial study (`tasks/forward-little-s2/stages/p105.json`; outside the picture) | 3038 | 3038 | yes | 70 | 0 |
| forward-little-s2 | 110 - an artifact of the initial study (`tasks/forward-little-s2/stages/p110.json`; outside the picture) | 3147 | 3147 | yes | 70 | 0 |
| forward-little-s2 | 115 - an artifact of the initial study (`tasks/forward-little-s2/stages/p115.json`; outside the picture) | 3261 | 3261 | yes | 70 | 0 |
| forward-little-s2 | 120 - an artifact of the initial study (`tasks/forward-little-s2/stages/p120.json`; outside the picture) | 3380 | 3380 | yes | 70 | 0 |
| forward-little-s2 | 125 - an artifact of the initial study (`tasks/forward-little-s2/stages/p125.json`; outside the picture) | 3504 | 3504 | yes | 70 | 0 |
| forward-little-s2 | 130 - an artifact of the initial study (`tasks/forward-little-s2/stages/p130.json`; outside the picture) | 3633 | 3633 | yes | 70 | 0 |
| forward-little-s2 | 135 - an artifact of the initial study (`tasks/forward-little-s2/stages/p135.json`; outside the picture) | 3767 | 3767 | yes | 70 | 0 |
| reverse-big-s1 | 50 - an artifact of the initial study (`tasks/reverse-big-s1/stages/p050.json`; outside the picture) | 1225 | 1225 | yes | 70 | 0 |
| reverse-big-s1 | 70 - an artifact of the initial study (`tasks/reverse-big-s1/stages/p070.json`; outside the picture) | 2415 | 2415 | yes | 70 | 0 |
| reverse-big-s1 | 75 - an artifact of the initial study (`tasks/reverse-big-s1/stages/p075.json`; outside the picture) | 2489 | 2489 | yes | 70 | 0 |
| reverse-big-s1 | 80 - an artifact of the initial study (`tasks/reverse-big-s1/stages/p080.json`; outside the picture) | 2568 | 2568 | yes | 70 | 0 |
| reverse-big-s1 | 85 - an artifact of the initial study (`tasks/reverse-big-s1/stages/p085.json`; outside the picture) | 2652 | 2652 | yes | 70 | 0 |
| reverse-big-s1 | 90 - an artifact of the initial study (`tasks/reverse-big-s1/stages/p090.json`; outside the picture) | 2741 | 2741 | yes | 70 | 0 |
| reverse-big-s1 | 95 - an artifact of the initial study (`tasks/reverse-big-s1/stages/p095.json`; outside the picture) | 2835 | 2835 | yes | 70 | 0 |
| reverse-big-s1 | 100 - an artifact of the initial study (`tasks/reverse-big-s1/stages/p100.json`; outside the picture) | 2934 | 2934 | yes | 70 | 0 |
| reverse-big-s1 | 105 - an artifact of the initial study (`tasks/reverse-big-s1/stages/p105.json`; outside the picture) | 3038 | 3038 | yes | 70 | 0 |
| reverse-big-s1 | 110 - an artifact of the initial study (`tasks/reverse-big-s1/stages/p110.json`; outside the picture) | 3147 | 3147 | yes | 70 | 0 |
| reverse-big-s1 | 115 - an artifact of the initial study (`tasks/reverse-big-s1/stages/p115.json`; outside the picture) | 3261 | 3261 | yes | 70 | 0 |
| reverse-big-s1 | 120 - an artifact of the initial study (`tasks/reverse-big-s1/stages/p120.json`; outside the picture) | 3380 | 3380 | yes | 70 | 0 |
| reverse-big-s1 | 125 - an artifact of the initial study (`tasks/reverse-big-s1/stages/p125.json`; outside the picture) | 3504 | 3504 | yes | 70 | 0 |
| reverse-big-s1 | 130 - an artifact of the initial study (`tasks/reverse-big-s1/stages/p130.json`; outside the picture) | 3633 | 3633 | yes | 70 | 0 |
| reverse-big-s1 | 135 - an artifact of the initial study (`tasks/reverse-big-s1/stages/p135.json`; outside the picture) | 3767 | 3767 | yes | 70 | 0 |
| reverse-big-s2 | 50 - an artifact of the initial study (`tasks/reverse-big-s2/stages/p050.json`; outside the picture) | 1225 | 1225 | yes | 70 | 0 |
| reverse-big-s2 | 70 - an artifact of the initial study (`tasks/reverse-big-s2/stages/p070.json`; outside the picture) | 2415 | 2415 | yes | 70 | 0 |
| reverse-big-s2 | 75 - an artifact of the initial study (`tasks/reverse-big-s2/stages/p075.json`; outside the picture) | 2489 | 2489 | yes | 70 | 0 |
| reverse-big-s2 | 80 - an artifact of the initial study (`tasks/reverse-big-s2/stages/p080.json`; outside the picture) | 2568 | 2568 | yes | 70 | 0 |
| reverse-big-s2 | 85 - an artifact of the initial study (`tasks/reverse-big-s2/stages/p085.json`; outside the picture) | 2652 | 2652 | yes | 70 | 0 |
| reverse-big-s2 | 90 - an artifact of the initial study (`tasks/reverse-big-s2/stages/p090.json`; outside the picture) | 2741 | 2741 | yes | 70 | 0 |
| reverse-big-s2 | 95 - an artifact of the initial study (`tasks/reverse-big-s2/stages/p095.json`; outside the picture) | 2835 | 2835 | yes | 70 | 0 |
| reverse-big-s2 | 100 - an artifact of the initial study (`tasks/reverse-big-s2/stages/p100.json`; outside the picture) | 2934 | 2934 | yes | 70 | 0 |
| reverse-big-s2 | 105 - an artifact of the initial study (`tasks/reverse-big-s2/stages/p105.json`; outside the picture) | 3038 | 3038 | yes | 70 | 0 |
| reverse-big-s2 | 110 - an artifact of the initial study (`tasks/reverse-big-s2/stages/p110.json`; outside the picture) | 3147 | 3147 | yes | 70 | 0 |
| reverse-big-s2 | 115 - an artifact of the initial study (`tasks/reverse-big-s2/stages/p115.json`; outside the picture) | 3261 | 3261 | yes | 70 | 0 |
| reverse-big-s2 | 120 - an artifact of the initial study (`tasks/reverse-big-s2/stages/p120.json`; outside the picture) | 3380 | 3380 | yes | 70 | 0 |
| reverse-big-s2 | 125 - an artifact of the initial study (`tasks/reverse-big-s2/stages/p125.json`; outside the picture) | 3504 | 3504 | yes | 70 | 0 |
| reverse-big-s2 | 130 - an artifact of the initial study (`tasks/reverse-big-s2/stages/p130.json`; outside the picture) | 3633 | 3633 | yes | 70 | 0 |
| reverse-big-s2 | 135 - an artifact of the initial study (`tasks/reverse-big-s2/stages/p135.json`; outside the picture) | 3767 | 3767 | yes | 70 | 0 |
| reverse-little-s1 | 50 - an artifact of the initial study (`tasks/reverse-little-s1/stages/p050.json`; outside the picture) | 1225 | 1225 | yes | 70 | 0 |
| reverse-little-s1 | 70 - an artifact of the initial study (`tasks/reverse-little-s1/stages/p070.json`; outside the picture) | 2415 | 2415 | yes | 70 | 0 |
| reverse-little-s1 | 75 - an artifact of the initial study (`tasks/reverse-little-s1/stages/p075.json`; outside the picture) | 2489 | 2489 | yes | 70 | 0 |
| reverse-little-s1 | 80 - an artifact of the initial study (`tasks/reverse-little-s1/stages/p080.json`; outside the picture) | 2568 | 2568 | yes | 70 | 0 |
| reverse-little-s1 | 85 - an artifact of the initial study (`tasks/reverse-little-s1/stages/p085.json`; outside the picture) | 2652 | 2652 | yes | 70 | 0 |
| reverse-little-s1 | 90 - an artifact of the initial study (`tasks/reverse-little-s1/stages/p090.json`; outside the picture) | 2741 | 2741 | yes | 70 | 0 |
| reverse-little-s1 | 95 - an artifact of the initial study (`tasks/reverse-little-s1/stages/p095.json`; outside the picture) | 2835 | 2835 | yes | 70 | 0 |
| reverse-little-s1 | 100 - an artifact of the initial study (`tasks/reverse-little-s1/stages/p100.json`; outside the picture) | 2934 | 2934 | yes | 70 | 0 |
| reverse-little-s1 | 105 - an artifact of the initial study (`tasks/reverse-little-s1/stages/p105.json`; outside the picture) | 3038 | 3038 | yes | 70 | 0 |
| reverse-little-s1 | 110 - an artifact of the initial study (`tasks/reverse-little-s1/stages/p110.json`; outside the picture) | 3147 | 3147 | yes | 70 | 0 |
| reverse-little-s1 | 115 - an artifact of the initial study (`tasks/reverse-little-s1/stages/p115.json`; outside the picture) | 3261 | 3261 | yes | 70 | 0 |
| reverse-little-s1 | 120 - an artifact of the initial study (`tasks/reverse-little-s1/stages/p120.json`; outside the picture) | 3380 | 3380 | yes | 70 | 0 |
| reverse-little-s1 | 125 - an artifact of the initial study (`tasks/reverse-little-s1/stages/p125.json`; outside the picture) | 3504 | 3504 | yes | 70 | 0 |
| reverse-little-s1 | 130 - an artifact of the initial study (`tasks/reverse-little-s1/stages/p130.json`; outside the picture) | 3633 | 3633 | yes | 70 | 0 |
| reverse-little-s1 | 135 - an artifact of the initial study (`tasks/reverse-little-s1/stages/p135.json`; outside the picture) | 3767 | 3767 | yes | 70 | 0 |
| reverse-little-s2 | 50 - an artifact of the initial study (`tasks/reverse-little-s2/stages/p050.json`; outside the picture) | 1225 | 1225 | yes | 70 | 0 |
| reverse-little-s2 | 70 - an artifact of the initial study (`tasks/reverse-little-s2/stages/p070.json`; outside the picture) | 2415 | 2415 | yes | 70 | 0 |
| reverse-little-s2 | 75 - an artifact of the initial study (`tasks/reverse-little-s2/stages/p075.json`; outside the picture) | 2489 | 2489 | yes | 70 | 0 |
| reverse-little-s2 | 80 - an artifact of the initial study (`tasks/reverse-little-s2/stages/p080.json`; outside the picture) | 2568 | 2568 | yes | 70 | 0 |
| reverse-little-s2 | 85 - an artifact of the initial study (`tasks/reverse-little-s2/stages/p085.json`; outside the picture) | 2652 | 2652 | yes | 70 | 0 |
| reverse-little-s2 | 90 - an artifact of the initial study (`tasks/reverse-little-s2/stages/p090.json`; outside the picture) | 2741 | 2741 | yes | 70 | 0 |
| reverse-little-s2 | 95 - an artifact of the initial study (`tasks/reverse-little-s2/stages/p095.json`; outside the picture) | 2835 | 2835 | yes | 70 | 0 |
| reverse-little-s2 | 100 - an artifact of the initial study (`tasks/reverse-little-s2/stages/p100.json`; outside the picture) | 2934 | 2934 | yes | 70 | 0 |
| reverse-little-s2 | 105 - an artifact of the initial study (`tasks/reverse-little-s2/stages/p105.json`; outside the picture) | 3038 | 3038 | yes | 70 | 0 |
| reverse-little-s2 | 110 - an artifact of the initial study (`tasks/reverse-little-s2/stages/p110.json`; outside the picture) | 3147 | 3147 | yes | 70 | 0 |
| reverse-little-s2 | 115 - an artifact of the initial study (`tasks/reverse-little-s2/stages/p115.json`; outside the picture) | 3261 | 3261 | yes | 70 | 0 |
| reverse-little-s2 | 120 - an artifact of the initial study (`tasks/reverse-little-s2/stages/p120.json`; outside the picture) | 3380 | 3380 | yes | 70 | 0 |
| reverse-little-s2 | 125 - an artifact of the initial study (`tasks/reverse-little-s2/stages/p125.json`; outside the picture) | 3504 | 3504 | yes | 70 | 0 |
| reverse-little-s2 | 130 - an artifact of the initial study (`tasks/reverse-little-s2/stages/p130.json`; outside the picture) | 3633 | 3633 | yes | 70 | 0 |
| reverse-little-s2 | 135 - an artifact of the initial study (`tasks/reverse-little-s2/stages/p135.json`; outside the picture) | 3767 | 3767 | yes | 70 | 0 |

## How to Check and Continue

Matrix `matrix.bin` observational A, later 70 lineage B; format `<8sII`, magic `MTGF2V1\0`number of lines, dimensionality 19937; every line 2493 little-endian byte.
`observations.json` number puzzle, bit RHS. `stages/*.json` retain the ranks and certificates of each data addition.
`witnesses.json` contains the basic state and directions; `verification.json` Independent Rankings and Regular Testing C-MT. Certificate for a non-compatible system 0=1.
Commands for launch, continuation and verification are given in README Completed stages with matching hashes are skipped.

Interpretations and corrections of the conclusions are stored separately in NOTES.md experiment; this numerical report is reassembled from JSON.
