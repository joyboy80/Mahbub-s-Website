import React, { useEffect, useState } from 'react';
import { Menu, X, Download, Mail, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo, contactDetails } from '../data/portfolioData';

const navLinks = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Skills', id: 'skills' },
  { label: 'Research', id: 'research' },
  { label: 'Projects', id: 'projects' },
  { label: 'Activities', id: 'activities' },
  { label: 'Contact', id: 'contact' },
];

const github = contactDetails.socials.find((s) => s.name === 'GitHub')?.url;
const linkedin = contactDetails.socials.find((s) => s.name === 'LinkedIn')?.url;

export default function Navbar({ onOpenEmailModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (y / h) * 100 : 0);
      const pos = y + 160;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id);
        if (el && el.offsetTop <= pos) {
          setActive(navLinks[i].id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      {/* Scroll progress */}
      <div className="fixed inset-x-0 top-0 z-[60] h-[2px]">
        <div
          className="h-full bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-300 shadow-[0_0_12px_rgba(139,92,246,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-500 sm:px-4 ${
            scrolled
              ? 'border-white/10 bg-ink-900/70 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-2xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-2.5 pl-1">
            <span className="ring-animated grid h-10 w-10 place-items-center rounded-full">
              <span className="grid h-full w-full place-items-center rounded-full bg-ink-950 font-display text-sm font-bold tracking-tight text-white">
                MR
              </span>
            </span>
            <span className="hidden flex-col whitespace-nowrap leading-tight sm:flex xl:hidden 2xl:flex">
              <span className="font-display text-sm font-semibold text-white">Mahbubur Rahman</span>
              <span className="text-[11px] text-zinc-500">CSE @ CUET · Class of {personalInfo.university.expectedGrad}</span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden items-center gap-0.5 rounded-full border border-white/[0.06] bg-white/[0.03] p-1 xl:flex">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`relative rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-300 ${
                  active === l.id ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {active === l.id && (
                  <span className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-violet-500/30 to-cyan-400/20 ring-1 ring-inset ring-white/10 animate-fade-in" />
                )}
                <span className="relative">{l.label}</span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button onClick={onOpenEmailModal} className="btn-icon h-10 w-10 hidden sm:inline-flex" aria-label="Send email" title="Email me">
              <Mail className="h-4 w-4" />
            </button>
            <a href={github} target="_blank" rel="noreferrer" className="btn-icon h-10 w-10 hidden lg:inline-flex" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="btn-icon h-10 w-10 hidden lg:inline-flex" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={personalInfo.cvUrl} download="Mahbubur_Rahman_CV.pdf" className="btn-primary px-4 py-2.5 text-[13px]">
              <span className="btn-shine" />
              <Download className="h-4 w-4" />
              <span className="hidden xs:inline">Resume</span>
            </a>
            <button
              onClick={() => setOpen(true)}
              className="btn-icon h-10 w-10 xl:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-[70] xl:hidden transition-all duration-500 ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-ink-950/90 backdrop-blur-2xl" onClick={() => setOpen(false)} />
        <div className="relative flex h-full flex-col px-6 pb-8 pt-6">
          <div className="flex items-center justify-between">
            <span className="font-display text-lg font-semibold">Menu</span>
            <button onClick={() => setOpen(false)} className="btn-icon" aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-10 flex flex-1 flex-col gap-1">
            {navLinks.map((l, i) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${80 + i * 45}ms` : '0ms' }}
                className={`group flex items-center justify-between border-b border-white/[0.06] py-3.5 font-display text-3xl font-semibold transition-all duration-500 ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                } ${active === l.id ? 'text-gradient' : 'text-zinc-300'}`}
              >
                {l.label}
                <ArrowUpRight className="h-6 w-6 text-zinc-600 transition-all group-hover:rotate-45 group-hover:text-white" />
              </a>
            ))}
          </nav>
          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={() => {
                setOpen(false);
                onOpenEmailModal();
              }}
              className="btn-primary flex-1"
            >
              <span className="btn-shine" />
              <Mail className="h-4 w-4" /> Email me
            </button>
            <a href={github} target="_blank" rel="noreferrer" className="btn-icon" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="btn-icon" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
