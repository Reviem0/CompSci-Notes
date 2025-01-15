## How does an ADC work?
All ADC (Analogue to Digital Converter) use one or more comparators, which compare two analogue inputs and produce a digital output depending on which input is higher. A comparator is an electronic circuit that compares two analogue input voltages and produces a digital output depending on which input is higher

## The Flash ADC
- very fast, but expensive
- one comparator for every quantised voltage level (i.e. a 8-bit ADC will contain 256 comparators, each producing a digital output)

There are a number of issues to consider when working with ADCs:

- **Quantisation:** Digital conversion introduces "steps" into the signal, which can result in a loss of precision. This is because the analogue signal is being represented by a limited number of digital values. The size of these steps depends on the **resolution** of the ADC, which is the number of bits used to represent the digital output. For example, a 12-bit ADC will have smaller steps than an 8-bit ADC.

- **Scaling/Amplifying:** If the input signal is small, an amplifier may be needed to increase its voltage to a level that can be accurately measured by the ADC. Otherwise, some precision will be lost.

- **Shifting/Offsetting:** If the input signal is negative, it needs to be shifted upwards so that its minimum value corresponds to the ADC's minimum input voltage. This may require further amplification to ensure that the signal does not exceed the maximum input voltage of the ADC.

- **Sampling Rate:** The sampling rate is the number of times per second that the ADC samples the analogue signal. If the sampling rate is too low, **aliasing** can occur, which means that high-frequency components of the signal will be incorrectly represented as lower-frequency components. To avoid aliasing, the sampling rate must be at least twice the highest frequency present in the signal, which is known as the **Nyquist rate** .

- **Cost and Speed:** The cost and speed of an ADC are important considerations. Faster ADCs are generally more expensive. The type of ADC also affects its speed. **Flash ADCs** are very fast but also expensive because they use a large number of comparators.
