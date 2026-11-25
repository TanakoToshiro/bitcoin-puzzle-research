> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sx-msvc-native-20261103/JOURNAL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SXM-02 - Recovery journal

03.11.2026. Continuation after sealed SXM-01.

1. Results and protocol read SXM-01. Separate series established; adopted
   The results of the old series have not been edited.
2. Source URL libwallet/obelisk from install-sx.sh they're coming back 404.
   libbitcoin obtained from the official repository, libwallet from EdgeApp
   (full story, section with MSVC), obelisk from the official history
   libbitcoin-server. BWallet It is used to compare archives.
   The first network requests from a limited environment were not allowed DNS; permitted
   The installers didn't start.
3. Original git archive applied CRLF-Conversion of the environment; verification Git
   blob The export is replaced by cat-file --batch: file
   baseline Git blob. Project name error in export metadata
   also corrected prior to adoption SOURCE_PINS.
4. The order of the dates of all branches was insufficient for the selection obelisk: later
   README-The committ is on another branch merge MSVC-port 661ba4f3
   from 24 May containing define.hpp. The first photo is saved for comparison.
5. Historical packages received NuGet from packages.config. Exclusion filter
   Test projects first mistakenly captured the name workspace «btc test»;
   corrected to a relative path 404 for libsodium 0.5.0.0 bounded
   normalized version in NuGet v3: righteous URL use 0.5.0.
6. Locally SDK headlines added um/shared and x64 import libraries from
   formal ISO Microsoft, chosen only HTTP Range-Requests.
7. First hd-seed compile found out C2280 into std::pair. The reason is tuning
   Reproduction: No official release was included CTP include overlay. Toolset.props
   Microsoft plainly CTP/include beforehand VS2013/include. After correction
   configuration hd-seed.cpp compiled without modification SXM-01 overlay
   It was also missing: all of it RNG-the controls are repeated for x86/x64 rightly
   by the order of the headings; the exits coincided (RNG_RECHECK.json).
8. Picture SX from 3 June: 79/80 library units pass through; stealth-show-addr demand
   absentee libwallet enum flags. Separately main.cpp giver C2440:
   return enum class console_result how int without cast. It's a real baseline
   incompatibility, not a reason to manually correct the historical code.
9. In history, ready-made corrections were found: enum libwallet f7289e1b from 5 June
   SX 76813dd9 from 5 June6 June UTC). New full export and new
   compilation. hd-seed.cpp and utility/coin.cpp bystanderly 3 June.
   All 157 library units and console main They are compiled without editing the source.
10. The linkage required the missing static CRT /MT. Received original
    Desktop x64 packet VS2013, The hashes matched the signed bootstrap manifest.
    MSI has Valid Authenticode. Trying to extract everything managed CRT libraries
    Identify a file that continues in the following CAB; This program doesn't need it.
    Included in the configuration are only fully extracted libcmt.lib/libcpmt.lib
    It's the same size as the full link SX successful.
11. Separate Tooled Version: Type random_device into coin.cpp
    replaced by a test source uint32 and added entropy-track. Engine,
    distribution and HD-The code has not changed; saved diff. Systemic RNG controllably
    It's not called EXE check-in entropy-argument.
12. First CLI-monitoring revealed staffing read_stream(trim=false): LF and CRLF
    remain in the key and are rejected is_base58. A separate experiment shows that
    precision xprv without the final translation of a line
    This is the type of input; the source does not correct pipe hd-seed → hd-priv
    It doesn't pretend to be a worker.
13. The negative indices revealed a test expectation error: lexical_cast
    uint32 accepts1 how UINT32_MAX. It's written in INDEX_PARSING.json;
    Negative controls have been replaced by abc and 4294967296. Previous ones CALLS
    saved, full acceptance control is started with corrected waiting.

Completion, accurate counters and decision are reflected in RESULTS.md and COMPLETE.json.
No networking commands SX And no full search Puzzle They didn't start.
