'use client'
import SectionRight from '@/components/home/SectionRight'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons-react'

export default function AboutMeSection() {

const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="relative min-h-screen px-6 py-24 text-white md:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">

      
        <div className="relative flex justify-center md:justify-start">
          <div className="rounded-2xl bg-muteGrey p-4 shadow-xl rotate-[-3deg] transition-transform hover:rotate-0">
            <SectionRight />
          </div>
        </div>

      
        <div>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Hijri 
          </h1>

          <p className="mt-3 text-sm uppercase tracking-widest text-neutral-400">
            Full-Stack Engineer · Builder · Writer
          </p>

          <p className="mt-8 text-neutral-300 leading-relaxed">
            I started my journey in technology with a simple curiosity
            <span className="text-white"> building things that people can actually use</span>.
            After graduating from a Computer Engineering program and completing an intensive
            bootcamp at Rakamin Academy, I decided to focus my career on software engineering
            with one clear goal  creating products that deliver real value, not just features.
          </p>

          <p className="mt-5 text-neutral-400 leading-relaxed">
            With a background in graphic design using Adobe Illustrator and Photoshop,
            I naturally developed a strong sensitivity toward visual design, UI,
            and user experience. This allows me to bridge the gap between
            design and engineering when building digital products.
          </p>

          <p className="mt-5 text-neutral-400 leading-relaxed">
            Today, I focus on building practical, scalable applications 
            especially MVPs  using a simple, measurable, and growth oriented approach.
            I enjoy turning ideas into clean, functional systems that are ready
            to evolve with real user needs.
          </p>

          {/* TECH STACK */}
          <div className="mt-10">
            <p className="text-xs uppercase tracking-widest text-neutral-500">
              Favorite Tech Stack
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {['Next.js', 'Prisma', 'Tailwind CSS', 'TypeScript'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-neutral-700 bg-blueDisable px-4 py-2 text-sm text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* social media */}
          <div className="mt-12 flex gap-6">
            <a
              href="#"
              aria-label="GitHub"
              className="text-neutral-400 transition hover:text-white"
            >
              <IconBrandGithub size={22} 
                onClick={() => openLink('https://github.com/Hadihasta')} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="text-neutral-400 transition hover:text-white"
            >
              <IconBrandLinkedin size={22} 
                onClick={() => openLink('https://www.linkedin.com/in/hijri-hadi-22289b23a/')} />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="text-neutral-400 transition hover:text-white"
            >
              <IconBrandTwitter size={22} onClick={() => openLink('https://x.com/hadiasta_')} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
