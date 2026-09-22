import React from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Bus, 
  Box, 
  Fingerprint, 
  Terminal, 
  Star, 
  ArrowUpRight 
} from 'lucide-react';
import { Github } from './SocialIcons';
import Interactive3DTilt from './Interactive3DTilt';
import { projectsList } from '../data/portfolioData';

const projectIcons = {
  safar: Bus,
  'cuet-lost-found': Box,
  'biometrics-attendance': Fingerprint,
  edusync: Terminal
};

export default function Projects() {
  const flagship = projectsList.find(p => p.isFlagship);
  const otherProjects = projectsList.filter(p => !p.isFlagship);

  return (
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
              <span className="text-cyan-400 font-bold">06 //</span>
              <span>ENGINEERED SYSTEMS</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Featured <span className="text-gradient-cyan">Projects</span>
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-light">
              Real-world systems spanning intelligent transit management, campus utilities, biometric tracking, and Unix automation.
            </p>
          </div>

          <a
            href="https://github.com/joyboy80"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-cyan-400 text-xs font-mono border border-white/10 transition-all shrink-0"
          >
            <Github className="w-4 h-4" />
            <span>Explore All on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Flagship Project Spotlight: Safar with 3D Tilt */}
        {flagship && (
          <Interactive3DTilt maxTilt={8} className="mb-14 rounded-3xl">
            <div className="relative group rounded-3xl p-[1px] bg-gradient-to-r from-sky-500/50 via-cyan-400/40 to-indigo-500/50 hover:from-sky-400 hover:via-cyan-300 hover:to-indigo-400 transition-all duration-500 shadow-2xl">
              <div className="rounded-[23px] bg-slate-950/95 backdrop-blur-2xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
              
              {/* Ambient Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Top Banner Tag */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-semibold">
                  <Star className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
                  <span>FLAGSHIP SOFTWARE PROJECT</span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={flagship.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Flagship Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left side details */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Bus className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                        {flagship.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-cyan-300">
                        {flagship.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                    {flagship.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2">
                    {flagship.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap items-center gap-2 pt-4">
                    <span className="text-xs font-mono text-slate-400 mr-2">Stack:</span>
                    {flagship.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right side: Futuristic architecture preview card */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/80 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-slate-400">
                    <span>ARCHITECTURE & FEATURES</span>
                    <span className="text-cyan-400">JAATRA // SAFAR</span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                      <span className="text-slate-400">Mapping Engine</span>
                      <span className="text-emerald-400">Leaflet.js + OSM</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                      <span className="text-slate-400">Client Optimization</span>
                      <span className="text-cyan-400">Fast React State</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                      <span className="text-slate-400">Backend API</span>
                      <span className="text-purple-400">Node.js / Express</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                      <span className="text-slate-400">Core Utility</span>
                      <span className="text-sky-300">Transit Coordination</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={flagship.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/15 text-slate-200 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30 text-xs font-mono transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Inspect Codebase (GitHub)</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </Interactive3DTilt>
      )}

        {/* Other Projects Grid (3 projects) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProjects.map((project) => {
            const IconComponent = projectIcons[project.id] || Box;
            return (
              <div
                key={project.id}
                className="group rounded-3xl glass-card border border-white/10 hover:border-cyan-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/40 hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-white/[0.04] hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-white/5 transition-all"
                      title="View GitHub Repository"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-1 mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-4">
                    {project.description}
                  </p>

                  {/* Highlights from CV */}
                  <div className="space-y-2 py-3 border-t border-b border-white/5">
                    {project.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech Stack & GitHub Button */}
                <div className="pt-5 mt-4 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-900 hover:bg-cyan-500/20 text-slate-200 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30 text-xs font-mono transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Repository</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
