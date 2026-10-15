export interface MissionFile {
  id: string;
  filename: string;
  title: string;
  classification: string;
  clearanceLevel: number;
  category: string;
  focus: string[];
  description: string;
  urduSummary: string;
  status: 'DEPLOYED' | 'PRODUCTION' | 'ACTIVE';
  metrics: {
    latency: string;
    throughput: string;
    stack: string[];
    integrity: string;
  };
  features: string[];
  architecture: string;
}

export interface ModuleData {
  id: string;
  code: string;
  title: string;
  status: string;
  icon: string;
  focus: string[];
  description: string;
  powerLevel: number;
  tags: string[];
}

export const PROFILE_IDENTITY = {
  name: "Muhammad Arhum",
  callsign: "muhammad_arhum.exe",
  role: ["AI Engineer", "Full-Stack Developer"],
  company: "AbyteSol",
  companyRole: "Founder & CEO",
  mission: "INNOVATE. CONNECT. GROW.",
  location: "Pakistan",
  status: "Building. Shipping. Repeating.",
  quote: "Every great product starts with a question: What if we built it better?",
  bio: "Main Muhammad Arhum hoon: AI Engineer aur Full-Stack Developer. Mera focus useful digital products, intelligent systems aur business software banana hai. Pehle sketch se working product tak: architecture, code, mushkil problems aur polished experience. Main AbyteSol ka Founder & CEO bhi hoon.",
  clearanceLevel: "LEVEL 5",
  systemStatus: "ONLINE",
  caffeineSupply: "CRITICAL ☕ (100%)",
  visitorTarget: "MuhamadArhum",
  socials: {
    github: "https://github.com/MuhamadArhum",
    githubRepos: "https://github.com/MuhamadArhum?tab=repositories",
    linkedin: "https://linkedin.com/in/muhamadarhum",
    email: "muhamadarhum425@gmail.com",
    website: "https://abytesol.com",
  }
};

export const MODULES: ModuleData[] = [
  {
    id: "module-01",
    code: "MODULE_01",
    title: "Artificial Intelligence",
    status: "ACTIVE",
    icon: "Bot",
    powerLevel: 70,
    tags: ["LLMs", "Automation", "Agents", "Intelligent Workflows"],
    focus: [
      "AI-powered user experiences & autonomous agents",
      "Intelligent workflow automation & orchestration",
      "Tools that simplify complex cognitive work"
    ],
    description: "Architecting generative AI applications, prompt engineering, multi-turn tool agents, and machine learning integrations that convert manual overhead into seamless computational output."
  },
  {
    id: "module-02",
    code: "MODULE_02",
    title: "Full-Stack Engineering",
    status: "ACTIVE",
    icon: "Code",
    powerLevel: 85,
    tags: ["React", "TypeScript", "Node.js", "Tailwind", "REST APIs"],
    focus: [
      "End-to-end resilient web applications",
      "Modern, responsive, cybernetic interfaces",
      "Reliable, strictly-typed maintainable codebases"
    ],
    description: "Developing scalable distributed systems and high-precision frontend client apps with TypeScript, React, Vite, Node.js, and modern state architectures."
  },
  {
    id: "module-03",
    code: "MODULE_03",
    title: "Business Systems",
    status: "ACTIVE",
    icon: "Building2",
    powerLevel: 90,
    tags: ["POS", "CRM", "ERP", "Inventory", "Billing"],
    focus: [
      "High-throughput Point-Of-Sale (POS) & CRM",
      "Real-time Inventory & automated Billing engines",
      "Mission-critical enterprise business workflows"
    ],
    description: "Engineered industrial business operating systems capable of processing transactions with zero tolerance for accounting drift, inventory mismatch, or network downtime."
  },
  {
    id: "module-04",
    code: "MODULE_04",
    title: "Product Development",
    status: "ACTIVE",
    icon: "Rocket",
    powerLevel: 90,
    tags: ["Architecture", "Product Strategy", "UX", "AbyteSol"],
    focus: [
      "Solving acute real-world commercial problems",
      "Pragmatic, high-utility feature development",
      "Taking zero-to-one digital products to market"
    ],
    description: "Leading venture and client software development as Founder & CEO of AbyteSol, aligning engineering precision with market demand and high ROI."
  }
];

