> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mpk-source-search-20261030/SEARCH_NOTES.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/05-signatures-and-provenance.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E8 Search directions, sources and limitations

Search 2026-10-30. User query – find published source master public key; Check out the special role of No256. They didn't look for the author's identity, nonpublic accounts or other people's backups, and they didn't send messages to people.

## Search queries

Combinations used `bitcoin puzzle`, `puzzle transaction`, `1306983`, `saatoshi_rising` s `master public key`, `master_public_key`, `master_public_keys`, `mpk`, `xpub`, `Electrum`, `seed`, `2015`, `wallet backup`, `github`, `pastebin`, `991321`, `ninjastic`individual requests were limited Bitcointalk/GitHub or exclude Reddit/GitHub The initial funding address was searched separately `1Czoy8xtddvcGrEhUUCZDQ9QqdRfKh697F` excepting GitHub And some of the explorers `1305887` and `5489247` s Electrum. Completeness of extradition/No index is expected; raw SERPs are not stored as a stable corpus URL.

## Main tracks tested

1. [Main theme, beginning](https://bitcointalk.org/index.php?topic=1306983.0): The author of the topic talks about transaction discovery; it is not a recognition in creation puzzle. Downloaded pages with biases 0..280, step 20, Plus an exact reference to the creator's message.
2. [Communication No18765941](https://bitcointalk.org/index.php?topic=1306983.msg18765941#msg18765941), [profile](https://bitcointalk.org/index.php?action=profile;u=991321), [list](https://bitcointalk.org/index.php?action=profile;u=991321;sa=showPosts), [Ninjastic API](https://api.ninjastic.space/posts?author=saatoshi_rising)The current list and archive contain one record; it does not publish MPK neither establishes Electrum.
3. Wayback CDX/available For this message and profile, selected first/Recent photos, including profile 2017-09-07 and 2024-12-06, message 2020 October 2026. Photo of the message 2026-09-24 returned 503; It's an incomplete access, it's not evidence of a missing key URL They are copies of the same content.
4. Related topics Bitcointalk: 1305887.0, 5489247.0, 5166284.0, 5166284.160, 1895455.0. All the pages of these topics were not downloaded.
5. [lutfiEmre/bitcoin-puzzle-71-research](https://github.com/lutfiEmre/bitcoin-puzzle-71-research): CREATOR_ARCHIVE, PUZZLE_LINKAGE_TRIAGE, LINKAGE_EVIDENCE_MATRIX, REOPEN_GATE, RESEARCH_CLOSURE, LEGACY_ELECTRUM_DOSSIER, ELECTRUM_V1_VECTOR_LOCK, SOURCE_SEQUENCE_REASSESSMENT, PUZZLE_LINKAGE_HUNT; linked blob-This is a modern study and hypothesis, not proof of the original wallet MPK As a future find, it doesn't mean it's found bitaddress They do not associate the program with puzzle.
6. [Author's catalogue](https://puzzles.agntn.dev/authors/saatoshi-rising) and [agntn/puzzles](https://github.com/agntn/puzzles): bits.ts, tree and file of the author. directory information was checked with the forum; MPK The path expected from the old links assets/sources/bits was not in the preserved tree, so you can not claim to view its attachments.

Search results also gave others not related to this puzzle task xpub and contemporary considerations of the alleged Electrum. They're not mistaken for the creator's key WalletExplorer The funding address itself does not MPK; Real public transaction points have already been investigated E5/E7.

## What exactly was looking for?

Old MPK Electrum A point usually represented by 128 hex-symbolism X||Y; her SEC-It's also possible to test the performance Bitcoin-The candidate requires not only the correct point, but also the matches of the derived keys puzzle It's a specific pattern. BIP32 xpub supplementary chaincode and not equal to the old MPK.

Promising new source - a specific historical publication wallet information/watch-only The presence of ordinary public keys in a transaction does not mean that there is a master key; funding points were already part of the previous candidate pool; they do not need to be repeated under the same model.

Not checked all hundreds of pages of the main topic, the entire Internet, closed groups, inaccessible/Deleted files, images by OCR, randomly marked hex-lines and all historical wallet-The lack of results in this aisle does not prove that there is no publication; the limits are listed for continuation without repetition, and not as an offer of endless bypassing sources.
