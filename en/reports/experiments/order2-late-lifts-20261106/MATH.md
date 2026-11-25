> English machine translation of the [Russian source](<../../../../ru/reports/experiments/order2-late-lifts-20261106/MATH.md>). Formulae, identifiers and source data are retained. Consult the source if wording is ambiguous.

> Documentary copy, 2026-11-25. [Beginning](<../../../README.md>) · [Direction](<../../../topics/04-sequences-and-lattices.md>) · [Documents of the series](<INDEX.md>)
> Historical plans are not a launch mission. The current outcome is [summary](<../../../docs/LATEST_RESULTS.md>).

# O2-L01 Exclusion of coefficients and the exact root of the step5

All the statements below relate to affinity recursion s_(i+2)=a*s_(i+1)+b*s_i+c modulo simple p, b!=0, The completeness of the algorithm is stated by p>=7 and gcd(5,p*(p²−1))=1. For p11/31/61/101 This condition is not met, the method clearly fails.

## Eliminating the Common Shift without Knowledge s135

Let me r_i=s_i mod2^k_i, maximum width K=k135. Take it x_i=(s_i−s135) mod p, x135=0. So k_i<=K, famously s135 mod2^k_i. Therefore, the necessary condition for x_i:

```
x_i mod 2^k_i in {(r_i-r135) mod 2^k_i,
                  (r_i-r135+p) mod 2^k_i}.
```

Two options correspond to the sign s_i−s135 It's not a replacement XOR Not the assumption of a known older foothold residue. Possible transfers for different i are not selected arbitrarily in the final response: after restoring the entire chain, an independent interval projector checks for the existence of a single overall shift and all the original83 Until then, only the necessary conditions.

Choose x115,x120,x125,x130 and x135=0. The first four run through all the canonical numbers that satisfy the two residues; combinations are not compressed or randomly sampled. Their number is calculated exactly before launch.

## Elimination of thinned recursion coefficients

Denote y0..y4 these five values, D_j=y_(j+1)−y_j mod p. If Delta=D1²−D0*D2!=0:

```
A=(D2*D1-D0*D3)/Delta mod p
B=(D1*D3-D2²)/Delta mod p
C=y2-A*y1-B*y0 mod p.
```

These are the only odds y_(j+2)=A*y_(j+1)+B*y_j+C. B=0 It can be ruled out: the original reversible junction has a non-zero determinant, like its fifth degree. First, the remaining observations on the grid of multiples are checked cheaply5, backwards B^(-1); Then the normal step is restored.

## Why for the present n fifth-degree root

For a group of reversible affinity transformations F_p² sufficient E=p*(p²−1): each such transformation F satisfies F^E=I. Proof: put it in the3×3-last-line matrix()0,0,1). The proper meanings are in F_(p²), non-zero values have an order dividing p²−1. Jordanian blocks are no larger than the size3; upon p>=3 Their unipotent part is destroyed by the degree of p. This is an indicator, not a statement that E The order of each matrix or the entire group.

If gcd(5,E)=1, e=5^(-1) mod E. Then the only fifth root H equal G=H^e. Existence: G^5=H^(1+kE)=H. Oneness: for anyone R s R^5=H receive R=R^(5e)=H^e. Commutativeness of the whole group is not required.

For secp256k1 n mod5=2, therefore gcd(5,n*(n²−1))=1. Previously preserved alias-example modulo101 It's a specification of the matrix root at a known thinned junction; it doesn't mean that circumscribed observations determine H.

Use it H=[[A,B,C],[1,0,0],[0,0,1]] coordinate **(x_(i+5),x_i,1)**. Root G It operates in the same coordinates and does not have to be companion-the matrix of the initial step i115 equaly1,y0,1); G^(-114) carries him to i1. Second component of successive G-vector135 It's a state of origin a=tr(G_linear), b=−det(G_linear), c It comes from the first three states135 The conditions are further checked by conventional recursion.

## Why zero? Delta you can't just skip

For the initial homogeneous recursion of differences transition T Let's revert T^5 does not lose the cyclic rank of the vector: T=(T^5)^e. If T^5 They keep one line, and they keep it T. In addition, the transition from ordinary to step differences multiplies the vector by S(T)=I+T+...+T^4. This operator shall be reversible if: S(T)v=0, piece T^5v=v; from T=(T^5)^e shoulder Tv=v, so S(T)v=5v, contradiction p!=5. Therefore, on our condition, p primalism2 remains undegenerate on the grid5.

Thus, Delta=0 the present compatible sequence means the order of<=1. It is treated as a separate full branch, not referred to as a contradiction.

For a non-permanent first-order chain x_(i+1)=r*x_i+e, r!=0, list r and e relative x135=0, We go back and check the masks, after we canonize x1=0 signify d=x2. Then all the second-order coefficients of the same chain are:

```
a — произвольное, a!=r
b=r*(r-a) mod p
c0=(r+1-a)*d mod p.
```

It's p−1 classes on one non-permanent canonical chain x_i=0: arbitrary a and b!=0, c0=0, everything p*(p−1) The shifts and predictions are the same for all members of the family, so one projector call is enough. Families are stored in a compressed way; for old small standards, they are disclosed completely. r=0 does not give an inconstant sequence compatible with a reversible second order: after two constant states b!=0 It forces the previous to be the same.

## Completeness and cost

Any initial solution is either non-degenerate and is included in the list of four ascents, or belongs to one of the separately listed branches of the first order/constant. Once reconstructed, the exact projector retains only the actual compatible shifts, so the completed coating of both branches gives all the model solutions and all the predictions toy-Inputs are proof plus algorithm checks; validating the inclusion of a true hidden model does not in itself replace completeness.

At real widths115/120/125/130 unknown142/137/132/127 Two residues per position give approximately2^542 combinations of four ascents to filters; the first-order branch has approximately2^512 A naive search of the five absolute total values of the late grid would be roughly2^660, (a) the former class divisions, approximately2^1024. It's a comparison of domains of a conventional model, not the probability that it is true, not the gain relative to optimal cryptographic search, and a cheap filter doesn't eliminate the cost of listing a huge domain.

Vector code is limited p<=65537; orderly p³ placed in int64. Full-size control reconstruction and projector use Python big integers. Speed transfer toy-brute256The bit is incorrect: the bit, masks and the proportion of candidates who passed the filter are different.
