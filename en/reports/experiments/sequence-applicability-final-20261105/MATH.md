> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-applicability-final-20261105/MATH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Two filters and the boundaries of their interpretation

## SEQ-20: alternating

Primary `s[i+1]=a*s[i]+b+c*(-1)^i mod n`, a!=1,-1, solution

`s[i]=A*a^(i-1)+p+q*(-1)^i`,

wherein `p=b/(1-a)`, `q=-c/(1+a)`, `A=s[1]-p+q`This is verified by direct substitution into the initial transition `S[j]=s[75+5j]` the geometrical part with a relation a^5, constant and alternation `S[j+2]-S[j]` It removes the constant and the alternation. It's geometric with a relation a^5, if not zero.

Resonance cases are checked separately:

- a=1: `s[i]=s[1]+b*(i-1)+c*((-1)^(i-1)-1)/2`.
- a=-1: `s[i]=(A-c*i)*(-1)^i+b/2`where `A=c+b/2-s[1]`.

In the first case, the filter gives a constant, in the second, an alternating sequence a^5 It is maintained. The division is carried out in F_n; Integer sums, precisely divisible numerators are used.

SEQ-20 test a It's not two independent chains with arbitrary different multipliers.

## SEQ-21: quadratic

Primary `s[i+1]=a*s[i]+b*i²+c*i+d mod n`, a!=1, solution

`s[i]=A*a^(i-1)+u*i²+v*i+w`,

wherein `u=b/(1-a)`, `v=(c-2u)/(1-a)`, `w=(d-u-v)/(1-a)`, `A=s[1]-u-v-w`The polynomial part on the indices 75+5j It stays quadratic. It's eliminated by a third difference:

`T[j]=S[j+3]-3*S[j+2]+3*S[j+1]-S[j]`.

Primary a=1:

`s[i]=s[1]+b*(i-1)*i*(2*i-1)/6+c*(i-1)*i/2+d*(i-1)`.

It's a cubic polynomial, the third difference is constant T satisfies `T[j+1]=a^5*T[j] mod n`.

## Masks and error size

For j-After a late observation, we shall assume `m[j]=2^(74+5j)`, `S[j]=r[j]+m[j]*u[j]`where r - the observed residue, u - an unknown whole, `0<=u[j]<n/m[j]`The division in the field gives `z[j]=S[j]/m[j]`, `y[j]=r[j]/m[j]`, `z[j]=y[j]+u[j] mod n`.

After scaling the filter, its coefficient z[j+h] multiplied 32^h. Get it `t[j]=Y[j]+e[j] mod n` and `t[j+1]=(a^5/32)*t[j]`.

| Series | Filters full S | Coefficients by z | The margin of error |
|---|---|---|---|
| SEQ-20 | [-1,0,1] | [-1,0,1024] | abs(e[j])*m[j] < n |
| SEQ-21 | [-1,3,-3,1] | [-1,96,-3072,32768] | abs(e[j])*m[j] < 4n |

The boundary follows from the sums of positive and negative coefficients of the original filter: 1 in the first case and 4 In the second. 32^h compensated m[j+h]The weight of the coefficient H[j] equalize 2^(182-5j) either 2^(184-5j), s n<2^256. Window weights 32^i They are correcting the errors of the shifted windows.

After the filter remains 11 or 10 significance Y. For k factor H window-number len(Y)-k+1, So the total dimension is equal 12 or 11. Relative brevity is normalized by the intrinsic determinant and eigendimensionality of each basis, then compared with random inputs of the same model.

## Meaning of detection

The right linear annulator `F(X)=X-a^5/32` It must divide the content polynomials H. The detector looks for a common multiplier blindly; the true multiplier F It's only used after the calculation to test the sensitivity gcd(5,n-1)=1, rho clearly a, But not the other parameters and states.

All the bonds that are being tested are necessary conditions of the model a The absence of such detection in the heuristic does not prove that masks are incompatible with the model T=0, Other modules, masks, permutations and different multipliers at different steps are not covered by this study.
