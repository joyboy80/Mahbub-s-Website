import React, { useState, useMemo } from 'react';
import { 
  Code2, 
  Cpu, 
  Hash, 
  Terminal, 
  FileCode, 
  TerminalSquare, 
  BrainCircuit, 
  Layers, 
  MessageSquareCode, 
  Workflow, 
  Table2, 
  Binary, 
  BarChart3, 
  Atom, 
  FileCode2, 
  Sparkles, 
  LayoutGrid, 
  Boxes, 
  Server, 
  ShieldAlert, 
  Zap, 
  Database, 
  FileSpreadsheet, 
  CloudLightning, 
  GitBranch, 
  FileText, 
  FileCheck, 
  Search, 
  Filter 
} from 'lucide-react';
import { skillCategories, skillsList } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  Code2,
  Cpu,
  Hash,
  Terminal,
  FileCode,
  TerminalSquare,
  BrainCircuit,
  Layers,
  MessageSquareCode,
  Workflow,
  Table2,
  Binary,
  BarChart3,
  Atom,
  FileCode2,
  Sparkles,
  LayoutGrid,
  Boxes,
  Server,
  ShieldAlert,
  Zap,
  Database,
  FileSpreadsheet,
  CloudLightning,
  GitBranch,
  FileText,
  FileCheck
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('languages');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter skills based on specific selected category and optional search query
  const filteredSkills = useMemo(() => {
    return skillsList.filter((skill) => {
      const matchesCategory = skill.category === activeCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.level.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
              <span className="text-cyan-400 font-bold">04 //</span>
              <span>ENGINEERING MATRIX</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Technical <span className="text-gradient-cyan">Skill Set</span>
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-light">
              Select a specific category below to inspect associated programming languages, machine learning frameworks, full-stack stacks, or databases.
            </p>
          </div>

          {/* Quick Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Filter current category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 text-slate-200 placeholder-slate-500 text-xs font-mono outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills (Must select specific type) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSearchQuery('');
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 scale-[1.02]'
                    : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-3.5">
          {filteredSkills.map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={idx}
                className="group relative p-4 rounded-2xl glass-card border border-white/5 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/40 flex flex-col justify-between"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] group-hover:bg-cyan-500/10 border border-white/5 group-hover:border-cyan-500/30 text-slate-300 group-hover:text-cyan-300 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-slate-400">
                    {skill.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-mono mt-1 leading-snug">
                    {skill.level}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 p-8 rounded-2xl glass-card border border-white/5">
            <p className="text-slate-400 text-sm font-mono">
              No skills found matching "{searchQuery}" under this category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('languages');
              }}
              className="mt-3 px-4 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-mono hover:bg-cyan-500/30"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Note on Authenticity */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400 font-mono">
            ⚡ All technical capabilities are backed by actual university coursework, repositories, and internship engineering.
          </p>
        </div>

      </div>
    </section>
  );
}
