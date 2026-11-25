> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-structure-20261102/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-01 results

Run: `SEQ-01-0681891fc7a8`Updated UTC 2026-11-02T01:57:37.007282+00:00.

Hypotheses, limitations, parameters and criteria: [PROTOCOL.md](<PROTOCOL.md>).
History: [JOURNAL.md](<JOURNAL.md>)Full entrances/version/hashes: MANIFEST.json - an artifact of the initial study (`MANIFEST.json`; outside the picture.

Zero calibration: **1023/1023** sequences.

Controls: CONTROLS.json - an artifact of the initial study (`CONTROLS.json`; outside the picture), initial examples CONTROL_FIXTURES.json - an artifact of the initial study (`CONTROL_FIXTURES.json`; outside the picture.

| The family | Maximum | Exceeding in null | MC p | Holm p | 95% MC interval |
|---|---:|---:|---:|---:|---|
| A | 0.000000 | 1023 | 1.000000 | 1.000000 | 0.996401–1.000000 |
| B | 1.677051 | 830 | 0.811523 | 1.000000 | 0.785993–0.834879 |
| C | 3.679569 | 125 | 0.123047 | 0.369141 | 0.102741–0.143841 |

A - exact adjusted dependencies; B fixed single-transition predictors; C order/frequency/blocks.
p refers to the maximum of the whole family, and not to one selected after viewing the formula. Holm It counts three families.
MC-The intervals refer to the frequency of excesses in the simulation, not to the accuracy of the prediction.

## Accurate models

Status counters:

```json
{
  "affine/inconsistent": 68,
  "polynomial/inconsistent": 207,
  "xor/inconsistent": 576,
  "xor/unique": 1,
  "xor/fitted": 1,
  "xor/perfect_test": 0
}
```

| The family | b / bit | Step / phase | Mistake No51–70 | Mistake No75–135 | Score |
|---|---|---|---:|---:|---:|
| xor | 1 / 23 | 3 / 2 | 3/6 | 1/4 | 0.0000 |

Showed before 12 best; all coefficients, ambiguous affine-families and conditional forecasts: REAL.json - an artifact of the initial study (`REAL.json`; outside the picture.
Status inconsistent It means that the exact model is in conflict with the learning model, and the prediction error excludes the specific recursion found in the declared index display.

## The Best Diagnostic Predictors

| Formula | b / step / shift | Orientation | Test bits | Coincidence | Score |
|---|---|---:|---:|---:|---:|
| leftxor | 16 / 1 / 1 | 1 | 320 | 54.688% | 1.6771 |
| xor13 | 2 / 2 / 0 | 1 | 40 | 62.500% | 1.5811 |
| rightxor | 8 / 4 / 2 | 1 | 160 | 56.250% | 1.5811 |
| leftxor | 4 / 4 / 3 | -1 | 80 | 58.750% | 1.5652 |
| rightxor | 8 / 5 / 3 | 1 | 160 | 58.750% | 1.5112 |
| linear | 32 / 5 / 0 | -1 | 640 | 54.219% | 1.5000 |
| xor13 | 1 / 2 / 0 | 1 | 20 | 65.000% | 1.3416 |
| repeat | 2 / 4 / 0 | -1 | 40 | 62.500% | 1.2792 |
| leftxor | 8 / 4 / 5 | -1 | 160 | 55.000% | 1.2127 |
| rightxor | 16 / 5 / 3 | 1 | 320 | 53.438% | 1.2070 |

These are selected maxima, not an independent estimate of future accuracy. Dependent bit errors are not supplied with misleading binomials CI; The output is determined by the calibration of the entire search.

## The greatest deviations of order

| Type | Bit / width | Parameter | Sizes | Absolutely score |
|---|---:|---|---|---:|
| phase | 2 | [5, 3] | 13/54 | 3.6796 |
| phase | 3 | [5, 0] | 14/52 | 3.3577 |
| lag | 7 | 4 | 58/58 | 3.1514 |
| block | 2 | [16, 0] | 13/54 | 3.0617 |
| phase | 14 | [3, 1] | 19/36 | 3.0419 |
| phase | 3 | [5, 2] | 13/53 | 3.0294 |
| lag | 8 | 5 | 56/56 | 2.9399 |
| phase | 3 | [10, 2] | 6/60 | 2.7247 |
| lag | 14 | 6 | 49/49 | 2.7143 |
| lag | 22 | 11 | 36/36 | 2.6667 |

Total fixed predictors: 475; statistician of order: 1275.

## Permissible conclusion

No family has reached the general level 0.01 after calibrating the entire search and Holm. In the following short rules/No reproducible advantage over random control sequences was found.

It's not proof that there are no connections 32 bit, specific orders/lagoon/phases, only exact family models A, A small set of solutions that we've already studied, and weak and complex connections can go unnoticed.
The real thing private key or a confirmed bit is not claimed by this report/Unconfirmed models are not the result of recovery.
Continuation: first look for a new valid family or additional data; do not endlessly search the formulas on the same sample without a new calibration.

