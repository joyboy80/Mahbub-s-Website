import React from 'react';
import { Sparkle } from 'lucide-react';
import { skillsList } from '../data/portfolioData';

export default function Marquee() {
  const names = skillsList.map((s) => s.name);
  const row = [...names, ...names];
  return (
    <div className="relative border-y border-white/[0.06] bg-white/[0.015] py-5">
      <div className="mask-fade-x flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8 hover:[animation-play-state:paused]">
          {row.map((n, i) => (
            <span key={i} className="flex items-center gap-8 whitespace-nowrap font-display text-lg font-medium text-zinc-500 transition-colors hover:text-white sm:text-xl">
              {n}
              <Sparkle className="h-4 w-4 text-violet-400/60" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
