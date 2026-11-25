> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-applicability-final-20261105/README.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-20/21 The last two small cycle checks

[Overview](<FINAL_REPORT.md>), [protocol](<PROTOCOL.md>), [formulae](<MATH.md>)The results are an artifact of the original study (`RESULTS.json`; outside the image), audit - artifact of the original study (`AUDIT.json`; outside the picture.

SEQ-20 - alternating additive, SEQ-21 The models have separate inputs, calibration and tolerance Puzzle. The general catalogue contains both results and one audit of the preservation of the previous archive.

Checking accepted artifacts without new ones LLL, From the root of the project:

> Executable code/The commands are omitted in the documentary copy.


`--full-prior` reads the entire archive and dependencies SHA-256 The pass is already completed upon acceptance verify check out seal, frozen code/The inputs and the five sources used.

setup/run/audit.py/seal - single creation commands, not browsing commands; playback requires a separate directory; existing results are not overwritten.

TRUTH.json Complete synthetic states and parameters. blind/*.json only ID, the test model and observations; worker He does not receive families or truth. RALT/RQUAD Pre-fixed real inputs. CALIBRATION_alternating.json and CALIBRATION_quadratic.json Determine the permission for the corresponding real stage. MODEL_*.json They contain separate results. outputs/ and logs/ They retain matrices, polynomials, metrics and all attempts. ARTIFACTS.json protects the entire new catalogue; PRIOR_SNAPSHOT.json - a list of the old archives.

relations.py, recovery.py, probe.py copied SEQ-19 unaltered and used as polynomial helpers; past lattice(), norms() and recover() They're not called. detector.py The code, the auditor, the protocol and the inputs are fixed before the calculation; mathematical explanations and final documents can be added after the fixation.
