> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-model-audit-20261031/PROOF.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Why Checking Excluded Known Keys Doesn't Predict Anything

Let me s — 19937 state coordinates, A - stored matrix 3767 the observed minor bits, y - published values. Forced high bits are not strings A. For each of the four studied schemes independently verified rank(A)=3767.

Add a line g, prescriptive raw256[254]and put g·s=0. Checked out rank([A;g])=3768. Therefore, linear mapping s ↦ (A·s,g·s) surjectively: **for any** y exactly 2^16169 decisionsy,0). If there's a zero state among them, the other non-zero states still exist g·s=0 provide k256 < 2^255+2^254 < n. For lower numbers, the upper limit of the scalar is observed automatically.

Separate y observational y_train and the excluded key y_test. For whatever reason y_test fixedly y_train There's a state. So you can't output a single bit or a non-trivial bit XOR, It's not another prohibitive condition for the excluded balance. It's an accurate statement about the models in question, not an absence of a statistical effect.

Denote B lineage 154 bits155. rang [A;g;B] equal 3917 for getrandbits(i), stride=2: after recording observations and guard There's still a dimension projection 3917−3768=149. It's compatible with eight intervals A It does not mean freedom of all future outputs: some lines B They may lie in a string space A.

For each of the three closest alternatives considered, rank [A;g;B]=3922. Therefore, the dimension of the projection No155 equal 154: **each** remainder155 compatible with the present observations and guard. Therefore, combining the main scheme with any such alternative already contains a full range of155. This is an exact coating of the projection, not its affine shell as a possible overstatement of the set.

Ranks tested with both directions of selection pivot. The witnesses are additionally verified by numerical execution getrandbits. The conclusion refers to arbitrary internal states, not to a finite family seed; The other unknown public dots are not made into scalar observations, we don't claim full compatibility with all of them, and the proof doesn't determine the probability with which the creator chose a particular program.
