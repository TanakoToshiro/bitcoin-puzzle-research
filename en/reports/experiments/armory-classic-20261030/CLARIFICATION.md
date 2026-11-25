> English machine translation of the [Russian source](<../../../../ru/reports/experiments/armory-classic-20261030/CLARIFICATION.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/03-wallets.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# 2026-10-30 - full puzzle-keys and reference values before masking

Clarification after user comment: former phrase “solutions contain”
Cutting keys" without specifying the object was misleading.

**Published decisions – the full private keys of the respective puzzle-addresses.**
No unknown most significant bits at the solved puzzle-There's no key: they're zero.
A short hexadecimal record of an integer is not a publication of a fragment
In the first cycle, it's the entire published scalars that have been verified by computation
public keys and addresses by two implementations.

Another value is the initial output of a deterministic wallet **before** transformation
In the model under study, these are different integers:

```text
raw_i — исходный выход кошелька / генератора
d_i   = 2^(i−1) + (raw_i mod 2^(i−1))
address_i = P2PKH(compressed(d_i * G))
```

A well-known solution is completely d_i. It's just the younger ones i−1 rank
raw_i This is the model d_i zero 32 byte does not restore
overwritten raw_i. For example, in the conditional 8-bitwise
`10110110` After limiting to four significant bits, `00001110`.
Number 14 A full new key; a number 182 - the other, the original key.

## Re-examination of the historical basis

In the initial review, direct HTTP-request 403. Now the original page
The message opened through web-tool
[saatoshi_rising, 27 April 2017, message248](https://bitcointalk.org/index.php?topic=1306983.msg18765941#msg18765941).
The author of the account appears as the creator and describes successive keys
It's a deterministic wallet with masking to give complexity.

> It is just consecutive keys from a deterministic wallet (masked with leading 000...0001 to set difficulty).

Checked the availability of the message itself, not just someone else's retelling
evidence of the claimed method of creation; no independent
Author's cryptographic authentication Armory, MT19937,
specific seed The choice of a specific implementation remains a hypothesis.

## What the clarification changes in conclusion E3

Correct conclusion: **known complete finite puzzle-keys, but not installed,
That they are unmodified neighboring links of the classical Armory-chain**.
In the modelArmory → masking → puzzle”recovery formula chaincode needed
neighbouring raw_i, raw_(i+1), known d_i, d_(i+1). That's the limitation
The applicability of our positive control cannot be explained incompletely
publication of decisions.

Numbers 122 and 186 In the previous report, only non-observable positions are included raw
conditionally 256-They don't mean missing bits of published
Private keys are not proof of difficulty in recovery.

Numerical results E1–E3 They are the result of clearly defined models, not
provenance puzzle. E3 Check the historical implementation and
synthetic controls; he did not prove the impossibility of attacking all published
No new computations have been made in this refinement
The code and artifacts have been preserved; this entry clarifies the terminology of previous reports.
