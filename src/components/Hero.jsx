import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Terminal, 
  PhoneCall,
  Send
} from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import Interactive3DTilt from './Interactive3DTilt';
import { personalInfo, contactDetails } from '../data/portfolioData';

export default function Hero({ onOpenEmailModal }) {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[11px] sm:text-xs font-mono mb-4 sm:mb-6 backdrop-blur-md animate-pulse-glow max-w-full">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 animate-ping" />
              <span className="truncate">{personalInfo.status}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1 mb-3 sm:mb-4 w-full">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-400">
                  Welcome to the portfolio of
                </span>
              </div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] break-words">
                Mahbubur <span className="text-gradient-cyan">Rahman</span>
                <span className="inline-block ml-2 sm:ml-3 text-2xl sm:text-4xl lg:text-5xl text-purple-400 font-bold font-sans">
                  (Joy)
                </span>
              </h1>
            </div>

            {/* Professional Identity Subtitle */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-5 sm:mb-6">
              <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-[11px] sm:text-xs font-mono text-cyan-300">
                CS Undergraduate @ CUET
              </span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-[11px] sm:text-xs font-mono text-purple-300">
                Software Developer
              </span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-[11px] sm:text-xs font-mono text-emerald-300">
                ML Engineer
              </span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-[11px] sm:text-xs font-mono text-pink-300">
                Research Enthusiast
              </span>
            </div>

            {/* Authentic Pitch & Narrative */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mb-4">
              {personalInfo.shortBio}
            </p>

            {/* 2030 Core Philosophy Motto Banner */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[11px] sm:text-xs font-mono mb-6 sm:mb-8">
              <Terminal className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span className="truncate">{personalInfo.motto}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-6 sm:mb-8">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-slate-950 font-bold text-xs sm:text-sm shadow-[0_0_30px_-5px_rgba(56,189,248,0.5)] hover:shadow-[0_0_40px_rgba(56,189,248,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              {/* Direct Email Action Button */}
              <button
                type="button"
                onClick={onOpenEmailModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 hover:from-purple-500/30 hover:to-fuchsia-500/30 text-purple-200 font-semibold text-xs sm:text-sm border border-purple-500/40 hover:border-purple-400 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="w-4 h-4 text-purple-400" />
                <span>Send Me an Email</span>
              </button>

              <a
                href={personalInfo.cvUrl}
                download="Mahbubur_Rahman_CV.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-white/15 hover:border-cyan-400/50 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-3 border-t border-white/10 w-full max-w-xl">
              <span className="text-xs font-mono text-slate-400 mr-1 sm:mr-2">Quick Channels:</span>
              
              <button
                onClick={onOpenEmailModal}
                className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] hover:bg-purple-500/20 text-slate-400 hover:text-purple-300 border border-white/5 hover:border-purple-500/40 transition-all flex items-center gap-1.5 text-xs font-mono"
                title="Send Email Directly"
                aria-label="Send direct email"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="hidden xs:inline">Email</span>
              </button>

              <a
                href="https://wa.me/8801616273501"
                target="_blank"
                rel="noreferrer"
                className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] hover:bg-emerald-500/20 text-slate-400 hover:text-emerald-300 border border-white/5 hover:border-emerald-500/40 transition-all flex items-center gap-1.5 text-xs font-mono"
                title="WhatsApp Direct"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span className="hidden xs:inline">WhatsApp</span>
              </a>

              <a
                href="https://github.com/joyboy80"
                target="_blank"
                rel="noreferrer"
                className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-white/5 hover:border-cyan-500/40 transition-all"
                title="GitHub @joyboy80"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/mahbubur-rahman-8a8489321/"
                target="_blank"
                rel="noreferrer"
                className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] hover:bg-blue-500/20 text-slate-400 hover:text-blue-300 border border-white/5 hover:border-blue-500/40 transition-all"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Holographic 3D Photo Frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center relative px-2 sm:px-0">
            
            {/* Ambient Multi-Layer Glow */}
            <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-cyan-500/25 via-purple-600/25 to-pink-500/20 blur-3xl -z-10 animate-pulse-glow" />

            {/* 3D Interactive Tilt Container */}
            <Interactive3DTilt maxTilt={14} className="max-w-[210px] sm:max-w-[250px] lg:max-w-[260px] w-full group">
              {/* Outer Neon Cyber Border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 opacity-60 group-hover:opacity-100 blur-md transition duration-500" />
              
              {/* Main Card Shell */}
              <div className="relative rounded-2xl glass-card overflow-hidden border border-white/20 p-2 sm:p-2.5 shadow-2xl backdrop-blur-2xl">
                
                {/* Clean Photo Element */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src={personalInfo.avatarUrl}
                    alt="Mahbubur Rahman (Joy)"
                    className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-[1.01] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

              </div>
            </Interactive3DTilt>

          </div>

        </div>
      </div>
    </section>
  );
}
