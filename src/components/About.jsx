import React from 'react';
import { GraduationCap, MapPin, Cpu, Code2, Flame, Building2, Award, CalendarCheck } from 'lucide-react';
import { SectionHeader, Reveal, SpotlightCard } from './ui';
import { personalInfo } from '../data/portfolioData';

const pillars = [
  {
    icon: Cpu,
    title: 'Applied ML & Data Systems',
    sub: 'ML Engineering Intern @ Flyrank AI',
    text: 'Hands-on work with machine learning models, NLP integration and data pipelines on modern stacks.',
    color: 'from-cyan-400/25 to-cyan-400/0 text-cyan-200',
  },
  {
    icon: Code2,
    title: 'Real-World Software',
    sub: 'Transit · Biometrics · Campus tools',
    text: 'Creator of Safar, CUET Lost & Found Box, a biometric attendance tracker and the EduSync CLI.',
    color: 'from-emerald-400/25 to-emerald-400/0 text-emerald-200',
  },
  {
    icon: Flame,
    title: 'Campus Leadership',
    sub: 'CUETPS · Shuvosangho · IEEE CS',
    text: 'Assistant Publication Secretary and Work & Planning Secretary across major student organizations.',
    color: 'from-pink-400/25 to-pink-400/0 text-pink-200',
  },
];

export default function About() {
  const uni = personalInfo.university;
  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="01"
          eyebrow="About me"
          title="Engineering meets"
          highlight="intelligence."
          subtitle="An undergraduate combining solid software engineering foundations with applied machine learning research and hands-on system building."
        />

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          {/* Story */}
          <Reveal className="md:col-span-4">
            <SpotlightCard className="h-full p-5 sm:p-9">
              <div className="space-y-5 text-[15px] leading-relaxed text-zinc-300 sm:text-base">
                <p>
                  I'm a Computer Science & Engineering undergraduate at{' '}
                  <span className="font-semibold text-white">Chittagong University of Engineering & Technology (CUET)</span>, currently in{' '}
                  <span className="text-violet-200">{uni.levelTerm}</span> with a CGPA of{' '}
                  <span className="font-semibold text-emerald-300">{uni.cgpa}</span>, and I'm expected to graduate in{' '}
                  <span className="font-semibold text-gradient">{uni.expectedGrad}</span>.
                </p>
                <p>
                  I don't see development and machine learning as separate worlds. I enjoy building full-stack platforms from the ground up —
                  React frontends, Node.js or Spring Boot backends — while exploring{' '}
                  <span className="text-white">Machine Learning</span>, <span className="text-white">Deep Learning</span> and{' '}
                  <span className="text-white">NLP</span>.
                </p>
                <p>
                  At <span className="text-cyan-200">Flyrank AI</span> I'm getting real industry experience with ML evaluation and NLP workflows.
                  Outside code, I'm into photography with the CUET Photographic Society and community planning with Bashundhara Shuvosangho.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="chip"><MapPin className="h-3.5 w-3.5 text-pink-300" /> Hometown: Subarnachar, Noakhali</span>
                <span className="chip"><Building2 className="h-3.5 w-3.5 text-violet-300" /> Campus: CUET, Chattogram</span>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Graduation card */}
          <Reveal delay={100} className="md:col-span-2">
            <SpotlightCard className="flex h-full flex-col justify-between bg-gradient-to-br from-violet-600/20 via-indigo-600/10 to-transparent p-7">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-white ring-1 ring-white/15">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <span className="chip border-violet-300/20 bg-violet-400/10 text-violet-100">B.Sc. in CSE</span>
              </div>
              <div className="mt-10">
                <p className="text-sm text-zinc-400">Expected graduation</p>
                <p className="font-display text-7xl font-bold leading-none tracking-tight text-gradient">{uni.expectedGrad}</p>
                <div className="mt-6">
                  <div className="mb-2 flex justify-between text-xs text-zinc-400">
                    <span>{uni.levelTerm}</span>
                    <span>~75% done</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-violet-500 to-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.6)]" />
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Academic */}
          <Reveal delay={50} className="md:col-span-2">
            <SpotlightCard className="h-full p-5 sm:p-7">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-amber-400/25 to-amber-400/0 text-amber-200 ring-1 ring-white/10">
                <Award className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">Academic Excellence</h3>
              <p className="mt-1 text-xs font-mono text-amber-200/80">CUET 3.58 · HSC 5.00 · SSC 5.00</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                A consistent record through Noakhali Zilla School, Notre Dame College and CUET.
              </p>
            </SpotlightCard>
          </Reveal>

          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={100 + i * 60} className="md:col-span-2">
              <SpotlightCard className="h-full p-5 sm:p-7">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ring-1 ring-white/10 ${p.color}`}>
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-xs font-mono text-zinc-500">{p.sub}</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{p.text}</p>
              </SpotlightCard>
            </Reveal>
          )).slice(0, 2)}

          <Reveal delay={260} className="md:col-span-6">
            <SpotlightCard className="flex flex-col items-start gap-5 p-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ring-1 ring-white/10 ${pillars[2].color}`}>
                  <Flame className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{pillars[2].title}</h3>
                  <p className="text-sm text-zinc-400">{pillars[2].text}</p>
                </div>
              </div>
              <a href="#activities" className="btn-ghost shrink-0 py-2.5 text-[13px]">
                <CalendarCheck className="h-4 w-4 text-pink-300" /> See activities
              </a>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
