What is a vector?
- Physics answer: "Quantity with a magnitude and direction"
- Mathematics answer: "An element of a vector space"
# Column Vector
2 dimensions:
$$
\vec{v} = \begin{pmatrix}
v_{1}  \\
v_{2}
\end{pmatrix}
$$
3 dimensions
$$
\vec{v} = \begin{pmatrix}
v_{1} \\
v_{2}  \\
v_{3}
\end{pmatrix}
$$
Notation: $\vec{v}, \text{or v}$,
The $v_{i}, 1,2,3,\dots$ are the coordinates of v

# Row Vector
2 dimensions:
$$
\vec{v} = (v_{1},v_{2})
$$
3 dimensions:
$$
\vec{v} = (v_{1},v_{2},v_{3})
$$
# Transposition
Transpose is used to convert row to column vectors:
$$
(v_{1},v_{2})^{T} = \begin{pmatrix}
v_{1} \\
v_{2}
\end{pmatrix}
$$
$$
\begin{pmatrix}
v_{1} \\
v_{2}
\end{pmatrix}
= (v_{1},v_{2})
$$
# Geometric Representations
Can represent vector in $2D$ or $3D$ space
- Draw arrow from origin to the coordinate of the vector
$$
\vec{v_{1}} = \begin{pmatrix}
2 \\
4
\end{pmatrix}, \vec{v_{2}} = \begin{pmatrix}
-3 \\
4
\end{pmatrix}
,
\vec{v_{3}} = \begin{pmatrix}
-4 \\
-5
\end{pmatrix}
$$

![[SmartSelect_20250228_150531_Samsung Notes.png]]

# Vector Addition
Add vector by coordinate-wise addition
$$
\vec{v} = \begin{pmatrix}
v_{1} \\
v_{2} \\
\end{pmatrix},
\vec{w} = \begin{pmatrix}
w_{1} \\
w_{2}
\end{pmatrix}
\to
\vec{v} + \vec{w} = \begin{pmatrix}
v_{1}+w_{1} \\
v_{2}+w_{2}
\end{pmatrix}
$$
![[SmartSelect_20250228_151048_Samsung Notes.png]]

# Scalar Multiplication
Multiply vector by a scalar $\to$ coordinate-wise
$$
\vec{v} = \begin{pmatrix}
v_{1} \\
v_{2}
\end{pmatrix},
a \in \mathbb{R}
\to
a \vec{v} = \begin{pmatrix}
av_{1} \\
av_{2}
\end{pmatrix}
$$
![[SmartSelect_20250228_151541_Samsung Notes.png]]
$|a| > 1 \to \text{"stretching"}$
$0<|a|<1 \to \text{"shrinking"}$
$a < 0 \to \text{"reversal of direction"}$

# Linear Combination of Vectors
Consider two vectors $v$ and $w$ and two scalars $c$ and $d$
Linear combinations combine vector addition and scalar multiplication
$cv+dw$ is a linear combination of $v$ and $w$
Example:
$$
\vec{v} = \begin{pmatrix}
1 \\
2
\end{pmatrix},
\vec{w} = \begin{pmatrix}
3 \\
-1
\end{pmatrix}
\to
2\vec{v} + 3\vec{w} = \begin{pmatrix}
11 \\
1
\end{pmatrix}
$$
Consider the vectors $v = (2,-1)^{T}, w=(-1,2)^{T}$, and $b=(1,0)^{T}$
- Express $b$ as a linear combination of $v$ and $w$
- Find real numbers $c$ and $d$ such that
$b = cv+dw$
$$
\begin{pmatrix}
1 \\
0
\end{pmatrix} = c\begin{pmatrix}
2 \\
-1
\end{pmatrix}
+d\begin{pmatrix}
-1 \\
2
\end{pmatrix}
$$
$$
\leftrightarrow 
$$
$$
\begin{align}
1= 2c-d  \\
0=-c+2d \\
\leftrightarrow ~ ~ ~ ~ ~ ~ ~ ~  \\
c = \frac{2}{3} \\
d = \frac{1}{3}
\end{align}
$$




