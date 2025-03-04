## CPU Functions

- Data processing
- Data Storage
- Data Movement
- Control
![[SmartSelect_20241007_140444_Files.png]]
# Instructions
CPU families have different instruction sets
So x86, ARM, MIPS, Risc V etc can not run each other's machine code
We usually write high level code and compile it for a specific architecture


# Instruction Cycle
CPU must:
- Fetch Instructions
- Decode/Interpret instruction
- (Fetch data)
- Process data
- (Write data)

# Clock
A "Clock" drives the steps in the processor
Systems are synchronous - i.e. everything happens on the clock "edge"
In a 1GHz clock, a clock edge happens every nanosecond

# Instruction store
The control unit has a special register:
PC = Program counter
- Contains the address of the instruction to run
with 32 bit instructions PC increments by 4 bytes after each instruction
64 bit CPU would increment by 8 to get to the next instruction

![[SmartSelect_20241007_141417_Samsung Notes.png]]
# Special registers
Program counter (PC)
- Containts the address of an instruction to be fetched
Instruction register (IR)
- Contains the instruction that has recently been fetched
Memory Address Register (MAR)
- Contains the address of a location in memory
Memory Buffer Register (MBR)
- Contains a word of data to be written to memory or the word most recently read

# Data Flow
Depends on CPU design
## Fetch
PC contains address of next instruction
Address moved to Mem address register (MAR)
Address placed on memory bus
Control unit requests memory read
Result placed on data bus, copied to MBR, then to IR
PC incremented by 1

## Execute
Depends on the instruction being executed
May include
- Memory read/write
- Input / Output
- Register Transfer
- Execution Unit Operations

# Interrupts
Sometimes CPU must be interrupted to do an urgent task
Code stops, interrupt code runs, then main code continues

![[SmartSelect_20241007_142423_Samsung Notes.png]]![[SmartSelect_20241007_142528_Samsung Notes.png]]
![[SmartSelect_20241007_142724_Samsung Notes.png]]
![[SmartSelect_20241007_142802_Samsung Notes.png]]
# CISC and RISC
## RISC philosophy
1. Instructions of fixed lenght executing in a single clock cycle
2. Pipelines to achieve one-instruction-per-one-clock-cycle throughput
3. Simple control logic to increase clock speed, no micro-code
4. Operations performed on internal registers only; only LOAD and STORE instructions access external memory
## CISC characteristics
1. Binary Compatibility
	1. Old binary code can run on newer versions
2. Complex control logic to support many instructions
3. Use of micro-code
	1. One program instruction  can execute in many cycles
4. Variable-length instructions to save program memory
5. Small interal registers compared to RISC
6. Comples addressing modes, operands can reside in external memory or internal registers

## One way of looking at it
Runtime = inst-time x cycles-per-instr x N-of-instr

CISC tried to reduce no of instructions
RISC tried to reduce the clock cycles per instructions


## Other RISC families
- MIPS
- SPARC
- DEC Alpha
- PowerPC
- PA-RISC
- Itanium
- $88000$
- ARM
- RISC-V

# microOPS

Intel uses RISC-like microOPS internally

IA32/64 Generations use microOPS
x86 instructions are turned into these RISC like instructions

