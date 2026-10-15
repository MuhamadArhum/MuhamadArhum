import React, { useState } from 'react';
import { Cpu, Terminal, Layers, CheckCircle2, Sparkles, Filter } from 'lucide-react';
import { TECH_ARSENAL } from '../data/profileData';
import { audioEngine } from './AudioEngine';

export const TechArsenalSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Language / AI', 'Frontend', 'Backend', 'Desktop', 'Dev Tools'];

  const filteredTech = selectedCategory === 'All'
    ? TECH_ARSENAL
    : TECH_ARSENAL.filter(t => t.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section className="py-12 border-b border-[#00ff9c]/15 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00ff9c] tracking-widest uppercase mb-1">
              <Cpu className="w-3.5 h-3.5 text-[#00ff9c]" />
              WEAPONS_SYSTEMS // ARSENAL
            </div>
            <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white flex items-center gap-2">
              <span className="text-[#00ff9c]">&gt;</span> TECH_ARSENAL
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-mono text-neutral-500 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  audioEngine.playKeypress();
                  setSelectedCategory(cat);
                }}
                className={`px-2.5 py-1 rounded text-xs font-mono transition-all border ${
                  selectedCategory === cat
                    ? 'bg-[#00ff9c]/20 border-[#00ff9c] text-[#00ff9c] font-semibold'
                    : 'bg-black/60 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Badges from README */}
        <div className="mb-8 p-4 rounded-lg bg-black/60 border border-neutral-800 flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-black border border-[#00ff9c]/40 font-mono text-xs text-[#00ff9c]">
            <span className="w-2 h-2 rounded-full bg-[#00ff9c] animate-pulse" />
            <span className="font-bold">AI & AUTOMATION</span>
            <span className="text-neutral-500 text-[10px]">OPENAI CORE</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-black border border-[#00d4ff]/40 font-mono text-xs text-[#00d4ff]">
            <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
            <span className="font-bold">FULL-STACK ENGINE</span>
            <span className="text-neutral-500 text-[10px]">REACT + NODE</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-black border border-[#00ff9c]/40 font-mono text-xs text-[#00ff9c]">
            <span className="w-2 h-2 rounded-full bg-[#00ff9c] animate-pulse" />
            <span className="font-bold">DESKTOP APPS</span>
            <span className="text-neutral-500 text-[10px]">ELECTRON POS</span>
          </div>
        </div>

        {/* Interactive Stack Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredTech.map((tech, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-lg border border-neutral-800 bg-[#020704] hover:border-[#00ff9c]/60 hover:bg-[#00170b] transition-all group cursor-default"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black text-[#00d4ff] border border-neutral-800">
                  {tech.badge}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9c]/60 group-hover:bg-[#00ff9c] transition-colors" />
              </div>
              <h4 className="text-sm font-mono font-bold text-white group-hover:text-[#00ff9c] transition-colors">
                {tech.name}
              </h4>
              <p className="text-[11px] font-mono text-neutral-400 mt-1">
                {tech.category}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Skillicons SVG banner embedded from README */}
        <div className="mt-8 p-4 rounded-lg border border-[#00ff9c]/20 bg-black/80 text-center">
          <p className="text-xs font-mono text-neutral-400 mb-3">
            VERIFIED TOOLCHAIN MATRIX // EMBEDDED
          </p>
          <img
            src="https://skillicons.dev/icons?i=python,typescript,javascript,react,nodejs,html,css,tailwind,electron,git,github,vscode&perline=12&theme=dark"
            alt="Muhamad Arhum Tech Stack"
            className="mx-auto max-w-full h-auto drop-shadow-[0_0_12px_rgba(0,255,156,0.2)]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
