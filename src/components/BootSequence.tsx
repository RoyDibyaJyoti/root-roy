import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const BOOT_LOG_LINES = [
  "Initializing kernel v6.1.0-kali-amd64...",
  "Loading security modules... [ OK ]",
  "Checking filesystem integrity... [ OK ]",
  "Mounting /dev/nvme0n1p2... [ OK ]",
  "Detecting network interfaces... [ eth0 ] [ wlan0 ]",
  "Authenticating user: root",
  "Applying firewall rules... [ OK ]",
  "Starting portfolio daemon v1.3.37...",
  "Welcome back, Roy.",
  "Opening terminal session..."
];

export const BootSequence = ({ onComplete }: { onComplete: () => void, [key: string]: any }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < BOOT_LOG_LINES.length) {
        setLines(prev => [...prev, BOOT_LOG_LINES[currentLine]]);
        setProgress(((currentLine + 1) / BOOT_LOG_LINES.length) * 100);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[1000] bg-primary flex flex-col justify-center items-start p-10 font-mono text-sm overflow-hidden"
    >
      <div className="max-w-2xl w-full">
        <div className="mb-4 text-accent/50">
          root@roy: BIOS v2.4.1 (2025-01-10)
        </div>
        
        <div className="space-y-1 mb-8">
          {lines.map((line, idx) => (
            <div key={idx} className={line && line.includes('[ OK ]') ? "text-accent" : "text-white/80"}>
              {line && line.split('...').map((part, i) => (
                <span key={i}>
                  {part}
                  {i === 0 && line.includes('...') ? '...' : ''}
                </span>
              ))}
            </div>
          ))}
          <span className="inline-block w-2 h-4 bg-accent animate-pulse" />
        </div>

        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <div className="mt-2 text-accent/30 text-xs flex justify-between">
          <span>SYSTEM_READY</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>
    </motion.div>
  );
};
