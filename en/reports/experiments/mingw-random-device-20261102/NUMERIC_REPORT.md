> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mingw-random-device-20261102/NUMERIC_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# MINGW-RD-01 - numerical results

Time to end UTC: 2026-11-01T21:55:54.783849+00:00. Calculation CPU, launching WSL and checks: 2.068 c. Preparation/loading/The assembly is not included at this time.

MT seed: 5489; first exit: 3499211612; normalization minstd: 1351727965.

| Entropy-model | Scheme | contradiction | Gone No1–50 | First erroneous No: min–max |
|---|---:|---:|---:|---:|
| sx_uniform8_32 | 20 | 20 | 0 | 2–4 |
| sx_uniform16_high8_32 | 20 | 20 | 0 | 2–4 |
| bx_mod255_16 | 20 | 20 | 0 | 2–5 |
| bx_mod255_32 | 20 | 20 | 0 | 2–4 |

Totally 80 combinations, 60 Different Predicted Sequences No1–50, 3 differential entropy-It's real, it's real holdout calculated: False.

| Monitoring | Number of |
|---|---:|
| Outputs MT version GCC (Three versions) | 10000 |
| Coincidences native/Python distribution | 1590 |
| New facilities / explicit seed / faulty token | 3 / 3 / 3 |
| Addresses of known keys / affine-address-check | 83 / 8 |
| Synthetic HD-predictive EC | 80 |
| Positive / negative scenarios | 20 / 20 |
| Immutable files received E12 | 457 |

## Saved entropy

- `sx_uniform8_32`: `1faf8378a55a563e4b21c79a499b2465269458b2abe5e194f539a22e134eb11c`
- `sx_uniform16_high8_32`: `1faf8378a55a563e4b21c79a499b2465269458b2abe5e194f539a22e134eb11c`
- `bx_mod255_16`: `b18fc09d635a869c6dd5927d999fba7a`
- `bx_mod255_32`: `b18fc09d635a869c6dd5927d999fba7a94953849623c227a1d705c22f746c2e6`

## Limits to the coincidence of two SX-version

On a fixed state, two SX entropy It's not the same algorithm: stored control with state=5489 gives different results; see para. NON_EQUIVALENCE_WITNESS.json - an artifact of the initial study (`NON_EQUIVALENCE_WITNESS.json`; outside the picture.

Downloads: successful 26, HTTP404 3, Unanswered network errors 21. All attempts: SOURCES.json.

Precise predictions, parameters and the first contradiction of each combination: PREDICTIONS.json - an artifact of the initial study (`PREDICTIONS.json`Match of individual minor bits or No1 The number of hypotheses does not measure the probability that an author will use a program.
