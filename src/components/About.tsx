import { motion } from 'motion/react';
import { TerminalWindow } from './TerminalWindow';

export const About = () => {
  return (
    <section id="about" className="py-24 px-10 md:px-24 max-w-7xl mx-auto">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Terminal */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="text-accent mb-4 font-mono text-xl">$ whoami</div>
          <TerminalWindow>
            <div className="space-y-4">
              <div>
                <span className="text-accent">root@roy:~$</span> <span className="text-white">whoami</span>
                <div className="text-white/80">dibya_jyoti_roy</div>
              </div>
              
              <div>
                <span className="text-accent">root@roy:~$</span> <span className="text-white">cat about.txt</span>
                <div className="text-white/80 mt-1 whitespace-pre-wrap">
                  {"B.Tech CSE @ Andhra University\nICCR Scholarship Recipient\nBuilding at the intersection of\nsystems, security, and code."}
                </div>
              </div>

              <div>
                <span className="text-accent">root@roy:~$</span> <span className="text-white">echo $PASSION</span>
                <div className="text-accent-muted">"Understanding systems deeply — then breaking them responsibly."</div>
              </div>
              
              <div className="flex gap-2">
                <span className="text-accent">root@roy:~$</span>
                <span className="w-2 h-4 bg-accent animate-pulse" />
              </div>
            </div>
            
            {/* Visual CPU Load */}
            <div className="mt-8 pt-4 border-t border-white/5 flex gap-2 items-center">
              <span className="text-[10px] text-white/20">CPU:</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 w-1.5 ${i <= 3 ? 'bg-accent/40' : 'bg-white/5'}`}
                  />
                ))}
              </div>
              <span className="text-[10px] text-white/20 ml-auto">42% LOAD</span>
            </div>
          </TerminalWindow>
        </motion.div>

        {/* Right Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              I am a Computer Science student at Andhra University, currently pursuing my B.Tech under the prestigious ICCR Scholarship. My core focus lies in the fascinating world of cybersecurity and low-level systems.
            </p>
            <p className="text-white/80 leading-relaxed">
              I believe that to build secure systems, one must first understand how to break them. This philosophy drives my curiosity to explore Linux internals, network security, and offensive security research.
            </p>
            <p className="text-white/80 leading-relaxed">
              When I'm not studying or coding, you'll likely find me in a terminal, experimenting with new security tools or analyzing how complex systems handle unexpected edge cases.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="border-l border-accent/20 pl-4 py-2">
              <div className="text-xs text-white/40 uppercase font-mono tracking-widest">Focus</div>
              <div className="text-accent text-sm font-mono mt-1">Pentesting</div>
            </div>
            <div className="border-l border-accent/20 pl-4 py-2">
              <div className="text-xs text-white/40 uppercase font-mono tracking-widest">Status</div>
              <div className="text-accent text-sm font-mono mt-1">Learning Every Day</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
