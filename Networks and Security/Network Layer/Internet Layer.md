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
- IPSEC: Provides encryption/authentication (built into IPv6)

# Transition Mechanisms
- Dual-Stack: Run IPv4 and IPv6 simultaneously
- NAT64/DNS64: Allows IPv6-only hosts to access IPv4 resources (used in "IPv6 mostly" deployments)  

# ICMP & ICMPv6
- Purpose: Diagnostics, error reporting, and network management.
	- IPv4: ICMP handles messages like `ping` (echo request/reply) and error notifications (e.g. "Destination Unreachable")
	- IPv6: ICMPv6 expands functionality to include **[[Neighbour Discovery Protocol (NDP)]]** and [[Router Advertisement]]
- Key ICMPv6 Packet Types:
	- Router Solicitation (RS): Host requests router info
	- [[Router Advertisement]]: Router sends network prefix, MTU. and addressing modes ([[Internet Layer#SLAAC (Stateless Address Autoconfiguration)|SLAAC]]/DHCPv6)
	- Neighbour Solicitation (NS): Maps IPv6 to MAC (Maps IPv6 to MAC)
	- Neighbour Advertisement (NA): Response to NS
	- Redirect: Informs hosts of better routes

# ARDP vs NDP

| Feature           | ARP(IPv4)                   | NDP (IPv6)                                 |
| ----------------- | --------------------------- | ------------------------------------------ |
| **Purpose**       | Maps IPv4 to MAC            | Maps IPv6 to MAC + router discovery        |
| **Mechanism**     | Broadcasts "Who has X?"     | Multicasts to solicited-node addresses     |
| **Encapsulation** | Directly in Ethernet frames | Uses ICMPv6 messages                       |
| **Security**      | Vulnerable to spoofing      | Includes SeND (Secure Neighbour Discovery) |
# DHCPv4 vs DHCPv6

| Feature                | DHCPv4                                       | DHCPv6                                            |
| ---------------------- | -------------------------------------------- | ------------------------------------------------- |
| **Address Assignment** | Assigns IPv4 addresses                       | Assigns IPv6 Addresses or prefixes                |
| **Process**            | DISCOVER $\to$ OFFER $\to$ REQUEST $\to$ ACK | SOLICIT $\to$ ADVERTISE $\to$ REQUEST $\to$ REPLY |
| **Integration**        | Standalone                                   | Requires Router Advertisements                    |
| **Unique Identifier**  | Uses MAC address                             | Uses DHCP Unique Identifier                       |

# SLAAC (Stateless Address Autoconfiguration)
- Process:
	1. Host receives RA with network prefix (e.g. `2001:db8::/64`)
	2. Generates interface identifier:
		1. RFC4862 (EUI-64): Embeds MAC address
		2. RFC7217: Privacy-focused, uses hash (prefix + secret key) for stable addresses
	3. Combines prefix + identifier to form full IPv6 address
- Privacy Extensions (RFC 4941)
	- Generates temporary, random addresses for outbound traffic
	- Stable SLAAC address retained for inbound connections

# Multicast
- IPv4:
	- Address range: `224.0.0.0/4` 
	- Common addresses: `224.0.0.1` (all hosts), `224.0.0.2` (all routers)
- IPv6:
	- Address range: `ff00::/8`
	- Common addresses: `ff02::1` (all nodes), `ff02:2` (all routers), `ff02::fb` (mDNS)
- Uses: Live streaming, service discovery (mDNS/LLMNR)