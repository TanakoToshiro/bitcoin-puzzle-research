> English machine translation of the [Russian source](<../../../../ru/reports/experiments/python-expanded-20261030/SEED_DOMAIN_AUDIT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/01-historical-generators.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# What Really Covers a Complete Coverage integer seed32

It's **source-output**, Not changing the frozen protocol E2b and not a launch statement Windows CPython. Machine auditing and SHA-256 - an artifact of the initial study (`source-domain-audit/AUDIT.json`; outside the picture.

V CPython 2.7.9 Windows linear seed including unicode), float and other successfully hashed non-integer objects are reduced to `unsigned long` through `PyObject_Hash`. Windows-configuration 32-bit long, including Win64. All of these successfully created states MT multi-state `Random(integer_seed)` upon `0 <= integer_seed < 2**32`It also covers any randomized hash values: they still fit in the same end range.

If it's full E2b without candidates, a negative conclusion for the **96 diagrams corresponding to Python 2.7.9**, It also applies to these species seed on Windows. You don't have to go through a line dictionary, and it's important that you cover how you generate keys from the protocol, not just random key generation Python-program.

The proof consists of three verified links:

1. `Lib/random.py`except None The argument without conversion is transferred to the basic seed.
2. `Modules/_randommodule.c`: for non--int/long hash long, later unsigned long transmuted into nonnegative Python integer; further used init_by_array.
3. `PC/pyconfig.h` and `Include/object.h`: long result PyObject_Hash have 32 batter Windows. The negative hash is modulused 2^32; The exact hash value is not important for inclusion in the full range.

Sources are fixed on commit `a5f49f5bb46b6b8c7bf1ffedbaf3009186b94b50`: [Windows configuration](https://github.com/python/cpython/blob/a5f49f5bb46b6b8c7bf1ffedbaf3009186b94b50/PC/pyconfig.h), [hash API](https://github.com/python/cpython/blob/a5f49f5bb46b6b8c7bf1ffedbaf3009186b94b50/Include/object.h), [MT seeding](https://github.com/python/cpython/blob/a5f49f5bb46b6b8c7bf1ffedbaf3009186b94b50/Modules/_randommodule.c), [Python wrapper](https://github.com/python/cpython/blob/a5f49f5bb46b6b8c7bf1ffedbaf3009186b94b50/Lib/random.py).

## What's left out of the coverage

| Initialization | Reason |
|---|---|
| random.Random(None) both-way | The wrapper gets 2500 byte os.urandom and makes it big integer; It's not automatic 32-bit timestamp |
| Fallback wrappings when unavailable urandom | int(time.time()*256): for 2015 year-round 39 bit |
| Big, obvious int/long | All words of absolute meaning are used, not just the younger ones 32 bat |
| Python 2.7.9 on Linux x86_64, line/float | In the saved assembly long has 64 bit; common hash can go beyond seed32 |
| Python 3.4.2, standard version=2 | Bytes of the line are supplemented SHA-512, big-time integer |
| Low-level _random.Random(None) wrapless | Another branch C-code: init_genrand from time to time, untested here init_by_array |
| Repeated seeding between the keys, another shift/expense | Does not correspond to a single sequence from the final protocol |

It is not claimed that the creator used Windows or Python. This is a clarification of many conditions that are already being tested: the previously recorded "line out" clause describes the absence of direct vocabulary search; this separate audit proves the inclusion of a particular case Windows Python 2.7.9. The full result and actual coverage should be read in RESULTS launch.
