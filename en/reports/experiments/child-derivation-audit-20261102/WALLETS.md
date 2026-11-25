> English machine translation of the [Russian source](<../../../../ru/reports/experiments/child-derivation-audit-20261102/WALLETS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/03-wallets.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Historical selection for the convenience of mass generation

The deadline is15.01.2015. Basis of fame: [catalogue bitcoin.org on14.01.2015](https://github.com/bitcoin-dot-org/bitcoin.org/blob/bbdc9f893743b051216650bd2821f4b810e061f4/_templates/choose-your-wallet.html), which lists all the major user wallets named below/The number of active users is not established; it is not a popularity rating or attribution of the author Puzzle. The priority below is matching the scenario of "getting hundreds" private keys → modify it with an external script.”

| Candidate | The historical path | The family | Priority for this task |
|---|---|---|---|
| Armory classic,08.01.2015 | GUI Extend Address Pool accepts the number of addresses; Export Key Lists skillful Include Unused (Address Pool), private keys and ChainIndex | Own serial multiplicative chain | First: the most direct confirmed GUI-scripture |
| Electrum1.9.8,16.03.2014 | Increase gap limit through console/API, synchronization of the pool; GUI Wallet→Private Keys→Export CSV; eat dumpprivkeys | By default old Electrum, optional BIP32 | One: shortcut and comfortable CSV |
| mSIGNA,13.01.2015 | GUI export private keychain/BIP32 extended key; further mass derivation in a small script | BIP32, application-oriented multisig | Second: direct mass CSV child private keys viewed UI not confirmed |
| bitcoinj0.12 / Bitcoin Wallet period | Library HD, WalletTool s lookahead-size and dump-privkeys; The mobile interface itself is less convenient for unloading hundreds of keys | BIP32 m/0'/0/i, m/0'/1/i | Second: good technical model, more sophisticated user export |
| Bitcoin Core0.9.3 | keypool + dumpwallet allow many keys, but in a verified slice they are generated independently | There's no full-time general HD-parent | Beyond the Mathematical Problem of Child Relations |
| MultiBit Classic catalogue | Famous desktop-Export of keys is possible, but modern MultiBit HD You cannot automatically move back | The exact archive chain Classic They haven't audited again | Not included in the positive HD-shortlist single-confirmation |

Electrum, Armory and mSIGNA catalogues are indicated for Windows/Linux/macOS. Bitcoin Wallet — Android/BlackBerry. BX/SX comfortable script-driven generation, This is an ongoing study and CLI-Tools, not a new user shortlist. Trezor, Mycelium, Hive, breadwallet are also present in the catalogue; a complete historical audit of their private-key Expanding the list in this first pass is not done. They can't be declared excluded/export, not the number of brands with the same BIP32.

## What exactly is confirmed in the code

**Armory.** V qtdialogs.py class Extend Address Pool trigger fillAddressPool predefined naddr; upon naddr≥1000 Additional confirmation is provided, i.e. hundreds are provided by the interface. DlgShowKeyList taker `getLinearAddrList(withAddrPool=True)`suggests Include Unused, private key format and ChainIndex. The method returns the order of records wallet file, However, the imported keys may be present; they do not have the serial number of the line chainIndex. Root separately available Include Paper Backup Root; Its presence cannot be silently assumed by the usual child-Exports saved: etotheipi/BitcoinArmory `61a596fa94f9cacf9fb00c4e02d0eb65d8b17513`The derivatives formula has already been independently verified E3; The same reconstruction was not repeated.

**Electrum.** V [GUI export](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/gui/qt/main_window.py#L1939) CSV contains address/private_key, cycle `wallet.addresses(True)`. `change_gap_limit` It increases the pool required, the synchronizer creates new addresses receiving/change, few accounts and imported keys. Therefore, a simple export does not prove stride1 on one branch Hundreds alteration gap limit requires the execution of generation/synchronization; a change in one number is not by itself declared an export already made.

**mSIGNA.** `KeychainModel::exportKeychain(...,exportPrivate)` and `getExtendedKeyBytes(...,getPrivate)` pass on Vault; `HDKeychain::getChild` use HMAC-SHA512, big-endian index addition IL s parent modulo n. The public and private regimes are separated hardened The public key is not allowed xprv allows the use of standard derivation, but does not prove the presence of GUI-export buttons256 WIF».

**bitcoinj.** In the version0.12 eat DeterministicKeyChain tooling `--lookahead-size`, `--dump-privkeys`model normal/hardened defined HDKeyDerivation. The path from app to convenient mass export is worse than the first two candidates seed have already been investigated E9, We don't use it here as a weakness.

All conclusions about the interface are based on stored sources, not on running old ones GUI The whole thing/lineage/hashes SOURCE_FACTS.json and SOURCES.json. The generation code and export data order are more important than the external similarity of addresses wallet The directory does not prove that the author used it Puzzle.
