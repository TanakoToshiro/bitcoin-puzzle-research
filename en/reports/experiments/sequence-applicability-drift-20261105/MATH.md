> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-applicability-drift-20261105/MATH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-19: Why two differences?

Let me `s[i+1]=a*s[i]+b*i+c mod n`All values are considered in the field F_n; Canonical representatives are partially observed 0<=s[i]<n.

Primary a!=1 solution `s[i]=A*a^(i-1)+p*i+q`where `p=b/(1-a)`, `q=(c-p)/(1-a)`, `A=s[1]-p-q`Substitution to the initial transition tests the formula without assumptions about hidden bits `i=75+5j` the geometrical part with a relation a^5 linear j. The second normal difference removes the linear polynomial.

Primary a=1: `s[i]=s[1]+b*i*(i-1)/2+c*(i-1)`Second subsequence difference with step 5 Both of these cases give us one necessary link.

```text
T[j] = S[j+2] - 2*S[j+1] + S[j]
T[j+1] = a^5*T[j] mod n
```

After the division j-chronology 2^(74+5j): `t[j+1]=(a^5/32)*t[j]`The observed residues are divided by degrees of two in F_n, The unknown wholes are saved as errors, and it's not replacing the original state with a known residue.

Denote `r[j]=S[j] mod 2^(74+5j)`, `u[j]=floor(S[j]/2^(74+5j))`, `z[j]=S[j]/2^(74+5j) mod n`, `y[j]=r[j]/2^(74+5j) mod n`Then `z[j]=y[j]+u[j] mod n`and

```text
t[j] = 1024*z[j+2] - 64*z[j+1] + z[j]
Y[j] = 1024*y[j+2] - 64*y[j+1] + y[j]
e[j] = 1024*u[j+2] - 64*u[j+1] + u[j]
t[j] = Y[j] + e[j] mod n
```

From `0<=u[j]<n/2^(74+5j)` shoulder `|e[j]|<2n/2^(74+5j)`: the sum of two positives and the negative modulus are limited to the same value `2^(183-5j)` relative n<2^256. Window weights 32^i Replace the error rate when the window is shifted.

If found polynomial H It's really a geometry t, it's divided into `F(X)=X-rho`, rho=a^5/32. GRN of several H highlight F. A single short string does not guarantee divisibility, so brevity and the total multiplier are tested separately on positive and random examples.

The universal recursion of this model has a polynomial `(E-a)*(E-1)^2`Two known multipliers are eliminated by differences in advance, so it's a special structured family, not a common third-order recurrent generator SEQ-18 There were two unknown roots in the general second order, and there are fewer unknown roots after the conversion, despite the addition of index dependency.

The interpretation is limited to the selected module, mask and order t=0, parameters are not identifiable by such a detector; such degenerations are not included in the main sensitivity assessment F would require separate restoration and verification of the conditions on all 83 This series is limited to the applicability test and does not declare a root H proven generator Puzzle.
