import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Interactive 3D Landing',
    desc: 'A Spline‑powered hero with reactive lighting and smooth scroll reveals.',
    tech: ['React', 'Spline', 'Framer Motion'],
    demo: '#',
    code: '#',
    accent: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Realtime Dashboard',
    desc: 'Data‑rich dashboard with animated charts and delightful micro‑interactions.',
    tech: ['React', 'Tailwind', 'WebSockets'],
    demo: '#',
    code: '#',
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'Design System',
    desc: 'A reusable component library with accessibility and theming baked in.',
    tech: ['TypeScript', 'Radix UI', 'Storybook'],
    demo: '#',
    code: '#',
    accent: 'from-emerald-500 to-teal-500',
  },
];

function ProjectCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition-colors"
    >
      <div className={`h-40 w-full bg-gradient-to-br ${item.accent} opacity-80`} />
      <div className="p-5">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="mt-1 text-sm text-white/70">{item.desc}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {item.tech.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2">
          <a
            href={item.demo}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition-colors"
          >
            <ExternalLink size={16} /> Live demo
          </a>
          <a
            href={item.code}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition-colors"
          >
            <Github size={16} /> Source
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-10 -top-10 rounded-full bg-white/5 p-8 opacity-0 blur-xl transition-all duration-500 group-hover:right-0 group-hover:top-0 group-hover:opacity-100" />
      <div className="pointer-events-none absolute right-4 top-4 text-white/20 group-hover:text-white/40 transition-colors">
        <Code size={24} />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Selected Projects</h2>
            <p className="mt-2 text-white/70">A mix of playful experiments and production UI work.</p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition-colors"
          >
            Let’s collaborate
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <ProjectCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
