> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-shift-lattice-20261102/FINAL_REPORT.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-11 One monomial shift of the coefficient lattice

02.11.2026. Run `SEQ-11-fda02fe003fe`Limited series and independent audit completed.

## Result

Extension of the former has been verified n²-a copy of it multiplied by one
The unknown variable SEQ-10 It's been left unaltered.
Nana 8 Fresh reinforced positive inputs restored:
**2/8** with a new grid,
**2/8** former n²-lattice,
**2/8** heuristic SEQ-08.

New Successful Cases Relative to the Former n²-Grids:
**0**; relative primal:
**0**. Individual differences retained
into COMPARISON.json. This is a diagnostic sample, not a universal boundary.

On two positive entrances with initial masks, the new design gave
0/2. **No real search has been launched.
There's no real key or bit. Generator model is not excluded.**

## What's changed, exactly?

Hidden state model, module n, Export order, neighbouring differences
And the cubic invariant of the double ratio is the same
a coefficient lattice from which strict polynomials are extracted.

```text
L0 = прежняя решётка полиномов, кратных n² на допустимом корне
L1 = L0 + u_j * L0
```

If the value g(u) multiplely n², piece u_j*g(u) multiplely n² wholesomely
Therefore, the new kit retains a rigorous enough check:
`sum(abs(g_alpha)*X^alpha) < n²` allowance g(u)=0 above the whole.
Adding rows and columns does not guarantee more useful short vectors.

Variable j beforehand LLL at a minimum of accurate rational assessment
`(bit_length(n)*e + sum(weight_bits))/d`where the base index contains n^e,
d - Dimension. With equality, smaller ones are chosen d and j. It's in advance
fixed heuristics of the medium-scale basis; it does not use
The true state, the candidates found or the results of reduction.
The optimality of choice is not stated.

The old dimension 88; And the new dimensions that we've observed [122, 124].
Selection of directions for all constructed entrances: {0: 2, 1: 8, 2: 0, 3: 2}.
Detailed assessments of all four areas are preserved in AXIS_SELECTIONS.json.
Independent HNF Checks that the triangular base really sets
precisely L0 + u_j*L0, No loss of generators.

After the certification of polynomials, the exact exclusion of high
degree SEQ-10. Each candidate passes the entire relative
path 135 fortunes 83 The result is class-class
states with a general shift; global uniqueness is not claimed.

## New control data

12 new inputs, all on a five-state panel: 8 reinforced
positiveh=16,18,20,24, general and inverted generators,
2 positive with initial masks and 2 casual h16. On the chosen one
panels open 256−h The lower bits; outside it, the masks are original.
All entrances, seed, The code, limits and order are saved until the first launch.

Former n²-The lattice and the new receive the same input, one LLL s
delta=0.99/eta=0.51 and one fixed solver
and decisions are taken into account separately 90 seconds,
pre-decision 30 for a second primal before 45 Total budget 1200 seconds.

Beginning 60/60 Measured total time
child processes 554.05 seconds.
A small excess of the individual limit is possible at completion
"Lim" means an undefined or uninitiated outcome.

| Method | h16 | h18 | h20 | h24 |
|---|---:|---:|---:|---:|
| SEQ-08, primal | 2/2 | 0/2 | 0/2 | 0/2 |
| Former n² + SEQ-10 | 2/2 | 0/2 | 0/2 | 0/2 |
| n² single-shift + SEQ-10 | 2/2 | 0/2 | 0/2 | 0/2 |

| h | Former: Strict lines (two inputs) | With shift: strict lines |
|---:|---|---|
| 16 | 49/49 | 76/76 |
| 18 | 0/0 | 0/0 |
| 20 | 0/0 | 0/0 |
| 24 | 0/0 | 0/0 |

Status:

- `primal`: `heuristic_no_candidate` — 10, `translation_classes_found` — 2.
- `prepare_base`: `prepared` — 12.
- `solve_base`: `no_certified_equations` — 8, `unit_ideal` — 2, `translation_classes_found` — 2.
- `prepare_axis`: `prepared` — 12.
- `solve_axis`: `no_certified_equations` — 8, `unit_ideal` — 2, `translation_classes_found` — 2.

Strict contradictions at random inputs: the former n² —
2, new 2.
These certificates refer to artificial entrances and defined boundaries.

## Cost and limitation of the method

Median wall time Completed stages, including starting the process:
lattice-making 10.24 c. new 25.08 (c)
solution 2.93 c. new 3.08 s.
These are the common medians of this small series; they do not replace paired medians
measurements at each entrance to MEASUREMENTS.json.

The absence of strict strings means that the selected design and reduction
They didn't give the equations that the solver needed
There's no hidden link. More strings at the level that's already solved
Nor does it in itself mean an expansion of the area of recovery.

## Checks and the possibility of repeating limits

- Six checks on three small fields: divisibility of all generators
  the index and the exact equality of lattices through HNF.
- Checked out 36 lattice certificates at new entrances;
  13 equality HNF, including the actual structural input.
- 504 strict polynomial strings;
  checked all lines, weights, T*B=L and det(T)=±1. Positive
  An independent substitution of true states is performed.
- 24 The complete results of algebra, of which
  8 No empty systems. Transformations have been verified
  whole roots, chains, shear intervals and conditional synthetic projections71.
- 0 the limited stages are kept separately;
  They are not interpreted as negative answers about the existence of a solution.
- All 2552 previous accepted files SEQ-01..10
  preserved SHA256 and mtime. Dependencies and continuation without recounting are checked.

RETRY_INDEX.json indexes the status of limited attempts in saved
folder results SEQ-series: {'total_budget': 10, 'timeout': 30}. Paths, entrances, hashes preserved
budgets (where they were recorded) and available intermediate files.
It's an index for a new separately budgeted effort
state LLL/The groove is usually not preserved; repeating with
Extended time does not necessarily continue from the place of stop.
Old results are not overwritten and are not automatically restarted.

Two technical timeouts of early audit implementations 180 seconds
preserved AUDIT_DIAGNOSTICS.json and audit_errors/. Verification HNF speeded up
Removal of excess generators after proof
the integer affiliation to the selected subbase
The scientific code and the results of the experiment didn't change
audits are retained for reproducibility; these timeouts are not
A negative scientific result.

Structurally considered, but not reduced in the scientific series:
n³ dimensionally 293, multiple-invariant n² dimensionally 194,
four linear directions with dimension 188. Their effectiveness
The sources and limits of borrowing are: SOURCES.md.

## Conclusion for continuation

The experiment tests one particular way to expand the lattice and one
A predetermined rule for choosing a direction
all shift systems or all methods Coppersmith. Next option
a new design justification; repeat the same configuration
It only makes sense to save the unfinished stage with a new budget.
For real masks, there is still a need to obtain strict equality.
There is no evidence of the absence of a real model.
