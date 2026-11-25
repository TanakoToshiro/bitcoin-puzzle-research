> English machine translation of the [Russian source](<../../ru/reports/NEXT_HYPOTHESES_AFTER_E5.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../README.md>) · [Direction](<../topics/08-methodology-and-history.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../docs/LATEST_RESULTS.md>).

# The following hypotheses after E1–E5

Date: 2026-10-30. Status: Plan, no new computational experiments were launched.

## Ground and limitations

Priority means the usefulness of the final test, not the probability of success. There is no data for an honest percentage of the probability of finding the key. These methods are well known; untested in our series does not mean that no one has checked them.

- [E1](<experiments/mt19937-linear-20261030/runs/20261030-093024-0567d283/CONCLUSION.md>): eight fixed packing methods MT with an arbitrary state does not determine any of 70 unknown bits number71 or nontrivial XOR.
- [E2b](<experiments/python-expanded-20261030/runs/20261030-105921-2f40f0fd/CONCLUSION.md>):all 2^32 integer seed excluded 120 specific Python-Repeat the same states through strings seed Windows Python 2.7 It is meaningless in the area of coverage.
- [E5](<experiments/public-key-forensics-20261030/runs/20261030-114903-5757a87d/CONCLUSION.md>): verifiable public key No71 not found; selected signatures do not contain repeats r. For 15 Available verifications of disclosure 2019 year nonce matched RFC6979. It's not a generator identification 2015 years.

Published solutions are full private keys. Unknown value raw_i The masking hypothesis is a separate source number, not an unpublished part of the solution.

## The next experiment: E6, byte generation and hex-symbolism

**Hypothesis:** baseline 256-bit number was collected from 32 bytes or 64 hex-symbols. E2b check other methods of flow consumption; the same seed It doesn’t make these sequences the same.

Lock down CPython 2.7.9/3.4.2 and three recipes:

1. 32 challenge getrandbits(8).
2. 32 challenge randrange(256).
3. 64 challenge choice('0123456789abcdef').

For each, straight forward/the inverse order of the bytes or symbols obtained, each/Every second full source key. The initial pass in the first cycle is strictly 0; First, a full generation is generated raw_1, later raw_2 etc., including Nos1. Masking: d_i = 2^(i−1) + raw_i mod 2^(i−1). Arbitrary alphabets, omissions and reseeding Don't add it as you search.

It's 24 Logical configurations, expected 20 physical after the same association getrandbits(8); The final equivalences are confirmed by historical vectors, the list is frozen until run.

**First, cheap structural testing.** For a fixed flow rate, getrandbits(8), Python 2.7 randrange(256) and choice(hex) - to construct linear observations MT and measure the rank and projection at No71. Woo Python 2.7 selection from the degree range of two through random() uses the highest bits of the first word, but consumes two words; the exact equivalence must be checked on the historical runtime. Woo Python 3.4 randrange/choice There is a drop, so you can't transfer this linear calculation to them.

Then check for the limited seed32, Starting with the pilot and measuring speed [0,2^32) A separate, explicitly recorded purpose for a computational run; a partial cover cannot be called a refutation GPU-No launch is scheduled.

Controls: independent historical sequences, restoration of artificial seed including boundaries, saving the flow rate for passes and failures, conflicting data, stop/resume, independent vetting of candidates1–50; For the final linear analysis, it is permissible to use all known solutions separately with an explicit indication of the observation area71 check at the address.

**Why?** closes a specific spending gap MT and retains the original purpose of bit verification/XOR. **Weakness:** There's no evidence that the creator used such a script, and a zero-ranking score doesn't replace it seed32-Search, and vice versa.

## Next Future Experiments to Decrease Priority

### E7: MT19937 s init_genrand(seed32)

Standard scalar-initialization MT different Python integer seeding through init_by_array. Complete E2b I didn't go through that other image 2^32 A historical concrete example is a direct one _random.Random(None) into CPython 2.7.9, provocative init_genrand from time to time; this is not a standard wrapper random.Random(None).

Initial Final Production: Eight uint32 on raw, straight-line/backward order of words, big/little within the word 1/2, displacement 0: Eight models, check with the original MT and historical low-level Python; Check if there is already published reproducible full coverage of these exact models seed32-It's not like you're testing everything C++/PHP-programs, their packaging or API.

