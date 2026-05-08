import { motion } from 'motion/react';
import { TerminalWindow } from './TerminalWindow';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-10 md:px-24 max-w-4xl mx-auto">
      <div className="text-accent mb-8 font-mono text-xl">$ ping contact@roy</div>
      
      <div className="space-y-8">
        <TerminalWindow title="network_diagnostic — ping contact">
          <div className="space-y-2 font-mono text-xs md:text-sm text-white/60">
            <div>PING contact@roy.dev (0.0.0.0): 56 data bytes</div>
            <div className="text-accent/80">64 bytes from roy: icmp_seq=0 ttl=64 time=1.337 ms</div>
            <div className="text-accent/80">64 bytes from roy: icmp_seq=1 ttl=64 time=0.42 ms</div>
            <div className="pt-2">--- contact@roy.dev ping statistics ---</div>
            <div>2 packets transmitted, 2 received, 0% packet loss</div>
            <div className="text-accent mt-4">connection established.</div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Links */}
            <div className="space-y-4">
              <div className="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-4">network_services</div>
              <ContactLink 
                icon={<Github size={16} />} 
                label="[SSH]" 
                value="github.com/dibyajyotiroy" 
                href="#"
              />
              <ContactLink 
                icon={<Mail size={16} />} 
                label="[SMTP]" 
                value="roy@andhrauniversity.edu" 
                href="#"
              />
              <ContactLink 
                icon={<Linkedin size={16} />} 
                label="[HTTP]" 
                value="linkedin.com/in/roy" 
                href="#"
              />
            </div>

            {/* Simple Form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-4">packet_constructor</div>
              <div className="space-y-4">
                <div className="flex gap-2 items-center text-sm font-mono group">
                  <span className="text-accent/50 mr-2">$</span>
                  <input 
                    type="text" 
                    placeholder="NAME"
                    className="bg-transparent border-b border-white/5 focus:border-accent/40 outline-none w-full py-1 text-white placeholder:text-white/10 transition-colors"
                  />
                </div>
                <div className="flex gap-2 items-center text-sm font-mono group">
                  <span className="text-accent/50 mr-2">$</span>
                  <input 
                    type="email" 
                    placeholder="EMAIL"
                    className="bg-transparent border-b border-white/5 focus:border-accent/40 outline-none w-full py-1 text-white placeholder:text-white/10 transition-colors"
                  />
                </div>
                <div className="flex gap-2 items-start text-sm font-mono group">
                  <span className="text-accent/50 mr-2 mt-1">$</span>
                  <textarea 
                    placeholder="MESSAGE_BODY"
                    rows={3}
                    className="bg-transparent border-b border-white/5 focus:border-accent/40 outline-none w-full py-1 text-white placeholder:text-white/10 transition-colors resize-none"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-amber/20 bg-amber/5 hover:bg-amber/10 transition-colors text-amber font-mono text-[10px] uppercase tracking-widest mt-4">
                  $ send_message --encrypt
                  <Send size={10} />
                </button>
              </div>
            </form>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

const ContactLink = ({ icon, label, value, href }: { icon: any, label: string, value: string, href: string }) => (
  <a href={href} className="flex items-center gap-4 group">
    <div className="p-2 border border-white/5 bg-white/5 rounded-sm text-white/40 group-hover:text-accent group-hover:border-accent/30 transition-all">
      {icon}
    </div>
    <div className="font-mono text-xs">
      <div className="text-accent/40 mb-0.5">{label}</div>
      <div className="text-white/80 group-hover:text-white transition-colors">{value}</div>
    </div>
  </a>
);
