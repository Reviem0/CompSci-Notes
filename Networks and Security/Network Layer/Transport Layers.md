# Transport Layer
- Communication layer.
- Layer above network layer.
- Sends segments (TCP) or datagrams (UDP) via network layer.
- Uses **port numbers** (16-bit, 0-65535) to deliver data to the correct application 
- Provides logical communication between application (process-to-process)
Port Number: 16-bit number, connection end point on host. higher the numbers, more private and niche the ports:
- Port 0 - Reserved in TCP, 'no port' in UDP.
- `0-1023` ($2^{10}$) - Well-known (e.g. `HTTP=80`, `HTTPS=443`)
- `1024-49151` - Registered. (assigned by IANA)
- `49152-65535` - Dynamic or private. (for client-side connections)
	- IANA maintains list of well-known and registered (0-49151)
- Most browsers recognise the most well-known port number ownerships, hence when you type in https://google.com, the browser does not make you input a port number.
# TCP (Transmission Control Protocol)
- Connection and communication orientated and managed:
	- Uses three-way handshake (`SYN -> SYN-ACK -> ACK`)
	- Client has to sent SYN to server, Server sends back a SYN-ACK, client has to ACK. Any point in chain breaks, info cannot be transmitted.
	-  Used to discard repeat packets, and resend lost ones.
	- Both sides must have a common understanding of where the other is in the data stream
- Reliable:
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
# TCP Reliability
- Based on acknowledgements sent by receiver.
- Sender must detect lost packets by not receiving acknowledgements. Can be lack of acknowledgement or issue with data that needs acknowledging.
# UDP (User Datagram Protocol)
- Connectionless 'send and forget' format.
- Retransmission is not part of the system, and it is in the realm of the application (at the app layer) if it wants to include it. You and the transport layer have no idea if the information has gotten to receiver or not.
- Fixed-bit rate is common: no flow control whatsoever. Example video streaming services.
- Low overhead due to lack of connection management. Lesser header bandwidth.
- 



