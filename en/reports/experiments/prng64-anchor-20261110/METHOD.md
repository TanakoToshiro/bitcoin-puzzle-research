> English machine translation of the [Russian source](<../../../../ru/reports/experiments/prng64-anchor-20261110/METHOD.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# What does the transfer of the origin of coordinates mean?

Let me B the state before the first observed output (offset 0), T transition
xorshift128+, ? a — offset The first fully known word outlet.
The old direct unfolding used B how 128 Independent bits.
Now, independent bits A=T^(a+1)(B), post-exit a.
Two words A=(u,v) satisfyingly `u+v=z_a mod 2^64`.

Same thing z_a reveals u and v. The known amount remains a limitation with all
The number of permissible states does not change: T We'll revert, so the transition
between B and A There's no new observation, no extra bit
It changes the structure of the formula, which can affect the solver.

For parameters (a,b,c) one transition fromx,y) It looks like:

```
t = x XOR (x << a)
v = t XOR y XOR (t >> b) XOR (y >> c)
T(x,y) = (y,v)
```

All words 64-The bit shifts are logical, right shiftsu,v):

```
t = inverse(I XOR R_b) [v XOR u XOR (u >> c)]
x = inverse(I XOR L_a) t
T^-1(u,v) = (x,u)
```

Reverse linear operation - finite series `I XOR S XOR S^2 XOR ...`because
The shift in the final word is nilpotent XOR-It's linearly encoding
forms; cvc5 by doubling the amount of shift and accurate bit-vector Operations.
These implementations differ and are verified on all 128 base vectors.

Output t Taken as the sum of two words of state `T^(t-a)(A)`At t<a used
Returning witness: `B=T^(-(a+1))(A)`; blocking found
B back-to-back A. Zero state is excluded in both representations.

For the eight remaining reshuffles anchor=0. Change of coordinates removes linear
transition before the first limit of the amount offsets (0,2,4,6) afterward
standardization anchor=2: An earlier partial exit requires two inverses
It's not lost or replaced by independent free bits.

For comparison, the previous ones are used synthetic-entrances, same versions CMS/cvc5
and limits 120 s/request, 240 s/The old one Z3 I've already used a different reduction
to 64-by the unknown through `(u,z-u)`It is not declared new or repeated.
It is the transfer of the base that is checked here 128-bit XOR/bit-vector models.
