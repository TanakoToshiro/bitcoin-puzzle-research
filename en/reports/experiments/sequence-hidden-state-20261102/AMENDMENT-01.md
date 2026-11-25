> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-hidden-state-20261102/AMENDMENT-01.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Correction prior to analysis of this sequence

02.11.2026. First synthetic positive s a=1664525 stop over
one-on-one state. Error saved in JOURNAL and
DEVELOPMENT_RECOVERY.json. Real models have not yet been calculated.

## Cause and exact symmetry

Replacement s'[i]=(s[i]+delta) mod n and
c'=(c+(1-a)*delta) mod n recursion persists delta multiple
2^134 and in all observable s[i]+delta no crossing over0/n,
remain in place83 the observed residue, therefore the requirement to
it is the original s[1],c It's an ambiguity of the model
It's not just a failure of the numerical method. It's also a failure of the total multiplier.

Babai In the first example, he restored the correct value
`d=(a-1)*s[1]+c mod n`But I chose a different general shift
The observations of this representative were incorrect wrap-bats.

## Corrected acceptance

Working with you `s[i]=(s[1]+T[i]*d) mod n`, T[1]=0,
T[i+1]=a*T[i]+1 mod n. From LLL/Babai Only the candidate is accepted d.
He's got everything he can s[1] Calculated accurately: thresholds
n-(T[i]*d mod n) smash [0,n) on <=m+1 intervals.
In the interval wrap-bits fixed, observations become nested
comparison s[1] modulo2^b. The result is arithmetic progressions
It is not an arbitrary selected key. c=d-(a-1)*s[1] mod n.

Acceptance positive require a,d, insertion s[1]
c full set and correctness of projections on additional indices.
The number of permissible states is retained. We don't demand uniqueness
full condition; separate inspection delta=2^134 demonstrator
different compatible pairs (s[1],c). Don't announce everything d oversold:
LLL/Babai It is an incomplete search for a candidate.

In case of spoiled observation, only exact compatibility is accepted.
LLL It must not give a false accepted state exhaustive
check-up interval-Reducer on small systems. Real family
hypotheses, boundary a, The original filter and limits are not extended.
