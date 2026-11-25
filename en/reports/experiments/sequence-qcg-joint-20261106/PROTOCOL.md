> English machine translation of the [Russian source](<../../../../ru/reports/experiments/sequence-qcg-joint-20261106/PROTOCOL.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# SEQ-23 a joint nonlinear solution QCG synthetically

A new user request: solve a quadratic model with dependencies between monomes, first on synthetics with original masks. SEQ-22 And the old series doesn't change. Real solutions aren't inputs to new searches.

## Primary sample

Four new chains s[i+1]=a*s[i]²+b*s[i]+c mod n, a!=0, and two sequences of independent states. n order secp256k1, everything 135 Conditions; Observations are No1..70 no75..135 step-by-step 5, junior i−1 The parameters a,b,c,s1 uniformly rejection sampling SHAKE256, domain SEQ-23-v1. Conditions and parameters are stored separately in CHECKER_TRUTH.json. The work process is only public INPUT.json; There are no true high bits, coefficients, initial approximations or closed states. A random sequence is not declared to be incompatible with a single mask model.

## Two equivalent nonlinear encodings

Common variables a,b,c, 135 condition s[i] and 134 square z[i]Mandatory links z[i]=s[i]² mod n and s[i+1]=a*z[i]+b*s[i]+c mod n enter **solver**, It's not just a candidate test a*z and b*s They're also nonlinear expressions, not free coordinates 134 Transitions are retained, including latent intermediate states in passes; free composition degree 32 Nope.

1. `nia`: Z3 QF_NIA, precise, limited wholes. s²=z+n*k, a*z+b*s+c=s_next+n*l; 0≤s,z,b,c<n, 1≤a<n, 0≤k≤n−2, 0≤l≤2n−3. Masks s=r+2^bits*u, 0≤u≤floor((n−1−r)/2^bits). Index bits=0 It doesn't add information.
2. `ff`: Z3 QF_FF, direct polynomial equality in F_n. For every blank mask s=r+2^bits*bitsum(u_0,...), each u_j∈{0,1}; Separately set the exact upper limit of binary u, avoidance mod n. These are not two independent solvers: both encodings use the same setup Z3, But different theories.

Both retain monome dependencies entirely for this model HG-No equations are required; complexity is transferred to a general nonlinear search.

## The general shift and criterion of success

Let me M=2^max(bits)=2^134. A general shift d transformer s'=s+d mod n, factor a'=a, b'=b−2*a*d, c'=a*d²−b*d+c+d mod n. If the observed conditions do not cross the boundary of the module and d multiplely M, The masks are preserved.

Without loss of existence added Or(s[i]<M) by the observed indexes with bits>0. For any acceptable solution, it is possible to deduct M*floor(min_observed(s)/M) of all states n; The observed values are not overflowing, their masks are preserved. Unobserved states can turn around n, It's a correct fixation of a piece of freedom, not a substitution of the true meaning, not a statement about the uniqueness of the representative.

Success is divided into (1) (a) a verified acceptable solution,2) the reference class of the general shift, (3) the exact source chain. The class is given a, C=a*c+b/2−b²/4, y1=a*s1+b/2 mod n. Checked all over 135-It's a chain of steps SAT-The candidate is double-checked with ordinary integer arithmetic, uniqueness is not asserted without separate proof; second-class search is not included in this pilot.

## Verification of implementation before the main launch

Nine small entrances: p=7,11,17, two QCG And one random, horizon 8, indexes 1,2,3,4,6,8, bits=min(i−1,bit_length(p)−2). It's a code and pass test **baseless 256-bat-mask**. Total independent over-the-counter a,b,c,s1 It gives you all the solutions that are acceptable SMT-The encoding must return the correct SAT/UNSAT any SAT-Candidate from the full set.

In addition, a fully known sequence [2,7,6,9,7] mod 17: The first three transitions are clearly defined a=b=c=1, next 6 instead 7. Accurate model UNSAT; loosening z=s² makes her SAT. This ablation directly checks that monome dependencies operate within the search, and applies only to this technical input, not to the main series.

At small inputs, the equivalence of the total shift fixation and class preservation are further checked QCG and their reformed representatives must satisfy all the SMT-statements after substitution, without search and without transferring these values to the workflows of the main run.

## Limits and statuses

Every little one SMT-request: 10 momentary Z3, 25 the outer limit of seconds 12 mainland/coding 60 momentary Z3, 90 No more than two independent workflows at the same time max_memory=768 MB; limit private/working-set memory=1024 MiB on trial, once-in 0.25 An external stop applies only to the created workflow.

SAT, solver-UNSAT, unknown/timeout, memory limit, external timeout And technical error is different statuses. UNSAT If you have a positive control or an accuracy error, you stop the clearance. If you don't pass the small control, you don't allow the main series. You don't get a timeout, you don't get a negative result, you don't get no communication. The sensitivity test is piloted: four positive inputs don't give you a reliable statistical estimate; the real keys aren't checked even when you're a pilot.

Before launches, code, auditor, protocol, plan, public entrances, closed benchmark and environment are recorded.smt2, Restrictions, statistics and statuses are retained; timeouts can be continued separately with new limits without changing old records 10936 Artifacts and dependencies are checked by hash/mtime in the final audit.

## Documentation

Used established Python API Z3 5.3.3.0 and official guidelines: [calculus](https://microsoft.github.io/z3guide/docs/theories/Arithmetic/), [finite fields](https://microsoft.github.io/z3guide/docs/theories/Finite%20Fields/), [parameters](https://microsoft.github.io/z3guide/programming/Parameters/). ff.bitsum You don't limit your arguments to bits; you add these limitations explicitly NIA-A heuristic does not mean that our ultimate limited problem is unsolvable.
