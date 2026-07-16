/* =====================================================================
   THESUDOLAB ACADEMY — SITE CONTENT
   ---------------------------------------------------------------------
   Edit anything inside the quotes below, save this file, then refresh
   the page in your browser. You do NOT need to touch index.html,
   app.js, or the CSS for text changes.

   Rules:
   - Keep the quote marks "" around text.
   - Keep the commas at the end of each line.
   - Do not delete the { } or [ ] brackets — just edit what's inside.
   ===================================================================== */

const CONTENT = {

  // ---------------- BRAND (top-left logo) ----------------
  brand: {
    mark: "#!",                          // the little icon in the logo box
    name: "TheSudoLab",
    tag: "Academy",
    contactLabel: "Contact",
    contactEmail: "hello@thesudolab.academy"
  },

  // ---------------- NAV MENU ----------------
  // Add a new tab by copying a line and changing label + href.
  // "href" must match the filename of the page you create.
  // Set active:true only on the page currently open (each page's own
  // content.js copy should mark its own tab active — see note at bottom).
  nav: [
    { label: "Home",                 href: "index.html" },
    { label: "Pentesting Syllabus",  href: "pentesting-syllabus.html" },
    { label: "SOC Analyst Syllabus", href: "soc-analyst-syllabus.html" },
    { label: "Reviews",              href: "reviews.html" },
    { label: "Curriculum",           href: "curriculum.html" }
  ],

  // ---------------- BADGES (top of hero) ----------------
  badges: {
    cohortText: "Next cohort starts —",
    cohortDate: "Aug 18th",
    announcement: "🛡️ NEW — Cloud & AI-assisted SOC tooling now included",
    announcementLink: "curriculum.html"
  },

  // ---------------- HERO ----------------
  hero: {
    titlePlain: "Break In. ",
    titleAccent: "Lock Down.",
    titleAccentBreak: true,              // true = line break after "Lock Down."
    titleGlitchPrefix: "Get ",
    titleGlitch: "Hired.",
    subtitle: "Random tutorials won't get you past a live SOC interview. Master real offensive and defensive workflows — recon, exploitation, log triage, and incident response — through lab-based, pattern-driven training built for Pentesting and SOC Analyst roles.",
    ctaText: "🔔 Join Waitlist →",
    ctaNote: "Next cohort opens Aug 18th · Limited seats"
  },

  // ---------------- FLOATING TESTIMONIAL CARD ----------------
  testimonial: {
    stars: 5,
    quote: "The lab environment felt exactly like a real SOC dashboard. I went from confused about log triage to closing incidents confidently. Cracked my analyst interview in three weeks.",
    initials: "PR",
    name: "Priya R.",
    role: "SOC Analyst @ Wipro"
  },

  // ---------------- TERMINAL ANIMATION ----------------
  // Two "sessions" that type themselves out on loop.
  // cls options: prompt (green $), info (cyan), warn (amber), crit (red), ok (green), "" (plain white)
  terminalSessions: [
    {
      title: "// RED TEAM SESSION",
      lines: [
        { text: "$ nmap -sV -T4 10.0.12.0/24", cls: "prompt" },
        { text: "Scanning 254 hosts... done", cls: "" },
        { text: "Host 10.0.12.4 up — ports 22,80,443 open", cls: "info" },
        { text: "[+] Outdated Apache version detected", cls: "warn" },
        { text: "$ msfconsole -q -x \"use exploit/...\"", cls: "prompt" },
        { text: "[*] Exploit staged... session opened", cls: "ok" }
      ]
    },
    {
      title: "// BLUE TEAM SESSION",
      lines: [
        { text: "$ tail -f /var/log/siem/alerts.log", cls: "prompt" },
        { text: "[ALERT] 45 failed logins in 60s — 10.0.12.4", cls: "crit" },
        { text: "[SOC] Correlating with firewall logs...", cls: "info" },
        { text: "[SOC] Escalating to Tier 2 analyst", cls: "warn" },
        { text: "$ splunk search index=firewall action=blocked", cls: "prompt" },
        { text: "[✓] Incident contained — ticket #4471 closed", cls: "ok" }
      ]
    }
  ],

  // ---------------- SOCIAL LINKS (floating right rail) ----------------
  social: {
    linkedin: "#",
    youtube: "#",
    instagram: "#"
  },

  // ---------------- STATS BAR ----------------
  stats: [
    { value: "92", suffix: "%",     label: "Placement rate" },
    { value: "6.8", suffix: "L avg", label: "Average package" },
    { value: "40", suffix: "+",     label: "Hiring partners" },
    { value: "120", suffix: "+ hrs", label: "Hands-on lab time" }
  ],

  // ---------------- TWO TRACKS ----------------
  tracksSection: {
    eyebrow: "Choose your side",
    title: "Two Tracks. One Range.",
    subtitle: "Go offensive, go defensive, or master both. Every track ships with a full syllabus you can dig into before you enroll."
  },
  tracks: [
    {
      color: "red",
      tag: "OFFENSIVE SECURITY",
      title: "Pentesting Track",
      desc: "Learn to think like an attacker — recon, enumeration, exploitation, privilege escalation, and reporting — against real, isolated lab environments.",
      items: [
        "Network & web app penetration testing",
        "Active Directory attack paths",
        "Burp Suite, Nmap, Metasploit, Nessus",
        "Report writing & client-ready findings"
      ],
      linkText: "View full syllabus →",
      linkHref: "pentesting-syllabus.html"
    },
    {
      color: "blue",
      tag: "DEFENSIVE SECURITY",
      title: "SOC Analyst Track",
      desc: "Learn to detect, triage, and respond — SIEM monitoring, alert correlation, threat hunting, and incident response inside a live-feeling SOC.",
      items: [
        "SIEM tooling — Splunk, Wireshark, ELK",
        "Alert triage & severity classification",
        "Threat hunting & log correlation",
        "Incident response & escalation runbooks"
      ],
      linkText: "View full syllabus →",
      linkHref: "soc-analyst-syllabus.html"
    }
  ],

  // ---------------- CURRICULUM PHASES ----------------
  curriculumSection: {
    eyebrow: "The path",
    title: "Your Learning Path",
    subtitle: "Four phases, in order — each one unlocks the skills the next phase depends on."
  },
  phases: [
    {
      num: "01",
      title: "Networking & OS Foundations",
      desc: "TCP/IP, OSI layers, Linux & Windows internals, scripting basics — the ground truth every attack and every alert is built on.",
      tools: ["Linux", "Bash", "TCP/IP", "PowerShell"]
    },
    {
      num: "02",
      title: "Offensive Security — Pentesting",
      desc: "Recon, scanning, exploitation, and privilege escalation across network and web application targets in isolated lab ranges.",
      tools: ["Nmap", "Burp Suite", "Metasploit", "Nessus"]
    },
    {
      num: "03",
      title: "Defensive Security — SOC Operations",
      desc: "SIEM monitoring, log correlation, alert triage, and incident response using the same tools running in real security operations centers.",
      tools: ["Splunk", "Wireshark", "ELK Stack", "Sigma Rules"]
    },
    {
      num: "04",
      title: "Capstone & Placement",
      desc: "A full red-vs-blue simulation, mock interviews, resume review, and direct referrals to our hiring partners.",
      tools: ["Mock Interviews", "Resume Lab", "Referrals"]
    }
  ],

  // ---------------- REVIEWS SECTION ----------------
  reviewsSection: {
    eyebrow: "From the range",
    title: "Placed & Proven",
    subtitle: "A few voices from analysts and testers who trained here."
  },
  reviews: [
    {
      stars: 5,
      quote: "The Active Directory attack labs alone were worth the course. I walked into my pentest interview and recognized every scenario they threw at me.",
      initials: "AK",
      name: "Arun K.",
      role: "Jr. Pentester @ Deloitte"
    },
    {
      stars: 5,
      quote: "I came in with zero security background. The SOC track broke down alert triage so clearly that I was confident reading real Splunk dashboards by week four.",
      initials: "SN",
      name: "Sneha N.",
      role: "SOC Analyst @ Infosys"
    },
    {
      stars: 5,
      quote: "Every module maps to an actual job task, not just theory. The capstone red-vs-blue exercise is the closest thing to a real incident I've done.",
      initials: "MV",
      name: "Mohit V.",
      role: "Security Analyst @ TCS"
    }
  ],

  // ---------------- FOOTER CTA + FOOTER ----------------
  footerCta: {
    eyebrow: "Ready when you are",
    title: "Your Seat On The Range Is Waiting",
    subtitle: "Seats for the Aug 18th cohort are limited to keep every lab supervised.",
    ctaText: "🔔 Join Waitlist →"
  },
  footer: {
    text: "© 2026 TheSudoLab Academy"
  }
};
