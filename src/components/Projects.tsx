import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2, ShoppingCart, Calculator, Cloud, Palette, Music } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description:
      'A responsive admin dashboard for managing products, orders, and customers with interactive charts and data tables.',
    icon: ShoppingCart,
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Weather Application',
    description:
      'A real-time weather app that fetches data from a public API and displays forecasts with a clean, intuitive interface.',
    icon: Cloud,
    tags: ['JavaScript', 'API Integration', 'CSS'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-sky-500 to-blue-500',
  },
  {
    title: 'Task Management App',
    description:
      'A productivity application for organizing tasks with drag-and-drop functionality, due dates, and priority levels.',
    icon: Code2,
    tags: ['React', 'Framer Motion', 'Local Storage'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Calculator',
    description:
      'A fully functional calculator with standard arithmetic operations, memory functions, and keyboard support.',
    icon: Calculator,
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern, responsive personal portfolio website showcasing skills, projects, and contact information.',
    icon: Palette,
    tags: ['React', 'Tailwind CSS', 'Vite'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Music Player UI',
    description:
      'A sleek music player interface with playlist management, playback controls, and animated visualizations.',
    icon: Music,
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-cyan-500 to-indigo-500',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sky-400 font-semibold tracking-wider uppercase text-sm">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg">
            A selection of projects that demonstrate my skills, creativity, and
            passion for web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                <project.icon className="text-white/90 relative z-10" size={56} />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-sky-300 bg-sky-500/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
