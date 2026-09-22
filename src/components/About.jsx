import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Building2, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Code, 
  Flame 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <span className="text-cyan-400 font-bold">01 //</span>
            <span>BACKGROUND & PHILOSOPHY</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            About <span className="text-gradient-cyan">Mahbubur Rahman (Joy)</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-light">
            An ambitious undergraduate combining rigorous software engineering foundations with applied machine learning research and active system building.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Narrative Paragraphs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4 sm:space-y-6">
            <div className="space-y-4 sm:space-y-5 text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
              <div className="p-4 sm:p-6 rounded-2xl glass-card border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <p>
                  I am a Computer Science & Engineering undergraduate at{' '}
                  <strong className="text-white font-semibold">Chittagong University of Engineering & Technology (CUET)</strong>, 
                  currently in <span className="text-cyan-300 font-mono">Level 3, Term 2</span> with a cumulative CGPA of{' '}
                  <span className="text-emerald-300 font-mono font-bold">3.58 / 4.00</span>.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-card border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <p>
                  Rather than viewing development and machine learning as separate domains, I treat them as unified disciplines. I enjoy engineering full-stack platforms from the ground up—architecting intuitive frontends in ReactJS and robust backends in Node.js or Spring Boot—while exploring applied <strong className="text-purple-300 font-medium">Machine Learning</strong>, <strong className="text-purple-300 font-medium">Deep Learning</strong>, and <strong className="text-purple-300 font-medium">Natural Language Processing</strong>.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-card border border-white/10 hover:border-sky-500/30 transition-all duration-300">
                <p>
                  As an ML Engineer Intern at <strong className="text-cyan-300 font-medium">Flyrank AI</strong>, I gain firsthand industry experience optimizing ML evaluation pipelines and integrating NLP algorithms. When not writing code, I actively dedicate my energy to co-curricular leadership, visual arts with the CUET Photographic Society, and community planning with Bashundhara Shuvosangho.
                </p>
              </div>
            </div>

            {/* Quick Hometown & Identity strip */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Hometown: <strong className="text-white">Subarnachar, Noakhali</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-purple-400" />
                <span>Campus: <strong className="text-white">CUET, Chattogram</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Pillar Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Pillar 1: Academic Rigor */}
            <div className="p-5 rounded-2xl glass-card border border-white/10 hover:border-cyan-400/40 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-base">Academic Excellence</h3>
                  <p className="text-xs font-mono text-cyan-300 mt-0.5">CUET (3.58) • NDC (5.00) • NZS (5.00)</p>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Consistent top academic trajectory through Noakhali Zilla School, Notre Dame College, and CUET Computer Science & Engineering.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2: Industry Immersion */}
            <div className="p-5 rounded-2xl glass-card border border-white/10 hover:border-purple-400/40 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-base">Applied ML & Data Systems</h3>
                  <p className="text-xs font-mono text-purple-300 mt-0.5">ML Engineering Intern @ Flyrank AI</p>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Practical work on machine learning models, NLP algorithm integration, and workflow optimization on modern stacks.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3: Practical Systems Building */}
            <div className="p-5 rounded-2xl glass-card border border-white/10 hover:border-emerald-400/40 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-base">Real-World Software</h3>
                  <p className="text-xs font-mono text-emerald-300 mt-0.5">Transit • Biometrics • Campus Solutions</p>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Creator of Safar (bus tracker), CUET Lost & Found Box, Biometric Attendance, and EduSync CLI utility.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 4: Leadership & Community */}
            <div className="p-5 rounded-2xl glass-card border border-white/10 hover:border-pink-400/40 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 group-hover:scale-110 transition-transform">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-base">Campus Leadership</h3>
                  <p className="text-xs font-mono text-pink-300 mt-0.5">CUETPS • Shuvosangho • IEEE CS</p>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Serving as Assistant Publication Secretary and Work & Planning Secretary across major student organizations.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
