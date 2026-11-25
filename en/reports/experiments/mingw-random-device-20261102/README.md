> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mingw-random-device-20261102/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# MinGW random_device fixed seed

Isolated series `MINGW-RD-01`, 02.11.2026. [Outcome and limitations](<RESULTS.md>), [numerical table](<NUMERIC_REPORT.md>), [protocol](<PROTOCOL.md>), [intermediate conclusions and errors](<JOURNAL.md>).

A published defect of the old MinGW/libstdc++: fallback `std::random_device` use MT19937 s default seed5489. Primary source tested GCC4.7.4/4.8.2/4.9.2, choice fallback and the implications of two historical SX-versions BX. The author's program is not established puzzle. MSVC Another library, not a synonym MinGW.

## Reproduction

Teams PowerShell root `btc test`; Python3.11 researcher venv. New venv No need: dependencies have not changed, versions fix AUDIT.json. Assembly C++ small probe — CPU into WSL Ubuntu-24.04. GPU It's not used.

> Executable code/The commands are omitted in the documentary copy.


`audit.py` At the present result, checks the coincidence of inputs/The change in inputs causes an error; the new option is run in a new folder. `report.py` Only reassemble a numerical table from the saved results; RESULTS.md And the magazine doesn't rewrite.

To reproduce from scratch, copy the production/Scripts to a new folder and call `fetch.py`, `prepare.py`, `build.sh` through WSL, later `audit.py`, `report.py`. `prepare.py` Copy the required received files E12 only after checking with him COMPLETE.json. No automatic recording in E12 Nope.

## Method and boundaries

- `sources/`, `URLS.json`, `SOURCES.json`: primary source/messages, URL, time, SHA256, failed attempts GCC release recorded by content and hashes; ready-made historical MinGW-The binary was not installed.
- `prepare.py` full-class random_device necessary fallback-functions and historical bodies uniform_int_distribution. They're saved in `native/` and performed with modern **explicit** standard adapters MT19937/minstd_rand0. It's not a launch of the old one Windows-wallet and no check ABI. Own MT Python and NumPy RandomState It provides independent control of the standard sequence.
- `model.py`, `affine.py`, `known_solutions.json`: copies of accepted E12 function/data, origin in the INPUT_PINS.json. All83 known solutions are rechecked at the address/The model test uses only solutions1–50; №1 It does not carry the observed bits of the original generator.
- Four entropy-model ×20 Two ways entropy-The models are in this state: everything60 different sequences/first-line/fortune-telling1–50 preserved PREDICTIONS.json. The higher forced bits do not serve as the generator’s observation.
- Publication by the owner of the full *post-masking* The private key does not mean the publication of the original 256-bit HD-child. Here, the remains of the original children after the adopted mask are compared.

Raw conclusions native: NATIVE_OUTPUT.txt; condition/launch time: NATIVE_INVOCATION.json; checkpoints: RNG_CASES.txt. Confirmed result: AUDIT.json; full file manifest: COMPLETE.json. These files are sufficient to continue and RESULTS.md, No chat history is required.
