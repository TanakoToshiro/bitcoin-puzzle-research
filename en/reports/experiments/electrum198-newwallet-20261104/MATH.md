> English machine translation of the [Russian source](<../../../../ru/reports/experiments/electrum198-newwallet-20261104/MATH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/03-wallets.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Public supplements NewWallet condition of recovery

Let me n order secp256k1, s - private scalar of the node m/0', P=sG, c his chain code. All the usual levels below a/b/i non-hardened. At every level HMAC-SHA512(c, compressed(P)||BE32(index)) giver IL new chain code; P upgraded P+IL·G. This allows you to calculate the amount of additives d_j mod n without s.

Source key j: `k_j = (s+d_j) mod n`The public entrance is exactly that P and c, address child not alone x-coordinate component. Point format accuracy/path is important; c pinned Electrum K — 64 byte x||y, cK — SEC compressed 33 In the control model, historical semantics IL>=n It is maintained despite the fact that it differs from the standard skip-rules.

## Full source child

If known to be completely unmasked k_j, piece `s = (k_j−d_j) mod n`It makes a private knot m/0'sufficient for his descendants mnemonic, neither master m This is not the way to be rebuilt: m→m/0' hardened.

## Masked solutions Puzzle

Hypothesis: Published size puzzle key r bit `2^(r−1) + (k_j mod 2^(r−1))`It's an external transformation that Electrum He doesn't do it himself L=r−1 observation u=k_j mod 2^L.

So s,d_j,d_t are [0,n), plus s portable 0 or 1. Therefore:

`k_t − k_j = d_t − d_j + q·n`where q belongs to1,0,1}.

Primary L>=T, wherein T The number of the smallest observed bits of the target, we obtain:

`v_q = (u + d_t − d_j + q·n) mod 2^T`.

That's up to three candidates `2^T`, then checked for accuracy compressed-P2PKH The address itself doesn't restore the unknown P,c. For real applications, the proven origin of the root, the correct paths and the agreement of other available solutions are additionally required, not only a demonstration on an artificial example.

Controls use the form source Puzzle134 (133 minor bits, target Puzzle71 (70 minor bits), transitions between receive/change They don't use the author's real secret settings hardened-path below the transmitted node, insufficient observation length, incorrect size chain code and a point outside the curve.

No P,c Supplements are unknown and depend on HMAC The tests performed do not provide an algorithm for restoring these parameters from masked solutions alone, nor do they prove a cryptographic lower bound of complexity seed Also not found.
