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
	- Regulating d
6. Media Access Control (MAC)
	- Manages shared media access (e.g. CSMA/CD for old Ethernet, CSMA/CA for WiFi)
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
	2. **Go-Back-N**: Send multiple frames, retransmit all frames that occur after a missed ACK
	3. **Selective Repeat**: Retransmit only lost frames
- Acknowledgment models:
	- Connectionless (no ACKs, e.g. Ethernet)
	- Acknowledged connectionless (e.g. WiFi)
	- Connection-oriented (e.g. satellite links)

# Physical Media Types
- Coaxial cable, twisted pair, fibre optic, wireless (WiFi), power line
- Standards: IEEE 802.3 (Ethernet), IEEE 802.11 (WiFi)

# Key Concepts
- MAC Address: Unique hardware identifiers (e.g. `00:26:08:e4:21:5b`)
- CRC  Checksum: Detects frame errors (Ethernet uses this)
- Encapsulation: Each layer adds headers (e.g. IP packet inside Ethernet frame)
- Framing Methods: Flag bytes with escaping to handle data containing flags

# Comparisons
- Ethernet uses Carrier Sense Multiple Action with Collision Detection (CSMA/CD)
- Wifi uses Collision Avoidance (CSMA/CA)
- IPv4 has a header checksum, IPv6 does not
