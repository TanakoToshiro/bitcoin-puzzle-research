> English machine translation of the [Russian source](<../../../../ru/reports/experiments/order2-polynomial-elimination-20261106/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# O2-P01 Exact exclusion of previous senior parts by polynomial NDDs

6 November 2026. Continuation O2-C01; It's fixed before measurement.

On each permissible prefix (u=x120,v=x125,t=x130) linear
D(w),AN(w),CN(w) non-zero K from O2-N01. All previous ones x_i are
polynomial w=x115: x_prev=(D*x_next−AN*x_current−CN)/K.

Plenty W permissible w prefix-compatible shift is encoded
square-free H=prod(w−a), a in W. Roots D They're going away
each informative position i=110,105,... calculated P_i modulo H.
Its mask and initial interval of the general shift define a finite set S_i.
Update H=gcd(H,prod(P_i−z)), z in S_i, leftover modulo H.
After each step, reduce all polynomials in a new way H. Primary deg H=0
prefixed out; when deg H=1 A single root is immediately transmitted to the exact
A general shift for different i finally checked by the former
joint.evaluate projector 83 masks, the individual intersections of masks are not
I think it's one general shift.

This is a specialized exclusion of several dependent senior parts,
But NOT eliminating the external choice of three supports. Its cost and number of coefficients
The polynomial generator doesn't read polynomials EXPECTED/hidden states.
Don't run the real thing 256-bit inputs or huge polynomial arrays.

Two control series prior to search: 500 casual gcd-crossover
brute force; all 7^4 window modulo7 plus 500 window modulo17/37 identity
Reverse polynomial recursion/permanent polynomial
Repetitive roots, lack of roots, linear and permanent P2.

Entrances: four complete controls O2-C01, And then the same six partial problems
p17-case0-all, p17-case1-all, p37-new0, p67-new0, p127-new0, p257-new0.
The first 64 Prefix – the pilot with the result as the first checkpoint.
According to the pilot, estimate the cost, but consider it approximate: distribution
Prefix complexity is heterogeneous <=120 continue 120 s
supplementary budget generic-branch, otherwise save limited_by_cost.
Do not repeat all completed blocks. Degenerate branches are considered separately accurate
Test the equality of complete families with old results
complete, switch-on incomplete. Do not transfer the former fullness to a new search.

For each completed partial entry, one fresh launch O2-J01 new
Comparison folder on the same car, without tracemalloc on both sides
pairing tracemalloc on p17-case0-all and p37-new0, if new passes
It's complete; it doesn't mix with the main time
Statistical evaluation of speed stability
Coverage boundaries, hashes, blocks and errors/continuation
The data and cores of previous studies should not be changed.
