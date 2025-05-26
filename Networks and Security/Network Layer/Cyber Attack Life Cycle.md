## Cyber Attack Life Cycle Models

Cyber-attack life cycle models are **empirical frameworks** that represent the sequence of steps attackers typically follow. Understanding these models is crucial because they help to:
- Figure out why past attacks were successful.
- Develop a structured knowledge base about attacks (e.g., MITRE CAPEC and ATT&CK).
- Identify effective ways to protect assets.
- Forecast the potential next steps of an ongoing attack.
The main model discussed is the **Lockheed Martin Kill Chain model**.

## The Lockheed Martin Kill Chain Model
This model describes the phases of an intrusion, particularly for Advanced Persistent Threats (APTs), to enable intelligence-driven computer network defence. The learning outcome is to be able to explain this model and its phases. It consists of seven phases:

1. **Reconnaissance**: This is the information gathering phase where attackers research and select targets.
    - **What they do**: Harvest email addresses, identify vulnerabilities, or map networks.
    - **Examples**: Crawling websites, network scans, and probes to identify security measures. In the Equifax breach, attackers looked for vulnerable Apache Struts 2 servers and found Equifax's.
2. **Weaponization**: Attackers develop a cyber weapon (e.g., a malicious payload paired with an exploit) tailored to the target's vulnerabilities.
    - **What they do**: Create malware, obtain exploits, or set up C&C infrastructure.       
    - **Examples**: Crafting PDF or Microsoft Office documents with embedded malicious scripts, using a Remote Access Trojan (RAT), or preparing a phishing email. For Equifax, this involved obtaining an exploit for the Apache Struts vulnerability (CVE-2017-5638), and developing/configuring web shells.
        
3. **Delivery**: The weaponized payload is transmitted to the target system.
    - **How**: Via email attachments, malicious websites, USB drives, etc..
    - **Examples**: Sending a crafted message over the Internet to Equifax's vulnerable Apache Struts 2 server.
        
4. **Exploitation**: The delivered payload is triggered, often by exploiting a vulnerability in the target's system to execute malicious code.
    - **How**: Exploiting software bugs, leveraging OS auto-start features, or through user deception (e.g., clicking a malicious link). In the Equifax case, the Apache Struts 2 vulnerability was exploited to execute the malicious payload.
        
5. **Installation**: The malware or backdoor establishes persistence on the victim's system. This ensures the attacker maintains access even if the system reboots.
    - **How**: Installing multiple copies of malware, or registering the payload as an OS service set to auto-start. At Equifax, attackers installed over 30 web shells (backdoor connections).
        
6. **Command & Control (C2 or C&C)**: A communication channel is established between the compromised system and an external server controlled by the attacker. This allows remote manipulation of the victim.
    - **How**: May use encrypted channels (like HTTPS) or disguise C2 traffic using common protocols or public platforms (e.g., tweets with specific hashtags). The Equifax attackers used remote connections through the installed web shells.
        
7. **Actions on Objectives**: With persistent access and control, the attacker carries out their intended goals.
    - **What they do**: Data exfiltration (stealing data), disruption of services, or financial theft. For Equifax, the primary objective was data exfiltration, resulting in the theft of 145 million users' personal details.

# Multi-step Cyber-attacks
These attacks often involve more than just the initial breach; attackers might move through the network to find more valuable targets. The Kill Chain can be applied **iteratively** to different stages of such an attack.

### Equifax Data Breach: A Multi-step Example
The Equifax breach illustrates a multi-step attack with an initial intrusion followed by lateral movement.

**First Iteration: Initial Intrusion (as detailed above and on )**
- **Reconnaissance**: look for vulnerable Apache Struts 2 servers, find Equifax’s
- **Weaponization**: obtain vulnerability exploit, develop/configure web shells, prepare C&C infrastructure
- **Delivery**: send crafted message to vulnerable Apache Struts 2 over the Internet 
- **Exploitation**: exploit that vulnerability to execute the malicious payload 
- **Installation**: install 30 web shells
- **C&C**: remote connection through the web shells
- **Action** on objectives: data exfiltration

**Second Iteration: Lateral Movement & Data Exfiltration** After the initial intrusion, attackers moved laterally within Equifax's network. This phase can be analysed as another iteration of the Kill Chain:
- **Reconnaissance (Internal)**: Attackers scanned systems connected to the initially compromised online dispute portal. They found a data repository with personally identifiable information (PII) and, crucially, unencrypted usernames and passwords.
- **Weaponization**: In this context, the "weapons" were the discovered unencrypted credentials.
- **Delivery**: Accessing other databases using the stolen credentials via the network, likely using standard database communication protocols for authentication.
- **Exploitation**: Successful login to these additional 48 databases using the compromised credentials.
- **Installation**: This phase was less relevant for the second iteration as persistence was already achieved via web shells in the first iteration. The attackers leveraged existing access.
- **Command & Control**: Communication channels were established upon successful login to the databases. These channels were then used to issue queries (e.g., SQL queries) to collect PII. Attackers ran approximately 9,000 queries.
- **Actions on Objectives**: Data exfiltration of PII from these 48 additional databases. The attackers removed data in small increments over 76 days using standard encrypted web protocols to avoid detection.