> English machine translation of the [Russian source](<../../../../ru/reports/experiments/order2-compact-joint-20261106/SUPPLEMENT_PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# O2-C01-S1 Eliminating the general shift

6 November 2026. The protocol of the supplement is fixed after the completion of the main series,
until the results of the supplement are received. 8/8 full of control,
0/12 Completed partial searches; two launches found a valid family.

Check the record only coefficients under the same four full control and
Limits, branches, restoration and verification of all 83 mask
They're still there EXPECTED And the coefficients are not transmitted to the algorithm.
EXPECTED Read only the checking bandage after the search is completed.

Instead of free T Select the lowest allowable overall shift for each
relative-sequence x135=0. It keeps a lot of classes
rather than multiple SMT-The full projector is still returning
All allowable shifts and goals, not just the selected minimum T.

Let the anchor mask 135 equalK,R), L=2^K, T=R+qL.
For each positive width k<=K two-residue x_i posture 2^k:
(r_i-R) andr_i-R+p). Oddly p They are different and determine the transfer eps_i.
Primary eps_i=1 required q>=ceil((p-x_i-R)/L).
Primary eps_i=0 required q<=floor((p-1-x_i-R)/L).
Choose q_min=max(0,all lower bounds; check the upper bounds and T<p.
No listing q Or the three of the seniors.

Implementation by the adapter in reviews/, without changing the accepted nucleus
only restrictions containing T; The number is checked. All other restrictions are checked
The kernels are saved. A separate identity captures the adapter code and the protocol.

Prior to the main enquiries: 700 Deterministic Small Controls of the Minimum Formula
The shift against independent review of all T, including compatible/irreconcilable
masks and zero widths, then four full controls, if they fail, partial controls
Don't let the entrances open. UNKNOWN It is not an exception or limitation of the key.

The results of the add-on are stored separately; comparison with the original record only
Descriptive: a single launch to the entrance, without statistical evidence
Time and memory are captured from the solver's statistics.
