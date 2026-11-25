> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-applicability-drift-20261105/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-19 Hidden affinity transition with linear index addition

Protocol, code, inputs and parameters are recorded SHA-256 before the first reduction of this series.

## Model

`s[i+1] = a*s[i] + b*i + c mod n`, n order secp256k1. No coefficient or full state is transmitted to the detector `s[i] mod 2^(i-1)` formerly 83 Indices. Forced high bits are not counted, gaps are not compressed 13 indexes 75,80,...,135; others 70 They are preserved, but not used in this test.

For S[j]=s[75+5j], q=32, z[j]=S[j]/2^(74+5j) mod n Take the second scaled difference `t[j]=q²*z[j+2]-2q*z[j+1]+z[j]`At a!=1 linear supplementation is eliminated and `t[j+1]=(a^5/q)*t[j] mod n`At a=1 The original sequence is quadratic, the second difference is constant before scaling, and the same formula remains true. a=0 case-case t[0]=0 These degenerates are not included in the main positive sample; these degenerates are not excluded by a negative detector result.

Primary `u[j]=floor(S[j]/2^(74+5j))` true t different from the observed Y on `e[j]=q²*u[j+2]-2q*u[j+1]+u[j]`; `|e[j]|*2^(74+5j)<2n`The weight of the error is therefore twice as large SEQ-04/18. It's a new model modulo n; recursion modulo 2^w from SEQ-02 It's not covered.

## Entrances and limitations

- 32 The main positive chains: b!=0, a not 0/1, t[0]!=0; 16 calibration and 16 check-ups.
- 12 affinity sanity-control b=0, a not 0/1, t[0]!=0.
- 8 Additional positive quadratic chains a=1, b!=0; Descriptive verification of a special case, not setting the threshold.
- 128 independent random complete sequences uniform [0,n): 64 calibration 64 Checkouts.

All 180 new inputs, from the recorded SHAKE256-domain SEQ-19-drift-v1 s rejection sampling. Parameters, masks and partitioning do not change according to the results. Worker read ID and 83 Full states and coefficients remain separate TRUTH.json, They are used for evaluation and audit after calculation.

Four lattices 12×12, k=4,5,6,7; 11 significance Y, 12-k Weight coefficients `2^(183-5j)`window weights `32^i`Lines: k Weighted coefficient base vectors with centered Y window coordinates and 12-k diagonal n-lines. SymPy LLL delta=3/4. No addition of known bits, no increase in dimension, no brute force a,b,c.

## Two predefined channels

1. The polynomials of all four lattices are normalized to monic mod n and are combined without duplicates with preservation k. All pairs are computed without knowing the true a. Candidate - NOD degree exactly 1 Its count is the number of different multiples of its polynomials if they are represented in at least two k, otherwise 0. Positive threshold 4. GDNs are more conserved, not factorized. rho=-F[0]the only one a This is the fifth root 32*rho, because gcd(5,n-1)=1. It's a communications candidate, not evidence of the existence of full states.

2. Normalized brevity `S=max_k(log2(det B)/12-log2(min norm2)/2)`rounding 10 The minimum is taken only on lines with at least two non-zero coefficients of the polynomial mod n. Zero polynomials, constants and monomes are not involved S on 64 It's calibration random inputs, it's a strict overdo HG-certificate.

## Admission to Puzzle

All 180 The entrances must be completed, sanity shoulder 10/12 The multiplier channel runs at a minimum 14/16 discovered F check-in drift and 0/64 The brevity channel runs at a minimum 14/16 check-out drift maximum 1/64 All the values are random S should be determined a=1 They are not included in the numerical thresholds of sensitivity.

Only with a successful admission do the same four new small lattices execute on a pre-recorded real input, only the allowed channels are interpreted p=(1+#null score>=real score)/129 and min(1,2p), alpha=0.05. Maximum by k Reusable real keys are not new independent keys holdout; p No probability of the model, no full state recovery, no compatibility checks 83 No observations, no predictions of unresolved keys are included in this series, and in the absence of a candidate, the model is not declared strictly excluded.

## Budget and audit

One worker, 5 s wall time entrance, including launch Python, science budget 1200 c; before 180 synthetic and one real attempt sys._base_executable, CREATE_NO_WINDOW, no child processes worker. Timeouts and errors are saved as unknown They close the clearance; they don't repeat. Audit and hashing are accounted for separately.

Unchanged helpers relations.py, recovery.py, probe.py snapshot 83 keys are copied from SEQ-18 testable seal. Used polynomial helpers and collect(), old-style lattice(), standardization 13 It's not a state restorer 12-The sensing lattice and selects the linear channel explicitly.

Audit: Reproducing inputs; true recursion at all 135 states; independent formula of coefficients; identity of second differences and error boundaries; exact matrices U*B=L and det(U)=+-1; Extraction of polynomials; all NDNs through FLINT; Independent counting of support, norms and clearances. Used sources are hashed before launch. For the old archive, metadata is checked before launch and everything is done SHA-256 Once in a final audit; the old files are not changed.
