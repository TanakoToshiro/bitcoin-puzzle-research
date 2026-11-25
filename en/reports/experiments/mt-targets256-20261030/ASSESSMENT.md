> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-targets256-20261030/ASSESSMENT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Whether to include the original Nos161–256

Date: 2026-10-30. Status: Continuation assessment; new calculation MT before256 Catalogue check is an artifact of the original study`DATA_AUDIT.json`; outside the picture.

Balance determines the reward, but not the informativeness of the data to study the generator160 preceding E1d It was a decision table boundary, not a cryptographic basis for excluding remaining original addresses.

In the preserved and verified E5 catalogue has everything 256 For each of the original addresses 96 number161–256 There's a corresponding public dot, checked at the address; there's no numerical private key for any of them in this directory. Spending is not the same as disclosing a private scalar. No new checking of current balances has been done here.

## What adds to the expansion

1. All 173 Unknown private keys of the original set can be included in individual and joint projections. Senior numbers give more target bits and can reveal additional connections, including with the number1–160.
2. Public points are independent verifiable data: the full candidate can be compared with Q=kG. For the corresponding algorithms, they make it possible to work directly in a group, instead of one HASH160.
3. In the hypothesis of masking the original 256-In bit value, the top numbers lose very few of its bits254–256 Conditional starting points have already been built in E6H; It is not necessary to repeat this work.

But an unknown private key does not become a set of known bits from adding an address or Q. To the current linear system MT the public point is not substituted instead RHS. Its use requires a separate layer secp256k1/a discrete logarithm or a particular method of working with group constraints E6H MITM It didn't give practical acceleration; it's a limitation of that algorithm, not a reason to exclude points from other tests.

## Expected links and withdrawal limit

Woo 173 The unknown keys will be 28873 non-forced target bits. For a fixed linear model MT s 19937 coordinates rank(A)=3767 After the known decisions remain 16170 So the joint projection necessarily has at least 12703 This is a consequence of the dimensionality of such a model, not an evidence of its historical correctness; individual keys can remain free. For failure history, the constraints are additionally conditional on that history.

Simply extending the target list does not add to known private observations, and in itself does not reduce the number of compatible states; to take advantage of connections, you need independent information about other keys, model validation, or a new algorithm that uses public points.

## Next experiment

- Take it 256 addresses and 96 top-points from the verified E5; keep a separate picture and SHA-256. Do not replace published points with guesses about private values.
- Extend the cards MT numerical/historical controls up to No256; check out 173 Unknown keys separately and together, save source numbers.
- Sharing ties only among No161–256, only1–160 Identify constraints that can transfer new information from senior numbers to current goals.
- Separately evaluate model constraints without failures and limitations of selected stories randrange; We don’t consider the arbitrary continuation of history to be an observation of a generator.
- Consider the admissibility of a private scalar: for No256 A range mask is not enough, it is required k<n_secp256k1. Clean GF(2)-A projection without this check is a weakening of the model. You can't declare number by order of the group as a valid private key.
- Check the layer of public points separately from the ranks GF(2). Do not declare multiple automatically occurring XOR-Connections with extracted bits of real keys.

Previous ones E1d, E5 and E6H This record captures the rationale for the expansion, not the results of the calculation that has not yet been performed.
