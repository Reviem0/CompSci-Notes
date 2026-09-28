## Branch Prediction
Branch prediction is a technique used to improve the performance of pipelined processors. 

Pipelines aim to complete one instruction every clock cycle by overlapping the steps of instruction execution (fetch, decode, calculate operands, fetch operands, execute instruction, and write/complete result).
![[Pasted image 20250114162244.png]]

However, branches can cause "pipeline stalls" because the processor fetches the wrong instructions when it encounters a branch.
![[Pasted image 20250114162253.png]]
Branch prediction units try to guess which branch will be taken, so that the processor can fetch the correct instructions and avoid stalls.
There are various methods of branch prediction:
- **Static branch prediction** makes a fixed prediction about whether a branch will be taken. One simple approach is to predict that a branch will never be taken, always fetching the next instruction. Another is to predict that branches will always be taken, always fetching the target instruction.
- **Prediction by opcode** exploits the fact that certain instructions are statistically more likely to result in a jump. This method can achieve up to 75% accuracy
- A **taken/not taken switch** records whether the previous execution of a branch was taken or not taken, and uses this history to predict the outcome of the next execution. This approach is well-suited for loops.
- More advanced techniques, such as **dynamic data flow analysis** and **speculative execution**, predict branches based on the program's runtime behaviour.
Modern processors, such as those based on the IA-32 and IA-64 architectures, employ sophisticated branch prediction mechanisms, achieving accuracy rates of over 90%