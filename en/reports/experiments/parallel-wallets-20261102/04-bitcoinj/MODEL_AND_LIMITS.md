> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/parallel-wallets-20261102/04-bitcoinj/MODEL_AND_LIMITS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/03-wallets.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# B4 Byte model and limits

## Normal derivation

`n` order secp256k1. Staffed BIP39-route 128-bit entropy posture
default, English mnemonic s checksum vacant passphrase tested
creation/upgrade. `S = PBKDF2-HMAC-SHA512(words, "mnemonic", 2048, 64)`.
Next `I=HMAC-SHA512("Bitcoin seed",S)`, `k_m=parse256(I_L)`, `c_m=I_R`.
Commentary in MnemonicCode on 4096 Iterations do not correspond to the executable
constant 2048; It's already been noted E9.

Path: `m → m/0' → m/0'/b → m/0'/b/i`, b∈{0,1}. From root to account — hardened,
further normal. It's not BIP44. Each CKD uses its own parent chaincode:

```text
normal:   data = serP_compressed(K_parent) || ser32_BE(index)
hardened: data = 00 || ser256_BE(k_parent) || ser32_BE(index|0x80000000)
I = HMAC-SHA512(c_parent, data)     # data length = 37 bytes
k_child = (k_parent + parse256(I_L)) mod n
K_child = K_parent + parse256(I_L)*G   # only normal public path
c_child = I_R
```

