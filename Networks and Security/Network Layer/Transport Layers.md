- Communication layer.
- Layer above network layer.
- Sends segments via network layer.
- Passes packet's payload to correct app.
- Host-specific port numbers.
- TCP/UDP main protocols.
Port Number: 16-bit number, connection end point on host. higher the numbers, more private and niche the ports:
- Port 0 - Reserved in TCP, 'no port' in UDP.
- 0-1023 - Well-known.
- 1024-49151 - Registered.
- 49152-65535 - Dynamic or private.
	- IANA maintains list of well-known and registered (0-49151)
- Most browsers recognise the most well-known port number ownerships, hence when you type in https://google.com, the browser does not make you input a port number.
# TCP (Transmission Control Protocol)
- Connection and communication orientated and managed.
- Acknowledging and retransmission routes, and provides flow and congestion control. 
- Adjust sending rate over time to account for varying network conditions, like high congestion.
- Receiver in TCP rearranges segments in correct order.
- **Segments and fragments at internet layer not the same. Segments can get fragmented.**
- performance and reliability on otherwise unreliable IP.
- 20-bit header.
- Sequence number: tracking seq packets through connection.
- Acknowledgement number: Implicit acknowledgements when data passed on.
- Window size: Flow control, how many bytes we can receives.
![[Pasted image 20250525084613.png]]
- Three-way Handshake: Client has to sent SYN to server, Server sends back a SYN-ACK, client has to ACK. Any point in chain breaks, info cannot be transmitted.
	- Used to discard repeat packets, and resend lost ones.
	- Both sides must have a common understanding of where the other 



