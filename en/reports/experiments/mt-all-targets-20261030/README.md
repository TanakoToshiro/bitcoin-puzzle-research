> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-all-targets-20261030/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E1d Restrictions on all unresolved keys

Checked out **everything 77 unsolved problem No1–160** from the previous picture: each key separately and together all 8953 We're looking at the fixed bits XOR inside the key and the connection between the key161–256 A separate future set that is not present in the decision table used.

[Protocol](<PROTOCOL.md>), [results](<RESULTS.md>), [intermediates](<NOTES.md>)Launch: `20261030-131459-93a3e1c9`Eight fixed packages E1 and 32 previously compatible branches E1b, everything 40 task / 32 configuration.

## Teams

From `research/puzzle71-hypotheses`:

> Executable code/The commands are omitted in the documentary copy.


Don't run two calculations of one checkpoint It's the same time. It's the completeness `DONE.json`; files are checked by SHA-256 They don't recalculate. Changing the scientific code requires a new start.

After the first sequential stage, independent tasks are divided into three groups CPU-process `parallel.py`It only changes the timetable. One parallel challenge of history Python I have been unable to restore the standard library in WSL; The unfinished tasks after the package continue sequentially, the main projects and previous studies remain unchanged.

When one is released CPU-In the process, the only previously dropped task was repeated in sequence while other performers completed their non-overlapping tasks `failed-attempts`action - in RECOVERY.json and EVENTS. The scientific code hasn't changed.

## Artifacts

- `manifest.json`Frozen models, data, original continuation states, hashes of code and sources.
- `tasks/<id>/matrix.bin.gz`: exact matrix (first) guards, then known bits, then all unknown bits; format MTGF2V1, 19937 columns, 2493 bytes per line after the title.
- `layout.json`, `rhs.json`: string tags, observation values, order of unknown bits, failure history.
- `per-key.json.gz`, `joint.json.gz`All restrictions and certificates. `target_mask` fixture XOR target lines; `observation_mask` It's a combination of the original equations XOR should be the zero line, RHS equal `value`.
- `SYNTHETIC.json`, `WITNESSES.json`, `validation-*.json`Synthetic control and routine performance of restored states, including historical Python.
- `result.json`: a brief summary; `DONE.json`: checksums of the completed stage.
- `EVENTS.jsonl`: an additional log of stages and errors. Numerical tables are reassembled without recalculation.

Bit numbering from the junior, from zero order-Restrictions schemes apply `(key-1) mod 2^(i-1)`: transfers in +1 They do not allow you to call them ordinary XOR For the rest of the circuits, these are the lower bits of the key.

Stride into API-models are defined as in E1b: before each draw for i>1 throw away stride−1 draw **current-width i**, It's not skipping the indexes of a table, it's not swapping i on 2i. V bits_im1 for i=1 returns zero without a challenge Python 2 getrandbits(0).

The restrictions are fair **under the hypothesis of the corresponding generator**. For accidental failures, they are additionally conditioned by a specific history; the absence of a restriction in at least one permissible branch refutes its obligation in all cases API. The connection between unknown keys does not in itself mean knowledge of one of its bits.

The limitations found from the previous data cannot be added back as new independent information: their certificates already express them through old equations. New confirmed solutions or new generator information can shrink space further.

## Future experiments

Original Nos161–256; The intersection of the limitations of different stories; additional reasonable restrictions seed; Extensions require a separate statement, rather than declaring the current conditional bits as found bits of real keys.
