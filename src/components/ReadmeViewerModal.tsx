import React, { useState } from 'react';
import { X, FileText, Copy, Check, Eye, Code } from 'lucide-react';
import { audioEngine } from './AudioEngine';

interface ReadmeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReadmeViewerModal: React.FC<ReadmeViewerModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [viewTab, setViewTab] = useState<'raw' | 'about'>('raw');

  if (!isOpen) return null;

  const rawMarkdownContent = `<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=venom&height=280&color=0:000000,50:001a0f,100:00ff9c&text=MUHAMMAD%20ARHUM&fontColor=00ff9c&fontSize=54&fontAlignY=38&desc=%E2%96%8C%20SYSTEM%20ONLINE%20%E2%96%90%20%C2%B7%20AI%20ENGINEER%20%C2%B7%20FULL-STACK%20DEV%20%C2%B7%20FOUNDER&descAlignY=60&descSize=15&animation=twinkling" alt="Header" />

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=18&duration=2400&pause=600&color=00FF9C&background=00000000&center=true&vCenter=true&width=950&height=50&lines=%3E+INITIALIZING+MUHAMMAD_ARHUM.exe+...;%3E+SCANNING+NETWORK...+3+NODES+FOUND;%3E+LOADING+MODULES%3A+AI+%7C+FULL-STACK+%7C+ERP+%7C+POS;%3E+BYPASSING+FIREWALL...+ACCESS+GRANTED+%E2%9C%94;%3E+FOUNDER+%26+CEO+%40+ABYTESOL;%3E+INNOVATE.+CONNECT.+GROW." alt="Typing" />

<br/>

<img src="https://img.shields.io/badge/STATUS-ONLINE-00ff9c?style=for-the-badge&labelColor=000000" alt="status"/>
<img src="https://img.shields.io/badge/CLEARANCE-LEVEL%205-00d4ff?style=for-the-badge&labelColor=000000" alt="clearance"/>
<img src="https://img.shields.io/badge/LOCATION-PAKISTAN-00ff9c?style=for-the-badge&labelColor=000000" alt="location"/>
<img src="https://komarev.com/ghpvc/?username=MuhamadArhum&label=VISITORS&color=00d4ff&style=for-the-badge&labelColor=000000" alt="views"/>

</div>

## > ACCESSING_USER_FILE...

root@arhum:~$ whoami
muhammad_arhum

root@arhum:~$ cat identity.json
{
  "name"     : "Muhammad Arhum",
  "role"     : ["AI Engineer", "Full-Stack Developer"],
  "company"  : "AbyteSol (Founder & CEO)",
  "mission"  : "INNOVATE. CONNECT. GROW.",
  "location" : "Pakistan",
  "status"   : "Building. Shipping. Repeating."
}

root@arhum:~$ ./boot_sequence.sh
[  OK  ] Core identity loaded
[  OK  ] AI modules online
[  OK  ] Full-stack engine running
[  OK  ] Business systems synced
[  OK  ] Coffee supply ................. CRITICAL ☕
>> All systems operational. Welcome, visitor._

"Every great product starts with a question: What if we built it better?"
Main Muhammad Arhum hoon: AI Engineer aur Full-Stack Developer. Pehle sketch se working product tak: architecture, code, mushkil problems aur polished experience. Main AbyteSol ka Founder & CEO bhi hoon.`;

  const copySource = () => {
    audioEngine.playKeypress();
    navigator.clipboard.writeText(rawMarkdownContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl rounded-xl border border-[#00ff9c]/40 bg-[#040a06] shadow-[0_0_35px_rgba(0,255,156,0.2)] overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="bg-[#020503] border-b border-[#00ff9c]/30 px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00ff9c]">
            <FileText className="w-4 h-4" />
            <span className="font-bold">GITHUB_PROFILE // README.md SOURCE</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copySource}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono bg-black border border-neutral-700 text-neutral-300 hover:text-[#00ff9c] hover:border-[#00ff9c]/50 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#00ff9c]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED' : 'COPY RAW'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-neutral-400 hover:text-rose-400 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 font-mono text-xs text-neutral-300 bg-black/95 select-text">
          <pre className="whitespace-pre-wrap leading-relaxed text-neutral-300 font-mono">
            {rawMarkdownContent}
          </pre>
        </div>

        <div className="bg-[#020503] border-t border-neutral-800 px-5 py-2.5 flex items-center justify-between text-xs font-mono text-neutral-500">
          <span>Repository: MuhamadArhum/MuhamadArhum</span>
          <button
            onClick={onClose}
            className="text-[#00ff9c] hover:underline"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
