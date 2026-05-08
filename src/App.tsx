/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BootSequence } from './components/BootSequence';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MatrixBackground } from './components/MatrixBackground';
import { InteractiveTerminal } from './components/InteractiveTerminal';

export default function App() {
  const [isBooted, setIsBooted] = useState(false);

  useEffect(() => {
    const hasBootedBefore = localStorage.getItem('root_roy_booted');
    if (hasBootedBefore) {
      setIsBooted(true);
    }
  }, []);

  const handleBootComplete = () => {
    setIsBooted(true);
    localStorage.setItem('root_roy_booted', 'true');
  };

  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-primary overflow-x-hidden">
      <MatrixBackground />
      
      <AnimatePresence>
        {!isBooted && (
          <BootSequence onComplete={handleBootComplete} key="boot" />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isBooted ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </motion.div>
      
      <InteractiveTerminal />
      
      {/* Scanline Effect overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <div className="scanline" />
        <div className="absolute inset-0 bg-terminal-noise opacity-[0.03]" />
      </div>
    </div>
  );
}
