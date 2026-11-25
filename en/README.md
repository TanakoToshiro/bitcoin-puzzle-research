> [Русский оригинал / Russian source](<../ru/README.md>) · [Language selection](<../README.md>)

# Bitcoin Puzzle Research

An archive investigating the origins of Bitcoin Puzzle keys and possible ways to reduce the search required to solve them.

**Documentation snapshot: 25 November 2026. Latest reports found: 14 November 2026.** The preparation date does not imply that a new search was run or blockchain statistics were updated that day.

**No new private key, previously unknown bit, or practical reduction of an unsolved puzzle's search has been confirmed.** Results include negative exhaustive checks of finite models, historical reconstructions, conditional methods, and limits of the algorithms tested.

This is the English edition. Overview pages were separately edited; the historical reports were translated locally by a machine translation model and have not all been individually reviewed. Each document links to its Russian source. See [translation status and limitations](docs/TRANSLATION.md).

## Where to start

1. [What was investigated and what was learned](docs/RESEARCH_SUMMARY.md).
2. [Latest results and their limits](docs/LATEST_RESULTS.md).
3. [Topic map](topics/README.md).
4. [Detailed research overview](reports/README.md).
5. [Complete document index](docs/DOCUMENT_INDEX.md).

## Archive layout

| Directory | Contents |
|---|---|
| `docs/` | Overview, reading guide, latest findings, open questions, and scope |
| `topics/` | Eight thematic reading routes |
| `reports/experiments/` | Adapted reports retaining the original experiment identifiers |
| `reports/status-reviews/` | Historical audits and corrections |
| `evidence/` | Selected machine-readable results from the four latest RNG64 series |
| `data/` | Public Puzzle solution-table snapshot with its URL, timestamp, and SHA-256 |
| `metadata/` | Provenance, transformation and translation records, and link checks |

This is a documentation snapshot. Research executables, full checkpoints, environments, and third-party source trees are not included. Readers can evaluate the process and conclusions, but the archive is not a complete computational reproduction package. [Exact scope](docs/SNAPSHOT.md).

## Interpreting the results

“Fully checked” refers to specific versions, parameters, packing rules, and masks. A timeout is not a disproof. Synthetic success is not Puzzle recovery. Counts of models and tests cannot be converted into a percentage of excluded wallets.

[Methods and limitations](docs/METHODS_AND_LIMITS.md) · [Reviewer guide](docs/REVIEW_GUIDE.md) · [Open questions](docs/OPEN_QUESTIONS.md) · [Contributing](CONTRIBUTING.md) · [Provenance and rights](NOTICE.md).

Historical plans and commands describe the research process. They are not instructions to launch searches, rent hardware, or connect to external systems.

## Say thanks to the author

If you find these publicly available research materials useful, you can send the author a voluntary thank-you contribution to one of the addresses below.

| Asset and network | Address |
|---|---|
| Bitcoin (BTC) | `bc1q9kwpwp6y664wslr5j2505padtkn2du8kckhj8x` |
| USDT (TON) | `UQAbXb9cEjtxIcDHGHDm5NS8rFaPOFithVIBZN8lGecoieF-` |
| USDT (TRC20 / TRON) | `TVMtwXkY9xRX48kZujir2XnitR4fZivfK8` |
