> English machine translation of the [Russian source](<../../../../../../ru/reports/experiments/python-seed-20261030/runs/20261030-102843-9581116c/CONCLUSION.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../../README.md>) · [Direction](<../../../../../topics/01-historical-generators.md>) · [Documents of the series](<../../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../../docs/LATEST_RESULTS.md>).

# E2 completed: small integer seed historical Python failed

ID: `20261030-102843-9581116c`A search with positive controls took **560.587 s** limiting 1200 c; assembly and preliminary vectors are accounted for separately.

**Not one seed from `[0, 1 048 576)` failed to replicate the No1–50 Not in any of the circuits we've tested.** Candidates for Deferred Present Decisions and Verification of Address No71 It didn't.

This is a limited exception: only verified 1/4096 (0,0244140625%) space 32-bit seed. A negative result does not exclude Python, MT19937, larger seed, timestamp, linear seed or API/placement of exits

| Version | API | Step | Checked out seed | Coincided No1–50 |
|---|---|---:|---:|---:|
| 2.7.9 | bits256 - an artifact of the initial study (`tasks/pilot-2.7.9-bits256-s1/RESULT.json`; outside the picture) | 1 | 1048576 | 0 |
| 2.7.9 | bits256 - an artifact of the initial study (`tasks/pilot-2.7.9-bits256-s2/RESULT.json`; outside the picture) | 2 | 1048576 | 0 |
| 2.7.9 | words_forward_big - an artifact of the initial study (`tasks/pilot-2.7.9-words_forward_big-s1/RESULT.json`; outside the picture) | 1 | 1048576 | 0 |
| 2.7.9 | words_forward_big - an artifact of the initial study (`tasks/pilot-2.7.9-words_forward_big-s2/RESULT.json`; outside the picture) | 2 | 1048576 | 0 |
| 2.7.9 | words_forward_little - an artifact of the initial study (`tasks/pilot-2.7.9-words_forward_little-s1/RESULT.json`; outside the picture) | 1 | 1048576 | 0 |
| 2.7.9 | words_forward_little - an artifact of the initial study (`tasks/pilot-2.7.9-words_forward_little-s2/RESULT.json`; outside the picture) | 2 | 1048576 | 0 |
| 2.7.9 | words_reverse_little - an artifact of the initial study (`tasks/pilot-2.7.9-words_reverse_little-s1/RESULT.json`; outside the picture) | 1 | 1048576 | 0 |
| 2.7.9 | words_reverse_little - an artifact of the initial study (`tasks/pilot-2.7.9-words_reverse_little-s2/RESULT.json`; outside the picture) | 2 | 1048576 | 0 |
| 2.7.9 | randrange - an artifact of the initial study (`tasks/pilot-2.7.9-randrange-s1/RESULT.json`; outside the picture) | 1 | 1048576 | 0 |
| 2.7.9 | randrange - an artifact of the initial study (`tasks/pilot-2.7.9-randrange-s2/RESULT.json`; outside the picture) | 2 | 1048576 | 0 |
| 3.4.2 | bits256 - an artifact of the initial study (`tasks/pilot-3.4.2-bits256-s1/RESULT.json`; outside the picture) | 1 | 1048576 | 0 |
| 3.4.2 | bits256 - an artifact of the initial study (`tasks/pilot-3.4.2-bits256-s2/RESULT.json`; outside the picture) | 2 | 1048576 | 0 |
| 3.4.2 | words_forward_big - an artifact of the initial study (`tasks/pilot-3.4.2-words_forward_big-s1/RESULT.json`; outside the picture) | 1 | 1048576 | 0 |
| 3.4.2 | words_forward_big - an artifact of the initial study (`tasks/pilot-3.4.2-words_forward_big-s2/RESULT.json`; outside the picture) | 2 | 1048576 | 0 |
| 3.4.2 | words_forward_little - an artifact of the initial study (`tasks/pilot-3.4.2-words_forward_little-s1/RESULT.json`; outside the picture) | 1 | 1048576 | 0 |
| 3.4.2 | words_forward_little - an artifact of the initial study (`tasks/pilot-3.4.2-words_forward_little-s2/RESULT.json`; outside the picture) | 2 | 1048576 | 0 |
| 3.4.2 | words_reverse_little - an artifact of the initial study (`tasks/pilot-3.4.2-words_reverse_little-s1/RESULT.json`; outside the picture) | 1 | 1048576 | 0 |
| 3.4.2 | words_reverse_little - an artifact of the initial study (`tasks/pilot-3.4.2-words_reverse_little-s2/RESULT.json`; outside the picture) | 2 | 1048576 | 0 |
| 3.4.2 | randrange - an artifact of the initial study (`tasks/pilot-3.4.2-randrange-s1/RESULT.json`; outside the picture) | 1 | 1048576 | 0 |
| 3.4.2 | randrange - an artifact of the initial study (`tasks/pilot-3.4.2-randrange-s2/RESULT.json`; outside the picture) | 2 | 1048576 | 0 |

## Which is verified reliably

The main search did 20,971,520 check-up seedIt's the same range of diagrams 1 048 576 differential integer seed into 20 physical search, not 20 millions of seed. Equivalence `words_reverse_big` and `bits256` cover 24 Repeats in two versions are not considered independent families.

Real CPython 2.7.9 and 3.4.2 collected from official archives; hashes of key sources coincided with previously preserved historical commit. The independent implementation coincided with 23 040 We've got inputs, sequence tails and boundary length checks 20 Positive controls were found exactly seed 42421 from 65536 They correctly reproduced the postponed synthetic tasks.

The historical difference is confirmed by the execution of: `randrange(1,n_secp256k1)` into 2.7.9 request 257 bit 3.4.2 — 256. In the first version, the rounded logarithm changes the flow rate MT It's because of the frequent variations, and these models were not replaced by a single generator API, vulnerability puzzle.

Exact continuous intervals of all 1360 blocks, 1532 hashes of frozen artifacts and archives runtime. Checked out stop/Continuation at the block boundary and immutability of the already completed block resume missed out 40 Completed tasks without searching.

## How to use the result

Do not repeat the same patterns and `[0,2^20)` For a larger range, you need a new fixed protocol and budget; the current result doesn't automatically give you time to spend on the full range 2^32-temporary passage seed Requires a separate valid window; classical Armory It remains a separate historical trend. E3/E4 They didn't launch here.

[Number report](<RESULTS.md>)Acceptance - an artifact of the initial study (`ACCEPTANCE.json`; outside the picture), continuation control - artifact of the initial study (`CHECKPOINT_TEST.json`; outside the image), vectors/admission - an artifact of the original study (`inputs/VALIDATION.json`; outside the image), the protocol is an artifact of the original study (`code/PROTOCOL.md`; outside the picture), journal - artifact of the original study (`EVENTS.jsonl`Interim conclusions: [NOTES.md](<../../NOTES.md>).
