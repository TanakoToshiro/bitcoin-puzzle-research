> English machine translation of the [Russian source](<../../../../ru/reports/experiments/bx-cuda-full-20261101/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E9d - full local passageway BX → BIP32

Authorized by the user with a separate instruction, "Run the passageway full." Initial states 1..2147483646, everything 16 circuitry E9c, GPU-filter №50 + CPU training/holdout. This launch deliberately repeats the small coverage of the previous benchmarks and consistently passes the entire area from the beginning E9c And the work projects don't change.

GPU/CPU This is done from a verified neighbor `bx-cuda-search-20261101`The new bandage removes the old one 15-minute limit only for clearly permitted full passage 1048576 states; all things 2048 blocks, the last 1048574. Ready-made blocks linked SHA-chain and pass through after inspection RUN.lock The error does not count the current block; the candidate stops the passage for independent review.

Current status: [RESULTS.md](<RESULTS.md>), STATUS.json - an artifact of the initial study (`STATUS.json`; outside the picture), stdout.log/stderr.log. At the end, it appears COMPLETE.json hash-tested 2048 The absence of a match excludes only the given 16 final BX/GNU-hypotheses.

Locally WSL, from this folder:

> Executable code/The commands are omitted in the documentary copy.


For a regular stop, create a file `STOP` After the end of the current block, the status will become stopped. To continue to remove STOP perform again `run`; completed blocks do not repeat CUDA-code, standards, or configuration within this run.

Windows trigger WSL discreetly stdout.log/stderr.log; There's no need for a chat window to continue computation. The computer needs to stay on and not go to sleep. Global power settings haven't changed. Average score for the computer is: E9c about 43–57 the speed, the actual progress, and ETA Recalculated after each block.
