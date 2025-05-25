# Sockets (TCP/UDP)
- Sockets
	- Represent endpoints for data exchange
	- Types: `SOCK_STREAM` (TCP), `SOCK_DGRAM` (UDP), `SOCK_RAW` (low-level)
	- Families: `AF_INET` (IPv4), `AF_INET6` (IPv6)
	- Default: `socket.socket()` $\to$ IPv4 TCP socket