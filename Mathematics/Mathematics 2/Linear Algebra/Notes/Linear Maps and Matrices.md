# Linear Maps
A map $T:V\to W$ between vector spaces is **linear** if it preserves the operations of **vector addition** and **scalar multiplication**:
$$
T(ax+by) = aT(x) +bT(y) ~~~ \forall x,y \in V, a,b \in\mathbb{R}
$$
- Combining vectors first (in $V$) and then applying $T$ yields the same result as applying $T$ first and then combining the outputs
Examples:
1. Stretching Map $T: \mathbb{R}^{2} \to \mathbb{R}^{2}, T(v) =2v$:
	- Linear
	- $T(\alpha v+\beta w) = 2(\alpha v+\beta w) = \alpha T(v)+\beta T(w)$
2. Squaring map $T:\mathbb{R}^{2}\to\mathbb{R}^{2},T(v_{1},v_{2}) = (v_{1}^{2},v_{2})$
	- Nonlinear
	- Counterexample: 
		- $T(1,0)+T(1,0) =(1,0)+(1,0)=(2,0)$
		- $T((1,0)+(1,0)) = T(2,0) = (4,0)$
		- $(2,0)\neq (4,0)$
	- 
# Matrices
An $m \times n$ matrix is a rectangular array of coefficients with $m$ rows and $n$ columns
Transpose $(A^{T})$ swaps rows and columns
Identity Matrix $I_{n}$ is a Matrix with diagonal entries $1$ and others $0$. Maps vectors to themselves:
$$
I_{n}x=x
$$
# Matrix-Vector Operations
Multiplication Rule:
- For $A \in \mathbb{R}^{m \times n},x \in R^{n}$:
$$
(Ax)_{i}=\sum
$$