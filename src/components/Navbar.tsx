import { motion } from 'motion/react';

export const Navbar = () => {
  const navLinks = [
    { name: 'about', href: '#about' },
    { name: 'skills', href: '#skills' },
    { name: 'projects', href: '#projects' },
    { name: 'contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="bg-secondary/80 backdrop-blur-md border-b border-white/10 h-10 flex items-center px-4 justify-between">
        {/* Terminal dots */}
        <div className="flex gap-1.5 w-24">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>

        {/* Center label */}
        <div className="font-mono text-xs text-white/40 absolute left-1/2 -translate-x-1/2 hidden md:block">
          root@roy:~$
        </div>

        {/* Nav Links */}
        <div className="flex gap-4 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/60 hover:text-accent transition-colors flex items-center gap-1"
            >
              <span className="text-accent/40">[</span>
              {link.name}
              <span className="text-accent/40">]</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
