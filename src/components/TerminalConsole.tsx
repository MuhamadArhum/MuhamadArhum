import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Play, CornerDownLeft, Sparkles } from 'lucide-react';
import { PROFILE_IDENTITY, MODULES, POWER_LEVELS, MISSION_FILES, ROADMAP_ITEMS, SYSTEM_STATUS_DATA } from '../data/profileData';
import { audioEngine } from './AudioEngine';

interface TerminalConsoleProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export const TerminalConsole: React.FC<TerminalConsoleProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'whoami',
      output: <span className="text-[#00ff9c]">muhammad_arhum</span>,
      timestamp: '00:01:02',
    },
    {
      command: 'cat identity.json',
      output: (
        <pre className="text-xs text-neutral-300 font-mono overflow-x-auto whitespace-pre">
{JSON.stringify({
  name: PROFILE_IDENTITY.name,
  role: PROFILE_IDENTITY.role,
  company: `${PROFILE_IDENTITY.company} (${PROFILE_IDENTITY.companyRole})`,
  mission: PROFILE_IDENTITY.mission,
  location: PROFILE_IDENTITY.location,
  status: PROFILE_IDENTITY.status,
}, null, 2)}
        </pre>
      ),
      timestamp: '00:01:05',
    },
    {
      command: './boot_sequence.sh',
      output: (
        <div className="text-xs font-mono space-y-0.5">
          <p><span className="text-[#00ff9c] font-bold">[  OK  ]</span> Core identity loaded</p>
          <p><span className="text-[#00ff9c] font-bold">[  OK  ]</span> AI modules online</p>
          <p><span className="text-[#00ff9c] font-bold">[  OK  ]</span> Full-stack engine running</p>
          <p><span className="text-[#00ff9c] font-bold">[  OK  ]</span> Business systems synced</p>
          <p><span className="text-amber-400 font-bold">[  OK  ]</span> Coffee supply ................. CRITICAL ☕</p>
          <p className="text-[#00d4ff] font-semibold mt-1">&gt;&gt; All systems operational. Welcome, visitor._</p>
        </div>
      ),
      timestamp: '00:01:09',
    }
  ]);

  const [commandIndex, setCommandIndex] = useState<number>(-1);
  const [savedCommands, setSavedCommands] = useState<string[]>([
    'whoami',
    'cat identity.json',
    './boot_sequence.sh'
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [isOpen, history]);

  const handleExecute = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    audioEngine.playKeypress();
    const timeStr = new Date().toTimeString().split(' ')[0];
    const parts = trimmed.split(' ');
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ').toLowerCase();

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="text-xs font-mono space-y-1 text-neutral-300">
            <p className="text-[#00ff9c] font-bold">AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-2">
              <div><span className="text-[#00d4ff]">whoami</span> - Print current operative identity</div>
              <div><span className="text-[#00d4ff]">cat identity.json</span> - View classified identity dossier</div>
              <div><span className="text-[#00d4ff]">./boot_sequence.sh</span> - Re-run system diagnostic sequence</div>
              <div><span className="text-[#00d4ff]">modules</span> - List active engineering modules</div>
              <div><span className="text-[#00d4ff]">power</span> - Show diagnostic power levels & coffee index</div>
              <div><span className="text-[#00d4ff]">ls / projects</span> - List executable mission files</div>
              <div><span className="text-[#00d4ff]">decrypt &lt;name&gt;</span> - Decrypt mission file (e.g. decrypt pos)</div>
              <div><span className="text-[#00d4ff]">roadmap</span> - Display execution roadmap milestones</div>
              <div><span className="text-[#00d4ff]">status</span> - System configuration & availability status</div>
              <div><span className="text-[#00d4ff]">contact</span> - Direct links to establish communication</div>
              <div><span className="text-[#00d4ff]">clear</span> - Clear terminal session output</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div>
            <span className="text-[#00ff9c] font-bold">muhammad_arhum</span>
            <span className="text-neutral-400 text-xs ml-2">({PROFILE_IDENTITY.role.join(', ')} · Founder @ {PROFILE_IDENTITY.company})</span>
          </div>
        );
        break;

      case 'cat':
        if (arg === 'identity.json') {
          output = (
            <pre className="text-xs text-neutral-300 font-mono overflow-x-auto whitespace-pre">
{JSON.stringify({
  name: PROFILE_IDENTITY.name,
  role: PROFILE_IDENTITY.role,
  company: `${PROFILE_IDENTITY.company} (${PROFILE_IDENTITY.companyRole})`,
  mission: PROFILE_IDENTITY.mission,
  location: PROFILE_IDENTITY.location,
  status: PROFILE_IDENTITY.status,
}, null, 2)}
            </pre>
          );
        } else if (arg === 'roadmap.md') {
          output = (
            <div className="text-xs font-mono space-y-1 text-neutral-300">
              {ROADMAP_ITEMS.map((item, idx) => (
                <p key={idx}>
                  <span className={item.status === 'completed' ? 'text-[#00ff9c]' : item.status === 'in-progress' ? 'text-[#00d4ff]' : 'text-neutral-500'}>
                    [{item.status === 'completed' ? 'x' : item.status === 'in-progress' ? '~' : ' '}]
                  </span> {item.text}
                </p>
              ))}
            </div>
          );
        } else {
          output = <span className="text-rose-400 text-xs">cat: {arg || 'file'}: No such file or directory. Try 'cat identity.json' or 'cat roadmap.md'</span>;
        }
        break;

      case './boot_sequence.sh':
      case 'boot':
        audioEngine.playSuccess();
        output = (
          <div className="text-xs font-mono space-y-0.5">
            <p><span className="text-[#00ff9c] font-bold">[  OK  ]</span> Core identity loaded</p>
            <p><span className="text-[#00ff9c] font-bold">[  OK  ]</span> AI modules online</p>
            <p><span className="text-[#00ff9c] font-bold">[  OK  ]</span> Full-stack engine running</p>
            <p><span className="text-[#00ff9c] font-bold">[  OK  ]</span> Business systems synced</p>
            <p><span className="text-amber-400 font-bold">[  OK  ]</span> Coffee supply ................. CRITICAL ☕</p>
            <p className="text-[#00d4ff] font-semibold mt-1">&gt;&gt; All systems operational. Welcome, visitor._</p>
          </div>
        );
        break;

      case 'modules':
        output = (
          <div className="text-xs font-mono space-y-2">
            {MODULES.map((m) => (
              <div key={m.id} className="border-l-2 border-[#00ff9c] pl-2">
                <p className="text-[#00ff9c] font-bold">[{m.code}] {m.title} - {m.status}</p>
                <p className="text-neutral-400 text-[11px]">{m.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'power':
        output = (
          <div className="text-xs font-mono space-y-1">
            {POWER_LEVELS.map((p, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-40 text-neutral-300">{p.name}</span>
                <span className="text-[#00ff9c] font-mono">{p.bar}</span>
                <span className="text-neutral-400 font-bold">{p.level}%</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'ls':
      case 'projects':
      case 'missions':
        output = (
          <div className="text-xs font-mono space-y-1.5">
            <p className="text-neutral-400">Classified mission files located in /missions:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
              {MISSION_FILES.map((f) => (
                <div key={f.id} className="p-1.5 bg-black/60 border border-[#00ff9c]/20 rounded">
                  <div className="flex items-center justify-between">
                    <span className="text-[#00d4ff] font-bold">{f.filename}</span>
                    <span className="text-[10px] px-1 bg-[#00ff9c]/10 text-[#00ff9c]">{f.classification}</span>
                  </div>
                  <p className="text-[11px] text-neutral-400">{f.category}</p>
                </div>
              ))}
            </div>
            <p className="text-neutral-400 text-[11px] mt-1">Tip: run <code className="text-[#00ff9c]">decrypt &lt;filename&gt;</code> to open file inspector.</p>
          </div>
        );
        break;

      case 'decrypt':
        audioEngine.playDecrypt();
        const foundProject = MISSION_FILES.find(
          f => f.filename.toLowerCase().includes(arg) || f.id.toLowerCase().includes(arg) || f.title.toLowerCase().includes(arg)
        );
        if (foundProject) {
          if (onSelectProject) {
            onSelectProject(foundProject.id);
          }
          output = (
            <div className="text-xs font-mono space-y-1 text-[#00ff9c]">
              <p className="font-bold">DECRYPTING [{foundProject.filename}] ... SUCCESS ✔</p>
              <p className="text-neutral-300">{foundProject.title}</p>
              <p className="text-neutral-400 text-[11px]">{foundProject.description}</p>
              <p className="text-[#00d4ff] text-[11px]">Throughput: {foundProject.metrics.throughput} | Latency: {foundProject.metrics.latency}</p>
              <p className="text-neutral-500 text-[10px]">Project inspector modal activated on main display.</p>
            </div>
          );
        } else {
          output = (
            <div className="text-xs text-amber-300">
              <p>Unknown file code: "{arg}". Available files:</p>
              <ul className="list-disc list-inside text-neutral-400 text-[11px] mt-1">
                <li>restaurant_pos.exe (or 'pos')</li>
                <li>inventory_core.exe (or 'inventory')</li>
                <li>billing_engine.exe (or 'billing')</li>
                <li>crm_erp_suite.exe (or 'crm')</li>
              </ul>
            </div>
          );
        }
        break;

      case 'roadmap':
        output = (
          <div className="text-xs font-mono space-y-1">
            <p className="text-[#00ff9c] font-bold">&gt; ROADMAP.md</p>
            {ROADMAP_ITEMS.map((item, idx) => (
              <p key={idx} className="text-neutral-300">
                <span className={item.status === 'completed' ? 'text-[#00ff9c]' : item.status === 'in-progress' ? 'text-[#00d4ff]' : 'text-neutral-500'}>
                  [{item.status === 'completed' ? 'x' : item.status === 'in-progress' ? '~' : ' '}]
                </span> {item.text}
              </p>
            ))}
          </div>
        );
        break;

      case 'status':
        output = (
          <div className="text-xs font-mono space-y-1 text-neutral-300">
            <p><span className="text-[#00d4ff]">[CURRENT_FOCUS]</span> {SYSTEM_STATUS_DATA.currentFocus}</p>
            <p><span className="text-[#00d4ff]">[INTERESTS]    </span> {SYSTEM_STATUS_DATA.interests}</p>
            <p><span className="text-[#00d4ff]">[BUILD_STACK]  </span> {SYSTEM_STATUS_DATA.buildStack}</p>
            <p><span className="text-[#00d4ff]">[APPROACH]     </span> {SYSTEM_STATUS_DATA.approach}</p>
            <p><span className="text-[#00d4ff]">[AVAILABILITY] </span> {SYSTEM_STATUS_DATA.availability}</p>
            <p><span className="text-[#00d4ff]">[LOCATION]     </span> {SYSTEM_STATUS_DATA.location}</p>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="text-xs font-mono space-y-1 text-neutral-300">
            <p className="text-[#00ff9c] font-bold">&gt; ESTABLISH_CONNECTION</p>
            <p>Email: <a href={`mailto:${PROFILE_IDENTITY.socials.email}`} className="text-[#00d4ff] underline">{PROFILE_IDENTITY.socials.email}</a></p>
            <p>GitHub: <a href={PROFILE_IDENTITY.socials.github} target="_blank" rel="noreferrer" className="text-[#00d4ff] underline">{PROFILE_IDENTITY.socials.github}</a></p>
            <p>Company: <a href={PROFILE_IDENTITY.socials.website} target="_blank" rel="noreferrer" className="text-[#00d4ff] underline">{PROFILE_IDENTITY.company} ({PROFILE_IDENTITY.companyRole})</a></p>
            <p>LinkedIn: <a href={PROFILE_IDENTITY.socials.linkedin} target="_blank" rel="noreferrer" className="text-[#00d4ff] underline">{PROFILE_IDENTITY.socials.linkedin}</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        output = (
          <p className="text-rose-400 text-xs">
            command not found: "{cmd}". Type <span className="text-[#00ff9c] font-bold">help</span> to view all system commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        command: trimmed,
        output,
        timestamp: timeStr,
      }
    ]);
    setSavedCommands((prev) => [...prev, trimmed]);
    setCommandIndex(-1);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleExecute(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (savedCommands.length > 0) {
        const nextIndex = commandIndex === -1 ? savedCommands.length - 1 : Math.max(0, commandIndex - 1);
        setCommandIndex(nextIndex);
        setInputVal(savedCommands[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandIndex !== -1) {
        const nextIndex = commandIndex + 1;
        if (nextIndex < savedCommands.length) {
          setCommandIndex(nextIndex);
          setInputVal(savedCommands[nextIndex]);
        } else {
          setCommandIndex(-1);
          setInputVal('');
        }
      }
    }
  };

  const quickCommands = [
    'whoami',
    'cat identity.json',
    './boot_sequence.sh',
    'modules',
    'power',
    'projects',
    'roadmap',
    'status',
    'contact'
  ];

  if (!isOpen) return null;

  return (
    <div
      className={`fixed z-50 transition-all duration-300 ease-in-out border border-[#00ff9c]/40 bg-black/95 shadow-[0_0_30px_rgba(0,255,156,0.2)] rounded-t-lg sm:rounded-lg overflow-hidden flex flex-col ${
        isExpanded
          ? 'inset-2 sm:inset-6'
          : 'bottom-0 left-0 right-0 sm:left-auto sm:right-6 sm:bottom-6 sm:w-[640px] h-[480px]'
      }`}
    >
      {/* Title bar */}
      <div className="bg-[#050f0a] border-b border-[#00ff9c]/30 px-3 py-2 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 text-[#00ff9c]">
          <TerminalIcon className="w-4 h-4 text-[#00ff9c]" />
          <span className="font-bold tracking-wide">root@arhum:~$ TERMINAL_CLI (v2.4)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 text-neutral-400 hover:text-[#00d4ff] transition-colors rounded"
            title={isExpanded ? 'Restore window' : 'Maximize window'}
          >
            {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-rose-400 transition-colors rounded"
            title="Close terminal"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Quick clickable command chips */}
      <div className="bg-black/90 px-3 py-1.5 border-b border-[#00ff9c]/15 flex items-center gap-1.5 overflow-x-auto text-[11px] scrollbar-none">
        <span className="text-neutral-500 font-mono text-[10px] uppercase">Quick:</span>
        {quickCommands.map((qc) => (
          <button
            key={qc}
            onClick={() => handleExecute(qc)}
            className="px-2 py-0.5 rounded bg-[#00ff9c]/5 border border-[#00ff9c]/20 text-[#00ff9c] hover:bg-[#00ff9c]/20 hover:border-[#00ff9c] transition-all whitespace-nowrap font-mono"
          >
            {qc}
          </button>
        ))}
      </div>

      {/* Terminal log history */}
      <div className="flex-1 p-3 overflow-y-auto space-y-3 font-mono text-xs select-text">
        <div className="text-neutral-500 text-[11px] border-b border-neutral-800 pb-2">
          Connected to Muhammad Arhum Systems [Linux x86_64, Kernel 6.1.0-arhum-ai].
          <br />Type <span className="text-[#00ff9c]">help</span> for interactive options or click the quick tags above.
        </div>

        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#00ff9c] font-bold">root@arhum:~$</span>
              <span className="text-white font-medium">{item.command}</span>
              <span className="text-neutral-600 text-[10px] ml-auto">{item.timestamp}</span>
            </div>
            <div className="pl-4 border-l border-[#00ff9c]/20 py-0.5">
              {item.output}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input bar */}
      <div className="p-2.5 bg-[#050f0a] border-t border-[#00ff9c]/30 flex items-center gap-2">
        <span className="text-[#00ff9c] font-mono text-xs font-bold pl-1">root@arhum:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type 'help', 'modules', 'projects'..."
          className="flex-1 bg-transparent text-[#00ff9c] placeholder-neutral-600 text-xs font-mono focus:outline-none"
        />
        <button
          onClick={() => handleExecute(inputVal)}
          disabled={!inputVal.trim()}
          className="p-1 rounded bg-[#00ff9c]/20 border border-[#00ff9c]/50 text-[#00ff9c] hover:bg-[#00ff9c]/40 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          title="Run command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
