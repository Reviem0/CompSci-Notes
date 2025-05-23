# Heap Basics
- Definition: A (min-)heap is a complete binary tree where:
	- Every level (except the last) is fully filled, and the last level is filled left-to-right
	- Every child's value is $\geq$ parent's value (for a min-heap; reverse for max-heap)
- Key Property: The root is the smallest (min-heap) or largest (max-heap) element.

# Heap Operations
- Adding an Element:
	- Place the new element in the next available position
	- Percolate Up: Swap the element with its parent until the heap property restored.
- Removing the Minimum (removeMin)
- Replace the root with the last element in the heap.
- Percolate Down: Swap the element with the smaller child (for min-heap) until the heap property holds

# Array Implementation
- Mapping Tree to Array:
- Root at index `0`
- For a node at index `k`:
	- Parent $\left\lfloor  \frac{k-1}{2}  \right\rfloor$ 
	- Left Child: $2k + 1$
	- Right Child: $2k+2$
- E.g. The array $[2, 5, 12, 8, 7, 13, 17, ...]$ represents:
![[Pasted image 20250523004834.png]]
# Priority Queues
- **Interface**:
	- `add(element, priority)`: Insert into the heap
	- `getMin() / removeMin()`: Retrieve/remove the smallest element
- Use Cases: Greedy algorithms, task scheduling (operating systems)

# Heap Sort
- Steps:
	1. Build a heap from the input array
	2. Repeatedly remove the root (mix/max) and place it at the end of the sorted array
- Time Complexity: $O(n \log n)$ for all cases.
- In-Place Heap Sort: uses the input array as storage (avoids extra memory)
