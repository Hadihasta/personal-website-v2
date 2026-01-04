type TrueSightStatus = 'Done' | 'OnProgress' | 'growth'

type Media = { type: 'image'; src: string } | { type: 'video'; src: string }

export type TrueSightItem = {
  year: string
  title: string
  location: string
  status: TrueSightStatus
  description: string
  media?: Media[]
}

export const statusConfig: Record<TrueSightStatus, { label: string; className: string }> = {
  Done: {
    label: 'Done',
    className: 'text-emerald-400 border-emerald-400/30',
  },
  OnProgress: {
    label: 'On Progres',
    className: 'text-amber-400 border-amber-400/30',
  },
  growth: {
    label: 'Growth',
    className: 'text-blue-400 border-blue-400/30',
  },
}

export const trueSight: TrueSightItem[] = [
  {
    year: '2022',
    title: 'Graduated from Politeknik Negeri Sriwijaya',
    location: 'Palembang, Indonesia',
    status: 'Done',
    description:
      'I graduated with a degree in Computer Engineering from Politeknik Negeri Sriwijaya. This marked the foundation of my technical journey and my first exposure to how systems and technology work.',
  },
  {
    year: '2023',
    title: 'Working at the Airport & Discovering System Design',
    location: 'Indonesia, Jakarta',
    status: 'Done',
    description:
      'I worked at the airport as a drive thru passport officer and passport processing operator. Being part of airport operations allowed me to see firsthand how large-scale systems are used daily. Observing these workflows sparked my interest in building software solutions for operational environments like airports.',
    media: [
      {
        type: 'image',
        src: '/asset-v2/photo/office_imigration_sit.jpg',
      },
      {
        type: 'image',
        src: '/asset-v2/photo/imigration_gather.jpg',
      },
      {
        type: 'image',
        src: '/asset-v2/photo/senior_snap.jpg',
      },
      {
        type: 'image',
        src: '/asset-v2/photo/on_stage.jpg',
      },
      {
        type: 'image',
        src: '/asset-v2/photo/pass_bandara.jpg',
      },
    ],
  },
  {
    year: '2023 – 2024',
    title: 'Returning to Software Through Rakamin Academy',
    location: 'Remote',
    status: 'Done',
    description:
      'While working, I decided to revisit my passion for software development. I enrolled in Rakamin Academy’s Full-stack Web Developer program, rebuilding my fundamentals and sharpening my skills through structured learning and hands on projects.',
  },
  {
    year: '2024 – 2025',
    title: 'First Professional Role as a  Web Developer',
    location: 'Indonesia, Elabram · Hybrid',
    status: 'Done',
    description:
      'I landed my first professional role as a Web Developer at Elabram. Over the course of one year, I gained real world experience working on production systems, collaborating with teams, and growing as a professional engineer.',
    media: [
      {
        type: 'image',
        src: '/asset-v2/photo/elabram/Elabram_2.jpg',
      },
      {
        type: 'image',
        src: '/asset-v2/photo/elabram/Elabram2025_1.jpg',
      },
      {
        type: 'image',
        src: '/asset-v2/photo/elabram/Elabram_1.jpg',
      },
      {
        type: 'image',
        src: '/asset-v2/photo/elabram/Elabram_3.jpg',
      },
    ],
  },
]
