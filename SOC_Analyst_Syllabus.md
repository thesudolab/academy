# SOC Analyst Curriculum (Security Operations Center)
**Duration:** 5 months (20 weeks) | **Level:** Beginner → Tier 2/3 Analyst | **Format:** Theory + Hands-on Labs + Capstone

---

## Program Overview
This curriculum takes a learner from zero to job-ready SOC Analyst (Tier 1–2), covering monitoring, detection, incident response, threat intelligence, and the growing role of AI in both attacks and defensive tooling. Structured around real SOC workflows: alert triage → investigation → containment → reporting.

---

## MODULE 1: Foundations of Security Operations (Weeks 1–3)

### Chapter 1 — Introduction to the SOC
- What a SOC is, SOC tiers (Tier 1, 2, 3), roles & responsibilities
- SOC models: in-house, MSSP, hybrid
- Shift structures, escalation paths, SLAs
- Key metrics: MTTD, MTTR, alert volume, false positive rate
- **Lab:** Map a sample SOC org chart and escalation workflow

### Chapter 2 — Networking & Systems Refresher for Analysts
- TCP/IP, common ports/protocols, packet structure
- Windows and Linux logging basics (Event Viewer, syslog)
- Active Directory basics for detection context
- Cloud fundamentals (AWS/Azure basics, shared responsibility model)
- **Lab:** Read and interpret raw Windows Security Event Logs and Linux auth logs

### Chapter 3 — Security Fundamentals & Frameworks
- CIA triad, defense-in-depth
- MITRE ATT&CK framework (tactics, techniques, procedures)
- Cyber Kill Chain
- NIST Cybersecurity Framework overview
- Common threat actor types & motivations
- **Lab:** Map three sample incidents to MITRE ATT&CK techniques

---

## MODULE 2: Monitoring Tools & Log Analysis (Weeks 4–7)

### Chapter 4 — SIEM Fundamentals
- What a SIEM does: log collection, normalization, correlation
- Overview of major platforms: Splunk, Microsoft Sentinel, IBM QRadar, Elastic (ELK/SIEM)
- Log sources: firewalls, endpoints, servers, cloud, identity providers
- Writing basic search queries (SPL/KQL fundamentals)
- **Lab:** Ingest sample logs into Splunk/Elastic and run basic searches

### Chapter 5 — Detection Engineering Basics
- Writing and tuning detection rules/correlation searches
- Understanding false positives vs false negatives
- Sigma rules — vendor-agnostic detection format
- Alert prioritization and severity scoring
- **Lab:** Write a Sigma rule to detect a brute-force login pattern; deploy in a lab SIEM

### Chapter 6 — Endpoint Detection & Response (EDR)
- EDR concepts: telemetry, process trees, behavioral detection
- Tools overview: CrowdStrike, Microsoft Defender for Endpoint, SentinelOne
- Investigating endpoint alerts: process lineage, parent-child relationships
- **Lab:** Investigate a simulated malware execution alert in an EDR console/sandbox

### Chapter 7 — Network Security Monitoring
- IDS/IPS fundamentals (Snort, Suricata)
- NetFlow analysis and traffic baselining
- Packet analysis with Wireshark/Zeek
- Detecting C2 (command and control) traffic patterns
- **Lab:** Analyze a pcap containing beaconing/C2 traffic; identify IOCs

---

## MODULE 3: Threat Intelligence & Alert Triage (Weeks 8–10)

### Chapter 8 — Cyber Threat Intelligence (CTI) Fundamentals
- Strategic, tactical, operational, technical intel
- Indicators of Compromise (IOCs) vs Indicators of Attack (IOAs)
- Threat intel feeds & platforms (MISP, OTX, commercial feeds)
- Threat actor tracking, APT group profiles
- **Lab:** Enrich a set of IOCs using threat intel platforms and document findings

### Chapter 9 — Alert Triage Methodology
- Triage workflow: initial assessment → investigation → escalation/closure
- Building an investigation checklist per alert type (phishing, malware, login anomaly)
- Documentation standards and ticketing (e.g., ServiceNow, Jira)
- Avoiding alert fatigue; prioritization frameworks
- **Lab:** Triage a queue of 10 simulated alerts, correctly escalate/close each with justification

### Chapter 10 — Phishing & Email Security Analysis
- Email header analysis (SPF/DKIM/DMARC)
- Identifying phishing indicators (URLs, attachments, sender spoofing)
- Sandboxing suspicious attachments/URLs
- AI-generated phishing: detecting LLM-crafted emails and deepfake voice/video vishing attempts
- **Lab:** Analyze 5 real-world-style phishing email samples, identify IOCs, and write an incident note

---

## MODULE 4: Incident Response (Weeks 11–14)

