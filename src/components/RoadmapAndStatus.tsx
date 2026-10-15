import React from 'react';
import { CheckSquare, Square, RefreshCcw, MapPin, Compass, Cpu, Target } from 'lucide-react';
import { ROADMAP_ITEMS, SYSTEM_STATUS_DATA } from '../data/profileData';

export const RoadmapAndStatus: React.FC = () => {
  return (
    <section className="py-12 border-b border-[#00ff9c]/15 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: ROADMAP.md */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00ff9c] tracking-widest uppercase mb-1">
              <Target className="w-3.5 h-3.5 text-[#00ff9c]" />
              STRATEGIC_TRAJECTORY
            </div>
            <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white flex items-center gap-2 mb-6">
              <span className="text-[#00ff9c]">&gt;</span> ROADMAP.md
            </h2>

            <div className="rounded-lg bg-black border border-neutral-800 p-5 font-mono space-y-3.5">
              {ROADMAP_ITEMS.map((item, idx) => {
                const isDone = item.status === 'completed';
                const isInProg = item.status === 'in-progress';
                return (
                  <div
                    key={idx}
                    className={`p-3 rounded border flex items-start gap-3 transition-colors ${
                      isDone
                        ? 'border-[#00ff9c]/30 bg-[#00ff9c]/5'
                        : isInProg
                        ? 'border-[#00d4ff]/40 bg-[#00d4ff]/5'
                        : 'border-neutral-800 bg-neutral-950/40 text-neutral-400'
                    }`}
                  >
                    <div className="mt-0.5">
                      {isDone ? (
                        <span className="px-1.5 py-0.5 rounded bg-[#00ff9c]/20 text-[#00ff9c] text-xs font-bold font-mono">
                          [ x ]
                        </span>
                      ) : isInProg ? (
                        <span className="px-1.5 py-0.5 rounded bg-[#00d4ff]/20 text-[#00d4ff] text-xs font-bold font-mono animate-pulse">
                          [ ~ ]
                        </span>
                      ) : (
                        <span className="px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-500 text-xs font-mono">
                          [ &nbsp; ]
                        </span>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="text-xs sm:text-sm font-semibold text-neutral-200">
                        {item.text}
                      </div>
                      <div className="text-[11px] text-neutral-500 mt-0.5">
                        {item.date}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: SYSTEM_STATUS */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00d4ff] tracking-widest uppercase mb-1">
              <Compass className="w-3.5 h-3.5 text-[#00d4ff]" />
              OPERATIONAL_STATE
            </div>
            <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white flex items-center gap-2 mb-6">
              <span className="text-[#00ff9c]">&gt;</span> SYSTEM_STATUS
            </h2>

            <div className="rounded-lg bg-black border border-neutral-800 p-5 font-mono text-xs sm:text-sm space-y-4 shadow-lg">
              <div className="border-b border-neutral-900 pb-3">
                <span className="text-neutral-500 text-xs block mb-1">[CURRENT_FOCUS]</span>
                <span className="text-white font-medium">{SYSTEM_STATUS_DATA.currentFocus}</span>
              </div>

              <div className="border-b border-neutral-900 pb-3">
                <span className="text-neutral-500 text-xs block mb-1">[INTERESTS]</span>
                <span className="text-[#00ff9c] font-medium">{SYSTEM_STATUS_DATA.interests}</span>
              </div>

              <div className="border-b border-neutral-900 pb-3">
                <span className="text-neutral-500 text-xs block mb-1">[BUILD_STACK]</span>
                <span className="text-[#00d4ff] font-medium">{SYSTEM_STATUS_DATA.buildStack}</span>
              </div>

              <div className="border-b border-neutral-900 pb-3">
                <span className="text-neutral-500 text-xs block mb-1">[APPROACH]</span>
                <span className="text-amber-400 font-medium">{SYSTEM_STATUS_DATA.approach}</span>
              </div>

              <div className="border-b border-neutral-900 pb-3">
                <span className="text-neutral-500 text-xs block mb-1">[AVAILABILITY]</span>
                <span className="text-emerald-400 font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {SYSTEM_STATUS_DATA.availability}
                </span>
              </div>

              <div className="pt-1 flex items-center justify-between text-neutral-400 text-xs">
                <span>[LOCATION] {SYSTEM_STATUS_DATA.location}</span>
                <span>[TIMEZONE] {SYSTEM_STATUS_DATA.timezone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
