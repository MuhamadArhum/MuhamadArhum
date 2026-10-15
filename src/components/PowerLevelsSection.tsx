import React, { useState } from 'react';
import { Zap, Coffee, RefreshCw, Flame, Check } from 'lucide-react';
import { POWER_LEVELS } from '../data/profileData';
import { audioEngine } from './AudioEngine';

export const PowerLevelsSection: React.FC = () => {
  const [isOverclocked, setIsOverclocked] = useState(false);
  const [viewMode, setViewMode] = useState<'hud' | 'ascii'>('hud');
  const [coffeeCount, setCoffeeCount] = useState(1);

  const handleOverclock = () => {
    audioEngine.playDecrypt();
    setIsOverclocked(true);
    setTimeout(() => {
      setIsOverclocked(false);
    }, 4000);
  };

  const handleDrinkCoffee = () => {
    audioEngine.playSuccess();
    setCoffeeCount(prev => prev + 1);
  };

  return (
    <section className="py-12 border-b border-[#00ff9c]/15 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00d4ff] tracking-widest uppercase mb-1">
              <Zap className="w-3.5 h-3.5 text-[#00d4ff]" />
              DIAGNOSTIC_METRICS // CORE
            </div>
            <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white flex items-center gap-2">
              <span className="text-[#00ff9c]">&gt;</span> POWER_LEVELS
            </h2>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* View Mode Toggle */}
            <div className="flex rounded border border-neutral-800 bg-black/80 p-0.5 text-xs font-mono">
              <button
                onClick={() => {
                  audioEngine.playKeypress();
                  setViewMode('hud');
                }}
                className={`px-3 py-1 rounded transition-colors ${
                  viewMode === 'hud'
                    ? 'bg-[#00ff9c]/20 text-[#00ff9c] font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                CYBER HUD
              </button>
              <button
                onClick={() => {
                  audioEngine.playKeypress();
                  setViewMode('ascii');
                }}
                className={`px-3 py-1 rounded transition-colors ${
                  viewMode === 'ascii'
                    ? 'bg-[#00ff9c]/20 text-[#00ff9c] font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                RAW ASCII
              </button>
            </div>

            {/* Overclock action button */}
            <button
              onClick={handleOverclock}
              disabled={isOverclocked}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-mono text-xs font-bold transition-all border ${
                isOverclocked
                  ? 'bg-amber-500/20 border-amber-500 text-amber-400 animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                  : 'bg-black/60 border-neutral-700 hover:border-[#00ff9c] text-neutral-300 hover:text-[#00ff9c]'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>{isOverclocked ? 'OVERCLOCK ACTIVE (+10%)' : 'SURGE OVERCLOCK'}</span>
            </button>

            {/* Refill Coffee button */}
            <button
              onClick={handleDrinkCoffee}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded font-mono text-xs border border-amber-600/40 bg-amber-950/20 text-amber-300 hover:bg-amber-900/30 transition-all"
              title="Consume coffee ration"
            >
              <Coffee className="w-3.5 h-3.5 text-amber-400" />
              <span>CUP #{coffeeCount}</span>
            </button>
          </div>
        </div>

        {/* Content display */}
        {viewMode === 'ascii' ? (
          <div className="rounded-lg bg-black border border-[#00ff9c]/30 p-6 font-mono text-xs sm:text-sm text-[#00ff9c] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] overflow-x-auto">
            <div className="text-neutral-500 mb-2">// DIRECT OUTPUT FROM README.md SPEC</div>
            <pre className="leading-relaxed">
{POWER_LEVELS.map(p => {
  const boost = isOverclocked ? Math.min(100, p.level + 10) : p.level;
  return `${p.name.padEnd(18, ' ')} [${p.bar}]  ${boost}%`;
}).join('\n')}
            </pre>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {POWER_LEVELS.map((power, idx) => {
              const currentVal = isOverclocked ? Math.min(100, power.level + 10) : power.level;
              return (
                <div
                  key={idx}
                  className="rounded-lg border border-neutral-800 bg-black/70 p-4 font-mono hover:border-[#00ff9c]/40 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-neutral-200 font-bold tracking-wide flex items-center gap-1.5">
                      {power.name === 'CAFFEINE' ? (
                        <Coffee className="w-3.5 h-3.5 text-amber-400" />
                      ) : (
                        <Zap className="w-3.5 h-3.5 text-[#00d4ff]" />
                      )}
                      {power.name}
                    </span>
                    <span
                      className="font-bold text-sm"
                      style={{ color: power.color }}
                    >
                      {currentVal}%
                    </span>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="w-full h-3 bg-neutral-900 rounded overflow-hidden p-0.5 border border-neutral-800">
                    <div
                      className="h-full rounded transition-all duration-700 ease-out relative overflow-hidden"
                      style={{
                        width: `${currentVal}%`,
                        backgroundColor: power.color,
                        boxShadow: `0 0 10px ${power.color}66`,
                      }}
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.3)_50%,transparent_100%)] animate-[shimmer_2s_infinite]" />
                    </div>
                  </div>

                  <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-500">
                    <span>ASCII: {power.bar.slice(0, 10)}...</span>
                    <span>
                      {currentVal >= 90 ? 'MASTER // MISSION CRITICAL' : currentVal >= 75 ? 'HIGH OPERATIONAL GRADE' : 'CALIBRATED'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
