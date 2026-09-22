import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Sparkles, Mail } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo, contactDetails } from '../data/portfolioData';

export default function Navbar({ onOpenEmailModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Research', href: '#research' },
    { label: 'Projects', href: '#projects' },
    { label: 'Activities', href: '#activities' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section tracking
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-6 lg:px-8 py-2.5 sm:py-3 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 rounded-2xl ${
          scrolled
            ? 'glass-nav shadow-2xl shadow-cyan-950/40 border border-white/10 px-3 sm:px-6 py-2 sm:py-2.5'
            : 'bg-slate-950/50 backdrop-blur-md border border-white/5 px-3 sm:px-6 py-2.5 sm:py-3'
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-2 sm:gap-2.5 text-slate-100 hover:text-white transition-colors shrink-0"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-heading font-extrabold text-xs sm:text-sm tracking-wider text-cyan-400 group-hover:text-cyan-300">
                MR
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 sm:gap-1.5 font-heading font-bold text-sm sm:text-base lg:text-lg tracking-tight">
                <span className="truncate max-w-[105px] xs:max-w-[130px] sm:max-w-none">Mahbubur</span>
                <span className="text-gradient-cyan hidden xs:inline">Rahman</span>
                <span className="text-[10px] sm:text-xs px-1 sm:px-1.5 py-0.2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono">
                  Joy
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 hidden sm:block tracking-wider uppercase">
                CSE @ CUET • ML Intern
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1 bg-white/[0.03] p-1 rounded-xl border border-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 2xl:px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Socials (Desktop) */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Top Email Me Trigger Button */}
            <button
              onClick={onOpenEmailModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 text-purple-300 hover:text-purple-200 font-mono text-xs border border-purple-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              title="Send direct email"
            >
              <Mail className="w-3.5 h-3.5 text-purple-400" />
              <span>Email Me</span>
            </button>

            {/* GitHub */}
            <a
              href="https://github.com/joyboy80"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-cyan-400 bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 transition-all"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mahbubur-rahman-8a8489321/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-cyan-400 bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 transition-all"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Download CV CTA */}
            <a
              href={personalInfo.cvUrl}
              download="Mahbubur_Rahman_CV.pdf"
              className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold text-xs transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5 text-slate-950 transition-transform group-hover:-translate-y-0.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Right Bar: Quick Email + Resume + Menu Toggle */}
          <div className="flex xl:hidden items-center gap-1.5 sm:gap-2">
            {/* Quick Top Email Button for Mobile */}
            <button
              onClick={onOpenEmailModal}
              className="p-2 rounded-xl bg-purple-500/15 text-purple-300 border border-purple-500/30 hover:bg-purple-500/25 transition-all flex items-center justify-center"
              title="Send email"
              aria-label="Send direct email"
            >
              <Mail className="w-4 h-4 text-purple-400" />
            </button>

            {/* Quick CV Button for Mobile */}
            <a
              href={personalInfo.cvUrl}
              download="Mahbubur_Rahman_CV.pdf"
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs"
              title="Download CV"
            >
              <Download className="w-3 h-3 text-slate-950" />
              <span className="hidden xs:inline">CV</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-cyan-400" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-2 max-w-7xl mx-auto glass-nav rounded-2xl border border-white/10 p-4 sm:p-5 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-medium text-center transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/25 to-purple-500/25 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-center sm:justify-start">
              <a
                href="https://github.com/joyboy80"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-cyan-400 border border-white/5"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/mahbubur-rahman-8a8489321/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-cyan-400 border border-white/5"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEmailModal();
                }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-purple-500/15 text-purple-300 border border-purple-500/30 text-xs font-mono"
              >
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span>Send Email</span>
              </button>
            </div>

            <a
              href={personalInfo.cvUrl}
              download="Mahbubur_Rahman_CV.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-lg"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Full CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
