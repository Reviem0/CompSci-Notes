# Matrix Representations of Linear Maps
- Every linear map between finite-dimensional vector spaces can be represented by a matrix
- Example 1 (Reflection in $R^{2}$)
	- Map: Reflect over the x-axis
	- Linearity: Yes as it preserves vector addition and scalar multiplication
	- Matrix
$$
\begin{bmatrix}
1 & 0 \\
0 & -1
\end{bmatrix}
$$
$$
\begin{bmatrix}
1 & 0 \\
0 & -1
\end{bmatrix}
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
=
\begin{bmatrix}
1 & 0 \\
0 & -1
\end{bmatrix}
$$
- Example 2 (Scaling in $R^{2}$):
	- Map: Stretch x by 2, y by 3
	- Matrix:
$$
\begin{bmatrix}
2 & 0 \\
0 & 3
\end{bmatrix}
$$

![[Screenshot_20250304_173015_Samsung Notes.png]]
# Special Matrices
- Identity Matrix: $I$ (diagonal entried = 1)
- Diagonal Matrix: Non-zero entries only on the diagonal (e.g. scaling matrices)
- Triangular Matrices:
	- Lower/Upper: Non-zero entries below/above the diagonal
	- Strictly: Non-zero entries strictly below/above
- Permutation Matrices:
	- Swap vector components
	- Example: (swap 1st and 3rd components in $R^{3}$)
$$
\begin{bmatrix}
0 & 0 & 1 \\
0 & 1 & 0 \\
1 & 0 & 0
\end{bmatrix}
$$
# Matrix Product
Composition of Linear Maps: If $A:\mathbb{R}^{n}\to\mathbb{R}^{n}$ and $B:\mathbb{R}^{m}\to\mathbb{R}^{p}$, then $BA: \mathbb{R}^{n}\to\mathbb{R}^{p}$



