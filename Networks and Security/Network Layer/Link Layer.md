# Layered Models
- OSI vs TCP/IP Models:
	- OSI: 7 Layers
		1. Application
		2. Presentation
		3. Session
		4. Transport
		5.  Network
		6.  Data Link
		7. Physical
	- TCP/IP: 4 layers
		1. Application
		2. [[Transport Layer|Transport]]
		 3. [[Internet Layer|Internet]]
		4. [[Link Layer|Link]]
	- Link layer handles frames,
	- Physical Layer handles bits

# Encapsulation
- Each layer adds headers (and sometimes trailers) to the payload from the layer above:
	- Application data $\to$ Transport (TCP/UDP) $\to$ Internet (IP) $\to$ Link (Ethernet/Wi-Fi Frame)

# Link Layer Functions
1. Framing:
	- Encapsulates packets (IP datagrams) into frames, adding a header and sometimes a trailer. Frames vary depending on the physical layer
	- Ethernet frame structure: **MAC header (14B)** | **Payload (46-1500B)** | **CRC (4B)**
2. Transmission of frames over physical media
3. Receiving frames and passing IP datagrams up to the network layer
4. Error Detection:
	- Parity bit:
		- Is number of 1's even or odd (e.g. `10101011` even parity `1`)
		- Clearly will not reveal all errors
	- **CRC** (Cyclic Redundancy Check) in Ethernet
		- Result is held in the “checksum” field of the frame
		- Calculated by sender and receiver, and result compared
5. Flow Control:
	- Regulating data flow to prevent a fast sender from overwhelming a slow receiver. This is rarely used at this low layer
6. Acknowledgments: Confirming receipt of frames
7. Media Access Control (MAC)
	- Manages shared media access (e.g. CSMA/CD for old Ethernet, CSMA/CA for WiFi)
# Physical Layer and Media
- The Physical Layer (PHY) deals with the actual transmission of bits
- Bits are transmitted using encoding schemes, varying something like voltage or frequency over time
- 
## Physical Media Types
- Coaxial cable, twisted pair, fibre optic, wireless (WiFi), power line
- Standards: IEEE 802.3 (Ethernet), IEEE 802.11 (WiFi)

# Frames and Framing
- A **link layer frame** contains the network layer packet (payload) along with extra fields like a header and trailer to aid transmission.
    
- **Ethernet Frame Example (Ethernet Type II)**:
    
    - Destination MAC Address (6 bytes)
    - Source MAC Address (6 bytes)
    - EtherType (2 bytes) - indicates the protocol of the payload (e.g., IP, ARP)
    - Payload (Data: 46-1500 bytes)
    - CRC Checksum (4 bytes)
    - Total size: 64 to 1518 bytes.
        
- **Framing methods** are needed to indicate the start and end of a frame. One approach uses a special **FLAG byte** to mark the start/end; if the FLAG byte appears in the data, an **Escape byte** is used before it.

# Ethernet vs Wi-fi
- **Ethernet (Wired)**:
    - Uses **switches** (no contention in full-duplex mode).
    - **CSMA/CD** (Carrier Sense Multiple Access with Collision Detection) historically used.
    - Frame includes **MAC addresses, EtherType, payload, CRC**.
    - High reliability (no ACKs in modern switched networks).
- **WiFi (Wireless)**:
    - IEEE 802.11 standards (2.4GHz/5GHz/6GHz bands).
    - **CSMA/CA** (Collision Avoidance) with acknowledgements (ACKs) for reliability.
    - Shared medium → contention in busy areas.

# Error Handling & ARQ Protocols
- Automatic Repeat reQuest (ARQ):
	1. **Stop-and-Wait**: Send 1 frame, wait for ACK
		- Inefficient if ACKs are lost or frames are damaged. 
	2. **Go-Back-N**: Sends multiple frames (pipelining) using sequence numbers. 
		-  If an ACK is missed, it retransmits from that frame onwards.
	3. **Selective Repeat**: Retransmit only lost frames
- Acknowledgment models:
	- Connectionless (no ACKs, e.g. Ethernet)
		- Used for low error-rate networks like wired Ethernet. Frames are sent without prior signalling and may or may not be received.
	- Acknowledged connectionless (e.g. WiFi)
		- Used in technologies like WiFi
	- Acknowledged, Connection-oriented (e.g. satellite links)
		- For long-delay, unreliable links (e.g., satellite).
- Error Detection:
	- **Parity Bit**: Simplest method; checks if the number of 1s is even or odd. Doesn't catch all errors.
    - **Cyclic Redundancy Check (CRC)**: A more robust method. The result is stored in the frame's "checksum" field. Calculated by both sender and receiver; results are compared. Checksums can also occur at other layers (e.g., IPv4 has one, IPv6 does not).


# Key Concepts
- MAC Address: Unique hardware identifiers (e.g. `00:26:08:e4:21:5b`)
- CRC  Checksum: Detects frame errors (Ethernet uses this)
- Encapsulation: Each layer adds headers (e.g. IP packet inside Ethernet frame)
- Framing Methods: Flag bytes with escaping to handle data containing flags

# Comparisons
- Ethernet uses Carrier Sense Multiple Action with Collision Detection (CSMA/CD)
- Wifi uses Collision Avoidance (CSMA/CA)
- IPv4 has a header checksum, IPv6 does not
