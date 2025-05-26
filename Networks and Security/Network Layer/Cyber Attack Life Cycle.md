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
