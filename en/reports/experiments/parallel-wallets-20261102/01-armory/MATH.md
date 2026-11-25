> English machine translation of the [Russian source](<../../../../../ru/reports/experiments/parallel-wallets-20261102/01-armory/MATH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../../README.md>) · [Direction](<../../../../topics/03-wallets.md>) · [Documents of the series](<../INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../../docs/LATEST_RESULTS.md>).

# A1: Where do the coefficients come from and what remains unknown?

All right n — secp256k1; U(P)=04||X_BE32||Y_BE32, D=SHA256∘SHA256.
Armory root has chainIndex=-1; first child — 0. For a separate hypothesis
export puzzle i correspondently chainIndex i−1. Such conformity
is not specified for the author and must be included in the check package explicitly.

```
u_j = BE(C XOR D(U(P_j)))        # 0 <= u_j < 2^256, полный log multiplier
m_j = u_j mod n
k_(j+1) = m_j*k_j mod n
P_(j+1) = m_j*P_j
observed_i = 2^b_i + (k_j mod 2^b_i), b_i=i−1
```

V private/public transition chaincode It's unaltered wrapper count
The result is two times, three times different; it's a check of the consistency of the calculations
not BIP32-re-indication child. Clearly skip zero-point scalar
viewed C++ No, our solver rejects m=0 and the point of infinity;
They didn't meet in the controls. That's the exact domain limitation of the implementation.

By default C=g(root): double SHA256 from BE32(root), later historical
HMAC256 s 32-byte pads stringy `Derive Chaincode from Root Key`.
It's not standard HMAC-SHA256 s 64-byte Transmitted clearly C Allowed.
For default countenance root and C independent 512 bits.

## New entrance: log instead watch-only

For a related ordered segment of the journal from anchor a known u_j,
henceforth A_t=∏_{j=a}^{t−1}m_j mod n and k_t=A_t*s mod n, s=k_a.
For observation r_i=k_t mod 2^b_i:

```
alpha_i = A_t * inverse(2^b_i,n) mod n
beta_i  = r_i * inverse(2^b_i,n) mod n
alpha_i*s - beta_i = q_i (mod n)
0 <= q_i <= floor((n-1-r_i)/2^b_i)
```

The coefficients are derived from specific lines of the journal rather than accepted as free.
The same applies 5-measuring HNP-lattice HD-01 for four masks; LLL/Babai
It does not claim to be guaranteed completeness B, U, U·B, objective and response;
tested det(U)=±1 and U·B=B_reduced.

After receipt s calculate P_a=sG and
`C=BE32(u_a) XOR D(U(P_a))`In the magazine u_a before mod n, So there's no fork m+n.
Next, we build the whole chain: check each one HASH160(U(P_j)), each
u_j uniform C. An incorrect nearest vector is not declared a solution.
The first four masks are involved in the selection; the rest are achievable known
indexes and new synthetic Targets are checked only after restoration.

Restored root only a=-1. Primary a>=0 complete scalar daughter
anchorage C; We can go forward, without the public vantage points of our predecessors
The previous multipliers, the reverse transition is not built here default
C=g(root) afterward C reversible g.

If the journal is known instead ofP_a,C), A_t It is calculated by public derivation.
It's a proven extension of the interface HD-01 on a daughter record, not new HNP.

## Unknown C two-point

If you know, P=kG junior b bit r starting scalar, piece
`P-rG=q*(2^b G)` upon `Q=floor((n-1-r)/2^b)+1` possible q.
BSGS decides O(sqrt(Q)) EC operations and the same number of records; kangaroo maybe
It saves memory, but it didn't start here.

```
m = k_next * inverse(k,n) mod n
u in {m,m+n}, u < 2^256
C = BE32(u) XOR D(U(P))
```

The fullness of this latest fork follows from n>2^255. A small group
checked all q all 256 possible C. Nana secp256k1 successfully tested two
control **b=240**, That is, significantly more leakage than in the Puzzle.
It is a test of the implementation and scale of the group, not a practical one recovery Puzzle.
In the present b<=134 Start-up is prohibited in advance by the budget 4096 baby steps.

The maximum neighboring pair of known solutions in the picture - No69/70:
b=68/69, twofold DLP standing order 2^94 and 2^93.5 EC operations, dominate
2^94. This is a conditional improvement relative to E6H 2^128 **additionally
private residues and original points**, not accomplishment 2^32. For one, No135
famous raw P value 2^61; And the same long-distance neighbor
There is no key, so this figure cannot be declared as a recovery price C.

Public point of the final Puzzle key is not P. For the high undecided
number E6H He built a small number of conventions raw points; It doesn't reveal
numerical r does not create b=249..255 famous private bits. Combining the two
different kinds of information interval-DLP It is not possible without additional reason.

## Why the solutions did not come by themselves HNP

Let me h_j=D(U(P_j)). Even if P_j conditionally known, XOR can be written down
`u_j(C)=h_j + sum_l (1-2*h_j,l)*2^l*C_l`where C_l∈{0,1}.
Primary k_j=r_j+2^b_j*q_j workmanship k_j*u_j(C) contains q_j*C_l and unknown
transference modulo n. That's not it anymore HNP famously A_i. If P_j unknown,
h_j additionally depends on the full EC-point k_jG through SHA256.
Persistence C It gives a general nonlinear system, but its uniqueness does not
It's cheap. Default-linkage C=g(root) It preserves that difficulty.

The work performed removes the requirement to know in advance P_root and C **available
Another historically real artifact multiplier log**. Only one 83
No coefficients are available. That's the limit of proven methods
Not evidence of the impossibility of other attacks and not an exception Armory.
