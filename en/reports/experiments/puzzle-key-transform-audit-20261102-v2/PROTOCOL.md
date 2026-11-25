> English machine translation of the [Russian source](<../../../../ru/reports/experiments/puzzle-key-transform-audit-20261102-v2/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/07-masks-and-order.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# MAP-01 Audit of the conversion of the initial number to puzzle-key

Recorded 02.11.2026 until new tables are computed CPU, brutely
seed without new ones GPU-A set of passages. T01–T32 into models.py. New options after
The goal of seeing the result requires a separate series
not attribution Python/JavaScript.

Designations: i - task number, b=i−1, B=2^b, r=k−B, M_b(x)=B+(x mod B).
Unknown source x for each i free-rider [0,2^256), except for the clearly marked
The full scalar secp256k1 requiring 1<=x<n. All the evidence
For real data, this condition is also checked when it is feasible.
Free x_i This is not evidence of a single wallet/seed.
The mandatory higher bit is not interpreted as an observation of the original generator.

## Families

T01–T10: junior/most significant bits, reversal32 bytes/256 beat to the mask,
hex prefix/suffix length ceil(b/4) with a precise residual mask,
JS-scraping32-with a precise wording, wrongly hex(x)[2:-1]
Python3 (loss of last digit), variable length hex-prefix,
turn-off ceil(b/8) Testing: build accurate bytes to the mask
It's a prototype of all the published keys
level of different values, but not equality of functions on the same x.

T11–T15: round-off hex/bytes; the literal prefix '1'
to floor(b/4) numbers; prefix b bit unpadded bin(x), if x less b;
reversal32 bytes after the formation of the final puzzle-key.
The exact conditions of attainability or the necessary condition are fixed.

T16–T20: uint32/uint64 on the final number or separately on the remainder;
JS `(x & ((1 << b)-1)) >>> 0`, then the exact addition B outside Number.
For JS shift b takes modulo32. It's not BigInt JS: into 2015 standard
There was no built-in type; the exact gluing could be string/library.

T21–T24: rounding x into binary64, Then the exact whole and the mask;
rounding k; same-sex x s bit_length=256;
independent Number/float every64-a bit word with an exact fixed
Overflow of the word is an error, not a transfer to the next word.
For the whole z precise binary64-imaginability
z mod 2^max(0,bit_length(z)−53)=0. To the fullest256-bit x step >=2^203.
Reverse direction, integer division and storage in the long run, not
equalize float. Python2 integer `/` correspondent
prefix; Python3 `/` through binary64 subject to the appropriate condition
The result is then only translated into int and added B.

T25–T27: shortest decimal Number.toString or repr(float) final
number/The remainder, then the exact analysis of the decimal number; Python2 str(float)
s12 with significant numbers on the final number, then the exact decimal-analysis.
Only the required number of significant decimal digits is checked here <=17/12.
Don't use binary64-decimal grid: shortest string maybe
signify a whole that is not exact binary64! For example, JS lead out
1000000000000000100 somewhat Number, whose exact whole equals
1000000000000000128. Exhibits are revealed accurately; Python int('1e20')
He doesn't do it himself float, hash, shift or XOR afterward
This stage is not part of the model.

T28–T30 - regression of the former PRECISION_EXCLUSIONS, Not new exceptions:
random=j/2^53 scaled-up2^256; scale2^b precise B;
final uniform into binary64. T30 concurring T22.

T31: final hex(k) without0x withoutL, without even-length alignment
later Python2 `.decode('hex')` / byte decoder. Odd length
makes a mistake. T32: `long(hex(long(x))[2:][-ceil(b/4):],16)` abandoned L,
later B, No length correction. L is considered to be a cut-off symbol; for m=1
remains alone L, It's not a number. b=0 treated separately as k=1.

## Historical pillars and boundaries

Maintaining official CPython2.7.9/3.4.2 docs/source and ECMA-2625.1 s URL,
time and SHA256. Historical Python2 not to launch or declare here
It's like this launch: semantics are modeled from the source Node —
differentialization ES5, browser-free2015.
Claims depending on the characteristics of a particular old dtoa/browser,
not take out of a modern Node.

Precursors: python-expanded/PRECISION_EXCLUSIONS three float-construction;
SEQ-05 sequence-output-maps — high/byte-reverse/bit-reverse inside
These generator searches DO NOT repeat
Read reports; old ones; old ones checkpoints/Certificates must not be changed.

## Reception and order

1. Before real predicates check the cryptography of all83 lineage
   coincurve independent affine, ranges, numbers, addresses and public.
2. Check the formulas on the exhaustive12-bit-world b=0..11; for word/byte
   to use the agreed width, for float - reduced
   precision5 Comparing a literal operation with an independent image/condition.
   Not to mention the necessary decimal-The criterion is sufficient.
3. Full-size boundary/randomly x (SHA256-counter,
   positive and negative controls, JS-file ES5-operations;
   Node They do not receive private real data until the end of the control.
4. Check it out T01–T32 training1–50, separately51+.
   For a necessary condition, one contradiction is sufficient; previously known
   holdout I don't want to call it a new closed test fit/p-values.
5. For the undeniable free maps preserve83 strings
   and the other two, if they exist variable hex prefix
   upon b multiple4 number hex-digitsr)<b/4 source x=r:
   longer unpadded The prefix has a non-zero first digit.
   At full prefix length, the second certificate may require addition
   numbersx<<4), It's not a single-bit flip x s
   reinstatement raw or to establish the truth of the model.
6. Save CSV/JSON, Proofs, exact counterexamples, time/versions
   input/code hashes, Re-start with the same inputs reads
   Saved and checked hashes; changing inputs requires a new directory.

Bottom line: which specific operations are excluded, where there is a lack of raw/wallet/public
artifacts, and what are the old negative GPU-The conclusions remain conditional on
Don't launch new options GPU without a separate justification.

Audit v2: The original series stopped at the construction of the second prototype T09
successful controls/crypto, preserve REAL. Corrected wrong
The assumption is that it's always enough to invert one bit32 models,
Predicates, data and parameters are not extended. Original directory and error are saved.
