> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-posterior-20261030/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E1c: Probability among compatible states

Date of fixation: 2026-10-30. Continuation E1b, brutely seed. Separate local verification of already saved candidates Bitcoin-address address-audit It does not participate in the configuration of the probabilistic method.

## Question and prior

Compatible state can give a real number71; certificate E1b It's not a real key, it's an address check that confirms the key, not the uniqueness of the state.

For this experiment **It is clearly assumed that the distribution of non-zero 19937-bit-coordinates MT**. It's research prior, Unestablished fact about the creator and not statement about the image Python seed(). Others prior - individual experiments.

1. For 12 configurations E1b without hidden failures (variable width, getrandbits(8), Python2 randrange(256)) Use the already proven ranks d=70 non-zero RHS node71 equally 2^(19937-rank(A)-70) That's why posterior №71 **uniformly** though prior; Monte Carlo No need.
2. For randrange with unknown failure to comply with limited importance-sampling pilot: interval2 stride1, interval3 stride1, byte_range3 big-endian stride1. Here, power boundaries give precise linear conditions for any fixed history bit255=0 from order-No models to use randrange(order) This probabilistic pilot is not included.

## Correct weights of stories

History H The number of rejections before each acceptance. Proposal Independent geometric numbers P(r)=2^(-r-1) c-call rejection; for float-branch Python2 number of refusals is always 0. Generation from reproducible SHAKE-the flow of bits, without intentionally limiting the number of failures g one-bit history q(H)=2^-g.

A includes the exact conditions of history and m If the system is incompatible, the weight 0. If RHS non-zero, the number of states in the branch = 2^(19937-rank(A)); Zero state is automatically ruled out. After total scaling, weight importance equal **2^(g+m-rank(A))**. For data with a fully zero RHS a separate correction is required for the excluded zero state; large real-world/Synthetic kits are allowed only with non-zero RHS observations.

You can’t just average compatible histories and you can’t multiply the weight by q(H): proposal Within a fixed, compatible branch, the probability of a linear bit is taken into account/XOR equal 0/1, If it's defined, otherwise 1/2. It's Rao–Blackwell Average, not the frequency of a single point affine-family.

## Pilot control and volume

Up to the present data: an exhaustible small linear model with rejection uniformly prior; spelling/Comparisons with rank, weights and Monte Carlo. A separate artificial example must distinguish between the correct weights and the equal weights of the stories.

For each of the three models, four new synthetic problems with uniform reproducible states are the same 83 numbers and trimming, target number71. Historical Python It checks the generation. For every synthetic. 64 history interval2/3 and 16 for byte_range3. True Hidden History is used **only after evaluation** for diagnosis, is not added to proposal-sample and is not used for adjustment.

Presentation: objective No71 everywhere 83 decisions; separately, objective No75 excluded by decision No75. For each purpose: 256 storytelling interval2/3 and 64 history byte_range3. №75 It is already public and has been reviewed before: this is an exception to the fitting, It's not a new blind replication 1728 proposal-The numbers don't increase after seeing the results of this pilot, plus diagnostic true synthetic stories.

To keep the co-operation, the exact ranks, log2 weight, number of fixed bits, target dimension, four non-overlapping batches, ESS, maximum weight and conditional probabilities. Primary values: bits 0/35/69 and XOR 0^35,0^69,35^69, The other bits are diagnostic, and the little synthetic calibration is not enough to claim a practical predictor.

**Pilots cannot prove coverage of all posterior-mod.** Even the high empirical ESS It doesn't rule out unseen stories with a lot of weight ESS, One-weight dominance or batch instability is labeled as unreliable posterior. No "found bit" is declared from this sample alone 1/2, This applies to the sample, not automatically to the entire association.

From compatible real-life stories, you can save one uniform conditional state and check its key at the address; it is a verification of specific candidates, not a proof of increased probability of success, and not an import into your wallet.

## Artifacts

New folder, README, RESULTS, NOTES; configuration, seed proposal/synthetics, hashes of code/entrances, JSON Each story, diagnosing the true stories separately, the completed stories are passed through hashes, the reports are reassembled without repeating the calculations E1/E1b/E2b They don't change.
