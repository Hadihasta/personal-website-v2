import Image from 'next/image'

type TrueSightStatus = 'milestone' | 'transition' | 'growth'

type Media =
  | { type: 'image'; src: string }
  | { type: 'video'; src: string }

type TrueSightItem = {
  year: string
  title: string
  location: string
  status: TrueSightStatus
  description: string
  media?: Media
}

const trueSight: TrueSightItem[] = [
  {
    year: '2022',
    title: 'Graduated from Politeknik Negeri Sriwijaya',
    location: 'Palembang, Indonesia',
    status: 'milestone',
    description:
      'I graduated with a degree in Computer Engineering from Politeknik Negeri Sriwijaya. This marked the foundation of my technical journey and my first exposure to how systems and technology work together in the real world.',
  },
  {
    year: '2023',
    title: 'Working at the Airport & Discovering System Design',
    location: 'Indonesia',
    status: 'transition',
    description:
      'I worked at the airport as a drive-thru passport officer and passport processing operator. Being part of airport operations allowed me to see firsthand how large-scale systems are used daily. Observing these workflows sparked my interest in building software solutions for operational environments like airports.',
    media: {
      type: 'image',
      src: '/airport.jpg',
    },
  },
  {
    year: '2023 – 2024',
    title: 'Returning to Software Through Rakamin Academy',
    location: 'Remote',
    status: 'growth',
    description:
      'While working, I decided to revisit my passion for software development. I enrolled in Rakamin Academy’s Full-stack Web Developer program, rebuilding my fundamentals and sharpening my skills through structured learning and hands-on projects.',
  },
  {
    year: '2024 – 2025',
    title: 'First Professional Role as a Frontend Web Developer',
    location: 'Elabram · Remote',
    status: 'milestone',
    description:
      'I landed my first professional role as a Frontend Web Developer at Elabram. Over the course of one year, I gained real-world experience working on production systems, collaborating with teams, and growing as a professional engineer.',
  },
]

const statusConfig: Record<
  TrueSightStatus,
  { label: string; className: string }
> = {
  milestone: {
    label: 'Milestone',
    className: 'text-emerald-400 border-emerald-400/30',
  },
  transition: {
    label: 'Transition',
    className: 'text-amber-400 border-amber-400/30',
  },
  growth: {
    label: 'Growth',
    className: 'text-blue-400 border-blue-400/30',
  },
}

export default function TrueSightSection() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-20 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          True Sight
        </h1>

        <p className="mt-4 text-neutral-400 leading-relaxed">
          True Sight is a personal timeline of what truly happened along my
          journey — the moments, decisions, and experiences that shaped the
          person I am today.
          <br />
          <br />
          It’s not a highlight reel, but an honest reflection of the paths I
          walked, the roles I took, and the lessons I learned along the way.
        </p>
      </div>

      {/* Timeline */}
      <div className="mt-24 space-y-20">
        {trueSight.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8"
          >
            {/* Year */}
            <div className="text-neutral-500 text-sm md:text-base">
              {item.year}
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-xl md:text-2xl font-semibold">
                  {item.title}
                </h2>

                {/* Status Badge */}
                <span
                  className={`text-xs px-3 py-1 rounded-full border ${statusConfig[item.status].className}`}
                >
                  {statusConfig[item.status].label}
                </span>
              </div>

              <p className="text-sm text-neutral-500">{item.location}</p>

              <p className="text-neutral-300 leading-relaxed max-w-2xl">
                {item.description}
              </p>

              {/* Media */}
              {item.media && (
                <div className="mt-6 rounded-xl overflow-hidden border border-neutral-800">
                  {item.media.type === 'image' ? (
                    <Image
                      src={item.media.src}
                      alt={item.title}
                      width={900}
                      height={500}
                      className="object-cover"
                    />
                  ) : (
                    <video
                      src={item.media.src}
                      controls
                      className="w-full h-auto"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
