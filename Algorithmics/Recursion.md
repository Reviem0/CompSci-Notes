# Recursion Fundamentals
- Definition: Solving a problem by breaking it into smaller, self-similar subproblems until reaching a trivial base case.
- Structure:
	- **Base Case**: Simple, non-recursive solution (`O! = 1`)
	- **Recursive Clause**: Self-referential step (e.g. $n! = n \times n(-1)!$)
- Relation to induction: Recursive algorithms mirror mathematical induction (base case verification + inductive step)
# Recursive Programming Examples
**Factorial**
```java
public static long factorial(long n) {
    if (n == 0) return 1; // Base case
    return n * factorial(n - 1); // Recursive step
}
```
Time Complexity: `O(n)` linear due to `n` multiplications
**Integer Power**
```java
public static double power(double x, long n) {
    if (n == 0) return 1;
    if (n % 2 == 0) {
        double half = power(x, n/2);
        return half * half;
    } else {
        return x * power(x, n - 1);
    }
}
```
