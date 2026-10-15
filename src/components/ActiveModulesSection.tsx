import React, { useState } from 'react';
import { Bot, Code2, Building2, Rocket, CheckCircle2, ChevronRight, Cpu } from 'lucide-react';
import { MODULES, ModuleData } from '../data/profileData';
import { audioEngine } from './AudioEngine';

interface ActiveModulesSectionProps {
  onModuleClick?: (module: ModuleData) => void;
}

export const ActiveModulesSection: React.FC<ActiveModulesSectionProps> = ({ onModuleClick }) => {
  const [activeModuleId, setActiveModuleId] = useState<string>(MODULES[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot className="w-5 h-5 text-[#00ff9c]" />;
      case 'Code': return <Code2 className="w-5 h-5 text-[#00d4ff]" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-[#00ff9c]" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-[#00d4ff]" />;
      default: return <Cpu className="w-5 h-5 text-[#00ff9c]" />;
    }
  };

  return (
    <section className="py-12 border-b border-[#00ff9c]/15 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00ff9c] tracking-widest uppercase mb-1">
              <span className="w-2 h-2 rounded-full bg-[#00ff9c]" />
              SYSTEM_CORE // INITIALIZED
            </div>
            <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white flex items-center gap-2">
              <span className="text-[#00ff9c]">&gt;</span> ACTIVE_MODULES
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-400 bg-black/60 border border-neutral-800 rounded px-3 py-1.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00ff9c] animate-pulse" />
            <span>4 / 4 CORES RUNNING AT FULL INTEGRITY</span>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MODULES.map((module) => {
            const isSelected = activeModuleId === module.id;
            return (
              <div
                key={module.id}
                onClick={() => {
                  setActiveModuleId(module.id);
                  audioEngine.playKeypress();
                  if (onModuleClick) onModuleClick(module);
                }}
                className={`group relative rounded-lg border transition-all duration-300 p-6 cursor-pointer bg-gradient-to-br from-black via-[#040e08] to-black ${
                  isSelected
                    ? 'border-[#00ff9c] shadow-[0_0_20px_rgba(0,255,156,0.18)] scale-[1.01]'
                    : 'border-neutral-800 hover:border-[#00ff9c]/50 hover:bg-[#00140a]/40'
                }`}
              >
                {/* Header of Module */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded bg-black/80 border border-neutral-800 group-hover:border-[#00ff9c]/50 transition-colors">
                      {getIcon(module.icon)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-semibold text-[#00ff9c] tracking-wide">
                          [ {module.code} ]
                        </span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#00ff9c]/10 text-[#00ff9c] font-mono border border-[#00ff9c]/30">
                          {module.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-mono font-bold text-white group-hover:text-[#00ff9c] transition-colors">
                        {module.title}
                      </h3>
                    </div>
                  </div>

                  <div className="text-right font-mono">
                    <span className="text-xs text-neutral-500 block">POWER</span>
                    <span className="text-sm font-bold text-[#00d4ff]">{module.powerLevel}%</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4 font-mono">
                  {module.description}
                </p>

                {/* Focus YAML Block from README */}
                <div className="rounded bg-[#020503] border border-neutral-800 p-3 mb-4 font-mono text-xs">
                  <div className="text-neutral-500 text-[11px] mb-1.5 flex items-center justify-between">
                    <span>FOCUS DIRECTIVES</span>
                    <span className="text-[10px] text-[#00ff9c]">YAML_SPEC</span>
                  </div>
                  <ul className="space-y-1.5 text-neutral-300">
                    {module.focus.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-[#00ff9c]">&gt;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags & Action */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-neutral-900">
                  <div className="flex flex-wrap gap-1.5">
                    {module.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 border border-neutral-800 text-neutral-400 group-hover:border-[#00ff9c]/30 group-hover:text-neutral-300 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-mono text-[#00d4ff] group-hover:translate-x-1 transition-transform">
                    <span>INSPECT</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
