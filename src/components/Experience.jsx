import React from 'react';
import { Briefcase, ExternalLink, CheckCircle2, Cpu, Sparkles, Building, Layers } from 'lucide-react';
import { experienceList } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-3">
            <span className="text-purple-400 font-bold">02 //</span>
            <span>INDUSTRY IMMERSION</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Professional <span className="text-gradient-purple">Experience & Internship</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-light">
            Hands-on machine learning engineering and NLP integration work currently performed in the industry.
          </p>
        </div>

        {/* Experience Showcase Card */}
        <div className="space-y-8">
          {experienceList.map((exp, idx) => (
            <div 
              key={idx}
              className="relative group rounded-3xl p-[1px] bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-blue-500/40 hover:from-cyan-400 hover:via-purple-400 hover:to-blue-400 transition-all duration-500 shadow-2xl"
            >
              <div className="rounded-[23px] bg-slate-950/90 backdrop-blur-xl p-6 sm:p-10 border border-white/10">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
                  
                  {/* Left: Role, Company & Mode */}
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Cpu className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                          {exp.position}
                        </h3>
                        <span className="px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          {exp.period}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2 mt-1.5">
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-cyan-400 hover:text-cyan-300 text-base flex items-center gap-1.5 transition-colors"
                        >
                          <Building className="w-4 h-4 text-cyan-400" />
                          <span>{exp.company}</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                        </a>
                        <span className="text-slate-600">•</span>
                        <span className="text-xs font-mono text-slate-400">
                          {exp.employmentType}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Visit Website Button */}
                  <div>
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-cyan-500/15 text-slate-200 hover:text-cyan-300 text-xs font-mono border border-white/10 hover:border-cyan-500/40 transition-all duration-300"
                    >
                      <span>flyrank.ai</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Verified Core Responsibilities from CV */}
                <div className="pt-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    <span>Verified Scope & Engineering Contributions</span>
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-all duration-200 flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {resp}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Associated Tech Badges */}
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 mr-2">Focus Stack:</span>
                    {exp.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg bg-cyan-500/5 border border-cyan-500/20 text-cyan-300 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
