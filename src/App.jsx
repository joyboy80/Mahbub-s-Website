import React, { useCallback, useState } from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Research from './components/Research';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EmailModal from './components/EmailModal';
import FloatingEmailButton from './components/FloatingEmailButton';

export default function App() {
  const [emailOpen, setEmailOpen] = useState(false);
  const open = useCallback(() => setEmailOpen(true), []);
  const close = useCallback(() => setEmailOpen(false), []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink-950 text-zinc-100">
      <BackgroundEffects />
      <Navbar onOpenEmailModal={open} />

      <main className="relative z-10">
        <Hero onOpenEmailModal={open} />
        <Marquee />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Research />
        <Projects />
        <Leadership />
        <Contact />
      </main>

      <Footer onOpenEmailModal={open} />
      <FloatingEmailButton onOpenEmailModal={open} />
      <EmailModal isOpen={emailOpen} onClose={close} />
    </div>
  );
}
