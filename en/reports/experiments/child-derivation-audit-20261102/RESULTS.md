> English machine translation of the [Russian source](<../../../../ru/reports/experiments/child-derivation-audit-20261102/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/03-wallets.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# HD-01 Historical wallets and child key connections

02.11.2026. **The first cycle is complete. The most convenient scenario in the original script is the one that we're looking at Armory classic and Electrum1.9.8. Found and tested conditional way to restore256-bit Armory-root of partial daughter keys without weak seed. For the present Puzzle It is not yet applicable: the correct ones are required watch-only root public key and chaincode, Only from known solutions and code for a new, practical search before2^32 Not received.**

## Selection of programmes

Historical catalogue used bitcoin.org from14.01.2015 and the appropriate time code, which confirms availability/Notoriety, but does not allow ranking of market shares or the likelihood of use by the author. [WALLETS.md](<WALLETS.md>), SOURCE_FACTS.json - an artifact of the initial study (`SOURCE_FACTS.json`; outside the picture.

- **Armory:** GUI rise address pool by a given number and Export Key Lists including unused addresses, private keys, ChainIndex. Hundreds of keys are actually provided by the interface, and that's the most direct path you can see for a simple script to follow.
- **Electrum1.9.8:** change gap limit/pool generation, export address/private_key into CSV and dumpprivkeys. By default, the old Electrum-Derivation, there is also an optional BIP32. None of these paths require weakness seed.
- **mSIGNA:** desktop BIP32, export keychain/extended private key. Mass derivation after such export is possible script, but direct GUI-export256 WIF It's not confirmed.
- **bitcoinj0.12 / Bitcoin Wallet:** standard HD-chain WalletTool s lookahead/dump-privkeys. For a mobile wallet, the path to mass unloading is less convenient. Under the hood, it's another one BIP32-It is not a new mathematical family.
- **Core0.9.3:** mass keypool It is possible, but there is no common deterministic parent in the regular path studied. The remaining brands from the catalog are not declared excluded; their full export audit has not yet been performed.

The standard methods are reviewed and UI-challenges, old ones GUI The order of export may include receiving/change, accounts and imported keys; hence the number puzzle does not automatically coincide with child index. Unconfirmed reshuffles have not been moved.

## New positive result: Armory + partial

Staff classic Armory-chain multiplicative: the next scalar is equal to the previous, multiplied by the value of chaincode XOR doubleSHA256 public reference point, if known **root-point chaincode**, All the factors can be computed in a public way, without a private root Hidden Number Problem; It can be solved with a lattice instead of a root.

Realized LLL, precise Babai and to test the candidate root public key. Nana12 full-blown artificial wallets secp256k1-size of the root rebuilt by four masked keys corresponding to known indices120/125/130/135. It's119/124/129/134 Observable minor bits, not full initial bits child keys. Others79 The known indexes of each case are used after recovery12 success,36 Negative controls and independent affine-Checks passed.

Separate process `recover_watchonly.py` I just got it watch-only parameters masked private key with numbers, independently counted the coefficients and also restored12/12. Private root, seed full and raw children They don't go in. The recovery itself took about a year4–6In addition to the public chain, about12–20MS on this machine, no launch time Python. Accurate measurements [NUMERIC_REPORT.md](<NUMERIC_REPORT.md>)Two official Armory child-vector20 previous independent inspections reference They confirm that the necessary historical formula is used.

**It's conditional synthetic result, not the key found Puzzle.** Watch-only The data is not equal to the address and does not appear on the blockchain automatically chaincode We didn't find these parameters of the author, we didn't reconstruct them from existing solutions. HNP/LLL A known class of methods; novelty is not claimed in the world literature E3/E6H Full-sized regenerative agent root partial children with public coefficients, without the assumption of a short seed.

## Electrum and BIP32: result

Here the children have an additive form `child=(parent+offset) mod n`. Offset calculated MPK either xpub/chaincode through SHA/HMAC. Without these parameters, known minor bits children They don't turn into a system with known coefficients children It leaves unknown hash additives.

For a situation already known xpub Exact intersection of all modular conditions with transfers modulo n.800 We have had a few small inspections24 full-scale synthetic cases with83 The known indices remained approximately2^114.78–2^117.69 **arithmetic candidates prior to link check parent_private*G=parent_public**. It is not the number of actual keys of one xpub, It's not entropy, it's not the lower bound of any attack2^32 I didn't get it.

Known to be xpub smaller masked child In this case, it is possible to predict from the longer known residue, taking into account three transfer variants.48 We passed the tests96 This is an extension of the previous one E7 s Electrum on non-hardened BIP32-Not for the first time the open effect. Hardened-The border is separately checked: public xpub It's not enough to derive through it account private key also does not mean that hardened-transition master/seed.

Formulas, proof of accuracy of arithmetic calculation, lattice construction and limitations: [MATH.md](<MATH.md>)The sum3767 Observable bits do not mean that they can be independently subtracted from256 or512 The uniqueness of the solution and the low cost of finding it are different properties.

## What is not repeated and what is not established

Not again501 MPK-candidate E7,48 circuitry256, former Armory XOR-MITM/feedback requests RNG-brutes HASH160 ML. Previous results unchanged Taken83 proven solutions of the saved snapshot before135; No new external solutions were added12 new roots, goals71/100 and holdout This study is specially created synthetic There's no real new private key or bit.

Famous root public/chaincode real Armory-no chain; with unknown parameters, coefficients HNP Public dots are not built **modified** puzzle-keys cannot be substituted instead of the original raw-previously considered E6H unknown chaincode It is a difficult task; a new positive result does not solve it.

## The following experiments

1. **Specific Armory watch-only Author's artifacts:** root-point together with chaincode, an earlier public point of the same chain with a confirmed index and chaincode. Search only for sources related to Puzzle; simple enumeration root/chaincode It's going to give you a huge amount of space, and the result is going to be a set of verifiable candidates that you can run right away through a ready-made restorer.
2. **Recovery of unknown parameters Armory.** The new mathematical formulation - to use masked private observations together with available source/Before big calculations, you need a specific algorithm and a test that shows the reduction in cost relative to the previous one XOR-MITM; launch solver It's no longer a new method. There's no such algorithm now.
3. **Adding a convenient wallet card** - specific old Hive/breadwallet/Mycelium and earlier versions, only if there is a different algorithm or a significantly different export BIP32 The new name doesn't add an independent attack BIP32 only be examined with a confirmed application/version, not just the existence of an old draft standard.

GPU/MSVC/SX Not affected. Code, sources URL/UTC/SHA-256, The entrances of the bars, transforms, Results, errors, versions and commands saved ACCEPTANCE.json - an artifact of the initial study (`ACCEPTANCE.json`; outside the image); the general research file is supplemented by a new entry.
