> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt19937-linear-20261030/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E1: linear certainty of key No71 hypothetically MT19937

Date of pre-fixation: 2026-10-30. Prior to the calculation of results puzzle.

Object: all 83 Proven solutions of the first cycle, No1–70 no75,80,…,135. The data is copied into a separate launch with SHA-256. Stage one - No1–50, next--1–70, each later decision in order, and for each step, the jointness, number of equations, rank, and projection of 70 junior-bits71. Senior beat 2^70 Compulsory and is not an observation.

Eight hypotheses fixed: eight outputs MT19937 baseline 256-bit-key; word order forward/reverse; bytes big/little; stride 1/2. Packaging: Convert each word to four bytes with the selected byteorder, upon reverse expand the list of words, connect and read how big-endian whole. Puzzle i Uses a source block with a zero index `(i-1)*stride`Number omissions are retained. No additional offsets, hashes, rejection sampling or selecting options after the outcome.

State: 19937 independent coordinates before the first twist - Most significant bit of the word 0 all 32 word-bit 1…623. Others 31 lip 0 zero: in-place twist I don't read them. The first exit is after twist. Check that the linear mapping on 624 postulate twist rank 19937. Therefore, parameterization covers the entire transition pattern MT and does not include extra independent coordinates. Eliminate zero flux; non-zero observations puzzle It is excluded in real systems.

For each diagram: `A s=y`, target bits `B s=t`, `d=rank([A;B])-rank(A)`Number of independents XOR-the limit of the target balance is equal to `70-d`Separately define individual fixed bits. If the system is incompatible, keep the linear combination of source strings equal to `0=1`The target projection of such a model cannot be interpreted.

Certificates of joint case: basic permissible condition, d direction of change of state with independent changes in target bits and 70-d linear constraints, expressed through observations C-execution MT into `random.Random.setstate` To verify the equality of certificate lines and the independence of target directions by individually implementing an exception 70-It’s not just a single random response from the solver.

Controls: official vector scalar-seeded MT5489; numerical MT s CPython on arbitrary states; symbolic performance on several states across borders twist; Rank of achievable state; restoration of full state; contradiction; data insufficiency; certain XOR for unspecified individual bits; packaging and omissions; condition check/Certificate after damage: Data validation uses a previously verified snapshot and range re-check/address coincurve.

Computational limit E1: before 3600 seconds wall time, CPU, without GPU Preliminary development and testing separately; all actual launches are saved. If the stage is not completed, mark it incomplete, save the journal and continue with a separate team with an explicit budget. Do not fill the budget by repeating the completed stages EVENTS.jsonl and reassemble RESULTS.md preserved JSON. The intermediate stages of each scheme should be kept separately.

Public decisions after No50 They're not a new closed cryptographic test 83 solutions are permissible for the final projection, but jointness does not prove the origin of MT. It is an experiment with an arbitrary achievable state, not a limited numerical state seed specific API. Free bits in a broad model do not exclude limitations in a narrower seeded-The incompatibility of the broad model excludes its nested seeded-Options only with the same consumption of exits and packaging.
