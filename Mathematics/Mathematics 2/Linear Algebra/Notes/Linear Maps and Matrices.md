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
	- Counterexample: $T(1,0)+T(1,0) =()$