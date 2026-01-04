'use client'

// import { projects } from '@/app/projects/data'
import type { Project } from '@/app/projects/data'
import ProjectCard from './ProjectCard'

export default function ProjectGrid({
  projects,
}: {
  projects: Project[]
}) {
  return (
    <section className="px-6 pb-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  )
}
