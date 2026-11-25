> English machine translation of the [Russian source](<../../../../ru/reports/experiments/bx-native-search-20261101/COSTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E9b Speed, further acceleration and costs

Calculation 2026-10-31T21:44:31.337437+00:00. All velocities are lower — initial states per second, each at all times **16 scheme**. It's not the speed of searching addresses or private keys.

Nana Ryzen 9 6900HX (8 nuclei / 16 flows, WSL2, libsecp256k1 0.2.0: three extended measurements on 16 flow 32,132–32,590 condition/c; median **32,266**. Extrapolation by 2^31−2 conditions: **18.49 hourly**. It's about in 18.4 faster than the previous single-threaded Python-The comparison includes both native code and multithreading; we don't attribute all the winnings to one language.

Extended measurements (different areas tested; effects of long-term heating)/background load per day not measured:

| Beginning | Conditions | Time, with | Conditions/s |
|---:|---:|---:|---:|
| 1048577 | 1048576 | 32.633 | 32132 |
| 536870912 | 524288 | 16.249 | 32266 |
| 2146959359 | 524288 | 16.087 | 32590 |

On a pair of identical intervals filter No50 gave ×1.054; On the four-threaded control prefix, it's even slightly slower baseline. So we don't think of small gains as sustainable individual discoveries HMAC-They work, but they leave expensive public keys to their parents.

## Where time is wasted

| Component (one) CPU-flow | microsecond/surgery, median |
|---|---:|
| A compressed public key from a new scalar | 26.331 |
| HMAC-SHA512, 37 byte, cache ipad/opad | 0.433 |
| CKDpriv with the parent's public key ready | 0.503 |
| Generator and BIP32 master | 2.606 |

In the normal rejected state: 10 multiplication G scalar 26 HMAC-SHA512 (2 master + 8 intermediate + 16 The approximate micro-profile count includes 93.8% It's not a tool profile of the full core: cache, copy, OpenMP Library overheads vary. PROFILE.json and profile.cpp.

Reasonable procedure for further optimization:

1. Comparison of new assembly libsecp256k1 fixedly large precompute for G current 0.2.0. We don't promise the coefficient: we need the same set of vectors and the measurement CPU It's cheaper than developing everything CUDA-chains.
2. For CUDA transfer the generator, SHA512/HMAC, scalarization fixed-base multiplication G; reuse intermediate nodes and table G. Keep an eye on the registers/You can use local memory, you can use small bundles of states, you can check the results against the stored nodes 49-Comparison of the diagram; mass HASH160 It's not necessary.
3. First, check it out CUDA on-site RTX 3070 Ti Laptop: Official and synthetic vectors, range edges, matching results CPU/GPU, And then we had a steady speed and no packet skips, and then we just took a short measurement 4090. Current bx-search — CPU-program, itself from availability GPU It won't speed up.
4. Shared parent m/0' already reused, HMAC-The states are already cached minstd_rand0 or comparing bits doesn't eliminate the prime cost 6,2 Billions of targeted checks/c not applicable: here are new unbound scalars and dependent BIP32-Levels, not steps of neighboring points.

## One RTX 4090: terms and

The next lines are: **Scenarios, not measured/predicted speed RTX 4090**. For a complete passage, one card needs a finite volume 2^31−2 The memory doesn't have to store all the space at once. The main unknown is performance CUDA-implementation.

Nana [official price page Runpod](https://www.runpod.io/pricing), viewed 01.11.2026 (Moscow) RTX 4090 indicated $0,89/ч. Сохранён HTML и SHA-256 в sources/. На странице модели одновременно встречается старое «от $0,34; to calculate, we take the explicit line of the current price list, not the bottom advertising figure. Instance was not checked, order was not made, storage, easy to set up, taxes and possible other configurations are not included in the table.

| If the finished nucleus gives, states/s | Full passage, h | Calculation at $0,89/? |
|---:|---:|---:|
| 25,000 | 23.86 | $21.24 |
| 100,000 | 5.97 | $5.31 |
| 250,000 | 2.39 | $2.12 |
| 1,000,000 | 0.60 | $0.53 |

| Desirable full pass | The required speed of all 16 scheme |
|---:|---:|
| 24 ? | 24,855 condition/s |
| 6 ? | 99,421 condition/s |
| 4 ? | 149,131 condition/s |
| 1 ? | 596,523 condition/s |

The practical conclusion is that this particular hypothesis is already placed in approximately 18 CPU-the local car clock while maintaining the measured speed 4090 ready-made CUDA-kernels are unprofitable: first there will be the cost of development/debugging. GPU It makes more sense to expand the set of paths/Generators and repeat complete passages CUDA It's unmeasured; it's premature to make an accurate estimate HMAC, transference EC/CKD, Comparative tests and then performance.

Verified uniquely 2,523,184 states0.117495%). No coincidences. The probability of success is not numerically estimated: it is unknown whether the author used BX one 16 Even a successful complete search of the area can only give a negative answer on these patterns → postponement → Independent verification of addresses, not immediate announcement of the found key.

Number sources: COST_ESTIMATE.json, SUMMARY.json, benchmarks/long-*.json, PROFILE.json. Script analyze.py Reassemble tables without computing new keys.
