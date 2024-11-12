# Grep
Grep is a command to search input given to it.
It looks for liens in the input that match a particular **pattern** or **regular expression**

Usage:
```bash
grep pattern input
```


This pattern can be constructed from [[Regular Expressions]]
![[Regular Expressions]]

## Examples
### Example 1:


Find all lines containing Southampton in a website on Alan Turing
```bash
curl https://www.mub.eps.manchester.ac.uk/science-engineering/2020/02/20/alan-turing-did-you-know/ | grep 'Southampton'
```

### Example 2:
Filter data to find number of studies in optics in this link:
[site](https://www.nobelprize.org/prizes/lists/all-nobel-prizes-in-physics/all/)

```bash
curl https://www.nobelprize.org/prizes/lists/all-nobel-prizes-in-physics/all/ | grep optic | wc -l
```
