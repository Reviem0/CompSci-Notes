# Ethernet and LAN Fundamentals
- Ethernet is a core technology f0r many networks, including campus and home networks
- The basic setup involves Ethernet LANs at the edges connected by IP routers.

# Ethernet Theory
- **Ethernet Frame:** This is a link-layer structure.
	- It includes 48-bit source and destination **MAC (Medium Access Control) addresses**.
	- An optional `802.1Q` tag can be used for VLAN ID and frame priority.
	- The **Maximum Transmission Unit (MTU)** is usually 1500 bytes; larger messages are fragmented and reassembled.
	- The payload has a minimum size of 42 bytes. An octet is a byte.
- Mac Addresses:
	- These are link layer addresses, currently `48` bits (extensible to `64`)
	- They need to be unique. The first 24 bits are for vendor allocation (Organizationally Unique Identifier - OUI), and the last 24 bits are assigned by the vector

# Building Ethernet Networks
- Hosts typically connect to a port on an Ethernet switch
- Desktop speeds are often `1Gbit/s` or `2.5 Gbit/s`, while servers and backbones use `10 Gbit/s` or higher.
- Ethernet Switches:
	- Receive Ethernet frames and decide whether and where to forward them
	- They perform `smart` forwarding by learning the MAC addresses of hosts on each port. This information is stored in a switch port table.
	- If a destination MAC address is unknown, the switch floods the frame to all ports. MAC table entries time out after a period.
	- Broadcast frames are forwarded to all ports
	- Switches can store and forward frames, allowing for error checking (CRC check)
	- Advanced functions include VLANs and QoS