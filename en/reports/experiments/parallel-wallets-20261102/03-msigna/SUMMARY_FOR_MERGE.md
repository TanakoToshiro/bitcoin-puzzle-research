> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/parallel-wallets-20261102/03-msigna/SUMMARY_FOR_MERGE.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/03-wallets.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# №3 mSIGNA / CoinVault — 02.11.2026
1. Limited audit completed commit ace0c828bed7441ef6ddda314674d882ecf4dbbe,13.01.2015.
2. The regular path viewed is the usual additive path BIP32; acceleration of real71 Not received.
3. Confirmed source-level path New Keychain → unlock → View Private BIP32 → xprv → multibip32 in a cycle.
4. Straight GUI-export256 WIF presence CLI In all binary installers are not installed.
5. CoinDB paths: root/1/i change, root/2/i receiving; i=0...; additional bins3...; account name is not HD-level.
6. Common keychain equalize raw different accounts one-way bin/index; multisig-Addresses may vary.
7. Cosigner pubkeys re-sorted on each leaf; one-point script It's not equal to one chain.
8. Keychain identity=HASH160(pubkey||chaincode); `.pub`/account/bin archives They contain public parameters.
9. Bin export drop off index/name, but retains child metadata and bin-level point/chaincode.
10. Misguided preservation found parent scalar into child(i,true,empty_lock); staffed AccountBin use false.
11. A narrow scenario of the same raw This error is rejected: No2 and4 They demand the opposite parity.
12. Invalid child trigger exception nonautomatic skip; leading zeros standardly supplemented33 byte.
13. Independent model:12 historical vector nodes/24 xkeys;12 xkeys It is also checked with archives mSIGNA output.
14. Controls:256 children,32 public/private,32 shared-account,32000 small combinations,10 IL boundary,6 leading-zero.
15. All83 real-life solutions re-tested range/public/address; synthetic uses the same masks/omissions.
16. Main launch near4.06s CPU; It's control, not recovery. Original C++/Qt binaries They didn't start.
17. The real thing root/bin xpub No author; new keys found0, residual≤2^32 No charge.
18. Bottom line: [RESULTS.md](<RESULTS.md>); numbers: [NUMERIC_REPORT.md](<NUMERIC_REPORT.md>); profile: [ARTIFACT_PROFILE.md](<ARTIFACT_PROFILE.md>).
19. Second approach:308 native core cases,12 historical editorials,legacy123-byte public-export parser; [new-report](<round2/SUMMARY_FOR_MERGE.md>)Limitation C++-the failure to comply above relates to the first stage; GUI/ODB remain untested.
