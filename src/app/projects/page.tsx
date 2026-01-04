import ProjectGrid from '@/components/content/projects/ProjectGrid'
import EditorialBlock from '@/components/content/projects/EditorialBlock'
import { projects } from './data'

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen text-white">
      <section className="px-6 pt-24 pb-16 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
          Projects
        </h1>
        <p className="mt-6 text-white/60 max-w-xl">
          Selected works combining engineering and use case.
        </p>
      </section>

      {/* Editorial storytelling */}
      {/* <EditorialBlock /> */}

      {/* Main project grid */}
      <ProjectGrid projects={projects} />
    </main>
  )
}
