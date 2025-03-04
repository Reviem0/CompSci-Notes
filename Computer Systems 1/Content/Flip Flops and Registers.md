**Flip Flops** store one bit and are asynchronous digital circuits
**Registers** store the data being worked on in CPUs, are the fastest type of storage and are made of flipflops

## D-Type Flip Flop
A D-Type Flip flop has only a data input and no set/reset.1 It acts like a delay or a 1 bit store.1 The state of a D-Type Flip flop only changes when the clock is high.2 An edge-triggered D-Type Flip flop is better than one where the state changes when the clock is high.2 An edge-triggered D-Type Flip flop only changes state when the clock changes from low to high or from high to low. 

## Registers
A register is a group of flip-flops that can store multiple bits
More registers can help speed up complex calculations
## Shift Registers
A shift register "shifts" its output once every clock cycle
**SI** is an input that supplies a new bit to shift "into" the register
For example, if on some positive clock edge we have:
$$
\begin{align}
{SI = 1} \\
Q_{0}-Q_{3} = 0110
\end{align}
$$

The next state will be
$$
Q_{0}-Q_{3} = 1011
$$
The current $Q_{3}$ ($0$ in this example) will be lost on the next cycle

Shift Registers are used to convert between "serial data" and "parallel data"
Computers usually work with multiple bits at a time, however it is sometimes necessary to send or receive data "serially", or one bit at a time such as:
- Input devices such as keyboard and mouse
- Any serial port: USB,SATA or PCIe lanes
- Some sensors

## Registers in CPUs
About 16 registers are needed in a CPU
Fewer leads to more memory references
- If code needs to free up a register, it has to copy its data to RAM
But they take up processor silicon area

Registers need to be: 
- Large enough to hold a full word. Typically:
	int = 32 bits
	long int = 64 bit
	float = 32 bit
	double = 64 bit
- Large enough to hold a full address
	e.g. 32 bits could address 4GB
	More is needed for larger RAM but a scheme is used to split it into sections

## Condition Code Registers
Sets of individual bits
Can be read by programs
Cannot be set by programs

## Status/FLAGS register
A set of bits with separate meanings eg:
- Condition Codes
- Sign of last result
- Zero
- Carry
- Equal
- Overflow
- Interrupt Enable/Disable
- Supervisor
