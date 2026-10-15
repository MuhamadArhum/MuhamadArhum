import React, { useState } from 'react';
import { Copy, Check, Download, FileCode, CheckCircle2, AlertTriangle, ShieldCheck, ExternalLink, Terminal, Sparkles, BookOpen } from 'lucide-react';
import { audioEngine } from './AudioEngine';

interface ReadmeStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialUsername?: string;
}

export const ReadmeStudioModal: React.FC<ReadmeStudioModalProps> = ({
  isOpen,
  onClose,
  initialUsername = 'MuhamadArhum',
}) => {
  const [activeTab, setActiveTab] = useState<'readme' | 'workflow' | 'guide' | 'checklist'>('readme');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Customizable parameters
  const [username, setUsername] = useState(initialUsername);
  const [fullName, setFullName] = useState('Muhammad Arhum');
  const [accentColor, setAccentColor] = useState('00FF41');
  const [linkedinHandle, setLinkedinHandle] = useState('muhamadarhum');
  const [emailAddress, setEmailAddress] = useState('muhamadarhum425@gmail.com');
  const [websiteUrl, setWebsiteUrl] = useState('https://abytesol.com');

  if (!isOpen) return null;

  const copyToClipboard = (text: string, type: string) => {
    audioEngine.playKeypress();
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const workflowYaml = `name: Generate Contribution Snake Animation

on:
  # Run automatically every 12 hours
  schedule:
    - cron: "0 */12 * * *"
  
  # Allows manual execution anytime from the Actions tab
  workflow_dispatch:
  
  # Run on every push to the default branch
  push:
    branches:
      - main
      - master

permissions:
  contents: write

jobs:
  generate:
    runs-on: ubuntu-latest
    timeout-minutes: 5

    steps:
      # Step 1: Generates the snake SVGs from GitHub user contribution graph
      - name: Generate contribution snake SVGs
        uses: Platane/snk@v3
        with:
          github_user_name: \${{ github.repository_owner }}
          outputs: |
            dist/github-snake.svg
            dist/github-snake-dark.svg?palette=github-dark&color_snake=#${accentColor}&color_dots=#161b22,#0e4429,#006d32,#26a641,#${accentColor}
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}

      # Step 2: Deploy the generated SVGs to the 'output' branch
      - name: Deploy to output branch
        uses: crazy-max/ghaction-github-pages@v3.1.0
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}`;

  const generatedReadme = `<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=venom&height=280&color=0:000000,45:001a0a,100:${accentColor}&text=${encodeURIComponent(fullName.toUpperCase())}&fontColor=${accentColor}&fontSize=54&fontAlignY=38&desc=%E2%96%8C%20SYSTEM%20ONLINE%20%E2%96%90%20%C2%B7%20AI%20ENGINEER%20%C2%B7%20FULL-STACK%20DEV%20%C2%B7%20FOUNDER&descAlignY=60&descSize=15&animation=twinkling" alt="${fullName} Cyberpunk Header" />

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=17&duration=2400&pause=700&color=${accentColor}&background=00000000&center=true&vCenter=true&width=950&height=50&lines=%3E+INITIALIZING+${encodeURIComponent(fullName.replace(/\s+/g, '_'))}.exe+...;%3E+SCANNING+NETWORK...+QUANTUM+NODES+SYNCHRONIZED;%3E+ACTIVATING+MODULES%3A+AI+%7C+FULL-STACK+%7C+ERP+%7C+POS;%3E+BYPASSING+FIREWALL...+ACCESS+GRANTED+%E2%9C%94;%3E+FOUNDER+%26+CEO+%40+ABYTESOL;%3E+MISSION%3A+INNOVATE.+CONNECT.+GROW." alt="Typing Animation" />

<br/>

<a href="#-system_status"><img src="https://img.shields.io/badge/STATUS-SYSTEM%20ONLINE-${accentColor}?style=for-the-badge&logo=gnubash&logoColor=000000&labelColor=000000" alt="System Status Online"/></a>
<a href="#-active_modules"><img src="https://img.shields.io/badge/CLEARANCE-LEVEL%205%20SYSADMIN-00d4ff?style=for-the-badge&logo=securityscorecard&logoColor=00d4ff&labelColor=000000" alt="Clearance Level 5"/></a>
<a href="#-system_status"><img src="https://img.shields.io/badge/LOCATION-PAKISTAN-${accentColor}?style=for-the-badge&logo=googlemaps&logoColor=${accentColor}&labelColor=000000" alt="Location Pakistan"/></a>
<img src="https://komarev.com/ghpvc/?username=${username}&label=VISITOR%20RADAR&color=00d4ff&style=for-the-badge&labelColor=000000" alt="Visitor Radar Count"/>

</div>

<img src="https://capsule-render.vercel.app/api?type=rect&height=3&color=0:000000,50:${accentColor},100:000000" width="100%" alt="Neon Divider Line"/>

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
  "name"        : "${fullName}",
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

Main **${fullName}** hoon: AI Engineer aur Full-Stack Developer. Mera focus useful digital products, intelligent systems aur business software banana hai. Pehle sketch se working product tak: architecture, code, mushkil problems aur polished experience.

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

<img src="https://capsule-render.vercel.app/api?type=rect&height=2&color=0:000000,50:${accentColor},100:000000" width="100%" alt="Green Divider Line"/>

## \`> TECH_ARSENAL\`

<div align="center">

### \`[ 01_PROGRAMMING_LANGUAGES ]\`
<p>
  <img src="https://img.shields.io/badge/Python-000000?style=for-the-badge&logo=python&logoColor=${accentColor}&labelColor=000000&color=${accentColor}" alt="Python"/>
  <img src="https://img.shields.io/badge/TypeScript-000000?style=for-the-badge&logo=typescript&logoColor=00d4ff&labelColor=000000&color=00d4ff" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/JavaScript-000000?style=for-the-badge&logo=javascript&logoColor=${accentColor}&labelColor=000000&color=${accentColor}" alt="JavaScript"/>
</p>

### \`[ 02_FRAMEWORKS_&_RUNTIMES ]\`
<p>
  <img src="https://img.shields.io/badge/React-000000?style=for-the-badge&logo=react&logoColor=00d4ff&labelColor=000000&color=00d4ff" alt="React"/>
  <img src="https://img.shields.io/badge/Node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=${accentColor}&labelColor=000000&color=${accentColor}" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Electron-000000?style=for-the-badge&logo=electron&logoColor=00d4ff&labelColor=000000&color=00d4ff" alt="Electron"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-000000?style=for-the-badge&logo=tailwindcss&logoColor=${accentColor}&labelColor=000000&color=${accentColor}" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/HTML5-000000?style=for-the-badge&logo=html5&logoColor=00d4ff&labelColor=000000&color=00d4ff" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-000000?style=for-the-badge&logo=css3&logoColor=${accentColor}&labelColor=000000&color=${accentColor}" alt="CSS3"/>
</p>

### \`[ 03_AI_&_DEVELOPER_TOOLS ]\`
<p>
  <img src="https://img.shields.io/badge/AI_Automation-000000?style=for-the-badge&logo=openai&logoColor=${accentColor}&labelColor=000000&color=${accentColor}" alt="AI & Automation"/>
  <img src="https://img.shields.io/badge/Git-000000?style=for-the-badge&logo=git&logoColor=00d4ff&labelColor=000000&color=00d4ff" alt="Git"/>
  <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=${accentColor}&labelColor=000000&color=${accentColor}" alt="GitHub"/>
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
👉 [**DECRYPT FILE / VIEW REPOSITORY**](https://github.com/${username}?tab=repositories)

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
👉 [**DECRYPT FILE / VIEW REPOSITORY**](https://github.com/${username}?tab=repositories)

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
👉 [**DECRYPT FILE / VIEW REPOSITORY**](https://github.com/${username}?tab=repositories)

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
👉 [**DECRYPT FILE / VIEW REPOSITORY**](https://github.com/${username}?tab=repositories)

</td>
</tr>
</table>

<img src="https://capsule-render.vercel.app/api?type=rect&height=2&color=0:000000,50:${accentColor},100:000000" width="100%" alt="Neon Divider Line"/>

## \`> LIVE_TELEMETRY\`

<div align="center">

<img height="165" src="https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&bg_color=000000&title_color=${accentColor}&text_color=a7f3d0&icon_color=00d4ff&ring_color=${accentColor}&rank_icon=github" alt="${username} GitHub Stats"/>
<img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&bg_color=000000&title_color=${accentColor}&text_color=a7f3d0" alt="${username} Top Languages"/>

<br/><br/>

<img width="95%" src="https://github-readme-streak-stats.herokuapp.com/?user=${username}&background=000000&ring=${accentColor}&fire=00d4ff&currStreakLabel=${accentColor}&sideLabels=a7f3d0&currStreakNum=ffffff&sideNums=ffffff&dates=6b7280&stroke=${accentColor}33&hide_border=true" alt="${username} Contribution Streak"/>

<br/>

<img width="95%" src="https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=000000&color=${accentColor}&line=${accentColor}&point=00d4ff&area=true&area_color=${accentColor}&hide_border=true" alt="${username} GitHub Activity Graph"/>

</div>

## \`> ACHIEVEMENTS_UNLOCKED\`

<div align="center">

<img src="https://github-profile-trophy.vercel.app/?username=${username}&theme=matrix&no-frame=true&no-bg=true&margin-w=10&row=1&column=7" alt="GitHub Matrix Trophies"/>

</div>

## \`> CONTRIBUTION_SNAKE\`

<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/${username}/${username}/output/github-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/${username}/${username}/output/github-snake.svg" />
  <img alt="Snake eating contributions" src="https://raw.githubusercontent.com/${username}/${username}/output/github-snake-dark.svg" />
</picture>

</div>

<img src="https://capsule-render.vercel.app/api?type=rect&height=2&color=0:000000,50:${accentColor},100:000000" width="100%" alt="Neon Divider Line"/>

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

<a href="https://linkedin.com/in/${linkedinHandle}"><img src="https://img.shields.io/badge/LINKEDIN-000000?style=for-the-badge&logo=linkedin&logoColor=00d4ff&labelColor=000000&color=00d4ff" alt="LinkedIn Profile"/></a>
<a href="mailto:${emailAddress}"><img src="https://img.shields.io/badge/EMAIL-000000?style=for-the-badge&logo=gmail&logoColor=${accentColor}&labelColor=000000&color=${accentColor}" alt="Email Direct"/></a>
<a href="${websiteUrl}"><img src="https://img.shields.io/badge/ABYTESOL-000000?style=for-the-badge&logo=googlechrome&logoColor=00d4ff&labelColor=000000&color=00d4ff" alt="AbyteSol Official Site"/></a>

<br/><br/>

### \`> THINK BIGGER. BUILD SMARTER. KEEP SHIPPING._\`

<a href="https://github.com/${username}?tab=repositories">
<img src="https://img.shields.io/badge/EXPLORE%20MY%20WORK-000000?style=for-the-badge&logo=github&logoColor=${accentColor}&labelColor=000000&color=${accentColor}" alt="Explore Repositories"/>
</a>
<a href="https://github.com/${username}">
<img src="https://img.shields.io/badge/FOLLOW%20MY%20JOURNEY-000000?style=for-the-badge&logo=github&logoColor=00d4ff&labelColor=000000&color=00d4ff" alt="Follow on GitHub"/>
</a>

<br/><br/>

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&section=footer&height=140&color=0:${accentColor},45:001a0a,100:000000" alt="Cyber Waving Footer"/>

**\`[ INNOVATE. CONNECT. GROW. ]\`**

<sub>\`> Powered by curiosity, code, and coffee ☕ | END_OF_TRANSMISSION\`</sub>

</div>`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md">
      <div className="relative w-full max-w-5xl rounded-2xl border border-[#00FF41]/40 bg-[#040805] shadow-[0_0_50px_rgba(0,255,65,0.2)] overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Title Bar */}
        <div className="bg-[#020503] border-b border-[#00FF41]/30 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-black border border-[#00FF41]/40 text-[#00FF41]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-[#00FF41] font-semibold tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00FF41] animate-pulse" />
                CYBERPUNK PROFILE STUDIO // v2.0
              </div>
              <h3 className="text-lg font-mono font-bold text-white">
                GitHub Profile README & Automation Generator
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded font-mono text-xs border border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors"
          >
            ESC / CLOSE
          </button>
        </div>

        {/* Live Parameter Customizer Bar */}
        <div className="bg-black/95 border-b border-neutral-800 p-4 font-mono text-xs grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div>
            <label className="text-neutral-400 text-[10px] block mb-1">GITHUB USERNAME:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-[#030704] border border-neutral-700 rounded text-[#00FF41] font-bold focus:outline-none focus:border-[#00FF41]"
            />
          </div>

          <div>
            <label className="text-neutral-400 text-[10px] block mb-1">DISPLAY NAME:</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-[#030704] border border-neutral-700 rounded text-white focus:outline-none focus:border-[#00FF41]"
            />
          </div>

          <div>
            <label className="text-neutral-400 text-[10px] block mb-1">NEON HEX (NO #):</label>
            <input
              type="text"
              value={accentColor}
              onChange={(e) => setAccentColor(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-[#030704] border border-neutral-700 rounded text-[#00FF41] focus:outline-none focus:border-[#00FF41]"
            />
          </div>

          <div>
            <label className="text-neutral-400 text-[10px] block mb-1">LINKEDIN HANDLE:</label>
            <input
              type="text"
              value={linkedinHandle}
              onChange={(e) => setLinkedinHandle(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-[#030704] border border-neutral-700 rounded text-neutral-300 focus:outline-none focus:border-[#00FF41]"
            />
          </div>

          <div>
            <label className="text-neutral-400 text-[10px] block mb-1">CONTACT EMAIL:</label>
            <input
              type="text"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-[#030704] border border-neutral-700 rounded text-neutral-300 focus:outline-none focus:border-[#00FF41]"
            />
          </div>

          <div>
            <label className="text-neutral-400 text-[10px] block mb-1">COMPANY/URL:</label>
            <input
              type="text"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-[#030704] border border-neutral-700 rounded text-neutral-300 focus:outline-none focus:border-[#00FF41]"
            />
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-neutral-800 bg-black/60 px-6 text-xs font-mono">
          <button
            onClick={() => {
              audioEngine.playKeypress();
              setActiveTab('readme');
            }}
            className={`py-3 px-4 border-b-2 font-bold transition-colors flex items-center gap-2 ${
              activeTab === 'readme'
                ? 'border-[#00FF41] text-[#00FF41]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <FileCode className="w-4 h-4" />
            <span>1. README.md (COMPLETE)</span>
          </button>

          <button
            onClick={() => {
              audioEngine.playKeypress();
              setActiveTab('workflow');
            }}
            className={`py-3 px-4 border-b-2 font-bold transition-colors flex items-center gap-2 ${
              activeTab === 'workflow'
                ? 'border-[#00d4ff] text-[#00d4ff]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>2. .github/workflows/snake.yml</span>
          </button>

          <button
            onClick={() => {
              audioEngine.playKeypress();
              setActiveTab('guide');
            }}
            className={`py-3 px-4 border-b-2 font-bold transition-colors flex items-center gap-2 ${
              activeTab === 'guide'
                ? 'border-[#00FF41] text-[#00FF41]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>3. GITHUB SETUP INSTRUCTIONS</span>
          </button>

          <button
            onClick={() => {
              audioEngine.playKeypress();
              setActiveTab('checklist');
            }}
            className={`py-3 px-4 border-b-2 font-bold transition-colors flex items-center gap-2 ${
              activeTab === 'checklist'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>4. VERIFICATION CHECKLIST</span>
          </button>
        </div>

        {/* Tab Panel Body */}
        <div className="flex-1 overflow-y-auto p-6 font-mono text-xs select-text">
          {activeTab === 'readme' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">Full Cyberpunk README.md</h4>
                  <p className="text-neutral-400 text-[11px]">
                    Valid GitHub Markdown + HTML, high-contrast black & neon green (#{accentColor}).
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(generatedReadme, 'readme')}
                  className="flex items-center gap-2 px-4 py-2 rounded bg-[#00FF41]/20 border border-[#00FF41] text-[#00FF41] hover:bg-[#00FF41]/30 font-bold transition-all shadow-[0_0_15px_rgba(0,255,65,0.2)]"
                >
                  {copiedType === 'readme' ? <Check className="w-4 h-4 text-[#00FF41]" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedType === 'readme' ? 'COPIED TO CLIPBOARD ✔' : 'COPY README.MD'}</span>
                </button>
              </div>

              <div className="p-4 rounded-lg bg-black/90 border border-neutral-800 overflow-x-auto max-h-[500px]">
                <pre className="text-neutral-300 whitespace-pre leading-relaxed font-mono text-[11px]">
                  {generatedReadme}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'workflow' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#00d4ff]">GitHub Actions Contribution Snake Workflow</h4>
                  <p className="text-neutral-400 text-[11px]">
                    Target Path: <code className="text-[#00FF41]">.github/workflows/snake.yml</code> (Runs every 12 hrs & publishes SVG to <code className="text-[#00d4ff]">output</code> branch).
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(workflowYaml, 'workflow')}
                  className="flex items-center gap-2 px-4 py-2 rounded bg-[#00d4ff]/20 border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff]/30 font-bold transition-all shadow-[0_0_15px_rgba(0,212,255,0.2)]"
                >
                  {copiedType === 'workflow' ? <Check className="w-4 h-4 text-[#00d4ff]" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedType === 'workflow' ? 'COPIED WORKFLOW YAML ✔' : 'COPY SNAKE.YML'}</span>
                </button>
              </div>

              <div className="p-4 rounded-lg bg-black/90 border border-neutral-800 overflow-x-auto max-h-[500px]">
                <pre className="text-[#a7f3d0] whitespace-pre leading-relaxed font-mono text-[11px]">
                  {workflowYaml}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-5 text-neutral-300">
              <h4 className="text-base font-bold text-white mb-2">Step-by-Step GitHub Setup Guide</h4>

              <div className="p-4 rounded-lg bg-black border border-neutral-800 space-y-2">
                <div className="text-[#00FF41] font-bold text-xs flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#00FF41]/20 flex items-center justify-center text-[11px]">1</span>
                  <span>Special Repository Requirement</span>
                </div>
                <p className="text-xs text-neutral-300 pl-7">
                  Create a public GitHub repository named <code className="text-[#00FF41] font-bold">{username}</code> (matching your GitHub username exactly). GitHub marks this as a Special Repository for your public profile.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-black border border-neutral-800 space-y-2">
                <div className="text-[#00d4ff] font-bold text-xs flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#00d4ff]/20 flex items-center justify-center text-[11px]">2</span>
                  <span>GitHub Actions Workflow Permissions (CRITICAL)</span>
                </div>
                <p className="text-xs text-neutral-300 pl-7 leading-relaxed">
                  To allow the contribution snake to push SVGs to the <code className="text-[#00d4ff]">output</code> branch:
                  <br />1. Go to your repository on GitHub: <strong>Settings &gt; Actions &gt; General</strong>.
                  <br />2. Scroll down to <strong>Workflow permissions</strong>.
                  <br />3. Select <span className="text-[#00FF41] font-bold">"Read and write permissions"</span>.
                  <br />4. Check <span className="text-[#00d4ff] font-bold">"Allow GitHub Actions to create and approve pull requests"</span> and click <strong>Save</strong>.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-black border border-neutral-800 space-y-2">
                <div className="text-amber-400 font-bold text-xs flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center text-[11px]">3</span>
                  <span>Triggering First Snake Generation</span>
                </div>
                <p className="text-xs text-neutral-300 pl-7 leading-relaxed">
                  Once <code className="text-[#00d4ff]">.github/workflows/snake.yml</code> is committed to your repository:
                  <br />1. Click the <strong>Actions</strong> tab on GitHub.
                  <br />2. Click <strong>Generate Contribution Snake Animation</strong> on the left sidebar.
                  <br />3. Click <strong>Run workflow &gt; Run workflow</strong>.
                  <br />4. In ~30 seconds, it will create the <code className="text-[#00FF41]">output</code> branch containing <code className="text-white">github-snake-dark.svg</code>!
                </p>
              </div>
            </div>
          )}

          {activeTab === 'checklist' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white mb-2">Verification & Troubleshooting Checklist</h4>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded bg-black/60 border border-neutral-800 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00FF41] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold">Repository Visibility:</span>
                    <p className="text-neutral-400 mt-0.5">The repository must be <strong>Public</strong>, not private, otherwise visitors cannot view your profile README.</p>
                  </div>
                </div>

                <div className="p-3 rounded bg-black/60 border border-neutral-800 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00FF41] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold">Stats & Activity Rendering:</span>
                    <p className="text-neutral-400 mt-0.5">Ensure your GitHub activity is set to public. In your GitHub profile settings, check "Include private contributions" if you want streak stats to reflect commits made in private repos.</p>
                  </div>
                </div>

                <div className="p-3 rounded bg-black/60 border border-neutral-800 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00FF41] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold">Snake SVG 404 Troubleshooting:</span>
                    <p className="text-neutral-400 mt-0.5">If the snake image shows a broken icon initially, run the GitHub Action manually once. Raw GitHub content caches for ~5 minutes after the first run creates the output branch.</p>
                  </div>
                </div>

                <div className="p-3 rounded bg-black/60 border border-neutral-800 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00FF41] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold">Zero Secret Exposure:</span>
                    <p className="text-neutral-400 mt-0.5">The snake workflow uses GitHub's internal, automatically generated <code className="text-[#00FF41]">secrets.GITHUB_TOKEN</code>. No manual Personal Access Token (PAT) or password is needed.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Action Footer */}
        <div className="bg-[#020503] border-t border-neutral-800 px-6 py-3.5 flex items-center justify-between text-xs font-mono">
          <div className="text-neutral-400">
            Current Target: <span className="text-[#00FF41] font-bold">github.com/{username}/{username}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => copyToClipboard(generatedReadme, 'readme')}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded bg-black border border-[#00FF41]/40 text-[#00FF41] hover:bg-[#00FF41]/20 font-bold transition-all"
            >
              {copiedType === 'readme' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedType === 'readme' ? 'COPIED README' : 'COPY README'}</span>
            </button>
            <button
              onClick={() => copyToClipboard(workflowYaml, 'workflow')}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded bg-black border border-[#00d4ff]/40 text-[#00d4ff] hover:bg-[#00d4ff]/20 font-bold transition-all"
            >
              {copiedType === 'workflow' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedType === 'workflow' ? 'COPIED SNAKE.YML' : 'COPY SNAKE.YML'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded bg-neutral-800 text-white hover:bg-neutral-700 transition-colors"
            >
              DONE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
