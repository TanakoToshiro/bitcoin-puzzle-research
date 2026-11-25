> [English](<../../../../en/reports/experiments/archive-attachments-20261102/LINK_TRIAGE.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/05-signatures-and-provenance.md>) · [Документы серии](<INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).

# Проверка ссылок на вложения

Статус context_only означает отбор по сообщению, а не чтение файла. unavailable/unresolved_access не считаются отрицательным разбором.

| Статус | URL | Основание |
|---|---|---|
| context_only | [pollard_kangaroo.txt](http://bitchain.pl/100btc/pollard_kangaroo.txt) | Файл для/о kangaroo рядом с публичным каталогом Puzzle; не заявлен как экспорт кошелька. Содержимое не прочитано. |
| content_checked | [erN0F1ce](http://pastebin.com/erN0F1ce) | Sage/Lagrange по уже известным первым решениям, не генератор автора. |
| out_of_scope | [announce.txt](http://www.hashcash.org/papers/announce.txt) | Общая документация, статья или программная зависимость; нет признаков целевых файлов. |
| out_of_scope | [openssl-1.0.1a.tar.gz](http://www.openssl.org/source/old/1.0.1/openssl-1.0.1a.tar.gz) | Общая документация, статья или программная зависимость; нет признаков целевых файлов. |
| unavailable | [100bit_txt](https://anonfiles.com/a750taA8n6/100bit_txt) | Контекст: список 2048 производных адресов. Точный CDX []; исходное содержимое не получено. |
| content_checked | [Bitcoin-Puzzle-Evidence-Archive.zip](https://archive.org/download/the-1000-btc-bitcoin-puzzle-case-funding-payouts-and-on-chain-connections/Bitcoin-Puzzle-Evidence-Archive.zip) | Позднее досье Virtuose: 195 элементов, целевых форматов нет. |
| context_only | [btcpuzzle%20.rar](https://bitcoinpuzzle.ru/btcpuzzle%20.rar) | Архив программы для поиска, обсуждение её распространения; не диагностический архив Armory. |
| context_only | [LsEWmhs3ArM7Tw](https://disk.yandex.ru/i/LsEWmhs3ArM7Tw) | Ссылка дана рядом с материалами о вероятностях; тип и содержимое файла не проверены, wallet export в сообщении не заявлен. |
| context_only | [edit?usp=sharing](https://docs.google.com/spreadsheets/d/1vZyRZ67iNl7aIwYNB55OY8LvZLAaoBxSanxqnGMZlWA/edit?usp=sharing) | Пользовательская таблица исследования Puzzle; признаков целевого формата в сообщении нет. |
| context_only | [176gIM6ACTyZg5Ux5Adsu-kP5S3LspLcU?usp=drive_link](https://drive.google.com/drive/folders/176gIM6ACTyZg5Ux5Adsu-kP5S3LspLcU?usp=drive_link) | Автор описывает собственные вычисленные поддиапазоны, не исходные wallet logs. |
| context_only | [1P-94tGIjwhbvItMPlLqZPzsHSLfbLMYi](https://drive.google.com/drive/folders/1P-94tGIjwhbvItMPlLqZPzsHSLfbLMYi) | Автор описывает собственный анализ near misses для #145; гипотеза, не экспорт создателя. |
| context_only | [view?usp=sharing](https://drive.google.com/file/d/12EMovvYrAU7OtRUIeXR90A1UfRqtNk09/view?usp=sharing) | Программы/примеры перебора WIF участника JimsR, не экспорт исходного кошелька. |
| context_only | [view?usp=drive_link](https://drive.google.com/file/d/19Fp1oBU9nPTqkztKlEdTV7CJYecam8Hl/view?usp=drive_link) | База преобразованных public points #135, вычисленная участником. |
| context_only | [view?usp=sharing](https://drive.google.com/file/d/19Fp1oBU9nPTqkztKlEdTV7CJYecam8Hl/view?usp=sharing) | База преобразованных public points #135, вычисленная участником. |
| context_only | [view?usp=sharing](https://drive.google.com/file/d/1HvlzxWtziYY4Ewd1GsDHplaG851KqrqC/view?usp=sharing) | База преобразованных адресов #135; не xpub/chaincode. |
| context_only | [view?usp=sharing](https://drive.google.com/file/d/1OZQAwZjMUkfiySSr1GlQaYivY76uAUc3/view?usp=sharing) | База преобразованных public points #135; не xpub/chaincode. |
| context_only | [view?usp=sharing](https://drive.google.com/file/d/1R3gJtvnZYdTuCiKeNnKAYSufardzG0mm/view?usp=sharing) | secp256k1Visual.html, визуализатор кривой. |
| context_only | [view?usp=drive_link](https://drive.google.com/file/d/1UQEGXmGQL509Zu0g1XpLf1raC5pzeuqX/view?usp=drive_link) | Программы/примеры перебора WIF участника JimsR, не экспорт исходного кошелька. |
| unresolved_access | [view?usp=drivesdk](https://drive.google.com/file/d/1au9y4npBxKaCjV3fIrn_ytemEBr0KTzN/view?usp=drivesdk) | Неописанная ссылка Drive. Connector 404, публичная страница 401; тип неизвестен. |
| context_only | [view?usp=drive_link](https://drive.google.com/file/d/1ehe1cnNDna8_Sc8VtbTPyF1QhYRKQt9j/view?usp=drive_link) | Программы/примеры перебора WIF участника JimsR, не экспорт исходного кошелька. |
| context_only | [view?usp=sharing](https://drive.google.com/file/d/1mh24LpF-iJl6odVHM8jFmeHbHP7yf9RI/view?usp=sharing) | График распределения известных решений, рядом приведён код построения. |
| context_only | [view?usp=sharing](https://drive.google.com/file/d/1oe_VWof79mFiHTqXW8sTp2RTpvW0UZrk/view?usp=sharing) | Программы/примеры перебора WIF участника JimsR, не экспорт исходного кошелька. |
| context_only | [view?usp=drivesdk](https://drive.google.com/file/d/1oxUic5NGg0h5wmx5bvWE6NFgOW3Jy-dP/view?usp=drivesdk) | Фотографии обстановки/оборудования по ответу на сообщение, не wallet export. |
| context_only | [view?usp=drivesdk](https://drive.google.com/file/d/1pO9gLeyMD6bdchKSxAb-Or1NXTWAC6B3/view?usp=drivesdk) | Фотографии обстановки/оборудования по ответу на сообщение, не wallet export. |
| context_only | [view?usp=sharing](https://drive.google.com/file/d/1uPUL2EOrDbKw1WVSLIFUjHCcLGPlkbvb/view?usp=sharing) | Программы/примеры перебора WIF участника JimsR, не экспорт исходного кошелька. |
| context_only | [view?usp=sharing](https://drive.google.com/file/d/1zig8usXOQmqRZD5xlSHndNf5RRir-eg2/view?usp=sharing) | Собственный журнал проверенных диапазонов Keyhunt-Cuda. |
| out_of_scope | [](https://ecampusontario.pressbooks.pub/sccstatistics/chapter/the-uniform-distribution/) | Общая документация, статья или программная зависимость; нет признаков целевых файлов. |
| content_checked | [e9a52fcf08b14934a5e8e96ae967c729](https://gist.github.com/Kowala24731/e9a52fcf08b14934a5e8e96ae967c729) | prefixVsSequential.js — сравнение стратегий поиска. |
| content_checked | [797bb412868ce959dcd0a2981322fd2a](https://gist.github.com/glozow/797bb412868ce959dcd0a2981322fd2a) | Описание RBF, не Electrum unsigned metadata. |
| content_checked | [2e39b3c6c49b1d7b216b8626197e4b89](https://gist.github.com/jhoenicke/2e39b3c6c49b1d7b216b8626197e4b89) | break-short.c, опубликованный решатель, не исходный кошелёк. |
| context_only | [proofs.txt](https://github.com/Kowala24731/btc67/blob/main/src/main/resources/com/btc67/proofs.txt) | Доказательства выполненной поисковой работы, не журнал Armory. |
| context_only | [fixtures.json](https://github.com/bitcoinjs/bip21/blob/master/test/fixtures.json) | Программные тестовые fixtures BIP21. |
| out_of_scope | [rockyou.txt](https://github.com/brannondorsey/naive-hashcat/releases/download/data/rockyou.txt) | Словарь паролей; к целевым артефактам не относится. |
| context_only | [?u=https%3A%2F%2Fcdn.discordapp.com%2Fattachments%2F5990474320760](https://ip.bitcointalk.org/?u=https%3A%2F%2Fcdn.discordapp.com%2Fattachments%2F599047432076001292%2F603240922842529814%2FUnbenannt.PNG&t=611&c=5PeTBKa6T_WsCA) | Изображение/иллюстрация по ссылке и контексту; не заявлено как кошелёк или диагностический пакет. |
| context_only | [?u=https%3A%2F%2Fmedia.discordapp.net%2Fattachments%2F59171669933](https://ip.bitcointalk.org/?u=https%3A%2F%2Fmedia.discordapp.net%2Fattachments%2F591716699338964993%2F591911466215407616%2FUnbenannt.PNG&t=611&c=JDJi572rk7hm1g) | Изображение/иллюстрация по ссылке и контексту; не заявлено как кошелёк или диагностический пакет. |
| out_of_scope | [lasVegas.pdf](https://issc.unipune.ac.in/attachments/lasVegas.pdf) | Общая документация, статья или программная зависимость; нет признаков целевых файлов. |
| context_only | [Captura_de_tela_2025-06-19_112456.png?ex=68556fc2&is=68541e42&hm=](https://media.discordapp.net/attachments/1379824747117940887/1385264671270899774/Captura_de_tela_2025-06-19_112456.png?ex=68556fc2&is=68541e42&hm=5912b561312925724e091f60a2247277ba4eec0a768e17c2805e32e5e976f04a&=&format=webp&quality=lossless&width=1474&height=423) | Изображение/иллюстрация по ссылке и контексту; не заявлено как кошелёк или диагностический пакет. |
| context_only | [kjQ1xbZL#EIm-r_tyaq2xFChIFuTv2wMgmGS-NI2-J0NIFc7yV7g](https://mega.nz/file/kjQ1xbZL#EIm-r_tyaq2xFChIFuTv2wMgmGS-NI2-J0NIFc7yV7g) | Миллион адресных префиксов, сгенерированных участником. |
| content_checked | [07uVytn1](https://pastebin.com/07uVytn1) | Опубликованная таблица решений и диапазонов. |
| context_only | [7YVmeyfQ](https://pastebin.com/7YVmeyfQ) | Скрипт скачивания сообщений форума. |
| content_checked | [8Z69sRcU](https://pastebin.com/8Z69sRcU) | Симулятор Pollard kangaroo, не wallet export. |
| content_checked | [bAFPpkpL](https://pastebin.com/bAFPpkpL) | Анализ доказательств диапазонного поиска Kowala. |
| out_of_scope | [rDUw5Kyf](https://pastebin.com/rDUw5Kyf) | Публичные точки посторонних транзакций 2011/2019, связь с Puzzle не установлена. |
| out_of_scope | [syrmi3ET](https://pastebin.com/syrmi3ET) | Исторический материал об истоках Bitcoin. |
| context_only | [BTC32_solved_unsolved.txt](https://raw.githubusercontent.com/HomelessPhD/BTC32/main/BTC32_solved_unsolved.txt) | Таблица известных решений, не исходный export. |
| out_of_scope | [66.txt](https://toadstyle.org/cryptopals/66.txt) | Материал другого учебного задания. |
| unavailable | [7fNYf.txt](https://u.teknik.io/7fNYf.txt) | Текущий URL 404; точный CDX [] не доказывает отсутствие любых архивных копий. Контекст: распределение решений по диапазонам. |
| out_of_scope | [bmoney.txt](https://web.archive.org/web/20061202010422/http://www.weidai.com/bmoney.txt) | Общая документация, статья или программная зависимость; нет признаков целевых файлов. |
| out_of_scope | [MersenneTwister.pdf](http://developer.download.nvidia.com/compute/cuda/2_2/sdk/website/projects/MersenneTwister/doc/MersenneTwister.pdf) | Общая документация, статья или программная зависимость; нет признаков целевых файлов. |
| context_only | [rule110.jpg](http://math-blog.com/wp-content/uploads/2011/05/rule110.jpg) | Изображение/иллюстрация по ссылке и контексту; не заявлено как кошелёк или диагностический пакет. |
| content_checked | [Bitcoin-Puzzle-Evidence-Ledger.xlsx](https://archive.org/download/the-1000-btc-bitcoin-puzzle-case-funding-payouts-and-on-chain-connections/Bitcoin-Puzzle-Evidence-Ledger.xlsx) | Таблица блокчейн-доказательств; ZIP/XML просмотрены по сигнатурам. |
| context_only | [82c546a000e18ceeb9666fc7dff7da39](https://bitcoinpuzzle.ru/files/download/276/82c546a000e18ceeb9666fc7dff7da39) | Раздача поисковой программы участником, не wallet export. |
| context_only | [9d50f05c.png](https://bitcoinpuzzle.ru/upload/000/u1/3/2/9d50f05c.png) | Изображение/иллюстрация по ссылке и контексту; не заявлено как кошелёк или диагностический пакет. |
| out_of_scope | [](https://coinledger.blog/after-verification-click-go-to-download-file/) | Рекламная ссылка на guide/download; нет происхождения от создателя. |
| out_of_scope | [cuda-downloads?target_os=Windows&target_arch=x86_64](https://developer.nvidia.com/cuda-downloads?target_os=Windows&target_arch=x86_64) | Общая документация, статья или программная зависимость; нет признаков целевых файлов. |
| out_of_scope | [cu126](https://download.pytorch.org/whl/cu126) | Общая документация, статья или программная зависимость; нет признаков целевых файлов. |
| context_only | [download?id=1mAX4kdXaYSBYYGtgQf30Sw_Zkhl2GC3r&export=download&con](https://drive.usercontent.google.com/download?id=1mAX4kdXaYSBYYGtgQf30Sw_Zkhl2GC3r&export=download&confirm=yes) | Общая база HASH160 адресов с балансами плюс Puzzle; не детерминированные параметры. |
| out_of_scope | [BSGS.exe](https://github.com/JeanLucPons/BSGS/releases/download/1.1/BSGS.exe) | Общая документация, статья или программная зависимость; нет признаков целевых файлов. |
| out_of_scope | [Untitled4.ipynb](https://github.com/nikolayspb1981/NFTs-Upload-to-OpenSea/blob/8761dcff2b4a031957e5884327a25ad8e641fca8/Untitled4.ipynb) | Общая документация, статья или программная зависимость; нет признаков целевых файлов. |
| context_only | [94dd82af4d7155e548aa7241df9b3206.png](https://habrastorage.org/r/w1560/getpro/habr/upload_files/94d/d82/af4/94dd82af4d7155e548aa7241df9b3206.png) | Изображение/иллюстрация по ссылке и контексту; не заявлено как кошелёк или диагностический пакет. |
| context_only | [?u=https%3A%2F%2Fmiguelmoreno.net%2Fwp-content%2Fuploads%2F2013%2](https://ip.bitcointalk.org/?u=https%3A%2F%2Fmiguelmoreno.net%2Fwp-content%2Fuploads%2F2013%2F05%2FfYFBsqp.jpg&t=611&c=0GfWF0urwPbNBg) | Изображение/иллюстрация по ссылке и контексту; не заявлено как кошелёк или диагностический пакет. |
| context_only | [?u=https%3A%2F%2Fwww.diamondpaintingquality.it%2Fwp-content%2Fupl](https://ip.bitcointalk.org/?u=https%3A%2F%2Fwww.diamondpaintingquality.it%2Fwp-content%2Fuploads%2F2021%2F04%2FDPQ3422-R25X30cm.jpg&t=686&c=vuDRazEPfODWoQ) | Изображение/иллюстрация по ссылке и контексту; не заявлено как кошелёк или диагностический пакет. |
| out_of_scope | [downloads.html](https://qalculate.github.io/downloads.html) | Общая документация, статья или программная зависимость; нет признаков целевых файлов. |
| out_of_scope | [cryptocurrency-whitepaper.pdf](https://quantumai.google/static/site-assets/downloads/cryptocurrency-whitepaper.pdf) | Общая документация, статья или программная зависимость; нет признаков целевых файлов. |
| out_of_scope | [strawberry-perl-5.32.1.1-64bit.msi](https://strawberryperl.com/download/5.32.1.1/strawberry-perl-5.32.1.1-64bit.msi) | Общая документация, статья или программная зависимость; нет признаков целевых файлов. |
| context_only | [giphy.gif](https://www.daskeyboard.com/blog/wp-content/uploads/giphy.gif) | Изображение/иллюстрация по ссылке и контексту; не заявлено как кошелёк или диагностический пакет. |
| context_only | [AA-v-Persons-Unknown-summary-case-note-SB-amended-1.pdf](https://www.judiciary.uk/wp-content/uploads/2022/07/AA-v-Persons-Unknown-summary-case-note-SB-amended-1.pdf) | Изображение/иллюстрация по ссылке и контексту; не заявлено как кошелёк или диагностический пакет. |
| out_of_scope | [](https://www.python.org/downloads/) | Общая документация, статья или программная зависимость; нет признаков целевых файлов. |
