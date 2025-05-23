## Input / Output Redirection ("Piping")
Bash shell allocates 3 files descriptors for each process
- STDIN is opened for keyboard input
- STOUD, STDERR to screen output

Programs (or filters) can output to other programs (this is called Piping)

**program_1 | program_2**
- program 1's output becomes program_2;s input
**program_1 > file.txt**
- program_1's output and error logs are written to a file called "file.txt"
- We can use >> instead of > to append to end of file.txt
**program_1 < input.txt**
- program_1 gets its input from a file called "input.txt"

## Pipes and filters
A filter is a program which accepts textual input and transforms it in some way
Filters can be connected together by pipes.
Filters can be thought of as building blocks to be easily put together to do what you want

![[Pasted image 20241107031713.png]]

### Example Filters
- **head** - view the first 10 lines of data
- **tail** - view the last 10 lines of data
- **sort** - Organise the data into order
- **wc** - Print a count of number of lines, words, and characters
- **uniq** - remove duplicate lines
- **du** - Estimate file space usage
- **xargs** - Builds and executes command lines from standard inputs
![[Pasted image 20241107031929.png]]
## Useful commands
- **find** - search for files in a directory hierarchy
- **tar** - create a file archive / extract from a file archive
- **gzip** - used to compress files
- **nohup** - A way to run a command in the background
- **parallel** - a tool used to run jobs in parallel
- **basename** - strip directory and extension from filename