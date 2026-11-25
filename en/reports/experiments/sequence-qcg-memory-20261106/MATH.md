> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-qcg-memory-20261106/MATH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-25: What is saved by saving memory

Let me F - field of the source module n, ? U - all field variables u_i,j, whereby SEQ-23/24 They encoded unknown bits. Each one has a limitation u=0 ∨ u=1. Separate Boolean B_u mapping τ(u)=If(B_u,1_F,0_F); We don't change the other variables.

Builder compact_encoding.py creates a complete conjunction of the original builder, performs one simultaneous substitution τ There is a single assignment for any solution of the original system B_u=(u=1), It satisfies the new system If(B_u,1,0) It restores the original field bits and all the original statementsa,b,c,s,z) coincide, including cases UNSAT. Only the tautology of bit ownership is removed {0,1}, (a) non-permissible limitations on the initial states.

For each observed i persistence s_i=r_i+2^k u_i in the field and an accurate binary comparison 0≤u_i≤floor((n−1−r_i)/2^k). Together, they prohibit modular transfer and are equivalent to the original integer mask 82 informative masks, all of them 3767 famous bits, 135 successive states with filled gaps, 134 square z_i=s_i², 134 transition s_(i+1)=a z_i+b s_i+c, a≠0 and initial normalization gauge. Squares don't become independent unknowns. Artificial true values don't participate in constructing a working query.

The initial view has 17497 field unknowns (art17225 bits 272 others 17659 After the substitution, 272 field and 17225 Unknown, simplified conjunction contains 433 It's a number after logical simplification; it doesn't mean losing the mask elim-term-ite It is possible to re-introduce field definitions, so these numbers cannot be considered the number of internal variables after all tactics.

The second precise measure ff.preprocess=false It only changes the strategy Z3. The initial equations and their semantics remain byte/structurally the same; intermediate z and s They are not removed in advance ff-simplify. This is a separate test of the role of chain deployment BV fallback It is not used as an optimization: a mere rejection of search would not count as a result.

Verification of implementation: independent comprehensive review 360536 small scale parameters; correct SAT/UNSAT Both records on ten benchmarks; direct computation of all transitions and masks for each candidate found; closed substitution of four full-length positive witnesses in both records. These witnesses are validation, not restoration. Equivalence for a large module relies on a general substitution above, not on transferring the success of small solvers.