export const POWER_LEVELS = [
  { name: "AI & AUTOMATION", level: 70, bar: "██████████████░░░░░░", color: "#00ff9c" },
  { name: "FULL-STACK DEV", level: 85, bar: "█████████████████░░░", color: "#00d4ff" },
  { name: "BUSINESS SYSTEMS", level: 90, bar: "██████████████████░░", color: "#00ff9c" },
  { name: "DESKTOP APPS", level: 75, bar: "███████████████░░░░░", color: "#00d4ff" },
  { name: "PRODUCT THINKING", level: 90, bar: "██████████████████░░", color: "#00ff9c" },
  { name: "CAFFEINE", level: 100, bar: "████████████████████", color: "#f59e0b" },
];

export const TECH_ARSENAL = [
  { name: "Python", category: "Language / AI", iconKey: "python", badge: "AI Core" },
  { name: "TypeScript", category: "Language", iconKey: "typescript", badge: "Type Safety" },
  { name: "JavaScript", category: "Language", iconKey: "javascript", badge: "Runtime" },
  { name: "React", category: "Frontend", iconKey: "react", badge: "Components" },
  { name: "Node.js", category: "Backend", iconKey: "nodejs", badge: "Services" },
  { name: "Electron", category: "Desktop", iconKey: "electron", badge: "Desktop Apps" },
  { name: "Tailwind CSS", category: "Styling", iconKey: "tailwind", badge: "Modern UI" },
  { name: "Git", category: "Version Control", iconKey: "git", badge: "VCS" },
  { name: "GitHub", category: "Collaboration", iconKey: "github", badge: "CI/CD" },
  { name: "VS Code", category: "Dev Tools", iconKey: "vscode", badge: "IDE" },
  { name: "HTML5/CSS3", category: "Frontend", iconKey: "html", badge: "Web Platform" },
  { name: "REST / SQL", category: "Data Layer", iconKey: "nodejs", badge: "Storage" }
];

