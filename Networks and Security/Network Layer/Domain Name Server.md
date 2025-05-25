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
| **A**     | IPv4 address                                  |
| **AAAA**  | IPv6 address                                  |
| **MX**    | Mail server for the domain                    |
| **NS**    | Authoritative nameserver for the zone         |
| **CNAME** | Alias (points to another name)                |
| **PTR**   | Reverse DNS (IP $\to$ domain)                 |
| **TXT**   | Text records (SPF, DKIM, domain verification) |
| **SOA**   | Start of Authority (zone admin details)       |
| **SRV**   | Service location (e.g. VoIP, LDAP)            |
|           |                                               |
![[Pasted image 20250525214541.png]]
# DNS Structure and Hierarchy
- Hierarchy Example:
	- `grim.ecs.soton.ac.uk` $\to$ `.uk` $\to$ `.ac.uk` $\to$ `soton.ac.uk` $\to$ `ecs.soton.ac.uk`
- Root Servers
	- "root" zone.
	- Currently 13 {a-m}.root-servers.net
	- Operated by 12 independent organisations
	- Queried when local name servers can't resolve a name
	- Use anycast for resilience (`1730+` global instances)
- Zones:
	- A zone is a contiguous part of the DNS namespace (`soton.ac.uk`)
	- Delegation: Parent zones 