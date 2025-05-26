# Key Network Types

- **Internet**: A **global public network** connecting devices worldwide using **TCP/IP protocols**. It's open to everyone with an internet connection for communication, information sharing, and online services. However, it comes with security risks like lack of content control, privacy concerns, and vulnerability to hacking and malware.
- **Intranet**: A **private network for an organization's employees**. It's used for sharing internal information, resources, and tools. Access is restricted to authorized personnel, and it can host internal websites and communication tools. It's considered secure and isolated from public internet threats by firewalls and VPNs.
- **Extranet**: A **private network that grants limited access to external partners**, like clients or suppliers. It provides controlled access to specific resources for collaboration between different organizations. Access is restricted for these external users.

---

### **Comparing Internet, Intranet, and Extranet** 📊

| Feature            | Internet                                                          | Intranet                                                        | Extranet                                                                           |
| :----------------- | :---------------------------------------------------------------- | :-------------------------------------------------------------- | :--------------------------------------------------------------------------------- |
| **Access Users**   | Open to everyone globally                                         | Internal users (e.g., employees, students)                      | Internal and external users (e.g., partners, suppliers, customers)                 |
| **Connection**     | Public network                                                    | Private network                                                 | Private network, accessible via the internet                                       |
| **Purpose**        | Public access to information and services                         | Internal communication, document sharing, company resources     | Collaboration with external partners, sharing limited resources                    |
| **Access Control** | No access control (public content) or optional login for services | Broader access for internal users                               | Restricted access for external users to specific information                       |
| **Security**       | Less secure; depends on the website or service provider           | Highly secure with firewalls, encryption, and internal policies | Highly secure with firewalls, encryption, and limited access to specific resources |
# Securing Intranets and Extranets
These networks are kept secure through:
- Access Controls: Ensuring only authorised users can access specific resources, often role-based
- Encryption: Protecting data transmitted across the network
- Firewalls and VPNs: Protecting against unauthorised access from the public internet
# Firewalls
A firewall acts as a barrier between a trusted network (like a LAN) and an untrusted network (like a WAN). It works by examining data packets:
- If a packet matches an allowed rule, it's forwarded.
- If not, it's blocked

# Virtual Private Networks (VPNs)
A VPN creates a secure, encrypted connection between a user and the internet, or between different office locations over the internet, protecting data from external threats.

How VPNs work:
1. The user connects to a VPN service.
2. The VPN client on the user's device encrypts data before it leaves the device
3. Data is sent through a secure tunnel to the VPN server
4. The VPN server decrypts the data and forwards it to the intended destination.
5. The response from the destination is encrypted by the VPN server and sent back to the user via the same secure tunnel
**Why Use a VPN?**
- **Security**: Encrypts internet traffic and protects sensitive data.
- **Privacy**: Masks your IP address to ensure anonymity.
- **Bypass Geo-restrictions**: Access region-restricted content by connecting to servers in different countries.
- **Secure Remote Access**: Allows employees to securely access company resources from remote locations.
**Limitations of VPNs:**
- **Performance Issues**: Can slow down internet speeds due to encryption overhead.
- **Complexity and Management**: Can be costly to develop and maintain, especially for many endpoints.
- **Security Risks**: Only encrypts data between your device and the VPN server; it doesn't guarantee end-to-end encryption.
**Types of VPN Protocols:**
- **PPTP (Point-to-Point Tunnelling Protocol)**: Older, faster but less secure.
- **L2TP/IPSec (Layer 2 Tunnelling Protocol with IPsec)**: More secure and commonly used.
- **IKEv2/IPSec (Internet Key Exchange version 2)**: Very fast, secure, and ideal for mobile devices.