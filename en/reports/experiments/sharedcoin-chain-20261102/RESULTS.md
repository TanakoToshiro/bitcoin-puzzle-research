> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sharedcoin-chain-20261102/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/03-wallets.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SC-01 — SharedCoin: check-in

Date: 02.11.2026, Europe/Moscow. **Audit completed; grounds for considering SharedCoin most likely generator Puzzle or launch a mass search seed Not received.** The chain is confirmed by execution, but its use by the author is not established SharedCoin.

## Accurate hypothesis and data

Verified variant: the author could take a sequence of intermediate private keys SharedCoin and apply a range mask separately puzzle. Complete client files of the official archive are checked Blockchain My Wallet: [29.12.2013](https://github.com/blockchain/unused-My-Wallet/blob/031863d30590754f5d02fc10488236b1dc30f7f7/sharedcoin.js) and [07.01.2015](https://github.com/blockchain/unused-My-Wallet/blob/5116e636cc77331b4f700ad60b1b51171142e5fa/sharedcoin.js)appropriate BitcoinJS function `_seed`/`generateNewKey`Save it 46 snapshot sharedcoin.js before 15.01.2015 and 49 Successful network sources. URL, UTC, SHA-256: SOURCES.json - an artifact of the initial study (`SOURCES.json`; outside the image); copies of previously accepted files: INPUT_PINS.json - an artifact of the initial study (`INPUT_PINS.json`The completeness of the story is limited by this path and the repository; dates commit They do not prove the date of the site deployment.

Set chain:

```text
18 байт из общего SecureRandom/RC4
→ 36 lowercase hex-символов с сохранением ведущих нулей
→ prefix + seed_hex + decimal(index), без разделителя перед index
→ SHA256 ASCII-строки
→ Bitcoin.ECKey(hash_bytes)
→ публичный ключ и адрес
```

There's no conversion in this constructor `1 + x mod(n−1)`which relates to the accidental `ECKey(false)`Nope BIP32, PBKDF2, derivation path or a master key seed It's created on a plan; next addresses use it with increasing indices. New plans consume the following 18 byte RNG. Verified hashes - allowable scalars; rare boundary hashes 0/≥n No separate series was tested.

## Versions and modifications

Complete function history: HISTORY.json - an artifact of the initial study (`HISTORY.json`; outside the picture), short scale: [HISTORY.md](<HISTORY.md>).

- In the first saved version 17.10.2013 intermediate seed Not yet: Address changes are being made `MyWallet.generateNewKey`The chain custom seed emerge 24.10.2013.
- V1: prefix `sharedcoin-seed:`If the first byte SHA256 Even, uncompressed; if odd, compressed. It's not the parity of the dot or the smallest bit of the key.
- 16.12.2014 plan begins to `MyWallet._seed()` prior to first receipt 18 Bytes, already initialized RC4 The call does not restart the stream: it is seen in the code RNG and is consistent with the four controls of the KSA.
- 21.12.2014 emerge V2: `sharedcoin-seed-v2:`Changing the prefix changes the private key itself V1 remains compatible.
- 23.12.2014 The index is banned ≥100 into `newPlan().generateAddressFromSeed`Plan indices V2 — 0–99. The very function of output by seed accept 100/255; It's checked separately. Recovery Both versions are scanned only 0–99 on seed.

## RNG search-limitation

18 byte **144 presentation-bit seed**, It's not measured entropy. It's not proven to have a lower bound by this audit WebCrypto system bytes arrive in pool: sliced 2013 This is the main starting source; c 2015 supplement 128 `Math.random` and `_seed` with time, password and available server entropy. Therefore, the existence Math.random The code doesn't reduce this path to a single state of it RNG: [RND-01](<../randstorm-my-wallet-20261102/RESULTS.md>)historical Chrome 31: [RND-02](<../randstorm-registration-20261102/RESULTS.md>).

Reducing the unknown state to 2^31/2^32 No retrieval found seed full-blown SHA256-The key has not been implemented: there is no practical basis for such a restoration 144 The bits don't give you a complete brute force, a possible weak configuration without WebCrypto requires a separate binding to the browser version, inputs `_seed` first-time KSA; You can't miss these unknowns.

## Wherever seed and

Seed prefixed `wallet_options.additional_seeds`, then included in JSON wallet; ordinary backup coder JSON The last ones are saved in the January section 50 supplementary seed. Prior to the implementation of the plan is provided backup check-up seed It's a source output, not a server launch/coded backup Line number fragments: SOURCE_AUDIT.json - an artifact of the initial study (`SOURCE_AUDIT.json`; outside the picture.

Executed `submit_offer` transmitted offer with exits, not all plan s seed. V recovery API The four synthetic queries don't contain addresses seed. This is not proof of the absence of leaks in all ways of the application.

**Separate footprint:** December-code 2013 ingest `console.log(plan)`and the object contains `address_seed`In the January code `plan.toString()` includes seed, But the found call to his seal is commented on debug-Log or voluntarily published by the author Puzzle Dump could be useful Puzzle Log not detected; local console does not mean public seed And it doesn't give you access to someone else backup. Two narrow search queries did not give a confirmed link; this is a weak negative search result, not evidence of a lack of publications.

## Implementation and verification

The numerical table is automatically collected in [NUMERIC_REPORT.md](<NUMERIC_REPORT.md>)Machine data: TRACES.json - an artifact of the initial study (`TRACES.json`; outside the picture), CHECKS.json - an artifact of the initial study (`CHECKS.json`; outside the picture), RUN.json - an artifact of the initial study (`RUN.json`; outside the picture.

Completed unchanged complete SharedCoin/BitcoinJS file Node VM; UI, network, storage, time, password, server seed and WebCrypto The old browser didn't run entirely. Four scenarios: two slices × SharedCoin before/After the usual key, obtained 84 Fixed vectors with independent affine-EC, 406 targeted comparisons of plans, 400 comparisons recovery, 196 Negative Controls and Four Independent Controls RC4-The positive balance of the synthetic first address leads to the importation of the correct key 2015 retain V1-All checks have passed; numerical totals include intentional repetitions for compatibility and recovery.

The calculation of the accepted launch took about 33 seconds CPU/wall It's the test bench time, not the speed of mass search `CACHE HIT` changeless TRACES/CHECKS/RUN. All 147 file-accepted RND-01/RND-02 They're being checked in. SX and GPU Not affected. Real puzzle-There are no keys, no new keys or bits.

## Permissible conclusion and continuation

Staffed SharedCoin does not set the highest bit according to the number puzzle And it doesn't mask the keys Puzzle You still need an additional author code 100 It excludes only the literal version of “all things” 256 keys from a single staff plan V2," but not manually using a function or multiple plans V1 In itself, it does not exclude external masking and re-creation of compressed addresses.

**The Solution: Mass Search and Rental GPU for SharedCoin Don't start now.** Further work is justified when a specific artifact of the author appears from seed/a log or historically achievable small model RNG. Closest separate theme Randstorm An earlier combination of wallet and browser without WebCrypto with additional inputs installed seed, timestamps No dictionaries added. Chain checks V1/V2 no need to repeat; commands and conditions of continuation README.
