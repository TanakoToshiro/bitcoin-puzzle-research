> English machine translation of the [Russian source](<../../../../ru/reports/experiments/order2-polynomial-elimination-20261106/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# O2-P01 Specialized polynomial exclusion

6 November 2026, Europe/Moscow. Continuation O2-C01.

**The exact method is implemented. All six partial problems, where the compact
SMT-The search has not been completed, but is now complete; the full families coincided with the former
O2-J01. However, polynomial implementation is slower than this previous search
into 8.08–161.22 principally
For real masks, there is a clear barrier to tight recording:
order 2^142 ratios plus a continuing search of approximately 2^398 prefixes.
The real keys were not sought; there are no new bits or exceptions to the hypothesis.**

## Method and difference from previous experiences

There are three relative states x120,x125,x130. Other previous
states are expressed by polynomials from w=x115, without individual unknown seniors
Allowable parts w coded H=prod(w−a). Condition of hitting each P_i(w)
(c) a number of meanings permitted by the mask i, cross-over
gcd(H,prod(P_i−z)). All compositions are considered modulo current H; degree
It can decrease after each mask. It's an exact exception, not an approximation
High degrees and no substitution XOR/masks with arithmetic addition.

O2-N01 I turned the square polynomial separately, and I checked the cubic polynomial
a sequence of polynomial conditions for all
Informative previous grid positions 5. At the degree H=1 single-minded
the candidate is immediately transferred to the usual examination; 0 The prefix is discarded.
The presence of one general shift at all positions is checked separately - different
The mask is not allowed to satisfy different shifts in the final response.

External choice of three supports is not eliminated. Search is not general algebraic
It's a system-wide solution, without brute force D Removed precisely; the branches of the first
order constant fully accounted for. [Conclusion and proof](<MATH.md>).

## Data, limits, completeness

The same six synthetic INPUT modulo 17,37,67,127,257 and four full
control O2-C01. Indices and masks of all are preserved 83 observations; the present
The forced most significant bit is not used as an observation
task 83 Constraints: Limitations, individual holdout Nope. EXPECTED
It was only used by the verification code after the search.

Pilots are first 64 Prefixes saved as the first checkpoint, before
120 momentarily generic-branch with an acceptable prognosis
The pilot did not repeat, the completed blocks were not recalculated.
Forecasts were approximate: for example, p127 graded
14.29 c,
a factual generic-work in
35.87 s.
Coverage is confirmed by block chains. No timeout counts as
negative answer. [Protocol](<PROTOCOL.md>)The initial results are an artifact of the original study (`RUN_RESULT.json`; outside the picture.

## Time at the same entrances

For every entrance O2-J01 Re-launched in a separate new folder `baseline`,
No change to the previous study tracemalloc. In the table
full-fledged invocation time, Including control files
Method start-up: This is a measured ratio, not a statistical estimate
Different buffering patterns and numbers checkpoint come in
(c) this value; separately retained generic compute time.

| Input | Checked prefixes | New, with | O2-J01, s | New/old-school | Full families |
|---|---:|---:|---:|---:|---:|
| p127-new0 | 32,768 | 37.099 | 0.230 | 161.22× | 1 |
| p17-case0-all | 576 | 0.121 | 0.015 | 8.08× | 7 |
| p17-case1-all | 576 | 0.478 | 0.023 | 21.03× | 1 |
| p257-new0 | 32,768 | 28.726 | 0.222 | 129.45× | 1 |
| p37-new0 | 3,249 | 0.756 | 0.027 | 27.51× | 1 |
| p67-new0 | 4,624 | 2.041 | 0.030 | 69.16× | 1 |

Totally complete 10 tasks, including four controls p17-case0-all
preserved 7 The other five partial entrances have one each.
The unambiguousness of the synthetic forecast is not carried over to this No71.

## Price of a polynomial filter

| Input | Sum of sizes W upon K!=0 | Post-NOD candidates | Challenges of the NOD | Multiplication of coefficients |
|---|---:|---:|---:|---:|
| p127-new0 | 287,053 | 8,584 | 54,546 | 98,719,006 |
| p17-case0-all | 1,330 | 129 | 646 | 63,443 |
| p17-case1-all | 912 | 93 | 486 | 41,960 |
| p257-new0 | 287,874 | 6,353 | 42,729 | 76,316,973 |
| p37-new0 | 11,141 | 614 | 3,362 | 1,079,298 |
| p67-new0 | 19,160 | 1,139 | 6,205 | 3,314,808 |

Total dimensions processed W: 607,470; filtered
transmitted 16,912 These are candidates until final
joint checks, not the keys found
linear H. That's why it's done 107,974 NDO and
179,535,488 instrumental multiplication of coefficients.
The counter refers to the polynomial nucleus; does not include all operations Python,
inversions outside it, work NumPy And matrices are restored
The flow of candidates did not pay off the construction and processing of polynomials.

## Memory and a separate paired dimension

tracemalloc It's on both sides at two entrances
Its times are not mixed with the previous table.

| Input | Time is new / old, with | Peak traced new / old, byte |
|---|---:|---:|
| p17-case0-all | 0.675 / 0.079 | 85,484 / 225,489 |
| p37-new0 | 7.232 / 0.076 | 131,844 / 618,765 |

The new implementation here uses less traceable memory because
processes short polynomials by one prefix, and the former buffers
This is a characteristic of these implementations and small inputs
There is no evidence of the advantage of real memory n. tracemalloc is not
full-dimensional RSS process.

## Real size: the obstacle to be checked

For No115 observed 114 The number of absolute states
compatible with the mask, equally `5575186299632655785383929568162090376474284`. . . whatever is permissible
In a fixed general shift, they bijectively give as many elements W.
Even after removing one root D dense H contains at least
`5575186299632655785383929568162090376474284` Lower Storage Rating at Ideal Storage
32 bytes by coefficient **near 2^147 byte**.

This is a strict barrier to this tight realization for non-degenerate permissible
It's prefixes, not the general mathematics of the problem
sort out 2^398 I'm not sure if they're compatible
GBR acceleration or increase CPU/GPU-The budget does not make this option applicable.
The exact numbers and hash of the original data - an artifact of the initial study (`REAL_COST.json`; outside the picture.

## Control, correction and independent audit

- 500 BOD intersections and 500 Full polynomial filters are compared to direct
  It's a bit of a difference.
- 2261 Permissible windows: the six previous states
  They matched normal recursion 227 linear
  and 37 permanent P2.
- 4/4 complete control: general recursion, first order, constant chain
  The positives are restored, the negative is empty.
- 316 prefixes from the working inputs additionally
  Verified by the scalar execution with a clear listing T; There's a lot of roots.
- 15 Families are checked by listing all shifts.
- 1263 The main and basic launches are checked by SHA-256,
  borders and chains; continuation from the first block and re-reading the full
  The result has not changed the finished blocks.
- 912 file O2-C01/O2-N01 unaltered.

In the first run of controls found error normalization trailing-zero new
NOD: `[c,0]` It was preserved as an abnormal divider, corrected by pruning
zero senior coefficients at the inlet of NDN **freeze-free MANIFEST before searching**.
Controls are repeated successfully; the starting track is maintained in ERRORS.log. Mistake
It was not interpreted as an incompatibility of the hypothesis.

Audit - an artifact of the original study (`AUDIT.json`; outside the picture), CSV - an artifact of the initial study (`NUMERIC_TABLE.csv`; outside the picture), machine summary - an artifact of the original study (`NUMERIC_REPORT.json`; outside the picture),
[journal](<JOURNAL.md>)All current results are sealed in COMPLETE.json.

## Decision on referral

The audit was completed with a specific negative practical result:
This method of exclusion is accurate on the controls, but loses to the previous algorithm
And it has a clear size barrier
A meaningfully new method should be avoided at the same time
enumeration of three supports and dense polynomials of a huge degree; one substitution
The solution or optimization of this implementation does not eliminate these obstacles.
The impossibility of other algebraic methods and the model itself is not proved by this.
