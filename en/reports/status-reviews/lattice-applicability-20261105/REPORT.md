> English machine translation of the [Russian source](<../../../../ru/reports/status-reviews/lattice-applicability-20261105/REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/08-methodology-and-history.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# LSCREEN-01 Checking the applicability of the original masks

**All nine validated panels of real keys have confirmed an obstacle to a separate Mobius cube.** Strict HG-L1 criterion in degrees of ideal (n,G) It's impossible to do with any number of polynomial shifts, and increasing that lattice or reducing time does not remove the proven obstacle.

It's a constraint of a particular design, variables, rectangular boundaries and criterion, and it doesn't exclude the Mobius model, allowable hidden states, co-invariants or other lattice methods.

| Panel | The boundaries of the four differences, bit | Minimum weight of the maximum monome |
|---|---|---|
| 75…95, step 5 | [182, 177, 172, 167] | 2^521 |
| 80…100, step 5 | [177, 172, 167, 162] | 2^506 |
| 85…105, step 5 | [172, 167, 162, 157] | 2^491 |
| 90…110, step 5 | [167, 162, 157, 152] | 2^476 |
| 95…115, step 5 | [162, 157, 152, 147] | 2^461 |
| 100…120, step 5 | [157, 152, 147, 142] | 2^446 |
| 105…125, step 5 | [152, 147, 142, 137] | 2^431 |
| 110…130, step 5 | [147, 142, 137, 132] | 2^416 |
| 115…135, step 5 | [142, 137, 132, 127] | 2^401 |

Module n less 2^256. Each cube has four maximum divisibility monomes; all four are reversible modulo n. We tested two dice disclosures and integer ideal normalization identities SEQ-16 It gives you a lower bound n^m weighted L1-the standard of any non-zero element (n,G)^m, for any m≥1.

One known Möbius chain with the same initial masks also got an obstacle on all nine panels, although its true hidden values satisfy all the cubes. One random sequence got the same obstacle; its generated full states do not satisfy the cubes. The latter does not prove the absence of other permissible additions to masks. These controls check arithmetic; they are not statistical estimates of sensitivity.

27 check-up 0.017698 c in this launch, without the start of the interpreter, preparation of inputs and design. LLL, Gröbner No recovery was done; no additional bits were disclosed. This is a test of the applicability of the strategy, not finding a lattice fingerprint in the data.

Checked hashes and mtime Five Read Sources/Manifestoes; the entire old archive has not been re-hashed. INPUTS.json; Exact certificates: RESULTS.json; sources: SOURCES.json.

Theorem:/../experiments/sequence-cuso-extended-20261103/OBSTRUCTION_PROOFS.md and OBSTRUCTION_ORDER_EXTENSION.md. Re-checking by reading only: `screen.py --verify`.
