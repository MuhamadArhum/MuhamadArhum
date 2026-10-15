import React from 'react';
import { Lock, Unlock, Play, ExternalLink, ShieldCheck, Terminal } from 'lucide-react';
import { MISSION_FILES, MissionFile } from '../data/profileData';
import { audioEngine } from './AudioEngine';

interface MissionFilesSectionProps {
  onDecryptProject: (project: MissionFile) => void;
}

export const MissionFilesSection: React.FC<MissionFilesSectionProps> = ({ onDecryptProject }) => {
  return (
    <section className="py-12 border-b border-[#00ff9c]/15 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00ff9c] tracking-widest uppercase mb-1">
              <Lock className="w-3.5 h-3.5 text-[#00ff9c]" />
              ENCRYPTED_ARCHIVES // LEVEL_CLEARANCE
            </div>
            <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white flex items-center gap-2">
              <span className="text-[#00ff9c]">&gt;</span> MISSION_FILES
            </h2>
          </div>

          <div className="font-mono text-xs text-neutral-400 bg-black/60 border border-neutral-800 rounded px-3 py-1.5 flex items-center gap-2">
            <span className="text-[#00d4ff]">4 EXECUTABLE ARCHIVES LOADED</span>
          </div>
        </div>

        {/* 2x2 Grid corresponding to README table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MISSION_FILES.map((file) => {
            const isLevel3 = file.clearanceLevel >= 3;
            return (
              <div
                key={file.id}
                className="rounded-lg border border-neutral-800 bg-gradient-to-b from-black to-[#030a06] hover:border-[#00ff9c]/60 transition-all p-5 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Top file header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-base sm:text-lg font-mono font-bold text-white group-hover:text-[#00ff9c] transition-colors flex items-center gap-2">
                        <span>{file.id === 'restaurant-pos' ? '🎟️' : file.id === 'inventory-core' ? '📦' : file.id === 'billing-engine' ? '🧾' : '🏢'}</span>
                        <code>{file.filename}</code>
                      </span>
                    </div>

                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                      isLevel3
                        ? 'bg-[#00d4ff]/10 border-[#00d4ff]/40 text-[#00d4ff]'
                        : 'bg-[#00ff9c]/10 border-[#00ff9c]/40 text-[#00ff9c]'
                    }`}>
                      {file.classification}
                    </span>
                  </div>

                  {/* Urdu Summary from README */}
                  <p className="text-xs sm:text-sm text-neutral-300 font-mono mb-4 leading-relaxed">
                    {file.urduSummary}
                  </p>

                  {/* Classification & Focus Terminal Box */}
                  <div className="p-3 rounded bg-black border border-neutral-800 font-mono text-xs mb-4">
                    <div className="text-neutral-500 text-[10px] mb-1">DOSSIER METRICS:</div>
                    <div className="text-[#00d4ff] font-semibold">{file.classification}</div>
                    <div className="text-neutral-400 mt-0.5">FOCUS: {file.category}</div>
                  </div>
                </div>

                {/* Decrypt and Link actions */}
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-neutral-900">
                  <button
                    onClick={() => {
                      audioEngine.playDecrypt();
                      onDecryptProject(file);
                    }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded font-mono text-xs font-bold bg-[#00ff9c]/15 border border-[#00ff9c]/40 text-[#00ff9c] hover:bg-[#00ff9c]/25 hover:border-[#00ff9c] transition-all"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>▶ DECRYPT FILE</span>
                  </button>

                  <a
                    href="https://github.com/MuhamadArhum?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
                  >
                    <span>SOURCE REPO</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
