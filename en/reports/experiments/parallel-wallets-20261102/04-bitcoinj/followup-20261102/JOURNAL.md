> English machine translation of the [Russian source](<../../../../../../ru/reports/experiments/parallel-wallets-20261102/04-bitcoinj/followup-20261102/JOURNAL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../../README.md>) · [Direction](<../../../../../topics/03-wallets.md>) · [Documents of the series](<../../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../../docs/LATEST_RESULTS.md>).

# B4-R2 magazine

## 02.11.2026 second passage

Read it STATUS, RESULTS, JOURNAL, PROTOCOL and MODEL first phase.
New directions: delta 0.12.1/0.12.2, HD rotation, encryption/restore,
necessary low-bit conditions of re-issuance raw child. Previous results
They do not restart or overwrite.

## 02.11.2026 - new sources and clarification encryption control

Releases fixed bitcoinj 0.12.1/0.12.2 and Android 4.07/4.11/4.15/4.16.
Found primary fix commit d8aa5dc01a299008b88da22785ef8ae4660e79ce from
17.12.2014: restore old-timer Base58 backup beforehand Wallet() new HD
seed, now creates non-HD KeyChainGroup and import loose keys before Wallet().
Also found >= instead > into private-dump filter, inclusive rotation cutoff
and permitting re-use upgrade add-on chain.

First LifecycleHarness on 0.12 It ended on the incorrect assumption that
currentReceiveKey afterward encrypt necessarily plaintext ancestor.
V protobuf secret/cached-seed fields They're gone now, but in-memory currentKeys
They may remain attached to the previous private objects. Failed launch
Retained; modified controls measure separately immediate/reloaded/decrypted
cache and active-chain lookup, It's not a big difference local synthetic probe,
not extracting a secret from the real backup and an undiscovered key Puzzle.

Nana 0.12.1 implicit auto-upgrade stopped currentReceiveKey for non-HD
wallet; First launch completed by 90 s Diagnostic repeat has been maintained
lively stdout to this point; the external jstack I didn't connect 10 s. Not count
timeout model-refutation or proof deadlock. The source shows
currentKey s readLock and upgrade s writeLock; Separate internal
watchdog probe with stack capture. For the remaining scenarios, an explicit
public upgrade, unedited bitcoinj. Verification of post-processes
completion tool session I didn't find the rest java processes.
