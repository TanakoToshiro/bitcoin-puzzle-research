> [English](<../../../../en/reports/experiments/wallet-seed-audit-20261031/WALLET_MAP.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/01-historical-generators.md>) · [Документы серии](<INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).

# E9 — карта источников seed и деривации

Срез исследования 31.10.2026. Даты ниже — commit/tag в сохранённых первоисточниках, не установленная дата создания кошелька автора. Выбранные версии существовали до января 2015. Полнота всех кошельков и сборок не заявляется.

| Реализация / режим | Источник исходных данных | Дальнейшая цепочка | Что установлено |
|---|---|---|---|
| Electrum 1.9.8, обычное новое создание | ecdsa.util.randrange(2^128), в проверенной зависимости — os.urandom | 100000 SHA256-итераций → старый master → аддитивные дети | Штатный путь не равен Python MT или одному времени. |
| Electrum 1.9.8, опция bip32 | ecdsa.util.randrange(2^160), преобразование/отбор мнемоники | Альтернативный NewWallet, BIP32 | BIP32-ветвь присутствует уже в этом релизе, хотя не выбирается по умолчанию. Полный перебор/восстановление этой ветви не выполнены. |
| Armory, commit 2015-01-08 | Crypto++ AutoSeededX917RNG<AES>, системная энтропия | root → производный chaincode → классическая цепочка | Уже исследовано E3. В просмотренном штатном пути не найден короткий timestamp seed. |
| bitcoinj 0.12, новый HD | SecureRandom.nextBytes, по умолчанию 128 бит entropy | BIP39, 2048 PBKDF2-HMAC-SHA512 → BIP32 m/0'/0/i и m/0'/1/i | Качество зависит от конкретного JVM/OS-провайдера; автоматически считать Java Random48 нельзя. |
| bitcoinj 0.12, миграция старого | Первые 16 байтов старейшего не подлежащего ротации приватного ключа | BIP39 с пустой passphrase → BIP32 | Сохраняет максимум 128 бит исходной энтропии; если старый ключ слаб, HD-переход не делает его сильным. Само сокращение качественного ключа до 128 бит не является практической уязвимостью. |
| Libbitcoin Explorer 2.0.0 + GNU libstdc++ | Одно значение random_device → minstd_rand0 | seed-байты → hd-new → BIP32 | Не более 2^31−2 состояний независимо от длины seed; это конкретный слабый путь. Связь автора puzzle с ним не установлена. |
| Bitcoin Core 0.9.3, штатный keypool | OpenSSL RAND_bytes для каждого нового ключа | Независимые CKey::MakeNewKey | Это не HD-цепочка в просмотренном режиме. Использование Core для импорта/подписи не исключает другой генератор. |

## Electrum: важно различать обычный режим и опцию

Commit `f92b483942d3f8ee51506e0436d9b524db33a336`, 2014-03-16; аннотированный tag 1.9.8 указывает на него. Файл version.py подтверждает номер. Новое создание без config.bip32 выбирает OLD_SEED_VERSION, а с опцией — NEW_SEED_VERSION.

