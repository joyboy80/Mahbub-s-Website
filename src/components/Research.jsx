import React from 'react';
import { Brain, Sparkles, Workflow, Network, Quote } from 'lucide-react';
import { SectionHeader, Reveal, SpotlightCard } from './ui';
import { researchInterests } from '../data/portfolioData';

const icons = { Brain, Sparkles, Workflow, Network };
const tints = [
  'from-violet-500/30 text-violet-100',
  'from-cyan-400/30 text-cyan-100',
  'from-emerald-400/30 text-emerald-100',
  'from-pink-400/30 text-pink-100',
];

export default function Research() {
  return (
    <section id="research" className="relative py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="05"
          eyebrow="Research interests"
          title="Questions I'm"
          highlight="exploring."
        />

        <Reveal>
          <div className="relative mb-10 overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-violet-600/15 via-transparent to-cyan-500/10 p-6 sm:p-10 lg:p-12">
            <Quote className="absolute -right-4 -top-4 h-40 w-40 text-white/[0.04]" />
            <p className="relative max-w-4xl font-display text-lg font-medium leading-snug text-white xs:text-xl sm:text-2xl lg:text-3xl">
              “{researchInterests.quote}”
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {researchInterests.focusAreas.map((a, i) => {
            const Icon = icons[a.icon] || Brain;
            return (
              <Reveal key={a.title} delay={i * 80}>
                <SpotlightCard className="group h-full p-5 sm:p-8">
                  <div className="flex items-start justify-between">
                    <span className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br to-transparent ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${tints[i % 4]}`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-5xl font-bold text-white/[0.06] transition-colors group-hover:text-white/10">0{i + 1}</span>
                  </div>
                  <span className="mt-6 inline-block text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500">{a.tag}</span>
                  <h3 className="mt-1.5 font-display text-xl font-semibold text-white">{a.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">{a.description}</p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
