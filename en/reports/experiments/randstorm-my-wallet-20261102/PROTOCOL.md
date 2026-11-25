> English machine translation of the [Russian source](<../../../../ru/reports/experiments/randstorm-my-wallet-20261102/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/03-wallets.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# RND-01 - historical chain Blockchain.info My Wallet

The production02.11.2026: Choose a real browser wallet to15.01.2015, establish the exact chain and its applicability to puzzle. No search for other people's wallets, real ones seed, GPU/clouds SX. Real puzzle-The keys are not used to fit the circuit at this stage.

Main section: official blockchain/unused-My-Wallet commit031863d30590754f5d02fc10488236b1dc30f7f7 from29.12.2013 (last) commit beforehand01.01.2014). Selected by calendar cut, not by attack success25.12.2012 and07.01.2015 They are used to identify differences, not to claim a single vulnerability for all versions.

1. Preserve primary sources, dates, Git blob SHA1 and SHA256. Distinguish the original bundle, minified bundle, Wallet function and actual unknown site configuration/browser.
2. Statically trace generateNewKey → _seed → ECKey → getBigRandom → JSBN → SecureRandom → RC4; list out entropy and consumers of general wealth, to see if there is BIP32/HD-master That's the way it is.
3. Fulfilling the Unchanged Historical BitcoinJS bundle isolated Node VM controlled Math.random, Date, WebCrypto and UI-Extract the exact functions separately _seed/generateNewKey. No network calls/modern RNG Instead of historical without explicit labeling.
4. Check it out fallback and WebCrypto branch, time/password/server-side seed before and after first use RC4, session repetition, sequential keys and additional byte consumption pool, RC4, Private keys and independent addresses Python/coincurve; Part of the public spots are clean EC-Synthetic parameters are not the parameters of the author.
5. Record the exact version V8 and arithmetic Math.random, Distinguish the number of output bits, state size and unknown initialization Randstorm universal32-bit space and do not display the cost of search without a model of other inputs.
6. Bottom line: reproducible dependency graph; achievable conditions of weak branch; what prevents direct application to puzzle; the final next audit or reason for refusing to brute force.A negative audit result is no exception Randstorm at all.

Results of the stages and intermediate conclusions: JOURNAL.md/RESULTS.md. Raw sources and errors: SOURCES.json. The protocol is stored until dynamic checks; changes are made in separate records.
