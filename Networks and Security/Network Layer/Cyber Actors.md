# Cyber Actors: Who Are They?
The lecture identifies several main types of cyber actors:

- **Cybercriminals:**
    - **Motivation:** Primarily illegal profit.
    - **Typical Attacks:** Money theft, personal document ransom, data breaches, Distributed Denial of Service (DDoS), cryptojacking.
    - **Attack Vectors:** Malware, social engineering/email, social media, botnets.
        
- **Nation States:**
    - **Motivation:** Seeking high-quality intelligence, sabotage (especially of critical infrastructure), subversion (e.g., in political elections), and engaging in cyberwarfare.
    - **Typical Attacks:** Influence campaigns, data breaches, DDoS, Advanced Persistent Threats (APTs).
    - **Attack Vectors:** Similar to cybercriminals but generally more advanced.
- **Hacktivists:**
    - **Motivation:** Driven by political, religious, or social ideologies, often aiming for social change.
    - **Typical Attacks:** Web defacements, data breaches (leaking confidential/compromising information), DDoS.
    - **Attack Vectors:** Similar to cybercriminals, but generally less advanced.
        
- **Insiders:**
    - **Motivation (Intentional):** Often disgruntled employees seeking to publish information, install malware, or steal/sell information.
    - **Key Characteristic:** They have legitimate access to valuable resources.
    - _(Note: Unintentional attacks by insiders, like accidentally deleting files, are not considered insider threats for this module)_.
        
- **Script Kiddies (Noobs):**
    - **Motivation:** Desire to join real hacker groups, the challenge itself, or curiosity.
    - **Characteristics:** Less skilled, use tools found on the internet without a clear strategy or methodology, but can still succeed.

# Cyberwarfare
- **Definition:** The activity of fighting a cyberwar, including the weapons and methods used in cyberspace.
- **Example:** The cyber attacks on Estonia in April-May 2007 following the relocation of a Soviet war monument.
    
- **Cyberwarfare vs. Conventional Warfare:**
    - Conventional war involves conflict between states with violence and physical damage/destruction.
    - NATO intervention was denied in the Estonia case because there were no casualties or property damage.
    - The right to self-defence is typically triggered by the use of force, which in cyber terms, means large-scale attacks on critical infrastructure with effects comparable to an armed attack (e.g., casualties).
    - Activities like propaganda, harassment, crime, intelligence collection, and cyber reconnaissance might not be considered conventional war, but it's a "grey area".
        
    - A key question: "is it in your interest to declare it so?".
        
- **Attractiveness of Cyberwarfare:**
    - Cost-effective and fast.
    - Can disrupt adversaries without causing casualties.
    - Hard for victims to detect and neutralize.
    - Exploitable vulnerabilities increase with technology.
    - **Anonymity & Attribution:** It's challenging to trace attack origins due to false IP addresses, foreign servers, and aliases. This leads to plausible deniability, where attackers can claim their systems were hacked.
    - **Cyber Deterrence:** Difficult because if you can't attribute an attack, you can't retaliate effectively. Retaliating against the wrong actor is unjust and a war crime.

# Advanced Persistent Threats (APTs)

- **Definition:** A long-term pattern of targeted, sophisticated attacks
- **Key Features:**
    - **Advanced:** Uses cutting-edge techniques, including zero-day exploits (exploiting unknown vulnerabilities).
    - **Persistent:** Employs stealthy techniques to remain hidden in the target system for extended periods (months/years).
    - **Threat:** Malicious in nature, often aimed at data exfiltration for espionage.
        
- **APT Lifecycle (examples from diagrams):**
    - Define target 🎯
    - Find and organize accomplices
    - Build or acquire tools 🛠️
    - Research target
    - Test for detection
    - Deployment
    - Initial intrusion/compromise 🚪
    - Establish foothold
    - Outbound connection initiated / Escalate privileges
    - Expand access and obtain credentials / Internal recon
    - Strengthen foothold / Maintain presence
    - Exfiltrate data 📁
    - Cover tracks and remain undetected / Complete mission 💨
    - (Post-Exploitation phase often involves repeating steps until the mission is accomplished)