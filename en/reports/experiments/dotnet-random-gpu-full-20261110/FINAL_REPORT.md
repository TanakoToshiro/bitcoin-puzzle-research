> English machine translation of the [Russian source](<../../../../ru/reports/experiments/dotnet-random-gpu-full-20261110/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# DN-G02 full-fledged GPU-historic System.Random

10 November 2026, Europe/Moscow. **Passage completed and independently verified:
everything 2 147 483 648 canonical seed checked for each16 schemas.
There is no match with all the training keys. CUDA-No errors or overflows.
One recording failure STATUS Removed from the retested checkpoint.**

## Coverage

- Exact range `[0,2147483648)`including seed0 and2147483647.
- 2051 non-intersecting successive blocks, without gaps.
- 2043 new GPU-blocks: 2,141,454,336 seed.
- 8 previously accepted GPU-Pilots: 6 029 312 seed, Imported without count.
- Totally 34,359,738,368 pair seed/diagram; internal outputs are divided between16 circuits.
- Candidates0: No couple has gone through everything50 Learning keys. Holdout33
  It is used only to check the candidate; in this aisle, it did not reach him.

## What hypotheses are excluded

Historical Microsoft System.Random official-sourced2014-11-12,
one copy for the whole series, the original blocks of32 Full of Descartes set:

| Parameter | Options |
|---|---|
| API | NextBytes / 32 challenge Next(256) |
| Numerical order32 bytes | unsigned big-endian / little-endian |
| Expenditure raw-block | stride1 / stride2 |
| Initial raw-block | phase0 / phase1 |

For puzzle i: number raw-block `phase+stride*(i−1)`display
`key_i=2^(i−1)+(raw_i mod 2^(i−1))`Numbers don't shrink when you pass.
Rules unchecked Int32 and double Next(256) retained CPU/GPU
Control, everyone signed Int32 seed covered canonical range:
The normal negatives give the same constructor as the positive module
? Int32.MinValue correspondently Int32.MaxValue. Seed MaxValue not replaced0.

**These are the ones that are excluded16 combinations of generator, flow and masking.**
The result does not rule out System.Random with other initial passes,
Re-creation of the generator, variable consumption, other API/export order,
transformation through hash, mnemonic/HD or other treatment raw-key.
It does not prove or disprove the use of the author C# at all.

## Actual time

| Measurement | Meaning |
|---|---:|
| New CUDA kernels | 81.338 s |
| New GPU API-challenge | 79.990 s |
| Renewed queue, including reading ready-made checkpoint | 157.136 s |
| First run before recording failure | 157.902 s |
| Re-start before completion | 165.304 s |
| Both launches in total, without pause | 323.207 s |
| Pause to check and resume | 76.768 s |
| From first start to completion, with pause | 399.975 s |
| Average speed of new kernels | 26.33 million seed/s |

Previous time spent imported kernels (0.176 (c)
not added to the current GPU-The final audit was done after the turn
And it's not in this table. GPU: RTX3070Ti Laptop,128threads/block; kernel
and the parameters are accepted in DN-G01. There are no new optimizations between the pilot and this passage.

The two sources of time are not fully agreed upon:
1130 new-block CUDA-event time
exceeded host API-wall, maximum3.245Ms.
The reason for this experiment is not established; the values are saved without adjustment.
For the actual duration, focus on the external start and queue.
This is a remark on the measurement of speed, not missing blocks and not CUDA-error.

## Recording failure and reopening

First runner finished with PermissionError atomic-substitution
STATUS.json.tmp → STATUS.json border Windows/WSL. Failure occurred when
update the summary after saving the calculated block; CUDA I didn't report a failure.
The other line was missing OS-lock I was free before the replay
checked continuous prefix [0,1341128704) all
3850 After their hashes have been completed
Reversed: no finished file has been changed GPU-The blocks weren't counted.
The kernel code, the bindings and the configuration didn't change
The exact reason for the temporary ban of the file has not been established;
renewal STATUS unread Windows.

## Independent audit after completion

Checked out2051 records of ranges, boundaries, number of processed seed,
Zero counts of candidates, lack of overflow/error, SHA-256 each
result and each link in the chain, configuration and references from the original
COMPLETE. Eight imports are checked against the originalGPU-pilots.
Drop tables16 The scheme was rebuilt independently50 numerical
Known keys; their hash matched in all blocks. CUDA-context/worker finished,
OS-lock The old ones101 GPU-file482 CPU-The files matched their signatures.

It is an audit of coverage and accepted computational results, not a second
The correctness of the kernel is based on a complete count on another device
historical vectors,33 Synthetic search and border controls DN-G01.

Initial `COMPLETE.json`, `STATUS.json` and checkpoints unchanged
The new result: FULL_AUDIT.json - an artifact of the initial study (`FULL_AUDIT.json`; outside the picture),
NUMERIC_REPORT.json - an artifact of the initial study (`NUMERIC_REPORT.json`; outside the picture), all blocks CSV - an artifact of the initial study (`BLOCKS.csv`; outside the picture.
Previous ones [CPU-study](<../dotnet-random-historical-20261109/FINAL_REPORT.md>)
and [acceptance CUDA](<../dotnet-random-cuda-20261109/FINAL_REPORT.md>) preserved.
New experiments in addition to these16 The circuits didn't start.
