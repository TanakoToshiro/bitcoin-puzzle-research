> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/parallel-wallets-20261102/04-bitcoinj/CROSS_FINDINGS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/03-wallets.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# Findings for neighboring tasks - without changing their folders

For No5 (MultiBit historical HD) no6 (Hive), **only if their specific version
really does bitcoinj 0.12**:

- We cannot bring out the convenience of mass private dump single-handed
  `--lookahead-size` into WalletTool. The option applies in add-key, single-handed
  fresh key, ? dump use getKeys(false) and issued counters.
- The filter of this version also includes an index equal to issuedCount, whenever
  It's calculated. Leaf private bytes not stored, but available through private ancestors.
- V xpub API fixed version bytes; detached parent fingerprint maybe
  line up point/chaincode. Compare semantic fields.

Source: bitcoinj commit `83a9a71f3fff3f223d0737ad758b519a39dbbd62`,
[WalletTool](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/tools/src/main/java/org/bitcoinj/tools/WalletTool.java#L925),
[getKeys](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/wallet/DeterministicKeyChain.java#L1054).
Product dependency MultiBit/Hive They weren't installed here.
