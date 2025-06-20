# What is Wi-Fi?
Wi-Fi (Wireless Fidelity) is the wireless alternative to Ethernet
**Comparison with Ethernet**:
- **Connection Type**: Wi-Fi is wireless; Ethernet is wired.
- **Speed**: Wi-Fi can go up to 9.6 Gbps, while Ethernet can reach up to 10 Gbps.
- **Security**: Wi-Fi is more vulnerable and needs strong encryption; Ethernet is more secure.

### How Wi-Fi Works
- Typically involves an **Access Point (AP)** that connects to the wired network.
- The AP transmits radio signals in specific frequency ranges (2.4 GHz or 5 GHz).
- Client devices associate with the AP to receive these signals.
- A **Service Set Identifier (SSID)** is used to identify a wireless network.
- **Ad hoc networks** allow clients to connect directly without an AP, but this is less common.

### 2.4 GHz vs. 5 GHz Frequencies
- **2.4 GHz**:
    - Speed: Slower
    - Range: Longer
    - Interference: High (crowded)
    - Use Cases: Good for large areas and penetrating walls.
- **5 GHz**:
    - Speed: Faster
    - Range: Shorter
    - Interference: Low
    - Use Cases: Suited for high-speed, short-range communication.

### The IEEE 802.11 Standard
- Wi-Fi uses the IEEE `802.11` suite of protocols.
- This standard has evolved over many years, leading to different versions with increasing theoretical maximum speeds:
    
    - `802.11b`: 11 Mbps
    - `802.11a`: 54 Mbps
    - `802.11g`: 54 Mbps
    - `802.11n` (Wi-Fi 4): 600 Mbps
    - `802.11ac` (Wi-Fi 5): 6.8 Gbps
    - `802.11ax` (Wi-Fi 6): Speeds approaching 10 Gbps.

**Wi-Fi Performance**:
- Actual speeds are often lower than the theoretical maximums defined by the standards.
- Factors affecting performance include signal strength, interference, and network congestion.
- Techniques to improve performance: MIMO (Multiple Input, Multiple Output), beamforming, channel bonding, and Quality of Service (QoS)

# Wireless Network Challenges
- Wi-Fi relies on shared communication channels.
- Devices can't always sense other devices' transmissions (leading to issues like the hidden node problem).
- Devices can't transmit and receive simultaneously.
- This contrasts with Ethernet where devices typically receive all other nodes' transmissions and can transmit/receive at the same time (though this statement about Ethernet receiving every other node's transmission might be simplified, especially in switched networks).
# Hidden Node Problem
- This occurs when two devices (e.g., A and C) cannot detect each other's signals but are both communicating with the same access point (e.g., B), potentially causing collisions at the AP.
    
- **Solution**: Request to Send / Clear to Send (RTS/CTS) mechanism.
    1. Device A sends an RTS to the AP.
    2. The AP replies with a CTS if the channel is free. This CTS is heard by other nodes in range of the AP.        
    3. Device A then transmits data, while other devices that heard the CTS will wait.

![[Pasted image 20250526212337.png]]

### CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)
- Wireless networks use CSMA/CA because CSMA/CD (Collision Detection), common in wired networks, doesn't work well as devices can't always detect collisions.
- **CSMA/CD**: Listens, transmits, and if a collision is detected, stops, waits, and retransmits.
- **CSMA/CA**:
    - Listens to the channel and waits for it to be idle before transmitting.
    - Uses acknowledgments (ACKs) to confirm receipt of data.
- **How CSMA/CA works** (see flowchart ):
    1. **Assemble a frame.**
    2. **Carrier Sense**: Listen to see if the channel is idle.
    3. If busy, wait a random **backoff time** and listen again.
    4. If free (and not using RTS/CTS), transmit the data.
    5. **RTS/CTS Exchange (Optional but helps with hidden nodes)**:
        - If the channel is idle, transmit an RTS (Request to Send).
        - Wait for a CTS (Clear to Send) from the receiver. If not received, go to backoff.
        - If CTS is received, transmit the application data.
    6. Wait for an **Acknowledgment (ACK)** from the receiver to confirm successful transmission. If no ACK, the sender assumes a collision or error occurred and will retransmit after a backoff period.
![[Pasted image 20250526212245.png]]
# Exposed Node Problem
- A situation where a device (e.g., B wanting to transmit to A) incorrectly assumes the channel is busy because it hears a transmission from another device (e.g., C transmitting to D), even though its own transmission to A would not interfere. This leads to unnecessary delays. The diagram shows B is in range of C, but A is not in range of C, and D is not in range of B. If C is transmitting to D, B might defer transmitting to A, even though A wouldn't hear C.
![[Pasted image 20250526212422.png]]
