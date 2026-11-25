> [Русский оригинал / Russian source](<../../ru/docs/RESEARCH_SUMMARY.md>) · [Language selection](<../../README.md>)

# What was investigated and what was learned

[Home](../README.md) · [Topic map](../topics/README.md)

The goal is to find a testable method that substantially reduces the search for any unsolved Bitcoin Puzzle, including puzzles with a published public point. Puzzle 71 originally gave the working directory its name; the scope was later expanded. Ordinary brute force and kangaroo are not the main subject of this archive.

## Findings by area

| Area | Substantive result | What remains unestablished |
|---|---|---|
| Historical Python, BX/SX, .NET | Complete finite seed-space searches for registered schemes, without matches | The author's generator; other transformations and initializations |
| MT19937 and other PRNGs | Exact constraints, control recoveries, and local contradictions for particular constructions | Any useful previously unknown bit of a real Puzzle key |
| RNG64 | The original 156 schemes were excluded; 50/60 extended constructions were closed, including 12 inherited contradictions | Ten difficult constructions remain open; the new prefix filters rejected nothing in the tested cases |
| Wallets | Historical derivations and import/export behavior were reconstructed | Whether the author used these programs; the required MPK, chain code, or original log |
| Signatures and archives | Messages, nonce points, and exact relations were checked; several programs produce identical signatures | Unique attribution of the 2015 key generator |
| Key positions | Predictors, direct tests, combinations of up to six features, and sensitivity measurements | A confirmed prediction of the correct half of a key's range; complex relations remain possible |
| Lattices and hidden recurrences | Exact small reference cases, synthetic successes, and barriers for specific constructions | Practical recovery under the original masks |

## What these findings mean

The work produced more than negative answers: it identified differences between historical implementations, arithmetic-porting mistakes, limitations of controls, and unsuitable methods. These findings help avoid repeating completed checks.

However, substantial computation does not mean a measurable percentage of progress toward a key. Complete searches of small seed domains only address finite models. They do not exclude most arbitrary cryptographic generators or custom constructions.

Detailed counts and primary reports are in the [research overview](../reports/README.md). The 156 schemes, 50/60 constructions, and 241 statistical tests describe different, partly overlapping questions; they must not be added together as independent discoveries.
