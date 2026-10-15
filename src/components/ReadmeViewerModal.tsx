import React, { useState } from 'react';
import { X, FileText, Copy, Check, Download, ExternalLink } from 'lucide-react';
import { audioEngine } from './AudioEngine';

interface ReadmeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReadmeViewerModal: React.FC<ReadmeViewerModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const fullMarkdown = `<div align="center">

<!-- ======================================================== -->
<!-- CYBERPUNK HEADER BANNER // ANIMATED VENOM CAPSULE       -->
<!-- ======================================================== -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=venom&height=280&color=0:000000,45:001a0a,100:00FF41&text=MUHAMMAD%20ARHUM&fontColor=00FF41&fontSize=54&fontAlignY=38&desc=%E2%96%8C%20SYSTEM%20ONLINE%20%E2%96%90%20%C2%B7%20AI%20ENGINEER%20%C2%B7%20FULL-STACK%20DEV%20%C2%B7%20FOUNDER&descAlignY=60&descSize=15&animation=twinkling" alt="Muhammad Arhum Cyberpunk Header Banner" />

<!-- ======================================================== -->
<!-- DYNAMIC NEON GREEN TERMINAL TYPING STREAM               -->
<!-- ======================================================== -->
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=17&duration=2400&pause=700&color=00FF41&background=00000000&center=true&vCenter=true&width=950&height=50&lines=%3E+INITIALIZING+MUHAMMAD_ARHUM.exe+...;%3E+SCANNING+NETWORK...+QUANTUM+NODES+SYNCHRONIZED;%3E+ACTIVATING+MODULES%3A+AI+%7C+FULL-STACK+%7C+ERP+%7C+POS;%3E+BYPASSING+FIREWALL...+ACCESS+GRANTED+%E2%9C%94;%3E+FOUNDER+%26+CEO+%40+ABYTESOL;%3E+MISSION%3A+INNOVATE.+CONNECT.+GROW." alt="Terminal Typing Animation" />

<br/>

<!-- ======================================================== -->
<!-- TELEMETRY & CLEARANCE BADGES                            -->
<!-- ======================================================== -->
<a href="#-system_status"><img src="https://img.shields.io/badge/STATUS-SYSTEM%20ONLINE-00FF41?style=for-the-badge&logo=gnubash&logoColor=000000&labelColor=000000" alt="System Status Online"/></a>
<a href="#-active_modules"><img src="https://img.shields.io/badge/CLEARANCE-LEVEL%205%20SYSADMIN-00d4ff?style=for-the-badge&logo=securityscorecard&logoColor=00d4ff&labelColor=000000" alt="Clearance Level 5"/></a>
<a href="#-system_status"><img src="https://img.shields.io/badge/LOCATION-PAKISTAN-00FF41?style=for-the-badge&logo=googlemaps&logoColor=00FF41&labelColor=000000" alt="Location Pakistan"/></a>
<img src="https://komarev.com/ghpvc/?username=MuhamadArhum&label=VISITOR%20RADAR&color=00d4ff&style=for-the-badge&labelColor=000000" alt="Visitor Radar Count"/>

</div>

<img src="https://capsule-render.vercel.app/api?type=rect&height=3&color=0:000000,50:00FF41,100:000000" width="100%" alt="Neon Divider Line"/>

<!-- ======================================================== -->
<!-- ASCII ART CALLSIGN                                      -->
<!-- ======================================================== -->
\`\`\`text
 __  __ _   _ _   _    _    __  __ __  __    _    ____       _    ____  _   _ _   _ __  __
|  \\/  | | | | | | |  / \\  |  \\/  |  \\/  |  / \\  |  _ \\     / \\  |  _ \\| | | | | | |  \\/  |
| |\\/| | | | | |_| | / _ \\ | |\\/| | |\\/| | / _ \\ | | | |   / _ \\ | |_) | |_| | | | | |\\/| |
| |  | | |_| |  _  |/ ___ \\| |  | | |  | |/ ___ \\| |_| |  / ___ \\|  _ <|  _  | |_| | |  | |
|_|  |_|\\___/|_| |_/_/   \\_\\_|  |_|_|  |_/_/   \\_\\____/  /_/   \\_\\_| \\_\\_| |_|\\___/|_|  |_|
\`\`\`

## \`> ACCESSING_USER_FILE...\`

\`\`\`bash
root@arhum:~$ whoami
muhammad_arhum

root@arhum:~$ cat identity.json
{
  "name"        : "Muhammad Arhum",
  "title"       : "AI Engineer & Full-Stack Architect",
  "organization": "AbyteSol (Founder & CEO)",
  "clearance"   : "Level 5",
  "mission"     : "INNOVATE. CONNECT. GROW.",
  "location"    : "Pakistan",
  "status"      : "Building. Shipping. Repeating."
}

root@arhum:~$ ./boot_sequence.sh
[  OK  ] Core neural identity loaded
[  OK  ] AI agent runtime online
[  OK  ] Full-stack engine spinning at 0.0.0.0:3000
[  OK  ] Enterprise ERP & POS modules synchronized
[  OK  ] Coffee reserves ................. CRITICAL ☕ (100%)
>> ALL SYSTEMS OPERATIONAL. Welcome to my digital command center._
\`\`\`

> **"Every great product starts with a question: What if we built it better?"**

Main **Muhammad Arhum** hoon: AI Engineer aur Full-Stack Developer. Mera focus useful digital products, intelligent systems aur business software banana hai. Pehle sketch se working product tak: architecture, code, mushkil problems aur polished experience.

Main **AbyteSol** ka **Founder & CEO** hoon.

<div align="center">

\`\`\`diff
+ [ MISSION DIRECTIVE ] : INNOVATE.  CONNECT.  GROW.
\`\`\`

</div>

<img src="https://capsule-render.vercel.app/api?type=rect&height=2&color=0:000000,50:00d4ff,100:000000" width="100%" alt="Cyan Divider Line"/>

## \`> ACTIVE_MODULES\`

<table>
<tr>
<td width="50%" valign="top">

### 🤖 \`[ MODULE_01 ]\` Artificial Intelligence
\`\`\`yaml
status: ACTIVE // 70% POWER
core:
  - Generative AI & Autonomous Agent Systems
  - Intelligent Pipeline Automation
  - Cognitive Tooling to Simplify Complex Work
\`\`\`

</td>
<td width="50%" valign="top">

### 💻 \`[ MODULE_02 ]\` Full-Stack Engineering
\`\`\`yaml
status: ACTIVE // 85% POWER
core:
  - Resilient End-to-End Web Applications
  - Responsive, Modern Cybernetic Interfaces
  - High-Precision, Maintainable Codebases
\`\`\`

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🏢 \`[ MODULE_03 ]\` Business Systems
\`\`\`yaml
status: ACTIVE // 90% POWER
core:
  - High-Throughput POS, CRM & ERP Architecture
  - Real-time Inventory & Automated Billing Engines
  - Fault-Tolerant Enterprise Business Workflows
\`\`\`

</td>
<td width="50%" valign="top">

### 🚀 \`[ MODULE_04 ]\` Product Development
\`\`\`yaml
status: ACTIVE // 90% POWER
core:
  - Solving Acute Commercial Market Problems
  - Zero-to-One Architecture & Product Strategy
  - Commercial Scaling as Founder & CEO @ AbyteSol
\`\`\`

</td>
</tr>
</table>

## \`> POWER_LEVELS\`

\`\`\`text
 AI & AUTOMATION   [██████████████░░░░░░]  70%
 FULL-STACK DEV    [█████████████████░░░]  85%
 BUSINESS SYSTEMS  [██████████████████░░]  90%
 DESKTOP APPS      [███████████████░░░░░]  75%
 PRODUCT THINKING  [██████████████████░░]  90%
 CAFFEINE SUPPLY   [████████████████████] 100%
\`\`\`

<img src="https://capsule-render.vercel.app/api?type=rect&height=2&color=0:000000,50:00FF41,100:000000" width="100%" alt="Green Divider Line"/>

## \`> TECH_ARSENAL\`

<div align="center">

### \`[ 01_PROGRAMMING_LANGUAGES ]\`
<p>
  <img src="https://img.shields.io/badge/Python-000000?style=for-the-badge&logo=python&logoColor=00FF41&labelColor=000000&color=00FF41" alt="Python"/>
  <img src="https://img.shields.io/badge/TypeScript-000000?style=for-the-badge&logo=typescript&logoColor=00d4ff&labelColor=000000&color=00d4ff" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/JavaScript-000000?style=for-the-badge&logo=javascript&logoColor=00FF41&labelColor=000000&color=00FF41" alt="JavaScript"/>
</p>

### \`[ 02_FRAMEWORKS_&_RUNTIMES ]\`
<p>
  <img src="https://img.shields.io/badge/React-000000?style=for-the-badge&logo=react&logoColor=00d4ff&labelColor=000000&color=00d4ff" alt="React"/>
  <img src="https://img.shields.io/badge/Node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=00FF41&labelColor=000000&color=00FF41" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Electron-000000?style=for-the-badge&logo=electron&logoColor=00d4ff&labelColor=000000&color=00d4ff" alt="Electron"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-000000?style=for-the-badge&logo=tailwindcss&logoColor=00FF41&labelColor=000000&color=00FF41" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/HTML5-000000?style=for-the-badge&logo=html5&logoColor=00d4ff&labelColor=000000&color=00d4ff" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-000000?style=for-the-badge&logo=css3&logoColor=00FF41&labelColor=000000&color=00FF41" alt="CSS3"/>
</p>

### \`[ 03_AI_&_DEVELOPER_TOOLS ]\`
<p>
  <img src="https://img.shields.io/badge/AI_Automation-000000?style=for-the-badge&logo=openai&logoColor=00FF41&labelColor=000000&color=00FF41" alt="AI & Automation"/>
  <img src="https://img.shields.io/badge/Git-000000?style=for-the-badge&logo=git&logoColor=00d4ff&labelColor=000000&color=00d4ff" alt="Git"/>
  <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=00FF41&labelColor=000000&color=00FF41" alt="GitHub"/>
  <img src="https://img.shields.io/badge/VS_Code-000000?style=for-the-badge&logo=visualstudiocode&logoColor=00d4ff&labelColor=000000&color=00d4ff" alt="VS Code"/>
</p>

<br/>

<img src="https://skillicons.dev/icons?i=python,typescript,javascript,react,nodejs,html,css,tailwind,electron,git,github,vscode&perline=12&theme=dark" alt="Verified Skill Matrix"/>

</div>

<img src="https://capsule-render.vercel.app/api?type=rect&height=2&color=0:000000,50:00d4ff,100:000000" width="100%" alt="Cyan Divider Line"/>

## \`> MISSION_FILES\`

<table>
<tr>
<td width="50%" valign="top">

### 🎟️ \`restaurant_pos.exe\`
**Classification**: Level 2 // POS · Orders · Restaurant Mgmt  
Restaurant operations, order handling aur smooth daily workflows ke liye POS software.

\`\`\`text
STATUS: PRODUCTION // LOW LATENCY
FOCUS : Floorplan · Split Billing · KDS
TECH  : Electron · React · TypeScript · Node
\`\`\`
👉 [**DECRYPT FILE / VIEW REPOSITORY**](https://github.com/MuhamadArhum?tab=repositories)

</td>
<td width="50%" valign="top">

### 📦 \`inventory_core.exe\`
**Classification**: Level 2 // Inventory · Stock · Operations  
Inventory organize karne aur stock management asaan banane ka enterprise software.

\`\`\`text
STATUS: ACTIVE // REAL-TIME AUDIT
FOCUS : Barcode Scanner · Low-Stock Alerts
TECH  : Node.js · React · PostgreSQL · WS
\`\`\`
👉 [**DECRYPT FILE / VIEW REPOSITORY**](https://github.com/MuhamadArhum?tab=repositories)

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🧾 \`billing_engine.exe\`
**Classification**: Level 3 // Billing · Transactions · Automation  
Billing logic, fiscal compliance, transactions aur business processes software.

\`\`\`text
STATUS: ACTIVE // ZERO DRIFT LEDGER
FOCUS : Tax Calculations · PDF Signatures
TECH  : TypeScript · Node.js · Prisma · APIs
\`\`\`
👉 [**DECRYPT FILE / VIEW REPOSITORY**](https://github.com/MuhamadArhum?tab=repositories)

</td>
<td width="50%" valign="top">

### 🏢 \`crm_erp_suite.exe\`
**Classification**: Level 3 // CRM · ERP · Business Mgmt  
Customer management aur operational workflows behtar karne ke liye CRM & ERP.

\`\`\`text
STATUS: PRODUCTION // ENTERPRISE GRADE
FOCUS : Kanban Pipelines · 360 Customer BI
TECH  : React · TypeScript · Node · RBAC
\`\`\`
👉 [**DECRYPT FILE / VIEW REPOSITORY**](https://github.com/MuhamadArhum?tab=repositories)

</td>
</tr>
</table>

> *Note: To connect direct repository links, replace \`https://github.com/MuhamadArhum?tab=repositories\` with the exact repository URL (e.g., \`https://github.com/MuhamadArhum/<repo-name>\`).*

<img src="https://capsule-render.vercel.app/api?type=rect&height=2&color=0:000000,50:00FF41,100:000000" width="100%" alt="Neon Divider Line"/>

## \`> LIVE_TELEMETRY\`

<div align="center">

<img height="165" src="https://github-readme-stats.vercel.app/api?username=MuhamadArhum&show_icons=true&hide_border=true&bg_color=000000&title_color=00FF41&text_color=a7f3d0&icon_color=00d4ff&ring_color=00FF41&rank_icon=github" alt="MuhamadArhum GitHub Stats"/>
<img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=MuhamadArhum&layout=compact&hide_border=true&bg_color=000000&title_color=00FF41&text_color=a7f3d0" alt="MuhamadArhum Top Languages"/>

<br/><br/>

<img width="95%" src="https://github-readme-streak-stats.herokuapp.com/?user=MuhamadArhum&background=000000&ring=00FF41&fire=00d4ff&currStreakLabel=00FF41&sideLabels=a7f3d0&currStreakNum=ffffff&sideNums=ffffff&dates=6b7280&stroke=00FF4133&hide_border=true" alt="MuhamadArhum Contribution Streak"/>

<br/>

<img width="95%" src="https://github-readme-activity-graph.vercel.app/graph?username=MuhamadArhum&bg_color=000000&color=00FF41&line=00FF41&point=00d4ff&area=true&area_color=00FF41&hide_border=true" alt="MuhamadArhum GitHub Activity Graph"/>

</div>

## \`> ACHIEVEMENTS_UNLOCKED\`

<div align="center">

<img src="https://github-profile-trophy.vercel.app/?username=MuhamadArhum&theme=matrix&no-frame=true&no-bg=true&margin-w=10&row=1&column=7" alt="GitHub Matrix Trophies"/>

</div>

## \`> CONTRIBUTION_SNAKE\`

<div align="center">

<!-- Automated GitHub Contribution Snake generated via .github/workflows/snake.yml -->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/MuhamadArhum/MuhamadArhum/output/github-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/MuhamadArhum/MuhamadArhum/output/github-snake.svg" />
  <img alt="Snake eating contributions" src="https://raw.githubusercontent.com/MuhamadArhum/MuhamadArhum/output/github-snake-dark.svg" />
</picture>

</div>

<img src="https://capsule-render.vercel.app/api?type=rect&height=2&color=0:000000,50:00FF41,100:000000" width="100%" alt="Neon Divider Line"/>

## \`> ROADMAP.md\`

\`\`\`text
[x] Build real business software (POS, Inventory, Billing)
[x] Launch AbyteSol (Founder & CEO)
[~] Expand AI-powered autonomous features into every enterprise product
[~] Ship more open projects & tools on GitHub
[ ] Scale AbyteSol into an international tech conglomerate
[ ] Keep learning. Keep building. Keep shipping.
\`\`\`

## \`> SYSTEM_STATUS\`

\`\`\`ini
[CURRENT_FOCUS]   Building practical software and digital solutions
[INTERESTS]       AI, automation, intelligent autonomous applications
[BUILD_STACK]     Modern development tools and technologies (React, TS, Node, Python)
[APPROACH]        Understand the problem > Simplify the solution > Build with purpose
[AVAILABILITY]    Open to meaningful collaborations and exciting projects
[LOCATION]        Pakistan
\`\`\`

## \`> ESTABLISH_CONNECTION\`

<div align="center">

<!-- Replace YOUR_LINKEDIN, YOUR_EMAIL, YOUR_WEBSITE with your actual coordinates -->
<a href="https://linkedin.com/in/YOUR_LINKEDIN"><img src="https://img.shields.io/badge/LINKEDIN-000000?style=for-the-badge&logo=linkedin&logoColor=00d4ff&labelColor=000000&color=00d4ff" alt="LinkedIn Profile"/></a>
<a href="mailto:muhamadarhum425@gmail.com"><img src="https://img.shields.io/badge/EMAIL-000000?style=for-the-badge&logo=gmail&logoColor=00FF41&labelColor=000000&color=00FF41" alt="Email Direct"/></a>
<a href="https://YOUR_WEBSITE"><img src="https://img.shields.io/badge/ABYTESOL-000000?style=for-the-badge&logo=googlechrome&logoColor=00d4ff&labelColor=000000&color=00d4ff" alt="AbyteSol Official Site"/></a>

<br/><br/>

### \`> THINK BIGGER. BUILD SMARTER. KEEP SHIPPING._\`

<a href="https://github.com/MuhamadArhum?tab=repositories">
<img src="https://img.shields.io/badge/EXPLORE%20MY%20WORK-000000?style=for-the-badge&logo=github&logoColor=00FF41&labelColor=000000&color=00FF41" alt="Explore Repositories"/>
</a>
<a href="https://github.com/MuhamadArhum">
<img src="https://img.shields.io/badge/FOLLOW%20MY%20JOURNEY-000000?style=for-the-badge&logo=github&logoColor=00d4ff&labelColor=000000&color=00d4ff" alt="Follow on GitHub"/>
</a>

<br/><br/>

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&section=footer&height=140&color=0:00FF41,45:001a0a,100:000000" alt="Cyber Waving Footer"/>

**\`[ INNOVATE. CONNECT. GROW. ]\`**

<sub>\`> Powered by curiosity, code, and coffee ☕ | END_OF_TRANSMISSION\`</sub>

</div>`;

  const copySource = () => {
    audioEngine.playKeypress();
    navigator.clipboard.writeText(fullMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/90 backdrop-blur-md">
      <div className="relative w-full max-w-4xl rounded-2xl border border-[#00FF41]/40 bg-[#040a06] shadow-[0_0_40px_rgba(0,255,65,0.25)] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#020503] border-b border-[#00FF41]/30 px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00FF41]">
            <FileText className="w-4 h-4" />
            <span className="font-bold">COMPLETE GITHUB PROFILE SOURCE // README.md</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copySource}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-[#00FF41] text-black font-extrabold hover:bg-[#33ff66] transition-all shadow-[0_0_12px_rgba(0,255,65,0.3)] cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED TO CLIPBOARD ✔' : 'COPY RAW CODE'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-neutral-400 hover:text-rose-400 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 font-mono text-xs text-neutral-300 bg-black/95 select-text">
          <pre className="whitespace-pre-wrap leading-relaxed text-neutral-300 font-mono text-[11px]">
            {fullMarkdown}
          </pre>
        </div>

        <div className="bg-[#020503] border-t border-neutral-800 px-5 py-3 flex items-center justify-between text-xs font-mono text-neutral-400">
          <span>GitHub Target Repository: <strong className="text-[#00FF41]">MuhamadArhum/MuhamadArhum</strong></span>
          <button
            onClick={copySource}
            className="text-[#00FF41] hover:underline font-bold"
          >
            {copied ? 'Copied!' : 'Click to Copy Full Code'}
          </button>
        </div>
      </div>
    </div>
  );
};
