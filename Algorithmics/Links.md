# Arrays
Advantages:
- Contiguous Memory $\to$ `O(1)` random access
- Efficient memory use (low overhead)
- Best for frequent read operations
Disadvantages:
- Fixed size (resizing requires copying `O(n)`)
- Insertion/deletion in the middle: `O(n)` time.

**Dynamic Arrays**
Resizing (doubling) leads t