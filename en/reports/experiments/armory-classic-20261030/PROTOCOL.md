> English machine translation of the [Russian source](<../../../../ru/reports/experiments/armory-classic-20261030/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/03-wallets.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E3 - classic chain Armory: protocol

Date: 2026-10-30. Object - official source code BitcoinArmory, commit
`61a596fa94f9cacf9fb00c4e02d0eb65d8b17513` from 2015-01-08. It's a test
historical implementation and applicability to cropped keys puzzle, Not a statement,
creator puzzle employed Armory.

## Fixed checks

1. Isolately perform unaltered AST-nodes `sha256`, `sha512`, `hash256`,
   `HMAC`, `HMAC256`, `DeriveChaincodeFromRootKey` starting ArmoryUtils.py into
   present CPython 2.7.9 archived E2. adapter SecureBinaryData implement only
   byte storage double-SHA256. All modules/GUI/Don't import the wallet.
2. Check published in `pytest/testPyBtcAddress.py` two private daughters
   The key and the second public key for root=`aa`×32, chaincode=`ee`×32.
3. Confirm 160 successive child keys in each of the four cases:
   `aa`×32/`ee`×32; `aa`×32/default; root=1/default; root=n−1/default.
   Two implementations: coincurve/libsecp256k1 and independent affinity arithmetic Python.
   Confirm private and public continuation, complete 65-byte points, multipliers
   and minor bits with conditional imposition of a mask puzzle. The mask doesn't come back.
4. Negative controls: compressed instead uncompressed, SHA256 instead
   double-SHA256, little-endian multiplier big-endian; standard
   HMAC-SHA256 instead of the historical construction of 32-byte supplement.
5. Positive Algebraic Control: Recovery chaincode two-way
   **full** neighbouring private keys and check on the third
   multiplier `n+1`to check the second possible residue n.
6. From a saved, verified image 83 Determine the actual observed
   Do not replace truncated keys with full ones and do not count
   Forced high bit by observing the generator.

Controls must pass until 160-Each case is a separate case checkpoint.
New launch limit 600 computational seconds wall time (without code preparation and
The audit of the budget between atomic stages, the historical process has
timeout 180 Incompleteness/Error is not a negative result.
Starting with a stop after the first stage and subsequent continuation is checked
Passing completed work. After completion, repeating resume fulfillment 0 stages.

## Boundary of withdrawal

Match with vectors confirms the reconstruction of a particular chain; does not confirm
her connection puzzle. Lack of full root/chaincode/subset
seed It's a stopover for reconstruction timestamps,
Small roots and a circuit with the reverse feed of the cropped key are not searched here.
No number of unknown categories is passed off as a proven attack difficulty.
Predicting the bit/XOR №71 It is permissible to declare only with a separate verifiable conclusion;
This protocol does not promise such withdrawal from a single wallet device.

The results are maintained in runs/<ID>, table RESULTS.md build up JSON,
Intermediate interpretations are written in NOTES.md. The old experiments don't change.
