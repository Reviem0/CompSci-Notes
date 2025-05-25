# Sockets (TCP/UDP)
- Sockets
	- Represent endpoints for data exchange
	- Types: `SOCK_STREAM` (TCP), `SOCK_DGRAM` (UDP), `SOCK_RAW` (low-level)
	- Families: `AF_INET` (IPv4), `AF_INET6` (IPv6)
	- Default: `socket.socket()` $\to$ IPv4 TCP socket
- TCP Server Workflow:
``` python
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
- TCP Client:
``` python
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect(('127.0.0.1', PORT))
    s.sendall(b'Hello')
    data = s.recv(1024)
```
- UDP (Connectionless)
	- Sever: `sock = socket.socket(AF_INET, SOCK_DGRAM); sock.bind((IP, PORT))`
	- Client: `sock.sendto(data, (IP, PORT))`
	- No `connect()` or `close()` required
# IP Address Handling
- Resolve DNS to IP = `ip = socket.gethostbyname('www.example.com')`

# Error Handling
- Use try-except blocks for socket operations:
``` python
try:
    server_socket.bind(('localhost', 65432))
except socket.error as e:
    print(f'Socket error: {e}')
```

# HTTP with `requests` Library
- Simple GET request:
``` python
import requests
response = requests.get('https://example.com')
print(response.text)
```

# WebSockets
- Features: Persistent, bidirectional, low latency (used in chat, games).
- Server (async with `websockets`)
``` python
async def handler(websocket, path):
    data = await websocket.recv()
    await websocket.send(f"Received: {data}")
start_server = websockets.serve(handler, "localhost", 8000)
```
- Client