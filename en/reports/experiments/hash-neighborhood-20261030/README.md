> English machine translation of the [Russian source](<../../../../ru/reports/experiments/hash-neighborhood-20261030/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/08-methodology-and-history.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E4 Search next to the keys that matched the prefix HASH160

**Pilot complete: 0/12 Significant advantages of neighbors.** Checked out 1 048 576
centers, 256 508 new neighbors and as many new controls 32 targets.
For the rare 12-Bit matches sensitivity is limited; lack of all
The possible local effects have not been proven`runs/20261030-111717-d89c4fca/ACCEPTANCE.json`; outside the picture.

Advantage tested **new** neighbourhood **new** uniform
the keys after selecting the central key by matching the prefix
[2^70,2^71), compressed secp256k1 pubkey, SHA256 → RIPEMD160. The targets are synthetic.
Search for the address of this problem No71 It's not made.

- [Protocol before data review](<PROTOCOL.md>).
- [Launch table](<RESULTS.md>).
- [Report 20261030-111717-d89c4fca](<runs/20261030-111717-d89c4fca/REPORT.md>).
- [Interim conclusions](<NOTES.md>).

32 goal × 32768 centres = 2^20 The thresholds of the research centers 8/12 **bits**,
radii 16/4096/16777216, maximum 2^18 Neighbourhood and equal control
The size of each subgroup and the criteria are fixed before the statistics are computed.
The following eight bits are not used in the selection of centers 12 test
correct Holm upon alpha 0.01; rearrangement bootstrap target
whole. Zero/Rare events do not become evidence of lack of effect.

## Running from this folder to PowerShell

> Executable code/The commands are omitted in the documentary copy.


Python 3.11 and existing research venv; used coincurve, NumPy
and SciPy. The actual versions and hash code are in config.json every launch.
Only local CPU; BLAS/OpenMP It's limited to two streams. The budget is checked
between stages; after stopping the current unfinished stage can be repeated,
finished with the correct hash is skipped resume single-handed ID
Change the code at the same time/The protocol requires a new launch.

## Artifacts and boundaries

`target-vault.json` Contains public synthetic test private keys
and seed The algorithm of the candidates receives only `targets.json` (HASH160),
separate seed Candidates and results of centres; contents vault use
All keys are for verification purposes only, not for the storage of funds.

`centers-XX.npz`: scalar-like 9 byte big-endian (`uint8`, N×9), HASH160 how
20 byte. `neighbors-XX.npz`: same data plus shoulder (0 - Neighbors, 1 - control,
cell-number p/R, number of the selected centre (-)1 for monitoring) and the counter table.
Cell order: p=8/12, inside R=16/4096/16777216. Columns `counts`:
number of pairs, prefix of neighbors/control, next8 neighbourhood/control, joint p+8
neighbourhood/complete control HASH160 neighbourhood/All arrays are loaded from
`allow_pickle=False`Selected centers and initial numbers of coincidences in JSON.

Stage `audit` independently checks the non-intersection of all scalars, ranges,
distance to the selected centers, equality of shoulder sizes and counters on saved
hash. 128 Centers tested by independent affinity Python-It's arithmetic
synthetic controls check the efficiency of the method, do not prove
properties secp256k1/HASH160. The limits of the intervals and the power reference are described
in protocol and report, speeding up full search71 There is no short prefixes.

Frozen computing inputs and code `runs/ID/code`, hashes- config/state;
Errors when they occur errors.jsonl. After each stage, the report is updated
manual interpretations are written in NOTES.md. Work projects puzzle/puzzle-ubuntu,
experimentation E1–E3 separate GPU-search E2b This code doesn't change.
