'use client'
import type { Project } from '@/app/projects/data'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <section className="px-6 pb-32 max-w-7xl mx-auto">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </motion.div>
    </section>
  )
}
