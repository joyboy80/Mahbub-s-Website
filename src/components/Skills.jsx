import React, { useState } from 'react';
import {
  Code2, Cpu, Hash, Terminal, FileCode, TerminalSquare, BrainCircuit, Layers, MessageSquareCode, Workflow,
  Table2, Binary, BarChart3, Atom, FileCode2, Sparkles, LayoutGrid, Boxes, Server, ShieldAlert, Zap,
  Database, FileSpreadsheet, CloudLightning, GitBranch, FileText, FileCheck,
} from 'lucide-react';
import { SectionHeader, Reveal, useSpotlight } from './ui';
import { skillCategories, skillsList } from '../data/portfolioData';

const icons = {
  Code2, Cpu, Hash, Terminal, FileCode, TerminalSquare, BrainCircuit, Layers, MessageSquareCode, Workflow,
  Table2, Binary, BarChart3, Atom, FileCode2, Sparkles, LayoutGrid, Boxes, Server, ShieldAlert, Zap,
  Database, FileSpreadsheet, CloudLightning, GitBranch, FileText, FileCheck,
};

const accent = {
  languages: 'text-violet-200 from-violet-500/30',
  ml_ai: 'text-cyan-200 from-cyan-400/30',
  frontend: 'text-pink-200 from-pink-400/30',
  backend: 'text-emerald-200 from-emerald-400/30',
  databases: 'text-amber-200 from-amber-400/30',
  tools: 'text-indigo-200 from-indigo-400/30',
};

function SkillCard({ skill, delay }) {
  const onMove = useSpotlight();
  const Icon = icons[skill.icon] || Code2;
  return (
    <div
      onMouseMove={onMove}
      style={{ animationDelay: `${delay}ms` }}
      className="card card-hover spotlight group animate-pop-in overflow-hidden rounded-2xl p-4"
    >
      <div className="flex items-center gap-3.5">
        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br to-transparent ring-1 ring-white/10 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 ${accent[skill.category]}`}>
          <Icon className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="truncate font-medium text-white">{skill.name}</p>
          <p className="truncate text-xs text-zinc-500">{skill.level}</p>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState('all');
  const tabs = [{ id: 'all', label: 'All' }, ...skillCategories];
  const visible = active === 'all' ? skillsList : skillsList.filter((s) => s.category === active);

  return (
    <section id="skills" className="relative py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="04"
          eyebrow="Skills & tools"
          title="My technical"
          highlight="toolkit."
          subtitle="Languages, frameworks and tools I use to take ideas from notebook to production."
        />

        <Reveal className="mb-8">
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
            {tabs.map((t) => {
              const count = t.id === 'all' ? skillsList.length : skillsList.filter((s) => s.category === t.id).length;
              const on = active === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    on
                      ? 'bg-white text-ink-950 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.5)]'
                      : 'border border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {t.label}
                  <span className={`ml-2 rounded-full px-1.5 py-0.5 text-[10px] ${on ? 'bg-ink-950/10' : 'bg-white/10'}`}>{count}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div key={active} className="grid grid-cols-1 gap-3 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((s, i) => (
            <SkillCard key={s.name} skill={s} delay={i * 35} />
          ))}
        </div>
      </div>
    </section>
  );
}
