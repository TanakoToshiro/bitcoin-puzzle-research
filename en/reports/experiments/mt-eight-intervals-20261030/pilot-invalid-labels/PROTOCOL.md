> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/mt-eight-intervals-20261030/pilot-invalid-labels/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/02-prng-recovery.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# E1i - general search for eight intervals No155

2026-10-30, The pre-protocol. The geometry source E1g BLOCKS155.json. In the model getrandbits(i), stride=2 scalar 2^154+h*2^146+x, h∈{1,25,108,116,137,145,228,252}, 0≤x<2^146. Model unconfirmed. No real scalars.

Proposed low-memory version: K tame-walks, each starting from the right edge of one length interval N, common wild-walk Q. Everyone uses one deterministic horse racing function K finite traps. The total shift wild narrowly N−1+maximum displacement tame; This is enough to reach the trap of the correct interval, if wild merging with tame-The match is always checked by exact multiplication of the scalar found and membership.

Pre-test parameters: μ=max(2,floor(sqrt(N/(2K)))), 16 deterministic leaps in [1,2μ], one leap=1; T=4μ step-step tame. Up to four independent public salts, heuristic cost estimate O(Kμ+N/μ)=O(sqrt(KN)), memory O(K+16). It's not a consequence of one dimension of space, and it's not a proven probability of success. It's an estimate to be based explicitly through paths and tested empirically; a negative limited run doesn't disprove the key.

Comparisons:1) general sparse K=8, (2) eight capped-kangaroo with one round per interval and up to four rounds,3) single-space tame, (4) the same total interval divided into eight adjacent parts - the same eight traps,5) general BSGS-table 32 All the costs of preparation and verification are included, no option gets the number of the correct block 32 simultaneously stored public points; additional memory Python Measure, do not equate the number of points to bytes.

Basic set: N=2^8,2^12,2^16, One secret in each of the eight blocks x=0 and N−1, in the rest, pseudo-random x, It can only be reproduced in the validation code. Five algorithms in each example 120 Extra launches K=1,2,4,8 upon N=2^12: four cases, common algorithm. Separate confirmation 16 new examples N=2^18, general sparse and a full interval of eight tame. Do not change the parameters after viewing the results; a new set is needed when changing.

Before measurements - tests of arithmetic and negative/borderline cases. Solver reads only in public JSON from stdin, He doesn't open files with secrets. Fixture/The verification code is separate Python-Cryptography checks dots: count additions, steps, attempts, spreadsheets, peak memory and success; save results after each run; skip ready-made queries with the same code and hashes. GPU Not used: first check the algorithm and scaling.
