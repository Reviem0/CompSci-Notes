
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