### Chapter 11 — Incident Response Lifecycle
- NIST IR lifecycle: Preparation, Detection & Analysis, Containment, Eradication, Recovery, Lessons Learned
- Building/using an IR playbook
- Roles during an incident (IR lead, comms, legal, technical)
- **Lab:** Walk through a tabletop exercise for a ransomware scenario

### Chapter 12 — Malware Analysis Basics for SOC Analysts
- Static vs dynamic analysis fundamentals
- Using sandboxes (Any.Run, Cuckoo) for triage
- Identifying malware families via IOC/behavior patterns
- Recognizing AI-generated/polymorphic malware behavioral patterns
- **Lab:** Detonate a sample in a sandbox and write a triage summary (behavior, IOCs, verdict)

### Chapter 13 — Digital Forensics Fundamentals
- Chain of custody principles
- Memory forensics basics (Volatility overview)
- Disk imaging and artifact analysis basics
- Timeline reconstruction
- **Lab:** Reconstruct a basic attack timeline from provided log/forensic artifacts

### Chapter 14 — Containment, Eradication & Recovery
- Isolating compromised hosts (network/EDR-based)
- Credential resets, account lockdowns
- Eradicating persistence mechanisms
- Recovery validation and monitoring for reinfection
- **Lab:** Execute a full simulated containment workflow for a compromised endpoint

---

## MODULE 5: AI in the SOC — Defense & Emerging Threats (Weeks 15–17)

### Chapter 15 — AI-Powered SOC Tools
- AI/ML in SIEM correlation and anomaly detection (UEBA — User & Entity Behavior Analytics)
- AI-assisted alert triage and auto-summarization (copilots in Sentinel/CrowdStrike/etc.)
- Benefits and risks: over-reliance, hallucinated conclusions, alert context loss
- **Lab:** Use an AI-assisted SIEM copilot feature to triage a batch of alerts; validate its conclusions manually

### Chapter 16 — Detecting AI-Enabled Attacks
- Recognizing AI-generated phishing/social engineering at scale
- Detecting prompt injection attempts against internal AI tools/chatbots
- Deepfake indicators in video/voice-based fraud (CEO fraud, vishing)
- Monitoring for abuse of internal LLM/AI copilot tools (data exfiltration via prompts)
- **Lab:** Build a detection checklist for AI-enabled social engineering attempts; apply it to sample cases

### Chapter 17 — Securing AI Systems as SOC Assets
- Monitoring AI/ML pipelines as part of the asset inventory
- MITRE ATLAS framework overview (adversarial threats to AI systems)
- Logging and alerting requirements for LLM-integrated applications
- Incident response considerations specific to AI system compromise (model theft, poisoning)
- **Lab:** Draft a monitoring/logging plan for a company's internal LLM-powered customer service tool

---

## MODULE 6: Reporting, Career & Capstone (Weeks 18–20)

### Chapter 18 — Reporting & Communication for SOC Analysts
- Writing clear incident reports and shift handover notes
- Communicating with stakeholders (technical vs executive)
- Post-incident reviews and lessons-learned documentation
- **Lab:** Write a full incident report for a completed capstone scenario

### Chapter 19 — Certifications & Career Path
- Certification roadmap: CompTIA Security+, CySA+, Splunk Core Certified, Microsoft SC-200, GCIH, BTL1 (Blue Team Level 1)
- Building a SOC analyst portfolio (home SIEM lab, TryHackMe SOC path, LetsDefend)
- Interview preparation: common SOC analyst technical questions
- **Lab:** Complete a full SOC simulation exercise on LetsDefend or similar platform

### Chapter 20 — Capstone: Full SOC Shift Simulation
- Simulated 4-hour SOC shift: live alert queue across phishing, malware, network anomaly, and an AI-enabled social engineering attempt
- Full workflow: triage → investigation → containment → report → handover
- **Deliverable:** Shift log, incident report, and executive summary presentation

---

## Recommended Tools Stack
Splunk (Free/Enterprise trial), Microsoft Sentinel, Elastic Stack (ELK), Wireshark, Zeek, Suricata/Snort, TheHive + MISP (case management + threat intel), Any.Run/Cuckoo Sandbox, Volatility, CyberChef, LetsDefend, TryHackMe SOC Level 1/2 paths, MITRE ATT&CK Navigator, MITRE ATLAS.

## Assessment Structure
- Weekly labs (40%)
- Module quizzes (20%)
- Capstone shift simulation (30%)
- Portfolio/writeups (10%)

---

## Suggested Study Sequence (Both Syllabi)
If pursuing both tracks, complete SOC Analyst Modules 1–3 first (shared foundation), then branch:
- **Blue Team path:** Finish SOC Analyst Modules 4–6
- **Red Team path:** Move into Pentesting Modules 2–6

This shared-foundation approach reflects real career paths, where many red teamers start in SOC roles and vice versa.
