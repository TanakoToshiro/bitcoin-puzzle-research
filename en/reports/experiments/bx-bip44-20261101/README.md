> English machine translation of the [Russian source](<../../../../ru/reports/experiments/bx-bip44-20261101/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E9g - minimal BIP44-path BX, pass-through

The user has authorized the launch of the next stage16 new circuits: two RNG16807/48271 × entropy16/32 × parentage m/44'/0'/0'/0 and m/44'/0'/0'/1 × final index i−1/i. Last one child **normal**. Raw BX-bytes are transmitted to BIP32; BIP39/PBKDF2 Not here. Others accounts, lengths and paths are not included. [Protocol](<PROTOCOL.md>).

The status of the whole series [RESULTS.md](<RESULTS.md>), STATUS.json, stdout.log/stderr.log. Every generator is performing8 diagrams for the state; two complete passages on2^31−2 states performed **consistently** on3070 Ti Laptop. Last block1048574, others1048576; sum of each2048 The end of the series,4096. Root COMPLETE.json It only appears after two complete audits16 not to all wallets or the standard BIP44.

From this folder WSL Ubuntu-24.04:

> Executable code/The commands are omitted in the documentary copy.


SERIES.lock Prevents simultaneous second launch STOP at the root of the series; the bandage will pass it to the worker worker. After finding out the reasons for continuing to remove STOP root and subfolder full, repeat run_series.py. Finished blocks are checked and skipped. Candidate/error They stop the series; they cannot be automatically bypassed.

Data in16807/ and48271/: engine.cu, CPU-verifier, new Python reference, precise BIP44-standards, ACCOUNT_EXPECTED/CHECK.json, controls/, EXTRA_CONTROLS.json, ACCEPTANCE.json, FINAL_MANIFEST.json, pilots/, full/blocks/ and FULL_AUDIT.json. Restored corrected binding repeats reading of atomically updated STATUS onDrvFS and does not interrupt the calculation due to the temporary inaccessibility of the report.

Preparation: setup.py/prepare_inputs.py carried outWindows Python3.11 venv; build_cpu.sh and build_controls.sh inWSL. These commands are not needed for renewal and must not rewrite the accepted version/The data needs a new version. setup.py saved as a journal of origin; logical corrections of preparation and binding are noted inJOURNAL.md. Old ones snapshots and checkpoints They don't change. The cloud doesn't rent, the power settings don't change; the computer has to stay on.

Basis of paths: [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki), Bitcoin coin_type0, account0, external0/change1. This is a historically possible scheme, but not an established program of the author puzzle. GPU-filter49 junior-bits50; Rare candidates check out CPU no1–50, then51+. When matching, an independent address check is required.
