> English machine translation of the [Russian source](<../../../../../../ru/reports/experiments/high-points-xor-20261030/runs/20261030-122003-bb9bb8/REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../../README.md>) · [Direction](<../../../../../topics/07-masks-and-order.md>) · [Documents of the series](<../../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../../docs/LATEST_RESULTS.md>).

# E6H - upper points and general chaincode

Run: `20261030-122003-bb9bb8`Status: complete.

Purpose: Any unsolved puzzle, including tasks with a known public point.
Stages completed: 13/13. Time of attempts taken into account: 3.824 s.

## Completed stages

| Stage | Artifact |
|---|---|
| controls | controls.json - an artifact of the initial study (`controls.json`; outside the picture) |
| secp-controls | secp-controls.json - an artifact of the initial study (`secp-controls.json`; outside the picture) |
| real-points | real-points.json - an artifact of the initial study (`real-points.json`; outside the picture) |
| toy-12-0 | toy-12-0.json - an artifact of the initial study (`toy-12-0.json`; outside the picture) |
| toy-12-1 | toy-12-1.json - an artifact of the initial study (`toy-12-1.json`; outside the picture) |
| toy-16-0 | toy-16-0.json - an artifact of the initial study (`toy-16-0.json`; outside the picture) |
| toy-16-1 | toy-16-1.json - an artifact of the initial study (`toy-16-1.json`; outside the picture) |
| toy-20-0 | toy-20-0.json - an artifact of the initial study (`toy-20-0.json`; outside the picture) |
| toy-20-1 | toy-20-1.json - an artifact of the initial study (`toy-20-1.json`; outside the picture) |
| toy-24-0 | toy-24-0.json - an artifact of the initial study (`toy-24-0.json`; outside the picture) |
| toy-24-1 | toy-24-1.json - an artifact of the initial study (`toy-24-1.json`; outside the picture) |
| toy-28-0 | toy-28-0.json - an artifact of the initial study (`toy-28-0.json`; outside the picture) |
| toy-28-1 | toy-28-1.json - an artifact of the initial study (`toy-28-1.json`; outside the picture) |

## Real data

Checked out No250–256; constructed 254 reference points and 64 combination254–256.
Common system XOR-multipliers are written down, but secp256k1 I didn't dare. Chaincode, private key or bit puzzle Not received.

## Reduced models

MITM = joint-search C by group equations; DLP = BSGS The first step and check the rest.
Time includes the preparation of coefficients/It's not a synthetic chain, but it's a doubling and a neutral point operation.

| w | Repeat | Transitions | Decisions | MITM, s | DLP+selection, with | MITM additions | DLP additions | MITM record | Points in the records |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 12 | 0 | 1 | 2 | 0.002254 | 0.000149 | 221 | 111 | 64 | 64 |
| 12 | 0 | 2 | 2 | 0.000727 | 0.000170 | 439 | 149 | 64 | 128 |
| 12 | 0 | 3 | 1 | 0.001219 | 0.000193 | 661 | 174 | 64 | 192 |
| 12 | 1 | 1 | 2 | 0.000742 | 0.000247 | 218 | 126 | 64 | 64 |
| 12 | 1 | 2 | 1 | 0.000693 | 0.000181 | 437 | 165 | 64 | 128 |
| 12 | 1 | 3 | 1 | 0.000970 | 0.000191 | 656 | 178 | 64 | 192 |
| 16 | 0 | 1 | 2 | 0.002671 | 0.000628 | 805 | 406 | 256 | 256 |
| 16 | 0 | 2 | 1 | 0.002831 | 0.001211 | 1613 | 447 | 256 | 512 |
| 16 | 0 | 3 | 1 | 0.003924 | 0.000559 | 2419 | 468 | 256 | 768 |
| 16 | 1 | 1 | 2 | 0.002546 | 0.000536 | 805 | 438 | 256 | 256 |
| 16 | 1 | 2 | 1 | 0.002909 | 0.000577 | 1607 | 485 | 256 | 512 |
| 16 | 1 | 3 | 1 | 0.004344 | 0.000614 | 2411 | 511 | 256 | 768 |
| 20 | 0 | 1 | 2 | 0.007538 | 0.001364 | 3124 | 1055 | 1024 | 1024 |
| 20 | 0 | 2 | 1 | 0.011728 | 0.001449 | 6245 | 1111 | 1024 | 2048 |
| 20 | 0 | 3 | 1 | 0.015566 | 0.001510 | 9362 | 1142 | 1024 | 3072 |
| 20 | 1 | 1 | 2 | 0.007284 | 0.001195 | 3119 | 932 | 1024 | 1024 |
| 20 | 1 | 2 | 1 | 0.011721 | 0.001278 | 6238 | 992 | 1024 | 2048 |
| 20 | 1 | 3 | 1 | 0.015668 | 0.001296 | 9354 | 1021 | 1024 | 3072 |
| 24 | 0 | 1 | 2 | 0.031701 | 0.005989 | 12347 | 4515 | 4096 | 4096 |
| 24 | 0 | 2 | 1 | 0.048164 | 0.006365 | 24693 | 4587 | 4096 | 8192 |
| 24 | 0 | 3 | 1 | 0.065409 | 0.005884 | 37042 | 4620 | 4096 | 12288 |
| 24 | 1 | 1 | 2 | 0.028598 | 0.007015 | 12347 | 5028 | 4096 | 4096 |
| 24 | 1 | 2 | 1 | 0.046544 | 0.007917 | 24694 | 5101 | 4096 | 8192 |
| 24 | 1 | 3 | 1 | 0.062221 | 0.008105 | 37039 | 5140 | 4096 | 12288 |
| 28 | 0 | 1 | 2 | 0.133911 | 0.031580 | 49216 | 21676 | 16384 | 16384 |
| 28 | 0 | 2 | 1 | 0.210146 | 0.033651 | 98441 | 21760 | 16384 | 32768 |
| 28 | 0 | 3 | 1 | 0.273390 | 0.031748 | 147659 | 21801 | 16384 | 49152 |
| 28 | 1 | 1 | 2 | 0.123797 | 0.024745 | 49220 | 16823 | 16384 | 16384 |
| 28 | 1 | 2 | 1 | 0.205735 | 0.025840 | 98445 | 16898 | 16384 | 32768 |
| 28 | 1 | 3 | 1 | 0.268910 | 0.025820 | 147665 | 16938 | 16384 | 49152 |

## Boundaries of withdrawal

Toy bands and truncated hash are not an exact model of the complexity of the full secp256k1.
Specific algorithms are compared; this is not a lower bound for any attack or a refutation Armory.
Additional transitions can remove ambiguity without reducing the exponential number of halves to be crossed C.
Manual interpretations are preserved separately in the ../../NOTES.md.

## Continuation

`study.py resume 20261030-122003-bb9bb8 --budget-seconds 1200` skip the completed stages with matching hashes.
`study.py report 20261030-122003-bb9bb8` Reconstructs tables without computational steps.
Unfinished stages: No.
