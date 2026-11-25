> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-targets256-20261030/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E1e: MT19937 starting 256 address

Verification completed: [conclusion and boundaries](<CONCLUSION.md>), [journal](<NOTES.md>). Run `20261030-150813-643fdd30`: 40/40 branches, 32/32 synthetic models; 4 Specific stories are rejected by the public dot, there is no new private key.

Continuation E1d fixedly 83 by published decisions161–256 included in the analysis regardless of the balance `runs/<ID>/inputs`Fresh balances are not needed for calculation. [Preliminary assessment](<ASSESSMENT.md>) preserved separately; [protocol](<PROTOCOL.md>) It records the actual volume.

Checked out 40 branch 32 Configurations 173 Unknown keys are considered separately and jointly. L — 77 numberless ≤160, U — 96 number >160. The number of independent mixed restrictions is `d(L)+d(U)−d(L∪U)`. `d(i|U)` means residual dimensionality with hypothetical knowledge of numerical private keys U. Public dots alone do not provide these values. All equations are conditional with respect to the generator model and, where applicable, the selected deviation history randrange.

Options `order` coordinate `(key−1) mod 2^(i−1)`. XOR These coordinates cannot be automatically read as XOR bits key. For No256 The upper limit of the order is taken into account separately secp256k1. If more than half of the affinity space is retained after its application, its linear shell remains the same; this is not a statement that all original permissible combinations remain.

## Teams

From the root of the study `research/puzzle71-hypotheses`, PowerShell:

> Executable code/The commands are omitted in the documentary copy.


`resume_io.py` Only increases the limit of decimal serialization Python before 10000 numerals required for the exact number of compatible states: source code and matrices do not change. Completed stages are checked by SHA-256 Initial errors of the standard limit 4300 numerals are retained in `EVENTS.jsonl`; `IO_RECOVERY.json` describes the correction. For a limited number of new stages available `experiment256.py resume --run ID --max-new N`, with variable environment `PYTHONINTMAXSTRDIGITS=10000`.

Additional acceptance: `extra_controls.py crypto`, `extra_controls.py ID`then `acceptance.py ID`Detailed documents are being reassembled `analyze256.py`, `small_sets.py`, `build_conclusion.py` from preserved artifacts. `small_sets.py` It uses its own checkpoints and does not recalculate groups with matching inputs.

The core core is accurate CPU-calculus GF(2) on C++17, composited WSL Ubuntu-24.04. Compiler settings, binary and SHA-256 saved in launch. GPU It is not required at this stage. 32 Synthetic models are tested to No256, API They are further compared with historical Python 2.7.9 and 3.4.2. Small systems have been tested exhaustively and compared with Python; Three previously completed real matrices E1d Reversed to the new core prior to the main calculation.

## Artifacts

- `RESULTS.md` Automatically updated launch index; within each run is a table of completed branches.
- `NOTES.md`, `CONCLUSION.md` Dated interpretations and results; previous records are not rewritten.
- `MODEL_SUMMARY.csv`, `ALL_TARGETS.csv`, `TRANSFER_FROM_UPPER.csv`, `PAIRS71_UPPER.csv` numerical results from completed stages.
- `BASELINE_COMPARISON.csv` - different E1d; The additional terms of history are not information from public points.
- `SMALL_UPPER_SETS.csv/.json`, `small-upper-sets/` Additional accurate calculation of the transfer to No71 from small groups of senior numbers selected from short lines of the stored base `small_sets.py ID`; the selection of groups is exploration, the search is not exhaustive.
- `MIXED_EQUATIONS.json` and `.md` Selected short strings of the stored basis, including links to the71; This is not a global search for minimum weight equations.
- `tasks/<ветвь>/matrix.bin`, `native.cert`, `native.json`, `layout.json` All source lines, exact certificates, dimensions and signatures of variables.
- `SCALAR_DOMAIN.json`, `SMALL_SPACE_CHECK.json`, `WITNESSES.json` boundary of the scalar, exhaustive inspection of the small projection and verification of individual states.
- `MATRIX_READY.json`, `NATIVE_DONE.json`, `DONE.json` The discrepancy of an arbitrary witness does not disprove the entire branch; a complete search of its projection disproves if there is no match.

Format `native.cert`: headline `<8s3I>` (`MTCERT1\0`, P, A, T), poster `<4I>` (Type, number, number two, number two) RHS) and P word-word uint64 little-endian. Bits of evidence 0..A−1 They're the lines of observation A..A+T−1 - the target lines XOR must give the zero vector of state, RHS Observations are the declared constant. `begin/end` - Record numbers from zero, right boundary excluded A and its direct execution replaces a huge list of bit certificates; this is noted `unique_state`.

## Continuation

Read it first `CONCLUSION.md`, `NOTES.md` New deviation histories, different models, real new solutions or the use of nonlinear group equations require a separate experiment with a new input XOR-We expect connections when the number of target bits exceeds the dimension MT, does not confirm the origin puzzle from MT19937.
