> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/bx-bip44-20261101/48271/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/01-historical-generators.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# E9g minimum BIP44-set 16 scheme

01.11.2026. The user has allowed the launch of the following BIP44-Isolated version, old science files don't change.

Two RNG: minstd_rand0/16807 and minstd_rand/48271, mod2147483647, new state%255 Initial states1..2147483646. Entropy16/32 byte BIP32 master, **without BIP39/PBKDF2**.

Parents are exactly two: path0=m/44'/0'/0'/0 (external), path1=m/44'/0'/0'/1 (change). Last one child normal, index=puzzle−1+offset, offset0/1. The mask is old:2^(i−1)+(child mod2^(i−1)). Totally8 circuitry on the generator,16 In the series scheme=length_id*4+path*2+offset. We can't count the old ones16 GPU-slots16 new circuits of one generator.

Common parent account=m/44'/0'/0'is calculated once on entropy; branch0/1 use common public key. CUDA/CPU/Python must match all intermediate nodes and the scheme count. Hardened only44',0',0'; branch last index standard BIP44 existed2014, but its application by the author puzzle not established; raw BX entropy→BIP32 It remains a concrete hypothesis.

Before searching: re-check sources and old completed series without computation. 14 historical BIP32-vectors40 parentage/360 children;256×8 random fingerprint and516×8 contiguous/tail;8 synthetic Positive schemes with negative/holdout/early training mutations;20 RNG-vectors; precise HMAC payloads; CPU baseline/filter; slippery/overflow; stop/resume and candidate halt. Add a direct reconciliation of nodes m/44',m/44'/0',m/44'/0'/0- both branches both RNG.

Pilot4×1048576 generator, block256. Full passes consecutive:2048 block, last1048574, spot[1,2147483647). Checkpoints are atomic, SHA-chain lock; Error fails to cover. Bundling uses corrected re-reading STATUS on DrvFS. Primary training candidate Stop the series for an independent address check16 listed BIP44-chains entropy/accounts/The tracks are not included; the cloud is not rented.

Core multiplier=48271; schemes=8.
