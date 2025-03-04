A **superscalar** design enables the execution of more than one instruction at the same time. It leverages the fact that common instructions, such as arithmetic, load/store, and conditional branch instructions, can operate independently. For example, the calculations "C = a + b" and "D = e * f" could be performed simultaneously.

Most computer operations are performed on single data points (scalars), as opposed to arrays or vectors of data. By improving the efficiency of these scalar operations, superscalar processors enhance overall performance.

Superscalar processors generally separate components like floating-point units (FPUs) from integer arithmetic logic units (ALUs), enabling parallel execution.

**Several factors limit the effectiveness of superscalar processors**:

- **Instruction-level parallelism:** The degree to which instructions in a program can be executed concurrently.
- **Compiler-based optimisation:** Compilers can reorder instructions to maximise parallelism.
- **Hardware techniques:** Hardware features can support out-of-order execution and other optimisations.

**Dependencies between instructions can also hinder parallel execution:**

- **True data dependency:** A subsequent instruction relies on the output of a preceding instruction. For instance, in the sequence "ADD $r1, r2$" ($r1 = r1 + r2$) and "MOVE $r3, r1$" ($r3 = r1$), the second instruction cannot execute until the first one completes, despite the possibility of fetching and decoding them in parallel.
- **Procedural dependency:** Instructions following a branch cannot be executed concurrently with those preceding it. This limitation prevents simultaneous fetches, as demonstrated in the conditional statement: "if ($x + 2$) > y" followed by "$y = y + 1$" and "$z = x + y$".
- **Resource conflicts:** Multiple instructions requiring the same resource simultaneously, such as two arithmetic instructions needing the same ALU. Duplicating resources, like having two ALUs, can mitigate this issue.
- **Output dependency (read-write dependency):** When an instruction modifies a register that a subsequent instruction depends on, the order of completion becomes crucial. For example, if "R3 = R5 + 1" (I3) completes before "R3 = R3 + R5" (I1), the result of I1 will be incorrect, even though I2 ("R4 = R3 + 1") depends on the result of I1 due to data dependency.
- **Antidependency (write-write dependency):** This occurs when an instruction needs to modify a register before a previous instruction that also modifies the same register has started. This dependency prevents "R3 = R5 + 1" (I3) from completing before "R4 = R3 + 1" (I2) starts because I2 requires the original value of R3, which I3 changes.

**Superscalar processors employ various techniques to maximise performance, including:**

- **Instruction issue:** Managing the order in which instructions are fetched, executed, and modify registers and memory. This involves looking ahead for executable instructions and exploiting instruction parallelism.
- **Out-of-order completion:** Detaching the decode pipeline from the execution pipeline allows continued fetching and decoding until the pipeline is full. This enables the processor to look ahead and execute instructions as functional units become available.
- **Register renaming:** Addressing output and antidependencies by dynamically allocating registers, thus avoiding pipeline stalls. This technique involves using multiple versions of the same register, which the completion unit manages.

**Further optimisations include:**

- **Duplication of resources:** Having multiple execution units to handle parallel instructions.
- **Out-of-order issue:** Enabling instructions to be issued and executed out of program order.
- **Speculative execution:** Executing instructions that may be needed, such as those in an if-then-else block, if a unit is free. This can lead to performance gains but is associated with vulnerabilities like "Meltdown".

The effectiveness of superscalar processors depends on several factors, including the size of the instruction window, the number of execution units, and the nature of the instructions.

**Modern superscalar processors, such as the AMD Ryzen 9 with Zen4 architecture, can execute more than one instruction per clock cycle, often reaching 2-4 instructions per cycle depending on the core design and instruction mix**. The Pi4 cores, for example, have 8 execution units capable of parallel execution.

Benchmarking data from SPEC CPU2000 highlights the significance of architecture in processor performance, showing that it is as crucial as clock rate. The results reveal varying levels of efficiency (SPECINT per GHz) across different processors.