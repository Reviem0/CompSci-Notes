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
		- $\mathbb{R}^{2}$: 2D space with vectors (x, y)
		-  $\mathbb{R}^{3}$: 3D space with vectors (x, y, z)
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
The length of a vector in the $\mathbb{R}^{n}$ domain is defined as:
$$
||x|| = \sqrt{ x_{1}^{2} + x_{2}^{2} + x_{3}^{2} + \dots + x_{n}^{2} }
$$
For polynomials it is defined by the integral over $[0,1]$:
$$
||a(x)|| = \sqrt{\int_{0}^{1} (a(x))^{2} \, dx  }
$$
Example:
$$
a(x)=x \Rightarrow ||a|| = \sqrt{ \int_{0}^{1} x^{2} \,dx} = \sqrt{ \frac{1}{3} }
$$
# Scalar Dot Product
In $\mathbb{R}^{n}$:
$$
\begin{align}
x \circ y = \langle x,y \rangle ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\
\langle x,y \rangle = x_{1}y_{1}+x_{2}y_{2}+\dots+x_{n}y_{n}
\end{align}
$$

For polynomials:
$$
\langle a(x),b(x) \rangle = \int_{0}^{1} a(x)b(x) \,dx
$$
# Angles & Orthogonality
Angle Formula:
$$
\cos \theta = \frac{\langle x,y \rangle}{||x|| \cdot||y||}
$$
Orthogonality:
$x$ and $y$ are orthogonal if $\langle x,y \rangle = 0$
- $x$ and $y$ are perpendicular when $\langle x,y \rangle = 0$ because $\cos 90^{\circ} = 0$

# Key Inequalities
**Cauchy-Schwarz:**
$$
|\langle x,y \rangle | \leq ||x|| \cdot ||y||
$$
**Triangle Inequality:**
$$
||x+y|| \leq ||x|| + ||y||
$$
Follows From:
$$
\begin{aligned}
||x+y|| ^{2}  &= \langle x+y,x+6 \rangle \\
&= \langle x,x \rangle + \langle y,y \rangle + 2\langle x,y \rangle \\
& \leq ||x||^{2} + ||y||^{2} + 2||x||||y|| \\
&= (||x||+||y||)^{2}
\end{aligned}
$$

# Applications
**Normalisation** is the conversion of vectors to unit length:
$$
\hat{x} = \frac{x}{||x||}
$$
**Function Spaces:** Basis expansions (e.g. Fourier Series) rely on orthogonality  



**Angle between \( a(x) = x \) and \( b(x) = x^2 \):**

1. **Scalar Product:**
$$
\begin{aligned}
\langle a, b \rangle &= \int_0^1 a(x)b(x) \, dx \\
&= \int_0^1 x \cdot x^2 \, dx \\
&= \int_0^1 x^3 \, dx \\
&= \left[ \frac{1}{4}x^4 \right]_0^1 \\
&= \frac{1}{4}.
\end{aligned}
$$

1. **Norms of \( a(x) \) and \( b(x) \):**
$$
\begin{aligned}
||a|| &= \sqrt{\langle a, a \rangle} \\
&= \sqrt{\int_0^1 x^2 \, dx} \\
&= \sqrt{\left[ \frac{1}{3}x^3 \right]_0^1} \\
&= \sqrt{\frac{1}{3}} = \frac{1}{\sqrt{3}}, \\
||b|| &= \sqrt{\langle b, b \rangle} \\
&= \sqrt{\int_0^1 x^4 \, dx} \\
&= \sqrt{\left[ \frac{1}{5}x^5 \right]_0^1} \\
&= \sqrt{\frac{1}{5}} = \frac{1}{\sqrt{5}}.
\end{aligned}
$$

1. **Compute \( \cos \theta \):**

\begin{aligned}
\cos \theta &= \frac{\langle a, b \rangle}{||a|| \cdot ||b||} \\
&= \frac{\frac{1}{4}}{\frac{1}{\sqrt{3}} \cdot \frac{1}{\sqrt{5}}} \\
&= \frac{\frac{1}{4}}{\frac{1}{\sqrt{15}}} \\
&= \frac{\sqrt{15}}{4} \approx 0.9682.
\end{aligned}


1. **Find \( \theta \):**
\[
\begin{aligned}
\theta &= \arccos\left( \frac{\sqrt{15}}{4} \right) \\
&\approx \boxed{15^\circ}.
\end{aligned}
\]
