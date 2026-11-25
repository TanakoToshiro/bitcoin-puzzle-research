> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-public-lift-20261030/POST_ANALYSIS_PROOF.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# What proves the boundary for several public points

This post-processing uses stored new decompositions E1f, non-calculating matrixes E1e It doesn't change the basic protocol. The full numerical results are in `multi-bounds/`, `triple-arrangements/` and `MULTI_BOUND_VERIFICATION.json` current launch.

## Dimension of linear parameterization

For F(z)=c+Σ a_m χ_m(z), a_m≠0, multiplicity t function F equal to the orthogonal complement of a linear shell of its non-zero m. Indeed, of F(z+t)=F(z) for all z The independence of the characters should be a_m(χ_m(t)−1)=0 for each m. In the odd field, this is equivalent <m,t>=0.

If F write down h(Lz) linearly GF(2)-map L, Its core is composed of periods F. Therefore, rank(L) less rank(span{m}). Equality is achieved by choosing the basis of this shell **Minimum number of linear binary parameters** to describe the function in this section accurately GF(2) It won't shrink on its own.

It's not an image size F. For example, AND d bits have two meanings, but Fourier-support d-And that's why rank r does not prove that 2^r various amendments, r bit of entropy or necessity 2^(r/2) The conclusion relates to the tested list of linear parameters and to the absence of a small sparse-mask numerical image compression F It's not out of the question.

## How all fixed coefficients of multiple points are covered

For each of them 173 All the characters of these columns are known. The global private character is found in only one column. For any non-zero coefficient of this column, it stays in the sum, no matter how many other columns are added. The rank of combining such particular forms is the bottom rank of the residue for any set of non-zero coefficients of the selected columns.

For 101 available public column:

1. Two-membered combinations are normalized to coefficients (1,b), b≠0. The number of remaining characters changes only when b=−a_i/a_j All such values and one common representative of the other values have been checked/signs and any other fixed coefficients modulo n They're part of this check.
2. If the private rank of any couple in the three ≥140, rank of three ≥140. Only the triangles of the weak pair graph require a new test bits_i available 49 rib 63 Only two triples have a private rank <140.
3. For these two threes, the coefficients (1,b,c), b,c≠0, Checked through direct cancellations a+b*d+c*e=0. Supports can vary only beyond all lines, on one straight line outside intersections and at intersections. In both cases, two straight lines and three classes are found; minimum actual ranks are found 458 and 461. Zero coefficient cases are already covered in pairs.
4. Any set of four columns has four different threes. Only two threes have no private bottom score ≥140; So in any four-element set, there's a three with the right one **privately** It's stored when you add any columns. So all the size sets are ≥4 also rank ≥140. This does not require a search of four, five and other sets.

Separately for formulas with unknown point No71 We get the bottom scores by combining its partial forms with the shapes of every available public column, and adding further columns doesn't reduce them HASH160 does not provide a group objective for BSGS/MITM on this amendment.

Boundaries are computed on permissible non-empty affinity slices. Any linearly parameterized description of the entire original function at a cut-off limit is a description of no greater dimensionality. So the bottom scores on the slice apply to this parameterization of the whole family. They don't claim that the set of real states after taking into account specific public points coincide with this cut.
