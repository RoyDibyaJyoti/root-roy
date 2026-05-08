import React from 'react';
import { motion } from 'motion/react';
import { TerminalWindow } from './TerminalWindow';

const LANGUAGES = [
  { name: 'C', level: 'strong' },
  { name: 'Python', level: 'strong' },
  { name: 'JavaScript', level: 'active' },
  { name: 'Bash', level: 'strong' },
  { name: 'HTML/CSS', level: 'active' },
];

const SECURITY_TOOLS = [
  { name: 'Kali Linux', level: 'active' },
  { name: 'Nmap', level: 'active' },
  { name: 'Burp Suite', level: 'learning' },
  { name: 'Wireshark', level: 'active' },
  { name: 'Metasploit', level: 'learning' },
  { name: 'OSINT', level: 'active' },
];

const SYSTEMS = [
  { name: 'Ubuntu', level: 'active' },
  { name: 'macOS', level: 'active' },
  { name: 'Git/GitHub', level: 'active' },
  { name: 'Docker', level: 'learning' },
  { name: 'Ollama', level: 'active' },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-10 md:px-24 max-w-7xl mx-auto">
      <div className="text-accent mb-8 font-mono text-xl">$ ls skills/</div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Quadrant 1: Languages */}
        <SkillCard title="languages/">
          <div className="flex flex-wrap gap-3">
            {LANGUAGES.map(skill => (
              <SkillTag key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </SkillCard>

        {/* Quadrant 2: Security Tools */}
        <SkillCard title="tools/">
          <div className="flex flex-wrap gap-3">
            {SECURITY_TOOLS.map(skill => (
              <SkillTag key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </SkillCard>

        {/* Quadrant 3: Systems */}
        <SkillCard title="systems/">
          <div className="flex flex-wrap gap-3">
            {SYSTEMS.map(skill => (
              <SkillTag key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </SkillCard>

        {/* Quadrant 4: Focus Domains (Directory Tree) */}
        <SkillCard title="domains/">
          <div className="font-mono text-sm space-y-1 text-white/70">
            <div>security/</div>
            <div>├── web_application_security/</div>
            <div>├── network_fundamentals/</div>
            <div>├── cryptography_basics/</div>
            <div>├── linux_administration/</div>
            <div>└── malware_analysis/ <span className="text-amber text-[10px] ml-2">(learning)</span></div>
          </div>
        </SkillCard>
      </div>

      {/* htop-inspired system monitor */}
      <div className="mt-12 p-6 border-terminal bg-surface-card rounded-lg font-mono">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          <HtopBar label="CPU" value={62} task="learning_pentesting" />
          <HtopBar label="MEM" value={34} task="building_projects" />
          <HtopBar label="NET" value={78} task="networking_fundamentals" />
          <HtopBar label="SEC" value={18} task="beginner_advancing" />
        </div>
        <div className="mt-4 flex justify-between text-[10px] text-white/20">
          <span>TASKS: 4 RUNNING, 0 SLEEPING, 0 ZOMBIE</span>
          <span>UPTIME: 12:43:37</span>
        </div>
      </div>
      
      {/* Legend */}
      <div className="mt-8 flex gap-6 justify-center">
        <div className="flex items-center gap-2 text-[10px] text-white/40 font-mono">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          ACTIVE / STRONG
        </div>
        <div className="flex items-center gap-2 text-[10px] text-white/40 font-mono">
          <div className="w-1.5 h-1.5 rounded-full bg-amber" />
          DEVELOPING / LEARNING
        </div>
        <div className="flex items-center gap-2 text-[10px] text-white/40 font-mono">
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          FAMILIAR
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="border border-white/5 bg-white/5 p-6 rounded-lg hover:border-accent/20 transition-colors group"
  >
    <div className="text-accent/40 font-mono text-xs mb-4 flex items-center gap-2">
      <span className="w-1 h-1 bg-accent/40 rounded-full" />
      {title}
    </div>
    {children}
  </motion.div>
);

const SkillTag = ({ name, level }: { name: string, level: string, key?: string }) => {
  const levelColors: Record<string, string> = {
    strong: 'text-accent border-accent/20 bg-accent/5',
    active: 'text-white border-white/10 bg-white/5',
    learning: 'text-amber border-amber/20 bg-amber/5',
    familiar: 'text-white/40 border-white/5 bg-transparent'
  };

  const dotColors: Record<string, string> = {
    strong: 'bg-accent',
    active: 'bg-accent/40',
    learning: 'bg-amber',
    familiar: 'bg-white/10'
  };

  return (
    <div className={`px-3 py-1.5 border rounded-sm font-mono text-[11px] flex items-center gap-2 transition-all hover:scale-105 ${levelColors[level]}`}>
      <div className={`w-1 h-1 rounded-full ${dotColors[level]}`} />
      {name}
    </div>
  );
};

const HtopBar = ({ label, value, task }: { label: string, value: number, task: string }) => {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-[10px] mb-1 uppercase tracking-widest">
        <span className="text-white/60">{label} / {task}</span>
        <span className="text-accent">{value}%</span>
      </div>
      <div className="h-[12px] bg-[#111] border border-[#333] relative overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full ${label === 'SEC' ? 'bg-amber shadow-[0_0_8px_var(--color-amber)]' : 'bg-accent shadow-[0_0_8px_var(--color-accent)]'}`}
        />
      </div>
    </div>
  );
};
