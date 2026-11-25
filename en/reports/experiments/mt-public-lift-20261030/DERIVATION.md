> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-public-lift-20261030/DERIVATION.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Exact Equations and Area of Negative Results

Let each bit, after known linear observations, have the form b_j(z)=c_j XOR <m_j,z>, wherein z - free binary coordinates. Over an odd simple field F_n introduce χ_m(z)=(-1)^<m,z>. Then

`2 k_i(z) = constant_i + Σ_m d[i,m] χ_m(z) (mod n)`,

wherein the contribution of the non-coercive bit j non-zero m equal `d=−(-1)^c * 2^j`equal m Fixed bits enter a constant. Characters are linearly independent of each other F_n: matrix Walsh satisfies H Hᵀ=2^d I, ? 2 reversible modulo n. Therefore, `Σ a_i k_i = c mod n` the affinity family if and only if `Σ a_i d[i,m]=0` for every non-zero m. This is a check of all fixed coefficients modulo n Not picking up a few lines at the same time GF(2).

The full column rank excludes the calculation of the target point by a fixed linear combination of the remaining points and G, It's the right one for the whole family/The triangular evidence of rank is preserved. Public dots are not substituted for unknown bits of scalars.

V pre_increment coordinate x bitless k:

`k = 2^w + x + 1 − 2^w * [x=2^w−1]`.

The overflow indicator generally has up to 2^rank It can't be left out for free. For negative testing, you select a non-empty affine slice that contains the zero bit of each one x. It's exactly zero, and if there's no identity in this slice, it's not in the whole family256=0 It ensures the permissibility of the scalar, including +1: k256≤3*2^254<n. Changes from these cuts are not declared new observations puzzle.

For XOR two inches:

`x XOR y = x + y − 2(x AND y)`.

Even the equality doesn't give a point `(x XOR y)G` posture xG,yG pointlessly `(x AND y)G`The separation of part of the scalar is also not a group homomorphism. Shifts with the discarding of bits require an unknown discarded residue; modulo n replaceable modulo 2^w.

A Useful Case – Public Mask C and Y=2^w+(x XOR C), X=2^w+x. Then

`D = QX − QY + C G = 2(x AND C)G`.

If C contains r units, D summation r point-point `2^(j+1)G` with unknown binary coefficients r half-head MITM behind O(2^ceil(r/2)) additions/You don't need to know the rest of it w−r bits x. Candidate verification and initial transactions are included in the cost r≈w Advantage over Independent BSGS x absent; and when r≪w and available QX,QY It's possible to actually win, and it's this mechanism that's tested.

The arbitrary remaining Walsh-polynomial m The different characters may depend on r The full list of parameters has 2^r appointments. MITM index r/2 It doesn't follow automatically: a character that depends on the variables of both halves breaks the additive separation r/2 It is used only as an explicitly optimistic reference point where separability is not proven; the real algorithm is run only for separable sparse-mask models, big ones r It is not a universal lower bound for other mathematical methods.

Basic BSGS: [Handbook of Applied Cryptography, §3.6.2, Algorithm 3.56](https://cacr.uwaterloo.ca/hac/about/chap3.pdf)For a limited length interval N used O(sqrt(N)) group operations and records; in controls, a known lower bound is subtracted from a point HASH160 without the point itself, this algorithm is inapplicable: baseline Check the candidates consistently.
