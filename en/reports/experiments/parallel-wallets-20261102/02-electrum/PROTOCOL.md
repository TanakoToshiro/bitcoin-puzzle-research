> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/parallel-wallets-20261102/02-electrum/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/03-wallets.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# EL-02: Electrum, exports and unknowns MPK

Date: 2026-11-02. The work is only in this folder; CPU, Python stdlib, No packet installation.

Hypothesis: After the full-time export raw child change
`d_i=2^(i-1)+(raw_i mod 2^(i-1))`For old Electrum
`raw_i=(s+H2(ASCII(index:branch:)+ser64(sG))) mod n`.
Checking the real boundaries of branches/exports and availability MPK accompanying
Meta-information. You can't count it MPK one-fact watch-only.

Entrances: unchanged snapshot HD-01 known_solutions.json (expected SHA-256
`d291351169b1bb483b580af8cf4c30e503941f7b15b81aabd418e93809a40b70`),
five-source 1.9.8, generalization HD-01/E7/E8/E9. Copies and hashes are fixed.
Supportive commit: f92b483942d3f8ee51506e0436d9b524db33a336.

Limits are set before calculation:

1. Sources: up to 25 new HTTP-request, every timeout 20 s, before 4 MiB;
   only upstream Electrum. Old cuts are selected by change accounts/MPK.
2. Exhaustive collaborative model: toy EC order 199, genuine SHA256d,
   more 16 kits, before 198 scalars per set; 30 s Stage.
   Toy Masks are clearly limited to indexes 2,3,5,6,7, so as not to reveal raw.
   It's a reduced task, not a real one secp256k1 and not a model of the weak seed.
3. Full size: up to 8 synthetic wallets uniformly selected 256-bitten
   scalars, all 83 masks/passes; until 120 s Stage.
   A separate process receives only an artifact MPK/KeyID, indexing
   and masked observations. Secrets are kept separately and not transferred to the solver.
4. Full size inspection without MPK: limited-pilot 1024 candidates,
   before 30 s. It measures the exact joint verifier, There is no promise of a global recovery.
5. Export/metadata: before 32 deterministic fixtures, before 30 s; historical
   GUI It is not completely started, extracted methods are performed/model of order.
6. Completed stages are kept separate JSON and do not repeat resume.
   Intermediate state of each search - after each case/packet.

New relative E7/HD-01: Exact real order, the difference old account and
BIP32 accounts, portable MPK, joint EC+SHA
complete control without free offsets. The old ones 501 MPK, 48 variants
№256 And the conditional formula of three transfers is not to pass off as new discoveries.

The result of the stage is permissible negative/It's the only compatible one
root It's not like cheap search. stretched exponent non-parent seed.
Do not run a complete search of the unknown MPK and not puzzle public
points substitute raw points.
