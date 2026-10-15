import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, Shield, FileText, CheckCircle2 } from 'lucide-react';
import { audioEngine } from './AudioEngine';
import { PROFILE_IDENTITY } from '../data/profileData';

interface CyberHeaderProps {
  onOpenTerminal: () => void;
  onToggleReadme: () => void;
  onOpenStudio: () => void;
  isTerminalOpen: boolean;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
}

export const CyberHeader: React.FC<CyberHeaderProps> = ({
  onOpenTerminal,
  onToggleReadme,
  onOpenStudio,
  isTerminalOpen,
  soundEnabled,
  setSoundEnabled,
}) => {
  const [typingIndex, setTypingIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const typingLines = [
    "> INITIALIZING MUHAMMAD_ARHUM.exe ...",
    "> SCANNING NETWORK... 3 NODES FOUND",
    "> LOADING MODULES: AI | FULL-STACK | ERP | POS",
    "> BYPASSING FIREWALL... ACCESS GRANTED ✔",
    "> FOUNDER & CEO @ ABYTESOL",
    "> INNOVATE. CONNECT. GROW."
  ];

  useEffect(() => {
    const fullText = typingLines[typingIndex];
    const speed = isDeleting ? 25 : 55;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (soundEnabled && currentText.length % 3 === 0) {
          audioEngine.playKeypress();
        }
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setTypingIndex((prev) => (prev + 1) % typingLines.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typingIndex, soundEnabled]);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    audioEngine.enabled = next;
    if (next) {
      audioEngine.playBeep(900, 0.1);
    }
  };

  return (
    <header className="relative w-full border-b border-[#00ff9c]/20 bg-[#030705]/90 backdrop-blur-md sticky top-0 z-40">
      {/* Top Telemetry & Control Bar */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs border-b border-[#00ff9c]/10">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-[#00ff9c]/10 border border-[#00ff9c]/40 text-[#00ff9c] font-semibold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#00ff9c] animate-ping" />
            STATUS: ONLINE
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-[#00d4ff]/10 border border-[#00d4ff]/40 text-[#00d4ff] font-semibold tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            CLEARANCE: {PROFILE_IDENTITY.clearanceLevel}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-neutral-900 border border-neutral-700 text-neutral-300">
            LOCATION: {PROFILE_IDENTITY.location.toUpperCase()}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-colors border ${
              soundEnabled
                ? 'bg-[#00ff9c]/20 border-[#00ff9c] text-[#00ff9c]'
                : 'bg-neutral-900 border-neutral-700 text-neutral-400 hover:text-neutral-200'
            }`}
            title="Toggle cyber sound synthesizer"
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="font-mono">{soundEnabled ? 'SFX ON' : 'SFX MUTED'}</span>
          </button>

          {/* Toggle Interactive Terminal Drawer */}
          <button
            onClick={() => {
              if (soundEnabled) audioEngine.playBeep(1100, 0.05);
              onOpenTerminal();
            }}
            className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs transition-all border ${
              isTerminalOpen
                ? 'bg-[#00d4ff]/20 border-[#00d4ff] text-[#00d4ff] shadow-[0_0_10px_rgba(0,212,255,0.3)]'
                : 'bg-neutral-900 border-neutral-700 text-neutral-300 hover:border-[#00d4ff]/60 hover:text-[#00d4ff]'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="font-mono">TERMINAL_CLI</span>
          </button>

          {/* Open Profile Studio */}
          <button
            onClick={() => {
              if (soundEnabled) audioEngine.playSuccess();
              onOpenStudio();
            }}
            className="flex items-center gap-1.5 px-3 py-1 rounded text-xs bg-[#00FF41]/15 border border-[#00FF41] text-[#00FF41] hover:bg-[#00FF41]/25 transition-all shadow-[0_0_10px_rgba(0,255,65,0.25)] font-mono font-bold"
            title="Open Markdown & Workflow Export Studio"
          >
            <span>⚡ STUDIO / EXPORT</span>
          </button>

          {/* Raw README Toggle */}
          <button
            onClick={() => {
              if (soundEnabled) audioEngine.playBeep(850, 0.05);
              onToggleReadme();
            }}
            className="flex items-center gap-1 px-2.5 py-1 rounded text-xs bg-neutral-900 border border-neutral-700 text-neutral-400 hover:text-[#00ff9c] hover:border-[#00ff9c]/40 transition-colors"
            title="View original Markdown source"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden md:inline">README.md</span>
          </button>
        </div>
      </div>

      {/* Hero Visual Capsule Banner */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-4">
        <div className="relative rounded-lg overflow-hidden border border-[#00ff9c]/30 bg-gradient-to-r from-black via-[#001a0f] to-black p-6 sm:p-8 cyber-glow-green text-center">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff9c08_1px,transparent_1px),linear-gradient(to_bottom,#00ff9c08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Header titles */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff9c]/10 border border-[#00ff9c]/30 text-[#00ff9c] text-xs font-semibold tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9c]" />
              SYSTEM ONLINE · CLEARANCE LEVEL 5 · REPO_v1.0
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-wider text-white text-glow-green">
              MUHAMMAD <span className="text-[#00ff9c]">ARHUM</span>
            </h1>

            <p className="mt-3 text-xs sm:text-sm md:text-base font-mono text-[#00d4ff] flex flex-wrap items-center justify-center gap-2">
              <span className="text-neutral-400">▍</span>
              <span>AI ENGINEER</span>
              <span className="text-neutral-500">·</span>
              <span>FULL-STACK DEV</span>
              <span className="text-neutral-500">·</span>
              <span className="text-[#00ff9c] font-semibold">FOUNDER & CEO @ ABYTESOL</span>
              <span className="text-neutral-400">▐</span>
            </p>

            {/* Dynamic Typewriter Box */}
            <div className="mt-6 w-full max-w-2xl bg-[#000000]/80 border border-[#00ff9c]/40 rounded px-4 py-2.5 flex items-center justify-center font-mono text-xs sm:text-sm text-[#00ff9c] shadow-[inset_0_0_15px_rgba(0,255,156,0.15)]">
              <span className="truncate">{currentText}</span>
              <span className="inline-block w-2.5 h-4 ml-1 bg-[#00ff9c] animate-cursor-blink" />
            </div>

            {/* Quick Action Badges */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs">
              <a
                href={PROFILE_IDENTITY.socials.github}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 bg-black/70 border border-neutral-700 hover:border-[#00ff9c] text-neutral-300 hover:text-[#00ff9c] rounded transition-all"
              >
                GitHub @MuhamadArhum
              </a>
              <a
                href={PROFILE_IDENTITY.socials.githubRepos}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 bg-[#00ff9c]/10 border border-[#00ff9c]/40 text-[#00ff9c] rounded hover:bg-[#00ff9c]/20 transition-all font-semibold"
              >
                ⚡ Explore Repositories
              </a>
              <a
                href={`mailto:${PROFILE_IDENTITY.socials.email}`}
                className="px-3 py-1 bg-black/70 border border-neutral-700 hover:border-[#00d4ff] text-neutral-300 hover:text-[#00d4ff] rounded transition-all"
              >
                ✉ Direct Dispatch
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
