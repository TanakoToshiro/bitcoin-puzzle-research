> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-shift-lattice-20261102/SOURCES.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Sources and boundaries of justification

- [python-flint 0.9.0, fmpz_mat](https://python-flint.readthedocs.io/en/latest/fmpz_mat.html).
  Documented transactions verified HNF and precise matrices, including
  proof H=T*A. Audit uses HNF comparatively
  Integer spaces of strings.
- [Keegan Ryan, Solving Multivariate Coppersmith Problems with Known Moduli,
  ePrint 2024/1577](https://eprint.iacr.org/2024/1577).
  Read the page with annotation: the choice of polynomial shifts affects
  Dimension and practical work Coppersmith-Specific grilles
  Algorithms of optimal selection from the article are not implemented here.
  The simple directional assessment used is not declared optimal.

Sources verified 02.11.2026. The main evidence is directly:
if g(u) multiplely n², piece u_j*g(u) multiplely n² on an integer root.
The sum of the two coefficient lattices retains this property
The absolute value is less n² The value has to be zero.
HNF verifies the equality of the constructed basis of the claimed sum of lattices.

Construction n² and the subsequent decision-maker comes from the SEQ-09/10;
The new findings are based on new controls
Inputs and stored certificates, not external results.
