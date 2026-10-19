---
type: lecture
module: "[[Foundations of Machine Learning]]"
week: 1
lecture: 2
order: 4
date: 2026-09-24
lecturer: ZZ
topic: Mathematical Foundations
status: todo
slides:
tags:
  - lecture
---
# Foundations of Machine Learning (Lecture 2)

> [!info] Foundations of Machine Learning · Week 1 · Tue 22 Sep 2026 · ZZ
> Status lives in the `status` property: `todo` → `in-progress` → `done`

## Summary
- 

## Notes
How do I write data and a model as numbers? -> **Linear Algebra**
What does "the best model" even mean. given noisy data? -> **Probability**
 How do I actually find the best model? -> Calculus

### Linear Algebra

| Size (sq ft) | Bedrooms | Price (£1000s) |
| ------------ | -------- | -------------- |
| 1500         | 3        | 300            |
| 1200         | 2        | 250            |
| 2000         | 4        | 450            |
Each house has two features (size, bedrooms), so each house becomes a **vector** in $\mathbb{R}^2$ : the first house is $x = \begin{bmatrix} 1500 &  3 \end{bmatrix}$. Stack all the houses as rows and you get the feature matrix X, which is: 
$$3 \times 2: \ n = 3\text{ rows (samples) by } d = 2\text{ columns (features)}$$
$$ X =
	\begin{bmatrix}
	1500 & 3 \\
	1200 & 2 \\
	2000 & 4
	\end{bmatrix}
$$
The prices go into a separate target vector 
$$
	y = \begin{bmatrix}
	300 \\
	250 \\
	450
	\end{bmatrix}
$$
The convention is rows are examples of data and columns are features. Nearly every ML library expects this data shape.
A linear model has one weight per feature, collected into a weight vector w. Its prediction for a single house is a **dot product**: multiply matching entries and add them up.
Worked Example:
Take $w= \begin{bmatrix} 0.2 \\  0\end{bmatrix}$, meaning "£200 per square foot, bedrooms don't matter"
For the first house:
$$
	\hat{y} = \begin{bmatrix}
	1500 & 3
	\end{bmatrix} \cdot \begin{bmatrix}
	0.2 \\
	0
	\end{bmatrix}
$$
$$
	\hat{y}=1500 \times 0.2 + 3 \times 0 = 300
$$
Dot product is a weighted sum. Each feature contributes in proportion to its weight.
Model for $w = \begin{bmatrix} 0.15  \\   25\end{bmatrix}$:
$$
	\begin{bmatrix}
	1500 & 3 \\
	1200 & 2 \\
	2000 & 4
	\end{bmatrix} \begin{bmatrix}
	0.15 \\
	25
	\end{bmatrix} = \begin{bmatrix}
	300 \\
	230 \\
	400
	\end{bmatrix}
$$
House 2 and 3 had incorrect predictions with House 3 being the worst. How do we model error into a number?
#### Norms: Measuring the size of a vector
Start by collecting all the errors into one residual vector
$$
	r = y - \hat{y} = \begin{bmatrix}
	300 \\
	250 \\
	450
	\end{bmatrix}
	- \begin{bmatrix}
	300 \\
	230 \\
	400
	\end{bmatrix}
	= \begin{bmatrix}
	0 \\
	20 \\
	50
	\end{bmatrix}
$$
A norm measures how big a vector is. There are two ways:
- L1 Norm: add up the absolute values $0+20+50=70$
	- L1 is "Manhattan" distance: how far you'd walk on a city grid.
- L2 Norm: square each entry, add them up, take the square root. $|r|_{2}= \sqrt{ 0+20^2+50^2} = 53.9$
	- L2 is ordinary straight-line (Euclidean) length. 
If you square the L2 norm and divide by n, you get $2900 / 3 = 967$, which is exactly the Mean Squared Error used by the cost function.
You can also take the norm of the **weights** w. Adding $\lvert w \rvert$ to the cost penalises large weights, which stops a model from contorting itself to fit noise. This is called regularisation. With the L2 norm it's **Ridge** regression, and with the L1 norm it's **Lasso**.

