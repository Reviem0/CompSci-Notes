ADTS specify operations for accessing data structures without exposing implementation details. They are language independent.
**Purpose**:
- Declare intentions, not actions (limit usage to defined operations)
- Encapsulate implementation, allowing changes without affecting users
**Examples** Stacks, Queues, lists, sets, maps
**Key Principle:** Program to interfaces (ADT), not implementations
```Java
List<Integer> list = new ArrayList<>();
```
List is an interface object that implements List methods. ArrayList can therefore be swapped out for any List type such as LinkedList and the code will work fine without having to change every implementation of ArrayList in the code to LinkedList.

# Stacks
**LIFO**: Last In First Out structure
**Operations:**
```Java
push(item) // Add to the top
pop()      // Remove from the top
peek()     // View the top item
isEmpty()  // Check if Empty
```
**Implementation**:
- Arrays (fixed size, O(1) operations) or linked lists (dynamic)
**Uses:**
- Reversing Arrays
- Parsing Expressions (Balancing Parentheses)
- Evaluating arithmetic expressions `((7+3)/5)*(7-5)`
**Java Note:** Avoid `Stack<T>` (inherits from `Vector`); prefer `Deque<T>` for stacks

# Queues
**LIFO**: Last In First Out
**Operations**:
```java
enqueue(item) //Add to the rear
dequeue(item) //Remove from the front
peek():       //View the front item
isEmpty()
```
**Implementation**: Array (circular buffers) or linked lists
**Variants**
- **Deque**: Double-Ended Queue (add/remove from both ends)
- **Blocking Queue**: Supports Concurrency
**Java Note:** Use `Queue<T>` interface with `offer()`, `poll()`, and `peek()`

# Priority Queues
**Priority based access queues**: eg. smallest element first
**Operations:**
```Java
inset(item,priority)
findMin()
deleteMin()
```
**Implementation**:
- **Heap** (most efficient, O(log n) for insert/delete)
- Linked Lists or trees (less efficient)
**Uses**:
- OS scheduling
- Greedy algorithms (Prim's algorithm for MST)

# Lists, Sets, Maps
- **Lists**:
    - Ordered, allows duplicates.
        
    - Operations: `add(index)`, `remove(index)`, `get(index)`.
        
    - Java: `List<T>` with `ArrayList` (dynamic array) or `LinkedList` (node-based).
        
- **Sets**:
    
    - Unordered, no duplicates.
        
    - Operations: `add()`, `remove()`, `contains()`.
        
    - Java: `Set<T>` with `HashSet` (O(1) access) or `TreeSet` (sorted, O(log n)).
        
- **Maps**:
    
    - Key-value pairs (unique keys).
        
    - Operations: `put(key, value)`, `get(key)`, `remove(key)`.
        
    - Java: `Map<K,V>` with `HashMap` (fast) or `TreeMap` (sorted).
        
    - **Multimaps**: Allow multiple values per key.


