import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 -z-[1] bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Let’s build something great
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-3 text-white/70"
          >
            Open to freelance, full‑time, and collaboration opportunities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-medium text-slate-900 hover:bg-cyan-400 transition-colors"
            >
              <Mail size={18} /> Email me
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition-colors"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition-colors"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </motion.div>

          <p className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
