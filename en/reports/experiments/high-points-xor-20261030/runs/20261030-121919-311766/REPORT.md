> English machine translation of the [Russian source](<../../../../../../ru/reports/experiments/high-points-xor-20261030/runs/20261030-121919-311766/REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../../README.md>) · [Direction](<../../../../../topics/07-masks-and-order.md>) · [Documents of the series](<../../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../../docs/LATEST_RESULTS.md>).

# E6H - upper points and general chaincode

Run: `20261030-121919-311766`Status: error.

Purpose: Any unsolved puzzle, including tasks with a known public point.
Stages completed: 2/13. Time of attempts taken into account: 1.611 s.

## Completed stages

| Stage | Artifact |
|---|---|
| controls | controls.json - an artifact of the initial study (`controls.json`; outside the picture) |
| secp-controls | secp-controls.json - an artifact of the initial study (`secp-controls.json`; outside the picture) |

## Reduced models

MITM = joint-search C by group equations; DLP = BSGS The first step and check the rest.
Time includes the preparation of coefficients/It's not a synthetic chain, but it's a doubling and a neutral point operation.

| w | Repeat | Transitions | Decisions | MITM, s | DLP+selection, with | MITM additions | DLP additions | MITM record | Points in the records |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|

## Boundaries of withdrawal

Toy bands and truncated hash are not an exact model of the complexity of the full secp256k1.
Specific algorithms are compared; this is not a lower bound for any attack or a refutation Armory.
Additional transitions can remove ambiguity without reducing the exponential number of halves to be crossed C.
Manual interpretations are preserved separately in the ../../NOTES.md.

## Continuation

`study.py resume 20261030-121919-311766 --budget-seconds 1200` skip the completed stages with matching hashes.
`study.py report 20261030-121919-311766` Reconstructs tables without computational steps.
Incomplete stages: real-points, toy-12-0, toy-12-1, toy-16-0, toy-16-1, toy-20-0, toy-20-1, toy-24-0, toy-24-1, toy-28-0, toy-28-1.
