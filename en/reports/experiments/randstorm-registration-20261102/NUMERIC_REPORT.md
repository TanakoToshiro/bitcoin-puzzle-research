> English machine translation of the [Russian source](<../../../../ru/reports/experiments/randstorm-registration-20261102/NUMERIC_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/08-methodology-and-history.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# RND-02 - numerical results

UTC: 2026-11-01T22:41:50.551596+00:00; CPU/Node-audition 0.737c (without preparation)/network).

| Script | Keys | KSA | Math.random | WebCrypto | First KSA afterward _seed |
|---|---:|---:|---:|---:|---|
| normal | 1 | 1 | 0 | 1 | True |
| changed_password | 1 | 1 | 0 | 1 | True |
| changed_system_entropy | 1 | 1 | 0 | 1 | True |
| no_server_entropy | 1 | 1 | 0 | 1 | True |
| short_password | 0 | 0 | 0 | 1 | False |
| mismatch | 0 | 0 | 0 | 1 | False |
| uuid_network_error | 0 | 0 | 0 | 1 | False |
| already_has_address | 0 | 0 | 0 | 1 | False |
| counterfactual_no_webcrypto | 1 | 1 | 128 | 0 | True |
| injected_early_rc4_control | 1 | 1 | 0 | 1 | False |

False absent KSA It doesn't mean early launch KSA clearly artificial injected_early_rc4_control. It's in him WebCrypto He's already been called. counterfactual_no_webcrypto Control of the branch, not a description of the usual Chrome31.

Former immutable files RND-01: 78. The real search: False. The full historical browser was launched: False.
