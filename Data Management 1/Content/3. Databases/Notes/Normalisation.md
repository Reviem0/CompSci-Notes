Normalisation is a process to avoid anomalies
It improves:
- Efficiency
- Maintenance
- Size

This is done by dividing the database into multiple tables and defining relationships between them

## Steps to Normalisation
- First normal form - atomicity, find keys
- Second normal form - remove partial dependencies
	- Non-Key attributes must depend on every part of the primary key
- Third normal form: remove transitive dependencies
	- No non-key attributes depend on another non-key attribute
- Boyce-Codd normal form: Stricter than 3NF
	- Every attribute must be a fact about a key

## 1st Normal Form
Relation must contain only atomic values
- Cannot be broken down any further
- Single values
- Cannot be composite, multi-valued or nested
- No objections, arrays etc
Have no repeating groups

## 2nd Normal Form
