import React, { useEffect, useState } from 'react';
import { Mail, ArrowUp } from 'lucide-react';

export default function FloatingEmailButton({ onOpenEmailModal }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3 transition-all duration-500 sm:bottom-8 sm:right-8 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <a href="#hero" aria-label="Back to top" className="btn-icon h-11 w-11 bg-ink-900/80 backdrop-blur-xl">
        <ArrowUp className="h-4 w-4" />
      </a>
      <button
        onClick={onOpenEmailModal}
        aria-label="Send me an email"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-white shadow-[0_15px_40px_-8px_rgba(139,92,246,0.8)] transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-violet-500/40 [animation-duration:2.5s]" />
        <Mail className="relative h-5 w-5 transition-transform group-hover:-rotate-12" />
      </button>
    </div>
  );
}
