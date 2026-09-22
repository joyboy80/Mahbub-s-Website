import React from 'react';
import { Mail, Sparkles } from 'lucide-react';

export default function FloatingEmailButton({ onOpenEmailModal }) {
  return (
    <aside 
      aria-label="Quick Email Launcher"
      className="fixed bottom-6 right-6 z-40 flex items-center group"
    >
      <button
        onClick={onOpenEmailModal}
        className="relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 text-slate-950 font-heading font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(56,189,248,0.5)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Send direct email to Mahbubur Rahman"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-950" />
        </span>
        <Mail className="w-4 h-4 text-slate-950" />
        <span className="hidden xs:inline sm:inline">Email Me</span>
      </button>
    </aside>
  );
}
