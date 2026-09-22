import React, { useState } from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const handleOpenEmailModal = () => setIsEmailModalOpen(true);
  const handleCloseEmailModal = () => setIsEmailModalOpen(false);

  return (
    <div className="relative min-h-screen bg-cyber-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 2030 Cyber Ambient Canvas & Particles */}
      <BackgroundEffects />

      {/* Modern Sticky Frosted Glass Navigation (Top Email Feature) */}
      <Navbar onOpenEmailModal={handleOpenEmailModal} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenEmailModal={handleOpenEmailModal} />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Research />
        <Projects />
        <Leadership />
        <Contact onOpenEmailModal={handleOpenEmailModal} />
      </main>

      {/* Footer (Bottom Email Feature) */}
      <Footer onOpenEmailModal={handleOpenEmailModal} />

      {/* Universal Floating Email Action Button for All Devices */}
      <FloatingEmailButton onOpenEmailModal={handleOpenEmailModal} />

      {/* Universal Interactive Direct Email Modal */}
      <EmailModal 
        isOpen={isEmailModalOpen} 
        onClose={handleCloseEmailModal} 
      />
    </div>
  );
}
