# Subnets and Netmasks
- IPv4 Subnet Structure
	- First address: Network address (reserved)
	- Last address: Broadcast address (reserved)
	- Usable addresses: Total addresses minus 2 (or 3 if a router is reserved)
	- Example: `/24` subnet = 256 addresses, 254 usable (e.g. `152.78.70.0/24`).
	- Total usable addresses:
$$
2^{32-\text{CIDR}} - 2 = \text{Total usable addresses}
$$
- Subnetting
		- Dividing a larger network into smaller subnets (e.g., splitting `/23` into `/24` and `25` subnets).

# NAT (Network Address Translation)
- RFC 1918 Private Addresses:
	- `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`
- Purpose of NAT
	- Share a single public IP among multiple private devices
	- Drawbacks: Overhead, breaks end-to-end connectivity
- CGNAT (Carrier-Grade NAT)
- ISPs use `100.64.0.0/10` to conserve IPv4 addresses

# Routing Basics
- Routing Tables
	- Entries include destination prefixes, gateways, and interfaces.
	- Longest Prefix Match: Determines the selected route (e.g. `/24` is preferred over `/16`)
	- Default Route: `0.0.0.0/0` for non-local traffic
- Host Behaviour:
	- Direct delivery for local subnet, else forward to default.
	- Example: Host with `152.78.68.162/26` sends non-local traffic to `152.78.68.190`

# Routing Protocols
- Interior Gateway Protocol (IGPs):
	- RIP (Routing Information Protocol):
		- Distance-vector, hop count metric (max 15 hops)
		- Slow convergence, prone to loops (e.g. count to infinity)
	- OSPF (Open Shortest Path First)
		- Link-state protocol, uses Dijkstra's algorithm
		- Faster convergence, full topology knowledge
	- Exterior Gateway Protocol (EGP)
		- BGP (Border Gateway Protocol)
			- Used between Autonomous Systems (AS)
			- Path selection based on AS paths, policies, and attributes
			- Issues: Trust reliance, slow convergence, route flapping.
# Autonomous Systems (AS)
- Definition: A network under a single administrative policy
- AS categories: Multihomed, transit, stub
- BGP Peering: Exchanges routes over TCP, uses UPDATE messages
# Traceroute
- Function: Maps the path of packets using TTL values
- Mechanism:
	- Sends packets with increasing TTL; each hop returns an ICMP Time Exceeded
	- Windows uses ICMP (`tracert`), Linux uses UDP
- Limitations: Asymmetric route, transient paths, speed variations.
#RoutingSummary