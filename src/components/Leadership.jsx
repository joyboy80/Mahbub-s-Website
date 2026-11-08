import React from 'react';
import { Users, Camera, Cpu, Code2, Trophy, Calculator, HeartHandshake, MapPin, ArrowUpRight } from 'lucide-react';
import { Facebook } from './SocialIcons';
import { SectionHeader, Reveal, SpotlightCard } from './ui';
import { leadershipAndActivities } from '../data/portfolioData';

const pickIcon = (cat) => {
  if (/Media|Creative/.test(cat)) return Camera;
  if (/Social/.test(cat)) return HeartHandshake;
  if (/Technical/.test(cat)) return Cpu;
  if (/Computing/.test(cat)) return Code2;
  if (/Math/.test(cat)) return Calculator;
  if (/Athletic/.test(cat)) return Trophy;
  return Users;
};

export default function Leadership() {
  return (
    <section id="activities" className="relative py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="07"
          eyebrow="Leadership & activities"
          title="Beyond the"
          highlight="code."
          subtitle="Communities, clubs and teams that taught me leadership, creativity and teamwork."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {leadershipAndActivities.map((a, i) => {
            const Icon = pickIcon(a.category);
            const current = a.status === 'Present';
            return (
              <Reveal
                key={a.organization}
                delay={(i % 3) * 80}
                className={i === leadershipAndActivities.length - 1 ? `${leadershipAndActivities.length % 2 ? 'sm:col-span-2' : ''} ${leadershipAndActivities.length % 3 === 1 ? 'lg:col-span-3' : 'lg:col-span-1'}` : ''}
              >
                <SpotlightCard className="group flex h-full flex-col p-6">
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/25 to-cyan-400/10 text-violet-100 ring-1 ring-white/10 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${
                        current ? 'bg-emerald-400/10 text-emerald-300 ring-emerald-400/20' : 'bg-white/[0.04] text-zinc-400 ring-white/10'
                      }`}
                    >
                      {current ? 'Current' : a.status.replace('School Extracurricular Achievement', 'Achievement')}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">{a.role}</h3>
                  <p className="mt-1 text-sm font-medium text-gradient">{a.organization}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{a.description}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4 text-xs text-zinc-500">
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {a.location} · {a.category}</span>
                    {a.facebookUrl && (
                      <a
                        href={a.facebookUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-zinc-400 transition-colors hover:bg-blue-500/15 hover:text-blue-200"
                        aria-label={`${a.organization} on Facebook`}
                      >
                        <Facebook className="h-3.5 w-3.5" />
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
