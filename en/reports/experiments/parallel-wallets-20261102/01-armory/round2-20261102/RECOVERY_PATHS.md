> English machine translation of the [Russian source](<../../../../../../ru/reports/experiments/parallel-wallets-20261102/01-armory/round2-20261102/RECOVERY_PATHS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../../README.md>) · [Direction](<../../../../../topics/03-wallets.md>) · [Documents of the series](<../../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../../docs/LATEST_RESULTS.md>).

# What data allows you to recover unknown child keys

In all the lines we are talking about classical Armory-chain and separately specified
according Puzzle-The generator does not mask the source number
Children; the mask is used after export. P_raw and P_masked They're not interchangeable.

| Available information | What's really happening? | What's missing / limit |
|---|---|---|
| Only 83 final Puzzle private keys | Younger remnants of alleged raw children | No C, baseline P and coefficients; no new practical search received |
| Only C | Fixed part XOR | Without the original P not calculate the next multiplier |
| One reference P full u her outgoing transition | C=u XOR D(U(P)), public-chain | Private scalar It is not yet known; it requires partial private observations either DLP |
| Reference P_j and C high-profile solutions | Public relations between children; accurate pair solver applicable | The public dot itself does not report scalar; After the last known decision, information is needed to reverse the move |
| Five suitable lines130→135 + two-way masked decision-making | Complete raw key130, C; further raw/masked children | This is demonstrated by8 synthetic A chain, not a real author's journal |
| Five lines125→130 + two-way masked decision-making | 8–21 candidates in control, one after the log-inspections; No135 remains holdout | You cannot promise the same number of candidates for everyone A |
| Journal with an unknown position5 lineage | Bounded consecutive-window scan finds the right window | Doesn't decide arbitrary interleaving choice of any5 lineage |
| Restored k_j,C and mixed previous log-record | Back passage, previously unknown children, on the full path - root | For each step, you need an appropriate record or an additional way to pass gap |
| k_j,C, But the previous record is lost | All futures from j; back passage stops | C It does not give a cheap general circulation of a nonlinear transition |
| The initial public anchor before gap + C + famous k afterward gap | Public derivation through gap, reverse product and all intermediate private keys | The point must be original and correctly indexed; in the test6 steps, limit8 |
| Complete raw private child + outgoing u | Immediately C and the whole chain | Final masked key not considered complete raw child |

After receipt k_j and C further **forward** path requires no safety
Any future strings can be recalculated140/160
Predicted without entries after the learning segment
transitions: one raw point, doubleSHA256, XOR and modular multiplication One step.
The scalars are not cut between steps.

For **backward** The specific factors prior to the paths are important
deleted79→80, That's why the stoppage happened chainIndex80. №100 and125
Still achievable, No71 - No, addendum P_74 gave way74→80, thereafter restored
no71, and root. This is an example of what kind of missing data is changing
result; incorrect P_74 She didn't give a false recovery.

## Levels of verification of information

1. **Arithmetic compatibility:** exact_pair return the full list
   permissible x specific A. Primary A There is no such list unknown.
2. **Link to the historical generator:** parent hashes, full-fledged u and permanence
   C fact-check Armory-The numerical product of randomness
   Multipliers are not declared to be a real chain.
3. **Prediction outside of learning:** separate oracle/laid-back synthetic
   values check new keys. Two learning solutions don't count holdout.
4. **Attribution to the real Puzzle:** a genuine artifact of the author or
   independent matching with real previously unused data.
   This level of current experience does not reach.

## Conditional route with public point of high undecided number

This is the algebraic next path **non-additional recovery**.
If the final point is known Q_i, not private key, then b=i−1:

```
P_raw(h) = Q_i + (h−1)*2^b*G,
0 <= h <= floor((n−1)/2^b).
```

It's the ultimate overset of initials points; extreme h may require additional
and to check the range b=255 no more than two points P_current
and log-record u get out `P_parent=inverse(u mod n)*P_current`check out
parent HASH160 pull out C. Thus, the journal potentially allows
begin **public** back passage, not yet having private scalar. After
Achieving high known partial key positions is available
for pair solver. Conditional space points He doesn't give you any known juniors
private bits on its own.

In the fixed file exactly83 solved records before135; point250–256 Not there.
V R2 This route has not been calculated and its scale/Success is not attributed to control
We need a specific high end point, a real journal and
This is not a replacement for the missing journal.

## What has changed about the first cycle?

The requirement for four masks and a long ordered segment is not minimal:
for tested high pairs enough two masks and five records, their order
It recovers from the arithmetic step
by the available previous multipliers **supplementary
generator** It's not filmed. Not a single test has been done C, A or raw point public
presently Puzzle automatically.
