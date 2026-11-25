> [English](<../../../../../en/reports/experiments/parallel-wallets-20261102/04-bitcoinj/MODEL_AND_LIMITS.md>) · [Выбор языка](<../../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../../README.md>) · [Направление](<../../../../topics/03-wallets.md>) · [Документы серии](<../INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../../docs/LATEST_RESULTS.md>).

# B4 — байтовая модель и пределы

## Нормальная деривация

`n` — порядок secp256k1. Штатный BIP39-путь использует 128-битную entropy по
умолчанию, английскую mnemonic с checksum и пустую passphrase в проверенном
создании/upgrade. `S = PBKDF2-HMAC-SHA512(words, "mnemonic", 2048, 64)`.
Далее `I=HMAC-SHA512("Bitcoin seed",S)`, `k_m=parse256(I_L)`, `c_m=I_R`.
Комментарий в MnemonicCode о 4096 итерациях не соответствует исполняемой
константе 2048; это уже отмечено E9.

Путь: `m → m/0' → m/0'/b → m/0'/b/i`, b∈{0,1}. От root к account — hardened,
дальше normal. Это не BIP44. Каждая CKD использует собственный parent chaincode:

```text
normal:   data = serP_compressed(K_parent) || ser32_BE(index)
hardened: data = 00 || ser256_BE(k_parent) || ser32_BE(index|0x80000000)
I = HMAC-SHA512(c_parent, data)     # data length = 37 bytes
k_child = (k_parent + parse256(I_L)) mod n
K_child = K_parent + parse256(I_L)*G   # only normal public path
c_child = I_R
```

