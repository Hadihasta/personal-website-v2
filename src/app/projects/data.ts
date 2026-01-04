export type Project = {
  title: string
  description: string
  cover: string
  tools: string[]
  href?: string
  repo?: string
}

export const projects: Project[] = [
  {
    title: 'Hiring Portal',
    description: `
This project explores an alternative approach to AI integration  not as a fully automated replacement, but as an interactive assistant within a job management portal.
The system focuses on enhancing user experience through intelligent form interactions, AI assisted validation, and gesture-based photo capture.
By integrating TensorFlow, the platform aims to create a more natural and engaging interaction between users and the system, while maintaining clarity and usability in recruitment workflows.
`,
    cover: '/asset-v2/portofolio/hiring_portal.png',
    tools: ['Next.js', 'PostgreSql', 'Prisma', 'Tensorflow'],
    // href: '#',
    repo: 'https://github.com/Hadihasta/hiring-portal-next',
  },
  {
    title: 'Wedding Organizer Management System',
    description: `
A management system designed for wedding organizer companies to efficiently handle guest data and digital invitations.
The platform allows clients to share invitation links, manage guest lists, and view attendance updates in real time.
Built using ASP.NET with SignalR for real-time synchronization, the system ensures that guest information remains accurate and instantly updated, improving coordination between organizers and clients.
`,
    cover: '/asset-v2/portofolio/eo_management.png',
    tools: ['Next.js', 'C#', 'ASP.NET', 'PostgreSql','SignalR'],
    // href: '#',
    repo: 'https://github.com/Hadihasta/undangan-web-apps',
    
  },
]
