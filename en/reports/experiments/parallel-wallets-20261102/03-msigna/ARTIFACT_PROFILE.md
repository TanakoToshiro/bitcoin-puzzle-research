> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/parallel-wallets-20261102/03-msigna/ARTIFACT_PROFILE.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/03-wallets.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# Profile of a potential public artifact

We do source URL/file SHA-256, proven origin, type root/bin/account export, compressed public point33 bytes + chaincode32 bytes, depth, parent_fp, child_num, identity HASH160(pubkey||chaincode). For account additionally threshold, list cosigners posture identity, bins, compressed_keys; check out Puzzle - clear-cut puzzle index → bin/child index. Name account It's not part of the derivation.

File `.pub`/account/bin — Boost text archive v2, not CSV/xpub. Fields are listed in RESULTS.md. In this work parser Boost archive not implemented and no real author file. Profile JSON receiver xpub and serves as a check on the couple point/chaincode/identity. Raw point without chaincode, HASH160 identity, parent fingerprint or Puzzle address Not enough.

Example SYNTHETIC: `runs/f38837a65fce/artifact_profile_example.json`Launch `python inspect_artifact.py <profile.json>` check-in Base58Check, length, mainnet version, curve point, root metadata and identity, lead out normal descendant. No network shipment/search/The content of the profile is not considered to be a proven affiliation Puzzle automatically.

Root xpub gives both regular branches1/2; bin xpub gives descendants his own bin. Bin export drop off index into0, retain child_num/depth/fingerprint inside keychain. For imported hardened-boundary master It's not restored by public derivation identity It does not distinguish a deliberately repeated pair point/chaincode modified metadata: The latter must be checked against the primary artifact.