IL/IR — по 32 байта. Старшие нули private key сохраняются до фиксированной
32/33-байтной HMAC-сериализации; signed `BigInteger.toByteArray` не является
новым seed-форматом. Invalid private child с нулевым scalar и public infinity
отвергаются. От public-only parent hardened derivation запрещена.
[HDKeyDerivation](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/crypto/HDKeyDerivation.java),
[DeterministicKey serialization](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/crypto/DeterministicKey.java#L151).

Общее у sibling — parent point/scalar и chaincode. IL и новый IR зависят от
HMAC сообщения, включающего конкретный индекс. Ни issued counter, ни lookahead
не раскрывают IL. Стандартные векторы 2014 и независимая проверка байтов
сохранённых Java nodes подтверждают нормальную BIP32-модель.

## Два обнаруженных исторических edge case

1. `assertLessThanN` проверяет `integer.compareTo(n) > 0`. **IL=n проходит**,
   хотя BIP32 требует отклонять IL≥n. Если подать такой child HMAC-output,
   `(k+n) mod n = k`, то есть scalar/point ребёнка повторяет parent, а IR может
   отличаться. Нужные IL bytes — точное 32-байтное представление n:
   `fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141`.
   Проверка вызывается и при master validation; принятие n этим helper не
   означает корректный master public point.
2. Retry меняет `child = child.num() + nAttempts` уже от изменённого child.
   При последовательных отказах начиная с j он пробует
   **j, j+1, j+3, j+6, j+10, ...**, до 100 попыток, сохраняя hardened-флаг.
   Проверено на оригинальном JAR: subclass parent специально выбрасывает
   `HDDerivationException` первые 0–4 раза, итоговые индексы 0/1/3/6/10.
   Это fault injection, не найденные естественные HMAC failures.

Lookahead сохраняет фактический child index и продолжает с него +1.
`getNumChildren` возвращает lastIndex+1, а не мощность множества после пропусков.
Выдающий цикл запрашивает исходные последовательные пути, поэтому при
исключительных пропусках нельзя незаметно считать экспорт перенумерованным
без дырок. Совмещённый end-to-end fault injection в issuing API не выполнялся;
проверен сам retry и его вызывающий код.

Для идеализированного равномерного IL событие IL=n имеет вероятность 2^-256.
Обычный invalid IL≥n имеет вероятность порядка 2^-127.65. Эти оценки — модель
HMAC, не доказательство распределения конкретного кошелька. Ошибка equality не
делает обычные индексы ограниченными или seed коротким. Два последовательных
естественных invalid-child не превращаются в практический источник индексов
для сотен ключей. Новых ограничений raw children нормального кошелька из этих
edge cases не получено.

## Миграция: что действительно общее

В old wallet `upgradeToDeterministic` выбирает oldest imported key с временем
**строго больше** rotation cutoff. При равном времени остаётся первый по
порядку импорта. Из 32-байтного secret берутся **первые 16 байтов**:

```text
d_old = H*2^128 + L
entropy = ser128(H)
entropy → BIP39 words → 64-byte seed → BIP32 master → account 0'
```

Старые loose keys сохраняются, новый HD account не является ещё одним
арифметическим child старого EC-ключа. Клонированные old backups с тем же
выбранным ключом/cutoff дают ту же HD-семью. Изменение только L оставляет seed
тем же; изменение H обычно меняет seed. Все эти связи проверены на synthetic.
Выбор другого old key после ротации может изменить семью; timestamp выбирает
ключ из файла и служит birthday, а не задаёт его entropy.
[upgrade](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/wallet/KeyChainGroup.java#L776),
[strict time selection](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/wallet/BasicKeyChain.java#L555).

Повторный upgrade уже HD group запрещён; создание новой активной HD chain
использует новый SecureRandom seed. Сохранённые account/branch chaincodes —
обычные IR соответствующих переходов. Общего chaincode между независимыми
созданиями код не навязывает. Дублирование mnemonic, seed и key records в backup
не добавляет независимой утечки, если содержимое backup недоступно.

## Новый точный подсчёт информации о migration entropy

Условие: наблюдение действительно относится к **raw старому loose ключу,
который выбрала миграция**, а не просто к HD child либо окончательному Puzzle
key. Такое соответствие для автора не установлено.

Из маски известен `d_old mod 2^b = r`, b=i−1. При b≤128 это в основном
ограничивает L; при b>128 раскрывает `H mod 2^(b−128)`.
Точные диапазоны учитывают `1≤d_old<n`, включая неполный верхний блок:

```text
M = 2^b
d_first = r if r>0 else M
d_last = r + floor((n−1−r)/M)*M
if d_first>d_last: empty
H_first = floor(d_first/2^128)
H_last  = floor(d_last /2^128)
step = max(1, M/2^128)           # integer power of two
count = floor((H_last−H_first)/step)+1
```

Доказательство полноты: при M≤2^128 любая промежуточная prefix-ячейка ширины
2^128 содержит допустимый остаток; при M>2^128 каждый следующий raw кандидат
сдвигает H ровно на M/2^128. Нулевой secret исключён выбором d_first.
Положительные и отрицательные множества сверены полным перебором малых моделей
n=251/4093 с 4/6 tail bits: **8702 точные системы**.

На наиболее длинной реальной маске №135 b=134, от H известны только 6 младших
битов. Для её residue точное число H-кандидатов равно **2^122**. Это число
кандидатов предложенного prefix-перебора, не нижняя граница любой возможной
атаки, не остаточная энтропия после всех HMAC-уравнений и не заявление о числе
полностью совместимых кошельков. Проверка одного H включает BIP39 PBKDF2 и HD;
исчерпывающий полноразмерный перебор не запускался. Для остаточного домена
2^32 таким способом требовались бы около 224 raw low bits, то есть индекс
около №225, плюс доказанное соответствие old migration origin.

Суммировать биты нескольких разных loose keys как биты одного H нельзя.
Если это HD children, их ограничения проходят через BIP39/HMAC, а свободные
IL-переменные не являются реализацией кошелька. Применять миграцию к полному
окончательному ключу Puzzle вместо неизвестного raw означало бы раскрыть
непредоставленную информацию.

## Минимальные входы и разные цели восстановления

| Доступный артефакт | Что вычисляется | Что не следует автоматически |
|---|---|---|
| Код + masked решения + индексы | Только частичные raw observations; публичные offsets не построены | Ни account private, ни master xprv, ни seed |
| Account xpub `m/0'` + точные branch/index + более длинное masked observation | Offsets всех normal children; для меньшей маски до 3 кандидатов | Account scalar/seed не восстанавливаются этим прогнозом |
| Account xpub + полный **raw** non-hardened private child + путь | Account scalar `k_A = k_child − a_path mod n`, проверка k_A G = K_A; xprv account | Master xprv через hardened 0' не обращается вычитанием |
| Только private scalar без нужного chaincode | Доступ к этому EC-key | Не xprv и не вся HD-семья |
| Полный выбранный old migration key либо его high 16 bytes | BIP39 seed, master xprv и потомки | Не доказывает, что origin действительно этот ключ |
| Plaintext signing backup с mnemonic/seed/root private | Уже содержит достаточные секреты для восстановления | Это доступный пользователю файл, не публичные blockchain-данные |

Для account xpub `a_i=(IL_branch+IL_leaf_i) mod n` и
`raw_i=k_A+a_i−t_i*n`, t_i∈{0,1}. Поэтому для b_i≤b_j:

```text
raw_i mod 2^b_i ∈ { r_j + a_i − a_j + u*n mod 2^b_i : u ∈ {-1,0,1} }
```

Это формула **HD-01**, не новая атака B4. Новый адаптер принимает именно
проверенный bitcoinj account profile и явные индексы; от отдельного solver
процесса скрыты seed и полные raw children. На четырёх synthetic wallets
обработаны реальные маски/пропуски snapshot, четыре training indices
120/125/130/135 и затем 79 остальных synthetic masks. Цель №71 проверена по
адресу; результат не является новым ключом настоящего Puzzle.

Каждый из четырёх положительных запусков использовал 6 HMAC-SHA512, 6 public CKD
и 3 проверки адреса. Для C предполагаемых xpub и L заранее обоснованных mappings
стоимость проверки масштабируется примерно как C·L, с отдельными EC/HMAC
операциями; полного общего поиска по неизвестным xpub это не даёт. Source xpub
должен относиться к той же **raw** HD-семье. Puzzle public point после маски
таким xpub или raw-child point не является.
