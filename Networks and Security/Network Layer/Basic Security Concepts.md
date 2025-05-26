# The C.I.A Triad
- **Confidentiality**: Restricting unauthorised access (e.g. encryption). 
	- Breach = unauthorised disclosure (e.g. stolen USB drive)
- **Integrity**: Ensuring data/system accuracy and trustworthiness. 
	- Breach = unauthorised modification
- **Availability**: Ensuring timely access. 
	- Breach = disruption (DDoS attack)
- Integrity Related Concepts:
	- **Authenticity**: Verifying identities / data sources
		- This means verifying that: 
			- users are who they say they are,
			- each input arriving at the system comes from a trusted source
	- **Accountability**: Tracing actions to entities
		- Systems must keep records of their activities to permit later forensic analysis to trace security breaches or to aid in transaction disputes.

# Security Model Components
- **Assets**: Hardware, software, data , communication networks
- **Vulnerabilities**: Weakness (e.g. unpatched software, weak passwords )
- **Threats**: Potential harm (e.g. malware, insider threats)
- **Attacks**: Materialised threats (e.g. phishing, ransomware)
- **Countermeasures**: Detection, prevention, mitigation and recovery
- **Risk**: Function of impact and likelihood of a threat
![[Pasted image 20250526141443.png]]

# Attack Classifications
- **By Impact**:
	- Active: Alters assets (e.g. data tampering)
	- Passive: Gathers information (e.g. eavesdropping)
- **By Origin**:
	- Inside attack: By authorised user (e.g. employee leaking data)
	- Outside attack: By unauthorised entity (e.g. hacker)

# Example of Threats to C.I.A by Asset
|**Asset**|**Confidentiality**|**Integrity**|**Availability**|
|---|---|---|---|
|**Hardware**|Stolen unencrypted USB drive|Malicious component replacement|Equipment theft/disabling|
|**Software**|Unauthorized software copy|Code modified for unintended tasks|Software deletion|
|**Data**|Unauthorized data read/statistical leak|Unauthorized file modification/fabrication|Data deletion/encryption (ransomware)|
|**Communication Lines**|Eavesdropping on messages|Message modification/delay/fabrication|Network destruction (e.g., DDoS)|

