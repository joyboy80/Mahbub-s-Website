import React from 'react';
import { ArrowUp, Mail, Terminal, Send } from 'lucide-react';
import { Github, Linkedin, Facebook, Instagram } from './SocialIcons';
import { personalInfo, contactDetails } from '../data/portfolioData';

const socialIcons = {
  Github,
  Linkedin,
  Facebook,
  Instagram
};

export default function Footer({ onOpenEmailModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80 backdrop-blur-xl pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-heading font-extrabold text-xs text-cyan-400">
                  MR
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-white">
                Mahbubur Rahman <span className="text-cyan-400 font-sans text-sm">(Joy)</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed font-light">
              Undergraduate in Computer Science & Engineering at Chittagong University of Engineering & Technology (CUET). Building software systems, learning applied machine learning, and exploring NLP research.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
              <Terminal className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Build → Learn → Research → Experiment → Grow</span>
            </div>
          </div>

          {/* Quick Section Links (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-400">
              <a href="#hero" className="hover:text-cyan-300 transition-colors">Home</a>
              <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
              <a href="#education" className="hover:text-cyan-300 transition-colors">Education</a>
              <a href="#experience" className="hover:text-cyan-300 transition-colors">Experience</a>
              <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
              <a href="#research" className="hover:text-cyan-300 transition-colors">Research</a>
              <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
              <a href="#activities" className="hover:text-cyan-300 transition-colors">Activities</a>
              <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
              <button 
                onClick={onOpenEmailModal} 
                className="text-left text-purple-400 hover:text-purple-300 transition-colors"
              >
                Send Email
              </button>
            </div>
          </div>

          {/* Back to top & Connect (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end gap-6">
            <div className="space-y-3 w-full md:w-auto">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 md:text-right">
                Connect & Channels
              </h4>
              <div className="flex flex-wrap items-center gap-2">
                {contactDetails.socials.map((soc, idx) => {
                  const Icon = socialIcons[soc.icon] || Github;
                  return (
                    <a
                      key={idx}
                      href={soc.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-white/[0.04] hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-white/5 transition-all"
                      title={soc.name}
                      aria-label={soc.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
                <button
                  onClick={onOpenEmailModal}
                  className="p-2 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 text-purple-400 hover:text-purple-300 border border-purple-500/30 transition-all"
                  title="Direct Email"
                  aria-label="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenEmailModal}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono hover:bg-purple-500/30 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span>Quick Email</span>
              </button>

              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-cyan-300 border border-white/10 text-xs font-mono transition-all group"
              >
                <span>Top</span>
                <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} Mahbubur Rahman (Joy). All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Engineered with React, Vite & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
