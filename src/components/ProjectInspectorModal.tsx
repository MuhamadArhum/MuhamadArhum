import React, { useState } from 'react';
import { X, ExternalLink, Shield, CheckCircle, Terminal, Activity, Layers, Play } from 'lucide-react';
import { MissionFile } from '../data/profileData';
import { audioEngine } from './AudioEngine';

interface ProjectInspectorModalProps {
  project: MissionFile | null;
  onClose: () => void;
}

export const ProjectInspectorModal: React.FC<ProjectInspectorModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'simulation' | 'architecture'>('overview');

  // Simulation state for interactive test bench
  const [posItems, setPosItems] = useState([
    { name: 'Special Burger Combo', price: 850, qty: 1 },
    { name: 'Mint Lemonade', price: 250, qty: 2 }
  ]);
  const [invSearch, setInvSearch] = useState('');
  const [taxRate, setTaxRate] = useState(16);
  const [invoiceAmount, setInvoiceAmount] = useState(12000);

  if (!project) return null;

  const totalPos = posItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl rounded-xl border border-[#00ff9c]/50 bg-[#040906] shadow-[0_0_40px_rgba(0,255,156,0.25)] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Top Header */}
        <div className="bg-[#020503] border-b border-[#00ff9c]/30 px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00ff9c] animate-pulse" />
            <div className="font-mono">
              <span className="text-xs text-neutral-400">DECRYPTED_PAYLOAD // </span>
              <span className="text-sm font-bold text-[#00ff9c]">{project.filename}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] font-semibold">
              {project.classification}
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded text-neutral-400 hover:text-rose-400 hover:bg-neutral-900 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="flex border-b border-neutral-800 bg-black/60 px-5 text-xs font-mono">
          <button
            onClick={() => {
              audioEngine.playKeypress();
              setActiveTab('overview');
            }}
            className={`py-2.5 px-3 border-b-2 font-semibold transition-colors ${
              activeTab === 'overview'
                ? 'border-[#00ff9c] text-[#00ff9c]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            SPECIFICATION
          </button>
          <button
            onClick={() => {
              audioEngine.playKeypress();
              setActiveTab('simulation');
            }}
            className={`py-2.5 px-3 border-b-2 font-semibold transition-colors flex items-center gap-1.5 ${
              activeTab === 'simulation'
                ? 'border-[#00d4ff] text-[#00d4ff]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Play className="w-3 h-3" />
            LIVE SIMULATION
          </button>
          <button
            onClick={() => {
              audioEngine.playKeypress();
              setActiveTab('architecture');
            }}
            className={`py-2.5 px-3 border-b-2 font-semibold transition-colors ${
              activeTab === 'architecture'
                ? 'border-[#00ff9c] text-[#00ff9c]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            ARCHITECTURE & METRICS
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 font-mono text-xs sm:text-sm space-y-6">
          {activeTab === 'overview' && (
            <>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-neutral-400 text-xs">{project.category}</p>
              </div>

              {/* Urdu Quote from original README */}
              <div className="p-3.5 rounded-lg border border-[#00ff9c]/20 bg-[#00170b]/60 text-[#a7f3d0] italic text-xs">
                <span className="text-[#00ff9c] font-bold not-italic">" {project.urduSummary} "</span>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#00d4ff] uppercase tracking-wider">Operational Summary</h4>
                <p className="text-neutral-300 leading-relaxed">{project.description}</p>
              </div>

              {/* Key Features */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-[#00ff9c] uppercase tracking-wider">Engineered Capabilities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="p-2.5 rounded bg-black/60 border border-neutral-800 flex items-start gap-2">
                      <span className="text-[#00ff9c] font-bold">✔</span>
                      <span className="text-neutral-300 text-xs">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'simulation' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-neutral-400 border-b border-neutral-800 pb-2">
                <span>SIMULATED TEST BENCH: {project.filename}</span>
                <span className="text-[#00ff9c] font-bold">SANDBOX ENVIRONMENT // READY</span>
              </div>

              {project.id === 'restaurant-pos' && (
                <div className="p-4 rounded-lg bg-black border border-neutral-800 space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold text-[#00ff9c]">
                    <span>ORDER TICKET #104 (Dine-in Table 04)</span>
                    <span className="text-neutral-400">KDS Status: COOKING</span>
                  </div>
                  <div className="space-y-2">
                    {posItems.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs text-neutral-300 py-1 border-b border-neutral-900">
                        <span>{item.name} x {item.qty}</span>
                        <span className="text-white font-bold">PKR {item.price * item.qty}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-2 font-bold text-sm text-[#00d4ff]">
                    <span>NET TOTAL:</span>
                    <span>PKR {totalPos.toLocaleString()}</span>
                  </div>
                  <button
                    onClick={() => {
                      audioEngine.playSuccess();
                      alert('Order dispatched to Kitchen Display System (KDS) printer!');
                    }}
                    className="w-full py-2 bg-[#00ff9c]/20 border border-[#00ff9c] text-[#00ff9c] font-bold rounded hover:bg-[#00ff9c]/30 transition-all text-xs"
                  >
                    DISPATCH TO KITCHEN DISPLAY
                  </button>
                </div>
              )}

              {project.id === 'inventory-core' && (
                <div className="p-4 rounded-lg bg-black border border-neutral-800 space-y-3">
                  <div className="text-xs text-neutral-400">SKU Ledger Query Console:</div>
                  <input
                    type="text"
                    value={invSearch}
                    onChange={(e) => setInvSearch(e.target.value)}
                    placeholder="Search SKU code or item name (e.g., SKU-904)..."
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 rounded text-xs text-[#00ff9c] font-mono focus:outline-none focus:border-[#00ff9c]"
                  />
                  <div className="space-y-1.5 text-xs text-neutral-300 font-mono">
                    <div className="flex justify-between p-2 bg-neutral-900/50 rounded">
                      <span>SKU-904: Thermal Printer Paper Roll (80mm)</span>
                      <span className="text-[#00ff9c] font-bold">In Stock: 420 units</span>
                    </div>
                    <div className="flex justify-between p-2 bg-neutral-900/50 rounded">
                      <span>SKU-882: Barcode Scanner USB Core</span>
                      <span className="text-amber-400 font-bold">Low Stock: 12 units (Reorder Alert)</span>
                    </div>
                    <div className="flex justify-between p-2 bg-neutral-900/50 rounded">
                      <span>SKU-741: Touch Terminal 15.6" Assembly</span>
                      <span className="text-[#00d4ff] font-bold">In Stock: 35 units</span>
                    </div>
                  </div>
                </div>
              )}

              {project.id === 'billing-engine' && (
                <div className="p-4 rounded-lg bg-black border border-neutral-800 space-y-3">
                  <div className="text-xs text-neutral-400">Precision Tax & Ledger Simulation:</div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] text-neutral-400">Subtotal Amount (PKR):</label>
                      <input
                        type="number"
                        value={invoiceAmount}
                        onChange={(e) => setInvoiceAmount(Number(e.target.value))}
                        className="w-full px-2.5 py-1.5 bg-neutral-950 border border-neutral-700 rounded text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-neutral-400">Sales Tax / GST (%):</label>
                      <input
                        type="number"
                        value={taxRate}
                        onChange={(e) => setTaxRate(Number(e.target.value))}
                        className="w-full px-2.5 py-1.5 bg-neutral-950 border border-neutral-700 rounded text-xs text-white"
                      />
                    </div>
                  </div>
                  <div className="p-3 bg-neutral-900/80 rounded border border-neutral-800 space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Tax Calculated:</span>
                      <span className="text-[#00d4ff] font-bold">PKR {((invoiceAmount * taxRate) / 100).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between font-bold text-sm text-[#00ff9c] pt-1 border-t border-neutral-800">
                      <span>Total Invoice Payable:</span>
                      <span>PKR {(invoiceAmount + (invoiceAmount * taxRate) / 100).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              )}

              {project.id === 'crm-erp-suite' && (
                <div className="p-4 rounded-lg bg-black border border-neutral-800 space-y-3">
                  <div className="text-xs text-neutral-400">AbyteSol Operational Pipeline Stages:</div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                    <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800">
                      <div className="text-neutral-400 text-[10px]">INBOUND LEADS</div>
                      <div className="text-lg font-bold text-[#00d4ff] mt-1">18</div>
                    </div>
                    <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800">
                      <div className="text-neutral-400 text-[10px]">IN NEGOTIATION</div>
                      <div className="text-lg font-bold text-amber-400 mt-1">7</div>
                    </div>
                    <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800">
                      <div className="text-neutral-400 text-[10px]">DEPLOYED CONTRACTS</div>
                      <div className="text-lg font-bold text-[#00ff9c] mt-1">14</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded bg-black/80 border border-neutral-800">
                <h4 className="text-xs font-bold text-[#00d4ff] uppercase tracking-wider mb-2">System Architecture</h4>
                <p className="text-neutral-300 text-xs leading-relaxed">{project.architecture}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded bg-black border border-neutral-800">
                  <span className="text-[10px] text-neutral-500 block">THROUGHPUT</span>
                  <span className="text-sm font-bold text-[#00ff9c] mt-1 block">{project.metrics.throughput}</span>
                </div>
                <div className="p-3 rounded bg-black border border-neutral-800">
                  <span className="text-[10px] text-neutral-500 block">LATENCY</span>
                  <span className="text-sm font-bold text-[#00d4ff] mt-1 block">{project.metrics.latency}</span>
                </div>
                <div className="p-3 rounded bg-black border border-neutral-800">
                  <span className="text-[10px] text-neutral-500 block">INTEGRITY</span>
                  <span className="text-sm font-bold text-[#00ff9c] mt-1 block">{project.metrics.integrity}</span>
                </div>
                <div className="p-3 rounded bg-black border border-neutral-800">
                  <span className="text-[10px] text-neutral-500 block">CLEARANCE</span>
                  <span className="text-sm font-bold text-amber-400 mt-1 block">LEVEL {project.clearanceLevel}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">Technology Stack Components</h4>
                <div className="flex flex-wrap gap-2">
                  {project.metrics.stack.map((item, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-black border border-neutral-800 text-neutral-300 text-xs font-mono">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-[#020503] border-t border-[#00ff9c]/20 px-5 py-3 flex items-center justify-between">
          <span className="text-xs font-mono text-neutral-500">
            REPOSITORY: <span className="text-[#00ff9c]">MuhamadArhum</span>
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded font-mono text-xs border border-neutral-700 text-neutral-300 hover:text-white transition-colors"
            >
              DISMISS
            </button>
            <a
              href="https://github.com/MuhamadArhum?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded font-mono text-xs font-bold bg-[#00ff9c]/20 border border-[#00ff9c] text-[#00ff9c] hover:bg-[#00ff9c]/30 transition-all shadow-[0_0_12px_rgba(0,255,156,0.3)]"
            >
              <span>EXPLORE GITHUB REPO</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