Suppose a second model has residuals $\begin{bmatrix}23 \\  23 \\  24\end{bmatrix}$. Its L1 norm is also 70, so L1 rates the two models as equally bad. Its L2 norm is about 40.4, so L2 rates the second model as clearly better. L2 squares the individual errors making large errors more extreme. The first model's errors are (0,20,50), one small one big. The second has three medium errors. Both add up to 70 in L1 however, in L2 they are treated as (0,400,2500) and (529,529,576). L2 punishes residuals that pile into one big error more than ones that spread it evenly.

#### Eigenvectors and Eigenvalues
Multiplying a vector by a matrix usually changes both its length and its direction. An **eigenvector** is a special vector whose direction the matrix leaves alone; it only gets stretched or shrunk. The stretch vector factor is the **eigenvalue** $\lambda$. T

### Probability
Data is noisy. The same house could sell for £300k or £310k depending on the day.  Probability is how we describe that uncertainty instead of ignoring it.
A **random variable** is a quantity whose value comes from a random process, such as a coin flip or a person's height. A probability distribution says how likely each value is:
- Bernoulli: two outcomes, like spam / not spam, governed by one parameter p (the probability of "yes")
- Gaussian (normal): the bell curve, for continuous values. Its centre is the mean $\mu$ and its with $\sigma$. 
Conditional Probability $P(A|B)$ means "the probability of A, given that we know B happened." the formula is: 
$$
	 P(A|B)=\frac{P(A \cap B)}{P(B)}
$$
Worked Example:
```
You have 100 emails:
- 30 are spam 70 aren't
- The word "free" appears in 12 of the spam emails and 8 of the non-spam ones.
Suppose an emails contains "free." What's the chance it's spam?
```
Within the 20 emails containing "free" 12 of them are spam:
$$
	\begin{align}
		P(\text{spam}) &= \frac{30}{100}=0.3 \\
		P(\text{free})&=\frac{20}{100} = 0.2	 \\
		P(\text{spam}|\text{free}) &= \frac{12}{20}=0.6 \\
		P(\text{spam}|\text{free})&=\frac{P(\text{spam} \cap \text{free})}{P(\text{free})} \\
		0.6 &= \frac{P(\text{spam} \cap \text{free})}{0.2}  \\
		0.12&=P(\text{spam}\cap\text{free}) \\
		P(\text{free}|\text{spam})&=\frac{P(\text{spam} \cap \text{free})}{P(\text{spam})} \\
		P(\text{free}|\text{spam})&= \frac{0.12}{0.3} = 0.4
	\end{align}
$$
#### The likelihood function and MLE
Earlier, likelihood meant $P(\text{evidence}|\text{hypothesis})$. Now we turn that around. Keep the data fixed and treat the probability as a function of the model's parameters $\theta$. The likelihood $L(\theta|D)$ asks: if the parameters were $\theta$, how probable would the data we actually saw have been?

**Maximum Likelihood Estimation** says to pick the $\theta$ that makes the observed data most probable. Notice what this does: "find the best model" becomes "find the maximum of a function." That's the bridge to calculus.

You flip a coin 10 times and get 7 heads. The parameter is p, the probability of heads (a Bernoulli parameter). Since the flips are independent, the probability of this exact sequence is:
L(p) = p⁷ (1 − p)³
Try some candidate values:
- If p = 0.5, L = 0.5¹⁰ ≈ 0.00098
- If p = 0.7, L = 0.7⁷ × 0.3³ ≈ 0.00222
So p = 0.7 explains the data more than twice as well as a fair coin and makes it the MLE.

### Calculus
The derivative $\frac{dJ}{d\theta}$ is the slope of a function at a point. 
Products like $p^7(1-p)^3$ are awkward to differentiate, so we take the logarithm. Because log is always increasing, the p that maximises log L also maximises L, and logs turn products into sums:
$$
	\begin{align}
	\log L(p) &= 7\log p + 3\log(1-p) \\
	\frac{d}{dp} \log L(p) &= \frac{7}{p} - \frac{3}{1-p}  \\
	0 &= \frac{7}{p} - \frac{3}{1-p}  \\
	p &= 0.7
	\end{align}
$$



## Questions to Follow Up
- [ ] 
