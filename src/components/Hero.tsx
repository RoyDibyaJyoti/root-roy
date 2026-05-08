import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal, Download, ArrowDown } from 'lucide-react';

const TYPEWRITER_PHRASES = [
  "Pentesting Linux Systems",
  "Breaking Things Ethically",
  "Securing Environments",
  "Automating Security Tasks",
  "Analyzing Malware"
];

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        if (displayText.length === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(100);
        }
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
          setTypingSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, typingSpeed]);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-start px-10 md:px-24 pt-20 relative">
      <div className="max-w-4xl space-y-6">
        {/* Line 1 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-amber text-sm md:text-md"
        >
          root@roy:~$
        </motion.div>

        {/* Line 2 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-4xl md:text-7xl lg:text-8xl text-white tracking-widest font-bold uppercase glitch-text leading-tight"
        >
          Dibya Jyoti <br/>
          <span className="text-accent underline decoration-amber decoration-4 underline-offset-8">Roy</span>
        </motion.h1>

        {/* Line 3 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="font-mono text-accent text-lg md:text-2xl flex items-center gap-3 italic opacity-80"
        >
          <span className="text-accent/50">&gt;</span>
          Cybersecurity Learner & Linux Systems Engineer
        </motion.div>

        {/* Line 4: Typewriter styled like the theme block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-black/40 border-l-2 border-amber p-4 font-mono text-white/90 text-sm md:text-md flex flex-col min-h-[4rem]"
        >
          <div className="text-white/40 text-xs mb-1">Currently:</div>
          <div className="flex items-center">
            <span className="underline decoration-amber">{displayText}</span>
            <span className="inline-block w-2.5 h-5 bg-white ml-2 animate-pulse" />
          </div>
        </motion.div>

        {/* Line 5 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="font-mono text-white/30 text-xs md:text-sm"
        >
          Andhra University · B.Tech CSE · ICCR Scholar
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex flex-wrap gap-4 pt-8"
        >
          <button className="flex items-center gap-2 px-6 py-3 border border-accent/20 bg-accent/5 hover:bg-accent/10 transition-colors text-white font-mono text-sm group">
            <span className="text-accent/50">$</span>
            <span>cat resume.pdf</span>
            <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </button>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors text-white/60 hover:text-white font-mono text-sm"
          >
            <span className="text-white/20">$</span>
            ssh contact@roy
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-accent/30 tracking-widest uppercase">scroll --explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-accent/30"
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

      {/* Hero decor: uptime */}
      <div className="absolute top-24 right-10 hidden xl:block font-mono text-[10px] text-white/20 space-y-1 text-right">
        <div>SESSION: ACTIVE</div>
        <div>UID: 1000(ROY)</div>
        <div>SHELL: ZSH</div>
      </div>
    </section>
  );
};
