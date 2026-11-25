> English machine translation of the [Russian source](<../../../../ru/reports/experiments/prng64-state-20261105/MATH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# RNG64-01 Exact necessary conditions

Let me y0…y3 - four consecutive64-bit-outs, and P - one of the four packages registeredi:

`P(y0,y1,y2,y3) & (2^(i−1)−1) = key[i]−2^(i−1)`.

No130 observed129 least significant bits, at No135 —134. With any of the selected packages, these are two full output words and part of the third. Endian-The permutation changes the positions of the observed bits within the partial word; it is counted bitwise. No bits of the enforced higher rank are used.

## xorshift64*

Transition T — R12,L25,R27 s64-bit arithmetic; output y=c·x mod2^64 after the transition, c=2685821657736338717. Since c oddly `x=c⁻¹y mod2^64` The only step `x xor (x>>k)` step `x xor (x<<k)` reversible: sequentially xor shifty k,2k,4k,..., smaller64. Reverse T It uses reverse operations in reverse order.

The full word is therefore fixed64 independent bits of state. The other outputs are the same4-word The block is defined130 for each package they are contrary to observation; the values and masks of discrepancies are retained in LOCAL.json. The result excludes all non-zero64-bit domain, not sample seed.

## xorshift128+

Pre-step state - (x,y). For parameters()a,b,c):

`t=x xor (x<<a)`; `v=t xor y xor (t>>b) xor (y>>c)`;
newness `(y,v)`exit `(y+v) mod2^64`.

Right shifts logical, left truncated to64Taken23,17,26) and23,18,5). The transition is reversible regardless of the nonlinear output: from the newu,v) restore `t=undo_right(v xor u xor (u>>c),b)`then `x=undo_left(t,a)`; previous condition(s)x,u).

After a complete well-known exit z state `(u,z−u mod2^64)`It's a precise parameterization of all compatible states by one64-bitten u; no information seed We're not supposed to. We're generating neighboring words forward/And we put their real masks on. SMT add modulo2^64, including transfers SAT-The state is then executed by the normal integer model. The next query excludes the one found u; unsat single-handed SAT proves uniqueness, unknown It doesn't contradict anything.

It's all synthetic8 configurations128+ They've given us a single fortune135 gave unsat for all8; reinstatement of saved SMT2 A separate additional check encodes128 The original unknown bits and the complete256-bit-packing without abbreviation to u; The first case did not end with60It is a limitation of the additional method, not a lack of solution or incompleteness of the basic abbreviated method.

We can't count134 bitwise134 The nonlinear problem solved precisely; the outcomes can be0,1 Or a few, for an arbitrary purpose134-There is no more bit observation2^128 This is only an estimate of the size of the image, not a proof of uniformity or distribution of real keys.

## What only the linear part gives

For128+ purely LSB output xor two-way LSB Ranks are calculated by transition coefficients, without using values holdout-For the keys fitting130/135 rank6(big-endian) or4(little-endian); for all83 number102 or29 correspondingly, less128. Therefore, these linear conditions for the total recovery128-Full words and translations provide much more information, and these ranks are not the upper limit of the information of the whole task.

For64* LSB It is also linear, because the multiplier is odd; for all83 rank-room64(big) or29(little). The basic algorithm still uses a more direct full-word translation.

## Why the distance between keys does not save these models

All real contradictions are within the same key and refer to four consecutive outputs. Changing the number of calls between keys does not change the many possible outcomes4-word So the output is stronger than the recorded test d=4…16: Any inter-key omissions, warm-ups and even an arbitrary new state before each key will not eliminate this local contradiction for the given model/Packages **inside** The key, the arbitrary rearrangement of words, other PRNG convert raw They change the task and are not excluded here.

New true bits No71 No state can be extracted from the rejected model holdout There's no left.
