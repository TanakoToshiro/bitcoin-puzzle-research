> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-difference-gauge-20261102/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-08 Elimination of shift before construction of grid

02.11.2026. The user allowed the following experiment after SEQ-07.
Model of the former: non-affinity fractional linear transition mod n routine
secp256k1), poleless 135 positions; minor masks i−1.
Do not change the module, export, or generator for the sake of results.

## The new system

For the top panel with step 5 signify D_j=s[j+1]−s[j] whole
difference between [0,n). The general shift is excluded algebraically:

```text
G(D0,D1,D2,D3) = D1*D3*(D0+D1) − D0*D2*(D2+D3) = 0 mod n.
```

G equal to the cubic condition of the double ratio SEQ-07 post-substitution
Sufficiency is not expected in degenerate triplets.
Each candidate completes a full relative move and all 83 masks.

Let me s_j=r_j+2^b_j*q_j, 0<=q_j<C_j. In the panels under study b_j
It doesn't fade

```text
D_j = r_{j+1}−r_j + 2^b_j*v_j
v_j = 2^(b_{j+1}−b_j)*q_{j+1}−q_j
−(C_j−1) <= v_j <= 2^(b_{j+1}−b_j)*(C_{j+1}−1).
```

Variables v_j are centered in these precise interval shells.
The Cartesian product of these intervals is attenuation: independence
They're not supposed to be compatible with absolute states
It is checked by an accurate general shift solver after recovery.
You cannot calculate the observed residue D_j mod n and ignore the transfer:
At the construction stage, the whole formula above is used.

From G The same modular monomial lattice is constructed as in
SEQ-07, but k−1 It's different LLL s delta=0.99, eta=0.51.
Only lines with attachment coordinates ±S. Linear coordinates give
candidate D_j; And they are in return for the relative z_j
s z_135=0. Checked out G/F, non-affinity M^5, its only fifth root,
The total relative course and precise intervals of the shift in all observations.
Monomial coordinates do not have to be linear:
The latter are used only as a hypothesis and must be tested.
There are no hidden additions or string combinations.

## Pair comparison and pre-set scale

At each new entrance, two methods are launched:
- `legacy`: byte-in-byte copies of the lattice and decoder of the shift class SEQ-07B;
- `differences`: new lattice on adjacent differences, same exact
  conditional general shift solver and chain verification.

Panels: the latest 5,9,13 Upper states. Full module n.
Uniform scale of hidden width h=12,16,20,24,32,48,64,80,96,120:
in the selected panel are known 256−h Minor bits; outside the panel source
mask i−1. All of these levels amplify the actual observations.
Level/A panel is one common and one inverted new chain:
60 positive inputs, 120 Pair method launches.
The panel has two independent random inputs h=24: still 6 entrances.
One general and one inverted input with real masks:
still 6 All the entrances 72 entrance, 144 launch method.

The two original mask profiles are launched for each panel first
level h, Then random sets. Seed precoded
The non-polar trajectories are chosen by the reproducible
rejection sampling; The number of attempts continues.

One method-launch <=30 seconds, summarily <=15 Minutes of child trials.
Timeout/total_budget - individual outcomes. New levels, LLL-settings,
string combinations, seed Do not add solutions after the results.
Two cases per level - Exploration sample: last successful point
It is not a guaranteed limit or an estimate of the probability of success.

Real LLL-Search is allowed for a specific panel/the method only if
Both new chains with real masks have restored the class containing
Otherwise, only structural calculation; no candidates for
Synthetics is not considered an exception to the real model.

## Audit

- Symbolic identity G=F and independent disclosure of coefficients.
- The exact formula of the difference and its boundaries on small fields, including
  Different masks and negative whole differences.
- On all bars: T*B=L, det(T)=±1, corrective/scale
  The true synthetic root belongs to the original system.
- For classes: independent scalar execution and shifting
  Deposition by transfers; conditional projection by No71, posterity
  global uniqueness.
- Verification resume repeatless LLL; SHA256/mtime SEQ-01..07 unchanged.

One computational CPU-the existing local dependencies,
without GPU, Installation of packages or execution of old search series.
Mathematical bases and primary references are inherited from SEQ-07;
The results are not used in the new statistics.
