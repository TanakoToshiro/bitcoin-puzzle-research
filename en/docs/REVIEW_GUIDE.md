> [Русский оригинал / Russian source](<../../ru/docs/REVIEW_GUIDE.md>) · [Language selection](<../../README.md>)

# Questions for an independent reviewer

[Home](../README.md) · [Reading guide](READING_GUIDE.md)

The purpose is to evaluate the research's evidence and usefulness, not to launch new searches from old instructions.

1. Does the conclusion follow from the actual coverage of models, ranges, and versions?
2. Where is an assumption about a mask, index, or provenance presented as an established fact?
3. Is there overfitting to repeatedly examined data, leakage of synthetic ground truth, or an inadequate positive control?
4. Has sensitivity to the claimed form of dependency been tested?
5. Are real results, conditional recovery, small synthetic examples, and resource limits distinguished?
6. Are numerical checks, solvers, and repeated executions independent? Hashes do not replace independent mathematics.
7. Which series overlap, and what genuinely new information was added?
8. What minimal new artifact or experiment could change the current conclusion?

For each comment, identify the series, file, exact claim, and required check. Do not combine all negative results into a proof that every possible generator is secure.

The snapshot includes documents and selected evidence. If missing raw tables or implementations are required, list them explicitly; absence from this repository does not imply absence from the original research.
