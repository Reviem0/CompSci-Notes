# Sed
sed is a **t**ext **s**tream **e**ditor
It **reads** inputs and **modifies** it as specified by a list of commands. The modified input is then written to the standard output.

Sed is most commonly used command is to substitute text with something else
Usage:
```bash
sed [option] command [file..]
```

## Examples
### Example 1:
```bash
echo Hello World | sed "s/Hello/Hi/l"
```
```output
> Hi World
```
The I flag allows you to substitute in a case insensitive manner
### Example 2:
Change delimiter character from comma to tab: csv to tsv

```bash
cat smallfile.csv | sed 's/,/\t/g'
```
The g flag allows you to substitute globally, not just the first instance of the match on each line.

## Other uses of sed
Besides substituting text, sed can also be used to
- print or delete specified lines in the input
- append a line following a pattern detected in the input (using \a command)
### Example 1: Inserts line following detection of pattern
```bash
sed '/pattern/a\line-to-append' input
```

### Example 2: Deletes from line number n to end of file
```bash
sed 'n,$d' input
```
