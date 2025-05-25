# The DNS
- A Domain Name Server maps host/domain names to IP address (A/AAAAA records) and vice versa (PTR records).

- DNS replaced the centralized `HOSTS.TXT` file due to scalability, traffic, and redundancy issues.
- Key Features
	- Distributed & Hierarchical: Managed by multiple authorities (ICANN -> TLDs -> domain owners)
	- Port 53/UDP: Most queries use UDP; TCP for large responses (e.g. zone transfers).
	- Delegation: e.g,  `.uk` $\to$ `.ac.uk` (JISC) $\to$ `soton.ac.uk` 

# DNS Record Types

| Type      | Description                                   |
| --------- | --------------------------------------------- |
| **A**     | IPv4 address                                  |
| **AAAA**  | IPv6 address                                  |
| **MX**    | Mail server for the domain                    |
| **NS**    | Authoritative nameserver for the zone         |
| **CNAME** | Alias                                         |
| **PTR**   | Reverse DNS (IP $\to$ domain)                 |
| **TXT**   | Text records (SPF, DKIM, domain verification) |
| **SOA**   | Start of Authority (zone admin details)       |
| **SRV**   |                                               |
