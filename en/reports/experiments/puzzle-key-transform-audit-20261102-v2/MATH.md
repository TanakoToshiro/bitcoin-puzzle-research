> English machine translation of the [Russian source](<../../../../ru/reports/experiments/puzzle-key-transform-audit-20261102-v2/MATH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/07-masks-and-order.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# MAP-01 conditions, evidence and limits

In all formulas b=i−1, B=2^b, r=k−B. Observable k It's already checked.
B<=k<2B. Higher bit added by script and is not an observation x.

## 1. Precise junior mask and string equivalents

`B+(x&(B−1))`, `B+(x%B)` and `(x%(2*B))|B` coincide x>=0.
If you take suffix from m=ceil(b/4) hex-and then put on the exact mask,
You'll get the same result. 2^b delite16^m. Therefore, T06 doesn't require new
GPU-junction T01. Precise gluing32-bit-word Number
It also doesn’t lose information: every word <=2^32−1 It's perfectly imaginable.
`hex(long(x))[2:-1]` into Python2 shoot off0x andL, and the same entry in Python3
removes hex-figure x>=16), gives floor(x/16).
This is another function of the original x, Although some observations do not rule it out.

## 2. Free prototypes do not restore the generator

For low pick up x=r; for high — x=r*2^(256−b); for reverse-byte/bit reversed
rearrangement r. For hex-prefix lead-zero x=r*16^(64−m).
These are x They may depend entirely on different i. Their existence does not mean their
compatibility seed/the wallet and does not justify the search for sqrt(number maps).

The field of evidence uint256, admittable0. This is essential: for surrogate
For example, zero is an unknown number, but not a private scalar EC.
V PREIMAGES.json Both checks are marked. No value is declared here.

## 3. Unpadded hex-prefix: case69

For b multiple4, m=b/4 and `f(x)=int(format(x,'x')[:m],16)`:

- if len(hex(x))>=m, piece f(x)>=16^(m−1);
- if f(x)<16^(m−1), baseline m and taken as a whole: x=f(x).

The following mask does not change anything here, since the prefix has no more b beat.
For No69 b=68,m=17, r=`0x1d83275fb2bc7e0c` contains16 hex-numerals61 significant bit.
Consequently, **flatly T09** whole raw69 equal r. Any demand
bit_length(raw69)>=65 It's incompatible with observation
full256-bit source, but not any variable length.

Do not call it the found source key: truth T09 Unknown.
Relationship to the following/preceding raw, the address of the original wallet or PRNG missing.
Numbers k69 and r69 We are already computed from a known solution; novelty is only here
condition r69 It must be the whole original number, not its residue.

## 4. Rounding down the length and endian post-mask

floor(b/4) numerals contain4*floor(b/4) bit: r must be less
2^(4*floor(b/4)). For bytes substitute4 on8. It's not rounding up with
It's a very precise bitmask1before m figure
creates a length key4m+1, which doesn't match all the numbers puzzle.

fixed32-byte reverse afterward M_b - bijection
and a sufficient condition: reverse(k) lie [B,2B). №1=1 He's already breaking it.
This conclusion does not apply to reverse Up to the mask or reverse variable length.

## 5. Binary64: final number, remainder and words

A positive whole z s bit_length(z)=e imaginably binary64 then
only when z multiplely2^max(0,e−53). V [B,2B) step
2^max(0,b−52). Therefore, T22 rejected54, even if the original number is not known.

For T21 rounded x whole binary64, leftover modulo2^b Let's imagine, too.
if x<B, It does not change; otherwise, the initial step x not less than the required step
leftover B (a) a number of times this step (or the remainder is equal to0). Sufficiency is achieved
x=r imaginable r. The first contradiction is No57, Not No54.

To the fullest256-bit x step>=2^203: All known non-zero residues below this
They're not sizeable64-The bit words are checked for each residual
a fragment separately; transfer when the word is overflowing into T24 Not allowed.

`random()=j/2^53` It's a stronger additional condition
on2^b multiplet2^max(0,b−53) regardless of the actual bit_length.
Therefore, the old T29 It's a contradiction56. Don't join T21 and T29 into one piece of evidence.

## 6. Why? decimal-The line requires a separate check

Binary64-numeral1000000000000000128 printable JS
how1000000000000000100. Precise decimal-The last line gives a different whole
restless binary64-Hence, checking the lower zero bits
It's wrong for that chain.

For shortest-roundtrip enough17 Decimal significant digits; minimum
The string can't require more. When the exponents are accurately disclosed, and the integer is
as a result, its decimal record after the removal of tail zeros contains <=17
It's just a necessary filter CPython2.7.9 routine str(float), unlike
from repr(float), use12 significant figures (Include/floatobject.h,
Objects/floatobject.c). T25/T27/T26 Checked separately.

Properties of a particular browser2015, Other formatting settings, arbitrary
number of signs`toFixed`different format) and additional processing after the line
This evidence is not included.

## 7. Mistakes and non-existent results

V Python2 PyLong_FromString finalizeL/l, But I have to read it though
I'd like one digit L left inside the cut m The last symbols, however, remain
more m−1 hex-numbers; m=1 remains alone L And there's a mistake T32,
not the correct removalL to the cut hex decoder oddball
number hex-numbersT31). Exception handler, padding and special cases outside the model.

## 8. What hasn't been tested

Arbitrary permutations of exported records have not been investigated WIF/Base58
cuts, multiple transformations/hashing float, tongue-in-the-box
extensions dtoa outside of the selected contracts seed-search
new maps. The data alone does not prove the younger mask or cancel it
conditionality of previous negative conclusions about specific RNG/HD-chains.
