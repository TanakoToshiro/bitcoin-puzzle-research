> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-applicability-order2-20261105/MATH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Finding out SEQ-18

## From the hidden transition to polynomial

Initial assumption: `s[i+2]=a*s[i+1]+b*s[i]+c mod n`, `b != 0`The two-dimensional transition has a linear part `M=[[a,b],[1,0]]`In step-by-step observations 5 linear `R=M^5`According to the Cayley-Hamilton theorem for subsequence `S[j]=s[75+5j]` run

`S[j+2] - tr(R)*S[j+1] + det(R)*S[j] = K mod n`,

wherein K regardless j. Therefore, `d[j]=S[j+1]-S[j]` satisfies a homogeneous recursion of second order

`t[j] = d[j] / 2^(74+5j) mod n`

polynomial `F(X)=X^2-tr(R)/32*X+det(R)/1024`The coefficients in JSON It's an inference from a particular model, not a substitution of masked keys instead of full states.

Observable balance `r[j]=S[j] mod 2^(74+5j)`, the hidden whole part `u[j]=floor(S[j]/2^(74+5j))`Detector gets it

`Y[j]=32*r[j+1]/2^(79+5j) - r[j]/2^(74+5j) mod n`.

Then `t[j]=Y[j]+e[j] mod n`where `e[j]=32*u[j+1]-u[j]` and `|e[j]|*2^(74+5j)<n`There are small errors in both structured and random sequences, and the difference has to be in polynomials that are simultaneously nullifying t, It's not the very existence of mistakes.

## Why is a common quadratic multiplier chosen?

If a short string of the grid gives coefficients H, in accordance with this relationship, is expected to `F | H` above F_n. A few of them H can have a common multiplier F. A single small string length does not guarantee this: short strings also occur in random observations, so the first channel checks the polynomial multiplier, and the second calibrates the length separately.

For any fixed monic F degree d and k>=d multiple-vector coefficients H less k s `F | H mod n` index `n^d` into Z^k. Proof: linear mapping of coefficients in the remainder when divided by F survivorly F_n^d, since the first d Monomes are the basis of residues. Its nucleus has an index n^d. For linear F index n, for the quadratic n².

This explains why the success of the same detector in the first order is not automatically transferred to the second. The index does not prove that detection is impossible, does not specify the exact threshold of known bits, and does not replace the experience with the original masks k And masks; by itself, he does not distinguish between positive and accidental inputs.

## Boundaries of withdrawal

- Discovering the true F Synthetics confirms sensitivity to the specified family and range of parameters, but does not restore all states.
- Absence F positive synthetics limits the detector, does not reject the model for Puzzle.
- Even in general F In real-world data, it would require validating the existence of valid states and confirming them in other observations.
- 83 observations are preserved; these four lattices use only 13 The possibilities of a method that uses the whole set at the same time have not been tested.
- Other modules, masks, export order, variable coefficients, nonlinear transitions, other lattice or large dimensions are not checked.

The document explains the registered formula; does not add new tests to the PROTOCOL.md.
