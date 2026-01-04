'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { projects } from '@/app/projects/data'
import type { Project } from '@/app/projects/data'

type Props = {
  project: Project
  index: number
  activeIndex: number | null
  setActiveIndex: (i: number | null) => void
}

export default function ProjectSpotlight({
  project,
  index,
  activeIndex,
  setActiveIndex,
}: Props) {
  const isActive = activeIndex === index
  const isInactive = activeIndex !== null && !isActive

  return (
    <motion.article
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(null)}
      layout
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative cursor-pointer"
      style={{
        gridColumn:
          isActive ? 'span 2 / span 2' : 'span 1 / span 1',
      }}
    >
      <motion.div
        layout
        className={`group relative h-full rounded-3xl overflow-hidden border border-white/10 bg-white/5`}
        animate={{
          opacity: isInactive ? 0.4 : 1,
          scale: isInactive ? 0.96 : 1,
        }}
        transition={{ duration: 0.4 }}
      >
        {/* IMAGE */}
        <div className="relative aspect-[16/10]">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <h3 className="text-2xl font-medium">
            {project.title}
          </h3>

          <motion.p
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0.6,
            }}
            className="mt-3 text-sm text-white/70 max-w-md"
          >
            {project.description}
          </motion.p>

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

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : 10,
            }}
            transition={{ duration: 0.3 }}
            className="mt-6"
          >
            <span className="inline-flex items-center gap-2 text-sm">
              View Project →
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.article>
  )
}
