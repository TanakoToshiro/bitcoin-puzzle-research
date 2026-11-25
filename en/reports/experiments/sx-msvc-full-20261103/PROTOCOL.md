> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sx-msvc-full-20261103/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SXM-03 Complete passage of historical SX/MSVC low-byte model

Authorized by the user 2026-11-03 afterward SXM-02. Separate series; former
Controls and pilots are not included in the actual coverage.

- Whole uint32 seed: [0, 4294967296), including 0 and 4294967295.
- MT19937 single uint32 seed; 32 successive draw, entropy[j] = draw & 255.
- entropy directly BIP32. Exactly the old ones 20 scheme id 20–39 from SCHEMES.json.
- For the room i: index i + offset, upon hard add 2^31;
  jigsaw = 2^(i-1) + (child_key mod 2^(i-1)).
- GPU-filter50: 49 The younger bits of the known key
  independently verified CPU affine implementation of all Nos1–50.
  №51+ They are not part of the filter and are not used to select a model.
- 4096 successively 1048576 seed; 85899345920 seed×scheme.
- Unmodified Accepted Library CUDA SXM-01, launch_threads=128.
- Each completed block is atomically stored with boundaries, counters
  SHA256 previous block and configuration. fsync beforehand replace. Unfinished
  The unit is not considered to be coated lock It eliminates double-start.
- Mistake CUDA, intolerable BIP32-knot overflow or alteration of entrances is prohibited
  The candidate is retained until CPU-A complete match to the test
  training stops the series for a separate check; the false filter is retained
  In the block and the search continues.
- Before start: seal reconciliation SXM-01/02, synthetically positive/negative
  GPU-control 20 diagrams, upper bound seed, overflow and error,
  controls resume/lock/After the damage, repeat GPU-control and independent
  reading 4096 Files, checking ranges, chain and input SHA256.

Historical Constraint: The Normal pipe SX hd-seed → hd-priv picture
breaks down LF/CRLF; precise xprv It works without translating a line
generator and certain HD-diagrams, not literal malfunctioning shell-conveyor.
A negative result excludes only this final formulation, not SX/MSVC
Not any other way to generate a puzzle.
