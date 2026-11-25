> English machine translation of the [Russian source](<../../../../ru/reports/experiments/order2-quotient-20261106/MATH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# O2-Q01: precision factorization and projection

Let me p odd, b!=0; simplicity p It's necessary for interpreting field coefficients, but the following shift formulas are true for an odd compound module

```
d  = s2-s1 mod p
c0 = c-(1-a-b)*s1 mod p
x1 = 0; x2 = d
x[i+2] = a*x[i+1]+b*x[i]+c0 mod p
t = s1, 0 <= t < p
s[i] = (x[i]+t) mod p
c = c0+(1-a-b)*t mod p.
```

Therefore, the full domain of classesa,b,d,c0) has p^3(p-1) Substitution of initial observations with masks x Restore compatible ones t Separately, all actual orders <=2 included: b!=0 It doesn't mean non-degenerate.

This is exactly parameterization through coefficients and differences: d1=d, d2=(a-1)*d+c0 mod p. Back to you c0=d2-(a-1)*d. Next d[i+2]=a*d[i+1]+b*d[i], x[i+1]=x[i]+d[i] mod p. Such a replacement removes the overall shift but leaves four free field elements; a new independent audit checks this form of execution.

## Accurate projection without listing shifts

For observation purposes (i,k,r) signify eps_i(t)=1, if x_i+t>=p, otherwise 0. Threshold equal p-x_i. At intervals formed by all these thresholds, eps_i We add a target threshold p-x_71. Within each interval:

```
t = r_i-x_i+eps_i*p mod 2^k_i.
```

Two such comparisons are compatible if and only if their residues coincide modulo 2^min(k_i,k_j). Compatibility leaves only one comparison t=R mod 2^K, K=max k_i. Intersection of this comparison with an integer interval [lo,end) The first element, the last element, the step and the power are calculated by integer division K>=h, wherein h the breadth of the goal, and unchanged eps_71, The remainder of the target is one for the entire progression.

Combining progressions over non-intersecting intervals contains exactly ALL compatible shifts of a given class m+2 for m observations with non-zero width; O(m^2) comparisons, O(m) Storage. Implementation uses Python big integers and is applicable directly to 256-bit p. No hidden meanings s1/c The four coordinates of the DANA class are not transmitted to it, but are not restored by it.

To find an unknown class, a separate full small search is carried out. NumPy Building chains for everyone p^3(p-1) block-class8192, Then he uses the widest observation: he tries to cross its permissible canonical meanings z=r+q*2^K<p and calculate t=z-x_i mod p. It's a bijection with all the shifts that satisfy the selected observation. The other masks are checked precisely. The order of the filters doesn't change the mathematical set p^4(p-1) Five, and each class found - with an interval projector.

## Completeness and limit of scaling

The completeness of the final search follows from the uniqueness of canonical coordinates and an exhaustive class domain; each block contains a non-intersecting range of indices. It is further verified by the complete coincidence of sets of solutions with an independent small standard. Testing a true synthetic answer in a set does not prove completeness by itself.

Taking down one unknown doesn't make a full search practical: n^3(n-1) approximately 2^1024 class secp256k1. For a package search, it is added to ceil(n/2^134) It can't be transferred to a real module, even if you replace this step with a polynomial interval algorithm, it can still be changed 2^1024 Rapid matrices reduce work at known coefficients, but not the number of unknown classes.

Reduced modules 7..61 They retain numbers and relative height of widths, but rounding gives the goal of everything0..1From the successful definition of this bit, you can't infer the possibility of restoring real-world70The bit or the probability of the model being true83 observations are used as restrictions; individual holdout Not in this experience. Real Puzzle-The meanings were not put in the decision.
