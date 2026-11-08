import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { Github, Linkedin, Facebook, Instagram } from './SocialIcons';
import { Magnetic } from './ui';
import { contactDetails, personalInfo } from '../data/portfolioData';

const socialIcons = { Github, Linkedin, Facebook, Instagram };

export default function Footer({ onOpenEmailModal }) {
  return (
    <footer className="relative z-10 mt-10 overflow-hidden border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-5 pt-20 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-sm text-zinc-500">Got an idea?</p>
            <h3 className="mt-2 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Let's make it <span className="text-gradient">happen.</span>
            </h3>
          </div>
          <Magnetic>
            <button onClick={onOpenEmailModal} className="btn-primary px-8 py-4 text-base">
              <span className="btn-shine" />
              <Mail className="h-5 w-5" /> Get in touch
            </button>
          </Magnetic>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/[0.06] py-8 sm:flex-row">
          <p className="flex flex-wrap items-center justify-center gap-1.5 text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} {personalInfo.fullName} ({personalInfo.nickname}) · Built with
            <Heart className="h-3.5 w-3.5 fill-pink-400 text-pink-400" /> in Chattogram
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {contactDetails.socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="btn-icon h-10 w-10" aria-label={s.name}>
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
            <a href="#hero" className="btn-icon ml-2 h-10 w-10 bg-white/10" aria-label="Back to top">
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none select-none text-center font-display text-[22vw] font-bold leading-[0.75] tracking-tighter text-white/[0.03]">
        JOY
      </div>
    </footer>
  );
}
