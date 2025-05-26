The **Application Layer** is the top-most layer in the OSI model, acting as the interface between the user and the network. Its protocols define how data is formatted, transmitted, and interpreted so applications can understand and process it.
# Email Protocols:

- **SMTP (Simple Mail Transfer Protocol)**:
    - A **reliable** protocol used to **send** emails, not receive them.
    - **Process**:
        1. The sender's email client connects to their SMTP server and sends the message.
        2. The server checks the recipient's domain and finds the correct mail server.
        3. The sender's SMTP server connects to the recipient's SMTP server and transfers the email.
        4. The recipient's SMTP server stores the email until it's retrieved by IMAP or POP3.
    - It's a **text-based protocol** using specific commands and responses.
    - SMTP Authentication is an extension because original email had no authentication, leading to spam issues.
    - **Key Commands/Replies**:
        - Connection established (TCP).
        - Server sends `220 "Ready"` reply.
        - Client sends `EHLO` command.
        - Server sends `250 "OK"` reply with a list of supported SMTP extensions.
        - Client sends `QUIT` command when done.
        - Server sends `221 "Goodbye"` reply and closes the channel.
            
- **IMAP (Internet Message Access Protocol)**:
    - Used by email clients to **retrieve and manage emails** stored on an email server.
    - Connects to the mail server on **port 143 (standard)** or **993 (encrypted)**.
    - Keeps a TCP connection open for requests or notifications.
    - Unlike POP3, IMAP **keeps emails on the server**.

---

###  Web Protocols:
- **HTTP (Hypertext Transfer Protocol)**:
    - Used for web Browse and communication between web servers and clients.
    - **Process**:
        1. Browser connects to the web server via TCP, typically on **port 80** (HTTP) or **port 443** (HTTPS).
        2. Browser sends a request (e.g., `GET /something/page.html HTTP/1.1`).
        3. Server responds with an HTTP status code and the requested content.
        4. Browser processes the response and displays the webpage.
    - It's a **text-based protocol**.
    - **Main HTTP Requests**:
        - `GET`: Request a webpage or resource.
        - `HEAD`: Like GET, but no data is sent back (only headers).
        - `POST`: Send data to the server (e.g., to create a resource).
        - `PUT`: Update a resource on the server.
        - `DELETE`: Remove a resource.
            
    - **Typical Response includes**: Status line (e.g., `HTTP/1.1 200 OK`), headers (Date, Content-Type, Content-Length, Server, etc.), and then the payload.
        
    - **Status Codes**:
        - `1xx`: Information
        - `2xx`: Success (e.g., `200 OK`)
        - `3xx`: Redirection (e.g., `301 Moved Permanently`)
        - `4xx`: Client error (e.g., `403 Forbidden`, `404 Not Found`)
        - `5xx`: Server error (e.g., `500 Internal Server Error`)
    - **HTTPS (Hypertext Transfer Protocol Secure)**: Wraps HTTP in a TLS session for confidentiality and integrity, as HTTP itself provides no security.
    - **HTTP/2 (2015)**: Introduced header compression and multiplexing multiple requests over a single TCP connection.
    - **HTTP/3**: Runs over QUIC instead of TCP.
        
- **CoAP (Constrained Application Protocol)**:
    - A **lightweight HTTP-like protocol** for simpler devices (good for IoT).
    - Has **minimal overhead**.
    - Uses **UDP** instead of TCP for faster communication.
    - Supports methods similar to HTTP (GET, POST, PUT, DELETE).
    - Used in Ikea smart lighting, for example.
        

---

### Newer Transport & Streaming Protocols:

- **QUIC (Quick UDP Internet Connections)**:
    - A new transport protocol designed to **replace TCP** in specific situations.
    - **Built on top of UDP**.
    - Aims for a faster handshake compared to TCP + TLS.
    - Ideal for **real-time communications** (e.g., video conferencing, gaming) and **streaming** (video/audio with minimal buffering).
    - Its adoption is expanding, with use by companies like Google and Cloud flare.
- **RTSP (Real Time Streaming Protocol)**:
    - A network protocol designed for **streaming media** (video or audio) over the internet.
    - **Controls playback** of audio/video streams using commands like `SETUP`, `PLAY`, `PAUSE`, `TEARDOWN`.
    - Uses a URL scheme with arguments (e.g., `rtsp://catvideos.org/media#t=10`).
        
- **RTP (Real-time Transport Protocol)**:
    - Handles the **actual transmission of real-time media** (voice, video).
    - Runs over **UDP for low latency**.
    - Uses **sequence numbers** to detect lost packets.
    - Includes **timestamps** to synchronize audio and video.