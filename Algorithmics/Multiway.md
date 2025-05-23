# B-Trees
- Purpose: Balanced multiway trees designed for efficient disk access. Crucial for databases with large datasets.
- Structure:
	- Each node can have up to $M - 1$ keys and $M$ children
	- Minimizes disk I/O by storing related data close (aligned with disk block size)