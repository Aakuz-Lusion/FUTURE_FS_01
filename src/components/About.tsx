import { motion } from 'framer-motion'
import { Code, Lightbulb, Target, Users } from 'lucide-react'

const highlights = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-documented code.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Turning complex challenges into simple, elegant solutions.',
  },
  {
    icon: Target,
    title: 'Goal Oriented',
    description: 'Focused on delivering results that exceed expectations.',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborating effectively to build amazing products.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sky-400 font-semibold tracking-wider uppercase text-sm">
              About Me
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">
              Building digital experiences that{' '}
              <span className="gradient-text">matter</span>
            </h2>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                Hello! I'm RAJ ALAM, a dedicated and enthusiastic web developer
                based in Kathmandu, Nepal. I have a strong passion for creating
                interactive, responsive, and visually appealing websites that
                provide exceptional user experiences.
              </p>
              <p>
                My journey in web development has equipped me with a solid
                foundation in modern frontend technologies. I enjoy turning
                ideas into reality through code and am constantly learning new
                tools and frameworks to stay ahead in this ever-evolving field.
              </p>
              <p>
                My career goal is to become a proficient full-stack developer
                and contribute to innovative projects that make a positive
                impact. I'm eager to collaborate with talented teams and take on
                challenging opportunities that help me grow professionally.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-card p-6 rounded-2xl hover:bg-slate-800/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
