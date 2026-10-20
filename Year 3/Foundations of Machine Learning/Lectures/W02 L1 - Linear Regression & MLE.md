---
type: lecture
module: "[[Foundations of Machine Learning]]"
week: 2
lecture: 1
order: 3
date: 2026-09-29
lecturer: ZZ
topic: "Linear regression, maximum likelihood estimation, regularization, variance-bias decomposition"
status: todo
slides:
tags:
  - lecture
---
# Linear Regression & MLE (Lecture 1)

> [!info] Foundations of Machine Learning · Week 2 · Tue 29 Sep 2026 · ZZ
> Status lives in the `status` property: `todo` → `in-progress` → `done`
> Week topics: Linear regression, maximum likelihood estimation, regularization, variance-bias decomposition

## Summary
- 

## Notes
### Likelihood
Likelihood is the probability of data occurring given parameters $\theta$ 
$$
	L(\theta;D) = p(D|\theta)
$$
Suppose you flip a coin three times and get **H, H, T**. Let $\phi$ be the probability of heads. If you assume the flips are independent, the probability of this exact sequence is
$$p(D \mid \phi) = \phi \cdot \phi \cdot (1-\phi) = \phi^2(1-\phi)$$
The data are now **fixed**, because you've already seen them. What varies is $\phi$. When we read $p(D\mid\phi)$ as a function of $\phi$, we call it the **likelihood**, $L(\phi; D)$.

If the data points $D = \{x_{1},\dots,x_{n}\}$ are independent and identically distributed the likelihood is the product of individual probabilities:
$$
	L(\theta;D)=\prod_{i=1}^N p(x_{i}|\theta)
$$
Working with products is hard as derivatives can be messy and the product of small probabilities can lead to numerical underflow.
Instead, Maximize the **log-likelihood** instead.

Example 1: Bernoulli MLE - Biased Coin
Problem: We toss a coin N times. Let NH be the number of heads and NT be the number of tails. Let ϕ be the unknown probability of heads. Find the MLE for ϕ.
The likelihood of a single toss is 
$$
	p(x|\theta)= \theta^x(1-\theta)^{1-x}
$$
Where x =1 for heads, x = 0 for tails.
The likelihood of an entire sequence is:
$$
	L(\phi) = p(D|\phi) = \phi^H(1-\phi)^T
$$
Where H is the number of Heads and T is the number of Tails in the sequence

$$
	\begin{align}
	\mathcal{L}(\phi) &=\log L(\phi) = H\log \phi+T\log(1-\phi) \\
	\frac{d\mathcal{L}}{d\phi}&=\frac{H}{\phi}-\frac{T}{1-\phi} \\
	0&=\frac{H}{\phi}-\frac{T}{1-\phi} \\
	\phi&=\frac{H}{H+T}
	\end{align}
$$
Example 2: MLE for Univariate Gaussian
When data is continuous, like people's height, and the model has two parameters: the mean $\mu$ and the variance $\sigma^2$.

The recipe is the same: write the log-likelihood, differentiate, set to zero. The new part is that there are two parameters, $\mu$ and $\sigma^2$, so we take **partial derivatives**, one parameter at a time, treating the other as a constant.
The density of a gaussian is 
$$
	\LARGE p(x_{i}|\mu,\sigma^2)=\frac{1}{\sqrt{ 2\pi \sigma^2 }}e^{-\frac{{(x_{i}-\mu)^2}}{2\sigma^2}}
$$
We take the log and find its derivative and set to 0:
$$
	\begin{align}
		\log p(x_{i}|\mu,\sigma^2)&=-\frac{1}{2}\log(2\pi \sigma^2)-\frac{(x_{i}-\mu)^2}{2\sigma^2} \\
		L(\mu,\sigma^2)&= -\frac{N}{2}\log(2\pi \sigma^2)-\frac{1}{2\sigma^2}\sum_{i=1}^N(x_{i}-\mu)^2 \\
		\frac{dL(\mu,\sigma^2)}{d\mu}&=\frac{1}{\sigma^2}\sum_{i=1}^N(x_{i}-\mu) \\
		0 &=  \frac{1}{\sigma^2}\sum_{i=1}^N(x_{i}-\mu) \\
		0 &= \sum_{i=1}^N(x_{i}-\mu) \\
		0 &= \sum_{i=1}^N(x_{i})-N\mu \\
		\mu &= \frac{\sum_{i=1}^N (x_{i})}{N}
	\end{align}
$$
For $\sigma^2$ we do the same, except we perform the following substitutions:
$$
	\begin{align}
	S &= \sum(n_{i}-\mu)^2 \\
	v &= \sigma^2
	\end{align}
$$
$$
	\begin{align}
	 L(v)&= -\frac{N}{2}\log(2\pi) - \frac{N}{2}\log v -\frac{S}{2v} \\
	  \frac{dL}{dv}&= -\frac{N}{2v}+\frac{S}{2v^2} \\
	  0&= -\frac{N}{2v}+\frac{S}{2v^2} \\
	  \frac{N}{2v}&= \frac{S}{2v^2} \\
	  Nv&=S \\
	  v&=\frac{S}{N} \\
	  \sigma^2&=\frac{\sum(x_{i}-\mu)^2}{N}
	\end{align}
$$

## Key Terms & Equations
- 

## Questions to Follow Up
- [ ] 
