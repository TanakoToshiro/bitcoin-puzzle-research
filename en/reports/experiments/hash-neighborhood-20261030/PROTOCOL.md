> English machine translation of the [Russian source](<../../../../ru/reports/experiments/hash-neighborhood-20261030/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/08-methodology-and-history.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E4 conditional local effect HASH160: protocol before reviewing results

2026-10-30. Hypothesis: if HASH160 the central key point coincides with the purpose
first p New keys near the center are more successful than new uniform keys.
Checked out p=8/12 **bits** radii R=16/4096/16777216. This is a limited pilot
non-replication 8–14 hexadecimal solver.
Complete puzzle-keys are not mixed with hypothetical values before masking:
This is where the scalar is directly used k into [2^70,2^71).

## Samples and immutable rules

- 32 independent new synthetic targets seed objectives are maintained in
  vault; The selection of candidates will only receive HASH160, Not targeted private keys.
- 32768 of fresh, uniform centers on the target, all 1048576=2^20. The keys are coming out
  from SHAKE256 randomly preserved 256-bitten seed and the division of domains;
  flatly 70 random minor bits, most significant bit 70 set.
- From the matching centers, evenly choose the maximum 24 for p=8 and 8 for p=12 on target.
  One center can fall into both groups; this is accounted for by target clustering.
  If there are fewer coincidences, take everything, do not pick up new centers.
- For each selected centre: 16 new neighbors R=16, 120 upon R=4096 and 120
  upon R=2^24; The displacements are uniform among the permissible non-zero offsets
  maximum 1024*256=262144 Against each, one new uniform
  control from the same range. Selection and permutation use fixed
  seed, derived master seed; saved versions NumPy.
- All centers are generated to the neighbors. Globally eliminated already viewed
  keys, centers, control keys and repeats between targets/thresholds/radii.
  Boundaries are taken into account by discarding the candidate, without wrapping or pinching
  At the end of the neighborhood, maintain the actual size
  And the same amount of control; it's a separate event, not a zero outcome.
- All scalars are preserved HASH160, selected centers, membership of groups,
  Exception counters 128 Fixed centers are independent Python
  calculus secp256k1. Existing samples of the experiment B not used.

## Metrics and statistics

The two main metrics for each pair p,R: first-time p bit-and-match
The next eight bits that didn't participate in the selection **12 one-way tests**
advantages of neighbours, Holm, family alpha=0.01. Joint coincidence p+8 bit
full-fledged HASH160 They are considered descriptively; there are no additional tests for them.

A unit of independence is a whole goal with all centers, thresholds and radii.
The pair comparison, the number of neighbors and the control in each block is the same
two shoulders inside the target (65535 accidental sign permutations; p corrected
(b+1)/(B+1)), Same signs for everyone 12 This is a zero exchange test
It does not imply the independence of individual neighbours.

Cluster pairs bootstrap posture 32 objectives: 65536 repetitions, intervals of difference
frequency95% and Bonferroni 99% simultaneously 12 It's an approximate metric
intervals; when total <20 success, <8 informational purposes or degenerate
The distribution clearly labels the unreliability of rare events
It is useful to exclude small effects from bootstrap.
Maintaining the conservative border Hoeffding independently
and power reference with perfect independence of hashes (80%, alpha/12).
Relative effect to show as a neighbor/control and as a difference/p0,
p0=2^(-p) for prefix and 1/256 for the next bits. The zero denominator is not
Replace the random pseudofrequency.

## Controls prior to the main run

1. cryptographic vector k=1, boundary of the range, equivalence of extraction
   Binary string bits, exact values Holm, zero-point/positive/reverse
   Statistical controls; check for the removal of repeats and small neighborhood boundaries.
2. Positive control of the whole conveyor: function SHA256(domain || BE(k>>30))[:20],
   block-bound 2^30. 32 targets 8192 centre/purpose, limits of centres 4/2,
   posture 8/16/16 All six prefix tests must pass Holm 0.01.
   The following: 8 The bits are not required to show the signal; their result is saved.
3. Eight independent negative runs: SHA256(domain || BE(k))[:20] how
   a pseudorandom oracle without the proximity of adjacent entrances, 32 targets 4096 centres/target
   other reduced parameters as above >1 family-false
   Stop the main experience by triggering it. Save all the triggers. 8 runaway
   not count as accurate level validation 1%.
4. Staff stop after checks, resume without repeating them, the final resume
   with zero new tasks and an independent audit of the non-intersection of saved scalars.

## Budget, report and continuation

Do 900 seconds CPU wall time The main cycle with controls, without writing code.
Check between stages; stage - one control run or one goal, not
It's a hard interruption in the middle of the stage, and it's left unfinished.
For every stage JSON + NPZ (where data is needed), SHA-256, time, checkpoint and
renewed RESULTS.md; interpretations are written in NOTES.md. Entrance and code
Frozen, their change requires a new ID. The report is reassembled without computation.

Repeat the unaltered protocol with a new signal seed and new goals,
if the balance of the budget allows (orientation at least) 180 No replication
Even the confirmed effect of the short prefix is not
extrapolated 160 Take into account the search for centers and the full number of unique
hashings; working order of search No71 You can't change the result of the pilot.
