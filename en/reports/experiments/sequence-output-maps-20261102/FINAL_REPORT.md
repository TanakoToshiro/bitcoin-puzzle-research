> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-output-maps-20261102/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-05 Another way of deducing a hidden state

02.11.2026, Moscow, the next final series after SEQ-04.

**Three functions of the hidden affinity chain output are tested: most significant bits,
reversal256 beat and turn32 Bytes. On published Puzzle-decisions
None gave a candidate.** The control restorer is correct
reset72 from72 new full-size artificial chains;
on192 There are no random sequences of compatible candidates.

This is a heuristic negative result for the three recorded
A real new key, a validated bit, or a validated key
No reduction in the search range has been received.

## 1. What exactly is verified

Hidden state:

```text
s[i+1] = (a*s[i]+c) mod n,  0 <= a,c,s[1] < n
```

n - group order secp256k1. The order of export direct, one transition
number puzzle, permanent a,c. Mandatory most significant bit puzzle
excluded; observed b=i−1 The other bits.

| Identifier | Observation function |
|---|---|
| msb | Seniors b bit: s[i] >> (256−b) |
| bit_reverse | Juniors b beat after turning all around256 bit s[i] |
| byte_reverse | Juniors b post-pivot32 bytes s[i] |

Leading zeros are mandatory: the width of the state is always256 bit/32 byte.
Word permutations, arbitrary rotations, XOR-masks, combinations
The transformations and unknown output functions have not been investigated.
The historical connection of these three variants with the author Puzzle It's not set.

