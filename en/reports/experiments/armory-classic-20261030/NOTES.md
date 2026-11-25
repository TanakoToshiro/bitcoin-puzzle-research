> English machine translation of the [Russian source](<../../../../ru/reports/experiments/armory-classic-20261030/NOTES.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/03-wallets.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E3 Journal of Interpretations and Boundaries of Conclusions

Records are added; previous interpretations are not rewritten by the report generator.
Date of all records: 2026-10-30, time UTC. ID main launch:
`20261030-105108-7ecfb506`Machine tables: [RESULTS.md](<RESULTS.md>).

## 10:43 - fixing the historical source

The full official archive is preserved BitcoinArmory commit
`61a596fa94f9cacf9fb00c4e02d0eb65d8b17513` from 2015-01-08: 4 738 933 byte,
826 files. SHA-256 archive
`b91693cf462d9e9826088ad4fb45b2a1a6a296e1498e69b1403f60f47d429a36`.
URL, The loading time and hash of each file are in SOURCES.json - an artifact of the initial study (`SOURCES.json`; outside the picture.
A small error in the final output of the loader (`st_size()` instead `st_size`)
Fixed after successful preservation of the archive; no re-upload required.
This preparatory error does not affect the computational results.

Historical 2012 HD-gist The review cannot be automatically considered as implementation
wallet-only 2015 This experiment is testing the path of the year
`createNewWallet` → `extendAddressChain` fixed product.

## Prior to launch – Reconstituted formula

Let me `k_j` — **full-fledged** the original private key, `P_j = k_j G`,
`U(P)` — 65 byte `04 || X_BE32 || Y_BE32`, `D(x)=SHA256(SHA256(x))`.
For a permanent 32-byte chaincode C:

```text
a_j     = BE_integer(C XOR D(U(P_j)))
k_(j+1) = a_j * k_j mod n
P_(j+1) = a_j * P_j
```

Multiplier is decoded big-endian; XOR It's a byte. It's a normal chain
keep the same chaincode, Doesn't update it by the rule BIP32. Zero key
It is a degenerate case that our implementation explicitly rejects, not misses.
He did not meet in four control chains.

Primary sources:

- [EncryptionUtils.cpp: SerializePublicKey and ComputePublicKey, lineage 492–529](https://github.com/etotheipi/BitcoinArmory/blob/61a596fa94f9cacf9fb00c4e02d0eb65d8b17513/cppForSwig/EncryptionUtils.cpp#L492).
- [ComputeChainedPrivateKey, lineage 718 further](https://github.com/etotheipi/BitcoinArmory/blob/61a596fa94f9cacf9fb00c4e02d0eb65d8b17513/cppForSwig/EncryptionUtils.cpp#L718).
- [ComputeChainedPublicKey, lineage 798 further](https://github.com/etotheipi/BitcoinArmory/blob/61a596fa94f9cacf9fb00c4e02d0eb65d8b17513/cppForSwig/EncryptionUtils.cpp#L798).
- [BtcUtils.h: operationalization double-SHA256, line 486](https://github.com/etotheipi/BitcoinArmory/blob/61a596fa94f9cacf9fb00c4e02d0eb65d8b17513/cppForSwig/BtcUtils.h#L486).

### How do you get it? root and chaincode

In a standard wallet creation root comes through
`SecureBinaryData().GenerateRandom(32, extraEntropy)`. `BTC_PRNG` —
`CryptoPP::AutoSeededX917RNG<CryptoPP::AES>`Him reseed bytes
`OS_GenerateRandomBlock`, with additional mixing of user entropy.
It's not a challenge Python MT19937 and not a one-way scheme timestamp as seed.
The actual entropy quality of a particular machine is not verified by this code reading.
[Creating a wallet](https://github.com/etotheipi/BitcoinArmory/blob/61a596fa94f9cacf9fb00c4e02d0eb65d8b17513/armoryengine/PyBtcWallet.py#L860),
[BTC_PRNG](https://github.com/etotheipi/BitcoinArmory/blob/61a596fa94f9cacf9fb00c4e02d0eb65d8b17513/cppForSwig/EncryptionUtils.h#L118),
[reseed](https://github.com/etotheipi/BitcoinArmory/blob/61a596fa94f9cacf9fb00c4e02d0eb65d8b17513/cppForSwig/cryptopp/osrng.h#L122).

By default chaincode drain out root; explicit chaincode can also be transmitted
The default formula is:

```text
d = D(BE32(root))
C = SHA256((d XOR 5c*32) || SHA256((d XOR 36*32) ||
                                  ASCII('Derive Chaincode from Root Key')))
```

Named `HMAC256` function 32-byte pads, standard HMAC-SHA256 —
64-Byte block. So the replacement with a standard block `hmac.new` shifter chaincode.
**This is a feature of accurate playback, not a found cryptographic attack.**
It is not possible to assign two independent regimes to the standard regime 256-bit-unknown
root and C: C deterministically depends on root. But that doesn't mean we're weak
entropy root Or the ability to virtually restore it.
[HMAC256](https://github.com/etotheipi/BitcoinArmory/blob/61a596fa94f9cacf9fb00c4e02d0eb65d8b17513/armoryengine/ArmoryUtils.py#L1799),
[DeriveChaincodeFromRootKey](https://github.com/etotheipi/BitcoinArmory/blob/61a596fa94f9cacf9fb00c4e02d0eb65d8b17513/armoryengine/ArmoryUtils.py#L3392).

### Indices, change and masking

Root has chainIndex = −1; The first child 0. The usual new address is issued
general `getNextUnusedAddress()`, which increases the index by one
Transferring a regular wallet also causes this method; a separate one BIP44-branch change
There are other settings for selecting change and preview
Pool computation. So the originator export sequence puzzle cannot be
Restore only by task numbers.
[Indices and immutable chaincode](https://github.com/etotheipi/BitcoinArmory/blob/61a596fa94f9cacf9fb00c4e02d0eb65d8b17513/armoryengine/PyBtcAddress.py#L750),
[address-out](https://github.com/etotheipi/BitcoinArmory/blob/61a596fa94f9cacf9fb00c4e02d0eb65d8b17513/armoryengine/PyBtcWallet.py#L984),
[lay-off](https://github.com/etotheipi/BitcoinArmory/blob/61a596fa94f9cacf9fb00c4e02d0eb65d8b17513/ui/TxFrames.py#L859).

V stock-no-mask puzzle. Conditional receipt
`puzzle_i = 2^(i−1) | (raw_i mod 2^(i−1))` a separate export operation;
The next link should be calculated from the full raw, if it's standard Armory.
Feeding truncated puzzle-The key changes the model back pubkey inside
Armory does not contradict the compressed addresses puzzle: After the masking, the creator could
separately calculate the compressed point of the new key. This is not proven here.

## 10:51:17 historical Python stop

The original six AST-knotted CPython 2.7.9 No need to import a wallet.
Chaincode coincidental Python 3 implementations for three different roots:
`aa`×32, 1 and n−1. Retained source lines, hash AST, team, stdout and stderr:
historical-oracle.json - an artifact of the initial study (`runs/20261030-105108-7ecfb506/historical-oracle.json`; outside the picture.
SecureBinaryData Replaced with a transparent byte storage adapter/double-SHA256.
This is not the launch of a complete historical C++ or GUI.

After the first stage, we made a regular stop
I've run only the remaining seven steps, a copy of protocol, inputs, code and version
Dependencies are stored in the launch directory.

## 10:51:36 - control and 160-Step-series completed

Two Published Child Private Keys and a Second Uncompressed Public Key
matched [formalized Armory](https://github.com/etotheipi/BitcoinArmory/blob/61a596fa94f9cacf9fb00c4e02d0eb65d8b17513/pytest/testPyBtcAddress.py#L24).
For root `aa`×32 output C default received
`cd0784defd9a0fbc4ecc1b306eb7679b3a9c5a23f340b2453aadc482ed10c5dc`;
standard HMAC It gives another meaning that is stored in controls.json.

All four negative controls are recognized
Fixed cases are calculated 160 children; private/publicity coincurve
The independent affinity arithmetic coincided, including full points and multipliers.
640 states preserved in full; repeat them for further investigation
You don't have to. The numerical table and the time of each stage is in [report](<runs/20261030-105108-7ecfb506/CONCLUSION.md>).
Total computing wall time 18,991 from 600 (c) including the historical sub-process,
No archival work, no code writing, and the short time is due to finite checks
Control chains: No unknown roots were searched.

## 10:51:36 What gives a pair of full keys and what is not in puzzle

For two neighbouring **full** private-key k, k′:

```text
m = k′ * inverse(k, n) mod n
a ∈ {m, m+n}, оставляя только a < 2^256
C = BE32(a) XOR D(U(kG))
```

That gives you one or two candidates C. The third full key can be checked
Prediction; uniqueness is not stated in advance for all possible chains.
In our five positive cases C The fifth one was specially restored
use `a=n+2`: verified that the option m+n It's not lost.
Complete results of the control - artifact of the initial study`runs/20261030-105108-7ecfb506/recovery.json`; outside the picture.

In the saved table 83 maximum solutions i=135: merely observed 134
minors of the corresponding raw, ? 122 No digit positions are observed.
No71 even found puzzle-give me the key 70 junior raw left 186
positions; now the key itself71 Forced most significant bit puzzle
In all counts excluded. You can't substitute a known truncated k backwards
formula and declare standard Armory You can't count these as disproved
122/186 Proven independent entropy positions.
Machine analysis of the image - an artifact of the initial study (`runs/20261030-105108-7ecfb506/observations.json`; outside the picture.

**Bottom line: verified reconstruction received, attack and bit prediction/XOR №71 Nope.**
No proven affiliation puzzle This chain, and the inability to attack it.
There is no reason to start an arbitrary search root/date/Words are needed; additional words are needed
historical data or a particular entropy defect C full-blown
starting P_j does not allow direct continuation of the public chain from the address
truncated puzzle-key.

## 10:52 Acceptance and the next step

Repeated resume reported `already_completed=8, newly_completed=0`;
No computational reassembly 826 source files,
8 hashes of stages and 9 hashes of saved copies of entrances/Call history:
invocations.jsonl - an artifact of the initial study (`runs/20261030-105108-7ecfb506/invocations.jsonl`; outside the picture.
In the computational run of errors/No time-outs.

E3 completed within this protocol. The following is provided by the review
experiment E4 with independent control of the hypothesis of proximity of keys in coincidence
prefix HASH160. It didn't launch here E3 requires a new fact,
It is not a repetition of the control chains that have already passed.

## After the user's comment - clarification of the completeness of the published keys

Posted **full-key puzzle-address**, Not their fragments
The phrase about “cut keys” required clarification: it is only a model of obtaining
a new full key by masking another initial value raw.
Unknown grades raw You can not attribute the published final key.
Detailed [correction](<CLARIFICATION.md>) clarifies and limits the application E3.

Unlike the original HTTP-request, web-The instrument has now opened the original
message saatoshi_rising #248 from 27.04.2017. It really describes it
masking the serial keys of a deterministic wallet, but does not name
Armory or MT19937. Direct access to the message improves the base of the masking model.
It does not prove a specific implementation or authenticate the author cryptographically.
The numerical artifacts have not changed. This new record clarifies the previous wording;
documentation hashes in ACCEPTANCE.json This version is available prior to this supplement.
