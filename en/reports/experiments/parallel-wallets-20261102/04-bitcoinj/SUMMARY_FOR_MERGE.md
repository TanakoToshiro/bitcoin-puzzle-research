> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/parallel-wallets-20261102/04-bitcoinj/SUMMARY_FOR_MERGE.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/03-wallets.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# Task No4 — Bitcoin Wallet / bitcoinj

- A limited stage has been completed; the practical acceleration of the present Puzzle before 2^32 Not found.
- Bitcoin Wallet 4.0 fixed commit `5276722f9c73e540b9bbb128c37783bfd173af4a`, 03.10.2014; dependence bitcoinj 0.12 It's clear.
- Slice 4.16 at the cut-off date uses 0.12.2; behavior 0.12 It does not automatically transfer to it.
- Normal paths m/0'/0/i and m/0'/1/i; batch freshKeys(…,256) confirmed release JAR.
- Lookahead=500 giver 1332 public leaf records, but at zero issued counters routine dump He's drawing two lines of children.
- Filter `index > issuedCount` includes the first unissued child; E=256/I=0 gave 258 children's lines, not 256.
- Private dump lead out hex BigInteger and mnemonic/seed; leaf secret_bytes into protobuf absent, private It is counted through ancestors.
- The order of export - insertion, expansion of two branches and loose keys; The line number is not automatically equal to child index.
- New specific public anchor: Android Report Issue wallet dump contains Key to watch account xpub without private keys.
- Author's xpub/backup not found; prepared ARTIFACT_PROFILE.json, public inspector separate checker.
- Migration-prefix The limitation is verified precisely: if135 was source old raw key, remains 2^122 entropy-prefix candidates; weak RNG It wasn't supposed to.
- Found edge cases IL=n accepted retry 0/1/3/6/10; tested JAR, There is no practical connection for the usual keys.
- Historical JUnit: 2 test/12 xkey-knots; Java harness 75 checks; Python 15929 checks, 8702 toy prefix-systems, 3222 Java nodes independently verified.
- 4/4 conditional synthetic №71 and 16 negative; by 79 synthetic masks This is the same adapter as before HD-01 Formulas, not a new attack.
- S account xpub prognosis does not restore account scalar/master/seed; hardened m→m/0' remains a separate boundary.
- Bottom line: [RESULTS.md](<RESULTS.md>); exact model: [MODEL_AND_LIMITS.md](<MODEL_AND_LIMITS.md>); number tables: [NUMERIC_REPORT.md](<NUMERIC_REPORT.md>).
