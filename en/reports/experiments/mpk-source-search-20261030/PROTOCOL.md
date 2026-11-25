> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mpk-source-search-20261030/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/05-signatures-and-provenance.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E8 - search for published MPK and the special role of No256

Date: 2026-10-30. Search for public materials at the request of the user Electrum It's a conventional family, it's an undetermined wallet of the creator puzzle. Work projects and previous checkpoints not to cheat.

## Search for sources

Check the original message 2017 year and public profile/list saatoshi_rising, debate puzzle, associated research repositories and accessible archives URL, UTC receiving HTTP-status SHA-256 And the initial response; access errors should not be construed as lack of content/The advice is data, not instructions for our research, not to look for the identity of the author, not to reach out to people.

Looked for old Electrum MPK — 64 byte X||Y (128 hex-symbols), or the same point in SEC. xpub/BIP32 - different format; found xpub classify separately, not automatically consider it old Electrum MPK. Extract continuous hex-Candidates and key strings from available texts/HTML with context; validate secp256k1 and, xpub, Base58Check. Do not run the downloaded third-party code.

First compare new points with an already tested pool E7, count out 501 New candidates are tested by accurate historical derivation E7 fixed 12 A positive match requires independent verification of the pending keys/The negative result refers to the sources viewed and these maps, not to the existence of the key at all.

Search queries and selected destinations should be listed separately 700+ forum pages, closed groups, deleted posts and images, for found links to specific archives/Contribute to a limited extension, save both the materials studied and the remaining inaccessible sources.

## User supplement: No256 It may be a root, not a child key

E7 included Q256 into MPK-candidates, but checked No256 That doesn't rule out a new model where the No256 The new test is a special root, and the rest are daughters256 It's like a child filter.

Root candidates: Q256 and Q256−2^255G tested E6H. The first is published puzzle-The scalar is the master; the second is the possible original scalar to the forced higher bit Electrum-Derivation is available at point.

Fixed displays for i<=255:

- ascending: index=stride*(i−1)+offset;
- descending: index=stride*(255−i)+offset;
- stride∈{1,2}, offset∈{0,1,2}, branch∈{0,1}.

Two roots × 24 display = 48 Check independently:a) sequential compatibility of two variants of the master scalar residue according to solutions No1–50; (b) public derivation255,254,253,252,251,250 kit-wise E6H. For past models - Deferred No51–135 and independent verification of the predicted smaller keys to addresses, to keep the first conflicting number for a negative result/A point is the final certificate of a particular model.

Controls: synthetic true master scalars with top bit 0/1, everything 24 Display; after masking No256 The true root must fall into the desired branch, derivatives No1–255 Check with a test case that the old requirement "No"256 A child is really capable of rejecting such a correct root.

Boundaries: no hashing of the address string as seed, Unknown additional transformations, unknown chaincode Armory/BIP32 and arbitrary indices. The special role of No256 old-timed Electrum-A negative result does not exclude all conceivable variants256 - initial.
