# The C.I.A Triad
- **Confidentiality**: Restricting unauthorised access (e.g. encryption). 
	- Breach = unauthorised disclosure (e.g. stolen USB drive)
- **Integrity**: Ensuring data/system accuracy and trustworthiness. 
	- Breach = unauthorised modification
- **Availability**: Ensuring timely access. 
	- Breach = disruption (DDoS attack)
- Related Concepts:
	- Authenticity: Verifying identities / data sources
	- Accountability: Tracing actions to entities

# Security Model Components
Assets: Hardware
### Key Exam Notes from Lecture on Basic Security Concepts:

#### **1. C.I.A. Triad:**
- **Confidentiality**: Restricting unauthorized access (e.g., encryption). Breach = unauthorized disclosure (e.g., stolen USB drive).  
- **Integrity**: Ensuring data/system accuracy and trustworthiness. Breach = unauthorized modification (e.g., altered software code).  
- **Availability**: Ensuring timely access. Breach = disruption (e.g., DDoS attack).  
- **Related Concepts**:  
  - **Authenticity**: Verifying identities/data sources (e.g., digital signatures).  
  - **Accountability**: Tracing actions to entities (e.g., audit logs for non-repudiation).  

---

#### **2. Security Model Components:**
- **Assets**: Hardware, software, data, communication networks.  
- **Vulnerabilities**: Weaknesses (e.g., unpatched software, weak passwords).  
- **Threats**: Potential harm (e.g., malware, insider threats).  
- **Attacks**: Materialized threats (e.g., phishing, ransomware).  
- **Countermeasures**: Detection, prevention, mitigation, recovery.  
- **Risk**: Function of **impact** and **likelihood** of a threat.  

---

#### **3. Attack Classifications:**
- **By Impact**:  
  - **Active**: Alters assets (e.g., data tampering).  
  - **Passive**: Gathers information (e.g., eavesdropping).  
- **By Origin**:  
  - **Inside Attack**: By authorized user (e.g., employee leaking data).  
  - **Outside Attack**: By unauthorized entity (e.g., hacker).  

---

#### **4. Examples of Threats to C.I.A. by Asset:**
| **Asset**               | **Confidentiality**                     | **Integrity**                          | **Availability**                       |
|-------------------------|-----------------------------------------|----------------------------------------|----------------------------------------|
| **Hardware**            | Stolen unencrypted USB drive            | Malicious component replacement        | Equipment theft/disabling              |
| **Software**            | Unauthorized software copy              | Code modified for unintended tasks     | Software deletion                      |
| **Data**                | Unauthorized data read/statistical leak | Unauthorized file modification/fabrication | Data deletion/encryption (ransomware) |
| **Communication Lines** | Eavesdropping on messages               | Message modification/delay/fabrication | Network destruction (e.g., DDoS)       |

---

#### **5. Key Definitions:**
- **Risk**: Threat impact × likelihood.  
- **Countermeasures**:  
  - **Detection** (e.g., intrusion detection systems).  
  - **Prevention** (e.g., firewalls).  
  - **Mitigation** (e.g., backups).  
  - **Recovery** (e.g., disaster recovery plans).  

---

#### **6. Exam Tips:**
- **Scenario Questions**: Apply C.I.A. to identify breaches (e.g., ransomware affects availability and integrity).  
- **Compare Attacks**: Differentiate active vs. passive, insider vs. outsider.  
- **Examples**: Memorize threats from the table above for quick answers.  
- **Risk Analysis**: Use formula: **Risk = Impact × Likelihood**.  

Good luck! 🌟