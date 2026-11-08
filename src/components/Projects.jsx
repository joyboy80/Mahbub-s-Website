import React, { useState } from 'react';
import { projectArt } from './ProjectArt';
import { ArrowUpRight, Star, CheckCircle2, FolderGit2 } from 'lucide-react';
import { Github } from './SocialIcons';
import { SectionHeader, Reveal, SpotlightCard } from './ui';
import { projectsList, contactDetails } from '../data/portfolioData';

const gradients = [
  'from-sky-500 via-indigo-500 to-violet-600',
  'from-emerald-400 via-teal-500 to-cyan-600',
  'from-fuchsia-500 via-purple-500 to-indigo-600',
  'from-amber-400 via-orange-500 to-pink-600',
];

function Cover({ project, index, large }) {
  const [imgFailed, setImgFailed] = useState(false);
  const Art = projectArt[project.id];
  const initials = project.title.split(':')[0].split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('');
  const showPhoto = project.image && !imgFailed;

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradients[index % 4]} aspect-[16/10]`}>
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
        {showPhoto ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : Art ? (
          <Art />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="font-display text-7xl font-bold tracking-tighter text-white/90">{initials}</span>
          </div>
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/15" />
    </div>
  );
}

function ProjectCard({ project, index, large = false, wide = false }) {
  return (
    <SpotlightCard className={`group h-full p-3 ${large ? '' : ''}`}>
      <div className={`grid h-full gap-6 ${large ? 'lg:grid-cols-[1.1fr_1fr] lg:items-center' : ''} ${wide ? 'md:grid-cols-2 md:items-center lg:grid-cols-1 lg:items-stretch' : ''}`}>
        <Cover project={project} index={index} large={large} />
        <div className={`flex flex-col px-2 pb-3 sm:px-3 sm:pb-4 ${large ? 'lg:py-5 lg:pr-5' : ''} ${wide ? 'md:py-4 lg:py-0' : ''}`}>
          <div className="flex items-center gap-2">
            {project.isFlagship && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/15 px-2.5 py-1 text-[11px] font-semibold text-amber-200 ring-1 ring-amber-300/25">
                <Star className="h-3 w-3 fill-current" /> Flagship
              </span>
            )}
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-zinc-500">{project.tagline}</span>
          </div>
          <h3 className={`mt-3 font-display font-semibold text-white ${large ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>{project.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">{project.description}</p>

          {large && (
            <ul className="mt-5 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-sm text-zinc-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" /> {h}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.techStack.map((t) => (
              <span key={t} className="rounded-full bg-white/[0.05] px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-white/[0.08]">{t}</span>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-2 pt-6">
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-ghost group/btn py-2.5 text-[13px]">
              <Github className="h-4 w-4" /> View code
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}

export default function Projects() {
  const [flagship, ...rest] = [...projectsList].sort((a, b) => Number(b.isFlagship) - Number(a.isFlagship));
  const github = contactDetails.socials.find((s) => s.name === 'GitHub');

  return (
    <section id="projects" className="relative py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-0 md:flex-row md:items-end md:gap-6">
          <SectionHeader
            index="06"
            eyebrow="Selected work"
            title="Things I've"
            highlight="built."
            subtitle="Practical systems that solve real problems on campus and beyond."
          />
          <Reveal className="mb-12 sm:mb-16">
            <a href={github?.url} target="_blank" rel="noreferrer" className="btn-ghost">
              <FolderGit2 className="h-4 w-4 text-violet-300" /> All repos on GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <Reveal>
          <ProjectCard project={flagship} index={0} large />
        </Reveal>

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
          {rest.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 90}
              className={rest.length % 2 === 1 && i === rest.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <ProjectCard project={p} index={i + 1} wide={rest.length % 2 === 1 && i === rest.length - 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
