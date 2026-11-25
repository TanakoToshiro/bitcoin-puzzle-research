> English machine translation of the [Russian source](<../../../../ru/reports/experiments/export-order-electrum-20261103/MATH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/07-masks-and-order.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# EXP-01 - order, public map and boundary of conclusions

## From source key to number puzzle

In the verifiable scenario:

```text
seed → old Electrum master s, MPK=sG
     → raw k_(c,j)=(s+H2(decimal(j):decimal(c): || ser64(MPK))) mod n
     → raw uncompressed address_(c,j)
     → таблица Python2 address→WIF
     → CSV-строка i
     → маскирование k_(c,j) по номеру i
```

Here i Post-permutation position, not index j receiving child.
Exports themselves Electrum The masking doesn't do it. It's an external scenario
Compatibility with the author’s actions Puzzle It's not set.

## Accurate table model

CPython2.7.9 string hash for ASCII, C long L bit:

```text
x = prefix XOR (first_byte << 7)
for byte in string: x = ((1000003*x) XOR byte) mod 2^L
x = x XOR length XOR suffix; interpret signed long; remap -1 to -2
```

Empty string has hash0. Maintained here ASCII unicode gives hash.
No hash randomization prefix=suffix=0. fixed PYTHONHASHSEED make-up
2*sizeof(long) byte LCG214013/2531011, byte=(state>>16)&255. It's hash seed,
not seed wallet. OS-random The modes use more unknown bits:
64bit hash-secret for Windows long32,128bit Linux long64; It's the length of the fields
Not estimating the actual entropy of a particular author's process.

Initial slot=hash&mask. Collisions i=5*i+perturb+1, later perturb>>=5;
perturb size size_t receives sign-extended negative hash.
Starting table8, growth after a new key fill*3>=size*2.
New size - minimum degree2 strictly4*used at used<=50000).
Perestroika reads old slots by ascending, not the history of inserts. Items reading
active slots in ascending. Delete leaves dummy, update let-out
Tests are limited<=1025 strings, branchused>50000 not confirmed native-The test.

Windows x86: long32,size32. Windows amd64: long32,size64. Linux LP64:long64,size64.
Therefore, simply call the model64-bit Python"not enough." None
universalhash, address child-index This model is not replaced.

## Why? MPK computational raw-address

For the famous MPK andc,j) compute offset a_(c,j) point

```text
P_(c,j) = MPK + a_(c,j)*G.
```

From her uncompressed serialization we get raw-address, then perform exactly the operations
insertion exporter. Private s You don't need it, but you do need a composition
pool, list/Import history and profile hash runtime; Their absence leaves them
Some maps. This work has been tested126 full of public reconstructions.
Random hash-secret In these tests, it was provided as an entrance, not restored.

Public keys and addresses already masked Puzzle tasks are not raw-addresses.
Masking does not preserve a public point, nor HASH160, linear hash Python.

## What does it mean to change the previous check?

If the old test was rejected k_i=F(master,i−1) with a certain disguise, this
non-denial k_i=F(master,pi(master,profile,pool)[i]These are different models.
The second is computable for the candidate master/MPK, but without pi It's usually unknown.
You can't move freely pi posture83 Known keys: only a shift is allowed,
real-world exporter. It is not possible to calculate a single card in advance using
casual synthetic master, And then apply it to everyone else.

Order alone does not reduce entropy seed/master. With the right public
In the artifact, it eliminates the matching error and returns the applicability of the conditional
method EL-02. In the absence of an artifact, a new cheap way to restore master
Not received. Historic export1.9.8 pure old account remains piecemeal
receiving/change the list cannot be transferred to it dict-rearrangement1.7.4.

## Scaling

Construction B raw public addresses demand B public EC tweaks and hashes.
The table for ordinary hashes requires orderB Time and memory; the worst case
collisions are quadratic and separately covered synthetic-control, not declared normal.
For a few runtime/hash Address profiles can be reused; new
The cost is to build tables, but another thing master change everything raw-addresses, therefore
This preparation is generally repeated for each master-candidate.

Six synthetic cases They do not ask the probability of change of order and do not prove it
Any addition of an address changes the relative order of the others tested
R256→R257 default cases The overall subsequence remained the same; with growth
table/The change is possible and verified by individual controls.
