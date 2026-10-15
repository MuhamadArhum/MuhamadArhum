import React, { useState } from 'react';
import { CyberHeader } from './components/CyberHeader';
import { TerminalConsole } from './components/TerminalConsole';
import { ActiveModulesSection } from './components/ActiveModulesSection';
import { PowerLevelsSection } from './components/PowerLevelsSection';
import { TechArsenalSection } from './components/TechArsenalSection';
import { MissionFilesSection } from './components/MissionFilesSection';
import { TelemetrySection } from './components/TelemetrySection';
import { RoadmapAndStatus } from './components/RoadmapAndStatus';
import { EstablishConnection } from './components/EstablishConnection';
import { ProjectInspectorModal } from './components/ProjectInspectorModal';
import { ReadmeViewerModal } from './components/ReadmeViewerModal';
import { ReadmeStudioModal } from './components/ReadmeStudioModal';
import { PROFILE_IDENTITY, MISSION_FILES, MissionFile } from './data/profileData';
import { audioEngine } from './components/AudioEngine';
import { Terminal, Shield, ArrowUp, Sparkles, CheckCircle2, Coffee, Layers, Code, Play } from 'lucide-react';

export const App: React.FC = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isReadmeOpen, setIsReadmeOpen] = useState(false);
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<MissionFile | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isCrtEffect, setIsCrtEffect] = useState(false);

  const scrollToTop = () => {
    audioEngine.playKeypress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProjectId = (projectId: string) => {
    const project = MISSION_FILES.find(p => p.id === projectId || p.filename.toLowerCase().includes(projectId.toLowerCase()));
    if (project) {
      setSelectedProject(project);
    }
  };

  return (
    <div className={`min-h-screen bg-[#030705] text-[#a7f3d0] relative selection:bg-[#00ff9c]/30 selection:text-[#00ff9c] ${isCrtEffect ? 'crt-overlay' : ''}`}>
      {/* Background Matrix-like subtle grid pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#00ff9c05_1px,transparent_1px),linear-gradient(to_bottom,#00ff9c05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

      {/* Cyber Header Navigation */}
      <CyberHeader
        onOpenTerminal={() => setIsTerminalOpen(!isTerminalOpen)}
        onToggleReadme={() => setIsReadmeOpen(true)}
        onOpenStudio={() => setIsStudioOpen(true)}
        isTerminalOpen={isTerminalOpen}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

      {/* Prominent GitHub Profile README Copy Banner */}
      <div className="relative z-20 bg-gradient-to-r from-[#00170a] via-[#002b14] to-[#00170a] border-b border-[#00FF41]/40 py-3 px-4 shadow-[0_4px_20px_rgba(0,255,65,0.15)]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00FF41] animate-ping" />
            <span className="text-white font-bold tracking-wide">
              🔥 GITHUB PROFILE READY // Target: <span className="text-[#00FF41]">MuhamadArhum/README.md</span>
            </span>
            <span className="hidden md:inline text-neutral-400">
              (Aapki profile ka sara cyberpunk code tayyar hai)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                audioEngine.playSuccess();
                setIsStudioOpen(true);
              }}
              className="px-3 py-1 rounded bg-[#00d4ff]/20 border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff]/30 font-bold transition-all"
            >
              ⚙ CUSTOMIZE DETAILS
            </button>
            <button
              onClick={() => {
                audioEngine.playSuccess();
                setIsReadmeOpen(true);
              }}
              className="px-4 py-1.5 rounded bg-[#00FF41] text-black font-extrabold hover:bg-[#33ff66] transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,255,65,0.4)] cursor-pointer"
            >
              <span>📋 COPY README.MD CODE</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* ACCESSING_USER_FILE (Hero Identity & Bio Section) */}
        <section className="py-12 border-b border-[#00ff9c]/15">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00ff9c] tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-[#00ff9c]" />
                FILE_STREAM // IDENTITY_RECORD
              </div>
              <div className="font-mono text-xs text-neutral-400">
                HOST: <span className="text-[#00d4ff]">root@arhum</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white flex items-center gap-2 mb-6">
              <span className="text-[#00ff9c]">&gt;</span> ACCESSING_USER_FILE...
            </h2>

            {/* Terminal Command Simulation Box */}
            <div className="rounded-lg bg-black border border-[#00ff9c]/30 p-5 sm:p-6 font-mono text-xs sm:text-sm text-neutral-300 shadow-[0_0_25px_rgba(0,255,156,0.08)] mb-8 space-y-4">
              <div>
                <div className="flex items-center gap-2 text-[#00ff9c]">
                  <span className="font-bold">root@arhum:~$</span>
                  <span className="text-white font-medium">whoami</span>
                </div>
                <div className="pl-4 text-[#00ff9c] font-bold mt-1">muhammad_arhum</div>
              </div>

              <div className="pt-2 border-t border-neutral-900">
                <div className="flex items-center gap-2 text-[#00ff9c]">
                  <span className="font-bold">root@arhum:~$</span>
                  <span className="text-white font-medium">cat identity.json</span>
                </div>
                <pre className="pl-4 mt-2 text-xs sm:text-sm text-neutral-300 overflow-x-auto whitespace-pre">
{`{
  "name"     : "Muhammad Arhum",
  "role"     : ["AI Engineer", "Full-Stack Developer"],
  "company"  : "AbyteSol (Founder & CEO)",
  "mission"  : "INNOVATE. CONNECT. GROW.",
  "location" : "Pakistan",
  "status"   : "Building. Shipping. Repeating."
}`}
                </pre>
              </div>

              <div className="pt-2 border-t border-neutral-900">
                <div className="flex items-center gap-2 text-[#00ff9c]">
                  <span className="font-bold">root@arhum:~$</span>
                  <span className="text-white font-medium">./boot_sequence.sh</span>
                </div>
                <div className="pl-4 mt-2 space-y-1 text-xs sm:text-sm">
                  <p><span className="text-[#00ff9c] font-bold">[  OK  ]</span> Core identity loaded</p>
                  <p><span className="text-[#00ff9c] font-bold">[  OK  ]</span> AI modules online</p>
                  <p><span className="text-[#00ff9c] font-bold">[  OK  ]</span> Full-stack engine running</p>
                  <p><span className="text-[#00ff9c] font-bold">[  OK  ]</span> Business systems synced</p>
                  <p><span className="text-amber-400 font-bold">[  OK  ]</span> Coffee supply ................. CRITICAL ☕</p>
                  <p className="text-[#00d4ff] font-semibold pt-1">&gt;&gt; All systems operational. Welcome, visitor._</p>
                </div>
              </div>
            </div>

            {/* Philosophy Callout Quote & Urdu Bio from README */}
            <div className="rounded-xl border border-neutral-800 bg-gradient-to-r from-[#030906] via-[#05140b] to-[#030906] p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#00ff9c]" />
              <blockquote className="text-base sm:text-xl font-mono font-medium text-white mb-4">
                "{PROFILE_IDENTITY.quote}"
              </blockquote>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-mono mb-4">
                {PROFILE_IDENTITY.bio}
              </p>

              <div className="inline-block px-4 py-1.5 rounded bg-black/80 border border-[#00ff9c]/40 font-mono text-xs text-[#00ff9c] font-bold tracking-widest">
                + INNOVATE. CONNECT. GROW.
              </div>
            </div>
          </div>
        </section>

        {/* ACTIVE MODULES */}
        <ActiveModulesSection
          onModuleClick={(mod) => {
            // Optional click handler
          }}
        />

        {/* POWER LEVELS */}
        <PowerLevelsSection />

        {/* TECH ARSENAL */}
        <TechArsenalSection />

        {/* MISSION FILES (PROJECTS) */}
        <MissionFilesSection
          onDecryptProject={(proj) => setSelectedProject(proj)}
        />

        {/* LIVE TELEMETRY & ACHIEVEMENTS & SNAKE */}
        <TelemetrySection />

        {/* ROADMAP & SYSTEM STATUS */}
        <RoadmapAndStatus />

        {/* ESTABLISH CONNECTION & FOOTER */}
        <EstablishConnection />
      </main>

      {/* Floating Action Trigger for Terminal */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-full bg-black/80 border border-neutral-700 text-neutral-400 hover:text-[#00ff9c] hover:border-[#00ff9c] transition-all shadow-lg backdrop-blur-sm"
          title="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        <button
          onClick={() => {
            if (soundEnabled) audioEngine.playBeep(1200, 0.05);
            setIsTerminalOpen(!isTerminalOpen);
          }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-black border border-[#00ff9c] text-[#00ff9c] hover:bg-[#00ff9c]/20 transition-all font-mono text-xs font-bold shadow-[0_0_20px_rgba(0,255,156,0.3)] backdrop-blur-md"
        >
          <Terminal className="w-4 h-4" />
          <span>{isTerminalOpen ? 'CLOSE_CLI' : 'LAUNCH_TERMINAL'}</span>
        </button>
      </div>

      {/* Interactive Modals */}
      <TerminalConsole
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onSelectProject={handleSelectProjectId}
      />

      <ProjectInspectorModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ReadmeViewerModal
        isOpen={isReadmeOpen}
        onClose={() => setIsReadmeOpen(false)}
      />

      <ReadmeStudioModal
        isOpen={isStudioOpen}
        onClose={() => setIsStudioOpen(false)}
        initialUsername="MuhamadArhum"
      />
    </div>
  );
};
export default App;
