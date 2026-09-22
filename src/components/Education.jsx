import React from 'react';
import { GraduationCap, ExternalLink, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <span className="text-cyan-400 font-bold">03 //</span>
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Education & <span className="text-gradient-cyan">Scholastic Record</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-light">
            A solid academic foundation spanning top secondary and higher secondary institutions to undergraduate engineering at CUET.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl glass-card border border-white/10 hover:border-cyan-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/50 hover:-translate-y-1"
            >
              {/* Top Row: Type & Result */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-300">
                    {edu.type}
                  </span>
                  
                  <div className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{edu.result}</span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors">
                  {edu.institution}
                </h3>
                <p className="text-sm font-medium text-slate-300 mt-1">
                  {edu.degree}
                </p>

                {/* Meta details */}
                <div className="mt-4 space-y-1.5 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                  {edu.graduation && (
                    <div className="flex items-center gap-2 text-cyan-300/80">
                      <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                      <span>{edu.graduation}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-6 pt-5 border-t border-white/10 space-y-2">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Official Link */}
              <div className="mt-6 pt-4">
                <a
                  href={edu.website}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-cyan-300 text-xs font-mono border border-white/5 transition-all"
                >
                  <span>Visit Portal ({edu.shortName})</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
