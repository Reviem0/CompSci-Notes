XPath - or the XML Path Language - is a query language with hierarchic addressing, that we can use to address parts of an XML Document

```XML
<Pizzas>
    <Pizza name="Margherita">
        <Base>Thin and Crispy</Base>
        <Cheese>Cheddar</Cheese>
        <Toppings>
        </Toppings>
    </Pizza>
    <Pizza name="American Hot">
        <Base>Deep Dish</Base>
        <Cheese>Cheddar</Cheese>
        <Toppings>
            <Topping>Pepperoni</Topping>
            <Topping>Jalapeno</Topping>
            <Topping>Chilli</Topping>
        </Toppings>
    </Pizza>
    <Pizza name="Hawaiian">
        <Base>Thin and Crispy</Base>
        <Cheese>Mozzarella</Cheese>
        <Toppings>
            <Topping>Ham</Topping>
            <Topping>Pineapple</Topping>
        </Toppings>
    </Pizza>
</Pizzas>
```
## Getting a Node
The root node starts at `/`, and `/` is used to separate each part of the path\
So if we use `/Pizzas/Pizza/Base` on the above we would get:
```XML
<Base>Thin and Crispy</Base>
<Base>Deep Dish</Base>
<Base>Thin and Crispy</Base>
```
The query returns:
- The Element(e.g. `{XML} <Base> ... </Base>`)
- All the elements that match. not just the first
## Indirect Nodes
We can also use `//` to get a matching element, no matter what it's child of.
We can also use `//` in the middle of a path. So `/Pizzas//Topping` would give:
```XML
<Topping>Pepperoni</Topping>
<Topping>Jalapeno</Topping>
<Topping>Chilli</Topping>
<Topping>Ham</Topping>
<Topping>Pineapple</Topping>
```

## Attributes and Text
In the same way we address elements, we can address an element's attributes in the path.
To do this, the prefix `@` is used.

So, for example, `//Pizza/@name` will give:
```
name=Margherita
name=American Hot
name=Hawaiian
```
This returns the attribute as a whole instead. To get the content of an element, we can include text() in the path such as `//Cheese/text()`
```
Cheddar
Cheddar
Mozzarella
```
## Numerical Referencing
XPath is `1-indexed`
So, `//Pizza[1]` will return the first pizza:
```XML
<Pizza name="Margherita"> 
	<Base>Thin and Crispy</Base> 
	<Cheese>Cheddar</Cheese> <Toppings> 
	</Toppings> 
</Pizza>
```

You can also use `//Pizza[last()]` to get the last element of a list
`//Pizza[last()-1]//Topping[1]` returns:
```XML
<Topping>Pepperoni</Topping>
```

## Filtering
Elements can also be filtered by their nodes, attributes or text
### By Node
We can use filters to get only elements that contain certain child elements (without returning the children themselves)

If we didn't want to count plain cheese pizza as a 'proper' pizza, we could use `//Pizza[Toppings/Topping]` to return only pizzas that contain at least one topping
```XML
<Pizza name="American Hot"> 
	<Base>Deep Dish</Base> 
	<Cheese>Cheddar</Cheese> 
	<Toppings> 
		<Topping>Pepperoni</Topping> 
		<Topping>Jalapeno</Topping> 
		<Topping>Chilli</Topping> 
	</Toppings> </Pizza> 
<Pizza name="Hawaiian"> 
	<Base>Thin and Crispy</Base> 
	<Cheese>Mozzarella</Cheese> 
	<Toppings> 
		<Topping>Ham</Topping> 
		<Topping>Pineapple</Topping> 
	</Toppings> 
</Pizza>
```

### By Attribute or Text
The query `//Topping[text() = "Ham"]` would return all toppings where the content is "Ham".
We can also filter on the value of attributes, using `<`, `>`, `=`, and so on. If we wanted to find cheaper pizzas and the XML had a `cost` attribute, we could filter using `//Pizza[@cost<12]`

You can also **combine** these filters with Boolean operators (such as `or`)

### Navigation
Much like a filesystem, we can also use `.` and `..` in order to navigate back "up" the path, after filtering on (for example) a child element's attribute.

To find out the name of all pizzas that contain Ham, we could write: `//Topping[text()="Ham"]/../../@name`

## Summary
**Getting a node:** `/path/to/element`
**Getting all nodes:** `//Node, //*, /Node/*/Node2`  
**Indirect nodes:** `/Node1//Node3`  
**Getting attributes:** `/Node/@Attribute`  
**Getting text:** `/Node/text() ` 
**Getting all text:** `//text()`  
**Numerical referencing:** `/Node[n]`  
**Filtering by node:** `//Node1[Node2] ` 
**Filtering by attribute:** `//Node1[@Attribute=“Value”] ` 
**Boolean logic:** `//Node` | `//Node2`, `//Node[@id=1 or @id=2]`  
**Navigation:** `.` and `..`  
**String functions:** `contains()`, `string-length()`,` starts-with()` etc.