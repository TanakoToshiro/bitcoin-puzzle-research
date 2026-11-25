> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-applicability-order2-20261105/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-18: sensitivity of small lattices to second-order hidden recursion

The protocol is fixed SHA-256 first LLL This is a test of the applicability of a particular detector, not key recovery, not a universal grid test.

## Model and data

Module n order secp256k1. Checked out s[i+2] = a s[i+1] + b s[i] + c (mod n), b != 0, base-masked r[i] = s[i] mod 2^(i-1). Same index set: 1..70, 75..135 stepwise 5; The first force bit is not an observation 13 The rest are preserved, but not used for fitting or confirmation.

Let me M = [[a,b],[1,0]], R=M^5, q=32, z[j]=s[75+5j]/2^(74+5j) mod n. For t[j]=q z[j+1]-z[j] rightly F(E)t=0, wherein F(X)=X^2-tr(R)/q X+det(R)/q^2. Subtraction eliminates the constant additive t different from the observed Y on e[j]=q u[j+1]-u[j], u[j]=floor(s[75+5j]/2^(74+5j)); |e[j]| 2^(74+5j)<n. Coefficients F They're given by degrees.

32 Second-order control: 16 with different roots of the characteristic polynomial F_n, 16 with an irreducible polynomial 8 calibration and 8 Checks are excluded b=0, Zero Discriminant and Degeneration t[0]t[2]-t[1]^2=0. Parameters, initial states and c uniformly rejection sampling from SHAKE256 with fixed domains 12 First-order nondegenerate affinity controls and 128 random sequences (64 calibration 64 All of them are checks 172 The random states have the same masks and omissions [0,n). This is a specific zero, not a statement about the distribution of real keys.

Computational worker only receives opaque ID Family, division and truth are kept separate; truth is used in sensitivities and audits seed This is interface isolation, not cryptographic blinding of the operator.

## Fixed detector

Unchanged copying relations.py and recovery.py from SEQ-04. It's only used lattice(), not recover(): k=4,5,6,7, four-grid 13x13, SymPy LLL delta=3/4, No increase in known bits, dimensions, numbers k or fortune-seeking.

1. All extracted polynomials are combined and normalized to monic above F_n, Duplicates are removed while preserving origin k. All pairs are tested for GNR. Second-order candidate - GNR degree exactly 2 with a nonzero free member; GDNs are more likely to be retained as unauthorized. Account is the maximum number of different polynomials divisible by such candidate if they are represented in at least two totals k. Fixed positive threshold: 4 Linear candidates are evaluated by the same rule only for sanity-First-order control, matching the true F post-test worker; random F It is not a success of restoring built-in communication.

2. For everyone k lineage LLL polynomial with at least two non-zero coefficients mod n, The minimum square Euclidean norm is selected. S_k=log2(det B)/13-log2(norm2)/2, S=max_k S_k, rounding 10 signs. log2(det B)=sum(log2(weights))+(13-k)log2(n)+sum(log2(window_weights)). Bigger S It's a statistical feature, not a certificate Howgrave–Graham. The constants, the monomes and the zero polynomials are not involved, and the lack of suitable strings is invaluable.

## Calibration and stopping

It takes completion of all 172 minimum 10/12 True linear detections in sanity-The multiplier channel is allowed to Puzzle, If the test set is found to be true F minimum 14/16 positive cases, and the response to accidental no more 0/64. Channel of norms: the threshold is the maximum S on 64 calibration random; strictly exceeding the minimum 14/16 positive test and maximum in 1/64 The calibration positives are only described, the parameters do not change 14/16 pilot's rule of thumb, not proof of universal sensitivity; both groups are reported separately.

If both channels fail, the real data is not valued again. If even one has passed, only the past channels are applied to the four already stored grids REAL.json SEQ-04. Their matrices are being retested. There is no new real one LLL, independent holdout For approved channels, a research rank is derived p=(1+number null score >= real score)/129 and min(1,2p); two predefined metrics, alpha=0.05. Previous reuse of real data limits interpretation. p It's not the probability of the model being true.

## Budget, safety and audit

One consistent worker; 5 seconds wall time In case of launch, maximum 1200 Seconds for science launch sys._base_executable, CREATE_NO_WINDOW; no child processes worker, packet installations, GPU or lattice extensions/mistake unknown, not negating the model; an unfinished set closes gate. All the exits, stderr The audit and hashing of the archives are accounted for separately from scientific time.

Checked before launch SHA used sources from the previous seals, fixed SHA New code, inputs, and protocols are collected for the old archive SHA accepted manifests, Metadata is checked before the start, complete SHA-The pass is performed once in the final audit. Existing artifacts do not change SEQ-17 ENVIRONMENT.json.

Audit independently restores matrices from masks, checks U B=L and det U=+-1, Extraction of polynomials, all NDU through FLINT instead of Euclid's own norms, formula F on full states, mask errors, breaking, rapids and gate. Built-in arithmetic fixtures Check the joint quadratic multiplier, unnecessary monomes and scale duplicates to basic computations. True synthetic bonding in the absence of a signal means insensitivity of the chosen design; not lack of communication Puzzle.