- [Выбор реализации, wallet.py:1818](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/lib/wallet.py#L1818).
- [OldWallet.init_seed, wallet.py:1717](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/lib/wallet.py#L1717); [random_seed, bitcoin.py:524](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/lib/bitcoin.py#L524).
- [python-ecdsa 0.11 randrange:19–55](https://github.com/tlsfuzzer/python-ecdsa/blob/36e9cfa80fcf8b53119adc787e54a5892ec1eb2c/ecdsa/util.py#L19): по умолчанию os.urandom, при неудачном отборе исключение, а не fallback к timestamp. Детерминированные вспомогательные функции ниже по файлу не являются этим стандартным вызовом.
- [Старая деривация, account.py:70](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/lib/account.py#L70); [альтернативное создание, wallet.py:281](https://github.com/spesmilo/electrum/blob/f92b483942d3f8ee51506e0436d9b524db33a336/lib/wallet.py#L281).

Наличие `import random` в большом файле не доказывает использование MT для seed. Зависимость setup.py допускает ecdsa>=0.9, поэтому проверка 0.11 не охватывает каждую историческую установленную версию. Исторические векторы старой деривации уже проверены E7; здесь они не пересчитывались.

## bitcoinj: миграция — самостоятельная гипотеза

Commit `83a9a71f3fff3f223d0737ad758b519a39dbbd62`, 2014-10-02, tag v0.12. [Официальные release notes](https://bitcoinj.org/release-notes) описывают переход на HD по умолчанию и миграцию старых кошельков.

- [KeyChainGroup.java:776–814](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/wallet/KeyChainGroup.java#L776): выбирает oldest key after rotation cutoff, читает 32-байтный secret, оставляет bytes[0:16], использует пустую passphrase.
- [ECKey.java:902](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/core/ECKey.java#L902): приватный ключ сериализуется в 32 байта. Речь о старших 128 битах, не младших.
- [DeterministicSeed.java:103](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/wallet/DeterministicSeed.java#L103): entropy преобразуется в mnemonic и затем seed; нельзя просто передать эти 16 байтов непосредственно в BIP32.
- [MnemonicCode.java:126](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/crypto/MnemonicCode.java#L126): исполняемый PBKDF2_ROUNDS=2048. Комментарий о 4096 рядом с вызовом устарел; реализованную константу нельзя заменять этим комментарием.
- [DeterministicKeyChain.java:108](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/wallet/DeterministicKeyChain.java#L108): реальный путь m/0'/0/i или m/0'/1/i, а не автоматически BIP44.

Нельзя автоматически связать миграцию с Android-ошибкой 2013: код учитывает ротацию старых слабых ключей; нужно подтвердить приложение/провайдер/историю. [Первичное уведомление 2013 года](https://bitcoin.org/en/alert/2013-08-11-android) действительно описывает проблему и необходимость ротации, но не идентифицирует кошелёк автора puzzle. Ограниченный набор старых ключей для практического поиска в этом проходе не найден.

## BX 2.0.0: конкретное сужение seed-пространства

Commit `aae99b278fdbfa31005cfa083ccbbf909212cbe4`, 2014-12-14. Это реальный путь доступного тогда инструмента, а не произвольный самодельный PRNG.

- [random_fill, utility.cpp:116](https://github.com/libbitcoin/libbitcoin-explorer/blob/aae99b278fdbfa31005cfa083ccbbf909212cbe4/src/utility/utility.cpp#L116): одно начальное значение random_device, default_random_engine, затем `% numeric_limits<uint8_t>::max()` — делитель 255.
- [Значение по умолчанию — 128 бит, seed.hpp:159](https://github.com/libbitcoin/libbitcoin-explorer/blob/aae99b278fdbfa31005cfa083ccbbf909212cbe4/include/bitcoin/explorer/commands/seed.hpp#L159).
- [GCC 4.9.2 random.h:1571](https://github.com/gcc-mirror/gcc/blob/releases/gcc-4.9.2/libstdc%2B%2B-v3/include/bits/random.h#L1571): default_random_engine=minstd_rand0; параметры a=16807,c=0,m=2147483647 определены выше. [Нормализация начального состояния](https://github.com/gcc-mirror/gcc/blob/releases/gcc-4.9.2/libstdc%2B%2B-v3/include/bits/random.tcc#L120).
- [hd-new](https://github.com/libbitcoin/libbitcoin-explorer/blob/aae99b278fdbfa31005cfa083ccbbf909212cbe4/src/commands/hd-new.cpp) принимает сырые seed-байты; [hd-private](https://github.com/libbitcoin/libbitcoin-explorer/blob/aae99b278fdbfa31005cfa083ccbbf909212cbe4/src/commands/hd-private.cpp) явно задаёт номер и hardened-флаг.

У штатного seed-вывода не бывает байта ff, но после HMAC/BIP32 этот признак не переносится на дочерние ключи. Главная проблема — мощность исходного пространства, а не заметная корреляция дочерних ключей. std::default_random_engine зависит от C++-библиотеки: результат GNU нельзя переносить без проверки на libc++/MSVC. Установленная машина автора неизвестна.

Авторы [Milk Sad](https://milksad.info/disclosure.html#suspected-rng-problems-in-older-bx-versions) уже выделяли старый путь 2.x как потенциально слабый. Наш вклад здесь — закрепление версии и GNU-варианта, точное воспроизведение seed→BIP32 и ограниченный тест именно публичной puzzle. Современный 3.x с MT и clock seed появился позже; его нельзя приписывать созданию puzzle в 2015 году. Полный исторический build-lock bx/version2 не восстановлен; семантика деривации сверена собственными тестовыми векторами bx этого commit.

## Уже известные ограничения штатных путей

[Armory E3](<../armory-classic-20261030/NOTES.md>) уже проследил root→chaincode и системную энтропию. [Bitcoin Core 0.9.3 key.cpp:361](https://github.com/bitcoin/bitcoin/blob/40d20412ff173e8eea2f456fd749663c8cabda18/src/key.cpp#L361) и [wallet.cpp:45](https://github.com/bitcoin/bitcoin/blob/40d20412ff173e8eea2f456fd749663c8cabda18/src/wallet.cpp#L45) подтверждают независимое создание ключей в keypool. Наличие таких функций не является доказательством качества конкретной ОС, состояния OpenSSL или всей сборки. Здесь не проведён полный аудит отказов API, аппаратных RNG и провайдеров.

Известные решения puzzle — полные ключи после маскирования. Они не равны автоматически исходным дочерним ключам и не дают исходный seed обычного надёжного кошелька.
