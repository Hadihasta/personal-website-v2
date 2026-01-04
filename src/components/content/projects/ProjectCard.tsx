'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
// import { projects } from '@/app/projects/data'
import type { Project } from '@/app/projects/data'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group relative rounded-3xl border border-white/10 overflow-hidden bg-white/5"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-medium">{project.title}</h3>
        <p className="mt-3 text-sm text-white/60">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="text-xs px-3 py-1 rounded-full border border-white/10"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-6">
          {project.href && <a className="text-sm underline-offset-4 hover:underline">View Project →</a>}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-white"
            >
              Repository ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