Fit use13 decisions75,80,...,135. The subsequent inspection uses
№1–70. This data has already been studied; a new closed test is not announced.
Entrance, protocol and code recorded before the actual pilot in the
MANIFEST.json - an artifact of the initial study (`MANIFEST.json`; outside the picture.

## 2. A new mathematical step

Each observation becomes a known senior prefix y[i]:

```text
s[i] = y[i]+u[i],  0 <= u[i] < 2^(256−known_bits)
```

For the first two maps known_bits=b. For byte_reverse searchable
The known prefix is rounded down to whole bytes
known_bits=8*floor(b/8). This is only a preliminary weakening;
partial byte is returned upon accurate state check.

Differences of states through5 The steps are satisfied:

```text
t[j] = s[i_(j+1)]−s[i_j] mod n
t[j+1] = a^5 * t[j] mod n
```

Available Y[j]=y[i_(j+1)]−y[i_j] mod n. Difference between t and Y
bounded by unknown tails u. Four weighted grids
dimensionality13 Looking for polynomial relationship degrees3–6;
Common linear dividers offer rho=a^5. Since gcd(5,n−1)=1,
The fifth root gives the only a modulo n.

In contrast, SEQ-04, There's no dividing the fortune2^b no
multiplier32 extraction a. For the byte version of weight is allowed
loss7 pre-unused bits. Source numbers
Retained: Neighboring elements of the top panel are separated5 Transitions.

## 3. Accurate verification of conclusion and conditions

After the sentence a grid by centers of senior prefixes offers
d=(a−1)*s[1]+c mod n. It is then considered
s[i]=(s[1]+T[i]*d) mod n fixedly a,d.

Each accurate observation sets the permitted intervals for s[i].
Their modular shifts and intersections give **everything** permissible s[1]
herein a,d, non-selective Babai.

For msb and bit_reverse The observation sets one interval byte_reverse
The last partial byte captures some of its bits, leaving others behind
Unknown: it is possible to128 It's this whole set of intervals
It's used in the reception. Matches only on rounded full bytes
Not accepted.

Failure LLL/Babai Does not prove absence a or d. Precision of interval
The stage is conditional on the already proposed a,d; The entire search for parameters remains
Unity of the original full state is not assumed.

## 4. Results

| Output function | First positive controls | New positive replication | Compatible results on zero data | Real candidates |
|---|---:|---:|---:|---:|
| msb | 12/12 | 12/12 | 0/64 | 0 |
| bit_reverse | 12/12 | 12/12 | 0/64 | 0 |
| byte_reverse | 12/12 | 12/12 | 0/64 | 0 |

All of them72 Positive cases have been restored to true a,d, true
s[1] It is in the exact set, and all83 Observations agreed.
Multipliers have244–256 In every positive case, the significant bits
projection of the set to an artificial number71 It was the one and only thing.
**That's not a prediction of the present No71.**

Conditional sets of complete s[1] remain large:

| Map | log2 the number of permissible states after all83 observation | Median time of positive recovery |
|---|---:|---:|
| msb | 122.000 | 0.242s |
| bit_reverse | 121.008–122.000 | 0.254s |
| byte_reverse | 116.764–120.902 | 0.258s |

These numbers are the power of stored sets when found a,d,
It's not the entropy of a real generator, and it's not the number of all possible models.

Every real one map received52 It's a four-base polynomial.
Everyone312 pair gcd=1. Totally156 polynomial936 pair maps;
They're not declared independent statistical tests
a It is not offered, therefore, the actual selection d/The condition was not fulfilled.
The real pilots took over0.145s,0.137s,0.140s accordingly.
All real matrices and polynomials are an artifact of the initial study (see below)`REAL.json`; outside the picture.

Absence of candidates, together with successful new controls, reduces the number of
The practical priority of these combinations of affinity model and inference.
This is an exploratory estimate, not a computed probability of historical
The origin of the keys and not an exact refutation of the model.

## 5. Implementation audits

Before the actual data:

- 335 The ranges of the output intervals are checked for all65521 condition
  16-^ "Bit model; widths are covered"0–16 and byte boundaries.
- 600 exact sets of initial states are checked with complete enumeration
  the same area;500 modular shift checks/The intersections are over.
- From2400 projection2393 Completed and verified precisely,7 achieved
  These are not negative results or statements
  Refining the counters is an artifact of the original study`PROJECTION_COVERAGE.json`; outside the picture.
- 128 polynomial gcd Converted with an independent native FLINT.
- Full-size serialization checked by a separate listing
  initial bit positions, not a re-calling of the main function.

After the calculation, an independent audit was performed:

- 1116 Reconciliation grids rebuilt from observations; verified
  U*B=B_reduced and det(U)=±1, Status grids have also been checked.
- 87 048 Polynomial pairs are independently recalculated by native FLINT,
  including936 real couples.
- Allowed states are deduced independently through bitmasks.
  The exact intersections are calculated by another algorithm based on boundary events.
- On the boundaries and internal representatives of the intervals, a direct
  generation, checked observations and conditional projections.
- Replacement69 Lower observations for each map doesn't change fit uppermost
  panels; the broken chains are rejected by subsequent verification.
- All334 received file and seals SEQ-01..04 preserved SHA-256 and mtime.
  The old scientific stages were not started.

Audit result: AUDIT.json - an artifact of the initial study (`AUDIT.json`; outside the picture. Sum of saved times of major
72 positive192 zero cases49.103s; Little controls7.112s,
audit11.423s. Development, design, start of processes and individual
Degenerate cases are not included in these amounts. GPU It wasn't used
Common environment packages have not been installed or changed.

## 6. Boundaries of method

Degenerate a=0,1,−1 The chain is stored separately.
For a=1 into msb and byte_reverse multiplier was proposed, but conditional
The recovery of the condition did not end with the accepted result.
For bit_reverse And that's a good example. It shows you
Incompleteness of the method and dependence of recovery on specific data.

For a permanent chain, different a fittingly c may give
Compatible observations; found compatible a It's not the only one
Degenerate cases are not included in the indicator72/72.

Other modules, nonlinear transitions, other export order, hashing
or arbitrary output functions of this series are not excluded. LLL not
Lists all relationships: even for registered maps denial
It is algorithmic, not full evidence.

## 7. Acceptance and direction

[Protocol](<PROTOCOL.md>), [team](<README.md>)Acceptance - an artifact of the initial study (`ACCEPTANCE.json`; outside the picture),
[journal](<JOURNAL.md>)Scientific files sealed; check-up
zero new calculations and the immutability of already completed results.

Further simple extension of the list of representations of the same affinity
Chains without a separate basis are now of low priority.
The next independent experiment should change the transition itself
a hidden state, or to have a specific reason for another
module/No new classes were launched in this series.

The short polynomial relationship method uses a lattice line
Stern / Contini–Shparlinski; transformation maps precise
The interval checks are listed here. Novelty is stated in the literature.
[Primary context and heuristic limitations](https://researchers.mq.edu.au/en/publications/on-sterns-attack-against-secret-truncated-linear-congruential-gen/).
