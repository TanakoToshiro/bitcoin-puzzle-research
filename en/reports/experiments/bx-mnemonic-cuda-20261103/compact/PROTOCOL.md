> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/bx-mnemonic-cuda-20261103/compact/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/01-historical-generators.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# BMC-01 - end-search BX mnemonic on CUDA

03.11.2026, Europe/Moscow. The user instructed to continue the work started build.sh
Preparation and verification of applicability to Bitcoin Puzzle until the end
Acceptance and measured pilot is performed by a full registered domain;
Cloud leases are not used BMD-01/E15 The series is unchanged.

## A fixed hypothesis

Official BX2.0.0 Windows x64: uint32→MT19937→32 outputs %255→entropy32;
old Electrum encode/decode shorten leading zeros each BE uint32 chunk.
A new master line = concatenation unpadded lowercase hex,0→"0".
Exactly4 categories: unchanged64hex; changed_valid even32..62hex;
reject_odd; reject_short even<32hex. Only changed_valid passable16..31
byte BIP32 HMAC("Bitcoin seed",bytes). PBKDF2/BIP39 absent.
Nibble-shifting chunks Do not replace the removal of whole zero bytes.

SCHEMES.json =20 lineage E15 baseline length32,id20..39, changeless
parent/hard/offset. Parents m,m/0,m/0'/0,m/0'/1 s normal/hardened final
i−1/i; m/44'/0'/0'/0 and /1 s normal final i−1/i. Mask:
2^(i−1)+(raw mod2^(i−1)). These paths are not attributable to the author.
Training№1–50, pre-filter49 minor bits50. Real holdout№51+
use only after full use training match; Don't choose the parameters.

Full source domain[0,4294967296), including0 and0xffffffff.4096 block2^20.
Beginnings/ends uint64; keep out wrap. In each block, the sum4 category
baseline seed, HD pairs=20×changed_valid. Unchanged covered E15;
source rejects do not seed inspected CLI-chain. Invalid HD mistake
the whole block, not reject It's not a negative result child index.

## Acceptance to Real Search

- Check the preserved origin/hashes BMD-01 and E15; keep out prepare
  Record the current assembly and surroundings, ready-made artifacts with the same
  input pins Don't count.
- CUDA MT: everything12473 E15 seeds/32words, all the boundaries of the blocks,0/1/max. CUDA codec:
  same entropy plus native32 traces supplementary min/max lengths.
  Confirm category,exact hex,effective bytes, It's not just meters.
- Master/parents/final key-chain-public: BMD native traces,17 BIP32 vectors,
  inherited SHA/HMAC/EC/scalar-add vectors, precise37-byte HMAC payloads,
  lead zeros,normal/hardened and invalid nodes.
- Real scan kernel check affine CPU for20 exits eligible
  seed in the spaced short ranges.20 positive/20 negative synthetic
  filters; synthetic training/holdout verifier controls; bits0 many matches,
  overflow, empty/singleton, block/domain boundaries and the full last block.
- Misguided master/child test builds must interrupt the block; missed codec
  cases don't HD. Category counters independently verified CPU.
- Runner: atomic checkpoints,stop/resume,skip completed,changed config,
  truncated/corrupt block,worker error,candidate stop and competitive lockdown.

## Pilot and full passage

After warming up5 space-dimensional4×2^20 seed:at0,2^30,2^31,3×2^30 and
The end of the domain1M part is kept separately together with input pins, timelessly
and categories; after acceptance of these20 The blocks are used in a full passage without
They enter the full domain exactly once. Synthetic
controls and classify-only benchmarks Search coverage is not considered.
Separate classify-only measurement RNG+codec; full-minus-classify - just
approximation of added HD-Cost, not an independent profile stages.
Show me pipeline wall/IO,API/CUDA time,init,memory,eligible fraction,range
Total cost by actual measurements. E15 It's time to go.

Before full freeze inputs/acceptance hashes. Consistent blocks have
SHA-chain/config pins; Candidate is retained and terminates until
independent verification. Error,timeout,STOP It's not considered complete
coating read-only process Windows readback check out
4096 ranges, categories, hashes, accepted code and no candidates/mistakes.
Don't expand RNG,pathspassphrase,Masks or order of export after the result.

A negative result excludes only these20 combinations codec-path
full-onuint32-It doesn't rule everything out BX/wallets and does not install the author's software.

## Separate implementation BMC-01C: listing

Reference BMC-01 build and accepted controls/pilots preserved unchanged.
Five of her pilots gave879398 baseline seed/s, forecast81,4This is a separate
run change scheduling: first kernel classify and record
changed_valid WorkItem(state,length,seed); second launch HD on a tight list.
Schemes/history-chain/target/The mask doesn't change. Maximum capacity of the list
equal seed block, the overflow is not possible with one item on seed
and is further checked before HD. Raw debug retain index,
candidates are sorted bystate/id; routine atomic append is not an order HD.
Acceptance is completely repeated for a new assembly, the old truths are not recalculated.
Pilots of the new code/input ID Only accepted pilots blocks
This implementation is reused in its full. Other hypotheses are not added.
