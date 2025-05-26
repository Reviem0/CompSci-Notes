IPsec uses a few key components:
1. **Authentication Header (AH)**:
    - This attaches a cryptographic hash (HMAC) to the packet.
    - It provides **data integrity** (proof that data hasn't been changed) and **authentication** (proof of who sent the data).
    - Importantly, AH **does not encrypt** the data, so it doesn't offer confidentiality on its own.
        
2. **Encapsulating Security Payload (ESP)**:
    - ESP encapsulates the original data within a secure header and **encrypts** it (using algorithms like AES).
    - It provides **confidentiality** through encryption, and also **integrity and authentication** via hashes and cryptographic signatures.
    - ESP can be configured to provide encryption or just integrity/authentication.
        
3. **Internet Key Exchange (IKE)**:
    - IKE is the protocol used to securely set up the connection. It handles the authentication and key exchange between two devices, creating **Security Associations (SAs)** which are the agreed-upon parameters for the secure communication.
    - IKE ensures the **confidentiality, integrity, and authenticity** of the connection itself.


IPsec has two main modes of operation:

- **Transport Mode**:
    - Only the **payload (data)** of the IP packet is encrypted and/or authenticated.
    - The original IP header remains intact and visible.
    - _Use case_: Typically used for host-to-host security.
- **Tunnel Mode**:
    - The **entire original IP packet** (header + payload) is encapsulated and then encrypted/authenticated. A new outer IP header is added.
    - _Use case_: Often used for VPNs (Virtual Private Networks), securing communications between networks (e.g., site-to-site VPNs).

# What are the downsides of IPsec?
- **Performance overhead**: The encryption and decryption processes can add latency.
- **Complex setup**: IPsec can be complicated to configure correctly.
- **Incompatibility issues**: May not work smoothly with all network devices if not configured properly.


# DNSSEC (Domain Name System Security Extensions)

DNSSEC adds a layer of **integrity and authenticity** to the Domain Name System (DNS). Remember, DNS is what translates human-readable domain names (like `www.google.com`) into IP addresses that computers use.

## Why is DNSSEC needed?

Standard DNS offers no built-in way to verify that the information it provides is correct or came from the legitimate source. This opens it up to attacks like:

- **DNS spoofing**: An attacker impersonates a DNS resolver and provides a false DNS record, redirecting traffic.
    
- **DNS cache poisoning**: An attacker injects a forged response into a resolver's cache, causing it to give out incorrect IP addresses for a domain.
    

## How does DNSSEC work?

DNSSEC uses **public-key cryptography** to digitally sign DNS records. This involves new types of DNS records:

- **RRSIG (Resource Record Signature)**: This is the digital signature for a set of DNS records (e.g., an A record which maps a domain to an IPv4 address).
    
- **DNSKEY (DNS Key)**: This record contains the public key that resolvers can use to verify the RRSIG signature.
    

**Validation Process**:

1. A user (or their resolver) requests DNS information (e.g., the IP address for `example.com`).
2. The authoritative DNS server for `example.com` provides the requested record (e.g., A record) along with its RRSIG.
3. The resolver also fetches the public DNSKEY for `example.com`.
4. The resolver uses the public DNSKEY to verify the RRSIG. If the signature is valid, the DNS data is considered authentic and untampered with. The resolver might compare a hash of the received data and DNSKEY with a hash derived from the RRSIG and DNSKEY; if they match, it's validated.
    

## Why does DNSSEC work (Benefits)?

- **Authenticity**: Digital signatures ensure that DNS responses truly come from the claimed source and haven't been forged.
    
- **Data Integrity**: By validating signatures, DNSSEC ensures that DNS records haven't been tampered with during transmission.
    
- **Proof of Nonexistence**: DNSSEC can cryptographically prove that a domain name or record does _not_ exist, preventing attackers from creating fake responses for non-existent domains.
    

## What are the downsides of DNSSEC?

- **No confidentiality**: DNSSEC itself does not encrypt DNS queries or responses. They are sent in plaintext, so an eavesdropper can still see which domains a client is looking up.
    
    - _Solution_: This confidentiality issue is addressed by other protocols like DNS over TLS (DoT) and DNS over HTTPS (DoH).
        
- **Performance overhead**: The process of signing and validating records can add some performance overhead to DNS resolution.