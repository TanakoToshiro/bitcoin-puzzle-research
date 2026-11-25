> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/parallel-wallets-20261102/01-armory/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/03-wallets.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# Task No1 — Armory classic

**Received a new conditional synthetic recovery: staff-book `multipliers.txt`
It allows you to restore the private scalar and chaincode fourfold
the child keys, without knowing in advance or root public key, neither chaincode. The real thing
journal Puzzle We don't have; a new real key or a reduction in search
Only published decisions are not received.**

## What's added to HD-01

HD-01 calculated HNP-coefficients through known (P_root,C). There's something else
Historical source: if successful private/public transition Armory
fill out HASH160 the uncompressed public point and **full-fledged XOR-multiplier**
into multipliers.txt. The recording is in the staff wrapper, outside CRYPTO_DEBUG.
Checked January slice 61a596fa94f9cacf9fb00c4e02d0eb65d8b17513 formal
release v0.92.3, commit 268db0f3fa20c989057bd43343a43b2edbe89aeb from 02.10.2014.

Primary sources of release:
[private/public logging](https://github.com/etotheipi/BitcoinArmory/blob/268db0f3fa20c989057bd43343a43b2edbe89aeb/armoryengine/PyBtcAddress.py#L423),
[full-fledged multiplierOut](https://github.com/etotheipi/BitcoinArmory/blob/268db0f3fa20c989057bd43343a43b2edbe89aeb/cppForSwig/EncryptionUtils.cpp#L753),
[magazine](https://github.com/etotheipi/BitcoinArmory/blob/268db0f3fa20c989057bd43343a43b2edbe89aeb/armoryengine/ArmoryUtils.py#L407).

The articles of the journaled multipliers give A_i into `raw_i=A_i*s mod n`.
Four observations No120/125/130/135 grant HNP s b=119/124/129/134. After
recovery s receive P=sG and `C=u XOR doubleSHA256(U(P))`check out
HASH160 And the multiplier of each line, then the keys are laid
u before mod n, So there's no uncertainty between m and m+n.

In a separate process obtained 6/6 succession log-only rejected 24/24
The inputs do not contain negative packets P, C, root private full or raw
children. Six anchor positions are used (-)1, 0, 59, 70, 114, 119), default
and explicit chaincodes, real masks and omissions 83-Sort of a shot.
It's a recovery scalar anchors; **The root is restored only when anchor=-1**.
The late segment does not give unknown previous multipliers or reverse stroke.
Synthetic targets No140/160 Predicted and tested beyond the four training masks.
№71 - only when the anchor is no later than its position
real-world solution Puzzle.

Numbers, exact times, number holdout for each anchor, BSGS-counters and budgets
assembled JSON into [NUMERIC_REPORT.md](<NUMERIC_REPORT.md>)The bars and theirs
transformations are preserved in SOLVER_OUTPUT.json active launch
recovery does not include the receipt of the missing log, the establishment
authorship, division of a mixed journal or search index mapping.

## Historical reach and artifacts

Both verified versions include GUI Extend Address Pool → hundred
address → Key Lists s Include Unused and private Hex/Base58. The old one GUI
It didn't start; it was traced back to the source
pre-script 15.01.2015, non-use Armory writer Puzzle.

The journal may also be in the diagnostic archive: recovery copy
into the folder from which GUI collector ZIP. This is a specific place to check
**If an artifact related to the author appears**, and not the assertion that such
The archive has already been found or published.
[Copying](https://github.com/etotheipi/BitcoinArmory/blob/268db0f3fa20c989057bd43343a43b2edbe89aeb/armoryengine/PyBtcWalletRecovery.py#L1715),
[archiving](https://github.com/etotheipi/BitcoinArmory/blob/268db0f3fa20c989057bd43343a43b2edbe89aeb/qtdialogs.py#L973).

Further disassembled PKCC, binary 237-byte record of the child address and
textual export. C Repeated in the child binary records; therefore,
for forward recovery One record is sufficientP_child,C,index), root record
It's not necessary. In a separate process, it's the option 6/6 positive and 24/24
negative. The very possibility of an early public anchor has already been mentioned HD-01;
What's new here is a proven interface, formats, boundaries and controlled packages.
Normal child-lineage Export Key Lists C They don't.

Ready-made strict parsers PKCC/record, displacement, checksums, minimum
sufficient profile and limitations - [ARTIFACT_PROFILE.md](<ARTIFACT_PROFILE.md>).
Selected historical log-Methods performed without changing the body with an adapter
data/C++; historical serialize It's not a full launch
The old application affine-calculator 35 Transitions.

## Unknown C magazineless

Tested specific conditional path: the initial public points of two neighboring
children + junior private bits → two-way interval-DLP → full scalars → single-handed/two-way
C-Small inspection checks completeness by brute force; full size
control exercised secp256k1 leaky b=240. He's not
pretending to be real Puzzle-mask; b=134 Decider refuses budget.

In a fixed shot, the best neighbouring couple is No69/70. Rating around 2^94 EC
Operations with mandatory starting points are significantly worse than practical
Even conditional targets 2^61 single-number135 give up C second-hand
This is additional information compared to E6H, wherein XOR-MITM
remained 2^128; The same conditions for these tasks are not declared.

Without starting points and a journal, the odds depend on the unknown C and
SHA256 full raw points. Joint Equations, Bilinear Terms XOR,
default-linkage C=g(root), timing/The boundaries and memories are shown in
[MATH.md](<MATH.md>)Public dots of the modified Puzzle keys not set up
instead raw points. Feedback, RNG-brute-force XOR-MITM They didn't start.

## Acceptance and next step

All 83 The solutions are re-checked by ranges, public keys and addresses.
SHA256 picture matched HD-01:
`d291351169b1bb483b580af8cf4c30e503941f7b15b81aabd418e93809a40b70`.
Unknown keys were not replaced by zeros resume not
The error early launch is saved: the order was compared
Not a lot of two XOR-candidate C; Normalization corrected before accepted
The series [JOURNAL.md](<JOURNAL.md>)Teams [README.md](<README.md>).

The next sufficient entry is multipliers.txt/diagnostic archive of the author with
(a) the checkable communication and order, or PKCC/daughter-note C and point. Bye
There is no such entrance, further large search of this result is not justified.
Armory Not excluded; no other attack proved possible
HNP/LLL or attacks on known multipliers are not declared.

Only the folder changed 01-armory. General RESULTS/README, Other people's experiments,
GPU-processes and general Python-The environment hasn't changed.
