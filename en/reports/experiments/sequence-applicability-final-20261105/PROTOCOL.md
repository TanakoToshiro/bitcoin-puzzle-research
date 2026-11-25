> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-applicability-final-20261105/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-20/21 - completion of the small cycle of applicability on the original masks

Two separate hypotheses; parameters and admission decisions for each are independent. Common code and audit don't combine their positive controls. This cycle ends with these two tests; there is no automatic family extension or limit.

## Models and filters

**SEQ-20, alternating:** `s[i+1]=a*s[i]+b+c*(-1)^i mod n`.
For S[j]=s[75+5j] applied T[j]=S[j+2]-S[j]filter [-1,0,1]At a not 0,1,-1 The solution consists of geometric, constant and alternating parts; the filter eliminates the last two. T[j+1]=a^5*T[j]Resonance a=1/-1 are checked separately, the same necessary connection is maintained at non-zero T.

**SEQ-21, quadratic:** `s[i+1]=a*s[i]+b*i²+c*i+d mod n`.
Applicable T[j]=S[j+3]-3*S[j+2]+3*S[j+1]-S[j]filter [-1,3,-3,1]At a!=1 Solution - geometric part plus polynomial degree 2; The third difference eliminates the polynomial a=1 condition 3 and T It's permanent, both times T[j+1]=a^5*T[j].

n order secp256k1. Observations: junior i-1 bit 83 past-index 1..70 and 75..135 stepwise 5. Forced most significant bit is not counted; gaps are not compressed.The detector reads only 13 The last observations, the rest are preserved. Neither the coefficients of the model nor the full states are transmitted to it.

Let's put it z[j]=S[j]/2^(74+5j) mod n. For the filter v[h] normalization t[j]=sum(v[h]*32^h*z[j+h]) is relevant rho=a^5/32. For the observed residues we obtain Y And an unknown whole mistake e=sum(v[h]*32^h*u[j+h]), u[j]=floor(S[j]/2^(74+5j)). Upper boundary |e[j]|*2^(74+5j) < B*n, wherein B=1 for alternating, B=4 for quadratic. It is these boundaries that define weights, not calibration results.

## Fixed dimensions

In every model k=4,5,6,7, SymPy LLL delta=3/4. alternating: 11 significance Y, size 12×12, weighting 2^(182-5j). quadratic: 10 significance Y, size 11×11, weight 2^(184-5j). Window weight 32^i. Basis: k diagonal coefficient strings with centered Y window coordinates and dim-k diagonal n-No known bits are added. No enlargement of lattices, no brute force, no full state recovery.

## Controls – separately for each model

180 new inputs to the model:

- 32 generic: 16 calibration + 16 validation. alternating: c!=0, a not 0,1,-1; quadratic: b!=0, a not 0,1. Only cases are discarded t[0]=0 and the degenerates.
- 12 affine sanity: The supplement is constant a beyond degeneration, t[0]!=0.
- 8 special: alternating four a=1 four a=-1; quadratic eight a=1. t[0]!=0. Only descriptive checking of special cases, not setting the threshold.
- 128 null: independent, uniform full states in [0,n), 64 calibration + 64 validation.

Domains SHAKE256: SEQ-20-21-final-v1/{model}/..., rejection sampling. All states, seed-tags, break-ups and opaque ID They're fixed before launch. Worker receives ID, The name of the model and observation being tested; not family, parameters or partition RALT/RQUAD Also fixed in advance, executed only after the admission of the appropriate model.

## Two channels for each model

The polynomials of all four reductions are monic mod n and are combined without large-scale duplicates with the preservation k. All pairs are blindly searched for the GNR candidate 1 count: the number of different multiples of its polynomials, if they are represented in at least two k, otherwise 0. Threshold 4; general score - maximum for candidates. rho=-F[0], a The only fifth root 32*rho (gcd(5,n-1)=1). Larger GNRs are stored, not factored. It's a communications candidate, unproven source generator.

Briefness: S=max_k(log2(det B)/dim-log2(min norm2)/2), rounding 10 Minimum only among strings with at least two non-zero polynomial coefficients mod n; zeros, constants and monomes are excluded 64 calibration null It's a statistical feature, but it's not HG-certificate.

All 180 synthetic inputs of the corresponding model must be completed, affine sanity >=10/12. Multiplier tolerance: true F on >=14/16 validation generic, false-positive 0/64 validation null. Permission of brevity: >=14/16 validation generic above the threshold, <=1/64 validation null higher; all S determined. Special They're not in the numerical thresholds of sensitivity, and they report results from both sides separately.

If one channel of a model passes, the four real lattices of that model are executed, and only the past channels are interpreted p=(1+#null score>=real)/129, amendment min(1,4p) on four pre-registered channels of two models, alpha=0.05. Maximum by k already included in score. This amendment applies to the current pair of tests, not the entire history of research holdout; p It's not a hypothesis.

If both channels of the model fail, the real stage for the model does not start. Timeout, error, lack of sensitivity and heuristic absence of the candidate are different statuses. Neither is declared a strict denial of the existence of a hidden chain.

## Budget, sources, audit

One worker sequentially. 5 from inlet including launch Python, 1200 (c) on model, general limit 2400 c 360 synthetic and two real-world attempts sys._base_executable, CREATE_NO_WINDOW, worker It doesn't create child processes stderr, Time and matrix are saved, no automatic repetitions/The hashing is considered separately.

From SEQ-19 copylessly relations.py, recovery.py, probe.py and known_solutions.json testable seal. Polynomial is used helpers and collect(), not before lattice(), norms() or recover(). New detector.py It sets two designs explicitly. vendor check-in SEQ-17 ENVIRONMENT.json.

Before the launch, the protocol, scientific code, auditor, inputs, The sources used are hashed immediately 9719 Previous artifacts are first checked metadata, in the final audit one complete SHA-256 passage; old results don't change. General seal It covers both series and their individual results.

The auditor independently checks the complete 135 states in closed formulas, necessary connections, error boundaries, matrixes from observations, U*B=L, det(U)=+-1, polynomials and all NDBs through FLINT, Standards, support and admission rules: Each real stage must follow the retention of its model. Reports can be created after fixation; scientific criteria do not change.
