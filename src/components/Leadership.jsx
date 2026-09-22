import React from 'react';
import { 
  Camera, 
  HeartHandshake, 
  Cpu, 
  Terminal, 
  Calculator, 
  Trophy, 
  ExternalLink, 
  CheckCircle, 
  Users 
} from 'lucide-react';
import { leadershipAndActivities } from '../data/portfolioData';

const orgIcons = {
  'CUET Photographic Society (CUETPS)': Camera,
  'Bashundhara Shuvosangho — CUET Section': HeartHandshake,
  'IEEE Computer Society CUET Student Branch Chapter': Cpu,
  'CUET Computer Club': Terminal,
  'Notre Dame Photography Club (NDPC)': Camera,
  'Notre Dame College Math Club (NDMC)': Calculator,
  'Noakhali Zilla School Sports': Trophy
};

export default function Leadership() {
  return (
    <section id="activities" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-3">
            <span className="text-purple-400 font-bold">07 //</span>
            <span>LEADERSHIP & ENGAGEMENT</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Activities & <span className="text-gradient-purple">Leadership</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-light">
            Active leadership roles across media publications, student welfare, international computing chapters, and athletic competitions.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {leadershipAndActivities.map((act, idx) => {
            const IconComponent = orgIcons[act.organization] || Users;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl glass-card border border-white/10 hover:border-purple-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/40 hover:-translate-y-1"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 group-hover:text-purple-300 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300">
                      {act.category}
                    </span>
                  </div>

                  {/* Role & Org */}
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-purple-300 transition-colors">
                    {act.role}
                  </h3>
                  <p className="text-xs font-mono text-cyan-300 mt-1 mb-3">
                    {act.organization}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {act.description}
                  </p>
                </div>

                {/* Footer Status & External Link */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>{act.status}</span>
                  </div>

                  {act.facebookUrl && (
                    <a
                      href={act.facebookUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
                      title="View Organization Page"
                    >
                      <span>Organization</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
