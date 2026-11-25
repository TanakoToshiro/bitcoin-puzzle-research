> English machine translation of the [Russian source](<../../../../ru/reports/experiments/order2-joint-shift-20261106/MATH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# O2-J01 The exact total shift and number of allowable combinations

Designations O2-L01: p odd, observed r_i=s_i mod2^k_i; K=k135>=k_i, R=r135, L=2^K. For all indexes used in the formula k_i>=1. Reference state t=s135 importance R+qL into [0,p). Masks with k_i=0 do not specify the transfer and are not included in the formula below.

## Early Compatibility Condition

For x_i=(s_i−t) mod p Two remains are known:

```
x_i mod2^k_i = r_i−R+epsilon_i*p mod2^k_i,
epsilon_i = 0 при x_i+t<p, иначе1.
```

So p oddly k_i>=1, The two residues are different x_i clearly epsilon_i. Therefore, the choice x_i limiting t:

```
epsilon_i=0: t <= p−1−x_i,
epsilon_i=1: t >= p−x_i.
```

Crossing these boundaries and progression R+qL gives an empty set or an integer progression from t_first before t_last. This is a necessary and sufficient condition for the existence of initial s_i for all already selected x_i; brute-force t You don't have to, when you add another one x_i The range is only narrowing, previously excluded options can not return.

## Generator that does not build prohibited fours

The three shortest grids x_i They are listed in blocks. They are calculated from them t_first,t_last. For the fourth grid:

```
epsilon=0 допускает только x <= p−1−t_first;
epsilon=1 допускает только x >= p−t_last.
```

In every branch x step-by-step2^k. Boundaries are binary searched; only ranged values are generated. So forbidden full fours are not piece-by-piece. Three-component prefixes are still listed; the algorithm is not polynomial in bitwise.

After the calculation A,B,C and the next previous value on the grid5 Not only is the individual balance checked, but the same interval is updated t. This uses the remaining late observations and positive masks of earlier indices, multiples of5. So you're going to screen out candidates who have each individual residue fit, but there's no overall shift for all states5, final independent projector and full first-order branches/constant.

## Closed formula without brute force

Let me M Number of permissible support points t, N_i The number of absolute states s_i into [0,p) masked r_i, G_i=L/2^k_i. All these numbers are calculated by integer division.

For everyone t_q=R+qL signify S_i(q) plurality x_i. Display s_i -> (s_i−t_q) mod p bijectively, so |S_i(q)|=N_i independently q.

When moving from q−1 to q into S_i add epsilon1 gaping [p−t_q,p−t_(q−1)), flat-length L. In step progression2^k_i it **flatly G_i novelty**. Elements with epsilon0 They can only leave, with epsilon1 - only to come; the two classes of residues are different

```
|S_i(q−1) intersect S_i(q)| = N_i−G_i.
```

Plenty q, where a fixed four is allowed is an interval: it's the intersection of its four threshold conditions q Each new four enters exactly once, without reappearing P=prod N_i and Q=prod(N_i−G_i); number of new fours at each step q>=1 equally P−Q.

**The exact number of fours allowed at least once:**

```
F = P + (M−1)*(P−Q) = M*P−(M−1)*Q.
```

Primary M=0: F=0. Primary M=1: F=P, Q no need to calculate (N_i−G_i Then it can be negative M>=2 have N_i>=G_i. The formula is generalized to any number m It's a non-zero-width observation with one common support, and it looks at the compatibility of masks with shift **not the number of recurrent models**.

Important condition: it cannot be applied to k_i=0 And then the two residues match epsilon is not determined x_i, And the proof of new elements doesn't work anymore p.

## Size of winnings

If p/L It's big and all the grids are tight N_i≈p/2^k_i and M≈p/L. For m=4 formula F≈5*prod N_i, The independent two residues of each position gave≈16*prod N_i. The main domain is reduced approximately to16/5=3.2once: **near1.678bit**, It's not eliminating exhibitors.

Real masks have the exact number F It was calculated directly from the whole data≈2^542 combinations≈2^540.322. Further testing of total transfers drastically reduces the number of expensive reconstructions, but is performed after selecting a four-piece, which cannot be counted further as reducing the inlet brute before enumeration or multiplying the empirical coefficients toy-Testing and testing for proven speed n.

The original model remains conditional: reducing redundant combinations does not give a probability of its truth, nor does it prove any bit of the real key.
