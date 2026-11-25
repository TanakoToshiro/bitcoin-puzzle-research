> English machine translation of the [Russian source](<../../../../ru/reports/experiments/randstorm-registration-20261102/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/08-methodology-and-history.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# RND-02 registration My Wallet and Chrome 31

**02.11.2026. The check is complete My Wallet from 29.12.2013 conventionally Chrome 31 on Windows reasoning Randstorm-There's no brute force. The priority of this particular combination has been reduced.** This is not an exception to all versions Randstorm not to establish the author's program puzzle.

## Browser: Systemic entropy is available

Selected Chrome 31.0.1650.63, officially released 04.12.2013 for Windows/Mac/Linux. His [.DEPS.git](https://github.com/chromium/chromium/blob/31.0.1650.63/.DEPS.git) fixation Blink `bc61f1eac8b9db35dc87415c17cba319f6d55152`.

[WindowCrypto.idl](https://chromium.googlesource.com/chromium/blink/+/bc61f1eac8b9db35dc87415c17cba319f6d55152/Source/modules/crypto/WindowCrypto.idl) lay out window.crypto without runtime-terms. [Crypto.idl](https://chromium.googlesource.com/chromium/blink/+/bc61f1eac8b9db35dc87415c17cba319f6d55152/Source/modules/crypto/Crypto.idl) He clearly says: getRandomValues Available even with the experimental flag switched off Crypto. Only subtle It depends on this flag Web Crypto API In an old browser, you can not equate the absence of getRandomValues.

The chain is traced by the fixed source:

```text
window.crypto.getRandomValues(Int32Array32)
→ Blink Crypto::getRandomValues
→ WTF cryptographicallyRandomValues
→ WebKit sourceFunction → Platform::cryptographicallyRandomValues
→ Chromium WebKitPlatformSupportImpl → base::RandBytes
→ RandUint64 → Windows rand_s
```

WTF uses its own ARC4 intermittently 128 bytes from the system source and discarding the first 256 It's a byte of stream **condition**, not JSBN RC4 wallet, the presence of ARC4 in both layers does not reduce systemic entropy to a state Math.random.

Sources: [WebKit.cpp](https://chromium.googlesource.com/chromium/blink/+/bc61f1eac8b9db35dc87415c17cba319f6d55152/Source/web/WebKit.cpp), [WTF RNG](https://chromium.googlesource.com/chromium/blink/+/bc61f1eac8b9db35dc87415c17cba319f6d55152/Source/wtf/CryptographicallyRandomNumber.cpp), [Chromium platform](https://github.com/chromium/chromium/blob/31.0.1650.63/webkit/child/webkitplatformsupport_impl.cc#L734), [Windows rand_s](https://github.com/chromium/chromium/blob/31.0.1650.63/base/rand_util_win.cc).

The full old browser didn't start. Its chain is set by the source code. JS-Controls receive clearly defined synthetic WebCrypto-Compromising the OS, replacing it API Expansion and non-standard assemblies were not checked.

## Registration: Password is added to the first key

Executed **immutable wallet-signup.js**, including document.ready, button handler, asynchronous UUID callback and password checks. BitcoinJS bundle and precise functions _seed/generateNewKey taken from RND-01. DOM, Server responses and storage have been replaced by code-listed stubs wallet.js and the site interface is not running; encryption after the first key is a clear stub.

The procedure for successful registration in these controls:

```text
загрузка BitcoinJS: WebCrypto → pool
document.ready → мышь/клавиша → Continue
UUID request → body click → UUID callback
проверка пароля → generateNewKey(password)
_seed: время, пароль, server seed при наличии
первый nextBytes → KSA → приватный ключ → сохранение
```

Four full-time successful scenarios have one each WebCrypto-query and zero Math.random-The first one KSA afterward _seed. Changing an early password, system words, or server seed It's a test of the inputs, not an estimate of their entropy.

Mistakes UUID, A short password and mismatched passwords don't reach the generator. If the address is already there, no new key is created nextBytes appearing as an early KSA - positive detector control **Even in it, systemic entropy is already present pool**. Such a bypass in itself does not give a search of the state V8.

Control without control WebCrypto giver 128 challenge Math.random, But it's an artificial shutdown API, not a description of the usual Chrome 31.

[Number report](<NUMERIC_REPORT.md>), tracks - an artifact of the initial study (`TRACES.json`; outside the picture), acceptance of calculations - an artifact of the initial study (`AUDIT.json`; outside the picture: 10 scenarios, 6 synthetic keys. Independently verified RC4 captured KSA, JSBN modulo, full public points and addresses through affine-EC. Real puzzle-The keys were not moved, the search speed was not measured.

## Limit of negative conclusion

Direct consumers SecureRandom found signer.js and sharedcoin.js: SMS-minikeys, signatures and operations SharedCoin. The very definition of function does not consume flow signup-These functions are not called before _seed. Mnemonic modal loading paper-wallet They follow after successful preservation.

However, the full composition of the expanded page has not been restored WalletServlet referencing `bitcoin-wallet-new.jsp`It's missing from the fixed tree web-The request also didn't give this artifact, so the result relates to the verified client path, not to any scripts ever placed on the site extra_seed It's also undetected.

## Decision and continuation

**No writing GPU-scanner and do not rent a card for this combination.** System entropy is received already at boot; normal registration additionally adds a password to KSA. There's no cheap way around.

Back to Randstorm justified on a specific new basis:

1. Precise browser and earlier wallet-cut where getRandomValues It's not really being used 25.12.2012 from RND-01 He's still a candidate, but his browser, events and additional inputs are not fixed yet, and he didn't automatically turn on.
2. Confirmed system source initialization error. Artificially disabled API That's not a mistake.
3. Separate historical chain **SharedCoin**: 18 byte SecureRandom persist `sharedcoin-seed:`eh `generateAddressFromCustomSeed(seed,n)` receives the key SHA256(seed+n), wherein n It's converted to a decimal line. It's a deterministic diagram without BIP32, differential generateNewKey. It is preserved as a future hypothesis. Seed This is not a short connection with the puzzle, The masking, the indexes and the recovery are untested.

## Artifacts and preservation

The old ones 78 file RND-01 verifiable and unchangeable. SX All successful sources have hashes. Git blob checks and decodes Gitiles-files are listed in SOURCE_AUDIT.json. Teams -- README.md, intermediate conclusions JOURNAL.md, The final manifesto COMPLETE.json.

During the preparation, a re-recording of three early HTTP404-inherited downloader. Their original hashes and metadata are stored in ERROR_BODY_LOSS.json and SOURCES_BEFORE_REPAIR.json; Body loss is clearly marked. Successful source was not affected downloader corrected.
