## Keys
A set of attributes forms a key for a relation if we do not allow two different tuples in a relation instance to have the same values in all the attributes of the key

Courses(**CourseID**, Name, DeptID)

## Functional Dependencies
Let a relation with schema $R(A_{1},\dots,A_{n},B_{1},B_{2},\dots,B_{m})$ and let $r$ be an instance of $R$

We say that $r$ satisfies the functional dependency $A_{1},\dots,A_{n} \to B_{1},B_{2},\dots,B_{m}$ if whenever two tuples in $r$ agree on the values of $A_{1},\dots,A_{n}$, then they also agree on the values of $B_{1},B_{2},\dots B_{m}$

In other words there are no two tuples in r that have the same value on the attributes of $A_{1},\dots A_{n}$, but differ on the values of $B_{1},B_{2},\dots B_{m}$.

## Superkeys
For a relation schema $R$, $X$ a set of attributes of $R$
$X$ is a superkey of $R$ if $X \to A_{i}$ for every attribute $A_{i}$ of $R$
Every relation has at least one superkey

