> English machine translation of the [Russian source](<../../../../ru/reports/experiments/export-order-electrum-20261103/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/07-masks-and-order.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# EXP-01 Historical order of export Electrum

**Exact order Electrum1.7.4 CSV reproduced and coincided with the present CPython2.7.9 on Windows x86/x64 and Linux x86_64.** Checked out21 platform/hash-regime,252 CSV-file,76776 linear/control hashes,546 All matches are accurate. CSV casually Windows CRCRLF historical open("w+").

The research is synthetic raw/master author, no new key Puzzle They're not rebuilt PyQt GUI It was not launched: the initial methods were performed in real life Python2 adaptable UI/storage/data; WIF-supplier1.9.8 Historical private derivation1.7.4 verified with independent coincurve Calculation.

## Example: the same synthetic wallet,256 receiving+3 change

| Runtime / hash-seed | №71 into CSV (index with)0) | Positions change (line with)1) | Mistakes of naivety map first256 masked keys |
|---|---|---|---:|
| amd64-unset | branch0, index84 | 83,99,114 | 255 |
| linux64-unset | branch0, index5 | 82,98,113 | 254 |
| x86-1 | branch0, index37 | 49,84,213 | 254 |
| x86-42 | branch0, index75 | 168,175,207 | 253 |
| x86-unset | branch0, index84 | 83,99,114 | 255 |

Naive card - inserted list imported→receiving→change, without dict The initial mandatory bit makes some of the first masked keys The metric is not a test of real decisions and does not assess the probability of the author's choice.

## What's established?

- Electrum1.7.4 build-up address→WIF dict export items(). The reshuffle depends on raw-addresses, original master, hash-secret, History of inserts and table size hash reproduce probing/resizing. You cannot calculate one universal permutation for everyone seed.
- Electrum1.9.8 cleanly-tested OldWallet walking addresses(True): receiving-block change-Imports give a prefix whose internal order depends on the dict; arbitrary old accounts That's not the rationale.
- In a standard example1.7.4 everything3 change-The keys were inside the first256 That's why export259→take256 equal receiving-only256. V1.9.8 pure R256/C3 first256 — receiving.
- Windows x86/x64 have C long32; size_t32/64 It's different default-wallet They gave the same order, but control160 There are negative differences between them. Linux LP64 has long64/size64.
- CPython2.7.9 default-off hash randomization. unset and0 coincided in all three runtime.1/42/4294967295 reproduced LCG; two-way random-The process was given different orders, their preserved hash-secret They're only used for synthetic matching hash-secret The author is well-known.

| Verification | Profile | Various positions | Comparable strings |
|---|---|---:|---:|
| different_master | x86 | 258 | 259 |
| hashseed_unset_vs_1 | x86 | 258 | 259 |
| add_receiving_child_common_relative_order | x86 | 0 | 259 |
| different_master | amd64 | 258 | 259 |
| hashseed_unset_vs_1 | amd64 | 258 | 259 |
| add_receiving_child_common_relative_order | amd64 | 0 | 259 |
| different_master | linux64 | 259 | 259 |
| hashseed_unset_vs_1 | linux64 | 258 | 259 |
| add_receiving_child_common_relative_order | linux64 | 0 | 259 |
| platform_default | x86 vs amd64 | 0 | 259 |
| platform_default | x86 vs linux64 | 230 | 259 |
| forced_negative_collisions | x86 vs amd64 | 156 | 160 |

For the growth of the pool, the order of only shared addresses after deleting the added address is compared, not a trivial shift in line numbering master compared bybranch,index), Because the addresses themselves are different.

## What does this change for previous research?

Negative checks of successive children do not rule out the scenario "Electrum1.7.4 → dict-order CSV → This is not a refutation of old results: their scope of applicability is changing. BX/SX They do not automatically receive this permutation – you first need a specific user path through the given one exporter. For the clean1.9.8 piecey receiving/change The map is confirmed, no new unknown permutations are introduced.

If available MPK, pool composition, imports and runtime/hash-settings, order1.7.4 get out **publicity**: MPK→raw child public points→raw addresses→dict. Isolated public_mapper.py I got only these fields and matched them all126 cases; nor seed, private master, neither WIF It wasn't passed on to him random-regimes hash-secret It was also an entrance; without it, this inspection does not promise a single order.

If MPK Unknown, addresses and order depend on each master-You can't sort the published ones puzzle-address instead raw-Addresses: these are points of scalars that have already been transformed. Order itself does not shrink space master It doesn't create another attack MPK The previous conditional methods should be run with a restored map, not with a retrieved map i−1.

## Cost and reproducibility

First full pass21 profile, together with inspections and public-only process 63.44s wall. Preparation/downloading/unpacking runtime That number doesn't include time public-only construction259/260 addresses plus21 map: 0.062 before 0.099on synthetic case; launcher Python It's not the speed of a complete history GUI/synchronize. GPU It wasn't used.

Run `998c4f7b58bcf26a`Numbers are an artifact of the original study (`runs/998c4f7b58bcf26a/EXPORT_METRICS.csv`; outside the picture), comparisons - artifact of the original study (`runs/998c4f7b58bcf26a/COMPARISONS.json`; outside the image), independent audit - an artifact of the original study (`runs/998c4f7b58bcf26a/INDEPENDENT_AUDIT.json`; outside the picture), [protocol](<PROTOCOL.md>). Runtime MSI only extracted through read-only API/CAB, The system was not running119 pinned The files have been checked and not changed.

Historical sources: [Electrum1.7.4 CSV](https://github.com/spesmilo/electrum/blob/e8ffe29554dbb616005218f9686a3d9d8c85ca49/gui/gui_classic.py#L1757), [1.7.4 wallet](https://github.com/spesmilo/electrum/blob/e8ffe29554dbb616005218f9686a3d9d8c85ca49/lib/wallet.py#L223), [1.9.8 CSV](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/gui/qt/main_window.py#L1954), [CPython dict](https://github.com/python/cpython/blob/v2.7.9/Objects/dictobject.c), [string hash](https://github.com/python/cpython/blob/v2.7.9/Objects/stringobject.c), [hash-secret initialization](https://github.com/python/cpython/blob/v2.7.9/Python/random.c)No link to the author Puzzle With the selected exporter, these sources do not prove.
