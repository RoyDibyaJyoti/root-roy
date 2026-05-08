import { motion } from 'motion/react';

const ACHIEVEMENTS = [
  { id: 1337, date: '2024-03-12', action: 'PARTICIPATED', label: 'AI Cybersecurity Malware Analysis Hackathon', color: 'text-accent' },
  { id: 1338, date: '2024-03-15', action: 'COMPLETED', label: 'AI Cybersecurity Malware Analysis Bootcamp', color: 'text-accent' },
  { id: 1339, date: '2024-08-01', action: 'ENROLLED', label: 'B.Tech CSE — Andhra University', color: 'text-white' },
  { id: 1340, date: '2024-09-01', action: 'AWARDED', label: 'ICCR Scholarship', color: 'text-accent' },
  { id: 1341, date: '2025-01-10', action: 'BUILT', label: 'AI Spam Detection System (Hackathon)', color: 'text-accent' },
  { id: 1342, date: 'PRESENT', action: 'EXPLORING', label: 'Pentesting · Web Security · CTFs', color: 'text-amber' },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-10 md:px-24 max-w-4xl mx-auto">
      <div className="text-accent mb-12 font-mono text-xl">$ history | grep achievements</div>
      
      <div className="font-mono text-sm space-y-4">
        {ACHIEVEMENTS.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity:0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="flex items-start gap-4 md:gap-8 group"
          >
            <span className="text-white/20 w-12 flex-shrink-0">{item.id}</span>
            <span className="text-white/40 w-24 flex-shrink-0 hidden sm:block">[{item.date}]</span>
            <span className={`${item.color} font-bold min-w-[100px]`}>{item.action}</span>
            <span className="text-white/80 group-hover:text-white transition-colors">{item.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Decorative history command at bottom */}
      <div className="mt-12 flex items-center gap-2 font-mono text-sm">
        <span className="text-accent">root@roy:~$</span>
        <span className="w-2 h-4 bg-accent animate-pulse" />
      </div>
    </section>
  );
};
