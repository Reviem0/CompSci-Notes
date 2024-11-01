A set is a collection of objects

The objects are sometimes referred to as elements or members

If a set is finite and not too large we can describe it by listing the elements in it. For example:

$$
A = \{0,1,8\}
$$
Sets are usually specified with curly braces
- $\{0,1\}$ is the set with elements 0 and 1
Order of elements is not importantt
- $\{0,1\}$ and $\{1,0\}$ denote the same set
Multiplicity of elements is not important
- $\{0,1, 0\}$ and $\{0,1\}$ denote the same set
We sometimes use dots as shorthand
- $\{0,1,...,9\}$ and $\{0,1,2,3,4,5,6,7,8,9\}$
Dots are sometimes used as shorhand for infinitely many elements
- $\{0,1,2,...\}$ is a set of positive integers
- $\{0,2,4,...\}$ is a set of even numbers

When an element $a$ is in a set $B$ we write $a\in B$
When an element $c$ is **NOT** in a set $B$ we write $a\notin B$
- $a \in \{b,a,c\}$
- $0 \in \{0,1\}$
- $i \notin \{t,e,a,m\}$

## Cardinality (Of finite sets)
For finite set, write $|X|$ for the number of elements of $X$
This is the cardinality of $X$

$$|\{0,1,2,3,4,5,6,7,8,9\}| = 10$$
$$|a,b,a,c| = 3$$ 
The set $|a,b,a,c| = 3$ has a cardinality of 3 because it has 3 unique elements


## Other Sets from Maths
$\mathbb{N} = \{0,1,2,...\}$ the **natural** numbers
$\mathbb{Z} = \{...,-2,-1,0,1,2,...\}$ the integers
$\mathbb{R}$ the reals
$\mathbb{C}$ the complex numbers

All these are examples of infinite sets

## Empty Set
If a set does not contain any elements it is called the empty set and is usually denoted $\emptyset$

$$|\emptyset| = 0 $$
## Elements of Different Types
A set may contain any kind of elements whatsoever
eg.
$$\{4.5, George, \pi, 14\}$$
A set may contain elements that are themselves sets
$$\{3,\{5,1\}, 12, \{\pi, 4.5, 40, 16\}\}$$
## Operations On Sets
### Unions of Sets:
$$A \cup B$$
### Intersection of Sets:
$$A \cap B$$
### Difference of Sets
$$B-A$$
## Predicate
A predicate $\varphi(x)$ is something that is either **true** or **false** about a member x of some universe. We say that it holds for $x$ or that $x$ satisfies $\varphi$ when $\varphi(x)$ is true.

Examples:
- $\varphi(x) =$ "$x$ is called Michael" probably holds for some people in the world and doesn't for most
- $\varphi(x) =$ "$x$ is an apple" is a predicate in the universe of fruit
- $\varphi(x) =$ "$x$ is even" is a predicate about the natural numbers
	- 2 satisfies $\varphi$, 741 does not


## Naive Set Theory
Given a predicate $\varphi$ we can construct a subset of a universe $x$ that contains the elements that satisft $\varphi$

The subset of $X$ that contains those elements that satisfy $\varphi$ is usually denoted
$$\{x|x\in X ~ \& ~ \varphi(x) \}$$
eg:
$$\{x|x\in \mathbb{N} \ \& \ x \ is \ even \} = \{0,2,4,...\}$$
$$\{x|x \in \mathbb{R} \ \& \ x^2+x-6 = 0\} = \{2.0,-3.0\}$$
## Elementary Operations on Sets
### Union
$$ X \cup Y = \{z|z\in X ~ or ~ z\in Y\}$$
- Associative ($X \cup (Y \cup Z) = (X \cup Y) \cup Z$) 
- Commutative ($X \cup Y=Y\cup X$)

### Intersection
$$X \cap Y = \{z|z\in X ~ and ~ z \in Y\}$$
- Associative and Commutative

### Difference
$$X-Y=\{z|z \in X ~ ~ \text{and} ~ z \notin Y\}$$
- Not associative and Not Commutative

### Union and Intersection Cardinality
$$
| A \cup B | = |A| + |B| - |A \cap B|
$$
$$
|A \cup B| \leq |A| + |B|
$$
### Mixing Unions and Intersections
$$
A \cup (B \cap C) = (A \cup B) \cap (A \cap C)
$$
![[Pasted image 20241101212605.png]]
$$
A \cap (B \cup C) = (A \cap B) \cup (A \cap C)
$$
![[Pasted image 20241101213132.png]]
### Distributive Property
![[Pasted image 20241101213619.png]]

### Union and Intersection Simplification
#### Example 1:
Here is a statement:
$$
\text{"I only cycle in the summer or in the winter when it's warmer than $20^{\circ}  ~\text{Celcius}$"}
$$

![[Pasted image 20241101214101.png]]
$$
\text{Summer} \cup (\text{Winter} ~ \cap > 20^\circ C)
$$
Using the [[#Distributive Property]], we can simplify to:
$$
\text{(Summer or Winter) and (Summer or} > 20^\circ C)
$$
(Summer or Winter) refers to all days so this can be simplified to just:
$$
\text{(Summer or} > 20^\circ C)
$$
So the statement:
$$
\text{"I only cycle in the summer or in the winter when it's warmer than $20^{\circ}  ~\text{Celcius}$"}
$$
can be simplified to:
$$
\text{"I cycle any day of the year but only when it's summer or $ >20^{\circ}  ~\text{Celcius}$"}
$$
#### Example 2:
Here is a statement
$$
\text{I only wear white or blue shirts}
$$
![[Pasted image 20241101215058.png]]
$$
\text{Shirts} \cap (\text{Blue} \cup \text{White})
$$
Using the [[#Distributive Property]], we can simplify to:
$$
\text{(Shirts $\cup$ Blue) $\cap$ (Shirts $\cup$ White) }  
$$
or:
$$
\text{(Blue shirts) or (White Shirts)}
$$
So this statement can simplify to:
$$
\text{"I only wear blue shirts or white shirts"}
$$
## Proofs of Sets
### Example 1:
Prove the following:
$$
A \cup (B \cap C) = (A \cup B) \cap (A \cap C)
$$
Proof:
We will show:
$$
A \cup (B \cap C) \subseteq (A \cup B) \cap (A \cup C)
$$
and:
$$
(A \cup B) \cap (A \cup C) \subseteq A \cup (B \cap C)
$$
Suppose we have an element: $$x \in A \cup (B \cap C)$$ Then either: $x \in A$ **OR** $x \in (B \cap C)$
In either case, $x \in (A \cup B)$ **AND** $x \in (A \cup C)$

Hence,
$$
A \cup (B \cap C) \subseteq (A \cup B) \cap (A \cup C)
$$

Now suppose
