
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

| Feature            | IPv4                                       | IPv6                                            |
| ------------------ | ------------------------------------------ | ----------------------------------------------- |
| **Address Size**   | 32-bit (dotted quad, e.g. `152.78.64.100`) | 128-bit (colon-hex, e.g. `2001:630:d0::64`)     |
| **Header**         | Variable (min 20 bytes, 13 fields)         | Fixed 40 bytes, 8 fields (simpler routing)      |
| **Fragmentation**  | Any router can fragment                    | Only source fragments (uses Path MTU Discovery) |
| **Address Scopes** | Limited to public/private addresses        | Link-local (`fe80::/10`)                        |
| **NAT Usage**      |                                            |                                                 |
| **Adoption**       |                                            |                                                 |
