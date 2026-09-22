import React from 'react';
import { 
  Brain, 
  Sparkles, 
  Workflow, 
  Network, 
  Quote, 
  Microscope, 
  Cpu, 
  Terminal,
  RotateCcw
} from 'lucide-react';
import { researchInterests } from '../data/portfolioData';
import ThreeDNeuralGlobe from './ThreeDNeuralGlobe';
import Interactive3DTilt from './Interactive3DTilt';

const iconMap = {
  Brain,
  Sparkles,
  Workflow,
  Network
};

export default function Research() {
  return (
    <section id="research" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-3">
            <span className="text-purple-400 font-bold">05 //</span>
            <span>RESEARCH INQUIRY</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Research <span className="text-gradient-purple">Interests & Direction</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-light">
            Investigating applied machine learning architectures, natural language processing pipelines, and data-driven systems.
          </p>
        </div>

        {/* Featured Research Philosophy Statement with 3D Neural Globe */}
        <Interactive3DTilt maxTilt={6} className="mb-14 rounded-3xl">
          <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-purple-500/40 via-cyan-500/40 to-blue-500/40 shadow-2xl">
            <div className="rounded-[23px] bg-slate-950/90 backdrop-blur-xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
              
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left side: Research Statement (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400 shrink-0">
                      <Quote className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-purple-300">
                      Research Vision & Core Hypothesis
                    </span>
                  </div>

                  <blockquote className="text-base sm:text-xl lg:text-2xl text-slate-100 font-normal leading-relaxed font-heading">
                    "{researchInterests.quote}"
                  </blockquote>

                  <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono text-cyan-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Focus: Applied NLP • Machine Learning Systems • Practical Intelligence</span>
                  </div>
                </div>

                {/* Right side: Interactive 3D Neural Globe Animation (5 cols) */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-900/60 border border-white/5 relative">
                  <div className="absolute top-3 right-3 text-[10px] font-mono text-cyan-400/80 flex items-center gap-1">
                    <RotateCcw className="w-3 h-3 animate-spin-slow" />
                    <span>3D Neural Sphere // Interactive</span>
                  </div>

                  {/* 3D Canvas Element */}
                  <ThreeDNeuralGlobe size={240} className="my-2" />

                  <p className="text-[11px] font-mono text-slate-400 text-center mt-1">
                    Drag or hover to rotate in 3D perspective
                  </p>
                </div>

              </div>

            </div>
          </div>
        </Interactive3DTilt>

        {/* Research Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchInterests.focusAreas.map((area, idx) => {
            const IconComponent = iconMap[area.icon] || Brain;
            return (
              <Interactive3DTilt key={idx} maxTilt={7} className="rounded-3xl">
                <div className="h-full p-7 rounded-3xl glass-card border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 group-hover:text-purple-300 transition-all">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300">
                        {area.tag}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-white group-hover:text-purple-300 transition-colors">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-slate-300 text-sm leading-relaxed font-light">
                      {area.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-400 group-hover:text-purple-300 transition-colors">
                    <Microscope className="w-3.5 h-3.5" />
                    <span>Exploratory & Experimental Area</span>
                  </div>
                </div>
              </Interactive3DTilt>
            );
          })}
        </div>

      </div>
    </section>
  );
}
