# Abstract Vector Spaces
A vector space over the real numbers $\mathbb{R}$ is a non-empty set $V$ with two binary operations (Vector addition $+$ and scalar multiplication $\times$ ) 
A vector space must satisfy the following axioms:
- **Associativity** of a vector addition: $u+(v+w)=(u+v)+w$
- **Commutativity** of a vector addition: $u+v = v+u$
- **Identity element:** exists $0$ in $V$, such that $v+0=v$
- **Inverse element:** for all $v$ exists $(-v)$ in $V$ such that $v + (-v) = 0$
	- For all $a,b$ in $R$ and $v$ in $V$: $a(b\times v) = (ab)\times v$
- **Identity element** of scalar multiple: $1\times v=v$
- **Distributivity and compatibly of scalar multiplication**
Examples:
- Traditional: $\mathbb{R}^{n}$
	- $\mathbb{R}^{n}$ represents the set of all ordered $n$-tuples of real numbers: $\mathbb{R}^{n} = \{(x_{1},x_{2},\dots,x_{n}) | x_{i} \in \mathbb{R} \text{ for all } i\}$
	- E.g.
		- $\mathbb{R}^{2}$: 2D space with vectors (x,y)
		-  $\mathbb{R}^{3}$: 3D space with vectors (x,y,z)
- Abstract: Polynomials of degree $\leq 3$, functions, etc.

# Polynomial Vector Space
Elements: $a(x) = a_{0} + a_{1} + a_{2}x^{2} + a_{3}x^{3}$
Operations:
- **Addition:** Add coefficients term-wise
$$
(a+b)(x) = (a_{0}+b_{0})+(a_{1}+b_{1}x) + \dots
$$
- **Scalar Multiplication:** Multiply each coefficient by scalar $r$:
$$
(r \cdot a)(x) = ra_{0}+ra_{1}x + \dots
$$
- **Zero Vector:** $0(x)=0$
- **Inverse:** $-a(x) = -a_{0}-a_{1}x - \dots$
# Norms (Lengths)
