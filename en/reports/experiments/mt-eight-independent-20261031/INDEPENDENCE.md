> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-eight-independent-20261031/INDEPENDENCE.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Area of independence E1j

New implementation C++17. The arithmetic of the curve is performed OpenSSL, not coincurve/libsecp256k1. Multiplication cycle left-to-right separately implemented and clearly considers additions/Jump selection and path construction are intentionally specificated E1i, So you can compare the results and the counters solver.py It has not been changed or imported into native.cpp.

Division of roles: experiment.py generates an artificial secret and a public point, checks it crypto_ref.py And then it gives the native process only a point, a list of intervals, their length and random salt SEARCH does not read files, does not receive a case ID, or seed. Mode --selftest It checks cryptographic arithmetic and is not a hidden key search.

Checking answers has three levels: native repeated multiplication of the found scalar; comparison in a separate verifier with a secret that has not been sent; initial public points verified by an independent affinity Python-Eight additional comparisons are made by the old one Python-solver his backend. The exact six counters are compared, but the full transcript of each intermediate point is not stored.

Which is not independent: mathematical idea, jump selection function, parameters and specification. So the same conceptual error in estimating the probability of success is not excluded by one implementation reconciliation. Having a cryptographic verification of each returned scalar protects against false positive answers, but limited failure cannot automatically become proof of the emptiness of the interval.

All calculations on the regular secp256k1; It scales the interval length, not the group size. Artificial scalars have the same large known prefix 2^154. A large absolute scalar at a small known interval is not proof of the possibility of a full range 155-bit-search.

Technical Limit of Implementation: Beginnings of Intervals/scalars presented OpenSSL BIGNUM, But length, distance and meters are used uint64_t; interface is limited N≤2^40. Therefore, this binary is not designed to run directly to the present N=2^146. Such a transfer would require a different implementation of distances and a separate acceptance. A general mathematical assessment does not mean that this binary is ready for a real purpose.
