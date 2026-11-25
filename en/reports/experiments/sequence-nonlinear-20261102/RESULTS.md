> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-nonlinear-20261102/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-02 - numerical report

Run `SEQ-02-96af00787024`, UTC 2026-11-02T02:25:07.528651+00:00.
[Protocol](<PROTOCOL.md>), [journal](<JOURNAL.md>), inputs and versions - an artifact of the original study (`MANIFEST.json`; outside the picture.

Zero calibration: 1023/1023.

| The family | Options | Maximum | Exceeding null | MC p | Holm p | 95% MC interval |
|---|---:|---:|---:|---:|---:|---|
| A | 117 | 0.000000 | 1023 | 1.000000 | 1.000000 | 0.996401–1.000000 |
| B | 532 | 0.000000 | 1023 | 1.000000 | 1.000000 | 0.996401–1.000000 |
| C | 2952 | 2.439977 | 273 | 0.267578 | 0.802734 | 0.239972–0.295101 |

A: word-recursion with unknown coefficients; B: Boolean ANF/inter-bit interactions; C: nested ARX/AND/OR/mul grammar.
The interval refers to the probability of exceeding the zero maximum, not to the accuracy of future prediction.

## Statuses A

```json
{
  "AR2/tested": 23,
  "AR2/inconsistent": 23,
  "AR3/tested": 19,
  "AR3/inconsistent": 19,
  "quadratic1/tested": 25,
  "quadratic1/inconsistent": 25,
  "bilinear2/tested": 22,
  "bilinear2/inconsistent": 22,
  "quadratic2/tested": 11,
  "quadratic2/inconsistent": 11,
  "counter2/tested": 17,
  "counter2/inconsistent": 17
}
```

| Rule | Bit/width | Step | Test error | Errors additionally | Score |
|---|---|---:|---|---|---:|

There are no fits allowed to the forecast.
## Statuses B

```json
{
  "recursive/inconsistent": 248,
  "one_step/inconsistent": 284
}
```

| Rule | Bit/width | Step | Test error | Errors additionally | Score |
|---|---|---:|---|---|---:|

There are no fits allowed to the forecast.

## Grammar: the best options

| Form | b / step | Operations / ROL | Orientation | Coincidences | Score |
|---|---|---|---:|---|---:|
| rotate | 4 / 1 | sub,sub / 3 | -1 | 51/80 (63.75%) | 2.4400 |
| rotate | 4 / 2 | mul,xor / 3 | 1 | 49/80 (61.25%) | 2.0125 |
| right | 4 / 4 | mul,or / 0 | -1 | 49/80 (61.25%) | 1.8865 |
| rotate | 4 / 2 | mul,sub / 3 | 1 | 48/80 (60.00%) | 1.7393 |
| rotate | 16 / 1 | xor,mul / 3 | 1 | 175/320 (54.69%) | 1.6771 |
| left | 32 / 2 | sub,xor / 0 | 1 | 341/640 (53.28%) | 1.6602 |
| rotate | 32 / 2 | sub,xor / 1 | -1 | 341/640 (53.28%) | 1.6602 |
| rotate | 8 / 2 | and,add / 1 | 1 | 90/160 (56.25%) | 1.5811 |
| rotate | 8 / 3 | xor,and / 7 | -1 | 90/160 (56.25%) | 1.5811 |
| rotate | 8 / 3 | and,xor / 7 | -1 | 90/160 (56.25%) | 1.5811 |
| rotate | 4 / 3 | add,sub / 1 | -1 | 47/80 (58.75%) | 1.5652 |
| rotate | 4 / 3 | add,xor / 1 | -1 | 47/80 (58.75%) | 1.5652 |

All coefficients, ambiguities and forecasts - REAL.json - an artifact of the initial study (`REAL.json`Conditional predictions are not set bits of the real unsolved puzzle.

**No family has reached the level of 0.01 after calibrating the entire search and Holm.**

Negative inference does not exclude long nonlinear rules, unknown modules, other indices, cryptographic derivation, or remaining ambiguous families/The test is a historically studied value, not a fresh independent set, but a single high percentage among thousands of options is not proof of advantage.
