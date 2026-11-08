import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download, Send, GraduationCap, Sparkles, BrainCircuit, MapPin, ChevronDown } from 'lucide-react';
import { Github, Linkedin, WhatsApp } from './SocialIcons';
import { Magnetic, CountUp } from './ui';
import { personalInfo, contactDetails, projectsList, leadershipAndActivities } from '../data/portfolioData';

const roles = ['ML Engineer', 'Software Developer', 'NLP Explorer', 'Research Enthusiast', 'Full-Stack Builder'];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = roles[i % roles.length];
    let t;
    if (!deleting && text === word) t = setTimeout(() => setDeleting(true), 1600);
    else if (deleting && text === '') {
      setDeleting(false);
      setI((n) => n + 1);
    } else
      t = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? 40 : 85
      );
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="text-gradient">
      {text}
      <span className="ml-0.5 inline-block w-[3px] translate-y-[2px] animate-blink bg-cyan-300 align-baseline" style={{ height: '0.9em' }} />
    </span>
  );
}

function TiltPhoto() {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.02)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };
  return (
    <div onMouseMove={onMove} onMouseLeave={onLeave} className="relative">
      <div ref={ref} className="relative transition-transform duration-500 ease-out will-change-transform">
        <div className="ring-animated rounded-[2.2rem] p-[3px]">
          <div className="overflow-hidden rounded-[2rem] bg-ink-900">
            <img
              src={personalInfo.avatarUrl}
              alt="Mahbubur Rahman (Joy)"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ onOpenEmailModal }) {
  const github = contactDetails.socials.find((s) => s.name === 'GitHub')?.url;
  const linkedin = contactDetails.socials.find((s) => s.name === 'LinkedIn')?.url;
  const stats = [
    { label: 'CGPA at CUET', value: 3.58, decimals: 2, suffix: '' },
    { label: 'Expected graduation', value: Number(personalInfo.university.expectedGrad), decimals: 0, plain: true },
    { label: 'Projects shipped', value: projectsList.length, decimals: 0, suffix: '+' },
    { label: 'Clubs & societies', value: leadershipAndActivities.length, decimals: 0, suffix: '' },
  ];

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 sm:pt-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-10">
          {/* Text */}
          <div>
            <div className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] py-1.5 pl-2 pr-4 text-xs font-medium text-emerald-200">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Open to collaborations & research discussions
            </div>

            <h1 className="animate-fade-up mt-7 font-display text-[2.5rem] font-bold leading-[1.02] tracking-tight text-white xs:text-6xl sm:text-7xl lg:text-[4.6rem]" style={{ animationDelay: '80ms' }}>
              Hi, I'm Mahbubur
              <br />
              Rahman <span className="text-zinc-500">(Joy)</span>
              <span className="inline-block origin-[70%_70%] animate-[wave_2.5s_ease-in-out_infinite] pl-2">👋</span>
            </h1>

            <p className="animate-fade-up mt-6 min-h-[2.2em] font-display text-xl font-medium xs:text-2xl text-zinc-300 sm:text-3xl" style={{ animationDelay: '160ms' }}>
              <span className="text-zinc-500">I'm a </span>
              <Typewriter />
            </p>

            <p className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg" style={{ animationDelay: '240ms' }}>
              {personalInfo.shortBio}
            </p>

            <div className="animate-fade-up mt-6 flex flex-wrap gap-2" style={{ animationDelay: '300ms' }}>
              <span className="chip"><GraduationCap className="h-3.5 w-3.5 text-violet-300" /> CSE @ CUET · Class of {personalInfo.university.expectedGrad}</span>
              <span className="chip"><BrainCircuit className="h-3.5 w-3.5 text-cyan-300" /> ML Intern @ Flyrank AI</span>
              <span className="chip"><MapPin className="h-3.5 w-3.5 text-pink-300" /> {personalInfo.currentLocation}</span>
            </div>

            {/* CTAs */}
            <div className="animate-fade-up mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center" style={{ animationDelay: '380ms' }}>
              <Magnetic className="col-span-2 sm:col-span-1">
                <a href="#projects" className="btn-primary group w-full sm:w-auto">
                  <span className="btn-shine" />
                  View my work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Magnetic>
              <Magnetic className="w-full sm:w-auto">
                <button onClick={onOpenEmailModal} className="btn-ghost group w-full px-4 sm:w-auto sm:px-6">
                  <Send className="h-4 w-4 text-violet-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  Let's talk
                </button>
              </Magnetic>
              <Magnetic className="w-full sm:w-auto">
                <a href={personalInfo.cvUrl} download="Mahbubur_Rahman_CV.pdf" className="btn-ghost group w-full px-4 sm:w-auto sm:px-6">
                  <Download className="h-4 w-4 text-cyan-300 transition-transform group-hover:translate-y-0.5" />
                  Download CV
                </a>
              </Magnetic>
            </div>

            <div className="animate-fade-up mt-8 flex items-center gap-3" style={{ animationDelay: '440ms' }}>
              <a href={github} target="_blank" rel="noreferrer" className="btn-icon" aria-label="GitHub"><Github className="h-4 w-4" /></a>
              <a href={linkedin} target="_blank" rel="noreferrer" className="btn-icon" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
              <a href={contactDetails.whatsappUrl} target="_blank" rel="noreferrer" className="btn-icon hover:!border-emerald-400/50 hover:!bg-emerald-500/15" aria-label="WhatsApp"><WhatsApp className="h-4 w-4" /></a>
              <span className="ml-2 hidden h-px w-16 bg-gradient-to-r from-white/20 to-transparent sm:block" />
              <span className="hidden text-xs text-zinc-500 sm:block">{personalInfo.motto}</span>
            </div>
          </div>

          {/* Photo */}
          <div className="animate-fade-up relative mx-auto w-full max-w-[300px] sm:max-w-[340px]" style={{ animationDelay: '200ms' }}>
            <div className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-tr from-violet-600/40 via-indigo-500/20 to-cyan-400/30 blur-3xl" />
            <TiltPhoto />

            <div className="card absolute -left-6 top-10 hidden items-center gap-2.5 rounded-2xl px-3.5 py-2.5 animate-float sm:flex">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-500/20 text-violet-200"><GraduationCap className="h-5 w-5" /></span>
              <span className="leading-tight">
                <span className="block text-[11px] text-zinc-400">Graduating</span>
                <span className="block font-display text-sm font-semibold text-white">Class of {personalInfo.university.expectedGrad}</span>
              </span>
            </div>
            <div className="card absolute -right-5 bottom-14 hidden items-center gap-2.5 rounded-2xl px-3.5 py-2.5 animate-float-delayed sm:flex">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-500/20 text-cyan-200"><Sparkles className="h-5 w-5" /></span>
              <span className="leading-tight">
                <span className="block text-[11px] text-zinc-400">Currently</span>
                <span className="block font-display text-sm font-semibold text-white">ML @ Flyrank AI</span>
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="animate-fade-up mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.06] sm:grid-cols-4" style={{ animationDelay: '520ms' }}>
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-950/80 px-4 py-5 sm:px-6 sm:py-6 backdrop-blur-xl transition-colors hover:bg-ink-900/80">
              <div className="font-display text-2xl font-bold text-white xs:text-3xl sm:text-4xl">
                {s.plain ? <span className="text-gradient">{s.value}</span> : <CountUp to={s.value} decimals={s.decimals} suffix={s.suffix} />}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500 xs:text-xs">{s.label}</div>
            </div>
          ))}
        </div>

        <a href="#about" className="mx-auto mt-12 hidden w-fit flex-col items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-zinc-500 transition-colors hover:text-white md:flex">
          Scroll
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
