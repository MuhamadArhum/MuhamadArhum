import React, { useState } from 'react';
import { Mail, Linkedin, Globe, Github, Copy, Check, Send, Sparkles, MessageSquare } from 'lucide-react';
import { PROFILE_IDENTITY } from '../data/profileData';
import { audioEngine } from './AudioEngine';

export const EstablishConnection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [message, setMessage] = useState('');
  const [transmissionSent, setTransmissionSent] = useState(false);

  const copyEmail = () => {
    audioEngine.playKeypress();
    navigator.clipboard.writeText(PROFILE_IDENTITY.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendTransmission = (e: React.FormEvent) => {
    e.preventDefault();
    audioEngine.playSuccess();
    setTransmissionSent(true);
    const subject = encodeURIComponent(`Collab Inquiry: ${senderName || 'Transmission'} [${senderOrg || 'Organization'}]`);
    const body = encodeURIComponent(`Name: ${senderName}\nOrganization: ${senderOrg}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${PROFILE_IDENTITY.socials.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff9c]/10 border border-[#00ff9c]/30 text-[#00ff9c] text-xs font-mono tracking-widest uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-[#00ff9c] animate-pulse" />
          COMMUNICATION_LINK // OPEN
        </div>
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white mb-4">
          <span className="text-[#00ff9c]">&gt;</span> ESTABLISH_CONNECTION
        </h2>
        <p className="text-sm font-mono text-neutral-400 max-w-xl mx-auto mb-8">
          Available for intelligent digital systems, AI agent integrations, custom ERP/POS platforms, and high-impact software leadership.
        </p>

        {/* Action Badges Row matching README */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <a
            href={PROFILE_IDENTITY.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded bg-black border border-[#00d4ff]/40 text-[#00d4ff] hover:bg-[#00d4ff]/10 hover:border-[#00d4ff] transition-all font-mono text-xs font-bold"
          >
            <Linkedin className="w-4 h-4" />
            <span>LINKEDIN</span>
          </a>

          <a
            href={`mailto:${PROFILE_IDENTITY.socials.email}`}
            className="flex items-center gap-2 px-4 py-2.5 rounded bg-black border border-[#00ff9c]/40 text-[#00ff9c] hover:bg-[#00ff9c]/10 hover:border-[#00ff9c] transition-all font-mono text-xs font-bold"
          >
            <Mail className="w-4 h-4" />
            <span>EMAIL DISPATCH</span>
          </a>

          <a
            href={PROFILE_IDENTITY.socials.website}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded bg-black border border-[#00d4ff]/40 text-[#00d4ff] hover:bg-[#00d4ff]/10 hover:border-[#00d4ff] transition-all font-mono text-xs font-bold"
          >
            <Globe className="w-4 h-4" />
            <span>ABYTESOL CORP</span>
          </a>

          <button
            onClick={copyEmail}
            className="flex items-center gap-2 px-4 py-2.5 rounded bg-black border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 transition-all font-mono text-xs"
          >
            {copied ? <Check className="w-4 h-4 text-[#00ff9c]" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'EMAIL COPIED ✔' : 'COPY EMAIL'}</span>
          </button>
        </div>

        {/* Quick Transmission Box */}
        <div className="rounded-xl border border-[#00ff9c]/30 bg-black/80 p-6 sm:p-8 text-left max-w-xl mx-auto cyber-glow-green mb-12">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00ff9c]">
              <MessageSquare className="w-4 h-4" />
              <span className="font-bold">DIRECT TRANSMISSION DISPATCH</span>
            </div>
            <span className="text-[10px] font-mono text-neutral-500">PGP_ENABLED: YES</span>
          </div>

          <form onSubmit={handleSendTransmission} className="space-y-4 font-mono text-xs">
            <div>
              <label className="text-neutral-400 block mb-1">Your Name / Call Sign:</label>
              <input
                type="text"
                required
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="e.g. Commander Sarah / Founder"
                className="w-full px-3 py-2 bg-[#020503] border border-neutral-800 rounded text-neutral-200 focus:outline-none focus:border-[#00ff9c]"
              />
            </div>

            <div>
              <label className="text-neutral-400 block mb-1">Company / Organization:</label>
              <input
                type="text"
                value={senderOrg}
                onChange={(e) => setSenderOrg(e.target.value)}
                placeholder="e.g. Venture Studio / Retail Chain"
                className="w-full px-3 py-2 bg-[#020503] border border-neutral-800 rounded text-neutral-200 focus:outline-none focus:border-[#00ff9c]"
              />
            </div>

            <div>
              <label className="text-neutral-400 block mb-1">Transmission Payload (Message):</label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe project requirements, timeline, or collaboration vision..."
                className="w-full px-3 py-2 bg-[#020503] border border-neutral-800 rounded text-neutral-200 focus:outline-none focus:border-[#00ff9c]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-[#00ff9c]/20 border border-[#00ff9c] text-[#00ff9c] hover:bg-[#00ff9c]/30 font-bold rounded flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(0,255,156,0.2)]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>TRANSMIT VIA EMAIL CLIENT</span>
            </button>
          </form>
        </div>

        {/* Motivational Banner and Footer */}
        <div className="space-y-6 pt-6">
          <h3 className="text-lg sm:text-xl font-mono font-bold text-white tracking-wide text-glow-green">
            &gt; THINK BIGGER. BUILD SMARTER. KEEP SHIPPING._
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={PROFILE_IDENTITY.socials.githubRepos}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-black border border-[#00ff9c]/40 text-[#00ff9c] hover:bg-[#00ff9c]/20 rounded font-mono text-xs font-bold transition-all"
            >
              EXPLORE MY WORK
            </a>
            <a
              href={PROFILE_IDENTITY.socials.github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-black border border-[#00d4ff]/40 text-[#00d4ff] hover:bg-[#00d4ff]/20 rounded font-mono text-xs font-bold transition-all"
            >
              FOLLOW MY JOURNEY
            </a>
          </div>

          {/* Waving footer decoration */}
          <div className="relative mt-8 overflow-hidden rounded-lg">
            <img
              src="https://capsule-render.vercel.app/api?type=waving&section=footer&height=140&color=0:00ff9c,50:001a0f,100:000000"
              alt="Cyber Waving Footer"
              className="w-full h-auto drop-shadow-[0_0_20px_rgba(0,255,156,0.2)]"
              loading="lazy"
            />
          </div>

          <div className="font-mono text-xs text-[#00ff9c] font-bold tracking-widest pt-4">
            [ INNOVATE. CONNECT. GROW. ]
          </div>
          <div className="font-mono text-[11px] text-neutral-500">
            &gt; Powered by curiosity, code, and coffee ☕ | END_OF_TRANSMISSION
          </div>
        </div>
      </div>
    </section>
  );
};
