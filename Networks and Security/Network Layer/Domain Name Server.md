# The DNS
- A Domain Name Server maps host/domain names to IP address (A/AAAAA records) and vice versa (PTR records).

- DNS replaced the centralized `HOSTS.TXT` file due to scalability, traffic, and redundancy issues.
- Key Features
	- Distributed & Hierarchical: Managed by multiple authorities (ICANN -> TLDs -> domain owners)
	- Port 53/UDP: Most queries use UDP; TCP for large responses (e.g. zone transfers).
	- Delegation: e.g.,  `.uk` $\to$ `.ac.uk` (JISC) $\to$ `soton.ac.uk` 

# DNS Record Types

| Type      | Description                                   |
| --------- | --------------------------------------------- |
| **A**     | IPv4 address (32-bit address)                 |
| **AAAA**  | IPv6 address (128-bit address)                |
| **MX**    | Mail server for the domain                    |
| **NS**    | Authoritative nameserver for the zone         |
| **CNAME** | Alias (points to another name)                |
| **PTR**   | Reverse DNS (IP $\to$ domain)                 |
| **TXT**   | Text records (SPF, DKIM, domain verification) |
| **SOA**   | Start of Authority (zone admin details)       |
| **SRV**   | Service location (e.g. VoIP, LDAP)            |
| **HINFO** | Host information                              |

![[Pasted image 20250525214541.png]]
# DNS Structure and Hierarchy
- Hierarchy Example:
	- `grim.ecs.soton.ac.uk` $\to$ `.uk` $\to$ `.ac.uk` $\to$ `soton.ac.uk` $\to$ `ecs.soton.ac.uk`
- Root Servers
	- "root" zone.
	- Currently 13 {a-m}.root-servers.net
	- Operated by 12 independent organisations
	- Queried when local name servers can't resolve a name
	- Use [[Domain Name Server#Anycast|anycast]] for resilience (`1730+` global instances)
- Zones:
	- A zone is a contiguous part of the DNS namespace (`soton.ac.uk`)
		- Complete tree, subtree or single node
		- Each zone has an associated set of name servers
	- Delegation: Parent zones delegate subzones via NS records
	- ![[Pasted image 20250525215157.png]]
# Anycast
- Allows a client to reach the nearest instance of a service
- You can advertise the same IP, or small IP block, at multiple points on the Internet
- Routers then learn of the nearest instance, topologically, via the routing system
# DNS Queries and Tools
- Resolver Types:
	- Recursive where it responds from local cache or resolves the query before replying to the client
		- Resolver fetches the answer (e.g. home router)
		- Can be thought of as having a DNS server side and a resolver side.
	- Iterative: Server responds with a referral to another server (e.g. root servers)
- A forwarder sends queries to a different DNS server, even if the RD bit is set. Think DNS proxy
- Tools:
	- `nslookup`: Basic DNS queries
	- `dig`: Detailed DNS queries
	- APIs: `getaddrinfo()` in Python