import React from 'react';
import { Briefcase, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SectionHeader, Reveal, SpotlightCard } from './ui';
import { experienceList } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="02"
          eyebrow="Experience"
          title="Where I'm"
          highlight="building."
          subtitle="Industry work that sharpens how I think about models, data and production systems."
        />

        <div className="space-y-5">
          {experienceList.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 80}>
              <SpotlightCard className="p-5 sm:p-10">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400/30 to-violet-500/20 ring-1 ring-white/10">
                        <Briefcase className="h-6 w-6 text-cyan-100" />
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-300 ring-1 ring-emerald-400/20">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                        {exp.period}
                      </span>
                    </div>
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noreferrer"
                      className="group mt-5 inline-flex items-center gap-1 font-display text-2xl font-semibold text-white hover:text-cyan-200"
                    >
                      {exp.company}
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                    <p className="mt-1 text-sm text-zinc-500">{exp.employmentType}</p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-semibold text-gradient sm:text-2xl">{exp.position}</h3>
                    <ul className="mt-5 space-y-3">
                      {exp.responsibilities.map((r) => (
                        <li key={r} className="flex gap-3 text-[15px] leading-relaxed text-zinc-300">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" />
                          {r}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.techStack.map((t) => (
                        <span key={t} className="chip transition-colors hover:border-cyan-300/40 hover:text-white">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
