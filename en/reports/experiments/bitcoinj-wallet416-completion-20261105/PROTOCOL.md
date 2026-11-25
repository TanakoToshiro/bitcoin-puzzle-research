> English machine translation of the [Russian source](<../../../../ru/reports/experiments/bitcoinj-wallet416-completion-20261105/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/03-wallets.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# B4-R3 - completion of the interrupted Bitcoin Wallet/bitcoinj followup

05.11.2026, Europe/Moscow. The goal is the general acceptance of specific issues B4-R2, comparison 0.12/0.12.1/0.12.2 performance Android restore/backup-methodically4.16. Not claiming to check everything Android-applications.

All previous files are read unchanged. The new results are here GPU, The cloud, real wallets and Bitcoin network They're not used Java works only with synthetic data; output paths are runs/core-runs.

Order:

1. `collect.py`Checking the last active records of old download manifests, copying and loading of source materials on fixed commits. A failed old attempt to get an absentee WalletMaintenanceDialogFragment is maintained as an inaccessible source; the actual MaintenanceDialogFragment Repeated historical records fetch-The journal is not treated as simultaneously operating pins.
2. `audit_saved.py`:testing of the former input digests, stdout/results,810 children, protobuf and3403 raw-reuse In the original migration-Incorrect inspections have been found A/B: they have65 hex digits and matching upper128 bit32 So accepting the old inference doesn't mean accepting that control design.
3. `run_core.py`: replica LifecycleHarness replaceable A/B The clear, visible, and the visible assertions range/differential entropy. Diffs Repeat of the affected tests is justified by a defect in the inputs auto-upgrade probe internal watchdog2s, external timeout10s. Lifecycle≤60s, compile≤45s, heap512MiB. Runner It only completes its child processes.
4. `prepare.py`/`run_app.py`: literally highlighted five methods WalletUtils (restore protobuf/Base58, read/write keys), intact Crypto.java and Iso8601Format.java sixty source tags. Adapters: mainnet Constants, baseline BACKUP_MAX_CHARS, DateUtils.SECOND_IN_MILLIS hollow SuppressLint-It's an abstract desktop-JVM Execution of methods, not emulator Android/GUI. For each profile, the appropriate release JAR bitcoinj.
5. `verify.py`: independent BIP39/PBKDF2/BIP32 and EC through Python/cryptography; wire-parser protobuf without bitcoinj; independent AES/scrypt/MD5 decode synthetic ciphertext with known passwords child, public/chaincode, choice migration origin format backup. Passwords aren't matched.
6. `finalize.py`: verification of origin, source/build/dependency/output pins, general ACCEPTANCE and FINAL_MANIFEST. The overall coverage table refers to this new result; the original partial STATUS It's still history.

Three bitcoinj-profile; six Android-profile 4.0/4.07/4.11/4.14/4.15/4.16. Nana app-profile:11 valid textual fixtures,6 malformed/network fixtures, protobuf restore mass-produced256 receive+3 change, external backup and Unicode control. Before the control migration, a clear upgrade; implicit upgrade separately examined by a limited probe.

First app-erroneous A/B preserved as a preparatory and **not included in the final admission**. LATEST_RUN/LATEST_CORE indicate corrected runs. Old ones root/entropy synthetic inputs not pass off as real seed-Author's candidates.

Repeat on this PC:

> Executable code/The commands are omitted in the documentary copy.


Use already established Java8u302 and Python3.11/cryptography, and also fixed JAR from the previous stage encrypted/private The files created by the stand are synthetic. Control times are not a recovery evaluation Puzzle.
