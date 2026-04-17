<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Muhamad Arhum — Full Stack Developer</title>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet"/>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    :root{
      --cyan:#00D9FF;
      --dark:#0a0e1a;
      --surface:#0f1625;
      --card:#141c2e;
      --border:#1e2d47;
      --text:#e8f0fe;
      --muted:#6b7fa3;
      --green:#00ff88;
      --orange:#ff7b35;
    }
    html{scroll-behavior:smooth}
    body{
      background:var(--dark);
      color:var(--text);
      font-family:'Syne',sans-serif;
      min-height:100vh;
      overflow-x:hidden;
    }

    /* ── GRID BACKGROUND ── */
    .grid-bg{
      position:fixed;inset:0;
      background-image:
        linear-gradient(rgba(0,217,255,0.03) 1px,transparent 1px),
        linear-gradient(90deg,rgba(0,217,255,0.03) 1px,transparent 1px);
      background-size:40px 40px;
      pointer-events:none;
      z-index:0;
    }

    /* ── HERO ── */
    .hero{
      position:relative;
      padding:5rem 2rem 4rem;
      text-align:center;
      overflow:hidden;
      z-index:1;
    }
    .hero-bg{
      position:absolute;inset:0;
      background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(0,217,255,0.09),transparent 70%);
      pointer-events:none;
    }
    .tag{
      display:inline-block;
      font-family:'DM Mono',monospace;
      font-size:11px;
      letter-spacing:2px;
      color:var(--cyan);
      background:rgba(0,217,255,0.08);
      border:1px solid rgba(0,217,255,0.2);
      padding:6px 16px;
      border-radius:20px;
      margin-bottom:1.75rem;
      text-transform:uppercase;
    }
    h1{
      font-size:clamp(3rem,7vw,5.5rem);
      font-weight:800;
      line-height:1.0;
      margin-bottom:.75rem;
      letter-spacing:-1px;
    }
    h1 span{color:var(--cyan)}
    .subtitle{
      font-family:'DM Mono',monospace;
      font-size:13px;
      color:var(--muted);
      letter-spacing:1.5px;
      margin-bottom:2.25rem;
    }
    .badge-row{
      display:flex;flex-wrap:wrap;
      gap:10px;justify-content:center;
      margin-bottom:2.5rem;
    }
    .badge{
      font-family:'DM Mono',monospace;
      font-size:11px;
      padding:6px 16px;
      border-radius:4px;
      border:1px solid;
      letter-spacing:.5px;
      text-transform:uppercase;
      display:flex;align-items:center;gap:6px;
    }
    .badge-cyan{border-color:rgba(0,217,255,.3);color:var(--cyan);background:rgba(0,217,255,.06)}
    .badge-green{border-color:rgba(0,255,136,.3);color:var(--green);background:rgba(0,255,136,.06)}
    .badge-orange{border-color:rgba(255,123,53,.3);color:var(--orange);background:rgba(255,123,53,.06)}
    .pulse{
      display:inline-block;width:6px;height:6px;
      border-radius:50%;background:var(--green);
      animation:pulse 2s infinite;
    }
    @keyframes pulse{
      0%,100%{opacity:1;transform:scale(1)}
      50%{opacity:.4;transform:scale(.75)}
    }

    /* ── LAYOUT ── */
    .section{
      position:relative;z-index:1;
      padding:3rem 2rem;
      max-width:960px;
      margin:0 auto;
    }
    .section-label{
      font-family:'DM Mono',monospace;
      font-size:10px;letter-spacing:3px;
      color:var(--cyan);text-transform:uppercase;
      margin-bottom:1.75rem;
      display:flex;align-items:center;gap:12px;
    }
    .section-label::after{
      content:'';flex:1;height:1px;
      background:linear-gradient(90deg,var(--border),transparent);
    }

    /* ── STATS ── */
    .stats-grid{
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(130px,1fr));
      gap:12px;margin-bottom:3.5rem;
    }
    .stat-card{
      background:var(--card);
      border:1px solid var(--border);
      border-radius:8px;padding:1.5rem 1rem;
      text-align:center;position:relative;overflow:hidden;
    }
    .stat-card::before{
      content:'';position:absolute;
      top:0;left:0;right:0;height:2px;
      background:linear-gradient(90deg,transparent,var(--cyan),transparent);
    }
    .stat-num{
      font-size:2rem;font-weight:800;
      color:var(--cyan);display:block;line-height:1;
    }
    .stat-lbl{
      font-family:'DM Mono',monospace;
      font-size:9px;color:var(--muted);
      letter-spacing:1.5px;text-transform:uppercase;
      margin-top:8px;display:block;
    }

    /* ── PROJECT CARDS ── */
    .projects{
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
      gap:16px;margin-bottom:3.5rem;
    }
    .proj-card{
      background:var(--card);
      border:1px solid var(--border);
      border-radius:10px;padding:1.75rem;
      transition:border-color .25s,transform .25s;
    }
    .proj-card:hover{border-color:rgba(0,217,255,.35);transform:translateY(-2px)}
    .proj-icon{
      width:44px;height:44px;border-radius:8px;
      display:flex;align-items:center;justify-content:center;
      margin-bottom:1.1rem;font-size:20px;
    }
    .proj-title{font-size:15px;font-weight:700;margin-bottom:.5rem}
    .proj-desc{font-size:12px;color:var(--muted);line-height:1.7;margin-bottom:1rem}
    .proj-tags{display:flex;flex-wrap:wrap;gap:6px}
    .proj-tag{
      font-family:'DM Mono',monospace;font-size:9px;
      padding:3px 9px;border-radius:3px;
      background:rgba(0,217,255,.06);
      border:1px solid rgba(0,217,255,.15);
      color:var(--cyan);text-transform:uppercase;letter-spacing:.5px;
    }
    .proj-impact{
      font-family:'DM Mono',monospace;
      font-size:10px;color:var(--green);
      margin-top:12px;letter-spacing:.5px;
    }

    /* ── TECH GRID ── */
    .tech-grid{
      display:grid;
      grid-template-columns:repeat(auto-fill,minmax(130px,1fr));
      gap:8px;margin-bottom:3.5rem;
    }
    .tech-item{
      background:var(--card);border:1px solid var(--border);
      border-radius:6px;padding:.75rem 1rem;
      font-family:'DM Mono',monospace;font-size:11px;
      color:var(--text);letter-spacing:.5px;
      display:flex;align-items:center;gap:10px;
      transition:border-color .2s;
    }
    .tech-item:hover{border-color:rgba(0,217,255,.3)}
    .tech-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0}

    /* ── ROADMAP ── */
    .roadmap{
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
      gap:16px;margin-bottom:3.5rem;
    }
    .roadmap-card{
      background:var(--card);border:1px solid var(--border);
      border-radius:10px;padding:1.5rem;
    }
    .roadmap-title{
      font-family:'DM Mono',monospace;font-size:10px;
      letter-spacing:2px;text-transform:uppercase;
      margin-bottom:1rem;display:flex;align-items:center;gap:8px;
    }
    .status-dot{width:7px;height:7px;border-radius:50%}
    .roadmap-item{
      font-size:12px;color:var(--muted);
      padding:5px 0;display:flex;align-items:flex-start;gap:8px;line-height:1.5;
    }
    .roadmap-item::before{content:'→';color:var(--border);flex-shrink:0;margin-top:1px}

    /* ── COMPARE ── */
    .compare{
      display:grid;grid-template-columns:1fr 1fr;
      gap:1px;background:var(--border);
      border-radius:10px;overflow:hidden;
      margin-bottom:3.5rem;
    }
    .compare-col{background:var(--card);padding:1.75rem}
    .compare-col.good{background:#0c1a11}
    .compare-col.bad{background:#1a0e0e}
    .compare-title{
      font-size:10px;font-weight:700;
      letter-spacing:2px;text-transform:uppercase;
      margin-bottom:1.1rem;font-family:'DM Mono',monospace;
    }
    .compare-title.red{color:#ff5555}
    .compare-title.green{color:var(--green)}
    .compare-item{
      font-size:12px;color:var(--muted);
      padding:6px 0;display:flex;align-items:flex-start;gap:9px;line-height:1.5;
    }
    .compare-item::before{
      content:'';width:5px;height:5px;
      border-radius:50%;flex-shrink:0;margin-top:5px;
    }
    .bad .compare-item::before{background:#ff5555}
    .good .compare-item::before{background:var(--green)}

    /* ── TESTIMONIALS ── */
    .testimonials{
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
      gap:16px;margin-bottom:3.5rem;
    }
    .test-card{
      background:var(--card);border:1px solid var(--border);
      border-radius:10px;padding:1.75rem;position:relative;
      transition:border-color .2s;
    }
    .test-card:hover{border-color:rgba(0,217,255,.25)}
    .test-card::before{
      content:'\201C';position:absolute;
      top:1rem;right:1.25rem;
      font-size:3.5rem;color:var(--border);
      line-height:1;font-family:Georgia,serif;
    }
    .test-stars{color:#ffd700;font-size:12px;margin-bottom:.75rem;letter-spacing:2px}
    .test-text{
      font-size:12px;color:var(--muted);
      line-height:1.75;margin-bottom:1rem;font-style:italic;
    }
    .test-author{font-size:12px;font-weight:700;color:var(--text)}
    .test-badge{
      display:inline-block;
      font-family:'DM Mono',monospace;font-size:9px;
      padding:3px 9px;border-radius:3px;
      background:rgba(0,217,255,.06);
      border:1px solid rgba(0,217,255,.15);
      color:var(--cyan);margin-top:5px;
    }

    /* ── CTA ── */
    .cta{
      background:var(--card);border:1px solid var(--border);
      border-radius:14px;padding:3rem 2rem;
      text-align:center;position:relative;
      overflow:hidden;margin-bottom:3.5rem;z-index:1;
    }
    .cta::before{
      content:'';position:absolute;inset:0;
      background:radial-gradient(ellipse 60% 80% at 50% 110%,rgba(0,217,255,.06),transparent);
      pointer-events:none;
    }
    .cta h2{font-size:2rem;font-weight:800;margin-bottom:.75rem}
    .cta p{font-family:'DM Mono',monospace;font-size:12px;color:var(--muted);margin-bottom:2rem;letter-spacing:.5px}
    .cta-buttons{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-bottom:2rem}
    .btn{
      padding:11px 24px;border-radius:6px;
      font-family:'DM Mono',monospace;font-size:11px;
      font-weight:500;letter-spacing:1px;text-transform:uppercase;
      cursor:pointer;border:1px solid;
      transition:all .2s;text-decoration:none;display:inline-block;
    }
    .btn-primary{
      background:var(--cyan);color:#000;
      border-color:var(--cyan);font-weight:700;
    }
    .btn-primary:hover{opacity:.85}
    .btn-outline{
      background:transparent;color:var(--cyan);
      border-color:rgba(0,217,255,.4);
    }
    .btn-outline:hover{background:rgba(0,217,255,.07)}

    .avail-row{
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(130px,1fr));
      gap:10px;
    }
    .avail-item{
      background:var(--surface);border:1px solid var(--border);
      border-radius:7px;padding:.9rem .75rem;text-align:center;
    }
    .avail-status{
      font-family:'DM Mono',monospace;font-size:10px;
      font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;
    }
    .avail-role{font-size:11px;color:var(--muted)}
    .status-open{color:var(--green)}
    .status-talk{color:var(--orange)}

    /* ── FOOTER ── */
    footer{
      position:relative;z-index:1;
      text-align:center;padding:2rem;
      border-top:1px solid var(--border);
      font-family:'DM Mono',monospace;font-size:10px;
      color:var(--muted);letter-spacing:1.5px;
    }

    /* ── RESPONSIVE ── */
    @media(max-width:540px){
      .compare{grid-template-columns:1fr}
      h1{font-size:3rem}
      .section{padding:2.5rem 1.25rem}
    }
  </style>
</head>
<body>

<div class="grid-bg"></div>

<!-- HERO -->
<div class="hero">
  <div class="hero-bg"></div>
  <div class="tag">Full Stack Developer · POS Systems · AI Enthusiast</div>
  <h1>Muhamad<br><span>Arhum</span></h1>
  <p class="subtitle">// building systems that run real businesses</p>
  <div class="badge-row">
    <span class="badge badge-cyan"><span class="pulse"></span>Available for Projects</span>
    <span class="badge badge-green">50+ Restaurants Live</span>
    <span class="badge badge-orange">$500K+ Revenue Processed</span>
    <span class="badge badge-cyan">Pakistan 🇵🇰</span>
  </div>
</div>

<!-- METRICS -->
<div class="section">
  <div class="section-label">Impact metrics</div>
  <div class="stats-grid">
    <div class="stat-card"><span class="stat-num">50+</span><span class="stat-lbl">Restaurants</span></div>
    <div class="stat-card"><span class="stat-num">5K+</span><span class="stat-lbl">Daily Orders</span></div>
    <div class="stat-card"><span class="stat-num">1K+</span><span class="stat-lbl">Invoices/Day</span></div>
    <div class="stat-card"><span class="stat-num">80%</span><span class="stat-lbl">Stockout ↓</span></div>
    <div class="stat-card"><span class="stat-num">10x</span><span class="stat-lbl">DB Speed ↑</span></div>
    <div class="stat-card"><span class="stat-num">30%</span><span class="stat-lbl">Waste ↓</span></div>
    <div class="stat-card"><span class="stat-num">85%</span><span class="stat-lbl">Repeat Clients</span></div>
    <div class="stat-card"><span class="stat-num">100%</span><span class="stat-lbl">Satisfaction</span></div>
  </div>

  <!-- PROJECTS -->
  <div class="section-label">Featured systems</div>
  <div class="projects">
    <div class="proj-card">
      <div class="proj-icon" style="background:rgba(0,217,255,.1)">🍽️</div>
      <div class="proj-title">Restaurant POS System</div>
      <div class="proj-desc">Full-stack Point of Sale with real-time kitchen updates, smart table management, and split billing. Deployed across 50+ outlets.</div>
      <div class="proj-tags">
        <span class="proj-tag">React</span>
        <span class="proj-tag">Node.js</span>
        <span class="proj-tag">Socket.io</span>
        <span class="proj-tag">MongoDB</span>
        <span class="proj-tag">Stripe</span>
      </div>
      <div class="proj-impact">↑ 200+ orders/day per outlet</div>
    </div>
    <div class="proj-card">
      <div class="proj-icon" style="background:rgba(0,255,136,.1)">📦</div>
      <div class="proj-title">Inventory Management</div>
      <div class="proj-desc">Smart stock tracking with AI-ready alerting, supplier management, barcode integration, and multi-location support with full audit trail.</div>
      <div class="proj-tags">
        <span class="proj-tag">React</span>
        <span class="proj-tag">Redux</span>
        <span class="proj-tag">MongoDB</span>
        <span class="proj-tag">Nodemailer</span>
      </div>
      <div class="proj-impact">↓ 80% stockout incidents</div>
    </div>
    <div class="proj-card">
      <div class="proj-icon" style="background:rgba(255,123,53,.1)">💰</div>
      <div class="proj-title">Billing & Invoice Engine</div>
      <div class="proj-desc">Professional invoicing with GST/VAT compliance, discount engine, multi-currency support, and automated PDF generation pipeline.</div>
      <div class="proj-tags">
        <span class="proj-tag">Node.js</span>
        <span class="proj-tag">PDFKit</span>
        <span class="proj-tag">Stripe API</span>
        <span class="proj-tag">Express</span>
      </div>
      <div class="proj-impact">1,000+ invoices processed daily</div>
    </div>
    <div class="proj-card">
      <div class="proj-icon" style="background:rgba(0,217,255,.08)">📊</div>
      <div class="proj-title">Business Analytics BI</div>
      <div class="proj-desc">Real-time BI platform with live revenue tracking, customer analytics, profit margin insights, and multi-branch comparisons.</div>
      <div class="proj-tags">
        <span class="proj-tag">React</span>
        <span class="proj-tag">Chart.js</span>
        <span class="proj-tag">MongoDB Agg</span>
        <span class="proj-tag">Node.js</span>
      </div>
      <div class="proj-impact">Live data across 30+ businesses</div>
    </div>
  </div>

  <!-- TECH STACK -->
  <div class="section-label">Technology arsenal</div>
  <div class="tech-grid">
    <div class="tech-item"><div class="tech-dot" style="background:#61DAFB"></div>React</div>
    <div class="tech-item"><div class="tech-dot" style="background:#fff"></div>Next.js</div>
    <div class="tech-item"><div class="tech-dot" style="background:#007ACC"></div>TypeScript</div>
    <div class="tech-item"><div class="tech-dot" style="background:#F7DF1E"></div>JavaScript</div>
    <div class="tech-item"><div class="tech-dot" style="background:#38B2AC"></div>Tailwind CSS</div>
    <div class="tech-item"><div class="tech-dot" style="background:#764ABC"></div>Redux</div>
    <div class="tech-item"><div class="tech-dot" style="background:#339933"></div>Node.js</div>
    <div class="tech-item"><div class="tech-dot" style="background:#555"></div>Express.js</div>
    <div class="tech-item"><div class="tech-dot" style="background:#47A248"></div>MongoDB</div>
    <div class="tech-item"><div class="tech-dot" style="background:#336791"></div>PostgreSQL</div>
    <div class="tech-item"><div class="tech-dot" style="background:#DC382D"></div>Redis</div>
    <div class="tech-item"><div class="tech-dot" style="background:#010101"></div>Socket.io</div>
    <div class="tech-item"><div class="tech-dot" style="background:#008CDD"></div>Stripe</div>
    <div class="tech-item"><div class="tech-dot" style="background:#FF6384"></div>Chart.js</div>
    <div class="tech-item"><div class="tech-dot" style="background:#2496ED"></div>Docker</div>
    <div class="tech-item"><div class="tech-dot" style="background:#FF9900"></div>AWS</div>
    <div class="tech-item"><div class="tech-dot" style="background:#fff"></div>Vercel</div>
    <div class="tech-item"><div class="tech-dot" style="background:#F05032"></div>Git</div>
    <div class="tech-item"><div class="tech-dot" style="background:#CC0000"></div>PDFKit</div>
    <div class="tech-item"><div class="tech-dot" style="background:#FF6C37"></div>Postman</div>
  </div>

  <!-- ROADMAP -->
  <div class="section-label">AI roadmap — what's next</div>
  <div class="roadmap">
    <div class="roadmap-card">
      <div class="roadmap-title" style="color:var(--cyan)">
        <div class="status-dot" style="background:var(--cyan)"></div>
        Currently Learning
      </div>
      <div class="roadmap-item">Microservices Architecture</div>
      <div class="roadmap-item">GraphQL APIs</div>
      <div class="roadmap-item">AWS Lambda + Serverless</div>
      <div class="roadmap-item">Kubernetes Orchestration</div>
      <div class="roadmap-item">Redis Advanced Caching</div>
      <div class="roadmap-item">LangChain Integration</div>
    </div>
    <div class="roadmap-card">
      <div class="roadmap-title" style="color:var(--green)">
        <div class="status-dot" style="background:var(--green)"></div>
        Currently Building
      </div>
      <div class="roadmap-item">Multi-tenant POS Platform</div>
      <div class="roadmap-item">Restaurant Chain Manager</div>
      <div class="roadmap-item">Cloud Kitchen OS</div>
      <div class="roadmap-item">React Native POS App</div>
      <div class="roadmap-item">Supplier Marketplace</div>
    </div>
    <div class="roadmap-card">
      <div class="roadmap-title" style="color:var(--orange)">
        <div class="status-dot" style="background:var(--orange)"></div>
        Researching 2025+
      </div>
      <div class="roadmap-item">AI Sales Predictions</div>
      <div class="roadmap-item">IoT Sensor Integration</div>
      <div class="roadmap-item">Voice Order System</div>
      <div class="roadmap-item">Blockchain Supply Chain</div>
      <div class="roadmap-item">Computer Vision Inventory</div>
    </div>
  </div>

  <!-- COMPARE -->
  <div class="section-label">What sets me apart</div>
  <div class="compare">
    <div class="compare-col bad">
      <div class="compare-title red">✗ Generic Developer</div>
      <div class="compare-item">Tutorial-level code</div>
      <div class="compare-item">Demo-only features</div>
      <div class="compare-item">No real-world testing</div>
      <div class="compare-item">Copy-paste solutions</div>
      <div class="compare-item">Over-engineered mess</div>
      <div class="compare-item">Disconnected from business goals</div>
    </div>
    <div class="compare-col good">
      <div class="compare-title green">✓ Muhamad Arhum</div>
      <div class="compare-item">Battle-tested production code</div>
      <div class="compare-item">Real transaction handling</div>
      <div class="compare-item">Used by 50+ actual businesses</div>
      <div class="compare-item">Custom logic per client</div>
      <div class="compare-item">Clean, scalable architecture</div>
      <div class="compare-item">Understands your revenue goals</div>
    </div>
  </div>

  <!-- TESTIMONIALS -->
  <div class="section-label">Client testimonials</div>
  <div class="testimonials">
    <div class="test-card">
      <div class="test-stars">★★★★★</div>
      <div class="test-text">Arhum built our restaurant POS from scratch. The system handles 200+ orders daily without a single glitch. His understanding of our workflow was exceptional.</div>
      <div class="test-author">Restaurant Chain Owner</div>
      <div class="test-badge">POS System</div>
    </div>
    <div class="test-card">
      <div class="test-stars">★★★★★</div>
      <div class="test-text">The inventory system reduced our stockout incidents by 80%. The automated alerts alone saved us thousands in lost sales. Absolute game changer!</div>
      <div class="test-author">Retail Store Manager</div>
      <div class="test-badge">Inventory</div>
    </div>
    <div class="test-card">
      <div class="test-stars">★★★★★</div>
      <div class="test-text">Best decision we made. The billing system is flawless, GST calculations are perfect, and the reports help us make data-driven decisions every single day.</div>
      <div class="test-author">Cafe Chain Director</div>
      <div class="test-badge">Billing Engine</div>
    </div>
    <div class="test-card">
      <div class="test-stars">★★★★★</div>
      <div class="test-text">Arhum doesn't just code — he understands business. His solutions actually solve real problems. Highly recommend for any serious business automation project.</div>
      <div class="test-author">Business Consultant</div>
      <div class="test-badge">Consulting</div>
    </div>
  </div>

  <!-- CTA -->
  <div class="cta">
    <h2>Let's Build Something <span style="color:var(--cyan)">Incredible</span></h2>
    <p>// open for freelance · consulting · full-time opportunities · response under 24hrs</p>
    <div class="cta-buttons">
      <a class="btn btn-primary" href="mailto:your.email@example.com">Send Email</a>
      <a class="btn btn-outline" href="https://wa.me/923001234567">WhatsApp</a>
      <a class="btn btn-outline" href="https://linkedin.com/in/yourprofile">LinkedIn</a>
      <a class="btn btn-outline" href="https://yourportfolio.com">Portfolio</a>
    </div>
    <div class="avail-row">
      <div class="avail-item">
        <div class="avail-status status-open">✓ Open</div>
        <div class="avail-role">Freelance</div>
      </div>
      <div class="avail-item">
        <div class="avail-status status-open">✓ Available</div>
        <div class="avail-role">Consulting</div>
      </div>
      <div class="avail-item">
        <div class="avail-status status-talk">Let's Talk</div>
        <div class="avail-role">Full-Time</div>
      </div>
      <div class="avail-item">
        <div class="avail-status status-open">✓ Yes</div>
        <div class="avail-role">Collaboration</div>
      </div>
    </div>
  </div>
</div>

<!-- FOOTER -->
<footer>
  crafted with passion &nbsp;·&nbsp; muhamad arhum &nbsp;·&nbsp; pakistan 🇵🇰 &nbsp;·&nbsp; mern stack &nbsp;·&nbsp; 2026
</footer>

</body>
</html>
