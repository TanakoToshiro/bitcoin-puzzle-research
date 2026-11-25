> English machine translation of the [Russian source](<../../../../ru/reports/experiments/mt-eight-intervals-20261030/ALGORITHM.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/02-prng-recovery.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# E1i: Accuracy of response and conditional valuation

Just given Q=kG list K interval I_j=[a_j,a_j+N−1]No numerical values of an unknown key are transmitted to the algorithm155 with the tails of walks significantly less order n; wrapping modulo n No, it's tested when you create traps.

1. Calculate 16 point s_l G, wherein 1≤s_l≤2μ. Deterministic public function h(P) Selects the jump s_0=1; That's not proof of good mixing.
2. From every known point (s)a_j+N−1)G pass T Keep only the final pair (steps)P_j,t_j), wherein t_j - known whole scalar. Intermediate points are not stored.
3. One wild-walk in Q. Track known displacement d from Q. Coincidence Q+dG=P_j obtain k'=t_j−d, check out k'∈∪I_j and k'G=Q.
4. Put it down Δ=max_j(t_j−(a_j+N−1)). Finish the attempt while d>N−1+Δ or at a separate step limit wild blended tame the correct interval, its subsequent path to the saved end point coincides with the tame, difference t_j−k flatly N−1+Δ. The algorithm cannot pass the trap after the merger until the end of the saved path. The merger is not guaranteed.
5. With limited failure, repeat with a new public salt, four times at most. Failure is not proof that the key is missing or the model is false.

The correctness of the returned response is accurate and individually verified. The effectiveness relies on the heuristics of crossing hash-dependent walks kangaroo to a specific combination of intervals; the novelty of the crypto-algorithm itself is not stated.

Choice μ≈sqrt(N/(2K)), T=4μ. Known paths require KT compounding, preparation O(K log(max a_j)+16 log μ). So Δ≤2μT=8μ², wild must pass a distance not more than N−1+8μ². With an average progression of order μ it O(N/μ+μ) Together O(Kμ+N/μ)=O(sqrt(KN)) It's a fixed probability of success for one attempt K a pair of traps, 16 jumps and several work points, O(K). The code also has an explicit step limit O(KT+N/μ): Expenditure alone does not prove a non-zero marginal probability of success.

**Not proven:** used 16-a value function provides a probability of success separated from zero at an arbitrarily large N; The measured constants are maintained on 146-The best bit intervals; what is the optimal interval-DLP; what MT-The model is true. That's why a big real launch doesn't happen.

For No155 K=8,N=2^146: conditional sqrt(KN)=2^74.5 group operations. For the entire reference interval sqrt(2^154)=2^77. Relationship of scale sqrt(32)≈5.657 It's based on the geometry of eight intervals and a particular walking pattern, not a general formula for an arbitrary walk 149-measuring XOR-The previous approach of eight separate searches had scale K sqrt(N)=2^76 The early output of the correct block changes the mean time constant; it is implemented in a separate basic algorithm.

For BSGS table-wise m the exact cost of the transfer before checking all intervals m+K ceil(N/m), plus point shifts and checks m=32 Memory is small, but growth is linear N; The quadratic-root regime requires m≈sqrt(KN), for the present number155 unacceptably large.

Comparison without model conditions is also made with eight tame, It uses as many stored group elements as the proposed method tame These are honest simple basic implementations, but not the best published optimized versions kangaroo; The gain relative to them is not measured by this test.

Primary background: [Montenegro–Tetali, How long does it take to catch a wild kangaroo?](https://arxiv.org/abs/0812.0789) classically interval-kangaroo. His theorem is not automatically transferred to this set of jumps and several spaced intervals. [Galbraith–Ruprai](https://www.math.auckland.ac.nz/~sgal018/RamCiren.pdf) It's looking at geometry and heuristic multi-dimensional methods. It doesn't use the statement that an arbitrary set of power is M It allows for a very small search for sqrt(M).