### E8: historical fallback Python

The specific mechanism is: int(time.time()*256) upon NotImplementedError from os.urandom into Python 2.7.9/3.4.2. For 2015 year-over 32 bit and doesn't go in E2b. Ordinary initialization prefers systemic entropy; signs of triggering fallback The creator doesn't.

Before calculating, indicate UTC-window, exact formula and set API. Date of funding 2015-01-15 It gives you a guide, but it doesn't prove that you've recently created keys 30 days 663 552 000 time-calculations 1/256 c on one diagram; this is an illustration of value, not a selected window PID It's a negative conclusion only for the fixed window and recipe.

### E9: specific historical wallet generator

First look for source code, script archive, or reproducible historical error that existed prior to funding puzzle. For Electrum/BIP32 and other candidates to separate the usual path with sufficient entropy from the particular weak path seed. Restoration of regular implementation without limitation seed It does not, by itself, reduce the number of71. The name of the wallet is not derived from RFC6979 or the general distribution of decisions.

The practical result of the archival stage is the exact version, the entropy generation path, the indexation rules/masking and a finite set of candidates, or the recorded absence of a basis for computational search.

### Lower priority

- getrandbits(i) with repetition to the established most significant bit: a separate scheme, different from the forced bit and from the previous one randrange; preset the behavior1.
- Repeated seeding for each key: check only the reasonable prescription seed+i and seed XOR i Create an endless list without increasing credibility.
- New signatures/Publication archives71: Continue when a specific source appears r doesn't rule out nonce-vulnerability, but there is no reason for a large lattice-Signatures of different solvers should not be mixed as one generator.
- New HASH160-models, arbitrary XOR/sums of decisions and large seed-dictionaries: only with a meaningful new hypothesis and independent verification, the pattern discovered after the fact is not a prediction.

## Sources and continuation

Primary sources are re-confirmed 2026-10-30; Local copies have already been saved in review-20261030/primary, Reloading is not required for reproduction:

- [CPython 2.7.9 random.py](https://raw.githubusercontent.com/python/cpython/v2.7.9/Lib/random.py): seed fallback, randrange and choice.
- [CPython 3.4.2 random.py](https://raw.githubusercontent.com/python/cpython/v3.4.2/Lib/random.py): seed fallback, _randbelow and choice with throwing away.
- [CPython 2.7.9 _randommodule.c](https://raw.githubusercontent.com/python/cpython/v2.7.9/Modules/_randommodule.c): init_genrand for None low-level API, init_by_array for integer seed, expense getrandbits/random.
- [Options not covered E2b](<experiments/python-expanded-20261030/FUTURE_EXPERIMENTS.md>).

Recommendation: start with E6. To start, create a separate experiments/python-byte-hex-<date>/ s PROTOCOL.md before the calculations, RESULTS.md After each stage, immutable settings and hashes, don't rewrite old results, fix the budget, actual coverage and stop limit; don't replace heavy continuation with a statement of complete exclusion of the model.

## Supplement after reply sent ChatGPT, 2026-10-30

Added previously unexecuted data application E5: small sets of possible public source points of the upper problems and common XOR-factor Armory. [Discussion of arguments and proposed limited stage](<REVIEW_CHATGPT_HIGH_POINTS_20261030.md>)Up to the big one seed-brute force makes sense to evaluate this mathematical formulation and scaling on reduced examples; fast algorithm or link to No71 I haven't received it yet E6 There's no new computational results in this add-on.

## Follow-up: E6H, 2026-10-30

The limited phase described has been completed: [findings and artifacts](<experiments/high-points-xor-20261030/runs/20261030-122003-bb9bb8/CONCLUSION.md>)Sets of real dots built, general C on reduced models restored; verified joint MITM It does not reduce the complexity of the usual DLP+Without a new algorithm, extend the same MITM Not offered E6 byte/hex It remains a separate unexecuted experiment.

The goal of clarifying the user is now any unresolved puzzle, including tasks with known public keys, requiring a path to71 removed; for practical result it is still necessary to show the extraction of the numerical key/a useful limitation or confirmed reduction of work for some unsolved problem.
