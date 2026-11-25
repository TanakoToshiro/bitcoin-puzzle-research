> [Русский оригинал / Russian source](<../../ru/docs/TRANSLATION.md>) · [Language selection](<../../README.md>)

# English translation: scope and status

[Home](../README.md) · [Russian edition](../../ru/README.md)

Prepared on 25 November 2026. This edition includes an English counterpart for every Markdown document in the Russian snapshot, including historical reports and journals. It is not just an English landing page linking to Russian reports.

## Translation method

Historical prose was translated locally using the Russian-to-English Argos model, package version 1.9, through CTranslate2 4.9.1 and SentencePiece 0.2.3. No archive text was sent to a hosted translation service. The model was downloaded from the [Argos distribution server](https://data.argosopentech.com/argospm/v1/translate-ru_en-1_9.argosmodel); [Argos project](https://github.com/argosopentech/argos-translate).

Model SHA-256: `e9ba8bf722d10a4a4c39f74289d5938fd47eac08dbe4ed0afd22d89445a5c3ac`.

Numeric literals, technical identifiers, inline code, formulas, link destinations, and fenced blocks were kept outside the translation engine. Thus quoted source fragments and Russian annotations inside preserved code/formula blocks can remain Russian. JSON/CSV/TXT source evidence is retained, not translated. Relative links are maintained, and heading references are mapped to English headings where possible or reduced to file links.

## Editorial status

The top-level overview, summary, methods, latest findings, open questions, reading/review guides, snapshot description, topic introductions, data/evidence introductions, contribution/provenance notes, and the four latest RNG64 final reports were separately edited by the assistant. This is not independent human review.

Historical reports, detailed journals, and the long research overview are machine translations and have not all received individual editorial review. Technical terminology, negation, units, and statistical interpretations may still need correction. The Russian document remains the reference in any discrepancy. Translation does not add evidence or change the status of an experiment.

Each translated page links to its corresponding Russian page. Per-file source and translation hashes, method, and editorial status are listed in [translation-manifest.csv](../metadata/translation-manifest.csv). [Bilingual checks](../metadata/bilingual-checks.json) report structural and integrity checks; these are not a scientific or linguistic certification.

## Corrections

Report the Russian passage, the English passage, and the proposed correction together. Keep numbers, equations, experiment identifiers, and limits of inference unchanged unless a separate documented research correction justifies the change.
