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
- Communcation works through [[Store-and-Forward Packet Switching]], where a packet is sent to the nearest router, which then passes it on towards the destination. 

# Unreliability and Quality of Service
- Due to the best-effort nature, IP packets may be dropped or delayed.
- TCP in the transport layer handles retransmissions, while UDP requires the application layer to manage this.
- [[Quality of Service]] methods can prioritise certain network traffic

# [[Maximum Transmission Unit (MTU)]]  and Fragmentation
- Physical connections have a Maximum Transmission Unit(MTU) ![[Maximum Transmission Unit (MTU)]].
- If a Protocol Data Unit is larger than the MTU, it is split into smaller packets through fragmentation to be sent and reassembled later.
- [[IPv4]]: Packets can be fragmeted at any routing hop and are generally reassembled at the receiving host. Fragmentation details are included in the [[IPv4]] header.
- [[IPv6]]: Fragmentation can only be done by the sending host. [[Path MTU Discovery]] must be used to determine the largest packet size that can be sent without fragmentation. [[IPv6]] networks must support an MTU of at least 1280 bytes. Fragmentation in [[IPv6]] is handled as an optional extention header.
# Netmasks and Subnets
Netmasks ([[IPv4]]) and prefix length ([[IPv6]]) specify how many bits identify the network prefix, helping to determine what is local and what isn't.
- Example IPv6: `2001:63O:d0::/48` (first `48` bits are the network prefix)
- Example IPv4: `152.78.0.0/16` (first `16` bits are the network prefix), also represented as `255.255.0.1`