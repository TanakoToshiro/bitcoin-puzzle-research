> English machine translation of the [Russian source](<../../../../ru/reports/experiments/randstorm-my-wallet-20261102/NUMERIC_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/03-wallets.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# RND-01 - numerical controls

UTC: 2026-11-01T22:28:40.995111+00:00. Test cycle time: 6.778(c) preparation/No downloads included.

Scripts: 24; independently reproduced pool: 21; keys: 115; addresses (two formats): 230; affine-checks: 23; Statements on the impact of inputs: 19.

| Script | Math.random challenge | WebCrypto requests32-bit words) | RC4 KSA | Keys | Outcome |
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

## Metamorphic controls

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

All parameters are synthetic. `jan2015_fallback_raw` Expected blocking of library call without prior seed_large, Not an audit accident or a negative search puzzle. Version07.01.2015 peered RC4/keys/addresses, her full pool It didn't reproduce independently.

Real puzzle-keys checked: 0. Neither the search speed nor the successful attack on a real wallet is measured by this test.
