import React, { useEffect, useRef } from 'react';

/* Aurora blobs + subtle grid + grain + a soft glow that follows the cursor. */
export default function BackgroundEffects() {
  const glowRef = useRef(null);

  useEffect(() => {
    let raf;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
        }
      });
    };
    window.addEventListener('pointermove', onMove);
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />

      <div className="absolute -top-[20%] -left-[10%] h-[60vmax] w-[60vmax] rounded-full bg-violet-600/20 blur-[120px] animate-aurora" />
      <div className="absolute top-[10%] -right-[15%] h-[50vmax] w-[50vmax] rounded-full bg-cyan-500/[0.13] blur-[120px] animate-aurora-slow" />
      <div className="absolute -bottom-[25%] left-[20%] h-[45vmax] w-[45vmax] rounded-full bg-fuchsia-600/[0.12] blur-[130px] animate-aurora" />

      <div
        ref={glowRef}
        className="absolute left-0 top-0 hidden h-[600px] w-[600px] rounded-full opacity-60 transition-transform duration-300 ease-out md:block"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12), transparent 60%)' }}
      />

      <div className="absolute inset-0 noise opacity-[0.035] mix-blend-overlay" />
    </div>
  );
}
