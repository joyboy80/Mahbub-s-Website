import React from 'react';
import { GraduationCap, MapPin, ArrowUpRight, CalendarClock, Award } from 'lucide-react';
import { SectionHeader, Reveal, SpotlightCard } from './ui';
import { educationList } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="03"
          eyebrow="Education"
          title="My academic"
          highlight="journey."
          subtitle="From Noakhali Zilla School to Notre Dame College to engineering at CUET — graduating in 2027."
        />

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-[21px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-400/70 via-cyan-300/30 to-transparent sm:left-[27px]" />

          <div className="space-y-6">
            {educationList.map((edu, i) => (
              <Reveal key={edu.institution} delay={i * 100} className="relative pl-14 sm:pl-20">
                <span
                  className={`absolute left-0 top-6 grid h-11 w-11 place-items-center rounded-2xl ring-1 ring-white/15 sm:h-14 sm:w-14 ${
                    i === 0
                      ? 'bg-gradient-to-br from-violet-500 to-cyan-400 text-white shadow-[0_0_30px_-4px_rgba(139,92,246,0.8)]'
                      : 'bg-ink-800 text-zinc-300'
                  }`}
                >
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>

                <SpotlightCard className="p-5 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-violet-300/80">{edu.type}</span>
                      <a
                        href={edu.website}
                        target="_blank"
                        rel="noreferrer"
                        className="group mt-1.5 flex items-start gap-1 font-display text-xl font-semibold text-white hover:text-violet-200 sm:text-2xl"
                      >
                        {edu.institution}
                        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 opacity-50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </a>
                      <p className="mt-1 text-[15px] text-zinc-300">{edu.degree}</p>
                    </div>
                    <div className="flex shrink-0 flex-wrap gap-2 sm:flex-col sm:items-end">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/20">
                        <Award className="h-3.5 w-3.5" /> {edu.result}
                      </span>
                      {edu.gradYear && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-500/25 to-cyan-400/20 px-3 py-1 text-xs font-semibold text-white ring-1 ring-violet-300/30">
                          <CalendarClock className="h-3.5 w-3.5" /> Graduating {edu.gradYear}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-500">
                    <span className="flex items-center gap-1.5"><CalendarClock className="h-4 w-4" /> {edu.period}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {edu.location}</span>
                  </div>

                  {edu.highlights?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
                      {edu.highlights.map((h) => (
                        <span key={h} className="rounded-xl bg-white/[0.03] px-3 py-1.5 text-xs leading-relaxed text-zinc-400 ring-1 ring-white/[0.06]">
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
