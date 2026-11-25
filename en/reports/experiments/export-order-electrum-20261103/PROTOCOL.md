> English machine translation of the [Russian source](<../../../../ru/reports/experiments/export-order-electrum-20261103/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/07-masks-and-order.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# EXP-01 - exact order Electrum CSV / CPython2 dict

03.11.2026. Just synthetic wallets and source code. No new search
real-life seed/master/Puzzle The old keys EL-02/E7/BX/SX/MT You can't count the results.

## Final coverage

Main exports: Electrum1.7.4 commit e8ffe29554dbb616005218f9686a3d9d8c85ca49,
unchanged methods addresses/get_account_addresses/get_address_index/get_private_keys
and GUI do_export_privkeys. The functions assigned are performed herein CPython2.7.9,
fake storage/network/UI, launchless PyQt GUI, the user's network and wallet.
OldSequence private children are calculated using preserved historical methods;
The cryptographic result is verified with an independent Python3/coincurve Calculation.
Control CSV: Electrum1.9.8 commit f92b483942d3f8ee51506e0436d9b524db33a336,
unchanged methods addresses/get_account_addresses and GUI do_export_privkeys;
supplier WIF For him, false, with independently verified values in advance.
It is a reproduction of order and CSV, half-hearted UI/wallet lifecycle.

Platforms: official Windows CPython2.7.9 x86 and amd64 (2014 MSI), Linux x86_64
CPython2.7.9 from the previous verified collection of sources. MSI only read and
They're unpacked, they're not installed in the system. unset,
PYTHONHASHSEED=0,1,42,4294967295 and two independent random-For the process random
drop off _Py_HashSecret (c) a synthetic process to compare the exact model;
The secret of an unknown historical author is not restored.

The model is clearly divided C long (hash) size_t (perturb). Hash LCG and prefix/suffix,
1000003, −1→−2, starting-point8 slots, probing5*i+perturb+1 shifty5, loading2/3,
growth4*used And re-insert the old slots. Dummy/deletion/update tested
separately. ASCII str/unicode Comparisons; arbitrary Unicode beyond scope.
Dict construction through {} and successive assignments. Presizing/update(dict),
nonstandard __eq__/__hash__ outside the export profile; artificial hash-collisions
are used only for inspection probing distinctions long/size_t.

Synthetic kits: two deterministic 128-bit seed-strings; clean
old-wallet account0, R256/C3, R253/C3, R257/C3; variant3 imported
keys and account0. No unconfirmed independent old accounts.
Default change3 confirmed source-fixtures. The bullets are transmitted ready-made:
synchronize/history/GUI timing It's not reproduced here.

Additional: Same set of addresses with a different history of inserts/distances; boundaries
growth5/6,21/22,85/86,341/342, up to1025, Long collisions, empty line,
The values are replaced without changing the key hash signed-negative Separate control.

## Substantive checks

1. Compare each native hash and real slots CPython dict with an independent model.
2. Check out the historical background CSV consideringly Windows CRLF; routine/WIF/lineage
   Check with the model. Padding address34 Symbols are part of the source code.
3. Comparison receiving/change sequence, fixed hash-profiles,
   other master, elevation R on1, imported keys and hash-randomization.
4. Distinguish between export259 take256 strings" and "create256 “The original records”.
   Choosing first256 afterward dict-order drop-off change beforehand dict.
5. Nana synthetic masked sequence Check that it is correct map returns
   branch/index and keys, (a) consecutive map Make mistakes; don’t make too many claims
   Replacement or restoration of the unknown hash secret.
6. If known MPK, raw-addresses and order It can be calculated in public; it can be shown
   on synthetic privately master constructor map. Checker
   code master. If MPK Unknown, to explain the dependence order from the candidate.

Full numbers from JSON/CSV. fixate inputs/code/runtime hashes and mistakes,
reuse completed tasks at matching inputs inputs
After the adoption, a new run id. Documents README/RESULTS/JOURNAL new
a folder, a shared log -- a separate entry at the end
new GPU The results of this audit.
