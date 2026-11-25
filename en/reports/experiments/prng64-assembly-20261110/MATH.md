> English machine translation of the [Russian source](<../../../../ru/reports/experiments/prng64-assembly-20261110/MATH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# Necessary local conditions and output limits

Denote the reversible transition of a non-zero state through T, exit
through h. Chosen exits have times g=(g0,g1,g2,g3); permutation fixture
The location of these outputs from the oldest word to the youngest
equality `(output & mask) == value`Forced most significant bit puzzle excluded
with a mask130 visible 129 source bits, at No135 — 134: two full words and
The fourth word is completely invisible.

After removing invisible words, all times can be shifted to the total number c.
For an arbitrary non-zero state, this is a bijection S ↔ T^c(S), transitional
The coincidence of relative times and the correspondence of masks/meanings
So it carries local incompatibility between assemblies 12 such
transfers preserved in EQUIVALENCE.json. This is not an affirmation of the equality of complete raw-
Keys, seeds, or global sequences.

For xorshift64* observable z determines the post-transition state:
`x = z * inverse(2685821657736338717) mod 2^64`The multiplier is odd, inverse
The reverse transition restores a single state before the first
Observable output; all other masks are checked accurately, including: gaps. Primary
There is no alternative state that can correct the result.

For xorshift128+ full-fledged z post-transition `(u,z-u mod 2^64)`.
Stays 64 Unknown bits/Direct transitions set other exits;
addition is performed with transfers modulo 2^64, XOR It is not replaced by addition anywhere.
After SAT It is precisely the found that is excluded u. Only subsequent UNSAT finish
The extra steps inside the key increase the depth of the nonlinear
The number of unknown bits remains the same.

The number of bits observed does not in itself guarantee the independence of the constraints
No uniqueness, no small time SMT. Failure to pass synthetic control
because timeout It is forbidden to make a conclusion about the actual entry in this series.

Local UNSAT It excludes the registered assembly even when arbitrary
distance raw-keys: raw-The key is no longer compatible with the generator.
This is stronger than excluding only fixed cross-key steps
from the original hypothesis of masking the minor bits and the exact family PRNG.
Other permutations, gaps, Conversions or generators are not excluded here.

Synthetic series preserves everything 83 Numbers, including passes, and expending steps
reference number puzzle. For two registered cross-key steps
check out additional fitting, 81 holdout and hidden no71. It's a test
Reconstruction methods, not a certificate of the actual generator Puzzle.
