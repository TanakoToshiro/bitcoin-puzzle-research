> English machine translation of the [Russian source](<../../../../../../../ru/reports/experiments/parallel-wallets-20261102/01-armory/runs/20261102T010953Z/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../../../README.md>) · [Direction](<../../../../../../topics/03-wallets.md>) · [Documents of the series](<../../../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../../../docs/LATEST_RESULTS.md>).

# A1 — Armory classic, protocol

Date: 2026-11-02. Commit 61a596fa94f9cacf9fb00c4e02d0eb65d8b17513 (2015-01-08).
Only this folder changes. CPU; No co-agents, GPU, brute seed and feedback.

## Question and difference HD-01/E6H

1. Install real media P, C, chainIndex: PKCC, serialized
   PyBtcAddress, watch-only wallet textual export. Implement the strict
   check-up PKCC/Separate recording without launching a historical record GUI.
2. Check it out HNP from an arbitrary indexed subsidiary public anchor
   s C: the root and its public point are absent at the entrance;
   scalar anchors and only achievable subsequent keys
   mentioned HD-01 The novelty here is the format of the artifact and the verification
   non-invention HNP. Real masks/pass-through 83 The decisions are preserved.
3. Unknown C: two-side raw public keys + partial private observations
   two interval-DLP: Q=P-rG=q(2^bG), 0<=q<=floor((n-1-r)/2^b).
   After two DLP C=(k_next/k mod n + t*n) XOR D(U(P)), t=0,1 upon <2^256.
   This partly uses the old inversion of full keys E3, but the price
   The full keys of the partial ones are clearly measured and compared with E6H.
   No starting points DLP-For non-neighborly observations, the formula C wrong.
4. Write a joint system for the unknown C and P, nonlinearity place
   Minimum Sufficient Artifacts Profile and Limit of Applicability.

## Budget and acceptance

- Common CPU-pilot <=180 seconds, each stage <=60 seconds; subprocesses with timeout.
- Total little control interval-DLP real-life EC order 199:
  non-zero scalars, b=1..7; false residues They're also being checked out.
- Joint toy-task: 16 steam, full-time 256 variants C check out
  a large number, including impossible observations and modulo-lift m+n.
- secp256k1: 6 Circumstances (a number of positions and default/explicit C),
  fourfold 120/125/130/135; The decision-maker sees only the public
  package. Changes C, residue, Public-dot indexes are rejected.
- Full-size interval-DLP: 2 synthetic pairs with clearly enhanced leakage b=240
  (16 Unknown bits, do not pass off as real masks Puzzle. Real masks
  Check analytically and refuse to start >4096 baby steps.
- Check the ranges/public/address everyone 83 fixed solutions and their SHA256.
- Save inputs/outputs, times, counters, versions, code for each launch.
  Completed stages with resume Do not repeat; write down the errors separately.
- Failure/Impractical cost does not exclude Armory and doesn't prove the bottom
  the limit of all attacks. Synthetic Success is not a real solution Puzzle.

## Supplement to the first computational run: regular multiplier log

V safeExtendPrivateKey/safeExtendPublicKey unqualified
`PrvChain (pkh, mult): HASH160,RAW_MULTIPLIER` or PubChain) into multipliers.txt.
This is a new specific source of coefficients, which is not present in the conditions HD-01.
Priority: separate solver receives only an ordered segment of these lines,
its initial chainIndex, four masks and index display P, neither C,
full-on raw keys It's not passed on to him. HNP giveaway scalar anchor; check HASH160
The first line links the answer to the journal C=raw_multiplier XOR D(U(P))
and check all lines, constancy C laid-back synthetic observation.
Six positive four and negative, anchors -1/0/59/70/114/119, including
default/explicit C; recovery root declare only anchor=-1.
There is no optional broad search for publications
Author's journal or associated diagnostic archive, which is not present in current inputs.
The budget remains the same; 2 new stage pilot <=60 every second.
