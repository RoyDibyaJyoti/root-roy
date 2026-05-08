import { ReactNode } from 'react';

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export const TerminalWindow = ({ title = "bash — 80×24", children, className = "" }: TerminalWindowProps) => {
  return (
    <div className={`bg-accent/2 border border-border-glow border-t-[18px] rounded-lg overflow-hidden shadow-2xl relative ${className}`}>
      {/* Dots in the thick top border */}
      <div className="absolute top-[-14px] left-2 flex gap-1.5 pointer-events-none">
        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
      </div>

      {/* Content */}
      <div className="p-4 font-mono text-sm leading-relaxed overflow-x-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[10px] text-accent font-bold uppercase tracking-widest">{title}</h2>
          <span className="text-[10px] text-white/20">pts/0</span>
        </div>
        {children}
      </div>
    </div>
  );
};
