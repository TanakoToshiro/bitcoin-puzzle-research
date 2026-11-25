> English machine translation of the [Russian source](<../../../../ru/reports/experiments/order2-joint-shift-20261106/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# O2-J01 - general shift to four-component search

6 November 2026. New folder after O2-L01, former checkpoints not to cheat.

Check the exact filter required: x_i=(s_i−s135) mod p. Choosing one of the two residues x_i clearly define the transfer epsilon_i upon k_i>=1. All selected x_i should allow for one t=s135=R+q*2^K into [0,p), satisfying x_i+t<p upon epsilon0 and x_i+t>=p upon epsilon1.

For four supports115/120/125/130 list the three shortest grids, maintain the interval of allowable t, Then generate only the permissible ranges of the fourth grid. Don't build full forbidden fours A,B,C Update the same interval for each mask on the grid5. The root of the fifth step, the final projector and the first-order branches/constant Keep it mathematically the same.

Preliminary formula for the number of fours compatible with one shift: N_i number of absolute values s_i with this mask, M - number of permissible s135, G_i=2^(K-k_i). Primary M>=1:

`F=prod(N_i)+(M-1)*(prod(N_i)-prod(N_i-G_i))`.

For M=0 result0; for M=1 use only prod(N_i), So as not to make sense of the negative N_i-G_i. Prove the formula through the first allowable shift and check it with an independent brute force, rather than accepting it by coincidence of synthetics.

Controls:200 deterministic small inputs (p7/11/17, randomness<=K), full of fours and all t formulae/- In addition, full old generators INPUT O2-L01:18 p7/p17,10 new p37..523,4 paired p127/p257,2 degenerate_controls. Totally34 The final inputs should be given exactly the same families and predictions hidden truth into solver.

TYMING: Four pre-selected identical inputs O2-L01 p127-new0, p257-new0, p37-new0, p523-new0. Both algorithms in the new benchmark-catalogues, tracemalloc Both of them, compare complete answers. This is a deliberate repetition to compare algorithms, not a rewriting of old launches60branch-on/attempt; UNKNOWN/Main series without completeness tracemalloc; block1024 Three-component prefix, hash chains.

For p65537 present n Only the exact numbers of candidates by formula and cost limits, without a full search MT/Do not declare the constant multiplier to be the removal of an exponential obstacle, save the proof, the code, the machine results, all the intermediate conclusions and the general log after the stages.
