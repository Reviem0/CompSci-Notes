# Sockets (TCP/UDP)
- Sockets
	- Represent endpoints for data exchange
	- Types: `SOCK_STREAM` (TCP), `SOCK_DGRAM` (UDP), `SOCK_RAW` (low-level)
	- Families: `AF_INET` (IPv4), `AF_INET6` (IPv6)
	- Default: `socket.socket()` $\to$ IPv4 TCP socket
- TCP Server Workflow:
```python
import socket
HOST = ''; PORT = 5000
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind((HOST, PORT))
    s.listen(1)
    conn, addr = s.accept()  # New socket for the connection
    with conn:
        data = conn.recv(1024)
        conn.sendall(data)  # Echo back
```