export const MISSION_FILES: MissionFile[] = [
  {
    id: "restaurant-pos",
    filename: "restaurant_pos.exe",
    title: "Restaurant POS Operational Suite",
    classification: "LEVEL 2",
    clearanceLevel: 2,
    category: "POS · Orders · Restaurant Mgmt",
    focus: ["Point of Sale", "Kitchen Display System", "Table Booking", "Real-time Order Routing"],
    description: "High-speed order intake and kitchen routing system designed to prevent order bottlenecks during peak rush hour dining.",
    urduSummary: "Restaurant operations, order handling aur smooth daily workflows ke liye POS project.",
    status: "PRODUCTION",
    metrics: {
      latency: "< 45ms",
      throughput: "1,200 orders/hr",
      stack: ["Electron", "React", "TypeScript", "Node.js", "SQLite/Postgres"],
      integrity: "99.99%"
    },
    features: [
      "Dynamic visual table floorplan layout with instant table status sync",
      "Split billing, multi-tender payment processing and custom tip calculations",
      "Kitchen Display System (KDS) with color-coded countdown timers",
      "Offline-first cached transactions with background cloud reconciliation"
    ],
    architecture: "Local-first distributed client with peer-to-peer kitchen printer dispatch."
  },
  {
    id: "inventory-core",
    filename: "inventory_core.exe",
    title: "Inventory Core & Stock Optimization",
    classification: "LEVEL 2",
    clearanceLevel: 2,
    category: "Inventory · Stock · Operations",
    focus: ["Stock Tracking", "Barcode Scanning", "Multi-warehouse", "Low-stock Alarms"],
    description: "Enterprise warehouse stock management software with real-time SKU ledger tracking, predictive reorder points, and supplier batch verification.",
    urduSummary: "Inventory organize karne aur stock management asaan banane ka business software.",
    status: "ACTIVE",
    metrics: {
      latency: "12ms local query",
      throughput: "50,000+ SKUs",
      stack: ["Node.js", "React", "Tailwind", "PostgreSQL", "WebSockets"],
      integrity: "100% Audit trail"
    },
    features: [
      "Barcode & QR scanner integration with instant unit validation",
      "Automated Purchase Order (PO) generation upon breach of safety thresholds",
      "Multi-location transfer logs with transit confirmation signatures",
      "Batch expiration tracking with automated discount triggers"
    ],
    architecture: "Double-entry inventory ledger preventing phantom discrepancies and theft."
  },
  {
    id: "billing-engine",
    filename: "billing_engine.exe",
    title: "High-Precision Billing & Tax Engine",
    classification: "LEVEL 3",
    clearanceLevel: 3,
    category: "Billing · Transactions · Automation",
    focus: ["Invoicing", "Tax Calculations", "Audit Logging", "Multi-currency"],
    description: "Automated billing infrastructure handling recurring subscription invoices, fiscal compliance, tax calculation, and payment reconciliation.",
    urduSummary: "Billing logic, transactions aur business processes ke gird software.",
    status: "ACTIVE",
    metrics: {
      latency: "Sub-millisecond calc",
      throughput: "Zero calculation drift",
      stack: ["TypeScript", "Node.js", "Prisma/Postgres", "Stripe/Local Gateway"],
      integrity: "Strict Financial Grade"
    },
    features: [
      "Flexible invoice generation with customizable tax tiers (GST, VAT, WHT)",
      "Automated overdue payment reminders and dunning management",
      "Instant PDF invoice compilation with cryptographically signed QR codes",
      "Exportable balance sheets, trial balances, and transaction journals"
    ],
    architecture: "State machine transaction processing with idempotency guards."
  },
  {
    id: "crm-erp-suite",
    filename: "crm_erp_suite.exe",
    title: "AbyteSol Enterprise CRM & ERP Suite",
    classification: "LEVEL 3",
    clearanceLevel: 3,
    category: "CRM · ERP · Business Mgmt",
    focus: ["Lead Pipeline", "Customer 360", "Departmental Workflows", "BI Analytics"],
    description: "Comprehensive operational backbone integrating customer relationship history, sales funnels, and enterprise resource planning under one unified pane.",
    urduSummary: "Customer management aur operational workflows behtar karne ke liye CRM & ERP.",
    status: "PRODUCTION",
    metrics: {
      latency: "< 80ms p95",
      throughput: "Real-time sync",
      stack: ["React", "TypeScript", "Tailwind CSS", "Node.js API", "PostgreSQL"],
      integrity: "RBAC Level 5"
    },
    features: [
      "Full sales pipeline Kanban with stage conversion velocity metrics",
      "Customer communications timeline with activity scheduling",
      "Granular Role-Based Access Control (RBAC) across departments",
      "Executive business intelligence dashboards with revenue forecasting"
    ],
    architecture: "Modular micro-service ready monolith with decoupled reporting pipelines."
  }
];

export const ROADMAP_ITEMS = [
  { status: "completed", text: "Build real business software (POS, Inventory, Billing)", date: "Phase 1" },
  { status: "completed", text: "Launch AbyteSol (Founder & CEO)", date: "Phase 2" },
  { status: "in-progress", text: "Expand AI-powered features into every product", date: "Phase 3 (Active)" },
  { status: "in-progress", text: "Ship more open projects on GitHub", date: "Phase 3 (Active)" },
  { status: "planned", text: "Scale AbyteSol into a global tech brand", date: "Phase 4" },
  { status: "planned", text: "Keep learning. Keep shipping.", date: "Perpetual Loop" }
];

export const SYSTEM_STATUS_DATA = {
  currentFocus: "Building practical software and digital solutions",
  interests: "AI, automation, intelligent applications",
  buildStack: "Modern development tools and technologies (React, TS, Node, Python)",
  approach: "Understand the problem > Simplify the solution > Build with purpose",
  availability: "Open to meaningful collaborations and exciting projects",
  location: "Pakistan",
  timezone: "UTC+5 (PKT)"
};
