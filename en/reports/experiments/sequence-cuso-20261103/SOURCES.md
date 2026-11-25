> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-cuso-20261103/SOURCES.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Primary sources and consolidation

* [cuso](https://github.com/keeganryan/cuso), commit
  fb2747d2105a8e48499bf10a3a717cf80c14d079, version 0.4.0.
  Executed OptimalShiftPolys and GraphShiftPolys; source and SHA-256
  Each file is attached to PINNED_SOURCES.json.
* [flatter](https://github.com/keeganryan/flatter), commit
  d2b8026f29b4a69e987b15d4b240f8a5053275d3.
* [msolve](https://github.com/algebraic-solving/msolve), commit
  3672113ee2c696a2ac9c637636e0f7214f500ba1.
* [Keegan Ryan, Solving Multivariate Coppersmith Problems with Known
  Moduli](https://eprint.iacr.org/2024/1577), bibliographical link
  with the method; [publication EUROCRYPT 2025](https://doi.org/10.1007/978-3-031-91095-1_13).
  Official PDF return 403. Performance and description
  implementations are based on the read fixed code cuso, not
  a statement of full reproduction of the article.
* [Sage: MPolynomial API](https://doc.sagemath.org/html/en/reference/polynomial_rings/sage/rings/polynomial/multi_polynomial.html):
  is_generator renamed is_gen, issue 38942.
* [Official installation Sage through conda](https://doc.sagemath.org/html/en/installation/conda.html),
  [formalization micromamba](https://mamba.readthedocs.io/en/latest/installation/micromamba-installation.html).

Preserved scientific inputs and source systems: SELECTED.json and
CALIBRATION_SELECTED.json. Former answers: BASELINES.json.
Exact versions of the surroundings: LINUX_ENVIRONMENT.json and conda explicit lock.