IL/IR -by 32 Higher zeros private key remain fixed
32/33-byte HMAC-serialization; signed `BigInteger.toByteArray` is not
new seed-format. Invalid private child zero-point scalar and public infinity
They're rejected public-only parent hardened derivation It's forbidden.
[HDKeyDerivation](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/crypto/HDKeyDerivation.java),
[DeterministicKey serialization](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/crypto/DeterministicKey.java#L151).

Shared with sibling — parent point/scalar and chaincode. IL new IR depend on
HMAC a message that includes a specific index issued counter, neither lookahead
non-disclose IL. Standard vectors 2014 and independent byte verification
preserved Java nodes confirm normal BIP32-model.

## Two Historically Discovered edge case

1. `assertLessThanN` check-in `integer.compareTo(n) > 0`. **IL=n passing**,
   though BIP32 reject IL≥n. If you're filing one child HMAC-output,
   `(k+n) mod n = k`that is scalar/point child repeat parent, ? IR maybe
   It's different IL bytes - accurate 32-byte n:
   `fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141`.
   The inspection is also called in master validation; acceptance n this helper not
   signify master public point.
2. Retry shifter `child = child.num() + nAttempts` already changed child.
   With successive failures, starting with j he tries
   **j, j+1, j+3, j+6, j+10, ...**, before 100 attempts, while maintaining hardened-flag.
   Checked on the original JAR: subclass parent throw away
   `HDDerivationException` first 0–4 times, final indices 0/1/3/6/10.
   It's fault injection, unfound HMAC failures.

Lookahead preserve child index and continues with it +1.
`getNumChildren` return lastIndex+1, It's not the power of the set after the omissions.
The output cycle requests the initial sequential paths, so that
Exports of exceptional passes cannot be considered unrecognized
No holes, combined end-to-end fault injection into issuing API It has not been fulfilled;
self-tested retry and its calling code.

For an idealized uniform IL event IL=n likely 2^-256.
Normal invalid IL≥n probability of order 2^-127.65. These assessments are a model
HMAC, It's not proof of the distribution of a particular wallet equality not
makes ordinary indices limited or seed short. Two consecutive
natural invalid-child It is not a practical source of indices
for hundreds of keys. New restrictions raw children A normal wallet from these
edge cases Not received.

## Migration: What's Really Common

V old wallet `upgradeToDeterministic` choose oldest imported key timelessly
**strictly** rotation cutoff. The first time is equal to the last
from the order of import 32-byte secret take off **first 16 bytes**:

```text
d_old = H*2^128 + L
entropy = ser128(H)
entropy → BIP39 words → 64-byte seed → BIP32 master → account 0'
```

Old ones loose keys It's still there, new HD account It's not another
arithmetic child old-timer EC-The keys are cloned old backups equally
key-plate/cutoff give HD-family, change only L leaves seed
the same; change H usually seed. All of these links are checked on synthetic.
Choice of the other old key After the rotation, it can change the family. timestamp choose
file-key birthday, It doesn't ask entropy.
[upgrade](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/wallet/KeyChainGroup.java#L776),
[strict time selection](https://github.com/bitcoinj/bitcoinj/blob/83a9a71f3fff3f223d0737ad758b519a39dbbd62/core/src/main/java/org/bitcoinj/wallet/BasicKeyChain.java#L555).

Repeated upgrade already HD group Prohibited; Creating a new active HD chain
uses new SecureRandom seed. Saved account/branch chaincodes —
routine IR relevant transitions, general chaincode independent
It doesn't impose code on the creations mnemonic, seed and key records into backup
does not add independent leakage if the content backup unavailable.

## A new accurate calculation of information about migration entropy

Condition: The observation really applies to **raw old loose key,
migrationist**, not just HD child final Puzzle
key. Such conformity has not been established for the author.

It's a mask known `d_old mod 2^b = r`, b=i−1. Primary b≤128 it's mostly
limit L; upon b>128 reveals `H mod 2^(b−128)`.
Exact ranges are taken into account `1≤d_old<n`, including an incomplete upper block:

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

Proof of completeness: when M≤2^128 intermediate prefix-cellwidth
2^128 contains the allowable residue; if M>2^128 next raw candidate
shifting H flatly M/2^128. Zero secret ruled out d_first.
Positive and negative sets are verified by a complete search of small models
n=251/4093 s 4/6 tail bits: **8702 precision-system**.

On the Longest Real Mask No135 b=134, from H known 6 junior
For her residue number H-candidate **2^122**. That number
candidate prefix-Not the lower limit of any possible
Attacks, not residual entropy after all HMAC-Equations and not a statement of number
Fully compatible wallets H include BIP39 PBKDF2 and HD;
A full-size brute force was not launched
2^32 In this way, it would be necessary to 224 raw low bits, index
near225, plus proven conformity old migration origin.

Summarize bits of several different loose keys bit-like H You can't.
If it is HD children, their limitations pass through BIP39/HMAC, free
IL-Variables are not a wallet implementation
final-key Puzzle instead of raw meant to reveal
unsubmitted information.

## Minimum Entry and Different Recovery Goals

| Available artifact | What's calculated | What doesn't happen automatically |
|---|---|---|
| Code + masked decision-making + indexes | Only partial raw observations; public offsets built | No account private, neither master xprv, neither seed |
| Account xpub `m/0'` + precise branch/index + longer masked observation | Offsets everyone normal children; lesser-mask 3 candidate | Account scalar/seed They are not restored by this forecast |
| Account xpub + full-fledged **raw** non-hardened private child + path | Account scalar `k_A = k_child − a_path mod n`test k_A G = K_A; xprv account | Master xprv through hardened 0' does not apply subtraction |
| Only private scalar needlessly chaincode | Access to it EC-key | Not xprv and not all HD-family |
| Completely selected old migration key or high 16 bytes | BIP39 seed, master xprv and progeny | Doesn't prove that origin really |
| Plaintext signing backup s mnemonic/seed/root private | It already has enough secrets to restore | This is a user-accessible file, not public blockchain-data |

For account xpub `a_i=(IL_branch+IL_leaf_i) mod n` and
`raw_i=k_A+a_i−t_i*n`, t_i∈{0,1}. Therefore, b_i≤b_j:

```text
raw_i mod 2^b_i ∈ { r_j + a_i − a_j + u*n mod 2^b_i : u ∈ {-1,0,1} }
```

It's a formula **HD-01**, not a new attack B4. The new adapter is being adopted
proven bitcoinj account profile Explicit indices; from a separate solver
concealment seed full and raw children. Four synthetic wallets
Real masks are treated/pass-through snapshot, four training indices
120/125/130/135 then 79 other synthetic masks. Purpose No71 tested
address; the result is not a new key of the present Puzzle.

Each of the four positive launches used 6 HMAC-SHA512, 6 public CKD
and 3 To check the address C presumed xpub and L pre-reasoned mappings
The cost of verification is approximately as C·L, separate EC/HMAC
Operations; full general search for unknown xpub That doesn't work. Source xpub
should be treated the same **raw** HD-family. Puzzle public point post-mask
such xpub or raw-child point He's not.
