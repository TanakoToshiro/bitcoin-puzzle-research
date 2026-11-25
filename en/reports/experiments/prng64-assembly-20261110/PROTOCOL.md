> English machine translation of the [Russian source](<../../../../ru/reports/experiments/prng64-assembly-20261110/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# RNG64-02 Limited permutations and omissions inside the key

10 November 2026. The protocol is fixed to new real ones SMT-requests.
The same historical families and exact arithmetic RNG64-01:
xorshift64*12/25/27, multiplier2685821657736338717;
xorshift128+23/17/26 and23/18/5. The states are arbitrary, non-zero seed He doesn't move.

Reshuffle p determine the order of the selected outputs in raw-bytes
Words to the youngest. Endian inside64-bit-word: big/little.
Offsets g - call numbers next() beginningly raw-Block (the first one has the offset0).

Fixed 60 variants =3family×2endian×10assembly:
1. g=(0,1,2,3), six new cyclic rotations of a straight line/inverse order.
   Complete set D4 has8 permutations;0,1,2,3) and3,2,1,0) already tested
   They are not included in the new list again.
2. g=(0,2,4,6) and g=(0,1,3,4), For each, there is only a straight and backward order.
   The first is the choice of every second exit, the second - one pass in the middle.
The complete work of all permutations with all gaps No; other options
They're going to be future experiments holdout-meanings.

Observation: key_i=2^(i−1)+(raw_i mod2^(i−1)). Fitting: №130 for64*,
№135 for128+; second130/135 supplementary fitting locally SAT.
Others81 Published decisions -- holdout, do not participate in the selection/Cut-off.
It's split RNG64-01, learning1–50.

The invisible older word doesn't limit the state
Remove the Zero Masks and Normalize offsets at the minimum observable.
Structural equivalence requires the same family endian, relative
offsets conformance raw-slots; matches of real numbers are not used
to declare equivalence. 12 from60 The new lines are thus reduced to the accepted
contradiction RNG64-01. The certificate of transfer is retained, but solver
It's not called again48 new necessary local inspections.

64*: The full word is turned by an odd multiplier, transitions through gaps
regularity/Steps back. 128+: post-exit z condition
(u,z−u mod2^64); single-handed64-bit u, addition with transference, XOR-The transitions are clear.
Obtain observable outputs at recorded forward distances/back.
Nana SAT check with ordinary arithmetic; separate request excludes found u.
Time-out20s/request, summarily60s solver-time/task before8 SAT-fortunes.
UNKNOWN/Exhaustion of the limit is incompleteness, not a negative result.

The real problem of each new line is a blind synthetic local line
Recovery with exactly the same mask width/rearrangement/gaps. Admission requires
complete result containing the planted state; uniqueness is not
If you don't pass the control, you don't decide the real string
preserve not_run_control_incomplete. Hidden CHECKER_SECRET pass on solver.
For complete controls, restore the synthetic series of all83 number
s d=max(g)+1 and d=max(g)+4, second-hand fitting,81holdout hidden71.
Values of intermediate unknowns puzzle They're also using up generator calls.

If the real local problem UNSAT The exception does not depend on the intervals
between the keys SAT - only for two predetermined d second-hand
fitting, later holdout; Incomplete listing of states does not allow to exclude
full model. No candidate71 It is not declared true without address verification.

Reconfirm the originals83 two cryptographic implementations;
link/hash C-Vectors and check the transferred functions.
Check it out pack/unpack, inverse, ambiguity and artificial resource-limit.
Each request is retained SMT2, hash, status/reason, witness and statistics;
You can't re-compute completed tasks when you re-enter
change locally CPU, withoutGPU/clouds/a complete reshuffle of all changes and gaps.
