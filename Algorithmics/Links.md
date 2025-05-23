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
- Example: 
	- Adding `100` elements with initial capacity `10` $\to$ $\text{copies} = 10 +20 +40+80 = 150$ elements
	- Assume an array starts with capacity 10 and doubles when full:
		- **Add 10 elements**: No resize needed.
		- **Add 11th element**: Resize to 20 (copy 10 elements).
		- **Add 21st element**: Resize to 40 (copy 20 elements).
		- **Add 41st element**: Resize to 80 (copy 40 elements).
		- **Add 81st element**: Resize to 160 (copy 80 elements).
	- **Total copies** = 10 + 20 + 40 + 80 = **150 copies** for 100 elements.  
	- **Total operations** = 100 adds + 150 copies = **250 operations**.  
	- **Amortized cost per `add()`** = 250 / 100 = **2.5 operations** (constant time).

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
		- `contains(obj)`: `O(n)` traversal
		- `get(int i)`: `O(n)` no random access
	- Disadvantages: Slow for mid-list operations as it requires traversal
- Doubly Linked List (Java `LinkedList<T>`)
	- Nodes have a `next` and a `previous`
	- Supports `O(1)` add/remove at both ends.
	- Uses a dummy header node for edge-case simplification
# Stacks and Queues
- Stack
	- Implemented via linked list:
		- `push()`: Add to head `O(1)`
		- `pop()`: Removes from head `O(1)` 
- Queue
	- Requires **tail pointer** for `O(1)` enqueue
	- Dequeue: `O(1)` 
# Skip Lists
Purpose: Enable O(log n) search in ordered lists
Structure: Hierarchy of linked lists with "express lanes"
- Higher levels skip more elements (similar to binary search)
Use case: Faster than binary trees for concurrent access.
![[Pasted image 20250522181642.png]]
# When to Use Linked Lists
- Use Cases
	- Frequent insertions/deletions at **ends**
	- Line editors
- Avoid:
	- Random access or frequent mid-list operations (use arrays or trees).
	- Sorted lists

