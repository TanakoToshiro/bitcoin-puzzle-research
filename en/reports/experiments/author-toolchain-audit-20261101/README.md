> English machine translation of the [Russian source](<../../../../ru/reports/experiments/author-toolchain-audit-20261101/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/05-signatures-and-provenance.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E10 Public archives and the creator’s software set Bitcoin Puzzle

Beginning: 2026-11-01. The task is to check the author's messages, citations of addresses, public points and transactions for communication with programs and generators seed/private keys, GPU-passageways and other points roadmap They didn't start.

Start reading with [RESULTS.md](<RESULTS.md>)then EVIDENCE.csv - an artifact of the initial study (`EVIDENCE.csv`; outside the picture), [NUMERIC_REPORT.md](<NUMERIC_REPORT.md>), [JOURNAL.md](<JOURNAL.md>)The boundaries of exploration [PROTOCOL.md](<PROTOCOL.md>)The results of previous E5/E8 used without modification: INPUT_PINS.json - an artifact of the initial study (`INPUT_PINS.json`; outside the picture.

## Artifacts

- `cache/`, `slow-pass/cache/`: reference HTTP-answers metadata s URL, UTC and SHA256, including errors; `text/` - derivative text.
- `SOURCE_INDEX.csv`, `SOURCES_ALL.json`A single index of new responses; `REUSED_E8.json` separately 57 responses from the previous study.
- `search/*.json`: saved search queries and SERPs. Early unsaved SERPs are listed separately in `SEARCH_NOTES.md`; they are not issued as reproduced pictures.
- `FORUM_POSTS.json`, `FORUM_COVERAGE.json`, `MISSING_PAGES.json`: received part of the current forum701 The pages do not mean that all701 The pages are downloaded.
- `TOPIC_ARCHIVE_POSTS.json`, `TOPIC_ARCHIVE_PROGRESS.json`: a complete passage of the main theme in accessible API Ninjastic, testable total unique post_id.
- `ARCHIVE_SEARCH.json`, `ARCHIVE_SEARCH_POSTS.json`: accurate queries throughout the forum index, not just the main topic API, Not every message that ever existed.
- `UNIFIED_POST_VERSIONS.json`Combined versions of your own text from the current forum and archive. `CORPUS_MATCHES.json`, `PRIORITY_REVIEW.json/.md`: automatic selection by284 identifiers and vocabulary of manual checker programs.Duplicates and formal quotes are separated; a quotation without forum markup can remain in `own_text`Automatic attribution is prohibited.
- `ARCHIVE_COMPARISON.json`, `PARSER_CHECKS.json`: comparison Wayback-Versions and control of the exclusion of nested citations.
- `ANCHORS.json`, `SIGNATURE_FINGERPRINTS.json`Signs of five transactions from already verified E5, without a repeat cryptographic audit.
- `EVIDENCE.json/.csv`: interpretations with sources, author, link strength and alternatives. The number generator does not replace this file.

## Unnetworked reassembly

From the root of the project, Python3.11 Existing research environment:

> Executable code/The commands are omitted in the documentary copy.


`technical_fingerprints.py` It only counts the counters E5 JSON. `RESULTS.md` and `JOURNAL.md` are stored manually, the numerical part is reassembled into a separate `NUMERIC_REPORT.md`. `CODE_MANIFEST.json` fixes the code and version used Python. No new dependencies have been established.

## Continuation of network collection

`topic_archive.py` Continues with the saved cursor, and the completed pass coincides total It doesn't repeat. It uses a validated parameter `last` (lesser) post_id). Old forum description API mixed-up `last/after`; the initial attempt is maintained as `TOPIC_ARCHIVE_PROGRESS-v1-invalid-pagination.json`Her early status complete void: everything200 notebook16169. The final completeness is determined by the corrected collector and independent verification.

For new accurate searches, use `archive_search.py`, complying with one request/The error cache is not deleted; the individual repeat attempt must have a new metadata-context. `slow_forum.py` stopped `STOP_FETCH` After switching to a batch archive, you don't have to renew it to reassemble the report. The stop file is intentional.

External downloaded programs are not required. E5/E8, old projects and checkpoints They don't change.
