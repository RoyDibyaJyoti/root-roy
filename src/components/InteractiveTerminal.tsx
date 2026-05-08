import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal as TerminalIcon, X } from 'lucide-react';

const CMD_HISTORY = [
  'Welcome to roy-os v1.3.37',
  'Type "help" for a list of available commands.'
];

export const InteractiveTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(CMD_HISTORY);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && (e.key === '`')) {
        setIsOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, `root@roy:~$ ${input}`];

    switch (cmd) {
      case 'help':
        newHistory.push('Available commands: help, whoami, ls, cat about.txt, clear, matrix, exit');
        break;
      case 'whoami':
        newHistory.push('dibya_jyoti_roy — Cybersecurity Learner, systems enthusiast, builder.');
        break;
      case 'ls':
        newHistory.push('about/  skills/  projects/  achievements/  contact/');
        break;
      case 'cat about.txt':
        newHistory.push('B.Tech CSE student at Andhra University. ICCR Scholar. Security focus.');
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'matrix':
        newHistory.push('Matrix mode activated... (not really, check background)');
        break;
      case 'exit':
        setIsOpen(false);
        break;
      case 'sudo rm -rf /':
        newHistory.push('Permission denied. Nice try, hacker.');
        break;
      default:
        newHistory.push(`bash: ${cmd}: command not found`);
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[60] w-12 h-12 rounded-full bg-accent text-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform md:hidden"
      >
        <TerminalIcon size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 md:inset-20 z-[100] flex items-center justify-center pointer-events-none"
          >
            <div className="w-full max-w-4xl h-full md:h-[600px] bg-secondary border border-white/10 rounded-lg shadow-2xl flex flex-col pointer-events-auto">
              {/* Title Bar */}
              <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                  interactive terminal — bash
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
                  <X size={16} />
                </button>
              </div>

              {/* Console Body */}
              <div className="flex-1 p-4 font-mono text-sm overflow-y-auto scrollbar-hide">
                <div className="space-y-1">
                  {history.map((line, idx) => (
                    <div key={idx} className={line && line.startsWith('root@roy') ? "text-accent" : "text-white/80"}>
                      {line}
                    </div>
                  ))}
                  <form onSubmit={handleCommand} className="flex items-center gap-2">
                    <span className="text-accent underline">root@roy:~$</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="flex-1 bg-transparent border-none outline-none text-white selection:bg-accent/40"
                      autoFocus
                    />
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
