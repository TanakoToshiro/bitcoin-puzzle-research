> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-coupled-monomials-20261102/SOURCES.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Primary materials SEQ-09

Checked out 02.11.2026. The results of the experiment were obtained from local
Certificates and entries, not from external sources.

- [SymPy 1.14.0: polynomial reference](https://docs.sympy.org/latest/modules/polys/reference.html).
  Definitions tested `groebner`methods `f5b`/`buchberger`,
  `is_zero_dimensional` and `fglm`. FGLM It is applied to the null-dimensional ideal.
  The working code uses F5B, independent auditing Buchberger.
- [Keegan Ryan, Solving Multivariate Coppersmith Problems with Known Moduli,
  ePrint 2024/1577](https://eprint.iacr.org/2024/1577).
  Read the page with annotation: the work discusses the choice of polynomial
  Disruption of small solutions for modular systems and compromise with
  the size of the grid. PDF by the link of the protocol returned HTTP 403.
  The specific algorithms of the article were not reproduced; it serves as a context
  It's not a justification for the completeness of the shift system chosen here.

Conditionalities `H < N` Explained directly: an entire linear combination
generators are a multiplicity of N on the permissible root; its absolute
limiting H. Single multiple N open-space
`(-N,N)` That's a sufficient condition; the opposite is not stated.

Domestic sources: adopted SEQ-06, SEQ-07 and SEQ-08. Copies of them
Supportive implementations have been verified by SHA256. Old search stages
The old control inputs are not included in the new sample.
