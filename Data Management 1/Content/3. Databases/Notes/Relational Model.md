Database: A collection of data organised in a particular way and managed by a DBMS
DBMS: Database Management System - A collection of software

## DBMS
A DBMS is a set of computer programs that support:
- at least one data model (a mathematical abstraction for representing data) to define a database and an associated high-level language to create and query the database
- ability to store and manage large amounts of persistent data
- transaction management, concurrency control
- access control
- resiliency
## Data Model
A collection (mathematical) concepts for describing data - how it is represented and structured in the database
- The relational model of data is the most widely used model today
- Every Data model has to come with a data language
	- for defining, updating, manipulating and retrieving data from its representation
A data language has two parts (**sublanguages**):
- Data Definition language (DML):
	- syntax for describing "database templates" in terms of the underlying data model
- Data manipulation language (DML)
	- for changing the data inside a database instance
	- insertion, deletion, update, retrieval/extraction/querying
## XML and Tree Structured Data
![[Pasted image 20250112213744.png]]
```xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"> 
	<xs:element name="breakfast">
		<xs:complexType>
			<xs:sequence>
				<xs:element name="food">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="description" type="xs:string" /> 
						</xs:sequence>
						<xs:attribute name="name" type="xs:string" use="required" /> 
						<xs:attribute name="price" type="xs:decimal" use="required" /> 
					</xs:complexType>
				</xs:element>
				<xs:element name="drink">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="name" type="xs:string" />
							<xs:element name="price" type="xs:decimal" />
							<xs:element name="description" type="xs:string" />
						</xs:sequence>
					</xs:complexType>
				</xs:element>
			</xs:sequence>
		</xs:complexType>
	</xs:element>
</xs:schema>
```

**Data Definition Language** for XML: [[XML#XML Schema|XML Schema]]
**Data Manipulation Language** for XML: [[XPATH| XPATH]]/XQUERY

## Relational Data Model
Formalism for data describing and representing data.
Formally, a relation is a subset of a cartesian product of sets
Informally, a relation can be seen as a table

Students:

| ID  | Name | DeptID |
| --- | ---- | ------ |
| ..  | ..   |        |
Depts

| ID  | Dept |
| --- | ---- |
| ..  | ..   |
Courses

| Course | DeptID | Name |
| ------ | ------ | ---- |
| ..     | ..     | ..   |
## Relations as subsets of cartesian product of sets
![[Pasted image 20250112232415.png]]


## Basic Notations from Discrete Mathematics
A k-tuple is an ordered sequence of k elements
- $(2,0,1)$ is a 3-tuple; $(a,b,a,a,c)$ is a 5-tuple, and so on
If $D_{1},D_{2},\dots D_{k}$ are sets:
- then the cartesian product $D_{1} \times D_{2} \dots \times D_{k}$
- is the set of all k-tuples $(d_{1},d_{2},\dots, d_{k})$
- such that $d_{i} \in D_{i}, for 1\leq i \leq k$

## Attributes and Tuples
Students(ID, Name,DeptID) 
- `{(123,Robert,ECS), (222,JohnDoe,EEE)}`
Courses(CourseID, Name, DeptID)
- `{(COMP1204,DataM,ECS)}`

