- Sits above the link layer and below the transport layer. 
- Sends packets via the link layer and passes a received packet's payload to the correct transport layer.
- Provides Unique Addressing
- Handles [[Next-Hop Routing]]

# Functions of the Internet Layer
- Internetworking
	- Hides routing and physical network complexity from the transport layer
- Transmitting Packets
	- ![[Packetisation into datagrams]]
	- Processing and Routing IP datagrams
	- Fragmentation
- Packet Reception
	- This involves error checking and fragment reassembly

# Properties of the Internet Protocol
- Packet-switched and connectionless
	- No permanent connection is established before data transmission.
- Unreliable
	- There is no guarantee that datagrams will arrive, or that they will arrive in the order they were sent. Packets are sent and routed on a best effort basis. Routers can drop or delay packets due to congestion or errors.
- Routed
	- Packets are usually destination-routed, meaning routers use [[Routing Table|Routing Tables]]  to determine the next hop based on the destination address. Each router has a routing table containing rules for forwarding packets
