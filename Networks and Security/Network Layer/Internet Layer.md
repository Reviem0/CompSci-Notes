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
Netmasks ([[IPv4]]) and prefix length ([[IPv6]]) specify how many bits identify the [[Network Prefix]], helping to determine what is local and what isn't.
- Example IPv6: `2001:63O:d0::/48` (first `48` bits are the network prefix)
- Example IPv4: `152.78.0.0/16` (first `16` bits are the network prefix), also represented as `255.255.0.1`

# Classless Inter Domain Routing (CIDR)
- [[IPv4]] address were originally allocated in classes (A,B,C) with fixed prefix lenghts. This was inefficient.
- CIDR, introduced in 1993, allows for variable length prefix, helping to reduce [[IPv4]] address consumption
# Subnets
- Subnets logically divide a larger IP allocation to limit Ethernet broadcast traffic and segment hosts
- For IPv4, subnet size should be based on the number of devices.
- For IPv6, /64 prefixes are common
- Subnetting is often done on a per-building or per-department basis.

# Routers
- A router is needed any time there is a change in address space.
- A router needs an interface for each network segment it connects to.
- Each interface on a router needs an IP address that is reachable by hosts in that segment. These can be link-local addresses in IPv6.
- Routers use routing tables to determine where to forward packets.
# [[IPv4]] vs [[IPv6]]
- Addressing: 32-bit vs 128-bit.
- Header: 20-byte (variable, 13 fields) vs 40-byte (fixed, 8 fields, simpler).
- Addresses per host: Typically one vs multiple.
- Routing: Fragmented vs simplified.
- NAT usage: Prolific vs end-to-end paradigm restored (NAT avoided).

•

Global Adoption: ~99%+ vs ~45% (of traffic to Google).

IPv4 and IPv6 need to coexist for the foreseeable future
- Dual stack is a common transition mechanism, where both protocols run side-by-side. This requires managing two networks.
- IPv6 mostly is an approach where devices capable of IPv6-only operation do so, while others use dual-stack or IPv4 only.
- NAT64/DNS64 allows IPv6-only hosts to access IPv4-only destinations. Google and Imperial College are examples of organisations using IPv6 mostly.
- Emerging trends involve "IPv4 as a service" through technologies like carrier-grade NAT (CGNAT) and MACT, where real IPv4 may not be directly used by end devices .