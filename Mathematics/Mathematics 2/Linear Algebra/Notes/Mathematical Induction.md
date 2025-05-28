- Purpose:
	- Mathematical induction is a proof technique used to demonstrate that a given statement $S(n)$, is true for all natural numbers (or a subset of natural numbers, e.g. $n>n_{0}$).

To prove a statement $S(n)$ is true for all positive integers $n$, you must complete two crucial steps:
1. Base Case (or Basis Step): Show that the statement $S(n)$ is true for the initial value, usually $n=1$ (or a specified starting integer $n_{0}$).
2. Inductive Step:
	- Inductive Hypothesis: Assume that the statement $S(k)$ is true for some arbitrary positive integer $k$.
	- Prove for $S(k+1)$: Using the inductive hypothesis (that $S(k)$ is true), you must then show that $S(k+1)$ is true

---
# Examples
## Example 1 - Sum of odd numbers
Prove $1+3+5+\dots+(2n-1) = n^{2}$ for all natural numbers
- Base Case ($n = 1$)
	- LHS: $2(1) - 1 = 1$ 
	- RHS: $1^{2} = 1$
- Inductive Step:
	- Assume $1+3+\dots+(2k-1) = k^{2}$ is true for some integer $k$
	- Prove for $k+1$: We need to show $1+3+\dots+(2k-1)+(2(k+1)-1)=(k+1)^{2}$
		- Start with the LHS for $k+1: 1+3+\dots+(2k-1)+(2k+2-1)$
		- By the inductive hypothesis, replace $(1+3+\dots+(2k-1))$ with $k^{2}:k^{2}+(2k+1)$
		- Simplify: $k^{2}+2k+1 = (k+1)^{2}$
	- Since both steps are proven, the statement is true for all natural numbers

# Example 2: Divisibility
Prove $23^{n}-1$ is divisible by 11 for all natural numbers
 - Base Case ($n=1$):
	 - $23^{1}-$
