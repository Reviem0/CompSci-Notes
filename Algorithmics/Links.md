# Arrays
Advantages:
- Contiguous Memory $\to$ `O(1)` random access
- Efficient memory use (low overhead)
- Best for frequent read operations
Disadvantages:
- Fixed size (resizing requires copying `O(n)`)
- Insertion/deletion in the middle: `O(n)` time.

**Dynamic Arrays**
- Resizing (doubling) leads to **amortized** `O(1)` cost for `add()`
- Example: Adding `100` elements with initial capacity `10` $\to$ $\text{copies} = 10 +20 +40+80 = 150$ elements

# Linked Lists
- Singly Linked List:
	- Node structure:
	```java
	class Node<T> {
		T element;
		Node<T> next;
	}
	```
	- Key Methods
		- `add(element)`: `O(1)` adds to head
		- `removeHead()`: `O(1)`
		- `contains(elem`