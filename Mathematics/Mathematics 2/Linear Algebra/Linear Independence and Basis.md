# Linear Dependence and Independence
![](https://www.youtube.com/watch?v=t-HS7uxNgE4)

# Span of a Set Vector
![](https://www.youtube.com/watch?v=ZvlaIEE7ZC4)


# Basis
A **basis** B of a vector space V is a set of vectors that satisfies two conditions:
1. The vectors in B are **linearly independent**.
2. The vectors in B **span** the entire vector space V (i.e., span(B)=V).

A basis provides a way to uniquely write any vector in the space as a linear combination of the basis vectors.

![](https://www.youtube.com/watch?v=BVnbsO-8So8&list=PLztBpqftvzxWT5z53AxSqkSaWDhAeToDG&index)
The **dimension** of a vector space V is the **number of vectors** in any basis for V. For example, R2 has a dimension of 2, and Rd has a dimension of d.

**Example from the lecture (checking for a basis):** Are v![](data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="0.471em" height="0.714em" style="width:0.471em" viewBox="0 0 471 714" preserveAspectRatio="xMinYMin"><path d="M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z"></path></svg>)1​=(21​) and v![](data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="0.471em" height="0.714em" style="width:0.471em" viewBox="0 0 471 714" preserveAspectRatio="xMinYMin"><path d="M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z"></path></svg>)2​=(41​) a basis for R2?

1. **Linear Independence:** Check if v![](data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="0.471em" height="0.714em" style="width:0.471em" viewBox="0 0 471 714" preserveAspectRatio="xMinYMin"><path d="M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
    3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
    10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
    -1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
    -7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
    H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
    c-16-25.333-24-45-24-59z"></path></svg>)1​=αv![](data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="0.471em" height="0.714em" style="width:0.471em" viewBox="0 0 471 714" preserveAspectRatio="xMinYMin"><path d="M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
    3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
    10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
    -1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
    -7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
    H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
    c-16-25.333-24-45-24-59z"></path></svg>)2​. 2=4α⇒α=1/2 1=α⇒α=1 Since 1/2=1, they are linearly independent.
    
2. **Span R2:** Can any arbitrary vector v![](data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="0.471em" height="0.714em" style="width:0.471em" viewBox="0 0 471 714" preserveAspectRatio="xMinYMin"><path d="M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
    3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
    10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
    -1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
    -7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
    H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
    c-16-25.333-24-45-24-59z"></path></svg>)=(xy​) in R2 be written as α1​v![](data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="0.471em" height="0.714em" style="width:0.471em" viewBox="0 0 471 714" preserveAspectRatio="xMinYMin"><path d="M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
    3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
    10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
    -1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
    -7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
    H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
    c-16-25.333-24-45-24-59z"></path></svg>)1​+α2​v![](data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="0.471em" height="0.714em" style="width:0.471em" viewBox="0 0 471 714" preserveAspectRatio="xMinYMin"><path d="M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
    3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
    10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
    -1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
    -7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
    H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
    c-16-25.333-24-45-24-59z"></path></svg>)2​? x=2α1​+4α2​ y=α1​+α2​ Solving this system (e.g., α1​=y−α2​ and substitute) gives: α1​=2y−x/2 α2​=x/2−y Since you can find α1​,α2​ for any x,y, they span R2. Conclusion: Yes, they form a basis for R2.