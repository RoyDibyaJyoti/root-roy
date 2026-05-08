import { motion } from 'motion/react';
import { ExternalLink, Github, Star } from 'lucide-react';

const PROJECTS = [
  {
    title: 'AI-Powered Spam Detection System',
    path: '/home/roy/projects/spam-detector/README.md',
    status: 'DEPLOYED',
    event: 'Hackathon Submission',
    stack: 'Streamlit · Ollama · Llama3.2',
    type: 'Web Application · AI/ML',
    description: 'Developed an AI-integrated spam detection system that leverages local LLMs for intelligent classification of messages and emails.',
    demo: '#',
    github: '#',
    featured: true
  },
  {
    title: 'Port Scanner & Network Analyzer',
    path: '/home/roy/projects/net-scan/README.md',
    status: 'COMPLETED',
    event: 'Self Project',
    stack: 'Python · Scapy · Sockets',
    type: 'CLI Tool · Networking',
    description: 'A multi-threaded custom port scanner designed to identify open services and basic vulnerabilities on a target system.',
    demo: '#',
    github: '#',
    featured: false
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-10 md:px-24 max-w-4xl mx-auto">
      <div className="text-accent mb-12 font-mono text-xl">$ cat projects.log</div>
      
      <div className="space-y-12">
        {PROJECTS.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`border-terminal rounded-lg overflow-hidden bg-secondary/50 group ${project.featured ? 'ring-1 ring-accent/20' : ''}`}
          >
            {/* Title Bar */}
            <div className="bg-white/5 border-b border-white/5 px-4 py-2 flex items-center justify-between">
              <div className="font-mono text-[10px] text-white/30 truncate">
                {project.path}
              </div>
              {project.featured && (
                <div className="flex items-center gap-1 text-[10px] text-amber">
                  <Star size={10} fill="currentColor" />
                  FEATURED
                </div>
              )}
            </div>

            <div className="p-6 font-mono space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-[11px] border-b border-white/5 pb-4">
                <div className="flex gap-4">
                  <span className="text-white/20 w-16">PROJECT:</span>
                  <span className="text-white font-bold">{project.title}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-white/20 w-16">STATUS:</span>
                  <span className="text-accent flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    {project.status}
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-white/20 w-16">EVENT:</span>
                  <span className="text-white/60">{project.event}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-white/20 w-16">STACK:</span>
                  <span className="text-accent/80">{project.stack}</span>
                </div>
              </div>

              <div className="py-4">
                <span className="text-accent/50 mr-2">&gt;</span>
                <p className="text-white/80 inline leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>

              <div className="flex gap-4 pt-2">
                <a 
                  href={project.demo} 
                  className="flex items-center gap-2 text-[10px] text-white/40 hover:text-accent transition-colors border border-white/10 hover:border-accent/30 px-3 py-1.5 rounded-sm"
                >
                  <ExternalLink size={12} />
                  $ view_demo
                </a>
                <a 
                  href={project.github} 
                  className="flex items-center gap-2 text-[10px] text-white/40 hover:text-accent transition-colors border border-white/10 hover:border-accent/30 px-3 py-1.5 rounded-sm"
                >
                  <Github size={12} />
                  $ read_code
                </a>
              </div>
            </div>
          </motion.article>
        ))}

        {/* Ghost cards */}
        <div className="border border-white/5 border-dashed rounded-lg p-8 flex flex-col items-center justify-center text-center opacity-30 gap-2 grayscale brightness-50">
          <div className="font-mono text-xs font-bold text-white">PROJECT: [CLASSIFIED]</div>
          <div className="font-mono text-[10px] text-accent">STATUS: ██████ IN DEVELOPMENT</div>
          <div className="font-mono text-[10px] text-white/40">ETA: Q3 2025</div>
        </div>
      </div>
    </section>
  );
};
