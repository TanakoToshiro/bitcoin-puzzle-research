> English machine translation of the [Russian source](<../../../../ru/reports/experiments/python-expanded-20261030/ADJACENT_VERSIONS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Comparison of neighboring historical versions

It's a comparison of source materials, not a separate assembly/performance runtime. Compared whole Modules/_randommodule.c and Lib/random.py, preserved commit, SHA-256 and diff. In case of any difference between tokens, the automatic extension of negative output is not performed.

| Version | standard | Both files matched with accuracy to the gaps |
|---|---|---|
| 2.7.8 | 2.7.9 | yes |
| 3.4.1 | 3.4.2 | No – a separate audit is required diff |

V Python 3.4.1 the only difference between the wrapper 3.4.2 situated triangular(), Which is not called here AST method __init__, seed, randrange, randint, _randbelow: They match. C-The kernel matches bytes, so the algorithms used to give and integer seeding equivalent for both adjacent versions; this is a source equality transfer, not a statement to launch four runtime.

Machine result and references to official commit - an artifact of the initial study (`adjacent-version-audit/AUDIT.json`The match refers to the source of the generator and Python-curtain-wraps with the same mathematical/Other versions, modified builds and not covered by the protocol API They're not considered verified.
