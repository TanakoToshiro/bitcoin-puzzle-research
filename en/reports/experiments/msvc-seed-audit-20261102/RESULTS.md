> English machine translation of the [Russian source](<../../../../ru/reports/experiments/msvc-seed-audit-20261102/RESULTS.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# MSVC-01 - new confirmed 32-bit-generator BX

02.11.2026. **Historical audit completed: for official BX 2.0.0 Windows x64 A new final model has been confirmed `uint32 → MT19937 → %255 → entropy`.** Full domain - no more 4 294 967 296 differential seed. The restriction applies to this program, not the keys Puzzle The author's relationship with BX/MSVC It was not established; there was no complete search.

## 1. Historical basis

Official [release BX 2.0.0](https://github.com/libbitcoin/libbitcoin-explorer/releases/tag/v2.0.0) published 14.12.2014, Windows x86/x64 assets loaded 13.12.2014 prior to the first funding Puzzle. Save yourself mainnet PE, sizes and metadata API. Theirs SHA-256 — SOURCES/PE_INVENTORY. Publisher's signature not verified; origin - official GitHub release. Downloaded EXE They weren't completely performed.

Fixed commit `aae99b278fdbfa31005cfa083ccbbf909212cbe4` contains Visual Studio s `PlatformToolset=CTP_Nov2013`Archived [documentation VS2013](https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2013/bb982398(v=vs.120)sets `default_random_engine=mt19937`The metadata pages are updated 29.07.2015, So one document would not prove the behavior of December 2014. For this purpose, additionally checked **machine code of the most release binary**.

V [random_fill](https://github.com/libbitcoin/libbitcoin-explorer/blob/aae99b278fdbfa31005cfa083ccbbf909212cbe4/src/utility/utility.cpp) carried out:

> Executable code/The commands are omitted in the documentary copy.


It's `%255`no `%256`byte FF It doesn't occur. It's only transmitted 32-It's a bit word. It's a visible machine path random_device There is a preliminary appeal in the design and another to obtain seed; the first result does not participate in MT. Therefore, the number of appeals to the system RNG does not change the initial state engine into 64-It's a bit, even a good system RNG extending 32-The bit domain after that narrowing.

Zero is acceptable seed MT19937, it cannot be removed or reduced modulo 2^31−1. The domain for future search `[0, 4294967296)`The phrase “no more” 2^32 It does not claim that all the short entropy-The outputs are different in pairs; possible collisions can only reduce their number.

## 2. Checking the Official Binary

PE-Inventory of both architectures shows linker 12.0 and MT-constants. **A full byte inspection has been carried out for x64**, x86 limited by static inspection and general reference model; results x64 They are not issued for dynamic testing x86.

V x64 plot `0x14007ebee..0x14007ed1b`: initialization MT from EAX, Byte generation and writing, which ends with the system word being used, and then the function is completed/security-cookie check. With a long stream, it is only called MT-helper `0x14007ce90`In Unicorn substitute seed, Vector memory and stack. Access to OS, network and present RNG absent; permitted basic blocks, The time and number of instructions are limited. PE entry point It doesn't start.

80 scenarios: 16 seed, including 0/1/5489/2^31/2^32−1, × length 0/16/32/625/2500. All **50 768 byte** coincided with an independent NumPy MT19937 and `%255`Long cases are more than one refill It's not limited to the first word. BINARY_CONTROLS.json - an artifact of the initial study (`BINARY_CONTROLS.json`; outside the image), the emulation code is an artifact of the original study (`emulate_bx.py`; outside the picture), DISASM/disasm-This control is much stronger than the compiler name assumption.

## 3. What is different from previous inspections

GNU BX employed minstd multiplier 16807, libc++ — 48271. Here MT19937 with standard initialization of one uint32. Counter-examples of inconsistency are preserved entropy into NON_EQUIVALENCE.json - an artifact of the initial study (`NON_EQUIVALENCE.json`It's not a repeat of the previous full images BX-pass-through SX uniform16>>8. Search Python random seed32 They also do not replace this chain: initialization and transformation into HD-entropy others.

Monitoring MinGW default random_device employed MT seed5489, receive **one-word minstd**. Here's the results MT directly transform into entropy-So the word that we've seen before is bytes MT19937 This does not mean that the model has already been tested.

early MSVC/SX It's a separate question build-paths 218 unique commits before 15.01.2015, first drafts in March 2014 Directly marked incomplete 23.05.2014 eat MSVC-project CTP_Nov2013 and `uniform_int_distribution<uint16_t>(0,65535) >> 8`. **Accurate historical distribution MSVC This audit has not been restored**, ready-made SX-The binary is not found in the selected set GNU/libc++ distribution modern MSVC No, it's not BX `%255` It is suitable for a separate check now and does not require to guess early distribution.

## 4. Code and controls

`model_mt.py` calculates 32 exiting 624 It's just a sequence of initialization state[0..428]with the preservation of the first 33 words and current meanings, the rest of the first words twist-Iterations do not affect these 32 It's an accurate optimization of computation, not an additional limitation seed. 136 seed, 4352 The words and shortened prefixes coincided with a separate Python MT and NumPy; A comparison with a true binary independently covers the model used.

Locked 40 HD-diagrams: entropy 16/32 byte × former 20 (Six parents, allowed by law) normal/hardened final, indexes i−1/i). List - SCHEMES.json - an artifact of the initial study (`SCHEMES.json`These paths are the final research staging, not the author's reconfiguration BIP32-model and independent affine-EC copied with verified pins from the experiment, without altering the originals.

Gone 160 affine child/public comparisons, 40 Positive restorations of synthetic seed in seven-element intervals and 40 negative controls after changing the observed bit 83 known solutions independently tested by range/public/address. Synthetic Nos71/155 - control, not new real keys. CONTROLS.json - an artifact of the initial study (`CONTROLS.json`; outside the picture), HD_CONTROLS.json - an artifact of the initial study (`HD_CONTROLS.json`; outside the picture), SCANNER_CONTROLS.json - an artifact of the initial study (`SCANNER_CONTROLS.json`; outside the picture.

## 5. Limited CPU-pilot

Run `a523ab5d459693bf`: `[0,4096)`, 4 block 1024, everything 40 Filters 49 famous least significant bits No50; In addition, all known Nos are checked1–50. Real holdout №51+ No filter candidates.

Checked out 163 840 state×scheme, **0,00009537% domain**. This is a test of procedure and speed, not an exception to the hypothesis and not a reason to consider low seed It's probably higher 23,271 c, 176,015 condition/everywhere 40 Linear extrapolation of this sequence Python-standard 282 It's not the bottom line, it's not the speed of the optimized CPU/GPU: standard HD-The table is collected automatically in [NUMERIC_REPORT.md](<NUMERIC_REPORT.md>).

When restarting, zero blocks, six files are calculated run preserved SHA-256 and mtime. Changing inputs creates another run ID. Unfinished blocks are counted; completed ones are not repeated. Sources are verified with SHA-256, eight-file Git blob tree; Loading errors are saved. ACCEPTANCE.json - an artifact of the initial study (`ACCEPTANCE.json`; outside the picture), PILOT.json - an artifact of the initial study (`PILOT.json`; outside the picture.

## 6. Decision and limits

**There is a reason for a new end search MSVC/BX, when freed GPU.** The next step is CUDA-transference MT→%255 vetted HD-Primitives, Controls and Short Pilot 3070 Ti. Before it, the full passage period and the economy of rent 4090 You can't say it 2^32 double the size of the previous minstd-the field, but the computational price of one seed It’s different; just doubling down on the old time is wrong.

The technical presentation is maintained in [GPU_HANDOFF.md](<GPU_HANDOFF.md>)In this audit GPU No new keys or bits, no full search Puzzle No, no. Possibility of use Windows BX the author has confirmed the availability of the program, and the actual use is not proven entropy-length, path, early MSVC/SX distribution, The author’s modified binary options and diagrams remain outside the output.
