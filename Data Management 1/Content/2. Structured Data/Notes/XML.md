Metadata is machine readable data stored alongside the main content.

## SGML: Standard Generalised Markup Language
SGML is an ISO standard for defining Markup Languages (1986)
- Superset of all markup languages
- Separates structure  from content
- Metalanguage: Describing formatting and markup languages
- Tags:
```xml
<tag> Example </tag>
```
- Attribute:
```xml
<tag attribute = "value">
```

- Content:
```xml
<tag> Content Goes Here </tag>	
```

Common Subsets of SGML:
- XML
- HTML
- OED (Oxford English Dictionary)
## SGML to XML
SGML is very flexible:
- You can do a lot
- But it is very complex
- No strict structure
- A lot of things had to be inferred
- Requires a definition of the structure as well as the SGML itself
XML was designed to be less flexible
- Easier and more efficient to parse
- Simplifies SGML, while keeping the bits that were needed
- Data can be delivered without a definition of structure

## XML Syntax
- All XML elements must have a closing tag
- XML tags are case sensitive
- XML elements must be properly nested
- XML Documents must have a root element
- XML attributes must be quoted e.g 
```xml 
<tag attr = "...">
```
## Elements or Attributes
We can use:
```xml
<tag property="something">
```
or
```xml
<tag><property>something</property></tag>
```
Which should we use?
- There is no strict definition
- Generally, use an attribute if it's 'meta-data' rather than data
- Use an element if it is in a relationship with its parent and could exist outside the tag - or if it's something that you might need to know the metadata of
## HTML
HTML is an application of SGML
- HTML tells you how to display tags, wheras XML tells you what the data means
- Rules based on tags (e.g. b = bold)
XHTML is an application of XML (more restrictive than SGML)

Modern HTML5 while based on the ideas of SGML is **not** SGML
- Not all tags need closing tags (e.g. img)
- Special tags (e.g. !doctype)
- Automatic escaping (e.g. inside script) 
- Attributes without values
- Multiple top-level elements

Valid HTML5
```HTML
<!doctype html> 
<title>a</title>
<p>My first paragraph 
<p>My second paragraph <form method=post>
<input type="text" disabled>
<script><a></script>
</form>
```
![[Pasted image 20250112201823.png]]

## Namespaces
XML files can reference and include other XML files
You define your own tags for your things, but other people may also define tags with the same name, which are different to yours
- What would happen if you have a Person and they have a Person, but with different properties?

A namespace is a way to avoid element name conflicts by qualifying names with a unique identifier, typically URI (**Uniform Resource Identifier**). It allows XML documents to contain elements and attributes with multiple definitions without ambiguity.

Namespaces are declared using the xmlns attribute in the start tag of an element
```xml
<element xmlns:prefix="namespaceURI">
  <!-- Elements and attributes -->
</element>
```
- `prefix`: A short, custom label that is used within the document to refer to the namespace
- `namespaceURI`: A URI that serves as a unique identifier for the namespace.
### A Problem
```xml
<Employee>
	<Person name = "Joe">
		<Wife/> 
		<Kids> 
			<Kid name = "Little Joe"/>
			<Kid name = "Middle Joe"/>
			<Kid name = "Big Joe"/> 
		</Kids> 
	</Person> 
	<Person id = "P106111101">
		<Value>16B00</Value> 
		<ButtonsPressed>647</ButtonsPressed> 
	</Person>
</Employee> 
```
There are 2 completely different definitions of a person here
- How Joe sees himself
- How the company sees Joe
We can't easily parse it or handle it, we can't validate it

### A Solution
```xml
<Employee xmlns:personal="https://buttonfactory/personal"
xmlns:work="https://buttonfactory/work">
<!-- Personal Person -->
	<personal:Person name="Joe"> 
		<personal:Wife/> 
		<personal:Kids>
			<personal:Kid name="Little Joe"/> 
			<personal:Kid name="Middle Joe"/>
			<personal:Kid name="Big Joe"/> 
		</personal: Kids>
	</personal: Person>
<!-- Work Person -->
	<work:Person id="106111101">
		<work:Value>18000</work:Value>
		<work:Buttons Pressed>647</work:ButtonsPressed>
	</work: Person>
</Employee>
```

## XML Schema
(unfinished)