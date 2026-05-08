export const Footer = () => {
  return (
    <footer className="py-12 px-10 md:px-24 border-t border-white/5 bg-black/40">
      <div className="max-w-4xl mx-auto font-mono">
        <div className="text-accent/60 mb-6 text-sm">
          root@roy:~$ exit
        </div>
        
        <div className="space-y-1 text-white/20 text-[10px] uppercase tracking-[0.2em]">
          <div>Session terminated.</div>
          <div>All connections closed.</div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4">
          <div className="text-[10px] text-white/30 uppercase tracking-widest leading-loose">
            © 2025 Dibya Jyoti Roy · Built with hand-crafted code
            <br />
            No frameworks were harmed in the making.
          </div>
          <div className="text-[10px] text-accent/20 flex gap-4 uppercase tracking-widest">
            <a href="#" className="hover:text-accent transition-colors">Github</a>
            <a href="#" className="hover:text-accent transition-colors">Linkedin</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
