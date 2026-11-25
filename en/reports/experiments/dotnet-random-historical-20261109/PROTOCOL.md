> English machine translation of the [Russian source](<../../../../ru/reports/experiments/dotnet-random-historical-20261109/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# DN-R01 historical System.Random

9 November 2026, Europe/Moscow. Implementation, synthetic restoration and
The cost pilot, the author's link Puzzle s C# It's not set.

Source: Microsoft Reference Source, random.cs, commit
9da503f9ef21e8d1f2905c78d4e3e5cbb3d6f85a from 2014-11-12. Keep the original,
downloading metadata and SHA-256. Not to count modern.NET historical
It is used only by additional control
The source is compiled separately with the documented service substitutions.

Fixed 16 diagrams: API NextBytes / 32 once Next(256); unsigned big/little
endian 32 byte; stride 1/2 the starting blocks; phase 0/1 the initial blocks.
Zero position raw-block puzzle i: phase+stride*(i-1). One copy
generator for the entire series, exactly 32 challenge InternalSample on raw-block.
key_i=2^(i-1)+(raw_i mod 2^(i-1)). Number i It doesn't shrink when you pass.
It's 16 Specific assumptions, not historically verified exports.

Learning: known tasks 1–50. Holdout: Other published decisions
immutable 83 All decisions are checked coincurve and
independent-arithmetic secp256k1 To the real pilot, with the contradiction of the stops.
Holdout Don't pass it to the scanner train-coincidence Python reproduce
complete sequence and check holdout. The Real Candidate - Stop for
independent verification; do not declare the found key only by filter.

Python-implementation uses accurate unchecked Int32-arithmetic. Independent
CThe #-scanner has its own code and reuses the array
Compiled historical source: 8704 successively
on boundary and deterministic random seed, both API. Check it out
signed-seed aliases, Int32.MinValue, double-arithmetic Next(256), split
NextBytes, Continuation of the condition, negative controls.

Synthetics: everything 16 circuitry seed on the scheme (small and from the upper half)
31-The correct domain name, correct 83 Masks and passes seed into
4096-The elemental window around each case. The range is known to the algorithm.
This is a limited recovery, not a proof of global uniqueness
everywhere 2^31. In addition, one search for 2^20 seed circuitry NextBytes/big/
stride1/phase0. Truth-The file reads only the validating code
The domain is separate train-matches are checked in full holdout.

Up to the present data: compare the full set of answers C# and Python minorly
range 256 seed; Negative Entry Tests, Both Boundaries, Conservation and
renewal checkpoint. C# You have to check every masked byte
Including incomplete last; early filter does not replace train-check-up.

The real pilot after the controls: 3 cross-band 2^18 seed:
[0,2^18), [2^30,2^30+2^18), [2^31-2^18,2^31).
One seed treated immediately 16 sequenced
InternalSample. Save time, the number of internal challenges and candidates
Measured prediction of full passage - estimate CPU,
time-promise GPU. Complete passage 2^31 It's not part of this cycle.
Mistakes/Time-outs are not an exception to the hypothesis.

The new folder is sealed. Checkpoint contains range, input and code
The hashes and the chain of the previous blocks. Don't repeat the finished blocks
report JSON; preserve RESULTS.md After each stage, don't change
old-school snapshots and projects. CPU Locally, without cloud or new dependencies.
