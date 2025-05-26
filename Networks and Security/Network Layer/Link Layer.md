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
	- Delimits start/end of frames (e.g. using flag bytes with escaping).
	- Ethernet frame structure: **MAC header (14B)** | **Payload (46-1500B)** | **CRC (4B)**
2. Error Detection:
	- CRC (Cyclic Redundancy Check) in Ethernet; parity bit (less robust)
3. Flow Control:
	- Rarely used here; handled more at higher layers
4. Media Access Control (MAC)
	- Manages shared media access (e.g. CSMA/CD for old Ethernet, CSMA/CA for WiFi)