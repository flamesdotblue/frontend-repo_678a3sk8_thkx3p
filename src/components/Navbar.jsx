import React from 'react';
import { Rocket, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-4 mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-3">
          <a href="#home" className="inline-flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-300">
              <Rocket size={18} />
            </span>
            <span className="hidden sm:block">My Portfolio</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
