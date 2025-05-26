# Ethernet and LAN Fundamentals
- Ethernet is a core technology f0r many networks, including campus and home networks
- The basic setup involves Ethernet LANs at the edges connected by IP routers.

# Ethernet Theory
- **Ethernet Frame:** This is a link-layer structure.
	- It includes 48-bit source and destination **MAC (Medium Access Control) addresses**.
	- An optional `802.1Q` tag can be used for VLAN ID and frame priority.
	- The **Maximum Transmission Unit (MTU)** is usually 1500 bytes; larger messages are fragmented and reassembled.
	- The payload has a minimum size of 42 bytes. An octet is a byte.