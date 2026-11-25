> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-cuso-20261103/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-15 - independent cuso saved-up

03.11.2026, Moscow, the main run: `SEQ-15-490deeda6dba`.

**cuso Restored two easy-to-save controls h8 both
Expanding recovery from previous methods
I got it 32 Attempts at the main, more difficult sample remained
limited resources; negative mathematical responses
They're not.** There are no new real keys or bits, and no real search has been launched.

## What exactly is running?

Used [formal cuso](https://github.com/keeganryan/cuso)version
0.4.0, commit `fb2747d2105a8e48499bf10a3a717cf80c14d079`.
This is the execution of the author's algorithms: `OptimalShiftPolys` and
`GraphShiftPolys` on top of it, with automatic selection of polynomial
The old hand-coded lattices were not substituted for them.
SEQ-10 not involved in the decision; the old decoder is used only after
rooting cuso.

The input was the stored original modular difference cubes
module n Known true states, matrices
generator and former LLL-Certificates were not transferred to the solver.
Exports are verified with stored systems and independent dice disclosure.
Strict boundaries API cuso This is clearly stated: integer [a,b]
is transmitted as (a−1,b+1), without losing the maximum permissible values.

Wednesday: SageMath 10.9 separately WSL-surroundings assembled from fixed
source flatter and msolve. Sources cuso They're preserved intact.
In a separate adapter, one remote name call is replaced Sage API
`is_generator()` equivalently `is_gen()`; the strategies haven't changed.
This renaming is described in [documentation Sage](https://doc.sagemath.org/html/en/reference/polynomial_rings/sage/rings/polynomial/multi_polynomial.html).
Preparatory errors and corrections are reflected in the [EXECUTION_NOTE.md](<EXECUTION_NOTE.md>).

The main sample was passed 71 staff-test msolve, three author's examples
cuso on reduced parameters, border checks and four-dimensional control
Both modes with enabled storage of intermediate data.
Parameters and results CONTROLS.json - an artifact of the initial study (`CONTROLS.json`; outside the picture.

## Primary registered sample

16 entrances, each in two modes; all **32 attempt**. Limits are the same:
180 seconds, 8 GiB address space, up to 256 lineage/column-built
Two processes, one thread each native-libraries.

| Saved entrances | Entrances | Graph | Optimal without graph |
|---|---:|---|---|
| SEQ-11 p5 h16, family | 2 | 2 timeout | 2 limiting |
| SEQ-11 p5 h18, family | 2 | 2 timeout | 2 limiting |
| SEQ-11 p5 h20, family | 2 | 2 timeout | 2 limiting |
| SEQ-11 p5 h24, family | 2 | 2 timeout | 2 limiting |
| SEQ-11 p5, base-mask | 2 | 2 timeout | 2 limiting |
| SEQ-11 p5, spot-checking | 2 | 2 timeout | 2 limiting |
| SEQ-09 p13 h24, family | 2 | 2 timeout | 2 timeout |
| SEQ-12 p6 h20, family | 2 | 2 timeout | 2 limiting |

Total: **18 timeouts, 14 stops in size, 0 full of repairs,
0 proven contradictions**. From stops by size 12 have occurred
request 384 and two changes when requested 332. None of these 32 cases not declared
mathematically closed by this solver.

The sum of the time of the attempts 3593,49 c. with parallel execution of two tasks.
It's not the length of time you run a wall clock 282 finished
reductions and two stringent whole equations, one for each h16.
The equations were not enough to make a complete recovery.

The four inputs of the main sample were previously restored by other methods:
two-way SEQ-11 h16 two SEQ-12 h20. Old answers and their input hashes are given
into BASELINES.json - an artifact of the initial study (`BASELINES.json`Their existence does not make them
narrow-mindedness cuso It's a cross-cutting comparison
different implementations and budgets, not just a comparison of shifts
equally LLL: cuso staffed flatter and its algebraic stage.

## Separate easier controls

After observing the limitations of the main series, until the launch of additional
In addition, the two previous accounts were separately registered SEQ-09 p5 h8 — general
and inverse. This is an adaptive check of export and recovery of our model.
It's not part of the success rate of the main sample
They were generated [CALIBRATION_PROTOCOL.md](<CALIBRATION_PROTOCOL.md>).

| Maintained control | Graph, s | Optimal, s | Independent verification |
|---|---:|---:|---|
| p5 h8 general | 3,97 | 4,76 | Both have restored true class |
| p5 h8 inverse | 3,08 | 3,78 | Both have restored true class |

**4 runaway 4 at two entrances.** For each root tested
original polynomials, precise boundaries, non-degenerate transition without poles,
chain 135 fortunes 83 Masks received classes with 10 permissible
general shifts general and 8 for inverse; uniquely absolute
The true synthetic model and its initial state are not declared
projection71 They belong to the rebuilt class.

h8 here means the eight hidden most significant bits of the state of the panel,
artificially opened 248 It's a big deal
stronger observations than the original form Puzzle-Masks h8
does not set the threshold of the method: intermediate h This series has not been studied.

## Where there are limitations

Two additional diagnostic repetitions 45 (c) performed separately
They don't replace the results.

* **p5 h16 general, graph:** The stack photo shows the work in construction
  shift selection graph. Completed 20 intermediate graph processing,
  None of them gave out a suitable set; the next one processed it 2048
  It didn't get to the reduction of the grid.
* **p13 h24 general:** The stack captures the calculation of an integer basis
  Groebner through libSingular in the preparation of the original ideal
  selection LLL It hasn't started yet. It's a stage common to both regimes.
* **p5 h16, optimal:** after the first strict equation cuso recursively
  So it solves the augmented system 15 preserved lattice
  families are made up of coefficients that are multiples of the module
  It is not possible to have a scaled-up L1-The norm is less than the module.
  This is the limitation of specific grids, not the exclusion of future shifts.
* Nana h24 basic graph-run-through 1001 shift n cross over
  ideally n², But I didn't get to the first reduction either.

Sources: DIAGNOSTICS.json - an artifact of the initial study (`DIAGNOSTICS.json`; outside the picture), magazines in `diagnostics/`,
LATTICE_DIAGNOSTICS.json - an artifact of the initial study (`LATTICE_DIAGNOSTICS.json`; outside the picture. A simple zoom in
timeline LLL does not eliminate the recorded delays before LLL. Increase
total time or dimension limit remains separate unverified
experiment; these possibilities are not declared unpromising.

## Audit and preservation

In the main series and additional controls independently verified:

* 36 diagrams 18 Preserved entrances and precise boundaries;
* **302** reductions: precise T·B=L and det(T)=±1 after reshuffling the triangular lines;
* **38** whole relationships: for each, a clear identity is built
  F=a·G+n·H with the original cube and independently verified strict L1-border
  baseline box Certificates - an artifact of the initial study (`RELATION_CERTIFICATE_AUDIT.json`; outside the picture);
* four returned full roots and four decoding classes throughout the
  chain/Masks - the main audit - an artifact of the original study (`AUDIT.json`; outside the image), control audit - an artifact of the initial study (`CALIBRATION_AUDIT.json`; outside the picture.

The old ones **3592** file is saved by SHA-256 and the time of change.
Checked the previous dependencies of the auditor and fixed native-libraries;
There's no solver left after calculating the processes
limitations and completed intermediate results maintained
post-completion Gröbner/The graph calculation is not checkpoint.

`COMPLETE` means the completion of registered limited launches
and their audit **does not mean**, That timeouts have become negative
answer or cuso/The hidden generator hypothesis has been exhausted.

Outcome of this phase: independent cuso really applied to ours
And then I went through the easy, through-the-air controls, on selected hard-to-save ones
Inputs of new practical gain in the established budget is not shown.
