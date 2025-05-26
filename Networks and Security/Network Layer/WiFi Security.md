# Why Wi-Fi Security is Essential
Wireless networks are inherently less secure than wired ones because their signals aren't confined by cables. This means anyone within range can potentially intercept data or gain unauthorized access. The main goal of Wi-Fi security protocols is to encrypt and protect the data transmitted over these wireless networks.

# Common Wi-Fi Attacks

Several types of attacks can compromise Wi-Fi networks:
- **Eavesdropping**: Attackers can "listen in" on wireless communications if they are not properly secured. (See slide 4 for a visual representation).
- **Man-in-the-Middle (MitM) Attack**: An attacker intercepts communications between two parties, potentially altering them without either party knowing. (See slide 5 for an illustration).
- **Deauthentication Attack**: This attack forces Wi-Fi devices to disconnect from a network.
- **Evil Twin Attack**: An attacker sets up a rogue access point that appears to be a legitimate one to trick users into connecting, allowing the attacker to intercept data.

These vulnerabilities highlight the need for robust security mechanisms.

# Evolution of Wi-Fi Security Protocols
-  **WEP (Wired Equivalent Privacy)**
	- **Goal**: Introduced in 1997, WEP was the first security protocol for 802.11 wireless networks, aiming to provide confidentiality similar to a wired network.
	- **How it Works**:
	    - Uses a **Pre-Shared Key (PSK)** that is manually set on the router and client devices (40-bit).
	    - Employs a 24-bit **Initialization Vector (IV)**, which is a randomly generated value.
	    - Uses the **RC4 (Rivest Cipher 4)** stream cipher for data encryption.
	    - Includes an **Integrity Check Value (ICV)** to ensure data hasn't been tampered with.
	    - The WEP encryption key is a combination of the shared secret key and the IV.
	        
	- **Why it's Insecure**:
	    - **RC4 encryption is weak**.
	    - The **IV is too short (24-bit)** and is sent in plaintext, making it vulnerable.
	    - It uses a **static pre-shared key**, which if compromised, compromises all traffic.
	    - The **Integrity Check (ICV) is weak**.
	    - By the early 2000s, WEP was proven to be highly insecure; for instance, in 2005, the FBI showed it could be cracked in 3 minutes on a busy network.

-  **WPA (Wi-Fi Protected Access)**
	- **Goal**: Introduced in 2003 as an intermediate solution to WEP's weaknesses.
	- **Improvements over WEP**:
	    - Uses the **Temporal Key Integrity Protocol (TKIP)** to derive temporary keys from the Pre-Shared Key (PSK).
	    - **RC4 was kept** for backward compatibility, but with enhancements.
	    - Increased **key length to 128 bits**.
	    - **IV extended to 48 bits**.
	- **Vulnerabilities**:
	    - Still reliant on **RC4 encryption**, which has known weaknesses.
	
	    - WPA-PSK depends on a shared password, making it vulnerable to **brute-force attacks** and **dictionary attacks**. The time to brute-force a password depends on its length and complexity (see table on slide 13).
        

---

#### **WPA2 (Wi-Fi Protected Access II)**

- **Goal**: Introduced in 2004 as the successor to WPA.
    
- **Key Improvement**:
    - Replaced RC4 with **AES (Advanced Encryption Standard)** using **CCMP (Counter Mode Cipher Block Chaining Message Authentication Code Protocol)** for authenticated encryption. This is a much stronger encryption method.
        
- **Vulnerabilities**:
    - **KRACK (Key Reinstallation Attack)**: Discovered in 2017, this vulnerability could allow attackers to force a device to reinstall an already used key, potentially leading to data decryption or injection of malicious traffic. Patches were released by manufacturers to address this.
        
    - **Krook**: Discovered in 2019, this vulnerability affected WPA2 encryption in many Wi-Fi devices (approx. 1 billion), allowing an attacker to decrypt data packets. It was fixed by software updates.
        
    - Despite these, WPA2 (if patched) is considered to offer high security.
        

---

#### **WPA3 (Wi-Fi Protected Access 3)**

- **Goal**: Introduced in 2018 as the successor to WPA2, offering enhanced security.
    
- **Key Improvements**:
    - Continues to use **AES encryption**, similar to WPA2.
        
    - Replaces PSK (Pre-Shared Key) with **SAE (Simultaneous Authentication of Equals)** for more robust authentication, making it more resistant to offline dictionary attacks.
        
    - Offers **128-bit or 192-bit encryption keys**.
        
    - Considered to provide **high security**.