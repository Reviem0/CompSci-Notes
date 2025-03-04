## Combinatorial Circuits
Interconnected set of gates whose output at any time is a function only of the input at that time.
Consists of $n$ binary inputs and $m$ binary outputs. Can be defined in 3 ways:
- **Truth Table:** For each of the $2^{n}$ possible combinations of input signals, the binary value of each of the $m$ output signals is listed.
- **Graphical Symbols:** The interconnected layout of gates is depicted
- **Boolean Equations:** Each output signal is expressed as a Boolean function of its input signals.

## Boolean Equations (in Logic Notation)
To write logic easily, $+$, $\bullet$  and  $\bar{}$  are used for OR/AND
$C = A + B$  means A OR B
$C = A \bullet B$   means A AND B
$A = \bar{B}$            means NOT B
Not is sometimes typed as $/B$ or $\neg$

## How logic relates to electronics
$0$ is usually $0$ Volts ( but really means "low" Voltage )
$1$ is usually power supply voltage ( but really means "high" Voltage )

## Truth Tables
AND
$Y = A \bullet B$

| A   | B   | Y   |
| --- | --- | --- |
| $0$ | $0$ | $0$ |
| $0$ | $1$ | $0$ |
| $1$ | $0$ | $0$ |
| $1$ | $1$ | $1$ |
![[Pasted image 20250114095138.png]]

OR
$Y = A+B$

| A   | B   | Y   |
| --- | --- | --- |
| $0$ | $0$ | $0$ |
| $0$ | $1$ | $1$ |
| $1$ | $0$ | $1$ |
| $1$ | $1$ | $1$ |
![[Pasted image 20250114095147.png]]
NOT
$Y = \bar{A}$

| A   | Y   |
| --- | --- |
| $1$ | $0$ |
| $0$ | $1$ |
![[Pasted image 20250114095207.png]]
NAND
$Y = \overline{A\bullet B}$

| A   | B   | Y   |
| --- | --- | --- |
| $0$ | $0$ | $1$ |
| $0$ | $1$ | $1$ |
| $1$ | $0$ | $1$ |
| $1$ | $1$ | $0$ |
![[Pasted image 20250114095225.png]]
NOR
$Y = \overline{A+B}$

| A   | B   | Y   |
| --- | --- | --- |
| $0$ | $0$ | $1$ |
| $1$ | $0$ | $0$ |
| $0$ | $1$ | $0$ |
| $1$ | $1$ | $0$ |
![[Pasted image 20250114095232.png]]

EXOR (Exclusive OR)
$Y = A \oplus B$ 
Can be made from basic logic:
$A \oplus B = (A+B) \bullet (\overline{A \bullet B})$
$A\oplus B = (A \bullet \bar{B}) + (B \bullet \bar{A})$

| A   | B   | Y   |
| --- | --- | --- |
| $0$ | $0$ | $0$ |
| $1$ | $1$ | $1$ |
| $1$ | $0$ | $1$ |
| $1$ | $1$ | $0$ |
![[Pasted image 20250114095946.png]]

## Gates can have multiple inputs
![[Pasted image 20250114100022.png]]
![[Pasted image 20250114100026.png]]

## FPGAs
**Field Programmable Gate Arrays** can have millions of gates
Up to 1GHz
Can have a CPU or DSP in already or drop a soft-core into it
use software to program them
Build from MATLAB
Some cloud systems use them to accelerate functions