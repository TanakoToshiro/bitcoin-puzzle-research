> English machine translation of the [Russian source](<../../../../ru/reports/experiments/puzzle-key-transform-audit-20261102-v2/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/07-masks-and-order.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# MAP-01 Transforming the original keys into puzzle-keynote

Checked out 32 precisely defined designs/control cases: 22 Contrary to at least one known key, 10 It's not excluded 32 Independent hypotheses: T30 repeat T22, T28–T30 formerly float-Conditional strings only work under their conditions.

| ID | Operation | Status | First Controversy No1–50 | First No51+ | Number of contradictions |
|---|---|---|---:|---:|---:|
| T01 | low | not_excluded | — | — | 0 |
| T02 | high | not_excluded | — | — | 0 |
| T03 | byte_reverse | not_excluded | — | — | 0 |
| T04 | bit_reverse | not_excluded | — | — | 0 |
| T05 | hex_prefix | not_excluded | — | — | 0 |
| T06 | hex_suffix | not_excluded | — | — | 0 |
| T07 | word32 | not_excluded | — | — | 0 |
| T08 | drop_hex | not_excluded | — | — | 0 |
| T09 | variable_hex | not_excluded | — | — | 0 |
| T10 | reverse_slice | not_excluded | — | — | 0 |
| T11 | hex_floor | contradiction | 2 | 51 | 45 |
| T12 | byte_floor | contradiction | 2 | 51 | 62 |
| T13 | literal_one | contradiction | 2 | 51 | 62 |
| T14 | unpadded_binary | contradiction | 4 | 54 | 40 |
| T15 | reverse_after | contradiction | 1 | 51 | 83 |
| T16 | uint32_final | contradiction | 33 | 51 | 51 |
| T17 | uint64_final | contradiction | — | 65 | 19 |
| T18 | uint32_residue | contradiction | 34 | 51 | 49 |
| T19 | uint64_residue | contradiction | — | 67 | 16 |
| T20 | js_shift | contradiction | 33 | 51 | 51 |
| T21 | float_residue | contradiction | — | 57 | 27 |
| T22 | float_final | contradiction | — | 54 | 29 |
| T23 | float_fullwidth | contradiction | 2 | 51 | 81 |
| T24 | float_word64 | contradiction | — | 57 | 27 |
| T25 | decimal_short_final | contradiction | — | 57 | 27 |
| T26 | decimal12_final | contradiction | 41 | 51 | 43 |
| T27 | decimal_short_residue | contradiction | — | 59 | 25 |
| T28 | old_random256 | contradiction | 2 | 51 | 81 |
| T29 | old_randomb | contradiction | — | 56 | 28 |
| T30 | old_uniform | contradiction | — | 54 | 29 |
| T31 | odd_hex_decode | contradiction | 1 | 51 | 42 |
| T32 | long_L_slice | contradiction | 2 | 51 | 65 |

All numerical strings are derived from REAL.json; exact-support and necessary-only differ CATALOG.json/PROTOCOL.md. Contradictions are deterministic, not statistical. Reviewed set No51+ It is not a new closed test.

## The main limitation

For T01–T10 constructed 830 prototype 829 Second different preimages; all direct substitutions checked. Which explains why individual end keys don't choose between the lower bits, the higher prefix, the byte reversal and a series of errors hex. Certificates do not have to belong to one person PRNG/HD-Validity of each chain raw as the scalar is marked separately.

### Variable length hex - separate conditional conclusion

If b multiplely4 and residual less b/4 hex-numbers, unpadded-prefix model T09 forceful x=residual: longer x first b/4 Numbers can't start from scratch. It's been proven exhaustively in the small world.

- №69: single-source x=`0x1d83275fb2bc7e0c`length 61 beat.

This is a conditional value on the model T09, The original key is not found, if the author took the full key256-The source code, such a case rejects T09; If variable source length is allowed, the model remains compatible. You need information about the source chain, not a second comb of known ones puzzle-keys.

You can't bear the negative BX/SX GPU-the result from a lower mask to a higher prefix or other rearranged raw. However, the string suffix of sufficient length with a precise mask (T06) correct-read32-(a) the words with precise gluing (T07) They are the same function as T01; new GPU-The series would duplicate the old one for them L at hex(long) Python2 It doesn't change the number either.

## What is established about loss of accuracy

Grid binary64 applies only to the exact whole value float/Number. The operation must either directly complete the processing, or go into the exact mask, as indicated in the model. If only the remainder is rounded, the remainder is checked, not the entire key decimal-The line, the grid is different: we use only the necessary limit17 meaningful decimals. Python2 str(float) has12 Values that have passed such a necessary filter are not declared achievable.

Binary and decimal representations tested separately, including counterexample1000000000000000100 counterintuitive binary64-wholesome1000000000000000128. Modern Node confirming ES5 on synthetic data; this is not a browser launch2015. Python2 It is based on its historical origins, executable It wasn't launched in this study.

## Sources and reproducibility

[CPython2.7.9 functions](https://github.com/python/cpython/blob/v2.7.9/Doc/library/functions.rst), [long parser](https://github.com/python/cpython/blob/v2.7.9/Objects/longobject.c), [float conversion](https://github.com/python/cpython/blob/v2.7.9/Objects/floatobject.c), [12-digit constant](https://github.com/python/cpython/blob/v2.7.9/Include/floatobject.h), [CPython3.4.2 functions](https://github.com/python/cpython/blob/v3.4.2/Doc/library/functions.rst), [ECMA-2625.1](https://262.ecma-international.org/5.1/)Pictures/URL/date/SHA256: SOURCE_MANIFEST.json.

Executable protocol: PROTOCOL.md/models.py; controls: CONTROLS.json and controls/JS_OUTPUT.json; check-up83 address coincurve+affine: DATA_VALIDATION.json; accurate counterexamples: REAL.json; prototypes PREIMAGES.json. Old sources recorded PRIOR_PINS.json They're tested after the series.

## The following justified action

By itself, this audit does not give a new bit No71 It doesn't install a generator. It's useful to look for a specific export format/fragment of a converting script or pair raw→puzzle. Prior to such an artifact, separate classes should be kept: the exact minor mask (including equivalent lines), the senior prefix and permutations before the mask GPU All the indistinguishable variants are not justified and not performed high/reverse from SEQ-05 It remains a separate conditional result.
