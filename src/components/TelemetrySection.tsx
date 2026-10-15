import React, { useState, useEffect } from 'react';
import { Activity, Award, Trophy, Radio, ShieldCheck, Terminal, Cpu } from 'lucide-react';
import { PROFILE_IDENTITY } from '../data/profileData';

export const TelemetrySection: React.FC = () => {
  const [uptimeSeconds, setUptimeSeconds] = useState(14520);
  const [pingLatency, setPingLatency] = useState(42);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptimeSeconds(prev => prev + 1);
      // Small simulated ping fluctuation between 38ms and 48ms
      setPingLatency(Math.floor(38 + Math.random() * 10));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="py-12 border-b border-[#00ff9c]/15 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00d4ff] tracking-widest uppercase mb-1">
              <Radio className="w-3.5 h-3.5 text-[#00d4ff] animate-pulse" />
              SATELLITE_FEED // CONTINUOUS
            </div>
            <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white flex items-center gap-2">
              <span className="text-[#00ff9c]">&gt;</span> LIVE_TELEMETRY
            </h2>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <div className="px-3 py-1 bg-black border border-neutral-800 rounded text-neutral-300">
              <span className="text-neutral-500 mr-1.5">NODE_LATENCY:</span>
              <span className="text-[#00ff9c] font-bold">{pingLatency}ms</span>
            </div>
            <div className="px-3 py-1 bg-black border border-neutral-800 rounded text-neutral-300">
              <span className="text-neutral-500 mr-1.5">SYS_UPTIME:</span>
              <span className="text-[#00d4ff] font-bold">{formatUptime(uptimeSeconds)}</span>
            </div>
          </div>
        </div>

        {/* GitHub Stats & Languages row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="p-4 rounded-lg bg-black border border-neutral-800 flex flex-col items-center justify-center">
            <div className="text-[11px] font-mono text-neutral-500 mb-2 w-full flex justify-between">
              <span>GITHUB PROFILE STATS</span>
              <span className="text-[#00ff9c]">API_STATUS: SYNCED</span>
            </div>
            <img
              src="https://github-readme-stats.vercel.app/api?username=MuhamadArhum&show_icons=true&hide_border=true&bg_color=000000&title_color=00ff9c&text_color=a7f3d0&icon_color=00d4ff&ring_color=00ff9c&rank_icon=github"
              alt="GitHub Stats"
              className="w-full max-w-md h-auto"
              loading="lazy"
            />
          </div>

          <div className="p-4 rounded-lg bg-black border border-neutral-800 flex flex-col items-center justify-center">
            <div className="text-[11px] font-mono text-neutral-500 mb-2 w-full flex justify-between">
              <span>TOP PROGRAMMING LANGUAGES</span>
              <span className="text-[#00d4ff]">COMPACT_VIEW</span>
            </div>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=MuhamadArhum&layout=compact&hide_border=true&bg_color=000000&title_color=00ff9c&text_color=a7f3d0"
              alt="Top Languages"
              className="w-full max-w-md h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* GitHub Streak Stats */}
        <div className="mb-6 p-4 rounded-lg bg-black border border-neutral-800 flex flex-col items-center">
          <div className="text-[11px] font-mono text-neutral-500 mb-2 w-full flex justify-between">
            <span>COMMITMENT STREAK TELEMETRY</span>
            <span className="text-amber-400">HEROKU_CONNECTOR</span>
          </div>
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=MuhamadArhum&background=000000&ring=00ff9c&fire=00d4ff&currStreakLabel=00ff9c&sideLabels=a7f3d0&currStreakNum=ffffff&sideNums=ffffff&dates=6b7280&stroke=00ff9c33&hide_border=true"
            alt="Streak Stats"
            className="w-full max-w-2xl h-auto"
            loading="lazy"
          />
        </div>

        {/* Activity Graph */}
        <div className="mb-10 p-4 rounded-lg bg-black border border-neutral-800 flex flex-col items-center">
          <div className="text-[11px] font-mono text-neutral-500 mb-2 w-full flex justify-between">
            <span>ACTIVITY DENSITY GRAPH</span>
            <span className="text-[#00ff9c]">LIVE_FEED</span>
          </div>
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=MuhamadArhum&bg_color=000000&color=00ff9c&line=00ff9c&point=00d4ff&area=true&area_color=00ff9c&hide_border=true"
            alt="Activity Graph"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        {/* ACHIEVEMENTS UNLOCKED SECTION */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl font-mono font-bold text-white flex items-center gap-2">
              <span className="text-[#00ff9c]">&gt;</span> ACHIEVEMENTS_UNLOCKED
            </h3>
          </div>
          <div className="p-4 rounded-lg bg-black border border-neutral-800 flex justify-center overflow-x-auto">
            <img
              src="https://github-profile-trophy.vercel.app/?username=MuhamadArhum&theme=matrix&no-frame=true&no-bg=true&margin-w=10&row=1&column=7"
              alt="Achievements Trophies"
              className="max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* CONTRIBUTION SNAKE SECTION */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-[#00ff9c]" />
            <h3 className="text-xl font-mono font-bold text-white flex items-center gap-2">
              <span className="text-[#00ff9c]">&gt;</span> CONTRIBUTION_SNAKE
            </h3>
          </div>
          <div className="p-6 rounded-lg bg-black border border-[#00ff9c]/30 flex flex-col items-center justify-center cyber-glow-green">
            <img
              src="https://raw.githubusercontent.com/MuhamadArhum/MuhamadArhum/output/github-snake-dark.svg"
              alt="Snake eating contributions"
              className="w-full max-w-4xl h-auto"
              loading="lazy"
            />
            <p className="text-[11px] font-mono text-neutral-500 mt-3">
              Automated git workflow eating commit matrix pixels in dark mode.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
