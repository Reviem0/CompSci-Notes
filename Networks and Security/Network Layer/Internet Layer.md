
# Internet Layer Functions
- Internetworking: Hides routing complexity from the Transport Layer; connects heterogenous networks (LANs via routers)
- **Packet Transmission**:
	- Packetization: Data is split into IP datagrams
	- Routing: Routers use tables to determine [[Next-Hop Routing|next-hop]] paths.
	- Fragmentation: Splits packets exceeding the MTU (e.g. IPv4 allows fragmentation at any router; IPv6 only at the sour)
- **Packet Reception:**
	- Error Checking: Header checksum verification
	- Reassembly: Reconstructs packets at the destination

# IPv4 vs IPv6

| Feature            | IPv4                                       | IPv6                                                                    |
| ------------------ | ------------------------------------------ | ----------------------------------------------------------------------- |
| **Address Size**   | 32-bit (dotted quad, e.g. `152.78.64.100`) | 128-bit (colon-hex, e.g. `2001:630:d0::64`)                             |
| **Header**         | Variable (min 20 bytes, 13 fields)         | Fixed 40 bytes, 8 fields (simpler routing)                              |
| **Fragmentation**  | Any router can fragment                    | Only source fragments (uses Path MTU Discovery)                         |
| **Address Scopes** | Limited to public/private addresses        | Link-local (`fe80::/10`), global unicast (`2000::/3`), ULA (`fc00::/7`) |
| **NAT Usage**      | Ubiquitous (address exhaustion)            | Rare (end-to-end connectivity restored)                                 |
| **Adoption**       | ~99%+                                      | ~45% growing                                                            |
# Fragmentation & MTU
- **M**aximum **T**ransmission **U**nit: Maximum packet size a link can transmit (e.g. Ethernet MTU = 1500bytes)
- **IPv4 Fragmentation**:
	- Routers fragments if needed; reassembly at destination or intermediate routers
- **IPv6 Fragmentation:**
	- Only the source host fragments after discovering Path MTU

# Subnetting & CIDR
- Subnet Masks (IPv4): Defines net work vs host bits (e.g. `255.255.255.0` = `/24`)
- Prefix Length (IPv6): Specifies network prefix (e.g. `2001:630:d0::/48`)
- CIDR (Classless Inter-Domain Routing):
	- Replaced classful addressing (A/B/C) with variable-length prefixes.
	- Reduces address waste (e.g. allocating `/28` instead of a full `/24`)

# Routing
- Routers: Connect subnets; each interface has an IP address in its subnet.
- Routing Tables: Determine next-hop paths (e.g. `netstat -nr` in Linux)
	- Default Gateway: Routes packets destined for external networks

# Key Protocols
- ICMP/ICMPv6: Diagnostics
- ARP (IPv4): Maps IP addresses to MAC addresses
- NDP (IPv6): Replaces ARP; includes neighbour discovery
- DHCP/DHCPv6: Assigns IP addresses dynamically
- IGMP: Manages IPv4 multicast groups
- IPSEC: Prov