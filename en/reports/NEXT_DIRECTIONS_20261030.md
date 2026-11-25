> English machine translation of the [Russian source](<../../ru/reports/NEXT_DIRECTIONS_20261030.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../README.md>) · [Direction](<../topics/08-methodology-and-history.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../docs/LATEST_RESULTS.md>).

# Proposals after E8 completion E1d

> Status update 31.10.2026: points 1–3 have already been substantially investigated in E1e/E1f/E1g/E1h/E1k. This text retains the original proposals; current coverage and open questions [experimentation](<EXPERIMENT_REVIEW_20261031.md>)Do not consider all the paragraphs below not yet fulfilled.

Date: 30.10.2026, Moscow: Status: proposals; no new computations have been launched on this document. Priority means the value of the next test, not the established probability of success or global novelty.

Reason: [E1d completed 40/40](<experiments/mt-all-targets-20261030/runs/20261030-131459-93a3e1c9/CONCLUSION.md>)Some of them MT-Models are limited, for example, by number108 remains 76 free coordinates instead 107. It's still more of a full space No71. Another compatible model allows for everything 8953 Unknown bits; the constraints found cannot be considered real bits without installing a generator. [E8](<experiments/mpk-source-search-20261030/RESULTS.md>) rule out specific options Electrum no256, But not any schematics of that key.

## 1. Combine MT-limitation of reference number161–256

Areas: Linear algebra over GF(2), reinstatement PRNG, Limitations on the scalars of the elliptic curve.

E1d investigated 77 unsolved goals No1–160. Build separate projections for the original number161–256, public points of which are checked E5. First, work with circuits without unknown failures, determine the dimensions of spaces for the complete ones themselves puzzle-keys and associated keys without substituting hypothetical source keys raw. Use a known mask with precise transition to public points; upper starting points E6H They provide some final alternatives.

The first stage is just the ranks, the constraint structure, and the cost of checking the public point Q It doesn't reveal the lower bits of the scalar/Small tasks and compare them with the basic solution DLP; A large reduction in space does not guarantee a fast algorithm, unless there is a small dimension or structure that gives a measurable advantage, end the stage with an assessment of complexity without much brute force.

## 2. What are the limitations of unknown failures?

Areas: Symbolic execution, linear invariants, unification of state spaces.

For the chosen API To collect an expanding family of valid histories. Calculate the constraints that are true across the entire association, including the right-hand side of the equations: from the affinity shell of the unification rather than the intersection of allowable states. First compare the saved histories, then controllably add new ones. Separate the invariants of a particular one API and invariants of combining different API. Keeping the formula on a sample of stories does not prove it for all possible histories; final inference requires coverage/Do not repeat the weighted pilot E1c as proof of completeness.

## 3. Test the ability of models to predict known solutions

Areas: model selection, diagnostic exclusion of observations, prediction testing.

For pre-fixed blocks, exclude some published solutions from the constraints. For each excluded key, first check if the model gives a non-trivial prediction at all; if the entire key is free, this test does not confirm the model/XOR, And so we can compare them to excluded values, and we can include synthetic sets of real generators and independent random keys. This is a retrospective diagnostic: solutions were already available and used in the study, so this is not a new blind test, nor is it a basis for naive evaluation of significance after model selection.

## 4. Historical JavaScript and the real path of entropy

Areas: A History of Implementation PRNG, browser cryptography, program reconstruction.

Primary source V8 describe MWC1616 s 64-by-state applied until the end 2015 year: [publisher](https://v8.dev/blog/math-random)It's a separate family, not equal to the ones we've already tested MT, Java Random48 and xorshift32. For January 2015 You can not automatically use a modern algorithm Math.random.

Start with accurate historical implementation MWC1616 and two fixed methods of construction 256-of bit value: bytes and 32-bit words, with a clear transformation model double. Controls must execute the historical code, restore the state of the restrictions before budgeting for the brute force wallet-libraries: Math.random could only replenish the pool, after which there were additional mixing/The failure of a direct model does not exclude such a library puzzle s JavaScript It's not set yet.

## 5. Final public designs from No256

Areas: reproduction of homemade derivation schemes, serialization and domain division.

Low-cost, but weaker-reasoned user idea test: address bar No256, his HASH160, SEC-public key seed; pre-fixed SHA-256/HMAC-diagrams with a problem number or hash chain/Binary representations and both directions of numbering, leaving separate known keys for validation. Don't pick up dozens of transformations after each miss. Success requires the exact matching of several independent addresses/decisions. Previous E8 I didn't cover this production.

## 6. Historical Attribution of the Wallet and Additional Parameters

Areas: analysis of primary source and format, origin of public artifacts.

Look for a specific trace of the program/format with reference to the author or time of creation: original attachment, export, original script, MPK/xpub. Compare the signs of early transactions with historical programs only as weak evidence: Signature program/It could have been different from the key generator BIP32 A single point is not enough – public derivation also uses the chaincode; You can see that [specification BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)Arbitrary overreach chaincode It does not become effective in selecting No256 root.

## Recommended procedure

First 1–3: They use new results E1d and the data that's already been verified 4 It's like a new family with a historical foundation 5 You can do a single short cycle 6 Continue with specific leads, not endless repetition of common web queries.

Low priority now: new ones ML-predictor HASH160 without an independent signal; repetition seed32 in already covered schemes; increase the timeout of full cryptographic SMT-problems without further decomposition; numerical proximity of addresses; new checks must end with either a reproducible limitation/forecast, or a clear coverage boundary and an estimate of the cost of continuation.
